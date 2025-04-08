package types

import (
	errorsmod "cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgSubmitCheatStatusCR{}

func NewMsgSubmitCheatStatusCR(managerAccount string, era uint64, nodeDatas []*CheatStatusCR) *MsgSubmitCheatStatusCR {
	return &MsgSubmitCheatStatusCR{
		ManagerAccount: managerAccount,
		Era:            era,
		NodeDatas:      nodeDatas,
	}
}

func (msg *MsgSubmitCheatStatusCR) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.ManagerAccount)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid manager account (%s)", err)
	}

	if len(msg.NodeDatas) > NODESDATAS_COUNT_PER_REQ {
		return errorsmod.Wrapf(ErrNodeDatasCountExceedPerReqLimit, "NodeDatas count per request exceed limit %d", NODESDATAS_COUNT_PER_REQ)
	}
	return nil
}
