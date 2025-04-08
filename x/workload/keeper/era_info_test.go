package keeper_test

import (
	"context"
	"testing"

	"github.com/stretchr/testify/require"

	keepertest "enreach/testutil/keeper"
	"enreach/testutil/nullify"
	"enreach/x/workload/keeper"
	"enreach/x/workload/types"
)

func createTestCurrentEra(keeper keeper.Keeper, ctx context.Context) types.EraInfo {
	item := types.EraInfo{}
	keeper.SetCurrentEra(ctx, &item)
	return item
}

func TestCurrentEraGet(t *testing.T) {
	keeper, ctx := keepertest.WorkloadKeeper(t)
	item := createTestCurrentEra(keeper, ctx)
	rst, found := keeper.GetCurrentEra(ctx)
	require.True(t, found)
	require.Equal(t,
		nullify.Fill(&item),
		nullify.Fill(&rst),
	)
}
