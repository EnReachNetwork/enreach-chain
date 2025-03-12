package types_test

import (
	"testing"

	"enreach/x/edgenode/types"

	"github.com/stretchr/testify/require"
)

func TestGenesisState_Validate(t *testing.T) {
	tests := []struct {
		desc     string
		genState *types.GenesisState
		valid    bool
	}{
		{
			desc:     "default is valid",
			genState: types.DefaultGenesis(),
			valid:    true,
		},
		{
			desc: "valid genesis state",
			genState: &types.GenesisState{

				UserList: []types.User{
					{
						UserID: "0",
					},
					{
						UserID: "1",
					},
				},
				UserCount: 2,
				NodeList: []types.Node{
					{
						UserID: "0",
					},
					{
						UserID: "1",
					},
				},
				NodeCount: 2,
				Superior: &types.Superior{
					Account:  "11",
					Creator:  "89",
					CreateAt: 88,
					Updator:  "46",
					UpdateAt: 42,
				},
				// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
		},
		{
			desc: "duplicated user",
			genState: &types.GenesisState{
				UserList: []types.User{
					{
						UserID: "0",
					},
					{
						UserID: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid user count",
			genState: &types.GenesisState{
				UserList: []types.User{
					{
						UserID: "1",
					},
				},
				UserCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated node",
			genState: &types.GenesisState{
				NodeList: []types.Node{
					{
						UserID: "0",
					},
					{
						UserID: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid node count",
			genState: &types.GenesisState{
				NodeList: []types.Node{
					{
						UserID: "1",
					},
				},
				NodeCount: 0,
			},
			valid: false,
		},
		// this line is used by starport scaffolding # types/genesis/testcase
	}
	for _, tc := range tests {
		t.Run(tc.desc, func(t *testing.T) {
			err := tc.genState.Validate()
			if tc.valid {
				require.NoError(t, err)
			} else {
				require.Error(t, err)
			}
		})
	}
}
