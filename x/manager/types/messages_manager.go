package types

import (
	errorsmod "cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgRegisterManager{}

func NewMsgRegisterManager(creator string, managerAddress string, operatorName string, operatorDesc string, operatorWebsiteURL string,
	evmAddress string, regionCode string, hostAddress string, managerPort uint32, trackerPort uint32, chainAPIPort uint32, chainRPCPort uint32) *MsgRegisterManager {
	return &MsgRegisterManager{
		Creator:            creator,
		ManagerAddress:     managerAddress,
		OperatorName:       operatorName,
		OperatorDesc:       operatorDesc,
		OperatorWebsiteURL: operatorWebsiteURL,
		EvmAddress:         evmAddress,
		RegionCode:         regionCode,
		HostAddress:        hostAddress,
		ManagerPort:        managerPort,
		TrackerPort:        trackerPort,
		ChainAPIPort:       chainAPIPort,
		ChainRPCPort:       chainRPCPort,
	}
}

func (msg *MsgRegisterManager) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateManager{}

func NewMsgUpdateManager(creator string, id uint64, managerAddress string, operatorName string, operatorDesc string, operatorWebsiteURL string,
	evmAddress string, regionCode string, hostAddress string, managerPort uint32, trackerPort uint32, chainAPIPort uint32, chainRPCPort uint32) *MsgUpdateManager {
	return &MsgUpdateManager{
		Id:                 id,
		Creator:            creator,
		ManagerAddress:     managerAddress,
		OperatorName:       operatorName,
		OperatorDesc:       operatorDesc,
		OperatorWebsiteURL: operatorWebsiteURL,
		EvmAddress:         evmAddress,
		RegionCode:         regionCode,
		HostAddress:        hostAddress,
		ManagerPort:        managerPort,
		TrackerPort:        trackerPort,
		ChainAPIPort:       chainAPIPort,
		ChainRPCPort:       chainRPCPort,
	}
}

func (msg *MsgUpdateManager) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteManager{}

func NewMsgDeleteManager(creator string, id uint64) *MsgDeleteManager {
	return &MsgDeleteManager{
		Id:      id,
		Creator: creator,
	}
}

func (msg *MsgDeleteManager) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
