"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const query_1 = require("./types/ibc/applications/fee/v1/query");
const query_2 = require("./types/ibc/applications/fee/v1/query");
const query_3 = require("./types/ibc/applications/fee/v1/query");
const genesis_1 = require("./types/ibc/applications/fee/v1/genesis");
const tx_1 = require("./types/ibc/applications/fee/v1/tx");
const ack_1 = require("./types/ibc/applications/fee/v1/ack");
const query_4 = require("./types/ibc/applications/fee/v1/query");
const tx_2 = require("./types/ibc/applications/fee/v1/tx");
const query_5 = require("./types/ibc/applications/fee/v1/query");
const genesis_2 = require("./types/ibc/applications/fee/v1/genesis");
const tx_3 = require("./types/ibc/applications/fee/v1/tx");
const query_6 = require("./types/ibc/applications/fee/v1/query");
const query_7 = require("./types/ibc/applications/fee/v1/query");
const query_8 = require("./types/ibc/applications/fee/v1/query");
const query_9 = require("./types/ibc/applications/fee/v1/query");
const query_10 = require("./types/ibc/applications/fee/v1/query");
const tx_4 = require("./types/ibc/applications/fee/v1/tx");
const query_11 = require("./types/ibc/applications/fee/v1/query");
const query_12 = require("./types/ibc/applications/fee/v1/query");
const tx_5 = require("./types/ibc/applications/fee/v1/tx");
const metadata_1 = require("./types/ibc/applications/fee/v1/metadata");
const query_13 = require("./types/ibc/applications/fee/v1/query");
const tx_6 = require("./types/ibc/applications/fee/v1/tx");
const query_14 = require("./types/ibc/applications/fee/v1/query");
const genesis_3 = require("./types/ibc/applications/fee/v1/genesis");
const genesis_4 = require("./types/ibc/applications/fee/v1/genesis");
const query_15 = require("./types/ibc/applications/fee/v1/query");
const query_16 = require("./types/ibc/applications/fee/v1/query");
const tx_7 = require("./types/ibc/applications/fee/v1/tx");
const fee_1 = require("./types/ibc/applications/fee/v1/fee");
const query_17 = require("./types/ibc/applications/fee/v1/query");
const fee_2 = require("./types/ibc/applications/fee/v1/fee");
const query_18 = require("./types/ibc/applications/fee/v1/query");
const query_19 = require("./types/ibc/applications/fee/v1/query");
const query_20 = require("./types/ibc/applications/fee/v1/query");
const genesis_5 = require("./types/ibc/applications/fee/v1/genesis");
const tx_8 = require("./types/ibc/applications/fee/v1/tx");
const fee_3 = require("./types/ibc/applications/fee/v1/fee");
const fee_4 = require("./types/ibc/applications/fee/v1/fee");
const msgTypes = [
    ["/ibc.applications.fee.v1.QueryIncentivizedPacketResponse", query_1.QueryIncentivizedPacketResponse],
    ["/ibc.applications.fee.v1.QueryTotalAckFeesResponse", query_2.QueryTotalAckFeesResponse],
    ["/ibc.applications.fee.v1.QueryTotalTimeoutFeesResponse", query_3.QueryTotalTimeoutFeesResponse],
    ["/ibc.applications.fee.v1.RegisteredCounterpartyPayee", genesis_1.RegisteredCounterpartyPayee],
    ["/ibc.applications.fee.v1.MsgRegisterCounterpartyPayeeResponse", tx_1.MsgRegisterCounterpartyPayeeResponse],
    ["/ibc.applications.fee.v1.IncentivizedAcknowledgement", ack_1.IncentivizedAcknowledgement],
    ["/ibc.applications.fee.v1.QueryIncentivizedPacketsRequest", query_4.QueryIncentivizedPacketsRequest],
    ["/ibc.applications.fee.v1.MsgPayPacketFeeAsync", tx_2.MsgPayPacketFeeAsync],
    ["/ibc.applications.fee.v1.QueryCounterpartyPayeeResponse", query_5.QueryCounterpartyPayeeResponse],
    ["/ibc.applications.fee.v1.FeeEnabledChannel", genesis_2.FeeEnabledChannel],
    ["/ibc.applications.fee.v1.MsgRegisterPayeeResponse", tx_3.MsgRegisterPayeeResponse],
    ["/ibc.applications.fee.v1.QueryTotalAckFeesRequest", query_6.QueryTotalAckFeesRequest],
    ["/ibc.applications.fee.v1.QueryCounterpartyPayeeRequest", query_7.QueryCounterpartyPayeeRequest],
    ["/ibc.applications.fee.v1.QueryFeeEnabledChannelResponse", query_8.QueryFeeEnabledChannelResponse],
    ["/ibc.applications.fee.v1.QueryTotalRecvFeesResponse", query_9.QueryTotalRecvFeesResponse],
    ["/ibc.applications.fee.v1.QueryFeeEnabledChannelRequest", query_10.QueryFeeEnabledChannelRequest],
    ["/ibc.applications.fee.v1.MsgRegisterPayee", tx_4.MsgRegisterPayee],
    ["/ibc.applications.fee.v1.QueryIncentivizedPacketsForChannelRequest", query_11.QueryIncentivizedPacketsForChannelRequest],
    ["/ibc.applications.fee.v1.QueryFeeEnabledChannelsResponse", query_12.QueryFeeEnabledChannelsResponse],
    ["/ibc.applications.fee.v1.MsgPayPacketFeeResponse", tx_5.MsgPayPacketFeeResponse],
    ["/ibc.applications.fee.v1.Metadata", metadata_1.Metadata],
    ["/ibc.applications.fee.v1.QueryFeeEnabledChannelsRequest", query_13.QueryFeeEnabledChannelsRequest],
    ["/ibc.applications.fee.v1.MsgPayPacketFee", tx_6.MsgPayPacketFee],
    ["/ibc.applications.fee.v1.QueryTotalTimeoutFeesRequest", query_14.QueryTotalTimeoutFeesRequest],
    ["/ibc.applications.fee.v1.ForwardRelayerAddress", genesis_3.ForwardRelayerAddress],
    ["/ibc.applications.fee.v1.GenesisState", genesis_4.GenesisState],
    ["/ibc.applications.fee.v1.QueryIncentivizedPacketsForChannelResponse", query_15.QueryIncentivizedPacketsForChannelResponse],
    ["/ibc.applications.fee.v1.QueryIncentivizedPacketRequest", query_16.QueryIncentivizedPacketRequest],
    ["/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee", tx_7.MsgRegisterCounterpartyPayee],
    ["/ibc.applications.fee.v1.IdentifiedPacketFees", fee_1.IdentifiedPacketFees],
    ["/ibc.applications.fee.v1.QueryIncentivizedPacketsResponse", query_17.QueryIncentivizedPacketsResponse],
    ["/ibc.applications.fee.v1.PacketFees", fee_2.PacketFees],
    ["/ibc.applications.fee.v1.QueryTotalRecvFeesRequest", query_18.QueryTotalRecvFeesRequest],
    ["/ibc.applications.fee.v1.QueryPayeeRequest", query_19.QueryPayeeRequest],
    ["/ibc.applications.fee.v1.QueryPayeeResponse", query_20.QueryPayeeResponse],
    ["/ibc.applications.fee.v1.RegisteredPayee", genesis_5.RegisteredPayee],
    ["/ibc.applications.fee.v1.MsgPayPacketFeeAsyncResponse", tx_8.MsgPayPacketFeeAsyncResponse],
    ["/ibc.applications.fee.v1.PacketFee", fee_3.PacketFee],
    ["/ibc.applications.fee.v1.Fee", fee_4.Fee],
];
exports.msgTypes = msgTypes;
