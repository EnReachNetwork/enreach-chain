package types

import (
	errorsmod "cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateManager{}

func NewMsgCreateManager(creator string, managerId string, evmAddress string, regionCode string, status string) *MsgCreateManager {
	return &MsgCreateManager{
		Creator:    creator,
		ManagerId:  managerId,
		EvmAddress: evmAddress,
		RegionCode: regionCode,
		Status:     status,
	}
}

func (msg *MsgCreateManager) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateManager{}

func NewMsgUpdateManager(creator string, id uint64, managerId string, evmAddress string, regionCode string, status string) *MsgUpdateManager {
	return &MsgUpdateManager{
		Id:         id,
		Creator:    creator,
		ManagerId:  managerId,
		EvmAddress: evmAddress,
		RegionCode: regionCode,
		Status:     status,
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
