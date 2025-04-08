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

// GetEraProcessDataCountByEra get the total number of EraProcessData
func (k Keeper) GetEraProcessDataCount(ctx context.Context) uint64 {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, []byte{})
	bz := store.Get(types.KeyPrefix(types.EraProcessDataCountKey))

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetEraProcessDataCount set the total number of EraProcessData
func (k Keeper) SetEraProcessDataCount(ctx context.Context, count uint64) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, []byte{})
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(types.KeyPrefix(types.EraProcessDataCountKey), bz)
}

// AppendEraProcessData appends a EraProcessData in the store and update the count
func (k Keeper) AppendEraProcessData(ctx context.Context, eraProcessData *types.EraProcessData) {
	// Get the existing workreport count of an era
	count := k.GetEraProcessDataCount(ctx)

	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.EraProcessDataKey))
	appendedValue := k.cdc.MustMarshal(eraProcessData)
	store.Set(GetEraProcessDataKey(eraProcessData.Era), appendedValue)

	// Update workreport count
	k.SetEraProcessDataCount(ctx, count+1)
}

// SetEraProcessData set a specific EraProcessData in the store
func (k Keeper) SetEraProcessData(ctx context.Context, eraProcessData *types.EraProcessData) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.EraProcessDataKey))
	b := k.cdc.MustMarshal(eraProcessData)
	store.Set(GetEraProcessDataKey(eraProcessData.Era), b)
}

// GetEraProcessData returns a EraProcessData for the specifi eraID
func (k Keeper) GetEraProcessData(ctx context.Context, eraID uint64) (val types.EraProcessData, found bool) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.EraProcessDataKey))
	b := store.Get(GetEraProcessDataKey(eraID))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// SetLastEraProcessData set the last EraProcessData in the store
func (k Keeper) SetLastEraProcessData(ctx context.Context, eraProcessData *types.EraProcessData) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, []byte{})
	b := k.cdc.MustMarshal(eraProcessData)
	store.Set(types.KeyPrefix(types.LastEraProcessDataKey), b)
}

// GetEraProcessData get the last EraProcessData from the store
func (k Keeper) GetLastEraProcessData(ctx context.Context) (val types.EraProcessData, found bool) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, []byte{})

	b := store.Get(types.KeyPrefix(types.LastEraProcessDataKey))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// GetEraProcessDataPaginated get all the EraProcessData in paginated mode
func (k Keeper) GetAllEraProcessDataPaginated(ctx context.Context, pageReq *query.PageRequest) ([]types.EraProcessData, *query.PageResponse, error) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.EraProcessDataKey))

	var eraProcessDataList []types.EraProcessData
	pageRes, err := query.Paginate(store, pageReq, func(key []byte, value []byte) error {
		var eraProcessData types.EraProcessData
		if err := k.cdc.Unmarshal(value, &eraProcessData); err != nil {
			return err
		}

		eraProcessDataList = append(eraProcessDataList, eraProcessData)
		return nil
	})

	if err != nil {
		return nil, nil, status.Error(codes.Internal, err.Error())
	}

	return eraProcessDataList, pageRes, nil
}

// Prefix + eraID (8 bytes BigEndian)
func GetEraProcessDataKey(eraID uint64) []byte {
	bz := types.KeyPrefix(types.EraProcessDataKey)
	bz = append(bz, []byte("/")...)
	bz = binary.BigEndian.AppendUint64(bz, eraID)
	return bz
}
