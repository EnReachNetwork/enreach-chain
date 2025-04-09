package types

const (
	NODESCORES_COUNT_PER_REQ  = 5000
	NODESPOINTS_COUNT_PER_REQ = 5000
	NODESDATAS_COUNT_PER_REQ  = 5000

	// Process 500 nodes of workreports per block by default
	DEFAULT_WORKREPORT_PROCESS_BATCH_SIZE = 500
	MAX_WORKREPORT_PROCESS_BATCH_SIZE     = 5000

	DEFAULT_REPUTATION_POINT_PROCESS_BATCH_SIZE = 500
	MAX_REPUTATION_POINT_PROCESS_BATCH_SIZE     = 5000

	DEFAULT_CHEAT_STATUS_PROCESS_BATCH_SIZE = 500
	MAX_CHEAT_STATUS_PROCESS_BATCH_SIZE     = 5000

	// Keep 28 epochs of history data by default
	// Assume epoch length is 6 hours by default, 28 epochs is 1 week
	DEFAULT_HISTORY_EPOCH_DATA_DEPTH = 28
	MIN_HISTORY_EPOCH_DATA_DEPTH     = 4   // Min 4 epochs, that is 1 day
	MAX_HISTORY_EPOCH_DATA_DEPTH     = 112 // Max 112 epochs, that is 4 weeks

	// Keep 7 eras of history data by default
	// Assume era length is 1 day by default, 7 eras is 1 week
	DEFAULT_HISTORY_ERA_DATA_DEPTH = 7
	MIN_HISTORY_ERA_DATA_DEPTH     = 1   // Min 1 era, that is 1 day
	MAX_HISTORY_ERA_DATA_DEPTH     = 168 // Max 168 eras, that is ~6 months

	DEFAULT_EPOCH_LENGTH = 30    // In seconds
	MIN_EPOCH_LENGTH     = 10    // Should not less than 10 seconds
	MAX_EPOCH_LENGTH     = 86400 // Should not exceed 1 day

	DEFAULT_ERA_LENGTH = 4 * DEFAULT_EPOCH_LENGTH // If Epoch is 6 hours then Era is 24 hours(1 day)
	MAX_ERA_LENGTH     = MAX_EPOCH_LENGTH * 7     // Should not exceed 1 week
)
