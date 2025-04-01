package keeper

import (
	"context"

	"enreach/x/workload/types"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) AllManagerWRWorkloadByEpoch(ctx context.Context, req *types.QueryGetAllManagerWRWorkloadByEpochRequest) (*types.QueryGetAllManagerWRWorkloadByEpochResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	managerWRWorkloads, pageRes, err := k.GetManagerWRWorkloadsPaginated(ctx, req.Epoch, req.Pagination)
	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryGetAllManagerWRWorkloadByEpochResponse{ManagerWRWorkloads: managerWRWorkloads, Pagination: pageRes}, nil
}

func (k Keeper) ManagerWRWorkload(ctx context.Context, req *types.QueryGetManagerWRWorkloadRequest) (*types.QueryGetManagerWRWorkloadResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	managerWRWorkload, found := k.GetManagerWRWorkload(ctx, req.Epoch, req.ManagerAccount)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetManagerWRWorkloadResponse{ManagerWRWorkload: managerWRWorkload}, nil
}
