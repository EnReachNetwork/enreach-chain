"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const query_1 = require("./types/enreach/workload/query");
const workreport_1 = require("./types/enreach/workload/workreport");
const workreport_2 = require("./types/enreach/workload/workreport");
const workload_1 = require("./types/enreach/workload/workload");
const query_2 = require("./types/enreach/workload/query");
const workreport_3 = require("./types/enreach/workload/workreport");
const tx_1 = require("./types/enreach/workload/tx");
const tx_2 = require("./types/enreach/workload/tx");
const query_3 = require("./types/enreach/workload/query");
const query_4 = require("./types/enreach/workload/query");
const workreport_4 = require("./types/enreach/workload/workreport");
const genesis_1 = require("./types/enreach/workload/genesis");
const params_1 = require("./types/enreach/workload/params");
const query_5 = require("./types/enreach/workload/query");
const query_6 = require("./types/enreach/workload/query");
const query_7 = require("./types/enreach/workload/query");
const tx_3 = require("./types/enreach/workload/tx");
const query_8 = require("./types/enreach/workload/query");
const query_9 = require("./types/enreach/workload/query");
const query_10 = require("./types/enreach/workload/query");
const tx_4 = require("./types/enreach/workload/tx");
const query_11 = require("./types/enreach/workload/query");
const query_12 = require("./types/enreach/workload/query");
const query_13 = require("./types/enreach/workload/query");
const query_14 = require("./types/enreach/workload/query");
const msgTypes = [
    ["/enreach.workload.QueryGetEpochLengthResponse", query_1.QueryGetEpochLengthResponse],
    ["/enreach.workload.ManagerNodeScoreMap", workreport_1.ManagerNodeScoreMap],
    ["/enreach.workload.Workreport", workreport_2.Workreport],
    ["/enreach.workload.Workload", workload_1.Workload],
    ["/enreach.workload.QueryGetCurrentEpochRequest", query_2.QueryGetCurrentEpochRequest],
    ["/enreach.workload.NodeScore", workreport_3.NodeScore],
    ["/enreach.workload.MsgUpdateParamsResponse", tx_1.MsgUpdateParamsResponse],
    ["/enreach.workload.MsgSubmitWorkreportsResponse", tx_2.MsgSubmitWorkreportsResponse],
    ["/enreach.workload.QueryGetAllWorkreportByEpochRequest", query_3.QueryGetAllWorkreportByEpochRequest],
    ["/enreach.workload.QueryAllWorkloadRequest", query_4.QueryAllWorkloadRequest],
    ["/enreach.workload.NodeScoreDB", workreport_4.NodeScoreDB],
    ["/enreach.workload.GenesisState", genesis_1.GenesisState],
    ["/enreach.workload.Params", params_1.Params],
    ["/enreach.workload.QueryParamsRequest", query_5.QueryParamsRequest],
    ["/enreach.workload.QueryGetEpochLengthRequest", query_6.QueryGetEpochLengthRequest],
    ["/enreach.workload.QueryGetWorkloadRequest", query_7.QueryGetWorkloadRequest],
    ["/enreach.workload.MsgUpdateParams", tx_3.MsgUpdateParams],
    ["/enreach.workload.QueryGetCurrentEpochResponse", query_8.QueryGetCurrentEpochResponse],
    ["/enreach.workload.QueryGetWorkreportRequest", query_9.QueryGetWorkreportRequest],
    ["/enreach.workload.QueryGetWorkreportResponse", query_10.QueryGetWorkreportResponse],
    ["/enreach.workload.MsgSubmitWorkreports", tx_4.MsgSubmitWorkreports],
    ["/enreach.workload.QueryParamsResponse", query_11.QueryParamsResponse],
    ["/enreach.workload.QueryGetWorkloadResponse", query_12.QueryGetWorkloadResponse],
    ["/enreach.workload.QueryAllWorkloadResponse", query_13.QueryAllWorkloadResponse],
    ["/enreach.workload.QueryGetAllWorkreportByEpochResponse", query_14.QueryGetAllWorkreportByEpochResponse],
];
exports.msgTypes = msgTypes;
