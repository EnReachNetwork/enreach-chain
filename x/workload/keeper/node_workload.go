package keeper

import (
	"context"
	"encoding/binary"
	"fmt"

	"enreach/x/workload/types"

	"cosmossdk.io/store/prefix"
	"github.com/cosmos/cosmos-sdk/runtime"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

// GetNodeWorkloadCountByEpoch get the total number of NodeWorkloads of an epoch
func (k Keeper) GetNodeWorkloadCountByEpoch(ctx context.Context, epochID uint64) uint64 {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.NodeWorkloadCountKey))
	byteKey := GetNodeWorkloadCountKey(epochID)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetNodeWorkloadCountByEpoch set the total number of NodeWorkloads of an epoch
func (k Keeper) SetNodeWorkloadCountByEpoch(ctx context.Context, epochID uint64, count uint64) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.NodeWorkloadCountKey))
	byteKey := GetNodeWorkloadCountKey(epochID)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendNodeWorkload set the NodeWorkload of a node in a dedicated epoch
func (k Keeper) AppendNodeWorkload(ctx context.Context, nodeWorkload *types.NodeWorkload) {
	// Get the existing NodeWorkload count of an epoch
	count := k.GetNodeWorkloadCountByEpoch(ctx, nodeWorkload.Epoch)

	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, GetNodeWorkloadStorePrefix(nodeWorkload.Epoch))
	appendedValue := k.cdc.MustMarshal(nodeWorkload)
	store.Set(GetNodeWorkloadKey(nodeWorkload.Epoch, nodeWorkload.NodeID), appendedValue)

	// Update NodeWorkload count
	k.SetNodeWorkloadCountByEpoch(ctx, nodeWorkload.Epoch, count+1)
}

// SetNodeWorkload set the NodeWorkload of a node in a dedicated epoch
func (k Keeper) SetNodeWorkload(ctx context.Context, nodeWorkload *types.NodeWorkload) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, GetNodeWorkloadStorePrefix(nodeWorkload.Epoch))
	b := k.cdc.MustMarshal(nodeWorkload)
	store.Set(GetNodeWorkloadKey(nodeWorkload.Epoch, nodeWorkload.NodeID), b)
}

// GetNodeWorkload get the NodeWorkload of a node in a dedicated epoch
func (k Keeper) GetNodeWorkload(ctx context.Context, epochID uint64, nodeID string) (val types.NodeWorkload, found bool) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, GetNodeWorkloadStorePrefix(epochID))
	b := store.Get(GetNodeWorkloadKey(epochID, nodeID))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// GetNodeWorkloadPaginated get the NodeWorkloads of all nodes in a dedicated epoch
func (k Keeper) GetNodeWorkloadsPaginated(ctx context.Context, epochID uint64, pageReq *query.PageRequest) ([]types.NodeWorkload, *query.PageResponse, error) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, GetNodeWorkloadStorePrefix(epochID))

	var nodeWorkloads []types.NodeWorkload
	pageRes, err := query.Paginate(store, pageReq, func(key []byte, value []byte) error {
		var nodeWorkload types.NodeWorkload
		if err := k.cdc.Unmarshal(value, &nodeWorkload); err != nil {
			return err
		}

		nodeWorkloads = append(nodeWorkloads, nodeWorkload)
		return nil
	})

	if err != nil {
		return nil, nil, status.Error(codes.Internal, err.Error())
	}

	return nodeWorkloads, pageRes, nil
}

func GetNodeWorkloadCountKey(epochID uint64) []byte {
	bz := types.KeyPrefix(types.NodeWorkloadCountKey)
	bz = append(bz, []byte("/")...)
	bz = binary.BigEndian.AppendUint64(bz, epochID)
	return bz
}

// Prefix + epochID (8 bytes BigEndian)
func GetNodeWorkloadStorePrefix(epochID uint64) []byte {
	storePrefix := binary.BigEndian.AppendUint64([]byte(types.NodeWorkloadKey), epochID)

	return storePrefix
}

// Composite key: prefix + epochID + len(nodeID) + nodeID
func GetNodeWorkloadKey(epochID uint64, nodeID string) []byte {
	epochBytes := make([]byte, 8)
	binary.BigEndian.PutUint64(epochBytes, epochID)

	nodeLen := byte(len(nodeID))
	key := make([]byte, 0, len(types.NodeWorkloadKey)+8+1+len(nodeID))
	key = append(key, []byte(types.NodeWorkloadKey)...)
	key = append(key, epochBytes...)
	key = append(key, nodeLen)
	key = append(key, []byte(nodeID)...)

	return key
}

// Decode the composite key to epochID and nodeID
func DecodeNodeWorkloadKey(key []byte) (epochID uint64, nodeID string, err error) {
	prefixLen := len(types.NodeWorkloadKey)
	if len(key) < prefixLen+8+1 {
		return 0, "", fmt.Errorf("invalid key length")
	}

	// Verify key prefix
	if string(key[:prefixLen]) != types.NodeWorkloadKey {
		return 0, "", fmt.Errorf("invalid key prefix")
	}

	// Decode epochID
	epochBytes := key[prefixLen : prefixLen+8]
	epochID = binary.BigEndian.Uint64(epochBytes)

	// Decode nodeID
	nodeLen := int(key[prefixLen+8])
	if len(key) < prefixLen+8+1+nodeLen {
		return 0, "", fmt.Errorf("invalid nodeID length")
	}
	nodeID = string(key[prefixLen+8+1 : prefixLen+8+1+nodeLen])

	return epochID, nodeID, nil
}
