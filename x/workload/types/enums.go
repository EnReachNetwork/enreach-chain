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
