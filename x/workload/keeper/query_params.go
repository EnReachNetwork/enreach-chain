package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	"enreach/x/workload/types"
)

func (k Keeper) Param(goCtx context.Context, req *types.QueryParamRequest) (*types.QueryParamResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(goCtx)

	paramsDB := k.GetParams(ctx)
	paramValue, ok := paramsDB.Data[req.ParamKey]
	if !ok {
		return nil, status.Error(codes.NotFound, "param not found")
	}

	return &types.QueryParamResponse{ParamValue: paramValue}, nil
}

func (k Keeper) Params(goCtx context.Context, req *types.QueryParamsRequest) (*types.QueryParamsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(goCtx)

	return &types.QueryParamsResponse{Params: k.GetParams(ctx)}, nil
}
