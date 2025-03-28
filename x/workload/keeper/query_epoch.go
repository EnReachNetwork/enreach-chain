package keeper

import (
	"context"

	"enreach/x/workload/types"
)

func (k Keeper) EpochLength(goCtx context.Context, req *types.QueryGetEpochLengthRequest) (*types.QueryGetEpochLengthResponse, error) {

	return &types.QueryGetEpochLengthResponse{EpochLength: types.EPOCH_LENGTH}, nil
}

func (k Keeper) CurrentEpoch(goCtx context.Context, req *types.QueryGetCurrentEpochRequest) (*types.QueryGetCurrentEpochResponse, error) {

	currentEpoch := types.GetCurrentEpoch(goCtx)

	return &types.QueryGetCurrentEpochResponse{CurrentEpoch: currentEpoch}, nil
}
