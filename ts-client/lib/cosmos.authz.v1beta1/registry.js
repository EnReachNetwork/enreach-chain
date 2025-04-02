"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const authz_1 = require("./types/cosmos/authz/v1beta1/authz");
const authz_2 = require("./types/cosmos/authz/v1beta1/authz");
const query_1 = require("./types/cosmos/authz/v1beta1/query");
const tx_1 = require("./types/cosmos/authz/v1beta1/tx");
const genesis_1 = require("./types/cosmos/authz/v1beta1/genesis");
const query_2 = require("./types/cosmos/authz/v1beta1/query");
const query_3 = require("./types/cosmos/authz/v1beta1/query");
const query_4 = require("./types/cosmos/authz/v1beta1/query");
const query_5 = require("./types/cosmos/authz/v1beta1/query");
const query_6 = require("./types/cosmos/authz/v1beta1/query");
const authz_3 = require("./types/cosmos/authz/v1beta1/authz");
const tx_2 = require("./types/cosmos/authz/v1beta1/tx");
const tx_3 = require("./types/cosmos/authz/v1beta1/tx");
const tx_4 = require("./types/cosmos/authz/v1beta1/tx");
const event_1 = require("./types/cosmos/authz/v1beta1/event");
const authz_4 = require("./types/cosmos/authz/v1beta1/authz");
const tx_5 = require("./types/cosmos/authz/v1beta1/tx");
const tx_6 = require("./types/cosmos/authz/v1beta1/tx");
const event_2 = require("./types/cosmos/authz/v1beta1/event");
const msgTypes = [
    ["/cosmos.authz.v1beta1.GrantAuthorization", authz_1.GrantAuthorization],
    ["/cosmos.authz.v1beta1.GrantQueueItem", authz_2.GrantQueueItem],
    ["/cosmos.authz.v1beta1.QueryGranteeGrantsResponse", query_1.QueryGranteeGrantsResponse],
    ["/cosmos.authz.v1beta1.MsgExecResponse", tx_1.MsgExecResponse],
    ["/cosmos.authz.v1beta1.GenesisState", genesis_1.GenesisState],
    ["/cosmos.authz.v1beta1.QueryGrantsResponse", query_2.QueryGrantsResponse],
    ["/cosmos.authz.v1beta1.QueryGranterGrantsRequest", query_3.QueryGranterGrantsRequest],
    ["/cosmos.authz.v1beta1.QueryGranterGrantsResponse", query_4.QueryGranterGrantsResponse],
    ["/cosmos.authz.v1beta1.QueryGranteeGrantsRequest", query_5.QueryGranteeGrantsRequest],
    ["/cosmos.authz.v1beta1.QueryGrantsRequest", query_6.QueryGrantsRequest],
    ["/cosmos.authz.v1beta1.GenericAuthorization", authz_3.GenericAuthorization],
    ["/cosmos.authz.v1beta1.MsgGrant", tx_2.MsgGrant],
    ["/cosmos.authz.v1beta1.MsgExec", tx_3.MsgExec],
    ["/cosmos.authz.v1beta1.MsgRevokeResponse", tx_4.MsgRevokeResponse],
    ["/cosmos.authz.v1beta1.EventGrant", event_1.EventGrant],
    ["/cosmos.authz.v1beta1.Grant", authz_4.Grant],
    ["/cosmos.authz.v1beta1.MsgGrantResponse", tx_5.MsgGrantResponse],
    ["/cosmos.authz.v1beta1.MsgRevoke", tx_6.MsgRevoke],
    ["/cosmos.authz.v1beta1.EventRevoke", event_2.EventRevoke],
];
exports.msgTypes = msgTypes;
