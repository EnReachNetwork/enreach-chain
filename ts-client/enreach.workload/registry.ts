import { GeneratedType } from "@cosmjs/proto-signing";
import { QueryParamsRequest } from "./types/enreach/workload/query";
import { Params } from "./types/enreach/workload/params";
import { MsgUpdateParamsResponse } from "./types/enreach/workload/tx";
import { MsgUpdateParams } from "./types/enreach/workload/tx";
import { QueryParamsResponse } from "./types/enreach/workload/query";
import { GenesisState } from "./types/enreach/workload/genesis";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/enreach.workload.QueryParamsRequest", QueryParamsRequest],
    ["/enreach.workload.Params", Params],
    ["/enreach.workload.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/enreach.workload.MsgUpdateParams", MsgUpdateParams],
    ["/enreach.workload.QueryParamsResponse", QueryParamsResponse],
    ["/enreach.workload.GenesisState", GenesisState],
    
];

export { msgTypes }