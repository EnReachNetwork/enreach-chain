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

// GetEpochProcessDataCountByEpoch get the total number of EpochProcessData
func (k Keeper) GetEpochProcessDataCount(ctx context.Context) uint64 {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, []byte{})
	bz := store.Get(types.KeyPrefix(types.EpochProcessDataCountKey))

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetEpochProcessDataCount set the total number of EpochProcessData
func (k Keeper) SetEpochProcessDataCount(ctx context.Context, count uint64) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, []byte{})
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(types.KeyPrefix(types.EpochProcessDataCountKey), bz)
}

// AppendEpochProcessData appends a EpochProcessData in the store and update the count
func (k Keeper) AppendEpochProcessData(ctx context.Context, epochProcessData *types.EpochProcessData) {
	// Get the existing workreport count of an epoch
	count := k.GetEpochProcessDataCount(ctx)

	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.EpochProcessDataKey))
	appendedValue := k.cdc.MustMarshal(epochProcessData)
	store.Set(GetEpochProcessDataKey(epochProcessData.Epoch), appendedValue)

	// Update workreport count
	k.SetEpochProcessDataCount(ctx, count+1)
}

// SetEpochProcessData set a specific EpochProcessData in the store
func (k Keeper) SetEpochProcessData(ctx context.Context, epochProcessData *types.EpochProcessData) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.EpochProcessDataKey))
	b := k.cdc.MustMarshal(epochProcessData)
	store.Set(GetEpochProcessDataKey(epochProcessData.Epoch), b)
}

// GetEpochProcessData returns a EpochProcessData for the specifi epochID
func (k Keeper) GetEpochProcessData(ctx context.Context, epochID uint64) (val types.EpochProcessData, found bool) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.EpochProcessDataKey))
	b := store.Get(GetEpochProcessDataKey(epochID))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// SetLastEpochProcessData set the last EpochProcessData in the store
func (k Keeper) SetLastEpochProcessData(ctx context.Context, epochProcessData *types.EpochProcessData) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, []byte{})
	b := k.cdc.MustMarshal(epochProcessData)
	store.Set(types.KeyPrefix(types.LastEpochProcessDataKey), b)
}

// GetEpochProcessData get the last EpochProcessData from the store
func (k Keeper) GetLastEpochProcessData(ctx context.Context, epochID uint64) (val types.EpochProcessData, found bool) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, []byte{})
	b := store.Get(types.KeyPrefix(types.LastEpochProcessDataKey))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// GetEpochProcessDataPaginated get all the EpochProcessData in paginated mode
func (k Keeper) GetAllEpochProcessDataPaginated(ctx context.Context, pageReq *query.PageRequest) ([]types.EpochProcessData, *query.PageResponse, error) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.EpochProcessDataKey))

	var epochProcessDataList []types.EpochProcessData
	pageRes, err := query.Paginate(store, pageReq, func(key []byte, value []byte) error {
		var epochProcessData types.EpochProcessData
		if err := k.cdc.Unmarshal(value, &epochProcessData); err != nil {
			return err
		}

		epochProcessDataList = append(epochProcessDataList, epochProcessData)
		return nil
	})

	if err != nil {
		return nil, nil, status.Error(codes.Internal, err.Error())
	}

	return epochProcessDataList, pageRes, nil
}

// Prefix + epochID (8 bytes BigEndian)
func GetEpochProcessDataKey(epochID uint64) []byte {
	bz := types.KeyPrefix(types.EpochProcessDataKey)
	bz = append(bz, []byte("/")...)
	bz = binary.BigEndian.AppendUint64(bz, epochID)
	return bz
}
