package workload

import (
	autocliv1 "cosmossdk.io/api/cosmos/autocli/v1"

	modulev1 "enreach/api/enreach/workload"
)

// AutoCLIOptions implements the autocli.HasAutoCLIConfig interface.
func (am AppModule) AutoCLIOptions() *autocliv1.ModuleOptions {
	return &autocliv1.ModuleOptions{
		Query: &autocliv1.ServiceCommandDescriptor{
			Service: modulev1.Query_ServiceDesc.ServiceName,
			RpcCommandOptions: []*autocliv1.RpcCommandOptions{
				{
					RpcMethod: "Params",
					Use:       "params",
					Short:     "Shows the parameters of the module",
				},
				{
					RpcMethod: "EpochLength",
					Use:       "get-epoch-length",
					Short:     "Get epoch length",
				},
				{
					RpcMethod: "CurrentEpoch",
					Use:       "get-current-epoch",
					Short:     "Get current epoch",
				},
				{
					RpcMethod: "EraLength",
					Use:       "get-era-length",
					Short:     "Get era length",
				},
				{
					RpcMethod: "CurrentEra",
					Use:       "get-current-era",
					Short:     "Get current era",
				},
				{
					RpcMethod:      "AllNodeWorkloadByEpoch",
					Use:            "get-all-node-workload-by-epoch [epoch]",
					Short:          "Get all nodes' workload in a dedicated epoch",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "epoch"}},
				},
				{
					RpcMethod:      "NodeWorkload",
					Use:            "get-node-workload [epoch] [nodeID]",
					Short:          "Get a node's workload in a dedicated epoch",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "epoch"}, {ProtoField: "nodeID"}},
				},
				{
					RpcMethod:      "AllManagerWRWorkloadByEpoch",
					Use:            "get-all-manager-wr-workload-by-epoch [epoch]",
					Short:          "Get all managers' workreport workload in a dedicated epoch",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "epoch"}},
				},
				{
					RpcMethod:      "ManagerWRWorkload",
					Use:            "get-manager-wr-workload [epoch] [managerAccount]",
					Short:          "Get a manager's workreport workload in a dedicated epoch",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "epoch"}, {ProtoField: "managerAccount"}},
				},
				{
					RpcMethod:      "AllManagerRPWorkloadByEra",
					Use:            "get-all-manager-rp-workload-by-epoch [era]",
					Short:          "Get all managers' reputation point workload in a dedicated era",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "era"}},
				},
				{
					RpcMethod:      "ManagerRPWorkload",
					Use:            "get-manager-rp-workload [era] [managerAccount]",
					Short:          "Get a manager's reputation point workload in a dedicated era",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "era"}, {ProtoField: "managerAccount"}},
				},
				{
					RpcMethod:      "Workreport",
					Use:            "get-workreport [epoch] [nodeID]",
					Short:          "Get workload by epoch and nodeID",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "epoch"}, {ProtoField: "nodeID"}},
				},
				{
					RpcMethod:      "AllWorkreportByEpoch",
					Use:            "get-all-workreport-by-epoch [epoch]",
					Short:          "Get all workreport by epoch",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "epoch"}},
				},
				{
					RpcMethod: "WorkreportProcessBatchSize",
					Use:       "get-workreport-process-batch-size",
					Short:     "Get workload process batch size",
				},
				{
					RpcMethod: "HistoryEpochDataDepth",
					Use:       "get-history-epoch-data-depth",
					Short:     "Get history epoch data depth",
				},
				{
					RpcMethod:      "EpochProcessData",
					Use:            "get-epoch-process-data [epoch]",
					Short:          "Get epoch process data",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "epoch"}},
				},
				{
					RpcMethod: "AllEpochProcessData",
					Use:       "get-all-epoch-process-data",
					Short:     "Get all epoch process data",
				},
				{
					RpcMethod: "Superior",
					Use:       "show-superior",
					Short:     "show superior",
				},
				{
					RpcMethod:      "ReputationPointChangeData",
					Use:            "get-reputation-point-change-data [era] [nodeID]",
					Short:          "Get reputation point change data by era and nodeID",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "era"}, {ProtoField: "nodeID"}},
				},
				{
					RpcMethod:      "AllReputationPointChangeDataByEra",
					Use:            "get-all-reputation-point-change-data-by-era [era]",
					Short:          "Get all reputation point change data by era",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "era"}},
				},
				{
					RpcMethod:      "ReputationDeltaPoint",
					Use:            "get-reputation-delta-point [era] [nodeID]",
					Short:          "Get reputation delta point by era and nodeID",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "era"}, {ProtoField: "nodeID"}},
				},
				{
					RpcMethod:      "AllReputationDeltaPointByEra",
					Use:            "get-all-reputation-delta-point-by-era [era]",
					Short:          "Get all reputation delta point by era",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "era"}},
				},
				{
					RpcMethod:      "ReputationPoint",
					Use:            "get-reputation-point [nodeID]",
					Short:          "Get reputation point of a node",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "nodeID"}},
				},
				{
					RpcMethod: "AllReputationPoint",
					Use:       "get-all-reputation-point",
					Short:     "Get all reputation point",
				},
				{
					RpcMethod:      "EraProcessData",
					Use:            "get-era-process-data [era]",
					Short:          "Get era process data",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "era"}},
				},
				{
					RpcMethod: "AllEraProcessData",
					Use:       "get-all-era-process-data",
					Short:     "Get all era process data",
				},
				// this line is used by ignite scaffolding # autocli/query
			},
		},
		Tx: &autocliv1.ServiceCommandDescriptor{
			Service:              modulev1.Msg_ServiceDesc.ServiceName,
			EnhanceCustomCommand: true, // only required if you want to use the custom command
			RpcCommandOptions: []*autocliv1.RpcCommandOptions{
				{
					RpcMethod: "UpdateParams",
					Skip:      true, // skipped because authority gated
				},
				{
					RpcMethod:      "SubmitWorkreports",
					Use:            "submit-workreports [managerAccount] [epoch] [nodeScores]",
					Short:          "Submit workreports",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "managerAccount"}, {ProtoField: "epoch"}, {ProtoField: "nodeScores"}},
				},
				{
					RpcMethod:      "UpdateWorkreportProcessBatchSize",
					Use:            "update-workreport-process-batch-size [batchSize]",
					Short:          "Update workload process batch size",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "batchSize"}},
				},
				{
					RpcMethod:      "UpdateHistoryEpochDataDepth",
					Use:            "update-history-epoch-data-depth [depth]",
					Short:          "Update history epoch data depth",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "depth"}},
				},
				{
					RpcMethod:      "SubmitReputationPointChangeData",
					Use:            "submit-reputation-point-change-data [managerAccount] [era] [nodePoints]",
					Short:          "Submit reputation point change data",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "managerAccount"}, {ProtoField: "era"}, {ProtoField: "nodePoints"}},
				},
				// this line is used by ignite scaffolding # autocli/tx
			},
		},
	}
}
