package types

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"

	edgenodetypes "enreach/x/edgenode/types"
	managertypes "enreach/x/manager/types"
)

// AccountKeeper defines the expected interface for the Account module.
type AccountKeeper interface {
	GetAccount(context.Context, sdk.AccAddress) sdk.AccountI // only used for simulation
	// Methods imported from account should be defined here
}

// BankKeeper defines the expected interface for the Bank module.
type BankKeeper interface {
	SpendableCoins(context.Context, sdk.AccAddress) sdk.Coins
	// Methods imported from bank should be defined here
}

// ParamSubspace defines the expected Subspace interface for parameters.
type ParamSubspace interface {
	Get(context.Context, []byte, interface{})
	Set(context.Context, []byte, interface{})
}

type ManagerKeeper interface {
	Manager(context.Context, *managertypes.QueryGetManagerRequest) (*managertypes.QueryGetManagerResponse, error)
	GetManagerByRegion(context.Context, *managertypes.QueryGetManagerByRegionRequest) (*managertypes.QueryGetManagerByRegionResponse, error)
}

type EdgenodeKeeper interface {
	Node(context.Context, *edgenodetypes.QueryGetNodeRequest) (*edgenodetypes.QueryGetNodeResponse, error)
	SetNode(context.Context, edgenodetypes.Node)
}
