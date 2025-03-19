package types

import (
	errorsmod "cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateSuperior{}

func NewMsgCreateSuperior(signer string, account string) *MsgCreateSuperior {
	return &MsgCreateSuperior{
		Signer:  signer,
		Account: account,
	}
}

func (msg *MsgCreateSuperior) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Signer)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", err)
	}
	_, err = sdk.AccAddressFromBech32(msg.Account)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid superior account address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateSuperior{}

func NewMsgUpdateSuperior(signer string, account string) *MsgUpdateSuperior {
	return &MsgUpdateSuperior{
		Signer:  signer,
		Account: account,
	}
}

func (msg *MsgUpdateSuperior) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Signer)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", err)
	}
	_, err = sdk.AccAddressFromBech32(msg.Account)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid superior account address (%s)", err)
	}
	return nil
}
