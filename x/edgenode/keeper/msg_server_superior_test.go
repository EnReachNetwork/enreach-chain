package keeper_test

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	keepertest "enreach/testutil/keeper"
	"enreach/x/edgenode/keeper"
	"enreach/x/edgenode/types"
)

func TestSuperiorMsgServerCreate(t *testing.T) {
	k, ctx := keepertest.EdgenodeKeeper(t)
	srv := keeper.NewMsgServerImpl(k)
	signer := "A"
	expected := &types.MsgCreateSuperior{Signer: signer}
	_, err := srv.CreateSuperior(ctx, expected)
	require.NoError(t, err)
	rst, found := k.GetSuperior(ctx)
	require.True(t, found)
	require.Equal(t, expected.Signer, rst.Creator)
}

func TestSuperiorMsgServerUpdate(t *testing.T) {
	signer := "A"

	tests := []struct {
		desc    string
		request *types.MsgUpdateSuperior
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateSuperior{Signer: signer},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateSuperior{Signer: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
	}
	for _, tc := range tests {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.EdgenodeKeeper(t)
			srv := keeper.NewMsgServerImpl(k)
			expected := &types.MsgCreateSuperior{Signer: signer}
			_, err := srv.CreateSuperior(ctx, expected)
			require.NoError(t, err)

			_, err = srv.UpdateSuperior(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				rst, found := k.GetSuperior(ctx)
				require.True(t, found)
				require.Equal(t, expected.Signer, rst.Creator)
			}
		})
	}
}
