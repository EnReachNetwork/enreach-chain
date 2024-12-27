package types

import (
	errorsmod "cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateWorkload{}

func NewMsgCreateWorkload(creator string, epoch uint64, minerId string, score uint64, managerId string) *MsgCreateWorkload {
	return &MsgCreateWorkload{
		Creator:   creator,
		Epoch:     epoch,
		MinerId:   minerId,
		Score:     score,
		ManagerId: managerId,
	}
}

func (msg *MsgCreateWorkload) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateWorkload{}

func NewMsgUpdateWorkload(creator string, id uint64, epoch uint64, minerId string, score uint64, managerId string) *MsgUpdateWorkload {
	return &MsgUpdateWorkload{
		Id:        id,
		Creator:   creator,
		Epoch:     epoch,
		MinerId:   minerId,
		Score:     score,
		ManagerId: managerId,
	}
}

func (msg *MsgUpdateWorkload) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteWorkload{}

func NewMsgDeleteWorkload(creator string, id uint64) *MsgDeleteWorkload {
	return &MsgDeleteWorkload{
		Id:      id,
		Creator: creator,
	}
}

func (msg *MsgDeleteWorkload) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
