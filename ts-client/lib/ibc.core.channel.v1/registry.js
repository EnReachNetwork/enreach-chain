"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const query_1 = require("./types/ibc/core/channel/v1/query");
const tx_1 = require("./types/ibc/core/channel/v1/tx");
const tx_2 = require("./types/ibc/core/channel/v1/tx");
const tx_3 = require("./types/ibc/core/channel/v1/tx");
const query_2 = require("./types/ibc/core/channel/v1/query");
const query_3 = require("./types/ibc/core/channel/v1/query");
const query_4 = require("./types/ibc/core/channel/v1/query");
const query_5 = require("./types/ibc/core/channel/v1/query");
const tx_4 = require("./types/ibc/core/channel/v1/tx");
const tx_5 = require("./types/ibc/core/channel/v1/tx");
const query_6 = require("./types/ibc/core/channel/v1/query");
const query_7 = require("./types/ibc/core/channel/v1/query");
const tx_6 = require("./types/ibc/core/channel/v1/tx");
const tx_7 = require("./types/ibc/core/channel/v1/tx");
const tx_8 = require("./types/ibc/core/channel/v1/tx");
const tx_9 = require("./types/ibc/core/channel/v1/tx");
const tx_10 = require("./types/ibc/core/channel/v1/tx");
const tx_11 = require("./types/ibc/core/channel/v1/tx");
const query_8 = require("./types/ibc/core/channel/v1/query");
const query_9 = require("./types/ibc/core/channel/v1/query");
const upgrade_1 = require("./types/ibc/core/channel/v1/upgrade");
const query_10 = require("./types/ibc/core/channel/v1/query");
const query_11 = require("./types/ibc/core/channel/v1/query");
const genesis_1 = require("./types/ibc/core/channel/v1/genesis");
const query_12 = require("./types/ibc/core/channel/v1/query");
const query_13 = require("./types/ibc/core/channel/v1/query");
const tx_12 = require("./types/ibc/core/channel/v1/tx");
const query_14 = require("./types/ibc/core/channel/v1/query");
const tx_13 = require("./types/ibc/core/channel/v1/tx");
const tx_14 = require("./types/ibc/core/channel/v1/tx");
const tx_15 = require("./types/ibc/core/channel/v1/tx");
const query_15 = require("./types/ibc/core/channel/v1/query");
const query_16 = require("./types/ibc/core/channel/v1/query");
const query_17 = require("./types/ibc/core/channel/v1/query");
const tx_16 = require("./types/ibc/core/channel/v1/tx");
const tx_17 = require("./types/ibc/core/channel/v1/tx");
const tx_18 = require("./types/ibc/core/channel/v1/tx");
const query_18 = require("./types/ibc/core/channel/v1/query");
const query_19 = require("./types/ibc/core/channel/v1/query");
const tx_19 = require("./types/ibc/core/channel/v1/tx");
const tx_20 = require("./types/ibc/core/channel/v1/tx");
const tx_21 = require("./types/ibc/core/channel/v1/tx");
const tx_22 = require("./types/ibc/core/channel/v1/tx");
const upgrade_2 = require("./types/ibc/core/channel/v1/upgrade");
const query_20 = require("./types/ibc/core/channel/v1/query");
const upgrade_3 = require("./types/ibc/core/channel/v1/upgrade");
const channel_1 = require("./types/ibc/core/channel/v1/channel");
const query_21 = require("./types/ibc/core/channel/v1/query");
const tx_23 = require("./types/ibc/core/channel/v1/tx");
const query_22 = require("./types/ibc/core/channel/v1/query");
const tx_24 = require("./types/ibc/core/channel/v1/tx");
const query_23 = require("./types/ibc/core/channel/v1/query");
const tx_25 = require("./types/ibc/core/channel/v1/tx");
const tx_26 = require("./types/ibc/core/channel/v1/tx");
const tx_27 = require("./types/ibc/core/channel/v1/tx");
const channel_2 = require("./types/ibc/core/channel/v1/channel");
const query_24 = require("./types/ibc/core/channel/v1/query");
const query_25 = require("./types/ibc/core/channel/v1/query");
const query_26 = require("./types/ibc/core/channel/v1/query");
const query_27 = require("./types/ibc/core/channel/v1/query");
const query_28 = require("./types/ibc/core/channel/v1/query");
const channel_3 = require("./types/ibc/core/channel/v1/channel");
const tx_28 = require("./types/ibc/core/channel/v1/tx");
const query_29 = require("./types/ibc/core/channel/v1/query");
const query_30 = require("./types/ibc/core/channel/v1/query");
const channel_4 = require("./types/ibc/core/channel/v1/channel");
const tx_29 = require("./types/ibc/core/channel/v1/tx");
const channel_5 = require("./types/ibc/core/channel/v1/channel");
const channel_6 = require("./types/ibc/core/channel/v1/channel");
const query_31 = require("./types/ibc/core/channel/v1/query");
const tx_30 = require("./types/ibc/core/channel/v1/tx");
const tx_31 = require("./types/ibc/core/channel/v1/tx");
const tx_32 = require("./types/ibc/core/channel/v1/tx");
const tx_33 = require("./types/ibc/core/channel/v1/tx");
const channel_7 = require("./types/ibc/core/channel/v1/channel");
const query_32 = require("./types/ibc/core/channel/v1/query");
const query_33 = require("./types/ibc/core/channel/v1/query");
const tx_34 = require("./types/ibc/core/channel/v1/tx");
const tx_35 = require("./types/ibc/core/channel/v1/tx");
const tx_36 = require("./types/ibc/core/channel/v1/tx");
const tx_37 = require("./types/ibc/core/channel/v1/tx");
const channel_8 = require("./types/ibc/core/channel/v1/channel");
const channel_9 = require("./types/ibc/core/channel/v1/channel");
const query_34 = require("./types/ibc/core/channel/v1/query");
const tx_38 = require("./types/ibc/core/channel/v1/tx");
const genesis_2 = require("./types/ibc/core/channel/v1/genesis");
const msgTypes = [
    ["/ibc.core.channel.v1.QueryChannelParamsResponse", query_1.QueryChannelParamsResponse],
    ["/ibc.core.channel.v1.MsgChannelOpenInitResponse", tx_1.MsgChannelOpenInitResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeTryResponse", tx_2.MsgChannelUpgradeTryResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeTimeout", tx_3.MsgChannelUpgradeTimeout],
    ["/ibc.core.channel.v1.QueryConnectionChannelsRequest", query_2.QueryConnectionChannelsRequest],
    ["/ibc.core.channel.v1.QueryUnreceivedAcksRequest", query_3.QueryUnreceivedAcksRequest],
    ["/ibc.core.channel.v1.QueryPacketAcknowledgementResponse", query_4.QueryPacketAcknowledgementResponse],
    ["/ibc.core.channel.v1.QueryNextSequenceSendRequest", query_5.QueryNextSequenceSendRequest],
    ["/ibc.core.channel.v1.MsgChannelOpenAckResponse", tx_4.MsgChannelOpenAckResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeOpenResponse", tx_5.MsgChannelUpgradeOpenResponse],
    ["/ibc.core.channel.v1.QueryConnectionChannelsResponse", query_6.QueryConnectionChannelsResponse],
    ["/ibc.core.channel.v1.QueryPacketCommitmentResponse", query_7.QueryPacketCommitmentResponse],
    ["/ibc.core.channel.v1.MsgChannelOpenAck", tx_6.MsgChannelOpenAck],
    ["/ibc.core.channel.v1.MsgChannelCloseConfirm", tx_7.MsgChannelCloseConfirm],
    ["/ibc.core.channel.v1.MsgChannelCloseConfirmResponse", tx_8.MsgChannelCloseConfirmResponse],
    ["/ibc.core.channel.v1.MsgRecvPacket", tx_9.MsgRecvPacket],
    ["/ibc.core.channel.v1.MsgChannelUpgradeAckResponse", tx_10.MsgChannelUpgradeAckResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeOpen", tx_11.MsgChannelUpgradeOpen],
    ["/ibc.core.channel.v1.QueryChannelClientStateResponse", query_8.QueryChannelClientStateResponse],
    ["/ibc.core.channel.v1.QueryChannelParamsRequest", query_9.QueryChannelParamsRequest],
    ["/ibc.core.channel.v1.ErrorReceipt", upgrade_1.ErrorReceipt],
    ["/ibc.core.channel.v1.QueryPacketCommitmentsRequest", query_10.QueryPacketCommitmentsRequest],
    ["/ibc.core.channel.v1.QueryPacketReceiptRequest", query_11.QueryPacketReceiptRequest],
    ["/ibc.core.channel.v1.GenesisState", genesis_1.GenesisState],
    ["/ibc.core.channel.v1.QueryChannelResponse", query_12.QueryChannelResponse],
    ["/ibc.core.channel.v1.QueryChannelClientStateRequest", query_13.QueryChannelClientStateRequest],
    ["/ibc.core.channel.v1.MsgTimeoutResponse", tx_12.MsgTimeoutResponse],
    ["/ibc.core.channel.v1.QueryNextSequenceSendResponse", query_14.QueryNextSequenceSendResponse],
    ["/ibc.core.channel.v1.MsgRecvPacketResponse", tx_13.MsgRecvPacketResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeInitResponse", tx_14.MsgChannelUpgradeInitResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeConfirmResponse", tx_15.MsgChannelUpgradeConfirmResponse],
    ["/ibc.core.channel.v1.QueryPacketReceiptResponse", query_15.QueryPacketReceiptResponse],
    ["/ibc.core.channel.v1.QueryPacketAcknowledgementsResponse", query_16.QueryPacketAcknowledgementsResponse],
    ["/ibc.core.channel.v1.QueryChannelConsensusStateResponse", query_17.QueryChannelConsensusStateResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeCancelResponse", tx_16.MsgChannelUpgradeCancelResponse],
    ["/ibc.core.channel.v1.MsgAcknowledgement", tx_17.MsgAcknowledgement],
    ["/ibc.core.channel.v1.MsgChannelUpgradeTry", tx_18.MsgChannelUpgradeTry],
    ["/ibc.core.channel.v1.QueryPacketAcknowledgementsRequest", query_18.QueryPacketAcknowledgementsRequest],
    ["/ibc.core.channel.v1.QueryUnreceivedPacketsResponse", query_19.QueryUnreceivedPacketsResponse],
    ["/ibc.core.channel.v1.MsgChannelOpenTryResponse", tx_19.MsgChannelOpenTryResponse],
    ["/ibc.core.channel.v1.MsgChannelOpenConfirmResponse", tx_20.MsgChannelOpenConfirmResponse],
    ["/ibc.core.channel.v1.MsgChannelCloseInitResponse", tx_21.MsgChannelCloseInitResponse],
    ["/ibc.core.channel.v1.MsgPruneAcknowledgementsResponse", tx_22.MsgPruneAcknowledgementsResponse],
    ["/ibc.core.channel.v1.UpgradeFields", upgrade_2.UpgradeFields],
    ["/ibc.core.channel.v1.QueryUpgradeErrorRequest", query_20.QueryUpgradeErrorRequest],
    ["/ibc.core.channel.v1.Upgrade", upgrade_3.Upgrade],
    ["/ibc.core.channel.v1.Counterparty", channel_1.Counterparty],
    ["/ibc.core.channel.v1.QueryChannelsResponse", query_21.QueryChannelsResponse],
    ["/ibc.core.channel.v1.MsgChannelOpenInit", tx_23.MsgChannelOpenInit],
    ["/ibc.core.channel.v1.QueryUpgradeResponse", query_22.QueryUpgradeResponse],
    ["/ibc.core.channel.v1.MsgPruneAcknowledgements", tx_24.MsgPruneAcknowledgements],
    ["/ibc.core.channel.v1.QueryNextSequenceReceiveResponse", query_23.QueryNextSequenceReceiveResponse],
    ["/ibc.core.channel.v1.MsgChannelCloseInit", tx_25.MsgChannelCloseInit],
    ["/ibc.core.channel.v1.MsgTimeout", tx_26.MsgTimeout],
    ["/ibc.core.channel.v1.MsgUpdateParamsResponse", tx_27.MsgUpdateParamsResponse],
    ["/ibc.core.channel.v1.Packet", channel_2.Packet],
    ["/ibc.core.channel.v1.QueryChannelsRequest", query_24.QueryChannelsRequest],
    ["/ibc.core.channel.v1.QueryPacketAcknowledgementRequest", query_25.QueryPacketAcknowledgementRequest],
    ["/ibc.core.channel.v1.QueryUnreceivedAcksResponse", query_26.QueryUnreceivedAcksResponse],
    ["/ibc.core.channel.v1.QueryNextSequenceReceiveRequest", query_27.QueryNextSequenceReceiveRequest],
    ["/ibc.core.channel.v1.QueryUpgradeErrorResponse", query_28.QueryUpgradeErrorResponse],
    ["/ibc.core.channel.v1.Timeout", channel_3.Timeout],
    ["/ibc.core.channel.v1.MsgChannelUpgradeCancel", tx_28.MsgChannelUpgradeCancel],
    ["/ibc.core.channel.v1.QueryChannelRequest", query_29.QueryChannelRequest],
    ["/ibc.core.channel.v1.QueryUnreceivedPacketsRequest", query_30.QueryUnreceivedPacketsRequest],
    ["/ibc.core.channel.v1.PacketState", channel_4.PacketState],
    ["/ibc.core.channel.v1.MsgUpdateParams", tx_29.MsgUpdateParams],
    ["/ibc.core.channel.v1.IdentifiedChannel", channel_5.IdentifiedChannel],
    ["/ibc.core.channel.v1.Params", channel_6.Params],
    ["/ibc.core.channel.v1.QueryPacketCommitmentsResponse", query_31.QueryPacketCommitmentsResponse],
    ["/ibc.core.channel.v1.MsgAcknowledgementResponse", tx_30.MsgAcknowledgementResponse],
    ["/ibc.core.channel.v1.MsgTimeoutOnClose", tx_31.MsgTimeoutOnClose],
    ["/ibc.core.channel.v1.MsgChannelUpgradeAck", tx_32.MsgChannelUpgradeAck],
    ["/ibc.core.channel.v1.MsgChannelUpgradeConfirm", tx_33.MsgChannelUpgradeConfirm],
    ["/ibc.core.channel.v1.Acknowledgement", channel_7.Acknowledgement],
    ["/ibc.core.channel.v1.QueryPacketCommitmentRequest", query_32.QueryPacketCommitmentRequest],
    ["/ibc.core.channel.v1.QueryUpgradeRequest", query_33.QueryUpgradeRequest],
    ["/ibc.core.channel.v1.MsgChannelOpenConfirm", tx_34.MsgChannelOpenConfirm],
    ["/ibc.core.channel.v1.MsgTimeoutOnCloseResponse", tx_35.MsgTimeoutOnCloseResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeInit", tx_36.MsgChannelUpgradeInit],
    ["/ibc.core.channel.v1.MsgChannelUpgradeTimeoutResponse", tx_37.MsgChannelUpgradeTimeoutResponse],
    ["/ibc.core.channel.v1.Channel", channel_8.Channel],
    ["/ibc.core.channel.v1.PacketId", channel_9.PacketId],
    ["/ibc.core.channel.v1.QueryChannelConsensusStateRequest", query_34.QueryChannelConsensusStateRequest],
    ["/ibc.core.channel.v1.MsgChannelOpenTry", tx_38.MsgChannelOpenTry],
    ["/ibc.core.channel.v1.PacketSequence", genesis_2.PacketSequence],
];
exports.msgTypes = msgTypes;
