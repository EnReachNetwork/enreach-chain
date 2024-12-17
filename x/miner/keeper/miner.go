package keeper

import (
	"context"
	"encoding/binary"

	"enreach/x/miner/types"

	"cosmossdk.io/store/prefix"
	storetypes "cosmossdk.io/store/types"
	"github.com/cosmos/cosmos-sdk/runtime"
)

// GetMinerCount get the total number of miner
func (k Keeper) GetMinerCount(ctx context.Context) uint64 {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, []byte{})
	byteKey := types.KeyPrefix(types.MinerCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetMinerCount set the total number of miner
func (k Keeper) SetMinerCount(ctx context.Context, count uint64) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, []byte{})
	byteKey := types.KeyPrefix(types.MinerCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendMiner appends a miner in the store with a new id and update the count
func (k Keeper) AppendMiner(
	ctx context.Context,
	miner types.Miner,
) uint64 {
	// Create the miner
	count := k.GetMinerCount(ctx)

	// Set the ID of the appended value
	miner.Id = count

	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.MinerKey))
	appendedValue := k.cdc.MustMarshal(&miner)
	store.Set(GetMinerIDBytes(miner.Id), appendedValue)

	// Update miner count
	k.SetMinerCount(ctx, count+1)

	return count
}

// SetMiner set a specific miner in the store
func (k Keeper) SetMiner(ctx context.Context, miner types.Miner) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.MinerKey))
	b := k.cdc.MustMarshal(&miner)
	store.Set(GetMinerIDBytes(miner.Id), b)
}

// GetMiner returns a miner from its id
func (k Keeper) GetMiner(ctx context.Context, id uint64) (val types.Miner, found bool) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.MinerKey))
	b := store.Get(GetMinerIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveMiner removes a miner from the store
func (k Keeper) RemoveMiner(ctx context.Context, id uint64) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.MinerKey))
	store.Delete(GetMinerIDBytes(id))
}

// GetAllMiner returns all miner
func (k Keeper) GetAllMiner(ctx context.Context) (list []types.Miner) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.MinerKey))
	iterator := storetypes.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Miner
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetMinerIDBytes returns the byte representation of the ID
func GetMinerIDBytes(id uint64) []byte {
	bz := types.KeyPrefix(types.MinerKey)
	bz = append(bz, []byte("/")...)
	bz = binary.BigEndian.AppendUint64(bz, id)
	return bz
}
