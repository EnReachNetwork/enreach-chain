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

// GetManagerWorkloadCountByEpoch get the total number of ManagerWorkloads of an epoch
func (k Keeper) GetManagerWorkloadCountByEpoch(ctx context.Context, epochID uint64) uint64 {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.ManagerWorkloadCountKey))
	byteKey := GetManagerWorkloadCountKey(epochID)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetManagerWorkloadCountByEpoch set the total number of ManagerWorkloads of an epoch
func (k Keeper) SetManagerWorkloadCountByEpoch(ctx context.Context, epochID uint64, count uint64) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.ManagerWorkloadCountKey))
	byteKey := GetManagerWorkloadCountKey(epochID)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendManagerWorkload set the ManagerWorkload of a manager in a dedicated epoch
func (k Keeper) AppendManagerWorkload(ctx context.Context, managerWorkload *types.ManagerWorkload) {
	// Get the existing ManagerWorkload count of an epoch
	count := k.GetManagerWorkloadCountByEpoch(ctx, managerWorkload.Epoch)

	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, GetManagerWorkloadStorePrefix(managerWorkload.Epoch))
	appendedValue := k.cdc.MustMarshal(managerWorkload)
	store.Set(GetManagerWorkloadKey(managerWorkload.Epoch, managerWorkload.ManagerAccount), appendedValue)

	// Update ManagerWorkload count
	k.SetManagerWorkloadCountByEpoch(ctx, managerWorkload.Epoch, count+1)
}

// SetManagerWorkload set the ManagerWorkload of a manager in a dedicated epoch
func (k Keeper) SetManagerWorkload(ctx context.Context, managerWorkload *types.ManagerWorkload) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, GetManagerWorkloadStorePrefix(managerWorkload.Epoch))
	b := k.cdc.MustMarshal(managerWorkload)
	store.Set(GetManagerWorkloadKey(managerWorkload.Epoch, managerWorkload.ManagerAccount), b)
}

// GetManagerWorkload get the ManagerWorkload of a manager in a dedicated epoch
func (k Keeper) GetManagerWorkload(ctx context.Context, epochID uint64, managerAccount string) (val types.ManagerWorkload, found bool) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, GetManagerWorkloadStorePrefix(epochID))
	b := store.Get(GetManagerWorkloadKey(epochID, managerAccount))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// GetManagerWorkloadPaginated get the ManagerWorkloads of all managers in a dedicated epoch
func (k Keeper) GetManagerWorkloadsPaginated(ctx context.Context, epochID uint64, pageReq *query.PageRequest) ([]types.ManagerWorkload, *query.PageResponse, error) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, GetManagerWorkloadStorePrefix(epochID))

	var managerWorkloads []types.ManagerWorkload
	pageRes, err := query.Paginate(store, pageReq, func(key []byte, value []byte) error {
		var managerWorkload types.ManagerWorkload
		if err := k.cdc.Unmarshal(value, &managerWorkload); err != nil {
			return err
		}

		managerWorkloads = append(managerWorkloads, managerWorkload)
		return nil
	})

	if err != nil {
		return nil, nil, status.Error(codes.Internal, err.Error())
	}

	return managerWorkloads, pageRes, nil
}

func GetManagerWorkloadCountKey(epochID uint64) []byte {
	bz := types.KeyPrefix(types.ManagerWorkloadCountKey)
	bz = append(bz, []byte("/")...)
	bz = binary.BigEndian.AppendUint64(bz, epochID)
	return bz
}

// Prefix + epochID (8 bytes BigEndian)
func GetManagerWorkloadStorePrefix(epochID uint64) []byte {
	storePrefix := binary.BigEndian.AppendUint64([]byte(types.ManagerWorkloadKey), epochID)

	return storePrefix
}

// Composite key: prefix + epochID + len(managerAccount) + managerAccount
func GetManagerWorkloadKey(epochID uint64, managerAccount string) []byte {
	epochBytes := make([]byte, 8)
	binary.BigEndian.PutUint64(epochBytes, epochID)

	managerLen := byte(len(managerAccount))
	key := make([]byte, 0, len(types.ManagerWorkloadKey)+8+1+len(managerAccount))
	key = append(key, []byte(types.ManagerWorkloadKey)...)
	key = append(key, epochBytes...)
	key = append(key, managerLen)
	key = append(key, []byte(managerAccount)...)

	return key
}

// Decode the composite key to epochID and managerAccount
func DecodeManagerWorkloadKey(key []byte) (epochID uint64, managerAccount string, err error) {
	prefixLen := len(types.ManagerWorkloadKey)
	if len(key) < prefixLen+8+1 {
		return 0, "", fmt.Errorf("invalid key length")
	}

	// Verify key prefix
	if string(key[:prefixLen]) != types.ManagerWorkloadKey {
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
