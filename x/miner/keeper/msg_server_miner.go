package keeper

import (
	"context"
	"fmt"

	"enreach/x/miner/types"

	errorsmod "cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateMiner(goCtx context.Context, msg *types.MsgCreateMiner) (*types.MsgCreateMinerResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var miner = types.Miner{
		Creator:    msg.Creator,
		MinerId:    msg.MinerId,
		EvmAddress: msg.EvmAddress,
		RegionCode: msg.RegionCode,
		Status:     msg.Status,
	}

	id := k.AppendMiner(
		ctx,
		miner,
	)

	return &types.MsgCreateMinerResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateMiner(goCtx context.Context, msg *types.MsgUpdateMiner) (*types.MsgUpdateMinerResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var miner = types.Miner{
		Creator:    msg.Creator,
		Id:         msg.Id,
		MinerId:    msg.MinerId,
		EvmAddress: msg.EvmAddress,
		RegionCode: msg.RegionCode,
		Status:     msg.Status,
	}

	// Checks that the element exists
	val, found := k.GetMiner(ctx, msg.Id)
	if !found {
		return nil, errorsmod.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, errorsmod.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetMiner(ctx, miner)

	return &types.MsgUpdateMinerResponse{}, nil
}

func (k msgServer) DeleteMiner(goCtx context.Context, msg *types.MsgDeleteMiner) (*types.MsgDeleteMinerResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetMiner(ctx, msg.Id)
	if !found {
		return nil, errorsmod.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, errorsmod.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveMiner(ctx, msg.Id)

	return &types.MsgDeleteMinerResponse{}, nil
}
