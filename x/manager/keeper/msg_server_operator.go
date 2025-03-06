package keeper

import (
	"context"
	"fmt"

	"enreach/x/manager/types"

	errorsmod "cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateOperator(goCtx context.Context, msg *types.MsgCreateOperator) (*types.MsgCreateOperatorResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// First check whether the operator has already been created
	_, found := k.GetOperator(ctx, msg.OperatorAccount)
	if found {
		return nil, errorsmod.Wrap(types.ErrElementAlreadyExists, fmt.Sprintf("Operator '%s' already exists", msg.OperatorAccount))
	}

	blockHeight := uint64(ctx.BlockHeight())
	var operator = types.Operator{
		OperatorAccount: msg.OperatorAccount,
		Name:            msg.Name,
		Description:     msg.Description,
		WebsiteUrl:      msg.WebsiteUrl,
		Creator:         msg.OperatorAccount,
		CreateAt:        blockHeight,
		Updator:         msg.OperatorAccount,
		UpdateAt:        blockHeight,
	}

	// Add the operator to the store
	k.AppendOperator(ctx, operator)

	return &types.MsgCreateOperatorResponse{}, nil
}

func (k msgServer) BindOperatorManagerAccount(goCtx context.Context, msg *types.MsgBindOperatorManagerAccount) (*types.MsgBindOperatorManagerAccountResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	operator, found := k.GetOperator(ctx, msg.OperatorAccount)
	if !found {
		return nil, errorsmod.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("Operator '%s' doesn't exist", msg.OperatorAccount))
	}

	// tx caller should be current manager owner
	if msg.OperatorAccount != operator.OperatorAccount {
		return nil, errorsmod.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	// operator account and manager account should be different
	if msg.OperatorAccount == msg.ManagerAccount {
		return nil, errorsmod.Wrap(types.ErrOperatorAndManagerAccountDuplicate, "operator account and manager account should not be the same")
	}

	// Verifys the manager address and signature
	if err := verifyManagerSignature(msg.OperatorAccount, msg.ManagerAccount, msg.ManagerSignature); err != nil {
		return nil, errorsmod.Wrap(types.ErrInvalidSignature, "invalid manager signature")
	}

	// Manager should have already been registered
	manager, found := k.GetManager(ctx, msg.ManagerAccount)
	if !found {
		return nil, errorsmod.Wrap(types.ErrManagerNotRegister, "manager should register first before bind to an operator")
	}

	// Manager should be in the PENDING_BIND state
	if manager.RegisterStatus != string(types.RS_PENDING_BIND) {
		return nil, errorsmod.Wrap(types.ErrManagerAlreadyBind, "manager already bind to other operator")
	}

	blockHeight := uint64(ctx.BlockHeight())
	if len(operator.ManagerAccount) > 0 {
		// Should not bind to the same worker account again
		if operator.ManagerAccount == msg.ManagerAccount {
			return nil, errorsmod.Wrap(types.ErrOperatorAndManagerAccountAlreadyBind, "operator already bind to the same manager, should not bind again")
		} else {
			// Already bind to another manager account, need to unbind the previous manager account first if forceUnbind is set to true
			if msg.ForceUnbind {
				manager.OperatorAccount = ""
				manager.RegisterStatus = string(types.RS_PENDING_BIND)
				manager.Updator = msg.OperatorAccount
				manager.UpdateAt = blockHeight
				k.SetManager(ctx, manager)
			} else {
				return nil, errorsmod.Wrap(types.ErrOperatorAlreadyBind, "operator already bind to another manager, could not unbind since forceUnbind flag is false")
			}
		}
	}

	// Update the Operator in the store
	operator.ManagerAccount = msg.ManagerAccount
	operator.Updator = msg.OperatorAccount
	operator.UpdateAt = blockHeight
	k.SetOperator(ctx, operator)

	// Set the OperatorAccount field of the corresponding manager
	manager.OperatorAccount = msg.OperatorAccount
	manager.RegisterStatus = string(types.RS_PENDING_CONFIG)
	manager.Updator = msg.OperatorAccount
	manager.UpdateAt = blockHeight
	k.SetManager(ctx, manager)

	return &types.MsgBindOperatorManagerAccountResponse{}, nil
}

func verifyManagerSignature(operatorAccount string, managerAccount string, managerSignature []byte) error {
	// // Construct original sig data
	// data := []byte(operatorAccount + managerAccount)
	// msgHash := sdk.Sha256(data)

	// // Decode the manager address
	// workerAccAddr, err := sdk.AccAddressFromBech32(managerAccount)
	// if err != nil {
	// 	return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid manager account: %s", err)
	// }

	// // Recover the pubkey and verify signature
	// pubKey, err := secp256k1.RecoverPubKey(msgHash, managerSignature)
	// if err != nil {
	// 	return errorsmod.Wrapf(types.ErrInvalidSignature, "invalid worker signature: %s", err)
	// }

	// // Verify if the pubkey match
	// if !pubKey.Address().Equals(workerAccAddr) {
	// 	return errorsmod.Wrapf(types.ErrInvalidSignature, "invalid worker signature: public key does not match the signer address")
	// }

	return nil
}

func (k msgServer) SetManagerRegion(goCtx context.Context, msg *types.MsgSetManagerRegion) (*types.MsgSetManagerRegionResponse, error) {
	/// TODO

	return &types.MsgSetManagerRegionResponse{}, nil
}

func (k msgServer) UpdateManagerConnParams(goCtx context.Context, msg *types.MsgUpdateManagerConnParams) (*types.MsgUpdateManagerConnParamsResponse, error) {
	/// TODO

	return &types.MsgUpdateManagerConnParamsResponse{}, nil
}

func (k msgServer) ActivateManager(goCtx context.Context, msg *types.MsgActivateManager) (*types.MsgActivateManagerResponse, error) {
	/// TODO

	return &types.MsgActivateManagerResponse{}, nil
}

func (k msgServer) BindOperatorEVMAccount(goCtx context.Context, msg *types.MsgBindOperatorEVMAccount) (*types.MsgBindOperatorEVMAccountResponse, error) {
	/// TODO

	return &types.MsgBindOperatorEVMAccountResponse{}, nil
}

func verifyEvmSignature(operatorAccount string, evmAccount string, evmSignature []byte) error {
	/// TODO
	return nil
}

func (k msgServer) UpdateOperatorBasicInfo(goCtx context.Context, msg *types.MsgUpdateOperatorBasicInfo) (*types.MsgUpdateOperatorBasicInfoResponse, error) {
	// ctx := sdk.UnwrapSDKContext(goCtx)

	// // Checks that the element exists
	// operator, found := k.GetOperator(ctx, msg.OperatorAddress)
	// if !found {
	// 	return nil, errorsmod.Wrapf(sdkerrors.ErrKeyNotFound, "Operator '%s' doesn't exist", msg.OperatorAddress)
	// }

	// // Checks if the msg signer is the same as the current owner
	// if msg.Signer != operator.Creator || msg.Signer != msg.OperatorAddress {
	// 	return nil, errorsmod.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	// }

	// blockHeight := uint64(ctx.BlockHeight())
	// operator.Name = msg.Name
	// operator.Description = msg.Description
	// operator.WebsiteUrl = msg.WebsiteUrl
	// operator.Updator = msg.Signer
	// operator.UpdateAt = blockHeight

	// k.SetOperator(ctx, operator)

	return &types.MsgUpdateOperatorBasicInfoResponse{}, nil
}
