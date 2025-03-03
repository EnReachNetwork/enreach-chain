import { GeneratedType } from "@cosmjs/proto-signing";
import { QueryGetWorkloadRequest } from "./types/enreach/workload/query";
import { QueryGetWorkloadResponse } from "./types/enreach/workload/query";
import { Params } from "./types/enreach/workload/params";
import { QueryParamsRequest } from "./types/enreach/workload/query";
import { MsgUpdateWorkload } from "./types/enreach/workload/tx";
import { MsgUpdateParams } from "./types/enreach/workload/tx";
import { QueryParamsResponse } from "./types/enreach/workload/query";
import { MsgUpdateParamsResponse } from "./types/enreach/workload/tx";
import { MsgUpdateWorkloadResponse } from "./types/enreach/workload/tx";
import { GenesisState } from "./types/enreach/workload/genesis";
import { MsgCreateWorkload } from "./types/enreach/workload/tx";
import { QueryAllWorkloadRequest } from "./types/enreach/workload/query";
import { QueryAllWorkloadResponse } from "./types/enreach/workload/query";
import { MsgCreateWorkloadResponse } from "./types/enreach/workload/tx";
import { MsgDeleteWorkloadResponse } from "./types/enreach/workload/tx";
import { MsgDeleteWorkload } from "./types/enreach/workload/tx";
import { Workload } from "./types/enreach/workload/workload";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/enreach.workload.QueryGetWorkloadRequest", QueryGetWorkloadRequest],
    ["/enreach.workload.QueryGetWorkloadResponse", QueryGetWorkloadResponse],
    ["/enreach.workload.Params", Params],
    ["/enreach.workload.QueryParamsRequest", QueryParamsRequest],
    ["/enreach.workload.MsgUpdateWorkload", MsgUpdateWorkload],
    ["/enreach.workload.MsgUpdateParams", MsgUpdateParams],
    ["/enreach.workload.QueryParamsResponse", QueryParamsResponse],
    ["/enreach.workload.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/enreach.workload.MsgUpdateWorkloadResponse", MsgUpdateWorkloadResponse],
    ["/enreach.workload.GenesisState", GenesisState],
    ["/enreach.workload.MsgCreateWorkload", MsgCreateWorkload],
    ["/enreach.workload.QueryAllWorkloadRequest", QueryAllWorkloadRequest],
    ["/enreach.workload.QueryAllWorkloadResponse", QueryAllWorkloadResponse],
    ["/enreach.workload.MsgCreateWorkloadResponse", MsgCreateWorkloadResponse],
    ["/enreach.workload.MsgDeleteWorkloadResponse", MsgDeleteWorkloadResponse],
    ["/enreach.workload.MsgDeleteWorkload", MsgDeleteWorkload],
    ["/enreach.workload.Workload", Workload],
    
];

export { msgTypes }