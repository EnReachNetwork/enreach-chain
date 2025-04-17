package keeper

import (
	"context"

	"enreach/x/workload/types"

	"cosmossdk.io/store/prefix"
	"github.com/cosmos/cosmos-sdk/runtime"
)

// SetAdminAccount set adminAccount in the store
func (k Keeper) SetAdminAccount(ctx context.Context, adminAccount string) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, []byte{})

	store.Set(types.KeyPrefix(types.AdminAccountKey), []byte(adminAccount))
}

// GetAdminAccount returns adminAccount
func (k Keeper) GetAdminAccount(ctx context.Context) (val string, found bool) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, []byte{})

	b := store.Get(types.KeyPrefix(types.AdminAccountKey))
	if b == nil {
		return val, false
	}

	val = string(b)
	return val, true
}
