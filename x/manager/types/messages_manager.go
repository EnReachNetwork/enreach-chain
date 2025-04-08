package types

import (
	errorsmod "cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgRegisterManager{}

func NewMsgRegisterManager(managerAccount string, hostAddress string, managerHTTPPort uint32, managerWSPort uint32, trackerPort uint32, chainAPIPort uint32, chainRPCPort uint32) *MsgRegisterManager {
	return &MsgRegisterManager{
		ManagerAccount:  managerAccount,
		HostAddress:     hostAddress,
		ManagerHTTPPort: managerHTTPPort,
		ManagerWSPort:   managerWSPort,
		TrackerPort:     trackerPort,
		ChainAPIPort:    chainAPIPort,
		ChainRPCPort:    chainRPCPort,
	}
}

func (msg *MsgRegisterManager) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.ManagerAccount)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid manager account (%s)", err)
	}

	if len(msg.HostAddress) == 0 {
		return errorsmod.Wrap(ErrInvalidParamLength, "HostAddress should not be empty")
	}
	if len(msg.HostAddress) > HOST_ADDRESS_MAX_LENGTH {
		return errorsmod.Wrapf(ErrInvalidParamLength, "HostAddress exceed max length %d", HOST_ADDRESS_MAX_LENGTH)
	}

	if msg.ManagerHTTPPort > PORT_MAX_VALUE {
		return errorsmod.Wrap(ErrInvalidParamLength, "Invalid manager http port number")
	}
	if msg.ManagerWSPort > PORT_MAX_VALUE {
		return errorsmod.Wrap(ErrInvalidParamLength, "Invalid manager ws port number")
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

var _ sdk.Msg = &MsgGoWorking{}

func NewMsgGoWorking(managerAccount string) *MsgGoWorking {
	return &MsgGoWorking{
		ManagerAccount: managerAccount,
	}
}

func (msg *MsgGoWorking) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.ManagerAccount)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid manager account (%s)", err)
	}
	return nil
}
