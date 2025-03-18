package types

import (
	errorsmod "cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateOperator{}

func NewMsgCreateOperator(operatorAccount string, name string, description string, websiteUrl string) *MsgCreateOperator {
	return &MsgCreateOperator{
		OperatorAccount: operatorAccount,
		Name:            name,
		Description:     description,
		WebsiteUrl:      websiteUrl,
	}
}

func (msg *MsgCreateOperator) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.OperatorAccount)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid operator account (%s)", err)
	}

	if len(msg.Name) == 0 {
		return errorsmod.Wrap(ErrInvalidParamLength, "Operator name should not be empty")
	}
	if len(msg.Name) > OPERATOR_NAME_MAX_LENGTH {
		return errorsmod.Wrapf(ErrInvalidParamLength, "Operator name exceed max length %d", OPERATOR_NAME_MAX_LENGTH)
	}

	// description can be empty
	if len(msg.Description) > OPERATOR_DESC_MAX_LENGTH {
		return errorsmod.Wrapf(ErrInvalidParamLength, "Operator description exceed max length %d", OPERATOR_DESC_MAX_LENGTH)
	}

	// website url can be empty
	if len(msg.WebsiteUrl) > OPERATOR_URL_MAX_LENGTH {
		return errorsmod.Wrapf(ErrInvalidParamLength, "Operator website url exceed max length %d", OPERATOR_URL_MAX_LENGTH)
	}

	return nil
}

var _ sdk.Msg = &MsgBindOperatorManagerAccount{}

func NewMsgBindOperatorManagerAccount(operatorAccount string, managerAccount string, managerSignature []byte, forceUnbind bool) *MsgBindOperatorManagerAccount {
	return &MsgBindOperatorManagerAccount{
		OperatorAccount:  operatorAccount,
		ManagerAccount:   managerAccount,
		ManagerSignature: managerSignature,
		ForceUnbind:      forceUnbind,
	}
}

func (msg *MsgBindOperatorManagerAccount) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.OperatorAccount)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid operator account (%s)", err)
	}
	_, err = sdk.AccAddressFromBech32(msg.ManagerAccount)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid manager account (%s)", err)
	}

	if len(msg.ManagerSignature) != MANAGER_SIGNATURE_LENGTH {
		return errorsmod.Wrapf(ErrInvalidParamLength, "Manager signature should be %d bytes long", MANAGER_SIGNATURE_LENGTH)
	}

	return nil
}

var _ sdk.Msg = &MsgSetManagerRegion{}

func NewMsgSetManagerRegion(operatorAccount string, regionCode string) *MsgSetManagerRegion {
	return &MsgSetManagerRegion{
		OperatorAccount: operatorAccount,
		RegionCode:      regionCode,
	}
}

func (msg *MsgSetManagerRegion) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.OperatorAccount)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid operator account (%s)", err)
	}

	if len(msg.RegionCode) == 0 {
		return errorsmod.Wrap(ErrInvalidParamLength, "Region code should not be empty")
	}
	if len(msg.RegionCode) > OPERATOR_NAME_MAX_LENGTH {
		return errorsmod.Wrapf(ErrInvalidParamLength, "Region code exceed max length %d", REGION_CODE_MAX_LENGTH)
	}

	return nil
}

var _ sdk.Msg = &MsgUpdateManagerConnParams{}

func NewMsgUpdateManagerConnParams(operatorAccount string, hostAddress string, managerPort uint32, trackerPort uint32, chainAPIPort uint32, chainRPCPort uint32) *MsgUpdateManagerConnParams {
	return &MsgUpdateManagerConnParams{
		OperatorAccount: operatorAccount,
		HostAddress:     hostAddress,
		ManagerPort:     managerPort,
		TrackerPort:     trackerPort,
		ChainAPIPort:    chainAPIPort,
		ChainRPCPort:    chainRPCPort,
	}
}

func (msg *MsgUpdateManagerConnParams) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.OperatorAccount)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid operator account (%s)", err)
	}

	if len(msg.HostAddress) == 0 {
		return errorsmod.Wrap(ErrInvalidParamLength, "HostAddress should not be empty")
	}
	if len(msg.HostAddress) > HOST_ADDRESS_MAX_LENGTH {
		return errorsmod.Wrapf(ErrInvalidParamLength, "HostAddress exceed max length %d", HOST_ADDRESS_MAX_LENGTH)
	}

	if msg.ManagerPort > PORT_MAX_VALUE {
		return errorsmod.Wrap(ErrInvalidParamLength, "Invalid manager port number")
	}
	if msg.TrackerPort > PORT_MAX_VALUE {
		return errorsmod.Wrap(ErrInvalidParamLength, "Invalid tracker port number")
	}
	if msg.ChainAPIPort > PORT_MAX_VALUE {
		return errorsmod.Wrap(ErrInvalidParamLength, "Invalid chain-api port number")
	}
	if msg.ChainRPCPort > PORT_MAX_VALUE {
		return errorsmod.Wrap(ErrInvalidParamLength, "Invalid chain-rpc port number")
	}

	return nil
}

var _ sdk.Msg = &MsgActivateManager{}

func NewMsgActivateManager(operatorAccount string, license string) *MsgActivateManager {
	return &MsgActivateManager{
		OperatorAccount: operatorAccount,
		License:         license,
	}
}

func (msg *MsgActivateManager) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.OperatorAccount)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid operator account (%s)", err)
	}

	if len(msg.License) == 0 {
		return errorsmod.Wrap(ErrInvalidParamLength, "License should not be empty")
	}
	if len(msg.License) > LICENSE_MAX_LENGTH {
		return errorsmod.Wrapf(ErrInvalidParamLength, "License exceed max length %d", LICENSE_MAX_LENGTH)
	}

	return nil
}

var _ sdk.Msg = &MsgBindOperatorEVMAccount{}

func NewMsgBindOperatorEVMAccount(operatorAccount string, evmAccount string, evmSignature []byte) *MsgBindOperatorEVMAccount {
	return &MsgBindOperatorEVMAccount{
		OperatorAccount: operatorAccount,
		EvmAccount:      evmAccount,
		EvmSignature:    evmSignature,
	}
}

func (msg *MsgBindOperatorEVMAccount) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.OperatorAccount)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid operator account (%s)", err)
	}

	return nil
}
