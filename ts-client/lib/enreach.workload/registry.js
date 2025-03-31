"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const superior_1 = require("./types/enreach/workload/superior");
const tx_1 = require("./types/enreach/workload/tx");
const genesis_1 = require("./types/enreach/workload/genesis");
const query_1 = require("./types/enreach/workload/query");
const query_2 = require("./types/enreach/workload/query");
const query_3 = require("./types/enreach/workload/query");
const query_4 = require("./types/enreach/workload/query");
const query_5 = require("./types/enreach/workload/query");
const query_6 = require("./types/enreach/workload/query");
const tx_2 = require("./types/enreach/workload/tx");
const workreport_1 = require("./types/enreach/workload/workreport");
const params_1 = require("./types/enreach/workload/params");
const query_7 = require("./types/enreach/workload/query");
const query_8 = require("./types/enreach/workload/query");
const workreport_2 = require("./types/enreach/workload/workreport");
const workreport_3 = require("./types/enreach/workload/workreport");
const workreport_4 = require("./types/enreach/workload/workreport");
const tx_3 = require("./types/enreach/workload/tx");
const query_9 = require("./types/enreach/workload/query");
const query_10 = require("./types/enreach/workload/query");
const tx_4 = require("./types/enreach/workload/tx");
const workload_1 = require("./types/enreach/workload/workload");
const query_11 = require("./types/enreach/workload/query");
const query_12 = require("./types/enreach/workload/query");
const query_13 = require("./types/enreach/workload/query");
const query_14 = require("./types/enreach/workload/query");
const workload_2 = require("./types/enreach/workload/workload");
const query_15 = require("./types/enreach/workload/query");
const tx_5 = require("./types/enreach/workload/tx");
const workreport_5 = require("./types/enreach/workload/workreport");
const query_16 = require("./types/enreach/workload/query");
const query_17 = require("./types/enreach/workload/query");
const query_18 = require("./types/enreach/workload/query");
const query_19 = require("./types/enreach/workload/query");
const query_20 = require("./types/enreach/workload/query");
const query_21 = require("./types/enreach/workload/query");
const query_22 = require("./types/enreach/workload/query");
const tx_6 = require("./types/enreach/workload/tx");
const tx_7 = require("./types/enreach/workload/tx");
const tx_8 = require("./types/enreach/workload/tx");
const query_23 = require("./types/enreach/workload/query");
const query_24 = require("./types/enreach/workload/query");
const tx_9 = require("./types/enreach/workload/tx");
const query_25 = require("./types/enreach/workload/query");
const tx_10 = require("./types/enreach/workload/tx");
const query_26 = require("./types/enreach/workload/query");
const tx_11 = require("./types/enreach/workload/tx");
const tx_12 = require("./types/enreach/workload/tx");
const query_27 = require("./types/enreach/workload/query");
const query_28 = require("./types/enreach/workload/query");
const msgTypes = [
    ["/enreach.workload.Superior", superior_1.Superior],
    ["/enreach.workload.MsgUpdateHistoryEpochDataDepthResponse", tx_1.MsgUpdateHistoryEpochDataDepthResponse],
    ["/enreach.workload.GenesisState", genesis_1.GenesisState],
    ["/enreach.workload.QueryParamsRequest", query_1.QueryParamsRequest],
    ["/enreach.workload.QueryGetEpochProcessDataResponse", query_2.QueryGetEpochProcessDataResponse],
    ["/enreach.workload.QueryGetSuperiorResponse", query_3.QueryGetSuperiorResponse],
    ["/enreach.workload.QueryGetAllManagerWorkloadByEpochResponse", query_4.QueryGetAllManagerWorkloadByEpochResponse],
    ["/enreach.workload.QueryGetAllWorkreportByEpochRequest", query_5.QueryGetAllWorkreportByEpochRequest],
    ["/enreach.workload.QueryGetEpochProcessDataRequest", query_6.QueryGetEpochProcessDataRequest],
    ["/enreach.workload.MsgUpdateParamsResponse", tx_2.MsgUpdateParamsResponse],
    ["/enreach.workload.NodeScore", workreport_1.NodeScore],
    ["/enreach.workload.Params", params_1.Params],
    ["/enreach.workload.QueryGetCurrentEpochRequest", query_7.QueryGetCurrentEpochRequest],
    ["/enreach.workload.QueryGetNodeWorkloadResponse", query_8.QueryGetNodeWorkloadResponse],
    ["/enreach.workload.NodeScoreDB", workreport_2.NodeScoreDB],
    ["/enreach.workload.Workreport", workreport_3.Workreport],
    ["/enreach.workload.EpochProcessData", workreport_4.EpochProcessData],
    ["/enreach.workload.MsgUpdateParams", tx_3.MsgUpdateParams],
    ["/enreach.workload.QueryGetWorkreportProcessBatchSizeRequest", query_9.QueryGetWorkreportProcessBatchSizeRequest],
    ["/enreach.workload.QueryGetAllEpochProcessDataResponse", query_10.QueryGetAllEpochProcessDataResponse],
    ["/enreach.workload.MsgUpdateWorkreportProcessBatchSize", tx_4.MsgUpdateWorkreportProcessBatchSize],
    ["/enreach.workload.ManagerWorkload", workload_1.ManagerWorkload],
    ["/enreach.workload.QueryGetCurrentEpochResponse", query_11.QueryGetCurrentEpochResponse],
    ["/enreach.workload.QueryGetAllWorkreportByEpochResponse", query_12.QueryGetAllWorkreportByEpochResponse],
    ["/enreach.workload.QueryGetHistoryEpochDataDepthRequest", query_13.QueryGetHistoryEpochDataDepthRequest],
    ["/enreach.workload.QueryGetEpochLengthResponse", query_14.QueryGetEpochLengthResponse],
    ["/enreach.workload.NodeWorkload", workload_2.NodeWorkload],
    ["/enreach.workload.QueryGetWorkreportResponse", query_15.QueryGetWorkreportResponse],
    ["/enreach.workload.MsgCreateSuperiorResponse", tx_5.MsgCreateSuperiorResponse],
    ["/enreach.workload.ManagerNodeScoreMap", workreport_5.ManagerNodeScoreMap],
    ["/enreach.workload.QueryGetNodeWorkloadRequest", query_16.QueryGetNodeWorkloadRequest],
    ["/enreach.workload.QueryGetHistoryEpochDataDepthResponse", query_17.QueryGetHistoryEpochDataDepthResponse],
    ["/enreach.workload.QueryGetAllManagerWorkloadByEpochRequest", query_18.QueryGetAllManagerWorkloadByEpochRequest],
    ["/enreach.workload.QueryGetAllEpochProcessDataRequest", query_19.QueryGetAllEpochProcessDataRequest],
    ["/enreach.workload.QueryGetManagerWorkloadResponse", query_20.QueryGetManagerWorkloadResponse],
    ["/enreach.workload.QueryGetWorkreportRequest", query_21.QueryGetWorkreportRequest],
    ["/enreach.workload.QueryGetWorkreportProcessBatchSizeResponse", query_22.QueryGetWorkreportProcessBatchSizeResponse],
    ["/enreach.workload.MsgUpdateHistoryEpochDataDepth", tx_6.MsgUpdateHistoryEpochDataDepth],
    ["/enreach.workload.MsgCreateSuperior", tx_7.MsgCreateSuperior],
    ["/enreach.workload.MsgUpdateSuperiorResponse", tx_8.MsgUpdateSuperiorResponse],
    ["/enreach.workload.QueryGetEpochLengthRequest", query_23.QueryGetEpochLengthRequest],
    ["/enreach.workload.QueryGetManagerWorkloadRequest", query_24.QueryGetManagerWorkloadRequest],
    ["/enreach.workload.MsgUpdateWorkreportProcessBatchSizeResponse", tx_9.MsgUpdateWorkreportProcessBatchSizeResponse],
    ["/enreach.workload.QueryParamsResponse", query_25.QueryParamsResponse],
    ["/enreach.workload.MsgUpdateSuperior", tx_10.MsgUpdateSuperior],
    ["/enreach.workload.QueryGetAllNodeWorkloadByEpochRequest", query_26.QueryGetAllNodeWorkloadByEpochRequest],
    ["/enreach.workload.MsgSubmitWorkreports", tx_11.MsgSubmitWorkreports],
    ["/enreach.workload.MsgSubmitWorkreportsResponse", tx_12.MsgSubmitWorkreportsResponse],
    ["/enreach.workload.QueryGetAllNodeWorkloadByEpochResponse", query_27.QueryGetAllNodeWorkloadByEpochResponse],
    ["/enreach.workload.QueryGetSuperiorRequest", query_28.QueryGetSuperiorRequest],
];
exports.msgTypes = msgTypes;
