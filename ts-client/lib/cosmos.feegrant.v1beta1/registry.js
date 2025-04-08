"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/cosmos/feegrant/v1beta1/tx");
const query_1 = require("./types/cosmos/feegrant/v1beta1/query");
const query_2 = require("./types/cosmos/feegrant/v1beta1/query");
const query_3 = require("./types/cosmos/feegrant/v1beta1/query");
const query_4 = require("./types/cosmos/feegrant/v1beta1/query");
const tx_2 = require("./types/cosmos/feegrant/v1beta1/tx");
const query_5 = require("./types/cosmos/feegrant/v1beta1/query");
const tx_3 = require("./types/cosmos/feegrant/v1beta1/tx");
const tx_4 = require("./types/cosmos/feegrant/v1beta1/tx");
const tx_5 = require("./types/cosmos/feegrant/v1beta1/tx");
const feegrant_1 = require("./types/cosmos/feegrant/v1beta1/feegrant");
const feegrant_2 = require("./types/cosmos/feegrant/v1beta1/feegrant");
const feegrant_3 = require("./types/cosmos/feegrant/v1beta1/feegrant");
const genesis_1 = require("./types/cosmos/feegrant/v1beta1/genesis");
const query_6 = require("./types/cosmos/feegrant/v1beta1/query");
const tx_6 = require("./types/cosmos/feegrant/v1beta1/tx");
const feegrant_4 = require("./types/cosmos/feegrant/v1beta1/feegrant");
const msgTypes = [
    ["/cosmos.feegrant.v1beta1.MsgPruneAllowances", tx_1.MsgPruneAllowances],
    ["/cosmos.feegrant.v1beta1.QueryAllowanceResponse", query_1.QueryAllowanceResponse],
    ["/cosmos.feegrant.v1beta1.QueryAllowancesRequest", query_2.QueryAllowancesRequest],
    ["/cosmos.feegrant.v1beta1.QueryAllowancesResponse", query_3.QueryAllowancesResponse],
    ["/cosmos.feegrant.v1beta1.QueryAllowancesByGranterResponse", query_4.QueryAllowancesByGranterResponse],
    ["/cosmos.feegrant.v1beta1.MsgRevokeAllowance", tx_2.MsgRevokeAllowance],
    ["/cosmos.feegrant.v1beta1.QueryAllowanceRequest", query_5.QueryAllowanceRequest],
    ["/cosmos.feegrant.v1beta1.MsgGrantAllowance", tx_3.MsgGrantAllowance],
    ["/cosmos.feegrant.v1beta1.MsgGrantAllowanceResponse", tx_4.MsgGrantAllowanceResponse],
    ["/cosmos.feegrant.v1beta1.MsgPruneAllowancesResponse", tx_5.MsgPruneAllowancesResponse],
    ["/cosmos.feegrant.v1beta1.BasicAllowance", feegrant_1.BasicAllowance],
    ["/cosmos.feegrant.v1beta1.PeriodicAllowance", feegrant_2.PeriodicAllowance],
    ["/cosmos.feegrant.v1beta1.AllowedMsgAllowance", feegrant_3.AllowedMsgAllowance],
    ["/cosmos.feegrant.v1beta1.GenesisState", genesis_1.GenesisState],
    ["/cosmos.feegrant.v1beta1.QueryAllowancesByGranterRequest", query_6.QueryAllowancesByGranterRequest],
    ["/cosmos.feegrant.v1beta1.MsgRevokeAllowanceResponse", tx_6.MsgRevokeAllowanceResponse],
    ["/cosmos.feegrant.v1beta1.Grant", feegrant_4.Grant],
];
exports.msgTypes = msgTypes;
