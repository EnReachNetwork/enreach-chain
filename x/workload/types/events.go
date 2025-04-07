package types

const (
	EventTypeWorkreportsSubmitted               = "EventWorkreportsSubmitted"
	EventTypeReputationPointChangeDataSubmitted = "EventReputationPointChangeDataSubmitted"

	EventTypeEpochStart = "EventEpochStart"
	EventTypeEpochEnd   = "EventEpochEnd"

	EventTypeEraStart = "EventEraStart"
	EventTypeEraEnd   = "EventEraEnd"

	EventTypeSuperiorCreated = "EventSuperiorCreated"
	EventTypeSuperiorUpdated = "EventSuperiorUpdated"

	EventTypeWorkreportProcessBatchSizeSet = "EventWorkreportProcessBatchSizeSet"
	EventTypeHistoryEpochDataDepthSet      = "EventHistoryEpochDataDepthSet"

	EventTypeEpochWorkloadProcessStarted = "EventEpochWorkloadProcessStarted"
	EventTypeEpochWorkloadProcessEnded   = "EventEpochWorkloadProcessEnded"

	EventTypeEraReputationPointProcessStarted = "EventEraReputationPointProcessStarted"
	EventTypeEraReputationPointProcessEnded   = "EventEraReputationPointProcessEnded"

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
	AttributeKeyEra                 = "era"
	AttributeKeyNodePointsCount     = "nodePointsCount"
	AttributeKeyEpochStartTime      = "epochStartTime"
	AttributeKeyEpochStartBlock     = "epochStartBlock"
	AttributeKeyEpochEndTime        = "epochEndTime"
	AttributeKeyEpochEndBlock       = "epochEndBlock"
)
