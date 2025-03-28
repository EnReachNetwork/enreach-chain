package keeper

import (
	"context"

	"enreach/x/workload/types"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) Workreport(ctx context.Context, req *types.QueryGetWorkreportRequest) (*types.QueryGetWorkreportResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	managerNodeScoreMap, found := k.GetNodeWorkreport(ctx, req.Epoch, req.NodeID)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	workreport := types.Workreport{
		Epoch:           req.Epoch,
		NodeID:          req.NodeID,
		ManagerScoreMap: managerNodeScoreMap.ManagerScoreMap,
	}

	return &types.QueryGetWorkreportResponse{Workreport: workreport}, nil
}

func (k Keeper) AllWorkreportByEpoch(ctx context.Context, req *types.QueryGetAllWorkreportByEpochRequest) (*types.QueryGetAllWorkreportByEpochResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	workreports, pageRes, err := k.GetNodeWorkreportsPaginated(ctx, req.Epoch, req.Pagination)
	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryGetAllWorkreportByEpochResponse{Workreport: workreports, Pagination: pageRes}, nil
}

func (k Keeper) WorkreportProcessBatchSize(ctx context.Context, req *types.QueryGetWorkreportProcessBatchSizeRequest) (*types.QueryGetWorkreportProcessBatchSizeResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	batchSize := k.GetWorkreportProcessBatchSize(ctx)

	return &types.QueryGetWorkreportProcessBatchSizeResponse{BatchSize: batchSize}, nil
}

func (k Keeper) HistoryEpochDataDepth(ctx context.Context, req *types.QueryGetHistoryEpochDataDepthRequest) (*types.QueryGetHistoryEpochDataDepthResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	depth := k.GetHistoryEpochDataDepth(ctx)

	return &types.QueryGetHistoryEpochDataDepthResponse{Depth: depth}, nil
}
