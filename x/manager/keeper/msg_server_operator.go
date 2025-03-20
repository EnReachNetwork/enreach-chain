package keeper

import (
	"context"
	"encoding/base64"
	"strconv"

	"enreach/x/manager/types"
	registrytypes "enreach/x/registry/types"

	errorsmod "cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateOperator(goCtx context.Context, msg *types.MsgCreateOperator) (*types.MsgCreateOperatorResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// First check whether the operator has already been created
	_, found := k.GetOperator(ctx, msg.OperatorAccount)
	if found {
		return nil, errorsmod.Wrapf(types.ErrElementAlreadyExists, "Operator '%s' already exists", msg.OperatorAccount)
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

	ctx.EventManager().EmitEvent(
		sdk.NewEvent(types.EventTypeOperatorCreated,
			sdk.NewAttribute(sdk.AttributeKeyModule, types.ModuleName),
			sdk.NewAttribute(types.AttributeKeyTxSigner, msg.OperatorAccount),
			sdk.NewAttribute(types.AttributeKeyOperatorAccount, msg.OperatorAccount),
		),
	)

	return &types.MsgCreateOperatorResponse{}, nil
}

func (k msgServer) BindOperatorManagerAccount(goCtx context.Context, msg *types.MsgBindOperatorManagerAccount) (*types.MsgBindOperatorManagerAccountResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	operator, found := k.GetOperator(ctx, msg.OperatorAccount)
	if !found {
		return nil, errorsmod.Wrapf(sdkerrors.ErrKeyNotFound, "Operator '%s' doesn't exist", msg.OperatorAccount)
	}

	// tx caller should be current operator owner
	if msg.OperatorAccount != operator.OperatorAccount {
		return nil, errorsmod.Wrap(sdkerrors.ErrUnauthorized, "Incorrect owner")
	}

	// operator account and manager account should be different
	if msg.OperatorAccount == msg.ManagerAccount {
		return nil, errorsmod.Wrap(types.ErrOperatorAndManagerAccountDuplicate, "Operator account and manager account should not be the same")
	}

	// Verifys the manager address and signature
	if err := verifyManagerSignature(k, ctx, msg.OperatorAccount, msg.ManagerAccount, msg.ManagerSignature); err != nil {
		return nil, errorsmod.Wrapf(types.ErrInvalidSignature, "Invalid manager signature:%s", err)
	}

	// Manager should have already been registered
	manager, found := k.GetManager(ctx, msg.ManagerAccount)
	if !found {
		return nil, errorsmod.Wrap(types.ErrManagerNotRegister, "Manager should register first before bind to an operator")
	}

	// Manager should be in the PENDING_BIND state
	if manager.RegisterStatus != string(types.RS_PENDING_BIND) {
		return nil, errorsmod.Wrap(types.ErrManagerAlreadyBind, "Manager already bind to other operator")
	}

	blockHeight := uint64(ctx.BlockHeight())
	if len(operator.ManagerAccount) > 0 {
		// Should not bind to the same worker account again
		if operator.ManagerAccount == msg.ManagerAccount {
			return nil, errorsmod.Wrap(types.ErrOperatorAndManagerAccountAlreadyBind, "Operator already bind to the same manager, should not bind again")
		} else {
			// Already bind to another manager account, need to unbind the previous manager account first if forceUnbind is set to true
			if msg.ForceUnbind {
				manager.OperatorAccount = ""
				manager.RegisterStatus = string(types.RS_PENDING_BIND)
				manager.Updator = msg.OperatorAccount
				manager.UpdateAt = blockHeight
				k.SetManager(ctx, manager)
			} else {
				return nil, errorsmod.Wrap(types.ErrOperatorAlreadyBind, "Operator already bind to another manager, could not unbind since forceUnbind flag is false")
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

	ctx.EventManager().EmitEvent(
		sdk.NewEvent(types.EventTypeOperatorManagerBound,
			sdk.NewAttribute(sdk.AttributeKeyModule, types.ModuleName),
			sdk.NewAttribute(types.AttributeKeyTxSigner, msg.OperatorAccount),
			sdk.NewAttribute(types.AttributeKeyOperatorAccount, msg.OperatorAccount),
			sdk.NewAttribute(types.AttributeKeyManagerAccount, msg.ManagerAccount),
		),
	)

	return &types.MsgBindOperatorManagerAccountResponse{}, nil
}

func verifyManagerSignature(k msgServer, ctx context.Context, operatorAccount string, managerAccount string, managerSignature []byte) error {

	// Decode the manager address
	managerAccAddr, err := sdk.AccAddressFromBech32(managerAccount)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid manager account: %s", err)
	}

	// Get the manager account pubkey from the store,
	// manager should have called RegisterManager tx before, so there should be account in the AccountKeeper store
	account := k.accountKeeper.GetAccount(ctx, managerAccAddr)
	if account == nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "account not found for address: %s", managerAccount)
	}

	pubKey := account.GetPubKey()
	if pubKey == nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "public key not found for account: %s", managerAccount)
	}

	// Construct original sig data
	data := []byte(operatorAccount + ":" + managerAccount)
	// Verify the signature, please be attention that the 'msg' param here is the raw msg bytes, not the sha256 form
	// because pubKey.VerifySignature will do sha256(msg) internally,
	// and the signature here should be 64 bytes without the last recovery field
	if !pubKey.VerifySignature(data, managerSignature[0:64]) {
		return errorsmod.Wrap(types.ErrInvalidSignature,
			"manager signature verification failed, please ensure the signature is correct and ensure to use the manager account to sign the message")
	}

	return nil
}

func (k msgServer) SetManagerRegion(goCtx context.Context, msg *types.MsgSetManagerRegion) (*types.MsgSetManagerRegionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	operator, found := k.GetOperator(ctx, msg.OperatorAccount)
	if !found {
		return nil, errorsmod.Wrapf(sdkerrors.ErrKeyNotFound, "Operator '%s' doesn't exist", msg.OperatorAccount)
	}

	// tx caller should be current operator owner
	if msg.OperatorAccount != operator.OperatorAccount {
		return nil, errorsmod.Wrap(sdkerrors.ErrUnauthorized, "Incorrect owner")
	}

	// Operator should have bound a manager
	if len(operator.ManagerAccount) == 0 {
		return nil, errorsmod.Wrapf(types.ErrManagerNotBind, "Operator doesn't bind manager yet")
	}

	// Checks that the manager exists
	manager, found := k.GetManager(ctx, operator.ManagerAccount)
	if !found {
		return nil, errorsmod.Wrapf(sdkerrors.ErrKeyNotFound, "Invalid state: Operator has bound to manager '%s', but doesn't exist in the store", operator.ManagerAccount)
	}

	// Right now we simply doesn't allow to change region after the manager has activated
	// Since edge nodes can only connect to managers in one region,if manager region has changed,
	// it's difficult to force all the edge nodes to reconnect
	if manager.RegisterStatus == string(types.RS_ACTIVATE) {
		return nil, errorsmod.Wrap(types.ErrManagerRegionChangeNotAllow, "Not allow to change region after the manager has activated")
	}

	// Region code need to be in the registered list
	_, err := k.registryKeeper.Region(ctx, &registrytypes.QueryGetRegionRequest{Code: msg.RegionCode})
	if err != nil {
		return nil, errorsmod.Wrapf(types.ErrInvalidRegion, "Region '%s' is not in the region list registry", msg.RegionCode)
	}

	// Update and set to the store
	blockHeight := uint64(ctx.BlockHeight())
	manager.RegionCode = msg.RegionCode
	manager.RegisterStatus = string(types.RS_PENDING_ACTIVATE)
	manager.Updator = msg.OperatorAccount
	manager.UpdateAt = blockHeight
	k.SetManager(ctx, manager)

	ctx.EventManager().EmitEvent(
		sdk.NewEvent(types.EventTypeManagerRegionSet,
			sdk.NewAttribute(sdk.AttributeKeyModule, types.ModuleName),
			sdk.NewAttribute(types.AttributeKeyTxSigner, msg.OperatorAccount),
			sdk.NewAttribute(types.AttributeKeyRegionCode, msg.RegionCode),
		),
	)

	return &types.MsgSetManagerRegionResponse{}, nil
}

func (k msgServer) UpdateManagerConnParams(goCtx context.Context, msg *types.MsgUpdateManagerConnParams) (*types.MsgUpdateManagerConnParamsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	operator, found := k.GetOperator(ctx, msg.OperatorAccount)
	if !found {
		return nil, errorsmod.Wrapf(sdkerrors.ErrKeyNotFound, "Operator '%s' doesn't exist", msg.OperatorAccount)
	}

	// tx caller should be current operator owner
	if msg.OperatorAccount != operator.OperatorAccount {
		return nil, errorsmod.Wrap(sdkerrors.ErrUnauthorized, "Incorrect owner")
	}

	// Operator should have bound a manager
	if len(operator.ManagerAccount) == 0 {
		return nil, errorsmod.Wrapf(types.ErrManagerNotBind, "Operator doesn't bind manager yet")
	}

	// Checks that the manager exists
	manager, found := k.GetManager(ctx, operator.ManagerAccount)
	if !found {
		return nil, errorsmod.Wrapf(sdkerrors.ErrKeyNotFound, "Invalid state: Operator has bound to manager '%s', but doesn't exist in the store", operator.ManagerAccount)
	}

	// Update and set to the store
	blockHeight := uint64(ctx.BlockHeight())
	manager.HostAddress = msg.HostAddress
	manager.ManagerPort = msg.ManagerPort
	manager.TrackerPort = msg.TrackerPort
	manager.ChainAPIPort = msg.ChainAPIPort
	manager.ChainRPCPort = msg.ChainRPCPort
	manager.Updator = msg.OperatorAccount
	manager.UpdateAt = blockHeight
	k.SetManager(ctx, manager)

	ctx.EventManager().EmitEvent(
		sdk.NewEvent(types.EventTypeManagerConnParamsUpdated,
			sdk.NewAttribute(sdk.AttributeKeyModule, types.ModuleName),
			sdk.NewAttribute(types.AttributeKeyTxSigner, msg.OperatorAccount),
			sdk.NewAttribute(types.AttributeKeyManagerPort, strconv.FormatUint(uint64(msg.ManagerPort), 10)),
			sdk.NewAttribute(types.AttributeKeyTrackerPort, strconv.FormatUint(uint64(msg.TrackerPort), 10)),
			sdk.NewAttribute(types.AttributeKeyChainAPIPort, strconv.FormatUint(uint64(msg.ChainAPIPort), 10)),
			sdk.NewAttribute(types.AttributeKeyChainRPCPort, strconv.FormatUint(uint64(msg.ChainRPCPort), 10)),
		),
	)

	return &types.MsgUpdateManagerConnParamsResponse{}, nil
}

func (k msgServer) ActivateManager(goCtx context.Context, msg *types.MsgActivateManager) (*types.MsgActivateManagerResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	operator, found := k.GetOperator(ctx, msg.OperatorAccount)
	if !found {
		return nil, errorsmod.Wrapf(sdkerrors.ErrKeyNotFound, "Operator '%s' doesn't exist", msg.OperatorAccount)
	}

	// tx caller should be current operator owner
	if msg.OperatorAccount != operator.OperatorAccount {
		return nil, errorsmod.Wrap(sdkerrors.ErrUnauthorized, "Incorrect owner")
	}

	// Operator should have bound a manager
	if len(operator.ManagerAccount) == 0 {
		return nil, errorsmod.Wrapf(types.ErrManagerNotBind, "Operator doesn't bind manager yet")
	}

	// Checks that the manager exists
	manager, found := k.GetManager(ctx, operator.ManagerAccount)
	if !found {
		return nil, errorsmod.Wrapf(sdkerrors.ErrKeyNotFound, "Invalid state: Operator has bound to manager '%s', but doesn't exist in the store", operator.ManagerAccount)
	}

	// The manager should be in PENDING_ACTIVATE state
	if manager.RegisterStatus != string(types.RS_PENDING_ACTIVATE) {
		switch manager.RegisterStatus {
		case string(types.RS_PENDING_BIND):
			return nil, errorsmod.Wrap(types.ErrInvalidManagerRegisterStatus,
				"Invalid state: Operator has bound to manager, RegisterStatus should not be Pending_Bind")
		case string(types.RS_PENDING_CONFIG):
			return nil, errorsmod.Wrap(types.ErrInvalidManagerRegisterStatus,
				"Activate is not allow due to manager configuration is not done yet")
		case string(types.RS_ACTIVATE):
			return nil, errorsmod.Wrap(types.ErrInvalidManagerRegisterStatus,
				"Activate multiple times is not allow")
		default:
			return nil, errorsmod.Wrap(types.ErrInvalidManagerRegisterStatus,
				"Unknow manager register status, cannot proceed")
		}
	}

	// Double check the manager region code setting and connection params
	if len(manager.HostAddress) == 0 || manager.ManagerPort == 0 ||
		manager.TrackerPort == 0 || manager.ChainAPIPort == 0 || manager.ChainRPCPort == 0 {
		return nil, errorsmod.Wrap(types.ErrManagerConnParamsNotSet,
			"Activate manager is not allow due to manager connection params not properly set")
	}
	if len(manager.RegionCode) == 0 {
		return nil, errorsmod.Wrap(types.ErrManagerRegionNotSet,
			"Activate manager is not allow due to manager region code has not set")
	}

	//////////////////////////////////////////////////////
	/// TODO: Verifys the license using license module
	if err := verifyActivateLicense(k, ctx, operator.OperatorAccount, operator.ManagerAccount, msg.License); err != nil {
		return nil, errorsmod.Wrapf(types.ErrInvalidManagerLicense, "%s", err)
	}

	// Update and set to the store
	manager.RegisterStatus = string(types.RS_ACTIVATE)
	manager.Updator = msg.OperatorAccount
	manager.UpdateAt = uint64(ctx.BlockHeight())
	k.SetManager(ctx, manager)

	ctx.EventManager().EmitEvent(
		sdk.NewEvent(types.EventTypeManagerActivated,
			sdk.NewAttribute(sdk.AttributeKeyModule, types.ModuleName),
			sdk.NewAttribute(types.AttributeKeyTxSigner, msg.OperatorAccount),
			sdk.NewAttribute(types.AttributeKeyOperatorAccount, msg.OperatorAccount),
			sdk.NewAttribute(types.AttributeKeyManagerAccount, manager.ManagerAccount),
		),
	)

	return &types.MsgActivateManagerResponse{}, nil
}

func verifyActivateLicense(k msgServer, ctx context.Context, operatorAccount string, managerAccount string, license string) error {

	// The license string is actually a signature signed by the superior account
	superior, isFound := k.GetSuperior(ctx)
	if !isFound {
		return types.ErrSuperiorNotSet
	}

	// Decode the superior address
	superiorAccAddr, err := sdk.AccAddressFromBech32(superior.Account)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid superior account: %s", err)
	}

	// Get the superior account pubkey from the store,
	// superior should have called other tx before, so there should be account in the AccountKeeper store
	account := k.accountKeeper.GetAccount(ctx, superiorAccAddr)
	if account == nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "account not found for address: %s", superior.Account)
	}
	pubKey := account.GetPubKey()
	if pubKey == nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "public key not found for account: %s", superior.Account)
	}

	// Construct original sig data
	data := []byte(superior.Account + ":" + operatorAccount + ":" + managerAccount)
	licenseSigBytes, err := base64.StdEncoding.DecodeString(license)
	if err != nil {
		return errorsmod.Wrapf(types.ErrInvalidSignature, "invalid license signature: %s", err)
	}
	// Verify the signature, please be attention that the 'msg' param here is the raw msg bytes, not the sha256 form
	if !pubKey.VerifySignature(data, licenseSigBytes[0:64]) {
		return errorsmod.Wrap(types.ErrInvalidSignature, "License verification failed, please ensure it's issued by official")
	}

	return nil
}

func (k msgServer) BindOperatorEVMAccount(goCtx context.Context, msg *types.MsgBindOperatorEVMAccount) (*types.MsgBindOperatorEVMAccountResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	operator, found := k.GetOperator(ctx, msg.OperatorAccount)
	if !found {
		return nil, errorsmod.Wrapf(sdkerrors.ErrKeyNotFound, "Operator '%s' doesn't exist", msg.OperatorAccount)
	}

	// tx caller should be current operator owner
	if msg.OperatorAccount != operator.OperatorAccount {
		return nil, errorsmod.Wrap(sdkerrors.ErrUnauthorized, "Incorrect owner")
	}

	// Verify the EVM Signature to make sure the caller owns the EVM account
	if err := verifyEvmSignature(msg.OperatorAccount, msg.EvmAccount, msg.EvmSignature); err != nil {
		return nil, errorsmod.Wrap(types.ErrInvalidSignature, "Invalid evm signature")
	}

	// Update and set to the store
	operator.EvmAccount = msg.EvmAccount
	operator.Updator = msg.OperatorAccount
	operator.UpdateAt = uint64(ctx.BlockHeight())
	k.SetOperator(ctx, operator)

	ctx.EventManager().EmitEvent(
		sdk.NewEvent(types.EventTypeOperatorEVMAccountBound,
			sdk.NewAttribute(sdk.AttributeKeyModule, types.ModuleName),
			sdk.NewAttribute(types.AttributeKeyTxSigner, msg.OperatorAccount),
			sdk.NewAttribute(types.AttributeKeyOperatorAccount, msg.OperatorAccount),
			sdk.NewAttribute(types.AttributeKeyEvmAccount, msg.EvmAccount),
		),
	)

	return &types.MsgBindOperatorEVMAccountResponse{}, nil
}

func verifyEvmSignature(_operatorAccount string, _evmAccount string, _evmSignature []byte) error {
	/// TODO
	return nil
}

func (k msgServer) UpdateOperatorBasicInfo(goCtx context.Context, msg *types.MsgUpdateOperatorBasicInfo) (*types.MsgUpdateOperatorBasicInfoResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	operator, found := k.GetOperator(ctx, msg.OperatorAccount)
	if !found {
		return nil, errorsmod.Wrapf(sdkerrors.ErrKeyNotFound, "Operator '%s' doesn't exist", msg.OperatorAccount)
	}

	// tx caller should be current operator owner
	if msg.OperatorAccount != operator.OperatorAccount {
		return nil, errorsmod.Wrap(sdkerrors.ErrUnauthorized, "Incorrect owner")
	}

	// Update and set to the store
	blockHeight := uint64(ctx.BlockHeight())
	operator.Name = msg.Name
	operator.Description = msg.Description
	operator.WebsiteUrl = msg.WebsiteUrl
	operator.Updator = msg.OperatorAccount
	operator.UpdateAt = blockHeight
	k.SetOperator(ctx, operator)

	ctx.EventManager().EmitEvent(
		sdk.NewEvent(types.EventTypeOperatorBasicInfoUpdated,
			sdk.NewAttribute(sdk.AttributeKeyModule, types.ModuleName),
			sdk.NewAttribute(types.AttributeKeyTxSigner, msg.OperatorAccount),
			sdk.NewAttribute(types.AttributeKeyOperatorAccount, msg.OperatorAccount),
		),
	)

	return &types.MsgUpdateOperatorBasicInfoResponse{}, nil
}
