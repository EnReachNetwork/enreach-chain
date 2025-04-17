package types

const (
	// ModuleName defines the module name
	ModuleName = "edgenode"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_edgenode"
)

var (
	ParamsKey = []byte("p_edgenode")
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}

const (
	UserKey      = "User/value/"
	UserCountKey = "User/count/"
)

const (
	NodeKey      = "Node/value/"
	NodeCountKey = "Node/count/"
)

const (
	AdminAccountKey = "AdminAccount/value/"
	SuperiorKey     = "Superior/value/"
)
