package keeper

import (
	"enreach/x/miner/types"
)

var _ types.QueryServer = Keeper{}
