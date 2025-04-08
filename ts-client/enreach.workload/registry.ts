import { GeneratedType } from "@cosmjs/proto-signing";
import { QueryGetAllManagerWRWorkloadByEpochRequest } from "./types/enreach/workload/query";
import { QueryGetSuperiorResponse } from "./types/enreach/workload/query";
import { QueryGetReputationPointRequest } from "./types/enreach/workload/query";
import { ManagerWRWorkload } from "./types/enreach/workload/workload";
import { ReputationPointChangeRawDataMapDB } from "./types/enreach/workload/reputationpoint";
import { MsgSubmitWorkreportsResponse } from "./types/enreach/workload/tx";
import { MsgCreateSuperiorResponse } from "./types/enreach/workload/tx";
import { MsgSubmitReputationPointChangeDataResponse } from "./types/enreach/workload/tx";
import { NodeScore } from "./types/enreach/workload/workreport";
import { NodeScoreDB } from "./types/enreach/workload/workreport";
import { QueryParamsResponse } from "./types/enreach/workload/query";
import { GenesisState } from "./types/enreach/workload/genesis";
import { QueryGetCurrentEpochResponse } from "./types/enreach/workload/query";
import { ManagerNodeScoreMap } from "./types/enreach/workload/workreport";
import { Workreport } from "./types/enreach/workload/workreport";
import { QueryGetCurrentEpochRequest } from "./types/enreach/workload/query";
import { QueryGetManagerWRWorkloadRequest } from "./types/enreach/workload/query";
import { QueryGetWorkreportProcessBatchSizeResponse } from "./types/enreach/workload/query";
import { MsgUpdateWorkreportProcessBatchSizeResponse } from "./types/enreach/workload/tx";
import { EraProcessData } from "./types/enreach/workload/reputationpoint";
import { NodeWorkload } from "./types/enreach/workload/workload";
import { MsgSubmitReputationPointChangeData } from "./types/enreach/workload/tx";
import { EpochProcessData } from "./types/enreach/workload/workreport";
import { QueryGetPendingNextEpochResponse } from "./types/enreach/workload/query";
import { QueryGetHistoryEpochRequest } from "./types/enreach/workload/query";
import { QueryGetManagerRPWorkloadResponse } from "./types/enreach/workload/query";
import { ReputationPointChangeData } from "./types/enreach/workload/reputationpoint";
import { QueryGetWorkreportResponse } from "./types/enreach/workload/query";
import { QueryGetWorkreportProcessBatchSizeRequest } from "./types/enreach/workload/query";
import { QueryGetAllEpochProcessDataResponse } from "./types/enreach/workload/query";
import { Superior } from "./types/enreach/workload/superior";
import { QueryGetAllManagerRPWorkloadByEraRequest } from "./types/enreach/workload/query";
import { QueryGetAllManagerRPWorkloadByEraResponse } from "./types/enreach/workload/query";
import { QueryGetHistoryEpochResponse } from "./types/enreach/workload/query";
import { ManagerRPWorkload } from "./types/enreach/workload/workload";
import { QueryGetCurrentEraResponse } from "./types/enreach/workload/query";
import { QueryGetReputationDeltaPointResponse } from "./types/enreach/workload/query";
import { MsgUpdateWorkreportProcessBatchSize } from "./types/enreach/workload/tx";
import { MsgUpdateHistoryEpochDataDepth } from "./types/enreach/workload/tx";
import { QueryGetEpochLengthRequest } from "./types/enreach/workload/query";
import { QueryGetEpochProcessDataResponse } from "./types/enreach/workload/query";
import { QueryGetSuperiorRequest } from "./types/enreach/workload/query";
import { QueryGetNodeWorkloadResponse } from "./types/enreach/workload/query";
import { QueryGetNodeWorkloadRequest } from "./types/enreach/workload/query";
import { QueryGetAllNodeWorkloadByEpochRequest } from "./types/enreach/workload/query";
import { QueryGetManagerWRWorkloadResponse } from "./types/enreach/workload/query";
import { QueryGetAllReputationDeltaPointByEraRequest } from "./types/enreach/workload/query";
import { QueryGetReputationPointResponse } from "./types/enreach/workload/query";
import { QueryGetEraProcessDataResponse } from "./types/enreach/workload/query";
import { ReputationPointChangeRawData } from "./types/enreach/workload/reputationpoint";
import { EpochInfo } from "./types/enreach/workload/epoch_info";
import { QueryParamsRequest } from "./types/enreach/workload/query";
import { QueryGetEpochLengthResponse } from "./types/enreach/workload/query";
import { QueryGetAllHistoryEpochRequest } from "./types/enreach/workload/query";
import { QueryGetEraLengthRequest } from "./types/enreach/workload/query";
import { QueryGetEraLengthResponse } from "./types/enreach/workload/query";
import { QueryGetCurrentEraRequest } from "./types/enreach/workload/query";
import { ReputationPoint } from "./types/enreach/workload/reputationpoint";
import { QueryGetAllReputationPointChangeDataByEraResponse } from "./types/enreach/workload/query";
import { QueryGetAllReputationPointRequest } from "./types/enreach/workload/query";
import { QueryGetAllEraProcessDataRequest } from "./types/enreach/workload/query";
import { QueryGetReputationPointChangeDataResponse } from "./types/enreach/workload/query";
import { QueryGetAllReputationDeltaPointByEraResponse } from "./types/enreach/workload/query";
import { MsgSubmitWorkreports } from "./types/enreach/workload/tx";
import { MsgCreateSuperior } from "./types/enreach/workload/tx";
import { QueryGetAllWorkreportByEpochResponse } from "./types/enreach/workload/query";
import { QueryGetHistoryEpochDataDepthResponse } from "./types/enreach/workload/query";
import { QueryGetReputationDeltaPointRequest } from "./types/enreach/workload/query";
import { ReputationDeltaPoint } from "./types/enreach/workload/reputationpoint";
import { MsgUpdateHistoryEpochDataDepthResponse } from "./types/enreach/workload/tx";
import { MsgUpdateSuperiorResponse } from "./types/enreach/workload/tx";
import { QueryGetAllHistoryEpochResponse } from "./types/enreach/workload/query";
import { QueryGetManagerRPWorkloadRequest } from "./types/enreach/workload/query";
import { QueryGetHistoryEpochDataDepthRequest } from "./types/enreach/workload/query";
import { QueryGetAllReputationPointChangeDataByEraRequest } from "./types/enreach/workload/query";
import { QueryGetAllReputationPointResponse } from "./types/enreach/workload/query";
import { MsgUpdateSuperior } from "./types/enreach/workload/tx";
import { QueryGetAllEraProcessDataResponse } from "./types/enreach/workload/query";
import { ReputationPointChangeRawDataDB } from "./types/enreach/workload/reputationpoint";
import { MsgUpdateParams } from "./types/enreach/workload/tx";
import { MsgUpdateParamsResponse } from "./types/enreach/workload/tx";
import { QueryGetAllNodeWorkloadByEpochResponse } from "./types/enreach/workload/query";
import { QueryGetWorkreportRequest } from "./types/enreach/workload/query";
import { QueryGetAllWorkreportByEpochRequest } from "./types/enreach/workload/query";
import { QueryGetEpochProcessDataRequest } from "./types/enreach/workload/query";
import { Params } from "./types/enreach/workload/params";
import { QueryGetEraProcessDataRequest } from "./types/enreach/workload/query";
import { QueryGetAllManagerWRWorkloadByEpochResponse } from "./types/enreach/workload/query";
import { QueryGetAllEpochProcessDataRequest } from "./types/enreach/workload/query";
import { QueryGetReputationPointChangeDataRequest } from "./types/enreach/workload/query";
import { QueryGetPendingNextEpochRequest } from "./types/enreach/workload/query";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/enreach.workload.QueryGetAllManagerWRWorkloadByEpochRequest", QueryGetAllManagerWRWorkloadByEpochRequest],
    ["/enreach.workload.QueryGetSuperiorResponse", QueryGetSuperiorResponse],
    ["/enreach.workload.QueryGetReputationPointRequest", QueryGetReputationPointRequest],
    ["/enreach.workload.ManagerWRWorkload", ManagerWRWorkload],
    ["/enreach.workload.ReputationPointChangeRawDataMapDB", ReputationPointChangeRawDataMapDB],
    ["/enreach.workload.MsgSubmitWorkreportsResponse", MsgSubmitWorkreportsResponse],
    ["/enreach.workload.MsgCreateSuperiorResponse", MsgCreateSuperiorResponse],
    ["/enreach.workload.MsgSubmitReputationPointChangeDataResponse", MsgSubmitReputationPointChangeDataResponse],
    ["/enreach.workload.NodeScore", NodeScore],
    ["/enreach.workload.NodeScoreDB", NodeScoreDB],
    ["/enreach.workload.QueryParamsResponse", QueryParamsResponse],
    ["/enreach.workload.GenesisState", GenesisState],
    ["/enreach.workload.QueryGetCurrentEpochResponse", QueryGetCurrentEpochResponse],
    ["/enreach.workload.ManagerNodeScoreMap", ManagerNodeScoreMap],
    ["/enreach.workload.Workreport", Workreport],
    ["/enreach.workload.QueryGetCurrentEpochRequest", QueryGetCurrentEpochRequest],
    ["/enreach.workload.QueryGetManagerWRWorkloadRequest", QueryGetManagerWRWorkloadRequest],
    ["/enreach.workload.QueryGetWorkreportProcessBatchSizeResponse", QueryGetWorkreportProcessBatchSizeResponse],
    ["/enreach.workload.MsgUpdateWorkreportProcessBatchSizeResponse", MsgUpdateWorkreportProcessBatchSizeResponse],
    ["/enreach.workload.EraProcessData", EraProcessData],
    ["/enreach.workload.NodeWorkload", NodeWorkload],
    ["/enreach.workload.MsgSubmitReputationPointChangeData", MsgSubmitReputationPointChangeData],
    ["/enreach.workload.EpochProcessData", EpochProcessData],
    ["/enreach.workload.QueryGetPendingNextEpochResponse", QueryGetPendingNextEpochResponse],
    ["/enreach.workload.QueryGetHistoryEpochRequest", QueryGetHistoryEpochRequest],
    ["/enreach.workload.QueryGetManagerRPWorkloadResponse", QueryGetManagerRPWorkloadResponse],
    ["/enreach.workload.ReputationPointChangeData", ReputationPointChangeData],
    ["/enreach.workload.QueryGetWorkreportResponse", QueryGetWorkreportResponse],
    ["/enreach.workload.QueryGetWorkreportProcessBatchSizeRequest", QueryGetWorkreportProcessBatchSizeRequest],
    ["/enreach.workload.QueryGetAllEpochProcessDataResponse", QueryGetAllEpochProcessDataResponse],
    ["/enreach.workload.Superior", Superior],
    ["/enreach.workload.QueryGetAllManagerRPWorkloadByEraRequest", QueryGetAllManagerRPWorkloadByEraRequest],
    ["/enreach.workload.QueryGetAllManagerRPWorkloadByEraResponse", QueryGetAllManagerRPWorkloadByEraResponse],
    ["/enreach.workload.QueryGetHistoryEpochResponse", QueryGetHistoryEpochResponse],
    ["/enreach.workload.ManagerRPWorkload", ManagerRPWorkload],
    ["/enreach.workload.QueryGetCurrentEraResponse", QueryGetCurrentEraResponse],
    ["/enreach.workload.QueryGetReputationDeltaPointResponse", QueryGetReputationDeltaPointResponse],
    ["/enreach.workload.MsgUpdateWorkreportProcessBatchSize", MsgUpdateWorkreportProcessBatchSize],
    ["/enreach.workload.MsgUpdateHistoryEpochDataDepth", MsgUpdateHistoryEpochDataDepth],
    ["/enreach.workload.QueryGetEpochLengthRequest", QueryGetEpochLengthRequest],
    ["/enreach.workload.QueryGetEpochProcessDataResponse", QueryGetEpochProcessDataResponse],
    ["/enreach.workload.QueryGetSuperiorRequest", QueryGetSuperiorRequest],
    ["/enreach.workload.QueryGetNodeWorkloadResponse", QueryGetNodeWorkloadResponse],
    ["/enreach.workload.QueryGetNodeWorkloadRequest", QueryGetNodeWorkloadRequest],
    ["/enreach.workload.QueryGetAllNodeWorkloadByEpochRequest", QueryGetAllNodeWorkloadByEpochRequest],
    ["/enreach.workload.QueryGetManagerWRWorkloadResponse", QueryGetManagerWRWorkloadResponse],
    ["/enreach.workload.QueryGetAllReputationDeltaPointByEraRequest", QueryGetAllReputationDeltaPointByEraRequest],
    ["/enreach.workload.QueryGetReputationPointResponse", QueryGetReputationPointResponse],
    ["/enreach.workload.QueryGetEraProcessDataResponse", QueryGetEraProcessDataResponse],
    ["/enreach.workload.ReputationPointChangeRawData", ReputationPointChangeRawData],
    ["/enreach.workload.EpochInfo", EpochInfo],
    ["/enreach.workload.QueryParamsRequest", QueryParamsRequest],
    ["/enreach.workload.QueryGetEpochLengthResponse", QueryGetEpochLengthResponse],
    ["/enreach.workload.QueryGetAllHistoryEpochRequest", QueryGetAllHistoryEpochRequest],
    ["/enreach.workload.QueryGetEraLengthRequest", QueryGetEraLengthRequest],
    ["/enreach.workload.QueryGetEraLengthResponse", QueryGetEraLengthResponse],
    ["/enreach.workload.QueryGetCurrentEraRequest", QueryGetCurrentEraRequest],
    ["/enreach.workload.ReputationPoint", ReputationPoint],
    ["/enreach.workload.QueryGetAllReputationPointChangeDataByEraResponse", QueryGetAllReputationPointChangeDataByEraResponse],
    ["/enreach.workload.QueryGetAllReputationPointRequest", QueryGetAllReputationPointRequest],
    ["/enreach.workload.QueryGetAllEraProcessDataRequest", QueryGetAllEraProcessDataRequest],
    ["/enreach.workload.QueryGetReputationPointChangeDataResponse", QueryGetReputationPointChangeDataResponse],
    ["/enreach.workload.QueryGetAllReputationDeltaPointByEraResponse", QueryGetAllReputationDeltaPointByEraResponse],
    ["/enreach.workload.MsgSubmitWorkreports", MsgSubmitWorkreports],
    ["/enreach.workload.MsgCreateSuperior", MsgCreateSuperior],
    ["/enreach.workload.QueryGetAllWorkreportByEpochResponse", QueryGetAllWorkreportByEpochResponse],
    ["/enreach.workload.QueryGetHistoryEpochDataDepthResponse", QueryGetHistoryEpochDataDepthResponse],
    ["/enreach.workload.QueryGetReputationDeltaPointRequest", QueryGetReputationDeltaPointRequest],
    ["/enreach.workload.ReputationDeltaPoint", ReputationDeltaPoint],
    ["/enreach.workload.MsgUpdateHistoryEpochDataDepthResponse", MsgUpdateHistoryEpochDataDepthResponse],
    ["/enreach.workload.MsgUpdateSuperiorResponse", MsgUpdateSuperiorResponse],
    ["/enreach.workload.QueryGetAllHistoryEpochResponse", QueryGetAllHistoryEpochResponse],
    ["/enreach.workload.QueryGetManagerRPWorkloadRequest", QueryGetManagerRPWorkloadRequest],
    ["/enreach.workload.QueryGetHistoryEpochDataDepthRequest", QueryGetHistoryEpochDataDepthRequest],
    ["/enreach.workload.QueryGetAllReputationPointChangeDataByEraRequest", QueryGetAllReputationPointChangeDataByEraRequest],
    ["/enreach.workload.QueryGetAllReputationPointResponse", QueryGetAllReputationPointResponse],
    ["/enreach.workload.MsgUpdateSuperior", MsgUpdateSuperior],
    ["/enreach.workload.QueryGetAllEraProcessDataResponse", QueryGetAllEraProcessDataResponse],
    ["/enreach.workload.ReputationPointChangeRawDataDB", ReputationPointChangeRawDataDB],
    ["/enreach.workload.MsgUpdateParams", MsgUpdateParams],
    ["/enreach.workload.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/enreach.workload.QueryGetAllNodeWorkloadByEpochResponse", QueryGetAllNodeWorkloadByEpochResponse],
    ["/enreach.workload.QueryGetWorkreportRequest", QueryGetWorkreportRequest],
    ["/enreach.workload.QueryGetAllWorkreportByEpochRequest", QueryGetAllWorkreportByEpochRequest],
    ["/enreach.workload.QueryGetEpochProcessDataRequest", QueryGetEpochProcessDataRequest],
    ["/enreach.workload.Params", Params],
    ["/enreach.workload.QueryGetEraProcessDataRequest", QueryGetEraProcessDataRequest],
    ["/enreach.workload.QueryGetAllManagerWRWorkloadByEpochResponse", QueryGetAllManagerWRWorkloadByEpochResponse],
    ["/enreach.workload.QueryGetAllEpochProcessDataRequest", QueryGetAllEpochProcessDataRequest],
    ["/enreach.workload.QueryGetReputationPointChangeDataRequest", QueryGetReputationPointChangeDataRequest],
    ["/enreach.workload.QueryGetPendingNextEpochRequest", QueryGetPendingNextEpochRequest],
    
];

export { msgTypes }