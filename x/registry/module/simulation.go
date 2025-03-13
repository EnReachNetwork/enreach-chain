package registry

import (
	"math/rand"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"

	"enreach/testutil/sample"
	registrysimulation "enreach/x/registry/simulation"
	"enreach/x/registry/types"
)

// avoid unused import issue
var (
	_ = registrysimulation.FindAccount
	_ = rand.Rand{}
	_ = sample.AccAddress
	_ = sdk.AccAddress{}
	_ = simulation.MsgEntryKind
)

const (
	opWeightMsgCreateRegion = "op_weight_msg_region"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateRegion int = 100

	opWeightMsgUpdateRegion = "op_weight_msg_region"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateRegion int = 100

	opWeightMsgDeleteRegion = "op_weight_msg_region"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteRegion int = 100

	opWeightMsgCreateSuperior = "op_weight_msg_superior"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateSuperior int = 100

	opWeightMsgUpdateSuperior = "op_weight_msg_superior"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateSuperior int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module.
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	registryGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		RegionList: []types.Region{
			{
				Code:    "us",
				Creator: sample.AccAddress(),
			},
			{
				Code:    "eu",
				Creator: sample.AccAddress(),
			},
		},
		RegionCount: 2,
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&registryGenesis)
}

// RegisterStoreDecoder registers a decoder.
func (am AppModule) RegisterStoreDecoder(_ simtypes.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgCreateRegion int
	simState.AppParams.GetOrGenerate(opWeightMsgCreateRegion, &weightMsgCreateRegion, nil,
		func(_ *rand.Rand) {
			weightMsgCreateRegion = defaultWeightMsgCreateRegion
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateRegion,
		registrysimulation.SimulateMsgCreateRegion(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateRegion int
	simState.AppParams.GetOrGenerate(opWeightMsgUpdateRegion, &weightMsgUpdateRegion, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateRegion = defaultWeightMsgUpdateRegion
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateRegion,
		registrysimulation.SimulateMsgUpdateRegion(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteRegion int
	simState.AppParams.GetOrGenerate(opWeightMsgDeleteRegion, &weightMsgDeleteRegion, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteRegion = defaultWeightMsgDeleteRegion
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteRegion,
		registrysimulation.SimulateMsgDeleteRegion(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateSuperior int
	simState.AppParams.GetOrGenerate(opWeightMsgCreateSuperior, &weightMsgCreateSuperior, nil,
		func(_ *rand.Rand) {
			weightMsgCreateSuperior = defaultWeightMsgCreateSuperior
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateSuperior,
		registrysimulation.SimulateMsgCreateSuperior(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateSuperior int
	simState.AppParams.GetOrGenerate(opWeightMsgUpdateSuperior, &weightMsgUpdateSuperior, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateSuperior = defaultWeightMsgUpdateSuperior
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateSuperior,
		registrysimulation.SimulateMsgUpdateSuperior(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}

// ProposalMsgs returns msgs used for governance proposals for simulations.
func (am AppModule) ProposalMsgs(simState module.SimulationState) []simtypes.WeightedProposalMsg {
	return []simtypes.WeightedProposalMsg{
		simulation.NewWeightedProposalMsg(
			opWeightMsgCreateRegion,
			defaultWeightMsgCreateRegion,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				registrysimulation.SimulateMsgCreateRegion(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		simulation.NewWeightedProposalMsg(
			opWeightMsgUpdateRegion,
			defaultWeightMsgUpdateRegion,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				registrysimulation.SimulateMsgUpdateRegion(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		simulation.NewWeightedProposalMsg(
			opWeightMsgDeleteRegion,
			defaultWeightMsgDeleteRegion,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				registrysimulation.SimulateMsgDeleteRegion(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		simulation.NewWeightedProposalMsg(
			opWeightMsgCreateSuperior,
			defaultWeightMsgCreateSuperior,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				registrysimulation.SimulateMsgCreateSuperior(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		simulation.NewWeightedProposalMsg(
			opWeightMsgUpdateSuperior,
			defaultWeightMsgUpdateSuperior,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				registrysimulation.SimulateMsgUpdateSuperior(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		// this line is used by starport scaffolding # simapp/module/OpMsg
	}
}
