package enreach_test

import (
	"testing"

	keepertest "enreach/testutil/keeper"
	"enreach/testutil/nullify"
	enreach "enreach/x/enreach/module"
	"enreach/x/enreach/types"

	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.EnreachKeeper(t)
	enreach.InitGenesis(ctx, k, genesisState)
	got := enreach.ExportGenesis(ctx, k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
