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

func (k msgServer) SubmitCheatStatusCR(goCtx context.Context, msg *types.MsgSubmitCheatStatusCR) (*types.MsgSubmitCheatStatusCRResponse, error) {
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
	currentEraInfo, _ := k.GetCurrentEra(ctx)
	currentEra := currentEraInfo.Number
	previousEra := currentEra - 1
	if currentEra == 1 {
		return nil, errorsmod.Wrap(types.ErrInvalidEra, "Era_1 is not allowed to submit cheat status change request data")
	}
	if previousEra != msg.Era {
		return nil, errorsmod.Wrapf(types.ErrInvalidEra, "Era must be the previous era (%d)", previousEra)
	}

	// Validate all nodes status
	for _, nodeData := range msg.NodeDatas {
		// Check whether the nodeID exist
		nodeResp, err := k.edgenodeKeeper.Node(ctx, &edgenodetypes.QueryGetNodeRequest{NodeID: nodeData.NodeID})
		if err != nil {
			return nil, errorsmod.Wrapf(types.ErrNodeNotExist, "Node '%s' doesn't exist", nodeData.NodeID)
		}

		// Node should have been activate
		node := nodeResp.Node
		if node.RegisterStatus != string(edgenodetypes.RS_ACTIVATE) {
			return nil, errorsmod.Wrapf(types.ErrNodeNotActivate, "Node '%s' is not activate yet", nodeData.NodeID)
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
	for _, nodeData := range msg.NodeDatas {

		cheatStatusCRDataMap, found := k.GetCheatStatusCRData(ctx, msg.Era, nodeData.NodeID)
		if found {
			// There are existing entry for this node
			if nodeEntry, ok := cheatStatusCRDataMap.Data[msg.ManagerAccount]; ok {
				// There are existing entry for this manager, update the score and updateAt field
				nodeEntry.CheatStatus = nodeData.CheatStatus
				nodeEntry.UpdateAt = blockHeight
			} else {
				// There are no existing entry for this manager, append a new entry
				cheatStatusCRDataMap.Data[msg.ManagerAccount] = &types.CheatStatusCRDB{
					CheatStatus: nodeData.CheatStatus,
					CreateAt:    blockHeight,
					UpdateAt:    blockHeight,
				}
			}

			// Update to the store
			k.SetCheatStatusCRData(ctx, msg.Era, nodeData.NodeID, &cheatStatusCRDataMap)
		} else {
			// No existing entry, create a new entry
			newPointChangeDataMap := make(map[string]*types.CheatStatusCRDB)
			newPointChangeDataMap[msg.ManagerAccount] = &types.CheatStatusCRDB{
				CheatStatus: nodeData.CheatStatus,
				CreateAt:    blockHeight,
				UpdateAt:    blockHeight,
			}

			// Append to the store
			k.AppendCheatStatusCRData(ctx, msg.Era, nodeData.NodeID, &types.CheatStatusCRMapDB{Data: newPointChangeDataMap})
		}
	}

	// Emit event
	ctx.EventManager().EmitEvent(
		sdk.NewEvent(types.EventTypeCheatStatusCRDataSubmitted,
			sdk.NewAttribute(sdk.AttributeKeyModule, types.ModuleName),
			sdk.NewAttribute(types.AttributeKeyTxSigner, msg.ManagerAccount),
			sdk.NewAttribute(types.AttributeKeyEra, strconv.FormatUint(msg.Era, 10)),
			sdk.NewAttribute(types.AttributeKeyNodeDatasCount, strconv.FormatUint(uint64(len(msg.NodeDatas)), 10)),
		),
	)

	return &types.MsgSubmitCheatStatusCRResponse{}, nil
}
