package keeper

import (
	"context"

	"enreach/x/manager/types"
)

func (k msgServer) RegisterManager(goCtx context.Context, msg *types.MsgRegisterManager) (*types.MsgRegisterManagerResponse, error) {
	// ctx := sdk.UnwrapSDKContext(goCtx)

	// // Check whether the worker account has bound to another manager
	// manager, found := k.GetManagerByWorkerAccount(ctx, msg.WorkerAccount)
	// if found {
	// 	return nil, errorsmod.Wrap(types.ErrElementAlreadyExists, fmt.Sprintf("Manager '%d' already exists", msg.ManagerAddress))
	// }

	// var manager = types.Manager{
	// 	ManagerAddress: msg.ManagerAddress,
	// 	HostAddress:    msg.HostAddress,
	// 	ManagerPort:    msg.ManagerPort,
	// 	TrackerPort:    msg.TrackerPort,
	// 	ChainAPIPort:   msg.ChainAPIPort,
	// 	ChainRPCPort:   msg.ChainRPCPort,
	// 	RegionCode:     msg.RegionCode,
	// 	Creator:        msg.Signer,
	// 	Status:         "Init",
	// }

	// id := k.AppendManager(
	// 	ctx,
	// 	manager,
	// )

	return &types.MsgRegisterManagerResponse{}, nil
}

func (k msgServer) GoWorking(goCtx context.Context, msg *types.MsgGoWorking) (*types.MsgGoWorkingResponse, error) {
	/// TODO

	return &types.MsgGoWorkingResponse{}, nil
}
