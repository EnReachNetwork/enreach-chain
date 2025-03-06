package keeper_test

// func TestOperatorMsgServerCreate(t *testing.T) {
// 	_, srv, ctx := setupMsgServer(t)
// 	wctx := sdk.UnwrapSDKContext(ctx)

// 	operatorAccount := "A"
// 	for i := 0; i < 5; i++ {
// 		resp, err := srv.CreateOperator(wctx, &types.MsgCreateOperator{OperatorAccount: operatorAccount})
// 		require.NoError(t, err)
// 		require.Equal(t, i, int(resp.Id))
// 	}
// }

// func TestOperatorMsgServerUpdate(t *testing.T) {
// 	operatorAccount := "A"

// 	tests := []struct {
// 		desc    string
// 		request *types.MsgUpdateOperator
// 		err     error
// 	}{
// 		{
// 			desc:    "Completed",
// 			request: &types.MsgUpdateOperator{OperatorAccount: operatorAccount},
// 		},
// 		{
// 			desc:    "Unauthorized",
// 			request: &types.MsgUpdateOperator{OperatorAccount: "B"},
// 			err:     sdkerrors.ErrUnauthorized,
// 		},
// 		{
// 			desc:    "Unauthorized",
// 			request: &types.MsgUpdateOperator{OperatorAccount: operatorAccount, Id: 10},
// 			err:     sdkerrors.ErrKeyNotFound,
// 		},
// 	}
// 	for _, tc := range tests {
// 		t.Run(tc.desc, func(t *testing.T) {
// 			_, srv, ctx := setupMsgServer(t)
// 			wctx := sdk.UnwrapSDKContext(ctx)

// 			_, err := srv.CreateOperator(wctx, &types.MsgCreateOperator{OperatorAccount: operatorAccount})
// 			require.NoError(t, err)

// 			_, err = srv.UpdateOperator(wctx, tc.request)
// 			if tc.err != nil {
// 				require.ErrorIs(t, err, tc.err)
// 			} else {
// 				require.NoError(t, err)
// 			}
// 		})
// 	}
// }

// func TestOperatorMsgServerDelete(t *testing.T) {
// 	operatorAccount := "A"

// 	tests := []struct {
// 		desc    string
// 		request *types.MsgDeleteOperator
// 		err     error
// 	}{
// 		{
// 			desc:    "Completed",
// 			request: &types.MsgDeleteOperator{OperatorAccount: operatorAccount},
// 		},
// 		{
// 			desc:    "Unauthorized",
// 			request: &types.MsgDeleteOperator{OperatorAccount: "B"},
// 			err:     sdkerrors.ErrUnauthorized,
// 		},
// 		{
// 			desc:    "KeyNotFound",
// 			request: &types.MsgDeleteOperator{OperatorAccount: operatorAccount, Id: 10},
// 			err:     sdkerrors.ErrKeyNotFound,
// 		},
// 	}
// 	for _, tc := range tests {
// 		t.Run(tc.desc, func(t *testing.T) {
// 			_, srv, ctx := setupMsgServer(t)
// 			wctx := sdk.UnwrapSDKContext(ctx)

// 			_, err := srv.CreateOperator(wctx, &types.MsgCreateOperator{OperatorAccount: operatorAccount})
// 			require.NoError(t, err)
// 			_, err = srv.DeleteOperator(wctx, tc.request)
// 			if tc.err != nil {
// 				require.ErrorIs(t, err, tc.err)
// 			} else {
// 				require.NoError(t, err)
// 			}
// 		})
// 	}
// }
