package edgenode_test

import (
	"testing"

	keepertest "enreach/testutil/keeper"
	"enreach/testutil/nullify"
	edgenode "enreach/x/edgenode/module"
	"enreach/x/edgenode/types"

	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		UserList: []types.User{
			{
				UserID: "0",
			},
			{
				UserID: "1",
			},
		},
		UserCount: 2,
		NodeList: []types.Node{
			{
				UserID: "0",
			},
			{
				UserID: "1",
			},
		},
		NodeCount: 2,
		Superior: &types.Superior{
			Account:  "29",
			Creator:  "34",
			CreateAt: 57,
			Updator:  "92",
			UpdateAt: 92,
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.EdgenodeKeeper(t)
	edgenode.InitGenesis(ctx, k, genesisState)
	got := edgenode.ExportGenesis(ctx, k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.UserList, got.UserList)
	require.Equal(t, genesisState.UserCount, got.UserCount)
	require.ElementsMatch(t, genesisState.NodeList, got.NodeList)
	require.Equal(t, genesisState.NodeCount, got.NodeCount)
	require.Equal(t, genesisState.Superior, got.Superior)
	// this line is used by starport scaffolding # genesis/test/assert
}
