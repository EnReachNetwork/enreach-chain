"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const query_1 = require("./types/ibc/core/channel/v1/query");
const query_2 = require("./types/ibc/core/channel/v1/query");
const tx_1 = require("./types/ibc/core/channel/v1/tx");
const tx_2 = require("./types/ibc/core/channel/v1/tx");
const tx_3 = require("./types/ibc/core/channel/v1/tx");
const tx_4 = require("./types/ibc/core/channel/v1/tx");
const channel_1 = require("./types/ibc/core/channel/v1/channel");
const query_3 = require("./types/ibc/core/channel/v1/query");
const query_4 = require("./types/ibc/core/channel/v1/query");
const query_5 = require("./types/ibc/core/channel/v1/query");
const query_6 = require("./types/ibc/core/channel/v1/query");
const tx_5 = require("./types/ibc/core/channel/v1/tx");
const tx_6 = require("./types/ibc/core/channel/v1/tx");
const tx_7 = require("./types/ibc/core/channel/v1/tx");
const tx_8 = require("./types/ibc/core/channel/v1/tx");
const channel_2 = require("./types/ibc/core/channel/v1/channel");
const channel_3 = require("./types/ibc/core/channel/v1/channel");
const upgrade_1 = require("./types/ibc/core/channel/v1/upgrade");
const query_7 = require("./types/ibc/core/channel/v1/query");
const query_8 = require("./types/ibc/core/channel/v1/query");
const query_9 = require("./types/ibc/core/channel/v1/query");
const query_10 = require("./types/ibc/core/channel/v1/query");
const query_11 = require("./types/ibc/core/channel/v1/query");
const query_12 = require("./types/ibc/core/channel/v1/query");
const tx_9 = require("./types/ibc/core/channel/v1/tx");
const tx_10 = require("./types/ibc/core/channel/v1/tx");
const channel_4 = require("./types/ibc/core/channel/v1/channel");
const channel_5 = require("./types/ibc/core/channel/v1/channel");
const channel_6 = require("./types/ibc/core/channel/v1/channel");
const query_13 = require("./types/ibc/core/channel/v1/query");
const query_14 = require("./types/ibc/core/channel/v1/query");
const tx_11 = require("./types/ibc/core/channel/v1/tx");
const query_15 = require("./types/ibc/core/channel/v1/query");
const query_16 = require("./types/ibc/core/channel/v1/query");
const tx_12 = require("./types/ibc/core/channel/v1/tx");
const tx_13 = require("./types/ibc/core/channel/v1/tx");
const tx_14 = require("./types/ibc/core/channel/v1/tx");
const channel_7 = require("./types/ibc/core/channel/v1/channel");
const query_17 = require("./types/ibc/core/channel/v1/query");
const query_18 = require("./types/ibc/core/channel/v1/query");
const tx_15 = require("./types/ibc/core/channel/v1/tx");
const tx_16 = require("./types/ibc/core/channel/v1/tx");
const tx_17 = require("./types/ibc/core/channel/v1/tx");
const tx_18 = require("./types/ibc/core/channel/v1/tx");
const tx_19 = require("./types/ibc/core/channel/v1/tx");
const tx_20 = require("./types/ibc/core/channel/v1/tx");
const query_19 = require("./types/ibc/core/channel/v1/query");
const query_20 = require("./types/ibc/core/channel/v1/query");
const query_21 = require("./types/ibc/core/channel/v1/query");
const query_22 = require("./types/ibc/core/channel/v1/query");
const tx_21 = require("./types/ibc/core/channel/v1/tx");
const genesis_1 = require("./types/ibc/core/channel/v1/genesis");
const query_23 = require("./types/ibc/core/channel/v1/query");
const tx_22 = require("./types/ibc/core/channel/v1/tx");
const tx_23 = require("./types/ibc/core/channel/v1/tx");
const tx_24 = require("./types/ibc/core/channel/v1/tx");
const query_24 = require("./types/ibc/core/channel/v1/query");
const tx_25 = require("./types/ibc/core/channel/v1/tx");
const tx_26 = require("./types/ibc/core/channel/v1/tx");
const query_25 = require("./types/ibc/core/channel/v1/query");
const tx_27 = require("./types/ibc/core/channel/v1/tx");
const tx_28 = require("./types/ibc/core/channel/v1/tx");
const tx_29 = require("./types/ibc/core/channel/v1/tx");
const tx_30 = require("./types/ibc/core/channel/v1/tx");
const genesis_2 = require("./types/ibc/core/channel/v1/genesis");
const upgrade_2 = require("./types/ibc/core/channel/v1/upgrade");
const query_26 = require("./types/ibc/core/channel/v1/query");
const tx_31 = require("./types/ibc/core/channel/v1/tx");
const tx_32 = require("./types/ibc/core/channel/v1/tx");
const channel_8 = require("./types/ibc/core/channel/v1/channel");
const channel_9 = require("./types/ibc/core/channel/v1/channel");
const upgrade_3 = require("./types/ibc/core/channel/v1/upgrade");
const query_27 = require("./types/ibc/core/channel/v1/query");
const query_28 = require("./types/ibc/core/channel/v1/query");
const query_29 = require("./types/ibc/core/channel/v1/query");
const tx_33 = require("./types/ibc/core/channel/v1/tx");
const tx_34 = require("./types/ibc/core/channel/v1/tx");
const query_30 = require("./types/ibc/core/channel/v1/query");
const query_31 = require("./types/ibc/core/channel/v1/query");
const query_32 = require("./types/ibc/core/channel/v1/query");
const query_33 = require("./types/ibc/core/channel/v1/query");
const query_34 = require("./types/ibc/core/channel/v1/query");
const tx_35 = require("./types/ibc/core/channel/v1/tx");
const tx_36 = require("./types/ibc/core/channel/v1/tx");
const tx_37 = require("./types/ibc/core/channel/v1/tx");
const tx_38 = require("./types/ibc/core/channel/v1/tx");
const msgTypes = [
    ["/ibc.core.channel.v1.QueryPacketCommitmentsResponse", query_1.QueryPacketCommitmentsResponse],
    ["/ibc.core.channel.v1.QueryUnreceivedPacketsResponse", query_2.QueryUnreceivedPacketsResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeOpen", tx_1.MsgChannelUpgradeOpen],
    ["/ibc.core.channel.v1.MsgChannelOpenAckResponse", tx_2.MsgChannelOpenAckResponse],
    ["/ibc.core.channel.v1.MsgTimeoutOnCloseResponse", tx_3.MsgTimeoutOnCloseResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeTryResponse", tx_4.MsgChannelUpgradeTryResponse],
    ["/ibc.core.channel.v1.PacketId", channel_1.PacketId],
    ["/ibc.core.channel.v1.QueryConnectionChannelsRequest", query_3.QueryConnectionChannelsRequest],
    ["/ibc.core.channel.v1.QueryUnreceivedAcksRequest", query_4.QueryUnreceivedAcksRequest],
    ["/ibc.core.channel.v1.QueryUnreceivedAcksResponse", query_5.QueryUnreceivedAcksResponse],
    ["/ibc.core.channel.v1.QueryUpgradeErrorRequest", query_6.QueryUpgradeErrorRequest],
    ["/ibc.core.channel.v1.MsgChannelCloseInit", tx_5.MsgChannelCloseInit],
    ["/ibc.core.channel.v1.MsgChannelOpenConfirmResponse", tx_6.MsgChannelOpenConfirmResponse],
    ["/ibc.core.channel.v1.MsgUpdateParamsResponse", tx_7.MsgUpdateParamsResponse],
    ["/ibc.core.channel.v1.MsgAcknowledgementResponse", tx_8.MsgAcknowledgementResponse],
    ["/ibc.core.channel.v1.Timeout", channel_2.Timeout],
    ["/ibc.core.channel.v1.Params", channel_3.Params],
    ["/ibc.core.channel.v1.UpgradeFields", upgrade_1.UpgradeFields],
    ["/ibc.core.channel.v1.QueryChannelsResponse", query_7.QueryChannelsResponse],
    ["/ibc.core.channel.v1.QueryChannelConsensusStateRequest", query_8.QueryChannelConsensusStateRequest],
    ["/ibc.core.channel.v1.QueryPacketReceiptResponse", query_9.QueryPacketReceiptResponse],
    ["/ibc.core.channel.v1.QueryPacketAcknowledgementRequest", query_10.QueryPacketAcknowledgementRequest],
    ["/ibc.core.channel.v1.QueryChannelRequest", query_11.QueryChannelRequest],
    ["/ibc.core.channel.v1.QueryPacketCommitmentResponse", query_12.QueryPacketCommitmentResponse],
    ["/ibc.core.channel.v1.MsgTimeoutResponse", tx_9.MsgTimeoutResponse],
    ["/ibc.core.channel.v1.MsgPruneAcknowledgementsResponse", tx_10.MsgPruneAcknowledgementsResponse],
    ["/ibc.core.channel.v1.Channel", channel_4.Channel],
    ["/ibc.core.channel.v1.IdentifiedChannel", channel_5.IdentifiedChannel],
    ["/ibc.core.channel.v1.Acknowledgement", channel_6.Acknowledgement],
    ["/ibc.core.channel.v1.QueryPacketReceiptRequest", query_13.QueryPacketReceiptRequest],
    ["/ibc.core.channel.v1.QueryNextSequenceSendResponse", query_14.QueryNextSequenceSendResponse],
    ["/ibc.core.channel.v1.MsgPruneAcknowledgements", tx_11.MsgPruneAcknowledgements],
    ["/ibc.core.channel.v1.QueryChannelsRequest", query_15.QueryChannelsRequest],
    ["/ibc.core.channel.v1.QueryChannelClientStateRequest", query_16.QueryChannelClientStateRequest],
    ["/ibc.core.channel.v1.MsgTimeoutOnClose", tx_12.MsgTimeoutOnClose],
    ["/ibc.core.channel.v1.MsgUpdateParams", tx_13.MsgUpdateParams],
    ["/ibc.core.channel.v1.MsgChannelUpgradeOpenResponse", tx_14.MsgChannelUpgradeOpenResponse],
    ["/ibc.core.channel.v1.Counterparty", channel_7.Counterparty],
    ["/ibc.core.channel.v1.QueryChannelClientStateResponse", query_17.QueryChannelClientStateResponse],
    ["/ibc.core.channel.v1.QueryUpgradeErrorResponse", query_18.QueryUpgradeErrorResponse],
    ["/ibc.core.channel.v1.MsgChannelOpenInit", tx_15.MsgChannelOpenInit],
    ["/ibc.core.channel.v1.MsgChannelOpenTry", tx_16.MsgChannelOpenTry],
    ["/ibc.core.channel.v1.MsgTimeout", tx_17.MsgTimeout],
    ["/ibc.core.channel.v1.MsgChannelUpgradeInit", tx_18.MsgChannelUpgradeInit],
    ["/ibc.core.channel.v1.MsgChannelUpgradeTry", tx_19.MsgChannelUpgradeTry],
    ["/ibc.core.channel.v1.MsgChannelUpgradeCancel", tx_20.MsgChannelUpgradeCancel],
    ["/ibc.core.channel.v1.QueryChannelResponse", query_19.QueryChannelResponse],
    ["/ibc.core.channel.v1.QueryChannelConsensusStateResponse", query_20.QueryChannelConsensusStateResponse],
    ["/ibc.core.channel.v1.QueryNextSequenceReceiveRequest", query_21.QueryNextSequenceReceiveRequest],
    ["/ibc.core.channel.v1.QueryNextSequenceReceiveResponse", query_22.QueryNextSequenceReceiveResponse],
    ["/ibc.core.channel.v1.MsgRecvPacket", tx_21.MsgRecvPacket],
    ["/ibc.core.channel.v1.GenesisState", genesis_1.GenesisState],
    ["/ibc.core.channel.v1.QueryUpgradeRequest", query_23.QueryUpgradeRequest],
    ["/ibc.core.channel.v1.MsgChannelUpgradeAckResponse", tx_22.MsgChannelUpgradeAckResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeConfirmResponse", tx_23.MsgChannelUpgradeConfirmResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeTimeoutResponse", tx_24.MsgChannelUpgradeTimeoutResponse],
    ["/ibc.core.channel.v1.QueryPacketAcknowledgementsRequest", query_24.QueryPacketAcknowledgementsRequest],
    ["/ibc.core.channel.v1.MsgChannelOpenConfirm", tx_25.MsgChannelOpenConfirm],
    ["/ibc.core.channel.v1.MsgChannelUpgradeInitResponse", tx_26.MsgChannelUpgradeInitResponse],
    ["/ibc.core.channel.v1.QueryChannelParamsResponse", query_25.QueryChannelParamsResponse],
    ["/ibc.core.channel.v1.MsgAcknowledgement", tx_27.MsgAcknowledgement],
    ["/ibc.core.channel.v1.MsgChannelUpgradeAck", tx_28.MsgChannelUpgradeAck],
    ["/ibc.core.channel.v1.MsgChannelUpgradeConfirm", tx_29.MsgChannelUpgradeConfirm],
    ["/ibc.core.channel.v1.MsgChannelUpgradeTimeout", tx_30.MsgChannelUpgradeTimeout],
    ["/ibc.core.channel.v1.PacketSequence", genesis_2.PacketSequence],
    ["/ibc.core.channel.v1.ErrorReceipt", upgrade_2.ErrorReceipt],
    ["/ibc.core.channel.v1.QueryPacketCommitmentsRequest", query_26.QueryPacketCommitmentsRequest],
    ["/ibc.core.channel.v1.MsgChannelCloseConfirmResponse", tx_31.MsgChannelCloseConfirmResponse],
    ["/ibc.core.channel.v1.MsgChannelOpenTryResponse", tx_32.MsgChannelOpenTryResponse],
    ["/ibc.core.channel.v1.Packet", channel_8.Packet],
    ["/ibc.core.channel.v1.PacketState", channel_9.PacketState],
    ["/ibc.core.channel.v1.Upgrade", upgrade_3.Upgrade],
    ["/ibc.core.channel.v1.QueryPacketCommitmentRequest", query_27.QueryPacketCommitmentRequest],
    ["/ibc.core.channel.v1.QueryPacketAcknowledgementResponse", query_28.QueryPacketAcknowledgementResponse],
    ["/ibc.core.channel.v1.QueryUpgradeResponse", query_29.QueryUpgradeResponse],
    ["/ibc.core.channel.v1.MsgRecvPacketResponse", tx_33.MsgRecvPacketResponse],
    ["/ibc.core.channel.v1.MsgChannelOpenInitResponse", tx_34.MsgChannelOpenInitResponse],
    ["/ibc.core.channel.v1.QueryConnectionChannelsResponse", query_30.QueryConnectionChannelsResponse],
    ["/ibc.core.channel.v1.QueryPacketAcknowledgementsResponse", query_31.QueryPacketAcknowledgementsResponse],
    ["/ibc.core.channel.v1.QueryUnreceivedPacketsRequest", query_32.QueryUnreceivedPacketsRequest],
    ["/ibc.core.channel.v1.QueryNextSequenceSendRequest", query_33.QueryNextSequenceSendRequest],
    ["/ibc.core.channel.v1.QueryChannelParamsRequest", query_34.QueryChannelParamsRequest],
    ["/ibc.core.channel.v1.MsgChannelOpenAck", tx_35.MsgChannelOpenAck],
    ["/ibc.core.channel.v1.MsgChannelCloseConfirm", tx_36.MsgChannelCloseConfirm],
    ["/ibc.core.channel.v1.MsgChannelCloseInitResponse", tx_37.MsgChannelCloseInitResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeCancelResponse", tx_38.MsgChannelUpgradeCancelResponse],
];
exports.msgTypes = msgTypes;
