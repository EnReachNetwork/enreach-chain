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

	// Check whether the manager has been created
	_, found := k.GetManager(ctx, msg.ManagerAccount)
	if found {
		return nil, errorsmod.Wrapf(types.ErrElementAlreadyExists, "Manager '%s' already exists, do not register again", msg.ManagerAccount)
	}

	blockHeight := uint64(ctx.BlockHeight())
	var manager = types.Manager{
		ManagerAccount: msg.ManagerAccount,
		HostAddress:    msg.HostAddress,
		ManagerPort:    msg.ManagerPort,
		TrackerPort:    msg.TrackerPort,
		ChainAPIPort:   msg.ChainAPIPort,
		ChainRPCPort:   msg.ChainRPCPort,
		Creator:        msg.ManagerAccount,
		CreateAt:       blockHeight,
		Updator:        msg.ManagerAccount,
		UpdateAt:       blockHeight,
		RegisterStatus: string(types.RS_PENDING_BIND), // New register manager start with "Pending_Bind" register status
	}

	// Add manager to the store
	k.AppendManager(ctx, manager)

	return &types.MsgRegisterManagerResponse{}, nil
}

func (k msgServer) GoWorking(goCtx context.Context, msg *types.MsgGoWorking) (*types.MsgGoWorkingResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	manager, found := k.GetManager(ctx, msg.ManagerAccount)
	if !found {
		return nil, errorsmod.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("Manager '%s' doesn't exist", msg.ManagerAccount))
	}

	// tx caller should be current operator owner
	if msg.ManagerAccount != manager.ManagerAccount {
		return nil, errorsmod.Wrap(sdkerrors.ErrUnauthorized, "Incorrect owner")
	}

	// The manager can go working only if the register status is Activate
	if manager.RegisterStatus != string(types.RS_ACTIVATE) {
		return nil, errorsmod.Wrap(types.ErrManagerNotActivate, "Manager should be activate first before go working")
	}

	// Double check here, manager should have bound to an operator if the register status is activate
	if len(manager.OperatorAccount) == 0 {
		return nil, errorsmod.Wrap(types.ErrManagerNotBind, "Invalid state: manager should have bound to an operator when activate")
	}

	// The conn params should have been set before go working, otherwise edge nodes could not connect
	if len(manager.HostAddress) == 0 || manager.ManagerPort == 0 ||
		manager.TrackerPort == 0 || manager.ChainAPIPort == 0 || manager.ChainRPCPort == 0 {
		return nil, errorsmod.Wrap(types.ErrManagerConnParamsNotSet, "manager should have set connection params before go working")
	}

	// The region code should have been set before go working
	if len(manager.RegionCode) == 0 {
		return nil, errorsmod.Wrap(types.ErrManagerRegionNotSet, "manager should have set region code before go working")
	}

	// Everything looks good, let it go working
	blockHeight := uint64(ctx.BlockHeight())
	manager.WorkingStatus = string(types.WS_WORKING)
	manager.Updator = msg.ManagerAccount
	manager.UpdateAt = blockHeight

	k.SetManager(ctx, manager)

	return &types.MsgGoWorkingResponse{}, nil
}
