package keeper

import (
	"context"
	"strconv"

	edgenodetypes "enreach/x/edgenode/types"
	managertypes "enreach/x/manager/types"
	"enreach/x/workload/types"

	errorsmod "cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) SubmitReputationPointChangeData(goCtx context.Context, msg *types.MsgSubmitReputationPointChangeData) (*types.MsgSubmitReputationPointChangeDataResponse, error) {
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

	// The submitted era must be the previous era, since the current era is not yet finalized.
	currentEra := types.GetCurrentEra(goCtx)
	previousEra := currentEra - 1
	if currentEra == 1 {
		return nil, errorsmod.Wrap(types.ErrInvalidEra, "Era_1 is not allowed to submit reputation point data")
	}
	if previousEra != msg.Era {
		return nil, errorsmod.Wrapf(types.ErrInvalidEra, "Era must be the previous era (%d)", previousEra)
	}

	// Validate all nodes status
	for _, nodescore := range msg.NodePoints {
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

	// Append or update reputation point change data for every node
	blockHeight := uint64(ctx.BlockHeight())
	for _, nodePoint := range msg.NodePoints {

		pointChangeDataMap, found := k.GetReputationPointChangeData(ctx, msg.Era, nodePoint.NodeID)
		if found {
			// There are existing entry for this node
			if nodePointEntry, ok := pointChangeDataMap.Data[msg.ManagerAccount]; ok {
				// There are existing entry for this manager, update the score and updateAt field
				nodePointEntry.DeltaPoint = nodePoint.DeltaPoint
				nodePointEntry.UpdateAt = blockHeight
			} else {
				// There are no existing entry for this manager, append a new entry
				pointChangeDataMap.Data[msg.ManagerAccount] = &types.ReputationPointChangeRawDataDB{
					DeltaPoint: nodePoint.DeltaPoint,
					CreateAt:   blockHeight,
					UpdateAt:   blockHeight,
				}
			}

			// Update to the store
			k.SetReputationPointChangeData(ctx, msg.Era, nodePoint.NodeID, &pointChangeDataMap)
		} else {
			// No existing entry, create a new entry
			newPointChangeDataMap := make(map[string]*types.ReputationPointChangeRawDataDB)
			newPointChangeDataMap[msg.ManagerAccount] = &types.ReputationPointChangeRawDataDB{
				DeltaPoint: nodePoint.DeltaPoint,
				CreateAt:   blockHeight,
				UpdateAt:   blockHeight,
			}

			// Append to the store
			k.AppendReputationPointChangeData(ctx, msg.Era, nodePoint.NodeID, &types.ReputationPointChangeRawDataMapDB{Data: newPointChangeDataMap})
		}
	}

	// Emit event
	ctx.EventManager().EmitEvent(
		sdk.NewEvent(types.EventTypeReputationPointChangeDataSubmitted,
			sdk.NewAttribute(sdk.AttributeKeyModule, types.ModuleName),
			sdk.NewAttribute(types.AttributeKeyTxSigner, msg.ManagerAccount),
			sdk.NewAttribute(types.AttributeKeyEra, strconv.FormatUint(msg.Era, 10)),
			sdk.NewAttribute(types.AttributeKeyNodePointsCount, strconv.FormatUint(uint64(len(msg.NodePoints)), 10)),
		),
	)

	return &types.MsgSubmitReputationPointChangeDataResponse{}, nil
}
