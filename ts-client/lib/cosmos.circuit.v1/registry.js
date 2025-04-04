"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const types_1 = require("./types/cosmos/circuit/v1/types");
const query_1 = require("./types/cosmos/circuit/v1/query");
const query_2 = require("./types/cosmos/circuit/v1/query");
const tx_1 = require("./types/cosmos/circuit/v1/tx");
const tx_2 = require("./types/cosmos/circuit/v1/tx");
const query_3 = require("./types/cosmos/circuit/v1/query");
const tx_3 = require("./types/cosmos/circuit/v1/tx");
const tx_4 = require("./types/cosmos/circuit/v1/tx");
const types_2 = require("./types/cosmos/circuit/v1/types");
const query_4 = require("./types/cosmos/circuit/v1/query");
const query_5 = require("./types/cosmos/circuit/v1/query");
const tx_5 = require("./types/cosmos/circuit/v1/tx");
const tx_6 = require("./types/cosmos/circuit/v1/tx");
const types_3 = require("./types/cosmos/circuit/v1/types");
const query_6 = require("./types/cosmos/circuit/v1/query");
const msgTypes = [
    ["/cosmos.circuit.v1.Permissions", types_1.Permissions],
    ["/cosmos.circuit.v1.AccountResponse", query_1.AccountResponse],
    ["/cosmos.circuit.v1.QueryDisabledListRequest", query_2.QueryDisabledListRequest],
    ["/cosmos.circuit.v1.MsgAuthorizeCircuitBreakerResponse", tx_1.MsgAuthorizeCircuitBreakerResponse],
    ["/cosmos.circuit.v1.MsgResetCircuitBreaker", tx_2.MsgResetCircuitBreaker],
    ["/cosmos.circuit.v1.DisabledListResponse", query_3.DisabledListResponse],
    ["/cosmos.circuit.v1.MsgAuthorizeCircuitBreaker", tx_3.MsgAuthorizeCircuitBreaker],
    ["/cosmos.circuit.v1.MsgTripCircuitBreaker", tx_4.MsgTripCircuitBreaker],
    ["/cosmos.circuit.v1.GenesisAccountPermissions", types_2.GenesisAccountPermissions],
    ["/cosmos.circuit.v1.AccountsResponse", query_4.AccountsResponse],
    ["/cosmos.circuit.v1.QueryAccountsRequest", query_5.QueryAccountsRequest],
    ["/cosmos.circuit.v1.MsgTripCircuitBreakerResponse", tx_5.MsgTripCircuitBreakerResponse],
    ["/cosmos.circuit.v1.MsgResetCircuitBreakerResponse", tx_6.MsgResetCircuitBreakerResponse],
    ["/cosmos.circuit.v1.GenesisState", types_3.GenesisState],
    ["/cosmos.circuit.v1.QueryAccountRequest", query_6.QueryAccountRequest],
];
exports.msgTypes = msgTypes;
