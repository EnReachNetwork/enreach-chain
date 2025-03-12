package keeper

import (
	"context"

	"enreach/x/edgenode/types"

	errorsmod "cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateUser(goCtx context.Context, msg *types.MsgCreateUser) (*types.MsgCreateUserResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// tx caller must be superior
	superior, isFound := k.GetSuperior(ctx)
	if !isFound {
		return nil, errorsmod.Wrap(sdkerrors.ErrKeyNotFound, "superior not set")
	}
	if superior.Account != msg.Signer {
		return nil, errorsmod.Wrap(sdkerrors.ErrUnauthorized, "Only superior can execute this call")
	}

	// Check duplicate user
	_, found := k.GetUser(ctx, msg.UserID)
	if found {
		return nil, errorsmod.Wrapf(types.ErrElementAlreadyExists, "User '%s' already exist", msg.UserID)
	}

	// Append to the store
	blockHeight := uint64(ctx.BlockHeight())
	var user = types.User{
		UserID:   msg.UserID,
		Creator:  msg.Signer,
		CreateAt: blockHeight,
		Updator:  msg.Signer,
		UpdateAt: blockHeight,
	}

	k.AppendUser(ctx, user)

	return &types.MsgCreateUserResponse{}, nil
}

func (k msgServer) BindUserEVMAccount(goCtx context.Context, msg *types.MsgBindUserEVMAccount) (*types.MsgBindUserEVMAccountResponse, error) {
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
	user, found := k.GetUser(ctx, msg.UserID)
	if !found {
		return nil, errorsmod.Wrapf(sdkerrors.ErrKeyNotFound, "key %s doesn't exist", msg.UserID)
	}

	/// TODO: Verify EVM signature

	// Update to the store
	user.EvmAccount = msg.EvmAccount
	user.Updator = msg.Signer
	user.UpdateAt = uint64(ctx.BlockHeight())

	k.SetUser(ctx, user)

	return &types.MsgBindUserEVMAccountResponse{}, nil
}
