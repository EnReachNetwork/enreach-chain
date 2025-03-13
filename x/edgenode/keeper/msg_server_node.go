package keeper

import (
	"context"

	"enreach/x/edgenode/types"
	registrytypes "enreach/x/registry/types"

	errorsmod "cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) RegisterNode(goCtx context.Context, msg *types.MsgRegisterNode) (*types.MsgRegisterNodeResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// tx caller must be superior
	superior, isFound := k.GetSuperior(ctx)
	if !isFound {
		return nil, errorsmod.Wrap(sdkerrors.ErrKeyNotFound, "superior not set")
	}
	if superior.Account != msg.Signer {
		return nil, errorsmod.Wrap(sdkerrors.ErrUnauthorized, "Only superior can execute this call")
	}

	// Check duplicate node
	_, found := k.GetNode(ctx, msg.NodeID)
	if found {
		return nil, errorsmod.Wrapf(types.ErrElementAlreadyExists, "Node '%s' already exist", msg.NodeID)
	}

	// Region code need to be in the registered list
	_, err := k.registryKeeper.Region(ctx, &registrytypes.QueryGetRegionRequest{Code: msg.RegionCode})
	if err != nil {
		return nil, errorsmod.Wrapf(types.ErrInvalidRegion, "Region '%s' is not in the region list registry", msg.RegionCode)
	}

	// Append to the store
	blockHeight := uint64(ctx.BlockHeight())
	var node = types.Node{
		NodeID:         msg.NodeID,
		DeviceType:     msg.DeviceType,
		RegionCode:     msg.RegionCode,
		RegisterStatus: string(types.RS_PENDING_BIND),
		Creator:        msg.Signer,
		CreateAt:       blockHeight,
		Updator:        msg.Signer,
		UpdateAt:       blockHeight,
	}

	k.AppendNode(ctx, node)

	return &types.MsgRegisterNodeResponse{}, nil
}

func (k msgServer) BindAndActivateNode(goCtx context.Context, msg *types.MsgBindAndActivateNode) (*types.MsgBindAndActivateNodeResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// tx caller must be superior
	superior, isFound := k.GetSuperior(ctx)
	if !isFound {
		return nil, errorsmod.Wrap(sdkerrors.ErrKeyNotFound, "superior not set")
	}
	if superior.Account != msg.Signer {
		return nil, errorsmod.Wrap(sdkerrors.ErrUnauthorized, "Only superior can execute this call")
	}

	// Checks whether the node exists
	node, found := k.GetNode(ctx, msg.NodeID)
	if !found {
		return nil, errorsmod.Wrapf(sdkerrors.ErrKeyNotFound, "Node '%s' doesn't exist", msg.NodeID)
	}

	// Checks whether the user exists
	_, found = k.GetUser(ctx, msg.UserID)
	if !found {
		return nil, errorsmod.Wrapf(sdkerrors.ErrKeyNotFound, "User '%s' doesn't exist", msg.UserID)
	}

	// Checks whether it's duplicate bind
	if node.UserID == msg.UserID {
		return nil, errorsmod.Wrap(types.ErrNodeAlreadyBindToThisUser, "Duplicate bind is not allowed")
	}

	// Checks whether already bind to other user
	if len(node.UserID) != 0 || node.RegisterStatus == string(types.RS_ACTIVATE) {
		return nil, errorsmod.Wrap(types.ErrNodeAlreadyBindToOtherUser, "Unbind first before bind to other user")
	}

	// Bind
	node.UserID = msg.UserID
	node.RegisterStatus = string(types.RS_ACTIVATE)
	node.Updator = msg.Signer
	node.UpdateAt = uint64(ctx.BlockHeight())

	k.SetNode(ctx, node)

	return &types.MsgBindAndActivateNodeResponse{}, nil
}

func (k msgServer) UnbindNode(goCtx context.Context, msg *types.MsgUnbindNode) (*types.MsgUnbindNodeResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// tx caller must be superior
	superior, isFound := k.GetSuperior(ctx)
	if !isFound {
		return nil, errorsmod.Wrap(sdkerrors.ErrKeyNotFound, "superior not set")
	}
	if superior.Account != msg.Signer {
		return nil, errorsmod.Wrap(sdkerrors.ErrUnauthorized, "Only superior can execute this call")
	}

	// Checks that the element exists
	node, found := k.GetNode(ctx, msg.NodeID)
	if !found {
		return nil, errorsmod.Wrapf(sdkerrors.ErrKeyNotFound, "Node %s doesn't exist", msg.NodeID)
	}

	// Checks whether the node has bound yet
	if node.UserID == "" {
		return nil, errorsmod.Wrap(types.ErrNodeNotBindYet, "Node has not bound to any user yet")
	}

	// Checks whether the userID match
	if node.UserID != msg.UserID {
		return nil, errorsmod.Wrapf(types.ErrUnbindUserIDNotMatch,
			"The passed-in userID '%s' does not match the node's current bound userID '%s'", msg.UserID, node.UserID)
	}

	// Unbind
	node.UserID = ""
	node.RegionCode = ""
	node.RegisterStatus = string(types.RS_PENDING_BIND)
	node.Updator = msg.Signer
	node.UpdateAt = uint64(ctx.BlockHeight())

	k.SetNode(ctx, node)

	return &types.MsgUnbindNodeResponse{}, nil
}
