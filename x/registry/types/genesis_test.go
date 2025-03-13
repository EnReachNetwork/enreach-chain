package types_test

import (
	"testing"

	"enreach/x/registry/types"

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

				RegionList: []types.Region{
					{
						Code: "us",
					},
					{
						Code: "eu",
					},
				},
				RegionCount: 2,
				Superior: &types.Superior{
					Account:  "51",
					Creator:  "17",
					CreateAt: 57,
					Updator:  "23",
					UpdateAt: 76,
				},
				// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
		},
		{
			desc: "duplicated region",
			genState: &types.GenesisState{
				RegionList: []types.Region{
					{
						Code: "us",
					},
					{
						Code: "us",
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid region count",
			genState: &types.GenesisState{
				RegionList: []types.Region{
					{
						Code: "us",
					},
				},
				RegionCount: 0,
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
