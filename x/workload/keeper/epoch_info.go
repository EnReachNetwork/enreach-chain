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

// SetCurrentEpoch set current epochInfo in the store
func (k Keeper) SetCurrentEpoch(ctx context.Context, epochInfo types.EpochInfo) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.CurrentEpochKey))
	b := k.cdc.MustMarshal(&epochInfo)
	store.Set([]byte{0}, b)
}

// GetCurrentEpoch returns current epochInfo
func (k Keeper) GetCurrentEpoch(ctx context.Context) (val types.EpochInfo, found bool) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.CurrentEpochKey))

	b := store.Get([]byte{0})
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// SetPendingNextEpoch set the pending next epochInfo in the store
func (k Keeper) SetPendingNextEpoch(ctx context.Context, epochInfo *types.EpochInfo) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.PendingNextEpochKey))
	b := k.cdc.MustMarshal(epochInfo)
	store.Set([]byte{0}, b)
}

// GetPendingNextEpoch returns the pending next epochInfo
func (k Keeper) GetPendingNextEpoch(ctx context.Context) (val types.EpochInfo, found bool) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.PendingNextEpochKey))

	b := store.Get([]byte{0})
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// GetHistoryEpochCountByEpoch get the total number of HistoryEpoch
func (k Keeper) GetHistoryEpochCount(ctx context.Context) uint64 {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, []byte{})
	bz := store.Get(types.KeyPrefix(types.HistoryEpochCountKey))

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetHistoryEpochCount set the total number of HistoryEpoch
func (k Keeper) SetHistoryEpochCount(ctx context.Context, count uint64) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, []byte{})
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(types.KeyPrefix(types.HistoryEpochCountKey), bz)
}

// AppendHistoryEpoch appends a HistoryEpoch in the store and update the count
func (k Keeper) AppendHistoryEpoch(ctx context.Context, historyEpoch *types.EpochInfo) {
	// Get the existing workreport count of an epoch
	count := k.GetHistoryEpochCount(ctx)

	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.HistoryEpochKey))
	appendedValue := k.cdc.MustMarshal(historyEpoch)
	store.Set(GetHistoryEpochKey(historyEpoch.Number), appendedValue)

	// Update workreport count
	k.SetHistoryEpochCount(ctx, count+1)
}

// GetHistoryEpoch returns a HistoryEpoch for the specifi epochID
func (k Keeper) GetHistoryEpoch(ctx context.Context, epochNumber uint64) (val types.EpochInfo, found bool) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.HistoryEpochKey))
	b := store.Get(GetHistoryEpochKey(epochNumber))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// GetHistoryEpochPaginated get all the HistoryEpoch in paginated mode
func (k Keeper) GetAllHistoryEpochPaginated(ctx context.Context, pageReq *query.PageRequest) ([]types.EpochInfo, *query.PageResponse, error) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.HistoryEpochKey))

	var historyEpochList []types.EpochInfo
	pageRes, err := query.Paginate(store, pageReq, func(key []byte, value []byte) error {
		var historyEpoch types.EpochInfo
		if err := k.cdc.Unmarshal(value, &historyEpoch); err != nil {
			return err
		}

		historyEpochList = append(historyEpochList, historyEpoch)
		return nil
	})

	if err != nil {
		return nil, nil, status.Error(codes.Internal, err.Error())
	}

	return historyEpochList, pageRes, nil
}

// Prefix + epochID (8 bytes BigEndian)
func GetHistoryEpochKey(epochNumber uint64) []byte {
	bz := types.KeyPrefix(types.HistoryEpochKey)
	bz = append(bz, []byte("/")...)
	bz = binary.BigEndian.AppendUint64(bz, epochNumber)
	return bz
}
