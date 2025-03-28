package types

type EpochProcessStatus string

const (
	EPS_INIT       EpochProcessStatus = "Init"
	EPS_PROCESSING EpochProcessStatus = "Processing"
	EPS_DONE       EpochProcessStatus = "Done"
)
