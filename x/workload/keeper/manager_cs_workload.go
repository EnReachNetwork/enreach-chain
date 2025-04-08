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

// GetManagerCSWorkloadCountByEra get the total number of ManagerCSWorkloads of an era
func (k Keeper) GetManagerCSWorkloadCountByEra(ctx context.Context, era uint64) uint64 {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.ManagerCSWorkloadCountKey))
	byteKey := GetManagerCSWorkloadCountKey(era)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetManagerCSWorkloadCountByEra set the total number of ManagerCSWorkloads of an era
func (k Keeper) SetManagerCSWorkloadCountByEra(ctx context.Context, era uint64, count uint64) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.ManagerCSWorkloadCountKey))
	byteKey := GetManagerCSWorkloadCountKey(era)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendManagerCSWorkload set the ManagerCSWorkload of a manager in a dedicated era
func (k Keeper) AppendManagerCSWorkload(ctx context.Context, managerRPWorkload *types.ManagerCSWorkload) {
	// Get the existing ManagerCSWorkload count of an era
	count := k.GetManagerCSWorkloadCountByEra(ctx, managerRPWorkload.Era)

	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, GetManagerCSWorkloadStorePrefix(managerRPWorkload.Era))
	appendedValue := k.cdc.MustMarshal(managerRPWorkload)
	store.Set(GetManagerCSWorkloadKey(managerRPWorkload.Era, managerRPWorkload.ManagerAccount), appendedValue)

	// Update ManagerCSWorkload count
	k.SetManagerCSWorkloadCountByEra(ctx, managerRPWorkload.Era, count+1)
}

// SetManagerCSWorkload set the ManagerCSWorkload of a manager in a dedicated era
func (k Keeper) SetManagerCSWorkload(ctx context.Context, managerRPWorkload *types.ManagerCSWorkload) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, GetManagerCSWorkloadStorePrefix(managerRPWorkload.Era))
	b := k.cdc.MustMarshal(managerRPWorkload)
	store.Set(GetManagerCSWorkloadKey(managerRPWorkload.Era, managerRPWorkload.ManagerAccount), b)
}

// GetManagerCSWorkload get the ManagerCSWorkload of a manager in a dedicated era
func (k Keeper) GetManagerCSWorkload(ctx context.Context, era uint64, managerAccount string) (val types.ManagerCSWorkload, found bool) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, GetManagerCSWorkloadStorePrefix(era))
	b := store.Get(GetManagerCSWorkloadKey(era, managerAccount))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// GetManagerCSWorkloadPaginated get the ManagerCSWorkloads of all managers in a dedicated era
func (k Keeper) GetManagerCSWorkloadsPaginated(ctx context.Context, era uint64, pageReq *query.PageRequest) ([]types.ManagerCSWorkload, *query.PageResponse, error) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, GetManagerCSWorkloadStorePrefix(era))

	var managerRPWorkloads []types.ManagerCSWorkload
	pageRes, err := query.Paginate(store, pageReq, func(key []byte, value []byte) error {
		var managerRPWorkload types.ManagerCSWorkload
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

func GetManagerCSWorkloadCountKey(era uint64) []byte {
	bz := types.KeyPrefix(types.ManagerCSWorkloadCountKey)
	bz = append(bz, []byte("/")...)
	bz = binary.BigEndian.AppendUint64(bz, era)
	return bz
}

// Prefix + era (8 bytes BigEndian)
func GetManagerCSWorkloadStorePrefix(era uint64) []byte {
	storePrefix := binary.BigEndian.AppendUint64([]byte(types.ManagerCSWorkloadKey), era)

	return storePrefix
}

// Composite key: prefix + era + len(managerAccount) + managerAccount
func GetManagerCSWorkloadKey(era uint64, managerAccount string) []byte {
	eraBytes := make([]byte, 8)
	binary.BigEndian.PutUint64(eraBytes, era)

	managerLen := byte(len(managerAccount))
	key := make([]byte, 0, len(types.ManagerCSWorkloadKey)+8+1+len(managerAccount))
	key = append(key, []byte(types.ManagerCSWorkloadKey)...)
	key = append(key, eraBytes...)
	key = append(key, managerLen)
	key = append(key, []byte(managerAccount)...)

	return key
}

// Decode the composite key to era and managerAccount
func DecodeManagerCSWorkloadKey(key []byte) (era uint64, managerAccount string, err error) {
	prefixLen := len(types.ManagerCSWorkloadKey)
	if len(key) < prefixLen+8+1 {
		return 0, "", fmt.Errorf("invalid key length")
	}

	// Verify key prefix
	if string(key[:prefixLen]) != types.ManagerCSWorkloadKey {
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
