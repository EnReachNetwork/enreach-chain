package keeper_test

import (
	"context"
	"testing"

	keepertest "enreach/testutil/keeper"
	"enreach/testutil/nullify"
	"enreach/x/manager/keeper"
	"enreach/x/manager/types"

	"github.com/stretchr/testify/require"
)

func createNManager(keeper keeper.Keeper, ctx context.Context, n int) []types.Manager {
	items := make([]types.Manager, n)
	for i := range items {
		items[i].Id = keeper.AppendManager(ctx, items[i])
	}
	return items
}

func TestManagerGet(t *testing.T) {
	keeper, ctx := keepertest.ManagerKeeper(t)
	items := createNManager(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetManager(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestManagerRemove(t *testing.T) {
	keeper, ctx := keepertest.ManagerKeeper(t)
	items := createNManager(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveManager(ctx, item.Id)
		_, found := keeper.GetManager(ctx, item.Id)
		require.False(t, found)
	}
}

func TestManagerGetAll(t *testing.T) {
	keeper, ctx := keepertest.ManagerKeeper(t)
	items := createNManager(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllManager(ctx)),
	)
}

func TestManagerCount(t *testing.T) {
	keeper, ctx := keepertest.ManagerKeeper(t)
	items := createNManager(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetManagerCount(ctx))
}
