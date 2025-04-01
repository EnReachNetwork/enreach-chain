package keeper

import (
	"context"

	"enreach/x/workload/types"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) ReputationDeltaPoint(ctx context.Context, req *types.QueryGetReputationDeltaPointRequest) (*types.QueryGetReputationDeltaPointResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	reputationDeltaPoint, found := k.GetReputationDeltaPoint(ctx, req.Era, req.NodeID)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetReputationDeltaPointResponse{ReputationDeltaPoint: reputationDeltaPoint}, nil
}

func (k Keeper) AllReputationDeltaPointByEra(ctx context.Context, req *types.QueryGetAllReputationDeltaPointByEraRequest) (*types.QueryGetAllReputationDeltaPointByEraResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	reputationDeltaPointList, pageRes, err := k.GetReputationDeltaPointsPaginated(ctx, req.Era, req.Pagination)
	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryGetAllReputationDeltaPointByEraResponse{ReputationDeltaPoints: reputationDeltaPointList, Pagination: pageRes}, nil
}
