"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const query_1 = require("./types/ibc/core/channel/v1/query");
const query_2 = require("./types/ibc/core/channel/v1/query");
const tx_1 = require("./types/ibc/core/channel/v1/tx");
const tx_2 = require("./types/ibc/core/channel/v1/tx");
const tx_3 = require("./types/ibc/core/channel/v1/tx");
const query_3 = require("./types/ibc/core/channel/v1/query");
const query_4 = require("./types/ibc/core/channel/v1/query");
const tx_4 = require("./types/ibc/core/channel/v1/tx");
const tx_5 = require("./types/ibc/core/channel/v1/tx");
const tx_6 = require("./types/ibc/core/channel/v1/tx");
const query_5 = require("./types/ibc/core/channel/v1/query");
const query_6 = require("./types/ibc/core/channel/v1/query");
const query_7 = require("./types/ibc/core/channel/v1/query");
const tx_7 = require("./types/ibc/core/channel/v1/tx");
const tx_8 = require("./types/ibc/core/channel/v1/tx");
const tx_9 = require("./types/ibc/core/channel/v1/tx");
const tx_10 = require("./types/ibc/core/channel/v1/tx");
const query_8 = require("./types/ibc/core/channel/v1/query");
const query_9 = require("./types/ibc/core/channel/v1/query");
const query_10 = require("./types/ibc/core/channel/v1/query");
const query_11 = require("./types/ibc/core/channel/v1/query");
const tx_11 = require("./types/ibc/core/channel/v1/tx");
const tx_12 = require("./types/ibc/core/channel/v1/tx");
const query_12 = require("./types/ibc/core/channel/v1/query");
const query_13 = require("./types/ibc/core/channel/v1/query");
const query_14 = require("./types/ibc/core/channel/v1/query");
const tx_13 = require("./types/ibc/core/channel/v1/tx");
const query_15 = require("./types/ibc/core/channel/v1/query");
const channel_1 = require("./types/ibc/core/channel/v1/channel");
const query_16 = require("./types/ibc/core/channel/v1/query");
const query_17 = require("./types/ibc/core/channel/v1/query");
const query_18 = require("./types/ibc/core/channel/v1/query");
const query_19 = require("./types/ibc/core/channel/v1/query");
const tx_14 = require("./types/ibc/core/channel/v1/tx");
const tx_15 = require("./types/ibc/core/channel/v1/tx");
const upgrade_1 = require("./types/ibc/core/channel/v1/upgrade");
const channel_2 = require("./types/ibc/core/channel/v1/channel");
const query_20 = require("./types/ibc/core/channel/v1/query");
const query_21 = require("./types/ibc/core/channel/v1/query");
const tx_16 = require("./types/ibc/core/channel/v1/tx");
const query_22 = require("./types/ibc/core/channel/v1/query");
const tx_17 = require("./types/ibc/core/channel/v1/tx");
const tx_18 = require("./types/ibc/core/channel/v1/tx");
const tx_19 = require("./types/ibc/core/channel/v1/tx");
const channel_3 = require("./types/ibc/core/channel/v1/channel");
const query_23 = require("./types/ibc/core/channel/v1/query");
const channel_4 = require("./types/ibc/core/channel/v1/channel");
const genesis_1 = require("./types/ibc/core/channel/v1/genesis");
const query_24 = require("./types/ibc/core/channel/v1/query");
const query_25 = require("./types/ibc/core/channel/v1/query");
const query_26 = require("./types/ibc/core/channel/v1/query");
const tx_20 = require("./types/ibc/core/channel/v1/tx");
const tx_21 = require("./types/ibc/core/channel/v1/tx");
const genesis_2 = require("./types/ibc/core/channel/v1/genesis");
const query_27 = require("./types/ibc/core/channel/v1/query");
const query_28 = require("./types/ibc/core/channel/v1/query");
const channel_5 = require("./types/ibc/core/channel/v1/channel");
const tx_22 = require("./types/ibc/core/channel/v1/tx");
const tx_23 = require("./types/ibc/core/channel/v1/tx");
const query_29 = require("./types/ibc/core/channel/v1/query");
const tx_24 = require("./types/ibc/core/channel/v1/tx");
const channel_6 = require("./types/ibc/core/channel/v1/channel");
const query_30 = require("./types/ibc/core/channel/v1/query");
const tx_25 = require("./types/ibc/core/channel/v1/tx");
const tx_26 = require("./types/ibc/core/channel/v1/tx");
const tx_27 = require("./types/ibc/core/channel/v1/tx");
const tx_28 = require("./types/ibc/core/channel/v1/tx");
const tx_29 = require("./types/ibc/core/channel/v1/tx");
const tx_30 = require("./types/ibc/core/channel/v1/tx");
const upgrade_2 = require("./types/ibc/core/channel/v1/upgrade");
const query_31 = require("./types/ibc/core/channel/v1/query");
const query_32 = require("./types/ibc/core/channel/v1/query");
const query_33 = require("./types/ibc/core/channel/v1/query");
const channel_7 = require("./types/ibc/core/channel/v1/channel");
const tx_31 = require("./types/ibc/core/channel/v1/tx");
const tx_32 = require("./types/ibc/core/channel/v1/tx");
const tx_33 = require("./types/ibc/core/channel/v1/tx");
const tx_34 = require("./types/ibc/core/channel/v1/tx");
const upgrade_3 = require("./types/ibc/core/channel/v1/upgrade");
const tx_35 = require("./types/ibc/core/channel/v1/tx");
const channel_8 = require("./types/ibc/core/channel/v1/channel");
const query_34 = require("./types/ibc/core/channel/v1/query");
const channel_9 = require("./types/ibc/core/channel/v1/channel");
const tx_36 = require("./types/ibc/core/channel/v1/tx");
const tx_37 = require("./types/ibc/core/channel/v1/tx");
const tx_38 = require("./types/ibc/core/channel/v1/tx");
const msgTypes = [
    ["/ibc.core.channel.v1.QueryPacketCommitmentRequest", query_1.QueryPacketCommitmentRequest],
    ["/ibc.core.channel.v1.QueryPacketCommitmentsRequest", query_2.QueryPacketCommitmentsRequest],
    ["/ibc.core.channel.v1.MsgChannelCloseInitResponse", tx_1.MsgChannelCloseInitResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeTimeout", tx_2.MsgChannelUpgradeTimeout],
    ["/ibc.core.channel.v1.MsgUpdateParams", tx_3.MsgUpdateParams],
    ["/ibc.core.channel.v1.QueryChannelClientStateResponse", query_3.QueryChannelClientStateResponse],
    ["/ibc.core.channel.v1.QueryUnreceivedAcksRequest", query_4.QueryUnreceivedAcksRequest],
    ["/ibc.core.channel.v1.MsgTimeoutOnCloseResponse", tx_4.MsgTimeoutOnCloseResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeTryResponse", tx_5.MsgChannelUpgradeTryResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeAckResponse", tx_6.MsgChannelUpgradeAckResponse],
    ["/ibc.core.channel.v1.QueryUnreceivedPacketsRequest", query_5.QueryUnreceivedPacketsRequest],
    ["/ibc.core.channel.v1.QueryUpgradeRequest", query_6.QueryUpgradeRequest],
    ["/ibc.core.channel.v1.QueryUpgradeResponse", query_7.QueryUpgradeResponse],
    ["/ibc.core.channel.v1.MsgChannelOpenTryResponse", tx_7.MsgChannelOpenTryResponse],
    ["/ibc.core.channel.v1.MsgChannelCloseConfirmResponse", tx_8.MsgChannelCloseConfirmResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeAck", tx_9.MsgChannelUpgradeAck],
    ["/ibc.core.channel.v1.MsgPruneAcknowledgements", tx_10.MsgPruneAcknowledgements],
    ["/ibc.core.channel.v1.QueryChannelsResponse", query_8.QueryChannelsResponse],
    ["/ibc.core.channel.v1.QueryUnreceivedAcksResponse", query_9.QueryUnreceivedAcksResponse],
    ["/ibc.core.channel.v1.QueryUpgradeErrorResponse", query_10.QueryUpgradeErrorResponse],
    ["/ibc.core.channel.v1.QueryChannelParamsResponse", query_11.QueryChannelParamsResponse],
    ["/ibc.core.channel.v1.MsgChannelCloseInit", tx_11.MsgChannelCloseInit],
    ["/ibc.core.channel.v1.MsgChannelUpgradeInit", tx_12.MsgChannelUpgradeInit],
    ["/ibc.core.channel.v1.QueryChannelRequest", query_12.QueryChannelRequest],
    ["/ibc.core.channel.v1.QueryChannelResponse", query_13.QueryChannelResponse],
    ["/ibc.core.channel.v1.QueryPacketReceiptResponse", query_14.QueryPacketReceiptResponse],
    ["/ibc.core.channel.v1.MsgTimeout", tx_13.MsgTimeout],
    ["/ibc.core.channel.v1.QueryPacketAcknowledgementRequest", query_15.QueryPacketAcknowledgementRequest],
    ["/ibc.core.channel.v1.Channel", channel_1.Channel],
    ["/ibc.core.channel.v1.QueryChannelConsensusStateResponse", query_16.QueryChannelConsensusStateResponse],
    ["/ibc.core.channel.v1.QueryPacketCommitmentResponse", query_17.QueryPacketCommitmentResponse],
    ["/ibc.core.channel.v1.QueryPacketReceiptRequest", query_18.QueryPacketReceiptRequest],
    ["/ibc.core.channel.v1.QueryNextSequenceSendRequest", query_19.QueryNextSequenceSendRequest],
    ["/ibc.core.channel.v1.MsgTimeoutResponse", tx_14.MsgTimeoutResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeOpenResponse", tx_15.MsgChannelUpgradeOpenResponse],
    ["/ibc.core.channel.v1.Upgrade", upgrade_1.Upgrade],
    ["/ibc.core.channel.v1.PacketState", channel_2.PacketState],
    ["/ibc.core.channel.v1.QueryNextSequenceReceiveRequest", query_20.QueryNextSequenceReceiveRequest],
    ["/ibc.core.channel.v1.QueryNextSequenceReceiveResponse", query_21.QueryNextSequenceReceiveResponse],
    ["/ibc.core.channel.v1.MsgChannelOpenTry", tx_16.MsgChannelOpenTry],
    ["/ibc.core.channel.v1.QueryConnectionChannelsRequest", query_22.QueryConnectionChannelsRequest],
    ["/ibc.core.channel.v1.MsgChannelOpenConfirm", tx_17.MsgChannelOpenConfirm],
    ["/ibc.core.channel.v1.MsgAcknowledgementResponse", tx_18.MsgAcknowledgementResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeConfirmResponse", tx_19.MsgChannelUpgradeConfirmResponse],
    ["/ibc.core.channel.v1.Timeout", channel_3.Timeout],
    ["/ibc.core.channel.v1.QueryPacketAcknowledgementsResponse", query_23.QueryPacketAcknowledgementsResponse],
    ["/ibc.core.channel.v1.PacketId", channel_4.PacketId],
    ["/ibc.core.channel.v1.GenesisState", genesis_1.GenesisState],
    ["/ibc.core.channel.v1.QueryChannelClientStateRequest", query_24.QueryChannelClientStateRequest],
    ["/ibc.core.channel.v1.QueryNextSequenceSendResponse", query_25.QueryNextSequenceSendResponse],
    ["/ibc.core.channel.v1.QueryChannelParamsRequest", query_26.QueryChannelParamsRequest],
    ["/ibc.core.channel.v1.MsgChannelOpenConfirmResponse", tx_20.MsgChannelOpenConfirmResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeTimeoutResponse", tx_21.MsgChannelUpgradeTimeoutResponse],
    ["/ibc.core.channel.v1.PacketSequence", genesis_2.PacketSequence],
    ["/ibc.core.channel.v1.QueryChannelsRequest", query_27.QueryChannelsRequest],
    ["/ibc.core.channel.v1.QueryConnectionChannelsResponse", query_28.QueryConnectionChannelsResponse],
    ["/ibc.core.channel.v1.Counterparty", channel_5.Counterparty],
    ["/ibc.core.channel.v1.MsgRecvPacketResponse", tx_22.MsgRecvPacketResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeConfirm", tx_23.MsgChannelUpgradeConfirm],
    ["/ibc.core.channel.v1.QueryChannelConsensusStateRequest", query_29.QueryChannelConsensusStateRequest],
    ["/ibc.core.channel.v1.MsgAcknowledgement", tx_24.MsgAcknowledgement],
    ["/ibc.core.channel.v1.Packet", channel_6.Packet],
    ["/ibc.core.channel.v1.QueryPacketAcknowledgementResponse", query_30.QueryPacketAcknowledgementResponse],
    ["/ibc.core.channel.v1.MsgChannelOpenAckResponse", tx_25.MsgChannelOpenAckResponse],
    ["/ibc.core.channel.v1.MsgRecvPacket", tx_26.MsgRecvPacket],
    ["/ibc.core.channel.v1.MsgTimeoutOnClose", tx_27.MsgTimeoutOnClose],
    ["/ibc.core.channel.v1.MsgPruneAcknowledgementsResponse", tx_28.MsgPruneAcknowledgementsResponse],
    ["/ibc.core.channel.v1.MsgChannelOpenInitResponse", tx_29.MsgChannelOpenInitResponse],
    ["/ibc.core.channel.v1.MsgChannelOpenAck", tx_30.MsgChannelOpenAck],
    ["/ibc.core.channel.v1.UpgradeFields", upgrade_2.UpgradeFields],
    ["/ibc.core.channel.v1.QueryPacketAcknowledgementsRequest", query_31.QueryPacketAcknowledgementsRequest],
    ["/ibc.core.channel.v1.QueryUnreceivedPacketsResponse", query_32.QueryUnreceivedPacketsResponse],
    ["/ibc.core.channel.v1.QueryUpgradeErrorRequest", query_33.QueryUpgradeErrorRequest],
    ["/ibc.core.channel.v1.IdentifiedChannel", channel_7.IdentifiedChannel],
    ["/ibc.core.channel.v1.MsgChannelOpenInit", tx_31.MsgChannelOpenInit],
    ["/ibc.core.channel.v1.MsgChannelCloseConfirm", tx_32.MsgChannelCloseConfirm],
    ["/ibc.core.channel.v1.MsgChannelUpgradeCancelResponse", tx_33.MsgChannelUpgradeCancelResponse],
    ["/ibc.core.channel.v1.MsgUpdateParamsResponse", tx_34.MsgUpdateParamsResponse],
    ["/ibc.core.channel.v1.ErrorReceipt", upgrade_3.ErrorReceipt],
    ["/ibc.core.channel.v1.MsgChannelUpgradeCancel", tx_35.MsgChannelUpgradeCancel],
    ["/ibc.core.channel.v1.Params", channel_8.Params],
    ["/ibc.core.channel.v1.QueryPacketCommitmentsResponse", query_34.QueryPacketCommitmentsResponse],
    ["/ibc.core.channel.v1.Acknowledgement", channel_9.Acknowledgement],
    ["/ibc.core.channel.v1.MsgChannelUpgradeInitResponse", tx_36.MsgChannelUpgradeInitResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeTry", tx_37.MsgChannelUpgradeTry],
    ["/ibc.core.channel.v1.MsgChannelUpgradeOpen", tx_38.MsgChannelUpgradeOpen],
];
exports.msgTypes = msgTypes;
