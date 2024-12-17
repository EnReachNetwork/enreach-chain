package types

import (
	"fmt"
)

// DefaultIndex is the default global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		MinerList: []Miner{},
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated ID in miner
	minerIdMap := make(map[uint64]bool)
	minerCount := gs.GetMinerCount()
	for _, elem := range gs.MinerList {
		if _, ok := minerIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for miner")
		}
		if elem.Id >= minerCount {
			return fmt.Errorf("miner id should be lower or equal than the last id")
		}
		minerIdMap[elem.Id] = true
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
