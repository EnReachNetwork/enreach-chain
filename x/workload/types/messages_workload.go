package types

import (
	errorsmod "cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateWorkload{}

func NewMsgCreateWorkload(managerAccount string, epoch uint64, nodeID string, score uint64) *MsgCreateWorkload {
	return &MsgCreateWorkload{
		ManagerAccount: managerAccount,
		Epoch:          epoch,
		NodeID:         nodeID,
		Score:          score,
	}
}

func (msg *MsgCreateWorkload) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.ManagerAccount)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid manager account (%s)", err)
	}
	return nil
}
