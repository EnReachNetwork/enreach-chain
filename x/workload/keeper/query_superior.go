package keeper

import (
	"context"

	"enreach/x/workload/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) Superior(goCtx context.Context, req *types.QueryGetSuperiorRequest) (*types.QueryGetSuperiorResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(goCtx)

	val, found := k.GetSuperior(ctx)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetSuperiorResponse{Superior: val}, nil
}
