package keeper

import (
	"context"

	"enreach/x/registry/types"

	"cosmossdk.io/store/prefix"
	"github.com/cosmos/cosmos-sdk/runtime"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) RegionAll(ctx context.Context, req *types.QueryAllRegionRequest) (*types.QueryAllRegionResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var regions []types.Region

	store := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	regionStore := prefix.NewStore(store, types.KeyPrefix(types.RegionKey))

	pageRes, err := query.Paginate(regionStore, req.Pagination, func(key []byte, value []byte) error {
		var region types.Region
		if err := k.cdc.Unmarshal(value, &region); err != nil {
			return err
		}

		regions = append(regions, region)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllRegionResponse{Region: regions, Pagination: pageRes}, nil
}

func (k Keeper) Region(ctx context.Context, req *types.QueryGetRegionRequest) (*types.QueryGetRegionResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	region, found := k.GetRegion(ctx, req.Code)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetRegionResponse{Region: region}, nil
}
