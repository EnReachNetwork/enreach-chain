import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgChannelUpgradeTimeout } from "./types/ibc/core/channel/v1/tx";
import { Packet } from "./types/ibc/core/channel/v1/channel";
import { QueryPacketAcknowledgementsResponse } from "./types/ibc/core/channel/v1/query";
import { MsgChannelCloseConfirm } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelCloseConfirmResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelUpgradeConfirm } from "./types/ibc/core/channel/v1/tx";
import { Upgrade } from "./types/ibc/core/channel/v1/upgrade";
import { MsgChannelOpenInit } from "./types/ibc/core/channel/v1/tx";
import { MsgRecvPacketResponse } from "./types/ibc/core/channel/v1/tx";
import { QueryUnreceivedPacketsRequest } from "./types/ibc/core/channel/v1/query";
import { QueryChannelClientStateRequest } from "./types/ibc/core/channel/v1/query";
import { QueryUpgradeErrorResponse } from "./types/ibc/core/channel/v1/query";
import { Counterparty } from "./types/ibc/core/channel/v1/channel";
import { PacketId } from "./types/ibc/core/channel/v1/channel";
import { QueryChannelResponse } from "./types/ibc/core/channel/v1/query";
import { MsgChannelUpgradeOpenResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgPruneAcknowledgements } from "./types/ibc/core/channel/v1/tx";
import { PacketState } from "./types/ibc/core/channel/v1/channel";
import { ErrorReceipt } from "./types/ibc/core/channel/v1/upgrade";
import { MsgChannelOpenConfirmResponse } from "./types/ibc/core/channel/v1/tx";
import { QueryChannelRequest } from "./types/ibc/core/channel/v1/query";
import { QueryChannelParamsRequest } from "./types/ibc/core/channel/v1/query";
import { QueryPacketCommitmentRequest } from "./types/ibc/core/channel/v1/query";
import { QueryChannelParamsResponse } from "./types/ibc/core/channel/v1/query";
import { MsgChannelUpgradeCancelResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelUpgradeConfirmResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelUpgradeCancel } from "./types/ibc/core/channel/v1/tx";
import { IdentifiedChannel } from "./types/ibc/core/channel/v1/channel";
import { QueryConnectionChannelsRequest } from "./types/ibc/core/channel/v1/query";
import { MsgChannelOpenAckResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelUpgradeInitResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelUpgradeAck } from "./types/ibc/core/channel/v1/tx";
import { QueryPacketAcknowledgementsRequest } from "./types/ibc/core/channel/v1/query";
import { QueryUnreceivedPacketsResponse } from "./types/ibc/core/channel/v1/query";
import { QueryPacketAcknowledgementResponse } from "./types/ibc/core/channel/v1/query";
import { QueryNextSequenceSendRequest } from "./types/ibc/core/channel/v1/query";
import { UpgradeFields } from "./types/ibc/core/channel/v1/upgrade";
import { MsgChannelOpenConfirm } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelUpgradeAckResponse } from "./types/ibc/core/channel/v1/tx";
import { Acknowledgement } from "./types/ibc/core/channel/v1/channel";
import { QueryChannelsResponse } from "./types/ibc/core/channel/v1/query";
import { QueryPacketCommitmentResponse } from "./types/ibc/core/channel/v1/query";
import { QueryUnreceivedAcksResponse } from "./types/ibc/core/channel/v1/query";
import { MsgChannelUpgradeTry } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelUpgradeOpen } from "./types/ibc/core/channel/v1/tx";
import { Timeout } from "./types/ibc/core/channel/v1/channel";
import { QueryNextSequenceReceiveRequest } from "./types/ibc/core/channel/v1/query";
import { QueryUpgradeResponse } from "./types/ibc/core/channel/v1/query";
import { MsgUpdateParams } from "./types/ibc/core/channel/v1/tx";
import { QueryChannelConsensusStateRequest } from "./types/ibc/core/channel/v1/query";
import { QueryPacketAcknowledgementRequest } from "./types/ibc/core/channel/v1/query";
import { MsgChannelOpenTryResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgRecvPacket } from "./types/ibc/core/channel/v1/tx";
import { MsgTimeout } from "./types/ibc/core/channel/v1/tx";
import { QueryChannelsRequest } from "./types/ibc/core/channel/v1/query";
import { QueryPacketCommitmentsRequest } from "./types/ibc/core/channel/v1/query";
import { QueryPacketCommitmentsResponse } from "./types/ibc/core/channel/v1/query";
import { GenesisState } from "./types/ibc/core/channel/v1/genesis";
import { MsgChannelOpenTry } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelCloseInit } from "./types/ibc/core/channel/v1/tx";
import { MsgTimeoutOnClose } from "./types/ibc/core/channel/v1/tx";
import { MsgAcknowledgement } from "./types/ibc/core/channel/v1/tx";
import { MsgAcknowledgementResponse } from "./types/ibc/core/channel/v1/tx";
import { Channel } from "./types/ibc/core/channel/v1/channel";
import { QueryChannelClientStateResponse } from "./types/ibc/core/channel/v1/query";
import { QueryPacketReceiptRequest } from "./types/ibc/core/channel/v1/query";
import { QueryUnreceivedAcksRequest } from "./types/ibc/core/channel/v1/query";
import { QueryNextSequenceReceiveResponse } from "./types/ibc/core/channel/v1/query";
import { MsgChannelOpenInitResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelCloseInitResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgPruneAcknowledgementsResponse } from "./types/ibc/core/channel/v1/tx";
import { PacketSequence } from "./types/ibc/core/channel/v1/genesis";
import { MsgChannelUpgradeTimeoutResponse } from "./types/ibc/core/channel/v1/tx";
import { Params } from "./types/ibc/core/channel/v1/channel";
import { QueryConnectionChannelsResponse } from "./types/ibc/core/channel/v1/query";
import { QueryChannelConsensusStateResponse } from "./types/ibc/core/channel/v1/query";
import { MsgChannelOpenAck } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelUpgradeInit } from "./types/ibc/core/channel/v1/tx";
import { MsgChannelUpgradeTryResponse } from "./types/ibc/core/channel/v1/tx";
import { QueryNextSequenceSendResponse } from "./types/ibc/core/channel/v1/query";
import { QueryPacketReceiptResponse } from "./types/ibc/core/channel/v1/query";
import { QueryUpgradeErrorRequest } from "./types/ibc/core/channel/v1/query";
import { QueryUpgradeRequest } from "./types/ibc/core/channel/v1/query";
import { MsgTimeoutResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgTimeoutOnCloseResponse } from "./types/ibc/core/channel/v1/tx";
import { MsgUpdateParamsResponse } from "./types/ibc/core/channel/v1/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/ibc.core.channel.v1.MsgChannelUpgradeTimeout", MsgChannelUpgradeTimeout],
    ["/ibc.core.channel.v1.Packet", Packet],
    ["/ibc.core.channel.v1.QueryPacketAcknowledgementsResponse", QueryPacketAcknowledgementsResponse],
    ["/ibc.core.channel.v1.MsgChannelCloseConfirm", MsgChannelCloseConfirm],
    ["/ibc.core.channel.v1.MsgChannelCloseConfirmResponse", MsgChannelCloseConfirmResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeConfirm", MsgChannelUpgradeConfirm],
    ["/ibc.core.channel.v1.Upgrade", Upgrade],
    ["/ibc.core.channel.v1.MsgChannelOpenInit", MsgChannelOpenInit],
    ["/ibc.core.channel.v1.MsgRecvPacketResponse", MsgRecvPacketResponse],
    ["/ibc.core.channel.v1.QueryUnreceivedPacketsRequest", QueryUnreceivedPacketsRequest],
    ["/ibc.core.channel.v1.QueryChannelClientStateRequest", QueryChannelClientStateRequest],
    ["/ibc.core.channel.v1.QueryUpgradeErrorResponse", QueryUpgradeErrorResponse],
    ["/ibc.core.channel.v1.Counterparty", Counterparty],
    ["/ibc.core.channel.v1.PacketId", PacketId],
    ["/ibc.core.channel.v1.QueryChannelResponse", QueryChannelResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeOpenResponse", MsgChannelUpgradeOpenResponse],
    ["/ibc.core.channel.v1.MsgPruneAcknowledgements", MsgPruneAcknowledgements],
    ["/ibc.core.channel.v1.PacketState", PacketState],
    ["/ibc.core.channel.v1.ErrorReceipt", ErrorReceipt],
    ["/ibc.core.channel.v1.MsgChannelOpenConfirmResponse", MsgChannelOpenConfirmResponse],
    ["/ibc.core.channel.v1.QueryChannelRequest", QueryChannelRequest],
    ["/ibc.core.channel.v1.QueryChannelParamsRequest", QueryChannelParamsRequest],
    ["/ibc.core.channel.v1.QueryPacketCommitmentRequest", QueryPacketCommitmentRequest],
    ["/ibc.core.channel.v1.QueryChannelParamsResponse", QueryChannelParamsResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeCancelResponse", MsgChannelUpgradeCancelResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeConfirmResponse", MsgChannelUpgradeConfirmResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeCancel", MsgChannelUpgradeCancel],
    ["/ibc.core.channel.v1.IdentifiedChannel", IdentifiedChannel],
    ["/ibc.core.channel.v1.QueryConnectionChannelsRequest", QueryConnectionChannelsRequest],
    ["/ibc.core.channel.v1.MsgChannelOpenAckResponse", MsgChannelOpenAckResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeInitResponse", MsgChannelUpgradeInitResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeAck", MsgChannelUpgradeAck],
    ["/ibc.core.channel.v1.QueryPacketAcknowledgementsRequest", QueryPacketAcknowledgementsRequest],
    ["/ibc.core.channel.v1.QueryUnreceivedPacketsResponse", QueryUnreceivedPacketsResponse],
    ["/ibc.core.channel.v1.QueryPacketAcknowledgementResponse", QueryPacketAcknowledgementResponse],
    ["/ibc.core.channel.v1.QueryNextSequenceSendRequest", QueryNextSequenceSendRequest],
    ["/ibc.core.channel.v1.UpgradeFields", UpgradeFields],
    ["/ibc.core.channel.v1.MsgChannelOpenConfirm", MsgChannelOpenConfirm],
    ["/ibc.core.channel.v1.MsgChannelUpgradeAckResponse", MsgChannelUpgradeAckResponse],
    ["/ibc.core.channel.v1.Acknowledgement", Acknowledgement],
    ["/ibc.core.channel.v1.QueryChannelsResponse", QueryChannelsResponse],
    ["/ibc.core.channel.v1.QueryPacketCommitmentResponse", QueryPacketCommitmentResponse],
    ["/ibc.core.channel.v1.QueryUnreceivedAcksResponse", QueryUnreceivedAcksResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeTry", MsgChannelUpgradeTry],
    ["/ibc.core.channel.v1.MsgChannelUpgradeOpen", MsgChannelUpgradeOpen],
    ["/ibc.core.channel.v1.Timeout", Timeout],
    ["/ibc.core.channel.v1.QueryNextSequenceReceiveRequest", QueryNextSequenceReceiveRequest],
    ["/ibc.core.channel.v1.QueryUpgradeResponse", QueryUpgradeResponse],
    ["/ibc.core.channel.v1.MsgUpdateParams", MsgUpdateParams],
    ["/ibc.core.channel.v1.QueryChannelConsensusStateRequest", QueryChannelConsensusStateRequest],
    ["/ibc.core.channel.v1.QueryPacketAcknowledgementRequest", QueryPacketAcknowledgementRequest],
    ["/ibc.core.channel.v1.MsgChannelOpenTryResponse", MsgChannelOpenTryResponse],
    ["/ibc.core.channel.v1.MsgRecvPacket", MsgRecvPacket],
    ["/ibc.core.channel.v1.MsgTimeout", MsgTimeout],
    ["/ibc.core.channel.v1.QueryChannelsRequest", QueryChannelsRequest],
    ["/ibc.core.channel.v1.QueryPacketCommitmentsRequest", QueryPacketCommitmentsRequest],
    ["/ibc.core.channel.v1.QueryPacketCommitmentsResponse", QueryPacketCommitmentsResponse],
    ["/ibc.core.channel.v1.GenesisState", GenesisState],
    ["/ibc.core.channel.v1.MsgChannelOpenTry", MsgChannelOpenTry],
    ["/ibc.core.channel.v1.MsgChannelCloseInit", MsgChannelCloseInit],
    ["/ibc.core.channel.v1.MsgTimeoutOnClose", MsgTimeoutOnClose],
    ["/ibc.core.channel.v1.MsgAcknowledgement", MsgAcknowledgement],
    ["/ibc.core.channel.v1.MsgAcknowledgementResponse", MsgAcknowledgementResponse],
    ["/ibc.core.channel.v1.Channel", Channel],
    ["/ibc.core.channel.v1.QueryChannelClientStateResponse", QueryChannelClientStateResponse],
    ["/ibc.core.channel.v1.QueryPacketReceiptRequest", QueryPacketReceiptRequest],
    ["/ibc.core.channel.v1.QueryUnreceivedAcksRequest", QueryUnreceivedAcksRequest],
    ["/ibc.core.channel.v1.QueryNextSequenceReceiveResponse", QueryNextSequenceReceiveResponse],
    ["/ibc.core.channel.v1.MsgChannelOpenInitResponse", MsgChannelOpenInitResponse],
    ["/ibc.core.channel.v1.MsgChannelCloseInitResponse", MsgChannelCloseInitResponse],
    ["/ibc.core.channel.v1.MsgPruneAcknowledgementsResponse", MsgPruneAcknowledgementsResponse],
    ["/ibc.core.channel.v1.PacketSequence", PacketSequence],
    ["/ibc.core.channel.v1.MsgChannelUpgradeTimeoutResponse", MsgChannelUpgradeTimeoutResponse],
    ["/ibc.core.channel.v1.Params", Params],
    ["/ibc.core.channel.v1.QueryConnectionChannelsResponse", QueryConnectionChannelsResponse],
    ["/ibc.core.channel.v1.QueryChannelConsensusStateResponse", QueryChannelConsensusStateResponse],
    ["/ibc.core.channel.v1.MsgChannelOpenAck", MsgChannelOpenAck],
    ["/ibc.core.channel.v1.MsgChannelUpgradeInit", MsgChannelUpgradeInit],
    ["/ibc.core.channel.v1.MsgChannelUpgradeTryResponse", MsgChannelUpgradeTryResponse],
    ["/ibc.core.channel.v1.QueryNextSequenceSendResponse", QueryNextSequenceSendResponse],
    ["/ibc.core.channel.v1.QueryPacketReceiptResponse", QueryPacketReceiptResponse],
    ["/ibc.core.channel.v1.QueryUpgradeErrorRequest", QueryUpgradeErrorRequest],
    ["/ibc.core.channel.v1.QueryUpgradeRequest", QueryUpgradeRequest],
    ["/ibc.core.channel.v1.MsgTimeoutResponse", MsgTimeoutResponse],
    ["/ibc.core.channel.v1.MsgTimeoutOnCloseResponse", MsgTimeoutOnCloseResponse],
    ["/ibc.core.channel.v1.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    
];

export { msgTypes }