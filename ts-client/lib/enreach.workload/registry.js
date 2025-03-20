"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const workload_1 = require("./types/enreach/workload/workload");
const query_1 = require("./types/enreach/workload/query");
const query_2 = require("./types/enreach/workload/query");
const query_3 = require("./types/enreach/workload/query");
const tx_1 = require("./types/enreach/workload/tx");
const params_1 = require("./types/enreach/workload/params");
const query_4 = require("./types/enreach/workload/query");
const genesis_1 = require("./types/enreach/workload/genesis");
const query_5 = require("./types/enreach/workload/query");
const tx_2 = require("./types/enreach/workload/tx");
const tx_3 = require("./types/enreach/workload/tx");
const query_6 = require("./types/enreach/workload/query");
const tx_4 = require("./types/enreach/workload/tx");
const msgTypes = [
    ["/enreach.workload.Workload", workload_1.Workload],
    ["/enreach.workload.QueryParamsRequest", query_1.QueryParamsRequest],
    ["/enreach.workload.QueryGetWorkloadResponse", query_2.QueryGetWorkloadResponse],
    ["/enreach.workload.QueryAllWorkloadRequest", query_3.QueryAllWorkloadRequest],
    ["/enreach.workload.MsgUpdateParamsResponse", tx_1.MsgUpdateParamsResponse],
    ["/enreach.workload.Params", params_1.Params],
    ["/enreach.workload.QueryParamsResponse", query_4.QueryParamsResponse],
    ["/enreach.workload.GenesisState", genesis_1.GenesisState],
    ["/enreach.workload.QueryGetWorkloadRequest", query_5.QueryGetWorkloadRequest],
    ["/enreach.workload.MsgUpdateParams", tx_2.MsgUpdateParams],
    ["/enreach.workload.MsgCreateWorkload", tx_3.MsgCreateWorkload],
    ["/enreach.workload.QueryAllWorkloadResponse", query_6.QueryAllWorkloadResponse],
    ["/enreach.workload.MsgCreateWorkloadResponse", tx_4.MsgCreateWorkloadResponse],
];
exports.msgTypes = msgTypes;
