package registry

import (
	sdk "github.com/cosmos/cosmos-sdk/types"

	"enreach/x/registry/keeper"
	"enreach/x/registry/types"
)

// InitGenesis initializes the module's state from a provided genesis state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the region
	for _, elem := range genState.RegionList {
		k.SetRegion(ctx, elem)
	}

	// Set region count
	k.SetRegionCount(ctx, genState.RegionCount)
	// Set if defined
	if genState.Superior != nil {
		k.SetSuperior(ctx, *genState.Superior)
	}
	if genState.AdminAccount != "" {
		k.SetAdminAccount(ctx, genState.AdminAccount)
	}
	// this line is used by starport scaffolding # genesis/module/init
	if err := k.SetParams(ctx, genState.Params); err != nil {
		panic(err)
	}
}

// ExportGenesis returns the module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.RegionList = k.GetAllRegion(ctx)
	genesis.RegionCount = k.GetRegionCount(ctx)
	// Get all superior
	superior, found := k.GetSuperior(ctx)
	if found {
		genesis.Superior = &superior
	}
	adminAccount, found := k.GetAdminAccount(ctx)
	if found {
		genesis.AdminAccount = adminAccount
	}
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
