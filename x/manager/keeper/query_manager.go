package keeper

import (
	"context"

	"enreach/x/manager/types"

	"cosmossdk.io/store/prefix"
	"github.com/cosmos/cosmos-sdk/runtime"
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

	manager, found := k.GetManager(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetManagerResponse{Manager: manager}, nil
}
