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
	NodeWorkloadKey      = "NodeWorkload/value/"
	NodeWorkloadCountKey = "NodeWorkload/count/"

	ManagerWorkloadKey      = "ManagerWorkload/value/"
	ManagerWorkloadCountKey = "ManagerWorkload/count/"

	WorkreportKey      = "Workreport/value/"
	WorkreportCountKey = "Workreport/count/"

	WorkreportProcessBatchSizeKey      = "Workreport/process_batch_size/"
	WorkreportHistoryEpochDataDepthKey = "Workreport/history_epoch_data_depth/"

	EpochProcessDataKey      = "EpochProcessData/value/"
	LastEpochProcessDataKey  = "EpochProcessData/last/"
	EpochProcessDataCountKey = "EpochProcessData/count/"

	SuperiorKey = "Superior/value/"

	ReputationPointChangeDataKey      = "ReputationPointChangeData/value/"
	ReputationPointChangeDataCountKey = "ReputationPointChangeData/count/"

	ReputationPointKey      = "ReputationPoint/value/"
	ReputationPointCountKey = "ReputationPoint/count/"

	EraProcessDataKey      = "EraProcessData/value/"
	LastEraProcessDataKey  = "EraProcessData/last/"
	EraProcessDataCountKey = "EraProcessData/count/"
)
