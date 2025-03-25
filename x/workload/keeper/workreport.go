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

// GetWorkreportCountByEpoch get the total number of workreports of an epoch
func (k Keeper) GetWorkreportCountByEpoch(ctx context.Context, epochID uint64) uint64 {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, []byte{})
	byteKey := GetWorkreportCountKey(epochID)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetWorkreportCountByEpoch set the total number of workreports of an epoch
func (k Keeper) SetWorkreportCountByEpoch(ctx context.Context, epochID uint64, count uint64) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, []byte{})
	byteKey := GetWorkreportCountKey(epochID)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendNodeWorkreport set the workreport of a node in a dedicated epoch
func (k Keeper) AppendNodeWorkreport(ctx context.Context, epochID uint64, nodeID string, scoresMap *types.ManagerNodeScoreMap) {
	// Get the existing workreport count of an epoch
	count := k.GetWorkreportCountByEpoch(ctx, epochID)

	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.WorkreportKey))
	appendedValue := k.cdc.MustMarshal(scoresMap)
	store.Set(GetWorkreportKey(epochID, nodeID), appendedValue)

	// Update workreport count
	k.SetWorkreportCountByEpoch(ctx, epochID, count+1)
}

// SetNodeWorkreport set the workreport of a node in a dedicated epoch
func (k Keeper) SetNodeWorkreport(ctx context.Context, epochID uint64, nodeID string, scoresMap *types.ManagerNodeScoreMap) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.WorkreportKey))
	b := k.cdc.MustMarshal(scoresMap)
	store.Set(GetWorkreportKey(epochID, nodeID), b)
}

// GetNodeWorkreport get the workreport of a node in a dedicated epoch
func (k Keeper) GetNodeWorkreport(ctx context.Context, epochID uint64, nodeID string) (val types.ManagerNodeScoreMap, found bool) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.WorkreportKey))
	b := store.Get(GetWorkreportKey(epochID, nodeID))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// GetNodeWorkreportPaginated get the workreports of all nodes in a dedicated epoch
func (k Keeper) GetNodeWorkreportsPaginated(ctx context.Context, epochID uint64, pageReq *query.PageRequest) ([]types.Workreport, *query.PageResponse, error) {
	// Build the partial key: Prefix + epochID (8 bytes BigEndian)
	prefixBytes := binary.BigEndian.AppendUint64([]byte(types.WorkreportKey), epochID)

	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, prefixBytes)

	var workreports []types.Workreport
	pageRes, err := query.Paginate(store, pageReq, func(key []byte, value []byte) error {
		var scoresMap types.ManagerNodeScoreMap
		if err := k.cdc.Unmarshal(value, &scoresMap); err != nil {
			return err
		}

		_, nodeID, err := DecodeWorkreportKey(key)
		if err != nil {
			return err
		}

		workreport := types.Workreport{
			Epoch:           epochID,
			NodeID:          nodeID,
			ManagerScoreMap: &scoresMap,
		}
		workreports = append(workreports, workreport)

		return nil
	})

	if err != nil {
		return nil, nil, status.Error(codes.Internal, err.Error())
	}

	return workreports, pageRes, nil
}

func GetWorkreportCountKey(epochID uint64) []byte {
	bz := types.KeyPrefix(types.WorkreportCountKey)
	bz = append(bz, []byte("/")...)
	bz = binary.BigEndian.AppendUint64(bz, epochID)
	return bz
}

// Composite key: prefix + epochID + len(nodeID) + nodeID
func GetWorkreportKey(epochID uint64, nodeID string) []byte {
	epochBytes := make([]byte, 8)
	binary.BigEndian.PutUint64(epochBytes, epochID)

	nodeLen := byte(len(nodeID))
	key := make([]byte, 0, len(types.WorkreportKey)+8+1+len(nodeID))
	key = append(key, []byte(types.WorkreportKey)...)
	key = append(key, epochBytes...)
	key = append(key, nodeLen)
	key = append(key, []byte(nodeID)...)

	return key
}

// Decode the composite key to epochID and nodeID
func DecodeWorkreportKey(key []byte) (epochID uint64, nodeID string, err error) {
	prefixLen := len(types.WorkreportKey)
	if len(key) < prefixLen+8+1 {
		return 0, "", fmt.Errorf("invalid key length")
	}

	// Verify key prefix
	if string(key[:prefixLen]) != types.WorkreportKey {
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
