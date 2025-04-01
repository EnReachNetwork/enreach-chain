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

// GetReputationPointCountByEra get the total number of ReputationPoint of an era
func (k Keeper) GetReputationPointCountByEra(ctx context.Context, era uint64) uint64 {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.ReputationPointCountKey))
	byteKey := GetReputationPointCountKey(era)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetReputationPointCountByEra set the total number of ReputationPoint of an era
func (k Keeper) SetReputationPointCountByEra(ctx context.Context, era uint64, count uint64) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.ReputationPointCountKey))
	byteKey := GetReputationPointCountKey(era)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendReputationPoint set the ReputationPoint of a node in a dedicated eras
func (k Keeper) AppendReputationPoint(ctx context.Context, era uint64, nodeID string, reputationPoint *types.ReputationPoint) {
	// Get the existing ReputationPoint count of an era
	count := k.GetReputationPointCountByEra(ctx, era)

	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, GetReputationPointStorePrefix(era))
	appendedValue := k.cdc.MustMarshal(reputationPoint)
	store.Set(GetReputationPointKey(era, nodeID), appendedValue)

	// Update ReputationPoint count
	k.SetReputationPointCountByEra(ctx, era, count+1)
}

// SetReputationPoint set the ReputationPoint of a node in a dedicated era
func (k Keeper) SetReputationPoint(ctx context.Context, era uint64, nodeID string, reputationPoint *types.ReputationPoint) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, GetReputationPointStorePrefix(era))
	b := k.cdc.MustMarshal(reputationPoint)
	store.Set(GetReputationPointKey(era, nodeID), b)
}

// GetReputationPoint get the ReputationPoint of a node in a dedicated era
func (k Keeper) GetReputationPoint(ctx context.Context, era uint64, nodeID string) (val types.ReputationPoint, found bool) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, GetReputationPointStorePrefix(era))
	b := store.Get(GetReputationPointKey(era, nodeID))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// GetReputationPointPaginated get the ReputationPoint of all nodes in a dedicated era
func (k Keeper) GetReputationPointsPaginated(ctx context.Context, era uint64, pageReq *query.PageRequest) ([]types.ReputationPoint, *query.PageResponse, error) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, GetReputationPointStorePrefix(era))

	var reputationPointList []types.ReputationPoint
	pageRes, err := query.Paginate(store, pageReq, func(key []byte, value []byte) error {
		var reputationPoint types.ReputationPoint
		if err := k.cdc.Unmarshal(value, &reputationPoint); err != nil {
			return err
		}

		reputationPointList = append(reputationPointList, reputationPoint)

		return nil
	})

	if err != nil {
		return nil, nil, status.Error(codes.Internal, err.Error())
	}

	return reputationPointList, pageRes, nil
}

func GetReputationPointCountKey(era uint64) []byte {
	bz := types.KeyPrefix(types.ReputationPointCountKey)
	bz = append(bz, []byte("/")...)
	bz = binary.BigEndian.AppendUint64(bz, era)
	return bz
}

// Prefix + era (8 bytes BigEndian)
func GetReputationPointStorePrefix(era uint64) []byte {
	storePrefix := binary.BigEndian.AppendUint64([]byte(types.ReputationPointKey), era)

	return storePrefix
}

// Composite key: prefix + era + len(nodeID) + nodeID
func GetReputationPointKey(era uint64, nodeID string) []byte {
	eraBytes := make([]byte, 8)
	binary.BigEndian.PutUint64(eraBytes, era)

	nodeLen := byte(len(nodeID))
	key := make([]byte, 0, len(types.ReputationPointKey)+8+1+len(nodeID))
	key = append(key, []byte(types.ReputationPointKey)...)
	key = append(key, eraBytes...)
	key = append(key, nodeLen)
	key = append(key, []byte(nodeID)...)

	return key
}

// Decode the composite key to era and nodeID
func DecodeReputationPointKey(key []byte) (era uint64, nodeID string, err error) {
	prefixLen := len(types.ReputationPointKey)
	if len(key) < prefixLen+8+1 {
		return 0, "", fmt.Errorf("invalid key length")
	}

	// Verify key prefix
	if string(key[:prefixLen]) != types.ReputationPointKey {
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
