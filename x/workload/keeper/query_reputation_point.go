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

	reputationPoint, found := k.GetReputationPoint(ctx, req.NodeID)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetReputationPointResponse{ReputationPoint: reputationPoint}, nil
}

func (k Keeper) AllReputationPoint(ctx context.Context, req *types.QueryGetAllReputationPointRequest) (*types.QueryGetAllReputationPointResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	reputationPointList, pageRes, err := k.GetReputationPointsPaginated(ctx, req.Pagination)
	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryGetAllReputationPointResponse{ReputationPoints: reputationPointList, Pagination: pageRes}, nil
}
