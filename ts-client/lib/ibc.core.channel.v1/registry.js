"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/ibc/core/channel/v1/tx");
const tx_2 = require("./types/ibc/core/channel/v1/tx");
const tx_3 = require("./types/ibc/core/channel/v1/tx");
const tx_4 = require("./types/ibc/core/channel/v1/tx");
const upgrade_1 = require("./types/ibc/core/channel/v1/upgrade");
const channel_1 = require("./types/ibc/core/channel/v1/channel");
const channel_2 = require("./types/ibc/core/channel/v1/channel");
const tx_5 = require("./types/ibc/core/channel/v1/tx");
const query_1 = require("./types/ibc/core/channel/v1/query");
const channel_3 = require("./types/ibc/core/channel/v1/channel");
const tx_6 = require("./types/ibc/core/channel/v1/tx");
const tx_7 = require("./types/ibc/core/channel/v1/tx");
const tx_8 = require("./types/ibc/core/channel/v1/tx");
const query_2 = require("./types/ibc/core/channel/v1/query");
const query_3 = require("./types/ibc/core/channel/v1/query");
const tx_9 = require("./types/ibc/core/channel/v1/tx");
const query_4 = require("./types/ibc/core/channel/v1/query");
const query_5 = require("./types/ibc/core/channel/v1/query");
const query_6 = require("./types/ibc/core/channel/v1/query");
const tx_10 = require("./types/ibc/core/channel/v1/tx");
const tx_11 = require("./types/ibc/core/channel/v1/tx");
const tx_12 = require("./types/ibc/core/channel/v1/tx");
const channel_4 = require("./types/ibc/core/channel/v1/channel");
const query_7 = require("./types/ibc/core/channel/v1/query");
const query_8 = require("./types/ibc/core/channel/v1/query");
const tx_13 = require("./types/ibc/core/channel/v1/tx");
const tx_14 = require("./types/ibc/core/channel/v1/tx");
const query_9 = require("./types/ibc/core/channel/v1/query");
const query_10 = require("./types/ibc/core/channel/v1/query");
const query_11 = require("./types/ibc/core/channel/v1/query");
const tx_15 = require("./types/ibc/core/channel/v1/tx");
const tx_16 = require("./types/ibc/core/channel/v1/tx");
const upgrade_2 = require("./types/ibc/core/channel/v1/upgrade");
const channel_5 = require("./types/ibc/core/channel/v1/channel");
const query_12 = require("./types/ibc/core/channel/v1/query");
const query_13 = require("./types/ibc/core/channel/v1/query");
const tx_17 = require("./types/ibc/core/channel/v1/tx");
const tx_18 = require("./types/ibc/core/channel/v1/tx");
const query_14 = require("./types/ibc/core/channel/v1/query");
const query_15 = require("./types/ibc/core/channel/v1/query");
const query_16 = require("./types/ibc/core/channel/v1/query");
const query_17 = require("./types/ibc/core/channel/v1/query");
const tx_19 = require("./types/ibc/core/channel/v1/tx");
const tx_20 = require("./types/ibc/core/channel/v1/tx");
const channel_6 = require("./types/ibc/core/channel/v1/channel");
const query_18 = require("./types/ibc/core/channel/v1/query");
const query_19 = require("./types/ibc/core/channel/v1/query");
const query_20 = require("./types/ibc/core/channel/v1/query");
const tx_21 = require("./types/ibc/core/channel/v1/tx");
const genesis_1 = require("./types/ibc/core/channel/v1/genesis");
const tx_22 = require("./types/ibc/core/channel/v1/tx");
const tx_23 = require("./types/ibc/core/channel/v1/tx");
const channel_7 = require("./types/ibc/core/channel/v1/channel");
const query_21 = require("./types/ibc/core/channel/v1/query");
const genesis_2 = require("./types/ibc/core/channel/v1/genesis");
const query_22 = require("./types/ibc/core/channel/v1/query");
const tx_24 = require("./types/ibc/core/channel/v1/tx");
const query_23 = require("./types/ibc/core/channel/v1/query");
const query_24 = require("./types/ibc/core/channel/v1/query");
const query_25 = require("./types/ibc/core/channel/v1/query");
const tx_25 = require("./types/ibc/core/channel/v1/tx");
const query_26 = require("./types/ibc/core/channel/v1/query");
const query_27 = require("./types/ibc/core/channel/v1/query");
const tx_26 = require("./types/ibc/core/channel/v1/tx");
const tx_27 = require("./types/ibc/core/channel/v1/tx");
const channel_8 = require("./types/ibc/core/channel/v1/channel");
const query_28 = require("./types/ibc/core/channel/v1/query");
const query_29 = require("./types/ibc/core/channel/v1/query");
const tx_28 = require("./types/ibc/core/channel/v1/tx");
const tx_29 = require("./types/ibc/core/channel/v1/tx");
const tx_30 = require("./types/ibc/core/channel/v1/tx");
const tx_31 = require("./types/ibc/core/channel/v1/tx");
const tx_32 = require("./types/ibc/core/channel/v1/tx");
const tx_33 = require("./types/ibc/core/channel/v1/tx");
const tx_34 = require("./types/ibc/core/channel/v1/tx");
const tx_35 = require("./types/ibc/core/channel/v1/tx");
const tx_36 = require("./types/ibc/core/channel/v1/tx");
const query_30 = require("./types/ibc/core/channel/v1/query");
const channel_9 = require("./types/ibc/core/channel/v1/channel");
const upgrade_3 = require("./types/ibc/core/channel/v1/upgrade");
const query_31 = require("./types/ibc/core/channel/v1/query");
const query_32 = require("./types/ibc/core/channel/v1/query");
const tx_37 = require("./types/ibc/core/channel/v1/tx");
const query_33 = require("./types/ibc/core/channel/v1/query");
const query_34 = require("./types/ibc/core/channel/v1/query");
const tx_38 = require("./types/ibc/core/channel/v1/tx");
const msgTypes = [
    ["/ibc.core.channel.v1.MsgChannelUpgradeConfirm", tx_1.MsgChannelUpgradeConfirm],
    ["/ibc.core.channel.v1.MsgChannelOpenConfirmResponse", tx_2.MsgChannelOpenConfirmResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeInitResponse", tx_3.MsgChannelUpgradeInitResponse],
    ["/ibc.core.channel.v1.MsgUpdateParamsResponse", tx_4.MsgUpdateParamsResponse],
    ["/ibc.core.channel.v1.UpgradeFields", upgrade_1.UpgradeFields],
    ["/ibc.core.channel.v1.IdentifiedChannel", channel_1.IdentifiedChannel],
    ["/ibc.core.channel.v1.Counterparty", channel_2.Counterparty],
    ["/ibc.core.channel.v1.MsgTimeout", tx_5.MsgTimeout],
    ["/ibc.core.channel.v1.QueryNextSequenceReceiveRequest", query_1.QueryNextSequenceReceiveRequest],
    ["/ibc.core.channel.v1.PacketState", channel_3.PacketState],
    ["/ibc.core.channel.v1.MsgChannelUpgradeInit", tx_6.MsgChannelUpgradeInit],
    ["/ibc.core.channel.v1.MsgChannelUpgradeTry", tx_7.MsgChannelUpgradeTry],
    ["/ibc.core.channel.v1.MsgChannelCloseInitResponse", tx_8.MsgChannelCloseInitResponse],
    ["/ibc.core.channel.v1.QueryChannelConsensusStateResponse", query_2.QueryChannelConsensusStateResponse],
    ["/ibc.core.channel.v1.QueryUpgradeRequest", query_3.QueryUpgradeRequest],
    ["/ibc.core.channel.v1.MsgChannelOpenAck", tx_9.MsgChannelOpenAck],
    ["/ibc.core.channel.v1.QueryNextSequenceSendRequest", query_4.QueryNextSequenceSendRequest],
    ["/ibc.core.channel.v1.QueryNextSequenceSendResponse", query_5.QueryNextSequenceSendResponse],
    ["/ibc.core.channel.v1.QueryUpgradeResponse", query_6.QueryUpgradeResponse],
    ["/ibc.core.channel.v1.MsgChannelOpenInit", tx_10.MsgChannelOpenInit],
    ["/ibc.core.channel.v1.MsgChannelUpgradeOpen", tx_11.MsgChannelUpgradeOpen],
    ["/ibc.core.channel.v1.MsgRecvPacketResponse", tx_12.MsgRecvPacketResponse],
    ["/ibc.core.channel.v1.Acknowledgement", channel_4.Acknowledgement],
    ["/ibc.core.channel.v1.QueryPacketCommitmentResponse", query_7.QueryPacketCommitmentResponse],
    ["/ibc.core.channel.v1.QueryPacketReceiptRequest", query_8.QueryPacketReceiptRequest],
    ["/ibc.core.channel.v1.MsgChannelUpgradeAck", tx_13.MsgChannelUpgradeAck],
    ["/ibc.core.channel.v1.MsgChannelUpgradeOpenResponse", tx_14.MsgChannelUpgradeOpenResponse],
    ["/ibc.core.channel.v1.QueryChannelClientStateResponse", query_9.QueryChannelClientStateResponse],
    ["/ibc.core.channel.v1.QueryPacketCommitmentsRequest", query_10.QueryPacketCommitmentsRequest],
    ["/ibc.core.channel.v1.QueryPacketReceiptResponse", query_11.QueryPacketReceiptResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeTimeout", tx_15.MsgChannelUpgradeTimeout],
    ["/ibc.core.channel.v1.MsgChannelUpgradeConfirmResponse", tx_16.MsgChannelUpgradeConfirmResponse],
    ["/ibc.core.channel.v1.Upgrade", upgrade_2.Upgrade],
    ["/ibc.core.channel.v1.Packet", channel_5.Packet],
    ["/ibc.core.channel.v1.QueryConnectionChannelsResponse", query_12.QueryConnectionChannelsResponse],
    ["/ibc.core.channel.v1.QueryPacketCommitmentRequest", query_13.QueryPacketCommitmentRequest],
    ["/ibc.core.channel.v1.MsgTimeoutOnClose", tx_17.MsgTimeoutOnClose],
    ["/ibc.core.channel.v1.MsgTimeoutOnCloseResponse", tx_18.MsgTimeoutOnCloseResponse],
    ["/ibc.core.channel.v1.QueryChannelConsensusStateRequest", query_14.QueryChannelConsensusStateRequest],
    ["/ibc.core.channel.v1.QueryPacketAcknowledgementsResponse", query_15.QueryPacketAcknowledgementsResponse],
    ["/ibc.core.channel.v1.QueryUnreceivedPacketsRequest", query_16.QueryUnreceivedPacketsRequest],
    ["/ibc.core.channel.v1.QueryNextSequenceReceiveResponse", query_17.QueryNextSequenceReceiveResponse],
    ["/ibc.core.channel.v1.MsgChannelOpenAckResponse", tx_19.MsgChannelOpenAckResponse],
    ["/ibc.core.channel.v1.MsgPruneAcknowledgementsResponse", tx_20.MsgPruneAcknowledgementsResponse],
    ["/ibc.core.channel.v1.PacketId", channel_6.PacketId],
    ["/ibc.core.channel.v1.QueryChannelsRequest", query_18.QueryChannelsRequest],
    ["/ibc.core.channel.v1.QueryPacketAcknowledgementResponse", query_19.QueryPacketAcknowledgementResponse],
    ["/ibc.core.channel.v1.QueryUnreceivedAcksRequest", query_20.QueryUnreceivedAcksRequest],
    ["/ibc.core.channel.v1.MsgChannelOpenConfirm", tx_21.MsgChannelOpenConfirm],
    ["/ibc.core.channel.v1.PacketSequence", genesis_1.PacketSequence],
    ["/ibc.core.channel.v1.MsgChannelCloseConfirmResponse", tx_22.MsgChannelCloseConfirmResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeTimeoutResponse", tx_23.MsgChannelUpgradeTimeoutResponse],
    ["/ibc.core.channel.v1.Channel", channel_7.Channel],
    ["/ibc.core.channel.v1.QueryChannelResponse", query_21.QueryChannelResponse],
    ["/ibc.core.channel.v1.GenesisState", genesis_2.GenesisState],
    ["/ibc.core.channel.v1.QueryUnreceivedAcksResponse", query_22.QueryUnreceivedAcksResponse],
    ["/ibc.core.channel.v1.MsgChannelOpenInitResponse", tx_24.MsgChannelOpenInitResponse],
    ["/ibc.core.channel.v1.QueryChannelRequest", query_23.QueryChannelRequest],
    ["/ibc.core.channel.v1.QueryUpgradeErrorResponse", query_24.QueryUpgradeErrorResponse],
    ["/ibc.core.channel.v1.QueryChannelParamsResponse", query_25.QueryChannelParamsResponse],
    ["/ibc.core.channel.v1.MsgChannelCloseConfirm", tx_25.MsgChannelCloseConfirm],
    ["/ibc.core.channel.v1.QueryPacketAcknowledgementsRequest", query_26.QueryPacketAcknowledgementsRequest],
    ["/ibc.core.channel.v1.QueryChannelsResponse", query_27.QueryChannelsResponse],
    ["/ibc.core.channel.v1.MsgRecvPacket", tx_26.MsgRecvPacket],
    ["/ibc.core.channel.v1.MsgChannelOpenTryResponse", tx_27.MsgChannelOpenTryResponse],
    ["/ibc.core.channel.v1.Params", channel_8.Params],
    ["/ibc.core.channel.v1.QueryConnectionChannelsRequest", query_28.QueryConnectionChannelsRequest],
    ["/ibc.core.channel.v1.QueryChannelClientStateRequest", query_29.QueryChannelClientStateRequest],
    ["/ibc.core.channel.v1.MsgChannelCloseInit", tx_28.MsgChannelCloseInit],
    ["/ibc.core.channel.v1.MsgChannelUpgradeCancel", tx_29.MsgChannelUpgradeCancel],
    ["/ibc.core.channel.v1.MsgPruneAcknowledgements", tx_30.MsgPruneAcknowledgements],
    ["/ibc.core.channel.v1.MsgAcknowledgementResponse", tx_31.MsgAcknowledgementResponse],
    ["/ibc.core.channel.v1.MsgChannelOpenTry", tx_32.MsgChannelOpenTry],
    ["/ibc.core.channel.v1.MsgTimeoutResponse", tx_33.MsgTimeoutResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeTryResponse", tx_34.MsgChannelUpgradeTryResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeAckResponse", tx_35.MsgChannelUpgradeAckResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeCancelResponse", tx_36.MsgChannelUpgradeCancelResponse],
    ["/ibc.core.channel.v1.QueryUnreceivedPacketsResponse", query_30.QueryUnreceivedPacketsResponse],
    ["/ibc.core.channel.v1.Timeout", channel_9.Timeout],
    ["/ibc.core.channel.v1.ErrorReceipt", upgrade_3.ErrorReceipt],
    ["/ibc.core.channel.v1.QueryPacketAcknowledgementRequest", query_31.QueryPacketAcknowledgementRequest],
    ["/ibc.core.channel.v1.QueryUpgradeErrorRequest", query_32.QueryUpgradeErrorRequest],
    ["/ibc.core.channel.v1.MsgUpdateParams", tx_37.MsgUpdateParams],
    ["/ibc.core.channel.v1.QueryPacketCommitmentsResponse", query_33.QueryPacketCommitmentsResponse],
    ["/ibc.core.channel.v1.QueryChannelParamsRequest", query_34.QueryChannelParamsRequest],
    ["/ibc.core.channel.v1.MsgAcknowledgement", tx_38.MsgAcknowledgement],
];
exports.msgTypes = msgTypes;
