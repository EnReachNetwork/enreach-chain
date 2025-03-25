import { GeneratedType } from "@cosmjs/proto-signing";
import { Params } from "./types/enreach/workload/params";
import { QueryParamsResponse } from "./types/enreach/workload/query";
import { MsgUpdateParams } from "./types/enreach/workload/tx";
import { QueryGetWorkloadRequest } from "./types/enreach/workload/query";
import { QueryParamsRequest } from "./types/enreach/workload/query";
import { GenesisState } from "./types/enreach/workload/genesis";
import { QueryAllWorkloadRequest } from "./types/enreach/workload/query";
import { MsgUpdateParamsResponse } from "./types/enreach/workload/tx";
import { MsgCreateWorkloadResponse } from "./types/enreach/workload/tx";
import { Workload } from "./types/enreach/workload/workload";
import { QueryAllWorkloadResponse } from "./types/enreach/workload/query";
import { MsgCreateWorkload } from "./types/enreach/workload/tx";
import { QueryGetWorkloadResponse } from "./types/enreach/workload/query";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/enreach.workload.Params", Params],
    ["/enreach.workload.QueryParamsResponse", QueryParamsResponse],
    ["/enreach.workload.MsgUpdateParams", MsgUpdateParams],
    ["/enreach.workload.QueryGetWorkloadRequest", QueryGetWorkloadRequest],
    ["/enreach.workload.QueryParamsRequest", QueryParamsRequest],
    ["/enreach.workload.GenesisState", GenesisState],
    ["/enreach.workload.QueryAllWorkloadRequest", QueryAllWorkloadRequest],
    ["/enreach.workload.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/enreach.workload.MsgCreateWorkloadResponse", MsgCreateWorkloadResponse],
    ["/enreach.workload.Workload", Workload],
    ["/enreach.workload.QueryAllWorkloadResponse", QueryAllWorkloadResponse],
    ["/enreach.workload.MsgCreateWorkload", MsgCreateWorkload],
    ["/enreach.workload.QueryGetWorkloadResponse", QueryGetWorkloadResponse],
    
];

export { msgTypes }