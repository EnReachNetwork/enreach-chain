"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/ibc/applications/fee/v1/tx");
const tx_2 = require("./types/ibc/applications/fee/v1/tx");
const tx_3 = require("./types/ibc/applications/fee/v1/tx");
const query_1 = require("./types/ibc/applications/fee/v1/query");
const query_2 = require("./types/ibc/applications/fee/v1/query");
const query_3 = require("./types/ibc/applications/fee/v1/query");
const query_4 = require("./types/ibc/applications/fee/v1/query");
const query_5 = require("./types/ibc/applications/fee/v1/query");
const query_6 = require("./types/ibc/applications/fee/v1/query");
const fee_1 = require("./types/ibc/applications/fee/v1/fee");
const fee_2 = require("./types/ibc/applications/fee/v1/fee");
const query_7 = require("./types/ibc/applications/fee/v1/query");
const query_8 = require("./types/ibc/applications/fee/v1/query");
const genesis_1 = require("./types/ibc/applications/fee/v1/genesis");
const tx_4 = require("./types/ibc/applications/fee/v1/tx");
const tx_5 = require("./types/ibc/applications/fee/v1/tx");
const query_9 = require("./types/ibc/applications/fee/v1/query");
const genesis_2 = require("./types/ibc/applications/fee/v1/genesis");
const genesis_3 = require("./types/ibc/applications/fee/v1/genesis");
const query_10 = require("./types/ibc/applications/fee/v1/query");
const query_11 = require("./types/ibc/applications/fee/v1/query");
const tx_6 = require("./types/ibc/applications/fee/v1/tx");
const tx_7 = require("./types/ibc/applications/fee/v1/tx");
const tx_8 = require("./types/ibc/applications/fee/v1/tx");
const fee_3 = require("./types/ibc/applications/fee/v1/fee");
const query_12 = require("./types/ibc/applications/fee/v1/query");
const query_13 = require("./types/ibc/applications/fee/v1/query");
const query_14 = require("./types/ibc/applications/fee/v1/query");
const query_15 = require("./types/ibc/applications/fee/v1/query");
const query_16 = require("./types/ibc/applications/fee/v1/query");
const query_17 = require("./types/ibc/applications/fee/v1/query");
const query_18 = require("./types/ibc/applications/fee/v1/query");
const metadata_1 = require("./types/ibc/applications/fee/v1/metadata");
const genesis_4 = require("./types/ibc/applications/fee/v1/genesis");
const fee_4 = require("./types/ibc/applications/fee/v1/fee");
const query_19 = require("./types/ibc/applications/fee/v1/query");
const genesis_5 = require("./types/ibc/applications/fee/v1/genesis");
const ack_1 = require("./types/ibc/applications/fee/v1/ack");
const query_20 = require("./types/ibc/applications/fee/v1/query");
const msgTypes = [
    ["/ibc.applications.fee.v1.MsgRegisterPayee", tx_1.MsgRegisterPayee],
    ["/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee", tx_2.MsgRegisterCounterpartyPayee],
    ["/ibc.applications.fee.v1.MsgPayPacketFeeAsyncResponse", tx_3.MsgPayPacketFeeAsyncResponse],
    ["/ibc.applications.fee.v1.QueryIncentivizedPacketsRequest", query_1.QueryIncentivizedPacketsRequest],
    ["/ibc.applications.fee.v1.QueryIncentivizedPacketsResponse", query_2.QueryIncentivizedPacketsResponse],
    ["/ibc.applications.fee.v1.QueryIncentivizedPacketsForChannelRequest", query_3.QueryIncentivizedPacketsForChannelRequest],
    ["/ibc.applications.fee.v1.QueryPayeeRequest", query_4.QueryPayeeRequest],
    ["/ibc.applications.fee.v1.QueryFeeEnabledChannelsResponse", query_5.QueryFeeEnabledChannelsResponse],
    ["/ibc.applications.fee.v1.QueryFeeEnabledChannelResponse", query_6.QueryFeeEnabledChannelResponse],
    ["/ibc.applications.fee.v1.Fee", fee_1.Fee],
    ["/ibc.applications.fee.v1.IdentifiedPacketFees", fee_2.IdentifiedPacketFees],
    ["/ibc.applications.fee.v1.QueryIncentivizedPacketRequest", query_7.QueryIncentivizedPacketRequest],
    ["/ibc.applications.fee.v1.QueryFeeEnabledChannelsRequest", query_8.QueryFeeEnabledChannelsRequest],
    ["/ibc.applications.fee.v1.RegisteredPayee", genesis_1.RegisteredPayee],
    ["/ibc.applications.fee.v1.MsgPayPacketFee", tx_4.MsgPayPacketFee],
    ["/ibc.applications.fee.v1.MsgPayPacketFeeResponse", tx_5.MsgPayPacketFeeResponse],
    ["/ibc.applications.fee.v1.QueryTotalTimeoutFeesResponse", query_9.QueryTotalTimeoutFeesResponse],
    ["/ibc.applications.fee.v1.GenesisState", genesis_2.GenesisState],
    ["/ibc.applications.fee.v1.ForwardRelayerAddress", genesis_3.ForwardRelayerAddress],
    ["/ibc.applications.fee.v1.QueryTotalRecvFeesRequest", query_10.QueryTotalRecvFeesRequest],
    ["/ibc.applications.fee.v1.QueryFeeEnabledChannelRequest", query_11.QueryFeeEnabledChannelRequest],
    ["/ibc.applications.fee.v1.MsgPayPacketFeeAsync", tx_6.MsgPayPacketFeeAsync],
    ["/ibc.applications.fee.v1.MsgRegisterPayeeResponse", tx_7.MsgRegisterPayeeResponse],
    ["/ibc.applications.fee.v1.MsgRegisterCounterpartyPayeeResponse", tx_8.MsgRegisterCounterpartyPayeeResponse],
    ["/ibc.applications.fee.v1.PacketFees", fee_3.PacketFees],
    ["/ibc.applications.fee.v1.QueryIncentivizedPacketsForChannelResponse", query_12.QueryIncentivizedPacketsForChannelResponse],
    ["/ibc.applications.fee.v1.QueryTotalRecvFeesResponse", query_13.QueryTotalRecvFeesResponse],
    ["/ibc.applications.fee.v1.QueryTotalTimeoutFeesRequest", query_14.QueryTotalTimeoutFeesRequest],
    ["/ibc.applications.fee.v1.QueryCounterpartyPayeeRequest", query_15.QueryCounterpartyPayeeRequest],
    ["/ibc.applications.fee.v1.QueryTotalAckFeesRequest", query_16.QueryTotalAckFeesRequest],
    ["/ibc.applications.fee.v1.QueryTotalAckFeesResponse", query_17.QueryTotalAckFeesResponse],
    ["/ibc.applications.fee.v1.QueryPayeeResponse", query_18.QueryPayeeResponse],
    ["/ibc.applications.fee.v1.Metadata", metadata_1.Metadata],
    ["/ibc.applications.fee.v1.FeeEnabledChannel", genesis_4.FeeEnabledChannel],
    ["/ibc.applications.fee.v1.PacketFee", fee_4.PacketFee],
    ["/ibc.applications.fee.v1.QueryCounterpartyPayeeResponse", query_19.QueryCounterpartyPayeeResponse],
    ["/ibc.applications.fee.v1.RegisteredCounterpartyPayee", genesis_5.RegisteredCounterpartyPayee],
    ["/ibc.applications.fee.v1.IncentivizedAcknowledgement", ack_1.IncentivizedAcknowledgement],
    ["/ibc.applications.fee.v1.QueryIncentivizedPacketResponse", query_20.QueryIncentivizedPacketResponse],
];
exports.msgTypes = msgTypes;
