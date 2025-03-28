"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const channel_1 = require("./types/ibc/core/channel/v1/channel");
const channel_2 = require("./types/ibc/core/channel/v1/channel");
const tx_1 = require("./types/ibc/core/channel/v1/tx");
const tx_2 = require("./types/ibc/core/channel/v1/tx");
const query_1 = require("./types/ibc/core/channel/v1/query");
const query_2 = require("./types/ibc/core/channel/v1/query");
const query_3 = require("./types/ibc/core/channel/v1/query");
const upgrade_1 = require("./types/ibc/core/channel/v1/upgrade");
const tx_3 = require("./types/ibc/core/channel/v1/tx");
const tx_4 = require("./types/ibc/core/channel/v1/tx");
const tx_5 = require("./types/ibc/core/channel/v1/tx");
const query_4 = require("./types/ibc/core/channel/v1/query");
const query_5 = require("./types/ibc/core/channel/v1/query");
const tx_6 = require("./types/ibc/core/channel/v1/tx");
const tx_7 = require("./types/ibc/core/channel/v1/tx");
const query_6 = require("./types/ibc/core/channel/v1/query");
const tx_8 = require("./types/ibc/core/channel/v1/tx");
const query_7 = require("./types/ibc/core/channel/v1/query");
const query_8 = require("./types/ibc/core/channel/v1/query");
const query_9 = require("./types/ibc/core/channel/v1/query");
const query_10 = require("./types/ibc/core/channel/v1/query");
const query_11 = require("./types/ibc/core/channel/v1/query");
const tx_9 = require("./types/ibc/core/channel/v1/tx");
const query_12 = require("./types/ibc/core/channel/v1/query");
const query_13 = require("./types/ibc/core/channel/v1/query");
const channel_3 = require("./types/ibc/core/channel/v1/channel");
const upgrade_2 = require("./types/ibc/core/channel/v1/upgrade");
const tx_10 = require("./types/ibc/core/channel/v1/tx");
const tx_11 = require("./types/ibc/core/channel/v1/tx");
const tx_12 = require("./types/ibc/core/channel/v1/tx");
const query_14 = require("./types/ibc/core/channel/v1/query");
const query_15 = require("./types/ibc/core/channel/v1/query");
const genesis_1 = require("./types/ibc/core/channel/v1/genesis");
const channel_4 = require("./types/ibc/core/channel/v1/channel");
const query_16 = require("./types/ibc/core/channel/v1/query");
const query_17 = require("./types/ibc/core/channel/v1/query");
const query_18 = require("./types/ibc/core/channel/v1/query");
const channel_5 = require("./types/ibc/core/channel/v1/channel");
const tx_13 = require("./types/ibc/core/channel/v1/tx");
const tx_14 = require("./types/ibc/core/channel/v1/tx");
const channel_6 = require("./types/ibc/core/channel/v1/channel");
const tx_15 = require("./types/ibc/core/channel/v1/tx");
const tx_16 = require("./types/ibc/core/channel/v1/tx");
const query_19 = require("./types/ibc/core/channel/v1/query");
const query_20 = require("./types/ibc/core/channel/v1/query");
const query_21 = require("./types/ibc/core/channel/v1/query");
const channel_7 = require("./types/ibc/core/channel/v1/channel");
const tx_17 = require("./types/ibc/core/channel/v1/tx");
const tx_18 = require("./types/ibc/core/channel/v1/tx");
const query_22 = require("./types/ibc/core/channel/v1/query");
const tx_19 = require("./types/ibc/core/channel/v1/tx");
const tx_20 = require("./types/ibc/core/channel/v1/tx");
const tx_21 = require("./types/ibc/core/channel/v1/tx");
const query_23 = require("./types/ibc/core/channel/v1/query");
const query_24 = require("./types/ibc/core/channel/v1/query");
const genesis_2 = require("./types/ibc/core/channel/v1/genesis");
const tx_22 = require("./types/ibc/core/channel/v1/tx");
const tx_23 = require("./types/ibc/core/channel/v1/tx");
const query_25 = require("./types/ibc/core/channel/v1/query");
const query_26 = require("./types/ibc/core/channel/v1/query");
const channel_8 = require("./types/ibc/core/channel/v1/channel");
const tx_24 = require("./types/ibc/core/channel/v1/tx");
const tx_25 = require("./types/ibc/core/channel/v1/tx");
const tx_26 = require("./types/ibc/core/channel/v1/tx");
const tx_27 = require("./types/ibc/core/channel/v1/tx");
const tx_28 = require("./types/ibc/core/channel/v1/tx");
const tx_29 = require("./types/ibc/core/channel/v1/tx");
const query_27 = require("./types/ibc/core/channel/v1/query");
const query_28 = require("./types/ibc/core/channel/v1/query");
const query_29 = require("./types/ibc/core/channel/v1/query");
const channel_9 = require("./types/ibc/core/channel/v1/channel");
const tx_30 = require("./types/ibc/core/channel/v1/tx");
const query_30 = require("./types/ibc/core/channel/v1/query");
const upgrade_3 = require("./types/ibc/core/channel/v1/upgrade");
const tx_31 = require("./types/ibc/core/channel/v1/tx");
const tx_32 = require("./types/ibc/core/channel/v1/tx");
const tx_33 = require("./types/ibc/core/channel/v1/tx");
const tx_34 = require("./types/ibc/core/channel/v1/tx");
const tx_35 = require("./types/ibc/core/channel/v1/tx");
const query_31 = require("./types/ibc/core/channel/v1/query");
const tx_36 = require("./types/ibc/core/channel/v1/tx");
const tx_37 = require("./types/ibc/core/channel/v1/tx");
const tx_38 = require("./types/ibc/core/channel/v1/tx");
const query_32 = require("./types/ibc/core/channel/v1/query");
const query_33 = require("./types/ibc/core/channel/v1/query");
const query_34 = require("./types/ibc/core/channel/v1/query");
const msgTypes = [
    ["/ibc.core.channel.v1.IdentifiedChannel", channel_1.IdentifiedChannel],
    ["/ibc.core.channel.v1.Params", channel_2.Params],
    ["/ibc.core.channel.v1.MsgChannelOpenConfirm", tx_1.MsgChannelOpenConfirm],
    ["/ibc.core.channel.v1.MsgChannelUpgradeTimeout", tx_2.MsgChannelUpgradeTimeout],
    ["/ibc.core.channel.v1.QueryPacketCommitmentRequest", query_1.QueryPacketCommitmentRequest],
    ["/ibc.core.channel.v1.QueryPacketCommitmentsResponse", query_2.QueryPacketCommitmentsResponse],
    ["/ibc.core.channel.v1.QueryUnreceivedPacketsRequest", query_3.QueryUnreceivedPacketsRequest],
    ["/ibc.core.channel.v1.Upgrade", upgrade_1.Upgrade],
    ["/ibc.core.channel.v1.MsgTimeoutOnCloseResponse", tx_3.MsgTimeoutOnCloseResponse],
    ["/ibc.core.channel.v1.MsgChannelOpenInit", tx_4.MsgChannelOpenInit],
    ["/ibc.core.channel.v1.MsgChannelCloseInit", tx_5.MsgChannelCloseInit],
    ["/ibc.core.channel.v1.QueryPacketCommitmentResponse", query_4.QueryPacketCommitmentResponse],
    ["/ibc.core.channel.v1.QueryNextSequenceReceiveRequest", query_5.QueryNextSequenceReceiveRequest],
    ["/ibc.core.channel.v1.MsgChannelUpgradeConfirm", tx_6.MsgChannelUpgradeConfirm],
    ["/ibc.core.channel.v1.MsgAcknowledgementResponse", tx_7.MsgAcknowledgementResponse],
    ["/ibc.core.channel.v1.QueryChannelParamsRequest", query_6.QueryChannelParamsRequest],
    ["/ibc.core.channel.v1.MsgChannelUpgradeCancelResponse", tx_8.MsgChannelUpgradeCancelResponse],
    ["/ibc.core.channel.v1.QueryChannelResponse", query_7.QueryChannelResponse],
    ["/ibc.core.channel.v1.QueryPacketAcknowledgementsRequest", query_8.QueryPacketAcknowledgementsRequest],
    ["/ibc.core.channel.v1.QueryPacketAcknowledgementsResponse", query_9.QueryPacketAcknowledgementsResponse],
    ["/ibc.core.channel.v1.QueryUnreceivedAcksResponse", query_10.QueryUnreceivedAcksResponse],
    ["/ibc.core.channel.v1.QueryUpgradeErrorResponse", query_11.QueryUpgradeErrorResponse],
    ["/ibc.core.channel.v1.MsgChannelOpenTry", tx_9.MsgChannelOpenTry],
    ["/ibc.core.channel.v1.QueryPacketReceiptRequest", query_12.QueryPacketReceiptRequest],
    ["/ibc.core.channel.v1.QueryPacketAcknowledgementResponse", query_13.QueryPacketAcknowledgementResponse],
    ["/ibc.core.channel.v1.Counterparty", channel_3.Counterparty],
    ["/ibc.core.channel.v1.UpgradeFields", upgrade_2.UpgradeFields],
    ["/ibc.core.channel.v1.MsgChannelCloseConfirm", tx_10.MsgChannelCloseConfirm],
    ["/ibc.core.channel.v1.MsgTimeout", tx_11.MsgTimeout],
    ["/ibc.core.channel.v1.MsgAcknowledgement", tx_12.MsgAcknowledgement],
    ["/ibc.core.channel.v1.QueryChannelClientStateResponse", query_14.QueryChannelClientStateResponse],
    ["/ibc.core.channel.v1.QueryNextSequenceReceiveResponse", query_15.QueryNextSequenceReceiveResponse],
    ["/ibc.core.channel.v1.PacketSequence", genesis_1.PacketSequence],
    ["/ibc.core.channel.v1.Timeout", channel_4.Timeout],
    ["/ibc.core.channel.v1.QueryConnectionChannelsRequest", query_16.QueryConnectionChannelsRequest],
    ["/ibc.core.channel.v1.QueryChannelClientStateRequest", query_17.QueryChannelClientStateRequest],
    ["/ibc.core.channel.v1.QueryUpgradeRequest", query_18.QueryUpgradeRequest],
    ["/ibc.core.channel.v1.PacketState", channel_5.PacketState],
    ["/ibc.core.channel.v1.MsgChannelCloseConfirmResponse", tx_13.MsgChannelCloseConfirmResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeTryResponse", tx_14.MsgChannelUpgradeTryResponse],
    ["/ibc.core.channel.v1.PacketId", channel_6.PacketId],
    ["/ibc.core.channel.v1.MsgChannelUpgradeAckResponse", tx_15.MsgChannelUpgradeAckResponse],
    ["/ibc.core.channel.v1.MsgUpdateParams", tx_16.MsgUpdateParams],
    ["/ibc.core.channel.v1.QueryChannelsRequest", query_19.QueryChannelsRequest],
    ["/ibc.core.channel.v1.QueryConnectionChannelsResponse", query_20.QueryConnectionChannelsResponse],
    ["/ibc.core.channel.v1.QueryPacketAcknowledgementRequest", query_21.QueryPacketAcknowledgementRequest],
    ["/ibc.core.channel.v1.Channel", channel_7.Channel],
    ["/ibc.core.channel.v1.MsgPruneAcknowledgementsResponse", tx_17.MsgPruneAcknowledgementsResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeOpen", tx_18.MsgChannelUpgradeOpen],
    ["/ibc.core.channel.v1.QueryUpgradeResponse", query_22.QueryUpgradeResponse],
    ["/ibc.core.channel.v1.MsgChannelOpenAckResponse", tx_19.MsgChannelOpenAckResponse],
    ["/ibc.core.channel.v1.MsgUpdateParamsResponse", tx_20.MsgUpdateParamsResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeAck", tx_21.MsgChannelUpgradeAck],
    ["/ibc.core.channel.v1.QueryPacketCommitmentsRequest", query_23.QueryPacketCommitmentsRequest],
    ["/ibc.core.channel.v1.QueryUnreceivedAcksRequest", query_24.QueryUnreceivedAcksRequest],
    ["/ibc.core.channel.v1.GenesisState", genesis_2.GenesisState],
    ["/ibc.core.channel.v1.MsgChannelUpgradeOpenResponse", tx_22.MsgChannelUpgradeOpenResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeTimeoutResponse", tx_23.MsgChannelUpgradeTimeoutResponse],
    ["/ibc.core.channel.v1.QueryChannelRequest", query_25.QueryChannelRequest],
    ["/ibc.core.channel.v1.QueryNextSequenceSendResponse", query_26.QueryNextSequenceSendResponse],
    ["/ibc.core.channel.v1.Acknowledgement", channel_8.Acknowledgement],
    ["/ibc.core.channel.v1.MsgChannelUpgradeInitResponse", tx_24.MsgChannelUpgradeInitResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeConfirmResponse", tx_25.MsgChannelUpgradeConfirmResponse],
    ["/ibc.core.channel.v1.MsgChannelOpenConfirmResponse", tx_26.MsgChannelOpenConfirmResponse],
    ["/ibc.core.channel.v1.MsgChannelCloseInitResponse", tx_27.MsgChannelCloseInitResponse],
    ["/ibc.core.channel.v1.MsgTimeoutResponse", tx_28.MsgTimeoutResponse],
    ["/ibc.core.channel.v1.MsgPruneAcknowledgements", tx_29.MsgPruneAcknowledgements],
    ["/ibc.core.channel.v1.QueryChannelsResponse", query_27.QueryChannelsResponse],
    ["/ibc.core.channel.v1.QueryPacketReceiptResponse", query_28.QueryPacketReceiptResponse],
    ["/ibc.core.channel.v1.QueryUpgradeErrorRequest", query_29.QueryUpgradeErrorRequest],
    ["/ibc.core.channel.v1.Packet", channel_9.Packet],
    ["/ibc.core.channel.v1.MsgRecvPacket", tx_30.MsgRecvPacket],
    ["/ibc.core.channel.v1.QueryChannelConsensusStateResponse", query_30.QueryChannelConsensusStateResponse],
    ["/ibc.core.channel.v1.ErrorReceipt", upgrade_3.ErrorReceipt],
    ["/ibc.core.channel.v1.MsgChannelOpenInitResponse", tx_31.MsgChannelOpenInitResponse],
    ["/ibc.core.channel.v1.MsgRecvPacketResponse", tx_32.MsgRecvPacketResponse],
    ["/ibc.core.channel.v1.MsgChannelOpenAck", tx_33.MsgChannelOpenAck],
    ["/ibc.core.channel.v1.MsgTimeoutOnClose", tx_34.MsgTimeoutOnClose],
    ["/ibc.core.channel.v1.MsgChannelUpgradeTry", tx_35.MsgChannelUpgradeTry],
    ["/ibc.core.channel.v1.QueryChannelParamsResponse", query_31.QueryChannelParamsResponse],
    ["/ibc.core.channel.v1.MsgChannelOpenTryResponse", tx_36.MsgChannelOpenTryResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeInit", tx_37.MsgChannelUpgradeInit],
    ["/ibc.core.channel.v1.MsgChannelUpgradeCancel", tx_38.MsgChannelUpgradeCancel],
    ["/ibc.core.channel.v1.QueryChannelConsensusStateRequest", query_32.QueryChannelConsensusStateRequest],
    ["/ibc.core.channel.v1.QueryUnreceivedPacketsResponse", query_33.QueryUnreceivedPacketsResponse],
    ["/ibc.core.channel.v1.QueryNextSequenceSendRequest", query_34.QueryNextSequenceSendRequest],
];
exports.msgTypes = msgTypes;
