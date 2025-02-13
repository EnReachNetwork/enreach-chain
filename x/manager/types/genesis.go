package types

import (
	"fmt"
)

// DefaultIndex is the default global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		ManagerList: []Manager{},
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated ID in manager
	managerIdMap := make(map[uint64]bool)
	managerCount := gs.GetManagerCount()
	for _, elem := range gs.ManagerList {
		if _, ok := managerIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for manager")
		}
		if elem.Id >= managerCount {
			return fmt.Errorf("manager id should be lower or equal than the last id")
		}
		managerIdMap[elem.Id] = true
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
