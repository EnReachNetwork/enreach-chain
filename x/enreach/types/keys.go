package types

const (
	// ModuleName defines the module name
	ModuleName = "enreach"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_enreach"
)

var (
	ParamsKey = []byte("p_enreach")
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}
