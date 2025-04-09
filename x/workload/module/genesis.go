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
	if genState.CurrentEra != nil {
		k.SetCurrentEra(ctx, genState.CurrentEra)
	}
	if genState.PendingNextEra != nil {
		k.SetPendingNextEra(ctx, genState.PendingNextEra)
	}
	// this line is used by starport scaffolding # genesis/module/init

	// Initialize default param settings
	initDefaultParamSettings(ctx, k, genState)

	// Initialize genesis epochInfo and eraInfo
	initGenesisEpoch(ctx, k, genState)
	initGenesisEra(ctx, k, genState)
}

func initDefaultParamSettings(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {

	params := genState.Params
	if _, ok := params.Data[types.PK_EPOCH_LENGTH]; !ok {
		params.Data[types.PK_EPOCH_LENGTH] = strconv.FormatUint(types.DEFAULT_EPOCH_LENGTH, 10)
	}
	if _, ok := params.Data[types.PK_ERA_LENGTH]; !ok {
		params.Data[types.PK_ERA_LENGTH] = strconv.FormatUint(types.DEFAULT_ERA_LENGTH, 10)
	}
	if _, ok := params.Data[types.PK_WORKREPORT_PROCESS_BATCH_SIZE]; !ok {
		params.Data[types.PK_WORKREPORT_PROCESS_BATCH_SIZE] = strconv.FormatUint(types.DEFAULT_WORKREPORT_PROCESS_BATCH_SIZE, 10)
	}
	if _, ok := params.Data[types.PK_REPUTATION_POINT_PROCESS_BATCH_SIZE]; !ok {
		params.Data[types.PK_REPUTATION_POINT_PROCESS_BATCH_SIZE] = strconv.FormatUint(types.DEFAULT_REPUTATION_POINT_PROCESS_BATCH_SIZE, 10)
	}
	if _, ok := params.Data[types.PK_CHEAT_STATUS_PROCESS_BATCH_SIZE]; !ok {
		params.Data[types.PK_CHEAT_STATUS_PROCESS_BATCH_SIZE] = strconv.FormatUint(types.DEFAULT_CHEAT_STATUS_PROCESS_BATCH_SIZE, 10)
	}
	if _, ok := params.Data[types.PK_HISTORY_EPOCH_DATA_DEPTH]; !ok {
		params.Data[types.PK_HISTORY_EPOCH_DATA_DEPTH] = strconv.FormatUint(types.DEFAULT_HISTORY_EPOCH_DATA_DEPTH, 10)
	}
	if _, ok := params.Data[types.PK_HISTORY_ERA_DATA_DEPTH]; !ok {
		params.Data[types.PK_HISTORY_ERA_DATA_DEPTH] = strconv.FormatUint(types.DEFAULT_HISTORY_ERA_DATA_DEPTH, 10)
	}

	// Set to the store
	if err := k.SetParams(ctx, params); err != nil {
		panic(err)
	}
}

func initGenesisEpoch(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	if genState.CurrentEpoch == nil || genState.CurrentEpoch.Number == 0 {
		//Get the genesis time and truncate it to the nearest time
		blockHeight := uint64(ctx.BlockHeight())
		epochDuration := time.Duration(k.GetEpochLength(ctx)) * time.Second
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

func initGenesisEra(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	if genState.CurrentEra == nil || genState.CurrentEra.Number == 0 {
		//Get the genesis time and truncate it to the nearest time
		blockHeight := uint64(ctx.BlockHeight())
		eraDuration := time.Duration(k.GetEraLength(ctx)) * time.Second
		genesisTime := ctx.BlockTime()
		truncatedStartTime := genesisTime.Truncate(eraDuration)
		endTime := truncatedStartTime.Add(eraDuration)

		// Initialize the first era
		firstEra := types.EraInfo{
			Number:     1,
			StartTime:  genesisTime,
			StartBlock: blockHeight,
			EndTime:    endTime,
		}
		k.SetCurrentEra(ctx, &firstEra)
		k.SetPendingNextEra(ctx, nil) // Clear the Pending State

		// Emit era start event
		ctx.EventManager().EmitEvent(
			sdk.NewEvent(types.EventTypeEraStart,
				sdk.NewAttribute(sdk.AttributeKeyModule, types.ModuleName),
				sdk.NewAttribute(types.AttributeKeyEra, strconv.FormatUint(firstEra.Number, 10)),
				sdk.NewAttribute(types.AttributeKeyEraStartTime, firstEra.StartTime.Format(time.RFC3339)),
				sdk.NewAttribute(types.AttributeKeyEraStartBlock, strconv.FormatUint(firstEra.StartBlock, 10)),
				sdk.NewAttribute(types.AttributeKeyEraEndTime, firstEra.EndTime.Format(time.RFC3339)),
			),
		)
	} else {
		k.SetCurrentEra(ctx, genState.CurrentEra)
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
	currentEra, found := k.GetCurrentEra(ctx)
	if found {
		genesis.CurrentEra = &currentEra
	}
	pendingNextEra, found := k.GetPendingNextEra(ctx)
	if found {
		genesis.PendingNextEra = &pendingNextEra
	}
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
