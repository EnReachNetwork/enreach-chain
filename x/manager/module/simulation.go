package manager

import (
	"math/rand"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"

	"enreach/testutil/sample"
	managersimulation "enreach/x/manager/simulation"
	"enreach/x/manager/types"
)

// avoid unused import issue
var (
	_ = managersimulation.FindAccount
	_ = rand.Rand{}
	_ = sample.AccAddress
	_ = sdk.AccAddress{}
	_ = simulation.MsgEntryKind
)

const (
	opWeightMsgRegisterManager = "op_weight_msg_manager"
	// TODO: Determine the simulation weight value
	defaultWeightMsgRegisterManager int = 100

	opWeightMsgGoWorking = "op_weight_msg_manager"
	// TODO: Determine the simulation weight value
	defaultWeightMsgGoWorking int = 100

	opWeightMsgCreateOperator = "op_weight_msg_operator"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateOperator int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module.
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	managerGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		ManagerList: []types.Manager{
			{
				ManagerAccount: "alice",
			},
			{
				ManagerAccount: "bob",
			},
		},
		ManagerCount: 2,
		OperatorList: []types.Operator{
			{
				OperatorAccount: "alice",
			},
			{
				OperatorAccount: "bob",
			},
		},
		OperatorCount: 2,
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&managerGenesis)
}

// RegisterStoreDecoder registers a decoder.
func (am AppModule) RegisterStoreDecoder(_ simtypes.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgRegisterManager int
	simState.AppParams.GetOrGenerate(opWeightMsgRegisterManager, &weightMsgRegisterManager, nil,
		func(_ *rand.Rand) {
			weightMsgRegisterManager = defaultWeightMsgRegisterManager
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgRegisterManager,
		managersimulation.SimulateMsgRegisterManager(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateOperator int
	simState.AppParams.GetOrGenerate(opWeightMsgCreateOperator, &weightMsgCreateOperator, nil,
		func(_ *rand.Rand) {
			weightMsgCreateOperator = defaultWeightMsgCreateOperator
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateOperator,
		managersimulation.SimulateMsgCreateOperator(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}

// ProposalMsgs returns msgs used for governance proposals for simulations.
func (am AppModule) ProposalMsgs(simState module.SimulationState) []simtypes.WeightedProposalMsg {
	return []simtypes.WeightedProposalMsg{
		simulation.NewWeightedProposalMsg(
			opWeightMsgRegisterManager,
			defaultWeightMsgRegisterManager,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				managersimulation.SimulateMsgRegisterManager(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		simulation.NewWeightedProposalMsg(
			opWeightMsgCreateOperator,
			defaultWeightMsgCreateOperator,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				managersimulation.SimulateMsgCreateOperator(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		// this line is used by starport scaffolding # simapp/module/OpMsg
	}
}
