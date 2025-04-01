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

// GetManagerRPWorkloadCountByEra get the total number of ManagerRPWorkloads of an era
func (k Keeper) GetManagerRPWorkloadCountByEra(ctx context.Context, era uint64) uint64 {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.ManagerRPWorkloadCountKey))
	byteKey := GetManagerRPWorkloadCountKey(era)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetManagerRPWorkloadCountByEra set the total number of ManagerRPWorkloads of an era
func (k Keeper) SetManagerRPWorkloadCountByEra(ctx context.Context, era uint64, count uint64) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.ManagerRPWorkloadCountKey))
	byteKey := GetManagerRPWorkloadCountKey(era)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendManagerRPWorkload set the ManagerRPWorkload of a manager in a dedicated era
func (k Keeper) AppendManagerRPWorkload(ctx context.Context, managerRPWorkload *types.ManagerRPWorkload) {
	// Get the existing ManagerRPWorkload count of an era
	count := k.GetManagerRPWorkloadCountByEra(ctx, managerRPWorkload.Era)

	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, GetManagerRPWorkloadStorePrefix(managerRPWorkload.Era))
	appendedValue := k.cdc.MustMarshal(managerRPWorkload)
	store.Set(GetManagerRPWorkloadKey(managerRPWorkload.Era, managerRPWorkload.ManagerAccount), appendedValue)

	// Update ManagerRPWorkload count
	k.SetManagerRPWorkloadCountByEra(ctx, managerRPWorkload.Era, count+1)
}

// SetManagerRPWorkload set the ManagerRPWorkload of a manager in a dedicated era
func (k Keeper) SetManagerRPWorkload(ctx context.Context, managerRPWorkload *types.ManagerRPWorkload) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, GetManagerRPWorkloadStorePrefix(managerRPWorkload.Era))
	b := k.cdc.MustMarshal(managerRPWorkload)
	store.Set(GetManagerRPWorkloadKey(managerRPWorkload.Era, managerRPWorkload.ManagerAccount), b)
}

// GetManagerRPWorkload get the ManagerRPWorkload of a manager in a dedicated era
func (k Keeper) GetManagerRPWorkload(ctx context.Context, era uint64, managerAccount string) (val types.ManagerRPWorkload, found bool) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, GetManagerRPWorkloadStorePrefix(era))
	b := store.Get(GetManagerRPWorkloadKey(era, managerAccount))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// GetManagerRPWorkloadPaginated get the ManagerRPWorkloads of all managers in a dedicated era
func (k Keeper) GetManagerRPWorkloadsPaginated(ctx context.Context, era uint64, pageReq *query.PageRequest) ([]types.ManagerRPWorkload, *query.PageResponse, error) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, GetManagerRPWorkloadStorePrefix(era))

	var managerRPWorkloads []types.ManagerRPWorkload
	pageRes, err := query.Paginate(store, pageReq, func(key []byte, value []byte) error {
		var managerRPWorkload types.ManagerRPWorkload
		if err := k.cdc.Unmarshal(value, &managerRPWorkload); err != nil {
			return err
		}

		managerRPWorkloads = append(managerRPWorkloads, managerRPWorkload)
		return nil
	})

	if err != nil {
		return nil, nil, status.Error(codes.Internal, err.Error())
	}

	return managerRPWorkloads, pageRes, nil
}

func GetManagerRPWorkloadCountKey(era uint64) []byte {
	bz := types.KeyPrefix(types.ManagerRPWorkloadCountKey)
	bz = append(bz, []byte("/")...)
	bz = binary.BigEndian.AppendUint64(bz, era)
	return bz
}

// Prefix + era (8 bytes BigEndian)
func GetManagerRPWorkloadStorePrefix(era uint64) []byte {
	storePrefix := binary.BigEndian.AppendUint64([]byte(types.ManagerRPWorkloadKey), era)

	return storePrefix
}

// Composite key: prefix + era + len(managerAccount) + managerAccount
func GetManagerRPWorkloadKey(era uint64, managerAccount string) []byte {
	eraBytes := make([]byte, 8)
	binary.BigEndian.PutUint64(eraBytes, era)

	managerLen := byte(len(managerAccount))
	key := make([]byte, 0, len(types.ManagerRPWorkloadKey)+8+1+len(managerAccount))
	key = append(key, []byte(types.ManagerRPWorkloadKey)...)
	key = append(key, eraBytes...)
	key = append(key, managerLen)
	key = append(key, []byte(managerAccount)...)

	return key
}

// Decode the composite key to era and managerAccount
func DecodeManagerRPWorkloadKey(key []byte) (era uint64, managerAccount string, err error) {
	prefixLen := len(types.ManagerRPWorkloadKey)
	if len(key) < prefixLen+8+1 {
		return 0, "", fmt.Errorf("invalid key length")
	}

	// Verify key prefix
	if string(key[:prefixLen]) != types.ManagerRPWorkloadKey {
		return 0, "", fmt.Errorf("invalid key prefix")
	}

	// Decode era
	eraBytes := key[prefixLen : prefixLen+8]
	era = binary.BigEndian.Uint64(eraBytes)

	// Decode managerAccount
	managerLen := int(key[prefixLen+8])
	if len(key) < prefixLen+8+1+managerLen {
		return 0, "", fmt.Errorf("invalid managerAccount length")
	}
	managerAccount = string(key[prefixLen+8+1 : prefixLen+8+1+managerLen])

	return era, managerAccount, nil
}
