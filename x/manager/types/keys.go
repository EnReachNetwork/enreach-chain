package types

const (
	// ModuleName defines the module name
	ModuleName = "manager"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_manager"
)

var (
	ParamsKey = []byte("p_manager")
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}

const (
	ManagerKey      = "Manager/value/"
	ManagerCountKey = "Manager/count/"
)

const (
	OperatorKey      = "Operator/value/"
	OperatorCountKey = "Operator/count/"
)

const (
	SuperiorKey = "Superior/value/"
)
