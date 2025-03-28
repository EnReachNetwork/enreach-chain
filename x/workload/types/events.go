package types

const (
	EventTypeWorkreportsSubmitted = "EventWorkreportsSubmitted"
	EventTypeEpochStart           = "EventEpochStart"
	EventTypeEpochEnd             = "EventEpochEnd"

	EventTypeSuperiorCreated = "EventSuperiorCreated"
	EventTypeSuperiorUpdated = "EventSuperiorUpdated"

	EventTypeWorkreportProcessBatchSizeSet = "EventWorkreportProcessBatchSizeSet"
	EventTypeHistoryEpochDataDepthSet      = "EventHistoryEpochDataDepthSet"

	EventTypeEpochWorkloadProcessStarted = "EventEpochWorkloadProcessStarted"
	EventTypeEpochWorkloadProcessEnded   = "EventEpochWorkloadProcessEnded"

	AttributeKeyTxSigner            = "signer"
	AttributeKeyManagerAccount      = "managerAccount"
	AttributeKeyEpoch               = "epoch"
	AttributeKeyBlockHeight         = "blockHeight"
	AttributeKeyNodeScoresCount     = "nodeScoresCount"
	AttributeKeySuperior            = "superior"
	AttributeKeyOldBatchSize        = "oldBatchSize"
	AttributeKeyNewBatchSize        = "newBatchSize"
	AttributeKeyOldDepth            = "oldDepth"
	AttributeKeyNewDepth            = "newDepth"
	AttributeKeyStartAt             = "startAt"
	AttributeKeyEndAt               = "endAt"
	AttributeKeyTotalNodesCount     = "totalNodesCount"
	AttributeKeyProcessedNodesCount = "processedNodesCount"
)
