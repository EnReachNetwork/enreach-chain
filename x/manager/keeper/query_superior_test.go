package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	keepertest "enreach/testutil/keeper"
	"enreach/testutil/nullify"
	"enreach/x/manager/types"
)

func TestSuperiorQuery(t *testing.T) {
	keeper, ctx := keepertest.ManagerKeeper(t)
	item := createTestSuperior(keeper, ctx)
	tests := []struct {
		desc     string
		request  *types.QueryGetSuperiorRequest
		response *types.QueryGetSuperiorResponse
		err      error
	}{
		{
			desc:     "First",
			request:  &types.QueryGetSuperiorRequest{},
			response: &types.QueryGetSuperiorResponse{Superior: item},
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	}
	for _, tc := range tests {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.Superior(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				require.Equal(t,
					nullify.Fill(tc.response),
					nullify.Fill(response),
				)
			}
		})
	}
}
