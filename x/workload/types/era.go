package types

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

const (
	ERA_LENGTH = 4 * EPOCH_LENGTH // Epoch is 6 hours and Era is 24 hours(1 day)
)

func GetCurrentEra(goCtx context.Context) uint64 {
	ctx := sdk.UnwrapSDKContext(goCtx)

	currentEra := uint64(ctx.BlockHeight())/ERA_LENGTH + 1

	return currentEra
}

func IsEraStart(goCtx context.Context) bool {
	ctx := sdk.UnwrapSDKContext(goCtx)

	currentBlock := uint64(ctx.BlockHeight())

	return currentBlock%ERA_LENGTH == 0
}

func IsEraEnd(goCtx context.Context) bool {
	ctx := sdk.UnwrapSDKContext(goCtx)

	currentBlock := uint64(ctx.BlockHeight())

	return (currentBlock+1)%ERA_LENGTH == 0
}
