"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const upgrade_1 = require("./types/ibc/core/channel/v1/upgrade");
const channel_1 = require("./types/ibc/core/channel/v1/channel");
const query_1 = require("./types/ibc/core/channel/v1/query");
const query_2 = require("./types/ibc/core/channel/v1/query");
const tx_1 = require("./types/ibc/core/channel/v1/tx");
const tx_2 = require("./types/ibc/core/channel/v1/tx");
const tx_3 = require("./types/ibc/core/channel/v1/tx");
const channel_2 = require("./types/ibc/core/channel/v1/channel");
const query_3 = require("./types/ibc/core/channel/v1/query");
const query_4 = require("./types/ibc/core/channel/v1/query");
const tx_4 = require("./types/ibc/core/channel/v1/tx");
const genesis_1 = require("./types/ibc/core/channel/v1/genesis");
const query_5 = require("./types/ibc/core/channel/v1/query");
const query_6 = require("./types/ibc/core/channel/v1/query");
const query_7 = require("./types/ibc/core/channel/v1/query");
const tx_5 = require("./types/ibc/core/channel/v1/tx");
const tx_6 = require("./types/ibc/core/channel/v1/tx");
const tx_7 = require("./types/ibc/core/channel/v1/tx");
const query_8 = require("./types/ibc/core/channel/v1/query");
const query_9 = require("./types/ibc/core/channel/v1/query");
const query_10 = require("./types/ibc/core/channel/v1/query");
const query_11 = require("./types/ibc/core/channel/v1/query");
const query_12 = require("./types/ibc/core/channel/v1/query");
const tx_8 = require("./types/ibc/core/channel/v1/tx");
const tx_9 = require("./types/ibc/core/channel/v1/tx");
const upgrade_2 = require("./types/ibc/core/channel/v1/upgrade");
const tx_10 = require("./types/ibc/core/channel/v1/tx");
const tx_11 = require("./types/ibc/core/channel/v1/tx");
const tx_12 = require("./types/ibc/core/channel/v1/tx");
const channel_3 = require("./types/ibc/core/channel/v1/channel");
const tx_13 = require("./types/ibc/core/channel/v1/tx");
const channel_4 = require("./types/ibc/core/channel/v1/channel");
const channel_5 = require("./types/ibc/core/channel/v1/channel");
const query_13 = require("./types/ibc/core/channel/v1/query");
const tx_14 = require("./types/ibc/core/channel/v1/tx");
const tx_15 = require("./types/ibc/core/channel/v1/tx");
const query_14 = require("./types/ibc/core/channel/v1/query");
const tx_16 = require("./types/ibc/core/channel/v1/tx");
const tx_17 = require("./types/ibc/core/channel/v1/tx");
const tx_18 = require("./types/ibc/core/channel/v1/tx");
const tx_19 = require("./types/ibc/core/channel/v1/tx");
const query_15 = require("./types/ibc/core/channel/v1/query");
const query_16 = require("./types/ibc/core/channel/v1/query");
const tx_20 = require("./types/ibc/core/channel/v1/tx");
const tx_21 = require("./types/ibc/core/channel/v1/tx");
const channel_6 = require("./types/ibc/core/channel/v1/channel");
const query_17 = require("./types/ibc/core/channel/v1/query");
const query_18 = require("./types/ibc/core/channel/v1/query");
const query_19 = require("./types/ibc/core/channel/v1/query");
const query_20 = require("./types/ibc/core/channel/v1/query");
const tx_22 = require("./types/ibc/core/channel/v1/tx");
const tx_23 = require("./types/ibc/core/channel/v1/tx");
const tx_24 = require("./types/ibc/core/channel/v1/tx");
const tx_25 = require("./types/ibc/core/channel/v1/tx");
const channel_7 = require("./types/ibc/core/channel/v1/channel");
const channel_8 = require("./types/ibc/core/channel/v1/channel");
const query_21 = require("./types/ibc/core/channel/v1/query");
const tx_26 = require("./types/ibc/core/channel/v1/tx");
const tx_27 = require("./types/ibc/core/channel/v1/tx");
const query_22 = require("./types/ibc/core/channel/v1/query");
const channel_9 = require("./types/ibc/core/channel/v1/channel");
const genesis_2 = require("./types/ibc/core/channel/v1/genesis");
const query_23 = require("./types/ibc/core/channel/v1/query");
const query_24 = require("./types/ibc/core/channel/v1/query");
const query_25 = require("./types/ibc/core/channel/v1/query");
const query_26 = require("./types/ibc/core/channel/v1/query");
const query_27 = require("./types/ibc/core/channel/v1/query");
const tx_28 = require("./types/ibc/core/channel/v1/tx");
const tx_29 = require("./types/ibc/core/channel/v1/tx");
const tx_30 = require("./types/ibc/core/channel/v1/tx");
const query_28 = require("./types/ibc/core/channel/v1/query");
const tx_31 = require("./types/ibc/core/channel/v1/tx");
const tx_32 = require("./types/ibc/core/channel/v1/tx");
const tx_33 = require("./types/ibc/core/channel/v1/tx");
const tx_34 = require("./types/ibc/core/channel/v1/tx");
const tx_35 = require("./types/ibc/core/channel/v1/tx");
const upgrade_3 = require("./types/ibc/core/channel/v1/upgrade");
const query_29 = require("./types/ibc/core/channel/v1/query");
const query_30 = require("./types/ibc/core/channel/v1/query");
const query_31 = require("./types/ibc/core/channel/v1/query");
const query_32 = require("./types/ibc/core/channel/v1/query");
const tx_36 = require("./types/ibc/core/channel/v1/tx");
const query_33 = require("./types/ibc/core/channel/v1/query");
const query_34 = require("./types/ibc/core/channel/v1/query");
const tx_37 = require("./types/ibc/core/channel/v1/tx");
const tx_38 = require("./types/ibc/core/channel/v1/tx");
const msgTypes = [
    ["/ibc.core.channel.v1.Upgrade", upgrade_1.Upgrade],
    ["/ibc.core.channel.v1.PacketState", channel_1.PacketState],
    ["/ibc.core.channel.v1.QueryChannelClientStateRequest", query_1.QueryChannelClientStateRequest],
    ["/ibc.core.channel.v1.QueryNextSequenceReceiveResponse", query_2.QueryNextSequenceReceiveResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeTry", tx_1.MsgChannelUpgradeTry],
    ["/ibc.core.channel.v1.MsgChannelUpgradeCancel", tx_2.MsgChannelUpgradeCancel],
    ["/ibc.core.channel.v1.MsgChannelUpgradeCancelResponse", tx_3.MsgChannelUpgradeCancelResponse],
    ["/ibc.core.channel.v1.Channel", channel_2.Channel],
    ["/ibc.core.channel.v1.QueryChannelResponse", query_3.QueryChannelResponse],
    ["/ibc.core.channel.v1.QueryUpgradeResponse", query_4.QueryUpgradeResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeTimeout", tx_4.MsgChannelUpgradeTimeout],
    ["/ibc.core.channel.v1.GenesisState", genesis_1.GenesisState],
    ["/ibc.core.channel.v1.QueryPacketCommitmentRequest", query_5.QueryPacketCommitmentRequest],
    ["/ibc.core.channel.v1.QueryPacketAcknowledgementsResponse", query_6.QueryPacketAcknowledgementsResponse],
    ["/ibc.core.channel.v1.QueryUnreceivedPacketsResponse", query_7.QueryUnreceivedPacketsResponse],
    ["/ibc.core.channel.v1.MsgChannelOpenTry", tx_5.MsgChannelOpenTry],
    ["/ibc.core.channel.v1.MsgChannelUpgradeTimeoutResponse", tx_6.MsgChannelUpgradeTimeoutResponse],
    ["/ibc.core.channel.v1.MsgTimeout", tx_7.MsgTimeout],
    ["/ibc.core.channel.v1.QueryChannelsResponse", query_8.QueryChannelsResponse],
    ["/ibc.core.channel.v1.QueryConnectionChannelsRequest", query_9.QueryConnectionChannelsRequest],
    ["/ibc.core.channel.v1.QueryChannelConsensusStateResponse", query_10.QueryChannelConsensusStateResponse],
    ["/ibc.core.channel.v1.QueryPacketCommitmentResponse", query_11.QueryPacketCommitmentResponse],
    ["/ibc.core.channel.v1.QueryPacketAcknowledgementsRequest", query_12.QueryPacketAcknowledgementsRequest],
    ["/ibc.core.channel.v1.MsgChannelCloseConfirm", tx_8.MsgChannelCloseConfirm],
    ["/ibc.core.channel.v1.MsgRecvPacketResponse", tx_9.MsgRecvPacketResponse],
    ["/ibc.core.channel.v1.ErrorReceipt", upgrade_2.ErrorReceipt],
    ["/ibc.core.channel.v1.MsgChannelOpenAck", tx_10.MsgChannelOpenAck],
    ["/ibc.core.channel.v1.MsgTimeoutResponse", tx_11.MsgTimeoutResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeOpenResponse", tx_12.MsgChannelUpgradeOpenResponse],
    ["/ibc.core.channel.v1.Timeout", channel_3.Timeout],
    ["/ibc.core.channel.v1.MsgChannelUpgradeOpen", tx_13.MsgChannelUpgradeOpen],
    ["/ibc.core.channel.v1.Counterparty", channel_4.Counterparty],
    ["/ibc.core.channel.v1.PacketId", channel_5.PacketId],
    ["/ibc.core.channel.v1.QueryChannelClientStateResponse", query_13.QueryChannelClientStateResponse],
    ["/ibc.core.channel.v1.MsgChannelOpenInitResponse", tx_14.MsgChannelOpenInitResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeAck", tx_15.MsgChannelUpgradeAck],
    ["/ibc.core.channel.v1.QueryUpgradeRequest", query_14.QueryUpgradeRequest],
    ["/ibc.core.channel.v1.MsgChannelCloseInit", tx_16.MsgChannelCloseInit],
    ["/ibc.core.channel.v1.MsgChannelCloseInitResponse", tx_17.MsgChannelCloseInitResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeAckResponse", tx_18.MsgChannelUpgradeAckResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeConfirmResponse", tx_19.MsgChannelUpgradeConfirmResponse],
    ["/ibc.core.channel.v1.QueryConnectionChannelsResponse", query_15.QueryConnectionChannelsResponse],
    ["/ibc.core.channel.v1.QueryNextSequenceSendRequest", query_16.QueryNextSequenceSendRequest],
    ["/ibc.core.channel.v1.MsgRecvPacket", tx_20.MsgRecvPacket],
    ["/ibc.core.channel.v1.MsgChannelUpgradeTryResponse", tx_21.MsgChannelUpgradeTryResponse],
    ["/ibc.core.channel.v1.IdentifiedChannel", channel_6.IdentifiedChannel],
    ["/ibc.core.channel.v1.QueryUnreceivedAcksResponse", query_17.QueryUnreceivedAcksResponse],
    ["/ibc.core.channel.v1.QueryNextSequenceSendResponse", query_18.QueryNextSequenceSendResponse],
    ["/ibc.core.channel.v1.QueryChannelsRequest", query_19.QueryChannelsRequest],
    ["/ibc.core.channel.v1.QueryPacketAcknowledgementResponse", query_20.QueryPacketAcknowledgementResponse],
    ["/ibc.core.channel.v1.MsgTimeoutOnCloseResponse", tx_22.MsgTimeoutOnCloseResponse],
    ["/ibc.core.channel.v1.MsgAcknowledgementResponse", tx_23.MsgAcknowledgementResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeInit", tx_24.MsgChannelUpgradeInit],
    ["/ibc.core.channel.v1.MsgUpdateParams", tx_25.MsgUpdateParams],
    ["/ibc.core.channel.v1.Packet", channel_7.Packet],
    ["/ibc.core.channel.v1.Acknowledgement", channel_8.Acknowledgement],
    ["/ibc.core.channel.v1.QueryUpgradeErrorResponse", query_21.QueryUpgradeErrorResponse],
    ["/ibc.core.channel.v1.MsgChannelOpenConfirmResponse", tx_26.MsgChannelOpenConfirmResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeConfirm", tx_27.MsgChannelUpgradeConfirm],
    ["/ibc.core.channel.v1.QueryChannelParamsResponse", query_22.QueryChannelParamsResponse],
    ["/ibc.core.channel.v1.Params", channel_9.Params],
    ["/ibc.core.channel.v1.PacketSequence", genesis_2.PacketSequence],
    ["/ibc.core.channel.v1.QueryChannelRequest", query_23.QueryChannelRequest],
    ["/ibc.core.channel.v1.QueryChannelConsensusStateRequest", query_24.QueryChannelConsensusStateRequest],
    ["/ibc.core.channel.v1.QueryUnreceivedPacketsRequest", query_25.QueryUnreceivedPacketsRequest],
    ["/ibc.core.channel.v1.QueryNextSequenceReceiveRequest", query_26.QueryNextSequenceReceiveRequest],
    ["/ibc.core.channel.v1.QueryUpgradeErrorRequest", query_27.QueryUpgradeErrorRequest],
    ["/ibc.core.channel.v1.MsgChannelUpgradeInitResponse", tx_28.MsgChannelUpgradeInitResponse],
    ["/ibc.core.channel.v1.MsgPruneAcknowledgements", tx_29.MsgPruneAcknowledgements],
    ["/ibc.core.channel.v1.MsgPruneAcknowledgementsResponse", tx_30.MsgPruneAcknowledgementsResponse],
    ["/ibc.core.channel.v1.QueryPacketReceiptResponse", query_28.QueryPacketReceiptResponse],
    ["/ibc.core.channel.v1.MsgChannelOpenInit", tx_31.MsgChannelOpenInit],
    ["/ibc.core.channel.v1.MsgChannelOpenConfirm", tx_32.MsgChannelOpenConfirm],
    ["/ibc.core.channel.v1.MsgChannelCloseConfirmResponse", tx_33.MsgChannelCloseConfirmResponse],
    ["/ibc.core.channel.v1.MsgUpdateParamsResponse", tx_34.MsgUpdateParamsResponse],
    ["/ibc.core.channel.v1.MsgAcknowledgement", tx_35.MsgAcknowledgement],
    ["/ibc.core.channel.v1.UpgradeFields", upgrade_3.UpgradeFields],
    ["/ibc.core.channel.v1.QueryPacketCommitmentsRequest", query_29.QueryPacketCommitmentsRequest],
    ["/ibc.core.channel.v1.QueryPacketCommitmentsResponse", query_30.QueryPacketCommitmentsResponse],
    ["/ibc.core.channel.v1.QueryUnreceivedAcksRequest", query_31.QueryUnreceivedAcksRequest],
    ["/ibc.core.channel.v1.QueryChannelParamsRequest", query_32.QueryChannelParamsRequest],
    ["/ibc.core.channel.v1.MsgChannelOpenAckResponse", tx_36.MsgChannelOpenAckResponse],
    ["/ibc.core.channel.v1.QueryPacketReceiptRequest", query_33.QueryPacketReceiptRequest],
    ["/ibc.core.channel.v1.QueryPacketAcknowledgementRequest", query_34.QueryPacketAcknowledgementRequest],
    ["/ibc.core.channel.v1.MsgChannelOpenTryResponse", tx_37.MsgChannelOpenTryResponse],
    ["/ibc.core.channel.v1.MsgTimeoutOnClose", tx_38.MsgTimeoutOnClose],
];
exports.msgTypes = msgTypes;
