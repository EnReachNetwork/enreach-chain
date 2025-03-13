package keeper

import (
	"context"

	"enreach/x/registry/types"

	errorsmod "cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateRegion(goCtx context.Context, msg *types.MsgCreateRegion) (*types.MsgCreateRegionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// tx caller must be superior
	superior, isFound := k.GetSuperior(ctx)
	if !isFound {
		return nil, errorsmod.Wrap(sdkerrors.ErrKeyNotFound, "superior not set")
	}
	if superior.Account != msg.Signer {
		return nil, errorsmod.Wrap(sdkerrors.ErrUnauthorized, "Only superior can execute this call")
	}

	// Check duplicate region
	_, found := k.GetRegion(ctx, msg.Code)
	if found {
		return nil, errorsmod.Wrapf(types.ErrElementAlreadyExists, "Region '%s' already exist", msg.Code)
	}

	// Append to the store
	blockHeight := uint64(ctx.BlockHeight())
	var region = types.Region{
		Code:        msg.Code,
		Name:        msg.Name,
		Description: msg.Description,
		Creator:     msg.Signer,
		CreateAt:    blockHeight,
		Updator:     msg.Signer,
		UpdateAt:    blockHeight,
	}
	k.AppendRegion(ctx, region)

	return &types.MsgCreateRegionResponse{}, nil
}

func (k msgServer) UpdateRegion(goCtx context.Context, msg *types.MsgUpdateRegion) (*types.MsgUpdateRegionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// tx caller must be superior
	superior, isFound := k.GetSuperior(ctx)
	if !isFound {
		return nil, errorsmod.Wrap(sdkerrors.ErrKeyNotFound, "superior not set")
	}
	if superior.Account != msg.Signer {
		return nil, errorsmod.Wrap(sdkerrors.ErrUnauthorized, "Only superior can execute this call")
	}

	// Checks that the element exists
	region, found := k.GetRegion(ctx, msg.Code)
	if !found {
		return nil, errorsmod.Wrapf(sdkerrors.ErrKeyNotFound, "Region '%s' doesn't exist", msg.Code)
	}

	// Update and set to the store
	region.Name = msg.Name
	region.Description = msg.Description
	region.Updator = msg.Signer
	region.UpdateAt = uint64(ctx.BlockHeight())
	k.SetRegion(ctx, region)

	return &types.MsgUpdateRegionResponse{}, nil
}

func (k msgServer) DeleteRegion(goCtx context.Context, msg *types.MsgDeleteRegion) (*types.MsgDeleteRegionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// tx caller must be superior
	superior, isFound := k.GetSuperior(ctx)
	if !isFound {
		return nil, errorsmod.Wrap(sdkerrors.ErrKeyNotFound, "superior not set")
	}
	if superior.Account != msg.Signer {
		return nil, errorsmod.Wrap(sdkerrors.ErrUnauthorized, "Only superior can execute this call")
	}

	// Checks that the element exists
	_, found := k.GetRegion(ctx, msg.Code)
	if !found {
		return nil, errorsmod.Wrapf(sdkerrors.ErrKeyNotFound, "Region '%s' doesn't exist", msg.Code)
	}

	// Remove from the store
	k.RemoveRegion(ctx, msg.Code)

	return &types.MsgDeleteRegionResponse{}, nil
}
