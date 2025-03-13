package keeper

import (
	"context"

	"enreach/x/workload/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) CreateWorkload(goCtx context.Context, msg *types.MsgCreateWorkload) (*types.MsgCreateWorkloadResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check whether the manager account exist

	// Check whether the manager account is allowed to create workload

	// Check whether the nodeID exist

	// Check whether the node is allowed to report workload

	blockHeight := uint64(ctx.BlockHeight())
	var workload = types.Workload{
		ManagerAccount: msg.ManagerAccount,
		Epoch:          msg.Epoch,
		NodeID:         msg.NodeID,
		Score:          msg.Score,
		CreateAt:       blockHeight,
	}

	id := k.AppendWorkload(ctx, workload)

	return &types.MsgCreateWorkloadResponse{Id: id}, nil
}
