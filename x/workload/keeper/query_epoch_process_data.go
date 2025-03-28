package keeper

import (
	"context"

	"enreach/x/workload/types"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) EpochProcessData(ctx context.Context, req *types.QueryGetEpochProcessDataRequest) (*types.QueryGetEpochProcessDataResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	epochProcessData, found := k.GetEpochProcessData(ctx, req.Epoch)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetEpochProcessDataResponse{EpochProcessData: epochProcessData}, nil
}

func (k Keeper) AllEpochProcessData(ctx context.Context, req *types.QueryGetAllEpochProcessDataRequest) (*types.QueryGetAllEpochProcessDataResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	epochProcessDatas, pageRes, err := k.GetAllEpochProcessDataPaginated(ctx, req.Pagination)
	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryGetAllEpochProcessDataResponse{EpochProcessDatas: epochProcessDatas, Pagination: pageRes}, nil
}
