import { GeneratedType } from "@cosmjs/proto-signing";
import { GenesisState } from "./types/enreach/workload/genesis";
import { MsgSubmitWorkreports } from "./types/enreach/workload/tx";
import { QueryGetAllWorkreportByEpochRequest } from "./types/enreach/workload/query";
import { QueryGetSuperiorRequest } from "./types/enreach/workload/query";
import { QueryGetHistoryEraRequest } from "./types/enreach/workload/query";
import { MsgCreateSuperiorResponse } from "./types/enreach/workload/tx";
import { QueryGetEpochProcessDataRequest } from "./types/enreach/workload/query";
import { NodeScore } from "./types/enreach/workload/workreport";
import { QueryParamResponse } from "./types/enreach/workload/query";
import { QueryGetCurrentEraResponse } from "./types/enreach/workload/query";
import { QueryGetEraProcessDataResponse } from "./types/enreach/workload/query";
import { CheatStatusCRDB } from "./types/enreach/workload/cheat_status";
import { QueryGetAllReputationPointChangeDataByEraRequest } from "./types/enreach/workload/query";
import { QueryGetCheatStatusCRDataResponse } from "./types/enreach/workload/query";
import { ReputationPointChangeRawData } from "./types/enreach/workload/reputationpoint";
import { EraInfo } from "./types/enreach/workload/era_info";
import { NodeWorkload } from "./types/enreach/workload/workload";
import { QueryGetManagerRPWorkloadResponse } from "./types/enreach/workload/query";
import { QueryGetAllManagerCSWorkloadByEraRequest } from "./types/enreach/workload/query";
import { QueryGetEraCheatStatusProcessDataResponse } from "./types/enreach/workload/query";
import { QueryGetAllEraCheatStatusProcessDataRequest } from "./types/enreach/workload/query";
import { ReputationDeltaPoint } from "./types/enreach/workload/reputationpoint";
import { EpochInfo } from "./types/enreach/workload/epoch_info";
import { QueryGetAllHistoryEraRequest } from "./types/enreach/workload/query";
import { EraProcessData } from "./types/enreach/workload/reputationpoint";
import { ManagerWRWorkload } from "./types/enreach/workload/workload";
import { QueryGetCurrentEraRequest } from "./types/enreach/workload/query";
import { CheatStatusCR } from "./types/enreach/workload/cheat_status";
import { CheatStatusCRMapDB } from "./types/enreach/workload/cheat_status";
import { QueryGetReputationDeltaPointResponse } from "./types/enreach/workload/query";
import { QueryGetPendingNextEraRequest } from "./types/enreach/workload/query";
import { QueryGetPendingNextEraResponse } from "./types/enreach/workload/query";
import { QueryGetAllReputationPointChangeDataByEraResponse } from "./types/enreach/workload/query";
import { QueryGetAllReputationDeltaPointByEraResponse } from "./types/enreach/workload/query";
import { MsgUpdateParamResponse } from "./types/enreach/workload/tx";
import { MsgSubmitWorkreportsResponse } from "./types/enreach/workload/tx";
import { QueryParamRequest } from "./types/enreach/workload/query";
import { NodeScoreDB } from "./types/enreach/workload/workreport";
import { CheatStatusCRData } from "./types/enreach/workload/cheat_status";
import { QueryGetAllCheatStatusCRDataByEraRequest } from "./types/enreach/workload/query";
import { MsgSubmitReputationPointChangeDataResponse } from "./types/enreach/workload/tx";
import { MsgSubmitCheatStatusCRResponse } from "./types/enreach/workload/tx";
import { QueryGetEpochLengthResponse } from "./types/enreach/workload/query";
import { QueryGetWorkreportRequest } from "./types/enreach/workload/query";
import { QueryGetAllEpochProcessDataRequest } from "./types/enreach/workload/query";
import { QueryGetAllReputationDeltaPointByEraRequest } from "./types/enreach/workload/query";
import { QueryGetAllEraProcessDataRequest } from "./types/enreach/workload/query";
import { QueryParamsResponse } from "./types/enreach/workload/query";
import { QueryGetHistoryEpochResponse } from "./types/enreach/workload/query";
import { QueryGetAllNodeWorkloadByEpochResponse } from "./types/enreach/workload/query";
import { QueryGetHistoryEraResponse } from "./types/enreach/workload/query";
import { QueryGetAllEraProcessDataResponse } from "./types/enreach/workload/query";
import { QueryGetNodeWorkloadRequest } from "./types/enreach/workload/query";
import { QueryGetEpochProcessDataResponse } from "./types/enreach/workload/query";
import { MsgUpdateSuperiorResponse } from "./types/enreach/workload/tx";
import { QueryGetPendingNextEpochRequest } from "./types/enreach/workload/query";
import { QueryGetManagerWRWorkloadRequest } from "./types/enreach/workload/query";
import { QueryGetEraLengthRequest } from "./types/enreach/workload/query";
import { QueryGetAllHistoryEraResponse } from "./types/enreach/workload/query";
import { MsgCreateSuperior } from "./types/enreach/workload/tx";
import { QueryGetHistoryEpochRequest } from "./types/enreach/workload/query";
import { QueryGetAllManagerRPWorkloadByEraRequest } from "./types/enreach/workload/query";
import { QueryGetWorkreportResponse } from "./types/enreach/workload/query";
import { QueryGetAllManagerRPWorkloadByEraResponse } from "./types/enreach/workload/query";
import { ReputationPointChangeData } from "./types/enreach/workload/reputationpoint";
import { ManagerNodeScoreMap } from "./types/enreach/workload/workreport";
import { QueryGetCurrentEpochResponse } from "./types/enreach/workload/query";
import { QueryGetPendingNextEpochResponse } from "./types/enreach/workload/query";
import { QueryGetManagerCSWorkloadResponse } from "./types/enreach/workload/query";
import { QueryGetAllWorkreportByEpochResponse } from "./types/enreach/workload/query";
import { QueryGetSuperiorResponse } from "./types/enreach/workload/query";
import { ReputationPointChangeRawDataMapDB } from "./types/enreach/workload/reputationpoint";
import { QueryGetAllCheatStatusCRDataByEraResponse } from "./types/enreach/workload/query";
import { QueryGetEraCheatStatusProcessDataRequest } from "./types/enreach/workload/query";
import { QueryGetAllManagerCSWorkloadByEraResponse } from "./types/enreach/workload/query";
import { QueryGetCheatStatusCRDataRequest } from "./types/enreach/workload/query";
import { QueryGetAllEraCheatStatusProcessDataResponse } from "./types/enreach/workload/query";
import { ReputationPointChangeRawDataDB } from "./types/enreach/workload/reputationpoint";
import { MsgUpdateSuperior } from "./types/enreach/workload/tx";
import { ManagerCSWorkload } from "./types/enreach/workload/workload";
import { QueryParamsRequest } from "./types/enreach/workload/query";
import { QueryGetCurrentEpochRequest } from "./types/enreach/workload/query";
import { QueryGetEraLengthResponse } from "./types/enreach/workload/query";
import { QueryGetReputationPointChangeDataRequest } from "./types/enreach/workload/query";
import { MsgUpdateParam } from "./types/enreach/workload/tx";
import { QueryGetAllHistoryEpochResponse } from "./types/enreach/workload/query";
import { QueryGetEraProcessDataRequest } from "./types/enreach/workload/query";
import { ManagerRPWorkload } from "./types/enreach/workload/workload";
import { QueryGetReputationDeltaPointRequest } from "./types/enreach/workload/query";
import { EpochProcessData } from "./types/enreach/workload/workreport";
import { EraCheatStatusProcessData } from "./types/enreach/workload/cheat_status";
import { QueryGetEpochLengthRequest } from "./types/enreach/workload/query";
import { QueryGetAllManagerWRWorkloadByEpochRequest } from "./types/enreach/workload/query";
import { Params } from "./types/enreach/workload/params";
import { QueryGetNodeWorkloadResponse } from "./types/enreach/workload/query";
import { QueryGetAllManagerWRWorkloadByEpochResponse } from "./types/enreach/workload/query";
import { QueryGetAllNodeWorkloadByEpochRequest } from "./types/enreach/workload/query";
import { QueryGetManagerCSWorkloadRequest } from "./types/enreach/workload/query";
import { QueryGetAllEpochProcessDataResponse } from "./types/enreach/workload/query";
import { MsgSubmitReputationPointChangeData } from "./types/enreach/workload/tx";
import { MsgSubmitCheatStatusCR } from "./types/enreach/workload/tx";
import { QueryGetManagerRPWorkloadRequest } from "./types/enreach/workload/query";
import { QueryGetReputationPointChangeDataResponse } from "./types/enreach/workload/query";
import { Superior } from "./types/enreach/workload/superior";
import { QueryGetAllHistoryEpochRequest } from "./types/enreach/workload/query";
import { QueryGetManagerWRWorkloadResponse } from "./types/enreach/workload/query";
import { Workreport } from "./types/enreach/workload/workreport";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/enreach.workload.GenesisState", GenesisState],
    ["/enreach.workload.MsgSubmitWorkreports", MsgSubmitWorkreports],
    ["/enreach.workload.QueryGetAllWorkreportByEpochRequest", QueryGetAllWorkreportByEpochRequest],
    ["/enreach.workload.QueryGetSuperiorRequest", QueryGetSuperiorRequest],
    ["/enreach.workload.QueryGetHistoryEraRequest", QueryGetHistoryEraRequest],
    ["/enreach.workload.MsgCreateSuperiorResponse", MsgCreateSuperiorResponse],
    ["/enreach.workload.QueryGetEpochProcessDataRequest", QueryGetEpochProcessDataRequest],
    ["/enreach.workload.NodeScore", NodeScore],
    ["/enreach.workload.QueryParamResponse", QueryParamResponse],
    ["/enreach.workload.QueryGetCurrentEraResponse", QueryGetCurrentEraResponse],
    ["/enreach.workload.QueryGetEraProcessDataResponse", QueryGetEraProcessDataResponse],
    ["/enreach.workload.CheatStatusCRDB", CheatStatusCRDB],
    ["/enreach.workload.QueryGetAllReputationPointChangeDataByEraRequest", QueryGetAllReputationPointChangeDataByEraRequest],
    ["/enreach.workload.QueryGetCheatStatusCRDataResponse", QueryGetCheatStatusCRDataResponse],
    ["/enreach.workload.ReputationPointChangeRawData", ReputationPointChangeRawData],
    ["/enreach.workload.EraInfo", EraInfo],
    ["/enreach.workload.NodeWorkload", NodeWorkload],
    ["/enreach.workload.QueryGetManagerRPWorkloadResponse", QueryGetManagerRPWorkloadResponse],
    ["/enreach.workload.QueryGetAllManagerCSWorkloadByEraRequest", QueryGetAllManagerCSWorkloadByEraRequest],
    ["/enreach.workload.QueryGetEraCheatStatusProcessDataResponse", QueryGetEraCheatStatusProcessDataResponse],
    ["/enreach.workload.QueryGetAllEraCheatStatusProcessDataRequest", QueryGetAllEraCheatStatusProcessDataRequest],
    ["/enreach.workload.ReputationDeltaPoint", ReputationDeltaPoint],
    ["/enreach.workload.EpochInfo", EpochInfo],
    ["/enreach.workload.QueryGetAllHistoryEraRequest", QueryGetAllHistoryEraRequest],
    ["/enreach.workload.EraProcessData", EraProcessData],
    ["/enreach.workload.ManagerWRWorkload", ManagerWRWorkload],
    ["/enreach.workload.QueryGetCurrentEraRequest", QueryGetCurrentEraRequest],
    ["/enreach.workload.CheatStatusCR", CheatStatusCR],
    ["/enreach.workload.CheatStatusCRMapDB", CheatStatusCRMapDB],
    ["/enreach.workload.QueryGetReputationDeltaPointResponse", QueryGetReputationDeltaPointResponse],
    ["/enreach.workload.QueryGetPendingNextEraRequest", QueryGetPendingNextEraRequest],
    ["/enreach.workload.QueryGetPendingNextEraResponse", QueryGetPendingNextEraResponse],
    ["/enreach.workload.QueryGetAllReputationPointChangeDataByEraResponse", QueryGetAllReputationPointChangeDataByEraResponse],
    ["/enreach.workload.QueryGetAllReputationDeltaPointByEraResponse", QueryGetAllReputationDeltaPointByEraResponse],
    ["/enreach.workload.MsgUpdateParamResponse", MsgUpdateParamResponse],
    ["/enreach.workload.MsgSubmitWorkreportsResponse", MsgSubmitWorkreportsResponse],
    ["/enreach.workload.QueryParamRequest", QueryParamRequest],
    ["/enreach.workload.NodeScoreDB", NodeScoreDB],
    ["/enreach.workload.CheatStatusCRData", CheatStatusCRData],
    ["/enreach.workload.QueryGetAllCheatStatusCRDataByEraRequest", QueryGetAllCheatStatusCRDataByEraRequest],
    ["/enreach.workload.MsgSubmitReputationPointChangeDataResponse", MsgSubmitReputationPointChangeDataResponse],
    ["/enreach.workload.MsgSubmitCheatStatusCRResponse", MsgSubmitCheatStatusCRResponse],
    ["/enreach.workload.QueryGetEpochLengthResponse", QueryGetEpochLengthResponse],
    ["/enreach.workload.QueryGetWorkreportRequest", QueryGetWorkreportRequest],
    ["/enreach.workload.QueryGetAllEpochProcessDataRequest", QueryGetAllEpochProcessDataRequest],
    ["/enreach.workload.QueryGetAllReputationDeltaPointByEraRequest", QueryGetAllReputationDeltaPointByEraRequest],
    ["/enreach.workload.QueryGetAllEraProcessDataRequest", QueryGetAllEraProcessDataRequest],
    ["/enreach.workload.QueryParamsResponse", QueryParamsResponse],
    ["/enreach.workload.QueryGetHistoryEpochResponse", QueryGetHistoryEpochResponse],
    ["/enreach.workload.QueryGetAllNodeWorkloadByEpochResponse", QueryGetAllNodeWorkloadByEpochResponse],
    ["/enreach.workload.QueryGetHistoryEraResponse", QueryGetHistoryEraResponse],
    ["/enreach.workload.QueryGetAllEraProcessDataResponse", QueryGetAllEraProcessDataResponse],
    ["/enreach.workload.QueryGetNodeWorkloadRequest", QueryGetNodeWorkloadRequest],
    ["/enreach.workload.QueryGetEpochProcessDataResponse", QueryGetEpochProcessDataResponse],
    ["/enreach.workload.MsgUpdateSuperiorResponse", MsgUpdateSuperiorResponse],
    ["/enreach.workload.QueryGetPendingNextEpochRequest", QueryGetPendingNextEpochRequest],
    ["/enreach.workload.QueryGetManagerWRWorkloadRequest", QueryGetManagerWRWorkloadRequest],
    ["/enreach.workload.QueryGetEraLengthRequest", QueryGetEraLengthRequest],
    ["/enreach.workload.QueryGetAllHistoryEraResponse", QueryGetAllHistoryEraResponse],
    ["/enreach.workload.MsgCreateSuperior", MsgCreateSuperior],
    ["/enreach.workload.QueryGetHistoryEpochRequest", QueryGetHistoryEpochRequest],
    ["/enreach.workload.QueryGetAllManagerRPWorkloadByEraRequest", QueryGetAllManagerRPWorkloadByEraRequest],
    ["/enreach.workload.QueryGetWorkreportResponse", QueryGetWorkreportResponse],
    ["/enreach.workload.QueryGetAllManagerRPWorkloadByEraResponse", QueryGetAllManagerRPWorkloadByEraResponse],
    ["/enreach.workload.ReputationPointChangeData", ReputationPointChangeData],
    ["/enreach.workload.ManagerNodeScoreMap", ManagerNodeScoreMap],
    ["/enreach.workload.QueryGetCurrentEpochResponse", QueryGetCurrentEpochResponse],
    ["/enreach.workload.QueryGetPendingNextEpochResponse", QueryGetPendingNextEpochResponse],
    ["/enreach.workload.QueryGetManagerCSWorkloadResponse", QueryGetManagerCSWorkloadResponse],
    ["/enreach.workload.QueryGetAllWorkreportByEpochResponse", QueryGetAllWorkreportByEpochResponse],
    ["/enreach.workload.QueryGetSuperiorResponse", QueryGetSuperiorResponse],
    ["/enreach.workload.ReputationPointChangeRawDataMapDB", ReputationPointChangeRawDataMapDB],
    ["/enreach.workload.QueryGetAllCheatStatusCRDataByEraResponse", QueryGetAllCheatStatusCRDataByEraResponse],
    ["/enreach.workload.QueryGetEraCheatStatusProcessDataRequest", QueryGetEraCheatStatusProcessDataRequest],
    ["/enreach.workload.QueryGetAllManagerCSWorkloadByEraResponse", QueryGetAllManagerCSWorkloadByEraResponse],
    ["/enreach.workload.QueryGetCheatStatusCRDataRequest", QueryGetCheatStatusCRDataRequest],
    ["/enreach.workload.QueryGetAllEraCheatStatusProcessDataResponse", QueryGetAllEraCheatStatusProcessDataResponse],
    ["/enreach.workload.ReputationPointChangeRawDataDB", ReputationPointChangeRawDataDB],
    ["/enreach.workload.MsgUpdateSuperior", MsgUpdateSuperior],
    ["/enreach.workload.ManagerCSWorkload", ManagerCSWorkload],
    ["/enreach.workload.QueryParamsRequest", QueryParamsRequest],
    ["/enreach.workload.QueryGetCurrentEpochRequest", QueryGetCurrentEpochRequest],
    ["/enreach.workload.QueryGetEraLengthResponse", QueryGetEraLengthResponse],
    ["/enreach.workload.QueryGetReputationPointChangeDataRequest", QueryGetReputationPointChangeDataRequest],
    ["/enreach.workload.MsgUpdateParam", MsgUpdateParam],
    ["/enreach.workload.QueryGetAllHistoryEpochResponse", QueryGetAllHistoryEpochResponse],
    ["/enreach.workload.QueryGetEraProcessDataRequest", QueryGetEraProcessDataRequest],
    ["/enreach.workload.ManagerRPWorkload", ManagerRPWorkload],
    ["/enreach.workload.QueryGetReputationDeltaPointRequest", QueryGetReputationDeltaPointRequest],
    ["/enreach.workload.EpochProcessData", EpochProcessData],
    ["/enreach.workload.EraCheatStatusProcessData", EraCheatStatusProcessData],
    ["/enreach.workload.QueryGetEpochLengthRequest", QueryGetEpochLengthRequest],
    ["/enreach.workload.QueryGetAllManagerWRWorkloadByEpochRequest", QueryGetAllManagerWRWorkloadByEpochRequest],
    ["/enreach.workload.Params", Params],
    ["/enreach.workload.QueryGetNodeWorkloadResponse", QueryGetNodeWorkloadResponse],
    ["/enreach.workload.QueryGetAllManagerWRWorkloadByEpochResponse", QueryGetAllManagerWRWorkloadByEpochResponse],
    ["/enreach.workload.QueryGetAllNodeWorkloadByEpochRequest", QueryGetAllNodeWorkloadByEpochRequest],
    ["/enreach.workload.QueryGetManagerCSWorkloadRequest", QueryGetManagerCSWorkloadRequest],
    ["/enreach.workload.QueryGetAllEpochProcessDataResponse", QueryGetAllEpochProcessDataResponse],
    ["/enreach.workload.MsgSubmitReputationPointChangeData", MsgSubmitReputationPointChangeData],
    ["/enreach.workload.MsgSubmitCheatStatusCR", MsgSubmitCheatStatusCR],
    ["/enreach.workload.QueryGetManagerRPWorkloadRequest", QueryGetManagerRPWorkloadRequest],
    ["/enreach.workload.QueryGetReputationPointChangeDataResponse", QueryGetReputationPointChangeDataResponse],
    ["/enreach.workload.Superior", Superior],
    ["/enreach.workload.QueryGetAllHistoryEpochRequest", QueryGetAllHistoryEpochRequest],
    ["/enreach.workload.QueryGetManagerWRWorkloadResponse", QueryGetManagerWRWorkloadResponse],
    ["/enreach.workload.Workreport", Workreport],
    
];

export { msgTypes }