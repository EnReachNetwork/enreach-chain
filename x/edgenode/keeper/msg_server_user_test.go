package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"

	"enreach/x/edgenode/types"
)

func TestUserMsgServerCreate(t *testing.T) {
	_, srv, ctx := setupMsgServer(t)
	wctx := sdk.UnwrapSDKContext(ctx)

	signer := "A"
	for i := 0; i < 5; i++ {
		_, err := srv.CreateUser(wctx, &types.MsgCreateUser{Signer: signer, UserID: strconv.Itoa(i)})
		require.NoError(t, err)
	}
}
