"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const genesis_1 = require("./types/ibc/core/channel/v1/genesis");
const tx_1 = require("./types/ibc/core/channel/v1/tx");
const tx_2 = require("./types/ibc/core/channel/v1/tx");
const query_1 = require("./types/ibc/core/channel/v1/query");
const query_2 = require("./types/ibc/core/channel/v1/query");
const query_3 = require("./types/ibc/core/channel/v1/query");
const query_4 = require("./types/ibc/core/channel/v1/query");
const tx_3 = require("./types/ibc/core/channel/v1/tx");
const channel_1 = require("./types/ibc/core/channel/v1/channel");
const query_5 = require("./types/ibc/core/channel/v1/query");
const query_6 = require("./types/ibc/core/channel/v1/query");
const query_7 = require("./types/ibc/core/channel/v1/query");
const query_8 = require("./types/ibc/core/channel/v1/query");
const query_9 = require("./types/ibc/core/channel/v1/query");
const tx_4 = require("./types/ibc/core/channel/v1/tx");
const query_10 = require("./types/ibc/core/channel/v1/query");
const channel_2 = require("./types/ibc/core/channel/v1/channel");
const tx_5 = require("./types/ibc/core/channel/v1/tx");
const tx_6 = require("./types/ibc/core/channel/v1/tx");
const query_11 = require("./types/ibc/core/channel/v1/query");
const genesis_2 = require("./types/ibc/core/channel/v1/genesis");
const tx_7 = require("./types/ibc/core/channel/v1/tx");
const query_12 = require("./types/ibc/core/channel/v1/query");
const tx_8 = require("./types/ibc/core/channel/v1/tx");
const tx_9 = require("./types/ibc/core/channel/v1/tx");
const tx_10 = require("./types/ibc/core/channel/v1/tx");
const query_13 = require("./types/ibc/core/channel/v1/query");
const channel_3 = require("./types/ibc/core/channel/v1/channel");
const tx_11 = require("./types/ibc/core/channel/v1/tx");
const tx_12 = require("./types/ibc/core/channel/v1/tx");
const upgrade_1 = require("./types/ibc/core/channel/v1/upgrade");
const channel_4 = require("./types/ibc/core/channel/v1/channel");
const tx_13 = require("./types/ibc/core/channel/v1/tx");
const query_14 = require("./types/ibc/core/channel/v1/query");
const tx_14 = require("./types/ibc/core/channel/v1/tx");
const tx_15 = require("./types/ibc/core/channel/v1/tx");
const query_15 = require("./types/ibc/core/channel/v1/query");
const tx_16 = require("./types/ibc/core/channel/v1/tx");
const query_16 = require("./types/ibc/core/channel/v1/query");
const query_17 = require("./types/ibc/core/channel/v1/query");
const tx_17 = require("./types/ibc/core/channel/v1/tx");
const tx_18 = require("./types/ibc/core/channel/v1/tx");
const channel_5 = require("./types/ibc/core/channel/v1/channel");
const channel_6 = require("./types/ibc/core/channel/v1/channel");
const tx_19 = require("./types/ibc/core/channel/v1/tx");
const tx_20 = require("./types/ibc/core/channel/v1/tx");
const tx_21 = require("./types/ibc/core/channel/v1/tx");
const tx_22 = require("./types/ibc/core/channel/v1/tx");
const tx_23 = require("./types/ibc/core/channel/v1/tx");
const tx_24 = require("./types/ibc/core/channel/v1/tx");
const query_18 = require("./types/ibc/core/channel/v1/query");
const query_19 = require("./types/ibc/core/channel/v1/query");
const query_20 = require("./types/ibc/core/channel/v1/query");
const query_21 = require("./types/ibc/core/channel/v1/query");
const tx_25 = require("./types/ibc/core/channel/v1/tx");
const tx_26 = require("./types/ibc/core/channel/v1/tx");
const upgrade_2 = require("./types/ibc/core/channel/v1/upgrade");
const tx_27 = require("./types/ibc/core/channel/v1/tx");
const tx_28 = require("./types/ibc/core/channel/v1/tx");
const query_22 = require("./types/ibc/core/channel/v1/query");
const query_23 = require("./types/ibc/core/channel/v1/query");
const channel_7 = require("./types/ibc/core/channel/v1/channel");
const upgrade_3 = require("./types/ibc/core/channel/v1/upgrade");
const channel_8 = require("./types/ibc/core/channel/v1/channel");
const tx_29 = require("./types/ibc/core/channel/v1/tx");
const tx_30 = require("./types/ibc/core/channel/v1/tx");
const tx_31 = require("./types/ibc/core/channel/v1/tx");
const query_24 = require("./types/ibc/core/channel/v1/query");
const query_25 = require("./types/ibc/core/channel/v1/query");
const channel_9 = require("./types/ibc/core/channel/v1/channel");
const query_26 = require("./types/ibc/core/channel/v1/query");
const query_27 = require("./types/ibc/core/channel/v1/query");
const query_28 = require("./types/ibc/core/channel/v1/query");
const tx_32 = require("./types/ibc/core/channel/v1/tx");
const tx_33 = require("./types/ibc/core/channel/v1/tx");
const query_29 = require("./types/ibc/core/channel/v1/query");
const query_30 = require("./types/ibc/core/channel/v1/query");
const tx_34 = require("./types/ibc/core/channel/v1/tx");
const tx_35 = require("./types/ibc/core/channel/v1/tx");
const query_31 = require("./types/ibc/core/channel/v1/query");
const query_32 = require("./types/ibc/core/channel/v1/query");
const query_33 = require("./types/ibc/core/channel/v1/query");
const query_34 = require("./types/ibc/core/channel/v1/query");
const tx_36 = require("./types/ibc/core/channel/v1/tx");
const tx_37 = require("./types/ibc/core/channel/v1/tx");
const tx_38 = require("./types/ibc/core/channel/v1/tx");
const msgTypes = [
    ["/ibc.core.channel.v1.PacketSequence", genesis_1.PacketSequence],
    ["/ibc.core.channel.v1.MsgChannelOpenConfirm", tx_1.MsgChannelOpenConfirm],
    ["/ibc.core.channel.v1.MsgPruneAcknowledgements", tx_2.MsgPruneAcknowledgements],
    ["/ibc.core.channel.v1.QueryConnectionChannelsResponse", query_1.QueryConnectionChannelsResponse],
    ["/ibc.core.channel.v1.QueryPacketAcknowledgementsResponse", query_2.QueryPacketAcknowledgementsResponse],
    ["/ibc.core.channel.v1.QueryUnreceivedPacketsRequest", query_3.QueryUnreceivedPacketsRequest],
    ["/ibc.core.channel.v1.QueryUpgradeErrorRequest", query_4.QueryUpgradeErrorRequest],
    ["/ibc.core.channel.v1.MsgChannelCloseConfirmResponse", tx_3.MsgChannelCloseConfirmResponse],
    ["/ibc.core.channel.v1.PacketState", channel_1.PacketState],
    ["/ibc.core.channel.v1.QueryChannelRequest", query_5.QueryChannelRequest],
    ["/ibc.core.channel.v1.QueryPacketCommitmentResponse", query_6.QueryPacketCommitmentResponse],
    ["/ibc.core.channel.v1.QueryUnreceivedPacketsResponse", query_7.QueryUnreceivedPacketsResponse],
    ["/ibc.core.channel.v1.QueryNextSequenceSendRequest", query_8.QueryNextSequenceSendRequest],
    ["/ibc.core.channel.v1.QueryUpgradeRequest", query_9.QueryUpgradeRequest],
    ["/ibc.core.channel.v1.MsgChannelUpgradeAckResponse", tx_4.MsgChannelUpgradeAckResponse],
    ["/ibc.core.channel.v1.QueryChannelConsensusStateResponse", query_10.QueryChannelConsensusStateResponse],
    ["/ibc.core.channel.v1.IdentifiedChannel", channel_2.IdentifiedChannel],
    ["/ibc.core.channel.v1.MsgRecvPacket", tx_5.MsgRecvPacket],
    ["/ibc.core.channel.v1.MsgChannelUpgradeTimeout", tx_6.MsgChannelUpgradeTimeout],
    ["/ibc.core.channel.v1.QueryNextSequenceReceiveResponse", query_11.QueryNextSequenceReceiveResponse],
    ["/ibc.core.channel.v1.GenesisState", genesis_2.GenesisState],
    ["/ibc.core.channel.v1.MsgChannelUpgradeOpen", tx_7.MsgChannelUpgradeOpen],
    ["/ibc.core.channel.v1.QueryPacketAcknowledgementRequest", query_12.QueryPacketAcknowledgementRequest],
    ["/ibc.core.channel.v1.MsgChannelOpenAckResponse", tx_8.MsgChannelOpenAckResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeTryResponse", tx_9.MsgChannelUpgradeTryResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeCancelResponse", tx_10.MsgChannelUpgradeCancelResponse],
    ["/ibc.core.channel.v1.QueryChannelClientStateResponse", query_13.QueryChannelClientStateResponse],
    ["/ibc.core.channel.v1.Acknowledgement", channel_3.Acknowledgement],
    ["/ibc.core.channel.v1.MsgChannelOpenConfirmResponse", tx_11.MsgChannelOpenConfirmResponse],
    ["/ibc.core.channel.v1.MsgChannelCloseInitResponse", tx_12.MsgChannelCloseInitResponse],
    ["/ibc.core.channel.v1.Upgrade", upgrade_1.Upgrade],
    ["/ibc.core.channel.v1.Channel", channel_4.Channel],
    ["/ibc.core.channel.v1.MsgTimeoutOnClose", tx_13.MsgTimeoutOnClose],
    ["/ibc.core.channel.v1.QueryUpgradeErrorResponse", query_14.QueryUpgradeErrorResponse],
    ["/ibc.core.channel.v1.MsgTimeoutResponse", tx_14.MsgTimeoutResponse],
    ["/ibc.core.channel.v1.MsgChannelCloseConfirm", tx_15.MsgChannelCloseConfirm],
    ["/ibc.core.channel.v1.QueryPacketCommitmentRequest", query_15.QueryPacketCommitmentRequest],
    ["/ibc.core.channel.v1.MsgRecvPacketResponse", tx_16.MsgRecvPacketResponse],
    ["/ibc.core.channel.v1.QueryChannelsRequest", query_16.QueryChannelsRequest],
    ["/ibc.core.channel.v1.QueryChannelClientStateRequest", query_17.QueryChannelClientStateRequest],
    ["/ibc.core.channel.v1.MsgChannelOpenTryResponse", tx_17.MsgChannelOpenTryResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeTimeoutResponse", tx_18.MsgChannelUpgradeTimeoutResponse],
    ["/ibc.core.channel.v1.Counterparty", channel_5.Counterparty],
    ["/ibc.core.channel.v1.PacketId", channel_6.PacketId],
    ["/ibc.core.channel.v1.MsgChannelUpgradeTry", tx_19.MsgChannelUpgradeTry],
    ["/ibc.core.channel.v1.MsgChannelUpgradeOpenResponse", tx_20.MsgChannelUpgradeOpenResponse],
    ["/ibc.core.channel.v1.MsgChannelOpenInit", tx_21.MsgChannelOpenInit],
    ["/ibc.core.channel.v1.MsgChannelCloseInit", tx_22.MsgChannelCloseInit],
    ["/ibc.core.channel.v1.MsgAcknowledgement", tx_23.MsgAcknowledgement],
    ["/ibc.core.channel.v1.MsgChannelUpgradeInit", tx_24.MsgChannelUpgradeInit],
    ["/ibc.core.channel.v1.QueryChannelsResponse", query_18.QueryChannelsResponse],
    ["/ibc.core.channel.v1.QueryNextSequenceReceiveRequest", query_19.QueryNextSequenceReceiveRequest],
    ["/ibc.core.channel.v1.QueryNextSequenceSendResponse", query_20.QueryNextSequenceSendResponse],
    ["/ibc.core.channel.v1.QueryUpgradeResponse", query_21.QueryUpgradeResponse],
    ["/ibc.core.channel.v1.MsgChannelOpenInitResponse", tx_25.MsgChannelOpenInitResponse],
    ["/ibc.core.channel.v1.MsgAcknowledgementResponse", tx_26.MsgAcknowledgementResponse],
    ["/ibc.core.channel.v1.UpgradeFields", upgrade_2.UpgradeFields],
    ["/ibc.core.channel.v1.MsgTimeout", tx_27.MsgTimeout],
    ["/ibc.core.channel.v1.MsgChannelUpgradeAck", tx_28.MsgChannelUpgradeAck],
    ["/ibc.core.channel.v1.QueryPacketAcknowledgementResponse", query_22.QueryPacketAcknowledgementResponse],
    ["/ibc.core.channel.v1.QueryUnreceivedAcksResponse", query_23.QueryUnreceivedAcksResponse],
    ["/ibc.core.channel.v1.Params", channel_7.Params],
    ["/ibc.core.channel.v1.ErrorReceipt", upgrade_3.ErrorReceipt],
    ["/ibc.core.channel.v1.Timeout", channel_8.Timeout],
    ["/ibc.core.channel.v1.MsgChannelOpenAck", tx_29.MsgChannelOpenAck],
    ["/ibc.core.channel.v1.MsgChannelOpenTry", tx_30.MsgChannelOpenTry],
    ["/ibc.core.channel.v1.MsgChannelUpgradeCancel", tx_31.MsgChannelUpgradeCancel],
    ["/ibc.core.channel.v1.QueryChannelConsensusStateRequest", query_24.QueryChannelConsensusStateRequest],
    ["/ibc.core.channel.v1.QueryPacketAcknowledgementsRequest", query_25.QueryPacketAcknowledgementsRequest],
    ["/ibc.core.channel.v1.Packet", channel_9.Packet],
    ["/ibc.core.channel.v1.QueryConnectionChannelsRequest", query_26.QueryConnectionChannelsRequest],
    ["/ibc.core.channel.v1.QueryPacketReceiptResponse", query_27.QueryPacketReceiptResponse],
    ["/ibc.core.channel.v1.QueryUnreceivedAcksRequest", query_28.QueryUnreceivedAcksRequest],
    ["/ibc.core.channel.v1.MsgChannelUpgradeConfirm", tx_32.MsgChannelUpgradeConfirm],
    ["/ibc.core.channel.v1.MsgUpdateParams", tx_33.MsgUpdateParams],
    ["/ibc.core.channel.v1.QueryChannelResponse", query_29.QueryChannelResponse],
    ["/ibc.core.channel.v1.QueryPacketReceiptRequest", query_30.QueryPacketReceiptRequest],
    ["/ibc.core.channel.v1.MsgChannelUpgradeInitResponse", tx_34.MsgChannelUpgradeInitResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeConfirmResponse", tx_35.MsgChannelUpgradeConfirmResponse],
    ["/ibc.core.channel.v1.QueryPacketCommitmentsRequest", query_31.QueryPacketCommitmentsRequest],
    ["/ibc.core.channel.v1.QueryPacketCommitmentsResponse", query_32.QueryPacketCommitmentsResponse],
    ["/ibc.core.channel.v1.QueryChannelParamsRequest", query_33.QueryChannelParamsRequest],
    ["/ibc.core.channel.v1.QueryChannelParamsResponse", query_34.QueryChannelParamsResponse],
    ["/ibc.core.channel.v1.MsgTimeoutOnCloseResponse", tx_36.MsgTimeoutOnCloseResponse],
    ["/ibc.core.channel.v1.MsgUpdateParamsResponse", tx_37.MsgUpdateParamsResponse],
    ["/ibc.core.channel.v1.MsgPruneAcknowledgementsResponse", tx_38.MsgPruneAcknowledgementsResponse],
];
exports.msgTypes = msgTypes;
