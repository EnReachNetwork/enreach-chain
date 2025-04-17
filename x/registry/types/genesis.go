package types

import (
	"fmt"
)

// DefaultIndex is the default global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		RegionList:   []Region{},
		Superior:     nil,
		AdminAccount: "",
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated ID in region
	regionMap := make(map[string]bool)
	for _, elem := range gs.RegionList {
		if _, ok := regionMap[elem.Code]; ok {
			return fmt.Errorf("duplicated id for region")
		}
		regionMap[elem.Code] = true
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
