package keeper

import (
	"context"
	"encoding/binary"

	"enreach/x/edgenode/types"

	"cosmossdk.io/store/prefix"
	storetypes "cosmossdk.io/store/types"
	"github.com/cosmos/cosmos-sdk/runtime"
)

// GetUserCount get the total number of user
func (k Keeper) GetUserCount(ctx context.Context) uint64 {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, []byte{})
	byteKey := types.KeyPrefix(types.UserCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetUserCount set the total number of user
func (k Keeper) SetUserCount(ctx context.Context, count uint64) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, []byte{})
	byteKey := types.KeyPrefix(types.UserCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendUser appends a user in the store with a new id and update the count
func (k Keeper) AppendUser(
	ctx context.Context,
	user types.User,
) {
	// Create the user
	count := k.GetUserCount(ctx)

	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.UserKey))
	appendedValue := k.cdc.MustMarshal(&user)
	store.Set(GetUserIDBytes(user.UserID), appendedValue)

	// Update user count
	k.SetUserCount(ctx, count+1)
}

// SetUser set a specific user in the store
func (k Keeper) SetUser(ctx context.Context, user types.User) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.UserKey))
	b := k.cdc.MustMarshal(&user)
	store.Set(GetUserIDBytes(user.UserID), b)
}

// GetUser returns a user from its id
func (k Keeper) GetUser(ctx context.Context, userID string) (val types.User, found bool) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.UserKey))
	b := store.Get(GetUserIDBytes(userID))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// GetAllUser returns all user
func (k Keeper) GetAllUser(ctx context.Context) (list []types.User) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.UserKey))
	iterator := storetypes.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.User
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetUserIDBytes returns the byte representation of the ID
func GetUserIDBytes(userID string) []byte {
	bz := types.KeyPrefix(types.UserKey)
	bz = append(bz, []byte("/")...)
	bz = append(bz, []byte(userID)...)
	return bz
}
