"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/cosmos/consensus/v1/tx");
const query_1 = require("./types/cosmos/consensus/v1/query");
const query_2 = require("./types/cosmos/consensus/v1/query");
const tx_2 = require("./types/cosmos/consensus/v1/tx");
const msgTypes = [
    ["/cosmos.consensus.v1.MsgUpdateParams", tx_1.MsgUpdateParams],
    ["/cosmos.consensus.v1.QueryParamsRequest", query_1.QueryParamsRequest],
    ["/cosmos.consensus.v1.QueryParamsResponse", query_2.QueryParamsResponse],
    ["/cosmos.consensus.v1.MsgUpdateParamsResponse", tx_2.MsgUpdateParamsResponse],
];
exports.msgTypes = msgTypes;
