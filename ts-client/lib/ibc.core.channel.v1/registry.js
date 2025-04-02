"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const query_1 = require("./types/ibc/core/channel/v1/query");
const tx_1 = require("./types/ibc/core/channel/v1/tx");
const channel_1 = require("./types/ibc/core/channel/v1/channel");
const channel_2 = require("./types/ibc/core/channel/v1/channel");
const query_2 = require("./types/ibc/core/channel/v1/query");
const query_3 = require("./types/ibc/core/channel/v1/query");
const query_4 = require("./types/ibc/core/channel/v1/query");
const query_5 = require("./types/ibc/core/channel/v1/query");
const query_6 = require("./types/ibc/core/channel/v1/query");
const query_7 = require("./types/ibc/core/channel/v1/query");
const query_8 = require("./types/ibc/core/channel/v1/query");
const tx_2 = require("./types/ibc/core/channel/v1/tx");
const tx_3 = require("./types/ibc/core/channel/v1/tx");
const tx_4 = require("./types/ibc/core/channel/v1/tx");
const tx_5 = require("./types/ibc/core/channel/v1/tx");
const channel_3 = require("./types/ibc/core/channel/v1/channel");
const query_9 = require("./types/ibc/core/channel/v1/query");
const query_10 = require("./types/ibc/core/channel/v1/query");
const query_11 = require("./types/ibc/core/channel/v1/query");
const query_12 = require("./types/ibc/core/channel/v1/query");
const tx_6 = require("./types/ibc/core/channel/v1/tx");
const tx_7 = require("./types/ibc/core/channel/v1/tx");
const channel_4 = require("./types/ibc/core/channel/v1/channel");
const query_13 = require("./types/ibc/core/channel/v1/query");
const tx_8 = require("./types/ibc/core/channel/v1/tx");
const tx_9 = require("./types/ibc/core/channel/v1/tx");
const tx_10 = require("./types/ibc/core/channel/v1/tx");
const channel_5 = require("./types/ibc/core/channel/v1/channel");
const tx_11 = require("./types/ibc/core/channel/v1/tx");
const tx_12 = require("./types/ibc/core/channel/v1/tx");
const channel_6 = require("./types/ibc/core/channel/v1/channel");
const query_14 = require("./types/ibc/core/channel/v1/query");
const query_15 = require("./types/ibc/core/channel/v1/query");
const tx_13 = require("./types/ibc/core/channel/v1/tx");
const tx_14 = require("./types/ibc/core/channel/v1/tx");
const tx_15 = require("./types/ibc/core/channel/v1/tx");
const upgrade_1 = require("./types/ibc/core/channel/v1/upgrade");
const query_16 = require("./types/ibc/core/channel/v1/query");
const query_17 = require("./types/ibc/core/channel/v1/query");
const query_18 = require("./types/ibc/core/channel/v1/query");
const tx_16 = require("./types/ibc/core/channel/v1/tx");
const tx_17 = require("./types/ibc/core/channel/v1/tx");
const tx_18 = require("./types/ibc/core/channel/v1/tx");
const query_19 = require("./types/ibc/core/channel/v1/query");
const query_20 = require("./types/ibc/core/channel/v1/query");
const query_21 = require("./types/ibc/core/channel/v1/query");
const tx_19 = require("./types/ibc/core/channel/v1/tx");
const query_22 = require("./types/ibc/core/channel/v1/query");
const query_23 = require("./types/ibc/core/channel/v1/query");
const tx_20 = require("./types/ibc/core/channel/v1/tx");
const tx_21 = require("./types/ibc/core/channel/v1/tx");
const channel_7 = require("./types/ibc/core/channel/v1/channel");
const channel_8 = require("./types/ibc/core/channel/v1/channel");
const query_24 = require("./types/ibc/core/channel/v1/query");
const query_25 = require("./types/ibc/core/channel/v1/query");
const tx_22 = require("./types/ibc/core/channel/v1/tx");
const tx_23 = require("./types/ibc/core/channel/v1/tx");
const tx_24 = require("./types/ibc/core/channel/v1/tx");
const query_26 = require("./types/ibc/core/channel/v1/query");
const query_27 = require("./types/ibc/core/channel/v1/query");
const tx_25 = require("./types/ibc/core/channel/v1/tx");
const tx_26 = require("./types/ibc/core/channel/v1/tx");
const upgrade_2 = require("./types/ibc/core/channel/v1/upgrade");
const query_28 = require("./types/ibc/core/channel/v1/query");
const query_29 = require("./types/ibc/core/channel/v1/query");
const query_30 = require("./types/ibc/core/channel/v1/query");
const channel_9 = require("./types/ibc/core/channel/v1/channel");
const tx_27 = require("./types/ibc/core/channel/v1/tx");
const tx_28 = require("./types/ibc/core/channel/v1/tx");
const tx_29 = require("./types/ibc/core/channel/v1/tx");
const tx_30 = require("./types/ibc/core/channel/v1/tx");
const tx_31 = require("./types/ibc/core/channel/v1/tx");
const genesis_1 = require("./types/ibc/core/channel/v1/genesis");
const query_31 = require("./types/ibc/core/channel/v1/query");
const query_32 = require("./types/ibc/core/channel/v1/query");
const tx_32 = require("./types/ibc/core/channel/v1/tx");
const tx_33 = require("./types/ibc/core/channel/v1/tx");
const upgrade_3 = require("./types/ibc/core/channel/v1/upgrade");
const tx_34 = require("./types/ibc/core/channel/v1/tx");
const tx_35 = require("./types/ibc/core/channel/v1/tx");
const tx_36 = require("./types/ibc/core/channel/v1/tx");
const tx_37 = require("./types/ibc/core/channel/v1/tx");
const query_33 = require("./types/ibc/core/channel/v1/query");
const query_34 = require("./types/ibc/core/channel/v1/query");
const tx_38 = require("./types/ibc/core/channel/v1/tx");
const genesis_2 = require("./types/ibc/core/channel/v1/genesis");
const msgTypes = [
    ["/ibc.core.channel.v1.QueryPacketReceiptResponse", query_1.QueryPacketReceiptResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeConfirmResponse", tx_1.MsgChannelUpgradeConfirmResponse],
    ["/ibc.core.channel.v1.Channel", channel_1.Channel],
    ["/ibc.core.channel.v1.PacketState", channel_2.PacketState],
    ["/ibc.core.channel.v1.QueryChannelConsensusStateResponse", query_2.QueryChannelConsensusStateResponse],
    ["/ibc.core.channel.v1.QueryChannelsRequest", query_3.QueryChannelsRequest],
    ["/ibc.core.channel.v1.QueryPacketReceiptRequest", query_4.QueryPacketReceiptRequest],
    ["/ibc.core.channel.v1.QueryUnreceivedPacketsRequest", query_5.QueryUnreceivedPacketsRequest],
    ["/ibc.core.channel.v1.QueryUnreceivedAcksResponse", query_6.QueryUnreceivedAcksResponse],
    ["/ibc.core.channel.v1.QueryNextSequenceReceiveResponse", query_7.QueryNextSequenceReceiveResponse],
    ["/ibc.core.channel.v1.QueryNextSequenceSendResponse", query_8.QueryNextSequenceSendResponse],
    ["/ibc.core.channel.v1.MsgChannelOpenTryResponse", tx_2.MsgChannelOpenTryResponse],
    ["/ibc.core.channel.v1.MsgAcknowledgementResponse", tx_3.MsgAcknowledgementResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeTry", tx_4.MsgChannelUpgradeTry],
    ["/ibc.core.channel.v1.MsgChannelUpgradeTryResponse", tx_5.MsgChannelUpgradeTryResponse],
    ["/ibc.core.channel.v1.IdentifiedChannel", channel_3.IdentifiedChannel],
    ["/ibc.core.channel.v1.QueryChannelRequest", query_9.QueryChannelRequest],
    ["/ibc.core.channel.v1.QueryConnectionChannelsRequest", query_10.QueryConnectionChannelsRequest],
    ["/ibc.core.channel.v1.QueryPacketAcknowledgementsRequest", query_11.QueryPacketAcknowledgementsRequest],
    ["/ibc.core.channel.v1.QueryChannelParamsRequest", query_12.QueryChannelParamsRequest],
    ["/ibc.core.channel.v1.MsgChannelOpenAckResponse", tx_6.MsgChannelOpenAckResponse],
    ["/ibc.core.channel.v1.MsgChannelOpenConfirmResponse", tx_7.MsgChannelOpenConfirmResponse],
    ["/ibc.core.channel.v1.Counterparty", channel_4.Counterparty],
    ["/ibc.core.channel.v1.QueryChannelResponse", query_13.QueryChannelResponse],
    ["/ibc.core.channel.v1.MsgChannelOpenInitResponse", tx_8.MsgChannelOpenInitResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeInitResponse", tx_9.MsgChannelUpgradeInitResponse],
    ["/ibc.core.channel.v1.MsgUpdateParamsResponse", tx_10.MsgUpdateParamsResponse],
    ["/ibc.core.channel.v1.Params", channel_5.Params],
    ["/ibc.core.channel.v1.MsgChannelCloseInit", tx_11.MsgChannelCloseInit],
    ["/ibc.core.channel.v1.MsgChannelUpgradeCancelResponse", tx_12.MsgChannelUpgradeCancelResponse],
    ["/ibc.core.channel.v1.PacketId", channel_6.PacketId],
    ["/ibc.core.channel.v1.QueryPacketAcknowledgementsResponse", query_14.QueryPacketAcknowledgementsResponse],
    ["/ibc.core.channel.v1.QueryNextSequenceSendRequest", query_15.QueryNextSequenceSendRequest],
    ["/ibc.core.channel.v1.MsgChannelOpenAck", tx_13.MsgChannelOpenAck],
    ["/ibc.core.channel.v1.MsgTimeoutOnCloseResponse", tx_14.MsgTimeoutOnCloseResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeAck", tx_15.MsgChannelUpgradeAck],
    ["/ibc.core.channel.v1.ErrorReceipt", upgrade_1.ErrorReceipt],
    ["/ibc.core.channel.v1.QueryChannelClientStateRequest", query_16.QueryChannelClientStateRequest],
    ["/ibc.core.channel.v1.QueryPacketAcknowledgementResponse", query_17.QueryPacketAcknowledgementResponse],
    ["/ibc.core.channel.v1.QueryUpgradeErrorResponse", query_18.QueryUpgradeErrorResponse],
    ["/ibc.core.channel.v1.MsgChannelOpenInit", tx_16.MsgChannelOpenInit],
    ["/ibc.core.channel.v1.MsgChannelCloseInitResponse", tx_17.MsgChannelCloseInitResponse],
    ["/ibc.core.channel.v1.MsgTimeoutOnClose", tx_18.MsgTimeoutOnClose],
    ["/ibc.core.channel.v1.QueryPacketCommitmentRequest", query_19.QueryPacketCommitmentRequest],
    ["/ibc.core.channel.v1.QueryPacketCommitmentsResponse", query_20.QueryPacketCommitmentsResponse],
    ["/ibc.core.channel.v1.QueryUnreceivedPacketsResponse", query_21.QueryUnreceivedPacketsResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeInit", tx_19.MsgChannelUpgradeInit],
    ["/ibc.core.channel.v1.QueryUnreceivedAcksRequest", query_22.QueryUnreceivedAcksRequest],
    ["/ibc.core.channel.v1.QueryUpgradeResponse", query_23.QueryUpgradeResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeAckResponse", tx_20.MsgChannelUpgradeAckResponse],
    ["/ibc.core.channel.v1.MsgUpdateParams", tx_21.MsgUpdateParams],
    ["/ibc.core.channel.v1.Acknowledgement", channel_7.Acknowledgement],
    ["/ibc.core.channel.v1.Packet", channel_8.Packet],
    ["/ibc.core.channel.v1.QueryChannelsResponse", query_24.QueryChannelsResponse],
    ["/ibc.core.channel.v1.QueryPacketAcknowledgementRequest", query_25.QueryPacketAcknowledgementRequest],
    ["/ibc.core.channel.v1.MsgChannelCloseConfirm", tx_22.MsgChannelCloseConfirm],
    ["/ibc.core.channel.v1.MsgTimeoutResponse", tx_23.MsgTimeoutResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeConfirm", tx_24.MsgChannelUpgradeConfirm],
    ["/ibc.core.channel.v1.QueryConnectionChannelsResponse", query_26.QueryConnectionChannelsResponse],
    ["/ibc.core.channel.v1.QueryUpgradeErrorRequest", query_27.QueryUpgradeErrorRequest],
    ["/ibc.core.channel.v1.MsgTimeout", tx_25.MsgTimeout],
    ["/ibc.core.channel.v1.MsgChannelUpgradeCancel", tx_26.MsgChannelUpgradeCancel],
    ["/ibc.core.channel.v1.Upgrade", upgrade_2.Upgrade],
    ["/ibc.core.channel.v1.QueryChannelClientStateResponse", query_28.QueryChannelClientStateResponse],
    ["/ibc.core.channel.v1.QueryPacketCommitmentResponse", query_29.QueryPacketCommitmentResponse],
    ["/ibc.core.channel.v1.QueryUpgradeRequest", query_30.QueryUpgradeRequest],
    ["/ibc.core.channel.v1.Timeout", channel_9.Timeout],
    ["/ibc.core.channel.v1.MsgChannelUpgradeOpenResponse", tx_27.MsgChannelUpgradeOpenResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeTimeoutResponse", tx_28.MsgChannelUpgradeTimeoutResponse],
    ["/ibc.core.channel.v1.MsgChannelOpenTry", tx_29.MsgChannelOpenTry],
    ["/ibc.core.channel.v1.MsgAcknowledgement", tx_30.MsgAcknowledgement],
    ["/ibc.core.channel.v1.MsgChannelUpgradeTimeout", tx_31.MsgChannelUpgradeTimeout],
    ["/ibc.core.channel.v1.PacketSequence", genesis_1.PacketSequence],
    ["/ibc.core.channel.v1.QueryChannelConsensusStateRequest", query_31.QueryChannelConsensusStateRequest],
    ["/ibc.core.channel.v1.QueryPacketCommitmentsRequest", query_32.QueryPacketCommitmentsRequest],
    ["/ibc.core.channel.v1.MsgChannelCloseConfirmResponse", tx_32.MsgChannelCloseConfirmResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeOpen", tx_33.MsgChannelUpgradeOpen],
    ["/ibc.core.channel.v1.UpgradeFields", upgrade_3.UpgradeFields],
    ["/ibc.core.channel.v1.MsgChannelOpenConfirm", tx_34.MsgChannelOpenConfirm],
    ["/ibc.core.channel.v1.MsgRecvPacket", tx_35.MsgRecvPacket],
    ["/ibc.core.channel.v1.MsgRecvPacketResponse", tx_36.MsgRecvPacketResponse],
    ["/ibc.core.channel.v1.MsgPruneAcknowledgements", tx_37.MsgPruneAcknowledgements],
    ["/ibc.core.channel.v1.QueryNextSequenceReceiveRequest", query_33.QueryNextSequenceReceiveRequest],
    ["/ibc.core.channel.v1.QueryChannelParamsResponse", query_34.QueryChannelParamsResponse],
    ["/ibc.core.channel.v1.MsgPruneAcknowledgementsResponse", tx_38.MsgPruneAcknowledgementsResponse],
    ["/ibc.core.channel.v1.GenesisState", genesis_2.GenesisState],
];
exports.msgTypes = msgTypes;
