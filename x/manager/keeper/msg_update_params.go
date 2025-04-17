package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"

	"enreach/x/manager/types"
)

func (k msgServer) UpdateParams(goCtx context.Context, req *types.MsgUpdateParams) (*types.MsgUpdateParamsResponse, error) {
	// tx caller must be authority or admin account
	err := k.EnsureAuthorityOrAdminAccount(goCtx, req.Authority)
	if err != nil {
		return nil, err
	}

	ctx := sdk.UnwrapSDKContext(goCtx)
	if err := k.SetParams(ctx, req.Params); err != nil {
		return nil, err
	}

	return &types.MsgUpdateParamsResponse{}, nil
}
