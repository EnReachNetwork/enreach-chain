package keeper_test

import (
	"context"
	"testing"

	keepertest "enreach/testutil/keeper"
	"enreach/testutil/nullify"
	"enreach/x/registry/keeper"
	"enreach/x/registry/types"

	"github.com/stretchr/testify/require"
)

func createNRegion(keeper keeper.Keeper, ctx context.Context, n int) []types.Region {
	items := make([]types.Region, n)
	for i := range items {
		keeper.AppendRegion(ctx, items[i])
	}
	return items
}

func TestRegionGet(t *testing.T) {
	keeper, ctx := keepertest.RegistryKeeper(t)
	items := createNRegion(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetRegion(ctx, item.Code)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestRegionRemove(t *testing.T) {
	keeper, ctx := keepertest.RegistryKeeper(t)
	items := createNRegion(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveRegion(ctx, item.Code)
		_, found := keeper.GetRegion(ctx, item.Code)
		require.False(t, found)
	}
}

func TestRegionGetAll(t *testing.T) {
	keeper, ctx := keepertest.RegistryKeeper(t)
	items := createNRegion(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllRegion(ctx)),
	)
}

func TestRegionCount(t *testing.T) {
	keeper, ctx := keepertest.RegistryKeeper(t)
	items := createNRegion(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetRegionCount(ctx))
}
