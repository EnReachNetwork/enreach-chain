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
	"enreach/x/edgenode/types"
)

func TestNodeQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.EdgenodeKeeper(t)
	msgs := createNNode(keeper, ctx, 2)
	tests := []struct {
		desc     string
		request  *types.QueryGetNodeRequest
		response *types.QueryGetNodeResponse
		err      error
	}{
		{
			desc:     "First",
			request:  &types.QueryGetNodeRequest{NodeID: msgs[0].NodeID},
			response: &types.QueryGetNodeResponse{Node: msgs[0]},
		},
		{
			desc:     "Second",
			request:  &types.QueryGetNodeRequest{NodeID: msgs[1].NodeID},
			response: &types.QueryGetNodeResponse{Node: msgs[1]},
		},
		{
			desc:    "KeyNotFound",
			request: &types.QueryGetNodeRequest{NodeID: "NotExistNodeID"},
			err:     sdkerrors.ErrKeyNotFound,
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	}
	for _, tc := range tests {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.Node(ctx, tc.request)
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

func TestNodeQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.EdgenodeKeeper(t)
	msgs := createNNode(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllNodeRequest {
		return &types.QueryAllNodeRequest{
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
			resp, err := keeper.NodeAll(ctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Node), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.Node),
			)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.NodeAll(ctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Node), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.Node),
			)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.NodeAll(ctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
		require.ElementsMatch(t,
			nullify.Fill(msgs),
			nullify.Fill(resp.Node),
		)
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.NodeAll(ctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}
