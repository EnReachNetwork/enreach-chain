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

	opWeightMsgUpdateManager = "op_weight_msg_manager"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateManager int = 100

	opWeightMsgDeleteManager = "op_weight_msg_manager"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteManager int = 100

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
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		ManagerCount: 2,
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

	var weightMsgUpdateManager int
	simState.AppParams.GetOrGenerate(opWeightMsgUpdateManager, &weightMsgUpdateManager, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateManager = defaultWeightMsgUpdateManager
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateManager,
		managersimulation.SimulateMsgUpdateManager(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteManager int
	simState.AppParams.GetOrGenerate(opWeightMsgDeleteManager, &weightMsgDeleteManager, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteManager = defaultWeightMsgDeleteManager
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteManager,
		managersimulation.SimulateMsgDeleteManager(am.accountKeeper, am.bankKeeper, am.keeper),
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
			opWeightMsgUpdateManager,
			defaultWeightMsgUpdateManager,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				managersimulation.SimulateMsgUpdateManager(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		simulation.NewWeightedProposalMsg(
			opWeightMsgDeleteManager,
			defaultWeightMsgDeleteManager,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				managersimulation.SimulateMsgDeleteManager(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		// this line is used by starport scaffolding # simapp/module/OpMsg
	}
}
