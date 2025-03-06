package types

import (
	"testing"

	"enreach/testutil/sample"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"
)

func TestMsgCreateOperator_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgCreateOperator
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgCreateOperator{
				OperatorAccount: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgCreateOperator{
				OperatorAccount: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}
