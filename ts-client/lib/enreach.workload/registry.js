"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const query_1 = require("./types/enreach/workload/query");
const query_2 = require("./types/enreach/workload/query");
const query_3 = require("./types/enreach/workload/query");
const workload_1 = require("./types/enreach/workload/workload");
const reputationpoint_1 = require("./types/enreach/workload/reputationpoint");
const tx_1 = require("./types/enreach/workload/tx");
const tx_2 = require("./types/enreach/workload/tx");
const tx_3 = require("./types/enreach/workload/tx");
const workreport_1 = require("./types/enreach/workload/workreport");
const workreport_2 = require("./types/enreach/workload/workreport");
const query_4 = require("./types/enreach/workload/query");
const genesis_1 = require("./types/enreach/workload/genesis");
const query_5 = require("./types/enreach/workload/query");
const workreport_3 = require("./types/enreach/workload/workreport");
const workreport_4 = require("./types/enreach/workload/workreport");
const query_6 = require("./types/enreach/workload/query");
const query_7 = require("./types/enreach/workload/query");
const query_8 = require("./types/enreach/workload/query");
const tx_4 = require("./types/enreach/workload/tx");
const reputationpoint_2 = require("./types/enreach/workload/reputationpoint");
const workload_2 = require("./types/enreach/workload/workload");
const tx_5 = require("./types/enreach/workload/tx");
const workreport_5 = require("./types/enreach/workload/workreport");
const query_9 = require("./types/enreach/workload/query");
const query_10 = require("./types/enreach/workload/query");
const query_11 = require("./types/enreach/workload/query");
const reputationpoint_3 = require("./types/enreach/workload/reputationpoint");
const query_12 = require("./types/enreach/workload/query");
const query_13 = require("./types/enreach/workload/query");
const query_14 = require("./types/enreach/workload/query");
const superior_1 = require("./types/enreach/workload/superior");
const query_15 = require("./types/enreach/workload/query");
const query_16 = require("./types/enreach/workload/query");
const query_17 = require("./types/enreach/workload/query");
const workload_3 = require("./types/enreach/workload/workload");
const query_18 = require("./types/enreach/workload/query");
const query_19 = require("./types/enreach/workload/query");
const tx_6 = require("./types/enreach/workload/tx");
const tx_7 = require("./types/enreach/workload/tx");
const query_20 = require("./types/enreach/workload/query");
const query_21 = require("./types/enreach/workload/query");
const query_22 = require("./types/enreach/workload/query");
const query_23 = require("./types/enreach/workload/query");
const query_24 = require("./types/enreach/workload/query");
const query_25 = require("./types/enreach/workload/query");
const query_26 = require("./types/enreach/workload/query");
const query_27 = require("./types/enreach/workload/query");
const query_28 = require("./types/enreach/workload/query");
const query_29 = require("./types/enreach/workload/query");
const reputationpoint_4 = require("./types/enreach/workload/reputationpoint");
const epoch_info_1 = require("./types/enreach/workload/epoch_info");
const query_30 = require("./types/enreach/workload/query");
const query_31 = require("./types/enreach/workload/query");
const query_32 = require("./types/enreach/workload/query");
const query_33 = require("./types/enreach/workload/query");
const query_34 = require("./types/enreach/workload/query");
const query_35 = require("./types/enreach/workload/query");
const reputationpoint_5 = require("./types/enreach/workload/reputationpoint");
const query_36 = require("./types/enreach/workload/query");
const query_37 = require("./types/enreach/workload/query");
const query_38 = require("./types/enreach/workload/query");
const query_39 = require("./types/enreach/workload/query");
const query_40 = require("./types/enreach/workload/query");
const tx_8 = require("./types/enreach/workload/tx");
const tx_9 = require("./types/enreach/workload/tx");
const query_41 = require("./types/enreach/workload/query");
const query_42 = require("./types/enreach/workload/query");
const query_43 = require("./types/enreach/workload/query");
const reputationpoint_6 = require("./types/enreach/workload/reputationpoint");
const tx_10 = require("./types/enreach/workload/tx");
const tx_11 = require("./types/enreach/workload/tx");
const query_44 = require("./types/enreach/workload/query");
const query_45 = require("./types/enreach/workload/query");
const query_46 = require("./types/enreach/workload/query");
const query_47 = require("./types/enreach/workload/query");
const query_48 = require("./types/enreach/workload/query");
const tx_12 = require("./types/enreach/workload/tx");
const query_49 = require("./types/enreach/workload/query");
const reputationpoint_7 = require("./types/enreach/workload/reputationpoint");
const tx_13 = require("./types/enreach/workload/tx");
const tx_14 = require("./types/enreach/workload/tx");
const query_50 = require("./types/enreach/workload/query");
const query_51 = require("./types/enreach/workload/query");
const query_52 = require("./types/enreach/workload/query");
const query_53 = require("./types/enreach/workload/query");
const params_1 = require("./types/enreach/workload/params");
const query_54 = require("./types/enreach/workload/query");
const query_55 = require("./types/enreach/workload/query");
const query_56 = require("./types/enreach/workload/query");
const query_57 = require("./types/enreach/workload/query");
const query_58 = require("./types/enreach/workload/query");
const msgTypes = [
    ["/enreach.workload.QueryGetAllManagerWRWorkloadByEpochRequest", query_1.QueryGetAllManagerWRWorkloadByEpochRequest],
    ["/enreach.workload.QueryGetSuperiorResponse", query_2.QueryGetSuperiorResponse],
    ["/enreach.workload.QueryGetReputationPointRequest", query_3.QueryGetReputationPointRequest],
    ["/enreach.workload.ManagerWRWorkload", workload_1.ManagerWRWorkload],
    ["/enreach.workload.ReputationPointChangeRawDataMapDB", reputationpoint_1.ReputationPointChangeRawDataMapDB],
    ["/enreach.workload.MsgSubmitWorkreportsResponse", tx_1.MsgSubmitWorkreportsResponse],
    ["/enreach.workload.MsgCreateSuperiorResponse", tx_2.MsgCreateSuperiorResponse],
    ["/enreach.workload.MsgSubmitReputationPointChangeDataResponse", tx_3.MsgSubmitReputationPointChangeDataResponse],
    ["/enreach.workload.NodeScore", workreport_1.NodeScore],
    ["/enreach.workload.NodeScoreDB", workreport_2.NodeScoreDB],
    ["/enreach.workload.QueryParamsResponse", query_4.QueryParamsResponse],
    ["/enreach.workload.GenesisState", genesis_1.GenesisState],
    ["/enreach.workload.QueryGetCurrentEpochResponse", query_5.QueryGetCurrentEpochResponse],
    ["/enreach.workload.ManagerNodeScoreMap", workreport_3.ManagerNodeScoreMap],
    ["/enreach.workload.Workreport", workreport_4.Workreport],
    ["/enreach.workload.QueryGetCurrentEpochRequest", query_6.QueryGetCurrentEpochRequest],
    ["/enreach.workload.QueryGetManagerWRWorkloadRequest", query_7.QueryGetManagerWRWorkloadRequest],
    ["/enreach.workload.QueryGetWorkreportProcessBatchSizeResponse", query_8.QueryGetWorkreportProcessBatchSizeResponse],
    ["/enreach.workload.MsgUpdateWorkreportProcessBatchSizeResponse", tx_4.MsgUpdateWorkreportProcessBatchSizeResponse],
    ["/enreach.workload.EraProcessData", reputationpoint_2.EraProcessData],
    ["/enreach.workload.NodeWorkload", workload_2.NodeWorkload],
    ["/enreach.workload.MsgSubmitReputationPointChangeData", tx_5.MsgSubmitReputationPointChangeData],
    ["/enreach.workload.EpochProcessData", workreport_5.EpochProcessData],
    ["/enreach.workload.QueryGetPendingNextEpochResponse", query_9.QueryGetPendingNextEpochResponse],
    ["/enreach.workload.QueryGetHistoryEpochRequest", query_10.QueryGetHistoryEpochRequest],
    ["/enreach.workload.QueryGetManagerRPWorkloadResponse", query_11.QueryGetManagerRPWorkloadResponse],
    ["/enreach.workload.ReputationPointChangeData", reputationpoint_3.ReputationPointChangeData],
    ["/enreach.workload.QueryGetWorkreportResponse", query_12.QueryGetWorkreportResponse],
    ["/enreach.workload.QueryGetWorkreportProcessBatchSizeRequest", query_13.QueryGetWorkreportProcessBatchSizeRequest],
    ["/enreach.workload.QueryGetAllEpochProcessDataResponse", query_14.QueryGetAllEpochProcessDataResponse],
    ["/enreach.workload.Superior", superior_1.Superior],
    ["/enreach.workload.QueryGetAllManagerRPWorkloadByEraRequest", query_15.QueryGetAllManagerRPWorkloadByEraRequest],
    ["/enreach.workload.QueryGetAllManagerRPWorkloadByEraResponse", query_16.QueryGetAllManagerRPWorkloadByEraResponse],
    ["/enreach.workload.QueryGetHistoryEpochResponse", query_17.QueryGetHistoryEpochResponse],
    ["/enreach.workload.ManagerRPWorkload", workload_3.ManagerRPWorkload],
    ["/enreach.workload.QueryGetCurrentEraResponse", query_18.QueryGetCurrentEraResponse],
    ["/enreach.workload.QueryGetReputationDeltaPointResponse", query_19.QueryGetReputationDeltaPointResponse],
    ["/enreach.workload.MsgUpdateWorkreportProcessBatchSize", tx_6.MsgUpdateWorkreportProcessBatchSize],
    ["/enreach.workload.MsgUpdateHistoryEpochDataDepth", tx_7.MsgUpdateHistoryEpochDataDepth],
    ["/enreach.workload.QueryGetEpochLengthRequest", query_20.QueryGetEpochLengthRequest],
    ["/enreach.workload.QueryGetEpochProcessDataResponse", query_21.QueryGetEpochProcessDataResponse],
    ["/enreach.workload.QueryGetSuperiorRequest", query_22.QueryGetSuperiorRequest],
    ["/enreach.workload.QueryGetNodeWorkloadResponse", query_23.QueryGetNodeWorkloadResponse],
    ["/enreach.workload.QueryGetNodeWorkloadRequest", query_24.QueryGetNodeWorkloadRequest],
    ["/enreach.workload.QueryGetAllNodeWorkloadByEpochRequest", query_25.QueryGetAllNodeWorkloadByEpochRequest],
    ["/enreach.workload.QueryGetManagerWRWorkloadResponse", query_26.QueryGetManagerWRWorkloadResponse],
    ["/enreach.workload.QueryGetAllReputationDeltaPointByEraRequest", query_27.QueryGetAllReputationDeltaPointByEraRequest],
    ["/enreach.workload.QueryGetReputationPointResponse", query_28.QueryGetReputationPointResponse],
    ["/enreach.workload.QueryGetEraProcessDataResponse", query_29.QueryGetEraProcessDataResponse],
    ["/enreach.workload.ReputationPointChangeRawData", reputationpoint_4.ReputationPointChangeRawData],
    ["/enreach.workload.EpochInfo", epoch_info_1.EpochInfo],
    ["/enreach.workload.QueryParamsRequest", query_30.QueryParamsRequest],
    ["/enreach.workload.QueryGetEpochLengthResponse", query_31.QueryGetEpochLengthResponse],
    ["/enreach.workload.QueryGetAllHistoryEpochRequest", query_32.QueryGetAllHistoryEpochRequest],
    ["/enreach.workload.QueryGetEraLengthRequest", query_33.QueryGetEraLengthRequest],
    ["/enreach.workload.QueryGetEraLengthResponse", query_34.QueryGetEraLengthResponse],
    ["/enreach.workload.QueryGetCurrentEraRequest", query_35.QueryGetCurrentEraRequest],
    ["/enreach.workload.ReputationPoint", reputationpoint_5.ReputationPoint],
    ["/enreach.workload.QueryGetAllReputationPointChangeDataByEraResponse", query_36.QueryGetAllReputationPointChangeDataByEraResponse],
    ["/enreach.workload.QueryGetAllReputationPointRequest", query_37.QueryGetAllReputationPointRequest],
    ["/enreach.workload.QueryGetAllEraProcessDataRequest", query_38.QueryGetAllEraProcessDataRequest],
    ["/enreach.workload.QueryGetReputationPointChangeDataResponse", query_39.QueryGetReputationPointChangeDataResponse],
    ["/enreach.workload.QueryGetAllReputationDeltaPointByEraResponse", query_40.QueryGetAllReputationDeltaPointByEraResponse],
    ["/enreach.workload.MsgSubmitWorkreports", tx_8.MsgSubmitWorkreports],
    ["/enreach.workload.MsgCreateSuperior", tx_9.MsgCreateSuperior],
    ["/enreach.workload.QueryGetAllWorkreportByEpochResponse", query_41.QueryGetAllWorkreportByEpochResponse],
    ["/enreach.workload.QueryGetHistoryEpochDataDepthResponse", query_42.QueryGetHistoryEpochDataDepthResponse],
    ["/enreach.workload.QueryGetReputationDeltaPointRequest", query_43.QueryGetReputationDeltaPointRequest],
    ["/enreach.workload.ReputationDeltaPoint", reputationpoint_6.ReputationDeltaPoint],
    ["/enreach.workload.MsgUpdateHistoryEpochDataDepthResponse", tx_10.MsgUpdateHistoryEpochDataDepthResponse],
    ["/enreach.workload.MsgUpdateSuperiorResponse", tx_11.MsgUpdateSuperiorResponse],
    ["/enreach.workload.QueryGetAllHistoryEpochResponse", query_44.QueryGetAllHistoryEpochResponse],
    ["/enreach.workload.QueryGetManagerRPWorkloadRequest", query_45.QueryGetManagerRPWorkloadRequest],
    ["/enreach.workload.QueryGetHistoryEpochDataDepthRequest", query_46.QueryGetHistoryEpochDataDepthRequest],
    ["/enreach.workload.QueryGetAllReputationPointChangeDataByEraRequest", query_47.QueryGetAllReputationPointChangeDataByEraRequest],
    ["/enreach.workload.QueryGetAllReputationPointResponse", query_48.QueryGetAllReputationPointResponse],
    ["/enreach.workload.MsgUpdateSuperior", tx_12.MsgUpdateSuperior],
    ["/enreach.workload.QueryGetAllEraProcessDataResponse", query_49.QueryGetAllEraProcessDataResponse],
    ["/enreach.workload.ReputationPointChangeRawDataDB", reputationpoint_7.ReputationPointChangeRawDataDB],
    ["/enreach.workload.MsgUpdateParams", tx_13.MsgUpdateParams],
    ["/enreach.workload.MsgUpdateParamsResponse", tx_14.MsgUpdateParamsResponse],
    ["/enreach.workload.QueryGetAllNodeWorkloadByEpochResponse", query_50.QueryGetAllNodeWorkloadByEpochResponse],
    ["/enreach.workload.QueryGetWorkreportRequest", query_51.QueryGetWorkreportRequest],
    ["/enreach.workload.QueryGetAllWorkreportByEpochRequest", query_52.QueryGetAllWorkreportByEpochRequest],
    ["/enreach.workload.QueryGetEpochProcessDataRequest", query_53.QueryGetEpochProcessDataRequest],
    ["/enreach.workload.Params", params_1.Params],
    ["/enreach.workload.QueryGetEraProcessDataRequest", query_54.QueryGetEraProcessDataRequest],
    ["/enreach.workload.QueryGetAllManagerWRWorkloadByEpochResponse", query_55.QueryGetAllManagerWRWorkloadByEpochResponse],
    ["/enreach.workload.QueryGetAllEpochProcessDataRequest", query_56.QueryGetAllEpochProcessDataRequest],
    ["/enreach.workload.QueryGetReputationPointChangeDataRequest", query_57.QueryGetReputationPointChangeDataRequest],
    ["/enreach.workload.QueryGetPendingNextEpochRequest", query_58.QueryGetPendingNextEpochRequest],
];
exports.msgTypes = msgTypes;
