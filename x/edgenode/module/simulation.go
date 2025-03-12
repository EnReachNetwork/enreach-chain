package edgenode

import (
	"math/rand"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"

	"enreach/testutil/sample"
	edgenodesimulation "enreach/x/edgenode/simulation"
	"enreach/x/edgenode/types"
)

// avoid unused import issue
var (
	_ = edgenodesimulation.FindAccount
	_ = rand.Rand{}
	_ = sample.AccAddress
	_ = sdk.AccAddress{}
	_ = simulation.MsgEntryKind
)

const (
	opWeightMsgCreateUser = "op_weight_msg_user"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateUser int = 100

	opWeightMsgCreateNode = "op_weight_msg_node"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateNode int = 100

	opWeightMsgCreateSuperior = "op_weight_msg_superior"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateSuperior int = 100

	opWeightMsgUpdateSuperior = "op_weight_msg_superior"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateSuperior int = 100

	opWeightMsgDeleteSuperior = "op_weight_msg_superior"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteSuperior int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module.
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	edgenodeGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		UserList: []types.User{
			{
				UserID: "0",
			},
			{
				UserID: "1",
			},
		},
		UserCount: 2,
		NodeList: []types.Node{
			{
				UserID: "0",
			},
			{
				UserID: "1",
			},
		},
		NodeCount: 2,
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&edgenodeGenesis)
}

// RegisterStoreDecoder registers a decoder.
func (am AppModule) RegisterStoreDecoder(_ simtypes.StoreDecoderRegistry) {}

// ProposalContents doesn't return any content functions for governance proposals.
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgCreateUser int
	simState.AppParams.GetOrGenerate(opWeightMsgCreateUser, &weightMsgCreateUser, nil,
		func(_ *rand.Rand) {
			weightMsgCreateUser = defaultWeightMsgCreateUser
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateUser,
		edgenodesimulation.SimulateMsgCreateUser(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateNode int
	simState.AppParams.GetOrGenerate(opWeightMsgCreateNode, &weightMsgCreateNode, nil,
		func(_ *rand.Rand) {
			weightMsgCreateNode = defaultWeightMsgCreateNode
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateNode,
		edgenodesimulation.SimulateMsgRegisterNode(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateSuperior int
	simState.AppParams.GetOrGenerate(opWeightMsgCreateSuperior, &weightMsgCreateSuperior, nil,
		func(_ *rand.Rand) {
			weightMsgCreateSuperior = defaultWeightMsgCreateSuperior
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateSuperior,
		edgenodesimulation.SimulateMsgCreateSuperior(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateSuperior int
	simState.AppParams.GetOrGenerate(opWeightMsgUpdateSuperior, &weightMsgUpdateSuperior, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateSuperior = defaultWeightMsgUpdateSuperior
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateSuperior,
		edgenodesimulation.SimulateMsgUpdateSuperior(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteSuperior int
	simState.AppParams.GetOrGenerate(opWeightMsgDeleteSuperior, &weightMsgDeleteSuperior, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteSuperior = defaultWeightMsgDeleteSuperior
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteSuperior,
		edgenodesimulation.SimulateMsgDeleteSuperior(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}

// ProposalMsgs returns msgs used for governance proposals for simulations.
func (am AppModule) ProposalMsgs(simState module.SimulationState) []simtypes.WeightedProposalMsg {
	return []simtypes.WeightedProposalMsg{
		simulation.NewWeightedProposalMsg(
			opWeightMsgCreateUser,
			defaultWeightMsgCreateUser,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				edgenodesimulation.SimulateMsgCreateUser(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		simulation.NewWeightedProposalMsg(
			opWeightMsgCreateNode,
			defaultWeightMsgCreateNode,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				edgenodesimulation.SimulateMsgRegisterNode(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		simulation.NewWeightedProposalMsg(
			opWeightMsgCreateSuperior,
			defaultWeightMsgCreateSuperior,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				edgenodesimulation.SimulateMsgCreateSuperior(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		simulation.NewWeightedProposalMsg(
			opWeightMsgUpdateSuperior,
			defaultWeightMsgUpdateSuperior,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				edgenodesimulation.SimulateMsgUpdateSuperior(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		simulation.NewWeightedProposalMsg(
			opWeightMsgDeleteSuperior,
			defaultWeightMsgDeleteSuperior,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				edgenodesimulation.SimulateMsgDeleteSuperior(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		// this line is used by starport scaffolding # simapp/module/OpMsg
	}
}
