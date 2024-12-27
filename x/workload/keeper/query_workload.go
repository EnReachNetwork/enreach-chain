package keeper

import (
	"context"

	"enreach/x/workload/types"

	"cosmossdk.io/store/prefix"
	"github.com/cosmos/cosmos-sdk/runtime"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) WorkloadAll(ctx context.Context, req *types.QueryAllWorkloadRequest) (*types.QueryAllWorkloadResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var workloads []types.Workload

	store := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	workloadStore := prefix.NewStore(store, types.KeyPrefix(types.WorkloadKey))

	pageRes, err := query.Paginate(workloadStore, req.Pagination, func(key []byte, value []byte) error {
		var workload types.Workload
		if err := k.cdc.Unmarshal(value, &workload); err != nil {
			return err
		}

		workloads = append(workloads, workload)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllWorkloadResponse{Workload: workloads, Pagination: pageRes}, nil
}

func (k Keeper) Workload(ctx context.Context, req *types.QueryGetWorkloadRequest) (*types.QueryGetWorkloadResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	workload, found := k.GetWorkload(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetWorkloadResponse{Workload: workload}, nil
}
