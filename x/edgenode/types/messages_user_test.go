package types

import (
	"testing"

	"enreach/testutil/sample"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"
)

func TestMsgCreateUser_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgCreateUser
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgCreateUser{
				Signer: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgCreateUser{
				Signer: sample.AccAddress(),
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

func TestMsgBindUserEVMAccount_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgBindUserEVMAccount
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgBindUserEVMAccount{
				Signer: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgBindUserEVMAccount{
				Signer: sample.AccAddress(),
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
