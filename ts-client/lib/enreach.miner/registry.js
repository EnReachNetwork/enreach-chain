"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/enreach/miner/tx");
const tx_2 = require("./types/enreach/miner/tx");
const miner_1 = require("./types/enreach/miner/miner");
const query_1 = require("./types/enreach/miner/query");
const query_2 = require("./types/enreach/miner/query");
const genesis_1 = require("./types/enreach/miner/genesis");
const tx_3 = require("./types/enreach/miner/tx");
const tx_4 = require("./types/enreach/miner/tx");
const query_3 = require("./types/enreach/miner/query");
const params_1 = require("./types/enreach/miner/params");
const tx_5 = require("./types/enreach/miner/tx");
const tx_6 = require("./types/enreach/miner/tx");
const tx_7 = require("./types/enreach/miner/tx");
const query_4 = require("./types/enreach/miner/query");
const query_5 = require("./types/enreach/miner/query");
const tx_8 = require("./types/enreach/miner/tx");
const query_6 = require("./types/enreach/miner/query");
const msgTypes = [
    ["/enreach.miner.MsgUpdateMiner", tx_1.MsgUpdateMiner],
    ["/enreach.miner.MsgUpdateParamsResponse", tx_2.MsgUpdateParamsResponse],
    ["/enreach.miner.Miner", miner_1.Miner],
    ["/enreach.miner.QueryParamsResponse", query_1.QueryParamsResponse],
    ["/enreach.miner.QueryAllMinerRequest", query_2.QueryAllMinerRequest],
    ["/enreach.miner.GenesisState", genesis_1.GenesisState],
    ["/enreach.miner.MsgCreateMinerResponse", tx_3.MsgCreateMinerResponse],
    ["/enreach.miner.MsgUpdateMinerResponse", tx_4.MsgUpdateMinerResponse],
    ["/enreach.miner.QueryParamsRequest", query_3.QueryParamsRequest],
    ["/enreach.miner.Params", params_1.Params],
    ["/enreach.miner.MsgCreateMiner", tx_5.MsgCreateMiner],
    ["/enreach.miner.MsgDeleteMiner", tx_6.MsgDeleteMiner],
    ["/enreach.miner.MsgDeleteMinerResponse", tx_7.MsgDeleteMinerResponse],
    ["/enreach.miner.QueryGetMinerRequest", query_4.QueryGetMinerRequest],
    ["/enreach.miner.QueryGetMinerResponse", query_5.QueryGetMinerResponse],
    ["/enreach.miner.MsgUpdateParams", tx_8.MsgUpdateParams],
    ["/enreach.miner.QueryAllMinerResponse", query_6.QueryAllMinerResponse],
];
exports.msgTypes = msgTypes;
