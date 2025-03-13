"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const genesis_1 = require("./types/enreach/workload/genesis");
const query_1 = require("./types/enreach/workload/query");
const tx_1 = require("./types/enreach/workload/tx");
const params_1 = require("./types/enreach/workload/params");
const workload_1 = require("./types/enreach/workload/workload");
const tx_2 = require("./types/enreach/workload/tx");
const tx_3 = require("./types/enreach/workload/tx");
const tx_4 = require("./types/enreach/workload/tx");
const query_2 = require("./types/enreach/workload/query");
const query_3 = require("./types/enreach/workload/query");
const query_4 = require("./types/enreach/workload/query");
const query_5 = require("./types/enreach/workload/query");
const query_6 = require("./types/enreach/workload/query");
const msgTypes = [
    ["/enreach.workload.GenesisState", genesis_1.GenesisState],
    ["/enreach.workload.QueryParamsRequest", query_1.QueryParamsRequest],
    ["/enreach.workload.MsgCreateWorkloadResponse", tx_1.MsgCreateWorkloadResponse],
    ["/enreach.workload.Params", params_1.Params],
    ["/enreach.workload.Workload", workload_1.Workload],
    ["/enreach.workload.MsgCreateWorkload", tx_2.MsgCreateWorkload],
    ["/enreach.workload.MsgUpdateParams", tx_3.MsgUpdateParams],
    ["/enreach.workload.MsgUpdateParamsResponse", tx_4.MsgUpdateParamsResponse],
    ["/enreach.workload.QueryParamsResponse", query_2.QueryParamsResponse],
    ["/enreach.workload.QueryGetWorkloadRequest", query_3.QueryGetWorkloadRequest],
    ["/enreach.workload.QueryGetWorkloadResponse", query_4.QueryGetWorkloadResponse],
    ["/enreach.workload.QueryAllWorkloadRequest", query_5.QueryAllWorkloadRequest],
    ["/enreach.workload.QueryAllWorkloadResponse", query_6.QueryAllWorkloadResponse],
];
exports.msgTypes = msgTypes;
