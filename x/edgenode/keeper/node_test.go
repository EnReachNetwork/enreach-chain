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

func createNNode(keeper keeper.Keeper, ctx context.Context, n int) []types.Node {
	items := make([]types.Node, n)
	for i := range items {
		keeper.AppendNode(ctx, items[i])
	}
	return items
}

func TestNodeGet(t *testing.T) {
	keeper, ctx := keepertest.EdgenodeKeeper(t)
	items := createNNode(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetNode(ctx, item.NodeID)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestNodeGetAll(t *testing.T) {
	keeper, ctx := keepertest.EdgenodeKeeper(t)
	items := createNNode(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllNode(ctx)),
	)
}

func TestNodeCount(t *testing.T) {
	keeper, ctx := keepertest.EdgenodeKeeper(t)
	items := createNNode(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetNodeCount(ctx))
}
