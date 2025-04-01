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

// GetManagerWRWorkloadCountByEpoch get the total number of ManagerWRWorkloads of an epoch
func (k Keeper) GetManagerWRWorkloadCountByEpoch(ctx context.Context, epochID uint64) uint64 {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.ManagerWRWorkloadCountKey))
	byteKey := GetManagerWRWorkloadCountKey(epochID)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetManagerWRWorkloadCountByEpoch set the total number of ManagerWRWorkloads of an epoch
func (k Keeper) SetManagerWRWorkloadCountByEpoch(ctx context.Context, epochID uint64, count uint64) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.ManagerWRWorkloadCountKey))
	byteKey := GetManagerWRWorkloadCountKey(epochID)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendManagerWRWorkload set the ManagerWRWorkload of a manager in a dedicated epoch
func (k Keeper) AppendManagerWRWorkload(ctx context.Context, managerWRWorkload *types.ManagerWRWorkload) {
	// Get the existing ManagerWRWorkload count of an epoch
	count := k.GetManagerWRWorkloadCountByEpoch(ctx, managerWRWorkload.Epoch)

	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, GetManagerWRWorkloadStorePrefix(managerWRWorkload.Epoch))
	appendedValue := k.cdc.MustMarshal(managerWRWorkload)
	store.Set(GetManagerWRWorkloadKey(managerWRWorkload.Epoch, managerWRWorkload.ManagerAccount), appendedValue)

	// Update ManagerWRWorkload count
	k.SetManagerWRWorkloadCountByEpoch(ctx, managerWRWorkload.Epoch, count+1)
}

// SetManagerWRWorkload set the ManagerWRWorkload of a manager in a dedicated epoch
func (k Keeper) SetManagerWRWorkload(ctx context.Context, managerWRWorkload *types.ManagerWRWorkload) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, GetManagerWRWorkloadStorePrefix(managerWRWorkload.Epoch))
	b := k.cdc.MustMarshal(managerWRWorkload)
	store.Set(GetManagerWRWorkloadKey(managerWRWorkload.Epoch, managerWRWorkload.ManagerAccount), b)
}

// GetManagerWRWorkload get the ManagerWRWorkload of a manager in a dedicated epoch
func (k Keeper) GetManagerWRWorkload(ctx context.Context, epochID uint64, managerAccount string) (val types.ManagerWRWorkload, found bool) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, GetManagerWRWorkloadStorePrefix(epochID))
	b := store.Get(GetManagerWRWorkloadKey(epochID, managerAccount))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// GetManagerWRWorkloadPaginated get the ManagerWRWorkloads of all managers in a dedicated epoch
func (k Keeper) GetManagerWRWorkloadsPaginated(ctx context.Context, epochID uint64, pageReq *query.PageRequest) ([]types.ManagerWRWorkload, *query.PageResponse, error) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, GetManagerWRWorkloadStorePrefix(epochID))

	var managerWRWorkloads []types.ManagerWRWorkload
	pageRes, err := query.Paginate(store, pageReq, func(key []byte, value []byte) error {
		var managerWRWorkload types.ManagerWRWorkload
		if err := k.cdc.Unmarshal(value, &managerWRWorkload); err != nil {
			return err
		}

		managerWRWorkloads = append(managerWRWorkloads, managerWRWorkload)
		return nil
	})

	if err != nil {
		return nil, nil, status.Error(codes.Internal, err.Error())
	}

	return managerWRWorkloads, pageRes, nil
}

func GetManagerWRWorkloadCountKey(epochID uint64) []byte {
	bz := types.KeyPrefix(types.ManagerWRWorkloadCountKey)
	bz = append(bz, []byte("/")...)
	bz = binary.BigEndian.AppendUint64(bz, epochID)
	return bz
}

// Prefix + epochID (8 bytes BigEndian)
func GetManagerWRWorkloadStorePrefix(epochID uint64) []byte {
	storePrefix := binary.BigEndian.AppendUint64([]byte(types.ManagerWRWorkloadKey), epochID)

	return storePrefix
}

// Composite key: prefix + epochID + len(managerAccount) + managerAccount
func GetManagerWRWorkloadKey(epochID uint64, managerAccount string) []byte {
	epochBytes := make([]byte, 8)
	binary.BigEndian.PutUint64(epochBytes, epochID)

	managerLen := byte(len(managerAccount))
	key := make([]byte, 0, len(types.ManagerWRWorkloadKey)+8+1+len(managerAccount))
	key = append(key, []byte(types.ManagerWRWorkloadKey)...)
	key = append(key, epochBytes...)
	key = append(key, managerLen)
	key = append(key, []byte(managerAccount)...)

	return key
}

// Decode the composite key to epochID and managerAccount
func DecodeManagerWRWorkloadKey(key []byte) (epochID uint64, managerAccount string, err error) {
	prefixLen := len(types.ManagerWRWorkloadKey)
	if len(key) < prefixLen+8+1 {
		return 0, "", fmt.Errorf("invalid key length")
	}

	// Verify key prefix
	if string(key[:prefixLen]) != types.ManagerWRWorkloadKey {
		return 0, "", fmt.Errorf("invalid key prefix")
	}

	// Decode epochID
	epochBytes := key[prefixLen : prefixLen+8]
	epochID = binary.BigEndian.Uint64(epochBytes)

	// Decode managerAccount
	managerLen := int(key[prefixLen+8])
	if len(key) < prefixLen+8+1+managerLen {
		return 0, "", fmt.Errorf("invalid managerAccount length")
	}
	managerAccount = string(key[prefixLen+8+1 : prefixLen+8+1+managerLen])

	return epochID, managerAccount, nil
}
