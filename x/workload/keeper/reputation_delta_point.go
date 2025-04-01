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

// GetReputationDeltaPointCountByEra get the total number of ReputationDeltaPoint of an era
func (k Keeper) GetReputationDeltaPointCountByEra(ctx context.Context, era uint64) uint64 {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.ReputationDeltaPointCountKey))
	byteKey := GetReputationDeltaPointCountKey(era)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetReputationDeltaPointCountByEra set the total number of ReputationDeltaPoint of an era
func (k Keeper) SetReputationDeltaPointCountByEra(ctx context.Context, era uint64, count uint64) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.ReputationDeltaPointCountKey))
	byteKey := GetReputationDeltaPointCountKey(era)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendReputationDeltaPoint set the ReputationDeltaPoint of a node in a dedicated eras
func (k Keeper) AppendReputationDeltaPoint(ctx context.Context, reputationDeltaPoint *types.ReputationDeltaPoint) {
	// Get the existing ReputationDeltaPoint count of an era
	count := k.GetReputationDeltaPointCountByEra(ctx, reputationDeltaPoint.Era)

	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, GetReputationDeltaPointStorePrefix(reputationDeltaPoint.Era))
	appendedValue := k.cdc.MustMarshal(reputationDeltaPoint)
	store.Set(GetReputationDeltaPointKey(reputationDeltaPoint.Era, reputationDeltaPoint.NodeID), appendedValue)

	// Update ReputationDeltaPoint count
	k.SetReputationDeltaPointCountByEra(ctx, reputationDeltaPoint.Era, count+1)
}

// SetReputationDeltaPoint set the ReputationDeltaPoint of a node in a dedicated era
func (k Keeper) SetReputationDeltaPoint(ctx context.Context, reputationDeltaPoint *types.ReputationDeltaPoint) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, GetReputationDeltaPointStorePrefix(reputationDeltaPoint.Era))
	b := k.cdc.MustMarshal(reputationDeltaPoint)
	store.Set(GetReputationDeltaPointKey(reputationDeltaPoint.Era, reputationDeltaPoint.NodeID), b)
}

// GetReputationDeltaPoint get the ReputationDeltaPoint of a node in a dedicated era
func (k Keeper) GetReputationDeltaPoint(ctx context.Context, era uint64, nodeID string) (val types.ReputationDeltaPoint, found bool) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, GetReputationDeltaPointStorePrefix(era))
	b := store.Get(GetReputationDeltaPointKey(era, nodeID))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// GetReputationDeltaPointPaginated get the ReputationDeltaPoint of all nodes in a dedicated era
func (k Keeper) GetReputationDeltaPointsPaginated(ctx context.Context, era uint64, pageReq *query.PageRequest) ([]types.ReputationDeltaPoint, *query.PageResponse, error) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, GetReputationDeltaPointStorePrefix(era))

	var reputationDeltaPointList []types.ReputationDeltaPoint
	pageRes, err := query.Paginate(store, pageReq, func(key []byte, value []byte) error {
		var reputationDeltaPoint types.ReputationDeltaPoint
		if err := k.cdc.Unmarshal(value, &reputationDeltaPoint); err != nil {
			return err
		}

		reputationDeltaPointList = append(reputationDeltaPointList, reputationDeltaPoint)

		return nil
	})

	if err != nil {
		return nil, nil, status.Error(codes.Internal, err.Error())
	}

	return reputationDeltaPointList, pageRes, nil
}

func GetReputationDeltaPointCountKey(era uint64) []byte {
	bz := types.KeyPrefix(types.ReputationDeltaPointCountKey)
	bz = append(bz, []byte("/")...)
	bz = binary.BigEndian.AppendUint64(bz, era)
	return bz
}

// Prefix + era (8 bytes BigEndian)
func GetReputationDeltaPointStorePrefix(era uint64) []byte {
	storePrefix := binary.BigEndian.AppendUint64([]byte(types.ReputationDeltaPointKey), era)

	return storePrefix
}

// Composite key: prefix + era + len(nodeID) + nodeID
func GetReputationDeltaPointKey(era uint64, nodeID string) []byte {
	eraBytes := make([]byte, 8)
	binary.BigEndian.PutUint64(eraBytes, era)

	nodeLen := byte(len(nodeID))
	key := make([]byte, 0, len(types.ReputationDeltaPointKey)+8+1+len(nodeID))
	key = append(key, []byte(types.ReputationDeltaPointKey)...)
	key = append(key, eraBytes...)
	key = append(key, nodeLen)
	key = append(key, []byte(nodeID)...)

	return key
}

// Decode the composite key to era and nodeID
func DecodeReputationDeltaPointKey(key []byte) (era uint64, nodeID string, err error) {
	prefixLen := len(types.ReputationDeltaPointKey)
	if len(key) < prefixLen+8+1 {
		return 0, "", fmt.Errorf("invalid key length")
	}

	// Verify key prefix
	if string(key[:prefixLen]) != types.ReputationDeltaPointKey {
		return 0, "", fmt.Errorf("invalid key prefix")
	}

	// Decode era
	eraBytes := key[prefixLen : prefixLen+8]
	era = binary.BigEndian.Uint64(eraBytes)

	// Decode nodeID
	nodeLen := int(key[prefixLen+8])
	if len(key) < prefixLen+8+1+nodeLen {
		return 0, "", fmt.Errorf("invalid nodeID length")
	}
	nodeID = string(key[prefixLen+8+1 : prefixLen+8+1+nodeLen])

	return era, nodeID, nil
}
