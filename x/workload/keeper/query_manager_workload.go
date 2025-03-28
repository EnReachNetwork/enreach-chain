package keeper

import (
	"context"

	"enreach/x/workload/types"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) AllManagerWorkloadByEpoch(ctx context.Context, req *types.QueryGetAllManagerWorkloadByEpochRequest) (*types.QueryGetAllManagerWorkloadByEpochResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	managerWorkloads, pageRes, err := k.GetManagerWorkloadsPaginated(ctx, req.Epoch, req.Pagination)
	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryGetAllManagerWorkloadByEpochResponse{ManagerWorkloads: managerWorkloads, Pagination: pageRes}, nil
}

func (k Keeper) ManagerWorkload(ctx context.Context, req *types.QueryGetManagerWorkloadRequest) (*types.QueryGetManagerWorkloadResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	managerWorkload, found := k.GetManagerWorkload(ctx, req.Epoch, req.ManagerAccount)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetManagerWorkloadResponse{ManagerWorkload: managerWorkload}, nil
}
