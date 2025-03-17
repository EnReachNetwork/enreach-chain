package types

const (
	EventTypeSuperiorCreated = "SuperiorCreated"
	EventTypeSuperiorUpdated = "SuperiorUpdated"

	EventTypeUserCreated          = "UserCreated"
	EventTypeUserEVMAccountBinded = "UserEVMAccountBinded"

	EventTypeNodeRegistered        = "NodeRegistered"
	EventTypeNodeBoundAndActivated = "NodeBoundAndActivated"
	EventTypeNodeUnbound           = "NodeUnbound"

	AttributeKeyTxSigner   = "signer"
	AttributeKeySuperior   = "superior"
	AttributeKeyUserID     = "userID"
	AttributeKeyEvmAccount = "evmAccount"
	AttributeKeyNodeID     = "nodeID"
	AttributeKeyDeviceType = "deviceType"
	AttributeKeyNodeName   = "nodeName"
	AttributeKeyRegionCode = "regionCode"
)
