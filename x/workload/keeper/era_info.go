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

// SetCurrentEra set current eraInfo in the store
func (k Keeper) SetCurrentEra(ctx context.Context, eraInfo *types.EraInfo) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, []byte{})

	if eraInfo == nil {
		store.Delete(types.KeyPrefix(types.CurrentEraKey))
		return
	}

	b := k.cdc.MustMarshal(eraInfo)
	store.Set(types.KeyPrefix(types.CurrentEraKey), b)
}

// GetCurrentEra returns current eraInfo
func (k Keeper) GetCurrentEra(ctx context.Context) (val types.EraInfo, found bool) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, []byte{})

	b := store.Get(types.KeyPrefix(types.CurrentEraKey))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// SetPendingNextEra set the pending next eraInfo in the store
func (k Keeper) SetPendingNextEra(ctx context.Context, eraInfo *types.EraInfo) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, []byte{})

	if eraInfo == nil {
		store.Delete(types.KeyPrefix(types.PendingNextEraKey))
		return
	}

	b := k.cdc.MustMarshal(eraInfo)
	store.Set(types.KeyPrefix(types.PendingNextEraKey), b)
}

// GetPendingNextEra returns the pending next eraInfo
func (k Keeper) GetPendingNextEra(ctx context.Context) (val types.EraInfo, found bool) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, []byte{})

	b := store.Get(types.KeyPrefix(types.PendingNextEraKey))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// GetHistoryEraCountByEra get the total number of HistoryEra
func (k Keeper) GetHistoryEraCount(ctx context.Context) uint64 {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, []byte{})
	bz := store.Get(types.KeyPrefix(types.HistoryEraCountKey))

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetHistoryEraCount set the total number of HistoryEra
func (k Keeper) SetHistoryEraCount(ctx context.Context, count uint64) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, []byte{})
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(types.KeyPrefix(types.HistoryEraCountKey), bz)
}

// AppendHistoryEra appends a HistoryEra in the store and update the count
func (k Keeper) AppendHistoryEra(ctx context.Context, historyEra *types.EraInfo) {
	// Get the existing workreport count of an era
	count := k.GetHistoryEraCount(ctx)

	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.HistoryEraKey))
	appendedValue := k.cdc.MustMarshal(historyEra)
	store.Set(GetHistoryEraKey(historyEra.Number), appendedValue)

	// Update workreport count
	k.SetHistoryEraCount(ctx, count+1)
}

// GetHistoryEra returns a HistoryEra for the specifi eraID
func (k Keeper) GetHistoryEra(ctx context.Context, eraNumber uint64) (val types.EraInfo, found bool) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.HistoryEraKey))
	b := store.Get(GetHistoryEraKey(eraNumber))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// GetHistoryEraPaginated get all the HistoryEra in paginated mode
func (k Keeper) GetAllHistoryEraPaginated(ctx context.Context, pageReq *query.PageRequest) ([]types.EraInfo, *query.PageResponse, error) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.HistoryEraKey))

	var historyEraList []types.EraInfo
	pageRes, err := query.Paginate(store, pageReq, func(key []byte, value []byte) error {
		var historyEra types.EraInfo
		if err := k.cdc.Unmarshal(value, &historyEra); err != nil {
			return err
		}

		historyEraList = append(historyEraList, historyEra)
		return nil
	})

	if err != nil {
		return nil, nil, status.Error(codes.Internal, err.Error())
	}

	return historyEraList, pageRes, nil
}

// Prefix + eraID (8 bytes BigEndian)
func GetHistoryEraKey(eraNumber uint64) []byte {
	bz := types.KeyPrefix(types.HistoryEraKey)
	bz = append(bz, []byte("/")...)
	bz = binary.BigEndian.AppendUint64(bz, eraNumber)
	return bz
}
