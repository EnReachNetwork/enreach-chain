package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	"enreach/x/registry/types"
)

func TestRegionMsgServerCreate(t *testing.T) {
	_, srv, ctx := setupMsgServer(t)
	wctx := sdk.UnwrapSDKContext(ctx)

	signer := "A"
	for i := 0; i < 5; i++ {
		_, err := srv.CreateRegion(wctx, &types.MsgCreateRegion{Signer: signer})
		require.NoError(t, err)
	}
}

func TestRegionMsgServerUpdate(t *testing.T) {
	signer := "A"

	tests := []struct {
		desc    string
		request *types.MsgUpdateRegion
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateRegion{Signer: signer},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateRegion{Signer: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateRegion{Signer: signer, Code: "us"},
			err:     sdkerrors.ErrKeyNotFound,
		},
	}
	for _, tc := range tests {
		t.Run(tc.desc, func(t *testing.T) {
			_, srv, ctx := setupMsgServer(t)
			wctx := sdk.UnwrapSDKContext(ctx)

			_, err := srv.CreateRegion(wctx, &types.MsgCreateRegion{Signer: signer})
			require.NoError(t, err)

			_, err = srv.UpdateRegion(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestRegionMsgServerDelete(t *testing.T) {
	signer := "A"

	tests := []struct {
		desc    string
		request *types.MsgDeleteRegion
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteRegion{Signer: signer},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteRegion{Signer: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteRegion{Signer: signer, Code: "NotExistCode"},
			err:     sdkerrors.ErrKeyNotFound,
		},
	}
	for _, tc := range tests {
		t.Run(tc.desc, func(t *testing.T) {
			_, srv, ctx := setupMsgServer(t)
			wctx := sdk.UnwrapSDKContext(ctx)

			_, err := srv.CreateRegion(wctx, &types.MsgCreateRegion{Signer: signer})
			require.NoError(t, err)
			_, err = srv.DeleteRegion(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
