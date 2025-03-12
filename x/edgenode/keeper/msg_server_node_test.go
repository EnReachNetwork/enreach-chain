package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"

	"enreach/x/edgenode/types"
)

func TestNodeMsgRegisterNode(t *testing.T) {
	_, srv, ctx := setupMsgServer(t)
	wctx := sdk.UnwrapSDKContext(ctx)

	signer := "A"
	for i := 0; i < 5; i++ {
		_, err := srv.RegisterNode(wctx, &types.MsgRegisterNode{Signer: signer})
		require.NoError(t, err)

	}
}
