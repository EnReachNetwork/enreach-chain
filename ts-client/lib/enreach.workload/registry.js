"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/enreach/workload/tx");
const genesis_1 = require("./types/enreach/workload/genesis");
const query_1 = require("./types/enreach/workload/query");
const query_2 = require("./types/enreach/workload/query");
const tx_2 = require("./types/enreach/workload/tx");
const workreport_1 = require("./types/enreach/workload/workreport");
const query_3 = require("./types/enreach/workload/query");
const workreport_2 = require("./types/enreach/workload/workreport");
const query_4 = require("./types/enreach/workload/query");
const query_5 = require("./types/enreach/workload/query");
const tx_3 = require("./types/enreach/workload/tx");
const params_1 = require("./types/enreach/workload/params");
const tx_4 = require("./types/enreach/workload/tx");
const query_6 = require("./types/enreach/workload/query");
const query_7 = require("./types/enreach/workload/query");
const query_8 = require("./types/enreach/workload/query");
const query_9 = require("./types/enreach/workload/query");
const workreport_3 = require("./types/enreach/workload/workreport");
const workload_1 = require("./types/enreach/workload/workload");
const query_10 = require("./types/enreach/workload/query");
const workreport_4 = require("./types/enreach/workload/workreport");
const msgTypes = [
    ["/enreach.workload.MsgUpdateParams", tx_1.MsgUpdateParams],
    ["/enreach.workload.GenesisState", genesis_1.GenesisState],
    ["/enreach.workload.QueryAllWorkloadResponse", query_1.QueryAllWorkloadResponse],
    ["/enreach.workload.QueryGetWorkreportRequest", query_2.QueryGetWorkreportRequest],
    ["/enreach.workload.MsgSubmitWorkreports", tx_2.MsgSubmitWorkreports],
    ["/enreach.workload.Workreport", workreport_1.Workreport],
    ["/enreach.workload.QueryAllWorkloadRequest", query_3.QueryAllWorkloadRequest],
    ["/enreach.workload.NodeScore", workreport_2.NodeScore],
    ["/enreach.workload.QueryGetWorkreportResponse", query_4.QueryGetWorkreportResponse],
    ["/enreach.workload.QueryGetAllWorkreportByEpochRequest", query_5.QueryGetAllWorkreportByEpochRequest],
    ["/enreach.workload.MsgSubmitWorkreportsResponse", tx_3.MsgSubmitWorkreportsResponse],
    ["/enreach.workload.Params", params_1.Params],
    ["/enreach.workload.MsgUpdateParamsResponse", tx_4.MsgUpdateParamsResponse],
    ["/enreach.workload.QueryGetWorkloadResponse", query_6.QueryGetWorkloadResponse],
    ["/enreach.workload.QueryParamsRequest", query_7.QueryParamsRequest],
    ["/enreach.workload.QueryParamsResponse", query_8.QueryParamsResponse],
    ["/enreach.workload.QueryGetAllWorkreportByEpochResponse", query_9.QueryGetAllWorkreportByEpochResponse],
    ["/enreach.workload.ManagerNodeScoreMap", workreport_3.ManagerNodeScoreMap],
    ["/enreach.workload.Workload", workload_1.Workload],
    ["/enreach.workload.QueryGetWorkloadRequest", query_10.QueryGetWorkloadRequest],
    ["/enreach.workload.NodeScoreDB", workreport_4.NodeScoreDB],
];
exports.msgTypes = msgTypes;
