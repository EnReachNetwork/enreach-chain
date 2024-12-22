package manager

import (
	autocliv1 "cosmossdk.io/api/cosmos/autocli/v1"

	modulev1 "enreach/api/enreach/manager"
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
					RpcMethod: "ManagerAll",
					Use:       "list-manager",
					Short:     "List all manager",
				},
				{
					RpcMethod:      "Manager",
					Use:            "show-manager [id]",
					Short:          "Shows a manager by id",
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
					RpcMethod:      "CreateManager",
					Use:            "create-manager [managerId] [evmAddress] [regionCode] [status]",
					Short:          "Create manager",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "managerId"}, {ProtoField: "evmAddress"}, {ProtoField: "regionCode"}, {ProtoField: "status"}},
				},
				{
					RpcMethod:      "UpdateManager",
					Use:            "update-manager [id] [managerId] [evmAddress] [regionCode] [status]",
					Short:          "Update manager",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "id"}, {ProtoField: "managerId"}, {ProtoField: "evmAddress"}, {ProtoField: "regionCode"}, {ProtoField: "status"}},
				},
				{
					RpcMethod:      "DeleteManager",
					Use:            "delete-manager [id]",
					Short:          "Delete manager",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "id"}},
				},
				// this line is used by ignite scaffolding # autocli/tx
			},
		},
	}
}
