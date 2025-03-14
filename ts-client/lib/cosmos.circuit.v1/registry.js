"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/cosmos/circuit/v1/tx");
const types_1 = require("./types/cosmos/circuit/v1/types");
const query_1 = require("./types/cosmos/circuit/v1/query");
const tx_2 = require("./types/cosmos/circuit/v1/tx");
const tx_3 = require("./types/cosmos/circuit/v1/tx");
const types_2 = require("./types/cosmos/circuit/v1/types");
const query_2 = require("./types/cosmos/circuit/v1/query");
const query_3 = require("./types/cosmos/circuit/v1/query");
const tx_4 = require("./types/cosmos/circuit/v1/tx");
const tx_5 = require("./types/cosmos/circuit/v1/tx");
const types_3 = require("./types/cosmos/circuit/v1/types");
const query_4 = require("./types/cosmos/circuit/v1/query");
const tx_6 = require("./types/cosmos/circuit/v1/tx");
const query_5 = require("./types/cosmos/circuit/v1/query");
const query_6 = require("./types/cosmos/circuit/v1/query");
const msgTypes = [
    ["/cosmos.circuit.v1.MsgAuthorizeCircuitBreakerResponse", tx_1.MsgAuthorizeCircuitBreakerResponse],
    ["/cosmos.circuit.v1.GenesisAccountPermissions", types_1.GenesisAccountPermissions],
    ["/cosmos.circuit.v1.QueryAccountsRequest", query_1.QueryAccountsRequest],
    ["/cosmos.circuit.v1.MsgResetCircuitBreaker", tx_2.MsgResetCircuitBreaker],
    ["/cosmos.circuit.v1.MsgResetCircuitBreakerResponse", tx_3.MsgResetCircuitBreakerResponse],
    ["/cosmos.circuit.v1.Permissions", types_2.Permissions],
    ["/cosmos.circuit.v1.QueryAccountRequest", query_2.QueryAccountRequest],
    ["/cosmos.circuit.v1.AccountsResponse", query_3.AccountsResponse],
    ["/cosmos.circuit.v1.MsgAuthorizeCircuitBreaker", tx_4.MsgAuthorizeCircuitBreaker],
    ["/cosmos.circuit.v1.MsgTripCircuitBreakerResponse", tx_5.MsgTripCircuitBreakerResponse],
    ["/cosmos.circuit.v1.GenesisState", types_3.GenesisState],
    ["/cosmos.circuit.v1.DisabledListResponse", query_4.DisabledListResponse],
    ["/cosmos.circuit.v1.MsgTripCircuitBreaker", tx_6.MsgTripCircuitBreaker],
    ["/cosmos.circuit.v1.AccountResponse", query_5.AccountResponse],
    ["/cosmos.circuit.v1.QueryDisabledListRequest", query_6.QueryDisabledListRequest],
];
exports.msgTypes = msgTypes;
