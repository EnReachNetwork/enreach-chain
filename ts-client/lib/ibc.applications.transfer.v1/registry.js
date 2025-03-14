"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const query_1 = require("./types/ibc/applications/transfer/v1/query");
const query_2 = require("./types/ibc/applications/transfer/v1/query");
const query_3 = require("./types/ibc/applications/transfer/v1/query");
const query_4 = require("./types/ibc/applications/transfer/v1/query");
const query_5 = require("./types/ibc/applications/transfer/v1/query");
const authz_1 = require("./types/ibc/applications/transfer/v1/authz");
const tx_1 = require("./types/ibc/applications/transfer/v1/tx");
const authz_2 = require("./types/ibc/applications/transfer/v1/authz");
const transfer_1 = require("./types/ibc/applications/transfer/v1/transfer");
const genesis_1 = require("./types/ibc/applications/transfer/v1/genesis");
const tx_2 = require("./types/ibc/applications/transfer/v1/tx");
const query_6 = require("./types/ibc/applications/transfer/v1/query");
const query_7 = require("./types/ibc/applications/transfer/v1/query");
const query_8 = require("./types/ibc/applications/transfer/v1/query");
const query_9 = require("./types/ibc/applications/transfer/v1/query");
const transfer_2 = require("./types/ibc/applications/transfer/v1/transfer");
const tx_3 = require("./types/ibc/applications/transfer/v1/tx");
const query_10 = require("./types/ibc/applications/transfer/v1/query");
const tx_4 = require("./types/ibc/applications/transfer/v1/tx");
const query_11 = require("./types/ibc/applications/transfer/v1/query");
const query_12 = require("./types/ibc/applications/transfer/v1/query");
const msgTypes = [
    ["/ibc.applications.transfer.v1.QueryTotalEscrowForDenomRequest", query_1.QueryTotalEscrowForDenomRequest],
    ["/ibc.applications.transfer.v1.QueryDenomTraceResponse", query_2.QueryDenomTraceResponse],
    ["/ibc.applications.transfer.v1.QueryDenomTracesResponse", query_3.QueryDenomTracesResponse],
    ["/ibc.applications.transfer.v1.QueryDenomHashRequest", query_4.QueryDenomHashRequest],
    ["/ibc.applications.transfer.v1.QueryEscrowAddressRequest", query_5.QueryEscrowAddressRequest],
    ["/ibc.applications.transfer.v1.Allocation", authz_1.Allocation],
    ["/ibc.applications.transfer.v1.MsgTransferResponse", tx_1.MsgTransferResponse],
    ["/ibc.applications.transfer.v1.TransferAuthorization", authz_2.TransferAuthorization],
    ["/ibc.applications.transfer.v1.DenomTrace", transfer_1.DenomTrace],
    ["/ibc.applications.transfer.v1.GenesisState", genesis_1.GenesisState],
    ["/ibc.applications.transfer.v1.MsgUpdateParamsResponse", tx_2.MsgUpdateParamsResponse],
    ["/ibc.applications.transfer.v1.QueryDenomTracesRequest", query_6.QueryDenomTracesRequest],
    ["/ibc.applications.transfer.v1.QueryEscrowAddressResponse", query_7.QueryEscrowAddressResponse],
    ["/ibc.applications.transfer.v1.QueryDenomTraceRequest", query_8.QueryDenomTraceRequest],
    ["/ibc.applications.transfer.v1.QueryTotalEscrowForDenomResponse", query_9.QueryTotalEscrowForDenomResponse],
    ["/ibc.applications.transfer.v1.Params", transfer_2.Params],
    ["/ibc.applications.transfer.v1.MsgUpdateParams", tx_3.MsgUpdateParams],
    ["/ibc.applications.transfer.v1.QueryParamsResponse", query_10.QueryParamsResponse],
    ["/ibc.applications.transfer.v1.MsgTransfer", tx_4.MsgTransfer],
    ["/ibc.applications.transfer.v1.QueryParamsRequest", query_11.QueryParamsRequest],
    ["/ibc.applications.transfer.v1.QueryDenomHashResponse", query_12.QueryDenomHashResponse],
];
exports.msgTypes = msgTypes;
