package keeper

import (
	"context"
	"encoding/binary"

	"enreach/x/workload/types"

	"cosmossdk.io/store/prefix"
	"github.com/cosmos/cosmos-sdk/runtime"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

// GetReputationPointCount get the total number of reputationPoint
func (k Keeper) GetReputationPointCount(ctx context.Context) uint64 {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, []byte{})
	byteKey := types.KeyPrefix(types.ReputationPointCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetReputationPointCount set the total number of reputationPoint
func (k Keeper) SetReputationPointCount(ctx context.Context, count uint64) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, []byte{})
	byteKey := types.KeyPrefix(types.ReputationPointCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendReputationPoint appends a reputationPoint in the store and update the count
func (k Keeper) AppendReputationPoint(
	ctx context.Context,
	reputationPoint types.ReputationPoint,
) {
	// Create the reputationPoint
	count := k.GetReputationPointCount(ctx)

	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.ReputationPointKey))
	appendedValue := k.cdc.MustMarshal(&reputationPoint)
	store.Set(GetReputationPointKey(reputationPoint.NodeID), appendedValue)

	// Update reputationPoint count
	k.SetReputationPointCount(ctx, count+1)
}

// SetReputationPoint set a specific reputationPoint in the store
func (k Keeper) SetReputationPoint(ctx context.Context, reputationPoint types.ReputationPoint) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.ReputationPointKey))
	b := k.cdc.MustMarshal(&reputationPoint)
	store.Set(GetReputationPointKey(reputationPoint.NodeID), b)
}

// GetReputationPoint returns a reputationPoint from its account
func (k Keeper) GetReputationPoint(ctx context.Context, nodeID string) (val types.ReputationPoint, found bool) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.ReputationPointKey))
	b := store.Get(GetReputationPointKey(nodeID))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// GetReputationPointsPaginated get the ReputationPoint of all nodes
func (k Keeper) GetReputationPointsPaginated(ctx context.Context, pageReq *query.PageRequest) ([]types.ReputationPoint, *query.PageResponse, error) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.ReputationPointKey))

	var reputationPointList []types.ReputationPoint
	pageRes, err := query.Paginate(store, pageReq, func(key []byte, value []byte) error {
		var reputationPoint types.ReputationPoint
		if err := k.cdc.Unmarshal(value, &reputationPoint); err != nil {
			return err
		}

		reputationPointList = append(reputationPointList, reputationPoint)

		return nil
	})

	if err != nil {
		return nil, nil, status.Error(codes.Internal, err.Error())
	}

	return reputationPointList, pageRes, nil
}

// GetReputationPointKey returns the byte representation of the reputationPoint key
func GetReputationPointKey(nodeID string) []byte {
	bz := types.KeyPrefix(types.ReputationPointKey)
	bz = append(bz, []byte("/")...)
	bz = append(bz, []byte(nodeID)...)
	return bz
}
