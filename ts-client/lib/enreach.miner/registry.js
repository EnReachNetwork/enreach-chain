"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const miner_1 = require("./types/enreach/miner/miner");
const tx_1 = require("./types/enreach/miner/tx");
const tx_2 = require("./types/enreach/miner/tx");
const tx_3 = require("./types/enreach/miner/tx");
const query_1 = require("./types/enreach/miner/query");
const query_2 = require("./types/enreach/miner/query");
const query_3 = require("./types/enreach/miner/query");
const query_4 = require("./types/enreach/miner/query");
const genesis_1 = require("./types/enreach/miner/genesis");
const tx_4 = require("./types/enreach/miner/tx");
const tx_5 = require("./types/enreach/miner/tx");
const tx_6 = require("./types/enreach/miner/tx");
const query_5 = require("./types/enreach/miner/query");
const params_1 = require("./types/enreach/miner/params");
const tx_7 = require("./types/enreach/miner/tx");
const tx_8 = require("./types/enreach/miner/tx");
const query_6 = require("./types/enreach/miner/query");
const msgTypes = [
    ["/enreach.miner.Miner", miner_1.Miner],
    ["/enreach.miner.MsgUpdateParams", tx_1.MsgUpdateParams],
    ["/enreach.miner.MsgCreateMinerResponse", tx_2.MsgCreateMinerResponse],
    ["/enreach.miner.MsgUpdateMinerResponse", tx_3.MsgUpdateMinerResponse],
    ["/enreach.miner.QueryParamsResponse", query_1.QueryParamsResponse],
    ["/enreach.miner.QueryGetMinerRequest", query_2.QueryGetMinerRequest],
    ["/enreach.miner.QueryGetMinerResponse", query_3.QueryGetMinerResponse],
    ["/enreach.miner.QueryParamsRequest", query_4.QueryParamsRequest],
    ["/enreach.miner.GenesisState", genesis_1.GenesisState],
    ["/enreach.miner.MsgUpdateMiner", tx_4.MsgUpdateMiner],
    ["/enreach.miner.MsgDeleteMiner", tx_5.MsgDeleteMiner],
    ["/enreach.miner.MsgDeleteMinerResponse", tx_6.MsgDeleteMinerResponse],
    ["/enreach.miner.QueryAllMinerRequest", query_5.QueryAllMinerRequest],
    ["/enreach.miner.Params", params_1.Params],
    ["/enreach.miner.MsgCreateMiner", tx_7.MsgCreateMiner],
    ["/enreach.miner.MsgUpdateParamsResponse", tx_8.MsgUpdateParamsResponse],
    ["/enreach.miner.QueryAllMinerResponse", query_6.QueryAllMinerResponse],
];
exports.msgTypes = msgTypes;
