package keeper

import (
	"context"

	"enreach/x/manager/types"

	errorsmod "cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateSuperior(goCtx context.Context, msg *types.MsgCreateSuperior) (*types.MsgCreateSuperiorResponse, error) {
	// tx caller must be authority or admin account
	err := k.EnsureAuthorityOrAdminAccount(goCtx, msg.Signer)
	if err != nil {
		return nil, err
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

	ctx.EventManager().EmitEvent(
		sdk.NewEvent(types.EventTypeSuperiorCreated,
			sdk.NewAttribute(sdk.AttributeKeyModule, types.ModuleName),
			sdk.NewAttribute(types.AttributeKeyTxSigner, msg.Signer),
			sdk.NewAttribute(types.AttributeKeySuperior, msg.Account),
		),
	)
	return &types.MsgCreateSuperiorResponse{}, nil
}

func (k msgServer) UpdateSuperior(goCtx context.Context, msg *types.MsgUpdateSuperior) (*types.MsgUpdateSuperiorResponse, error) {
	// tx caller must be authority or admin account
	err := k.EnsureAuthorityOrAdminAccount(goCtx, msg.Signer)
	if err != nil {
		return nil, err
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

	ctx.EventManager().EmitEvent(
		sdk.NewEvent(types.EventTypeSuperiorUpdated,
			sdk.NewAttribute(sdk.AttributeKeyModule, types.ModuleName),
			sdk.NewAttribute(types.AttributeKeyTxSigner, msg.Signer),
			sdk.NewAttribute(types.AttributeKeySuperior, msg.Account),
		),
	)
	return &types.MsgUpdateSuperiorResponse{}, nil
}
