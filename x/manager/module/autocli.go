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
				{
					RpcMethod:      "GetManagerByRegion",
					Use:            "get-manager-by-region [region-code]",
					Short:          "Query get-manager-by-region",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "regionCode"}},
				},

				{
					RpcMethod:      "GetManagerByRegion",
					Use:            "get-manager-by-region [region-code]",
					Short:          "Query get-manager-by-region",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "regionCode"}},
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
					RpcMethod: "RegisterManager",
					Use:       "register-manager [managerAddress] [operatorName] [operatorDesc] [operatorWebsiteURL] [evmAddress] [hostAddress] [managerPort] [trackerPort] [chainAPIPort] [chainRPCPort] [regionCode]",
					Short:     "register manager",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "managerAddress"},
						{ProtoField: "operatorName"}, {ProtoField: "operatorDesc"}, {ProtoField: "operatorWebsiteURL"}, {ProtoField: "evmAddress"},
						{ProtoField: "hostAddress"}, {ProtoField: "managerPort"}, {ProtoField: "trackerPort"}, {ProtoField: "chainAPIPort"}, {ProtoField: "chainRPCPort"}, {ProtoField: "regionCode"}},
				},
				{
					RpcMethod: "UpdateManager",
					Use:       "update-manager [id] [managerAddress] [operatorName] [operatorDesc] [operatorWebsiteURL] [evmAddress] [hostAddress] [managerPort] [trackerPort] [chainAPIPort] [chainRPCPort] [regionCode]",
					Short:     "Update manager",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "id"}, {ProtoField: "managerAddress"},
						{ProtoField: "operatorName"}, {ProtoField: "operatorDesc"}, {ProtoField: "operatorWebsiteURL"}, {ProtoField: "evmAddress"},
						{ProtoField: "hostAddress"}, {ProtoField: "managerPort"}, {ProtoField: "trackerPort"}, {ProtoField: "chainAPIPort"}, {ProtoField: "chainRPCPort"}, {ProtoField: "regionCode"}},
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
