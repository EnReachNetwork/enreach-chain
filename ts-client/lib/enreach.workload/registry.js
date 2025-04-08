"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const query_1 = require("./types/enreach/workload/query");
const query_2 = require("./types/enreach/workload/query");
const query_3 = require("./types/enreach/workload/query");
const tx_1 = require("./types/enreach/workload/tx");
const query_4 = require("./types/enreach/workload/query");
const query_5 = require("./types/enreach/workload/query");
const tx_2 = require("./types/enreach/workload/tx");
const query_6 = require("./types/enreach/workload/query");
const query_7 = require("./types/enreach/workload/query");
const reputationpoint_1 = require("./types/enreach/workload/reputationpoint");
const query_8 = require("./types/enreach/workload/query");
const query_9 = require("./types/enreach/workload/query");
const superior_1 = require("./types/enreach/workload/superior");
const tx_3 = require("./types/enreach/workload/tx");
const workreport_1 = require("./types/enreach/workload/workreport");
const query_10 = require("./types/enreach/workload/query");
const query_11 = require("./types/enreach/workload/query");
const reputationpoint_2 = require("./types/enreach/workload/reputationpoint");
const query_12 = require("./types/enreach/workload/query");
const workreport_2 = require("./types/enreach/workload/workreport");
const query_13 = require("./types/enreach/workload/query");
const query_14 = require("./types/enreach/workload/query");
const query_15 = require("./types/enreach/workload/query");
const query_16 = require("./types/enreach/workload/query");
const tx_4 = require("./types/enreach/workload/tx");
const reputationpoint_3 = require("./types/enreach/workload/reputationpoint");
const workload_1 = require("./types/enreach/workload/workload");
const query_17 = require("./types/enreach/workload/query");
const query_18 = require("./types/enreach/workload/query");
const query_19 = require("./types/enreach/workload/query");
const tx_5 = require("./types/enreach/workload/tx");
const query_20 = require("./types/enreach/workload/query");
const reputationpoint_4 = require("./types/enreach/workload/reputationpoint");
const query_21 = require("./types/enreach/workload/query");
const query_22 = require("./types/enreach/workload/query");
const query_23 = require("./types/enreach/workload/query");
const workreport_3 = require("./types/enreach/workload/workreport");
const reputationpoint_5 = require("./types/enreach/workload/reputationpoint");
const query_24 = require("./types/enreach/workload/query");
const query_25 = require("./types/enreach/workload/query");
const query_26 = require("./types/enreach/workload/query");
const query_27 = require("./types/enreach/workload/query");
const query_28 = require("./types/enreach/workload/query");
const era_info_1 = require("./types/enreach/workload/era_info");
const query_29 = require("./types/enreach/workload/query");
const query_30 = require("./types/enreach/workload/query");
const query_31 = require("./types/enreach/workload/query");
const tx_6 = require("./types/enreach/workload/tx");
const tx_7 = require("./types/enreach/workload/tx");
const workreport_4 = require("./types/enreach/workload/workreport");
const query_32 = require("./types/enreach/workload/query");
const query_33 = require("./types/enreach/workload/query");
const query_34 = require("./types/enreach/workload/query");
const query_35 = require("./types/enreach/workload/query");
const tx_8 = require("./types/enreach/workload/tx");
const query_36 = require("./types/enreach/workload/query");
const query_37 = require("./types/enreach/workload/query");
const query_38 = require("./types/enreach/workload/query");
const query_39 = require("./types/enreach/workload/query");
const query_40 = require("./types/enreach/workload/query");
const query_41 = require("./types/enreach/workload/query");
const reputationpoint_6 = require("./types/enreach/workload/reputationpoint");
const epoch_info_1 = require("./types/enreach/workload/epoch_info");
const query_42 = require("./types/enreach/workload/query");
const tx_9 = require("./types/enreach/workload/tx");
const tx_10 = require("./types/enreach/workload/tx");
const tx_11 = require("./types/enreach/workload/tx");
const workload_2 = require("./types/enreach/workload/workload");
const query_43 = require("./types/enreach/workload/query");
const query_44 = require("./types/enreach/workload/query");
const query_45 = require("./types/enreach/workload/query");
const query_46 = require("./types/enreach/workload/query");
const query_47 = require("./types/enreach/workload/query");
const query_48 = require("./types/enreach/workload/query");
const genesis_1 = require("./types/enreach/workload/genesis");
const query_49 = require("./types/enreach/workload/query");
const reputationpoint_7 = require("./types/enreach/workload/reputationpoint");
const params_1 = require("./types/enreach/workload/params");
const query_50 = require("./types/enreach/workload/query");
const query_51 = require("./types/enreach/workload/query");
const workload_3 = require("./types/enreach/workload/workload");
const query_52 = require("./types/enreach/workload/query");
const query_53 = require("./types/enreach/workload/query");
const tx_12 = require("./types/enreach/workload/tx");
const query_54 = require("./types/enreach/workload/query");
const query_55 = require("./types/enreach/workload/query");
const query_56 = require("./types/enreach/workload/query");
const query_57 = require("./types/enreach/workload/query");
const query_58 = require("./types/enreach/workload/query");
const query_59 = require("./types/enreach/workload/query");
const tx_13 = require("./types/enreach/workload/tx");
const query_60 = require("./types/enreach/workload/query");
const workreport_5 = require("./types/enreach/workload/workreport");
const query_61 = require("./types/enreach/workload/query");
const query_62 = require("./types/enreach/workload/query");
const query_63 = require("./types/enreach/workload/query");
const query_64 = require("./types/enreach/workload/query");
const tx_14 = require("./types/enreach/workload/tx");
const msgTypes = [
    ["/enreach.workload.QueryGetNodeWorkloadResponse", query_1.QueryGetNodeWorkloadResponse],
    ["/enreach.workload.QueryGetManagerWRWorkloadResponse", query_2.QueryGetManagerWRWorkloadResponse],
    ["/enreach.workload.QueryGetAllManagerRPWorkloadByEraResponse", query_3.QueryGetAllManagerRPWorkloadByEraResponse],
    ["/enreach.workload.MsgUpdateHistoryEpochDataDepthResponse", tx_1.MsgUpdateHistoryEpochDataDepthResponse],
    ["/enreach.workload.QueryGetEpochLengthResponse", query_4.QueryGetEpochLengthResponse],
    ["/enreach.workload.QueryGetAllNodeWorkloadByEpochResponse", query_5.QueryGetAllNodeWorkloadByEpochResponse],
    ["/enreach.workload.MsgUpdateParamsResponse", tx_2.MsgUpdateParamsResponse],
    ["/enreach.workload.QueryGetAllHistoryEraResponse", query_6.QueryGetAllHistoryEraResponse],
    ["/enreach.workload.QueryGetSuperiorRequest", query_7.QueryGetSuperiorRequest],
    ["/enreach.workload.ReputationPoint", reputationpoint_1.ReputationPoint],
    ["/enreach.workload.QueryGetHistoryEpochDataDepthResponse", query_8.QueryGetHistoryEpochDataDepthResponse],
    ["/enreach.workload.QueryGetAllEpochProcessDataResponse", query_9.QueryGetAllEpochProcessDataResponse],
    ["/enreach.workload.Superior", superior_1.Superior],
    ["/enreach.workload.MsgUpdateHistoryEpochDataDepth", tx_3.MsgUpdateHistoryEpochDataDepth],
    ["/enreach.workload.Workreport", workreport_1.Workreport],
    ["/enreach.workload.QueryGetCurrentEpochRequest", query_10.QueryGetCurrentEpochRequest],
    ["/enreach.workload.QueryGetPendingNextEraResponse", query_11.QueryGetPendingNextEraResponse],
    ["/enreach.workload.ReputationPointChangeRawData", reputationpoint_2.ReputationPointChangeRawData],
    ["/enreach.workload.QueryGetAllReputationPointResponse", query_12.QueryGetAllReputationPointResponse],
    ["/enreach.workload.EpochProcessData", workreport_2.EpochProcessData],
    ["/enreach.workload.QueryGetAllWorkreportByEpochResponse", query_13.QueryGetAllWorkreportByEpochResponse],
    ["/enreach.workload.QueryGetEpochProcessDataRequest", query_14.QueryGetEpochProcessDataRequest],
    ["/enreach.workload.QueryGetEraLengthResponse", query_15.QueryGetEraLengthResponse],
    ["/enreach.workload.QueryGetCurrentEraRequest", query_16.QueryGetCurrentEraRequest],
    ["/enreach.workload.MsgSubmitReputationPointChangeData", tx_4.MsgSubmitReputationPointChangeData],
    ["/enreach.workload.ReputationDeltaPoint", reputationpoint_3.ReputationDeltaPoint],
    ["/enreach.workload.ManagerWRWorkload", workload_1.ManagerWRWorkload],
    ["/enreach.workload.QueryGetAllManagerRPWorkloadByEraRequest", query_17.QueryGetAllManagerRPWorkloadByEraRequest],
    ["/enreach.workload.QueryGetWorkreportResponse", query_18.QueryGetWorkreportResponse],
    ["/enreach.workload.QueryGetReputationPointChangeDataRequest", query_19.QueryGetReputationPointChangeDataRequest],
    ["/enreach.workload.MsgUpdateSuperiorResponse", tx_5.MsgUpdateSuperiorResponse],
    ["/enreach.workload.QueryGetManagerRPWorkloadRequest", query_20.QueryGetManagerRPWorkloadRequest],
    ["/enreach.workload.ReputationPointChangeRawDataMapDB", reputationpoint_4.ReputationPointChangeRawDataMapDB],
    ["/enreach.workload.QueryGetNodeWorkloadRequest", query_21.QueryGetNodeWorkloadRequest],
    ["/enreach.workload.QueryGetPendingNextEraRequest", query_22.QueryGetPendingNextEraRequest],
    ["/enreach.workload.QueryGetAllReputationDeltaPointByEraRequest", query_23.QueryGetAllReputationDeltaPointByEraRequest],
    ["/enreach.workload.NodeScoreDB", workreport_3.NodeScoreDB],
    ["/enreach.workload.EraProcessData", reputationpoint_5.EraProcessData],
    ["/enreach.workload.QueryGetPendingNextEpochRequest", query_24.QueryGetPendingNextEpochRequest],
    ["/enreach.workload.QueryGetAllHistoryEpochRequest", query_25.QueryGetAllHistoryEpochRequest],
    ["/enreach.workload.QueryGetAllReputationPointChangeDataByEraRequest", query_26.QueryGetAllReputationPointChangeDataByEraRequest],
    ["/enreach.workload.QueryGetAllReputationPointChangeDataByEraResponse", query_27.QueryGetAllReputationPointChangeDataByEraResponse],
    ["/enreach.workload.QueryGetHistoryEpochResponse", query_28.QueryGetHistoryEpochResponse],
    ["/enreach.workload.EraInfo", era_info_1.EraInfo],
    ["/enreach.workload.QueryGetAllManagerWRWorkloadByEpochRequest", query_29.QueryGetAllManagerWRWorkloadByEpochRequest],
    ["/enreach.workload.QueryGetWorkreportProcessBatchSizeRequest", query_30.QueryGetWorkreportProcessBatchSizeRequest],
    ["/enreach.workload.QueryGetCurrentEraResponse", query_31.QueryGetCurrentEraResponse],
    ["/enreach.workload.MsgSubmitWorkreports", tx_6.MsgSubmitWorkreports],
    ["/enreach.workload.MsgUpdateWorkreportProcessBatchSize", tx_7.MsgUpdateWorkreportProcessBatchSize],
    ["/enreach.workload.ManagerNodeScoreMap", workreport_4.ManagerNodeScoreMap],
    ["/enreach.workload.QueryGetManagerWRWorkloadRequest", query_32.QueryGetManagerWRWorkloadRequest],
    ["/enreach.workload.QueryGetAllWorkreportByEpochRequest", query_33.QueryGetAllWorkreportByEpochRequest],
    ["/enreach.workload.QueryGetWorkreportProcessBatchSizeResponse", query_34.QueryGetWorkreportProcessBatchSizeResponse],
    ["/enreach.workload.QueryGetAllReputationDeltaPointByEraResponse", query_35.QueryGetAllReputationDeltaPointByEraResponse],
    ["/enreach.workload.MsgUpdateParams", tx_8.MsgUpdateParams],
    ["/enreach.workload.QueryGetAllEpochProcessDataRequest", query_36.QueryGetAllEpochProcessDataRequest],
    ["/enreach.workload.QueryGetReputationPointResponse", query_37.QueryGetReputationPointResponse],
    ["/enreach.workload.QueryGetAllNodeWorkloadByEpochRequest", query_38.QueryGetAllNodeWorkloadByEpochRequest],
    ["/enreach.workload.QueryGetCurrentEpochResponse", query_39.QueryGetCurrentEpochResponse],
    ["/enreach.workload.QueryGetEpochProcessDataResponse", query_40.QueryGetEpochProcessDataResponse],
    ["/enreach.workload.QueryGetEraProcessDataResponse", query_41.QueryGetEraProcessDataResponse],
    ["/enreach.workload.ReputationPointChangeData", reputationpoint_6.ReputationPointChangeData],
    ["/enreach.workload.EpochInfo", epoch_info_1.EpochInfo],
    ["/enreach.workload.QueryGetHistoryEraResponse", query_42.QueryGetHistoryEraResponse],
    ["/enreach.workload.MsgCreateSuperior", tx_9.MsgCreateSuperior],
    ["/enreach.workload.MsgSubmitReputationPointChangeDataResponse", tx_10.MsgSubmitReputationPointChangeDataResponse],
    ["/enreach.workload.MsgCreateSuperiorResponse", tx_11.MsgCreateSuperiorResponse],
    ["/enreach.workload.ManagerRPWorkload", workload_2.ManagerRPWorkload],
    ["/enreach.workload.QueryGetEpochLengthRequest", query_43.QueryGetEpochLengthRequest],
    ["/enreach.workload.QueryGetAllHistoryEraRequest", query_44.QueryGetAllHistoryEraRequest],
    ["/enreach.workload.QueryGetReputationPointChangeDataResponse", query_45.QueryGetReputationPointChangeDataResponse],
    ["/enreach.workload.QueryGetReputationDeltaPointRequest", query_46.QueryGetReputationDeltaPointRequest],
    ["/enreach.workload.QueryGetReputationDeltaPointResponse", query_47.QueryGetReputationDeltaPointResponse],
    ["/enreach.workload.QueryGetEraProcessDataRequest", query_48.QueryGetEraProcessDataRequest],
    ["/enreach.workload.GenesisState", genesis_1.GenesisState],
    ["/enreach.workload.QueryGetAllReputationPointRequest", query_49.QueryGetAllReputationPointRequest],
    ["/enreach.workload.ReputationPointChangeRawDataDB", reputationpoint_7.ReputationPointChangeRawDataDB],
    ["/enreach.workload.Params", params_1.Params],
    ["/enreach.workload.QueryGetManagerRPWorkloadResponse", query_50.QueryGetManagerRPWorkloadResponse],
    ["/enreach.workload.QueryGetAllEraProcessDataRequest", query_51.QueryGetAllEraProcessDataRequest],
    ["/enreach.workload.NodeWorkload", workload_3.NodeWorkload],
    ["/enreach.workload.QueryGetPendingNextEpochResponse", query_52.QueryGetPendingNextEpochResponse],
    ["/enreach.workload.QueryGetAllManagerWRWorkloadByEpochResponse", query_53.QueryGetAllManagerWRWorkloadByEpochResponse],
    ["/enreach.workload.MsgUpdateWorkreportProcessBatchSizeResponse", tx_12.MsgUpdateWorkreportProcessBatchSizeResponse],
    ["/enreach.workload.QueryGetHistoryEpochDataDepthRequest", query_54.QueryGetHistoryEpochDataDepthRequest],
    ["/enreach.workload.QueryParamsRequest", query_55.QueryParamsRequest],
    ["/enreach.workload.QueryGetWorkreportRequest", query_56.QueryGetWorkreportRequest],
    ["/enreach.workload.QueryGetEraLengthRequest", query_57.QueryGetEraLengthRequest],
    ["/enreach.workload.QueryGetAllEraProcessDataResponse", query_58.QueryGetAllEraProcessDataResponse],
    ["/enreach.workload.QueryParamsResponse", query_59.QueryParamsResponse],
    ["/enreach.workload.MsgUpdateSuperior", tx_13.MsgUpdateSuperior],
    ["/enreach.workload.QueryGetAllHistoryEpochResponse", query_60.QueryGetAllHistoryEpochResponse],
    ["/enreach.workload.NodeScore", workreport_5.NodeScore],
    ["/enreach.workload.QueryGetHistoryEpochRequest", query_61.QueryGetHistoryEpochRequest],
    ["/enreach.workload.QueryGetSuperiorResponse", query_62.QueryGetSuperiorResponse],
    ["/enreach.workload.QueryGetHistoryEraRequest", query_63.QueryGetHistoryEraRequest],
    ["/enreach.workload.QueryGetReputationPointRequest", query_64.QueryGetReputationPointRequest],
    ["/enreach.workload.MsgSubmitWorkreportsResponse", tx_14.MsgSubmitWorkreportsResponse],
];
exports.msgTypes = msgTypes;
