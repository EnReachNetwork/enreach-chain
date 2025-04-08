"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const query_1 = require("./types/cosmos/auth/v1beta1/query");
const auth_1 = require("./types/cosmos/auth/v1beta1/auth");
const query_2 = require("./types/cosmos/auth/v1beta1/query");
const query_3 = require("./types/cosmos/auth/v1beta1/query");
const query_4 = require("./types/cosmos/auth/v1beta1/query");
const tx_1 = require("./types/cosmos/auth/v1beta1/tx");
const query_5 = require("./types/cosmos/auth/v1beta1/query");
const query_6 = require("./types/cosmos/auth/v1beta1/query");
const query_7 = require("./types/cosmos/auth/v1beta1/query");
const query_8 = require("./types/cosmos/auth/v1beta1/query");
const tx_2 = require("./types/cosmos/auth/v1beta1/tx");
const query_9 = require("./types/cosmos/auth/v1beta1/query");
const auth_2 = require("./types/cosmos/auth/v1beta1/auth");
const auth_3 = require("./types/cosmos/auth/v1beta1/auth");
const query_10 = require("./types/cosmos/auth/v1beta1/query");
const query_11 = require("./types/cosmos/auth/v1beta1/query");
const query_12 = require("./types/cosmos/auth/v1beta1/query");
const query_13 = require("./types/cosmos/auth/v1beta1/query");
const query_14 = require("./types/cosmos/auth/v1beta1/query");
const query_15 = require("./types/cosmos/auth/v1beta1/query");
const genesis_1 = require("./types/cosmos/auth/v1beta1/genesis");
const query_16 = require("./types/cosmos/auth/v1beta1/query");
const query_17 = require("./types/cosmos/auth/v1beta1/query");
const query_18 = require("./types/cosmos/auth/v1beta1/query");
const auth_4 = require("./types/cosmos/auth/v1beta1/auth");
const query_19 = require("./types/cosmos/auth/v1beta1/query");
const query_20 = require("./types/cosmos/auth/v1beta1/query");
const msgTypes = [
    ["/cosmos.auth.v1beta1.QueryAccountInfoRequest", query_1.QueryAccountInfoRequest],
    ["/cosmos.auth.v1beta1.ModuleAccount", auth_1.ModuleAccount],
    ["/cosmos.auth.v1beta1.QueryAccountsResponse", query_2.QueryAccountsResponse],
    ["/cosmos.auth.v1beta1.QueryModuleAccountByNameResponse", query_3.QueryModuleAccountByNameResponse],
    ["/cosmos.auth.v1beta1.AddressStringToBytesResponse", query_4.AddressStringToBytesResponse],
    ["/cosmos.auth.v1beta1.MsgUpdateParams", tx_1.MsgUpdateParams],
    ["/cosmos.auth.v1beta1.QueryParamsRequest", query_5.QueryParamsRequest],
    ["/cosmos.auth.v1beta1.QueryParamsResponse", query_6.QueryParamsResponse],
    ["/cosmos.auth.v1beta1.AddressBytesToStringRequest", query_7.AddressBytesToStringRequest],
    ["/cosmos.auth.v1beta1.QueryAccountAddressByIDRequest", query_8.QueryAccountAddressByIDRequest],
    ["/cosmos.auth.v1beta1.MsgUpdateParamsResponse", tx_2.MsgUpdateParamsResponse],
    ["/cosmos.auth.v1beta1.QueryAccountAddressByIDResponse", query_9.QueryAccountAddressByIDResponse],
    ["/cosmos.auth.v1beta1.ModuleCredential", auth_2.ModuleCredential],
    ["/cosmos.auth.v1beta1.Params", auth_3.Params],
    ["/cosmos.auth.v1beta1.AddressBytesToStringResponse", query_10.AddressBytesToStringResponse],
    ["/cosmos.auth.v1beta1.AddressStringToBytesRequest", query_11.AddressStringToBytesRequest],
    ["/cosmos.auth.v1beta1.QueryAccountsRequest", query_12.QueryAccountsRequest],
    ["/cosmos.auth.v1beta1.QueryModuleAccountsResponse", query_13.QueryModuleAccountsResponse],
    ["/cosmos.auth.v1beta1.QueryModuleAccountByNameRequest", query_14.QueryModuleAccountByNameRequest],
    ["/cosmos.auth.v1beta1.Bech32PrefixResponse", query_15.Bech32PrefixResponse],
    ["/cosmos.auth.v1beta1.GenesisState", genesis_1.GenesisState],
    ["/cosmos.auth.v1beta1.QueryAccountResponse", query_16.QueryAccountResponse],
    ["/cosmos.auth.v1beta1.QueryAccountRequest", query_17.QueryAccountRequest],
    ["/cosmos.auth.v1beta1.QueryModuleAccountsRequest", query_18.QueryModuleAccountsRequest],
    ["/cosmos.auth.v1beta1.BaseAccount", auth_4.BaseAccount],
    ["/cosmos.auth.v1beta1.Bech32PrefixRequest", query_19.Bech32PrefixRequest],
    ["/cosmos.auth.v1beta1.QueryAccountInfoResponse", query_20.QueryAccountInfoResponse],
];
exports.msgTypes = msgTypes;
