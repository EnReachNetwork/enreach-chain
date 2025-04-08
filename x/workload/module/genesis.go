package workload

import (
	"strconv"
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
		k.SetCurrentEpoch(ctx, genState.CurrentEpoch)
	}
	if genState.PendingNextEpoch != nil {
		k.SetPendingNextEpoch(ctx, genState.PendingNextEpoch)
	}
	// this line is used by starport scaffolding # genesis/module/init
	if err := k.SetParams(ctx, genState.Params); err != nil {
		panic(err)
	}

	if genState.CurrentEpoch == nil || genState.CurrentEpoch.Number == 0 {
		//Get the genesis time and truncate it to the nearest time
		blockHeight := uint64(ctx.BlockHeight())
		epochDuration := time.Duration(types.EPOCH_LENGTH) * time.Second
		genesisTime := ctx.BlockTime()
		truncatedStartTime := genesisTime.Truncate(epochDuration)
		endTime := truncatedStartTime.Add(epochDuration)

		// Initialize the first epoch
		firstEpoch := types.EpochInfo{
			Number:     1,
			StartTime:  genesisTime,
			StartBlock: blockHeight,
			EndTime:    endTime,
		}
		k.SetCurrentEpoch(ctx, &firstEpoch)
		k.SetPendingNextEpoch(ctx, nil) // Clear the Pending State

		// Emit epoch start event
		ctx.EventManager().EmitEvent(
			sdk.NewEvent(types.EventTypeEpochStart,
				sdk.NewAttribute(sdk.AttributeKeyModule, types.ModuleName),
				sdk.NewAttribute(types.AttributeKeyEpoch, strconv.FormatUint(firstEpoch.Number, 10)),
				sdk.NewAttribute(types.AttributeKeyEpochStartTime, firstEpoch.StartTime.Format(time.RFC3339)),
				sdk.NewAttribute(types.AttributeKeyEpochStartBlock, strconv.FormatUint(firstEpoch.StartBlock, 10)),
				sdk.NewAttribute(types.AttributeKeyEpochEndTime, firstEpoch.EndTime.Format(time.RFC3339)),
			),
		)
	} else {
		k.SetCurrentEpoch(ctx, genState.CurrentEpoch)
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
