package miner

import (
	autocliv1 "cosmossdk.io/api/cosmos/autocli/v1"

	modulev1 "enreach/api/enreach/miner"
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
					RpcMethod: "MinerAll",
					Use:       "list-miner",
					Short:     "List all miner",
				},
				{
					RpcMethod:      "Miner",
					Use:            "show-miner [id]",
					Short:          "Shows a miner by id",
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
					RpcMethod:      "CreateMiner",
					Use:            "create-miner [minerId] [evmAddress] [regionCode] [status]",
					Short:          "Create miner",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "minerId"}, {ProtoField: "evmAddress"}, {ProtoField: "regionCode"}, {ProtoField: "status"}},
				},
				{
					RpcMethod:      "UpdateMiner",
					Use:            "update-miner [id] [minerId] [evmAddress] [regionCode] [status]",
					Short:          "Update miner",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "id"}, {ProtoField: "minerId"}, {ProtoField: "evmAddress"}, {ProtoField: "regionCode"}, {ProtoField: "status"}},
				},
				{
					RpcMethod:      "DeleteMiner",
					Use:            "delete-miner [id]",
					Short:          "Delete miner",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "id"}},
				},
				// this line is used by ignite scaffolding # autocli/tx
			},
		},
	}
}
