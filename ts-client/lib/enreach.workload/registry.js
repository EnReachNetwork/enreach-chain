"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const query_1 = require("./types/enreach/workload/query");
const query_2 = require("./types/enreach/workload/query");
const params_1 = require("./types/enreach/workload/params");
const query_3 = require("./types/enreach/workload/query");
const tx_1 = require("./types/enreach/workload/tx");
const tx_2 = require("./types/enreach/workload/tx");
const query_4 = require("./types/enreach/workload/query");
const tx_3 = require("./types/enreach/workload/tx");
const tx_4 = require("./types/enreach/workload/tx");
const genesis_1 = require("./types/enreach/workload/genesis");
const tx_5 = require("./types/enreach/workload/tx");
const query_5 = require("./types/enreach/workload/query");
const query_6 = require("./types/enreach/workload/query");
const tx_6 = require("./types/enreach/workload/tx");
const tx_7 = require("./types/enreach/workload/tx");
const tx_8 = require("./types/enreach/workload/tx");
const workload_1 = require("./types/enreach/workload/workload");
const msgTypes = [
    ["/enreach.workload.QueryGetWorkloadRequest", query_1.QueryGetWorkloadRequest],
    ["/enreach.workload.QueryGetWorkloadResponse", query_2.QueryGetWorkloadResponse],
    ["/enreach.workload.Params", params_1.Params],
    ["/enreach.workload.QueryParamsRequest", query_3.QueryParamsRequest],
    ["/enreach.workload.MsgUpdateWorkload", tx_1.MsgUpdateWorkload],
    ["/enreach.workload.MsgUpdateParams", tx_2.MsgUpdateParams],
    ["/enreach.workload.QueryParamsResponse", query_4.QueryParamsResponse],
    ["/enreach.workload.MsgUpdateParamsResponse", tx_3.MsgUpdateParamsResponse],
    ["/enreach.workload.MsgUpdateWorkloadResponse", tx_4.MsgUpdateWorkloadResponse],
    ["/enreach.workload.GenesisState", genesis_1.GenesisState],
    ["/enreach.workload.MsgCreateWorkload", tx_5.MsgCreateWorkload],
    ["/enreach.workload.QueryAllWorkloadRequest", query_5.QueryAllWorkloadRequest],
    ["/enreach.workload.QueryAllWorkloadResponse", query_6.QueryAllWorkloadResponse],
    ["/enreach.workload.MsgCreateWorkloadResponse", tx_6.MsgCreateWorkloadResponse],
    ["/enreach.workload.MsgDeleteWorkloadResponse", tx_7.MsgDeleteWorkloadResponse],
    ["/enreach.workload.MsgDeleteWorkload", tx_8.MsgDeleteWorkload],
    ["/enreach.workload.Workload", workload_1.Workload],
];
exports.msgTypes = msgTypes;
