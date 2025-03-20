"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const transfer_1 = require("./types/ibc/applications/transfer/v1/transfer");
const genesis_1 = require("./types/ibc/applications/transfer/v1/genesis");
const query_1 = require("./types/ibc/applications/transfer/v1/query");
const query_2 = require("./types/ibc/applications/transfer/v1/query");
const query_3 = require("./types/ibc/applications/transfer/v1/query");
const query_4 = require("./types/ibc/applications/transfer/v1/query");
const query_5 = require("./types/ibc/applications/transfer/v1/query");
const authz_1 = require("./types/ibc/applications/transfer/v1/authz");
const query_6 = require("./types/ibc/applications/transfer/v1/query");
const tx_1 = require("./types/ibc/applications/transfer/v1/tx");
const authz_2 = require("./types/ibc/applications/transfer/v1/authz");
const query_7 = require("./types/ibc/applications/transfer/v1/query");
const query_8 = require("./types/ibc/applications/transfer/v1/query");
const query_9 = require("./types/ibc/applications/transfer/v1/query");
const query_10 = require("./types/ibc/applications/transfer/v1/query");
const tx_2 = require("./types/ibc/applications/transfer/v1/tx");
const transfer_2 = require("./types/ibc/applications/transfer/v1/transfer");
const query_11 = require("./types/ibc/applications/transfer/v1/query");
const tx_3 = require("./types/ibc/applications/transfer/v1/tx");
const tx_4 = require("./types/ibc/applications/transfer/v1/tx");
const query_12 = require("./types/ibc/applications/transfer/v1/query");
const msgTypes = [
    ["/ibc.applications.transfer.v1.DenomTrace", transfer_1.DenomTrace],
    ["/ibc.applications.transfer.v1.GenesisState", genesis_1.GenesisState],
    ["/ibc.applications.transfer.v1.QueryDenomTracesRequest", query_1.QueryDenomTracesRequest],
    ["/ibc.applications.transfer.v1.QueryDenomTracesResponse", query_2.QueryDenomTracesResponse],
    ["/ibc.applications.transfer.v1.QueryDenomHashRequest", query_3.QueryDenomHashRequest],
    ["/ibc.applications.transfer.v1.QueryEscrowAddressRequest", query_4.QueryEscrowAddressRequest],
    ["/ibc.applications.transfer.v1.QueryTotalEscrowForDenomRequest", query_5.QueryTotalEscrowForDenomRequest],
    ["/ibc.applications.transfer.v1.Allocation", authz_1.Allocation],
    ["/ibc.applications.transfer.v1.QueryTotalEscrowForDenomResponse", query_6.QueryTotalEscrowForDenomResponse],
    ["/ibc.applications.transfer.v1.MsgTransfer", tx_1.MsgTransfer],
    ["/ibc.applications.transfer.v1.TransferAuthorization", authz_2.TransferAuthorization],
    ["/ibc.applications.transfer.v1.QueryDenomTraceResponse", query_7.QueryDenomTraceResponse],
    ["/ibc.applications.transfer.v1.QueryDenomHashResponse", query_8.QueryDenomHashResponse],
    ["/ibc.applications.transfer.v1.QueryEscrowAddressResponse", query_9.QueryEscrowAddressResponse],
    ["/ibc.applications.transfer.v1.QueryDenomTraceRequest", query_10.QueryDenomTraceRequest],
    ["/ibc.applications.transfer.v1.MsgUpdateParams", tx_2.MsgUpdateParams],
    ["/ibc.applications.transfer.v1.Params", transfer_2.Params],
    ["/ibc.applications.transfer.v1.QueryParamsResponse", query_11.QueryParamsResponse],
    ["/ibc.applications.transfer.v1.MsgTransferResponse", tx_3.MsgTransferResponse],
    ["/ibc.applications.transfer.v1.MsgUpdateParamsResponse", tx_4.MsgUpdateParamsResponse],
    ["/ibc.applications.transfer.v1.QueryParamsRequest", query_12.QueryParamsRequest],
];
exports.msgTypes = msgTypes;
