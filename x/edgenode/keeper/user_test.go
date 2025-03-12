package keeper_test

import (
	"context"
	"testing"

	keepertest "enreach/testutil/keeper"
	"enreach/testutil/nullify"
	"enreach/x/edgenode/keeper"
	"enreach/x/edgenode/types"

	"github.com/stretchr/testify/require"
)

func createNUser(keeper keeper.Keeper, ctx context.Context, n int) []types.User {
	items := make([]types.User, n)
	for i := range items {
		keeper.AppendUser(ctx, items[i])
	}
	return items
}

func TestUserGet(t *testing.T) {
	keeper, ctx := keepertest.EdgenodeKeeper(t)
	items := createNUser(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetUser(ctx, item.UserID)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestUserGetAll(t *testing.T) {
	keeper, ctx := keepertest.EdgenodeKeeper(t)
	items := createNUser(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllUser(ctx)),
	)
}

func TestUserCount(t *testing.T) {
	keeper, ctx := keepertest.EdgenodeKeeper(t)
	items := createNUser(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetUserCount(ctx))
}
