package keeper

import (
	"context"

	"enreach/x/manager/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k Keeper) GetEpochLength(goCtx context.Context, req *types.QueryGetEpochLengthRequest) (*types.QueryGetEpochLengthResponse, error) {

	return &types.QueryGetEpochLengthResponse{EpochLength: types.EPOCH_LENGTH}, nil
}

func (k Keeper) GetCurrentEpoch(goCtx context.Context, req *types.QueryGetCurrentEpochRequest) (*types.QueryGetCurrentEpochResponse, error) {

	ctx := sdk.UnwrapSDKContext(goCtx)

	currentEpoch := uint64(ctx.BlockHeight())/types.EPOCH_LENGTH + 1

	return &types.QueryGetCurrentEpochResponse{CurrentEpoch: currentEpoch}, nil
}
