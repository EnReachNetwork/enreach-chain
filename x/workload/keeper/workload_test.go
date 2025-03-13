package keeper_test

import (
	"context"
	"testing"

	keepertest "enreach/testutil/keeper"
	"enreach/testutil/nullify"
	"enreach/x/workload/keeper"
	"enreach/x/workload/types"

	"github.com/stretchr/testify/require"
)

func createNWorkload(keeper keeper.Keeper, ctx context.Context, n int) []types.Workload {
	items := make([]types.Workload, n)
	for i := range items {
		items[i].Id = keeper.AppendWorkload(ctx, items[i])
	}
	return items
}

func TestWorkloadGet(t *testing.T) {
	keeper, ctx := keepertest.WorkloadKeeper(t)
	items := createNWorkload(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetWorkload(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestWorkloadGetAll(t *testing.T) {
	keeper, ctx := keepertest.WorkloadKeeper(t)
	items := createNWorkload(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllWorkload(ctx)),
	)
}

func TestWorkloadCount(t *testing.T) {
	keeper, ctx := keepertest.WorkloadKeeper(t)
	items := createNWorkload(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetWorkloadCount(ctx))
}
