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

// GetEraCheatStatusProcessDataCountByEra get the total number of EraCheatStatusProcessData
func (k Keeper) GetEraCheatStatusProcessDataCount(ctx context.Context) uint64 {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, []byte{})
	bz := store.Get(types.KeyPrefix(types.EraCheatStatusProcessDataCountKey))

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetEraCheatStatusProcessDataCount set the total number of EraCheatStatusProcessData
func (k Keeper) SetEraCheatStatusProcessDataCount(ctx context.Context, count uint64) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, []byte{})
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(types.KeyPrefix(types.EraCheatStatusProcessDataCountKey), bz)
}

// AppendEraCheatStatusProcessData appends a EraCheatStatusProcessData in the store and update the count
func (k Keeper) AppendEraCheatStatusProcessData(ctx context.Context, eraCheatStatusProcessData *types.EraCheatStatusProcessData) {
	// Get the existing workreport count of an era
	count := k.GetEraCheatStatusProcessDataCount(ctx)

	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.EraCheatStatusProcessDataKey))
	appendedValue := k.cdc.MustMarshal(eraCheatStatusProcessData)
	store.Set(GetEraCheatStatusProcessDataKey(eraCheatStatusProcessData.Era), appendedValue)

	// Update workreport count
	k.SetEraCheatStatusProcessDataCount(ctx, count+1)
}

// SetEraCheatStatusProcessData set a specific EraCheatStatusProcessData in the store
func (k Keeper) SetEraCheatStatusProcessData(ctx context.Context, eraCheatStatusProcessData *types.EraCheatStatusProcessData) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.EraCheatStatusProcessDataKey))
	b := k.cdc.MustMarshal(eraCheatStatusProcessData)
	store.Set(GetEraCheatStatusProcessDataKey(eraCheatStatusProcessData.Era), b)
}

// GetEraCheatStatusProcessData returns a EraCheatStatusProcessData for the specifi eraID
func (k Keeper) GetEraCheatStatusProcessData(ctx context.Context, eraID uint64) (val types.EraCheatStatusProcessData, found bool) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.EraCheatStatusProcessDataKey))
	b := store.Get(GetEraCheatStatusProcessDataKey(eraID))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// SetLastEraCheatStatusProcessData set the last EraCheatStatusProcessData in the store
func (k Keeper) SetLastEraCheatStatusProcessData(ctx context.Context, eraCheatStatusProcessData *types.EraCheatStatusProcessData) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, []byte{})
	b := k.cdc.MustMarshal(eraCheatStatusProcessData)
	store.Set(types.KeyPrefix(types.LastEraCheatStatusProcessDataKey), b)
}

// GetEraCheatStatusProcessData get the last EraCheatStatusProcessData from the store
func (k Keeper) GetLastEraCheatStatusProcessData(ctx context.Context) (val types.EraCheatStatusProcessData, found bool) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, []byte{})

	b := store.Get(types.KeyPrefix(types.LastEraCheatStatusProcessDataKey))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// GetEraCheatStatusProcessDataPaginated get all the EraCheatStatusProcessData in paginated mode
func (k Keeper) GetAllEraCheatStatusProcessDataPaginated(ctx context.Context, pageReq *query.PageRequest) ([]types.EraCheatStatusProcessData, *query.PageResponse, error) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.EraCheatStatusProcessDataKey))

	var eraCheatStatusProcessDataList []types.EraCheatStatusProcessData
	pageRes, err := query.Paginate(store, pageReq, func(key []byte, value []byte) error {
		var eraCheatStatusProcessData types.EraCheatStatusProcessData
		if err := k.cdc.Unmarshal(value, &eraCheatStatusProcessData); err != nil {
			return err
		}

		eraCheatStatusProcessDataList = append(eraCheatStatusProcessDataList, eraCheatStatusProcessData)
		return nil
	})

	if err != nil {
		return nil, nil, status.Error(codes.Internal, err.Error())
	}

	return eraCheatStatusProcessDataList, pageRes, nil
}

// Prefix + eraID (8 bytes BigEndian)
func GetEraCheatStatusProcessDataKey(eraID uint64) []byte {
	bz := types.KeyPrefix(types.EraCheatStatusProcessDataKey)
	bz = append(bz, []byte("/")...)
	bz = binary.BigEndian.AppendUint64(bz, eraID)
	return bz
}
