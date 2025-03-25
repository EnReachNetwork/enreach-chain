package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"

	"enreach/x/workload/types"
)

func TestMsgSubmitWorkreports(t *testing.T) {
	_, srv, ctx := setupMsgServer(t)
	wctx := sdk.UnwrapSDKContext(ctx)

	managerAccount := "A"
	for i := 0; i < 5; i++ {
		_, err := srv.SubmitWorkreports(wctx, &types.MsgSubmitWorkreports{ManagerAccount: managerAccount})
		require.NoError(t, err)
	}
}
