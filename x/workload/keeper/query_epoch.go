package keeper

import (
	"context"

	"enreach/x/workload/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) EpochLength(goCtx context.Context, req *types.QueryGetEpochLengthRequest) (*types.QueryGetEpochLengthResponse, error) {

	return &types.QueryGetEpochLengthResponse{EpochLength: k.GetEpochLength(goCtx)}, nil
}

func (k Keeper) CurrentEpoch(goCtx context.Context, req *types.QueryGetCurrentEpochRequest) (*types.QueryGetCurrentEpochResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	currentEpoch, found := k.GetCurrentEpoch(ctx)
	if !found {
		return nil, status.Error(codes.NotFound, "CurrentEpochInfo not found in the store")
	}

	return &types.QueryGetCurrentEpochResponse{EpochInfo: currentEpoch}, nil
}

func (k Keeper) PendingNextEpoch(goCtx context.Context, req *types.QueryGetPendingNextEpochRequest) (*types.QueryGetPendingNextEpochResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	pendingNextEpoch, found := k.GetPendingNextEpoch(ctx)
	if !found {
		return nil, status.Error(codes.NotFound, "PendingNextEpochInfo not found in the store")
	}

	return &types.QueryGetPendingNextEpochResponse{EpochInfo: pendingNextEpoch}, nil
}

func (k Keeper) HistoryEpoch(goCtx context.Context, req *types.QueryGetHistoryEpochRequest) (*types.QueryGetHistoryEpochResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(goCtx)

	historyEpoch, found := k.GetHistoryEpoch(ctx, req.EpochNumber)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetHistoryEpochResponse{EpochInfo: historyEpoch}, nil
}

func (k Keeper) AllHistoryEpoch(goCtx context.Context, req *types.QueryGetAllHistoryEpochRequest) (*types.QueryGetAllHistoryEpochResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(goCtx)

	historyEpochList, pageRes, err := k.GetAllHistoryEpochPaginated(ctx, req.Pagination)
	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryGetAllHistoryEpochResponse{EpochInfos: historyEpochList, Pagination: pageRes}, nil
}
