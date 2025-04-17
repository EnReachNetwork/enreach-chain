"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/ibc/core/channel/v1/tx");
const channel_1 = require("./types/ibc/core/channel/v1/channel");
const query_1 = require("./types/ibc/core/channel/v1/query");
const tx_2 = require("./types/ibc/core/channel/v1/tx");
const tx_3 = require("./types/ibc/core/channel/v1/tx");
const tx_4 = require("./types/ibc/core/channel/v1/tx");
const upgrade_1 = require("./types/ibc/core/channel/v1/upgrade");
const tx_5 = require("./types/ibc/core/channel/v1/tx");
const tx_6 = require("./types/ibc/core/channel/v1/tx");
const query_2 = require("./types/ibc/core/channel/v1/query");
const query_3 = require("./types/ibc/core/channel/v1/query");
const query_4 = require("./types/ibc/core/channel/v1/query");
const channel_2 = require("./types/ibc/core/channel/v1/channel");
const channel_3 = require("./types/ibc/core/channel/v1/channel");
const query_5 = require("./types/ibc/core/channel/v1/query");
const tx_7 = require("./types/ibc/core/channel/v1/tx");
const tx_8 = require("./types/ibc/core/channel/v1/tx");
const channel_4 = require("./types/ibc/core/channel/v1/channel");
const upgrade_2 = require("./types/ibc/core/channel/v1/upgrade");
const tx_9 = require("./types/ibc/core/channel/v1/tx");
const query_6 = require("./types/ibc/core/channel/v1/query");
const query_7 = require("./types/ibc/core/channel/v1/query");
const query_8 = require("./types/ibc/core/channel/v1/query");
const query_9 = require("./types/ibc/core/channel/v1/query");
const tx_10 = require("./types/ibc/core/channel/v1/tx");
const tx_11 = require("./types/ibc/core/channel/v1/tx");
const tx_12 = require("./types/ibc/core/channel/v1/tx");
const channel_5 = require("./types/ibc/core/channel/v1/channel");
const query_10 = require("./types/ibc/core/channel/v1/query");
const tx_13 = require("./types/ibc/core/channel/v1/tx");
const tx_14 = require("./types/ibc/core/channel/v1/tx");
const tx_15 = require("./types/ibc/core/channel/v1/tx");
const query_11 = require("./types/ibc/core/channel/v1/query");
const query_12 = require("./types/ibc/core/channel/v1/query");
const query_13 = require("./types/ibc/core/channel/v1/query");
const query_14 = require("./types/ibc/core/channel/v1/query");
const upgrade_3 = require("./types/ibc/core/channel/v1/upgrade");
const tx_16 = require("./types/ibc/core/channel/v1/tx");
const tx_17 = require("./types/ibc/core/channel/v1/tx");
const channel_6 = require("./types/ibc/core/channel/v1/channel");
const query_15 = require("./types/ibc/core/channel/v1/query");
const query_16 = require("./types/ibc/core/channel/v1/query");
const query_17 = require("./types/ibc/core/channel/v1/query");
const tx_18 = require("./types/ibc/core/channel/v1/tx");
const tx_19 = require("./types/ibc/core/channel/v1/tx");
const channel_7 = require("./types/ibc/core/channel/v1/channel");
const query_18 = require("./types/ibc/core/channel/v1/query");
const query_19 = require("./types/ibc/core/channel/v1/query");
const tx_20 = require("./types/ibc/core/channel/v1/tx");
const query_20 = require("./types/ibc/core/channel/v1/query");
const query_21 = require("./types/ibc/core/channel/v1/query");
const tx_21 = require("./types/ibc/core/channel/v1/tx");
const tx_22 = require("./types/ibc/core/channel/v1/tx");
const tx_23 = require("./types/ibc/core/channel/v1/tx");
const query_22 = require("./types/ibc/core/channel/v1/query");
const query_23 = require("./types/ibc/core/channel/v1/query");
const query_24 = require("./types/ibc/core/channel/v1/query");
const genesis_1 = require("./types/ibc/core/channel/v1/genesis");
const tx_24 = require("./types/ibc/core/channel/v1/tx");
const tx_25 = require("./types/ibc/core/channel/v1/tx");
const tx_26 = require("./types/ibc/core/channel/v1/tx");
const tx_27 = require("./types/ibc/core/channel/v1/tx");
const tx_28 = require("./types/ibc/core/channel/v1/tx");
const channel_8 = require("./types/ibc/core/channel/v1/channel");
const query_25 = require("./types/ibc/core/channel/v1/query");
const query_26 = require("./types/ibc/core/channel/v1/query");
const query_27 = require("./types/ibc/core/channel/v1/query");
const query_28 = require("./types/ibc/core/channel/v1/query");
const tx_29 = require("./types/ibc/core/channel/v1/tx");
const tx_30 = require("./types/ibc/core/channel/v1/tx");
const tx_31 = require("./types/ibc/core/channel/v1/tx");
const genesis_2 = require("./types/ibc/core/channel/v1/genesis");
const tx_32 = require("./types/ibc/core/channel/v1/tx");
const channel_9 = require("./types/ibc/core/channel/v1/channel");
const query_29 = require("./types/ibc/core/channel/v1/query");
const query_30 = require("./types/ibc/core/channel/v1/query");
const tx_33 = require("./types/ibc/core/channel/v1/tx");
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
    ["/ibc.core.channel.v1.MsgChannelUpgradeTimeout", tx_1.MsgChannelUpgradeTimeout],
    ["/ibc.core.channel.v1.Packet", channel_1.Packet],
    ["/ibc.core.channel.v1.QueryPacketAcknowledgementsResponse", query_1.QueryPacketAcknowledgementsResponse],
    ["/ibc.core.channel.v1.MsgChannelCloseConfirm", tx_2.MsgChannelCloseConfirm],
    ["/ibc.core.channel.v1.MsgChannelCloseConfirmResponse", tx_3.MsgChannelCloseConfirmResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeConfirm", tx_4.MsgChannelUpgradeConfirm],
    ["/ibc.core.channel.v1.Upgrade", upgrade_1.Upgrade],
    ["/ibc.core.channel.v1.MsgChannelOpenInit", tx_5.MsgChannelOpenInit],
    ["/ibc.core.channel.v1.MsgRecvPacketResponse", tx_6.MsgRecvPacketResponse],
    ["/ibc.core.channel.v1.QueryUnreceivedPacketsRequest", query_2.QueryUnreceivedPacketsRequest],
    ["/ibc.core.channel.v1.QueryChannelClientStateRequest", query_3.QueryChannelClientStateRequest],
    ["/ibc.core.channel.v1.QueryUpgradeErrorResponse", query_4.QueryUpgradeErrorResponse],
    ["/ibc.core.channel.v1.Counterparty", channel_2.Counterparty],
    ["/ibc.core.channel.v1.PacketId", channel_3.PacketId],
    ["/ibc.core.channel.v1.QueryChannelResponse", query_5.QueryChannelResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeOpenResponse", tx_7.MsgChannelUpgradeOpenResponse],
    ["/ibc.core.channel.v1.MsgPruneAcknowledgements", tx_8.MsgPruneAcknowledgements],
    ["/ibc.core.channel.v1.PacketState", channel_4.PacketState],
    ["/ibc.core.channel.v1.ErrorReceipt", upgrade_2.ErrorReceipt],
    ["/ibc.core.channel.v1.MsgChannelOpenConfirmResponse", tx_9.MsgChannelOpenConfirmResponse],
    ["/ibc.core.channel.v1.QueryChannelRequest", query_6.QueryChannelRequest],
    ["/ibc.core.channel.v1.QueryChannelParamsRequest", query_7.QueryChannelParamsRequest],
    ["/ibc.core.channel.v1.QueryPacketCommitmentRequest", query_8.QueryPacketCommitmentRequest],
    ["/ibc.core.channel.v1.QueryChannelParamsResponse", query_9.QueryChannelParamsResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeCancelResponse", tx_10.MsgChannelUpgradeCancelResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeConfirmResponse", tx_11.MsgChannelUpgradeConfirmResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeCancel", tx_12.MsgChannelUpgradeCancel],
    ["/ibc.core.channel.v1.IdentifiedChannel", channel_5.IdentifiedChannel],
    ["/ibc.core.channel.v1.QueryConnectionChannelsRequest", query_10.QueryConnectionChannelsRequest],
    ["/ibc.core.channel.v1.MsgChannelOpenAckResponse", tx_13.MsgChannelOpenAckResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeInitResponse", tx_14.MsgChannelUpgradeInitResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeAck", tx_15.MsgChannelUpgradeAck],
    ["/ibc.core.channel.v1.QueryPacketAcknowledgementsRequest", query_11.QueryPacketAcknowledgementsRequest],
    ["/ibc.core.channel.v1.QueryUnreceivedPacketsResponse", query_12.QueryUnreceivedPacketsResponse],
    ["/ibc.core.channel.v1.QueryPacketAcknowledgementResponse", query_13.QueryPacketAcknowledgementResponse],
    ["/ibc.core.channel.v1.QueryNextSequenceSendRequest", query_14.QueryNextSequenceSendRequest],
    ["/ibc.core.channel.v1.UpgradeFields", upgrade_3.UpgradeFields],
    ["/ibc.core.channel.v1.MsgChannelOpenConfirm", tx_16.MsgChannelOpenConfirm],
    ["/ibc.core.channel.v1.MsgChannelUpgradeAckResponse", tx_17.MsgChannelUpgradeAckResponse],
    ["/ibc.core.channel.v1.Acknowledgement", channel_6.Acknowledgement],
    ["/ibc.core.channel.v1.QueryChannelsResponse", query_15.QueryChannelsResponse],
    ["/ibc.core.channel.v1.QueryPacketCommitmentResponse", query_16.QueryPacketCommitmentResponse],
    ["/ibc.core.channel.v1.QueryUnreceivedAcksResponse", query_17.QueryUnreceivedAcksResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeTry", tx_18.MsgChannelUpgradeTry],
    ["/ibc.core.channel.v1.MsgChannelUpgradeOpen", tx_19.MsgChannelUpgradeOpen],
    ["/ibc.core.channel.v1.Timeout", channel_7.Timeout],
    ["/ibc.core.channel.v1.QueryNextSequenceReceiveRequest", query_18.QueryNextSequenceReceiveRequest],
    ["/ibc.core.channel.v1.QueryUpgradeResponse", query_19.QueryUpgradeResponse],
    ["/ibc.core.channel.v1.MsgUpdateParams", tx_20.MsgUpdateParams],
    ["/ibc.core.channel.v1.QueryChannelConsensusStateRequest", query_20.QueryChannelConsensusStateRequest],
    ["/ibc.core.channel.v1.QueryPacketAcknowledgementRequest", query_21.QueryPacketAcknowledgementRequest],
    ["/ibc.core.channel.v1.MsgChannelOpenTryResponse", tx_21.MsgChannelOpenTryResponse],
    ["/ibc.core.channel.v1.MsgRecvPacket", tx_22.MsgRecvPacket],
    ["/ibc.core.channel.v1.MsgTimeout", tx_23.MsgTimeout],
    ["/ibc.core.channel.v1.QueryChannelsRequest", query_22.QueryChannelsRequest],
    ["/ibc.core.channel.v1.QueryPacketCommitmentsRequest", query_23.QueryPacketCommitmentsRequest],
    ["/ibc.core.channel.v1.QueryPacketCommitmentsResponse", query_24.QueryPacketCommitmentsResponse],
    ["/ibc.core.channel.v1.GenesisState", genesis_1.GenesisState],
    ["/ibc.core.channel.v1.MsgChannelOpenTry", tx_24.MsgChannelOpenTry],
    ["/ibc.core.channel.v1.MsgChannelCloseInit", tx_25.MsgChannelCloseInit],
    ["/ibc.core.channel.v1.MsgTimeoutOnClose", tx_26.MsgTimeoutOnClose],
    ["/ibc.core.channel.v1.MsgAcknowledgement", tx_27.MsgAcknowledgement],
    ["/ibc.core.channel.v1.MsgAcknowledgementResponse", tx_28.MsgAcknowledgementResponse],
    ["/ibc.core.channel.v1.Channel", channel_8.Channel],
    ["/ibc.core.channel.v1.QueryChannelClientStateResponse", query_25.QueryChannelClientStateResponse],
    ["/ibc.core.channel.v1.QueryPacketReceiptRequest", query_26.QueryPacketReceiptRequest],
    ["/ibc.core.channel.v1.QueryUnreceivedAcksRequest", query_27.QueryUnreceivedAcksRequest],
    ["/ibc.core.channel.v1.QueryNextSequenceReceiveResponse", query_28.QueryNextSequenceReceiveResponse],
    ["/ibc.core.channel.v1.MsgChannelOpenInitResponse", tx_29.MsgChannelOpenInitResponse],
    ["/ibc.core.channel.v1.MsgChannelCloseInitResponse", tx_30.MsgChannelCloseInitResponse],
    ["/ibc.core.channel.v1.MsgPruneAcknowledgementsResponse", tx_31.MsgPruneAcknowledgementsResponse],
    ["/ibc.core.channel.v1.PacketSequence", genesis_2.PacketSequence],
    ["/ibc.core.channel.v1.MsgChannelUpgradeTimeoutResponse", tx_32.MsgChannelUpgradeTimeoutResponse],
    ["/ibc.core.channel.v1.Params", channel_9.Params],
    ["/ibc.core.channel.v1.QueryConnectionChannelsResponse", query_29.QueryConnectionChannelsResponse],
    ["/ibc.core.channel.v1.QueryChannelConsensusStateResponse", query_30.QueryChannelConsensusStateResponse],
    ["/ibc.core.channel.v1.MsgChannelOpenAck", tx_33.MsgChannelOpenAck],
    ["/ibc.core.channel.v1.MsgChannelUpgradeInit", tx_34.MsgChannelUpgradeInit],
    ["/ibc.core.channel.v1.MsgChannelUpgradeTryResponse", tx_35.MsgChannelUpgradeTryResponse],
    ["/ibc.core.channel.v1.QueryNextSequenceSendResponse", query_31.QueryNextSequenceSendResponse],
    ["/ibc.core.channel.v1.QueryPacketReceiptResponse", query_32.QueryPacketReceiptResponse],
    ["/ibc.core.channel.v1.QueryUpgradeErrorRequest", query_33.QueryUpgradeErrorRequest],
    ["/ibc.core.channel.v1.QueryUpgradeRequest", query_34.QueryUpgradeRequest],
    ["/ibc.core.channel.v1.MsgTimeoutResponse", tx_36.MsgTimeoutResponse],
    ["/ibc.core.channel.v1.MsgTimeoutOnCloseResponse", tx_37.MsgTimeoutOnCloseResponse],
    ["/ibc.core.channel.v1.MsgUpdateParamsResponse", tx_38.MsgUpdateParamsResponse],
];
exports.msgTypes = msgTypes;
