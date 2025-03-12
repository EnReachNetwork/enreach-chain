package types

type NodeRegisterStatus string

const (
	RS_PENDING_BIND     NodeRegisterStatus = "Pending_Bind"
	RS_PENDING_ACTIVATE NodeRegisterStatus = "Pending_Activate"
	RS_ACTIVATE         NodeRegisterStatus = "Activate"
)
