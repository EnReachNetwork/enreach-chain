"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/ibc/core/channel/v1/tx");
const tx_2 = require("./types/ibc/core/channel/v1/tx");
const tx_3 = require("./types/ibc/core/channel/v1/tx");
const channel_1 = require("./types/ibc/core/channel/v1/channel");
const channel_2 = require("./types/ibc/core/channel/v1/channel");
const query_1 = require("./types/ibc/core/channel/v1/query");
const tx_4 = require("./types/ibc/core/channel/v1/tx");
const tx_5 = require("./types/ibc/core/channel/v1/tx");
const channel_3 = require("./types/ibc/core/channel/v1/channel");
const query_2 = require("./types/ibc/core/channel/v1/query");
const tx_6 = require("./types/ibc/core/channel/v1/tx");
const tx_7 = require("./types/ibc/core/channel/v1/tx");
const query_3 = require("./types/ibc/core/channel/v1/query");
const tx_8 = require("./types/ibc/core/channel/v1/tx");
const query_4 = require("./types/ibc/core/channel/v1/query");
const tx_9 = require("./types/ibc/core/channel/v1/tx");
const channel_4 = require("./types/ibc/core/channel/v1/channel");
const channel_5 = require("./types/ibc/core/channel/v1/channel");
const query_5 = require("./types/ibc/core/channel/v1/query");
const query_6 = require("./types/ibc/core/channel/v1/query");
const query_7 = require("./types/ibc/core/channel/v1/query");
const tx_10 = require("./types/ibc/core/channel/v1/tx");
const tx_11 = require("./types/ibc/core/channel/v1/tx");
const query_8 = require("./types/ibc/core/channel/v1/query");
const query_9 = require("./types/ibc/core/channel/v1/query");
const query_10 = require("./types/ibc/core/channel/v1/query");
const tx_12 = require("./types/ibc/core/channel/v1/tx");
const tx_13 = require("./types/ibc/core/channel/v1/tx");
const tx_14 = require("./types/ibc/core/channel/v1/tx");
const tx_15 = require("./types/ibc/core/channel/v1/tx");
const tx_16 = require("./types/ibc/core/channel/v1/tx");
const query_11 = require("./types/ibc/core/channel/v1/query");
const query_12 = require("./types/ibc/core/channel/v1/query");
const tx_17 = require("./types/ibc/core/channel/v1/tx");
const tx_18 = require("./types/ibc/core/channel/v1/tx");
const tx_19 = require("./types/ibc/core/channel/v1/tx");
const upgrade_1 = require("./types/ibc/core/channel/v1/upgrade");
const tx_20 = require("./types/ibc/core/channel/v1/tx");
const query_13 = require("./types/ibc/core/channel/v1/query");
const tx_21 = require("./types/ibc/core/channel/v1/tx");
const tx_22 = require("./types/ibc/core/channel/v1/tx");
const tx_23 = require("./types/ibc/core/channel/v1/tx");
const query_14 = require("./types/ibc/core/channel/v1/query");
const query_15 = require("./types/ibc/core/channel/v1/query");
const tx_24 = require("./types/ibc/core/channel/v1/tx");
const tx_25 = require("./types/ibc/core/channel/v1/tx");
const tx_26 = require("./types/ibc/core/channel/v1/tx");
const upgrade_2 = require("./types/ibc/core/channel/v1/upgrade");
const query_16 = require("./types/ibc/core/channel/v1/query");
const query_17 = require("./types/ibc/core/channel/v1/query");
const query_18 = require("./types/ibc/core/channel/v1/query");
const tx_27 = require("./types/ibc/core/channel/v1/tx");
const tx_28 = require("./types/ibc/core/channel/v1/tx");
const tx_29 = require("./types/ibc/core/channel/v1/tx");
const tx_30 = require("./types/ibc/core/channel/v1/tx");
const query_19 = require("./types/ibc/core/channel/v1/query");
const query_20 = require("./types/ibc/core/channel/v1/query");
const tx_31 = require("./types/ibc/core/channel/v1/tx");
const tx_32 = require("./types/ibc/core/channel/v1/tx");
const tx_33 = require("./types/ibc/core/channel/v1/tx");
const upgrade_3 = require("./types/ibc/core/channel/v1/upgrade");
const genesis_1 = require("./types/ibc/core/channel/v1/genesis");
const query_21 = require("./types/ibc/core/channel/v1/query");
const query_22 = require("./types/ibc/core/channel/v1/query");
const channel_6 = require("./types/ibc/core/channel/v1/channel");
const query_23 = require("./types/ibc/core/channel/v1/query");
const query_24 = require("./types/ibc/core/channel/v1/query");
const tx_34 = require("./types/ibc/core/channel/v1/tx");
const channel_7 = require("./types/ibc/core/channel/v1/channel");
const query_25 = require("./types/ibc/core/channel/v1/query");
const query_26 = require("./types/ibc/core/channel/v1/query");
const query_27 = require("./types/ibc/core/channel/v1/query");
const tx_35 = require("./types/ibc/core/channel/v1/tx");
const query_28 = require("./types/ibc/core/channel/v1/query");
const query_29 = require("./types/ibc/core/channel/v1/query");
const query_30 = require("./types/ibc/core/channel/v1/query");
const tx_36 = require("./types/ibc/core/channel/v1/tx");
const channel_8 = require("./types/ibc/core/channel/v1/channel");
const genesis_2 = require("./types/ibc/core/channel/v1/genesis");
const channel_9 = require("./types/ibc/core/channel/v1/channel");
const query_31 = require("./types/ibc/core/channel/v1/query");
const query_32 = require("./types/ibc/core/channel/v1/query");
const tx_37 = require("./types/ibc/core/channel/v1/tx");
const tx_38 = require("./types/ibc/core/channel/v1/tx");
const query_33 = require("./types/ibc/core/channel/v1/query");
const query_34 = require("./types/ibc/core/channel/v1/query");
const msgTypes = [
    ["/ibc.core.channel.v1.MsgChannelUpgradeInit", tx_1.MsgChannelUpgradeInit],
    ["/ibc.core.channel.v1.MsgChannelUpgradeInitResponse", tx_2.MsgChannelUpgradeInitResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeTry", tx_3.MsgChannelUpgradeTry],
    ["/ibc.core.channel.v1.PacketState", channel_1.PacketState],
    ["/ibc.core.channel.v1.IdentifiedChannel", channel_2.IdentifiedChannel],
    ["/ibc.core.channel.v1.QueryConnectionChannelsResponse", query_1.QueryConnectionChannelsResponse],
    ["/ibc.core.channel.v1.MsgAcknowledgement", tx_4.MsgAcknowledgement],
    ["/ibc.core.channel.v1.MsgAcknowledgementResponse", tx_5.MsgAcknowledgementResponse],
    ["/ibc.core.channel.v1.PacketId", channel_3.PacketId],
    ["/ibc.core.channel.v1.QueryNextSequenceSendResponse", query_2.QueryNextSequenceSendResponse],
    ["/ibc.core.channel.v1.MsgChannelOpenInit", tx_6.MsgChannelOpenInit],
    ["/ibc.core.channel.v1.MsgTimeoutOnClose", tx_7.MsgTimeoutOnClose],
    ["/ibc.core.channel.v1.QueryUpgradeErrorRequest", query_3.QueryUpgradeErrorRequest],
    ["/ibc.core.channel.v1.MsgChannelOpenConfirm", tx_8.MsgChannelOpenConfirm],
    ["/ibc.core.channel.v1.QueryPacketReceiptResponse", query_4.QueryPacketReceiptResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeOpen", tx_9.MsgChannelUpgradeOpen],
    ["/ibc.core.channel.v1.Packet", channel_4.Packet],
    ["/ibc.core.channel.v1.Counterparty", channel_5.Counterparty],
    ["/ibc.core.channel.v1.QueryPacketCommitmentsRequest", query_5.QueryPacketCommitmentsRequest],
    ["/ibc.core.channel.v1.QueryPacketCommitmentsResponse", query_6.QueryPacketCommitmentsResponse],
    ["/ibc.core.channel.v1.QueryNextSequenceSendRequest", query_7.QueryNextSequenceSendRequest],
    ["/ibc.core.channel.v1.MsgChannelCloseInitResponse", tx_10.MsgChannelCloseInitResponse],
    ["/ibc.core.channel.v1.MsgTimeoutResponse", tx_11.MsgTimeoutResponse],
    ["/ibc.core.channel.v1.QueryChannelConsensusStateResponse", query_8.QueryChannelConsensusStateResponse],
    ["/ibc.core.channel.v1.QueryPacketAcknowledgementsResponse", query_9.QueryPacketAcknowledgementsResponse],
    ["/ibc.core.channel.v1.QueryChannelParamsResponse", query_10.QueryChannelParamsResponse],
    ["/ibc.core.channel.v1.MsgChannelOpenTry", tx_12.MsgChannelOpenTry],
    ["/ibc.core.channel.v1.MsgTimeout", tx_13.MsgTimeout],
    ["/ibc.core.channel.v1.MsgChannelUpgradeTryResponse", tx_14.MsgChannelUpgradeTryResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeConfirmResponse", tx_15.MsgChannelUpgradeConfirmResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeTimeoutResponse", tx_16.MsgChannelUpgradeTimeoutResponse],
    ["/ibc.core.channel.v1.QueryChannelsRequest", query_11.QueryChannelsRequest],
    ["/ibc.core.channel.v1.QueryPacketCommitmentRequest", query_12.QueryPacketCommitmentRequest],
    ["/ibc.core.channel.v1.MsgUpdateParams", tx_17.MsgUpdateParams],
    ["/ibc.core.channel.v1.MsgChannelUpgradeAck", tx_18.MsgChannelUpgradeAck],
    ["/ibc.core.channel.v1.MsgChannelUpgradeCancelResponse", tx_19.MsgChannelUpgradeCancelResponse],
    ["/ibc.core.channel.v1.UpgradeFields", upgrade_1.UpgradeFields],
    ["/ibc.core.channel.v1.MsgChannelOpenAckResponse", tx_20.MsgChannelOpenAckResponse],
    ["/ibc.core.channel.v1.QueryUnreceivedPacketsResponse", query_13.QueryUnreceivedPacketsResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeOpenResponse", tx_21.MsgChannelUpgradeOpenResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeTimeout", tx_22.MsgChannelUpgradeTimeout],
    ["/ibc.core.channel.v1.MsgChannelUpgradeCancel", tx_23.MsgChannelUpgradeCancel],
    ["/ibc.core.channel.v1.QueryChannelRequest", query_14.QueryChannelRequest],
    ["/ibc.core.channel.v1.QueryChannelsResponse", query_15.QueryChannelsResponse],
    ["/ibc.core.channel.v1.MsgChannelCloseConfirmResponse", tx_24.MsgChannelCloseConfirmResponse],
    ["/ibc.core.channel.v1.MsgUpdateParamsResponse", tx_25.MsgUpdateParamsResponse],
    ["/ibc.core.channel.v1.MsgPruneAcknowledgementsResponse", tx_26.MsgPruneAcknowledgementsResponse],
    ["/ibc.core.channel.v1.ErrorReceipt", upgrade_2.ErrorReceipt],
    ["/ibc.core.channel.v1.QueryChannelConsensusStateRequest", query_16.QueryChannelConsensusStateRequest],
    ["/ibc.core.channel.v1.QueryNextSequenceReceiveResponse", query_17.QueryNextSequenceReceiveResponse],
    ["/ibc.core.channel.v1.QueryChannelParamsRequest", query_18.QueryChannelParamsRequest],
    ["/ibc.core.channel.v1.MsgChannelOpenAck", tx_27.MsgChannelOpenAck],
    ["/ibc.core.channel.v1.MsgChannelCloseConfirm", tx_28.MsgChannelCloseConfirm],
    ["/ibc.core.channel.v1.MsgRecvPacketResponse", tx_29.MsgRecvPacketResponse],
    ["/ibc.core.channel.v1.MsgPruneAcknowledgements", tx_30.MsgPruneAcknowledgements],
    ["/ibc.core.channel.v1.QueryUnreceivedAcksRequest", query_19.QueryUnreceivedAcksRequest],
    ["/ibc.core.channel.v1.QueryUnreceivedAcksResponse", query_20.QueryUnreceivedAcksResponse],
    ["/ibc.core.channel.v1.MsgChannelOpenConfirmResponse", tx_31.MsgChannelOpenConfirmResponse],
    ["/ibc.core.channel.v1.MsgRecvPacket", tx_32.MsgRecvPacket],
    ["/ibc.core.channel.v1.MsgTimeoutOnCloseResponse", tx_33.MsgTimeoutOnCloseResponse],
    ["/ibc.core.channel.v1.Upgrade", upgrade_3.Upgrade],
    ["/ibc.core.channel.v1.PacketSequence", genesis_1.PacketSequence],
    ["/ibc.core.channel.v1.QueryChannelClientStateRequest", query_21.QueryChannelClientStateRequest],
    ["/ibc.core.channel.v1.QueryUpgradeErrorResponse", query_22.QueryUpgradeErrorResponse],
    ["/ibc.core.channel.v1.Channel", channel_6.Channel],
    ["/ibc.core.channel.v1.QueryPacketAcknowledgementsRequest", query_23.QueryPacketAcknowledgementsRequest],
    ["/ibc.core.channel.v1.QueryUpgradeRequest", query_24.QueryUpgradeRequest],
    ["/ibc.core.channel.v1.MsgChannelCloseInit", tx_34.MsgChannelCloseInit],
    ["/ibc.core.channel.v1.Acknowledgement", channel_7.Acknowledgement],
    ["/ibc.core.channel.v1.QueryChannelResponse", query_25.QueryChannelResponse],
    ["/ibc.core.channel.v1.QueryPacketAcknowledgementRequest", query_26.QueryPacketAcknowledgementRequest],
    ["/ibc.core.channel.v1.QueryConnectionChannelsRequest", query_27.QueryConnectionChannelsRequest],
    ["/ibc.core.channel.v1.MsgChannelOpenInitResponse", tx_35.MsgChannelOpenInitResponse],
    ["/ibc.core.channel.v1.QueryUnreceivedPacketsRequest", query_28.QueryUnreceivedPacketsRequest],
    ["/ibc.core.channel.v1.QueryChannelClientStateResponse", query_29.QueryChannelClientStateResponse],
    ["/ibc.core.channel.v1.QueryPacketAcknowledgementResponse", query_30.QueryPacketAcknowledgementResponse],
    ["/ibc.core.channel.v1.MsgChannelOpenTryResponse", tx_36.MsgChannelOpenTryResponse],
    ["/ibc.core.channel.v1.Params", channel_8.Params],
    ["/ibc.core.channel.v1.GenesisState", genesis_2.GenesisState],
    ["/ibc.core.channel.v1.Timeout", channel_9.Timeout],
    ["/ibc.core.channel.v1.QueryPacketCommitmentResponse", query_31.QueryPacketCommitmentResponse],
    ["/ibc.core.channel.v1.QueryPacketReceiptRequest", query_32.QueryPacketReceiptRequest],
    ["/ibc.core.channel.v1.MsgChannelUpgradeAckResponse", tx_37.MsgChannelUpgradeAckResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeConfirm", tx_38.MsgChannelUpgradeConfirm],
    ["/ibc.core.channel.v1.QueryNextSequenceReceiveRequest", query_33.QueryNextSequenceReceiveRequest],
    ["/ibc.core.channel.v1.QueryUpgradeResponse", query_34.QueryUpgradeResponse],
];
exports.msgTypes = msgTypes;
