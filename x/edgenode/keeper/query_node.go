package keeper

import (
	"context"

	"enreach/x/edgenode/types"

	"cosmossdk.io/store/prefix"
	"github.com/cosmos/cosmos-sdk/runtime"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) NodeAll(ctx context.Context, req *types.QueryAllNodeRequest) (*types.QueryAllNodeResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var nodes []types.Node

	store := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	nodeStore := prefix.NewStore(store, types.KeyPrefix(types.NodeKey))

	pageRes, err := query.Paginate(nodeStore, req.Pagination, func(key []byte, value []byte) error {
		var node types.Node
		if err := k.cdc.Unmarshal(value, &node); err != nil {
			return err
		}

		nodes = append(nodes, node)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllNodeResponse{Node: nodes, Pagination: pageRes}, nil
}

func (k Keeper) Node(ctx context.Context, req *types.QueryGetNodeRequest) (*types.QueryGetNodeResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	node, found := k.GetNode(ctx, req.NodeID)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetNodeResponse{Node: node}, nil
}
