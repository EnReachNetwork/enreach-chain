package types

const (
	EventTypeSuperiorCreated = "EventSuperiorCreated"
	EventTypeSuperiorUpdated = "EventSuperiorUpdated"

	EventTypeUserCreated          = "EventUserCreated"
	EventTypeUserEVMAccountBinded = "EventUserEVMAccountBinded"

	EventTypeNodeRegistered        = "EventNodeRegistered"
	EventTypeNodeBoundAndActivated = "EventNodeBoundAndActivated"
	EventTypeNodeUnbound           = "EventNodeUnbound"

	AttributeKeyTxSigner   = "signer"
	AttributeKeySuperior   = "superior"
	AttributeKeyUserID     = "userID"
	AttributeKeyEvmAccount = "evmAccount"
	AttributeKeyNodeID     = "nodeID"
	AttributeKeyDeviceType = "deviceType"
	AttributeKeyNodeName   = "nodeName"
	AttributeKeyRegionCode = "regionCode"
)
