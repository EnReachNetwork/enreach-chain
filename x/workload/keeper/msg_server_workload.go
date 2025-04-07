package keeper

import (
	"context"
	"strconv"

	edgenodetypes "enreach/x/edgenode/types"
	managertypes "enreach/x/manager/types"
	"enreach/x/workload/types"

	errorsmod "cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) SubmitWorkreports(goCtx context.Context, msg *types.MsgSubmitWorkreports) (*types.MsgSubmitWorkreportsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check whether the manager account exist
	// Manager should have already been registered
	managerResp, err := k.managerKeeper.Manager(ctx, &managertypes.QueryGetManagerRequest{ManagerAccount: msg.ManagerAccount})
	if err != nil {
		return nil, errorsmod.Wrapf(types.ErrManagerNotExist, "Manager '%s' doesn't exist", msg.ManagerAccount)
	}

	// Manager should have been activate
	manager := managerResp.Manager
	if manager.RegisterStatus != string(managertypes.RS_ACTIVATE) {
		return nil, errorsmod.Wrapf(types.ErrManagerNotActivate, "Manager '%s' is not activate yet", msg.ManagerAccount)
	}

	// Check whether the manager account is allowed to submit workreports
	if manager.WorkingStatus == string(managertypes.WS_BLOCK) {
		return nil, errorsmod.Wrapf(types.ErrManagerBlocked, "Manager '%s' is blocked", msg.ManagerAccount)
	}

	// The submitted epoch must be the previous epoch, since the current epoch is not yet finalized.
	currentEpochInfo, _ := k.GetCurrentEpoch(ctx)
	currentEpoch := currentEpochInfo.Number
	previousEpoch := currentEpoch - 1
	if currentEpoch == 1 {
		return nil, errorsmod.Wrap(types.ErrInvalidEpoch, "Epoch_1 is not allowed to submit workreports")
	}
	if previousEpoch != msg.Epoch {
		return nil, errorsmod.Wrapf(types.ErrInvalidEpoch, "Epoch must be the previous epoch (%d)", previousEpoch)
	}

	// Validate all nodes status
	for _, nodescore := range msg.NodeScores {
		// Check whether the nodeID exist
		nodeResp, err := k.edgenodeKeeper.Node(ctx, &edgenodetypes.QueryGetNodeRequest{NodeID: nodescore.NodeID})
		if err != nil {
			return nil, errorsmod.Wrapf(types.ErrNodeNotExist, "Node '%s' doesn't exist", nodescore.NodeID)
		}

		// Node should have been activate
		node := nodeResp.Node
		if node.RegisterStatus != string(edgenodetypes.RS_ACTIVATE) {
			return nil, errorsmod.Wrapf(types.ErrNodeNotActivate, "Node '%s' is not activate yet", nodescore.NodeID)
		}

		// Check whether the manager region and node region is match
		if manager.RegionCode != node.RegionCode {
			return nil, errorsmod.Wrapf(types.ErrRegionNotMatch,
				"Node region code '%s' doesn't match with manager region code '%s'",
				node.RegionCode, manager.RegionCode)
		}
	}

	// Append or update workreport for every node
	blockHeight := uint64(ctx.BlockHeight())
	for _, nodescore := range msg.NodeScores {

		managerNodeScoreMap, found := k.GetNodeWorkreport(ctx, msg.Epoch, nodescore.NodeID)
		if found {
			// There are existing entry for this node
			if nodeScoreEntry, ok := managerNodeScoreMap.ManagerScoreMap[msg.ManagerAccount]; ok {
				// There are existing entry for this manager, update the score and updateAt field
				nodeScoreEntry.Score = nodescore.Score
				nodeScoreEntry.UpdateAt = blockHeight
			} else {
				// There are no existing entry for this manager, append a new entry
				managerNodeScoreMap.ManagerScoreMap[msg.ManagerAccount] = &types.NodeScoreDB{
					Score:    nodescore.Score,
					CreateAt: blockHeight,
					UpdateAt: blockHeight,
				}
			}

			// Update to the store
			k.SetNodeWorkreport(ctx, msg.Epoch, nodescore.NodeID, &managerNodeScoreMap)
		} else {
			// No existing entry, create a new scores map
			nodeScoresMap := make(map[string]*types.NodeScoreDB)
			nodeScoresMap[msg.ManagerAccount] = &types.NodeScoreDB{
				Score:    nodescore.Score,
				CreateAt: blockHeight,
				UpdateAt: blockHeight,
			}

			// Append to the store
			k.AppendNodeWorkreport(ctx, msg.Epoch, nodescore.NodeID, &types.ManagerNodeScoreMap{ManagerScoreMap: nodeScoresMap})
		}
	}

	// Emit event
	ctx.EventManager().EmitEvent(
		sdk.NewEvent(types.EventTypeWorkreportsSubmitted,
			sdk.NewAttribute(sdk.AttributeKeyModule, types.ModuleName),
			sdk.NewAttribute(types.AttributeKeyTxSigner, msg.ManagerAccount),
			sdk.NewAttribute(types.AttributeKeyEpoch, strconv.FormatUint(msg.Epoch, 10)),
			sdk.NewAttribute(types.AttributeKeyNodeScoresCount, strconv.FormatUint(uint64(len(msg.NodeScores)), 10)),
		),
	)

	return &types.MsgSubmitWorkreportsResponse{}, nil
}

func (k msgServer) UpdateWorkreportProcessBatchSize(goCtx context.Context, msg *types.MsgUpdateWorkreportProcessBatchSize) (*types.MsgUpdateWorkreportProcessBatchSizeResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// tx caller must be superior
	superior, isFound := k.GetSuperior(ctx)
	if !isFound {
		return nil, types.ErrSuperiorNotSet
	}
	if superior.Account != msg.Signer {
		return nil, errorsmod.Wrap(sdkerrors.ErrUnauthorized, "Only superior can execute this call")
	}

	// Get the existing batch size
	oldBatchSize := k.GetWorkreportProcessBatchSize(ctx)

	// Set to the store
	k.SetWorkreportProcessBatchSize(ctx, msg.BatchSize)

	// Emit the event
	ctx.EventManager().EmitEvent(
		sdk.NewEvent(types.EventTypeWorkreportProcessBatchSizeSet,
			sdk.NewAttribute(sdk.AttributeKeyModule, types.ModuleName),
			sdk.NewAttribute(types.AttributeKeyTxSigner, msg.Signer),
			sdk.NewAttribute(types.AttributeKeyOldBatchSize, strconv.FormatUint(oldBatchSize, 10)),
			sdk.NewAttribute(types.AttributeKeyNewBatchSize, strconv.FormatUint(msg.BatchSize, 10)),
		),
	)
	return &types.MsgUpdateWorkreportProcessBatchSizeResponse{}, nil
}

func (k msgServer) UpdateHistoryEpochDataDepth(goCtx context.Context, msg *types.MsgUpdateHistoryEpochDataDepth) (*types.MsgUpdateHistoryEpochDataDepthResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// tx caller must be superior
	superior, isFound := k.GetSuperior(ctx)
	if !isFound {
		return nil, types.ErrSuperiorNotSet
	}
	if superior.Account != msg.Signer {
		return nil, errorsmod.Wrap(sdkerrors.ErrUnauthorized, "Only superior can execute this call")
	}

	// Get the existing depth
	oldDepth := k.GetHistoryEpochDataDepth(ctx)

	// Set to the store
	k.SetHistoryEpochDataDepth(ctx, msg.Depth)

	// Emit the event
	ctx.EventManager().EmitEvent(
		sdk.NewEvent(types.EventTypeWorkreportProcessBatchSizeSet,
			sdk.NewAttribute(sdk.AttributeKeyModule, types.ModuleName),
			sdk.NewAttribute(types.AttributeKeyTxSigner, msg.Signer),
			sdk.NewAttribute(types.AttributeKeyOldDepth, strconv.FormatUint(oldDepth, 10)),
			sdk.NewAttribute(types.AttributeKeyNewDepth, strconv.FormatUint(msg.Depth, 10)),
		),
	)
	return &types.MsgUpdateHistoryEpochDataDepthResponse{}, nil
}
