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

func createNOperator(keeper keeper.Keeper, ctx context.Context, n int) []types.Operator {
	items := make([]types.Operator, n)
	for i := range items {
		keeper.AppendOperator(ctx, items[i])
	}
	return items
}

func TestOperatorGet(t *testing.T) {
	keeper, ctx := keepertest.ManagerKeeper(t)
	items := createNOperator(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetOperator(ctx, item.OperatorAccount)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestOperatorGetAll(t *testing.T) {
	keeper, ctx := keepertest.ManagerKeeper(t)
	items := createNOperator(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllOperator(ctx)),
	)
}

func TestOperatorCount(t *testing.T) {
	keeper, ctx := keepertest.ManagerKeeper(t)
	items := createNOperator(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetOperatorCount(ctx))
}
