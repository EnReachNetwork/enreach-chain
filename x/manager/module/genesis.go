package manager

import (
	sdk "github.com/cosmos/cosmos-sdk/types"

	"enreach/x/manager/keeper"
	"enreach/x/manager/types"
)

// InitGenesis initializes the module's state from a provided genesis state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the manager
	for _, elem := range genState.ManagerList {
		k.SetManager(ctx, elem)
	}

	// Set manager count
	k.SetManagerCount(ctx, genState.ManagerCount)
	// this line is used by starport scaffolding # genesis/module/init
	if err := k.SetParams(ctx, genState.Params); err != nil {
		panic(err)
	}
}

// ExportGenesis returns the module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.ManagerList = k.GetAllManager(ctx)
	genesis.ManagerCount = k.GetManagerCount(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
