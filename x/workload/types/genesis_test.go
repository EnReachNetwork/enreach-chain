package types_test

import (
	"testing"
	time "time"

	"enreach/x/workload/types"

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
				Superior: &types.Superior{
					Account:  "51",
					Creator:  "17",
					CreateAt: 57,
					Updator:  "23",
					UpdateAt: 76,
				},
				CurrentEpoch: &types.EpochInfo{
					Number:     48,
					StartTime:  time.Time{},
					StartBlock: 72,
					EndTime:    time.Time{},
					EndBlock:   100,
				},
				PendingNextEpoch: &types.EpochInfo{
					Number:     48,
					StartTime:  time.Time{},
					StartBlock: 72,
					EndTime:    time.Time{},
					EndBlock:   100,
				},
				// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
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
