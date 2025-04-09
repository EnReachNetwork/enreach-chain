package keeper

import (
	"context"
	"strconv"

	"github.com/cosmos/cosmos-sdk/runtime"

	"enreach/x/workload/types"
)

// GetParams get all parameters as types.Params
func (k Keeper) GetParams(ctx context.Context) (params types.Params) {
	store := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	bz := store.Get(types.ParamsKey)
	if bz == nil {
		return params
	}

	k.cdc.MustUnmarshal(bz, &params)
	return params
}

// SetParams set the params
func (k Keeper) SetParams(ctx context.Context, params types.Params) error {
	store := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	bz, err := k.cdc.Marshal(&params)
	if err != nil {
		return err
	}
	store.Set(types.ParamsKey, bz)

	return nil
}

func (k Keeper) GetEpochLength(ctx context.Context) uint64 {
	params := k.GetParams(ctx)

	paramValue, ok := params.Data[types.PK_EPOCH_LENGTH]
	if !ok {
		return types.DEFAULT_EPOCH_LENGTH
	}

	paramValueInt, _ := strconv.Atoi(paramValue)
	return uint64(paramValueInt)
}

func (k Keeper) GetEraLength(ctx context.Context) uint64 {
	params := k.GetParams(ctx)

	paramValue, ok := params.Data[types.PK_ERA_LENGTH]
	if !ok {
		return types.DEFAULT_ERA_LENGTH
	}

	paramValueInt, _ := strconv.Atoi(paramValue)
	return uint64(paramValueInt)
}

func (k Keeper) GetWorkreportProcessBatchSize(ctx context.Context) uint64 {
	params := k.GetParams(ctx)

	paramValue, ok := params.Data[types.PK_WORKREPORT_PROCESS_BATCH_SIZE]
	if !ok {
		return types.DEFAULT_WORKREPORT_PROCESS_BATCH_SIZE
	}

	paramValueInt, _ := strconv.Atoi(paramValue)
	return uint64(paramValueInt)
}

func (k Keeper) GetReputationPointProcessBatchSize(ctx context.Context) uint64 {
	params := k.GetParams(ctx)

	paramValue, ok := params.Data[types.PK_REPUTATION_POINT_PROCESS_BATCH_SIZE]
	if !ok {
		return types.DEFAULT_REPUTATION_POINT_PROCESS_BATCH_SIZE
	}

	paramValueInt, _ := strconv.Atoi(paramValue)
	return uint64(paramValueInt)
}

func (k Keeper) GetCheatStatusProcessBatchSize(ctx context.Context) uint64 {
	params := k.GetParams(ctx)

	paramValue, ok := params.Data[types.PK_CHEAT_STATUS_PROCESS_BATCH_SIZE]
	if !ok {
		return types.DEFAULT_CHEAT_STATUS_PROCESS_BATCH_SIZE
	}

	paramValueInt, _ := strconv.Atoi(paramValue)
	return uint64(paramValueInt)
}

func (k Keeper) GetHistoryEpochDataDepth(ctx context.Context) uint64 {
	params := k.GetParams(ctx)

	paramValue, ok := params.Data[types.PK_HISTORY_EPOCH_DATA_DEPTH]
	if !ok {
		return types.DEFAULT_HISTORY_EPOCH_DATA_DEPTH
	}

	paramValueInt, _ := strconv.Atoi(paramValue)
	return uint64(paramValueInt)
}

func (k Keeper) GetHistoryEraDataDepth(ctx context.Context) uint64 {
	params := k.GetParams(ctx)

	paramValue, ok := params.Data[types.PK_HISTORY_ERA_DATA_DEPTH]
	if !ok {
		return types.DEFAULT_HISTORY_ERA_DATA_DEPTH
	}

	paramValueInt, _ := strconv.Atoi(paramValue)
	return uint64(paramValueInt)
}
