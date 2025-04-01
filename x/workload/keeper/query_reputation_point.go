package keeper

import (
	"context"

	"enreach/x/workload/types"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) ReputationPoint(ctx context.Context, req *types.QueryGetReputationPointRequest) (*types.QueryGetReputationPointResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	reputationPoint, found := k.GetReputationPoint(ctx, req.Era, req.NodeID)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetReputationPointResponse{ReputationPoint: reputationPoint}, nil
}

func (k Keeper) LatestReputationPoint(ctx context.Context, req *types.QueryGetLatestReputationPointRequest) (*types.QueryGetLatestReputationPointResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	lastEraProcessData, found := k.GetLastEraProcessData(ctx)
	if !found {
		return nil, types.ErrEraProcessorNotStartedYet
	}

	// Get the last era which has processed done
	lastFinishedProcessedEra := lastEraProcessData.Era
	if lastFinishedProcessedEra == 1 && lastEraProcessData.Status != string(types.ERS_DONE) {
		return nil, types.ErrFirstEraProcessNotFinishedYet
	}
	if lastEraProcessData.Status != string(types.ERS_DONE) {
		lastFinishedProcessedEra -= 1
	}

	reputationPoint, found := k.GetReputationPoint(ctx, lastFinishedProcessedEra, req.NodeID)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetLatestReputationPointResponse{ReputationPoint: reputationPoint}, nil
}

func (k Keeper) AllReputationPointByEra(ctx context.Context, req *types.QueryGetAllReputationPointByEraRequest) (*types.QueryGetAllReputationPointByEraResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	reputationPointList, pageRes, err := k.GetReputationPointsPaginated(ctx, req.Era, req.Pagination)
	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryGetAllReputationPointByEraResponse{ReputationPoints: reputationPointList, Pagination: pageRes}, nil
}
