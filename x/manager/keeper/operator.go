package keeper

import (
	"context"
	"encoding/binary"

	"enreach/x/manager/types"

	"cosmossdk.io/store/prefix"
	storetypes "cosmossdk.io/store/types"
	"github.com/cosmos/cosmos-sdk/runtime"
)

// GetOperatorCount get the total number of operator
func (k Keeper) GetOperatorCount(ctx context.Context) uint64 {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, []byte{})
	byteKey := types.KeyPrefix(types.OperatorCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetOperatorCount set the total number of operator
func (k Keeper) SetOperatorCount(ctx context.Context, count uint64) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, []byte{})
	byteKey := types.KeyPrefix(types.OperatorCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendOperator appends a operator in the store with a new id and update the count
func (k Keeper) AppendOperator(
	ctx context.Context,
	operator types.Operator,
) {
	// Create the operator
	count := k.GetOperatorCount(ctx)

	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.OperatorKey))
	appendedValue := k.cdc.MustMarshal(&operator)
	store.Set(GetOperatorAccountBytes(operator.OperatorAccount), appendedValue)

	// Update operator count
	k.SetOperatorCount(ctx, count+1)
}

// SetOperator set a specific operator in the store
func (k Keeper) SetOperator(ctx context.Context, operator types.Operator) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.OperatorKey))
	b := k.cdc.MustMarshal(&operator)
	store.Set(GetOperatorAccountBytes(operator.OperatorAccount), b)
}

// GetOperator returns a operator from its account
func (k Keeper) GetOperator(ctx context.Context, operatorAccount string) (val types.Operator, found bool) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.OperatorKey))
	b := store.Get(GetOperatorAccountBytes(operatorAccount))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// GetAllOperator returns all operator
func (k Keeper) GetAllOperator(ctx context.Context) (list []types.Operator) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.OperatorKey))
	iterator := storetypes.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Operator
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetOperatorAccountBytes returns the byte representation of the operator account
func GetOperatorAccountBytes(operatorAccount string) []byte {
	bz := types.KeyPrefix(types.OperatorKey)
	bz = append(bz, []byte("/")...)
	bz = append(bz, []byte(operatorAccount)...)
	return bz
}
