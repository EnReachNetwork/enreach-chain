package keeper_test

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	keepertest "enreach/testutil/keeper"
	"enreach/testutil/nullify"
	"enreach/x/registry/types"
)

func TestRegionQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.RegistryKeeper(t)
	msgs := createNRegion(keeper, ctx, 2)
	tests := []struct {
		desc     string
		request  *types.QueryGetRegionRequest
		response *types.QueryGetRegionResponse
		err      error
	}{
		{
			desc:     "First",
			request:  &types.QueryGetRegionRequest{Code: msgs[0].Code},
			response: &types.QueryGetRegionResponse{Region: msgs[0]},
		},
		{
			desc:     "Second",
			request:  &types.QueryGetRegionRequest{Code: msgs[1].Code},
			response: &types.QueryGetRegionResponse{Region: msgs[1]},
		},
		{
			desc:    "KeyNotFound",
			request: &types.QueryGetRegionRequest{Code: "NotExistCode"},
			err:     sdkerrors.ErrKeyNotFound,
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	}
	for _, tc := range tests {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.Region(ctx, tc.request)
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

func TestRegionQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.RegistryKeeper(t)
	msgs := createNRegion(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllRegionRequest {
		return &types.QueryAllRegionRequest{
			Pagination: &query.PageRequest{
				Key:        next,
				Offset:     offset,
				Limit:      limit,
				CountTotal: total,
			},
		}
	}
	t.Run("ByOffset", func(t *testing.T) {
		step := 2
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.RegionAll(ctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Region), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.Region),
			)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.RegionAll(ctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Region), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.Region),
			)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.RegionAll(ctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
		require.ElementsMatch(t,
			nullify.Fill(msgs),
			nullify.Fill(resp.Region),
		)
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.RegionAll(ctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}
