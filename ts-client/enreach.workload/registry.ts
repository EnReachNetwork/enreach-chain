import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgUpdateParams } from "./types/enreach/workload/tx";
import { QueryParamsRequest } from "./types/enreach/workload/query";
import { MsgUpdateParamsResponse } from "./types/enreach/workload/tx";
import { GenesisState } from "./types/enreach/workload/genesis";
import { QueryAllWorkloadResponse } from "./types/enreach/workload/query";
import { MsgCreateWorkloadResponse } from "./types/enreach/workload/tx";
import { QueryAllWorkloadRequest } from "./types/enreach/workload/query";
import { QueryParamsResponse } from "./types/enreach/workload/query";
import { QueryGetWorkloadResponse } from "./types/enreach/workload/query";
import { Workload } from "./types/enreach/workload/workload";
import { MsgCreateWorkload } from "./types/enreach/workload/tx";
import { QueryGetWorkloadRequest } from "./types/enreach/workload/query";
import { Params } from "./types/enreach/workload/params";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/enreach.workload.MsgUpdateParams", MsgUpdateParams],
    ["/enreach.workload.QueryParamsRequest", QueryParamsRequest],
    ["/enreach.workload.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/enreach.workload.GenesisState", GenesisState],
    ["/enreach.workload.QueryAllWorkloadResponse", QueryAllWorkloadResponse],
    ["/enreach.workload.MsgCreateWorkloadResponse", MsgCreateWorkloadResponse],
    ["/enreach.workload.QueryAllWorkloadRequest", QueryAllWorkloadRequest],
    ["/enreach.workload.QueryParamsResponse", QueryParamsResponse],
    ["/enreach.workload.QueryGetWorkloadResponse", QueryGetWorkloadResponse],
    ["/enreach.workload.Workload", Workload],
    ["/enreach.workload.MsgCreateWorkload", MsgCreateWorkload],
    ["/enreach.workload.QueryGetWorkloadRequest", QueryGetWorkloadRequest],
    ["/enreach.workload.Params", Params],
    
];

export { msgTypes }