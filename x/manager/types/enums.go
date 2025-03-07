package types

type ManagerRegisterStatus string

const (
	RS_PENDING_BIND     ManagerRegisterStatus = "Pending_Bind"
	RS_PENDING_CONFIG   ManagerRegisterStatus = "Pending_Config"
	RS_PENDING_ACTIVATE ManagerRegisterStatus = "Pending_Activate"
	RS_ACTIVATE         ManagerRegisterStatus = "Activate"
)

type ManagerWorkingStatus string

const (
	WS_WORKING ManagerWorkingStatus = "Working"
	WS_OFFLINE ManagerWorkingStatus = "Offline"
	WS_BLOCK   ManagerWorkingStatus = "Block"
)
