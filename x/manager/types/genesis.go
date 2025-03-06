package types

import (
	"fmt"
)

// DefaultIndex is the default global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		ManagerList:  []Manager{},
		OperatorList: []Operator{},
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated key in manager
	managerAccountMap := make(map[string]bool)
	for _, elem := range gs.ManagerList {
		if _, ok := managerAccountMap[elem.ManagerAccount]; ok {
			return fmt.Errorf("duplicated id for manager")
		}
		managerAccountMap[elem.ManagerAccount] = true
	}
	// Check for duplicated ID in operator
	operatorAccountMap := make(map[string]bool)
	for _, elem := range gs.OperatorList {
		if _, ok := operatorAccountMap[elem.OperatorAccount]; ok {
			return fmt.Errorf("duplicated id for operator")
		}
		operatorAccountMap[elem.OperatorAccount] = true
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
