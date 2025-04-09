package types

const (
	EventTypeWorkreportsSubmitted               = "EventWorkreportsSubmitted"
	EventTypeReputationPointChangeDataSubmitted = "EventReputationPointChangeDataSubmitted"
	EventTypeCheatStatusCRDataSubmitted         = "EventCheatStatusCRDataSubmitted"

	EventTypeEpochStart = "EventEpochStart"
	EventTypeEpochEnd   = "EventEpochEnd"

	EventTypeEraStart = "EventEraStart"
	EventTypeEraEnd   = "EventEraEnd"

	EventTypeSuperiorCreated = "EventSuperiorCreated"
	EventTypeSuperiorUpdated = "EventSuperiorUpdated"

	EventTypeEpochWorkloadProcessStarted = "EventEpochWorkloadProcessStarted"
	EventTypeEpochWorkloadProcessEnded   = "EventEpochWorkloadProcessEnded"

	EventTypeEraReputationPointProcessStarted = "EventEraReputationPointProcessStarted"
	EventTypeEraReputationPointProcessEnded   = "EventEraReputationPointProcessEnded"

	EventTypeEraCheatStatusProcessStarted = "EventEraCheatStatusProcessStarted"
	EventTypeEraCheatStatusProcessEnded   = "EventEraCheatStatusProcessEnded"

	EventTypeParamUpdated = "EventParamUpdated"

	AttributeKeyTxSigner            = "signer"
	AttributeKeyManagerAccount      = "managerAccount"
	AttributeKeyEpoch               = "epoch"
	AttributeKeyBlockHeight         = "blockHeight"
	AttributeKeyNodeScoresCount     = "nodeScoresCount"
	AttributeKeySuperior            = "superior"
	AttributeKeyStartAt             = "startAt"
	AttributeKeyEndAt               = "endAt"
	AttributeKeyTotalNodesCount     = "totalNodesCount"
	AttributeKeyProcessedNodesCount = "processedNodesCount"
	AttributeKeyEra                 = "era"
	AttributeKeyNodePointsCount     = "nodePointsCount"
	AttributeKeyNodeDatasCount      = "nodeDatasCount"
	AttributeKeyEpochStartTime      = "epochStartTime"
	AttributeKeyEpochStartBlock     = "epochStartBlock"
	AttributeKeyEpochEndTime        = "epochEndTime"
	AttributeKeyEpochEndBlock       = "epochEndBlock"
	AttributeKeyEraStartTime        = "eraStartTime"
	AttributeKeyEraStartBlock       = "eraStartBlock"
	AttributeKeyEraEndTime          = "eraEndTime"
	AttributeKeyEraEndBlock         = "eraEndBlock"
	AttributeKeyParamKey            = "paramKey"
	AttributeKeyOldParamValue       = "oldParamValue"
	AttributeKeyNewParamValue       = "newParamValue"
)
