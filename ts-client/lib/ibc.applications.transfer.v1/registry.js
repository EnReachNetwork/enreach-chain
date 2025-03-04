"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const authz_1 = require("./types/ibc/applications/transfer/v1/authz");
const genesis_1 = require("./types/ibc/applications/transfer/v1/genesis");
const query_1 = require("./types/ibc/applications/transfer/v1/query");
const tx_1 = require("./types/ibc/applications/transfer/v1/tx");
const tx_2 = require("./types/ibc/applications/transfer/v1/tx");
const transfer_1 = require("./types/ibc/applications/transfer/v1/transfer");
const transfer_2 = require("./types/ibc/applications/transfer/v1/transfer");
const query_2 = require("./types/ibc/applications/transfer/v1/query");
const query_3 = require("./types/ibc/applications/transfer/v1/query");
const query_4 = require("./types/ibc/applications/transfer/v1/query");
const query_5 = require("./types/ibc/applications/transfer/v1/query");
const query_6 = require("./types/ibc/applications/transfer/v1/query");
const tx_3 = require("./types/ibc/applications/transfer/v1/tx");
const query_7 = require("./types/ibc/applications/transfer/v1/query");
const authz_2 = require("./types/ibc/applications/transfer/v1/authz");
const query_8 = require("./types/ibc/applications/transfer/v1/query");
const tx_4 = require("./types/ibc/applications/transfer/v1/tx");
const query_9 = require("./types/ibc/applications/transfer/v1/query");
const query_10 = require("./types/ibc/applications/transfer/v1/query");
const query_11 = require("./types/ibc/applications/transfer/v1/query");
const query_12 = require("./types/ibc/applications/transfer/v1/query");
const msgTypes = [
    ["/ibc.applications.transfer.v1.TransferAuthorization", authz_1.TransferAuthorization],
    ["/ibc.applications.transfer.v1.GenesisState", genesis_1.GenesisState],
    ["/ibc.applications.transfer.v1.QueryEscrowAddressRequest", query_1.QueryEscrowAddressRequest],
    ["/ibc.applications.transfer.v1.MsgTransferResponse", tx_1.MsgTransferResponse],
    ["/ibc.applications.transfer.v1.MsgUpdateParams", tx_2.MsgUpdateParams],
    ["/ibc.applications.transfer.v1.DenomTrace", transfer_1.DenomTrace],
    ["/ibc.applications.transfer.v1.Params", transfer_2.Params],
    ["/ibc.applications.transfer.v1.QueryParamsRequest", query_2.QueryParamsRequest],
    ["/ibc.applications.transfer.v1.QueryParamsResponse", query_3.QueryParamsResponse],
    ["/ibc.applications.transfer.v1.QueryTotalEscrowForDenomResponse", query_4.QueryTotalEscrowForDenomResponse],
    ["/ibc.applications.transfer.v1.QueryDenomTraceRequest", query_5.QueryDenomTraceRequest],
    ["/ibc.applications.transfer.v1.QueryTotalEscrowForDenomRequest", query_6.QueryTotalEscrowForDenomRequest],
    ["/ibc.applications.transfer.v1.MsgTransfer", tx_3.MsgTransfer],
    ["/ibc.applications.transfer.v1.QueryDenomTracesResponse", query_7.QueryDenomTracesResponse],
    ["/ibc.applications.transfer.v1.Allocation", authz_2.Allocation],
    ["/ibc.applications.transfer.v1.QueryEscrowAddressResponse", query_8.QueryEscrowAddressResponse],
    ["/ibc.applications.transfer.v1.MsgUpdateParamsResponse", tx_4.MsgUpdateParamsResponse],
    ["/ibc.applications.transfer.v1.QueryDenomTraceResponse", query_9.QueryDenomTraceResponse],
    ["/ibc.applications.transfer.v1.QueryDenomHashRequest", query_10.QueryDenomHashRequest],
    ["/ibc.applications.transfer.v1.QueryDenomTracesRequest", query_11.QueryDenomTracesRequest],
    ["/ibc.applications.transfer.v1.QueryDenomHashResponse", query_12.QueryDenomHashResponse],
];
exports.msgTypes = msgTypes;
