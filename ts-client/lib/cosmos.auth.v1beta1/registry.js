"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const query_1 = require("./types/cosmos/auth/v1beta1/query");
const query_2 = require("./types/cosmos/auth/v1beta1/query");
const query_3 = require("./types/cosmos/auth/v1beta1/query");
const auth_1 = require("./types/cosmos/auth/v1beta1/auth");
const query_4 = require("./types/cosmos/auth/v1beta1/query");
const query_5 = require("./types/cosmos/auth/v1beta1/query");
const query_6 = require("./types/cosmos/auth/v1beta1/query");
const query_7 = require("./types/cosmos/auth/v1beta1/query");
const query_8 = require("./types/cosmos/auth/v1beta1/query");
const auth_2 = require("./types/cosmos/auth/v1beta1/auth");
const query_9 = require("./types/cosmos/auth/v1beta1/query");
const tx_1 = require("./types/cosmos/auth/v1beta1/tx");
const query_10 = require("./types/cosmos/auth/v1beta1/query");
const query_11 = require("./types/cosmos/auth/v1beta1/query");
const tx_2 = require("./types/cosmos/auth/v1beta1/tx");
const auth_3 = require("./types/cosmos/auth/v1beta1/auth");
const query_12 = require("./types/cosmos/auth/v1beta1/query");
const query_13 = require("./types/cosmos/auth/v1beta1/query");
const query_14 = require("./types/cosmos/auth/v1beta1/query");
const query_15 = require("./types/cosmos/auth/v1beta1/query");
const query_16 = require("./types/cosmos/auth/v1beta1/query");
const auth_4 = require("./types/cosmos/auth/v1beta1/auth");
const query_17 = require("./types/cosmos/auth/v1beta1/query");
const query_18 = require("./types/cosmos/auth/v1beta1/query");
const genesis_1 = require("./types/cosmos/auth/v1beta1/genesis");
const query_19 = require("./types/cosmos/auth/v1beta1/query");
const query_20 = require("./types/cosmos/auth/v1beta1/query");
const msgTypes = [
    ["/cosmos.auth.v1beta1.QueryAccountsRequest", query_1.QueryAccountsRequest],
    ["/cosmos.auth.v1beta1.QueryParamsRequest", query_2.QueryParamsRequest],
    ["/cosmos.auth.v1beta1.AddressStringToBytesRequest", query_3.AddressStringToBytesRequest],
    ["/cosmos.auth.v1beta1.Params", auth_1.Params],
    ["/cosmos.auth.v1beta1.QueryModuleAccountByNameRequest", query_4.QueryModuleAccountByNameRequest],
    ["/cosmos.auth.v1beta1.QueryModuleAccountByNameResponse", query_5.QueryModuleAccountByNameResponse],
    ["/cosmos.auth.v1beta1.AddressStringToBytesResponse", query_6.AddressStringToBytesResponse],
    ["/cosmos.auth.v1beta1.QueryAccountAddressByIDResponse", query_7.QueryAccountAddressByIDResponse],
    ["/cosmos.auth.v1beta1.QueryAccountResponse", query_8.QueryAccountResponse],
    ["/cosmos.auth.v1beta1.ModuleCredential", auth_2.ModuleCredential],
    ["/cosmos.auth.v1beta1.QueryModuleAccountsResponse", query_9.QueryModuleAccountsResponse],
    ["/cosmos.auth.v1beta1.MsgUpdateParams", tx_1.MsgUpdateParams],
    ["/cosmos.auth.v1beta1.Bech32PrefixRequest", query_10.Bech32PrefixRequest],
    ["/cosmos.auth.v1beta1.AddressBytesToStringResponse", query_11.AddressBytesToStringResponse],
    ["/cosmos.auth.v1beta1.MsgUpdateParamsResponse", tx_2.MsgUpdateParamsResponse],
    ["/cosmos.auth.v1beta1.ModuleAccount", auth_3.ModuleAccount],
    ["/cosmos.auth.v1beta1.QueryParamsResponse", query_12.QueryParamsResponse],
    ["/cosmos.auth.v1beta1.Bech32PrefixResponse", query_13.Bech32PrefixResponse],
    ["/cosmos.auth.v1beta1.QueryAccountInfoRequest", query_14.QueryAccountInfoRequest],
    ["/cosmos.auth.v1beta1.QueryAccountRequest", query_15.QueryAccountRequest],
    ["/cosmos.auth.v1beta1.AddressBytesToStringRequest", query_16.AddressBytesToStringRequest],
    ["/cosmos.auth.v1beta1.BaseAccount", auth_4.BaseAccount],
    ["/cosmos.auth.v1beta1.QueryModuleAccountsRequest", query_17.QueryModuleAccountsRequest],
    ["/cosmos.auth.v1beta1.QueryAccountAddressByIDRequest", query_18.QueryAccountAddressByIDRequest],
    ["/cosmos.auth.v1beta1.GenesisState", genesis_1.GenesisState],
    ["/cosmos.auth.v1beta1.QueryAccountsResponse", query_19.QueryAccountsResponse],
    ["/cosmos.auth.v1beta1.QueryAccountInfoResponse", query_20.QueryAccountInfoResponse],
];
exports.msgTypes = msgTypes;
