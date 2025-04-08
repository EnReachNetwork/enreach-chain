package workload

import (
	"context"
	"encoding/json"
	"fmt"
	"strconv"
	"time"

	"cosmossdk.io/core/appmodule"
	"cosmossdk.io/core/store"
	"cosmossdk.io/depinject"
	"cosmossdk.io/log"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	authtypes "github.com/cosmos/cosmos-sdk/x/auth/types"
	govtypes "github.com/cosmos/cosmos-sdk/x/gov/types"
	"github.com/grpc-ecosystem/grpc-gateway/runtime"

	// this line is used by starport scaffolding # 1

	modulev1 "enreach/api/enreach/workload/module"
	"enreach/x/workload/keeper"
	"enreach/x/workload/types"
)

var (
	_ module.AppModuleBasic      = (*AppModule)(nil)
	_ module.AppModuleSimulation = (*AppModule)(nil)
	_ module.HasGenesis          = (*AppModule)(nil)
	_ module.HasInvariants       = (*AppModule)(nil)
	_ module.HasConsensusVersion = (*AppModule)(nil)

	_ appmodule.AppModule       = (*AppModule)(nil)
	_ appmodule.HasBeginBlocker = (*AppModule)(nil)
	_ appmodule.HasEndBlocker   = (*AppModule)(nil)
)

// ----------------------------------------------------------------------------
// AppModuleBasic
// ----------------------------------------------------------------------------

// AppModuleBasic implements the AppModuleBasic interface that defines the
// independent methods a Cosmos SDK module needs to implement.
type AppModuleBasic struct {
	cdc codec.BinaryCodec
}

func NewAppModuleBasic(cdc codec.BinaryCodec) AppModuleBasic {
	return AppModuleBasic{cdc: cdc}
}

// Name returns the name of the module as a string.
func (AppModuleBasic) Name() string {
	return types.ModuleName
}

// RegisterLegacyAminoCodec registers the amino codec for the module, which is used
// to marshal and unmarshal structs to/from []byte in order to persist them in the module's KVStore.
func (AppModuleBasic) RegisterLegacyAminoCodec(cdc *codec.LegacyAmino) {}

// RegisterInterfaces registers a module's interface types and their concrete implementations as proto.Message.
func (a AppModuleBasic) RegisterInterfaces(reg cdctypes.InterfaceRegistry) {
	types.RegisterInterfaces(reg)
}

// DefaultGenesis returns a default GenesisState for the module, marshalled to json.RawMessage.
// The default GenesisState need to be defined by the module developer and is primarily used for testing.
func (AppModuleBasic) DefaultGenesis(cdc codec.JSONCodec) json.RawMessage {
	return cdc.MustMarshalJSON(types.DefaultGenesis())
}

// ValidateGenesis used to validate the GenesisState, given in its json.RawMessage form.
func (AppModuleBasic) ValidateGenesis(cdc codec.JSONCodec, config client.TxEncodingConfig, bz json.RawMessage) error {
	var genState types.GenesisState
	if err := cdc.UnmarshalJSON(bz, &genState); err != nil {
		return fmt.Errorf("failed to unmarshal %s genesis state: %w", types.ModuleName, err)
	}
	return genState.Validate()
}

// RegisterGRPCGatewayRoutes registers the gRPC Gateway routes for the module.
func (AppModuleBasic) RegisterGRPCGatewayRoutes(clientCtx client.Context, mux *runtime.ServeMux) {
	if err := types.RegisterQueryHandlerClient(context.Background(), mux, types.NewQueryClient(clientCtx)); err != nil {
		panic(err)
	}
}

// ----------------------------------------------------------------------------
// AppModule
// ----------------------------------------------------------------------------

// AppModule implements the AppModule interface that defines the inter-dependent methods that modules need to implement
type AppModule struct {
	AppModuleBasic

	keeper         keeper.Keeper
	accountKeeper  types.AccountKeeper
	bankKeeper     types.BankKeeper
	managerKeeper  types.ManagerKeeper
	edgenodeKeeper types.EdgenodeKeeper
}

func NewAppModule(
	cdc codec.Codec,
	keeper keeper.Keeper,
	accountKeeper types.AccountKeeper,
	bankKeeper types.BankKeeper,
	managerKeeper types.ManagerKeeper,
	edgenodeKeeper types.EdgenodeKeeper,
) AppModule {
	return AppModule{
		AppModuleBasic: NewAppModuleBasic(cdc),
		keeper:         keeper,
		accountKeeper:  accountKeeper,
		bankKeeper:     bankKeeper,
		managerKeeper:  managerKeeper,
		edgenodeKeeper: edgenodeKeeper,
	}
}

// RegisterServices registers a gRPC query service to respond to the module-specific gRPC queries
func (am AppModule) RegisterServices(cfg module.Configurator) {
	types.RegisterMsgServer(cfg.MsgServer(), keeper.NewMsgServerImpl(am.keeper))
	types.RegisterQueryServer(cfg.QueryServer(), am.keeper)
}

// RegisterInvariants registers the invariants of the module. If an invariant deviates from its predicted value, the InvariantRegistry triggers appropriate logic (most often the chain will be halted)
func (am AppModule) RegisterInvariants(_ sdk.InvariantRegistry) {}

// InitGenesis performs the module's genesis initialization. It returns no validator updates.
func (am AppModule) InitGenesis(ctx sdk.Context, cdc codec.JSONCodec, gs json.RawMessage) {
	var genState types.GenesisState
	// Initialize global index to index in genesis state
	cdc.MustUnmarshalJSON(gs, &genState)

	InitGenesis(ctx, am.keeper, genState)
}

// ExportGenesis returns the module's exported genesis state as raw JSON bytes.
func (am AppModule) ExportGenesis(ctx sdk.Context, cdc codec.JSONCodec) json.RawMessage {
	genState := ExportGenesis(ctx, am.keeper)
	return cdc.MustMarshalJSON(genState)
}

// ConsensusVersion is a sequence number for state-breaking change of the module.
// It should be incremented on each consensus-breaking change introduced by the module.
// To avoid wrong/empty versions, the initial version should be set to 1.
func (AppModule) ConsensusVersion() uint64 { return 1 }

// BeginBlock contains the logic that is automatically triggered at the beginning of each block.
// The begin block implementation is optional.
func (am AppModule) BeginBlock(goCtx context.Context) error {
	k := am.keeper

	// Handle epoch change
	am.handleEpochChange(goCtx)

	// Handle era change
	am.handleEraChange(goCtx)

	// Process epoch workload
	k.ProcessEpochWorkload(goCtx)

	// Process era reputation point
	k.ProcessEraReputationPoint(goCtx)

	// Process era cheat status
	k.ProcessEraCheatStatus(goCtx)

	return nil
}

func (am AppModule) handleEpochChange(goCtx context.Context) error {
	ctx := sdk.UnwrapSDKContext(goCtx)
	k := am.keeper
	blockHeight := uint64(ctx.BlockHeight())
	currentTime := ctx.BlockTime()

	// Handle epoch start
	pendingNextEpoch, found := k.GetPendingNextEpoch(ctx)
	if found {
		// Update current epoch and clear the pending next epoch
		newEpoch := types.EpochInfo{
			Number:     pendingNextEpoch.Number,
			StartTime:  pendingNextEpoch.StartTime,
			StartBlock: blockHeight,
			EndTime:    pendingNextEpoch.EndTime,
		}
		k.SetCurrentEpoch(ctx, &newEpoch)
		k.SetPendingNextEpoch(ctx, nil)

		// Hook for onEpochStart
		am.onEpochStart(ctx, &newEpoch)
	}

	// Handle epoch end
	currentEpoch, _ := k.GetCurrentEpoch(ctx)
	if currentTime.After(currentEpoch.EndTime) || currentTime.Equal(currentEpoch.EndTime) {
		// Set the end block
		currentEpoch.EndBlock = blockHeight

		// Add to the history epoch list
		k.AppendHistoryEpoch(ctx, &currentEpoch)

		// Calculate next epoch and store in DB to be processed by next begin_block
		epochDuration := time.Duration(types.EPOCH_LENGTH) * time.Second
		nextEpoch := types.EpochInfo{
			Number:    currentEpoch.Number + 1,
			StartTime: currentEpoch.EndTime,
			EndTime:   currentEpoch.EndTime.Add(epochDuration),
		}
		k.SetPendingNextEpoch(ctx, &nextEpoch)

		// Hook for onEpochEnd
		am.onEpochEnd(ctx, &currentEpoch)
	}

	return nil
}

func (am AppModule) handleEraChange(goCtx context.Context) error {
	ctx := sdk.UnwrapSDKContext(goCtx)
	k := am.keeper
	blockHeight := uint64(ctx.BlockHeight())
	currentTime := ctx.BlockTime()

	// Handle era start
	pendingNextEra, found := k.GetPendingNextEra(ctx)
	if found {
		// Update current era and clear the pending next era
		newEra := types.EraInfo{
			Number:     pendingNextEra.Number,
			StartTime:  pendingNextEra.StartTime,
			StartBlock: blockHeight,
			EndTime:    pendingNextEra.EndTime,
		}
		k.SetCurrentEra(ctx, &newEra)
		k.SetPendingNextEra(ctx, nil)

		// Hook for onEraStart
		am.onEraStart(ctx, &newEra)
	}

	// Handle era end
	currentEra, _ := k.GetCurrentEra(ctx)
	if currentTime.After(currentEra.EndTime) || currentTime.Equal(currentEra.EndTime) {
		// Set the end block
		currentEra.EndBlock = blockHeight

		// Add to the history era list
		k.AppendHistoryEra(ctx, &currentEra)

		// Calculate next era and store in DB to be processed by next begin_block
		eraDuration := time.Duration(types.ERA_LENGTH) * time.Second
		nextEra := types.EraInfo{
			Number:    currentEra.Number + 1,
			StartTime: currentEra.EndTime,
			EndTime:   currentEra.EndTime.Add(eraDuration),
		}
		k.SetPendingNextEra(ctx, &nextEra)

		// Hook for onEraEnd
		am.onEraEnd(ctx, &currentEra)
	}

	return nil
}

func (am AppModule) onEpochStart(ctx sdk.Context, epochInfo *types.EpochInfo) error {
	// Emit epoch start event
	ctx.EventManager().EmitEvent(
		sdk.NewEvent(types.EventTypeEpochStart,
			sdk.NewAttribute(sdk.AttributeKeyModule, types.ModuleName),
			sdk.NewAttribute(types.AttributeKeyEpoch, strconv.FormatUint(epochInfo.Number, 10)),
			sdk.NewAttribute(types.AttributeKeyEpochStartTime, epochInfo.StartTime.Format(time.RFC3339)),
			sdk.NewAttribute(types.AttributeKeyEpochStartBlock, strconv.FormatUint(epochInfo.StartBlock, 10)),
			sdk.NewAttribute(types.AttributeKeyEpochEndTime, epochInfo.EndTime.Format(time.RFC3339)),
		),
	)

	return nil
}

func (am AppModule) onEpochEnd(ctx sdk.Context, epochInfo *types.EpochInfo) error {
	// Emit epoch end event
	ctx.EventManager().EmitEvent(
		sdk.NewEvent(types.EventTypeEpochEnd,
			sdk.NewAttribute(sdk.AttributeKeyModule, types.ModuleName),
			sdk.NewAttribute(types.AttributeKeyEpoch, strconv.FormatUint(epochInfo.Number, 10)),
			sdk.NewAttribute(types.AttributeKeyEpochStartTime, epochInfo.StartTime.Format(time.RFC3339)),
			sdk.NewAttribute(types.AttributeKeyEpochStartBlock, strconv.FormatUint(epochInfo.StartBlock, 10)),
			sdk.NewAttribute(types.AttributeKeyEpochEndTime, epochInfo.EndTime.Format(time.RFC3339)),
			sdk.NewAttribute(types.AttributeKeyEpochEndBlock, strconv.FormatUint(epochInfo.EndBlock, 10)),
		),
	)

	return nil
}

func (am AppModule) onEraStart(ctx sdk.Context, eraInfo *types.EraInfo) error {
	// Emit era start event
	ctx.EventManager().EmitEvent(
		sdk.NewEvent(types.EventTypeEraStart,
			sdk.NewAttribute(sdk.AttributeKeyModule, types.ModuleName),
			sdk.NewAttribute(types.AttributeKeyEra, strconv.FormatUint(eraInfo.Number, 10)),
			sdk.NewAttribute(types.AttributeKeyEraStartTime, eraInfo.StartTime.Format(time.RFC3339)),
			sdk.NewAttribute(types.AttributeKeyEraStartBlock, strconv.FormatUint(eraInfo.StartBlock, 10)),
			sdk.NewAttribute(types.AttributeKeyEraEndTime, eraInfo.EndTime.Format(time.RFC3339)),
		),
	)

	return nil
}

func (am AppModule) onEraEnd(ctx sdk.Context, eraInfo *types.EraInfo) error {
	// Emit era end event
	ctx.EventManager().EmitEvent(
		sdk.NewEvent(types.EventTypeEraEnd,
			sdk.NewAttribute(sdk.AttributeKeyModule, types.ModuleName),
			sdk.NewAttribute(types.AttributeKeyEra, strconv.FormatUint(eraInfo.Number, 10)),
			sdk.NewAttribute(types.AttributeKeyEraStartTime, eraInfo.StartTime.Format(time.RFC3339)),
			sdk.NewAttribute(types.AttributeKeyEraStartBlock, strconv.FormatUint(eraInfo.StartBlock, 10)),
			sdk.NewAttribute(types.AttributeKeyEraEndTime, eraInfo.EndTime.Format(time.RFC3339)),
			sdk.NewAttribute(types.AttributeKeyEraEndBlock, strconv.FormatUint(eraInfo.EndBlock, 10)),
		),
	)

	return nil
}

// EndBlock contains the logic that is automatically triggered at the end of each block.
// The end block implementation is optional.
func (am AppModule) EndBlock(goCtx context.Context) error {
	return nil
}

// IsOnePerModuleType implements the depinject.OnePerModuleType interface.
func (am AppModule) IsOnePerModuleType() {}

// IsAppModule implements the appmodule.AppModule interface.
func (am AppModule) IsAppModule() {}

// ----------------------------------------------------------------------------
// App Wiring Setup
// ----------------------------------------------------------------------------

func init() {
	appmodule.Register(
		&modulev1.Module{},
		appmodule.Provide(ProvideModule),
	)
}

type ModuleInputs struct {
	depinject.In

	StoreService store.KVStoreService
	Cdc          codec.Codec
	Config       *modulev1.Module
	Logger       log.Logger

	AccountKeeper types.AccountKeeper
	BankKeeper    types.BankKeeper

	ManagerKeeper  types.ManagerKeeper
	EdgenodeKeeper types.EdgenodeKeeper
}

type ModuleOutputs struct {
	depinject.Out

	WorkloadKeeper keeper.Keeper
	Module         appmodule.AppModule
}

func ProvideModule(in ModuleInputs) ModuleOutputs {
	// default to governance authority if not provided
	authority := authtypes.NewModuleAddress(govtypes.ModuleName)
	if in.Config.Authority != "" {
		authority = authtypes.NewModuleAddressOrBech32Address(in.Config.Authority)
	}
	k := keeper.NewKeeper(
		in.Cdc,
		in.StoreService,
		in.Logger,
		authority.String(),
		in.ManagerKeeper,
		in.EdgenodeKeeper,
	)
	m := NewAppModule(
		in.Cdc,
		k,
		in.AccountKeeper,
		in.BankKeeper,
		in.ManagerKeeper,
		in.EdgenodeKeeper,
	)

	return ModuleOutputs{WorkloadKeeper: k, Module: m}
}
