package types

type EpochProcessStatus string
type EraProcessStatus string

const (
	EPS_INIT       EpochProcessStatus = "Init"
	EPS_PROCESSING EpochProcessStatus = "Processing"
	EPS_DONE       EpochProcessStatus = "Done"

	ERS_INIT       EraProcessStatus = "Init"
	ERS_PROCESSING EraProcessStatus = "Processing"
	ERS_DONE       EraProcessStatus = "Done"
)
