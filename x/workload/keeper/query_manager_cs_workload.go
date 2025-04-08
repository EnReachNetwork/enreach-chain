package keeper

import (
	"context"

	"enreach/x/workload/types"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) AllManagerCSWorkloadByEra(ctx context.Context, req *types.QueryGetAllManagerCSWorkloadByEraRequest) (*types.QueryGetAllManagerCSWorkloadByEraResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	managerRPWorkloads, pageRes, err := k.GetManagerCSWorkloadsPaginated(ctx, req.Era, req.Pagination)
	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryGetAllManagerCSWorkloadByEraResponse{ManagerCSWorkloads: managerRPWorkloads, Pagination: pageRes}, nil
}

func (k Keeper) ManagerCSWorkload(ctx context.Context, req *types.QueryGetManagerCSWorkloadRequest) (*types.QueryGetManagerCSWorkloadResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	managerRPWorkload, found := k.GetManagerCSWorkload(ctx, req.Era, req.ManagerAccount)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetManagerCSWorkloadResponse{ManagerCSWorkload: managerRPWorkload}, nil
}
