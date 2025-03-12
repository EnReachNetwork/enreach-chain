package types

import (
	errorsmod "cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateUser{}

func NewMsgCreateUser(signer string, userID string) *MsgCreateUser {
	return &MsgCreateUser{
		Signer: signer,
		UserID: userID,
	}
}

func (msg *MsgCreateUser) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Signer)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgBindUserEVMAccount{}

func NewMsgBindUserEVMAccount(signer string, userID string, evmAccount string, evmPubkey []byte, evmSignature []byte) *MsgBindUserEVMAccount {
	return &MsgBindUserEVMAccount{
		Signer:       signer,
		UserID:       userID,
		EvmAccount:   evmAccount,
		EvmPubkey:    evmPubkey,
		EvmSignature: evmSignature,
	}
}

func (msg *MsgBindUserEVMAccount) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Signer)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", err)
	}
	return nil
}
