package keeper

import (
	"context"
	"fmt"

	"enreach/x/registry/types"

	errorsmod "cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateRegion(goCtx context.Context, msg *types.MsgCreateRegion) (*types.MsgCreateRegionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var region = types.Region{
		Creator:     msg.Creator,
		Code:        msg.Code,
		Name:        msg.Name,
		Description: msg.Description,
	}

	id := k.AppendRegion(
		ctx,
		region,
	)

	return &types.MsgCreateRegionResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateRegion(goCtx context.Context, msg *types.MsgUpdateRegion) (*types.MsgUpdateRegionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var region = types.Region{
		Creator:     msg.Creator,
		Id:          msg.Id,
		Code:        msg.Code,
		Name:        msg.Name,
		Description: msg.Description,
	}

	// Checks that the element exists
	val, found := k.GetRegion(ctx, msg.Id)
	if !found {
		return nil, errorsmod.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, errorsmod.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetRegion(ctx, region)

	return &types.MsgUpdateRegionResponse{}, nil
}

func (k msgServer) DeleteRegion(goCtx context.Context, msg *types.MsgDeleteRegion) (*types.MsgDeleteRegionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetRegion(ctx, msg.Id)
	if !found {
		return nil, errorsmod.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, errorsmod.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveRegion(ctx, msg.Id)

	return &types.MsgDeleteRegionResponse{}, nil
}
