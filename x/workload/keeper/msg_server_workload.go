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

func (k msgServer) CreateWorkload(goCtx context.Context, msg *types.MsgCreateWorkload) (*types.MsgCreateWorkloadResponse, error) {
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

	// Check whether the manager account is allowed to create workload
	if manager.WorkingStatus == string(managertypes.WS_BLOCK) {
		return nil, errorsmod.Wrapf(types.ErrManagerBlocked, "Manager '%s' is blocked", msg.ManagerAccount)
	}

	// Check whether the nodeID exist
	nodeResp, err := k.edgenodeKeeper.Node(ctx, &edgenodetypes.QueryGetNodeRequest{NodeID: msg.NodeID})
	if err != nil {
		return nil, errorsmod.Wrapf(types.ErrNodeNotExist, "Node '%s' doesn't exist", msg.NodeID)
	}

	// Node should have been activate
	node := nodeResp.Node
	if node.RegisterStatus != string(edgenodetypes.RS_ACTIVATE) {
		return nil, errorsmod.Wrapf(types.ErrNodeNotActivate, "Node '%s' is not activate yet", msg.NodeID)
	}

	// Check whether the manager region and node region is match
	if manager.RegionCode != node.RegionCode {
		return nil, errorsmod.Wrapf(types.ErrRegionNotMatch,
			"Node region code '%s' doesn't match with manager region code '%s'",
			node.RegionCode, manager.RegionCode)
	}

	blockHeight := uint64(ctx.BlockHeight())
	var workload = types.Workload{
		ManagerAccount: msg.ManagerAccount,
		Epoch:          msg.Epoch,
		NodeID:         msg.NodeID,
		Score:          msg.Score,
		CreateAt:       blockHeight,
	}

	id := k.AppendWorkload(ctx, workload)

	ctx.EventManager().EmitEvent(
		sdk.NewEvent(types.EventTypeWorkloadCreated,
			sdk.NewAttribute(sdk.AttributeKeyModule, types.ModuleName),
			sdk.NewAttribute(types.AttributeKeyTxSigner, msg.ManagerAccount),
			sdk.NewAttribute(types.AttributeKeyNodeID, msg.NodeID),
			sdk.NewAttribute(types.AttributeKeyEpoch, strconv.FormatUint(msg.Epoch, 10)),
			sdk.NewAttribute(types.AttributeKeyScore, strconv.FormatUint(msg.Score, 10)),
			sdk.NewAttribute(types.AttributeKeyWorkloadID, strconv.FormatUint(id, 10)),
		),
	)

	return &types.MsgCreateWorkloadResponse{Id: id}, nil
}
