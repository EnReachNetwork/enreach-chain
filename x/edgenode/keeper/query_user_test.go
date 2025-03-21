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

func TestUserQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.EdgenodeKeeper(t)
	msgs := createNUser(keeper, ctx, 2)
	tests := []struct {
		desc     string
		request  *types.QueryGetUserRequest
		response *types.QueryGetUserResponse
		err      error
	}{
		{
			desc:     "First",
			request:  &types.QueryGetUserRequest{UserID: msgs[0].UserID},
			response: &types.QueryGetUserResponse{User: msgs[0]},
		},
		{
			desc:     "Second",
			request:  &types.QueryGetUserRequest{UserID: msgs[1].UserID},
			response: &types.QueryGetUserResponse{User: msgs[1]},
		},
		{
			desc:    "KeyNotFound",
			request: &types.QueryGetUserRequest{UserID: "NotExistUserID"},
			err:     sdkerrors.ErrKeyNotFound,
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	}
	for _, tc := range tests {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.User(ctx, tc.request)
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

func TestUserQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.EdgenodeKeeper(t)
	msgs := createNUser(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllUserRequest {
		return &types.QueryAllUserRequest{
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
			resp, err := keeper.UserAll(ctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.User), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.User),
			)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.UserAll(ctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.User), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.User),
			)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.UserAll(ctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
		require.ElementsMatch(t,
			nullify.Fill(msgs),
			nullify.Fill(resp.User),
		)
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.UserAll(ctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}
