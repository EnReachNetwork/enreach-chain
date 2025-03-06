package types

import (
	errorsmod "cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgRegisterManager{}

func NewMsgRegisterManager(managerAccount string, hostAddress string, managerPort uint32, trackerPort uint32, chainAPIPort uint32, chainRPCPort uint32) *MsgRegisterManager {
	return &MsgRegisterManager{
		ManagerAccount: managerAccount,
		HostAddress:    hostAddress,
		ManagerPort:    managerPort,
		TrackerPort:    trackerPort,
		ChainAPIPort:   chainAPIPort,
		ChainRPCPort:   chainRPCPort,
	}
}

func (msg *MsgRegisterManager) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.ManagerAccount)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid manager account (%s)", err)
	}
	return nil
}
