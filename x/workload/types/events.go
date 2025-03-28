package types

const (
	EventTypeWorkreportsSubmitted = "EventWorkreportsSubmitted"
	EventTypeEpochStart           = "EventEpochStart"
	EventTypeEpochEnd             = "EventEpochEnd"

	EventTypeSuperiorCreated = "EventSuperiorCreated"
	EventTypeSuperiorUpdated = "EventSuperiorUpdated"

	EventTypeWorkreportProcessBatchSizeSet = "EventWorkreportProcessBatchSizeSet"
	EventTypeHistoryEpochDataDepthSet      = "EventHistoryEpochDataDepthSet"

	AttributeKeyTxSigner        = "signer"
	AttributeKeyManagerAccount  = "managerAccount"
	AttributeKeyEpoch           = "epoch"
	AttributeKeyNodeScoresCount = "nodeScoresCount"
	AttributeKeySuperior        = "superior"
	AttributeKeyOldBatchSize    = "oldBatchSize"
	AttributeKeyNewBatchSize    = "newBatchSize"
	AttributeKeyOldDepth        = "oldDepth"
	AttributeKeyNewDepth        = "newDepth"
)
