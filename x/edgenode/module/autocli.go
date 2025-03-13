package edgenode

import (
	autocliv1 "cosmossdk.io/api/cosmos/autocli/v1"

	modulev1 "enreach/api/enreach/edgenode"
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
					RpcMethod: "UserAll",
					Use:       "list-user",
					Short:     "List all user",
				},
				{
					RpcMethod:      "User",
					Use:            "show-user [userID]",
					Short:          "Shows a user by userID",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "userID"}},
				},
				{
					RpcMethod: "NodeAll",
					Use:       "list-node",
					Short:     "List all node",
				},
				{
					RpcMethod:      "Node",
					Use:            "show-node [nodeID]",
					Short:          "Shows a node by nodeID",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "nodeID"}},
				},
				{
					RpcMethod: "Superior",
					Use:       "show-superior",
					Short:     "show superior",
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
					RpcMethod:      "CreateUser",
					Use:            "create-user [userID]",
					Short:          "Create user",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "userID"}},
				},
				{
					RpcMethod:      "BindUserEVMAccount",
					Use:            "bind-user-evm-account [userID] [evmAccount] [evmPubkey] [evmSignature]",
					Short:          "Bind user EVM account",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "userID"}, {ProtoField: "evmAccount"}, {ProtoField: "evmPubkey"}, {ProtoField: "evmSignature"}},
				},
				{
					RpcMethod:      "RegisterNode",
					Use:            "register-node [nodeID] [deviceType]",
					Short:          "Register node",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "nodeID"}, {ProtoField: "deviceType"}},
				},
				{
					RpcMethod:      "BindAndActivateNode",
					Use:            "bind-activate-node [nodeID] [userID] [nodeName] [regionCode]",
					Short:          "Bind and activate node",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "nodeID"}, {ProtoField: "userID"}, {ProtoField: "nodeName"}, {ProtoField: "regionCode"}},
				},
				{
					RpcMethod:      "UnbindNode",
					Use:            "unbind-node [nodeID] [userID]",
					Short:          "Unbind node",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "nodeID"}, {ProtoField: "userID"}},
				},
				{
					RpcMethod:      "CreateSuperior",
					Use:            "create-superior [account]",
					Short:          "Create superior",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "account"}},
				},
				{
					RpcMethod:      "UpdateSuperior",
					Use:            "update-superior [account]",
					Short:          "Update superior",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "account"}},
				},
				// this line is used by ignite scaffolding # autocli/tx
			},
		},
	}
}
