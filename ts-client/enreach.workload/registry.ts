import { GeneratedType } from "@cosmjs/proto-signing";
import { QueryGetEpochLengthResponse } from "./types/enreach/workload/query";
import { ManagerNodeScoreMap } from "./types/enreach/workload/workreport";
import { Workreport } from "./types/enreach/workload/workreport";
import { Workload } from "./types/enreach/workload/workload";
import { QueryGetCurrentEpochRequest } from "./types/enreach/workload/query";
import { NodeScore } from "./types/enreach/workload/workreport";
import { MsgUpdateParamsResponse } from "./types/enreach/workload/tx";
import { MsgSubmitWorkreportsResponse } from "./types/enreach/workload/tx";
import { QueryGetAllWorkreportByEpochRequest } from "./types/enreach/workload/query";
import { QueryAllWorkloadRequest } from "./types/enreach/workload/query";
import { NodeScoreDB } from "./types/enreach/workload/workreport";
import { GenesisState } from "./types/enreach/workload/genesis";
import { Params } from "./types/enreach/workload/params";
import { QueryParamsRequest } from "./types/enreach/workload/query";
import { QueryGetEpochLengthRequest } from "./types/enreach/workload/query";
import { QueryGetWorkloadRequest } from "./types/enreach/workload/query";
import { MsgUpdateParams } from "./types/enreach/workload/tx";
import { QueryGetCurrentEpochResponse } from "./types/enreach/workload/query";
import { QueryGetWorkreportRequest } from "./types/enreach/workload/query";
import { QueryGetWorkreportResponse } from "./types/enreach/workload/query";
import { MsgSubmitWorkreports } from "./types/enreach/workload/tx";
import { QueryParamsResponse } from "./types/enreach/workload/query";
import { QueryGetWorkloadResponse } from "./types/enreach/workload/query";
import { QueryAllWorkloadResponse } from "./types/enreach/workload/query";
import { QueryGetAllWorkreportByEpochResponse } from "./types/enreach/workload/query";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/enreach.workload.QueryGetEpochLengthResponse", QueryGetEpochLengthResponse],
    ["/enreach.workload.ManagerNodeScoreMap", ManagerNodeScoreMap],
    ["/enreach.workload.Workreport", Workreport],
    ["/enreach.workload.Workload", Workload],
    ["/enreach.workload.QueryGetCurrentEpochRequest", QueryGetCurrentEpochRequest],
    ["/enreach.workload.NodeScore", NodeScore],
    ["/enreach.workload.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/enreach.workload.MsgSubmitWorkreportsResponse", MsgSubmitWorkreportsResponse],
    ["/enreach.workload.QueryGetAllWorkreportByEpochRequest", QueryGetAllWorkreportByEpochRequest],
    ["/enreach.workload.QueryAllWorkloadRequest", QueryAllWorkloadRequest],
    ["/enreach.workload.NodeScoreDB", NodeScoreDB],
    ["/enreach.workload.GenesisState", GenesisState],
    ["/enreach.workload.Params", Params],
    ["/enreach.workload.QueryParamsRequest", QueryParamsRequest],
    ["/enreach.workload.QueryGetEpochLengthRequest", QueryGetEpochLengthRequest],
    ["/enreach.workload.QueryGetWorkloadRequest", QueryGetWorkloadRequest],
    ["/enreach.workload.MsgUpdateParams", MsgUpdateParams],
    ["/enreach.workload.QueryGetCurrentEpochResponse", QueryGetCurrentEpochResponse],
    ["/enreach.workload.QueryGetWorkreportRequest", QueryGetWorkreportRequest],
    ["/enreach.workload.QueryGetWorkreportResponse", QueryGetWorkreportResponse],
    ["/enreach.workload.MsgSubmitWorkreports", MsgSubmitWorkreports],
    ["/enreach.workload.QueryParamsResponse", QueryParamsResponse],
    ["/enreach.workload.QueryGetWorkloadResponse", QueryGetWorkloadResponse],
    ["/enreach.workload.QueryAllWorkloadResponse", QueryAllWorkloadResponse],
    ["/enreach.workload.QueryGetAllWorkreportByEpochResponse", QueryGetAllWorkreportByEpochResponse],
    
];

export { msgTypes }