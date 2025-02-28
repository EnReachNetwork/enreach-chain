package keeper

import (
	"context"
	"fmt"

	"enreach/x/manager/types"

	errorsmod "cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) RegisterManager(goCtx context.Context, msg *types.MsgRegisterManager) (*types.MsgRegisterManagerResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var manager = types.Manager{
		Creator:            msg.Creator,
		ManagerAddress:     msg.ManagerAddress,
		OperatorName:       msg.OperatorName,
		OperatorDesc:       msg.OperatorDesc,
		OperatorWebsiteURL: msg.OperatorWebsiteURL,
		EvmAddress:         msg.EvmAddress,
		HostAddress:        msg.HostAddress,
		ManagerPort:        msg.ManagerPort,
		TrackerPort:        msg.TrackerPort,
		ChainAPIPort:       msg.ChainAPIPort,
		ChainRPCPort:       msg.ChainRPCPort,
		RegionCode:         msg.RegionCode,
		Status:             "Init",
	}

	id := k.AppendManager(
		ctx,
		manager,
	)

	return &types.MsgRegisterManagerResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateManager(goCtx context.Context, msg *types.MsgUpdateManager) (*types.MsgUpdateManagerResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var manager = types.Manager{
		Creator:            msg.Creator,
		Id:                 msg.Id,
		ManagerAddress:     msg.ManagerAddress,
		OperatorName:       msg.OperatorName,
		OperatorDesc:       msg.OperatorDesc,
		OperatorWebsiteURL: msg.OperatorWebsiteURL,
		EvmAddress:         msg.EvmAddress,
		HostAddress:        msg.HostAddress,
		ManagerPort:        msg.ManagerPort,
		TrackerPort:        msg.TrackerPort,
		ChainAPIPort:       msg.ChainAPIPort,
		ChainRPCPort:       msg.ChainRPCPort,
		RegionCode:         msg.RegionCode,
	}

	// Checks that the element exists
	val, found := k.GetManager(ctx, msg.Id)
	if !found {
		return nil, errorsmod.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, errorsmod.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetManager(ctx, manager)

	return &types.MsgUpdateManagerResponse{}, nil
}

func (k msgServer) DeleteManager(goCtx context.Context, msg *types.MsgDeleteManager) (*types.MsgDeleteManagerResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetManager(ctx, msg.Id)
	if !found {
		return nil, errorsmod.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, errorsmod.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveManager(ctx, msg.Id)

	return &types.MsgDeleteManagerResponse{}, nil
}
