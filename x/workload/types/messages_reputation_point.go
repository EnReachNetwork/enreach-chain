package types

import (
	errorsmod "cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgSubmitReputationPointChangeData{}

func NewMsgSubmitReputationPointChangeData(managerAccount string, era uint64, nodePoints []*ReputationPointChangeRawData) *MsgSubmitReputationPointChangeData {
	return &MsgSubmitReputationPointChangeData{
		ManagerAccount: managerAccount,
		Era:            era,
		NodePoints:     nodePoints,
	}
}

func (msg *MsgSubmitReputationPointChangeData) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.ManagerAccount)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid manager account (%s)", err)
	}

	if len(msg.NodePoints) > NODESPOINTS_COUNT_PER_REQ {
		return errorsmod.Wrapf(ErrNodeScoresCountExceedPerReqLimit, "NodeScores count per request exceed limit %d", NODESPOINTS_COUNT_PER_REQ)
	}
	return nil
}
