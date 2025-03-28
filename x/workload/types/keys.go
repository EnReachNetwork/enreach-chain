package types

const (
	// ModuleName defines the module name
	ModuleName = "workload"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_workload"
)

var (
	ParamsKey = []byte("p_workload")
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}

const (
	WorkloadKey      = "Workload/value/"
	WorkloadCountKey = "Workload/count/"

	WorkreportKey      = "Workreport/value/"
	WorkreportCountKey = "Workreport/count/"

	WorkreportProcessBatchSizeKey      = "Workreport/process_batch_size/"
	WorkreportHistoryEpochDataDepthKey = "Workreport/history_epoch_data_depth/"

	EpochProcessDataKey      = "EpochProcessData/value/"
	LastEpochProcessDataKey  = "EpochProcessData/last/"
	EpochProcessDataCountKey = "EpochProcessData/count/"
)

const (
	SuperiorKey = "Superior/value/"
)
