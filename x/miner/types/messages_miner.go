package types

import (
	errorsmod "cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateMiner{}

func NewMsgCreateMiner(creator string, minerId string, evmAddress string, regionCode string, status string) *MsgCreateMiner {
	return &MsgCreateMiner{
		Creator:    creator,
		MinerId:    minerId,
		EvmAddress: evmAddress,
		RegionCode: regionCode,
		Status:     status,
	}
}

func (msg *MsgCreateMiner) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateMiner{}

func NewMsgUpdateMiner(creator string, id uint64, minerId string, evmAddress string, regionCode string, status string) *MsgUpdateMiner {
	return &MsgUpdateMiner{
		Id:         id,
		Creator:    creator,
		MinerId:    minerId,
		EvmAddress: evmAddress,
		RegionCode: regionCode,
		Status:     status,
	}
}

func (msg *MsgUpdateMiner) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteMiner{}

func NewMsgDeleteMiner(creator string, id uint64) *MsgDeleteMiner {
	return &MsgDeleteMiner{
		Id:      id,
		Creator: creator,
	}
}

func (msg *MsgDeleteMiner) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
