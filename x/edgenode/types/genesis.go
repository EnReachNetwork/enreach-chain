package types

import (
	"fmt"
)

// DefaultIndex is the default global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		UserList:     []User{},
		NodeList:     []Node{},
		Superior:     nil,
		AdminAccount: "",
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated ID in user
	userIdMap := make(map[string]bool)
	for _, elem := range gs.UserList {
		if _, ok := userIdMap[elem.UserID]; ok {
			return fmt.Errorf("duplicated id for user")
		}
		userIdMap[elem.UserID] = true
	}
	// Check for duplicated ID in node
	nodeIdMap := make(map[string]bool)
	for _, elem := range gs.NodeList {
		if _, ok := nodeIdMap[elem.NodeID]; ok {
			return fmt.Errorf("duplicated id for node")
		}
		nodeIdMap[elem.NodeID] = true
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
