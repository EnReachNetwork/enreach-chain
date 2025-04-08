"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const query_1 = require("./types/ibc/applications/interchain_accounts/host/v1/query");
const tx_1 = require("./types/ibc/applications/interchain_accounts/host/v1/tx");
const tx_2 = require("./types/ibc/applications/interchain_accounts/host/v1/tx");
const query_2 = require("./types/ibc/applications/interchain_accounts/host/v1/query");
const host_1 = require("./types/ibc/applications/interchain_accounts/host/v1/host");
const msgTypes = [
    ["/ibc.applications.interchain_accounts.host.v1.QueryParamsResponse", query_1.QueryParamsResponse],
    ["/ibc.applications.interchain_accounts.host.v1.MsgUpdateParamsResponse", tx_1.MsgUpdateParamsResponse],
    ["/ibc.applications.interchain_accounts.host.v1.MsgUpdateParams", tx_2.MsgUpdateParams],
    ["/ibc.applications.interchain_accounts.host.v1.QueryParamsRequest", query_2.QueryParamsRequest],
    ["/ibc.applications.interchain_accounts.host.v1.Params", host_1.Params],
];
exports.msgTypes = msgTypes;
