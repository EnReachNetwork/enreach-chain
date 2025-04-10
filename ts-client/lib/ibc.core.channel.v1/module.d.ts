import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { Timeout } from "./types/ibc/core/channel/v1/channel";
import { ErrorReceipt } from "./types/ibc/core/channel/v1/upgrade";
import { MsgChannelUpgradeAck } from "./types/ibc/core/channel/v1/tx";
import { MsgPruneAcknowledgements } from "./types/ibc/core/channel/v1/tx";
import { QueryUnreceivedPacketsResponse } from "./types/ibc/core/channel/v1/query";
import { QueryNextSequenceSendResponse } from "./types/ibc/core/channel/v1/query";
import { MsgTimeoutOnClose } from "./types/ibc/core/channel/v1/tx";
import { QueryPacketAcknowledgementsRequest } from "./types/ibc/core/channel/v1/query";
import { MsgChannelCloseInitResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelUpgradeOpenResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgUpdateParamsResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelCloseConfirmResponse } from "./types/ibc/core/channel/v1/tx";
import { QueryPacketAcknowledgementRequest } from "./types/ibc/core/channel/v1/query";
import { QueryPacketAcknowledgementsResponse } from "./types/ibc/core/channel/v1/query";
import { QueryNextSequenceReceiveRequest } from "./types/ibc/core/channel/v1/query";
import { Params } from "./types/ibc/core/channel/v1/channel";
import { MsgChannelOpenAckResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgAcknowledgementResponse } from "./types/ibc/core/channel/v1/tx";
import { Upgrade } from "./types/ibc/core/channel/v1/upgrade";
import { PacketSequence } from "./types/ibc/core/channel/v1/genesis";
import { MsgAcknowledgement } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelUpgradeCancel } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelOpenInit } from "./types/ibc/core/channel/v1/tx";
import { QueryChannelResponse } from "./types/ibc/core/channel/v1/query";
import { QueryUpgradeResponse } from "./types/ibc/core/channel/v1/query";
import { QueryChannelsRequest } from "./types/ibc/core/channel/v1/query";
import { QueryPacketReceiptResponse } from "./types/ibc/core/channel/v1/query";
import { QueryUnreceivedAcksResponse } from "./types/ibc/core/channel/v1/query";
import { GenesisState } from "./types/ibc/core/channel/v1/genesis";
import { MsgChannelOpenAck } from "./types/ibc/core/channel/v1/tx";
import { MsgRecvPacket } from "./types/ibc/core/channel/v1/tx";
import { Packet } from "./types/ibc/core/channel/v1/channel";
import { PacketState } from "./types/ibc/core/channel/v1/channel";
import { QueryNextSequenceReceiveResponse } from "./types/ibc/core/channel/v1/query";
import { MsgChannelOpenInitResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelUpgradeConfirmResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelUpgradeTimeoutResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgUpdateParams } from "./types/ibc/core/channel/v1/tx";
import { QueryChannelClientStateResponse } from "./types/ibc/core/channel/v1/query";
import { QueryChannelConsensusStateResponse } from "./types/ibc/core/channel/v1/query";
import { QueryPacketCommitmentResponse } from "./types/ibc/core/channel/v1/query";
import { QueryUnreceivedAcksRequest } from "./types/ibc/core/channel/v1/query";
import { Acknowledgement } from "./types/ibc/core/channel/v1/channel";
import { MsgChannelUpgradeInit } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelUpgradeTry } from "./types/ibc/core/channel/v1/tx";
import { PacketId } from "./types/ibc/core/channel/v1/channel";
import { QueryChannelClientStateRequest } from "./types/ibc/core/channel/v1/query";
import { QueryChannelConsensusStateRequest } from "./types/ibc/core/channel/v1/query";
import { MsgChannelOpenTry } from "./types/ibc/core/channel/v1/tx";
import { QueryUpgradeRequest } from "./types/ibc/core/channel/v1/query";
import { QueryPacketAcknowledgementResponse } from "./types/ibc/core/channel/v1/query";
import { QueryChannelParamsRequest } from "./types/ibc/core/channel/v1/query";
import { MsgChannelOpenTryResponse } from "./types/ibc/core/channel/v1/tx";
import { UpgradeFields } from "./types/ibc/core/channel/v1/upgrade";
import { MsgChannelUpgradeOpen } from "./types/ibc/core/channel/v1/tx";
import { Counterparty } from "./types/ibc/core/channel/v1/channel";
import { QueryChannelRequest } from "./types/ibc/core/channel/v1/query";
import { QueryPacketReceiptRequest } from "./types/ibc/core/channel/v1/query";
import { MsgChannelUpgradeCancelResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgPruneAcknowledgementsResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelOpenConfirm } from "./types/ibc/core/channel/v1/tx";
import { Channel } from "./types/ibc/core/channel/v1/channel";
import { QueryPacketCommitmentRequest } from "./types/ibc/core/channel/v1/query";
import { QueryNextSequenceSendRequest } from "./types/ibc/core/channel/v1/query";
import { MsgChannelUpgradeInitResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelUpgradeConfirm } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelUpgradeTimeout } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelCloseInit } from "./types/ibc/core/channel/v1/tx";
import { QueryChannelsResponse } from "./types/ibc/core/channel/v1/query";
import { QueryPacketCommitmentsResponse } from "./types/ibc/core/channel/v1/query";
import { MsgTimeoutResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelUpgradeTryResponse } from "./types/ibc/core/channel/v1/tx";
import { QueryUpgradeErrorResponse } from "./types/ibc/core/channel/v1/query";
import { MsgChannelOpenConfirmResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelCloseConfirm } from "./types/ibc/core/channel/v1/tx";
import { MsgTimeout } from "./types/ibc/core/channel/v1/tx";
import { QueryConnectionChannelsRequest } from "./types/ibc/core/channel/v1/query";
import { QueryConnectionChannelsResponse } from "./types/ibc/core/channel/v1/query";
import { QueryUpgradeErrorRequest } from "./types/ibc/core/channel/v1/query";
import { IdentifiedChannel } from "./types/ibc/core/channel/v1/channel";
import { MsgChannelUpgradeAckResponse } from "./types/ibc/core/channel/v1/tx";
import { QueryPacketCommitmentsRequest } from "./types/ibc/core/channel/v1/query";
import { QueryUnreceivedPacketsRequest } from "./types/ibc/core/channel/v1/query";
import { QueryChannelParamsResponse } from "./types/ibc/core/channel/v1/query";
import { MsgRecvPacketResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgTimeoutOnCloseResponse } from "./types/ibc/core/channel/v1/tx";
export { Timeout, ErrorReceipt, MsgChannelUpgradeAck, MsgPruneAcknowledgements, QueryUnreceivedPacketsResponse, QueryNextSequenceSendResponse, MsgTimeoutOnClose, QueryPacketAcknowledgementsRequest, MsgChannelCloseInitResponse, MsgChannelUpgradeOpenResponse, MsgUpdateParamsResponse, MsgChannelCloseConfirmResponse, QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementsResponse, QueryNextSequenceReceiveRequest, Params, MsgChannelOpenAckResponse, MsgAcknowledgementResponse, Upgrade, PacketSequence, MsgAcknowledgement, MsgChannelUpgradeCancel, MsgChannelOpenInit, QueryChannelResponse, QueryUpgradeResponse, QueryChannelsRequest, QueryPacketReceiptResponse, QueryUnreceivedAcksResponse, GenesisState, MsgChannelOpenAck, MsgRecvPacket, Packet, PacketState, QueryNextSequenceReceiveResponse, MsgChannelOpenInitResponse, MsgChannelUpgradeConfirmResponse, MsgChannelUpgradeTimeoutResponse, MsgUpdateParams, QueryChannelClientStateResponse, QueryChannelConsensusStateResponse, QueryPacketCommitmentResponse, QueryUnreceivedAcksRequest, Acknowledgement, MsgChannelUpgradeInit, MsgChannelUpgradeTry, PacketId, QueryChannelClientStateRequest, QueryChannelConsensusStateRequest, MsgChannelOpenTry, QueryUpgradeRequest, QueryPacketAcknowledgementResponse, QueryChannelParamsRequest, MsgChannelOpenTryResponse, UpgradeFields, MsgChannelUpgradeOpen, Counterparty, QueryChannelRequest, QueryPacketReceiptRequest, MsgChannelUpgradeCancelResponse, MsgPruneAcknowledgementsResponse, MsgChannelOpenConfirm, Channel, QueryPacketCommitmentRequest, QueryNextSequenceSendRequest, MsgChannelUpgradeInitResponse, MsgChannelUpgradeConfirm, MsgChannelUpgradeTimeout, MsgChannelCloseInit, QueryChannelsResponse, QueryPacketCommitmentsResponse, MsgTimeoutResponse, MsgChannelUpgradeTryResponse, QueryUpgradeErrorResponse, MsgChannelOpenConfirmResponse, MsgChannelCloseConfirm, MsgTimeout, QueryConnectionChannelsRequest, QueryConnectionChannelsResponse, QueryUpgradeErrorRequest, IdentifiedChannel, MsgChannelUpgradeAckResponse, QueryPacketCommitmentsRequest, QueryUnreceivedPacketsRequest, QueryChannelParamsResponse, MsgRecvPacketResponse, MsgTimeoutOnCloseResponse };
type sendTimeoutParams = {
    value: Timeout;
    fee?: StdFee;
    memo?: string;
};
type sendErrorReceiptParams = {
    value: ErrorReceipt;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelUpgradeAckParams = {
    value: MsgChannelUpgradeAck;
    fee?: StdFee;
    memo?: string;
};
type sendMsgPruneAcknowledgementsParams = {
    value: MsgPruneAcknowledgements;
    fee?: StdFee;
    memo?: string;
};
type sendQueryUnreceivedPacketsResponseParams = {
    value: QueryUnreceivedPacketsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryNextSequenceSendResponseParams = {
    value: QueryNextSequenceSendResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgTimeoutOnCloseParams = {
    value: MsgTimeoutOnClose;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPacketAcknowledgementsRequestParams = {
    value: QueryPacketAcknowledgementsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelCloseInitResponseParams = {
    value: MsgChannelCloseInitResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelUpgradeOpenResponseParams = {
    value: MsgChannelUpgradeOpenResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelCloseConfirmResponseParams = {
    value: MsgChannelCloseConfirmResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPacketAcknowledgementRequestParams = {
    value: QueryPacketAcknowledgementRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPacketAcknowledgementsResponseParams = {
    value: QueryPacketAcknowledgementsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryNextSequenceReceiveRequestParams = {
    value: QueryNextSequenceReceiveRequest;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelOpenAckResponseParams = {
    value: MsgChannelOpenAckResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgAcknowledgementResponseParams = {
    value: MsgAcknowledgementResponse;
    fee?: StdFee;
    memo?: string;
};
type sendUpgradeParams = {
    value: Upgrade;
    fee?: StdFee;
    memo?: string;
};
type sendPacketSequenceParams = {
    value: PacketSequence;
    fee?: StdFee;
    memo?: string;
};
type sendMsgAcknowledgementParams = {
    value: MsgAcknowledgement;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelUpgradeCancelParams = {
    value: MsgChannelUpgradeCancel;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelOpenInitParams = {
    value: MsgChannelOpenInit;
    fee?: StdFee;
    memo?: string;
};
type sendQueryChannelResponseParams = {
    value: QueryChannelResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryUpgradeResponseParams = {
    value: QueryUpgradeResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryChannelsRequestParams = {
    value: QueryChannelsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPacketReceiptResponseParams = {
    value: QueryPacketReceiptResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryUnreceivedAcksResponseParams = {
    value: QueryUnreceivedAcksResponse;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelOpenAckParams = {
    value: MsgChannelOpenAck;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRecvPacketParams = {
    value: MsgRecvPacket;
    fee?: StdFee;
    memo?: string;
};
type sendPacketParams = {
    value: Packet;
    fee?: StdFee;
    memo?: string;
};
type sendPacketStateParams = {
    value: PacketState;
    fee?: StdFee;
    memo?: string;
};
type sendQueryNextSequenceReceiveResponseParams = {
    value: QueryNextSequenceReceiveResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelOpenInitResponseParams = {
    value: MsgChannelOpenInitResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelUpgradeConfirmResponseParams = {
    value: MsgChannelUpgradeConfirmResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelUpgradeTimeoutResponseParams = {
    value: MsgChannelUpgradeTimeoutResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendQueryChannelClientStateResponseParams = {
    value: QueryChannelClientStateResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryChannelConsensusStateResponseParams = {
    value: QueryChannelConsensusStateResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPacketCommitmentResponseParams = {
    value: QueryPacketCommitmentResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryUnreceivedAcksRequestParams = {
    value: QueryUnreceivedAcksRequest;
    fee?: StdFee;
    memo?: string;
};
type sendAcknowledgementParams = {
    value: Acknowledgement;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelUpgradeInitParams = {
    value: MsgChannelUpgradeInit;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelUpgradeTryParams = {
    value: MsgChannelUpgradeTry;
    fee?: StdFee;
    memo?: string;
};
type sendPacketIdParams = {
    value: PacketId;
    fee?: StdFee;
    memo?: string;
};
type sendQueryChannelClientStateRequestParams = {
    value: QueryChannelClientStateRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryChannelConsensusStateRequestParams = {
    value: QueryChannelConsensusStateRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelOpenTryParams = {
    value: MsgChannelOpenTry;
    fee?: StdFee;
    memo?: string;
};
type sendQueryUpgradeRequestParams = {
    value: QueryUpgradeRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPacketAcknowledgementResponseParams = {
    value: QueryPacketAcknowledgementResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryChannelParamsRequestParams = {
    value: QueryChannelParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelOpenTryResponseParams = {
    value: MsgChannelOpenTryResponse;
    fee?: StdFee;
    memo?: string;
};
type sendUpgradeFieldsParams = {
    value: UpgradeFields;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelUpgradeOpenParams = {
    value: MsgChannelUpgradeOpen;
    fee?: StdFee;
    memo?: string;
};
type sendCounterpartyParams = {
    value: Counterparty;
    fee?: StdFee;
    memo?: string;
};
type sendQueryChannelRequestParams = {
    value: QueryChannelRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPacketReceiptRequestParams = {
    value: QueryPacketReceiptRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelUpgradeCancelResponseParams = {
    value: MsgChannelUpgradeCancelResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgPruneAcknowledgementsResponseParams = {
    value: MsgPruneAcknowledgementsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelOpenConfirmParams = {
    value: MsgChannelOpenConfirm;
    fee?: StdFee;
    memo?: string;
};
type sendChannelParams = {
    value: Channel;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPacketCommitmentRequestParams = {
    value: QueryPacketCommitmentRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryNextSequenceSendRequestParams = {
    value: QueryNextSequenceSendRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelUpgradeInitResponseParams = {
    value: MsgChannelUpgradeInitResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelUpgradeConfirmParams = {
    value: MsgChannelUpgradeConfirm;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelUpgradeTimeoutParams = {
    value: MsgChannelUpgradeTimeout;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelCloseInitParams = {
    value: MsgChannelCloseInit;
    fee?: StdFee;
    memo?: string;
};
type sendQueryChannelsResponseParams = {
    value: QueryChannelsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPacketCommitmentsResponseParams = {
    value: QueryPacketCommitmentsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgTimeoutResponseParams = {
    value: MsgTimeoutResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelUpgradeTryResponseParams = {
    value: MsgChannelUpgradeTryResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryUpgradeErrorResponseParams = {
    value: QueryUpgradeErrorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelOpenConfirmResponseParams = {
    value: MsgChannelOpenConfirmResponse;
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
type sendQueryConnectionChannelsRequestParams = {
    value: QueryConnectionChannelsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryConnectionChannelsResponseParams = {
    value: QueryConnectionChannelsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryUpgradeErrorRequestParams = {
    value: QueryUpgradeErrorRequest;
    fee?: StdFee;
    memo?: string;
};
type sendIdentifiedChannelParams = {
    value: IdentifiedChannel;
    fee?: StdFee;
    memo?: string;
};
type sendMsgChannelUpgradeAckResponseParams = {
    value: MsgChannelUpgradeAckResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryPacketCommitmentsRequestParams = {
    value: QueryPacketCommitmentsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryUnreceivedPacketsRequestParams = {
    value: QueryUnreceivedPacketsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryChannelParamsResponseParams = {
    value: QueryChannelParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRecvPacketResponseParams = {
    value: MsgRecvPacketResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgTimeoutOnCloseResponseParams = {
    value: MsgTimeoutOnCloseResponse;
    fee?: StdFee;
    memo?: string;
};
type timeoutParams = {
    value: Timeout;
};
type errorReceiptParams = {
    value: ErrorReceipt;
};
type msgChannelUpgradeAckParams = {
    value: MsgChannelUpgradeAck;
};
type msgPruneAcknowledgementsParams = {
    value: MsgPruneAcknowledgements;
};
type queryUnreceivedPacketsResponseParams = {
    value: QueryUnreceivedPacketsResponse;
};
type queryNextSequenceSendResponseParams = {
    value: QueryNextSequenceSendResponse;
};
type msgTimeoutOnCloseParams = {
    value: MsgTimeoutOnClose;
};
type queryPacketAcknowledgementsRequestParams = {
    value: QueryPacketAcknowledgementsRequest;
};
type msgChannelCloseInitResponseParams = {
    value: MsgChannelCloseInitResponse;
};
type msgChannelUpgradeOpenResponseParams = {
    value: MsgChannelUpgradeOpenResponse;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type msgChannelCloseConfirmResponseParams = {
    value: MsgChannelCloseConfirmResponse;
};
type queryPacketAcknowledgementRequestParams = {
    value: QueryPacketAcknowledgementRequest;
};
type queryPacketAcknowledgementsResponseParams = {
    value: QueryPacketAcknowledgementsResponse;
};
type queryNextSequenceReceiveRequestParams = {
    value: QueryNextSequenceReceiveRequest;
};
type paramsParams = {
    value: Params;
};
type msgChannelOpenAckResponseParams = {
    value: MsgChannelOpenAckResponse;
};
type msgAcknowledgementResponseParams = {
    value: MsgAcknowledgementResponse;
};
type upgradeParams = {
    value: Upgrade;
};
type packetSequenceParams = {
    value: PacketSequence;
};
type msgAcknowledgementParams = {
    value: MsgAcknowledgement;
};
type msgChannelUpgradeCancelParams = {
    value: MsgChannelUpgradeCancel;
};
type msgChannelOpenInitParams = {
    value: MsgChannelOpenInit;
};
type queryChannelResponseParams = {
    value: QueryChannelResponse;
};
type queryUpgradeResponseParams = {
    value: QueryUpgradeResponse;
};
type queryChannelsRequestParams = {
    value: QueryChannelsRequest;
};
type queryPacketReceiptResponseParams = {
    value: QueryPacketReceiptResponse;
};
type queryUnreceivedAcksResponseParams = {
    value: QueryUnreceivedAcksResponse;
};
type genesisStateParams = {
    value: GenesisState;
};
type msgChannelOpenAckParams = {
    value: MsgChannelOpenAck;
};
type msgRecvPacketParams = {
    value: MsgRecvPacket;
};
type packetParams = {
    value: Packet;
};
type packetStateParams = {
    value: PacketState;
};
type queryNextSequenceReceiveResponseParams = {
    value: QueryNextSequenceReceiveResponse;
};
type msgChannelOpenInitResponseParams = {
    value: MsgChannelOpenInitResponse;
};
type msgChannelUpgradeConfirmResponseParams = {
    value: MsgChannelUpgradeConfirmResponse;
};
type msgChannelUpgradeTimeoutResponseParams = {
    value: MsgChannelUpgradeTimeoutResponse;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type queryChannelClientStateResponseParams = {
    value: QueryChannelClientStateResponse;
};
type queryChannelConsensusStateResponseParams = {
    value: QueryChannelConsensusStateResponse;
};
type queryPacketCommitmentResponseParams = {
    value: QueryPacketCommitmentResponse;
};
type queryUnreceivedAcksRequestParams = {
    value: QueryUnreceivedAcksRequest;
};
type acknowledgementParams = {
    value: Acknowledgement;
};
type msgChannelUpgradeInitParams = {
    value: MsgChannelUpgradeInit;
};
type msgChannelUpgradeTryParams = {
    value: MsgChannelUpgradeTry;
};
type packetIdParams = {
    value: PacketId;
};
type queryChannelClientStateRequestParams = {
    value: QueryChannelClientStateRequest;
};
type queryChannelConsensusStateRequestParams = {
    value: QueryChannelConsensusStateRequest;
};
type msgChannelOpenTryParams = {
    value: MsgChannelOpenTry;
};
type queryUpgradeRequestParams = {
    value: QueryUpgradeRequest;
};
type queryPacketAcknowledgementResponseParams = {
    value: QueryPacketAcknowledgementResponse;
};
type queryChannelParamsRequestParams = {
    value: QueryChannelParamsRequest;
};
type msgChannelOpenTryResponseParams = {
    value: MsgChannelOpenTryResponse;
};
type upgradeFieldsParams = {
    value: UpgradeFields;
};
type msgChannelUpgradeOpenParams = {
    value: MsgChannelUpgradeOpen;
};
type counterpartyParams = {
    value: Counterparty;
};
type queryChannelRequestParams = {
    value: QueryChannelRequest;
};
type queryPacketReceiptRequestParams = {
    value: QueryPacketReceiptRequest;
};
type msgChannelUpgradeCancelResponseParams = {
    value: MsgChannelUpgradeCancelResponse;
};
type msgPruneAcknowledgementsResponseParams = {
    value: MsgPruneAcknowledgementsResponse;
};
type msgChannelOpenConfirmParams = {
    value: MsgChannelOpenConfirm;
};
type channelParams = {
    value: Channel;
};
type queryPacketCommitmentRequestParams = {
    value: QueryPacketCommitmentRequest;
};
type queryNextSequenceSendRequestParams = {
    value: QueryNextSequenceSendRequest;
};
type msgChannelUpgradeInitResponseParams = {
    value: MsgChannelUpgradeInitResponse;
};
type msgChannelUpgradeConfirmParams = {
    value: MsgChannelUpgradeConfirm;
};
type msgChannelUpgradeTimeoutParams = {
    value: MsgChannelUpgradeTimeout;
};
type msgChannelCloseInitParams = {
    value: MsgChannelCloseInit;
};
type queryChannelsResponseParams = {
    value: QueryChannelsResponse;
};
type queryPacketCommitmentsResponseParams = {
    value: QueryPacketCommitmentsResponse;
};
type msgTimeoutResponseParams = {
    value: MsgTimeoutResponse;
};
type msgChannelUpgradeTryResponseParams = {
    value: MsgChannelUpgradeTryResponse;
};
type queryUpgradeErrorResponseParams = {
    value: QueryUpgradeErrorResponse;
};
type msgChannelOpenConfirmResponseParams = {
    value: MsgChannelOpenConfirmResponse;
};
type msgChannelCloseConfirmParams = {
    value: MsgChannelCloseConfirm;
};
type msgTimeoutParams = {
    value: MsgTimeout;
};
type queryConnectionChannelsRequestParams = {
    value: QueryConnectionChannelsRequest;
};
type queryConnectionChannelsResponseParams = {
    value: QueryConnectionChannelsResponse;
};
type queryUpgradeErrorRequestParams = {
    value: QueryUpgradeErrorRequest;
};
type identifiedChannelParams = {
    value: IdentifiedChannel;
};
type msgChannelUpgradeAckResponseParams = {
    value: MsgChannelUpgradeAckResponse;
};
type queryPacketCommitmentsRequestParams = {
    value: QueryPacketCommitmentsRequest;
};
type queryUnreceivedPacketsRequestParams = {
    value: QueryUnreceivedPacketsRequest;
};
type queryChannelParamsResponseParams = {
    value: QueryChannelParamsResponse;
};
type msgRecvPacketResponseParams = {
    value: MsgRecvPacketResponse;
};
type msgTimeoutOnCloseResponseParams = {
    value: MsgTimeoutOnCloseResponse;
};
export declare const registry: any;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendTimeout({ value, fee, memo }: sendTimeoutParams): Promise<DeliverTxResponse>;
    sendErrorReceipt({ value, fee, memo }: sendErrorReceiptParams): Promise<DeliverTxResponse>;
    sendMsgChannelUpgradeAck({ value, fee, memo }: sendMsgChannelUpgradeAckParams): Promise<DeliverTxResponse>;
    sendMsgPruneAcknowledgements({ value, fee, memo }: sendMsgPruneAcknowledgementsParams): Promise<DeliverTxResponse>;
    sendQueryUnreceivedPacketsResponse({ value, fee, memo }: sendQueryUnreceivedPacketsResponseParams): Promise<DeliverTxResponse>;
    sendQueryNextSequenceSendResponse({ value, fee, memo }: sendQueryNextSequenceSendResponseParams): Promise<DeliverTxResponse>;
    sendMsgTimeoutOnClose({ value, fee, memo }: sendMsgTimeoutOnCloseParams): Promise<DeliverTxResponse>;
    sendQueryPacketAcknowledgementsRequest({ value, fee, memo }: sendQueryPacketAcknowledgementsRequestParams): Promise<DeliverTxResponse>;
    sendMsgChannelCloseInitResponse({ value, fee, memo }: sendMsgChannelCloseInitResponseParams): Promise<DeliverTxResponse>;
    sendMsgChannelUpgradeOpenResponse({ value, fee, memo }: sendMsgChannelUpgradeOpenResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendMsgChannelCloseConfirmResponse({ value, fee, memo }: sendMsgChannelCloseConfirmResponseParams): Promise<DeliverTxResponse>;
    sendQueryPacketAcknowledgementRequest({ value, fee, memo }: sendQueryPacketAcknowledgementRequestParams): Promise<DeliverTxResponse>;
    sendQueryPacketAcknowledgementsResponse({ value, fee, memo }: sendQueryPacketAcknowledgementsResponseParams): Promise<DeliverTxResponse>;
    sendQueryNextSequenceReceiveRequest({ value, fee, memo }: sendQueryNextSequenceReceiveRequestParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendMsgChannelOpenAckResponse({ value, fee, memo }: sendMsgChannelOpenAckResponseParams): Promise<DeliverTxResponse>;
    sendMsgAcknowledgementResponse({ value, fee, memo }: sendMsgAcknowledgementResponseParams): Promise<DeliverTxResponse>;
    sendUpgrade({ value, fee, memo }: sendUpgradeParams): Promise<DeliverTxResponse>;
    sendPacketSequence({ value, fee, memo }: sendPacketSequenceParams): Promise<DeliverTxResponse>;
    sendMsgAcknowledgement({ value, fee, memo }: sendMsgAcknowledgementParams): Promise<DeliverTxResponse>;
    sendMsgChannelUpgradeCancel({ value, fee, memo }: sendMsgChannelUpgradeCancelParams): Promise<DeliverTxResponse>;
    sendMsgChannelOpenInit({ value, fee, memo }: sendMsgChannelOpenInitParams): Promise<DeliverTxResponse>;
    sendQueryChannelResponse({ value, fee, memo }: sendQueryChannelResponseParams): Promise<DeliverTxResponse>;
    sendQueryUpgradeResponse({ value, fee, memo }: sendQueryUpgradeResponseParams): Promise<DeliverTxResponse>;
    sendQueryChannelsRequest({ value, fee, memo }: sendQueryChannelsRequestParams): Promise<DeliverTxResponse>;
    sendQueryPacketReceiptResponse({ value, fee, memo }: sendQueryPacketReceiptResponseParams): Promise<DeliverTxResponse>;
    sendQueryUnreceivedAcksResponse({ value, fee, memo }: sendQueryUnreceivedAcksResponseParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendMsgChannelOpenAck({ value, fee, memo }: sendMsgChannelOpenAckParams): Promise<DeliverTxResponse>;
    sendMsgRecvPacket({ value, fee, memo }: sendMsgRecvPacketParams): Promise<DeliverTxResponse>;
    sendPacket({ value, fee, memo }: sendPacketParams): Promise<DeliverTxResponse>;
    sendPacketState({ value, fee, memo }: sendPacketStateParams): Promise<DeliverTxResponse>;
    sendQueryNextSequenceReceiveResponse({ value, fee, memo }: sendQueryNextSequenceReceiveResponseParams): Promise<DeliverTxResponse>;
    sendMsgChannelOpenInitResponse({ value, fee, memo }: sendMsgChannelOpenInitResponseParams): Promise<DeliverTxResponse>;
    sendMsgChannelUpgradeConfirmResponse({ value, fee, memo }: sendMsgChannelUpgradeConfirmResponseParams): Promise<DeliverTxResponse>;
    sendMsgChannelUpgradeTimeoutResponse({ value, fee, memo }: sendMsgChannelUpgradeTimeoutResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendQueryChannelClientStateResponse({ value, fee, memo }: sendQueryChannelClientStateResponseParams): Promise<DeliverTxResponse>;
    sendQueryChannelConsensusStateResponse({ value, fee, memo }: sendQueryChannelConsensusStateResponseParams): Promise<DeliverTxResponse>;
    sendQueryPacketCommitmentResponse({ value, fee, memo }: sendQueryPacketCommitmentResponseParams): Promise<DeliverTxResponse>;
    sendQueryUnreceivedAcksRequest({ value, fee, memo }: sendQueryUnreceivedAcksRequestParams): Promise<DeliverTxResponse>;
    sendAcknowledgement({ value, fee, memo }: sendAcknowledgementParams): Promise<DeliverTxResponse>;
    sendMsgChannelUpgradeInit({ value, fee, memo }: sendMsgChannelUpgradeInitParams): Promise<DeliverTxResponse>;
    sendMsgChannelUpgradeTry({ value, fee, memo }: sendMsgChannelUpgradeTryParams): Promise<DeliverTxResponse>;
    sendPacketId({ value, fee, memo }: sendPacketIdParams): Promise<DeliverTxResponse>;
    sendQueryChannelClientStateRequest({ value, fee, memo }: sendQueryChannelClientStateRequestParams): Promise<DeliverTxResponse>;
    sendQueryChannelConsensusStateRequest({ value, fee, memo }: sendQueryChannelConsensusStateRequestParams): Promise<DeliverTxResponse>;
    sendMsgChannelOpenTry({ value, fee, memo }: sendMsgChannelOpenTryParams): Promise<DeliverTxResponse>;
    sendQueryUpgradeRequest({ value, fee, memo }: sendQueryUpgradeRequestParams): Promise<DeliverTxResponse>;
    sendQueryPacketAcknowledgementResponse({ value, fee, memo }: sendQueryPacketAcknowledgementResponseParams): Promise<DeliverTxResponse>;
    sendQueryChannelParamsRequest({ value, fee, memo }: sendQueryChannelParamsRequestParams): Promise<DeliverTxResponse>;
    sendMsgChannelOpenTryResponse({ value, fee, memo }: sendMsgChannelOpenTryResponseParams): Promise<DeliverTxResponse>;
    sendUpgradeFields({ value, fee, memo }: sendUpgradeFieldsParams): Promise<DeliverTxResponse>;
    sendMsgChannelUpgradeOpen({ value, fee, memo }: sendMsgChannelUpgradeOpenParams): Promise<DeliverTxResponse>;
    sendCounterparty({ value, fee, memo }: sendCounterpartyParams): Promise<DeliverTxResponse>;
    sendQueryChannelRequest({ value, fee, memo }: sendQueryChannelRequestParams): Promise<DeliverTxResponse>;
    sendQueryPacketReceiptRequest({ value, fee, memo }: sendQueryPacketReceiptRequestParams): Promise<DeliverTxResponse>;
    sendMsgChannelUpgradeCancelResponse({ value, fee, memo }: sendMsgChannelUpgradeCancelResponseParams): Promise<DeliverTxResponse>;
    sendMsgPruneAcknowledgementsResponse({ value, fee, memo }: sendMsgPruneAcknowledgementsResponseParams): Promise<DeliverTxResponse>;
    sendMsgChannelOpenConfirm({ value, fee, memo }: sendMsgChannelOpenConfirmParams): Promise<DeliverTxResponse>;
    sendChannel({ value, fee, memo }: sendChannelParams): Promise<DeliverTxResponse>;
    sendQueryPacketCommitmentRequest({ value, fee, memo }: sendQueryPacketCommitmentRequestParams): Promise<DeliverTxResponse>;
    sendQueryNextSequenceSendRequest({ value, fee, memo }: sendQueryNextSequenceSendRequestParams): Promise<DeliverTxResponse>;
    sendMsgChannelUpgradeInitResponse({ value, fee, memo }: sendMsgChannelUpgradeInitResponseParams): Promise<DeliverTxResponse>;
    sendMsgChannelUpgradeConfirm({ value, fee, memo }: sendMsgChannelUpgradeConfirmParams): Promise<DeliverTxResponse>;
    sendMsgChannelUpgradeTimeout({ value, fee, memo }: sendMsgChannelUpgradeTimeoutParams): Promise<DeliverTxResponse>;
    sendMsgChannelCloseInit({ value, fee, memo }: sendMsgChannelCloseInitParams): Promise<DeliverTxResponse>;
    sendQueryChannelsResponse({ value, fee, memo }: sendQueryChannelsResponseParams): Promise<DeliverTxResponse>;
    sendQueryPacketCommitmentsResponse({ value, fee, memo }: sendQueryPacketCommitmentsResponseParams): Promise<DeliverTxResponse>;
    sendMsgTimeoutResponse({ value, fee, memo }: sendMsgTimeoutResponseParams): Promise<DeliverTxResponse>;
    sendMsgChannelUpgradeTryResponse({ value, fee, memo }: sendMsgChannelUpgradeTryResponseParams): Promise<DeliverTxResponse>;
    sendQueryUpgradeErrorResponse({ value, fee, memo }: sendQueryUpgradeErrorResponseParams): Promise<DeliverTxResponse>;
    sendMsgChannelOpenConfirmResponse({ value, fee, memo }: sendMsgChannelOpenConfirmResponseParams): Promise<DeliverTxResponse>;
    sendMsgChannelCloseConfirm({ value, fee, memo }: sendMsgChannelCloseConfirmParams): Promise<DeliverTxResponse>;
    sendMsgTimeout({ value, fee, memo }: sendMsgTimeoutParams): Promise<DeliverTxResponse>;
    sendQueryConnectionChannelsRequest({ value, fee, memo }: sendQueryConnectionChannelsRequestParams): Promise<DeliverTxResponse>;
    sendQueryConnectionChannelsResponse({ value, fee, memo }: sendQueryConnectionChannelsResponseParams): Promise<DeliverTxResponse>;
    sendQueryUpgradeErrorRequest({ value, fee, memo }: sendQueryUpgradeErrorRequestParams): Promise<DeliverTxResponse>;
    sendIdentifiedChannel({ value, fee, memo }: sendIdentifiedChannelParams): Promise<DeliverTxResponse>;
    sendMsgChannelUpgradeAckResponse({ value, fee, memo }: sendMsgChannelUpgradeAckResponseParams): Promise<DeliverTxResponse>;
    sendQueryPacketCommitmentsRequest({ value, fee, memo }: sendQueryPacketCommitmentsRequestParams): Promise<DeliverTxResponse>;
    sendQueryUnreceivedPacketsRequest({ value, fee, memo }: sendQueryUnreceivedPacketsRequestParams): Promise<DeliverTxResponse>;
    sendQueryChannelParamsResponse({ value, fee, memo }: sendQueryChannelParamsResponseParams): Promise<DeliverTxResponse>;
    sendMsgRecvPacketResponse({ value, fee, memo }: sendMsgRecvPacketResponseParams): Promise<DeliverTxResponse>;
    sendMsgTimeoutOnCloseResponse({ value, fee, memo }: sendMsgTimeoutOnCloseResponseParams): Promise<DeliverTxResponse>;
    timeout({ value }: timeoutParams): EncodeObject;
    errorReceipt({ value }: errorReceiptParams): EncodeObject;
    msgChannelUpgradeAck({ value }: msgChannelUpgradeAckParams): EncodeObject;
    msgPruneAcknowledgements({ value }: msgPruneAcknowledgementsParams): EncodeObject;
    queryUnreceivedPacketsResponse({ value }: queryUnreceivedPacketsResponseParams): EncodeObject;
    queryNextSequenceSendResponse({ value }: queryNextSequenceSendResponseParams): EncodeObject;
    msgTimeoutOnClose({ value }: msgTimeoutOnCloseParams): EncodeObject;
    queryPacketAcknowledgementsRequest({ value }: queryPacketAcknowledgementsRequestParams): EncodeObject;
    msgChannelCloseInitResponse({ value }: msgChannelCloseInitResponseParams): EncodeObject;
    msgChannelUpgradeOpenResponse({ value }: msgChannelUpgradeOpenResponseParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    msgChannelCloseConfirmResponse({ value }: msgChannelCloseConfirmResponseParams): EncodeObject;
    queryPacketAcknowledgementRequest({ value }: queryPacketAcknowledgementRequestParams): EncodeObject;
    queryPacketAcknowledgementsResponse({ value }: queryPacketAcknowledgementsResponseParams): EncodeObject;
    queryNextSequenceReceiveRequest({ value }: queryNextSequenceReceiveRequestParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    msgChannelOpenAckResponse({ value }: msgChannelOpenAckResponseParams): EncodeObject;
    msgAcknowledgementResponse({ value }: msgAcknowledgementResponseParams): EncodeObject;
    upgrade({ value }: upgradeParams): EncodeObject;
    packetSequence({ value }: packetSequenceParams): EncodeObject;
    msgAcknowledgement({ value }: msgAcknowledgementParams): EncodeObject;
    msgChannelUpgradeCancel({ value }: msgChannelUpgradeCancelParams): EncodeObject;
    msgChannelOpenInit({ value }: msgChannelOpenInitParams): EncodeObject;
    queryChannelResponse({ value }: queryChannelResponseParams): EncodeObject;
    queryUpgradeResponse({ value }: queryUpgradeResponseParams): EncodeObject;
    queryChannelsRequest({ value }: queryChannelsRequestParams): EncodeObject;
    queryPacketReceiptResponse({ value }: queryPacketReceiptResponseParams): EncodeObject;
    queryUnreceivedAcksResponse({ value }: queryUnreceivedAcksResponseParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    msgChannelOpenAck({ value }: msgChannelOpenAckParams): EncodeObject;
    msgRecvPacket({ value }: msgRecvPacketParams): EncodeObject;
    packet({ value }: packetParams): EncodeObject;
    packetState({ value }: packetStateParams): EncodeObject;
    queryNextSequenceReceiveResponse({ value }: queryNextSequenceReceiveResponseParams): EncodeObject;
    msgChannelOpenInitResponse({ value }: msgChannelOpenInitResponseParams): EncodeObject;
    msgChannelUpgradeConfirmResponse({ value }: msgChannelUpgradeConfirmResponseParams): EncodeObject;
    msgChannelUpgradeTimeoutResponse({ value }: msgChannelUpgradeTimeoutResponseParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    queryChannelClientStateResponse({ value }: queryChannelClientStateResponseParams): EncodeObject;
    queryChannelConsensusStateResponse({ value }: queryChannelConsensusStateResponseParams): EncodeObject;
    queryPacketCommitmentResponse({ value }: queryPacketCommitmentResponseParams): EncodeObject;
    queryUnreceivedAcksRequest({ value }: queryUnreceivedAcksRequestParams): EncodeObject;
    acknowledgement({ value }: acknowledgementParams): EncodeObject;
    msgChannelUpgradeInit({ value }: msgChannelUpgradeInitParams): EncodeObject;
    msgChannelUpgradeTry({ value }: msgChannelUpgradeTryParams): EncodeObject;
    packetId({ value }: packetIdParams): EncodeObject;
    queryChannelClientStateRequest({ value }: queryChannelClientStateRequestParams): EncodeObject;
    queryChannelConsensusStateRequest({ value }: queryChannelConsensusStateRequestParams): EncodeObject;
    msgChannelOpenTry({ value }: msgChannelOpenTryParams): EncodeObject;
    queryUpgradeRequest({ value }: queryUpgradeRequestParams): EncodeObject;
    queryPacketAcknowledgementResponse({ value }: queryPacketAcknowledgementResponseParams): EncodeObject;
    queryChannelParamsRequest({ value }: queryChannelParamsRequestParams): EncodeObject;
    msgChannelOpenTryResponse({ value }: msgChannelOpenTryResponseParams): EncodeObject;
    upgradeFields({ value }: upgradeFieldsParams): EncodeObject;
    msgChannelUpgradeOpen({ value }: msgChannelUpgradeOpenParams): EncodeObject;
    counterparty({ value }: counterpartyParams): EncodeObject;
    queryChannelRequest({ value }: queryChannelRequestParams): EncodeObject;
    queryPacketReceiptRequest({ value }: queryPacketReceiptRequestParams): EncodeObject;
    msgChannelUpgradeCancelResponse({ value }: msgChannelUpgradeCancelResponseParams): EncodeObject;
    msgPruneAcknowledgementsResponse({ value }: msgPruneAcknowledgementsResponseParams): EncodeObject;
    msgChannelOpenConfirm({ value }: msgChannelOpenConfirmParams): EncodeObject;
    channel({ value }: channelParams): EncodeObject;
    queryPacketCommitmentRequest({ value }: queryPacketCommitmentRequestParams): EncodeObject;
    queryNextSequenceSendRequest({ value }: queryNextSequenceSendRequestParams): EncodeObject;
    msgChannelUpgradeInitResponse({ value }: msgChannelUpgradeInitResponseParams): EncodeObject;
    msgChannelUpgradeConfirm({ value }: msgChannelUpgradeConfirmParams): EncodeObject;
    msgChannelUpgradeTimeout({ value }: msgChannelUpgradeTimeoutParams): EncodeObject;
    msgChannelCloseInit({ value }: msgChannelCloseInitParams): EncodeObject;
    queryChannelsResponse({ value }: queryChannelsResponseParams): EncodeObject;
    queryPacketCommitmentsResponse({ value }: queryPacketCommitmentsResponseParams): EncodeObject;
    msgTimeoutResponse({ value }: msgTimeoutResponseParams): EncodeObject;
    msgChannelUpgradeTryResponse({ value }: msgChannelUpgradeTryResponseParams): EncodeObject;
    queryUpgradeErrorResponse({ value }: queryUpgradeErrorResponseParams): EncodeObject;
    msgChannelOpenConfirmResponse({ value }: msgChannelOpenConfirmResponseParams): EncodeObject;
    msgChannelCloseConfirm({ value }: msgChannelCloseConfirmParams): EncodeObject;
    msgTimeout({ value }: msgTimeoutParams): EncodeObject;
    queryConnectionChannelsRequest({ value }: queryConnectionChannelsRequestParams): EncodeObject;
    queryConnectionChannelsResponse({ value }: queryConnectionChannelsResponseParams): EncodeObject;
    queryUpgradeErrorRequest({ value }: queryUpgradeErrorRequestParams): EncodeObject;
    identifiedChannel({ value }: identifiedChannelParams): EncodeObject;
    msgChannelUpgradeAckResponse({ value }: msgChannelUpgradeAckResponseParams): EncodeObject;
    queryPacketCommitmentsRequest({ value }: queryPacketCommitmentsRequestParams): EncodeObject;
    queryUnreceivedPacketsRequest({ value }: queryUnreceivedPacketsRequestParams): EncodeObject;
    queryChannelParamsResponse({ value }: queryChannelParamsResponseParams): EncodeObject;
    msgRecvPacketResponse({ value }: msgRecvPacketResponseParams): EncodeObject;
    msgTimeoutOnCloseResponse({ value }: msgTimeoutOnCloseResponseParams): EncodeObject;
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
