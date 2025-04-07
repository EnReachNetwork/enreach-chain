package workload

import (
	"time"

	sdk "github.com/cosmos/cosmos-sdk/types"

	"enreach/x/workload/keeper"
	"enreach/x/workload/types"
)

// InitGenesis initializes the module's state from a provided genesis state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set if defined
	if genState.Superior != nil {
		k.SetSuperior(ctx, *genState.Superior)
	}
	// Set if defined
	if genState.CurrentEpoch != nil {
		k.SetCurrentEpoch(ctx, *genState.CurrentEpoch)
	}
	// this line is used by starport scaffolding # genesis/module/init
	if err := k.SetParams(ctx, genState.Params); err != nil {
		panic(err)
	}

	if genState.CurrentEpoch == nil {
		// Get the genesis time and truncate it to the nearest hour
		blockHeight := uint64(ctx.BlockHeight())
		genesisTime := ctx.BlockTime()
		startTime := genesisTime.Truncate(time.Hour)
		endTime := startTime.Add(time.Hour)

		// 初始化第一个 Epoch
		epochInfo := types.EpochInfo{
			Number:     1,
			StartTime:  startTime,
			StartBlock: blockHeight,
			EndTime:    endTime,
		}
		k.SetCurrentEpoch(ctx, epochInfo)
		k.SetPendingNextEpoch(ctx, nil) // Clear the Pending State
	} else {
		k.SetCurrentEpoch(ctx, *genState.CurrentEpoch)
	}
}

// ExportGenesis returns the module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	// Get all superior
	superior, found := k.GetSuperior(ctx)
	if found {
		genesis.Superior = &superior
	}
	// Get all epochInfo
	currentEpoch, found := k.GetCurrentEpoch(ctx)
	if found {
		genesis.CurrentEpoch = &currentEpoch
	}
	pendingNextEpoch, found := k.GetPendingNextEpoch(ctx)
	if found {
		genesis.PendingNextEpoch = &pendingNextEpoch
	}
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
