package keeper

import (
	"context"
	"fmt"

	"enreach/x/manager/types"

	errorsmod "cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateManager(goCtx context.Context, msg *types.MsgCreateManager) (*types.MsgCreateManagerResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var manager = types.Manager{
		Creator:    msg.Creator,
		ManagerId:  msg.ManagerId,
		EvmAddress: msg.EvmAddress,
		RegionCode: msg.RegionCode,
		Status:     msg.Status,
	}

	id := k.AppendManager(
		ctx,
		manager,
	)

	return &types.MsgCreateManagerResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateManager(goCtx context.Context, msg *types.MsgUpdateManager) (*types.MsgUpdateManagerResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var manager = types.Manager{
		Creator:    msg.Creator,
		Id:         msg.Id,
		ManagerId:  msg.ManagerId,
		EvmAddress: msg.EvmAddress,
		RegionCode: msg.RegionCode,
		Status:     msg.Status,
	}

	// Checks that the element exists
	val, found := k.GetManager(ctx, msg.Id)
	if !found {
		return nil, errorsmod.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, errorsmod.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetManager(ctx, manager)

	return &types.MsgUpdateManagerResponse{}, nil
}

func (k msgServer) DeleteManager(goCtx context.Context, msg *types.MsgDeleteManager) (*types.MsgDeleteManagerResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetManager(ctx, msg.Id)
	if !found {
		return nil, errorsmod.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, errorsmod.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveManager(ctx, msg.Id)

	return &types.MsgDeleteManagerResponse{}, nil
}
