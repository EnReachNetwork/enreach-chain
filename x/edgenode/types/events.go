package types

const (
	EventTypeSuperiorCreated = "EventSuperiorCreated"
	EventTypeSuperiorUpdated = "EventSuperiorUpdated"

	EventTypeUserCreated          = "EventUserCreated"
	EventTypeUserEVMAccountBinded = "EventUserEVMAccountBinded"

	EventTypeNodeRegistered        = "EventNodeRegistered"
	EventTypeNodeBoundAndActivated = "EventNodeBoundAndActivated"
	EventTypeNodeUnbound           = "EventNodeUnbound"

	EventTypeNodeTrafficTypeUpdated = "EventNodeTrafficTypeUpdated"

	AttributeKeyTxSigner          = "signer"
	AttributeKeySuperior          = "superior"
	AttributeKeyUserID            = "userID"
	AttributeKeyEvmAccount        = "evmAccount"
	AttributeKeyNodeID            = "nodeID"
	AttributeKeyDeviceType        = "deviceType"
	AttributeKeyNodeName          = "nodeName"
	AttributeKeyRegionCode        = "regionCode"
	AttributeKeyUpdatedNodesCount = "updatedNodesCount"
)
