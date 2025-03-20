package keeper

import (
	"context"
	"fmt"

	"enreach/x/edgenode/types"

	errorsmod "cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/crypto"
)

func (k msgServer) CreateUser(goCtx context.Context, msg *types.MsgCreateUser) (*types.MsgCreateUserResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// tx caller must be superior
	superior, isFound := k.GetSuperior(ctx)
	if !isFound {
		return nil, types.ErrSuperiorNotSet
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

	ctx.EventManager().EmitEvent(
		sdk.NewEvent(types.EventTypeUserCreated,
			sdk.NewAttribute(sdk.AttributeKeyModule, types.ModuleName),
			sdk.NewAttribute(types.AttributeKeyTxSigner, msg.Signer),
			sdk.NewAttribute(types.AttributeKeyUserID, msg.UserID),
		),
	)
	return &types.MsgCreateUserResponse{}, nil
}

func (k msgServer) BindUserEVMAccount(goCtx context.Context, msg *types.MsgBindUserEVMAccount) (*types.MsgBindUserEVMAccountResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// tx caller must be superior
	superior, isFound := k.GetSuperior(ctx)
	if !isFound {
		return nil, types.ErrSuperiorNotSet
	}
	if superior.Account != msg.Signer {
		return nil, errorsmod.Wrap(sdkerrors.ErrUnauthorized, "Only superior can execute this call")
	}

	// Checks that the element exists
	user, found := k.GetUser(ctx, msg.UserID)
	if !found {
		return nil, errorsmod.Wrapf(sdkerrors.ErrKeyNotFound, "key %s doesn't exist", msg.UserID)
	}

	// Verify the EVM Signature to make sure the caller owns the EVM account
	if err := verifyEvmSignature(msg.UserID, msg.EvmAccount, msg.EvmSignature); err != nil {
		return nil, errorsmod.Wrapf(types.ErrInvalidSignature, "Invalid evm signature: %s", err)
	}

	// Update to the store
	user.EvmAccount = msg.EvmAccount
	user.Updator = msg.Signer
	user.UpdateAt = uint64(ctx.BlockHeight())
	k.SetUser(ctx, user)

	ctx.EventManager().EmitEvent(
		sdk.NewEvent(types.EventTypeUserEVMAccountBinded,
			sdk.NewAttribute(sdk.AttributeKeyModule, types.ModuleName),
			sdk.NewAttribute(types.AttributeKeyTxSigner, msg.Signer),
			sdk.NewAttribute(types.AttributeKeyUserID, msg.UserID),
			sdk.NewAttribute(types.AttributeKeyEvmAccount, msg.EvmAccount),
		),
	)
	return &types.MsgBindUserEVMAccountResponse{}, nil
}

func verifyEvmSignature(userID string, evmAccount string, evmSignature []byte) error {

	// Build the original sig raw message
	rawMessage := userID + ":" + evmAccount

	// Check and adjust the signature recovery byte
	v := evmSignature[64]
	evmSignatureAdjust := append([]byte{}, evmSignature...)
	if v == 27 || v == 28 {
		evmSignatureAdjust[64] = v - 27 // Convert to 0 or 1
	} else if v >= 35 {
		evmSignatureAdjust[64] = (v - 35) % 2 // Process EIP-155 'v' value: v = chainId * 2 + 35 + 0/1
	}

	// Build the final signed message
	prefix := fmt.Sprintf("\x19Ethereum Signed Message:\n%d", len([]byte(rawMessage)))
	toSignedMessage := append([]byte(prefix), []byte(rawMessage)...)
	msgHash := crypto.Keccak256([]byte(toSignedMessage))

	// Recover the evm account pubkey from the signature
	pubKey, err := crypto.SigToPub(msgHash, evmSignatureAdjust)
	if err != nil {
		return errorsmod.Wrapf(types.ErrInvalidSignature, "Failed to recover public key: %s", err)
	}

	// Verify the pubkey matchs the designated evm account
	recoveredAddr := crypto.PubkeyToAddress(*pubKey)
	evmAddr := common.HexToAddress(evmAccount)
	if recoveredAddr != evmAddr {
		return errorsmod.Wrapf(types.ErrInvalidSignature,
			"Address mismatch: expected %s, got %s", evmAddr.Hex(), recoveredAddr.Hex())
	}

	return nil
}
