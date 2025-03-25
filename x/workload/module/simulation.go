package workload

import (
	"math/rand"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"

	"enreach/testutil/sample"
	workloadsimulation "enreach/x/workload/simulation"
	"enreach/x/workload/types"
)

// avoid unused import issue
var (
	_ = workloadsimulation.FindAccount
	_ = rand.Rand{}
	_ = sample.AccAddress
	_ = sdk.AccAddress{}
	_ = simulation.MsgEntryKind
)

const (
	opWeightMsgSubmitWorkreports = "op_weight_msg_workreports"
	// TODO: Determine the simulation weight value
	defaultWeightMsgSubmitWorkreports int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module.
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	workloadGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		WorkloadList: []types.Workload{
			{
				Id:             0,
				ManagerAccount: sample.AccAddress(),
			},
			{
				Id:             1,
				ManagerAccount: sample.AccAddress(),
			},
		},
		WorkloadCount: 2,
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&workloadGenesis)
}

// RegisterStoreDecoder registers a decoder.
func (am AppModule) RegisterStoreDecoder(_ simtypes.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgSubmitWorkreports int
	simState.AppParams.GetOrGenerate(opWeightMsgSubmitWorkreports, &weightMsgSubmitWorkreports, nil,
		func(_ *rand.Rand) {
			weightMsgSubmitWorkreports = defaultWeightMsgSubmitWorkreports
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgSubmitWorkreports,
		workloadsimulation.SimulateMsgSubmitWorkreports(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}

// ProposalMsgs returns msgs used for governance proposals for simulations.
func (am AppModule) ProposalMsgs(simState module.SimulationState) []simtypes.WeightedProposalMsg {
	return []simtypes.WeightedProposalMsg{
		simulation.NewWeightedProposalMsg(
			opWeightMsgSubmitWorkreports,
			defaultWeightMsgSubmitWorkreports,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				workloadsimulation.SimulateMsgSubmitWorkreports(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		// this line is used by starport scaffolding # simapp/module/OpMsg
	}
}
