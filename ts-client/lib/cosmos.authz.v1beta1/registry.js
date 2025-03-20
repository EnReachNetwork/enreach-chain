"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const authz_1 = require("./types/cosmos/authz/v1beta1/authz");
const event_1 = require("./types/cosmos/authz/v1beta1/event");
const tx_1 = require("./types/cosmos/authz/v1beta1/tx");
const tx_2 = require("./types/cosmos/authz/v1beta1/tx");
const tx_3 = require("./types/cosmos/authz/v1beta1/tx");
const query_1 = require("./types/cosmos/authz/v1beta1/query");
const query_2 = require("./types/cosmos/authz/v1beta1/query");
const query_3 = require("./types/cosmos/authz/v1beta1/query");
const query_4 = require("./types/cosmos/authz/v1beta1/query");
const authz_2 = require("./types/cosmos/authz/v1beta1/authz");
const genesis_1 = require("./types/cosmos/authz/v1beta1/genesis");
const tx_4 = require("./types/cosmos/authz/v1beta1/tx");
const tx_5 = require("./types/cosmos/authz/v1beta1/tx");
const authz_3 = require("./types/cosmos/authz/v1beta1/authz");
const query_5 = require("./types/cosmos/authz/v1beta1/query");
const authz_4 = require("./types/cosmos/authz/v1beta1/authz");
const tx_6 = require("./types/cosmos/authz/v1beta1/tx");
const event_2 = require("./types/cosmos/authz/v1beta1/event");
const query_6 = require("./types/cosmos/authz/v1beta1/query");
const msgTypes = [
    ["/cosmos.authz.v1beta1.Grant", authz_1.Grant],
    ["/cosmos.authz.v1beta1.EventRevoke", event_1.EventRevoke],
    ["/cosmos.authz.v1beta1.MsgGrant", tx_1.MsgGrant],
    ["/cosmos.authz.v1beta1.MsgGrantResponse", tx_2.MsgGrantResponse],
    ["/cosmos.authz.v1beta1.MsgRevokeResponse", tx_3.MsgRevokeResponse],
    ["/cosmos.authz.v1beta1.QueryGranterGrantsRequest", query_1.QueryGranterGrantsRequest],
    ["/cosmos.authz.v1beta1.QueryGrantsRequest", query_2.QueryGrantsRequest],
    ["/cosmos.authz.v1beta1.QueryGrantsResponse", query_3.QueryGrantsResponse],
    ["/cosmos.authz.v1beta1.QueryGranteeGrantsRequest", query_4.QueryGranteeGrantsRequest],
    ["/cosmos.authz.v1beta1.GenericAuthorization", authz_2.GenericAuthorization],
    ["/cosmos.authz.v1beta1.GenesisState", genesis_1.GenesisState],
    ["/cosmos.authz.v1beta1.MsgExec", tx_4.MsgExec],
    ["/cosmos.authz.v1beta1.MsgExecResponse", tx_5.MsgExecResponse],
    ["/cosmos.authz.v1beta1.GrantQueueItem", authz_3.GrantQueueItem],
    ["/cosmos.authz.v1beta1.QueryGranteeGrantsResponse", query_5.QueryGranteeGrantsResponse],
    ["/cosmos.authz.v1beta1.GrantAuthorization", authz_4.GrantAuthorization],
    ["/cosmos.authz.v1beta1.MsgRevoke", tx_6.MsgRevoke],
    ["/cosmos.authz.v1beta1.EventGrant", event_2.EventGrant],
    ["/cosmos.authz.v1beta1.QueryGranterGrantsResponse", query_6.QueryGranterGrantsResponse],
];
exports.msgTypes = msgTypes;
