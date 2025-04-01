package keeper

import (
	"context"

	"enreach/x/workload/types"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) ReputationPointChangeData(ctx context.Context, req *types.QueryGetReputationPointChangeDataRequest) (*types.QueryGetReputationPointChangeDataResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	pointChangeDataMapDB, found := k.GetReputationPointChangeData(ctx, req.Era, req.NodeID)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	pointChangeData := types.ReputationPointChangeData{
		Era:    req.Era,
		NodeID: req.NodeID,
		Data:   pointChangeDataMapDB.Data,
	}

	return &types.QueryGetReputationPointChangeDataResponse{ReputationPointChangeData: pointChangeData}, nil
}

func (k Keeper) AllReputationPointChangeDataByEra(ctx context.Context, req *types.QueryGetAllReputationPointChangeDataByEraRequest) (*types.QueryGetAllReputationPointChangeDataByEraResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	pointChangeDataList, pageRes, err := k.GetReputationPointChangeDatasPaginated(ctx, req.Era, req.Pagination)
	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryGetAllReputationPointChangeDataByEraResponse{ReputationPointChangeDatas: pointChangeDataList, Pagination: pageRes}, nil
}
