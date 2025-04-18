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

	ManagerWRWorkloadKey      = "ManagerWRWorkload/value/"
	ManagerWRWorkloadCountKey = "ManagerWRWorkload/count/"

	ManagerRPWorkloadKey      = "ManagerRPWorkload/value/"
	ManagerRPWorkloadCountKey = "ManagerRPWorkload/count/"

	ManagerCSWorkloadKey      = "ManagerCSWorkload/value/"
	ManagerCSWorkloadCountKey = "ManagerCSWorkload/count/"

	WorkreportKey      = "Workreport/value/"
	WorkreportCountKey = "Workreport/count/"

	WorkreportProcessBatchSizeKey      = "Workreport/process_batch_size/"
	WorkreportHistoryEpochDataDepthKey = "Workreport/history_epoch_data_depth/"

	EpochProcessDataKey      = "EpochProcessData/value/"
	LastEpochProcessDataKey  = "EpochProcessData/last/"
	EpochProcessDataCountKey = "EpochProcessData/count/"

	AdminAccountKey = "AdminAccount/value/"
	SuperiorKey     = "Superior/value/"

	ReputationPointChangeDataKey      = "ReputationPointChangeData/value/"
	ReputationPointChangeDataCountKey = "ReputationPointChangeData/count/"

	ReputationDeltaPointKey      = "ReputationDeltaPoint/value/"
	ReputationDeltaPointCountKey = "ReputationDeltaPoint/count/"

	ReputationPointKey      = "ReputationPoint/value/"
	ReputationPointCountKey = "ReputationPoint/count/"

	EraProcessDataKey      = "EraProcessData/value/"
	LastEraProcessDataKey  = "EraProcessData/last/"
	EraProcessDataCountKey = "EraProcessData/count/"

	CheatStatusCRDataKey      = "CheatStatusCRData/value/"
	CheatStatusCRDataCountKey = "CheatStatusCRData/count/"

	EraCheatStatusProcessDataKey      = "EraCheatStatusProcessData/value/"
	LastEraCheatStatusProcessDataKey  = "EraCheatStatusProcessData/last/"
	EraCheatStatusProcessDataCountKey = "EraCheatStatusProcessData/count/"
)

const (
	CurrentEpochKey      = "CurrentEpoch/value/"
	PendingNextEpochKey  = "PendingNextEpoch/value/"
	HistoryEpochCountKey = "HistoryEpoch/count"
	HistoryEpochKey      = "HistoryEpoch/value"
)

const (
	CurrentEraKey      = "CurrentEra/value/"
	PendingNextEraKey  = "PendingNextEra/value/"
	HistoryEraCountKey = "HistoryEra/count"
	HistoryEraKey      = "HistoryEra/value"
)
