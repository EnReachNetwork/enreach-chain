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

// GetCheatStatusCRDataCountByEra get the total number of CheatStatusCRData of an era
func (k Keeper) GetCheatStatusCRDataCountByEra(ctx context.Context, era uint64) uint64 {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.CheatStatusCRDataCountKey))
	byteKey := GetCheatStatusCRDataCountKey(era)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetCheatStatusCRDataCountByEra set the total number of CheatStatusCRData of an era
func (k Keeper) SetCheatStatusCRDataCountByEra(ctx context.Context, era uint64, count uint64) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.CheatStatusCRDataCountKey))
	byteKey := GetCheatStatusCRDataCountKey(era)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendCheatStatusCRData set the CheatStatusCRData of a node in a dedicated eras
func (k Keeper) AppendCheatStatusCRData(ctx context.Context, era uint64, nodeID string, cheatStatusCRDataMap *types.CheatStatusCRMapDB) {
	// Get the existing CheatStatusCRData count of an era
	count := k.GetCheatStatusCRDataCountByEra(ctx, era)

	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, GetCheatStatusCRDataStorePrefix(era))
	appendedValue := k.cdc.MustMarshal(cheatStatusCRDataMap)
	store.Set(GetCheatStatusCRDataKey(era, nodeID), appendedValue)

	// Update CheatStatusCRData count
	k.SetCheatStatusCRDataCountByEra(ctx, era, count+1)
}

// SetCheatStatusCRData set the CheatStatusCRData of a node in a dedicated era
func (k Keeper) SetCheatStatusCRData(ctx context.Context, era uint64, nodeID string, cheatStatusCRDataMap *types.CheatStatusCRMapDB) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, GetCheatStatusCRDataStorePrefix(era))
	b := k.cdc.MustMarshal(cheatStatusCRDataMap)
	store.Set(GetCheatStatusCRDataKey(era, nodeID), b)
}

// GetCheatStatusCRData get the CheatStatusCRData of a node in a dedicated era
func (k Keeper) GetCheatStatusCRData(ctx context.Context, era uint64, nodeID string) (val types.CheatStatusCRMapDB, found bool) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, GetCheatStatusCRDataStorePrefix(era))
	b := store.Get(GetCheatStatusCRDataKey(era, nodeID))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// GetCheatStatusCRDataPaginated get the CheatStatusCRData of all nodes in a dedicated era
func (k Keeper) GetCheatStatusCRDatasPaginated(ctx context.Context, era uint64, pageReq *query.PageRequest) ([]types.CheatStatusCRData, *query.PageResponse, error) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, GetCheatStatusCRDataStorePrefix(era))

	var cheatStatusCRDataList []types.CheatStatusCRData
	pageRes, err := query.Paginate(store, pageReq, func(key []byte, value []byte) error {
		var cheatStatusCRDataMap types.CheatStatusCRMapDB
		if err := k.cdc.Unmarshal(value, &cheatStatusCRDataMap); err != nil {
			return err
		}

		_, nodeID, err := DecodeCheatStatusCRDataKey(key)
		if err != nil {
			return err
		}

		pointChangeData := types.CheatStatusCRData{
			Era:    era,
			NodeID: nodeID,
			Data:   cheatStatusCRDataMap.Data,
		}
		cheatStatusCRDataList = append(cheatStatusCRDataList, pointChangeData)

		return nil
	})

	if err != nil {
		return nil, nil, status.Error(codes.Internal, err.Error())
	}

	return cheatStatusCRDataList, pageRes, nil
}

func GetCheatStatusCRDataCountKey(era uint64) []byte {
	bz := types.KeyPrefix(types.CheatStatusCRDataCountKey)
	bz = append(bz, []byte("/")...)
	bz = binary.BigEndian.AppendUint64(bz, era)
	return bz
}

// Prefix + era (8 bytes BigEndian)
func GetCheatStatusCRDataStorePrefix(era uint64) []byte {
	storePrefix := binary.BigEndian.AppendUint64([]byte(types.CheatStatusCRDataKey), era)

	return storePrefix
}

// Composite key: prefix + era + len(nodeID) + nodeID
func GetCheatStatusCRDataKey(era uint64, nodeID string) []byte {
	eraBytes := make([]byte, 8)
	binary.BigEndian.PutUint64(eraBytes, era)

	nodeLen := byte(len(nodeID))
	key := make([]byte, 0, len(types.CheatStatusCRDataKey)+8+1+len(nodeID))
	key = append(key, []byte(types.CheatStatusCRDataKey)...)
	key = append(key, eraBytes...)
	key = append(key, nodeLen)
	key = append(key, []byte(nodeID)...)

	return key
}

// Decode the composite key to era and nodeID
func DecodeCheatStatusCRDataKey(key []byte) (era uint64, nodeID string, err error) {
	prefixLen := len(types.CheatStatusCRDataKey)
	if len(key) < prefixLen+8+1 {
		return 0, "", fmt.Errorf("invalid key length")
	}

	// Verify key prefix
	if string(key[:prefixLen]) != types.CheatStatusCRDataKey {
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
