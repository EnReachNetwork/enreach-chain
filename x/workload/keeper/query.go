package keeper

import (
	"enreach/x/workload/types"
)

var _ types.QueryServer = Keeper{}
