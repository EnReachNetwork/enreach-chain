package edgenode

import (
	sdk "github.com/cosmos/cosmos-sdk/types"

	"enreach/x/edgenode/keeper"
	"enreach/x/edgenode/types"
)

// InitGenesis initializes the module's state from a provided genesis state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the user
	for _, elem := range genState.UserList {
		k.SetUser(ctx, elem)
	}

	// Set user count
	k.SetUserCount(ctx, genState.UserCount)
	// Set all the node
	for _, elem := range genState.NodeList {
		k.SetNode(ctx, elem)
	}

	// Set node count
	k.SetNodeCount(ctx, genState.NodeCount)
	// Set if defined
	if genState.Superior != nil {
		k.SetSuperior(ctx, *genState.Superior)
	}
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.UserList = k.GetAllUser(ctx)
	genesis.UserCount = k.GetUserCount(ctx)
	genesis.NodeList = k.GetAllNode(ctx)
	genesis.NodeCount = k.GetNodeCount(ctx)
	// Get all superior
	superior, found := k.GetSuperior(ctx)
	if found {
		genesis.Superior = &superior
	}
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
