"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const query_1 = require("./types/enreach/workload/query");
const query_2 = require("./types/enreach/workload/query");
const query_3 = require("./types/enreach/workload/query");
const query_4 = require("./types/enreach/workload/query");
const query_5 = require("./types/enreach/workload/query");
const query_6 = require("./types/enreach/workload/query");
const query_7 = require("./types/enreach/workload/query");
const query_8 = require("./types/enreach/workload/query");
const reputationpoint_1 = require("./types/enreach/workload/reputationpoint");
const workload_1 = require("./types/enreach/workload/workload");
const query_9 = require("./types/enreach/workload/query");
const query_10 = require("./types/enreach/workload/query");
const era_info_1 = require("./types/enreach/workload/era_info");
const cheat_status_1 = require("./types/enreach/workload/cheat_status");
const query_11 = require("./types/enreach/workload/query");
const tx_1 = require("./types/enreach/workload/tx");
const query_12 = require("./types/enreach/workload/query");
const reputationpoint_2 = require("./types/enreach/workload/reputationpoint");
const query_13 = require("./types/enreach/workload/query");
const query_14 = require("./types/enreach/workload/query");
const workload_2 = require("./types/enreach/workload/workload");
const query_15 = require("./types/enreach/workload/query");
const reputationpoint_3 = require("./types/enreach/workload/reputationpoint");
const query_16 = require("./types/enreach/workload/query");
const workload_3 = require("./types/enreach/workload/workload");
const workreport_1 = require("./types/enreach/workload/workreport");
const query_17 = require("./types/enreach/workload/query");
const query_18 = require("./types/enreach/workload/query");
const query_19 = require("./types/enreach/workload/query");
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
const query_30 = require("./types/enreach/workload/query");
const query_31 = require("./types/enreach/workload/query");
const query_32 = require("./types/enreach/workload/query");
const query_33 = require("./types/enreach/workload/query");
const query_34 = require("./types/enreach/workload/query");
const query_35 = require("./types/enreach/workload/query");
const query_36 = require("./types/enreach/workload/query");
const query_37 = require("./types/enreach/workload/query");
const workload_4 = require("./types/enreach/workload/workload");
const query_38 = require("./types/enreach/workload/query");
const query_39 = require("./types/enreach/workload/query");
const query_40 = require("./types/enreach/workload/query");
const tx_2 = require("./types/enreach/workload/tx");
const genesis_1 = require("./types/enreach/workload/genesis");
const query_41 = require("./types/enreach/workload/query");
const query_42 = require("./types/enreach/workload/query");
const query_43 = require("./types/enreach/workload/query");
const query_44 = require("./types/enreach/workload/query");
const query_45 = require("./types/enreach/workload/query");
const tx_3 = require("./types/enreach/workload/tx");
const cheat_status_2 = require("./types/enreach/workload/cheat_status");
const query_46 = require("./types/enreach/workload/query");
const query_47 = require("./types/enreach/workload/query");
const query_48 = require("./types/enreach/workload/query");
const tx_4 = require("./types/enreach/workload/tx");
const tx_5 = require("./types/enreach/workload/tx");
const query_49 = require("./types/enreach/workload/query");
const query_50 = require("./types/enreach/workload/query");
const tx_6 = require("./types/enreach/workload/tx");
const reputationpoint_4 = require("./types/enreach/workload/reputationpoint");
const query_51 = require("./types/enreach/workload/query");
const query_52 = require("./types/enreach/workload/query");
const reputationpoint_5 = require("./types/enreach/workload/reputationpoint");
const workreport_2 = require("./types/enreach/workload/workreport");
const workreport_3 = require("./types/enreach/workload/workreport");
const cheat_status_3 = require("./types/enreach/workload/cheat_status");
const query_53 = require("./types/enreach/workload/query");
const workreport_4 = require("./types/enreach/workload/workreport");
const query_54 = require("./types/enreach/workload/query");
const epoch_info_1 = require("./types/enreach/workload/epoch_info");
const tx_7 = require("./types/enreach/workload/tx");
const query_55 = require("./types/enreach/workload/query");
const query_56 = require("./types/enreach/workload/query");
const query_57 = require("./types/enreach/workload/query");
const query_58 = require("./types/enreach/workload/query");
const reputationpoint_6 = require("./types/enreach/workload/reputationpoint");
const tx_8 = require("./types/enreach/workload/tx");
const tx_9 = require("./types/enreach/workload/tx");
const cheat_status_4 = require("./types/enreach/workload/cheat_status");
const query_59 = require("./types/enreach/workload/query");
const query_60 = require("./types/enreach/workload/query");
const tx_10 = require("./types/enreach/workload/tx");
const query_61 = require("./types/enreach/workload/query");
const query_62 = require("./types/enreach/workload/query");
const query_63 = require("./types/enreach/workload/query");
const superior_1 = require("./types/enreach/workload/superior");
const cheat_status_5 = require("./types/enreach/workload/cheat_status");
const query_64 = require("./types/enreach/workload/query");
const query_65 = require("./types/enreach/workload/query");
const params_1 = require("./types/enreach/workload/params");
const tx_11 = require("./types/enreach/workload/tx");
const query_66 = require("./types/enreach/workload/query");
const query_67 = require("./types/enreach/workload/query");
const query_68 = require("./types/enreach/workload/query");
const tx_12 = require("./types/enreach/workload/tx");
const workreport_5 = require("./types/enreach/workload/workreport");
const query_69 = require("./types/enreach/workload/query");
const query_70 = require("./types/enreach/workload/query");
const msgTypes = [
    ["/enreach.workload.QueryGetAllEraCheatStatusProcessDataRequest", query_1.QueryGetAllEraCheatStatusProcessDataRequest],
    ["/enreach.workload.QueryGetManagerCSWorkloadRequest", query_2.QueryGetManagerCSWorkloadRequest],
    ["/enreach.workload.QueryGetManagerCSWorkloadResponse", query_3.QueryGetManagerCSWorkloadResponse],
    ["/enreach.workload.QueryGetAllEpochProcessDataRequest", query_4.QueryGetAllEpochProcessDataRequest],
    ["/enreach.workload.QueryGetCheatStatusCRDataRequest", query_5.QueryGetCheatStatusCRDataRequest],
    ["/enreach.workload.QueryGetWorkreportRequest", query_6.QueryGetWorkreportRequest],
    ["/enreach.workload.QueryGetPendingNextEraResponse", query_7.QueryGetPendingNextEraResponse],
    ["/enreach.workload.QueryGetAllCheatStatusCRDataByEraResponse", query_8.QueryGetAllCheatStatusCRDataByEraResponse],
    ["/enreach.workload.ReputationPointChangeRawDataDB", reputationpoint_1.ReputationPointChangeRawDataDB],
    ["/enreach.workload.NodeWorkload", workload_1.NodeWorkload],
    ["/enreach.workload.QueryParamsRequest", query_9.QueryParamsRequest],
    ["/enreach.workload.QueryGetHistoryEpochResponse", query_10.QueryGetHistoryEpochResponse],
    ["/enreach.workload.EraInfo", era_info_1.EraInfo],
    ["/enreach.workload.CheatStatusCRMapDB", cheat_status_1.CheatStatusCRMapDB],
    ["/enreach.workload.QueryGetCurrentEpochResponse", query_11.QueryGetCurrentEpochResponse],
    ["/enreach.workload.MsgUpdateSuperior", tx_1.MsgUpdateSuperior],
    ["/enreach.workload.QueryGetPendingNextEraRequest", query_12.QueryGetPendingNextEraRequest],
    ["/enreach.workload.EraProcessData", reputationpoint_2.EraProcessData],
    ["/enreach.workload.QueryGetNodeWorkloadResponse", query_13.QueryGetNodeWorkloadResponse],
    ["/enreach.workload.QueryGetAllManagerRPWorkloadByEraRequest", query_14.QueryGetAllManagerRPWorkloadByEraRequest],
    ["/enreach.workload.ManagerCSWorkload", workload_2.ManagerCSWorkload],
    ["/enreach.workload.QueryGetEpochProcessDataRequest", query_15.QueryGetEpochProcessDataRequest],
    ["/enreach.workload.ReputationPointChangeRawData", reputationpoint_3.ReputationPointChangeRawData],
    ["/enreach.workload.QueryGetAllCheatStatusCRDataByEraRequest", query_16.QueryGetAllCheatStatusCRDataByEraRequest],
    ["/enreach.workload.ManagerWRWorkload", workload_3.ManagerWRWorkload],
    ["/enreach.workload.ManagerNodeScoreMap", workreport_1.ManagerNodeScoreMap],
    ["/enreach.workload.QueryGetAllManagerCSWorkloadByEraResponse", query_17.QueryGetAllManagerCSWorkloadByEraResponse],
    ["/enreach.workload.QueryGetReputationPointChangeDataResponse", query_18.QueryGetReputationPointChangeDataResponse],
    ["/enreach.workload.QueryGetManagerRPWorkloadResponse", query_19.QueryGetManagerRPWorkloadResponse],
    ["/enreach.workload.QueryGetAllEraCheatStatusProcessDataResponse", query_20.QueryGetAllEraCheatStatusProcessDataResponse],
    ["/enreach.workload.QueryGetManagerWRWorkloadRequest", query_21.QueryGetManagerWRWorkloadRequest],
    ["/enreach.workload.QueryGetAllManagerWRWorkloadByEpochResponse", query_22.QueryGetAllManagerWRWorkloadByEpochResponse],
    ["/enreach.workload.QueryGetAllWorkreportByEpochRequest", query_23.QueryGetAllWorkreportByEpochRequest],
    ["/enreach.workload.QueryGetHistoryEraRequest", query_24.QueryGetHistoryEraRequest],
    ["/enreach.workload.QueryGetAllReputationPointChangeDataByEraRequest", query_25.QueryGetAllReputationPointChangeDataByEraRequest],
    ["/enreach.workload.QueryGetAllWorkreportByEpochResponse", query_26.QueryGetAllWorkreportByEpochResponse],
    ["/enreach.workload.QueryGetSuperiorRequest", query_27.QueryGetSuperiorRequest],
    ["/enreach.workload.QueryParamRequest", query_28.QueryParamRequest],
    ["/enreach.workload.QueryGetEpochLengthResponse", query_29.QueryGetEpochLengthResponse],
    ["/enreach.workload.QueryGetManagerRPWorkloadRequest", query_30.QueryGetManagerRPWorkloadRequest],
    ["/enreach.workload.QueryGetWorkreportResponse", query_31.QueryGetWorkreportResponse],
    ["/enreach.workload.QueryGetCurrentEraRequest", query_32.QueryGetCurrentEraRequest],
    ["/enreach.workload.QueryGetAllReputationDeltaPointByEraRequest", query_33.QueryGetAllReputationDeltaPointByEraRequest],
    ["/enreach.workload.QueryParamsResponse", query_34.QueryParamsResponse],
    ["/enreach.workload.QueryGetHistoryEpochRequest", query_35.QueryGetHistoryEpochRequest],
    ["/enreach.workload.QueryGetEraProcessDataRequest", query_36.QueryGetEraProcessDataRequest],
    ["/enreach.workload.QueryGetEraCheatStatusProcessDataResponse", query_37.QueryGetEraCheatStatusProcessDataResponse],
    ["/enreach.workload.ManagerRPWorkload", workload_4.ManagerRPWorkload],
    ["/enreach.workload.QueryGetPendingNextEpochResponse", query_38.QueryGetPendingNextEpochResponse],
    ["/enreach.workload.QueryGetAllManagerCSWorkloadByEraRequest", query_39.QueryGetAllManagerCSWorkloadByEraRequest],
    ["/enreach.workload.QueryGetAllReputationPointChangeDataByEraResponse", query_40.QueryGetAllReputationPointChangeDataByEraResponse],
    ["/enreach.workload.MsgUpdateSuperiorResponse", tx_2.MsgUpdateSuperiorResponse],
    ["/enreach.workload.GenesisState", genesis_1.GenesisState],
    ["/enreach.workload.QueryGetReputationDeltaPointRequest", query_41.QueryGetReputationDeltaPointRequest],
    ["/enreach.workload.QueryGetPendingNextEpochRequest", query_42.QueryGetPendingNextEpochRequest],
    ["/enreach.workload.QueryGetSuperiorResponse", query_43.QueryGetSuperiorResponse],
    ["/enreach.workload.QueryGetEraLengthResponse", query_44.QueryGetEraLengthResponse],
    ["/enreach.workload.QueryGetAllReputationDeltaPointByEraResponse", query_45.QueryGetAllReputationDeltaPointByEraResponse],
    ["/enreach.workload.MsgSubmitWorkreportsResponse", tx_3.MsgSubmitWorkreportsResponse],
    ["/enreach.workload.CheatStatusCRDB", cheat_status_2.CheatStatusCRDB],
    ["/enreach.workload.QueryGetAllManagerWRWorkloadByEpochRequest", query_46.QueryGetAllManagerWRWorkloadByEpochRequest],
    ["/enreach.workload.QueryGetReputationPointChangeDataRequest", query_47.QueryGetReputationPointChangeDataRequest],
    ["/enreach.workload.QueryGetEraCheatStatusProcessDataRequest", query_48.QueryGetEraCheatStatusProcessDataRequest],
    ["/enreach.workload.MsgUpdateParam", tx_4.MsgUpdateParam],
    ["/enreach.workload.MsgSubmitCheatStatusCR", tx_5.MsgSubmitCheatStatusCR],
    ["/enreach.workload.QueryGetAllEpochProcessDataResponse", query_49.QueryGetAllEpochProcessDataResponse],
    ["/enreach.workload.QueryGetAllHistoryEraRequest", query_50.QueryGetAllHistoryEraRequest],
    ["/enreach.workload.MsgSubmitCheatStatusCRResponse", tx_6.MsgSubmitCheatStatusCRResponse],
    ["/enreach.workload.ReputationDeltaPoint", reputationpoint_4.ReputationDeltaPoint],
    ["/enreach.workload.QueryGetCurrentEraResponse", query_51.QueryGetCurrentEraResponse],
    ["/enreach.workload.QueryGetAllEraProcessDataRequest", query_52.QueryGetAllEraProcessDataRequest],
    ["/enreach.workload.ReputationPointChangeRawDataMapDB", reputationpoint_5.ReputationPointChangeRawDataMapDB],
    ["/enreach.workload.NodeScore", workreport_2.NodeScore],
    ["/enreach.workload.NodeScoreDB", workreport_3.NodeScoreDB],
    ["/enreach.workload.CheatStatusCR", cheat_status_3.CheatStatusCR],
    ["/enreach.workload.QueryGetAllNodeWorkloadByEpochRequest", query_53.QueryGetAllNodeWorkloadByEpochRequest],
    ["/enreach.workload.EpochProcessData", workreport_4.EpochProcessData],
    ["/enreach.workload.QueryGetAllNodeWorkloadByEpochResponse", query_54.QueryGetAllNodeWorkloadByEpochResponse],
    ["/enreach.workload.EpochInfo", epoch_info_1.EpochInfo],
    ["/enreach.workload.MsgCreateSuperior", tx_7.MsgCreateSuperior],
    ["/enreach.workload.QueryGetEpochLengthRequest", query_55.QueryGetEpochLengthRequest],
    ["/enreach.workload.QueryGetAllEraProcessDataResponse", query_56.QueryGetAllEraProcessDataResponse],
    ["/enreach.workload.QueryGetAllHistoryEpochResponse", query_57.QueryGetAllHistoryEpochResponse],
    ["/enreach.workload.QueryGetReputationDeltaPointResponse", query_58.QueryGetReputationDeltaPointResponse],
    ["/enreach.workload.ReputationPointChangeData", reputationpoint_6.ReputationPointChangeData],
    ["/enreach.workload.MsgUpdateParamResponse", tx_8.MsgUpdateParamResponse],
    ["/enreach.workload.MsgSubmitReputationPointChangeDataResponse", tx_9.MsgSubmitReputationPointChangeDataResponse],
    ["/enreach.workload.EraCheatStatusProcessData", cheat_status_4.EraCheatStatusProcessData],
    ["/enreach.workload.QueryGetCurrentEpochRequest", query_59.QueryGetCurrentEpochRequest],
    ["/enreach.workload.QueryGetAllHistoryEraResponse", query_60.QueryGetAllHistoryEraResponse],
    ["/enreach.workload.MsgSubmitWorkreports", tx_10.MsgSubmitWorkreports],
    ["/enreach.workload.QueryGetEpochProcessDataResponse", query_61.QueryGetEpochProcessDataResponse],
    ["/enreach.workload.QueryGetAllManagerRPWorkloadByEraResponse", query_62.QueryGetAllManagerRPWorkloadByEraResponse],
    ["/enreach.workload.QueryGetCheatStatusCRDataResponse", query_63.QueryGetCheatStatusCRDataResponse],
    ["/enreach.workload.Superior", superior_1.Superior],
    ["/enreach.workload.CheatStatusCRData", cheat_status_5.CheatStatusCRData],
    ["/enreach.workload.QueryParamResponse", query_64.QueryParamResponse],
    ["/enreach.workload.QueryGetHistoryEraResponse", query_65.QueryGetHistoryEraResponse],
    ["/enreach.workload.Params", params_1.Params],
    ["/enreach.workload.MsgSubmitReputationPointChangeData", tx_11.MsgSubmitReputationPointChangeData],
    ["/enreach.workload.QueryGetManagerWRWorkloadResponse", query_66.QueryGetManagerWRWorkloadResponse],
    ["/enreach.workload.QueryGetEraLengthRequest", query_67.QueryGetEraLengthRequest],
    ["/enreach.workload.QueryGetEraProcessDataResponse", query_68.QueryGetEraProcessDataResponse],
    ["/enreach.workload.MsgCreateSuperiorResponse", tx_12.MsgCreateSuperiorResponse],
    ["/enreach.workload.Workreport", workreport_5.Workreport],
    ["/enreach.workload.QueryGetAllHistoryEpochRequest", query_69.QueryGetAllHistoryEpochRequest],
    ["/enreach.workload.QueryGetNodeWorkloadRequest", query_70.QueryGetNodeWorkloadRequest],
];
exports.msgTypes = msgTypes;
