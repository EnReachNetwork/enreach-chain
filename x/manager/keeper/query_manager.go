package keeper

import (
	"context"

	"enreach/x/manager/types"

	"cosmossdk.io/store/prefix"
	"github.com/cosmos/cosmos-sdk/runtime"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) ManagerAll(ctx context.Context, req *types.QueryAllManagerRequest) (*types.QueryAllManagerResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var managers []types.Manager

	store := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	managerStore := prefix.NewStore(store, types.KeyPrefix(types.ManagerKey))

	pageRes, err := query.Paginate(managerStore, req.Pagination, func(key []byte, value []byte) error {
		var manager types.Manager
		if err := k.cdc.Unmarshal(value, &manager); err != nil {
			return err
		}

		managers = append(managers, manager)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllManagerResponse{Manager: managers, Pagination: pageRes}, nil
}

func (k Keeper) Manager(ctx context.Context, req *types.QueryGetManagerRequest) (*types.QueryGetManagerResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	manager, found := k.GetManager(ctx, req.ManagerAccount)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetManagerResponse{Manager: manager}, nil
}

func (k Keeper) GetManagerByRegion(goCtx context.Context, req *types.QueryGetManagerByRegionRequest) (*types.QueryGetManagerByRegionResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	// There should be limited managers, so get all managers and iterate to filter
	managers := k.GetAllManager(ctx)
	var managersOfRegion []types.Manager
	for _, manager := range managers {
		if manager.RegionCode == req.RegionCode {
			managersOfRegion = append(managersOfRegion, manager)
		}
	}

	return &types.QueryGetManagerByRegionResponse{Managers: managersOfRegion}, nil
}
