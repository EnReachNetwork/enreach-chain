package types

import (
	errorsmod "cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgRegisterNode{}

func NewMsgRegisterNode(signer string, nodeID string, deviceType string, regionCode string) *MsgRegisterNode {
	return &MsgRegisterNode{
		Signer:     signer,
		NodeID:     nodeID,
		DeviceType: deviceType,
		RegionCode: regionCode,
	}
}

func (msg *MsgRegisterNode) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Signer)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgBindAndActivateNode{}

func NewMsgBindAndActivateNode(signer string, nodeID string, userID string) *MsgBindAndActivateNode {
	return &MsgBindAndActivateNode{
		Signer: signer,
		NodeID: nodeID,
		UserID: userID,
	}
}

func (msg *MsgBindAndActivateNode) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Signer)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", err)
	}

	if len(msg.UserID) == 0 {
		return errorsmod.Wrap(ErrInvalidParamLength, "empty userID is not allowed")
	}

	if len(msg.UserID) > MaxUserIDLength {
		return errorsmod.Wrapf(ErrInvalidParamLength, "userID length has exceeded max length %d", MaxUserIDLength)
	}

	return nil
}
