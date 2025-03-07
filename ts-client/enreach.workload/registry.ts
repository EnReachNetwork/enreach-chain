import { GeneratedType } from "@cosmjs/proto-signing";
import { QueryAllWorkloadRequest } from "./types/enreach/workload/query";
import { MsgUpdateParamsResponse } from "./types/enreach/workload/tx";
import { MsgUpdateWorkloadResponse } from "./types/enreach/workload/tx";
import { MsgCreateWorkloadResponse } from "./types/enreach/workload/tx";
import { QueryGetWorkloadRequest } from "./types/enreach/workload/query";
import { Params } from "./types/enreach/workload/params";
import { MsgDeleteWorkload } from "./types/enreach/workload/tx";
import { MsgUpdateWorkload } from "./types/enreach/workload/tx";
import { QueryAllWorkloadResponse } from "./types/enreach/workload/query";
import { Workload } from "./types/enreach/workload/workload";
import { MsgCreateWorkload } from "./types/enreach/workload/tx";
import { MsgDeleteWorkloadResponse } from "./types/enreach/workload/tx";
import { QueryParamsRequest } from "./types/enreach/workload/query";
import { QueryParamsResponse } from "./types/enreach/workload/query";
import { QueryGetWorkloadResponse } from "./types/enreach/workload/query";
import { GenesisState } from "./types/enreach/workload/genesis";
import { MsgUpdateParams } from "./types/enreach/workload/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/enreach.workload.QueryAllWorkloadRequest", QueryAllWorkloadRequest],
    ["/enreach.workload.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/enreach.workload.MsgUpdateWorkloadResponse", MsgUpdateWorkloadResponse],
    ["/enreach.workload.MsgCreateWorkloadResponse", MsgCreateWorkloadResponse],
    ["/enreach.workload.QueryGetWorkloadRequest", QueryGetWorkloadRequest],
    ["/enreach.workload.Params", Params],
    ["/enreach.workload.MsgDeleteWorkload", MsgDeleteWorkload],
    ["/enreach.workload.MsgUpdateWorkload", MsgUpdateWorkload],
    ["/enreach.workload.QueryAllWorkloadResponse", QueryAllWorkloadResponse],
    ["/enreach.workload.Workload", Workload],
    ["/enreach.workload.MsgCreateWorkload", MsgCreateWorkload],
    ["/enreach.workload.MsgDeleteWorkloadResponse", MsgDeleteWorkloadResponse],
    ["/enreach.workload.QueryParamsRequest", QueryParamsRequest],
    ["/enreach.workload.QueryParamsResponse", QueryParamsResponse],
    ["/enreach.workload.QueryGetWorkloadResponse", QueryGetWorkloadResponse],
    ["/enreach.workload.GenesisState", GenesisState],
    ["/enreach.workload.MsgUpdateParams", MsgUpdateParams],
    
];

export { msgTypes }