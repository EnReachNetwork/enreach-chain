"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const fee_1 = require("./types/ibc/applications/fee/v1/fee");
const tx_1 = require("./types/ibc/applications/fee/v1/tx");
const tx_2 = require("./types/ibc/applications/fee/v1/tx");
const query_1 = require("./types/ibc/applications/fee/v1/query");
const query_2 = require("./types/ibc/applications/fee/v1/query");
const query_3 = require("./types/ibc/applications/fee/v1/query");
const query_4 = require("./types/ibc/applications/fee/v1/query");
const query_5 = require("./types/ibc/applications/fee/v1/query");
const query_6 = require("./types/ibc/applications/fee/v1/query");
const query_7 = require("./types/ibc/applications/fee/v1/query");
const fee_2 = require("./types/ibc/applications/fee/v1/fee");
const tx_3 = require("./types/ibc/applications/fee/v1/tx");
const fee_3 = require("./types/ibc/applications/fee/v1/fee");
const fee_4 = require("./types/ibc/applications/fee/v1/fee");
const query_8 = require("./types/ibc/applications/fee/v1/query");
const query_9 = require("./types/ibc/applications/fee/v1/query");
const query_10 = require("./types/ibc/applications/fee/v1/query");
const tx_4 = require("./types/ibc/applications/fee/v1/tx");
const query_11 = require("./types/ibc/applications/fee/v1/query");
const query_12 = require("./types/ibc/applications/fee/v1/query");
const query_13 = require("./types/ibc/applications/fee/v1/query");
const metadata_1 = require("./types/ibc/applications/fee/v1/metadata");
const tx_5 = require("./types/ibc/applications/fee/v1/tx");
const genesis_1 = require("./types/ibc/applications/fee/v1/genesis");
const tx_6 = require("./types/ibc/applications/fee/v1/tx");
const tx_7 = require("./types/ibc/applications/fee/v1/tx");
const genesis_2 = require("./types/ibc/applications/fee/v1/genesis");
const ack_1 = require("./types/ibc/applications/fee/v1/ack");
const query_14 = require("./types/ibc/applications/fee/v1/query");
const query_15 = require("./types/ibc/applications/fee/v1/query");
const tx_8 = require("./types/ibc/applications/fee/v1/tx");
const genesis_3 = require("./types/ibc/applications/fee/v1/genesis");
const genesis_4 = require("./types/ibc/applications/fee/v1/genesis");
const genesis_5 = require("./types/ibc/applications/fee/v1/genesis");
const query_16 = require("./types/ibc/applications/fee/v1/query");
const query_17 = require("./types/ibc/applications/fee/v1/query");
const query_18 = require("./types/ibc/applications/fee/v1/query");
const query_19 = require("./types/ibc/applications/fee/v1/query");
const query_20 = require("./types/ibc/applications/fee/v1/query");
const msgTypes = [
    ["/ibc.applications.fee.v1.PacketFee", fee_1.PacketFee],
    ["/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee", tx_1.MsgRegisterCounterpartyPayee],
    ["/ibc.applications.fee.v1.MsgPayPacketFee", tx_2.MsgPayPacketFee],
    ["/ibc.applications.fee.v1.QueryIncentivizedPacketResponse", query_1.QueryIncentivizedPacketResponse],
    ["/ibc.applications.fee.v1.QueryTotalAckFeesRequest", query_2.QueryTotalAckFeesRequest],
    ["/ibc.applications.fee.v1.QueryIncentivizedPacketsRequest", query_3.QueryIncentivizedPacketsRequest],
    ["/ibc.applications.fee.v1.QueryIncentivizedPacketRequest", query_4.QueryIncentivizedPacketRequest],
    ["/ibc.applications.fee.v1.QueryTotalTimeoutFeesResponse", query_5.QueryTotalTimeoutFeesResponse],
    ["/ibc.applications.fee.v1.QueryFeeEnabledChannelRequest", query_6.QueryFeeEnabledChannelRequest],
    ["/ibc.applications.fee.v1.QueryFeeEnabledChannelResponse", query_7.QueryFeeEnabledChannelResponse],
    ["/ibc.applications.fee.v1.IdentifiedPacketFees", fee_2.IdentifiedPacketFees],
    ["/ibc.applications.fee.v1.MsgPayPacketFeeAsyncResponse", tx_3.MsgPayPacketFeeAsyncResponse],
    ["/ibc.applications.fee.v1.Fee", fee_3.Fee],
    ["/ibc.applications.fee.v1.PacketFees", fee_4.PacketFees],
    ["/ibc.applications.fee.v1.QueryIncentivizedPacketsResponse", query_8.QueryIncentivizedPacketsResponse],
    ["/ibc.applications.fee.v1.QueryIncentivizedPacketsForChannelRequest", query_9.QueryIncentivizedPacketsForChannelRequest],
    ["/ibc.applications.fee.v1.QueryFeeEnabledChannelsRequest", query_10.QueryFeeEnabledChannelsRequest],
    ["/ibc.applications.fee.v1.MsgPayPacketFeeResponse", tx_4.MsgPayPacketFeeResponse],
    ["/ibc.applications.fee.v1.QueryIncentivizedPacketsForChannelResponse", query_11.QueryIncentivizedPacketsForChannelResponse],
    ["/ibc.applications.fee.v1.QueryTotalTimeoutFeesRequest", query_12.QueryTotalTimeoutFeesRequest],
    ["/ibc.applications.fee.v1.QueryCounterpartyPayeeResponse", query_13.QueryCounterpartyPayeeResponse],
    ["/ibc.applications.fee.v1.Metadata", metadata_1.Metadata],
    ["/ibc.applications.fee.v1.MsgRegisterPayee", tx_5.MsgRegisterPayee],
    ["/ibc.applications.fee.v1.GenesisState", genesis_1.GenesisState],
    ["/ibc.applications.fee.v1.MsgRegisterCounterpartyPayeeResponse", tx_6.MsgRegisterCounterpartyPayeeResponse],
    ["/ibc.applications.fee.v1.MsgPayPacketFeeAsync", tx_7.MsgPayPacketFeeAsync],
    ["/ibc.applications.fee.v1.ForwardRelayerAddress", genesis_2.ForwardRelayerAddress],
    ["/ibc.applications.fee.v1.IncentivizedAcknowledgement", ack_1.IncentivizedAcknowledgement],
    ["/ibc.applications.fee.v1.QueryPayeeResponse", query_14.QueryPayeeResponse],
    ["/ibc.applications.fee.v1.QueryFeeEnabledChannelsResponse", query_15.QueryFeeEnabledChannelsResponse],
    ["/ibc.applications.fee.v1.MsgRegisterPayeeResponse", tx_8.MsgRegisterPayeeResponse],
    ["/ibc.applications.fee.v1.FeeEnabledChannel", genesis_3.FeeEnabledChannel],
    ["/ibc.applications.fee.v1.RegisteredPayee", genesis_4.RegisteredPayee],
    ["/ibc.applications.fee.v1.RegisteredCounterpartyPayee", genesis_5.RegisteredCounterpartyPayee],
    ["/ibc.applications.fee.v1.QueryTotalRecvFeesRequest", query_16.QueryTotalRecvFeesRequest],
    ["/ibc.applications.fee.v1.QueryTotalRecvFeesResponse", query_17.QueryTotalRecvFeesResponse],
    ["/ibc.applications.fee.v1.QueryTotalAckFeesResponse", query_18.QueryTotalAckFeesResponse],
    ["/ibc.applications.fee.v1.QueryPayeeRequest", query_19.QueryPayeeRequest],
    ["/ibc.applications.fee.v1.QueryCounterpartyPayeeRequest", query_20.QueryCounterpartyPayeeRequest],
];
exports.msgTypes = msgTypes;
