"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const query_1 = require("./types/ibc/applications/fee/v1/query");
const tx_1 = require("./types/ibc/applications/fee/v1/tx");
const fee_1 = require("./types/ibc/applications/fee/v1/fee");
const fee_2 = require("./types/ibc/applications/fee/v1/fee");
const metadata_1 = require("./types/ibc/applications/fee/v1/metadata");
const query_2 = require("./types/ibc/applications/fee/v1/query");
const query_3 = require("./types/ibc/applications/fee/v1/query");
const query_4 = require("./types/ibc/applications/fee/v1/query");
const query_5 = require("./types/ibc/applications/fee/v1/query");
const query_6 = require("./types/ibc/applications/fee/v1/query");
const genesis_1 = require("./types/ibc/applications/fee/v1/genesis");
const tx_2 = require("./types/ibc/applications/fee/v1/tx");
const query_7 = require("./types/ibc/applications/fee/v1/query");
const genesis_2 = require("./types/ibc/applications/fee/v1/genesis");
const genesis_3 = require("./types/ibc/applications/fee/v1/genesis");
const genesis_4 = require("./types/ibc/applications/fee/v1/genesis");
const fee_3 = require("./types/ibc/applications/fee/v1/fee");
const query_8 = require("./types/ibc/applications/fee/v1/query");
const query_9 = require("./types/ibc/applications/fee/v1/query");
const query_10 = require("./types/ibc/applications/fee/v1/query");
const query_11 = require("./types/ibc/applications/fee/v1/query");
const tx_3 = require("./types/ibc/applications/fee/v1/tx");
const tx_4 = require("./types/ibc/applications/fee/v1/tx");
const tx_5 = require("./types/ibc/applications/fee/v1/tx");
const tx_6 = require("./types/ibc/applications/fee/v1/tx");
const query_12 = require("./types/ibc/applications/fee/v1/query");
const query_13 = require("./types/ibc/applications/fee/v1/query");
const tx_7 = require("./types/ibc/applications/fee/v1/tx");
const genesis_5 = require("./types/ibc/applications/fee/v1/genesis");
const fee_4 = require("./types/ibc/applications/fee/v1/fee");
const query_14 = require("./types/ibc/applications/fee/v1/query");
const query_15 = require("./types/ibc/applications/fee/v1/query");
const query_16 = require("./types/ibc/applications/fee/v1/query");
const query_17 = require("./types/ibc/applications/fee/v1/query");
const query_18 = require("./types/ibc/applications/fee/v1/query");
const tx_8 = require("./types/ibc/applications/fee/v1/tx");
const ack_1 = require("./types/ibc/applications/fee/v1/ack");
const query_19 = require("./types/ibc/applications/fee/v1/query");
const query_20 = require("./types/ibc/applications/fee/v1/query");
const msgTypes = [
    ["/ibc.applications.fee.v1.QueryPayeeResponse", query_1.QueryPayeeResponse],
    ["/ibc.applications.fee.v1.MsgPayPacketFeeAsync", tx_1.MsgPayPacketFeeAsync],
    ["/ibc.applications.fee.v1.PacketFees", fee_1.PacketFees],
    ["/ibc.applications.fee.v1.IdentifiedPacketFees", fee_2.IdentifiedPacketFees],
    ["/ibc.applications.fee.v1.Metadata", metadata_1.Metadata],
    ["/ibc.applications.fee.v1.QueryTotalAckFeesRequest", query_2.QueryTotalAckFeesRequest],
    ["/ibc.applications.fee.v1.QueryTotalTimeoutFeesRequest", query_3.QueryTotalTimeoutFeesRequest],
    ["/ibc.applications.fee.v1.QueryTotalTimeoutFeesResponse", query_4.QueryTotalTimeoutFeesResponse],
    ["/ibc.applications.fee.v1.QueryFeeEnabledChannelsRequest", query_5.QueryFeeEnabledChannelsRequest],
    ["/ibc.applications.fee.v1.QueryFeeEnabledChannelRequest", query_6.QueryFeeEnabledChannelRequest],
    ["/ibc.applications.fee.v1.GenesisState", genesis_1.GenesisState],
    ["/ibc.applications.fee.v1.MsgPayPacketFeeAsyncResponse", tx_2.MsgPayPacketFeeAsyncResponse],
    ["/ibc.applications.fee.v1.QueryIncentivizedPacketsForChannelRequest", query_7.QueryIncentivizedPacketsForChannelRequest],
    ["/ibc.applications.fee.v1.FeeEnabledChannel", genesis_2.FeeEnabledChannel],
    ["/ibc.applications.fee.v1.RegisteredPayee", genesis_3.RegisteredPayee],
    ["/ibc.applications.fee.v1.ForwardRelayerAddress", genesis_4.ForwardRelayerAddress],
    ["/ibc.applications.fee.v1.Fee", fee_3.Fee],
    ["/ibc.applications.fee.v1.QueryIncentivizedPacketsResponse", query_8.QueryIncentivizedPacketsResponse],
    ["/ibc.applications.fee.v1.QueryTotalRecvFeesRequest", query_9.QueryTotalRecvFeesRequest],
    ["/ibc.applications.fee.v1.QueryTotalRecvFeesResponse", query_10.QueryTotalRecvFeesResponse],
    ["/ibc.applications.fee.v1.QueryFeeEnabledChannelResponse", query_11.QueryFeeEnabledChannelResponse],
    ["/ibc.applications.fee.v1.MsgPayPacketFeeResponse", tx_3.MsgPayPacketFeeResponse],
    ["/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee", tx_4.MsgRegisterCounterpartyPayee],
    ["/ibc.applications.fee.v1.MsgPayPacketFee", tx_5.MsgPayPacketFee],
    ["/ibc.applications.fee.v1.MsgRegisterPayeeResponse", tx_6.MsgRegisterPayeeResponse],
    ["/ibc.applications.fee.v1.QueryCounterpartyPayeeRequest", query_12.QueryCounterpartyPayeeRequest],
    ["/ibc.applications.fee.v1.QueryFeeEnabledChannelsResponse", query_13.QueryFeeEnabledChannelsResponse],
    ["/ibc.applications.fee.v1.MsgRegisterCounterpartyPayeeResponse", tx_7.MsgRegisterCounterpartyPayeeResponse],
    ["/ibc.applications.fee.v1.RegisteredCounterpartyPayee", genesis_5.RegisteredCounterpartyPayee],
    ["/ibc.applications.fee.v1.PacketFee", fee_4.PacketFee],
    ["/ibc.applications.fee.v1.QueryIncentivizedPacketsRequest", query_14.QueryIncentivizedPacketsRequest],
    ["/ibc.applications.fee.v1.QueryIncentivizedPacketRequest", query_15.QueryIncentivizedPacketRequest],
    ["/ibc.applications.fee.v1.QueryIncentivizedPacketResponse", query_16.QueryIncentivizedPacketResponse],
    ["/ibc.applications.fee.v1.QueryIncentivizedPacketsForChannelResponse", query_17.QueryIncentivizedPacketsForChannelResponse],
    ["/ibc.applications.fee.v1.QueryTotalAckFeesResponse", query_18.QueryTotalAckFeesResponse],
    ["/ibc.applications.fee.v1.MsgRegisterPayee", tx_8.MsgRegisterPayee],
    ["/ibc.applications.fee.v1.IncentivizedAcknowledgement", ack_1.IncentivizedAcknowledgement],
    ["/ibc.applications.fee.v1.QueryPayeeRequest", query_19.QueryPayeeRequest],
    ["/ibc.applications.fee.v1.QueryCounterpartyPayeeResponse", query_20.QueryCounterpartyPayeeResponse],
];
exports.msgTypes = msgTypes;
