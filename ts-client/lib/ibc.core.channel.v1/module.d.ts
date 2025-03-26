import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { IdentifiedChannel } from "./types/ibc/core/channel/v1/channel";
import { Params } from "./types/ibc/core/channel/v1/channel";
import { MsgChannelOpenConfirm } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelUpgradeTimeout } from "./types/ibc/core/channel/v1/tx";
import { QueryPacketCommitmentRequest } from "./types/ibc/core/channel/v1/query";
import { QueryPacketCommitmentsResponse } from "./types/ibc/core/channel/v1/query";
import { QueryUnreceivedPacketsRequest } from "./types/ibc/core/channel/v1/query";
import { Upgrade } from "./types/ibc/core/channel/v1/upgrade";
import { MsgTimeoutOnCloseResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelOpenInit } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelCloseInit } from "./types/ibc/core/channel/v1/tx";
import { QueryPacketCommitmentResponse } from "./types/ibc/core/channel/v1/query";
import { QueryNextSequenceReceiveRequest } from "./types/ibc/core/channel/v1/query";
import { MsgChannelUpgradeConfirm } from "./types/ibc/core/channel/v1/tx";
import { MsgAcknowledgementResponse } from "./types/ibc/core/channel/v1/tx";
import { QueryChannelParamsRequest } from "./types/ibc/core/channel/v1/query";
import { MsgChannelUpgradeCancelResponse } from "./types/ibc/core/channel/v1/tx";
import { QueryChannelResponse } from "./types/ibc/core/channel/v1/query";
import { QueryPacketAcknowledgementsRequest } from "./types/ibc/core/channel/v1/query";
import { QueryPacketAcknowledgementsResponse } from "./types/ibc/core/channel/v1/query";
import { QueryUnreceivedAcksResponse } from "./types/ibc/core/channel/v1/query";
import { QueryUpgradeErrorResponse } from "./types/ibc/core/channel/v1/query";
import { MsgChannelOpenTry } from "./types/ibc/core/channel/v1/tx";
import { QueryPacketReceiptRequest } from "./types/ibc/core/channel/v1/query";
import { QueryPacketAcknowledgementResponse } from "./types/ibc/core/channel/v1/query";
import { Counterparty } from "./types/ibc/core/channel/v1/channel";
import { UpgradeFields } from "./types/ibc/core/channel/v1/upgrade";
import { MsgChannelCloseConfirm } from "./types/ibc/core/channel/v1/tx";
import { MsgTimeout } from "./types/ibc/core/channel/v1/tx";
import { MsgAcknowledgement } from "./types/ibc/core/channel/v1/tx";
import { QueryChannelClientStateResponse } from "./types/ibc/core/channel/v1/query";
import { QueryNextSequenceReceiveResponse } from "./types/ibc/core/channel/v1/query";
import { PacketSequence } from "./types/ibc/core/channel/v1/genesis";
import { Timeout } from "./types/ibc/core/channel/v1/channel";
import { QueryConnectionChannelsRequest } from "./types/ibc/core/channel/v1/query";
import { QueryChannelClientStateRequest } from "./types/ibc/core/channel/v1/query";
import { QueryUpgradeRequest } from "./types/ibc/core/channel/v1/query";
import { PacketState } from "./types/ibc/core/channel/v1/channel";
import { MsgChannelCloseConfirmResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelUpgradeTryResponse } from "./types/ibc/core/channel/v1/tx";
import { PacketId } from "./types/ibc/core/channel/v1/channel";
import { MsgChannelUpgradeAckResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgUpdateParams } from "./types/ibc/core/channel/v1/tx";
import { QueryChannelsRequest } from "./types/ibc/core/channel/v1/query";
import { QueryConnectionChannelsResponse } from "./types/ibc/core/channel/v1/query";
import { QueryPacketAcknowledgementRequest } from "./types/ibc/core/channel/v1/query";
import { Channel } from "./types/ibc/core/channel/v1/channel";
import { MsgPruneAcknowledgementsResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelUpgradeOpen } from "./types/ibc/core/channel/v1/tx";
import { QueryUpgradeResponse } from "./types/ibc/core/channel/v1/query";
import { MsgChannelOpenAckResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgUpdateParamsResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelUpgradeAck } from "./types/ibc/core/channel/v1/tx";
import { QueryPacketCommitmentsRequest } from "./types/ibc/core/channel/v1/query";
import { QueryUnreceivedAcksRequest } from "./types/ibc/core/channel/v1/query";
import { GenesisState } from "./types/ibc/core/channel/v1/genesis";
import { MsgChannelUpgradeOpenResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelUpgradeTimeoutResponse } from "./types/ibc/core/channel/v1/tx";
import { QueryChannelRequest } from "./types/ibc/core/channel/v1/query";
import { QueryNextSequenceSendResponse } from "./types/ibc/core/channel/v1/query";
import { Acknowledgement } from "./types/ibc/core/channel/v1/channel";
import { MsgChannelUpgradeInitResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelUpgradeConfirmResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelOpenConfirmResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelCloseInitResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgTimeoutResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgPruneAcknowledgements } from "./types/ibc/core/channel/v1/tx";
import { QueryChannelsResponse } from "./types/ibc/core/channel/v1/query";
import { QueryPacketReceiptResponse } from "./types/ibc/core/channel/v1/query";
import { QueryUpgradeErrorRequest } from "./types/ibc/core/channel/v1/query";
import { Packet } from "./types/ibc/core/channel/v1/channel";
import { MsgRecvPacket } from "./types/ibc/core/channel/v1/tx";
import { QueryChannelConsensusStateResponse } from "./types/ibc/core/channel/v1/query";
import { ErrorReceipt } from "./types/ibc/core/channel/v1/upgrade";
import { MsgChannelOpenInitResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgRecvPacketResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelOpenAck } from "./types/ibc/core/channel/v1/tx";
import { MsgTimeoutOnClose } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelUpgradeTry } from "./types/ibc/core/channel/v1/tx";
import { QueryChannelParamsResponse } from "./types/ibc/core/channel/v1/query";
import { MsgChannelOpenTryResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelUpgradeInit } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelUpgradeCancel } from "./types/ibc/core/channel/v1/tx";
import { QueryChannelConsensusStateRequest } from "./types/ibc/core/channel/v1/query";
import { QueryUnreceivedPacketsResponse } from "./types/ibc/core/channel/v1/query";
import { QueryNextSequenceSendRequest } from "./types/ibc/core/channel/v1/query";
export { IdentifiedChannel, Params, MsgChannelOpenConfirm, MsgChannelUpgradeTimeout, QueryPacketCommitmentRequest, QueryPacketCommitmentsResponse, QueryUnreceivedPacketsRequest, Upgrade, MsgTimeoutOnCloseResponse, MsgChannelOpenInit, MsgChannelCloseInit, QueryPacketCommitmentResponse, QueryNextSequenceReceiveRequest, MsgChannelUpgradeConfirm, MsgAcknowledgementResponse, QueryChannelParamsRequest, MsgChannelUpgradeCancelResponse, QueryChannelResponse, QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsResponse, QueryUnreceivedAcksResponse, QueryUpgradeErrorResponse, MsgChannelOpenTry, QueryPacketReceiptRequest, QueryPacketAcknowledgementResponse, Counterparty, UpgradeFields, MsgChannelCloseConfirm, MsgTimeout, MsgAcknowledgement, QueryChannelClientStateResponse, QueryNextSequenceReceiveResponse, PacketSequence, Timeout, QueryConnectionChannelsRequest, QueryChannelClientStateRequest, QueryUpgradeRequest, PacketState, MsgChannelCloseConfirmResponse, MsgChannelUpgradeTryResponse, PacketId, MsgChannelUpgradeAckResponse, MsgUpdateParams, QueryChannelsRequest, QueryConnectionChannelsResponse, QueryPacketAcknowledgementRequest, Channel, MsgPruneAcknowledgementsResponse, MsgChannelUpgradeOpen, QueryUpgradeResponse, MsgChannelOpenAckResponse, MsgUpdateParamsResponse, MsgChannelUpgradeAck, QueryPacketCommitmentsRequest, QueryUnreceivedAcksRequest, GenesisState, MsgChannelUpgradeOpenResponse, MsgChannelUpgradeTimeoutResponse, QueryChannelRequest, QueryNextSequenceSendResponse, Acknowledgement, MsgChannelUpgradeInitResponse, MsgChannelUpgradeConfirmResponse, MsgChannelOpenConfirmResponse, MsgChannelCloseInitResponse, MsgTimeoutResponse, MsgPruneAcknowledgements, QueryChannelsResponse, QueryPacketReceiptResponse, QueryUpgradeErrorRequest, Packet, MsgRecvPacket, QueryChannelConsensusStateResponse, ErrorReceipt, MsgChannelOpenInitResponse, MsgRecvPacketResponse, MsgChannelOpenAck, MsgTimeoutOnClose, MsgChannelUpgradeTry, QueryChannelParamsResponse, MsgChannelOpenTryResponse, MsgChannelUpgradeInit, MsgChannelUpgradeCancel, QueryChannelConsensusStateRequest, QueryUnreceivedPacketsResponse, QueryNextSequenceSendRequest };
type sendIdentifiedChannelParams = {
    value: IdentifiedChannel;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelOpenConfirmParams = {
    value: MsgChannelOpenConfirm;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelUpgradeTimeoutParams = {
    value: MsgChannelUpgradeTimeout;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPacketCommitmentRequestParams = {
    value: QueryPacketCommitmentRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPacketCommitmentsResponseParams = {
    value: QueryPacketCommitmentsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryUnreceivedPacketsRequestParams = {
    value: QueryUnreceivedPacketsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendUpgradeParams = {
    value: Upgrade;
    fee?: StdFee;
    memo?: string;
};
type sendMsgTimeoutOnCloseResponseParams = {
    value: MsgTimeoutOnCloseResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelOpenInitParams = {
    value: MsgChannelOpenInit;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelCloseInitParams = {
    value: MsgChannelCloseInit;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPacketCommitmentResponseParams = {
    value: QueryPacketCommitmentResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryNextSequenceReceiveRequestParams = {
    value: QueryNextSequenceReceiveRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelUpgradeConfirmParams = {
    value: MsgChannelUpgradeConfirm;
    fee?: StdFee;
    memo?: string;
};
type sendMsgAcknowledgementResponseParams = {
    value: MsgAcknowledgementResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryChannelParamsRequestParams = {
    value: QueryChannelParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelUpgradeCancelResponseParams = {
    value: MsgChannelUpgradeCancelResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryChannelResponseParams = {
    value: QueryChannelResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPacketAcknowledgementsRequestParams = {
    value: QueryPacketAcknowledgementsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPacketAcknowledgementsResponseParams = {
    value: QueryPacketAcknowledgementsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryUnreceivedAcksResponseParams = {
    value: QueryUnreceivedAcksResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryUpgradeErrorResponseParams = {
    value: QueryUpgradeErrorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelOpenTryParams = {
    value: MsgChannelOpenTry;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPacketReceiptRequestParams = {
    value: QueryPacketReceiptRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPacketAcknowledgementResponseParams = {
    value: QueryPacketAcknowledgementResponse;
    fee?: StdFee;
    memo?: string;
};
type sendCounterpartyParams = {
    value: Counterparty;
    fee?: StdFee;
    memo?: string;
};
type sendUpgradeFieldsParams = {
    value: UpgradeFields;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelCloseConfirmParams = {
    value: MsgChannelCloseConfirm;
    fee?: StdFee;
    memo?: string;
};
type sendMsgTimeoutParams = {
    value: MsgTimeout;
    fee?: StdFee;
    memo?: string;
};
type sendMsgAcknowledgementParams = {
    value: MsgAcknowledgement;
    fee?: StdFee;
    memo?: string;
};
type sendQueryChannelClientStateResponseParams = {
    value: QueryChannelClientStateResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryNextSequenceReceiveResponseParams = {
    value: QueryNextSequenceReceiveResponse;
    fee?: StdFee;
    memo?: string;
};
type sendPacketSequenceParams = {
    value: PacketSequence;
    fee?: StdFee;
    memo?: string;
};
type sendTimeoutParams = {
    value: Timeout;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConnectionChannelsRequestParams = {
    value: QueryConnectionChannelsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryChannelClientStateRequestParams = {
    value: QueryChannelClientStateRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryUpgradeRequestParams = {
    value: QueryUpgradeRequest;
    fee?: StdFee;
    memo?: string;
};
type sendPacketStateParams = {
    value: PacketState;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelCloseConfirmResponseParams = {
    value: MsgChannelCloseConfirmResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelUpgradeTryResponseParams = {
    value: MsgChannelUpgradeTryResponse;
    fee?: StdFee;
    memo?: string;
};
type sendPacketIdParams = {
    value: PacketId;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelUpgradeAckResponseParams = {
    value: MsgChannelUpgradeAckResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendQueryChannelsRequestParams = {
    value: QueryChannelsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConnectionChannelsResponseParams = {
    value: QueryConnectionChannelsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPacketAcknowledgementRequestParams = {
    value: QueryPacketAcknowledgementRequest;
    fee?: StdFee;
    memo?: string;
};
type sendChannelParams = {
    value: Channel;
    fee?: StdFee;
    memo?: string;
};
type sendMsgPruneAcknowledgementsResponseParams = {
    value: MsgPruneAcknowledgementsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelUpgradeOpenParams = {
    value: MsgChannelUpgradeOpen;
    fee?: StdFee;
    memo?: string;
};
type sendQueryUpgradeResponseParams = {
    value: QueryUpgradeResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelOpenAckResponseParams = {
    value: MsgChannelOpenAckResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelUpgradeAckParams = {
    value: MsgChannelUpgradeAck;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPacketCommitmentsRequestParams = {
    value: QueryPacketCommitmentsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryUnreceivedAcksRequestParams = {
    value: QueryUnreceivedAcksRequest;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelUpgradeOpenResponseParams = {
    value: MsgChannelUpgradeOpenResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelUpgradeTimeoutResponseParams = {
    value: MsgChannelUpgradeTimeoutResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryChannelRequestParams = {
    value: QueryChannelRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryNextSequenceSendResponseParams = {
    value: QueryNextSequenceSendResponse;
    fee?: StdFee;
    memo?: string;
};
type sendAcknowledgementParams = {
    value: Acknowledgement;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelUpgradeInitResponseParams = {
    value: MsgChannelUpgradeInitResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelUpgradeConfirmResponseParams = {
    value: MsgChannelUpgradeConfirmResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelOpenConfirmResponseParams = {
    value: MsgChannelOpenConfirmResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelCloseInitResponseParams = {
    value: MsgChannelCloseInitResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgTimeoutResponseParams = {
    value: MsgTimeoutResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgPruneAcknowledgementsParams = {
    value: MsgPruneAcknowledgements;
    fee?: StdFee;
    memo?: string;
};
type sendQueryChannelsResponseParams = {
    value: QueryChannelsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPacketReceiptResponseParams = {
    value: QueryPacketReceiptResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryUpgradeErrorRequestParams = {
    value: QueryUpgradeErrorRequest;
    fee?: StdFee;
    memo?: string;
};
type sendPacketParams = {
    value: Packet;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRecvPacketParams = {
    value: MsgRecvPacket;
    fee?: StdFee;
    memo?: string;
};
type sendQueryChannelConsensusStateResponseParams = {
    value: QueryChannelConsensusStateResponse;
    fee?: StdFee;
    memo?: string;
};
type sendErrorReceiptParams = {
    value: ErrorReceipt;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelOpenInitResponseParams = {
    value: MsgChannelOpenInitResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRecvPacketResponseParams = {
    value: MsgRecvPacketResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelOpenAckParams = {
    value: MsgChannelOpenAck;
    fee?: StdFee;
    memo?: string;
};
type sendMsgTimeoutOnCloseParams = {
    value: MsgTimeoutOnClose;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelUpgradeTryParams = {
    value: MsgChannelUpgradeTry;
    fee?: StdFee;
    memo?: string;
};
type sendQueryChannelParamsResponseParams = {
    value: QueryChannelParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelOpenTryResponseParams = {
    value: MsgChannelOpenTryResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelUpgradeInitParams = {
    value: MsgChannelUpgradeInit;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelUpgradeCancelParams = {
    value: MsgChannelUpgradeCancel;
    fee?: StdFee;
    memo?: string;
};
type sendQueryChannelConsensusStateRequestParams = {
    value: QueryChannelConsensusStateRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryUnreceivedPacketsResponseParams = {
    value: QueryUnreceivedPacketsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryNextSequenceSendRequestParams = {
    value: QueryNextSequenceSendRequest;
    fee?: StdFee;
    memo?: string;
};
type identifiedChannelParams = {
    value: IdentifiedChannel;
};
type paramsParams = {
    value: Params;
};
type msgChannelOpenConfirmParams = {
    value: MsgChannelOpenConfirm;
};
type msgChannelUpgradeTimeoutParams = {
    value: MsgChannelUpgradeTimeout;
};
type queryPacketCommitmentRequestParams = {
    value: QueryPacketCommitmentRequest;
};
type queryPacketCommitmentsResponseParams = {
    value: QueryPacketCommitmentsResponse;
};
type queryUnreceivedPacketsRequestParams = {
    value: QueryUnreceivedPacketsRequest;
};
type upgradeParams = {
    value: Upgrade;
};
type msgTimeoutOnCloseResponseParams = {
    value: MsgTimeoutOnCloseResponse;
};
type msgChannelOpenInitParams = {
    value: MsgChannelOpenInit;
};
type msgChannelCloseInitParams = {
    value: MsgChannelCloseInit;
};
type queryPacketCommitmentResponseParams = {
    value: QueryPacketCommitmentResponse;
};
type queryNextSequenceReceiveRequestParams = {
    value: QueryNextSequenceReceiveRequest;
};
type msgChannelUpgradeConfirmParams = {
    value: MsgChannelUpgradeConfirm;
};
type msgAcknowledgementResponseParams = {
    value: MsgAcknowledgementResponse;
};
type queryChannelParamsRequestParams = {
    value: QueryChannelParamsRequest;
};
type msgChannelUpgradeCancelResponseParams = {
    value: MsgChannelUpgradeCancelResponse;
};
type queryChannelResponseParams = {
    value: QueryChannelResponse;
};
type queryPacketAcknowledgementsRequestParams = {
    value: QueryPacketAcknowledgementsRequest;
};
type queryPacketAcknowledgementsResponseParams = {
    value: QueryPacketAcknowledgementsResponse;
};
type queryUnreceivedAcksResponseParams = {
    value: QueryUnreceivedAcksResponse;
};
type queryUpgradeErrorResponseParams = {
    value: QueryUpgradeErrorResponse;
};
type msgChannelOpenTryParams = {
    value: MsgChannelOpenTry;
};
type queryPacketReceiptRequestParams = {
    value: QueryPacketReceiptRequest;
};
type queryPacketAcknowledgementResponseParams = {
    value: QueryPacketAcknowledgementResponse;
};
type counterpartyParams = {
    value: Counterparty;
};
type upgradeFieldsParams = {
    value: UpgradeFields;
};
type msgChannelCloseConfirmParams = {
    value: MsgChannelCloseConfirm;
};
type msgTimeoutParams = {
    value: MsgTimeout;
};
type msgAcknowledgementParams = {
    value: MsgAcknowledgement;
};
type queryChannelClientStateResponseParams = {
    value: QueryChannelClientStateResponse;
};
type queryNextSequenceReceiveResponseParams = {
    value: QueryNextSequenceReceiveResponse;
};
type packetSequenceParams = {
    value: PacketSequence;
};
type timeoutParams = {
    value: Timeout;
};
type queryConnectionChannelsRequestParams = {
    value: QueryConnectionChannelsRequest;
};
type queryChannelClientStateRequestParams = {
    value: QueryChannelClientStateRequest;
};
type queryUpgradeRequestParams = {
    value: QueryUpgradeRequest;
};
type packetStateParams = {
    value: PacketState;
};
type msgChannelCloseConfirmResponseParams = {
    value: MsgChannelCloseConfirmResponse;
};
type msgChannelUpgradeTryResponseParams = {
    value: MsgChannelUpgradeTryResponse;
};
type packetIdParams = {
    value: PacketId;
};
type msgChannelUpgradeAckResponseParams = {
    value: MsgChannelUpgradeAckResponse;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type queryChannelsRequestParams = {
    value: QueryChannelsRequest;
};
type queryConnectionChannelsResponseParams = {
    value: QueryConnectionChannelsResponse;
};
type queryPacketAcknowledgementRequestParams = {
    value: QueryPacketAcknowledgementRequest;
};
type channelParams = {
    value: Channel;
};
type msgPruneAcknowledgementsResponseParams = {
    value: MsgPruneAcknowledgementsResponse;
};
type msgChannelUpgradeOpenParams = {
    value: MsgChannelUpgradeOpen;
};
type queryUpgradeResponseParams = {
    value: QueryUpgradeResponse;
};
type msgChannelOpenAckResponseParams = {
    value: MsgChannelOpenAckResponse;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type msgChannelUpgradeAckParams = {
    value: MsgChannelUpgradeAck;
};
type queryPacketCommitmentsRequestParams = {
    value: QueryPacketCommitmentsRequest;
};
type queryUnreceivedAcksRequestParams = {
    value: QueryUnreceivedAcksRequest;
};
type genesisStateParams = {
    value: GenesisState;
};
type msgChannelUpgradeOpenResponseParams = {
    value: MsgChannelUpgradeOpenResponse;
};
type msgChannelUpgradeTimeoutResponseParams = {
    value: MsgChannelUpgradeTimeoutResponse;
};
type queryChannelRequestParams = {
    value: QueryChannelRequest;
};
type queryNextSequenceSendResponseParams = {
    value: QueryNextSequenceSendResponse;
};
type acknowledgementParams = {
    value: Acknowledgement;
};
type msgChannelUpgradeInitResponseParams = {
    value: MsgChannelUpgradeInitResponse;
};
type msgChannelUpgradeConfirmResponseParams = {
    value: MsgChannelUpgradeConfirmResponse;
};
type msgChannelOpenConfirmResponseParams = {
    value: MsgChannelOpenConfirmResponse;
};
type msgChannelCloseInitResponseParams = {
    value: MsgChannelCloseInitResponse;
};
type msgTimeoutResponseParams = {
    value: MsgTimeoutResponse;
};
type msgPruneAcknowledgementsParams = {
    value: MsgPruneAcknowledgements;
};
type queryChannelsResponseParams = {
    value: QueryChannelsResponse;
};
type queryPacketReceiptResponseParams = {
    value: QueryPacketReceiptResponse;
};
type queryUpgradeErrorRequestParams = {
    value: QueryUpgradeErrorRequest;
};
type packetParams = {
    value: Packet;
};
type msgRecvPacketParams = {
    value: MsgRecvPacket;
};
type queryChannelConsensusStateResponseParams = {
    value: QueryChannelConsensusStateResponse;
};
type errorReceiptParams = {
    value: ErrorReceipt;
};
type msgChannelOpenInitResponseParams = {
    value: MsgChannelOpenInitResponse;
};
type msgRecvPacketResponseParams = {
    value: MsgRecvPacketResponse;
};
type msgChannelOpenAckParams = {
    value: MsgChannelOpenAck;
};
type msgTimeoutOnCloseParams = {
    value: MsgTimeoutOnClose;
};
type msgChannelUpgradeTryParams = {
    value: MsgChannelUpgradeTry;
};
type queryChannelParamsResponseParams = {
    value: QueryChannelParamsResponse;
};
type msgChannelOpenTryResponseParams = {
    value: MsgChannelOpenTryResponse;
};
type msgChannelUpgradeInitParams = {
    value: MsgChannelUpgradeInit;
};
type msgChannelUpgradeCancelParams = {
    value: MsgChannelUpgradeCancel;
};
type queryChannelConsensusStateRequestParams = {
    value: QueryChannelConsensusStateRequest;
};
type queryUnreceivedPacketsResponseParams = {
    value: QueryUnreceivedPacketsResponse;
};
type queryNextSequenceSendRequestParams = {
    value: QueryNextSequenceSendRequest;
};
export declare const registry: any;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendIdentifiedChannel({ value, fee, memo }: sendIdentifiedChannelParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendMsgChannelOpenConfirm({ value, fee, memo }: sendMsgChannelOpenConfirmParams): Promise<DeliverTxResponse>;
    sendMsgChannelUpgradeTimeout({ value, fee, memo }: sendMsgChannelUpgradeTimeoutParams): Promise<DeliverTxResponse>;
    sendQueryPacketCommitmentRequest({ value, fee, memo }: sendQueryPacketCommitmentRequestParams): Promise<DeliverTxResponse>;
    sendQueryPacketCommitmentsResponse({ value, fee, memo }: sendQueryPacketCommitmentsResponseParams): Promise<DeliverTxResponse>;
    sendQueryUnreceivedPacketsRequest({ value, fee, memo }: sendQueryUnreceivedPacketsRequestParams): Promise<DeliverTxResponse>;
    sendUpgrade({ value, fee, memo }: sendUpgradeParams): Promise<DeliverTxResponse>;
    sendMsgTimeoutOnCloseResponse({ value, fee, memo }: sendMsgTimeoutOnCloseResponseParams): Promise<DeliverTxResponse>;
    sendMsgChannelOpenInit({ value, fee, memo }: sendMsgChannelOpenInitParams): Promise<DeliverTxResponse>;
    sendMsgChannelCloseInit({ value, fee, memo }: sendMsgChannelCloseInitParams): Promise<DeliverTxResponse>;
    sendQueryPacketCommitmentResponse({ value, fee, memo }: sendQueryPacketCommitmentResponseParams): Promise<DeliverTxResponse>;
    sendQueryNextSequenceReceiveRequest({ value, fee, memo }: sendQueryNextSequenceReceiveRequestParams): Promise<DeliverTxResponse>;
    sendMsgChannelUpgradeConfirm({ value, fee, memo }: sendMsgChannelUpgradeConfirmParams): Promise<DeliverTxResponse>;
    sendMsgAcknowledgementResponse({ value, fee, memo }: sendMsgAcknowledgementResponseParams): Promise<DeliverTxResponse>;
    sendQueryChannelParamsRequest({ value, fee, memo }: sendQueryChannelParamsRequestParams): Promise<DeliverTxResponse>;
    sendMsgChannelUpgradeCancelResponse({ value, fee, memo }: sendMsgChannelUpgradeCancelResponseParams): Promise<DeliverTxResponse>;
    sendQueryChannelResponse({ value, fee, memo }: sendQueryChannelResponseParams): Promise<DeliverTxResponse>;
    sendQueryPacketAcknowledgementsRequest({ value, fee, memo }: sendQueryPacketAcknowledgementsRequestParams): Promise<DeliverTxResponse>;
    sendQueryPacketAcknowledgementsResponse({ value, fee, memo }: sendQueryPacketAcknowledgementsResponseParams): Promise<DeliverTxResponse>;
    sendQueryUnreceivedAcksResponse({ value, fee, memo }: sendQueryUnreceivedAcksResponseParams): Promise<DeliverTxResponse>;
    sendQueryUpgradeErrorResponse({ value, fee, memo }: sendQueryUpgradeErrorResponseParams): Promise<DeliverTxResponse>;
    sendMsgChannelOpenTry({ value, fee, memo }: sendMsgChannelOpenTryParams): Promise<DeliverTxResponse>;
    sendQueryPacketReceiptRequest({ value, fee, memo }: sendQueryPacketReceiptRequestParams): Promise<DeliverTxResponse>;
    sendQueryPacketAcknowledgementResponse({ value, fee, memo }: sendQueryPacketAcknowledgementResponseParams): Promise<DeliverTxResponse>;
    sendCounterparty({ value, fee, memo }: sendCounterpartyParams): Promise<DeliverTxResponse>;
    sendUpgradeFields({ value, fee, memo }: sendUpgradeFieldsParams): Promise<DeliverTxResponse>;
    sendMsgChannelCloseConfirm({ value, fee, memo }: sendMsgChannelCloseConfirmParams): Promise<DeliverTxResponse>;
    sendMsgTimeout({ value, fee, memo }: sendMsgTimeoutParams): Promise<DeliverTxResponse>;
    sendMsgAcknowledgement({ value, fee, memo }: sendMsgAcknowledgementParams): Promise<DeliverTxResponse>;
    sendQueryChannelClientStateResponse({ value, fee, memo }: sendQueryChannelClientStateResponseParams): Promise<DeliverTxResponse>;
    sendQueryNextSequenceReceiveResponse({ value, fee, memo }: sendQueryNextSequenceReceiveResponseParams): Promise<DeliverTxResponse>;
    sendPacketSequence({ value, fee, memo }: sendPacketSequenceParams): Promise<DeliverTxResponse>;
    sendTimeout({ value, fee, memo }: sendTimeoutParams): Promise<DeliverTxResponse>;
    sendQueryConnectionChannelsRequest({ value, fee, memo }: sendQueryConnectionChannelsRequestParams): Promise<DeliverTxResponse>;
    sendQueryChannelClientStateRequest({ value, fee, memo }: sendQueryChannelClientStateRequestParams): Promise<DeliverTxResponse>;
    sendQueryUpgradeRequest({ value, fee, memo }: sendQueryUpgradeRequestParams): Promise<DeliverTxResponse>;
    sendPacketState({ value, fee, memo }: sendPacketStateParams): Promise<DeliverTxResponse>;
    sendMsgChannelCloseConfirmResponse({ value, fee, memo }: sendMsgChannelCloseConfirmResponseParams): Promise<DeliverTxResponse>;
    sendMsgChannelUpgradeTryResponse({ value, fee, memo }: sendMsgChannelUpgradeTryResponseParams): Promise<DeliverTxResponse>;
    sendPacketId({ value, fee, memo }: sendPacketIdParams): Promise<DeliverTxResponse>;
    sendMsgChannelUpgradeAckResponse({ value, fee, memo }: sendMsgChannelUpgradeAckResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendQueryChannelsRequest({ value, fee, memo }: sendQueryChannelsRequestParams): Promise<DeliverTxResponse>;
    sendQueryConnectionChannelsResponse({ value, fee, memo }: sendQueryConnectionChannelsResponseParams): Promise<DeliverTxResponse>;
    sendQueryPacketAcknowledgementRequest({ value, fee, memo }: sendQueryPacketAcknowledgementRequestParams): Promise<DeliverTxResponse>;
    sendChannel({ value, fee, memo }: sendChannelParams): Promise<DeliverTxResponse>;
    sendMsgPruneAcknowledgementsResponse({ value, fee, memo }: sendMsgPruneAcknowledgementsResponseParams): Promise<DeliverTxResponse>;
    sendMsgChannelUpgradeOpen({ value, fee, memo }: sendMsgChannelUpgradeOpenParams): Promise<DeliverTxResponse>;
    sendQueryUpgradeResponse({ value, fee, memo }: sendQueryUpgradeResponseParams): Promise<DeliverTxResponse>;
    sendMsgChannelOpenAckResponse({ value, fee, memo }: sendMsgChannelOpenAckResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendMsgChannelUpgradeAck({ value, fee, memo }: sendMsgChannelUpgradeAckParams): Promise<DeliverTxResponse>;
    sendQueryPacketCommitmentsRequest({ value, fee, memo }: sendQueryPacketCommitmentsRequestParams): Promise<DeliverTxResponse>;
    sendQueryUnreceivedAcksRequest({ value, fee, memo }: sendQueryUnreceivedAcksRequestParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendMsgChannelUpgradeOpenResponse({ value, fee, memo }: sendMsgChannelUpgradeOpenResponseParams): Promise<DeliverTxResponse>;
    sendMsgChannelUpgradeTimeoutResponse({ value, fee, memo }: sendMsgChannelUpgradeTimeoutResponseParams): Promise<DeliverTxResponse>;
    sendQueryChannelRequest({ value, fee, memo }: sendQueryChannelRequestParams): Promise<DeliverTxResponse>;
    sendQueryNextSequenceSendResponse({ value, fee, memo }: sendQueryNextSequenceSendResponseParams): Promise<DeliverTxResponse>;
    sendAcknowledgement({ value, fee, memo }: sendAcknowledgementParams): Promise<DeliverTxResponse>;
    sendMsgChannelUpgradeInitResponse({ value, fee, memo }: sendMsgChannelUpgradeInitResponseParams): Promise<DeliverTxResponse>;
    sendMsgChannelUpgradeConfirmResponse({ value, fee, memo }: sendMsgChannelUpgradeConfirmResponseParams): Promise<DeliverTxResponse>;
    sendMsgChannelOpenConfirmResponse({ value, fee, memo }: sendMsgChannelOpenConfirmResponseParams): Promise<DeliverTxResponse>;
    sendMsgChannelCloseInitResponse({ value, fee, memo }: sendMsgChannelCloseInitResponseParams): Promise<DeliverTxResponse>;
    sendMsgTimeoutResponse({ value, fee, memo }: sendMsgTimeoutResponseParams): Promise<DeliverTxResponse>;
    sendMsgPruneAcknowledgements({ value, fee, memo }: sendMsgPruneAcknowledgementsParams): Promise<DeliverTxResponse>;
    sendQueryChannelsResponse({ value, fee, memo }: sendQueryChannelsResponseParams): Promise<DeliverTxResponse>;
    sendQueryPacketReceiptResponse({ value, fee, memo }: sendQueryPacketReceiptResponseParams): Promise<DeliverTxResponse>;
    sendQueryUpgradeErrorRequest({ value, fee, memo }: sendQueryUpgradeErrorRequestParams): Promise<DeliverTxResponse>;
    sendPacket({ value, fee, memo }: sendPacketParams): Promise<DeliverTxResponse>;
    sendMsgRecvPacket({ value, fee, memo }: sendMsgRecvPacketParams): Promise<DeliverTxResponse>;
    sendQueryChannelConsensusStateResponse({ value, fee, memo }: sendQueryChannelConsensusStateResponseParams): Promise<DeliverTxResponse>;
    sendErrorReceipt({ value, fee, memo }: sendErrorReceiptParams): Promise<DeliverTxResponse>;
    sendMsgChannelOpenInitResponse({ value, fee, memo }: sendMsgChannelOpenInitResponseParams): Promise<DeliverTxResponse>;
    sendMsgRecvPacketResponse({ value, fee, memo }: sendMsgRecvPacketResponseParams): Promise<DeliverTxResponse>;
    sendMsgChannelOpenAck({ value, fee, memo }: sendMsgChannelOpenAckParams): Promise<DeliverTxResponse>;
    sendMsgTimeoutOnClose({ value, fee, memo }: sendMsgTimeoutOnCloseParams): Promise<DeliverTxResponse>;
    sendMsgChannelUpgradeTry({ value, fee, memo }: sendMsgChannelUpgradeTryParams): Promise<DeliverTxResponse>;
    sendQueryChannelParamsResponse({ value, fee, memo }: sendQueryChannelParamsResponseParams): Promise<DeliverTxResponse>;
    sendMsgChannelOpenTryResponse({ value, fee, memo }: sendMsgChannelOpenTryResponseParams): Promise<DeliverTxResponse>;
    sendMsgChannelUpgradeInit({ value, fee, memo }: sendMsgChannelUpgradeInitParams): Promise<DeliverTxResponse>;
    sendMsgChannelUpgradeCancel({ value, fee, memo }: sendMsgChannelUpgradeCancelParams): Promise<DeliverTxResponse>;
    sendQueryChannelConsensusStateRequest({ value, fee, memo }: sendQueryChannelConsensusStateRequestParams): Promise<DeliverTxResponse>;
    sendQueryUnreceivedPacketsResponse({ value, fee, memo }: sendQueryUnreceivedPacketsResponseParams): Promise<DeliverTxResponse>;
    sendQueryNextSequenceSendRequest({ value, fee, memo }: sendQueryNextSequenceSendRequestParams): Promise<DeliverTxResponse>;
    identifiedChannel({ value }: identifiedChannelParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    msgChannelOpenConfirm({ value }: msgChannelOpenConfirmParams): EncodeObject;
    msgChannelUpgradeTimeout({ value }: msgChannelUpgradeTimeoutParams): EncodeObject;
    queryPacketCommitmentRequest({ value }: queryPacketCommitmentRequestParams): EncodeObject;
    queryPacketCommitmentsResponse({ value }: queryPacketCommitmentsResponseParams): EncodeObject;
    queryUnreceivedPacketsRequest({ value }: queryUnreceivedPacketsRequestParams): EncodeObject;
    upgrade({ value }: upgradeParams): EncodeObject;
    msgTimeoutOnCloseResponse({ value }: msgTimeoutOnCloseResponseParams): EncodeObject;
    msgChannelOpenInit({ value }: msgChannelOpenInitParams): EncodeObject;
    msgChannelCloseInit({ value }: msgChannelCloseInitParams): EncodeObject;
    queryPacketCommitmentResponse({ value }: queryPacketCommitmentResponseParams): EncodeObject;
    queryNextSequenceReceiveRequest({ value }: queryNextSequenceReceiveRequestParams): EncodeObject;
    msgChannelUpgradeConfirm({ value }: msgChannelUpgradeConfirmParams): EncodeObject;
    msgAcknowledgementResponse({ value }: msgAcknowledgementResponseParams): EncodeObject;
    queryChannelParamsRequest({ value }: queryChannelParamsRequestParams): EncodeObject;
    msgChannelUpgradeCancelResponse({ value }: msgChannelUpgradeCancelResponseParams): EncodeObject;
    queryChannelResponse({ value }: queryChannelResponseParams): EncodeObject;
    queryPacketAcknowledgementsRequest({ value }: queryPacketAcknowledgementsRequestParams): EncodeObject;
    queryPacketAcknowledgementsResponse({ value }: queryPacketAcknowledgementsResponseParams): EncodeObject;
    queryUnreceivedAcksResponse({ value }: queryUnreceivedAcksResponseParams): EncodeObject;
    queryUpgradeErrorResponse({ value }: queryUpgradeErrorResponseParams): EncodeObject;
    msgChannelOpenTry({ value }: msgChannelOpenTryParams): EncodeObject;
    queryPacketReceiptRequest({ value }: queryPacketReceiptRequestParams): EncodeObject;
    queryPacketAcknowledgementResponse({ value }: queryPacketAcknowledgementResponseParams): EncodeObject;
    counterparty({ value }: counterpartyParams): EncodeObject;
    upgradeFields({ value }: upgradeFieldsParams): EncodeObject;
    msgChannelCloseConfirm({ value }: msgChannelCloseConfirmParams): EncodeObject;
    msgTimeout({ value }: msgTimeoutParams): EncodeObject;
    msgAcknowledgement({ value }: msgAcknowledgementParams): EncodeObject;
    queryChannelClientStateResponse({ value }: queryChannelClientStateResponseParams): EncodeObject;
    queryNextSequenceReceiveResponse({ value }: queryNextSequenceReceiveResponseParams): EncodeObject;
    packetSequence({ value }: packetSequenceParams): EncodeObject;
    timeout({ value }: timeoutParams): EncodeObject;
    queryConnectionChannelsRequest({ value }: queryConnectionChannelsRequestParams): EncodeObject;
    queryChannelClientStateRequest({ value }: queryChannelClientStateRequestParams): EncodeObject;
    queryUpgradeRequest({ value }: queryUpgradeRequestParams): EncodeObject;
    packetState({ value }: packetStateParams): EncodeObject;
    msgChannelCloseConfirmResponse({ value }: msgChannelCloseConfirmResponseParams): EncodeObject;
    msgChannelUpgradeTryResponse({ value }: msgChannelUpgradeTryResponseParams): EncodeObject;
    packetId({ value }: packetIdParams): EncodeObject;
    msgChannelUpgradeAckResponse({ value }: msgChannelUpgradeAckResponseParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    queryChannelsRequest({ value }: queryChannelsRequestParams): EncodeObject;
    queryConnectionChannelsResponse({ value }: queryConnectionChannelsResponseParams): EncodeObject;
    queryPacketAcknowledgementRequest({ value }: queryPacketAcknowledgementRequestParams): EncodeObject;
    channel({ value }: channelParams): EncodeObject;
    msgPruneAcknowledgementsResponse({ value }: msgPruneAcknowledgementsResponseParams): EncodeObject;
    msgChannelUpgradeOpen({ value }: msgChannelUpgradeOpenParams): EncodeObject;
    queryUpgradeResponse({ value }: queryUpgradeResponseParams): EncodeObject;
    msgChannelOpenAckResponse({ value }: msgChannelOpenAckResponseParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    msgChannelUpgradeAck({ value }: msgChannelUpgradeAckParams): EncodeObject;
    queryPacketCommitmentsRequest({ value }: queryPacketCommitmentsRequestParams): EncodeObject;
    queryUnreceivedAcksRequest({ value }: queryUnreceivedAcksRequestParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    msgChannelUpgradeOpenResponse({ value }: msgChannelUpgradeOpenResponseParams): EncodeObject;
    msgChannelUpgradeTimeoutResponse({ value }: msgChannelUpgradeTimeoutResponseParams): EncodeObject;
    queryChannelRequest({ value }: queryChannelRequestParams): EncodeObject;
    queryNextSequenceSendResponse({ value }: queryNextSequenceSendResponseParams): EncodeObject;
    acknowledgement({ value }: acknowledgementParams): EncodeObject;
    msgChannelUpgradeInitResponse({ value }: msgChannelUpgradeInitResponseParams): EncodeObject;
    msgChannelUpgradeConfirmResponse({ value }: msgChannelUpgradeConfirmResponseParams): EncodeObject;
    msgChannelOpenConfirmResponse({ value }: msgChannelOpenConfirmResponseParams): EncodeObject;
    msgChannelCloseInitResponse({ value }: msgChannelCloseInitResponseParams): EncodeObject;
    msgTimeoutResponse({ value }: msgTimeoutResponseParams): EncodeObject;
    msgPruneAcknowledgements({ value }: msgPruneAcknowledgementsParams): EncodeObject;
    queryChannelsResponse({ value }: queryChannelsResponseParams): EncodeObject;
    queryPacketReceiptResponse({ value }: queryPacketReceiptResponseParams): EncodeObject;
    queryUpgradeErrorRequest({ value }: queryUpgradeErrorRequestParams): EncodeObject;
    packet({ value }: packetParams): EncodeObject;
    msgRecvPacket({ value }: msgRecvPacketParams): EncodeObject;
    queryChannelConsensusStateResponse({ value }: queryChannelConsensusStateResponseParams): EncodeObject;
    errorReceipt({ value }: errorReceiptParams): EncodeObject;
    msgChannelOpenInitResponse({ value }: msgChannelOpenInitResponseParams): EncodeObject;
    msgRecvPacketResponse({ value }: msgRecvPacketResponseParams): EncodeObject;
    msgChannelOpenAck({ value }: msgChannelOpenAckParams): EncodeObject;
    msgTimeoutOnClose({ value }: msgTimeoutOnCloseParams): EncodeObject;
    msgChannelUpgradeTry({ value }: msgChannelUpgradeTryParams): EncodeObject;
    queryChannelParamsResponse({ value }: queryChannelParamsResponseParams): EncodeObject;
    msgChannelOpenTryResponse({ value }: msgChannelOpenTryResponseParams): EncodeObject;
    msgChannelUpgradeInit({ value }: msgChannelUpgradeInitParams): EncodeObject;
    msgChannelUpgradeCancel({ value }: msgChannelUpgradeCancelParams): EncodeObject;
    queryChannelConsensusStateRequest({ value }: queryChannelConsensusStateRequestParams): EncodeObject;
    queryUnreceivedPacketsResponse({ value }: queryUnreceivedPacketsResponseParams): EncodeObject;
    queryNextSequenceSendRequest({ value }: queryNextSequenceSendRequestParams): EncodeObject;
};
interface QueryClientOptions {
    addr: string;
}
export declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Api<unknown>;
declare class SDKModule {
    query: ReturnType<typeof queryClient>;
    tx: ReturnType<typeof txClient>;
    structure: Record<string, unknown>;
    registry: Array<[string, GeneratedType]>;
    constructor(client: IgniteClient);
    updateTX(client: IgniteClient): void;
}
declare const IgntModule: (test: IgniteClient) => {
    module: {
        IbcCoreChannelV1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
