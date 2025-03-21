"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const query_1 = require("./types/ibc/applications/fee/v1/query");
const query_2 = require("./types/ibc/applications/fee/v1/query");
const query_3 = require("./types/ibc/applications/fee/v1/query");
const query_4 = require("./types/ibc/applications/fee/v1/query");
const query_5 = require("./types/ibc/applications/fee/v1/query");
const genesis_1 = require("./types/ibc/applications/fee/v1/genesis");
const genesis_2 = require("./types/ibc/applications/fee/v1/genesis");
const tx_1 = require("./types/ibc/applications/fee/v1/tx");
const fee_1 = require("./types/ibc/applications/fee/v1/fee");
const tx_2 = require("./types/ibc/applications/fee/v1/tx");
const query_6 = require("./types/ibc/applications/fee/v1/query");
const query_7 = require("./types/ibc/applications/fee/v1/query");
const ack_1 = require("./types/ibc/applications/fee/v1/ack");
const tx_3 = require("./types/ibc/applications/fee/v1/tx");
const fee_2 = require("./types/ibc/applications/fee/v1/fee");
const metadata_1 = require("./types/ibc/applications/fee/v1/metadata");
const query_8 = require("./types/ibc/applications/fee/v1/query");
const query_9 = require("./types/ibc/applications/fee/v1/query");
const query_10 = require("./types/ibc/applications/fee/v1/query");
const query_11 = require("./types/ibc/applications/fee/v1/query");
const query_12 = require("./types/ibc/applications/fee/v1/query");
const genesis_3 = require("./types/ibc/applications/fee/v1/genesis");
const tx_4 = require("./types/ibc/applications/fee/v1/tx");
const query_13 = require("./types/ibc/applications/fee/v1/query");
const query_14 = require("./types/ibc/applications/fee/v1/query");
const tx_5 = require("./types/ibc/applications/fee/v1/tx");
const tx_6 = require("./types/ibc/applications/fee/v1/tx");
const fee_3 = require("./types/ibc/applications/fee/v1/fee");
const query_15 = require("./types/ibc/applications/fee/v1/query");
const fee_4 = require("./types/ibc/applications/fee/v1/fee");
const query_16 = require("./types/ibc/applications/fee/v1/query");
const query_17 = require("./types/ibc/applications/fee/v1/query");
const query_18 = require("./types/ibc/applications/fee/v1/query");
const query_19 = require("./types/ibc/applications/fee/v1/query");
const query_20 = require("./types/ibc/applications/fee/v1/query");
const genesis_4 = require("./types/ibc/applications/fee/v1/genesis");
const genesis_5 = require("./types/ibc/applications/fee/v1/genesis");
const tx_7 = require("./types/ibc/applications/fee/v1/tx");
const tx_8 = require("./types/ibc/applications/fee/v1/tx");
const msgTypes = [
    ["/ibc.applications.fee.v1.QueryTotalAckFeesRequest", query_1.QueryTotalAckFeesRequest],
    ["/ibc.applications.fee.v1.QueryIncentivizedPacketsForChannelRequest", query_2.QueryIncentivizedPacketsForChannelRequest],
    ["/ibc.applications.fee.v1.QueryTotalTimeoutFeesResponse", query_3.QueryTotalTimeoutFeesResponse],
    ["/ibc.applications.fee.v1.QueryPayeeResponse", query_4.QueryPayeeResponse],
    ["/ibc.applications.fee.v1.QueryFeeEnabledChannelsRequest", query_5.QueryFeeEnabledChannelsRequest],
    ["/ibc.applications.fee.v1.FeeEnabledChannel", genesis_1.FeeEnabledChannel],
    ["/ibc.applications.fee.v1.RegisteredPayee", genesis_2.RegisteredPayee],
    ["/ibc.applications.fee.v1.MsgPayPacketFeeAsync", tx_1.MsgPayPacketFeeAsync],
    ["/ibc.applications.fee.v1.PacketFees", fee_1.PacketFees],
    ["/ibc.applications.fee.v1.MsgRegisterPayee", tx_2.MsgRegisterPayee],
    ["/ibc.applications.fee.v1.QueryIncentivizedPacketResponse", query_6.QueryIncentivizedPacketResponse],
    ["/ibc.applications.fee.v1.QueryFeeEnabledChannelRequest", query_7.QueryFeeEnabledChannelRequest],
    ["/ibc.applications.fee.v1.IncentivizedAcknowledgement", ack_1.IncentivizedAcknowledgement],
    ["/ibc.applications.fee.v1.MsgPayPacketFeeAsyncResponse", tx_3.MsgPayPacketFeeAsyncResponse],
    ["/ibc.applications.fee.v1.PacketFee", fee_2.PacketFee],
    ["/ibc.applications.fee.v1.Metadata", metadata_1.Metadata],
    ["/ibc.applications.fee.v1.QueryCounterpartyPayeeRequest", query_8.QueryCounterpartyPayeeRequest],
    ["/ibc.applications.fee.v1.QueryIncentivizedPacketsForChannelResponse", query_9.QueryIncentivizedPacketsForChannelResponse],
    ["/ibc.applications.fee.v1.QueryTotalAckFeesResponse", query_10.QueryTotalAckFeesResponse],
    ["/ibc.applications.fee.v1.QueryTotalTimeoutFeesRequest", query_11.QueryTotalTimeoutFeesRequest],
    ["/ibc.applications.fee.v1.QueryFeeEnabledChannelResponse", query_12.QueryFeeEnabledChannelResponse],
    ["/ibc.applications.fee.v1.GenesisState", genesis_3.GenesisState],
    ["/ibc.applications.fee.v1.MsgPayPacketFee", tx_4.MsgPayPacketFee],
    ["/ibc.applications.fee.v1.QueryIncentivizedPacketsResponse", query_13.QueryIncentivizedPacketsResponse],
    ["/ibc.applications.fee.v1.QueryPayeeRequest", query_14.QueryPayeeRequest],
    ["/ibc.applications.fee.v1.MsgRegisterPayeeResponse", tx_5.MsgRegisterPayeeResponse],
    ["/ibc.applications.fee.v1.MsgRegisterCounterpartyPayeeResponse", tx_6.MsgRegisterCounterpartyPayeeResponse],
    ["/ibc.applications.fee.v1.IdentifiedPacketFees", fee_3.IdentifiedPacketFees],
    ["/ibc.applications.fee.v1.QueryTotalRecvFeesRequest", query_15.QueryTotalRecvFeesRequest],
    ["/ibc.applications.fee.v1.Fee", fee_4.Fee],
    ["/ibc.applications.fee.v1.QueryIncentivizedPacketsRequest", query_16.QueryIncentivizedPacketsRequest],
    ["/ibc.applications.fee.v1.QueryIncentivizedPacketRequest", query_17.QueryIncentivizedPacketRequest],
    ["/ibc.applications.fee.v1.QueryTotalRecvFeesResponse", query_18.QueryTotalRecvFeesResponse],
    ["/ibc.applications.fee.v1.QueryCounterpartyPayeeResponse", query_19.QueryCounterpartyPayeeResponse],
    ["/ibc.applications.fee.v1.QueryFeeEnabledChannelsResponse", query_20.QueryFeeEnabledChannelsResponse],
    ["/ibc.applications.fee.v1.RegisteredCounterpartyPayee", genesis_4.RegisteredCounterpartyPayee],
    ["/ibc.applications.fee.v1.ForwardRelayerAddress", genesis_5.ForwardRelayerAddress],
    ["/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee", tx_7.MsgRegisterCounterpartyPayee],
    ["/ibc.applications.fee.v1.MsgPayPacketFeeResponse", tx_8.MsgPayPacketFeeResponse],
];
exports.msgTypes = msgTypes;
