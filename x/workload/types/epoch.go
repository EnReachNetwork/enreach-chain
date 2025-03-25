package types

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

const (
	EPOCH_LENGTH = 20
)

func GetCurrentEpoch(goCtx context.Context) uint64 {
	ctx := sdk.UnwrapSDKContext(goCtx)

	currentEpoch := uint64(ctx.BlockHeight())/EPOCH_LENGTH + 1

	return currentEpoch
}

func IsEpochStart(goCtx context.Context) bool {
	ctx := sdk.UnwrapSDKContext(goCtx)

	currentBlock := uint64(ctx.BlockHeight())

	return currentBlock%EPOCH_LENGTH == 0
}

func IsEpochEnd(goCtx context.Context) bool {
	ctx := sdk.UnwrapSDKContext(goCtx)

	currentBlock := uint64(ctx.BlockHeight())

	return (currentBlock+1)%EPOCH_LENGTH == 0
}
