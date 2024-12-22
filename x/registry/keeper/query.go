package keeper

import (
	"enreach/x/registry/types"
)

var _ types.QueryServer = Keeper{}
