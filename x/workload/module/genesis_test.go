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

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.WorkloadKeeper(t)
	workload.InitGenesis(ctx, k, genesisState)
	got := workload.ExportGenesis(ctx, k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
