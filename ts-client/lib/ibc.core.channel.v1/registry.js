"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const query_1 = require("./types/ibc/core/channel/v1/query");
const query_2 = require("./types/ibc/core/channel/v1/query");
const tx_1 = require("./types/ibc/core/channel/v1/tx");
const tx_2 = require("./types/ibc/core/channel/v1/tx");
const genesis_1 = require("./types/ibc/core/channel/v1/genesis");
const tx_3 = require("./types/ibc/core/channel/v1/tx");
const query_3 = require("./types/ibc/core/channel/v1/query");
const query_4 = require("./types/ibc/core/channel/v1/query");
const query_5 = require("./types/ibc/core/channel/v1/query");
const tx_4 = require("./types/ibc/core/channel/v1/tx");
const tx_5 = require("./types/ibc/core/channel/v1/tx");
const tx_6 = require("./types/ibc/core/channel/v1/tx");
const tx_7 = require("./types/ibc/core/channel/v1/tx");
const query_6 = require("./types/ibc/core/channel/v1/query");
const query_7 = require("./types/ibc/core/channel/v1/query");
const query_8 = require("./types/ibc/core/channel/v1/query");
const query_9 = require("./types/ibc/core/channel/v1/query");
const tx_8 = require("./types/ibc/core/channel/v1/tx");
const tx_9 = require("./types/ibc/core/channel/v1/tx");
const query_10 = require("./types/ibc/core/channel/v1/query");
const query_11 = require("./types/ibc/core/channel/v1/query");
const tx_10 = require("./types/ibc/core/channel/v1/tx");
const query_12 = require("./types/ibc/core/channel/v1/query");
const tx_11 = require("./types/ibc/core/channel/v1/tx");
const tx_12 = require("./types/ibc/core/channel/v1/tx");
const tx_13 = require("./types/ibc/core/channel/v1/tx");
const tx_14 = require("./types/ibc/core/channel/v1/tx");
const channel_1 = require("./types/ibc/core/channel/v1/channel");
const query_13 = require("./types/ibc/core/channel/v1/query");
const tx_15 = require("./types/ibc/core/channel/v1/tx");
const tx_16 = require("./types/ibc/core/channel/v1/tx");
const tx_17 = require("./types/ibc/core/channel/v1/tx");
const tx_18 = require("./types/ibc/core/channel/v1/tx");
const tx_19 = require("./types/ibc/core/channel/v1/tx");
const query_14 = require("./types/ibc/core/channel/v1/query");
const tx_20 = require("./types/ibc/core/channel/v1/tx");
const tx_21 = require("./types/ibc/core/channel/v1/tx");
const channel_2 = require("./types/ibc/core/channel/v1/channel");
const query_15 = require("./types/ibc/core/channel/v1/query");
const query_16 = require("./types/ibc/core/channel/v1/query");
const query_17 = require("./types/ibc/core/channel/v1/query");
const query_18 = require("./types/ibc/core/channel/v1/query");
const query_19 = require("./types/ibc/core/channel/v1/query");
const tx_22 = require("./types/ibc/core/channel/v1/tx");
const tx_23 = require("./types/ibc/core/channel/v1/tx");
const query_20 = require("./types/ibc/core/channel/v1/query");
const query_21 = require("./types/ibc/core/channel/v1/query");
const tx_24 = require("./types/ibc/core/channel/v1/tx");
const query_22 = require("./types/ibc/core/channel/v1/query");
const query_23 = require("./types/ibc/core/channel/v1/query");
const query_24 = require("./types/ibc/core/channel/v1/query");
const tx_25 = require("./types/ibc/core/channel/v1/tx");
const upgrade_1 = require("./types/ibc/core/channel/v1/upgrade");
const channel_3 = require("./types/ibc/core/channel/v1/channel");
const tx_26 = require("./types/ibc/core/channel/v1/tx");
const tx_27 = require("./types/ibc/core/channel/v1/tx");
const tx_28 = require("./types/ibc/core/channel/v1/tx");
const tx_29 = require("./types/ibc/core/channel/v1/tx");
const genesis_2 = require("./types/ibc/core/channel/v1/genesis");
const upgrade_2 = require("./types/ibc/core/channel/v1/upgrade");
const tx_30 = require("./types/ibc/core/channel/v1/tx");
const tx_31 = require("./types/ibc/core/channel/v1/tx");
const channel_4 = require("./types/ibc/core/channel/v1/channel");
const channel_5 = require("./types/ibc/core/channel/v1/channel");
const query_25 = require("./types/ibc/core/channel/v1/query");
const query_26 = require("./types/ibc/core/channel/v1/query");
const tx_32 = require("./types/ibc/core/channel/v1/tx");
const tx_33 = require("./types/ibc/core/channel/v1/tx");
const channel_6 = require("./types/ibc/core/channel/v1/channel");
const tx_34 = require("./types/ibc/core/channel/v1/tx");
const tx_35 = require("./types/ibc/core/channel/v1/tx");
const channel_7 = require("./types/ibc/core/channel/v1/channel");
const query_27 = require("./types/ibc/core/channel/v1/query");
const tx_36 = require("./types/ibc/core/channel/v1/tx");
const query_28 = require("./types/ibc/core/channel/v1/query");
const channel_8 = require("./types/ibc/core/channel/v1/channel");
const channel_9 = require("./types/ibc/core/channel/v1/channel");
const query_29 = require("./types/ibc/core/channel/v1/query");
const query_30 = require("./types/ibc/core/channel/v1/query");
const query_31 = require("./types/ibc/core/channel/v1/query");
const query_32 = require("./types/ibc/core/channel/v1/query");
const query_33 = require("./types/ibc/core/channel/v1/query");
const query_34 = require("./types/ibc/core/channel/v1/query");
const tx_37 = require("./types/ibc/core/channel/v1/tx");
const upgrade_3 = require("./types/ibc/core/channel/v1/upgrade");
const tx_38 = require("./types/ibc/core/channel/v1/tx");
const msgTypes = [
    ["/ibc.core.channel.v1.QueryConnectionChannelsResponse", query_1.QueryConnectionChannelsResponse],
    ["/ibc.core.channel.v1.QueryPacketReceiptResponse", query_2.QueryPacketReceiptResponse],
    ["/ibc.core.channel.v1.MsgChannelOpenInit", tx_1.MsgChannelOpenInit],
    ["/ibc.core.channel.v1.MsgChannelUpgradeConfirm", tx_2.MsgChannelUpgradeConfirm],
    ["/ibc.core.channel.v1.PacketSequence", genesis_1.PacketSequence],
    ["/ibc.core.channel.v1.MsgChannelUpgradeConfirmResponse", tx_3.MsgChannelUpgradeConfirmResponse],
    ["/ibc.core.channel.v1.QueryChannelResponse", query_3.QueryChannelResponse],
    ["/ibc.core.channel.v1.QueryNextSequenceSendRequest", query_4.QueryNextSequenceSendRequest],
    ["/ibc.core.channel.v1.QueryUpgradeErrorResponse", query_5.QueryUpgradeErrorResponse],
    ["/ibc.core.channel.v1.MsgChannelCloseInit", tx_4.MsgChannelCloseInit],
    ["/ibc.core.channel.v1.MsgAcknowledgementResponse", tx_5.MsgAcknowledgementResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeTryResponse", tx_6.MsgChannelUpgradeTryResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeAckResponse", tx_7.MsgChannelUpgradeAckResponse],
    ["/ibc.core.channel.v1.QueryChannelRequest", query_6.QueryChannelRequest],
    ["/ibc.core.channel.v1.QueryPacketCommitmentsRequest", query_7.QueryPacketCommitmentsRequest],
    ["/ibc.core.channel.v1.QueryPacketAcknowledgementsRequest", query_8.QueryPacketAcknowledgementsRequest],
    ["/ibc.core.channel.v1.QueryChannelParamsRequest", query_9.QueryChannelParamsRequest],
    ["/ibc.core.channel.v1.MsgChannelOpenTry", tx_8.MsgChannelOpenTry],
    ["/ibc.core.channel.v1.MsgChannelOpenConfirmResponse", tx_9.MsgChannelOpenConfirmResponse],
    ["/ibc.core.channel.v1.QueryUnreceivedPacketsRequest", query_10.QueryUnreceivedPacketsRequest],
    ["/ibc.core.channel.v1.QueryNextSequenceSendResponse", query_11.QueryNextSequenceSendResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeOpenResponse", tx_10.MsgChannelUpgradeOpenResponse],
    ["/ibc.core.channel.v1.QueryChannelClientStateResponse", query_12.QueryChannelClientStateResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeTimeout", tx_11.MsgChannelUpgradeTimeout],
    ["/ibc.core.channel.v1.MsgChannelOpenTryResponse", tx_12.MsgChannelOpenTryResponse],
    ["/ibc.core.channel.v1.MsgRecvPacketResponse", tx_13.MsgRecvPacketResponse],
    ["/ibc.core.channel.v1.MsgPruneAcknowledgementsResponse", tx_14.MsgPruneAcknowledgementsResponse],
    ["/ibc.core.channel.v1.Timeout", channel_1.Timeout],
    ["/ibc.core.channel.v1.QueryChannelClientStateRequest", query_13.QueryChannelClientStateRequest],
    ["/ibc.core.channel.v1.MsgChannelCloseConfirm", tx_15.MsgChannelCloseConfirm],
    ["/ibc.core.channel.v1.MsgChannelUpgradeAck", tx_16.MsgChannelUpgradeAck],
    ["/ibc.core.channel.v1.MsgChannelUpgradeOpen", tx_17.MsgChannelUpgradeOpen],
    ["/ibc.core.channel.v1.MsgTimeoutOnCloseResponse", tx_18.MsgTimeoutOnCloseResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeTimeoutResponse", tx_19.MsgChannelUpgradeTimeoutResponse],
    ["/ibc.core.channel.v1.QueryPacketCommitmentRequest", query_14.QueryPacketCommitmentRequest],
    ["/ibc.core.channel.v1.MsgChannelCloseConfirmResponse", tx_20.MsgChannelCloseConfirmResponse],
    ["/ibc.core.channel.v1.MsgRecvPacket", tx_21.MsgRecvPacket],
    ["/ibc.core.channel.v1.IdentifiedChannel", channel_2.IdentifiedChannel],
    ["/ibc.core.channel.v1.QueryChannelConsensusStateRequest", query_15.QueryChannelConsensusStateRequest],
    ["/ibc.core.channel.v1.QueryPacketCommitmentResponse", query_16.QueryPacketCommitmentResponse],
    ["/ibc.core.channel.v1.QueryPacketAcknowledgementResponse", query_17.QueryPacketAcknowledgementResponse],
    ["/ibc.core.channel.v1.QueryNextSequenceReceiveRequest", query_18.QueryNextSequenceReceiveRequest],
    ["/ibc.core.channel.v1.QueryNextSequenceReceiveResponse", query_19.QueryNextSequenceReceiveResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeInitResponse", tx_22.MsgChannelUpgradeInitResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeCancelResponse", tx_23.MsgChannelUpgradeCancelResponse],
    ["/ibc.core.channel.v1.QueryChannelConsensusStateResponse", query_20.QueryChannelConsensusStateResponse],
    ["/ibc.core.channel.v1.QueryPacketAcknowledgementsResponse", query_21.QueryPacketAcknowledgementsResponse],
    ["/ibc.core.channel.v1.MsgTimeoutResponse", tx_24.MsgTimeoutResponse],
    ["/ibc.core.channel.v1.QueryChannelsRequest", query_22.QueryChannelsRequest],
    ["/ibc.core.channel.v1.QueryUnreceivedPacketsResponse", query_23.QueryUnreceivedPacketsResponse],
    ["/ibc.core.channel.v1.QueryUnreceivedAcksRequest", query_24.QueryUnreceivedAcksRequest],
    ["/ibc.core.channel.v1.MsgChannelUpgradeTry", tx_25.MsgChannelUpgradeTry],
    ["/ibc.core.channel.v1.UpgradeFields", upgrade_1.UpgradeFields],
    ["/ibc.core.channel.v1.Channel", channel_3.Channel],
    ["/ibc.core.channel.v1.MsgTimeoutOnClose", tx_26.MsgTimeoutOnClose],
    ["/ibc.core.channel.v1.MsgAcknowledgement", tx_27.MsgAcknowledgement],
    ["/ibc.core.channel.v1.MsgChannelUpgradeInit", tx_28.MsgChannelUpgradeInit],
    ["/ibc.core.channel.v1.MsgUpdateParams", tx_29.MsgUpdateParams],
    ["/ibc.core.channel.v1.GenesisState", genesis_2.GenesisState],
    ["/ibc.core.channel.v1.Upgrade", upgrade_2.Upgrade],
    ["/ibc.core.channel.v1.MsgPruneAcknowledgements", tx_30.MsgPruneAcknowledgements],
    ["/ibc.core.channel.v1.MsgChannelOpenInitResponse", tx_31.MsgChannelOpenInitResponse],
    ["/ibc.core.channel.v1.Packet", channel_4.Packet],
    ["/ibc.core.channel.v1.Params", channel_5.Params],
    ["/ibc.core.channel.v1.QueryPacketCommitmentsResponse", query_25.QueryPacketCommitmentsResponse],
    ["/ibc.core.channel.v1.QueryUpgradeRequest", query_26.QueryUpgradeRequest],
    ["/ibc.core.channel.v1.MsgChannelOpenAckResponse", tx_32.MsgChannelOpenAckResponse],
    ["/ibc.core.channel.v1.MsgUpdateParamsResponse", tx_33.MsgUpdateParamsResponse],
    ["/ibc.core.channel.v1.Counterparty", channel_6.Counterparty],
    ["/ibc.core.channel.v1.MsgChannelOpenAck", tx_34.MsgChannelOpenAck],
    ["/ibc.core.channel.v1.MsgTimeout", tx_35.MsgTimeout],
    ["/ibc.core.channel.v1.PacketId", channel_7.PacketId],
    ["/ibc.core.channel.v1.QueryUpgradeResponse", query_27.QueryUpgradeResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeCancel", tx_36.MsgChannelUpgradeCancel],
    ["/ibc.core.channel.v1.QueryUnreceivedAcksResponse", query_28.QueryUnreceivedAcksResponse],
    ["/ibc.core.channel.v1.PacketState", channel_8.PacketState],
    ["/ibc.core.channel.v1.Acknowledgement", channel_9.Acknowledgement],
    ["/ibc.core.channel.v1.QueryChannelsResponse", query_29.QueryChannelsResponse],
    ["/ibc.core.channel.v1.QueryConnectionChannelsRequest", query_30.QueryConnectionChannelsRequest],
    ["/ibc.core.channel.v1.QueryPacketReceiptRequest", query_31.QueryPacketReceiptRequest],
    ["/ibc.core.channel.v1.QueryPacketAcknowledgementRequest", query_32.QueryPacketAcknowledgementRequest],
    ["/ibc.core.channel.v1.QueryUpgradeErrorRequest", query_33.QueryUpgradeErrorRequest],
    ["/ibc.core.channel.v1.QueryChannelParamsResponse", query_34.QueryChannelParamsResponse],
    ["/ibc.core.channel.v1.MsgChannelOpenConfirm", tx_37.MsgChannelOpenConfirm],
    ["/ibc.core.channel.v1.ErrorReceipt", upgrade_3.ErrorReceipt],
    ["/ibc.core.channel.v1.MsgChannelCloseInitResponse", tx_38.MsgChannelCloseInitResponse],
];
exports.msgTypes = msgTypes;
