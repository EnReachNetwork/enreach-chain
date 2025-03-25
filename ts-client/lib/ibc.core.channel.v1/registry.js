"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const channel_1 = require("./types/ibc/core/channel/v1/channel");
const channel_2 = require("./types/ibc/core/channel/v1/channel");
const channel_3 = require("./types/ibc/core/channel/v1/channel");
const query_1 = require("./types/ibc/core/channel/v1/query");
const tx_1 = require("./types/ibc/core/channel/v1/tx");
const tx_2 = require("./types/ibc/core/channel/v1/tx");
const tx_3 = require("./types/ibc/core/channel/v1/tx");
const tx_4 = require("./types/ibc/core/channel/v1/tx");
const query_2 = require("./types/ibc/core/channel/v1/query");
const tx_5 = require("./types/ibc/core/channel/v1/tx");
const tx_6 = require("./types/ibc/core/channel/v1/tx");
const tx_7 = require("./types/ibc/core/channel/v1/tx");
const query_3 = require("./types/ibc/core/channel/v1/query");
const channel_4 = require("./types/ibc/core/channel/v1/channel");
const query_4 = require("./types/ibc/core/channel/v1/query");
const tx_8 = require("./types/ibc/core/channel/v1/tx");
const channel_5 = require("./types/ibc/core/channel/v1/channel");
const tx_9 = require("./types/ibc/core/channel/v1/tx");
const tx_10 = require("./types/ibc/core/channel/v1/tx");
const tx_11 = require("./types/ibc/core/channel/v1/tx");
const query_5 = require("./types/ibc/core/channel/v1/query");
const query_6 = require("./types/ibc/core/channel/v1/query");
const query_7 = require("./types/ibc/core/channel/v1/query");
const query_8 = require("./types/ibc/core/channel/v1/query");
const query_9 = require("./types/ibc/core/channel/v1/query");
const tx_12 = require("./types/ibc/core/channel/v1/tx");
const channel_6 = require("./types/ibc/core/channel/v1/channel");
const query_10 = require("./types/ibc/core/channel/v1/query");
const tx_13 = require("./types/ibc/core/channel/v1/tx");
const tx_14 = require("./types/ibc/core/channel/v1/tx");
const channel_7 = require("./types/ibc/core/channel/v1/channel");
const query_11 = require("./types/ibc/core/channel/v1/query");
const tx_15 = require("./types/ibc/core/channel/v1/tx");
const query_12 = require("./types/ibc/core/channel/v1/query");
const query_13 = require("./types/ibc/core/channel/v1/query");
const query_14 = require("./types/ibc/core/channel/v1/query");
const query_15 = require("./types/ibc/core/channel/v1/query");
const query_16 = require("./types/ibc/core/channel/v1/query");
const upgrade_1 = require("./types/ibc/core/channel/v1/upgrade");
const tx_16 = require("./types/ibc/core/channel/v1/tx");
const tx_17 = require("./types/ibc/core/channel/v1/tx");
const query_17 = require("./types/ibc/core/channel/v1/query");
const query_18 = require("./types/ibc/core/channel/v1/query");
const tx_18 = require("./types/ibc/core/channel/v1/tx");
const tx_19 = require("./types/ibc/core/channel/v1/tx");
const tx_20 = require("./types/ibc/core/channel/v1/tx");
const query_19 = require("./types/ibc/core/channel/v1/query");
const query_20 = require("./types/ibc/core/channel/v1/query");
const query_21 = require("./types/ibc/core/channel/v1/query");
const tx_21 = require("./types/ibc/core/channel/v1/tx");
const tx_22 = require("./types/ibc/core/channel/v1/tx");
const query_22 = require("./types/ibc/core/channel/v1/query");
const query_23 = require("./types/ibc/core/channel/v1/query");
const tx_23 = require("./types/ibc/core/channel/v1/tx");
const channel_8 = require("./types/ibc/core/channel/v1/channel");
const query_24 = require("./types/ibc/core/channel/v1/query");
const query_25 = require("./types/ibc/core/channel/v1/query");
const query_26 = require("./types/ibc/core/channel/v1/query");
const tx_24 = require("./types/ibc/core/channel/v1/tx");
const tx_25 = require("./types/ibc/core/channel/v1/tx");
const tx_26 = require("./types/ibc/core/channel/v1/tx");
const genesis_1 = require("./types/ibc/core/channel/v1/genesis");
const query_27 = require("./types/ibc/core/channel/v1/query");
const tx_27 = require("./types/ibc/core/channel/v1/tx");
const tx_28 = require("./types/ibc/core/channel/v1/tx");
const tx_29 = require("./types/ibc/core/channel/v1/tx");
const tx_30 = require("./types/ibc/core/channel/v1/tx");
const genesis_2 = require("./types/ibc/core/channel/v1/genesis");
const upgrade_2 = require("./types/ibc/core/channel/v1/upgrade");
const tx_31 = require("./types/ibc/core/channel/v1/tx");
const upgrade_3 = require("./types/ibc/core/channel/v1/upgrade");
const query_28 = require("./types/ibc/core/channel/v1/query");
const query_29 = require("./types/ibc/core/channel/v1/query");
const tx_32 = require("./types/ibc/core/channel/v1/tx");
const tx_33 = require("./types/ibc/core/channel/v1/tx");
const tx_34 = require("./types/ibc/core/channel/v1/tx");
const query_30 = require("./types/ibc/core/channel/v1/query");
const channel_9 = require("./types/ibc/core/channel/v1/channel");
const query_31 = require("./types/ibc/core/channel/v1/query");
const query_32 = require("./types/ibc/core/channel/v1/query");
const query_33 = require("./types/ibc/core/channel/v1/query");
const tx_35 = require("./types/ibc/core/channel/v1/tx");
const query_34 = require("./types/ibc/core/channel/v1/query");
const tx_36 = require("./types/ibc/core/channel/v1/tx");
const tx_37 = require("./types/ibc/core/channel/v1/tx");
const tx_38 = require("./types/ibc/core/channel/v1/tx");
const msgTypes = [
    ["/ibc.core.channel.v1.Channel", channel_1.Channel],
    ["/ibc.core.channel.v1.IdentifiedChannel", channel_2.IdentifiedChannel],
    ["/ibc.core.channel.v1.Timeout", channel_3.Timeout],
    ["/ibc.core.channel.v1.QueryChannelRequest", query_1.QueryChannelRequest],
    ["/ibc.core.channel.v1.MsgChannelOpenInitResponse", tx_1.MsgChannelOpenInitResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeTimeoutResponse", tx_2.MsgChannelUpgradeTimeoutResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeCancel", tx_3.MsgChannelUpgradeCancel],
    ["/ibc.core.channel.v1.MsgUpdateParams", tx_4.MsgUpdateParams],
    ["/ibc.core.channel.v1.QueryChannelClientStateRequest", query_2.QueryChannelClientStateRequest],
    ["/ibc.core.channel.v1.MsgChannelOpenAckResponse", tx_5.MsgChannelOpenAckResponse],
    ["/ibc.core.channel.v1.MsgTimeoutOnClose", tx_6.MsgTimeoutOnClose],
    ["/ibc.core.channel.v1.MsgChannelUpgradeConfirmResponse", tx_7.MsgChannelUpgradeConfirmResponse],
    ["/ibc.core.channel.v1.QueryPacketReceiptResponse", query_3.QueryPacketReceiptResponse],
    ["/ibc.core.channel.v1.Packet", channel_4.Packet],
    ["/ibc.core.channel.v1.QueryUnreceivedAcksRequest", query_4.QueryUnreceivedAcksRequest],
    ["/ibc.core.channel.v1.MsgChannelUpgradeOpenResponse", tx_8.MsgChannelUpgradeOpenResponse],
    ["/ibc.core.channel.v1.Counterparty", channel_5.Counterparty],
    ["/ibc.core.channel.v1.MsgChannelCloseInitResponse", tx_9.MsgChannelCloseInitResponse],
    ["/ibc.core.channel.v1.MsgTimeout", tx_10.MsgTimeout],
    ["/ibc.core.channel.v1.MsgChannelUpgradeTryResponse", tx_11.MsgChannelUpgradeTryResponse],
    ["/ibc.core.channel.v1.QueryChannelsRequest", query_5.QueryChannelsRequest],
    ["/ibc.core.channel.v1.QueryChannelsResponse", query_6.QueryChannelsResponse],
    ["/ibc.core.channel.v1.QueryChannelConsensusStateResponse", query_7.QueryChannelConsensusStateResponse],
    ["/ibc.core.channel.v1.QueryNextSequenceSendRequest", query_8.QueryNextSequenceSendRequest],
    ["/ibc.core.channel.v1.QueryUpgradeErrorResponse", query_9.QueryUpgradeErrorResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeConfirm", tx_12.MsgChannelUpgradeConfirm],
    ["/ibc.core.channel.v1.Params", channel_6.Params],
    ["/ibc.core.channel.v1.QueryPacketCommitmentsRequest", query_10.QueryPacketCommitmentsRequest],
    ["/ibc.core.channel.v1.MsgChannelCloseInit", tx_13.MsgChannelCloseInit],
    ["/ibc.core.channel.v1.MsgChannelCloseConfirmResponse", tx_14.MsgChannelCloseConfirmResponse],
    ["/ibc.core.channel.v1.PacketId", channel_7.PacketId],
    ["/ibc.core.channel.v1.QueryUpgradeResponse", query_11.QueryUpgradeResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeAck", tx_15.MsgChannelUpgradeAck],
    ["/ibc.core.channel.v1.QueryChannelResponse", query_12.QueryChannelResponse],
    ["/ibc.core.channel.v1.QueryPacketCommitmentResponse", query_13.QueryPacketCommitmentResponse],
    ["/ibc.core.channel.v1.QueryPacketAcknowledgementRequest", query_14.QueryPacketAcknowledgementRequest],
    ["/ibc.core.channel.v1.QueryPacketAcknowledgementsRequest", query_15.QueryPacketAcknowledgementsRequest],
    ["/ibc.core.channel.v1.QueryUpgradeRequest", query_16.QueryUpgradeRequest],
    ["/ibc.core.channel.v1.ErrorReceipt", upgrade_1.ErrorReceipt],
    ["/ibc.core.channel.v1.MsgAcknowledgementResponse", tx_16.MsgAcknowledgementResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeAckResponse", tx_17.MsgChannelUpgradeAckResponse],
    ["/ibc.core.channel.v1.QueryUnreceivedAcksResponse", query_17.QueryUnreceivedAcksResponse],
    ["/ibc.core.channel.v1.QueryChannelParamsResponse", query_18.QueryChannelParamsResponse],
    ["/ibc.core.channel.v1.MsgChannelOpenTry", tx_18.MsgChannelOpenTry],
    ["/ibc.core.channel.v1.MsgChannelOpenConfirm", tx_19.MsgChannelOpenConfirm],
    ["/ibc.core.channel.v1.MsgChannelOpenConfirmResponse", tx_20.MsgChannelOpenConfirmResponse],
    ["/ibc.core.channel.v1.QueryChannelConsensusStateRequest", query_19.QueryChannelConsensusStateRequest],
    ["/ibc.core.channel.v1.QueryPacketAcknowledgementsResponse", query_20.QueryPacketAcknowledgementsResponse],
    ["/ibc.core.channel.v1.QueryNextSequenceSendResponse", query_21.QueryNextSequenceSendResponse],
    ["/ibc.core.channel.v1.MsgChannelOpenInit", tx_21.MsgChannelOpenInit],
    ["/ibc.core.channel.v1.MsgChannelUpgradeTry", tx_22.MsgChannelUpgradeTry],
    ["/ibc.core.channel.v1.QueryPacketReceiptRequest", query_22.QueryPacketReceiptRequest],
    ["/ibc.core.channel.v1.QueryNextSequenceReceiveRequest", query_23.QueryNextSequenceReceiveRequest],
    ["/ibc.core.channel.v1.MsgChannelUpgradeCancelResponse", tx_23.MsgChannelUpgradeCancelResponse],
    ["/ibc.core.channel.v1.PacketState", channel_8.PacketState],
    ["/ibc.core.channel.v1.QueryPacketCommitmentRequest", query_24.QueryPacketCommitmentRequest],
    ["/ibc.core.channel.v1.QueryPacketAcknowledgementResponse", query_25.QueryPacketAcknowledgementResponse],
    ["/ibc.core.channel.v1.QueryNextSequenceReceiveResponse", query_26.QueryNextSequenceReceiveResponse],
    ["/ibc.core.channel.v1.MsgAcknowledgement", tx_24.MsgAcknowledgement],
    ["/ibc.core.channel.v1.MsgChannelUpgradeTimeout", tx_25.MsgChannelUpgradeTimeout],
    ["/ibc.core.channel.v1.MsgPruneAcknowledgements", tx_26.MsgPruneAcknowledgements],
    ["/ibc.core.channel.v1.GenesisState", genesis_1.GenesisState],
    ["/ibc.core.channel.v1.QueryConnectionChannelsRequest", query_27.QueryConnectionChannelsRequest],
    ["/ibc.core.channel.v1.MsgChannelOpenAck", tx_27.MsgChannelOpenAck],
    ["/ibc.core.channel.v1.MsgChannelUpgradeInit", tx_28.MsgChannelUpgradeInit],
    ["/ibc.core.channel.v1.MsgChannelUpgradeOpen", tx_29.MsgChannelUpgradeOpen],
    ["/ibc.core.channel.v1.MsgUpdateParamsResponse", tx_30.MsgUpdateParamsResponse],
    ["/ibc.core.channel.v1.PacketSequence", genesis_2.PacketSequence],
    ["/ibc.core.channel.v1.Upgrade", upgrade_2.Upgrade],
    ["/ibc.core.channel.v1.MsgChannelUpgradeInitResponse", tx_31.MsgChannelUpgradeInitResponse],
    ["/ibc.core.channel.v1.UpgradeFields", upgrade_3.UpgradeFields],
    ["/ibc.core.channel.v1.QueryPacketCommitmentsResponse", query_28.QueryPacketCommitmentsResponse],
    ["/ibc.core.channel.v1.QueryUpgradeErrorRequest", query_29.QueryUpgradeErrorRequest],
    ["/ibc.core.channel.v1.MsgChannelCloseConfirm", tx_32.MsgChannelCloseConfirm],
    ["/ibc.core.channel.v1.MsgRecvPacketResponse", tx_33.MsgRecvPacketResponse],
    ["/ibc.core.channel.v1.MsgTimeoutOnCloseResponse", tx_34.MsgTimeoutOnCloseResponse],
    ["/ibc.core.channel.v1.QueryChannelClientStateResponse", query_30.QueryChannelClientStateResponse],
    ["/ibc.core.channel.v1.Acknowledgement", channel_9.Acknowledgement],
    ["/ibc.core.channel.v1.QueryUnreceivedPacketsRequest", query_31.QueryUnreceivedPacketsRequest],
    ["/ibc.core.channel.v1.QueryUnreceivedPacketsResponse", query_32.QueryUnreceivedPacketsResponse],
    ["/ibc.core.channel.v1.QueryChannelParamsRequest", query_33.QueryChannelParamsRequest],
    ["/ibc.core.channel.v1.MsgPruneAcknowledgementsResponse", tx_35.MsgPruneAcknowledgementsResponse],
    ["/ibc.core.channel.v1.QueryConnectionChannelsResponse", query_34.QueryConnectionChannelsResponse],
    ["/ibc.core.channel.v1.MsgChannelOpenTryResponse", tx_36.MsgChannelOpenTryResponse],
    ["/ibc.core.channel.v1.MsgRecvPacket", tx_37.MsgRecvPacket],
    ["/ibc.core.channel.v1.MsgTimeoutResponse", tx_38.MsgTimeoutResponse],
];
exports.msgTypes = msgTypes;
