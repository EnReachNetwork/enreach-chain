"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const authz_1 = require("./types/cosmos/authz/v1beta1/authz");
const event_1 = require("./types/cosmos/authz/v1beta1/event");
const query_1 = require("./types/cosmos/authz/v1beta1/query");
const query_2 = require("./types/cosmos/authz/v1beta1/query");
const tx_1 = require("./types/cosmos/authz/v1beta1/tx");
const authz_2 = require("./types/cosmos/authz/v1beta1/authz");
const query_3 = require("./types/cosmos/authz/v1beta1/query");
const tx_2 = require("./types/cosmos/authz/v1beta1/tx");
const tx_3 = require("./types/cosmos/authz/v1beta1/tx");
const tx_4 = require("./types/cosmos/authz/v1beta1/tx");
const authz_3 = require("./types/cosmos/authz/v1beta1/authz");
const genesis_1 = require("./types/cosmos/authz/v1beta1/genesis");
const authz_4 = require("./types/cosmos/authz/v1beta1/authz");
const event_2 = require("./types/cosmos/authz/v1beta1/event");
const query_4 = require("./types/cosmos/authz/v1beta1/query");
const query_5 = require("./types/cosmos/authz/v1beta1/query");
const query_6 = require("./types/cosmos/authz/v1beta1/query");
const tx_5 = require("./types/cosmos/authz/v1beta1/tx");
const tx_6 = require("./types/cosmos/authz/v1beta1/tx");
const msgTypes = [
    ["/cosmos.authz.v1beta1.Grant", authz_1.Grant],
    ["/cosmos.authz.v1beta1.EventGrant", event_1.EventGrant],
    ["/cosmos.authz.v1beta1.QueryGranterGrantsResponse", query_1.QueryGranterGrantsResponse],
    ["/cosmos.authz.v1beta1.QueryGranteeGrantsRequest", query_2.QueryGranteeGrantsRequest],
    ["/cosmos.authz.v1beta1.MsgGrant", tx_1.MsgGrant],
    ["/cosmos.authz.v1beta1.GrantQueueItem", authz_2.GrantQueueItem],
    ["/cosmos.authz.v1beta1.QueryGranterGrantsRequest", query_3.QueryGranterGrantsRequest],
    ["/cosmos.authz.v1beta1.MsgRevoke", tx_2.MsgRevoke],
    ["/cosmos.authz.v1beta1.MsgRevokeResponse", tx_3.MsgRevokeResponse],
    ["/cosmos.authz.v1beta1.MsgGrantResponse", tx_4.MsgGrantResponse],
    ["/cosmos.authz.v1beta1.GenericAuthorization", authz_3.GenericAuthorization],
    ["/cosmos.authz.v1beta1.GenesisState", genesis_1.GenesisState],
    ["/cosmos.authz.v1beta1.GrantAuthorization", authz_4.GrantAuthorization],
    ["/cosmos.authz.v1beta1.EventRevoke", event_2.EventRevoke],
    ["/cosmos.authz.v1beta1.QueryGrantsRequest", query_4.QueryGrantsRequest],
    ["/cosmos.authz.v1beta1.QueryGrantsResponse", query_5.QueryGrantsResponse],
    ["/cosmos.authz.v1beta1.QueryGranteeGrantsResponse", query_6.QueryGranteeGrantsResponse],
    ["/cosmos.authz.v1beta1.MsgExec", tx_5.MsgExec],
    ["/cosmos.authz.v1beta1.MsgExecResponse", tx_6.MsgExecResponse],
];
exports.msgTypes = msgTypes;
