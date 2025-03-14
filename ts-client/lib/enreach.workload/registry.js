"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/enreach/workload/tx");
const query_1 = require("./types/enreach/workload/query");
const tx_2 = require("./types/enreach/workload/tx");
const genesis_1 = require("./types/enreach/workload/genesis");
const query_2 = require("./types/enreach/workload/query");
const tx_3 = require("./types/enreach/workload/tx");
const query_3 = require("./types/enreach/workload/query");
const query_4 = require("./types/enreach/workload/query");
const query_5 = require("./types/enreach/workload/query");
const workload_1 = require("./types/enreach/workload/workload");
const tx_4 = require("./types/enreach/workload/tx");
const query_6 = require("./types/enreach/workload/query");
const params_1 = require("./types/enreach/workload/params");
const msgTypes = [
    ["/enreach.workload.MsgUpdateParams", tx_1.MsgUpdateParams],
    ["/enreach.workload.QueryParamsRequest", query_1.QueryParamsRequest],
    ["/enreach.workload.MsgUpdateParamsResponse", tx_2.MsgUpdateParamsResponse],
    ["/enreach.workload.GenesisState", genesis_1.GenesisState],
    ["/enreach.workload.QueryAllWorkloadResponse", query_2.QueryAllWorkloadResponse],
    ["/enreach.workload.MsgCreateWorkloadResponse", tx_3.MsgCreateWorkloadResponse],
    ["/enreach.workload.QueryAllWorkloadRequest", query_3.QueryAllWorkloadRequest],
    ["/enreach.workload.QueryParamsResponse", query_4.QueryParamsResponse],
    ["/enreach.workload.QueryGetWorkloadResponse", query_5.QueryGetWorkloadResponse],
    ["/enreach.workload.Workload", workload_1.Workload],
    ["/enreach.workload.MsgCreateWorkload", tx_4.MsgCreateWorkload],
    ["/enreach.workload.QueryGetWorkloadRequest", query_6.QueryGetWorkloadRequest],
    ["/enreach.workload.Params", params_1.Params],
];
exports.msgTypes = msgTypes;
