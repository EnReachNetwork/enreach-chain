package types

import (
	errorsmod "cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateRegion{}

func NewMsgCreateRegion(signer string, code string, name string, description string) *MsgCreateRegion {
	return &MsgCreateRegion{
		Signer:      signer,
		Code:        code,
		Name:        name,
		Description: description,
	}
}

func (msg *MsgCreateRegion) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Signer)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateRegion{}

func NewMsgUpdateRegion(signer string, code string, name string, description string) *MsgUpdateRegion {
	return &MsgUpdateRegion{
		Signer:      signer,
		Code:        code,
		Name:        name,
		Description: description,
	}
}

func (msg *MsgUpdateRegion) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Signer)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteRegion{}

func NewMsgDeleteRegion(signer string, code string) *MsgDeleteRegion {
	return &MsgDeleteRegion{
		Signer: signer,
		Code:   code,
	}
}

func (msg *MsgDeleteRegion) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Signer)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", err)
	}
	return nil
}
