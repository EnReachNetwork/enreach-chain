package keeper

import (
	"context"

	"enreach/x/workload/types"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) AllManagerRPWorkloadByEra(ctx context.Context, req *types.QueryGetAllManagerRPWorkloadByEraRequest) (*types.QueryGetAllManagerRPWorkloadByEraResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	managerRPWorkloads, pageRes, err := k.GetManagerRPWorkloadsPaginated(ctx, req.Era, req.Pagination)
	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryGetAllManagerRPWorkloadByEraResponse{ManagerRPWorkloads: managerRPWorkloads, Pagination: pageRes}, nil
}

func (k Keeper) ManagerRPWorkload(ctx context.Context, req *types.QueryGetManagerRPWorkloadRequest) (*types.QueryGetManagerRPWorkloadResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	managerRPWorkload, found := k.GetManagerRPWorkload(ctx, req.Era, req.ManagerAccount)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetManagerRPWorkloadResponse{ManagerRPWorkload: managerRPWorkload}, nil
}
