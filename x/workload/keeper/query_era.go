package keeper

import (
	"context"

	"enreach/x/workload/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) EraLength(goCtx context.Context, req *types.QueryGetEraLengthRequest) (*types.QueryGetEraLengthResponse, error) {

	return &types.QueryGetEraLengthResponse{EraLength: k.GetEraLength(goCtx)}, nil
}

func (k Keeper) CurrentEra(goCtx context.Context, req *types.QueryGetCurrentEraRequest) (*types.QueryGetCurrentEraResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	currentEra, found := k.GetCurrentEra(ctx)
	if !found {
		return nil, status.Error(codes.NotFound, "CurrentEraInfo not found in the store")
	}

	return &types.QueryGetCurrentEraResponse{EraInfo: currentEra}, nil
}

func (k Keeper) PendingNextEra(goCtx context.Context, req *types.QueryGetPendingNextEraRequest) (*types.QueryGetPendingNextEraResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	pendingNextEra, found := k.GetPendingNextEra(ctx)
	if !found {
		return nil, status.Error(codes.NotFound, "PendingNextEraInfo not found in the store")
	}

	return &types.QueryGetPendingNextEraResponse{EraInfo: pendingNextEra}, nil
}

func (k Keeper) HistoryEra(goCtx context.Context, req *types.QueryGetHistoryEraRequest) (*types.QueryGetHistoryEraResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(goCtx)

	historyEra, found := k.GetHistoryEra(ctx, req.EraNumber)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetHistoryEraResponse{EraInfo: historyEra}, nil
}

func (k Keeper) AllHistoryEra(goCtx context.Context, req *types.QueryGetAllHistoryEraRequest) (*types.QueryGetAllHistoryEraResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(goCtx)

	historyEraList, pageRes, err := k.GetAllHistoryEraPaginated(ctx, req.Pagination)
	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryGetAllHistoryEraResponse{EraInfos: historyEraList, Pagination: pageRes}, nil
}
