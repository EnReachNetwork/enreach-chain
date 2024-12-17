package types

import (
	errorsmod "cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateRegion{}

func NewMsgCreateRegion(creator string, code string, name string, description string) *MsgCreateRegion {
	return &MsgCreateRegion{
		Creator:     creator,
		Code:        code,
		Name:        name,
		Description: description,
	}
}

func (msg *MsgCreateRegion) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateRegion{}

func NewMsgUpdateRegion(creator string, id uint64, code string, name string, description string) *MsgUpdateRegion {
	return &MsgUpdateRegion{
		Id:          id,
		Creator:     creator,
		Code:        code,
		Name:        name,
		Description: description,
	}
}

func (msg *MsgUpdateRegion) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteRegion{}

func NewMsgDeleteRegion(creator string, id uint64) *MsgDeleteRegion {
	return &MsgDeleteRegion{
		Id:      id,
		Creator: creator,
	}
}

func (msg *MsgDeleteRegion) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
