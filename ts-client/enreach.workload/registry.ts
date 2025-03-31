import { GeneratedType } from "@cosmjs/proto-signing";
import { Superior } from "./types/enreach/workload/superior";
import { MsgUpdateHistoryEpochDataDepthResponse } from "./types/enreach/workload/tx";
import { GenesisState } from "./types/enreach/workload/genesis";
import { QueryParamsRequest } from "./types/enreach/workload/query";
import { QueryGetEpochProcessDataResponse } from "./types/enreach/workload/query";
import { QueryGetSuperiorResponse } from "./types/enreach/workload/query";
import { QueryGetAllManagerWorkloadByEpochResponse } from "./types/enreach/workload/query";
import { QueryGetAllWorkreportByEpochRequest } from "./types/enreach/workload/query";
import { QueryGetEpochProcessDataRequest } from "./types/enreach/workload/query";
import { MsgUpdateParamsResponse } from "./types/enreach/workload/tx";
import { NodeScore } from "./types/enreach/workload/workreport";
import { Params } from "./types/enreach/workload/params";
import { QueryGetCurrentEpochRequest } from "./types/enreach/workload/query";
import { QueryGetNodeWorkloadResponse } from "./types/enreach/workload/query";
import { NodeScoreDB } from "./types/enreach/workload/workreport";
import { Workreport } from "./types/enreach/workload/workreport";
import { EpochProcessData } from "./types/enreach/workload/workreport";
import { MsgUpdateParams } from "./types/enreach/workload/tx";
import { QueryGetWorkreportProcessBatchSizeRequest } from "./types/enreach/workload/query";
import { QueryGetAllEpochProcessDataResponse } from "./types/enreach/workload/query";
import { MsgUpdateWorkreportProcessBatchSize } from "./types/enreach/workload/tx";
import { ManagerWorkload } from "./types/enreach/workload/workload";
import { QueryGetCurrentEpochResponse } from "./types/enreach/workload/query";
import { QueryGetAllWorkreportByEpochResponse } from "./types/enreach/workload/query";
import { QueryGetHistoryEpochDataDepthRequest } from "./types/enreach/workload/query";
import { QueryGetEpochLengthResponse } from "./types/enreach/workload/query";
import { NodeWorkload } from "./types/enreach/workload/workload";
import { QueryGetWorkreportResponse } from "./types/enreach/workload/query";
import { MsgCreateSuperiorResponse } from "./types/enreach/workload/tx";
import { ManagerNodeScoreMap } from "./types/enreach/workload/workreport";
import { QueryGetNodeWorkloadRequest } from "./types/enreach/workload/query";
import { QueryGetHistoryEpochDataDepthResponse } from "./types/enreach/workload/query";
import { QueryGetAllManagerWorkloadByEpochRequest } from "./types/enreach/workload/query";
import { QueryGetAllEpochProcessDataRequest } from "./types/enreach/workload/query";
import { QueryGetManagerWorkloadResponse } from "./types/enreach/workload/query";
import { QueryGetWorkreportRequest } from "./types/enreach/workload/query";
import { QueryGetWorkreportProcessBatchSizeResponse } from "./types/enreach/workload/query";
import { MsgUpdateHistoryEpochDataDepth } from "./types/enreach/workload/tx";
import { MsgCreateSuperior } from "./types/enreach/workload/tx";
import { MsgUpdateSuperiorResponse } from "./types/enreach/workload/tx";
import { QueryGetEpochLengthRequest } from "./types/enreach/workload/query";
import { QueryGetManagerWorkloadRequest } from "./types/enreach/workload/query";
import { MsgUpdateWorkreportProcessBatchSizeResponse } from "./types/enreach/workload/tx";
import { QueryParamsResponse } from "./types/enreach/workload/query";
import { MsgUpdateSuperior } from "./types/enreach/workload/tx";
import { QueryGetAllNodeWorkloadByEpochRequest } from "./types/enreach/workload/query";
import { MsgSubmitWorkreports } from "./types/enreach/workload/tx";
import { MsgSubmitWorkreportsResponse } from "./types/enreach/workload/tx";
import { QueryGetAllNodeWorkloadByEpochResponse } from "./types/enreach/workload/query";
import { QueryGetSuperiorRequest } from "./types/enreach/workload/query";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/enreach.workload.Superior", Superior],
    ["/enreach.workload.MsgUpdateHistoryEpochDataDepthResponse", MsgUpdateHistoryEpochDataDepthResponse],
    ["/enreach.workload.GenesisState", GenesisState],
    ["/enreach.workload.QueryParamsRequest", QueryParamsRequest],
    ["/enreach.workload.QueryGetEpochProcessDataResponse", QueryGetEpochProcessDataResponse],
    ["/enreach.workload.QueryGetSuperiorResponse", QueryGetSuperiorResponse],
    ["/enreach.workload.QueryGetAllManagerWorkloadByEpochResponse", QueryGetAllManagerWorkloadByEpochResponse],
    ["/enreach.workload.QueryGetAllWorkreportByEpochRequest", QueryGetAllWorkreportByEpochRequest],
    ["/enreach.workload.QueryGetEpochProcessDataRequest", QueryGetEpochProcessDataRequest],
    ["/enreach.workload.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/enreach.workload.NodeScore", NodeScore],
    ["/enreach.workload.Params", Params],
    ["/enreach.workload.QueryGetCurrentEpochRequest", QueryGetCurrentEpochRequest],
    ["/enreach.workload.QueryGetNodeWorkloadResponse", QueryGetNodeWorkloadResponse],
    ["/enreach.workload.NodeScoreDB", NodeScoreDB],
    ["/enreach.workload.Workreport", Workreport],
    ["/enreach.workload.EpochProcessData", EpochProcessData],
    ["/enreach.workload.MsgUpdateParams", MsgUpdateParams],
    ["/enreach.workload.QueryGetWorkreportProcessBatchSizeRequest", QueryGetWorkreportProcessBatchSizeRequest],
    ["/enreach.workload.QueryGetAllEpochProcessDataResponse", QueryGetAllEpochProcessDataResponse],
    ["/enreach.workload.MsgUpdateWorkreportProcessBatchSize", MsgUpdateWorkreportProcessBatchSize],
    ["/enreach.workload.ManagerWorkload", ManagerWorkload],
    ["/enreach.workload.QueryGetCurrentEpochResponse", QueryGetCurrentEpochResponse],
    ["/enreach.workload.QueryGetAllWorkreportByEpochResponse", QueryGetAllWorkreportByEpochResponse],
    ["/enreach.workload.QueryGetHistoryEpochDataDepthRequest", QueryGetHistoryEpochDataDepthRequest],
    ["/enreach.workload.QueryGetEpochLengthResponse", QueryGetEpochLengthResponse],
    ["/enreach.workload.NodeWorkload", NodeWorkload],
    ["/enreach.workload.QueryGetWorkreportResponse", QueryGetWorkreportResponse],
    ["/enreach.workload.MsgCreateSuperiorResponse", MsgCreateSuperiorResponse],
    ["/enreach.workload.ManagerNodeScoreMap", ManagerNodeScoreMap],
    ["/enreach.workload.QueryGetNodeWorkloadRequest", QueryGetNodeWorkloadRequest],
    ["/enreach.workload.QueryGetHistoryEpochDataDepthResponse", QueryGetHistoryEpochDataDepthResponse],
    ["/enreach.workload.QueryGetAllManagerWorkloadByEpochRequest", QueryGetAllManagerWorkloadByEpochRequest],
    ["/enreach.workload.QueryGetAllEpochProcessDataRequest", QueryGetAllEpochProcessDataRequest],
    ["/enreach.workload.QueryGetManagerWorkloadResponse", QueryGetManagerWorkloadResponse],
    ["/enreach.workload.QueryGetWorkreportRequest", QueryGetWorkreportRequest],
    ["/enreach.workload.QueryGetWorkreportProcessBatchSizeResponse", QueryGetWorkreportProcessBatchSizeResponse],
    ["/enreach.workload.MsgUpdateHistoryEpochDataDepth", MsgUpdateHistoryEpochDataDepth],
    ["/enreach.workload.MsgCreateSuperior", MsgCreateSuperior],
    ["/enreach.workload.MsgUpdateSuperiorResponse", MsgUpdateSuperiorResponse],
    ["/enreach.workload.QueryGetEpochLengthRequest", QueryGetEpochLengthRequest],
    ["/enreach.workload.QueryGetManagerWorkloadRequest", QueryGetManagerWorkloadRequest],
    ["/enreach.workload.MsgUpdateWorkreportProcessBatchSizeResponse", MsgUpdateWorkreportProcessBatchSizeResponse],
    ["/enreach.workload.QueryParamsResponse", QueryParamsResponse],
    ["/enreach.workload.MsgUpdateSuperior", MsgUpdateSuperior],
    ["/enreach.workload.QueryGetAllNodeWorkloadByEpochRequest", QueryGetAllNodeWorkloadByEpochRequest],
    ["/enreach.workload.MsgSubmitWorkreports", MsgSubmitWorkreports],
    ["/enreach.workload.MsgSubmitWorkreportsResponse", MsgSubmitWorkreportsResponse],
    ["/enreach.workload.QueryGetAllNodeWorkloadByEpochResponse", QueryGetAllNodeWorkloadByEpochResponse],
    ["/enreach.workload.QueryGetSuperiorRequest", QueryGetSuperiorRequest],
    
];

export { msgTypes }