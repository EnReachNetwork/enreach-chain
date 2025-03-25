package types

import (
	errorsmod "cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgSubmitWorkreports{}

func NewMsgSubmitWorkreports(managerAccount string, epoch uint64, nodescores []*NodeScore) *MsgSubmitWorkreports {
	return &MsgSubmitWorkreports{
		ManagerAccount: managerAccount,
		Epoch:          epoch,
		NodeScores:     nodescores,
	}
}

func (msg *MsgSubmitWorkreports) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.ManagerAccount)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid manager account (%s)", err)
	}

	if len(msg.NodeScores) > NODESCORES_COUNT_PER_REQ {
		return errorsmod.Wrapf(ErrNodeScoresCountExceedPerReqLimit, "NodeScores count per request exceed limit %d", NODESCORES_COUNT_PER_REQ)
	}
	return nil
}
