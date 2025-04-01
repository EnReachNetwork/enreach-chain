package keeper

import (
	"context"

	"enreach/x/workload/types"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) EraProcessData(ctx context.Context, req *types.QueryGetEraProcessDataRequest) (*types.QueryGetEraProcessDataResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	eraProcessData, found := k.GetEraProcessData(ctx, req.Era)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetEraProcessDataResponse{EraProcessData: eraProcessData}, nil
}

func (k Keeper) AllEraProcessData(ctx context.Context, req *types.QueryGetAllEraProcessDataRequest) (*types.QueryGetAllEraProcessDataResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	eraProcessDatas, pageRes, err := k.GetAllEraProcessDataPaginated(ctx, req.Pagination)
	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryGetAllEraProcessDataResponse{EraProcessDatas: eraProcessDatas, Pagination: pageRes}, nil
}
