"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/ibc/core/channel/v1/tx");
const tx_2 = require("./types/ibc/core/channel/v1/tx");
const tx_3 = require("./types/ibc/core/channel/v1/tx");
const tx_4 = require("./types/ibc/core/channel/v1/tx");
const tx_5 = require("./types/ibc/core/channel/v1/tx");
const query_1 = require("./types/ibc/core/channel/v1/query");
const tx_6 = require("./types/ibc/core/channel/v1/tx");
const query_2 = require("./types/ibc/core/channel/v1/query");
const query_3 = require("./types/ibc/core/channel/v1/query");
const query_4 = require("./types/ibc/core/channel/v1/query");
const tx_7 = require("./types/ibc/core/channel/v1/tx");
const tx_8 = require("./types/ibc/core/channel/v1/tx");
const tx_9 = require("./types/ibc/core/channel/v1/tx");
const query_5 = require("./types/ibc/core/channel/v1/query");
const query_6 = require("./types/ibc/core/channel/v1/query");
const tx_10 = require("./types/ibc/core/channel/v1/tx");
const tx_11 = require("./types/ibc/core/channel/v1/tx");
const upgrade_1 = require("./types/ibc/core/channel/v1/upgrade");
const channel_1 = require("./types/ibc/core/channel/v1/channel");
const query_7 = require("./types/ibc/core/channel/v1/query");
const query_8 = require("./types/ibc/core/channel/v1/query");
const query_9 = require("./types/ibc/core/channel/v1/query");
const tx_12 = require("./types/ibc/core/channel/v1/tx");
const tx_13 = require("./types/ibc/core/channel/v1/tx");
const query_10 = require("./types/ibc/core/channel/v1/query");
const query_11 = require("./types/ibc/core/channel/v1/query");
const query_12 = require("./types/ibc/core/channel/v1/query");
const query_13 = require("./types/ibc/core/channel/v1/query");
const tx_14 = require("./types/ibc/core/channel/v1/tx");
const tx_15 = require("./types/ibc/core/channel/v1/tx");
const query_14 = require("./types/ibc/core/channel/v1/query");
const query_15 = require("./types/ibc/core/channel/v1/query");
const tx_16 = require("./types/ibc/core/channel/v1/tx");
const tx_17 = require("./types/ibc/core/channel/v1/tx");
const tx_18 = require("./types/ibc/core/channel/v1/tx");
const channel_2 = require("./types/ibc/core/channel/v1/channel");
const query_16 = require("./types/ibc/core/channel/v1/query");
const tx_19 = require("./types/ibc/core/channel/v1/tx");
const tx_20 = require("./types/ibc/core/channel/v1/tx");
const tx_21 = require("./types/ibc/core/channel/v1/tx");
const tx_22 = require("./types/ibc/core/channel/v1/tx");
const query_17 = require("./types/ibc/core/channel/v1/query");
const query_18 = require("./types/ibc/core/channel/v1/query");
const query_19 = require("./types/ibc/core/channel/v1/query");
const tx_23 = require("./types/ibc/core/channel/v1/tx");
const tx_24 = require("./types/ibc/core/channel/v1/tx");
const tx_25 = require("./types/ibc/core/channel/v1/tx");
const channel_3 = require("./types/ibc/core/channel/v1/channel");
const query_20 = require("./types/ibc/core/channel/v1/query");
const query_21 = require("./types/ibc/core/channel/v1/query");
const tx_26 = require("./types/ibc/core/channel/v1/tx");
const tx_27 = require("./types/ibc/core/channel/v1/tx");
const tx_28 = require("./types/ibc/core/channel/v1/tx");
const tx_29 = require("./types/ibc/core/channel/v1/tx");
const upgrade_2 = require("./types/ibc/core/channel/v1/upgrade");
const channel_4 = require("./types/ibc/core/channel/v1/channel");
const query_22 = require("./types/ibc/core/channel/v1/query");
const query_23 = require("./types/ibc/core/channel/v1/query");
const query_24 = require("./types/ibc/core/channel/v1/query");
const query_25 = require("./types/ibc/core/channel/v1/query");
const channel_5 = require("./types/ibc/core/channel/v1/channel");
const query_26 = require("./types/ibc/core/channel/v1/query");
const tx_30 = require("./types/ibc/core/channel/v1/tx");
const channel_6 = require("./types/ibc/core/channel/v1/channel");
const genesis_1 = require("./types/ibc/core/channel/v1/genesis");
const query_27 = require("./types/ibc/core/channel/v1/query");
const query_28 = require("./types/ibc/core/channel/v1/query");
const tx_31 = require("./types/ibc/core/channel/v1/tx");
const tx_32 = require("./types/ibc/core/channel/v1/tx");
const channel_7 = require("./types/ibc/core/channel/v1/channel");
const channel_8 = require("./types/ibc/core/channel/v1/channel");
const query_29 = require("./types/ibc/core/channel/v1/query");
const query_30 = require("./types/ibc/core/channel/v1/query");
const tx_33 = require("./types/ibc/core/channel/v1/tx");
const tx_34 = require("./types/ibc/core/channel/v1/tx");
const tx_35 = require("./types/ibc/core/channel/v1/tx");
const channel_9 = require("./types/ibc/core/channel/v1/channel");
const genesis_2 = require("./types/ibc/core/channel/v1/genesis");
const query_31 = require("./types/ibc/core/channel/v1/query");
const query_32 = require("./types/ibc/core/channel/v1/query");
const tx_36 = require("./types/ibc/core/channel/v1/tx");
const tx_37 = require("./types/ibc/core/channel/v1/tx");
const tx_38 = require("./types/ibc/core/channel/v1/tx");
const upgrade_3 = require("./types/ibc/core/channel/v1/upgrade");
const query_33 = require("./types/ibc/core/channel/v1/query");
const query_34 = require("./types/ibc/core/channel/v1/query");
const msgTypes = [
    ["/ibc.core.channel.v1.MsgChannelOpenInitResponse", tx_1.MsgChannelOpenInitResponse],
    ["/ibc.core.channel.v1.MsgChannelOpenConfirmResponse", tx_2.MsgChannelOpenConfirmResponse],
    ["/ibc.core.channel.v1.MsgTimeoutResponse", tx_3.MsgTimeoutResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeAck", tx_4.MsgChannelUpgradeAck],
    ["/ibc.core.channel.v1.MsgChannelUpgradeTimeout", tx_5.MsgChannelUpgradeTimeout],
    ["/ibc.core.channel.v1.QueryChannelConsensusStateRequest", query_1.QueryChannelConsensusStateRequest],
    ["/ibc.core.channel.v1.MsgChannelOpenTryResponse", tx_6.MsgChannelOpenTryResponse],
    ["/ibc.core.channel.v1.QueryChannelConsensusStateResponse", query_2.QueryChannelConsensusStateResponse],
    ["/ibc.core.channel.v1.QueryPacketAcknowledgementRequest", query_3.QueryPacketAcknowledgementRequest],
    ["/ibc.core.channel.v1.QueryUnreceivedPacketsResponse", query_4.QueryUnreceivedPacketsResponse],
    ["/ibc.core.channel.v1.MsgChannelCloseInit", tx_7.MsgChannelCloseInit],
    ["/ibc.core.channel.v1.MsgRecvPacket", tx_8.MsgRecvPacket],
    ["/ibc.core.channel.v1.MsgTimeoutOnClose", tx_9.MsgTimeoutOnClose],
    ["/ibc.core.channel.v1.QueryNextSequenceSendResponse", query_5.QueryNextSequenceSendResponse],
    ["/ibc.core.channel.v1.QueryChannelParamsRequest", query_6.QueryChannelParamsRequest],
    ["/ibc.core.channel.v1.MsgChannelOpenTry", tx_10.MsgChannelOpenTry],
    ["/ibc.core.channel.v1.MsgChannelUpgradeTimeoutResponse", tx_11.MsgChannelUpgradeTimeoutResponse],
    ["/ibc.core.channel.v1.ErrorReceipt", upgrade_1.ErrorReceipt],
    ["/ibc.core.channel.v1.Acknowledgement", channel_1.Acknowledgement],
    ["/ibc.core.channel.v1.QueryPacketReceiptRequest", query_7.QueryPacketReceiptRequest],
    ["/ibc.core.channel.v1.QueryNextSequenceReceiveResponse", query_8.QueryNextSequenceReceiveResponse],
    ["/ibc.core.channel.v1.QueryUnreceivedAcksResponse", query_9.QueryUnreceivedAcksResponse],
    ["/ibc.core.channel.v1.MsgChannelOpenAck", tx_12.MsgChannelOpenAck],
    ["/ibc.core.channel.v1.MsgRecvPacketResponse", tx_13.MsgRecvPacketResponse],
    ["/ibc.core.channel.v1.QueryChannelClientStateResponse", query_10.QueryChannelClientStateResponse],
    ["/ibc.core.channel.v1.QueryPacketAcknowledgementResponse", query_11.QueryPacketAcknowledgementResponse],
    ["/ibc.core.channel.v1.QueryUnreceivedPacketsRequest", query_12.QueryUnreceivedPacketsRequest],
    ["/ibc.core.channel.v1.QueryUnreceivedAcksRequest", query_13.QueryUnreceivedAcksRequest],
    ["/ibc.core.channel.v1.MsgChannelCloseInitResponse", tx_14.MsgChannelCloseInitResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeOpen", tx_15.MsgChannelUpgradeOpen],
    ["/ibc.core.channel.v1.QueryConnectionChannelsRequest", query_14.QueryConnectionChannelsRequest],
    ["/ibc.core.channel.v1.QueryNextSequenceSendRequest", query_15.QueryNextSequenceSendRequest],
    ["/ibc.core.channel.v1.MsgChannelOpenInit", tx_16.MsgChannelOpenInit],
    ["/ibc.core.channel.v1.MsgChannelOpenConfirm", tx_17.MsgChannelOpenConfirm],
    ["/ibc.core.channel.v1.MsgChannelUpgradeTryResponse", tx_18.MsgChannelUpgradeTryResponse],
    ["/ibc.core.channel.v1.IdentifiedChannel", channel_2.IdentifiedChannel],
    ["/ibc.core.channel.v1.QueryNextSequenceReceiveRequest", query_16.QueryNextSequenceReceiveRequest],
    ["/ibc.core.channel.v1.MsgChannelCloseConfirmResponse", tx_19.MsgChannelCloseConfirmResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeConfirmResponse", tx_20.MsgChannelUpgradeConfirmResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeCancelResponse", tx_21.MsgChannelUpgradeCancelResponse],
    ["/ibc.core.channel.v1.MsgUpdateParams", tx_22.MsgUpdateParams],
    ["/ibc.core.channel.v1.QueryChannelRequest", query_17.QueryChannelRequest],
    ["/ibc.core.channel.v1.QueryChannelClientStateRequest", query_18.QueryChannelClientStateRequest],
    ["/ibc.core.channel.v1.QueryPacketAcknowledgementsRequest", query_19.QueryPacketAcknowledgementsRequest],
    ["/ibc.core.channel.v1.MsgChannelUpgradeInitResponse", tx_23.MsgChannelUpgradeInitResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeAckResponse", tx_24.MsgChannelUpgradeAckResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeConfirm", tx_25.MsgChannelUpgradeConfirm],
    ["/ibc.core.channel.v1.Params", channel_3.Params],
    ["/ibc.core.channel.v1.QueryChannelResponse", query_20.QueryChannelResponse],
    ["/ibc.core.channel.v1.QueryChannelsRequest", query_21.QueryChannelsRequest],
    ["/ibc.core.channel.v1.MsgTimeout", tx_26.MsgTimeout],
    ["/ibc.core.channel.v1.MsgAcknowledgementResponse", tx_27.MsgAcknowledgementResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeCancel", tx_28.MsgChannelUpgradeCancel],
    ["/ibc.core.channel.v1.MsgUpdateParamsResponse", tx_29.MsgUpdateParamsResponse],
    ["/ibc.core.channel.v1.UpgradeFields", upgrade_2.UpgradeFields],
    ["/ibc.core.channel.v1.Counterparty", channel_4.Counterparty],
    ["/ibc.core.channel.v1.QueryChannelsResponse", query_22.QueryChannelsResponse],
    ["/ibc.core.channel.v1.QueryPacketCommitmentRequest", query_23.QueryPacketCommitmentRequest],
    ["/ibc.core.channel.v1.QueryPacketReceiptResponse", query_24.QueryPacketReceiptResponse],
    ["/ibc.core.channel.v1.QueryUpgradeRequest", query_25.QueryUpgradeRequest],
    ["/ibc.core.channel.v1.PacketState", channel_5.PacketState],
    ["/ibc.core.channel.v1.QueryUpgradeResponse", query_26.QueryUpgradeResponse],
    ["/ibc.core.channel.v1.MsgChannelUpgradeInit", tx_30.MsgChannelUpgradeInit],
    ["/ibc.core.channel.v1.Packet", channel_6.Packet],
    ["/ibc.core.channel.v1.GenesisState", genesis_1.GenesisState],
    ["/ibc.core.channel.v1.QueryPacketCommitmentsResponse", query_27.QueryPacketCommitmentsResponse],
    ["/ibc.core.channel.v1.QueryPacketAcknowledgementsResponse", query_28.QueryPacketAcknowledgementsResponse],
    ["/ibc.core.channel.v1.MsgAcknowledgement", tx_31.MsgAcknowledgement],
    ["/ibc.core.channel.v1.MsgChannelUpgradeTry", tx_32.MsgChannelUpgradeTry],
    ["/ibc.core.channel.v1.Channel", channel_7.Channel],
    ["/ibc.core.channel.v1.PacketId", channel_8.PacketId],
    ["/ibc.core.channel.v1.QueryPacketCommitmentResponse", query_29.QueryPacketCommitmentResponse],
    ["/ibc.core.channel.v1.QueryUpgradeErrorResponse", query_30.QueryUpgradeErrorResponse],
    ["/ibc.core.channel.v1.MsgChannelOpenAckResponse", tx_33.MsgChannelOpenAckResponse],
    ["/ibc.core.channel.v1.MsgChannelCloseConfirm", tx_34.MsgChannelCloseConfirm],
    ["/ibc.core.channel.v1.MsgChannelUpgradeOpenResponse", tx_35.MsgChannelUpgradeOpenResponse],
    ["/ibc.core.channel.v1.Timeout", channel_9.Timeout],
    ["/ibc.core.channel.v1.PacketSequence", genesis_2.PacketSequence],
    ["/ibc.core.channel.v1.QueryConnectionChannelsResponse", query_31.QueryConnectionChannelsResponse],
    ["/ibc.core.channel.v1.QueryChannelParamsResponse", query_32.QueryChannelParamsResponse],
    ["/ibc.core.channel.v1.MsgTimeoutOnCloseResponse", tx_36.MsgTimeoutOnCloseResponse],
    ["/ibc.core.channel.v1.MsgPruneAcknowledgements", tx_37.MsgPruneAcknowledgements],
    ["/ibc.core.channel.v1.MsgPruneAcknowledgementsResponse", tx_38.MsgPruneAcknowledgementsResponse],
    ["/ibc.core.channel.v1.Upgrade", upgrade_3.Upgrade],
    ["/ibc.core.channel.v1.QueryPacketCommitmentsRequest", query_33.QueryPacketCommitmentsRequest],
    ["/ibc.core.channel.v1.QueryUpgradeErrorRequest", query_34.QueryUpgradeErrorRequest],
];
exports.msgTypes = msgTypes;
