package keeper

import (
	"context"
	"encoding/binary"

	"enreach/x/registry/types"

	"cosmossdk.io/store/prefix"
	storetypes "cosmossdk.io/store/types"
	"github.com/cosmos/cosmos-sdk/runtime"
)

// GetRegionCount get the total number of region
func (k Keeper) GetRegionCount(ctx context.Context) uint64 {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, []byte{})
	byteKey := types.KeyPrefix(types.RegionCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetRegionCount set the total number of region
func (k Keeper) SetRegionCount(ctx context.Context, count uint64) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, []byte{})
	byteKey := types.KeyPrefix(types.RegionCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendRegion appends a region in the store with a new id and update the count
func (k Keeper) AppendRegion(
	ctx context.Context,
	region types.Region,
) {
	// Create the region
	count := k.GetRegionCount(ctx)

	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.RegionKey))
	appendedValue := k.cdc.MustMarshal(&region)
	store.Set(GetRegionCodeBytes(region.Code), appendedValue)

	// Update region count
	k.SetRegionCount(ctx, count+1)
}

// SetRegion set a specific region in the store
func (k Keeper) SetRegion(ctx context.Context, region types.Region) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.RegionKey))
	b := k.cdc.MustMarshal(&region)
	store.Set(GetRegionCodeBytes(region.Code), b)
}

// GetRegion returns a region from its id
func (k Keeper) GetRegion(ctx context.Context, code string) (val types.Region, found bool) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.RegionKey))
	b := store.Get(GetRegionCodeBytes(code))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveRegion removes a region from the store
func (k Keeper) RemoveRegion(ctx context.Context, code string) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.RegionKey))
	store.Delete(GetRegionCodeBytes(code))
}

// GetAllRegion returns all region
func (k Keeper) GetAllRegion(ctx context.Context) (list []types.Region) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.RegionKey))
	iterator := storetypes.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Region
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetRegionCodeBytes returns the byte representation of the Code
func GetRegionCodeBytes(code string) []byte {
	bz := types.KeyPrefix(types.RegionKey)
	bz = append(bz, []byte("/")...)
	bz = append(bz, []byte(code)...)
	return bz
}
