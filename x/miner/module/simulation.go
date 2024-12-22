package miner

import (
	"math/rand"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"

	"enreach/testutil/sample"
	minersimulation "enreach/x/miner/simulation"
	"enreach/x/miner/types"
)

// avoid unused import issue
var (
	_ = minersimulation.FindAccount
	_ = rand.Rand{}
	_ = sample.AccAddress
	_ = sdk.AccAddress{}
	_ = simulation.MsgEntryKind
)

const (
	opWeightMsgCreateMiner = "op_weight_msg_miner"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateMiner int = 100

	opWeightMsgUpdateMiner = "op_weight_msg_miner"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateMiner int = 100

	opWeightMsgDeleteMiner = "op_weight_msg_miner"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteMiner int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module.
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	minerGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		MinerList: []types.Miner{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		MinerCount: 2,
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&minerGenesis)
}

// RegisterStoreDecoder registers a decoder.
func (am AppModule) RegisterStoreDecoder(_ simtypes.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgCreateMiner int
	simState.AppParams.GetOrGenerate(opWeightMsgCreateMiner, &weightMsgCreateMiner, nil,
		func(_ *rand.Rand) {
			weightMsgCreateMiner = defaultWeightMsgCreateMiner
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateMiner,
		minersimulation.SimulateMsgCreateMiner(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateMiner int
	simState.AppParams.GetOrGenerate(opWeightMsgUpdateMiner, &weightMsgUpdateMiner, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateMiner = defaultWeightMsgUpdateMiner
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateMiner,
		minersimulation.SimulateMsgUpdateMiner(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteMiner int
	simState.AppParams.GetOrGenerate(opWeightMsgDeleteMiner, &weightMsgDeleteMiner, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteMiner = defaultWeightMsgDeleteMiner
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteMiner,
		minersimulation.SimulateMsgDeleteMiner(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}

// ProposalMsgs returns msgs used for governance proposals for simulations.
func (am AppModule) ProposalMsgs(simState module.SimulationState) []simtypes.WeightedProposalMsg {
	return []simtypes.WeightedProposalMsg{
		simulation.NewWeightedProposalMsg(
			opWeightMsgCreateMiner,
			defaultWeightMsgCreateMiner,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				minersimulation.SimulateMsgCreateMiner(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		simulation.NewWeightedProposalMsg(
			opWeightMsgUpdateMiner,
			defaultWeightMsgUpdateMiner,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				minersimulation.SimulateMsgUpdateMiner(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		simulation.NewWeightedProposalMsg(
			opWeightMsgDeleteMiner,
			defaultWeightMsgDeleteMiner,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				minersimulation.SimulateMsgDeleteMiner(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		// this line is used by starport scaffolding # simapp/module/OpMsg
	}
}
