package keeper

import (
	"context"

	"enreach/x/workload/types"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) EraCheatStatusProcessData(ctx context.Context, req *types.QueryGetEraCheatStatusProcessDataRequest) (*types.QueryGetEraCheatStatusProcessDataResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	eraCheatStatusProcessData, found := k.GetEraCheatStatusProcessData(ctx, req.Era)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetEraCheatStatusProcessDataResponse{EraCheatStatusProcessData: eraCheatStatusProcessData}, nil
}

func (k Keeper) AllEraCheatStatusProcessData(ctx context.Context, req *types.QueryGetAllEraCheatStatusProcessDataRequest) (*types.QueryGetAllEraCheatStatusProcessDataResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	eraCheatStatusProcessDatas, pageRes, err := k.GetAllEraCheatStatusProcessDataPaginated(ctx, req.Pagination)
	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryGetAllEraCheatStatusProcessDataResponse{EraCheatStatusProcessDatas: eraCheatStatusProcessDatas, Pagination: pageRes}, nil
}
