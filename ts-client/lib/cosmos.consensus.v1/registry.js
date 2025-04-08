"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const query_1 = require("./types/cosmos/consensus/v1/query");
const tx_1 = require("./types/cosmos/consensus/v1/tx");
const tx_2 = require("./types/cosmos/consensus/v1/tx");
const query_2 = require("./types/cosmos/consensus/v1/query");
const msgTypes = [
    ["/cosmos.consensus.v1.QueryParamsResponse", query_1.QueryParamsResponse],
    ["/cosmos.consensus.v1.MsgUpdateParamsResponse", tx_1.MsgUpdateParamsResponse],
    ["/cosmos.consensus.v1.MsgUpdateParams", tx_2.MsgUpdateParams],
    ["/cosmos.consensus.v1.QueryParamsRequest", query_2.QueryParamsRequest],
];
exports.msgTypes = msgTypes;
