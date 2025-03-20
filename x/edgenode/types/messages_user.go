package types

import (
	"regexp"

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

	if len(msg.UserID) == 0 {
		return errorsmod.Wrap(ErrInvalidParamLength, "UserID should not be empty")
	}
	if len(msg.UserID) > USER_ID_MAX_LENGTH {
		return errorsmod.Wrapf(ErrInvalidParamLength, "UserID exceed max length %d", USER_ID_MAX_LENGTH)
	}

	return nil
}

var _ sdk.Msg = &MsgBindUserEVMAccount{}

func NewMsgBindUserEVMAccount(signer string, userID string, evmAccount string, evmSignature []byte) *MsgBindUserEVMAccount {
	return &MsgBindUserEVMAccount{
		Signer:       signer,
		UserID:       userID,
		EvmAccount:   evmAccount,
		EvmSignature: evmSignature,
	}
}

func (msg *MsgBindUserEVMAccount) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Signer)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", err)
	}

	if len(msg.UserID) == 0 {
		return errorsmod.Wrap(ErrInvalidParamLength, "UserID should not be empty")
	}
	if len(msg.UserID) > USER_ID_MAX_LENGTH {
		return errorsmod.Wrapf(ErrInvalidParamLength, "UserID exceed max length %d", USER_ID_MAX_LENGTH)
	}

	matched, _ := regexp.MatchString("^0x[0-9a-fA-F]{40}$", msg.EvmAccount)
	if !matched {
		return errorsmod.Wrap(sdkerrors.ErrInvalidAddress, "EvmAccount is not a valid etherum address")
	}

	if len(msg.EvmSignature) != EVM_SIGNATURE_LENGTH {
		return errorsmod.Wrapf(ErrInvalidParamLength, "EvmSignature should be %d bytes long", EVM_SIGNATURE_LENGTH)
	}

	return nil
}
