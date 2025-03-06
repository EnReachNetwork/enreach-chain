package types

import (
	errorsmod "cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateOperator{}

func NewMsgCreateOperator(operatorAccount string, name string, description string, websiteUrl string) *MsgCreateOperator {
	return &MsgCreateOperator{
		OperatorAccount: operatorAccount,
		Name:            name,
		Description:     description,
		WebsiteUrl:      websiteUrl,
	}
}

func (msg *MsgCreateOperator) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.OperatorAccount)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid operator account (%s)", err)
	}
	return nil
}
