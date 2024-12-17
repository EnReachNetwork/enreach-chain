package keeper_test

import (
	"context"
	"testing"

	keepertest "enreach/testutil/keeper"
	"enreach/testutil/nullify"
	"enreach/x/miner/keeper"
	"enreach/x/miner/types"

	"github.com/stretchr/testify/require"
)

func createNMiner(keeper keeper.Keeper, ctx context.Context, n int) []types.Miner {
	items := make([]types.Miner, n)
	for i := range items {
		items[i].Id = keeper.AppendMiner(ctx, items[i])
	}
	return items
}

func TestMinerGet(t *testing.T) {
	keeper, ctx := keepertest.MinerKeeper(t)
	items := createNMiner(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetMiner(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestMinerRemove(t *testing.T) {
	keeper, ctx := keepertest.MinerKeeper(t)
	items := createNMiner(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveMiner(ctx, item.Id)
		_, found := keeper.GetMiner(ctx, item.Id)
		require.False(t, found)
	}
}

func TestMinerGetAll(t *testing.T) {
	keeper, ctx := keepertest.MinerKeeper(t)
	items := createNMiner(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllMiner(ctx)),
	)
}

func TestMinerCount(t *testing.T) {
	keeper, ctx := keepertest.MinerKeeper(t)
	items := createNMiner(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetMinerCount(ctx))
}
