package keeper

import (
	"context"

	"enreach/x/miner/types"

	"cosmossdk.io/store/prefix"
	"github.com/cosmos/cosmos-sdk/runtime"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) MinerAll(ctx context.Context, req *types.QueryAllMinerRequest) (*types.QueryAllMinerResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var miners []types.Miner

	store := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	minerStore := prefix.NewStore(store, types.KeyPrefix(types.MinerKey))

	pageRes, err := query.Paginate(minerStore, req.Pagination, func(key []byte, value []byte) error {
		var miner types.Miner
		if err := k.cdc.Unmarshal(value, &miner); err != nil {
			return err
		}

		miners = append(miners, miner)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllMinerResponse{Miner: miners, Pagination: pageRes}, nil
}

func (k Keeper) Miner(ctx context.Context, req *types.QueryGetMinerRequest) (*types.QueryGetMinerResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	miner, found := k.GetMiner(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetMinerResponse{Miner: miner}, nil
}
