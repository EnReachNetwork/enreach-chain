package keeper

import (
	"context"

	"enreach/x/edgenode/types"

	"cosmossdk.io/store/prefix"
	"github.com/cosmos/cosmos-sdk/runtime"
)

// SetSuperior set superior in the store
func (k Keeper) SetSuperior(ctx context.Context, superior types.Superior) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.SuperiorKey))
	b := k.cdc.MustMarshal(&superior)
	store.Set([]byte{0}, b)
}

// GetSuperior returns superior
func (k Keeper) GetSuperior(ctx context.Context) (val types.Superior, found bool) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.SuperiorKey))

	b := store.Get([]byte{0})
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}
