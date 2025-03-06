package keeper

import (
	"context"

	"enreach/x/manager/types"

	"cosmossdk.io/store/prefix"
	"github.com/cosmos/cosmos-sdk/runtime"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) OperatorAll(ctx context.Context, req *types.QueryAllOperatorRequest) (*types.QueryAllOperatorResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var operators []types.Operator

	store := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	operatorStore := prefix.NewStore(store, types.KeyPrefix(types.OperatorKey))

	pageRes, err := query.Paginate(operatorStore, req.Pagination, func(key []byte, value []byte) error {
		var operator types.Operator
		if err := k.cdc.Unmarshal(value, &operator); err != nil {
			return err
		}

		operators = append(operators, operator)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllOperatorResponse{Operator: operators, Pagination: pageRes}, nil
}

func (k Keeper) Operator(ctx context.Context, req *types.QueryGetOperatorRequest) (*types.QueryGetOperatorResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	operator, found := k.GetOperator(ctx, req.OperatorAccount)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetOperatorResponse{Operator: operator}, nil
}
