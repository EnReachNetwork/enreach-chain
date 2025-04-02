"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const ack_1 = require("./types/ibc/applications/fee/v1/ack");
const fee_1 = require("./types/ibc/applications/fee/v1/fee");
const genesis_1 = require("./types/ibc/applications/fee/v1/genesis");
const query_1 = require("./types/ibc/applications/fee/v1/query");
const query_2 = require("./types/ibc/applications/fee/v1/query");
const tx_1 = require("./types/ibc/applications/fee/v1/tx");
const query_3 = require("./types/ibc/applications/fee/v1/query");
const query_4 = require("./types/ibc/applications/fee/v1/query");
const query_5 = require("./types/ibc/applications/fee/v1/query");
const fee_2 = require("./types/ibc/applications/fee/v1/fee");
const genesis_2 = require("./types/ibc/applications/fee/v1/genesis");
const genesis_3 = require("./types/ibc/applications/fee/v1/genesis");
const query_6 = require("./types/ibc/applications/fee/v1/query");
const query_7 = require("./types/ibc/applications/fee/v1/query");
const tx_2 = require("./types/ibc/applications/fee/v1/tx");
const tx_3 = require("./types/ibc/applications/fee/v1/tx");
const genesis_4 = require("./types/ibc/applications/fee/v1/genesis");
const metadata_1 = require("./types/ibc/applications/fee/v1/metadata");
const query_8 = require("./types/ibc/applications/fee/v1/query");
const query_9 = require("./types/ibc/applications/fee/v1/query");
const tx_4 = require("./types/ibc/applications/fee/v1/tx");
const query_10 = require("./types/ibc/applications/fee/v1/query");
const query_11 = require("./types/ibc/applications/fee/v1/query");
const tx_5 = require("./types/ibc/applications/fee/v1/tx");
const query_12 = require("./types/ibc/applications/fee/v1/query");
const tx_6 = require("./types/ibc/applications/fee/v1/tx");
const query_13 = require("./types/ibc/applications/fee/v1/query");
const query_14 = require("./types/ibc/applications/fee/v1/query");
const query_15 = require("./types/ibc/applications/fee/v1/query");
const query_16 = require("./types/ibc/applications/fee/v1/query");
const fee_3 = require("./types/ibc/applications/fee/v1/fee");
const query_17 = require("./types/ibc/applications/fee/v1/query");
const query_18 = require("./types/ibc/applications/fee/v1/query");
const tx_7 = require("./types/ibc/applications/fee/v1/tx");
const genesis_5 = require("./types/ibc/applications/fee/v1/genesis");
const fee_4 = require("./types/ibc/applications/fee/v1/fee");
const query_19 = require("./types/ibc/applications/fee/v1/query");
const query_20 = require("./types/ibc/applications/fee/v1/query");
const tx_8 = require("./types/ibc/applications/fee/v1/tx");
const msgTypes = [
    ["/ibc.applications.fee.v1.IncentivizedAcknowledgement", ack_1.IncentivizedAcknowledgement],
    ["/ibc.applications.fee.v1.IdentifiedPacketFees", fee_1.IdentifiedPacketFees],
    ["/ibc.applications.fee.v1.RegisteredPayee", genesis_1.RegisteredPayee],
    ["/ibc.applications.fee.v1.QueryTotalTimeoutFeesRequest", query_1.QueryTotalTimeoutFeesRequest],
    ["/ibc.applications.fee.v1.QueryPayeeRequest", query_2.QueryPayeeRequest],
    ["/ibc.applications.fee.v1.MsgPayPacketFee", tx_1.MsgPayPacketFee],
    ["/ibc.applications.fee.v1.QueryIncentivizedPacketRequest", query_3.QueryIncentivizedPacketRequest],
    ["/ibc.applications.fee.v1.QueryCounterpartyPayeeRequest", query_4.QueryCounterpartyPayeeRequest],
    ["/ibc.applications.fee.v1.QueryCounterpartyPayeeResponse", query_5.QueryCounterpartyPayeeResponse],
    ["/ibc.applications.fee.v1.PacketFees", fee_2.PacketFees],
    ["/ibc.applications.fee.v1.RegisteredCounterpartyPayee", genesis_2.RegisteredCounterpartyPayee],
    ["/ibc.applications.fee.v1.GenesisState", genesis_3.GenesisState],
    ["/ibc.applications.fee.v1.QueryTotalAckFeesResponse", query_6.QueryTotalAckFeesResponse],
    ["/ibc.applications.fee.v1.QueryFeeEnabledChannelResponse", query_7.QueryFeeEnabledChannelResponse],
    ["/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee", tx_2.MsgRegisterCounterpartyPayee],
    ["/ibc.applications.fee.v1.MsgRegisterPayeeResponse", tx_3.MsgRegisterPayeeResponse],
    ["/ibc.applications.fee.v1.FeeEnabledChannel", genesis_4.FeeEnabledChannel],
    ["/ibc.applications.fee.v1.Metadata", metadata_1.Metadata],
    ["/ibc.applications.fee.v1.QueryIncentivizedPacketsResponse", query_8.QueryIncentivizedPacketsResponse],
    ["/ibc.applications.fee.v1.QueryFeeEnabledChannelsRequest", query_9.QueryFeeEnabledChannelsRequest],
    ["/ibc.applications.fee.v1.MsgPayPacketFeeAsync", tx_4.MsgPayPacketFeeAsync],
    ["/ibc.applications.fee.v1.QueryIncentivizedPacketResponse", query_10.QueryIncentivizedPacketResponse],
    ["/ibc.applications.fee.v1.QueryIncentivizedPacketsForChannelResponse", query_11.QueryIncentivizedPacketsForChannelResponse],
    ["/ibc.applications.fee.v1.MsgPayPacketFeeResponse", tx_5.MsgPayPacketFeeResponse],
    ["/ibc.applications.fee.v1.QueryPayeeResponse", query_12.QueryPayeeResponse],
    ["/ibc.applications.fee.v1.MsgPayPacketFeeAsyncResponse", tx_6.MsgPayPacketFeeAsyncResponse],
    ["/ibc.applications.fee.v1.QueryIncentivizedPacketsRequest", query_13.QueryIncentivizedPacketsRequest],
    ["/ibc.applications.fee.v1.QueryIncentivizedPacketsForChannelRequest", query_14.QueryIncentivizedPacketsForChannelRequest],
    ["/ibc.applications.fee.v1.QueryTotalRecvFeesRequest", query_15.QueryTotalRecvFeesRequest],
    ["/ibc.applications.fee.v1.QueryTotalTimeoutFeesResponse", query_16.QueryTotalTimeoutFeesResponse],
    ["/ibc.applications.fee.v1.PacketFee", fee_3.PacketFee],
    ["/ibc.applications.fee.v1.QueryTotalRecvFeesResponse", query_17.QueryTotalRecvFeesResponse],
    ["/ibc.applications.fee.v1.QueryFeeEnabledChannelRequest", query_18.QueryFeeEnabledChannelRequest],
    ["/ibc.applications.fee.v1.MsgRegisterPayee", tx_7.MsgRegisterPayee],
    ["/ibc.applications.fee.v1.ForwardRelayerAddress", genesis_5.ForwardRelayerAddress],
    ["/ibc.applications.fee.v1.Fee", fee_4.Fee],
    ["/ibc.applications.fee.v1.QueryTotalAckFeesRequest", query_19.QueryTotalAckFeesRequest],
    ["/ibc.applications.fee.v1.QueryFeeEnabledChannelsResponse", query_20.QueryFeeEnabledChannelsResponse],
    ["/ibc.applications.fee.v1.MsgRegisterCounterpartyPayeeResponse", tx_8.MsgRegisterCounterpartyPayeeResponse],
];
exports.msgTypes = msgTypes;
