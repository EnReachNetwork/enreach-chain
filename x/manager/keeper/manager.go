package keeper

import (
	"context"
	"encoding/binary"

	"enreach/x/manager/types"

	"cosmossdk.io/store/prefix"
	storetypes "cosmossdk.io/store/types"
	"github.com/cosmos/cosmos-sdk/runtime"
)

// GetManagerCount get the total number of manager
func (k Keeper) GetManagerCount(ctx context.Context) uint64 {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, []byte{})
	byteKey := types.KeyPrefix(types.ManagerCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetManagerCount set the total number of manager
func (k Keeper) SetManagerCount(ctx context.Context, count uint64) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, []byte{})
	byteKey := types.KeyPrefix(types.ManagerCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendManager appends a manager in the store with a new id and update the count
func (k Keeper) AppendManager(
	ctx context.Context,
	manager types.Manager,
) uint64 {
	// Create the manager
	count := k.GetManagerCount(ctx)

	// Set the ID of the appended value
	manager.Id = count

	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.ManagerKey))
	appendedValue := k.cdc.MustMarshal(&manager)
	store.Set(GetManagerIDBytes(manager.Id), appendedValue)

	// Update manager count
	k.SetManagerCount(ctx, count+1)

	return count
}

// SetManager set a specific manager in the store
func (k Keeper) SetManager(ctx context.Context, manager types.Manager) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.ManagerKey))
	b := k.cdc.MustMarshal(&manager)
	store.Set(GetManagerIDBytes(manager.Id), b)
}

// GetManager returns a manager from its id
func (k Keeper) GetManager(ctx context.Context, id uint64) (val types.Manager, found bool) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.ManagerKey))
	b := store.Get(GetManagerIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveManager removes a manager from the store
func (k Keeper) RemoveManager(ctx context.Context, id uint64) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.ManagerKey))
	store.Delete(GetManagerIDBytes(id))
}

// GetAllManager returns all manager
func (k Keeper) GetAllManager(ctx context.Context) (list []types.Manager) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.ManagerKey))
	iterator := storetypes.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Manager
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetManagerIDBytes returns the byte representation of the ID
func GetManagerIDBytes(id uint64) []byte {
	bz := types.KeyPrefix(types.ManagerKey)
	bz = append(bz, []byte("/")...)
	bz = binary.BigEndian.AppendUint64(bz, id)
	return bz
}