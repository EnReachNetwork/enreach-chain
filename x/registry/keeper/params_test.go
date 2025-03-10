package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"

	keepertest "enreach/testutil/keeper"
	"enreach/x/registry/types"
)

func TestGetParams(t *testing.T) {
	k, ctx := keepertest.RegistryKeeper(t)
	params := types.DefaultParams()

	require.NoError(t, k.SetParams(ctx, params))
	require.EqualValues(t, params, k.GetParams(ctx))
}
