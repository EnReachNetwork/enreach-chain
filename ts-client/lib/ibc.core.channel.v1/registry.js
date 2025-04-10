"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const channel_1 = require("./types/ibc/core/channel/v1/channel");
const upgrade_1 = require("./types/ibc/core/channel/v1/upgrade");
const tx_1 = require("./types/ibc/core/channel/v1/tx");
const tx_2 = require("./types/ibc/core/channel/v1/tx");
const query_1 = require("./types/ibc/core/channel/v1/query");
const query_2 = require("./types/ibc/core/channel/v1/query");
const tx_3 = require("./types/ibc/core/channel/v1/tx");
const query_3 = require("./types/ibc/core/channel/v1/query");
const tx_4 = require("./types/ibc/core/channel/v1/tx");
const tx_5 = require("./types/ibc/core/channel/v1/tx");
const tx_6 = require("./types/ibc/core/channel/v1/tx");
const tx_7 = require("./types/ibc/core/channel/v1/tx");
const query_4 = require("./types/ibc/core/channel/v1/query");
const query_5 = require("./types/ibc/core/channel/v1/query");
const query_6 = require("./types/ibc/core/channel/v1/query");
const channel_2 = require("./types/ibc/core/channel/v1/channel");
const tx_8 = require("./types/ibc/core/channel/v1/tx");
const tx_9 = require("./types/ibc/core/channel/v1/tx");
const upgrade_2 = require("./types/ibc/core/channel/v1/upgrade");
const genesis_1 = require("./types/ibc/core/channel/v1/genesis");
const tx_10 = require("./types/ibc/core/channel/v1/tx");
const tx_11 = require("./types/ibc/core/channel/v1/tx");
const tx_12 = require("./types/ibc/core/channel/v1/tx");
const query_7 = require("./types/ibc/core/channel/v1/query");
const query_8 = require("./types/ibc/core/channel/v1/query");
const query_9 = require("./types/ibc/core/channel/v1/query");
const query_10 = require("./types/ibc/core/channel/v1/query");
const query_11 = require("./types/ibc/core/channel/v1/query");
const genesis_2 = require("./types/ibc/core/channel/v1/genesis");
const tx_13 = require("./types/ibc/core/channel/v1/tx");
const tx_14 = require("./types/ibc/core/channel/v1/tx");
const channel_3 = require("./types/ibc/core/channel/v1/channel");
const channel_4 = require("./types/ibc/core/channel/v1/channel");
const query_12 = require("./types/ibc/core/channel/v1/query");
const tx_15 = require("./types/ibc/core/channel/v1/tx");
const tx_16 = require("./types/ibc/core/channel/v1/tx");
const tx_17 = require("./types/ibc/core/channel/v1/tx");
const tx_18 = require("./types/ibc/core/channel/v1/tx");
const query_13 = require("./types/ibc/core/channel/v1/query");
const query_14 = require("./types/ibc/core/channel/v1/query");
const query_15 = require("./types/ibc/core/channel/v1/query");
const query_16 = require("./types/ibc/core/channel/v1/query");
const channel_5 = require("./types/ibc/core/channel/v1/channel");
const tx_19 = require("./types/ibc/core/channel/v1/tx");
const tx_20 = require("./types/ibc/core/channel/v1/tx");
const channel_6 = require("./types/ibc/core/channel/v1/channel");
const query_17 = require("./types/ibc/core/channel/v1/query");
const query_18 = require("./types/ibc/core/channel/v1/query");
const tx_21 = require("./types/ibc/core/channel/v1/tx");
const query_19 = require("./types/ibc/core/channel/v1/query");
const query_20 = require("./types/ibc/core/channel/v1/query");
const query_21 = require("./types/ibc/core/channel/v1/query");
const tx_22 = require("./types/ibc/core/channel/v1/tx");
const upgrade_3 = require("./types/ibc/core/channel/v1/upgrade");
const tx_23 = require("./types/ibc/core/channel/v1/tx");
const channel_7 = require("./types/ibc/core/channel/v1/channel");
const query_22 = require("./types/ibc/core/channel/v1/query");
const query_23 = require("./types/ibc/core/channel/v1/query");
const tx_24 = require("./types/ibc/core/channel/v1/tx");
const tx_25 = require("./types/ibc/core/channel/v1/tx");
const tx_26 = require("./types/ibc/core/channel/v1/tx");
const channel_8 = require("./types/ibc/core/channel/v1/channel");
const query_24 = require("./types/ibc/core/channel/v1/query");
const query_25 = require("./types/ibc/core/channel/v1/query");
const tx_27 = require("./types/ibc/core/channel/v1/tx");
const tx_28 = require("./types/ibc/core/channel/v1/tx");
const tx_29 = require("./types/ibc/core/channel/v1/tx");
const tx_30 = require("./types/ibc/core/channel/v1/tx");
const query_26 = require("./types/ibc/core/channel/v1/query");
const query_27 = require("./types/ibc/core/channel/v1/query");
const tx_31 = require("./types/ibc/core/channel/v1/tx");
const tx_32 = require("./types/ibc/core/channel/v1/tx");
const query_28 = require("./types/ibc/core/channel/v1/query");
const tx_33 = require("./types/ibc/core/channel/v1/tx");
const tx_34 = require("./types/ibc/core/channel/v1/tx");
const tx_35 = require("./types/ibc/core/channel/v1/tx");
const query_29 = require("./types/ibc/core/channel/v1/query");
const query_30 = require("./types/ibc/core/channel/v1/query");
const query_31 = require("./types/ibc/core/channel/v1/query");
const channel_9 = require("./types/ibc/core/channel/v1/channel");
const tx_36 = require("./types/ibc/core/channel/v1/tx");
const query_32 = require("./types/ibc/core/channel/v1/query");
const query_33 = require("./types/ibc/core/channel/v1/query");
const query_34 = require("./types/ibc/core/channel/v1/query");
const tx_37 = require("./types/ibc/core/channel/v1/tx");
const tx_38 = require("./types/ibc/core/channel/v1/tx");
const msgTypes = [
    ["/ibc.core.channel.v1.Timeout", channel_1.Timeout],
    ["/ibc.core.channel.v1.ErrorReceipt", upgrade_1.ErrorReceipt],
    ["/ibc.core.channel.v1.MsgChannelUpgradeAck", tx_1.MsgChannelUpgradeAck],
    ["/ibc.core.channel.v1.MsgPruneAcknowledgements", tx_2.MsgPruneAcknowledgements],
    ["/ibc.core.channel.v1.QueryUnreceivedPacketsResponse", query_1.QueryUnreceivedPacketsResponse],
    ["/ibc.core.channel.v1.QueryNextSequenceSendResponse", query_2.QueryNextSequenceSendResponse],
    ["/ibc.core.channel.v1.MsgTimeoutOnClose", tx_3.MsgTimeoutOnClose],
    ["/ibc.core.channel.v1.QueryPacketAcknowledgementsRequest", query_3.QueryPacketAcknowledgementsRequest],
    ["/ibc.core.channel.v1.MsgChannelCloseInitResponse", tx_4.MsgChannelCloseInitResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeOpenResponse", tx_5.MsgChannelUpgradeOpenResponse],
    ["/ibc.core.channel.v1.MsgUpdateParamsResponse", tx_6.MsgUpdateParamsResponse],
    ["/ibc.core.channel.v1.MsgChannelCloseConfirmResponse", tx_7.MsgChannelCloseConfirmResponse],
    ["/ibc.core.channel.v1.QueryPacketAcknowledgementRequest", query_4.QueryPacketAcknowledgementRequest],
    ["/ibc.core.channel.v1.QueryPacketAcknowledgementsResponse", query_5.QueryPacketAcknowledgementsResponse],
    ["/ibc.core.channel.v1.QueryNextSequenceReceiveRequest", query_6.QueryNextSequenceReceiveRequest],
    ["/ibc.core.channel.v1.Params", channel_2.Params],
    ["/ibc.core.channel.v1.MsgChannelOpenAckResponse", tx_8.MsgChannelOpenAckResponse],
    ["/ibc.core.channel.v1.MsgAcknowledgementResponse", tx_9.MsgAcknowledgementResponse],
    ["/ibc.core.channel.v1.Upgrade", upgrade_2.Upgrade],
    ["/ibc.core.channel.v1.PacketSequence", genesis_1.PacketSequence],
    ["/ibc.core.channel.v1.MsgAcknowledgement", tx_10.MsgAcknowledgement],
    ["/ibc.core.channel.v1.MsgChannelUpgradeCancel", tx_11.MsgChannelUpgradeCancel],
    ["/ibc.core.channel.v1.MsgChannelOpenInit", tx_12.MsgChannelOpenInit],
    ["/ibc.core.channel.v1.QueryChannelResponse", query_7.QueryChannelResponse],
    ["/ibc.core.channel.v1.QueryUpgradeResponse", query_8.QueryUpgradeResponse],
    ["/ibc.core.channel.v1.QueryChannelsRequest", query_9.QueryChannelsRequest],
    ["/ibc.core.channel.v1.QueryPacketReceiptResponse", query_10.QueryPacketReceiptResponse],
    ["/ibc.core.channel.v1.QueryUnreceivedAcksResponse", query_11.QueryUnreceivedAcksResponse],
    ["/ibc.core.channel.v1.GenesisState", genesis_2.GenesisState],
    ["/ibc.core.channel.v1.MsgChannelOpenAck", tx_13.MsgChannelOpenAck],
    ["/ibc.core.channel.v1.MsgRecvPacket", tx_14.MsgRecvPacket],
    ["/ibc.core.channel.v1.Packet", channel_3.Packet],
    ["/ibc.core.channel.v1.PacketState", channel_4.PacketState],
    ["/ibc.core.channel.v1.QueryNextSequenceReceiveResponse", query_12.QueryNextSequenceReceiveResponse],
    ["/ibc.core.channel.v1.MsgChannelOpenInitResponse", tx_15.MsgChannelOpenInitResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeConfirmResponse", tx_16.MsgChannelUpgradeConfirmResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeTimeoutResponse", tx_17.MsgChannelUpgradeTimeoutResponse],
    ["/ibc.core.channel.v1.MsgUpdateParams", tx_18.MsgUpdateParams],
    ["/ibc.core.channel.v1.QueryChannelClientStateResponse", query_13.QueryChannelClientStateResponse],
    ["/ibc.core.channel.v1.QueryChannelConsensusStateResponse", query_14.QueryChannelConsensusStateResponse],
    ["/ibc.core.channel.v1.QueryPacketCommitmentResponse", query_15.QueryPacketCommitmentResponse],
    ["/ibc.core.channel.v1.QueryUnreceivedAcksRequest", query_16.QueryUnreceivedAcksRequest],
    ["/ibc.core.channel.v1.Acknowledgement", channel_5.Acknowledgement],
    ["/ibc.core.channel.v1.MsgChannelUpgradeInit", tx_19.MsgChannelUpgradeInit],
    ["/ibc.core.channel.v1.MsgChannelUpgradeTry", tx_20.MsgChannelUpgradeTry],
    ["/ibc.core.channel.v1.PacketId", channel_6.PacketId],
    ["/ibc.core.channel.v1.QueryChannelClientStateRequest", query_17.QueryChannelClientStateRequest],
    ["/ibc.core.channel.v1.QueryChannelConsensusStateRequest", query_18.QueryChannelConsensusStateRequest],
    ["/ibc.core.channel.v1.MsgChannelOpenTry", tx_21.MsgChannelOpenTry],
    ["/ibc.core.channel.v1.QueryUpgradeRequest", query_19.QueryUpgradeRequest],
    ["/ibc.core.channel.v1.QueryPacketAcknowledgementResponse", query_20.QueryPacketAcknowledgementResponse],
    ["/ibc.core.channel.v1.QueryChannelParamsRequest", query_21.QueryChannelParamsRequest],
    ["/ibc.core.channel.v1.MsgChannelOpenTryResponse", tx_22.MsgChannelOpenTryResponse],
    ["/ibc.core.channel.v1.UpgradeFields", upgrade_3.UpgradeFields],
    ["/ibc.core.channel.v1.MsgChannelUpgradeOpen", tx_23.MsgChannelUpgradeOpen],
    ["/ibc.core.channel.v1.Counterparty", channel_7.Counterparty],
    ["/ibc.core.channel.v1.QueryChannelRequest", query_22.QueryChannelRequest],
    ["/ibc.core.channel.v1.QueryPacketReceiptRequest", query_23.QueryPacketReceiptRequest],
    ["/ibc.core.channel.v1.MsgChannelUpgradeCancelResponse", tx_24.MsgChannelUpgradeCancelResponse],
    ["/ibc.core.channel.v1.MsgPruneAcknowledgementsResponse", tx_25.MsgPruneAcknowledgementsResponse],
    ["/ibc.core.channel.v1.MsgChannelOpenConfirm", tx_26.MsgChannelOpenConfirm],
    ["/ibc.core.channel.v1.Channel", channel_8.Channel],
    ["/ibc.core.channel.v1.QueryPacketCommitmentRequest", query_24.QueryPacketCommitmentRequest],
    ["/ibc.core.channel.v1.QueryNextSequenceSendRequest", query_25.QueryNextSequenceSendRequest],
    ["/ibc.core.channel.v1.MsgChannelUpgradeInitResponse", tx_27.MsgChannelUpgradeInitResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeConfirm", tx_28.MsgChannelUpgradeConfirm],
    ["/ibc.core.channel.v1.MsgChannelUpgradeTimeout", tx_29.MsgChannelUpgradeTimeout],
    ["/ibc.core.channel.v1.MsgChannelCloseInit", tx_30.MsgChannelCloseInit],
    ["/ibc.core.channel.v1.QueryChannelsResponse", query_26.QueryChannelsResponse],
    ["/ibc.core.channel.v1.QueryPacketCommitmentsResponse", query_27.QueryPacketCommitmentsResponse],
    ["/ibc.core.channel.v1.MsgTimeoutResponse", tx_31.MsgTimeoutResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeTryResponse", tx_32.MsgChannelUpgradeTryResponse],
    ["/ibc.core.channel.v1.QueryUpgradeErrorResponse", query_28.QueryUpgradeErrorResponse],
    ["/ibc.core.channel.v1.MsgChannelOpenConfirmResponse", tx_33.MsgChannelOpenConfirmResponse],
    ["/ibc.core.channel.v1.MsgChannelCloseConfirm", tx_34.MsgChannelCloseConfirm],
    ["/ibc.core.channel.v1.MsgTimeout", tx_35.MsgTimeout],
    ["/ibc.core.channel.v1.QueryConnectionChannelsRequest", query_29.QueryConnectionChannelsRequest],
    ["/ibc.core.channel.v1.QueryConnectionChannelsResponse", query_30.QueryConnectionChannelsResponse],
    ["/ibc.core.channel.v1.QueryUpgradeErrorRequest", query_31.QueryUpgradeErrorRequest],
    ["/ibc.core.channel.v1.IdentifiedChannel", channel_9.IdentifiedChannel],
    ["/ibc.core.channel.v1.MsgChannelUpgradeAckResponse", tx_36.MsgChannelUpgradeAckResponse],
    ["/ibc.core.channel.v1.QueryPacketCommitmentsRequest", query_32.QueryPacketCommitmentsRequest],
    ["/ibc.core.channel.v1.QueryUnreceivedPacketsRequest", query_33.QueryUnreceivedPacketsRequest],
    ["/ibc.core.channel.v1.QueryChannelParamsResponse", query_34.QueryChannelParamsResponse],
    ["/ibc.core.channel.v1.MsgRecvPacketResponse", tx_37.MsgRecvPacketResponse],
    ["/ibc.core.channel.v1.MsgTimeoutOnCloseResponse", tx_38.MsgTimeoutOnCloseResponse],
];
exports.msgTypes = msgTypes;
