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

// GetReputationPointChangeDataCountByEra get the total number of ReputationPointChangeData of an era
func (k Keeper) GetReputationPointChangeDataCountByEra(ctx context.Context, era uint64) uint64 {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.ReputationPointChangeDataCountKey))
	byteKey := GetReputationPointChangeDataCountKey(era)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetReputationPointChangeDataCountByEra set the total number of ReputationPointChangeData of an era
func (k Keeper) SetReputationPointChangeDataCountByEra(ctx context.Context, era uint64, count uint64) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.ReputationPointChangeDataCountKey))
	byteKey := GetReputationPointChangeDataCountKey(era)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendReputationPointChangeData set the ReputationPointChangeData of a node in a dedicated eras
func (k Keeper) AppendReputationPointChangeData(ctx context.Context, era uint64, nodeID string, pointChangeDataMap *types.ReputationPointChangeRawDataMapDB) {
	// Get the existing ReputationPointChangeData count of an era
	count := k.GetReputationPointChangeDataCountByEra(ctx, era)

	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, GetReputationPointChangeDataStorePrefix(era))
	appendedValue := k.cdc.MustMarshal(pointChangeDataMap)
	store.Set(GetReputationPointChangeDataKey(era, nodeID), appendedValue)

	// Update ReputationPointChangeData count
	k.SetReputationPointChangeDataCountByEra(ctx, era, count+1)
}

// SetReputationPointChangeData set the ReputationPointChangeData of a node in a dedicated era
func (k Keeper) SetReputationPointChangeData(ctx context.Context, era uint64, nodeID string, pointChangeDataMap *types.ReputationPointChangeRawDataMapDB) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, GetReputationPointChangeDataStorePrefix(era))
	b := k.cdc.MustMarshal(pointChangeDataMap)
	store.Set(GetReputationPointChangeDataKey(era, nodeID), b)
}

// GetReputationPointChangeData get the ReputationPointChangeData of a node in a dedicated era
func (k Keeper) GetReputationPointChangeData(ctx context.Context, era uint64, nodeID string) (val types.ReputationPointChangeRawDataMapDB, found bool) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, GetReputationPointChangeDataStorePrefix(era))
	b := store.Get(GetReputationPointChangeDataKey(era, nodeID))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// GetReputationPointChangeDataPaginated get the ReputationPointChangeData of all nodes in a dedicated era
func (k Keeper) GetReputationPointChangeDatasPaginated(ctx context.Context, era uint64, pageReq *query.PageRequest) ([]types.ReputationPointChangeData, *query.PageResponse, error) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, GetReputationPointChangeDataStorePrefix(era))

	var pointChangeDataList []types.ReputationPointChangeData
	pageRes, err := query.Paginate(store, pageReq, func(key []byte, value []byte) error {
		var pointChangeDataMapDB types.ReputationPointChangeRawDataMapDB
		if err := k.cdc.Unmarshal(value, &pointChangeDataMapDB); err != nil {
			return err
		}

		_, nodeID, err := DecodeReputationPointChangeDataKey(key)
		if err != nil {
			return err
		}

		pointChangeData := types.ReputationPointChangeData{
			Era:    era,
			NodeID: nodeID,
			Data:   pointChangeDataMapDB.Data,
		}
		pointChangeDataList = append(pointChangeDataList, pointChangeData)

		return nil
	})

	if err != nil {
		return nil, nil, status.Error(codes.Internal, err.Error())
	}

	return pointChangeDataList, pageRes, nil
}

func GetReputationPointChangeDataCountKey(era uint64) []byte {
	bz := types.KeyPrefix(types.ReputationPointChangeDataCountKey)
	bz = append(bz, []byte("/")...)
	bz = binary.BigEndian.AppendUint64(bz, era)
	return bz
}

// Prefix + era (8 bytes BigEndian)
func GetReputationPointChangeDataStorePrefix(era uint64) []byte {
	storePrefix := binary.BigEndian.AppendUint64([]byte(types.ReputationPointChangeDataKey), era)

	return storePrefix
}

// Composite key: prefix + era + len(nodeID) + nodeID
func GetReputationPointChangeDataKey(era uint64, nodeID string) []byte {
	eraBytes := make([]byte, 8)
	binary.BigEndian.PutUint64(eraBytes, era)

	nodeLen := byte(len(nodeID))
	key := make([]byte, 0, len(types.ReputationPointChangeDataKey)+8+1+len(nodeID))
	key = append(key, []byte(types.ReputationPointChangeDataKey)...)
	key = append(key, eraBytes...)
	key = append(key, nodeLen)
	key = append(key, []byte(nodeID)...)

	return key
}

// Decode the composite key to era and nodeID
func DecodeReputationPointChangeDataKey(key []byte) (era uint64, nodeID string, err error) {
	prefixLen := len(types.ReputationPointChangeDataKey)
	if len(key) < prefixLen+8+1 {
		return 0, "", fmt.Errorf("invalid key length")
	}

	// Verify key prefix
	if string(key[:prefixLen]) != types.ReputationPointChangeDataKey {
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
