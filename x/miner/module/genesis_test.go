package miner_test

import (
	"testing"

	keepertest "enreach/testutil/keeper"
	"enreach/testutil/nullify"
	miner "enreach/x/miner/module"
	"enreach/x/miner/types"

	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		MinerList: []types.Miner{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		MinerCount: 2,
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.MinerKeeper(t)
	miner.InitGenesis(ctx, k, genesisState)
	got := miner.ExportGenesis(ctx, k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.MinerList, got.MinerList)
	require.Equal(t, genesisState.MinerCount, got.MinerCount)
	// this line is used by starport scaffolding # genesis/test/assert
}
