package keeper

import (
	"context"

	"enreach/x/workload/types"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) CheatStatusCRData(ctx context.Context, req *types.QueryGetCheatStatusCRDataRequest) (*types.QueryGetCheatStatusCRDataResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	cheatStatusCRDataMap, found := k.GetCheatStatusCRData(ctx, req.Era, req.NodeID)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	cheatStatusCRData := types.CheatStatusCRData{
		Era:    req.Era,
		NodeID: req.NodeID,
		Data:   cheatStatusCRDataMap.Data,
	}

	return &types.QueryGetCheatStatusCRDataResponse{CheatStatusCRData: cheatStatusCRData}, nil
}

func (k Keeper) AllCheatStatusCRDataByEra(ctx context.Context, req *types.QueryGetAllCheatStatusCRDataByEraRequest) (*types.QueryGetAllCheatStatusCRDataByEraResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	cheatStatusCRDataList, pageRes, err := k.GetCheatStatusCRDatasPaginated(ctx, req.Era, req.Pagination)
	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryGetAllCheatStatusCRDataByEraResponse{CheatStatusCRDatas: cheatStatusCRDataList, Pagination: pageRes}, nil
}
