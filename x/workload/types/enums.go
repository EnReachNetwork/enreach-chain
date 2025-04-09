package types

type EpochProcessStatus string
type EraProcessStatus string
type CheatStatus string

const (
	EPS_INIT       EpochProcessStatus = "Init"
	EPS_PROCESSING EpochProcessStatus = "Processing"
	EPS_DONE       EpochProcessStatus = "Done"

	ERS_INIT       EraProcessStatus = "Init"
	ERS_PROCESSING EraProcessStatus = "Processing"
	ERS_DONE       EraProcessStatus = "Done"
)

const (
	CS_NORMAL     CheatStatus = "Normal"
	CS_SUSPICIOUS CheatStatus = "Suspicious"
	CS_BLACKLIST  CheatStatus = "Blacklist"
)

const (
	PK_EPOCH_LENGTH                        string = "EpochLength" // Unit in seconds
	PK_ERA_LENGTH                          string = "EraLength"   // Unit in seconds
	PK_WORKREPORT_PROCESS_BATCH_SIZE       string = "WorkreportProcessBatchSize"
	PK_REPUTATION_POINT_PROCESS_BATCH_SIZE string = "ReputationPointProcessBatchSize"
	PK_CHEAT_STATUS_PROCESS_BATCH_SIZE     string = "CheatStatusProcessBatchSize"
	PK_HISTORY_EPOCH_DATA_DEPTH            string = "HistoryEpochDataDepth" // Unit in epoch count
	PK_HISTORY_ERA_DATA_DEPTH              string = "HistoryEraDataDepth"   // Unit in era count
)
