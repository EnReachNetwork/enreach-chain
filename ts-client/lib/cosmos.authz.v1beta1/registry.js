"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const query_1 = require("./types/cosmos/authz/v1beta1/query");
const query_2 = require("./types/cosmos/authz/v1beta1/query");
const tx_1 = require("./types/cosmos/authz/v1beta1/tx");
const tx_2 = require("./types/cosmos/authz/v1beta1/tx");
const tx_3 = require("./types/cosmos/authz/v1beta1/tx");
const query_3 = require("./types/cosmos/authz/v1beta1/query");
const query_4 = require("./types/cosmos/authz/v1beta1/query");
const authz_1 = require("./types/cosmos/authz/v1beta1/authz");
const authz_2 = require("./types/cosmos/authz/v1beta1/authz");
const tx_4 = require("./types/cosmos/authz/v1beta1/tx");
const authz_3 = require("./types/cosmos/authz/v1beta1/authz");
const query_5 = require("./types/cosmos/authz/v1beta1/query");
const tx_5 = require("./types/cosmos/authz/v1beta1/tx");
const authz_4 = require("./types/cosmos/authz/v1beta1/authz");
const event_1 = require("./types/cosmos/authz/v1beta1/event");
const event_2 = require("./types/cosmos/authz/v1beta1/event");
const genesis_1 = require("./types/cosmos/authz/v1beta1/genesis");
const query_6 = require("./types/cosmos/authz/v1beta1/query");
const tx_6 = require("./types/cosmos/authz/v1beta1/tx");
const msgTypes = [
    ["/cosmos.authz.v1beta1.QueryGranterGrantsRequest", query_1.QueryGranterGrantsRequest],
    ["/cosmos.authz.v1beta1.QueryGranteeGrantsRequest", query_2.QueryGranteeGrantsRequest],
    ["/cosmos.authz.v1beta1.MsgExec", tx_1.MsgExec],
    ["/cosmos.authz.v1beta1.MsgGrantResponse", tx_2.MsgGrantResponse],
    ["/cosmos.authz.v1beta1.MsgExecResponse", tx_3.MsgExecResponse],
    ["/cosmos.authz.v1beta1.QueryGrantsRequest", query_3.QueryGrantsRequest],
    ["/cosmos.authz.v1beta1.QueryGranterGrantsResponse", query_4.QueryGranterGrantsResponse],
    ["/cosmos.authz.v1beta1.Grant", authz_1.Grant],
    ["/cosmos.authz.v1beta1.GenericAuthorization", authz_2.GenericAuthorization],
    ["/cosmos.authz.v1beta1.MsgRevoke", tx_4.MsgRevoke],
    ["/cosmos.authz.v1beta1.GrantAuthorization", authz_3.GrantAuthorization],
    ["/cosmos.authz.v1beta1.QueryGrantsResponse", query_5.QueryGrantsResponse],
    ["/cosmos.authz.v1beta1.MsgGrant", tx_5.MsgGrant],
    ["/cosmos.authz.v1beta1.GrantQueueItem", authz_4.GrantQueueItem],
    ["/cosmos.authz.v1beta1.EventGrant", event_1.EventGrant],
    ["/cosmos.authz.v1beta1.EventRevoke", event_2.EventRevoke],
    ["/cosmos.authz.v1beta1.GenesisState", genesis_1.GenesisState],
    ["/cosmos.authz.v1beta1.QueryGranteeGrantsResponse", query_6.QueryGranteeGrantsResponse],
    ["/cosmos.authz.v1beta1.MsgRevokeResponse", tx_6.MsgRevokeResponse],
];
exports.msgTypes = msgTypes;
