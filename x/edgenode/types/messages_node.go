package types

import (
	errorsmod "cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgRegisterNode{}

func NewMsgRegisterNode(signer string, nodeID string, deviceType string) *MsgRegisterNode {
	return &MsgRegisterNode{
		Signer:     signer,
		NodeID:     nodeID,
		DeviceType: deviceType,
	}
}

func (msg *MsgRegisterNode) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Signer)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", err)
	}

	if len(msg.NodeID) == 0 {
		return errorsmod.Wrap(ErrInvalidParamLength, "NodeID should not be empty")
	}
	if len(msg.NodeID) > NODE_ID_MAX_LENGTH {
		return errorsmod.Wrapf(ErrInvalidParamLength, "NodeID exceed max length %d", NODE_ID_MAX_LENGTH)
	}

	if len(msg.DeviceType) == 0 {
		return errorsmod.Wrap(ErrInvalidParamLength, "DeviceType should not be empty")
	}
	if len(msg.DeviceType) > DEVICE_TYPE_MAX_LENGTH {
		return errorsmod.Wrapf(ErrInvalidParamLength, "DeviceType exceed max length %d", DEVICE_TYPE_MAX_LENGTH)
	}

	return nil
}

var _ sdk.Msg = &MsgBindAndActivateNode{}

func NewMsgBindAndActivateNode(signer string, nodeID string, userID string, nodeName string, regionCode string) *MsgBindAndActivateNode {
	return &MsgBindAndActivateNode{
		Signer:     signer,
		NodeID:     nodeID,
		UserID:     userID,
		NodeName:   nodeName,
		RegionCode: regionCode,
	}
}

func (msg *MsgBindAndActivateNode) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Signer)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", err)
	}

	if len(msg.NodeID) == 0 {
		return errorsmod.Wrap(ErrInvalidParamLength, "NodeID should not be empty")
	}
	if len(msg.NodeID) > NODE_ID_MAX_LENGTH {
		return errorsmod.Wrapf(ErrInvalidParamLength, "NodeID exceed max length %d", NODE_ID_MAX_LENGTH)
	}

	if len(msg.UserID) == 0 {
		return errorsmod.Wrap(ErrInvalidParamLength, "UserID should not be empty")
	}
	if len(msg.UserID) > USER_ID_MAX_LENGTH {
		return errorsmod.Wrapf(ErrInvalidParamLength, "UserID exceed max length %d", USER_ID_MAX_LENGTH)
	}

	if len(msg.NodeName) == 0 {
		return errorsmod.Wrap(ErrInvalidParamLength, "NodeName should not be empty")
	}
	if len(msg.NodeName) > NODE_NAME_MAX_LENGTH {
		return errorsmod.Wrapf(ErrInvalidParamLength, "NodeName exceed max length %d", NODE_NAME_MAX_LENGTH)
	}

	if len(msg.RegionCode) == 0 {
		return errorsmod.Wrap(ErrInvalidParamLength, "UserID should not be empty")
	}
	if len(msg.RegionCode) > REGION_CODE_MAX_LENGTH {
		return errorsmod.Wrapf(ErrInvalidParamLength, "UserID exceed max length %d", USER_ID_MAX_LENGTH)
	}

	return nil
}
