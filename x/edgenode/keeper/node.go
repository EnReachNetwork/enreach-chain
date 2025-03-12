package keeper

import (
	"context"
	"encoding/binary"

	"enreach/x/edgenode/types"

	"cosmossdk.io/store/prefix"
	storetypes "cosmossdk.io/store/types"
	"github.com/cosmos/cosmos-sdk/runtime"
)

// GetNodeCount get the total number of node
func (k Keeper) GetNodeCount(ctx context.Context) uint64 {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, []byte{})
	byteKey := types.KeyPrefix(types.NodeCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetNodeCount set the total number of node
func (k Keeper) SetNodeCount(ctx context.Context, count uint64) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, []byte{})
	byteKey := types.KeyPrefix(types.NodeCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendNode appends a node in the store with a new id and update the count
func (k Keeper) AppendNode(
	ctx context.Context,
	node types.Node,
) {
	// Create the node
	count := k.GetNodeCount(ctx)

	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.NodeKey))
	appendedValue := k.cdc.MustMarshal(&node)
	store.Set(GetNodeIDBytes(node.NodeID), appendedValue)

	// Update node count
	k.SetNodeCount(ctx, count+1)
}

// SetNode set a specific node in the store
func (k Keeper) SetNode(ctx context.Context, node types.Node) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.NodeKey))
	b := k.cdc.MustMarshal(&node)
	store.Set(GetNodeIDBytes(node.NodeID), b)
}

// GetNode returns a node from its id
func (k Keeper) GetNode(ctx context.Context, nodeID string) (val types.Node, found bool) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.NodeKey))
	b := store.Get(GetNodeIDBytes(nodeID))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// GetAllNode returns all node
func (k Keeper) GetAllNode(ctx context.Context) (list []types.Node) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.NodeKey))
	iterator := storetypes.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Node
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetNodeIDBytes returns the byte representation of the ID
func GetNodeIDBytes(nodeID string) []byte {
	bz := types.KeyPrefix(types.NodeKey)
	bz = append(bz, []byte("/")...)
	bz = append(bz, []byte(nodeID)...)
	return bz
}
