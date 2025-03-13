package keeper

import (
	"context"

	"enreach/x/registry/types"

	errorsmod "cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateSuperior(goCtx context.Context, msg *types.MsgCreateSuperior) (*types.MsgCreateSuperiorResponse, error) {
	// tx caller must be authority
	if k.GetAuthority() != msg.Signer {
		return nil, errorsmod.Wrap(sdkerrors.ErrUnauthorized, "Only authority can execute this call")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetSuperior(ctx)
	if isFound {
		return nil, errorsmod.Wrap(sdkerrors.ErrInvalidRequest, "superior already set")
	}

	blockHeight := uint64(ctx.BlockHeight())
	var superior = types.Superior{
		Account:  msg.Account,
		Creator:  msg.Signer,
		CreateAt: blockHeight,
		Updator:  msg.Signer,
		UpdateAt: blockHeight,
	}

	k.SetSuperior(ctx, superior)
	return &types.MsgCreateSuperiorResponse{}, nil
}

func (k msgServer) UpdateSuperior(goCtx context.Context, msg *types.MsgUpdateSuperior) (*types.MsgUpdateSuperiorResponse, error) {
	// tx caller must be authority
	if k.GetAuthority() != msg.Signer {
		return nil, errorsmod.Wrap(sdkerrors.ErrUnauthorized, "Only authority can execute this call")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	superior, isFound := k.GetSuperior(ctx)
	if !isFound {
		return nil, errorsmod.Wrap(sdkerrors.ErrKeyNotFound, "superior not set")
	}

	superior.Account = msg.Account
	superior.Updator = msg.Signer
	superior.UpdateAt = uint64(ctx.BlockHeight())
	k.SetSuperior(ctx, superior)

	return &types.MsgUpdateSuperiorResponse{}, nil
}
