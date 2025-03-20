import { GeneratedType } from "@cosmjs/proto-signing";
import { Workload } from "./types/enreach/workload/workload";
import { QueryParamsRequest } from "./types/enreach/workload/query";
import { QueryGetWorkloadResponse } from "./types/enreach/workload/query";
import { QueryAllWorkloadRequest } from "./types/enreach/workload/query";
import { MsgUpdateParamsResponse } from "./types/enreach/workload/tx";
import { Params } from "./types/enreach/workload/params";
import { QueryParamsResponse } from "./types/enreach/workload/query";
import { GenesisState } from "./types/enreach/workload/genesis";
import { QueryGetWorkloadRequest } from "./types/enreach/workload/query";
import { MsgUpdateParams } from "./types/enreach/workload/tx";
import { MsgCreateWorkload } from "./types/enreach/workload/tx";
import { QueryAllWorkloadResponse } from "./types/enreach/workload/query";
import { MsgCreateWorkloadResponse } from "./types/enreach/workload/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/enreach.workload.Workload", Workload],
    ["/enreach.workload.QueryParamsRequest", QueryParamsRequest],
    ["/enreach.workload.QueryGetWorkloadResponse", QueryGetWorkloadResponse],
    ["/enreach.workload.QueryAllWorkloadRequest", QueryAllWorkloadRequest],
    ["/enreach.workload.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/enreach.workload.Params", Params],
    ["/enreach.workload.QueryParamsResponse", QueryParamsResponse],
    ["/enreach.workload.GenesisState", GenesisState],
    ["/enreach.workload.QueryGetWorkloadRequest", QueryGetWorkloadRequest],
    ["/enreach.workload.MsgUpdateParams", MsgUpdateParams],
    ["/enreach.workload.MsgCreateWorkload", MsgCreateWorkload],
    ["/enreach.workload.QueryAllWorkloadResponse", QueryAllWorkloadResponse],
    ["/enreach.workload.MsgCreateWorkloadResponse", MsgCreateWorkloadResponse],
    
];

export { msgTypes }