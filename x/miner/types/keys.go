package types

const (
	// ModuleName defines the module name
	ModuleName = "miner"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_miner"
)

var (
	ParamsKey = []byte("p_miner")
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}

const (
	MinerKey      = "Miner/value/"
	MinerCountKey = "Miner/count/"
)
