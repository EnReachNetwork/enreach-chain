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
	if len(msg.Code) == 0 {
		return errorsmod.Wrap(ErrInvalidParamLength, "Region code should not be empty")
	}
	if len(msg.Code) > REGION_CODE_MAX_LENGTH {
		return errorsmod.Wrapf(ErrInvalidParamLength, "Region code exceed max length %d", REGION_CODE_MAX_LENGTH)
	}
	if len(msg.Name) == 0 {
		return errorsmod.Wrap(ErrInvalidParamLength, "Region name should not be empty")
	}
	if len(msg.Name) > REGION_NAME_MAX_LENGTH {
		return errorsmod.Wrapf(ErrInvalidParamLength, "Region name exceed max length %d", REGION_NAME_MAX_LENGTH)
	}
	if len(msg.Description) == 0 {
		return errorsmod.Wrap(ErrInvalidParamLength, "Region description should not be empty")
	}
	if len(msg.Description) > REGION_DESC_MAX_LENGTH {
		return errorsmod.Wrapf(ErrInvalidParamLength, "Region description exceed max length %d", REGION_DESC_MAX_LENGTH)
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
	if len(msg.Code) == 0 {
		return errorsmod.Wrap(ErrInvalidParamLength, "Region code should not be empty")
	}
	if len(msg.Code) > REGION_CODE_MAX_LENGTH {
		return errorsmod.Wrapf(ErrInvalidParamLength, "Region code exceed max length %d", REGION_CODE_MAX_LENGTH)
	}
	if len(msg.Name) == 0 {
		return errorsmod.Wrap(ErrInvalidParamLength, "Region name should not be empty")
	}
	if len(msg.Name) > REGION_NAME_MAX_LENGTH {
		return errorsmod.Wrapf(ErrInvalidParamLength, "Region name exceed max length %d", REGION_NAME_MAX_LENGTH)
	}
	if len(msg.Description) == 0 {
		return errorsmod.Wrap(ErrInvalidParamLength, "Region description should not be empty")
	}
	if len(msg.Description) > REGION_DESC_MAX_LENGTH {
		return errorsmod.Wrapf(ErrInvalidParamLength, "Region description exceed max length %d", REGION_DESC_MAX_LENGTH)
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
	if len(msg.Code) == 0 {
		return errorsmod.Wrap(ErrInvalidParamLength, "Region code should not be empty")
	}
	if len(msg.Code) > REGION_CODE_MAX_LENGTH {
		return errorsmod.Wrapf(ErrInvalidParamLength, "Region code exceed max length %d", REGION_CODE_MAX_LENGTH)
	}
	return nil
}
