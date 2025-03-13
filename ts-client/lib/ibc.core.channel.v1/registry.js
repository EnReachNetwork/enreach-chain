"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/ibc/core/channel/v1/tx");
const tx_2 = require("./types/ibc/core/channel/v1/tx");
const tx_3 = require("./types/ibc/core/channel/v1/tx");
const tx_4 = require("./types/ibc/core/channel/v1/tx");
const tx_5 = require("./types/ibc/core/channel/v1/tx");
const query_1 = require("./types/ibc/core/channel/v1/query");
const query_2 = require("./types/ibc/core/channel/v1/query");
const tx_6 = require("./types/ibc/core/channel/v1/tx");
const query_3 = require("./types/ibc/core/channel/v1/query");
const tx_7 = require("./types/ibc/core/channel/v1/tx");
const tx_8 = require("./types/ibc/core/channel/v1/tx");
const tx_9 = require("./types/ibc/core/channel/v1/tx");
const tx_10 = require("./types/ibc/core/channel/v1/tx");
const genesis_1 = require("./types/ibc/core/channel/v1/genesis");
const channel_1 = require("./types/ibc/core/channel/v1/channel");
const query_4 = require("./types/ibc/core/channel/v1/query");
const query_5 = require("./types/ibc/core/channel/v1/query");
const tx_11 = require("./types/ibc/core/channel/v1/tx");
const query_6 = require("./types/ibc/core/channel/v1/query");
const upgrade_1 = require("./types/ibc/core/channel/v1/upgrade");
const tx_12 = require("./types/ibc/core/channel/v1/tx");
const query_7 = require("./types/ibc/core/channel/v1/query");
const tx_13 = require("./types/ibc/core/channel/v1/tx");
const channel_2 = require("./types/ibc/core/channel/v1/channel");
const channel_3 = require("./types/ibc/core/channel/v1/channel");
const query_8 = require("./types/ibc/core/channel/v1/query");
const tx_14 = require("./types/ibc/core/channel/v1/tx");
const channel_4 = require("./types/ibc/core/channel/v1/channel");
const query_9 = require("./types/ibc/core/channel/v1/query");
const query_10 = require("./types/ibc/core/channel/v1/query");
const query_11 = require("./types/ibc/core/channel/v1/query");
const query_12 = require("./types/ibc/core/channel/v1/query");
const tx_15 = require("./types/ibc/core/channel/v1/tx");
const tx_16 = require("./types/ibc/core/channel/v1/tx");
const tx_17 = require("./types/ibc/core/channel/v1/tx");
const query_13 = require("./types/ibc/core/channel/v1/query");
const query_14 = require("./types/ibc/core/channel/v1/query");
const query_15 = require("./types/ibc/core/channel/v1/query");
const tx_18 = require("./types/ibc/core/channel/v1/tx");
const tx_19 = require("./types/ibc/core/channel/v1/tx");
const tx_20 = require("./types/ibc/core/channel/v1/tx");
const query_16 = require("./types/ibc/core/channel/v1/query");
const query_17 = require("./types/ibc/core/channel/v1/query");
const tx_21 = require("./types/ibc/core/channel/v1/tx");
const query_18 = require("./types/ibc/core/channel/v1/query");
const query_19 = require("./types/ibc/core/channel/v1/query");
const channel_5 = require("./types/ibc/core/channel/v1/channel");
const channel_6 = require("./types/ibc/core/channel/v1/channel");
const tx_22 = require("./types/ibc/core/channel/v1/tx");
const tx_23 = require("./types/ibc/core/channel/v1/tx");
const tx_24 = require("./types/ibc/core/channel/v1/tx");
const query_20 = require("./types/ibc/core/channel/v1/query");
const query_21 = require("./types/ibc/core/channel/v1/query");
const tx_25 = require("./types/ibc/core/channel/v1/tx");
const tx_26 = require("./types/ibc/core/channel/v1/tx");
const tx_27 = require("./types/ibc/core/channel/v1/tx");
const query_22 = require("./types/ibc/core/channel/v1/query");
const query_23 = require("./types/ibc/core/channel/v1/query");
const query_24 = require("./types/ibc/core/channel/v1/query");
const tx_28 = require("./types/ibc/core/channel/v1/tx");
const tx_29 = require("./types/ibc/core/channel/v1/tx");
const tx_30 = require("./types/ibc/core/channel/v1/tx");
const tx_31 = require("./types/ibc/core/channel/v1/tx");
const channel_7 = require("./types/ibc/core/channel/v1/channel");
const query_25 = require("./types/ibc/core/channel/v1/query");
const query_26 = require("./types/ibc/core/channel/v1/query");
const query_27 = require("./types/ibc/core/channel/v1/query");
const query_28 = require("./types/ibc/core/channel/v1/query");
const upgrade_2 = require("./types/ibc/core/channel/v1/upgrade");
const tx_32 = require("./types/ibc/core/channel/v1/tx");
const tx_33 = require("./types/ibc/core/channel/v1/tx");
const genesis_2 = require("./types/ibc/core/channel/v1/genesis");
const query_29 = require("./types/ibc/core/channel/v1/query");
const query_30 = require("./types/ibc/core/channel/v1/query");
const query_31 = require("./types/ibc/core/channel/v1/query");
const upgrade_3 = require("./types/ibc/core/channel/v1/upgrade");
const channel_8 = require("./types/ibc/core/channel/v1/channel");
const tx_34 = require("./types/ibc/core/channel/v1/tx");
const tx_35 = require("./types/ibc/core/channel/v1/tx");
const query_32 = require("./types/ibc/core/channel/v1/query");
const query_33 = require("./types/ibc/core/channel/v1/query");
const query_34 = require("./types/ibc/core/channel/v1/query");
const channel_9 = require("./types/ibc/core/channel/v1/channel");
const tx_36 = require("./types/ibc/core/channel/v1/tx");
const tx_37 = require("./types/ibc/core/channel/v1/tx");
const tx_38 = require("./types/ibc/core/channel/v1/tx");
const msgTypes = [
    ["/ibc.core.channel.v1.MsgChannelOpenConfirm", tx_1.MsgChannelOpenConfirm],
    ["/ibc.core.channel.v1.MsgTimeoutOnClose", tx_2.MsgTimeoutOnClose],
    ["/ibc.core.channel.v1.MsgTimeoutOnCloseResponse", tx_3.MsgTimeoutOnCloseResponse],
    ["/ibc.core.channel.v1.MsgAcknowledgement", tx_4.MsgAcknowledgement],
    ["/ibc.core.channel.v1.MsgChannelUpgradeInitResponse", tx_5.MsgChannelUpgradeInitResponse],
    ["/ibc.core.channel.v1.QueryChannelsResponse", query_1.QueryChannelsResponse],
    ["/ibc.core.channel.v1.QueryUpgradeRequest", query_2.QueryUpgradeRequest],
    ["/ibc.core.channel.v1.MsgChannelUpgradeTry", tx_6.MsgChannelUpgradeTry],
    ["/ibc.core.channel.v1.QueryUnreceivedAcksResponse", query_3.QueryUnreceivedAcksResponse],
    ["/ibc.core.channel.v1.MsgChannelOpenInit", tx_7.MsgChannelOpenInit],
    ["/ibc.core.channel.v1.MsgChannelOpenInitResponse", tx_8.MsgChannelOpenInitResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeTryResponse", tx_9.MsgChannelUpgradeTryResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeTimeout", tx_10.MsgChannelUpgradeTimeout],
    ["/ibc.core.channel.v1.GenesisState", genesis_1.GenesisState],
    ["/ibc.core.channel.v1.Params", channel_1.Params],
    ["/ibc.core.channel.v1.QueryPacketCommitmentResponse", query_4.QueryPacketCommitmentResponse],
    ["/ibc.core.channel.v1.QueryPacketAcknowledgementsResponse", query_5.QueryPacketAcknowledgementsResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeConfirm", tx_11.MsgChannelUpgradeConfirm],
    ["/ibc.core.channel.v1.QueryNextSequenceSendResponse", query_6.QueryNextSequenceSendResponse],
    ["/ibc.core.channel.v1.ErrorReceipt", upgrade_1.ErrorReceipt],
    ["/ibc.core.channel.v1.MsgChannelUpgradeAckResponse", tx_12.MsgChannelUpgradeAckResponse],
    ["/ibc.core.channel.v1.QueryChannelResponse", query_7.QueryChannelResponse],
    ["/ibc.core.channel.v1.MsgChannelCloseConfirm", tx_13.MsgChannelCloseConfirm],
    ["/ibc.core.channel.v1.Channel", channel_2.Channel],
    ["/ibc.core.channel.v1.IdentifiedChannel", channel_3.IdentifiedChannel],
    ["/ibc.core.channel.v1.QueryChannelClientStateResponse", query_8.QueryChannelClientStateResponse],
    ["/ibc.core.channel.v1.MsgChannelCloseConfirmResponse", tx_14.MsgChannelCloseConfirmResponse],
    ["/ibc.core.channel.v1.Counterparty", channel_4.Counterparty],
    ["/ibc.core.channel.v1.QueryPacketCommitmentRequest", query_9.QueryPacketCommitmentRequest],
    ["/ibc.core.channel.v1.QueryPacketCommitmentsRequest", query_10.QueryPacketCommitmentsRequest],
    ["/ibc.core.channel.v1.QueryPacketReceiptResponse", query_11.QueryPacketReceiptResponse],
    ["/ibc.core.channel.v1.QueryNextSequenceReceiveRequest", query_12.QueryNextSequenceReceiveRequest],
    ["/ibc.core.channel.v1.MsgChannelOpenAckResponse", tx_15.MsgChannelOpenAckResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeOpenResponse", tx_16.MsgChannelUpgradeOpenResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeCancelResponse", tx_17.MsgChannelUpgradeCancelResponse],
    ["/ibc.core.channel.v1.QueryChannelConsensusStateResponse", query_13.QueryChannelConsensusStateResponse],
    ["/ibc.core.channel.v1.QueryChannelRequest", query_14.QueryChannelRequest],
    ["/ibc.core.channel.v1.QueryChannelParamsResponse", query_15.QueryChannelParamsResponse],
    ["/ibc.core.channel.v1.MsgChannelOpenTry", tx_18.MsgChannelOpenTry],
    ["/ibc.core.channel.v1.MsgChannelOpenConfirmResponse", tx_19.MsgChannelOpenConfirmResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeTimeoutResponse", tx_20.MsgChannelUpgradeTimeoutResponse],
    ["/ibc.core.channel.v1.QueryChannelConsensusStateRequest", query_16.QueryChannelConsensusStateRequest],
    ["/ibc.core.channel.v1.QueryPacketCommitmentsResponse", query_17.QueryPacketCommitmentsResponse],
    ["/ibc.core.channel.v1.MsgUpdateParams", tx_21.MsgUpdateParams],
    ["/ibc.core.channel.v1.QueryConnectionChannelsRequest", query_18.QueryConnectionChannelsRequest],
    ["/ibc.core.channel.v1.QueryChannelParamsRequest", query_19.QueryChannelParamsRequest],
    ["/ibc.core.channel.v1.Acknowledgement", channel_5.Acknowledgement],
    ["/ibc.core.channel.v1.PacketState", channel_6.PacketState],
    ["/ibc.core.channel.v1.MsgTimeout", tx_22.MsgTimeout],
    ["/ibc.core.channel.v1.MsgChannelUpgradeOpen", tx_23.MsgChannelUpgradeOpen],
    ["/ibc.core.channel.v1.MsgPruneAcknowledgements", tx_24.MsgPruneAcknowledgements],
    ["/ibc.core.channel.v1.QueryUnreceivedPacketsResponse", query_20.QueryUnreceivedPacketsResponse],
    ["/ibc.core.channel.v1.QueryUnreceivedAcksRequest", query_21.QueryUnreceivedAcksRequest],
    ["/ibc.core.channel.v1.MsgChannelOpenTryResponse", tx_25.MsgChannelOpenTryResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeCancel", tx_26.MsgChannelUpgradeCancel],
    ["/ibc.core.channel.v1.MsgChannelUpgradeAck", tx_27.MsgChannelUpgradeAck],
    ["/ibc.core.channel.v1.QueryPacketReceiptRequest", query_22.QueryPacketReceiptRequest],
    ["/ibc.core.channel.v1.QueryPacketAcknowledgementResponse", query_23.QueryPacketAcknowledgementResponse],
    ["/ibc.core.channel.v1.QueryUpgradeResponse", query_24.QueryUpgradeResponse],
    ["/ibc.core.channel.v1.MsgChannelOpenAck", tx_28.MsgChannelOpenAck],
    ["/ibc.core.channel.v1.MsgRecvPacketResponse", tx_29.MsgRecvPacketResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeConfirmResponse", tx_30.MsgChannelUpgradeConfirmResponse],
    ["/ibc.core.channel.v1.MsgUpdateParamsResponse", tx_31.MsgUpdateParamsResponse],
    ["/ibc.core.channel.v1.Timeout", channel_7.Timeout],
    ["/ibc.core.channel.v1.QueryChannelsRequest", query_25.QueryChannelsRequest],
    ["/ibc.core.channel.v1.QueryConnectionChannelsResponse", query_26.QueryConnectionChannelsResponse],
    ["/ibc.core.channel.v1.QueryPacketAcknowledgementRequest", query_27.QueryPacketAcknowledgementRequest],
    ["/ibc.core.channel.v1.QueryUpgradeErrorRequest", query_28.QueryUpgradeErrorRequest],
    ["/ibc.core.channel.v1.Upgrade", upgrade_2.Upgrade],
    ["/ibc.core.channel.v1.MsgAcknowledgementResponse", tx_32.MsgAcknowledgementResponse],
    ["/ibc.core.channel.v1.MsgPruneAcknowledgementsResponse", tx_33.MsgPruneAcknowledgementsResponse],
    ["/ibc.core.channel.v1.PacketSequence", genesis_2.PacketSequence],
    ["/ibc.core.channel.v1.QueryUnreceivedPacketsRequest", query_29.QueryUnreceivedPacketsRequest],
    ["/ibc.core.channel.v1.QueryNextSequenceSendRequest", query_30.QueryNextSequenceSendRequest],
    ["/ibc.core.channel.v1.QueryUpgradeErrorResponse", query_31.QueryUpgradeErrorResponse],
    ["/ibc.core.channel.v1.UpgradeFields", upgrade_3.UpgradeFields],
    ["/ibc.core.channel.v1.PacketId", channel_8.PacketId],
    ["/ibc.core.channel.v1.MsgRecvPacket", tx_34.MsgRecvPacket],
    ["/ibc.core.channel.v1.MsgChannelUpgradeInit", tx_35.MsgChannelUpgradeInit],
    ["/ibc.core.channel.v1.QueryChannelClientStateRequest", query_32.QueryChannelClientStateRequest],
    ["/ibc.core.channel.v1.QueryPacketAcknowledgementsRequest", query_33.QueryPacketAcknowledgementsRequest],
    ["/ibc.core.channel.v1.QueryNextSequenceReceiveResponse", query_34.QueryNextSequenceReceiveResponse],
    ["/ibc.core.channel.v1.Packet", channel_9.Packet],
    ["/ibc.core.channel.v1.MsgChannelCloseInit", tx_36.MsgChannelCloseInit],
    ["/ibc.core.channel.v1.MsgChannelCloseInitResponse", tx_37.MsgChannelCloseInitResponse],
    ["/ibc.core.channel.v1.MsgTimeoutResponse", tx_38.MsgTimeoutResponse],
];
exports.msgTypes = msgTypes;
