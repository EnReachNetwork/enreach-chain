package keeper

import (
	"context"
	"fmt"

	"enreach/x/workload/types"

	errorsmod "cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateWorkload(goCtx context.Context, msg *types.MsgCreateWorkload) (*types.MsgCreateWorkloadResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var workload = types.Workload{
		Creator:   msg.Creator,
		Epoch:     msg.Epoch,
		MinerId:   msg.MinerId,
		Score:     msg.Score,
		ManagerId: msg.ManagerId,
	}

	id := k.AppendWorkload(
		ctx,
		workload,
	)

	return &types.MsgCreateWorkloadResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateWorkload(goCtx context.Context, msg *types.MsgUpdateWorkload) (*types.MsgUpdateWorkloadResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var workload = types.Workload{
		Creator:   msg.Creator,
		Id:        msg.Id,
		Epoch:     msg.Epoch,
		MinerId:   msg.MinerId,
		Score:     msg.Score,
		ManagerId: msg.ManagerId,
	}

	// Checks that the element exists
	val, found := k.GetWorkload(ctx, msg.Id)
	if !found {
		return nil, errorsmod.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, errorsmod.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetWorkload(ctx, workload)

	return &types.MsgUpdateWorkloadResponse{}, nil
}

func (k msgServer) DeleteWorkload(goCtx context.Context, msg *types.MsgDeleteWorkload) (*types.MsgDeleteWorkloadResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetWorkload(ctx, msg.Id)
	if !found {
		return nil, errorsmod.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, errorsmod.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveWorkload(ctx, msg.Id)

	return &types.MsgDeleteWorkloadResponse{}, nil
}
