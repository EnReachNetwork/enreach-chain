import { GeneratedType } from "@cosmjs/proto-signing";
import { QueryAllWorkloadResponse } from "./types/enreach/workload/query";
import { QueryParamsRequest } from "./types/enreach/workload/query";
import { QueryGetWorkloadRequest } from "./types/enreach/workload/query";
import { QueryAllWorkloadRequest } from "./types/enreach/workload/query";
import { Params } from "./types/enreach/workload/params";
import { Workload } from "./types/enreach/workload/workload";
import { QueryParamsResponse } from "./types/enreach/workload/query";
import { MsgCreateWorkloadResponse } from "./types/enreach/workload/tx";
import { GenesisState } from "./types/enreach/workload/genesis";
import { QueryGetWorkloadResponse } from "./types/enreach/workload/query";
import { MsgCreateWorkload } from "./types/enreach/workload/tx";
import { MsgUpdateParams } from "./types/enreach/workload/tx";
import { MsgUpdateParamsResponse } from "./types/enreach/workload/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/enreach.workload.QueryAllWorkloadResponse", QueryAllWorkloadResponse],
    ["/enreach.workload.QueryParamsRequest", QueryParamsRequest],
    ["/enreach.workload.QueryGetWorkloadRequest", QueryGetWorkloadRequest],
    ["/enreach.workload.QueryAllWorkloadRequest", QueryAllWorkloadRequest],
    ["/enreach.workload.Params", Params],
    ["/enreach.workload.Workload", Workload],
    ["/enreach.workload.QueryParamsResponse", QueryParamsResponse],
    ["/enreach.workload.MsgCreateWorkloadResponse", MsgCreateWorkloadResponse],
    ["/enreach.workload.GenesisState", GenesisState],
    ["/enreach.workload.QueryGetWorkloadResponse", QueryGetWorkloadResponse],
    ["/enreach.workload.MsgCreateWorkload", MsgCreateWorkload],
    ["/enreach.workload.MsgUpdateParams", MsgUpdateParams],
    ["/enreach.workload.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    
];

export { msgTypes }