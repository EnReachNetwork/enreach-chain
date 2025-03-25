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
					Use:            "show-manager [manager-account]",
					Short:          "Shows a manager by account",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "managerAccount"}},
				},
				{
					RpcMethod:      "GetManagerByRegion",
					Use:            "get-manager-by-region [region-code]",
					Short:          "Query get-manager-by-region",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "regionCode"}},
				},

				{
					RpcMethod: "OperatorAll",
					Use:       "list-operator",
					Short:     "List all operator",
				},
				{
					RpcMethod:      "Operator",
					Use:            "show-operator [operator-account]",
					Short:          "Shows a operator by account",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "operatorAccount"}},
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
					RpcMethod: "RegisterManager",
					Use:       "register-manager [managerAccount] [hostAddress] [managerPort] [trackerPort] [chainAPIPort] [chainRPCPort]",
					Short:     "register manager",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "managerAccount"},
						{ProtoField: "hostAddress"}, {ProtoField: "managerPort"}, {ProtoField: "trackerPort"}, {ProtoField: "chainAPIPort"}, {ProtoField: "chainRPCPort"}},
				},
				{
					RpcMethod:      "SetManagerRegion",
					Use:            "set-manager-region [operatorAccount] [regionCode]",
					Short:          "Set manager region",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "operatorAccount"}, {ProtoField: "regionCode"}},
				},
				{
					RpcMethod: "UpdateManagerConnParams",
					Use:       "update-manager-conn-params [operatorAccount]  [hostAddress] [managerPort] [trackerPort] [chainAPIPort] [chainRPCPort]",
					Short:     "Update manager conn params",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "operatorAccount"},
						{ProtoField: "hostAddress"}, {ProtoField: "managerPort"}, {ProtoField: "trackerPort"}, {ProtoField: "chainAPIPort"}, {ProtoField: "chainRPCPort"}},
				},
				{
					RpcMethod:      "GoWorking",
					Use:            "go-working [managerAccount]",
					Short:          "Go working",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "managerAccount"}},
				},
				{
					RpcMethod:      "ActivateManager",
					Use:            "activate-manager [operatorAccount] [license]",
					Short:          "Activate manager",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "operatorAccount"}, {ProtoField: "license"}},
				},
				{
					RpcMethod:      "CreateOperator",
					Use:            "create-operator [operatorAccount] [name] [description] [websiteUrl]",
					Short:          "Create operator",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "operatorAccount"}, {ProtoField: "name"}, {ProtoField: "description"}, {ProtoField: "websiteUrl"}},
				},
				{
					RpcMethod:      "UpdateOperatorBasicInfo",
					Use:            "update-operator-basic-info [operatorAccount] [name] [description] [websiteUrl]",
					Short:          "Update operator basic info",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "operatorAccount"}, {ProtoField: "name"}, {ProtoField: "description"}, {ProtoField: "websiteUrl"}},
				},
				{
					RpcMethod:      "BindOperatorManagerAccount",
					Use:            "bind-operator-manager-account [operatorAccount] [managerAccount] [managerSignature]",
					Short:          "Bind operator manager account",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "operatorAccount"}, {ProtoField: "managerAccount"}, {ProtoField: "managerSignature"}},
				},
				{
					RpcMethod:      "BindOperatorEVMAccount",
					Use:            "bind-operator-evm-account [operatorAccount] [evmAccount] [evmSignature]",
					Short:          "Bind operator evm account",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "operatorAccount"}, {ProtoField: "evmAccount"}, {ProtoField: "evmSignature"}},
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
