"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const query_1 = require("./types/cosmos/feegrant/v1beta1/query");
const tx_1 = require("./types/cosmos/feegrant/v1beta1/tx");
const tx_2 = require("./types/cosmos/feegrant/v1beta1/tx");
const tx_3 = require("./types/cosmos/feegrant/v1beta1/tx");
const query_2 = require("./types/cosmos/feegrant/v1beta1/query");
const query_3 = require("./types/cosmos/feegrant/v1beta1/query");
const feegrant_1 = require("./types/cosmos/feegrant/v1beta1/feegrant");
const tx_4 = require("./types/cosmos/feegrant/v1beta1/tx");
const feegrant_2 = require("./types/cosmos/feegrant/v1beta1/feegrant");
const feegrant_3 = require("./types/cosmos/feegrant/v1beta1/feegrant");
const tx_5 = require("./types/cosmos/feegrant/v1beta1/tx");
const tx_6 = require("./types/cosmos/feegrant/v1beta1/tx");
const feegrant_4 = require("./types/cosmos/feegrant/v1beta1/feegrant");
const query_4 = require("./types/cosmos/feegrant/v1beta1/query");
const query_5 = require("./types/cosmos/feegrant/v1beta1/query");
const query_6 = require("./types/cosmos/feegrant/v1beta1/query");
const genesis_1 = require("./types/cosmos/feegrant/v1beta1/genesis");
const msgTypes = [
    ["/cosmos.feegrant.v1beta1.QueryAllowanceRequest", query_1.QueryAllowanceRequest],
    ["/cosmos.feegrant.v1beta1.MsgGrantAllowanceResponse", tx_1.MsgGrantAllowanceResponse],
    ["/cosmos.feegrant.v1beta1.MsgRevokeAllowanceResponse", tx_2.MsgRevokeAllowanceResponse],
    ["/cosmos.feegrant.v1beta1.MsgPruneAllowances", tx_3.MsgPruneAllowances],
    ["/cosmos.feegrant.v1beta1.QueryAllowancesResponse", query_2.QueryAllowancesResponse],
    ["/cosmos.feegrant.v1beta1.QueryAllowancesByGranterResponse", query_3.QueryAllowancesByGranterResponse],
    ["/cosmos.feegrant.v1beta1.PeriodicAllowance", feegrant_1.PeriodicAllowance],
    ["/cosmos.feegrant.v1beta1.MsgPruneAllowancesResponse", tx_4.MsgPruneAllowancesResponse],
    ["/cosmos.feegrant.v1beta1.BasicAllowance", feegrant_2.BasicAllowance],
    ["/cosmos.feegrant.v1beta1.Grant", feegrant_3.Grant],
    ["/cosmos.feegrant.v1beta1.MsgRevokeAllowance", tx_5.MsgRevokeAllowance],
    ["/cosmos.feegrant.v1beta1.MsgGrantAllowance", tx_6.MsgGrantAllowance],
    ["/cosmos.feegrant.v1beta1.AllowedMsgAllowance", feegrant_4.AllowedMsgAllowance],
    ["/cosmos.feegrant.v1beta1.QueryAllowanceResponse", query_4.QueryAllowanceResponse],
    ["/cosmos.feegrant.v1beta1.QueryAllowancesByGranterRequest", query_5.QueryAllowancesByGranterRequest],
    ["/cosmos.feegrant.v1beta1.QueryAllowancesRequest", query_6.QueryAllowancesRequest],
    ["/cosmos.feegrant.v1beta1.GenesisState", genesis_1.GenesisState],
];
exports.msgTypes = msgTypes;
