package types

import (
	"fmt"
)

// DefaultIndex is the default global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		WorkloadList: []Workload{},
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated ID in workload
	workloadIdMap := make(map[uint64]bool)
	workloadCount := gs.GetWorkloadCount()
	for _, elem := range gs.WorkloadList {
		if _, ok := workloadIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for workload")
		}
		if elem.Id >= workloadCount {
			return fmt.Errorf("workload id should be lower or equal than the last id")
		}
		workloadIdMap[elem.Id] = true
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
