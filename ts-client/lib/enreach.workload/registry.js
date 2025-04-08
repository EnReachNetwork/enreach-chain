"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const query_1 = require("./types/enreach/workload/query");
const query_2 = require("./types/enreach/workload/query");
const tx_1 = require("./types/enreach/workload/tx");
const query_3 = require("./types/enreach/workload/query");
const query_4 = require("./types/enreach/workload/query");
const workreport_1 = require("./types/enreach/workload/workreport");
const workreport_2 = require("./types/enreach/workload/workreport");
const workreport_3 = require("./types/enreach/workload/workreport");
const era_info_1 = require("./types/enreach/workload/era_info");
const query_5 = require("./types/enreach/workload/query");
const query_6 = require("./types/enreach/workload/query");
const query_7 = require("./types/enreach/workload/query");
const query_8 = require("./types/enreach/workload/query");
const query_9 = require("./types/enreach/workload/query");
const tx_2 = require("./types/enreach/workload/tx");
const query_10 = require("./types/enreach/workload/query");
const tx_3 = require("./types/enreach/workload/tx");
const query_11 = require("./types/enreach/workload/query");
const query_12 = require("./types/enreach/workload/query");
const workload_1 = require("./types/enreach/workload/workload");
const query_13 = require("./types/enreach/workload/query");
const query_14 = require("./types/enreach/workload/query");
const params_1 = require("./types/enreach/workload/params");
const query_15 = require("./types/enreach/workload/query");
const query_16 = require("./types/enreach/workload/query");
const query_17 = require("./types/enreach/workload/query");
const query_18 = require("./types/enreach/workload/query");
const query_19 = require("./types/enreach/workload/query");
const reputationpoint_1 = require("./types/enreach/workload/reputationpoint");
const query_20 = require("./types/enreach/workload/query");
const query_21 = require("./types/enreach/workload/query");
const query_22 = require("./types/enreach/workload/query");
const query_23 = require("./types/enreach/workload/query");
const query_24 = require("./types/enreach/workload/query");
const query_25 = require("./types/enreach/workload/query");
const reputationpoint_2 = require("./types/enreach/workload/reputationpoint");
const query_26 = require("./types/enreach/workload/query");
const query_27 = require("./types/enreach/workload/query");
const query_28 = require("./types/enreach/workload/query");
const query_29 = require("./types/enreach/workload/query");
const workreport_4 = require("./types/enreach/workload/workreport");
const tx_4 = require("./types/enreach/workload/tx");
const tx_5 = require("./types/enreach/workload/tx");
const query_30 = require("./types/enreach/workload/query");
const query_31 = require("./types/enreach/workload/query");
const tx_6 = require("./types/enreach/workload/tx");
const query_32 = require("./types/enreach/workload/query");
const query_33 = require("./types/enreach/workload/query");
const query_34 = require("./types/enreach/workload/query");
const query_35 = require("./types/enreach/workload/query");
const query_36 = require("./types/enreach/workload/query");
const workload_2 = require("./types/enreach/workload/workload");
const tx_7 = require("./types/enreach/workload/tx");
const query_37 = require("./types/enreach/workload/query");
const query_38 = require("./types/enreach/workload/query");
const query_39 = require("./types/enreach/workload/query");
const query_40 = require("./types/enreach/workload/query");
const reputationpoint_3 = require("./types/enreach/workload/reputationpoint");
const tx_8 = require("./types/enreach/workload/tx");
const query_41 = require("./types/enreach/workload/query");
const query_42 = require("./types/enreach/workload/query");
const query_43 = require("./types/enreach/workload/query");
const query_44 = require("./types/enreach/workload/query");
const epoch_info_1 = require("./types/enreach/workload/epoch_info");
const reputationpoint_4 = require("./types/enreach/workload/reputationpoint");
const genesis_1 = require("./types/enreach/workload/genesis");
const query_45 = require("./types/enreach/workload/query");
const tx_9 = require("./types/enreach/workload/tx");
const tx_10 = require("./types/enreach/workload/tx");
const query_46 = require("./types/enreach/workload/query");
const reputationpoint_5 = require("./types/enreach/workload/reputationpoint");
const query_47 = require("./types/enreach/workload/query");
const query_48 = require("./types/enreach/workload/query");
const query_49 = require("./types/enreach/workload/query");
const query_50 = require("./types/enreach/workload/query");
const workreport_5 = require("./types/enreach/workload/workreport");
const tx_11 = require("./types/enreach/workload/tx");
const query_51 = require("./types/enreach/workload/query");
const query_52 = require("./types/enreach/workload/query");
const reputationpoint_6 = require("./types/enreach/workload/reputationpoint");
const reputationpoint_7 = require("./types/enreach/workload/reputationpoint");
const tx_12 = require("./types/enreach/workload/tx");
const query_53 = require("./types/enreach/workload/query");
const query_54 = require("./types/enreach/workload/query");
const query_55 = require("./types/enreach/workload/query");
const superior_1 = require("./types/enreach/workload/superior");
const query_56 = require("./types/enreach/workload/query");
const query_57 = require("./types/enreach/workload/query");
const query_58 = require("./types/enreach/workload/query");
const query_59 = require("./types/enreach/workload/query");
const tx_13 = require("./types/enreach/workload/tx");
const query_60 = require("./types/enreach/workload/query");
const tx_14 = require("./types/enreach/workload/tx");
const query_61 = require("./types/enreach/workload/query");
const query_62 = require("./types/enreach/workload/query");
const query_63 = require("./types/enreach/workload/query");
const query_64 = require("./types/enreach/workload/query");
const workload_3 = require("./types/enreach/workload/workload");
const msgTypes = [
    ["/enreach.workload.QueryGetCurrentEraResponse", query_1.QueryGetCurrentEraResponse],
    ["/enreach.workload.QueryGetPendingNextEraResponse", query_2.QueryGetPendingNextEraResponse],
    ["/enreach.workload.MsgUpdateSuperior", tx_1.MsgUpdateSuperior],
    ["/enreach.workload.QueryGetEraLengthResponse", query_3.QueryGetEraLengthResponse],
    ["/enreach.workload.QueryGetAllReputationDeltaPointByEraResponse", query_4.QueryGetAllReputationDeltaPointByEraResponse],
    ["/enreach.workload.NodeScore", workreport_1.NodeScore],
    ["/enreach.workload.NodeScoreDB", workreport_2.NodeScoreDB],
    ["/enreach.workload.Workreport", workreport_3.Workreport],
    ["/enreach.workload.EraInfo", era_info_1.EraInfo],
    ["/enreach.workload.QueryGetManagerWRWorkloadRequest", query_5.QueryGetManagerWRWorkloadRequest],
    ["/enreach.workload.QueryGetAllReputationPointRequest", query_6.QueryGetAllReputationPointRequest],
    ["/enreach.workload.QueryGetAllEraProcessDataRequest", query_7.QueryGetAllEraProcessDataRequest],
    ["/enreach.workload.QueryGetAllManagerWRWorkloadByEpochRequest", query_8.QueryGetAllManagerWRWorkloadByEpochRequest],
    ["/enreach.workload.QueryGetAllManagerRPWorkloadByEraRequest", query_9.QueryGetAllManagerRPWorkloadByEraRequest],
    ["/enreach.workload.MsgUpdateWorkreportProcessBatchSize", tx_2.MsgUpdateWorkreportProcessBatchSize],
    ["/enreach.workload.QueryGetAllReputationPointChangeDataByEraRequest", query_10.QueryGetAllReputationPointChangeDataByEraRequest],
    ["/enreach.workload.MsgCreateSuperiorResponse", tx_3.MsgCreateSuperiorResponse],
    ["/enreach.workload.QueryGetHistoryEpochResponse", query_11.QueryGetHistoryEpochResponse],
    ["/enreach.workload.QueryGetReputationPointResponse", query_12.QueryGetReputationPointResponse],
    ["/enreach.workload.ManagerRPWorkload", workload_1.ManagerRPWorkload],
    ["/enreach.workload.QueryGetAllManagerRPWorkloadByEraResponse", query_13.QueryGetAllManagerRPWorkloadByEraResponse],
    ["/enreach.workload.QueryGetAllWorkreportByEpochResponse", query_14.QueryGetAllWorkreportByEpochResponse],
    ["/enreach.workload.Params", params_1.Params],
    ["/enreach.workload.QueryGetWorkreportProcessBatchSizeResponse", query_15.QueryGetWorkreportProcessBatchSizeResponse],
    ["/enreach.workload.QueryGetReputationDeltaPointResponse", query_16.QueryGetReputationDeltaPointResponse],
    ["/enreach.workload.QueryGetAllEraProcessDataResponse", query_17.QueryGetAllEraProcessDataResponse],
    ["/enreach.workload.QueryGetPendingNextEraRequest", query_18.QueryGetPendingNextEraRequest],
    ["/enreach.workload.QueryGetReputationPointRequest", query_19.QueryGetReputationPointRequest],
    ["/enreach.workload.EraProcessData", reputationpoint_1.EraProcessData],
    ["/enreach.workload.QueryGetEpochLengthRequest", query_20.QueryGetEpochLengthRequest],
    ["/enreach.workload.QueryGetPendingNextEpochRequest", query_21.QueryGetPendingNextEpochRequest],
    ["/enreach.workload.QueryGetAllManagerWRWorkloadByEpochResponse", query_22.QueryGetAllManagerWRWorkloadByEpochResponse],
    ["/enreach.workload.QueryGetManagerRPWorkloadResponse", query_23.QueryGetManagerRPWorkloadResponse],
    ["/enreach.workload.QueryGetSuperiorResponse", query_24.QueryGetSuperiorResponse],
    ["/enreach.workload.QueryGetEraProcessDataResponse", query_25.QueryGetEraProcessDataResponse],
    ["/enreach.workload.ReputationPoint", reputationpoint_2.ReputationPoint],
    ["/enreach.workload.QueryGetWorkreportRequest", query_26.QueryGetWorkreportRequest],
    ["/enreach.workload.QueryGetAllHistoryEraRequest", query_27.QueryGetAllHistoryEraRequest],
    ["/enreach.workload.QueryGetReputationDeltaPointRequest", query_28.QueryGetReputationDeltaPointRequest],
    ["/enreach.workload.QueryGetEraProcessDataRequest", query_29.QueryGetEraProcessDataRequest],
    ["/enreach.workload.EpochProcessData", workreport_4.EpochProcessData],
    ["/enreach.workload.MsgUpdateHistoryEpochDataDepthResponse", tx_4.MsgUpdateHistoryEpochDataDepthResponse],
    ["/enreach.workload.MsgUpdateParamsResponse", tx_5.MsgUpdateParamsResponse],
    ["/enreach.workload.QueryGetCurrentEpochRequest", query_30.QueryGetCurrentEpochRequest],
    ["/enreach.workload.QueryGetEpochProcessDataResponse", query_31.QueryGetEpochProcessDataResponse],
    ["/enreach.workload.MsgSubmitReputationPointChangeDataResponse", tx_6.MsgSubmitReputationPointChangeDataResponse],
    ["/enreach.workload.QueryGetAllHistoryEpochRequest", query_32.QueryGetAllHistoryEpochRequest],
    ["/enreach.workload.QueryGetAllHistoryEpochResponse", query_33.QueryGetAllHistoryEpochResponse],
    ["/enreach.workload.QueryGetHistoryEraResponse", query_34.QueryGetHistoryEraResponse],
    ["/enreach.workload.QueryGetAllHistoryEraResponse", query_35.QueryGetAllHistoryEraResponse],
    ["/enreach.workload.QueryGetAllReputationPointChangeDataByEraResponse", query_36.QueryGetAllReputationPointChangeDataByEraResponse],
    ["/enreach.workload.ManagerWRWorkload", workload_2.ManagerWRWorkload],
    ["/enreach.workload.MsgSubmitWorkreports", tx_7.MsgSubmitWorkreports],
    ["/enreach.workload.QueryGetAllNodeWorkloadByEpochResponse", query_37.QueryGetAllNodeWorkloadByEpochResponse],
    ["/enreach.workload.QueryGetManagerWRWorkloadResponse", query_38.QueryGetManagerWRWorkloadResponse],
    ["/enreach.workload.QueryGetWorkreportResponse", query_39.QueryGetWorkreportResponse],
    ["/enreach.workload.QueryGetHistoryEraRequest", query_40.QueryGetHistoryEraRequest],
    ["/enreach.workload.ReputationPointChangeRawDataMapDB", reputationpoint_3.ReputationPointChangeRawDataMapDB],
    ["/enreach.workload.MsgUpdateHistoryEpochDataDepth", tx_8.MsgUpdateHistoryEpochDataDepth],
    ["/enreach.workload.QueryGetHistoryEpochDataDepthRequest", query_41.QueryGetHistoryEpochDataDepthRequest],
    ["/enreach.workload.QueryParamsResponse", query_42.QueryParamsResponse],
    ["/enreach.workload.QueryGetEpochProcessDataRequest", query_43.QueryGetEpochProcessDataRequest],
    ["/enreach.workload.QueryGetSuperiorRequest", query_44.QueryGetSuperiorRequest],
    ["/enreach.workload.EpochInfo", epoch_info_1.EpochInfo],
    ["/enreach.workload.ReputationPointChangeRawData", reputationpoint_4.ReputationPointChangeRawData],
    ["/enreach.workload.GenesisState", genesis_1.GenesisState],
    ["/enreach.workload.QueryGetReputationPointChangeDataRequest", query_45.QueryGetReputationPointChangeDataRequest],
    ["/enreach.workload.MsgUpdateParams", tx_9.MsgUpdateParams],
    ["/enreach.workload.MsgCreateSuperior", tx_10.MsgCreateSuperior],
    ["/enreach.workload.QueryParamsRequest", query_46.QueryParamsRequest],
    ["/enreach.workload.ReputationPointChangeRawDataDB", reputationpoint_5.ReputationPointChangeRawDataDB],
    ["/enreach.workload.QueryGetEpochLengthResponse", query_47.QueryGetEpochLengthResponse],
    ["/enreach.workload.QueryGetManagerRPWorkloadRequest", query_48.QueryGetManagerRPWorkloadRequest],
    ["/enreach.workload.QueryGetAllWorkreportByEpochRequest", query_49.QueryGetAllWorkreportByEpochRequest],
    ["/enreach.workload.QueryGetAllReputationDeltaPointByEraRequest", query_50.QueryGetAllReputationDeltaPointByEraRequest],
    ["/enreach.workload.ManagerNodeScoreMap", workreport_5.ManagerNodeScoreMap],
    ["/enreach.workload.MsgUpdateWorkreportProcessBatchSizeResponse", tx_11.MsgUpdateWorkreportProcessBatchSizeResponse],
    ["/enreach.workload.QueryGetAllNodeWorkloadByEpochRequest", query_51.QueryGetAllNodeWorkloadByEpochRequest],
    ["/enreach.workload.QueryGetHistoryEpochDataDepthResponse", query_52.QueryGetHistoryEpochDataDepthResponse],
    ["/enreach.workload.ReputationPointChangeData", reputationpoint_6.ReputationPointChangeData],
    ["/enreach.workload.ReputationDeltaPoint", reputationpoint_7.ReputationDeltaPoint],
    ["/enreach.workload.MsgSubmitWorkreportsResponse", tx_12.MsgSubmitWorkreportsResponse],
    ["/enreach.workload.QueryGetCurrentEpochResponse", query_53.QueryGetCurrentEpochResponse],
    ["/enreach.workload.QueryGetHistoryEpochRequest", query_54.QueryGetHistoryEpochRequest],
    ["/enreach.workload.QueryGetEraLengthRequest", query_55.QueryGetEraLengthRequest],
    ["/enreach.workload.Superior", superior_1.Superior],
    ["/enreach.workload.QueryGetPendingNextEpochResponse", query_56.QueryGetPendingNextEpochResponse],
    ["/enreach.workload.QueryGetNodeWorkloadResponse", query_57.QueryGetNodeWorkloadResponse],
    ["/enreach.workload.QueryGetAllEpochProcessDataRequest", query_58.QueryGetAllEpochProcessDataRequest],
    ["/enreach.workload.QueryGetAllReputationPointResponse", query_59.QueryGetAllReputationPointResponse],
    ["/enreach.workload.MsgSubmitReputationPointChangeData", tx_13.MsgSubmitReputationPointChangeData],
    ["/enreach.workload.QueryGetReputationPointChangeDataResponse", query_60.QueryGetReputationPointChangeDataResponse],
    ["/enreach.workload.MsgUpdateSuperiorResponse", tx_14.MsgUpdateSuperiorResponse],
    ["/enreach.workload.QueryGetNodeWorkloadRequest", query_61.QueryGetNodeWorkloadRequest],
    ["/enreach.workload.QueryGetWorkreportProcessBatchSizeRequest", query_62.QueryGetWorkreportProcessBatchSizeRequest],
    ["/enreach.workload.QueryGetAllEpochProcessDataResponse", query_63.QueryGetAllEpochProcessDataResponse],
    ["/enreach.workload.QueryGetCurrentEraRequest", query_64.QueryGetCurrentEraRequest],
    ["/enreach.workload.NodeWorkload", workload_3.NodeWorkload],
];
exports.msgTypes = msgTypes;
