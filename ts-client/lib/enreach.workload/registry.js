"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/enreach/workload/tx");
const params_1 = require("./types/enreach/workload/params");
const query_1 = require("./types/enreach/workload/query");
const query_2 = require("./types/enreach/workload/query");
const query_3 = require("./types/enreach/workload/query");
const tx_2 = require("./types/enreach/workload/tx");
const query_4 = require("./types/enreach/workload/query");
const workload_1 = require("./types/enreach/workload/workload");
const tx_3 = require("./types/enreach/workload/tx");
const tx_4 = require("./types/enreach/workload/tx");
const genesis_1 = require("./types/enreach/workload/genesis");
const query_5 = require("./types/enreach/workload/query");
const query_6 = require("./types/enreach/workload/query");
const msgTypes = [
    ["/enreach.workload.MsgUpdateParams", tx_1.MsgUpdateParams],
    ["/enreach.workload.Params", params_1.Params],
    ["/enreach.workload.QueryParamsResponse", query_1.QueryParamsResponse],
    ["/enreach.workload.QueryAllWorkloadResponse", query_2.QueryAllWorkloadResponse],
    ["/enreach.workload.QueryGetWorkloadResponse", query_3.QueryGetWorkloadResponse],
    ["/enreach.workload.MsgUpdateParamsResponse", tx_2.MsgUpdateParamsResponse],
    ["/enreach.workload.QueryAllWorkloadRequest", query_4.QueryAllWorkloadRequest],
    ["/enreach.workload.Workload", workload_1.Workload],
    ["/enreach.workload.MsgCreateWorkload", tx_3.MsgCreateWorkload],
    ["/enreach.workload.MsgCreateWorkloadResponse", tx_4.MsgCreateWorkloadResponse],
    ["/enreach.workload.GenesisState", genesis_1.GenesisState],
    ["/enreach.workload.QueryParamsRequest", query_5.QueryParamsRequest],
    ["/enreach.workload.QueryGetWorkloadRequest", query_6.QueryGetWorkloadRequest],
];
exports.msgTypes = msgTypes;
