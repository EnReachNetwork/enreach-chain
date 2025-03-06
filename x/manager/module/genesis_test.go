package manager_test

import (
	"testing"

	keepertest "enreach/testutil/keeper"
	"enreach/testutil/nullify"
	manager "enreach/x/manager/module"
	"enreach/x/manager/types"

	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		ManagerList: []types.Manager{
			{
				ManagerAccount: "alice",
			},
			{
				ManagerAccount: "bob",
			},
		},
		ManagerCount: 2,
		OperatorList: []types.Operator{
			{
				OperatorAccount: "alice",
			},
			{
				OperatorAccount: "bob",
			},
		},
		OperatorCount: 2,
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.ManagerKeeper(t)
	manager.InitGenesis(ctx, k, genesisState)
	got := manager.ExportGenesis(ctx, k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.ManagerList, got.ManagerList)
	require.Equal(t, genesisState.ManagerCount, got.ManagerCount)
	require.ElementsMatch(t, genesisState.OperatorList, got.OperatorList)
	require.Equal(t, genesisState.OperatorCount, got.OperatorCount)
	require.ElementsMatch(t, genesisState.OperatorList, got.OperatorList)
	require.Equal(t, genesisState.OperatorCount, got.OperatorCount)
	// this line is used by starport scaffolding # genesis/test/assert
}
