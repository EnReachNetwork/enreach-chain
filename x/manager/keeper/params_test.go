package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"

	keepertest "enreach/testutil/keeper"
	"enreach/x/manager/types"
)

func TestGetParams(t *testing.T) {
	k, ctx := keepertest.ManagerKeeper(t)
	params := types.DefaultParams()

	require.NoError(t, k.SetParams(ctx, params))
	require.EqualValues(t, params, k.GetParams(ctx))
}
