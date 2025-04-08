"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const reputationpoint_1 = require("./types/enreach/workload/reputationpoint");
const reputationpoint_2 = require("./types/enreach/workload/reputationpoint");
const query_1 = require("./types/enreach/workload/query");
const cheat_status_1 = require("./types/enreach/workload/cheat_status");
const tx_1 = require("./types/enreach/workload/tx");
const query_2 = require("./types/enreach/workload/query");
const query_3 = require("./types/enreach/workload/query");
const tx_2 = require("./types/enreach/workload/tx");
const query_4 = require("./types/enreach/workload/query");
const query_5 = require("./types/enreach/workload/query");
const query_6 = require("./types/enreach/workload/query");
const query_7 = require("./types/enreach/workload/query");
const query_8 = require("./types/enreach/workload/query");
const params_1 = require("./types/enreach/workload/params");
const query_9 = require("./types/enreach/workload/query");
const query_10 = require("./types/enreach/workload/query");
const tx_3 = require("./types/enreach/workload/tx");
const tx_4 = require("./types/enreach/workload/tx");
const query_11 = require("./types/enreach/workload/query");
const query_12 = require("./types/enreach/workload/query");
const workload_1 = require("./types/enreach/workload/workload");
const query_13 = require("./types/enreach/workload/query");
const query_14 = require("./types/enreach/workload/query");
const tx_5 = require("./types/enreach/workload/tx");
const query_15 = require("./types/enreach/workload/query");
const query_16 = require("./types/enreach/workload/query");
const query_17 = require("./types/enreach/workload/query");
const query_18 = require("./types/enreach/workload/query");
const cheat_status_2 = require("./types/enreach/workload/cheat_status");
const tx_6 = require("./types/enreach/workload/tx");
const query_19 = require("./types/enreach/workload/query");
const query_20 = require("./types/enreach/workload/query");
const workload_2 = require("./types/enreach/workload/workload");
const query_21 = require("./types/enreach/workload/query");
const query_22 = require("./types/enreach/workload/query");
const query_23 = require("./types/enreach/workload/query");
const tx_7 = require("./types/enreach/workload/tx");
const tx_8 = require("./types/enreach/workload/tx");
const reputationpoint_3 = require("./types/enreach/workload/reputationpoint");
const workreport_1 = require("./types/enreach/workload/workreport");
const query_24 = require("./types/enreach/workload/query");
const query_25 = require("./types/enreach/workload/query");
const query_26 = require("./types/enreach/workload/query");
const query_27 = require("./types/enreach/workload/query");
const query_28 = require("./types/enreach/workload/query");
const era_info_1 = require("./types/enreach/workload/era_info");
const query_29 = require("./types/enreach/workload/query");
const query_30 = require("./types/enreach/workload/query");
const workload_3 = require("./types/enreach/workload/workload");
const tx_9 = require("./types/enreach/workload/tx");
const query_31 = require("./types/enreach/workload/query");
const query_32 = require("./types/enreach/workload/query");
const superior_1 = require("./types/enreach/workload/superior");
const query_33 = require("./types/enreach/workload/query");
const query_34 = require("./types/enreach/workload/query");
const cheat_status_3 = require("./types/enreach/workload/cheat_status");
const query_35 = require("./types/enreach/workload/query");
const query_36 = require("./types/enreach/workload/query");
const query_37 = require("./types/enreach/workload/query");
const query_38 = require("./types/enreach/workload/query");
const workreport_2 = require("./types/enreach/workload/workreport");
const query_39 = require("./types/enreach/workload/query");
const query_40 = require("./types/enreach/workload/query");
const query_41 = require("./types/enreach/workload/query");
const query_42 = require("./types/enreach/workload/query");
const cheat_status_4 = require("./types/enreach/workload/cheat_status");
const workload_4 = require("./types/enreach/workload/workload");
const reputationpoint_4 = require("./types/enreach/workload/reputationpoint");
const query_43 = require("./types/enreach/workload/query");
const tx_10 = require("./types/enreach/workload/tx");
const query_44 = require("./types/enreach/workload/query");
const query_45 = require("./types/enreach/workload/query");
const query_46 = require("./types/enreach/workload/query");
const query_47 = require("./types/enreach/workload/query");
const workreport_3 = require("./types/enreach/workload/workreport");
const reputationpoint_5 = require("./types/enreach/workload/reputationpoint");
const query_48 = require("./types/enreach/workload/query");
const query_49 = require("./types/enreach/workload/query");
const query_50 = require("./types/enreach/workload/query");
const query_51 = require("./types/enreach/workload/query");
const workreport_4 = require("./types/enreach/workload/workreport");
const reputationpoint_6 = require("./types/enreach/workload/reputationpoint");
const query_52 = require("./types/enreach/workload/query");
const query_53 = require("./types/enreach/workload/query");
const workreport_5 = require("./types/enreach/workload/workreport");
const tx_11 = require("./types/enreach/workload/tx");
const tx_12 = require("./types/enreach/workload/tx");
const query_54 = require("./types/enreach/workload/query");
const query_55 = require("./types/enreach/workload/query");
const query_56 = require("./types/enreach/workload/query");
const cheat_status_5 = require("./types/enreach/workload/cheat_status");
const tx_13 = require("./types/enreach/workload/tx");
const tx_14 = require("./types/enreach/workload/tx");
const query_57 = require("./types/enreach/workload/query");
const query_58 = require("./types/enreach/workload/query");
const genesis_1 = require("./types/enreach/workload/genesis");
const tx_15 = require("./types/enreach/workload/tx");
const epoch_info_1 = require("./types/enreach/workload/epoch_info");
const query_59 = require("./types/enreach/workload/query");
const query_60 = require("./types/enreach/workload/query");
const query_61 = require("./types/enreach/workload/query");
const query_62 = require("./types/enreach/workload/query");
const query_63 = require("./types/enreach/workload/query");
const query_64 = require("./types/enreach/workload/query");
const query_65 = require("./types/enreach/workload/query");
const tx_16 = require("./types/enreach/workload/tx");
const query_66 = require("./types/enreach/workload/query");
const query_67 = require("./types/enreach/workload/query");
const query_68 = require("./types/enreach/workload/query");
const query_69 = require("./types/enreach/workload/query");
const query_70 = require("./types/enreach/workload/query");
const query_71 = require("./types/enreach/workload/query");
const query_72 = require("./types/enreach/workload/query");
const msgTypes = [
    ["/enreach.workload.ReputationPointChangeRawData", reputationpoint_1.ReputationPointChangeRawData],
    ["/enreach.workload.ReputationDeltaPoint", reputationpoint_2.ReputationDeltaPoint],
    ["/enreach.workload.QueryGetAllCheatStatusCRDataByEraRequest", query_1.QueryGetAllCheatStatusCRDataByEraRequest],
    ["/enreach.workload.EraCheatStatusProcessData", cheat_status_1.EraCheatStatusProcessData],
    ["/enreach.workload.MsgUpdateHistoryEpochDataDepth", tx_1.MsgUpdateHistoryEpochDataDepth],
    ["/enreach.workload.QueryGetPendingNextEpochResponse", query_2.QueryGetPendingNextEpochResponse],
    ["/enreach.workload.QueryGetAllReputationDeltaPointByEraResponse", query_3.QueryGetAllReputationDeltaPointByEraResponse],
    ["/enreach.workload.MsgCreateSuperior", tx_2.MsgCreateSuperior],
    ["/enreach.workload.QueryGetSuperiorResponse", query_4.QueryGetSuperiorResponse],
    ["/enreach.workload.QueryGetAllReputationPointChangeDataByEraRequest", query_5.QueryGetAllReputationPointChangeDataByEraRequest],
    ["/enreach.workload.QueryParamsResponse", query_6.QueryParamsResponse],
    ["/enreach.workload.QueryGetManagerCSWorkloadRequest", query_7.QueryGetManagerCSWorkloadRequest],
    ["/enreach.workload.QueryGetCurrentEraRequest", query_8.QueryGetCurrentEraRequest],
    ["/enreach.workload.Params", params_1.Params],
    ["/enreach.workload.QueryGetAllEraProcessDataRequest", query_9.QueryGetAllEraProcessDataRequest],
    ["/enreach.workload.QueryGetEraCheatStatusProcessDataRequest", query_10.QueryGetEraCheatStatusProcessDataRequest],
    ["/enreach.workload.MsgUpdateSuperior", tx_3.MsgUpdateSuperior],
    ["/enreach.workload.MsgSubmitCheatStatusCRResponse", tx_4.MsgSubmitCheatStatusCRResponse],
    ["/enreach.workload.QueryGetHistoryEpochRequest", query_11.QueryGetHistoryEpochRequest],
    ["/enreach.workload.QueryGetPendingNextEraResponse", query_12.QueryGetPendingNextEraResponse],
    ["/enreach.workload.NodeWorkload", workload_1.NodeWorkload],
    ["/enreach.workload.QueryGetAllManagerRPWorkloadByEraRequest", query_13.QueryGetAllManagerRPWorkloadByEraRequest],
    ["/enreach.workload.QueryGetAllEpochProcessDataResponse", query_14.QueryGetAllEpochProcessDataResponse],
    ["/enreach.workload.MsgUpdateWorkreportProcessBatchSizeResponse", tx_5.MsgUpdateWorkreportProcessBatchSizeResponse],
    ["/enreach.workload.QueryGetReputationDeltaPointRequest", query_15.QueryGetReputationDeltaPointRequest],
    ["/enreach.workload.QueryGetCurrentEraResponse", query_16.QueryGetCurrentEraResponse],
    ["/enreach.workload.QueryGetAllHistoryEraRequest", query_17.QueryGetAllHistoryEraRequest],
    ["/enreach.workload.QueryGetCheatStatusCRDataResponse", query_18.QueryGetCheatStatusCRDataResponse],
    ["/enreach.workload.CheatStatusCRDB", cheat_status_2.CheatStatusCRDB],
    ["/enreach.workload.MsgSubmitWorkreports", tx_6.MsgSubmitWorkreports],
    ["/enreach.workload.QueryGetWorkreportRequest", query_19.QueryGetWorkreportRequest],
    ["/enreach.workload.QueryGetWorkreportProcessBatchSizeRequest", query_20.QueryGetWorkreportProcessBatchSizeRequest],
    ["/enreach.workload.ManagerRPWorkload", workload_2.ManagerRPWorkload],
    ["/enreach.workload.QueryGetAllHistoryEpochResponse", query_21.QueryGetAllHistoryEpochResponse],
    ["/enreach.workload.QueryGetAllManagerCSWorkloadByEraResponse", query_22.QueryGetAllManagerCSWorkloadByEraResponse],
    ["/enreach.workload.QueryGetAllReputationPointChangeDataByEraResponse", query_23.QueryGetAllReputationPointChangeDataByEraResponse],
    ["/enreach.workload.MsgSubmitWorkreportsResponse", tx_7.MsgSubmitWorkreportsResponse],
    ["/enreach.workload.MsgSubmitCheatStatusCR", tx_8.MsgSubmitCheatStatusCR],
    ["/enreach.workload.EraProcessData", reputationpoint_3.EraProcessData],
    ["/enreach.workload.NodeScoreDB", workreport_1.NodeScoreDB],
    ["/enreach.workload.QueryGetNodeWorkloadRequest", query_24.QueryGetNodeWorkloadRequest],
    ["/enreach.workload.QueryGetCheatStatusCRDataRequest", query_25.QueryGetCheatStatusCRDataRequest],
    ["/enreach.workload.QueryGetAllManagerRPWorkloadByEraResponse", query_26.QueryGetAllManagerRPWorkloadByEraResponse],
    ["/enreach.workload.QueryGetSuperiorRequest", query_27.QueryGetSuperiorRequest],
    ["/enreach.workload.QueryGetAllCheatStatusCRDataByEraResponse", query_28.QueryGetAllCheatStatusCRDataByEraResponse],
    ["/enreach.workload.EraInfo", era_info_1.EraInfo],
    ["/enreach.workload.QueryGetWorkreportProcessBatchSizeResponse", query_29.QueryGetWorkreportProcessBatchSizeResponse],
    ["/enreach.workload.QueryGetEraProcessDataResponse", query_30.QueryGetEraProcessDataResponse],
    ["/enreach.workload.ManagerWRWorkload", workload_3.ManagerWRWorkload],
    ["/enreach.workload.MsgUpdateSuperiorResponse", tx_9.MsgUpdateSuperiorResponse],
    ["/enreach.workload.QueryGetAllManagerWRWorkloadByEpochRequest", query_31.QueryGetAllManagerWRWorkloadByEpochRequest],
    ["/enreach.workload.QueryGetAllReputationDeltaPointByEraRequest", query_32.QueryGetAllReputationDeltaPointByEraRequest],
    ["/enreach.workload.Superior", superior_1.Superior],
    ["/enreach.workload.QueryGetCurrentEpochRequest", query_33.QueryGetCurrentEpochRequest],
    ["/enreach.workload.QueryGetManagerRPWorkloadRequest", query_34.QueryGetManagerRPWorkloadRequest],
    ["/enreach.workload.CheatStatusCRData", cheat_status_3.CheatStatusCRData],
    ["/enreach.workload.QueryGetAllWorkreportByEpochRequest", query_35.QueryGetAllWorkreportByEpochRequest],
    ["/enreach.workload.QueryGetAllHistoryEraResponse", query_36.QueryGetAllHistoryEraResponse],
    ["/enreach.workload.QueryGetEraCheatStatusProcessDataResponse", query_37.QueryGetEraCheatStatusProcessDataResponse],
    ["/enreach.workload.QueryGetReputationDeltaPointResponse", query_38.QueryGetReputationDeltaPointResponse],
    ["/enreach.workload.NodeScore", workreport_2.NodeScore],
    ["/enreach.workload.QueryGetCurrentEpochResponse", query_39.QueryGetCurrentEpochResponse],
    ["/enreach.workload.QueryGetEraLengthResponse", query_40.QueryGetEraLengthResponse],
    ["/enreach.workload.QueryGetManagerCSWorkloadResponse", query_41.QueryGetManagerCSWorkloadResponse],
    ["/enreach.workload.QueryGetEraProcessDataRequest", query_42.QueryGetEraProcessDataRequest],
    ["/enreach.workload.CheatStatusCRMapDB", cheat_status_4.CheatStatusCRMapDB],
    ["/enreach.workload.ManagerCSWorkload", workload_4.ManagerCSWorkload],
    ["/enreach.workload.ReputationPointChangeRawDataDB", reputationpoint_4.ReputationPointChangeRawDataDB],
    ["/enreach.workload.QueryGetAllManagerWRWorkloadByEpochResponse", query_43.QueryGetAllManagerWRWorkloadByEpochResponse],
    ["/enreach.workload.MsgUpdateHistoryEpochDataDepthResponse", tx_10.MsgUpdateHistoryEpochDataDepthResponse],
    ["/enreach.workload.QueryGetAllManagerCSWorkloadByEraRequest", query_44.QueryGetAllManagerCSWorkloadByEraRequest],
    ["/enreach.workload.QueryGetReputationPointChangeDataRequest", query_45.QueryGetReputationPointChangeDataRequest],
    ["/enreach.workload.QueryGetReputationPointChangeDataResponse", query_46.QueryGetReputationPointChangeDataResponse],
    ["/enreach.workload.QueryGetAllEraCheatStatusProcessDataResponse", query_47.QueryGetAllEraCheatStatusProcessDataResponse],
    ["/enreach.workload.Workreport", workreport_3.Workreport],
    ["/enreach.workload.ReputationPointChangeData", reputationpoint_5.ReputationPointChangeData],
    ["/enreach.workload.QueryParamsRequest", query_48.QueryParamsRequest],
    ["/enreach.workload.QueryGetHistoryEraRequest", query_49.QueryGetHistoryEraRequest],
    ["/enreach.workload.QueryGetAllNodeWorkloadByEpochRequest", query_50.QueryGetAllNodeWorkloadByEpochRequest],
    ["/enreach.workload.QueryGetAllEpochProcessDataRequest", query_51.QueryGetAllEpochProcessDataRequest],
    ["/enreach.workload.EpochProcessData", workreport_4.EpochProcessData],
    ["/enreach.workload.ReputationPointChangeRawDataMapDB", reputationpoint_6.ReputationPointChangeRawDataMapDB],
    ["/enreach.workload.QueryGetHistoryEpochResponse", query_52.QueryGetHistoryEpochResponse],
    ["/enreach.workload.QueryGetManagerWRWorkloadRequest", query_53.QueryGetManagerWRWorkloadRequest],
    ["/enreach.workload.ManagerNodeScoreMap", workreport_5.ManagerNodeScoreMap],
    ["/enreach.workload.MsgCreateSuperiorResponse", tx_11.MsgCreateSuperiorResponse],
    ["/enreach.workload.MsgSubmitReputationPointChangeData", tx_12.MsgSubmitReputationPointChangeData],
    ["/enreach.workload.QueryGetAllHistoryEpochRequest", query_54.QueryGetAllHistoryEpochRequest],
    ["/enreach.workload.QueryGetEpochLengthResponse", query_55.QueryGetEpochLengthResponse],
    ["/enreach.workload.QueryGetAllEraProcessDataResponse", query_56.QueryGetAllEraProcessDataResponse],
    ["/enreach.workload.CheatStatusCR", cheat_status_5.CheatStatusCR],
    ["/enreach.workload.MsgUpdateParams", tx_13.MsgUpdateParams],
    ["/enreach.workload.MsgUpdateWorkreportProcessBatchSize", tx_14.MsgUpdateWorkreportProcessBatchSize],
    ["/enreach.workload.QueryGetEpochLengthRequest", query_57.QueryGetEpochLengthRequest],
    ["/enreach.workload.QueryGetAllNodeWorkloadByEpochResponse", query_58.QueryGetAllNodeWorkloadByEpochResponse],
    ["/enreach.workload.GenesisState", genesis_1.GenesisState],
    ["/enreach.workload.MsgSubmitReputationPointChangeDataResponse", tx_15.MsgSubmitReputationPointChangeDataResponse],
    ["/enreach.workload.EpochInfo", epoch_info_1.EpochInfo],
    ["/enreach.workload.QueryGetPendingNextEraRequest", query_59.QueryGetPendingNextEraRequest],
    ["/enreach.workload.QueryGetAllEraCheatStatusProcessDataRequest", query_60.QueryGetAllEraCheatStatusProcessDataRequest],
    ["/enreach.workload.QueryGetManagerRPWorkloadResponse", query_61.QueryGetManagerRPWorkloadResponse],
    ["/enreach.workload.QueryGetHistoryEpochDataDepthResponse", query_62.QueryGetHistoryEpochDataDepthResponse],
    ["/enreach.workload.QueryGetEpochProcessDataRequest", query_63.QueryGetEpochProcessDataRequest],
    ["/enreach.workload.QueryGetWorkreportResponse", query_64.QueryGetWorkreportResponse],
    ["/enreach.workload.QueryGetEpochProcessDataResponse", query_65.QueryGetEpochProcessDataResponse],
    ["/enreach.workload.MsgUpdateParamsResponse", tx_16.MsgUpdateParamsResponse],
    ["/enreach.workload.QueryGetPendingNextEpochRequest", query_66.QueryGetPendingNextEpochRequest],
    ["/enreach.workload.QueryGetHistoryEpochDataDepthRequest", query_67.QueryGetHistoryEpochDataDepthRequest],
    ["/enreach.workload.QueryGetEraLengthRequest", query_68.QueryGetEraLengthRequest],
    ["/enreach.workload.QueryGetHistoryEraResponse", query_69.QueryGetHistoryEraResponse],
    ["/enreach.workload.QueryGetNodeWorkloadResponse", query_70.QueryGetNodeWorkloadResponse],
    ["/enreach.workload.QueryGetManagerWRWorkloadResponse", query_71.QueryGetManagerWRWorkloadResponse],
    ["/enreach.workload.QueryGetAllWorkreportByEpochResponse", query_72.QueryGetAllWorkreportByEpochResponse],
];
exports.msgTypes = msgTypes;
