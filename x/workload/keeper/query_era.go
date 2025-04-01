package keeper

import (
	"context"

	"enreach/x/workload/types"
)

func (k Keeper) EraLength(goCtx context.Context, req *types.QueryGetEraLengthRequest) (*types.QueryGetEraLengthResponse, error) {

	return &types.QueryGetEraLengthResponse{EraLength: types.ERA_LENGTH}, nil
}

func (k Keeper) CurrentEra(goCtx context.Context, req *types.QueryGetCurrentEraRequest) (*types.QueryGetCurrentEraResponse, error) {

	currentEra := types.GetCurrentEra(goCtx)

	return &types.QueryGetCurrentEraResponse{CurrentEra: currentEra}, nil
}
