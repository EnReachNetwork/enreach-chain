"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const channel_1 = require("./types/ibc/core/channel/v1/channel");
const channel_2 = require("./types/ibc/core/channel/v1/channel");
const query_1 = require("./types/ibc/core/channel/v1/query");
const query_2 = require("./types/ibc/core/channel/v1/query");
const query_3 = require("./types/ibc/core/channel/v1/query");
const query_4 = require("./types/ibc/core/channel/v1/query");
const query_5 = require("./types/ibc/core/channel/v1/query");
const query_6 = require("./types/ibc/core/channel/v1/query");
const query_7 = require("./types/ibc/core/channel/v1/query");
const tx_1 = require("./types/ibc/core/channel/v1/tx");
const tx_2 = require("./types/ibc/core/channel/v1/tx");
const tx_3 = require("./types/ibc/core/channel/v1/tx");
const tx_4 = require("./types/ibc/core/channel/v1/tx");
const channel_3 = require("./types/ibc/core/channel/v1/channel");
const query_8 = require("./types/ibc/core/channel/v1/query");
const query_9 = require("./types/ibc/core/channel/v1/query");
const query_10 = require("./types/ibc/core/channel/v1/query");
const query_11 = require("./types/ibc/core/channel/v1/query");
const query_12 = require("./types/ibc/core/channel/v1/query");
const channel_4 = require("./types/ibc/core/channel/v1/channel");
const genesis_1 = require("./types/ibc/core/channel/v1/genesis");
const tx_5 = require("./types/ibc/core/channel/v1/tx");
const tx_6 = require("./types/ibc/core/channel/v1/tx");
const tx_7 = require("./types/ibc/core/channel/v1/tx");
const query_13 = require("./types/ibc/core/channel/v1/query");
const tx_8 = require("./types/ibc/core/channel/v1/tx");
const query_14 = require("./types/ibc/core/channel/v1/query");
const query_15 = require("./types/ibc/core/channel/v1/query");
const query_16 = require("./types/ibc/core/channel/v1/query");
const query_17 = require("./types/ibc/core/channel/v1/query");
const tx_9 = require("./types/ibc/core/channel/v1/tx");
const tx_10 = require("./types/ibc/core/channel/v1/tx");
const tx_11 = require("./types/ibc/core/channel/v1/tx");
const tx_12 = require("./types/ibc/core/channel/v1/tx");
const channel_5 = require("./types/ibc/core/channel/v1/channel");
const tx_13 = require("./types/ibc/core/channel/v1/tx");
const tx_14 = require("./types/ibc/core/channel/v1/tx");
const query_18 = require("./types/ibc/core/channel/v1/query");
const tx_15 = require("./types/ibc/core/channel/v1/tx");
const tx_16 = require("./types/ibc/core/channel/v1/tx");
const query_19 = require("./types/ibc/core/channel/v1/query");
const tx_17 = require("./types/ibc/core/channel/v1/tx");
const channel_6 = require("./types/ibc/core/channel/v1/channel");
const upgrade_1 = require("./types/ibc/core/channel/v1/upgrade");
const tx_18 = require("./types/ibc/core/channel/v1/tx");
const tx_19 = require("./types/ibc/core/channel/v1/tx");
const query_20 = require("./types/ibc/core/channel/v1/query");
const query_21 = require("./types/ibc/core/channel/v1/query");
const query_22 = require("./types/ibc/core/channel/v1/query");
const tx_20 = require("./types/ibc/core/channel/v1/tx");
const channel_7 = require("./types/ibc/core/channel/v1/channel");
const query_23 = require("./types/ibc/core/channel/v1/query");
const tx_21 = require("./types/ibc/core/channel/v1/tx");
const channel_8 = require("./types/ibc/core/channel/v1/channel");
const tx_22 = require("./types/ibc/core/channel/v1/tx");
const tx_23 = require("./types/ibc/core/channel/v1/tx");
const tx_24 = require("./types/ibc/core/channel/v1/tx");
const query_24 = require("./types/ibc/core/channel/v1/query");
const query_25 = require("./types/ibc/core/channel/v1/query");
const tx_25 = require("./types/ibc/core/channel/v1/tx");
const upgrade_2 = require("./types/ibc/core/channel/v1/upgrade");
const tx_26 = require("./types/ibc/core/channel/v1/tx");
const query_26 = require("./types/ibc/core/channel/v1/query");
const tx_27 = require("./types/ibc/core/channel/v1/tx");
const channel_9 = require("./types/ibc/core/channel/v1/channel");
const tx_28 = require("./types/ibc/core/channel/v1/tx");
const query_27 = require("./types/ibc/core/channel/v1/query");
const tx_29 = require("./types/ibc/core/channel/v1/tx");
const query_28 = require("./types/ibc/core/channel/v1/query");
const query_29 = require("./types/ibc/core/channel/v1/query");
const tx_30 = require("./types/ibc/core/channel/v1/tx");
const tx_31 = require("./types/ibc/core/channel/v1/tx");
const query_30 = require("./types/ibc/core/channel/v1/query");
const query_31 = require("./types/ibc/core/channel/v1/query");
const query_32 = require("./types/ibc/core/channel/v1/query");
const query_33 = require("./types/ibc/core/channel/v1/query");
const tx_32 = require("./types/ibc/core/channel/v1/tx");
const tx_33 = require("./types/ibc/core/channel/v1/tx");
const genesis_2 = require("./types/ibc/core/channel/v1/genesis");
const tx_34 = require("./types/ibc/core/channel/v1/tx");
const tx_35 = require("./types/ibc/core/channel/v1/tx");
const tx_36 = require("./types/ibc/core/channel/v1/tx");
const query_34 = require("./types/ibc/core/channel/v1/query");
const tx_37 = require("./types/ibc/core/channel/v1/tx");
const tx_38 = require("./types/ibc/core/channel/v1/tx");
const upgrade_3 = require("./types/ibc/core/channel/v1/upgrade");
const msgTypes = [
    ["/ibc.core.channel.v1.Counterparty", channel_1.Counterparty],
    ["/ibc.core.channel.v1.Params", channel_2.Params],
    ["/ibc.core.channel.v1.QueryChannelClientStateResponse", query_1.QueryChannelClientStateResponse],
    ["/ibc.core.channel.v1.QueryChannelRequest", query_2.QueryChannelRequest],
    ["/ibc.core.channel.v1.QueryConnectionChannelsResponse", query_3.QueryConnectionChannelsResponse],
    ["/ibc.core.channel.v1.QueryPacketAcknowledgementRequest", query_4.QueryPacketAcknowledgementRequest],
    ["/ibc.core.channel.v1.QueryPacketAcknowledgementsRequest", query_5.QueryPacketAcknowledgementsRequest],
    ["/ibc.core.channel.v1.QueryUnreceivedAcksRequest", query_6.QueryUnreceivedAcksRequest],
    ["/ibc.core.channel.v1.QueryNextSequenceReceiveRequest", query_7.QueryNextSequenceReceiveRequest],
    ["/ibc.core.channel.v1.MsgChannelCloseConfirmResponse", tx_1.MsgChannelCloseConfirmResponse],
    ["/ibc.core.channel.v1.MsgTimeoutResponse", tx_2.MsgTimeoutResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeAckResponse", tx_3.MsgChannelUpgradeAckResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeOpenResponse", tx_4.MsgChannelUpgradeOpenResponse],
    ["/ibc.core.channel.v1.IdentifiedChannel", channel_3.IdentifiedChannel],
    ["/ibc.core.channel.v1.QueryChannelConsensusStateResponse", query_8.QueryChannelConsensusStateResponse],
    ["/ibc.core.channel.v1.QueryConnectionChannelsRequest", query_9.QueryConnectionChannelsRequest],
    ["/ibc.core.channel.v1.QueryUnreceivedPacketsResponse", query_10.QueryUnreceivedPacketsResponse],
    ["/ibc.core.channel.v1.QueryUnreceivedAcksResponse", query_11.QueryUnreceivedAcksResponse],
    ["/ibc.core.channel.v1.QueryUpgradeErrorResponse", query_12.QueryUpgradeErrorResponse],
    ["/ibc.core.channel.v1.Timeout", channel_4.Timeout],
    ["/ibc.core.channel.v1.PacketSequence", genesis_1.PacketSequence],
    ["/ibc.core.channel.v1.MsgChannelOpenConfirm", tx_5.MsgChannelOpenConfirm],
    ["/ibc.core.channel.v1.MsgChannelCloseInit", tx_6.MsgChannelCloseInit],
    ["/ibc.core.channel.v1.MsgChannelUpgradeCancel", tx_7.MsgChannelUpgradeCancel],
    ["/ibc.core.channel.v1.QueryUnreceivedPacketsRequest", query_13.QueryUnreceivedPacketsRequest],
    ["/ibc.core.channel.v1.MsgChannelUpgradeTimeout", tx_8.MsgChannelUpgradeTimeout],
    ["/ibc.core.channel.v1.QueryPacketCommitmentsRequest", query_14.QueryPacketCommitmentsRequest],
    ["/ibc.core.channel.v1.QueryPacketReceiptRequest", query_15.QueryPacketReceiptRequest],
    ["/ibc.core.channel.v1.QueryNextSequenceReceiveResponse", query_16.QueryNextSequenceReceiveResponse],
    ["/ibc.core.channel.v1.QueryChannelParamsRequest", query_17.QueryChannelParamsRequest],
    ["/ibc.core.channel.v1.MsgChannelUpgradeTryResponse", tx_9.MsgChannelUpgradeTryResponse],
    ["/ibc.core.channel.v1.MsgAcknowledgement", tx_10.MsgAcknowledgement],
    ["/ibc.core.channel.v1.MsgChannelOpenConfirmResponse", tx_11.MsgChannelOpenConfirmResponse],
    ["/ibc.core.channel.v1.MsgRecvPacketResponse", tx_12.MsgRecvPacketResponse],
    ["/ibc.core.channel.v1.Acknowledgement", channel_5.Acknowledgement],
    ["/ibc.core.channel.v1.MsgChannelUpgradeAck", tx_13.MsgChannelUpgradeAck],
    ["/ibc.core.channel.v1.MsgUpdateParams", tx_14.MsgUpdateParams],
    ["/ibc.core.channel.v1.QueryPacketAcknowledgementsResponse", query_18.QueryPacketAcknowledgementsResponse],
    ["/ibc.core.channel.v1.MsgChannelOpenTryResponse", tx_15.MsgChannelOpenTryResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeTry", tx_16.MsgChannelUpgradeTry],
    ["/ibc.core.channel.v1.QueryChannelResponse", query_19.QueryChannelResponse],
    ["/ibc.core.channel.v1.MsgAcknowledgementResponse", tx_17.MsgAcknowledgementResponse],
    ["/ibc.core.channel.v1.Channel", channel_6.Channel],
    ["/ibc.core.channel.v1.Upgrade", upgrade_1.Upgrade],
    ["/ibc.core.channel.v1.MsgChannelCloseConfirm", tx_18.MsgChannelCloseConfirm],
    ["/ibc.core.channel.v1.MsgChannelUpgradeInit", tx_19.MsgChannelUpgradeInit],
    ["/ibc.core.channel.v1.QueryUpgradeErrorRequest", query_20.QueryUpgradeErrorRequest],
    ["/ibc.core.channel.v1.QueryUpgradeRequest", query_21.QueryUpgradeRequest],
    ["/ibc.core.channel.v1.QueryUpgradeResponse", query_22.QueryUpgradeResponse],
    ["/ibc.core.channel.v1.MsgChannelOpenAckResponse", tx_20.MsgChannelOpenAckResponse],
    ["/ibc.core.channel.v1.PacketState", channel_7.PacketState],
    ["/ibc.core.channel.v1.QueryChannelClientStateRequest", query_23.QueryChannelClientStateRequest],
    ["/ibc.core.channel.v1.MsgTimeoutOnCloseResponse", tx_21.MsgTimeoutOnCloseResponse],
    ["/ibc.core.channel.v1.Packet", channel_8.Packet],
    ["/ibc.core.channel.v1.MsgChannelOpenTry", tx_22.MsgChannelOpenTry],
    ["/ibc.core.channel.v1.MsgChannelOpenAck", tx_23.MsgChannelOpenAck],
    ["/ibc.core.channel.v1.MsgRecvPacket", tx_24.MsgRecvPacket],
    ["/ibc.core.channel.v1.QueryPacketCommitmentResponse", query_24.QueryPacketCommitmentResponse],
    ["/ibc.core.channel.v1.QueryNextSequenceSendResponse", query_25.QueryNextSequenceSendResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeInitResponse", tx_25.MsgChannelUpgradeInitResponse],
    ["/ibc.core.channel.v1.UpgradeFields", upgrade_2.UpgradeFields],
    ["/ibc.core.channel.v1.MsgChannelOpenInit", tx_26.MsgChannelOpenInit],
    ["/ibc.core.channel.v1.QueryChannelsResponse", query_26.QueryChannelsResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeTimeoutResponse", tx_27.MsgChannelUpgradeTimeoutResponse],
    ["/ibc.core.channel.v1.PacketId", channel_9.PacketId],
    ["/ibc.core.channel.v1.MsgChannelUpgradeOpen", tx_28.MsgChannelUpgradeOpen],
    ["/ibc.core.channel.v1.QueryNextSequenceSendRequest", query_27.QueryNextSequenceSendRequest],
    ["/ibc.core.channel.v1.MsgChannelUpgradeCancelResponse", tx_29.MsgChannelUpgradeCancelResponse],
    ["/ibc.core.channel.v1.QueryChannelsRequest", query_28.QueryChannelsRequest],
    ["/ibc.core.channel.v1.QueryChannelParamsResponse", query_29.QueryChannelParamsResponse],
    ["/ibc.core.channel.v1.MsgChannelCloseInitResponse", tx_30.MsgChannelCloseInitResponse],
    ["/ibc.core.channel.v1.MsgTimeout", tx_31.MsgTimeout],
    ["/ibc.core.channel.v1.QueryChannelConsensusStateRequest", query_30.QueryChannelConsensusStateRequest],
    ["/ibc.core.channel.v1.QueryPacketAcknowledgementResponse", query_31.QueryPacketAcknowledgementResponse],
    ["/ibc.core.channel.v1.QueryPacketCommitmentRequest", query_32.QueryPacketCommitmentRequest],
    ["/ibc.core.channel.v1.QueryPacketReceiptResponse", query_33.QueryPacketReceiptResponse],
    ["/ibc.core.channel.v1.MsgChannelOpenInitResponse", tx_32.MsgChannelOpenInitResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeConfirmResponse", tx_33.MsgChannelUpgradeConfirmResponse],
    ["/ibc.core.channel.v1.GenesisState", genesis_2.GenesisState],
    ["/ibc.core.channel.v1.MsgTimeoutOnClose", tx_34.MsgTimeoutOnClose],
    ["/ibc.core.channel.v1.MsgChannelUpgradeConfirm", tx_35.MsgChannelUpgradeConfirm],
    ["/ibc.core.channel.v1.MsgPruneAcknowledgements", tx_36.MsgPruneAcknowledgements],
    ["/ibc.core.channel.v1.QueryPacketCommitmentsResponse", query_34.QueryPacketCommitmentsResponse],
    ["/ibc.core.channel.v1.MsgUpdateParamsResponse", tx_37.MsgUpdateParamsResponse],
    ["/ibc.core.channel.v1.MsgPruneAcknowledgementsResponse", tx_38.MsgPruneAcknowledgementsResponse],
    ["/ibc.core.channel.v1.ErrorReceipt", upgrade_3.ErrorReceipt],
];
exports.msgTypes = msgTypes;
