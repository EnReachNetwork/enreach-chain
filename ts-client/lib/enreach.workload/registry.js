"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const query_1 = require("./types/enreach/workload/query");
const tx_1 = require("./types/enreach/workload/tx");
const tx_2 = require("./types/enreach/workload/tx");
const tx_3 = require("./types/enreach/workload/tx");
const query_2 = require("./types/enreach/workload/query");
const params_1 = require("./types/enreach/workload/params");
const tx_4 = require("./types/enreach/workload/tx");
const tx_5 = require("./types/enreach/workload/tx");
const query_3 = require("./types/enreach/workload/query");
const workload_1 = require("./types/enreach/workload/workload");
const tx_6 = require("./types/enreach/workload/tx");
const tx_7 = require("./types/enreach/workload/tx");
const query_4 = require("./types/enreach/workload/query");
const query_5 = require("./types/enreach/workload/query");
const query_6 = require("./types/enreach/workload/query");
const genesis_1 = require("./types/enreach/workload/genesis");
const tx_8 = require("./types/enreach/workload/tx");
const msgTypes = [
    ["/enreach.workload.QueryAllWorkloadRequest", query_1.QueryAllWorkloadRequest],
    ["/enreach.workload.MsgUpdateParamsResponse", tx_1.MsgUpdateParamsResponse],
    ["/enreach.workload.MsgUpdateWorkloadResponse", tx_2.MsgUpdateWorkloadResponse],
    ["/enreach.workload.MsgCreateWorkloadResponse", tx_3.MsgCreateWorkloadResponse],
    ["/enreach.workload.QueryGetWorkloadRequest", query_2.QueryGetWorkloadRequest],
    ["/enreach.workload.Params", params_1.Params],
    ["/enreach.workload.MsgDeleteWorkload", tx_4.MsgDeleteWorkload],
    ["/enreach.workload.MsgUpdateWorkload", tx_5.MsgUpdateWorkload],
    ["/enreach.workload.QueryAllWorkloadResponse", query_3.QueryAllWorkloadResponse],
    ["/enreach.workload.Workload", workload_1.Workload],
    ["/enreach.workload.MsgCreateWorkload", tx_6.MsgCreateWorkload],
    ["/enreach.workload.MsgDeleteWorkloadResponse", tx_7.MsgDeleteWorkloadResponse],
    ["/enreach.workload.QueryParamsRequest", query_4.QueryParamsRequest],
    ["/enreach.workload.QueryParamsResponse", query_5.QueryParamsResponse],
    ["/enreach.workload.QueryGetWorkloadResponse", query_6.QueryGetWorkloadResponse],
    ["/enreach.workload.GenesisState", genesis_1.GenesisState],
    ["/enreach.workload.MsgUpdateParams", tx_8.MsgUpdateParams],
];
exports.msgTypes = msgTypes;
