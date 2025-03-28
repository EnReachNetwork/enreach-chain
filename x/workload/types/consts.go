package types

const (
	NODESCORES_COUNT_PER_REQ = 5000

	DEFAULT_WORKREPORT_PROCESS_BATCH_SIZE = 500 // Process 500 nodes of workreports per block by default
	MAX_WORKREPORT_PROCESS_BATCH_SIZE     = 5000

	DEFAULT_HISTORY_EPOCH_DATA_DEPTH = 28 // Keep 28 epochs of history data by default
	MAX_HISTORY_EPOCH_DATA_DEPTH     = 500
)
