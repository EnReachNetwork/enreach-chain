package types

const (
	EventTypeOperatorCreated          = "EventOperatorCreated"
	EventTypeOperatorManagerBound     = "EventOperatorManagerBound"
	EventTypeOperatorEVMAccountBound  = "EventOperatorEVMAccountBound"
	EventTypeOperatorBasicInfoUpdated = "EventOperatorBasicInfoUpdated"

	EventTypeManagerRegionSet         = "EventManagerRegionSet"
	EventTypeManagerConnParamsUpdated = "EventManagerConnParamsUpdated"
	EventTypeManagerActivated         = "EventManagerActivated"

	EventTypeManagerRegistered = "EventManagerRegistered"
	EventTypeManagerGoWorking  = "EventManagerGoWorking"

	EventTypeSuperiorCreated = "EventSuperiorCreated"
	EventTypeSuperiorUpdated = "EventSuperiorUpdated"

	AttributeKeyTxSigner        = "signer"
	AttributeKeyOperatorAccount = "operatorAccount"
	AttributeKeyManagerAccount  = "managerAccount"
	AttributeKeyEvmAccount      = "evmAccount"
	AttributeKeyRegionCode      = "regionCode"
	AttributeKeyHostAddress     = "hostAddress"
	AttributeKeyManagerPort     = "managerPort"
	AttributeKeyTrackerPort     = "trackerPort"
	AttributeKeyChainAPIPort    = "chainAPIPort"
	AttributeKeyChainRPCPort    = "chainRPCPort"
	AttributeKeySuperior        = "superior"
)
