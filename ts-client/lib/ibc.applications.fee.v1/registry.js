"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const query_1 = require("./types/ibc/applications/fee/v1/query");
const query_2 = require("./types/ibc/applications/fee/v1/query");
const fee_1 = require("./types/ibc/applications/fee/v1/fee");
const genesis_1 = require("./types/ibc/applications/fee/v1/genesis");
const genesis_2 = require("./types/ibc/applications/fee/v1/genesis");
const metadata_1 = require("./types/ibc/applications/fee/v1/metadata");
const query_3 = require("./types/ibc/applications/fee/v1/query");
const fee_2 = require("./types/ibc/applications/fee/v1/fee");
const tx_1 = require("./types/ibc/applications/fee/v1/tx");
const tx_2 = require("./types/ibc/applications/fee/v1/tx");
const query_4 = require("./types/ibc/applications/fee/v1/query");
const query_5 = require("./types/ibc/applications/fee/v1/query");
const query_6 = require("./types/ibc/applications/fee/v1/query");
const fee_3 = require("./types/ibc/applications/fee/v1/fee");
const genesis_3 = require("./types/ibc/applications/fee/v1/genesis");
const tx_3 = require("./types/ibc/applications/fee/v1/tx");
const query_7 = require("./types/ibc/applications/fee/v1/query");
const query_8 = require("./types/ibc/applications/fee/v1/query");
const query_9 = require("./types/ibc/applications/fee/v1/query");
const query_10 = require("./types/ibc/applications/fee/v1/query");
const query_11 = require("./types/ibc/applications/fee/v1/query");
const ack_1 = require("./types/ibc/applications/fee/v1/ack");
const tx_4 = require("./types/ibc/applications/fee/v1/tx");
const tx_5 = require("./types/ibc/applications/fee/v1/tx");
const query_12 = require("./types/ibc/applications/fee/v1/query");
const genesis_4 = require("./types/ibc/applications/fee/v1/genesis");
const tx_6 = require("./types/ibc/applications/fee/v1/tx");
const query_13 = require("./types/ibc/applications/fee/v1/query");
const query_14 = require("./types/ibc/applications/fee/v1/query");
const query_15 = require("./types/ibc/applications/fee/v1/query");
const tx_7 = require("./types/ibc/applications/fee/v1/tx");
const query_16 = require("./types/ibc/applications/fee/v1/query");
const query_17 = require("./types/ibc/applications/fee/v1/query");
const query_18 = require("./types/ibc/applications/fee/v1/query");
const query_19 = require("./types/ibc/applications/fee/v1/query");
const query_20 = require("./types/ibc/applications/fee/v1/query");
const fee_4 = require("./types/ibc/applications/fee/v1/fee");
const genesis_5 = require("./types/ibc/applications/fee/v1/genesis");
const tx_8 = require("./types/ibc/applications/fee/v1/tx");
const msgTypes = [
    ["/ibc.applications.fee.v1.QueryTotalAckFeesRequest", query_1.QueryTotalAckFeesRequest],
    ["/ibc.applications.fee.v1.QueryCounterpartyPayeeRequest", query_2.QueryCounterpartyPayeeRequest],
    ["/ibc.applications.fee.v1.PacketFees", fee_1.PacketFees],
    ["/ibc.applications.fee.v1.FeeEnabledChannel", genesis_1.FeeEnabledChannel],
    ["/ibc.applications.fee.v1.RegisteredCounterpartyPayee", genesis_2.RegisteredCounterpartyPayee],
    ["/ibc.applications.fee.v1.Metadata", metadata_1.Metadata],
    ["/ibc.applications.fee.v1.QueryTotalAckFeesResponse", query_3.QueryTotalAckFeesResponse],
    ["/ibc.applications.fee.v1.Fee", fee_2.Fee],
    ["/ibc.applications.fee.v1.MsgRegisterPayee", tx_1.MsgRegisterPayee],
    ["/ibc.applications.fee.v1.MsgPayPacketFeeAsyncResponse", tx_2.MsgPayPacketFeeAsyncResponse],
    ["/ibc.applications.fee.v1.QueryIncentivizedPacketRequest", query_4.QueryIncentivizedPacketRequest],
    ["/ibc.applications.fee.v1.QueryIncentivizedPacketResponse", query_5.QueryIncentivizedPacketResponse],
    ["/ibc.applications.fee.v1.QueryCounterpartyPayeeResponse", query_6.QueryCounterpartyPayeeResponse],
    ["/ibc.applications.fee.v1.IdentifiedPacketFees", fee_3.IdentifiedPacketFees],
    ["/ibc.applications.fee.v1.RegisteredPayee", genesis_3.RegisteredPayee],
    ["/ibc.applications.fee.v1.MsgPayPacketFeeAsync", tx_3.MsgPayPacketFeeAsync],
    ["/ibc.applications.fee.v1.QueryIncentivizedPacketsForChannelRequest", query_7.QueryIncentivizedPacketsForChannelRequest],
    ["/ibc.applications.fee.v1.QueryTotalRecvFeesRequest", query_8.QueryTotalRecvFeesRequest],
    ["/ibc.applications.fee.v1.QueryTotalTimeoutFeesRequest", query_9.QueryTotalTimeoutFeesRequest],
    ["/ibc.applications.fee.v1.QueryTotalTimeoutFeesResponse", query_10.QueryTotalTimeoutFeesResponse],
    ["/ibc.applications.fee.v1.QueryFeeEnabledChannelsRequest", query_11.QueryFeeEnabledChannelsRequest],
    ["/ibc.applications.fee.v1.IncentivizedAcknowledgement", ack_1.IncentivizedAcknowledgement],
    ["/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee", tx_4.MsgRegisterCounterpartyPayee],
    ["/ibc.applications.fee.v1.MsgPayPacketFee", tx_5.MsgPayPacketFee],
    ["/ibc.applications.fee.v1.QueryFeeEnabledChannelRequest", query_12.QueryFeeEnabledChannelRequest],
    ["/ibc.applications.fee.v1.ForwardRelayerAddress", genesis_4.ForwardRelayerAddress],
    ["/ibc.applications.fee.v1.MsgRegisterPayeeResponse", tx_6.MsgRegisterPayeeResponse],
    ["/ibc.applications.fee.v1.QueryIncentivizedPacketsResponse", query_13.QueryIncentivizedPacketsResponse],
    ["/ibc.applications.fee.v1.QueryIncentivizedPacketsForChannelResponse", query_14.QueryIncentivizedPacketsForChannelResponse],
    ["/ibc.applications.fee.v1.QueryPayeeRequest", query_15.QueryPayeeRequest],
    ["/ibc.applications.fee.v1.MsgRegisterCounterpartyPayeeResponse", tx_7.MsgRegisterCounterpartyPayeeResponse],
    ["/ibc.applications.fee.v1.QueryIncentivizedPacketsRequest", query_16.QueryIncentivizedPacketsRequest],
    ["/ibc.applications.fee.v1.QueryTotalRecvFeesResponse", query_17.QueryTotalRecvFeesResponse],
    ["/ibc.applications.fee.v1.QueryPayeeResponse", query_18.QueryPayeeResponse],
    ["/ibc.applications.fee.v1.QueryFeeEnabledChannelsResponse", query_19.QueryFeeEnabledChannelsResponse],
    ["/ibc.applications.fee.v1.QueryFeeEnabledChannelResponse", query_20.QueryFeeEnabledChannelResponse],
    ["/ibc.applications.fee.v1.PacketFee", fee_4.PacketFee],
    ["/ibc.applications.fee.v1.GenesisState", genesis_5.GenesisState],
    ["/ibc.applications.fee.v1.MsgPayPacketFeeResponse", tx_8.MsgPayPacketFeeResponse],
];
exports.msgTypes = msgTypes;
