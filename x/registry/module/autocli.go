package registry

import (
	autocliv1 "cosmossdk.io/api/cosmos/autocli/v1"

	modulev1 "enreach/api/enreach/registry"
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
					RpcMethod: "RegionAll",
					Use:       "list-region",
					Short:     "List all region",
				},
				{
					RpcMethod:      "Region",
					Use:            "show-region [code]",
					Short:          "Shows a region by code",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "code"}},
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
					RpcMethod:      "CreateRegion",
					Use:            "create-region [code] [name] [description]",
					Short:          "Create region",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "code"}, {ProtoField: "name"}, {ProtoField: "description"}},
				},
				{
					RpcMethod:      "UpdateRegion",
					Use:            "update-region [code] [name] [description]",
					Short:          "Update region",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "code"}, {ProtoField: "name"}, {ProtoField: "description"}},
				},
				{
					RpcMethod:      "DeleteRegion",
					Use:            "delete-region [code]",
					Short:          "Delete region",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "code"}},
				},
				// this line is used by ignite scaffolding # autocli/tx
			},
		},
	}
}
