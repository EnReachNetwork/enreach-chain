"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/ibc/core/channel/v1/tx");
const tx_2 = require("./types/ibc/core/channel/v1/tx");
const tx_3 = require("./types/ibc/core/channel/v1/tx");
const tx_4 = require("./types/ibc/core/channel/v1/tx");
const query_1 = require("./types/ibc/core/channel/v1/query");
const query_2 = require("./types/ibc/core/channel/v1/query");
const query_3 = require("./types/ibc/core/channel/v1/query");
const tx_5 = require("./types/ibc/core/channel/v1/tx");
const query_4 = require("./types/ibc/core/channel/v1/query");
const query_5 = require("./types/ibc/core/channel/v1/query");
const query_6 = require("./types/ibc/core/channel/v1/query");
const query_7 = require("./types/ibc/core/channel/v1/query");
const tx_6 = require("./types/ibc/core/channel/v1/tx");
const tx_7 = require("./types/ibc/core/channel/v1/tx");
const tx_8 = require("./types/ibc/core/channel/v1/tx");
const query_8 = require("./types/ibc/core/channel/v1/query");
const tx_9 = require("./types/ibc/core/channel/v1/tx");
const channel_1 = require("./types/ibc/core/channel/v1/channel");
const tx_10 = require("./types/ibc/core/channel/v1/tx");
const tx_11 = require("./types/ibc/core/channel/v1/tx");
const tx_12 = require("./types/ibc/core/channel/v1/tx");
const query_9 = require("./types/ibc/core/channel/v1/query");
const query_10 = require("./types/ibc/core/channel/v1/query");
const query_11 = require("./types/ibc/core/channel/v1/query");
const tx_13 = require("./types/ibc/core/channel/v1/tx");
const query_12 = require("./types/ibc/core/channel/v1/query");
const tx_14 = require("./types/ibc/core/channel/v1/tx");
const tx_15 = require("./types/ibc/core/channel/v1/tx");
const tx_16 = require("./types/ibc/core/channel/v1/tx");
const query_13 = require("./types/ibc/core/channel/v1/query");
const tx_17 = require("./types/ibc/core/channel/v1/tx");
const tx_18 = require("./types/ibc/core/channel/v1/tx");
const tx_19 = require("./types/ibc/core/channel/v1/tx");
const channel_2 = require("./types/ibc/core/channel/v1/channel");
const query_14 = require("./types/ibc/core/channel/v1/query");
const tx_20 = require("./types/ibc/core/channel/v1/tx");
const query_15 = require("./types/ibc/core/channel/v1/query");
const tx_21 = require("./types/ibc/core/channel/v1/tx");
const query_16 = require("./types/ibc/core/channel/v1/query");
const tx_22 = require("./types/ibc/core/channel/v1/tx");
const channel_3 = require("./types/ibc/core/channel/v1/channel");
const query_17 = require("./types/ibc/core/channel/v1/query");
const channel_4 = require("./types/ibc/core/channel/v1/channel");
const tx_23 = require("./types/ibc/core/channel/v1/tx");
const tx_24 = require("./types/ibc/core/channel/v1/tx");
const tx_25 = require("./types/ibc/core/channel/v1/tx");
const tx_26 = require("./types/ibc/core/channel/v1/tx");
const query_18 = require("./types/ibc/core/channel/v1/query");
const tx_27 = require("./types/ibc/core/channel/v1/tx");
const tx_28 = require("./types/ibc/core/channel/v1/tx");
const tx_29 = require("./types/ibc/core/channel/v1/tx");
const upgrade_1 = require("./types/ibc/core/channel/v1/upgrade");
const tx_30 = require("./types/ibc/core/channel/v1/tx");
const tx_31 = require("./types/ibc/core/channel/v1/tx");
const query_19 = require("./types/ibc/core/channel/v1/query");
const query_20 = require("./types/ibc/core/channel/v1/query");
const query_21 = require("./types/ibc/core/channel/v1/query");
const upgrade_2 = require("./types/ibc/core/channel/v1/upgrade");
const tx_32 = require("./types/ibc/core/channel/v1/tx");
const query_22 = require("./types/ibc/core/channel/v1/query");
const genesis_1 = require("./types/ibc/core/channel/v1/genesis");
const query_23 = require("./types/ibc/core/channel/v1/query");
const query_24 = require("./types/ibc/core/channel/v1/query");
const tx_33 = require("./types/ibc/core/channel/v1/tx");
const query_25 = require("./types/ibc/core/channel/v1/query");
const channel_5 = require("./types/ibc/core/channel/v1/channel");
const tx_34 = require("./types/ibc/core/channel/v1/tx");
const tx_35 = require("./types/ibc/core/channel/v1/tx");
const query_26 = require("./types/ibc/core/channel/v1/query");
const query_27 = require("./types/ibc/core/channel/v1/query");
const query_28 = require("./types/ibc/core/channel/v1/query");
const query_29 = require("./types/ibc/core/channel/v1/query");
const query_30 = require("./types/ibc/core/channel/v1/query");
const query_31 = require("./types/ibc/core/channel/v1/query");
const upgrade_3 = require("./types/ibc/core/channel/v1/upgrade");
const channel_6 = require("./types/ibc/core/channel/v1/channel");
const query_32 = require("./types/ibc/core/channel/v1/query");
const query_33 = require("./types/ibc/core/channel/v1/query");
const query_34 = require("./types/ibc/core/channel/v1/query");
const channel_7 = require("./types/ibc/core/channel/v1/channel");
const tx_36 = require("./types/ibc/core/channel/v1/tx");
const channel_8 = require("./types/ibc/core/channel/v1/channel");
const genesis_2 = require("./types/ibc/core/channel/v1/genesis");
const tx_37 = require("./types/ibc/core/channel/v1/tx");
const channel_9 = require("./types/ibc/core/channel/v1/channel");
const tx_38 = require("./types/ibc/core/channel/v1/tx");
const msgTypes = [
    ["/ibc.core.channel.v1.MsgChannelOpenAckResponse", tx_1.MsgChannelOpenAckResponse],
    ["/ibc.core.channel.v1.MsgRecvPacketResponse", tx_2.MsgRecvPacketResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeInitResponse", tx_3.MsgChannelUpgradeInitResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeConfirmResponse", tx_4.MsgChannelUpgradeConfirmResponse],
    ["/ibc.core.channel.v1.QueryChannelRequest", query_1.QueryChannelRequest],
    ["/ibc.core.channel.v1.QueryPacketCommitmentsRequest", query_2.QueryPacketCommitmentsRequest],
    ["/ibc.core.channel.v1.QueryNextSequenceReceiveRequest", query_3.QueryNextSequenceReceiveRequest],
    ["/ibc.core.channel.v1.MsgChannelOpenInitResponse", tx_5.MsgChannelOpenInitResponse],
    ["/ibc.core.channel.v1.QueryPacketAcknowledgementRequest", query_4.QueryPacketAcknowledgementRequest],
    ["/ibc.core.channel.v1.QueryNextSequenceReceiveResponse", query_5.QueryNextSequenceReceiveResponse],
    ["/ibc.core.channel.v1.QueryNextSequenceSendRequest", query_6.QueryNextSequenceSendRequest],
    ["/ibc.core.channel.v1.QueryChannelParamsResponse", query_7.QueryChannelParamsResponse],
    ["/ibc.core.channel.v1.MsgChannelOpenConfirm", tx_6.MsgChannelOpenConfirm],
    ["/ibc.core.channel.v1.MsgAcknowledgement", tx_7.MsgAcknowledgement],
    ["/ibc.core.channel.v1.MsgChannelUpgradeOpen", tx_8.MsgChannelUpgradeOpen],
    ["/ibc.core.channel.v1.QueryChannelsRequest", query_8.QueryChannelsRequest],
    ["/ibc.core.channel.v1.MsgTimeoutOnCloseResponse", tx_9.MsgTimeoutOnCloseResponse],
    ["/ibc.core.channel.v1.Timeout", channel_1.Timeout],
    ["/ibc.core.channel.v1.MsgAcknowledgementResponse", tx_10.MsgAcknowledgementResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeTryResponse", tx_11.MsgChannelUpgradeTryResponse],
    ["/ibc.core.channel.v1.MsgPruneAcknowledgements", tx_12.MsgPruneAcknowledgements],
    ["/ibc.core.channel.v1.QueryPacketCommitmentRequest", query_9.QueryPacketCommitmentRequest],
    ["/ibc.core.channel.v1.QueryPacketCommitmentResponse", query_10.QueryPacketCommitmentResponse],
    ["/ibc.core.channel.v1.QueryPacketAcknowledgementsRequest", query_11.QueryPacketAcknowledgementsRequest],
    ["/ibc.core.channel.v1.MsgChannelUpgradeTimeout", tx_13.MsgChannelUpgradeTimeout],
    ["/ibc.core.channel.v1.QueryUpgradeErrorResponse", query_12.QueryUpgradeErrorResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeTimeoutResponse", tx_14.MsgChannelUpgradeTimeoutResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeTry", tx_15.MsgChannelUpgradeTry],
    ["/ibc.core.channel.v1.MsgChannelUpgradeAckResponse", tx_16.MsgChannelUpgradeAckResponse],
    ["/ibc.core.channel.v1.QueryUnreceivedAcksResponse", query_13.QueryUnreceivedAcksResponse],
    ["/ibc.core.channel.v1.MsgChannelOpenTryResponse", tx_17.MsgChannelOpenTryResponse],
    ["/ibc.core.channel.v1.MsgChannelOpenAck", tx_18.MsgChannelOpenAck],
    ["/ibc.core.channel.v1.MsgChannelUpgradeAck", tx_19.MsgChannelUpgradeAck],
    ["/ibc.core.channel.v1.Channel", channel_2.Channel],
    ["/ibc.core.channel.v1.QueryConnectionChannelsRequest", query_14.QueryConnectionChannelsRequest],
    ["/ibc.core.channel.v1.MsgChannelUpgradeOpenResponse", tx_20.MsgChannelUpgradeOpenResponse],
    ["/ibc.core.channel.v1.QueryChannelConsensusStateResponse", query_15.QueryChannelConsensusStateResponse],
    ["/ibc.core.channel.v1.MsgTimeout", tx_21.MsgTimeout],
    ["/ibc.core.channel.v1.QueryNextSequenceSendResponse", query_16.QueryNextSequenceSendResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeInit", tx_22.MsgChannelUpgradeInit],
    ["/ibc.core.channel.v1.Counterparty", channel_3.Counterparty],
    ["/ibc.core.channel.v1.QueryChannelsResponse", query_17.QueryChannelsResponse],
    ["/ibc.core.channel.v1.Params", channel_4.Params],
    ["/ibc.core.channel.v1.MsgChannelCloseInit", tx_23.MsgChannelCloseInit],
    ["/ibc.core.channel.v1.MsgTimeoutOnClose", tx_24.MsgTimeoutOnClose],
    ["/ibc.core.channel.v1.MsgUpdateParams", tx_25.MsgUpdateParams],
    ["/ibc.core.channel.v1.MsgPruneAcknowledgementsResponse", tx_26.MsgPruneAcknowledgementsResponse],
    ["/ibc.core.channel.v1.QueryPacketReceiptResponse", query_18.QueryPacketReceiptResponse],
    ["/ibc.core.channel.v1.MsgChannelCloseConfirmResponse", tx_27.MsgChannelCloseConfirmResponse],
    ["/ibc.core.channel.v1.MsgChannelOpenInit", tx_28.MsgChannelOpenInit],
    ["/ibc.core.channel.v1.MsgChannelOpenTry", tx_29.MsgChannelOpenTry],
    ["/ibc.core.channel.v1.ErrorReceipt", upgrade_1.ErrorReceipt],
    ["/ibc.core.channel.v1.MsgUpdateParamsResponse", tx_30.MsgUpdateParamsResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeConfirm", tx_31.MsgChannelUpgradeConfirm],
    ["/ibc.core.channel.v1.QueryChannelConsensusStateRequest", query_19.QueryChannelConsensusStateRequest],
    ["/ibc.core.channel.v1.QueryPacketCommitmentsResponse", query_20.QueryPacketCommitmentsResponse],
    ["/ibc.core.channel.v1.QueryPacketReceiptRequest", query_21.QueryPacketReceiptRequest],
    ["/ibc.core.channel.v1.Upgrade", upgrade_2.Upgrade],
    ["/ibc.core.channel.v1.MsgRecvPacket", tx_32.MsgRecvPacket],
    ["/ibc.core.channel.v1.QueryUpgradeResponse", query_22.QueryUpgradeResponse],
    ["/ibc.core.channel.v1.PacketSequence", genesis_1.PacketSequence],
    ["/ibc.core.channel.v1.QueryPacketAcknowledgementResponse", query_23.QueryPacketAcknowledgementResponse],
    ["/ibc.core.channel.v1.QueryUpgradeRequest", query_24.QueryUpgradeRequest],
    ["/ibc.core.channel.v1.MsgChannelCloseInitResponse", tx_33.MsgChannelCloseInitResponse],
    ["/ibc.core.channel.v1.QueryUpgradeErrorRequest", query_25.QueryUpgradeErrorRequest],
    ["/ibc.core.channel.v1.Packet", channel_5.Packet],
    ["/ibc.core.channel.v1.MsgTimeoutResponse", tx_34.MsgTimeoutResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeCancel", tx_35.MsgChannelUpgradeCancel],
    ["/ibc.core.channel.v1.QueryChannelResponse", query_26.QueryChannelResponse],
    ["/ibc.core.channel.v1.QueryUnreceivedPacketsResponse", query_27.QueryUnreceivedPacketsResponse],
    ["/ibc.core.channel.v1.QueryUnreceivedAcksRequest", query_28.QueryUnreceivedAcksRequest],
    ["/ibc.core.channel.v1.QueryUnreceivedPacketsRequest", query_29.QueryUnreceivedPacketsRequest],
    ["/ibc.core.channel.v1.QueryChannelParamsRequest", query_30.QueryChannelParamsRequest],
    ["/ibc.core.channel.v1.QueryChannelClientStateResponse", query_31.QueryChannelClientStateResponse],
    ["/ibc.core.channel.v1.UpgradeFields", upgrade_3.UpgradeFields],
    ["/ibc.core.channel.v1.Acknowledgement", channel_6.Acknowledgement],
    ["/ibc.core.channel.v1.QueryPacketAcknowledgementsResponse", query_32.QueryPacketAcknowledgementsResponse],
    ["/ibc.core.channel.v1.QueryConnectionChannelsResponse", query_33.QueryConnectionChannelsResponse],
    ["/ibc.core.channel.v1.QueryChannelClientStateRequest", query_34.QueryChannelClientStateRequest],
    ["/ibc.core.channel.v1.PacketId", channel_7.PacketId],
    ["/ibc.core.channel.v1.MsgChannelOpenConfirmResponse", tx_36.MsgChannelOpenConfirmResponse],
    ["/ibc.core.channel.v1.PacketState", channel_8.PacketState],
    ["/ibc.core.channel.v1.GenesisState", genesis_2.GenesisState],
    ["/ibc.core.channel.v1.MsgChannelCloseConfirm", tx_37.MsgChannelCloseConfirm],
    ["/ibc.core.channel.v1.IdentifiedChannel", channel_9.IdentifiedChannel],
    ["/ibc.core.channel.v1.MsgChannelUpgradeCancelResponse", tx_38.MsgChannelUpgradeCancelResponse],
];
exports.msgTypes = msgTypes;
