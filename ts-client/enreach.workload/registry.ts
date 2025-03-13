import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgUpdateParams } from "./types/enreach/workload/tx";
import { Params } from "./types/enreach/workload/params";
import { QueryParamsResponse } from "./types/enreach/workload/query";
import { QueryAllWorkloadResponse } from "./types/enreach/workload/query";
import { QueryGetWorkloadResponse } from "./types/enreach/workload/query";
import { MsgUpdateParamsResponse } from "./types/enreach/workload/tx";
import { QueryAllWorkloadRequest } from "./types/enreach/workload/query";
import { Workload } from "./types/enreach/workload/workload";
import { MsgCreateWorkload } from "./types/enreach/workload/tx";
import { MsgCreateWorkloadResponse } from "./types/enreach/workload/tx";
import { GenesisState } from "./types/enreach/workload/genesis";
import { QueryParamsRequest } from "./types/enreach/workload/query";
import { QueryGetWorkloadRequest } from "./types/enreach/workload/query";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/enreach.workload.MsgUpdateParams", MsgUpdateParams],
    ["/enreach.workload.Params", Params],
    ["/enreach.workload.QueryParamsResponse", QueryParamsResponse],
    ["/enreach.workload.QueryAllWorkloadResponse", QueryAllWorkloadResponse],
    ["/enreach.workload.QueryGetWorkloadResponse", QueryGetWorkloadResponse],
    ["/enreach.workload.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/enreach.workload.QueryAllWorkloadRequest", QueryAllWorkloadRequest],
    ["/enreach.workload.Workload", Workload],
    ["/enreach.workload.MsgCreateWorkload", MsgCreateWorkload],
    ["/enreach.workload.MsgCreateWorkloadResponse", MsgCreateWorkloadResponse],
    ["/enreach.workload.GenesisState", GenesisState],
    ["/enreach.workload.QueryParamsRequest", QueryParamsRequest],
    ["/enreach.workload.QueryGetWorkloadRequest", QueryGetWorkloadRequest],
    
];

export { msgTypes }