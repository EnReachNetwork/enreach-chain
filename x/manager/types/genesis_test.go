package types_test

import (
	"testing"

	"enreach/x/manager/types"

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

				ManagerList: []types.Manager{
					{
						ManagerAccount: "alice",
					},
					{
						ManagerAccount: "bob",
					},
				},
				ManagerCount: 2,
				OperatorList: []types.Operator{
					{
						OperatorAccount: "alice",
					},
					{
						OperatorAccount: "bob",
					},
				},
				OperatorCount: 2,
				// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
		},
		{
			desc: "duplicated manager",
			genState: &types.GenesisState{
				ManagerList: []types.Manager{
					{
						ManagerAccount: "alice",
					},
					{
						ManagerAccount: "alice",
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid manager count",
			genState: &types.GenesisState{
				ManagerList: []types.Manager{
					{
						ManagerAccount: "alice",
					},
				},
				ManagerCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated operator",
			genState: &types.GenesisState{
				OperatorList: []types.Operator{
					{
						OperatorAccount: "alice",
					},
					{
						OperatorAccount: "alice",
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid operator count",
			genState: &types.GenesisState{
				OperatorList: []types.Operator{
					{
						OperatorAccount: "alice",
					},
				},
				OperatorCount: 0,
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
