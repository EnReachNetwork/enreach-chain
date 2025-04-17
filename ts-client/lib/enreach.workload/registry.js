"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const genesis_1 = require("./types/enreach/workload/genesis");
const tx_1 = require("./types/enreach/workload/tx");
const query_1 = require("./types/enreach/workload/query");
const query_2 = require("./types/enreach/workload/query");
const query_3 = require("./types/enreach/workload/query");
const tx_2 = require("./types/enreach/workload/tx");
const query_4 = require("./types/enreach/workload/query");
const workreport_1 = require("./types/enreach/workload/workreport");
const query_5 = require("./types/enreach/workload/query");
const query_6 = require("./types/enreach/workload/query");
const query_7 = require("./types/enreach/workload/query");
const cheat_status_1 = require("./types/enreach/workload/cheat_status");
const query_8 = require("./types/enreach/workload/query");
const query_9 = require("./types/enreach/workload/query");
const reputationpoint_1 = require("./types/enreach/workload/reputationpoint");
const era_info_1 = require("./types/enreach/workload/era_info");
const workload_1 = require("./types/enreach/workload/workload");
const query_10 = require("./types/enreach/workload/query");
const query_11 = require("./types/enreach/workload/query");
const query_12 = require("./types/enreach/workload/query");
const query_13 = require("./types/enreach/workload/query");
const reputationpoint_2 = require("./types/enreach/workload/reputationpoint");
const epoch_info_1 = require("./types/enreach/workload/epoch_info");
const query_14 = require("./types/enreach/workload/query");
const reputationpoint_3 = require("./types/enreach/workload/reputationpoint");
const workload_2 = require("./types/enreach/workload/workload");
const query_15 = require("./types/enreach/workload/query");
const cheat_status_2 = require("./types/enreach/workload/cheat_status");
const cheat_status_3 = require("./types/enreach/workload/cheat_status");
const query_16 = require("./types/enreach/workload/query");
const query_17 = require("./types/enreach/workload/query");
const query_18 = require("./types/enreach/workload/query");
const query_19 = require("./types/enreach/workload/query");
const query_20 = require("./types/enreach/workload/query");
const tx_3 = require("./types/enreach/workload/tx");
const tx_4 = require("./types/enreach/workload/tx");
const query_21 = require("./types/enreach/workload/query");
const workreport_2 = require("./types/enreach/workload/workreport");
const cheat_status_4 = require("./types/enreach/workload/cheat_status");
const query_22 = require("./types/enreach/workload/query");
const tx_5 = require("./types/enreach/workload/tx");
const tx_6 = require("./types/enreach/workload/tx");
const query_23 = require("./types/enreach/workload/query");
const query_24 = require("./types/enreach/workload/query");
const query_25 = require("./types/enreach/workload/query");
const query_26 = require("./types/enreach/workload/query");
const query_27 = require("./types/enreach/workload/query");
const query_28 = require("./types/enreach/workload/query");
const query_29 = require("./types/enreach/workload/query");
const query_30 = require("./types/enreach/workload/query");
const query_31 = require("./types/enreach/workload/query");
const query_32 = require("./types/enreach/workload/query");
const query_33 = require("./types/enreach/workload/query");
const query_34 = require("./types/enreach/workload/query");
const tx_7 = require("./types/enreach/workload/tx");
const query_35 = require("./types/enreach/workload/query");
const query_36 = require("./types/enreach/workload/query");
const query_37 = require("./types/enreach/workload/query");
const query_38 = require("./types/enreach/workload/query");
const tx_8 = require("./types/enreach/workload/tx");
const query_39 = require("./types/enreach/workload/query");
const query_40 = require("./types/enreach/workload/query");
const query_41 = require("./types/enreach/workload/query");
const query_42 = require("./types/enreach/workload/query");
const reputationpoint_4 = require("./types/enreach/workload/reputationpoint");
const workreport_3 = require("./types/enreach/workload/workreport");
const query_43 = require("./types/enreach/workload/query");
const query_44 = require("./types/enreach/workload/query");
const query_45 = require("./types/enreach/workload/query");
const query_46 = require("./types/enreach/workload/query");
const query_47 = require("./types/enreach/workload/query");
const reputationpoint_5 = require("./types/enreach/workload/reputationpoint");
const query_48 = require("./types/enreach/workload/query");
const query_49 = require("./types/enreach/workload/query");
const query_50 = require("./types/enreach/workload/query");
const query_51 = require("./types/enreach/workload/query");
const query_52 = require("./types/enreach/workload/query");
const reputationpoint_6 = require("./types/enreach/workload/reputationpoint");
const tx_9 = require("./types/enreach/workload/tx");
const workload_3 = require("./types/enreach/workload/workload");
const query_53 = require("./types/enreach/workload/query");
const query_54 = require("./types/enreach/workload/query");
const query_55 = require("./types/enreach/workload/query");
const query_56 = require("./types/enreach/workload/query");
const tx_10 = require("./types/enreach/workload/tx");
const query_57 = require("./types/enreach/workload/query");
const query_58 = require("./types/enreach/workload/query");
const workload_4 = require("./types/enreach/workload/workload");
const query_59 = require("./types/enreach/workload/query");
const workreport_4 = require("./types/enreach/workload/workreport");
const cheat_status_5 = require("./types/enreach/workload/cheat_status");
const query_60 = require("./types/enreach/workload/query");
const query_61 = require("./types/enreach/workload/query");
const params_1 = require("./types/enreach/workload/params");
const query_62 = require("./types/enreach/workload/query");
const query_63 = require("./types/enreach/workload/query");
const query_64 = require("./types/enreach/workload/query");
const query_65 = require("./types/enreach/workload/query");
const query_66 = require("./types/enreach/workload/query");
const tx_11 = require("./types/enreach/workload/tx");
const tx_12 = require("./types/enreach/workload/tx");
const query_67 = require("./types/enreach/workload/query");
const query_68 = require("./types/enreach/workload/query");
const superior_1 = require("./types/enreach/workload/superior");
const query_69 = require("./types/enreach/workload/query");
const query_70 = require("./types/enreach/workload/query");
const workreport_5 = require("./types/enreach/workload/workreport");
const msgTypes = [
    ["/enreach.workload.GenesisState", genesis_1.GenesisState],
    ["/enreach.workload.MsgSubmitWorkreports", tx_1.MsgSubmitWorkreports],
    ["/enreach.workload.QueryGetAllWorkreportByEpochRequest", query_1.QueryGetAllWorkreportByEpochRequest],
    ["/enreach.workload.QueryGetSuperiorRequest", query_2.QueryGetSuperiorRequest],
    ["/enreach.workload.QueryGetHistoryEraRequest", query_3.QueryGetHistoryEraRequest],
    ["/enreach.workload.MsgCreateSuperiorResponse", tx_2.MsgCreateSuperiorResponse],
    ["/enreach.workload.QueryGetEpochProcessDataRequest", query_4.QueryGetEpochProcessDataRequest],
    ["/enreach.workload.NodeScore", workreport_1.NodeScore],
    ["/enreach.workload.QueryParamResponse", query_5.QueryParamResponse],
    ["/enreach.workload.QueryGetCurrentEraResponse", query_6.QueryGetCurrentEraResponse],
    ["/enreach.workload.QueryGetEraProcessDataResponse", query_7.QueryGetEraProcessDataResponse],
    ["/enreach.workload.CheatStatusCRDB", cheat_status_1.CheatStatusCRDB],
    ["/enreach.workload.QueryGetAllReputationPointChangeDataByEraRequest", query_8.QueryGetAllReputationPointChangeDataByEraRequest],
    ["/enreach.workload.QueryGetCheatStatusCRDataResponse", query_9.QueryGetCheatStatusCRDataResponse],
    ["/enreach.workload.ReputationPointChangeRawData", reputationpoint_1.ReputationPointChangeRawData],
    ["/enreach.workload.EraInfo", era_info_1.EraInfo],
    ["/enreach.workload.NodeWorkload", workload_1.NodeWorkload],
    ["/enreach.workload.QueryGetManagerRPWorkloadResponse", query_10.QueryGetManagerRPWorkloadResponse],
    ["/enreach.workload.QueryGetAllManagerCSWorkloadByEraRequest", query_11.QueryGetAllManagerCSWorkloadByEraRequest],
    ["/enreach.workload.QueryGetEraCheatStatusProcessDataResponse", query_12.QueryGetEraCheatStatusProcessDataResponse],
    ["/enreach.workload.QueryGetAllEraCheatStatusProcessDataRequest", query_13.QueryGetAllEraCheatStatusProcessDataRequest],
    ["/enreach.workload.ReputationDeltaPoint", reputationpoint_2.ReputationDeltaPoint],
    ["/enreach.workload.EpochInfo", epoch_info_1.EpochInfo],
    ["/enreach.workload.QueryGetAllHistoryEraRequest", query_14.QueryGetAllHistoryEraRequest],
    ["/enreach.workload.EraProcessData", reputationpoint_3.EraProcessData],
    ["/enreach.workload.ManagerWRWorkload", workload_2.ManagerWRWorkload],
    ["/enreach.workload.QueryGetCurrentEraRequest", query_15.QueryGetCurrentEraRequest],
    ["/enreach.workload.CheatStatusCR", cheat_status_2.CheatStatusCR],
    ["/enreach.workload.CheatStatusCRMapDB", cheat_status_3.CheatStatusCRMapDB],
    ["/enreach.workload.QueryGetReputationDeltaPointResponse", query_16.QueryGetReputationDeltaPointResponse],
    ["/enreach.workload.QueryGetPendingNextEraRequest", query_17.QueryGetPendingNextEraRequest],
    ["/enreach.workload.QueryGetPendingNextEraResponse", query_18.QueryGetPendingNextEraResponse],
    ["/enreach.workload.QueryGetAllReputationPointChangeDataByEraResponse", query_19.QueryGetAllReputationPointChangeDataByEraResponse],
    ["/enreach.workload.QueryGetAllReputationDeltaPointByEraResponse", query_20.QueryGetAllReputationDeltaPointByEraResponse],
    ["/enreach.workload.MsgUpdateParamResponse", tx_3.MsgUpdateParamResponse],
    ["/enreach.workload.MsgSubmitWorkreportsResponse", tx_4.MsgSubmitWorkreportsResponse],
    ["/enreach.workload.QueryParamRequest", query_21.QueryParamRequest],
    ["/enreach.workload.NodeScoreDB", workreport_2.NodeScoreDB],
    ["/enreach.workload.CheatStatusCRData", cheat_status_4.CheatStatusCRData],
    ["/enreach.workload.QueryGetAllCheatStatusCRDataByEraRequest", query_22.QueryGetAllCheatStatusCRDataByEraRequest],
    ["/enreach.workload.MsgSubmitReputationPointChangeDataResponse", tx_5.MsgSubmitReputationPointChangeDataResponse],
    ["/enreach.workload.MsgSubmitCheatStatusCRResponse", tx_6.MsgSubmitCheatStatusCRResponse],
    ["/enreach.workload.QueryGetEpochLengthResponse", query_23.QueryGetEpochLengthResponse],
    ["/enreach.workload.QueryGetWorkreportRequest", query_24.QueryGetWorkreportRequest],
    ["/enreach.workload.QueryGetAllEpochProcessDataRequest", query_25.QueryGetAllEpochProcessDataRequest],
    ["/enreach.workload.QueryGetAllReputationDeltaPointByEraRequest", query_26.QueryGetAllReputationDeltaPointByEraRequest],
    ["/enreach.workload.QueryGetAllEraProcessDataRequest", query_27.QueryGetAllEraProcessDataRequest],
    ["/enreach.workload.QueryParamsResponse", query_28.QueryParamsResponse],
    ["/enreach.workload.QueryGetHistoryEpochResponse", query_29.QueryGetHistoryEpochResponse],
    ["/enreach.workload.QueryGetAllNodeWorkloadByEpochResponse", query_30.QueryGetAllNodeWorkloadByEpochResponse],
    ["/enreach.workload.QueryGetHistoryEraResponse", query_31.QueryGetHistoryEraResponse],
    ["/enreach.workload.QueryGetAllEraProcessDataResponse", query_32.QueryGetAllEraProcessDataResponse],
    ["/enreach.workload.QueryGetNodeWorkloadRequest", query_33.QueryGetNodeWorkloadRequest],
    ["/enreach.workload.QueryGetEpochProcessDataResponse", query_34.QueryGetEpochProcessDataResponse],
    ["/enreach.workload.MsgUpdateSuperiorResponse", tx_7.MsgUpdateSuperiorResponse],
    ["/enreach.workload.QueryGetPendingNextEpochRequest", query_35.QueryGetPendingNextEpochRequest],
    ["/enreach.workload.QueryGetManagerWRWorkloadRequest", query_36.QueryGetManagerWRWorkloadRequest],
    ["/enreach.workload.QueryGetEraLengthRequest", query_37.QueryGetEraLengthRequest],
    ["/enreach.workload.QueryGetAllHistoryEraResponse", query_38.QueryGetAllHistoryEraResponse],
    ["/enreach.workload.MsgCreateSuperior", tx_8.MsgCreateSuperior],
    ["/enreach.workload.QueryGetHistoryEpochRequest", query_39.QueryGetHistoryEpochRequest],
    ["/enreach.workload.QueryGetAllManagerRPWorkloadByEraRequest", query_40.QueryGetAllManagerRPWorkloadByEraRequest],
    ["/enreach.workload.QueryGetWorkreportResponse", query_41.QueryGetWorkreportResponse],
    ["/enreach.workload.QueryGetAllManagerRPWorkloadByEraResponse", query_42.QueryGetAllManagerRPWorkloadByEraResponse],
    ["/enreach.workload.ReputationPointChangeData", reputationpoint_4.ReputationPointChangeData],
    ["/enreach.workload.ManagerNodeScoreMap", workreport_3.ManagerNodeScoreMap],
    ["/enreach.workload.QueryGetCurrentEpochResponse", query_43.QueryGetCurrentEpochResponse],
    ["/enreach.workload.QueryGetPendingNextEpochResponse", query_44.QueryGetPendingNextEpochResponse],
    ["/enreach.workload.QueryGetManagerCSWorkloadResponse", query_45.QueryGetManagerCSWorkloadResponse],
    ["/enreach.workload.QueryGetAllWorkreportByEpochResponse", query_46.QueryGetAllWorkreportByEpochResponse],
    ["/enreach.workload.QueryGetSuperiorResponse", query_47.QueryGetSuperiorResponse],
    ["/enreach.workload.ReputationPointChangeRawDataMapDB", reputationpoint_5.ReputationPointChangeRawDataMapDB],
    ["/enreach.workload.QueryGetAllCheatStatusCRDataByEraResponse", query_48.QueryGetAllCheatStatusCRDataByEraResponse],
    ["/enreach.workload.QueryGetEraCheatStatusProcessDataRequest", query_49.QueryGetEraCheatStatusProcessDataRequest],
    ["/enreach.workload.QueryGetAllManagerCSWorkloadByEraResponse", query_50.QueryGetAllManagerCSWorkloadByEraResponse],
    ["/enreach.workload.QueryGetCheatStatusCRDataRequest", query_51.QueryGetCheatStatusCRDataRequest],
    ["/enreach.workload.QueryGetAllEraCheatStatusProcessDataResponse", query_52.QueryGetAllEraCheatStatusProcessDataResponse],
    ["/enreach.workload.ReputationPointChangeRawDataDB", reputationpoint_6.ReputationPointChangeRawDataDB],
    ["/enreach.workload.MsgUpdateSuperior", tx_9.MsgUpdateSuperior],
    ["/enreach.workload.ManagerCSWorkload", workload_3.ManagerCSWorkload],
    ["/enreach.workload.QueryParamsRequest", query_53.QueryParamsRequest],
    ["/enreach.workload.QueryGetCurrentEpochRequest", query_54.QueryGetCurrentEpochRequest],
    ["/enreach.workload.QueryGetEraLengthResponse", query_55.QueryGetEraLengthResponse],
    ["/enreach.workload.QueryGetReputationPointChangeDataRequest", query_56.QueryGetReputationPointChangeDataRequest],
    ["/enreach.workload.MsgUpdateParam", tx_10.MsgUpdateParam],
    ["/enreach.workload.QueryGetAllHistoryEpochResponse", query_57.QueryGetAllHistoryEpochResponse],
    ["/enreach.workload.QueryGetEraProcessDataRequest", query_58.QueryGetEraProcessDataRequest],
    ["/enreach.workload.ManagerRPWorkload", workload_4.ManagerRPWorkload],
    ["/enreach.workload.QueryGetReputationDeltaPointRequest", query_59.QueryGetReputationDeltaPointRequest],
    ["/enreach.workload.EpochProcessData", workreport_4.EpochProcessData],
    ["/enreach.workload.EraCheatStatusProcessData", cheat_status_5.EraCheatStatusProcessData],
    ["/enreach.workload.QueryGetEpochLengthRequest", query_60.QueryGetEpochLengthRequest],
    ["/enreach.workload.QueryGetAllManagerWRWorkloadByEpochRequest", query_61.QueryGetAllManagerWRWorkloadByEpochRequest],
    ["/enreach.workload.Params", params_1.Params],
    ["/enreach.workload.QueryGetNodeWorkloadResponse", query_62.QueryGetNodeWorkloadResponse],
    ["/enreach.workload.QueryGetAllManagerWRWorkloadByEpochResponse", query_63.QueryGetAllManagerWRWorkloadByEpochResponse],
    ["/enreach.workload.QueryGetAllNodeWorkloadByEpochRequest", query_64.QueryGetAllNodeWorkloadByEpochRequest],
    ["/enreach.workload.QueryGetManagerCSWorkloadRequest", query_65.QueryGetManagerCSWorkloadRequest],
    ["/enreach.workload.QueryGetAllEpochProcessDataResponse", query_66.QueryGetAllEpochProcessDataResponse],
    ["/enreach.workload.MsgSubmitReputationPointChangeData", tx_11.MsgSubmitReputationPointChangeData],
    ["/enreach.workload.MsgSubmitCheatStatusCR", tx_12.MsgSubmitCheatStatusCR],
    ["/enreach.workload.QueryGetManagerRPWorkloadRequest", query_67.QueryGetManagerRPWorkloadRequest],
    ["/enreach.workload.QueryGetReputationPointChangeDataResponse", query_68.QueryGetReputationPointChangeDataResponse],
    ["/enreach.workload.Superior", superior_1.Superior],
    ["/enreach.workload.QueryGetAllHistoryEpochRequest", query_69.QueryGetAllHistoryEpochRequest],
    ["/enreach.workload.QueryGetManagerWRWorkloadResponse", query_70.QueryGetManagerWRWorkloadResponse],
    ["/enreach.workload.Workreport", workreport_5.Workreport],
];
exports.msgTypes = msgTypes;
