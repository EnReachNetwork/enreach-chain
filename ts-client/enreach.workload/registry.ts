import { GeneratedType } from "@cosmjs/proto-signing";
import { QueryGetWorkloadRequest } from "./types/enreach/workload/query";
import { QueryAllWorkloadRequest } from "./types/enreach/workload/query";
import { QueryAllWorkloadResponse } from "./types/enreach/workload/query";
import { MsgUpdateParams } from "./types/enreach/workload/tx";
import { MsgCreateWorkload } from "./types/enreach/workload/tx";
import { GenesisState } from "./types/enreach/workload/genesis";
import { QueryParamsResponse } from "./types/enreach/workload/query";
import { Workload } from "./types/enreach/workload/workload";
import { MsgCreateWorkloadResponse } from "./types/enreach/workload/tx";
import { MsgUpdateWorkloadResponse } from "./types/enreach/workload/tx";
import { MsgDeleteWorkload } from "./types/enreach/workload/tx";
import { QueryParamsRequest } from "./types/enreach/workload/query";
import { QueryGetWorkloadResponse } from "./types/enreach/workload/query";
import { Params } from "./types/enreach/workload/params";
import { MsgUpdateWorkload } from "./types/enreach/workload/tx";
import { MsgDeleteWorkloadResponse } from "./types/enreach/workload/tx";
import { MsgUpdateParamsResponse } from "./types/enreach/workload/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/enreach.workload.QueryGetWorkloadRequest", QueryGetWorkloadRequest],
    ["/enreach.workload.QueryAllWorkloadRequest", QueryAllWorkloadRequest],
    ["/enreach.workload.QueryAllWorkloadResponse", QueryAllWorkloadResponse],
    ["/enreach.workload.MsgUpdateParams", MsgUpdateParams],
    ["/enreach.workload.MsgCreateWorkload", MsgCreateWorkload],
    ["/enreach.workload.GenesisState", GenesisState],
    ["/enreach.workload.QueryParamsResponse", QueryParamsResponse],
    ["/enreach.workload.Workload", Workload],
    ["/enreach.workload.MsgCreateWorkloadResponse", MsgCreateWorkloadResponse],
    ["/enreach.workload.MsgUpdateWorkloadResponse", MsgUpdateWorkloadResponse],
    ["/enreach.workload.MsgDeleteWorkload", MsgDeleteWorkload],
    ["/enreach.workload.QueryParamsRequest", QueryParamsRequest],
    ["/enreach.workload.QueryGetWorkloadResponse", QueryGetWorkloadResponse],
    ["/enreach.workload.Params", Params],
    ["/enreach.workload.MsgUpdateWorkload", MsgUpdateWorkload],
    ["/enreach.workload.MsgDeleteWorkloadResponse", MsgDeleteWorkloadResponse],
    ["/enreach.workload.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    
];

export { msgTypes }