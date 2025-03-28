package keeper

import (
	"context"

	"enreach/x/workload/types"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) AllNodeWorkloadByEpoch(ctx context.Context, req *types.QueryGetAllNodeWorkloadByEpochRequest) (*types.QueryGetAllNodeWorkloadByEpochResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	nodeWorkloads, pageRes, err := k.GetNodeWorkloadsPaginated(ctx, req.Epoch, req.Pagination)
	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryGetAllNodeWorkloadByEpochResponse{NodeWorkloads: nodeWorkloads, Pagination: pageRes}, nil
}

func (k Keeper) NodeWorkload(ctx context.Context, req *types.QueryGetNodeWorkloadRequest) (*types.QueryGetNodeWorkloadResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	nodeWorkload, found := k.GetNodeWorkload(ctx, req.Epoch, req.NodeID)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetNodeWorkloadResponse{NodeWorkload: nodeWorkload}, nil
}
