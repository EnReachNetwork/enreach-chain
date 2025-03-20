package keeper_test

import (
	"context"
	"testing"

	"github.com/stretchr/testify/require"

	keepertest "enreach/testutil/keeper"
	"enreach/testutil/nullify"
	"enreach/x/manager/keeper"
	"enreach/x/manager/types"
)

func createTestSuperior(keeper keeper.Keeper, ctx context.Context) types.Superior {
	item := types.Superior{}
	keeper.SetSuperior(ctx, item)
	return item
}

func TestSuperiorGet(t *testing.T) {
	keeper, ctx := keepertest.ManagerKeeper(t)
	item := createTestSuperior(keeper, ctx)
	rst, found := keeper.GetSuperior(ctx)
	require.True(t, found)
	require.Equal(t,
		nullify.Fill(&item),
		nullify.Fill(&rst),
	)
}

func TestSuperiorRemove(t *testing.T) {
	keeper, ctx := keepertest.ManagerKeeper(t)
	createTestSuperior(keeper, ctx)
	keeper.RemoveSuperior(ctx)
	_, found := keeper.GetSuperior(ctx)
	require.False(t, found)
}
