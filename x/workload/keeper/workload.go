package keeper

import (
	"context"
	"encoding/binary"

	"enreach/x/workload/types"

	"cosmossdk.io/store/prefix"
	storetypes "cosmossdk.io/store/types"
	"github.com/cosmos/cosmos-sdk/runtime"
)

// GetWorkloadCount get the total number of workload
func (k Keeper) GetWorkloadCount(ctx context.Context) uint64 {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, []byte{})
	byteKey := types.KeyPrefix(types.WorkloadCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetWorkloadCount set the total number of workload
func (k Keeper) SetWorkloadCount(ctx context.Context, count uint64) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, []byte{})
	byteKey := types.KeyPrefix(types.WorkloadCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendWorkload appends a workload in the store with a new id and update the count
func (k Keeper) AppendWorkload(
	ctx context.Context,
	workload types.Workload,
) uint64 {
	// Create the workload
	count := k.GetWorkloadCount(ctx)

	// Set the ID of the appended value
	workload.Id = count

	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.WorkloadKey))
	appendedValue := k.cdc.MustMarshal(&workload)
	store.Set(GetWorkloadIDBytes(workload.Id), appendedValue)

	// Update workload count
	k.SetWorkloadCount(ctx, count+1)

	return count
}

// SetWorkload set a specific workload in the store
func (k Keeper) SetWorkload(ctx context.Context, workload types.Workload) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.WorkloadKey))
	b := k.cdc.MustMarshal(&workload)
	store.Set(GetWorkloadIDBytes(workload.Id), b)
}

// GetWorkload returns a workload from its id
func (k Keeper) GetWorkload(ctx context.Context, id uint64) (val types.Workload, found bool) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.WorkloadKey))
	b := store.Get(GetWorkloadIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// GetAllWorkload returns all workload
func (k Keeper) GetAllWorkload(ctx context.Context) (list []types.Workload) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.WorkloadKey))
	iterator := storetypes.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Workload
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetWorkloadIDBytes returns the byte representation of the ID
func GetWorkloadIDBytes(id uint64) []byte {
	bz := types.KeyPrefix(types.WorkloadKey)
	bz = append(bz, []byte("/")...)
	bz = binary.BigEndian.AppendUint64(bz, id)
	return bz
}
