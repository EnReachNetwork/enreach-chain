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

var _ sdk.Msg = &MsgUpdateWorkreportProcessBatchSize{}

func NewMsgSetWorkReportProcessBatchSize(signer string, batchSize uint64) *MsgUpdateWorkreportProcessBatchSize {
	return &MsgUpdateWorkreportProcessBatchSize{
		Signer:    signer,
		BatchSize: batchSize,
	}
}

func (msg *MsgUpdateWorkreportProcessBatchSize) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Signer)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer account (%s)", err)
	}

	if msg.BatchSize > MAX_WORKREPORT_PROCESS_BATCH_SIZE {
		return errorsmod.Wrapf(ErrInvalidParamValue, "BatchSize exceed max value %d", MAX_WORKREPORT_PROCESS_BATCH_SIZE)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateHistoryEpochDataDepth{}

func NewMsgSetHistoryEpochDataDepth(signer string, depth uint64) *MsgUpdateHistoryEpochDataDepth {
	return &MsgUpdateHistoryEpochDataDepth{
		Signer: signer,
		Depth:  depth,
	}
}

func (msg *MsgUpdateHistoryEpochDataDepth) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Signer)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer account (%s)", err)
	}

	if msg.Depth > MAX_HISTORY_EPOCH_DATA_DEPTH {
		return errorsmod.Wrapf(ErrInvalidParamValue, "Depth exceed max value %d", MAX_HISTORY_EPOCH_DATA_DEPTH)
	}
	return nil
}
