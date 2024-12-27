package workload_test

import (
	"testing"

	keepertest "enreach/testutil/keeper"
	"enreach/testutil/nullify"
	workload "enreach/x/workload/module"
	"enreach/x/workload/types"

	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		WorkloadList: []types.Workload{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		WorkloadCount: 2,
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.WorkloadKeeper(t)
	workload.InitGenesis(ctx, k, genesisState)
	got := workload.ExportGenesis(ctx, k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.WorkloadList, got.WorkloadList)
	require.Equal(t, genesisState.WorkloadCount, got.WorkloadCount)
	// this line is used by starport scaffolding # genesis/test/assert
}
