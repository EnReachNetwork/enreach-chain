import { GeneratedType } from "@cosmjs/proto-signing";
import { ReputationPointChangeRawData } from "./types/enreach/workload/reputationpoint";
import { ReputationDeltaPoint } from "./types/enreach/workload/reputationpoint";
import { QueryGetAllCheatStatusCRDataByEraRequest } from "./types/enreach/workload/query";
import { EraCheatStatusProcessData } from "./types/enreach/workload/cheat_status";
import { MsgUpdateHistoryEpochDataDepth } from "./types/enreach/workload/tx";
import { QueryGetPendingNextEpochResponse } from "./types/enreach/workload/query";
import { QueryGetAllReputationDeltaPointByEraResponse } from "./types/enreach/workload/query";
import { MsgCreateSuperior } from "./types/enreach/workload/tx";
import { QueryGetSuperiorResponse } from "./types/enreach/workload/query";
import { QueryGetAllReputationPointChangeDataByEraRequest } from "./types/enreach/workload/query";
import { QueryParamsResponse } from "./types/enreach/workload/query";
import { QueryGetManagerCSWorkloadRequest } from "./types/enreach/workload/query";
import { QueryGetCurrentEraRequest } from "./types/enreach/workload/query";
import { Params } from "./types/enreach/workload/params";
import { QueryGetAllEraProcessDataRequest } from "./types/enreach/workload/query";
import { QueryGetEraCheatStatusProcessDataRequest } from "./types/enreach/workload/query";
import { MsgUpdateSuperior } from "./types/enreach/workload/tx";
import { MsgSubmitCheatStatusCRResponse } from "./types/enreach/workload/tx";
import { QueryGetHistoryEpochRequest } from "./types/enreach/workload/query";
import { QueryGetPendingNextEraResponse } from "./types/enreach/workload/query";
import { NodeWorkload } from "./types/enreach/workload/workload";
import { QueryGetAllManagerRPWorkloadByEraRequest } from "./types/enreach/workload/query";
import { QueryGetAllEpochProcessDataResponse } from "./types/enreach/workload/query";
import { MsgUpdateWorkreportProcessBatchSizeResponse } from "./types/enreach/workload/tx";
import { QueryGetReputationDeltaPointRequest } from "./types/enreach/workload/query";
import { QueryGetCurrentEraResponse } from "./types/enreach/workload/query";
import { QueryGetAllHistoryEraRequest } from "./types/enreach/workload/query";
import { QueryGetCheatStatusCRDataResponse } from "./types/enreach/workload/query";
import { CheatStatusCRDB } from "./types/enreach/workload/cheat_status";
import { MsgSubmitWorkreports } from "./types/enreach/workload/tx";
import { QueryGetWorkreportRequest } from "./types/enreach/workload/query";
import { QueryGetWorkreportProcessBatchSizeRequest } from "./types/enreach/workload/query";
import { ManagerRPWorkload } from "./types/enreach/workload/workload";
import { QueryGetAllHistoryEpochResponse } from "./types/enreach/workload/query";
import { QueryGetAllManagerCSWorkloadByEraResponse } from "./types/enreach/workload/query";
import { QueryGetAllReputationPointChangeDataByEraResponse } from "./types/enreach/workload/query";
import { MsgSubmitWorkreportsResponse } from "./types/enreach/workload/tx";
import { MsgSubmitCheatStatusCR } from "./types/enreach/workload/tx";
import { EraProcessData } from "./types/enreach/workload/reputationpoint";
import { NodeScoreDB } from "./types/enreach/workload/workreport";
import { QueryGetNodeWorkloadRequest } from "./types/enreach/workload/query";
import { QueryGetCheatStatusCRDataRequest } from "./types/enreach/workload/query";
import { QueryGetAllManagerRPWorkloadByEraResponse } from "./types/enreach/workload/query";
import { QueryGetSuperiorRequest } from "./types/enreach/workload/query";
import { QueryGetAllCheatStatusCRDataByEraResponse } from "./types/enreach/workload/query";
import { EraInfo } from "./types/enreach/workload/era_info";
import { QueryGetWorkreportProcessBatchSizeResponse } from "./types/enreach/workload/query";
import { QueryGetEraProcessDataResponse } from "./types/enreach/workload/query";
import { ManagerWRWorkload } from "./types/enreach/workload/workload";
import { MsgUpdateSuperiorResponse } from "./types/enreach/workload/tx";
import { QueryGetAllManagerWRWorkloadByEpochRequest } from "./types/enreach/workload/query";
import { QueryGetAllReputationDeltaPointByEraRequest } from "./types/enreach/workload/query";
import { Superior } from "./types/enreach/workload/superior";
import { QueryGetCurrentEpochRequest } from "./types/enreach/workload/query";
import { QueryGetManagerRPWorkloadRequest } from "./types/enreach/workload/query";
import { CheatStatusCRData } from "./types/enreach/workload/cheat_status";
import { QueryGetAllWorkreportByEpochRequest } from "./types/enreach/workload/query";
import { QueryGetAllHistoryEraResponse } from "./types/enreach/workload/query";
import { QueryGetEraCheatStatusProcessDataResponse } from "./types/enreach/workload/query";
import { QueryGetReputationDeltaPointResponse } from "./types/enreach/workload/query";
import { NodeScore } from "./types/enreach/workload/workreport";
import { QueryGetCurrentEpochResponse } from "./types/enreach/workload/query";
import { QueryGetEraLengthResponse } from "./types/enreach/workload/query";
import { QueryGetManagerCSWorkloadResponse } from "./types/enreach/workload/query";
import { QueryGetEraProcessDataRequest } from "./types/enreach/workload/query";
import { CheatStatusCRMapDB } from "./types/enreach/workload/cheat_status";
import { ManagerCSWorkload } from "./types/enreach/workload/workload";
import { ReputationPointChangeRawDataDB } from "./types/enreach/workload/reputationpoint";
import { QueryGetAllManagerWRWorkloadByEpochResponse } from "./types/enreach/workload/query";
import { MsgUpdateHistoryEpochDataDepthResponse } from "./types/enreach/workload/tx";
import { QueryGetAllManagerCSWorkloadByEraRequest } from "./types/enreach/workload/query";
import { QueryGetReputationPointChangeDataRequest } from "./types/enreach/workload/query";
import { QueryGetReputationPointChangeDataResponse } from "./types/enreach/workload/query";
import { QueryGetAllEraCheatStatusProcessDataResponse } from "./types/enreach/workload/query";
import { Workreport } from "./types/enreach/workload/workreport";
import { ReputationPointChangeData } from "./types/enreach/workload/reputationpoint";
import { QueryParamsRequest } from "./types/enreach/workload/query";
import { QueryGetHistoryEraRequest } from "./types/enreach/workload/query";
import { QueryGetAllNodeWorkloadByEpochRequest } from "./types/enreach/workload/query";
import { QueryGetAllEpochProcessDataRequest } from "./types/enreach/workload/query";
import { EpochProcessData } from "./types/enreach/workload/workreport";
import { ReputationPointChangeRawDataMapDB } from "./types/enreach/workload/reputationpoint";
import { QueryGetHistoryEpochResponse } from "./types/enreach/workload/query";
import { QueryGetManagerWRWorkloadRequest } from "./types/enreach/workload/query";
import { ManagerNodeScoreMap } from "./types/enreach/workload/workreport";
import { MsgCreateSuperiorResponse } from "./types/enreach/workload/tx";
import { MsgSubmitReputationPointChangeData } from "./types/enreach/workload/tx";
import { QueryGetAllHistoryEpochRequest } from "./types/enreach/workload/query";
import { QueryGetEpochLengthResponse } from "./types/enreach/workload/query";
import { QueryGetAllEraProcessDataResponse } from "./types/enreach/workload/query";
import { CheatStatusCR } from "./types/enreach/workload/cheat_status";
import { MsgUpdateParams } from "./types/enreach/workload/tx";
import { MsgUpdateWorkreportProcessBatchSize } from "./types/enreach/workload/tx";
import { QueryGetEpochLengthRequest } from "./types/enreach/workload/query";
import { QueryGetAllNodeWorkloadByEpochResponse } from "./types/enreach/workload/query";
import { GenesisState } from "./types/enreach/workload/genesis";
import { MsgSubmitReputationPointChangeDataResponse } from "./types/enreach/workload/tx";
import { EpochInfo } from "./types/enreach/workload/epoch_info";
import { QueryGetPendingNextEraRequest } from "./types/enreach/workload/query";
import { QueryGetAllEraCheatStatusProcessDataRequest } from "./types/enreach/workload/query";
import { QueryGetManagerRPWorkloadResponse } from "./types/enreach/workload/query";
import { QueryGetHistoryEpochDataDepthResponse } from "./types/enreach/workload/query";
import { QueryGetEpochProcessDataRequest } from "./types/enreach/workload/query";
import { QueryGetWorkreportResponse } from "./types/enreach/workload/query";
import { QueryGetEpochProcessDataResponse } from "./types/enreach/workload/query";
import { MsgUpdateParamsResponse } from "./types/enreach/workload/tx";
import { QueryGetPendingNextEpochRequest } from "./types/enreach/workload/query";
import { QueryGetHistoryEpochDataDepthRequest } from "./types/enreach/workload/query";
import { QueryGetEraLengthRequest } from "./types/enreach/workload/query";
import { QueryGetHistoryEraResponse } from "./types/enreach/workload/query";
import { QueryGetNodeWorkloadResponse } from "./types/enreach/workload/query";
import { QueryGetManagerWRWorkloadResponse } from "./types/enreach/workload/query";
import { QueryGetAllWorkreportByEpochResponse } from "./types/enreach/workload/query";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/enreach.workload.ReputationPointChangeRawData", ReputationPointChangeRawData],
    ["/enreach.workload.ReputationDeltaPoint", ReputationDeltaPoint],
    ["/enreach.workload.QueryGetAllCheatStatusCRDataByEraRequest", QueryGetAllCheatStatusCRDataByEraRequest],
    ["/enreach.workload.EraCheatStatusProcessData", EraCheatStatusProcessData],
    ["/enreach.workload.MsgUpdateHistoryEpochDataDepth", MsgUpdateHistoryEpochDataDepth],
    ["/enreach.workload.QueryGetPendingNextEpochResponse", QueryGetPendingNextEpochResponse],
    ["/enreach.workload.QueryGetAllReputationDeltaPointByEraResponse", QueryGetAllReputationDeltaPointByEraResponse],
    ["/enreach.workload.MsgCreateSuperior", MsgCreateSuperior],
    ["/enreach.workload.QueryGetSuperiorResponse", QueryGetSuperiorResponse],
    ["/enreach.workload.QueryGetAllReputationPointChangeDataByEraRequest", QueryGetAllReputationPointChangeDataByEraRequest],
    ["/enreach.workload.QueryParamsResponse", QueryParamsResponse],
    ["/enreach.workload.QueryGetManagerCSWorkloadRequest", QueryGetManagerCSWorkloadRequest],
    ["/enreach.workload.QueryGetCurrentEraRequest", QueryGetCurrentEraRequest],
    ["/enreach.workload.Params", Params],
    ["/enreach.workload.QueryGetAllEraProcessDataRequest", QueryGetAllEraProcessDataRequest],
    ["/enreach.workload.QueryGetEraCheatStatusProcessDataRequest", QueryGetEraCheatStatusProcessDataRequest],
    ["/enreach.workload.MsgUpdateSuperior", MsgUpdateSuperior],
    ["/enreach.workload.MsgSubmitCheatStatusCRResponse", MsgSubmitCheatStatusCRResponse],
    ["/enreach.workload.QueryGetHistoryEpochRequest", QueryGetHistoryEpochRequest],
    ["/enreach.workload.QueryGetPendingNextEraResponse", QueryGetPendingNextEraResponse],
    ["/enreach.workload.NodeWorkload", NodeWorkload],
    ["/enreach.workload.QueryGetAllManagerRPWorkloadByEraRequest", QueryGetAllManagerRPWorkloadByEraRequest],
    ["/enreach.workload.QueryGetAllEpochProcessDataResponse", QueryGetAllEpochProcessDataResponse],
    ["/enreach.workload.MsgUpdateWorkreportProcessBatchSizeResponse", MsgUpdateWorkreportProcessBatchSizeResponse],
    ["/enreach.workload.QueryGetReputationDeltaPointRequest", QueryGetReputationDeltaPointRequest],
    ["/enreach.workload.QueryGetCurrentEraResponse", QueryGetCurrentEraResponse],
    ["/enreach.workload.QueryGetAllHistoryEraRequest", QueryGetAllHistoryEraRequest],
    ["/enreach.workload.QueryGetCheatStatusCRDataResponse", QueryGetCheatStatusCRDataResponse],
    ["/enreach.workload.CheatStatusCRDB", CheatStatusCRDB],
    ["/enreach.workload.MsgSubmitWorkreports", MsgSubmitWorkreports],
    ["/enreach.workload.QueryGetWorkreportRequest", QueryGetWorkreportRequest],
    ["/enreach.workload.QueryGetWorkreportProcessBatchSizeRequest", QueryGetWorkreportProcessBatchSizeRequest],
    ["/enreach.workload.ManagerRPWorkload", ManagerRPWorkload],
    ["/enreach.workload.QueryGetAllHistoryEpochResponse", QueryGetAllHistoryEpochResponse],
    ["/enreach.workload.QueryGetAllManagerCSWorkloadByEraResponse", QueryGetAllManagerCSWorkloadByEraResponse],
    ["/enreach.workload.QueryGetAllReputationPointChangeDataByEraResponse", QueryGetAllReputationPointChangeDataByEraResponse],
    ["/enreach.workload.MsgSubmitWorkreportsResponse", MsgSubmitWorkreportsResponse],
    ["/enreach.workload.MsgSubmitCheatStatusCR", MsgSubmitCheatStatusCR],
    ["/enreach.workload.EraProcessData", EraProcessData],
    ["/enreach.workload.NodeScoreDB", NodeScoreDB],
    ["/enreach.workload.QueryGetNodeWorkloadRequest", QueryGetNodeWorkloadRequest],
    ["/enreach.workload.QueryGetCheatStatusCRDataRequest", QueryGetCheatStatusCRDataRequest],
    ["/enreach.workload.QueryGetAllManagerRPWorkloadByEraResponse", QueryGetAllManagerRPWorkloadByEraResponse],
    ["/enreach.workload.QueryGetSuperiorRequest", QueryGetSuperiorRequest],
    ["/enreach.workload.QueryGetAllCheatStatusCRDataByEraResponse", QueryGetAllCheatStatusCRDataByEraResponse],
    ["/enreach.workload.EraInfo", EraInfo],
    ["/enreach.workload.QueryGetWorkreportProcessBatchSizeResponse", QueryGetWorkreportProcessBatchSizeResponse],
    ["/enreach.workload.QueryGetEraProcessDataResponse", QueryGetEraProcessDataResponse],
    ["/enreach.workload.ManagerWRWorkload", ManagerWRWorkload],
    ["/enreach.workload.MsgUpdateSuperiorResponse", MsgUpdateSuperiorResponse],
    ["/enreach.workload.QueryGetAllManagerWRWorkloadByEpochRequest", QueryGetAllManagerWRWorkloadByEpochRequest],
    ["/enreach.workload.QueryGetAllReputationDeltaPointByEraRequest", QueryGetAllReputationDeltaPointByEraRequest],
    ["/enreach.workload.Superior", Superior],
    ["/enreach.workload.QueryGetCurrentEpochRequest", QueryGetCurrentEpochRequest],
    ["/enreach.workload.QueryGetManagerRPWorkloadRequest", QueryGetManagerRPWorkloadRequest],
    ["/enreach.workload.CheatStatusCRData", CheatStatusCRData],
    ["/enreach.workload.QueryGetAllWorkreportByEpochRequest", QueryGetAllWorkreportByEpochRequest],
    ["/enreach.workload.QueryGetAllHistoryEraResponse", QueryGetAllHistoryEraResponse],
    ["/enreach.workload.QueryGetEraCheatStatusProcessDataResponse", QueryGetEraCheatStatusProcessDataResponse],
    ["/enreach.workload.QueryGetReputationDeltaPointResponse", QueryGetReputationDeltaPointResponse],
    ["/enreach.workload.NodeScore", NodeScore],
    ["/enreach.workload.QueryGetCurrentEpochResponse", QueryGetCurrentEpochResponse],
    ["/enreach.workload.QueryGetEraLengthResponse", QueryGetEraLengthResponse],
    ["/enreach.workload.QueryGetManagerCSWorkloadResponse", QueryGetManagerCSWorkloadResponse],
    ["/enreach.workload.QueryGetEraProcessDataRequest", QueryGetEraProcessDataRequest],
    ["/enreach.workload.CheatStatusCRMapDB", CheatStatusCRMapDB],
    ["/enreach.workload.ManagerCSWorkload", ManagerCSWorkload],
    ["/enreach.workload.ReputationPointChangeRawDataDB", ReputationPointChangeRawDataDB],
    ["/enreach.workload.QueryGetAllManagerWRWorkloadByEpochResponse", QueryGetAllManagerWRWorkloadByEpochResponse],
    ["/enreach.workload.MsgUpdateHistoryEpochDataDepthResponse", MsgUpdateHistoryEpochDataDepthResponse],
    ["/enreach.workload.QueryGetAllManagerCSWorkloadByEraRequest", QueryGetAllManagerCSWorkloadByEraRequest],
    ["/enreach.workload.QueryGetReputationPointChangeDataRequest", QueryGetReputationPointChangeDataRequest],
    ["/enreach.workload.QueryGetReputationPointChangeDataResponse", QueryGetReputationPointChangeDataResponse],
    ["/enreach.workload.QueryGetAllEraCheatStatusProcessDataResponse", QueryGetAllEraCheatStatusProcessDataResponse],
    ["/enreach.workload.Workreport", Workreport],
    ["/enreach.workload.ReputationPointChangeData", ReputationPointChangeData],
    ["/enreach.workload.QueryParamsRequest", QueryParamsRequest],
    ["/enreach.workload.QueryGetHistoryEraRequest", QueryGetHistoryEraRequest],
    ["/enreach.workload.QueryGetAllNodeWorkloadByEpochRequest", QueryGetAllNodeWorkloadByEpochRequest],
    ["/enreach.workload.QueryGetAllEpochProcessDataRequest", QueryGetAllEpochProcessDataRequest],
    ["/enreach.workload.EpochProcessData", EpochProcessData],
    ["/enreach.workload.ReputationPointChangeRawDataMapDB", ReputationPointChangeRawDataMapDB],
    ["/enreach.workload.QueryGetHistoryEpochResponse", QueryGetHistoryEpochResponse],
    ["/enreach.workload.QueryGetManagerWRWorkloadRequest", QueryGetManagerWRWorkloadRequest],
    ["/enreach.workload.ManagerNodeScoreMap", ManagerNodeScoreMap],
    ["/enreach.workload.MsgCreateSuperiorResponse", MsgCreateSuperiorResponse],
    ["/enreach.workload.MsgSubmitReputationPointChangeData", MsgSubmitReputationPointChangeData],
    ["/enreach.workload.QueryGetAllHistoryEpochRequest", QueryGetAllHistoryEpochRequest],
    ["/enreach.workload.QueryGetEpochLengthResponse", QueryGetEpochLengthResponse],
    ["/enreach.workload.QueryGetAllEraProcessDataResponse", QueryGetAllEraProcessDataResponse],
    ["/enreach.workload.CheatStatusCR", CheatStatusCR],
    ["/enreach.workload.MsgUpdateParams", MsgUpdateParams],
    ["/enreach.workload.MsgUpdateWorkreportProcessBatchSize", MsgUpdateWorkreportProcessBatchSize],
    ["/enreach.workload.QueryGetEpochLengthRequest", QueryGetEpochLengthRequest],
    ["/enreach.workload.QueryGetAllNodeWorkloadByEpochResponse", QueryGetAllNodeWorkloadByEpochResponse],
    ["/enreach.workload.GenesisState", GenesisState],
    ["/enreach.workload.MsgSubmitReputationPointChangeDataResponse", MsgSubmitReputationPointChangeDataResponse],
    ["/enreach.workload.EpochInfo", EpochInfo],
    ["/enreach.workload.QueryGetPendingNextEraRequest", QueryGetPendingNextEraRequest],
    ["/enreach.workload.QueryGetAllEraCheatStatusProcessDataRequest", QueryGetAllEraCheatStatusProcessDataRequest],
    ["/enreach.workload.QueryGetManagerRPWorkloadResponse", QueryGetManagerRPWorkloadResponse],
    ["/enreach.workload.QueryGetHistoryEpochDataDepthResponse", QueryGetHistoryEpochDataDepthResponse],
    ["/enreach.workload.QueryGetEpochProcessDataRequest", QueryGetEpochProcessDataRequest],
    ["/enreach.workload.QueryGetWorkreportResponse", QueryGetWorkreportResponse],
    ["/enreach.workload.QueryGetEpochProcessDataResponse", QueryGetEpochProcessDataResponse],
    ["/enreach.workload.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/enreach.workload.QueryGetPendingNextEpochRequest", QueryGetPendingNextEpochRequest],
    ["/enreach.workload.QueryGetHistoryEpochDataDepthRequest", QueryGetHistoryEpochDataDepthRequest],
    ["/enreach.workload.QueryGetEraLengthRequest", QueryGetEraLengthRequest],
    ["/enreach.workload.QueryGetHistoryEraResponse", QueryGetHistoryEraResponse],
    ["/enreach.workload.QueryGetNodeWorkloadResponse", QueryGetNodeWorkloadResponse],
    ["/enreach.workload.QueryGetManagerWRWorkloadResponse", QueryGetManagerWRWorkloadResponse],
    ["/enreach.workload.QueryGetAllWorkreportByEpochResponse", QueryGetAllWorkreportByEpochResponse],
    
];

export { msgTypes }