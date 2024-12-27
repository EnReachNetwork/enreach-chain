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
					RpcMethod: "WorkloadAll",
					Use:       "list-workload",
					Short:     "List all workload",
				},
				{
					RpcMethod:      "Workload",
					Use:            "show-workload [id]",
					Short:          "Shows a workload by id",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "id"}},
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
					RpcMethod:      "CreateWorkload",
					Use:            "create-workload [epoch] [minerId] [score] [managerId]",
					Short:          "Create workload",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "epoch"}, {ProtoField: "minerId"}, {ProtoField: "score"}, {ProtoField: "managerId"}},
				},
				{
					RpcMethod:      "UpdateWorkload",
					Use:            "update-workload [id] [epoch] [minerId] [score] [managerId]",
					Short:          "Update workload",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "id"}, {ProtoField: "epoch"}, {ProtoField: "minerId"}, {ProtoField: "score"}, {ProtoField: "managerId"}},
				},
				{
					RpcMethod:      "DeleteWorkload",
					Use:            "delete-workload [id]",
					Short:          "Delete workload",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "id"}},
				},
				// this line is used by ignite scaffolding # autocli/tx
			},
		},
	}
}
