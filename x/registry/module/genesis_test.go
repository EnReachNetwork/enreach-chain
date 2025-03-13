package registry_test

import (
	"testing"

	keepertest "enreach/testutil/keeper"
	"enreach/testutil/nullify"
	registry "enreach/x/registry/module"
	"enreach/x/registry/types"

	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		RegionList: []types.Region{
			{
				Code: "us",
			},
			{
				Code: "eu",
			},
		},
		RegionCount: 2,
		Superior: &types.Superior{
			Account:  "25",
			Creator:  "52",
			CreateAt: 18,
			Updator:  "19",
			UpdateAt: 33,
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.RegistryKeeper(t)
	registry.InitGenesis(ctx, k, genesisState)
	got := registry.ExportGenesis(ctx, k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.RegionList, got.RegionList)
	require.Equal(t, genesisState.RegionCount, got.RegionCount)
	require.Equal(t, genesisState.Superior, got.Superior)
	// this line is used by starport scaffolding # genesis/test/assert
}
