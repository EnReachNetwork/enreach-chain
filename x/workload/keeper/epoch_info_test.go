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

func createTestCurrentEpoch(keeper keeper.Keeper, ctx context.Context) types.EpochInfo {
	item := types.EpochInfo{}
	keeper.SetCurrentEpoch(ctx, item)
	return item
}

func TestCurrentEpochGet(t *testing.T) {
	keeper, ctx := keepertest.WorkloadKeeper(t)
	item := createTestCurrentEpoch(keeper, ctx)
	rst, found := keeper.GetCurrentEpoch(ctx)
	require.True(t, found)
	require.Equal(t,
		nullify.Fill(&item),
		nullify.Fill(&rst),
	)
}
