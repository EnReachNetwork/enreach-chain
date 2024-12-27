import { GeneratedType } from "@cosmjs/proto-signing";
import { Params } from "./types/enreach/workload/params";
import { QueryParamsResponse } from "./types/enreach/workload/query";
import { QueryAllWorkloadResponse } from "./types/enreach/workload/query";
import { Workload } from "./types/enreach/workload/workload";
import { QueryGetWorkloadRequest } from "./types/enreach/workload/query";
import { QueryGetWorkloadResponse } from "./types/enreach/workload/query";
import { MsgUpdateWorkloadResponse } from "./types/enreach/workload/tx";
import { MsgDeleteWorkload } from "./types/enreach/workload/tx";
import { MsgDeleteWorkloadResponse } from "./types/enreach/workload/tx";
import { GenesisState } from "./types/enreach/workload/genesis";
import { QueryAllWorkloadRequest } from "./types/enreach/workload/query";
import { MsgUpdateParamsResponse } from "./types/enreach/workload/tx";
import { MsgCreateWorkloadResponse } from "./types/enreach/workload/tx";
import { QueryParamsRequest } from "./types/enreach/workload/query";
import { MsgUpdateParams } from "./types/enreach/workload/tx";
import { MsgCreateWorkload } from "./types/enreach/workload/tx";
import { MsgUpdateWorkload } from "./types/enreach/workload/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/enreach.workload.Params", Params],
    ["/enreach.workload.QueryParamsResponse", QueryParamsResponse],
    ["/enreach.workload.QueryAllWorkloadResponse", QueryAllWorkloadResponse],
    ["/enreach.workload.Workload", Workload],
    ["/enreach.workload.QueryGetWorkloadRequest", QueryGetWorkloadRequest],
    ["/enreach.workload.QueryGetWorkloadResponse", QueryGetWorkloadResponse],
    ["/enreach.workload.MsgUpdateWorkloadResponse", MsgUpdateWorkloadResponse],
    ["/enreach.workload.MsgDeleteWorkload", MsgDeleteWorkload],
    ["/enreach.workload.MsgDeleteWorkloadResponse", MsgDeleteWorkloadResponse],
    ["/enreach.workload.GenesisState", GenesisState],
    ["/enreach.workload.QueryAllWorkloadRequest", QueryAllWorkloadRequest],
    ["/enreach.workload.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/enreach.workload.MsgCreateWorkloadResponse", MsgCreateWorkloadResponse],
    ["/enreach.workload.QueryParamsRequest", QueryParamsRequest],
    ["/enreach.workload.MsgUpdateParams", MsgUpdateParams],
    ["/enreach.workload.MsgCreateWorkload", MsgCreateWorkload],
    ["/enreach.workload.MsgUpdateWorkload", MsgUpdateWorkload],
    
];

export { msgTypes }