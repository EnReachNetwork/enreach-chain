import { GeneratedType } from "@cosmjs/proto-signing";
import { Params } from "./types/enreach/registry/params";
import { QueryGetRegionRequest } from "./types/enreach/registry/query";
import { QueryAllRegionRequest } from "./types/enreach/registry/query";
import { MsgUpdateParams } from "./types/enreach/registry/tx";
import { MsgDeleteRegionResponse } from "./types/enreach/registry/tx";
import { MsgCreateRegion } from "./types/enreach/registry/tx";
import { MsgCreateRegionResponse } from "./types/enreach/registry/tx";
import { Region } from "./types/enreach/registry/region";
import { GenesisState } from "./types/enreach/registry/genesis";
import { MsgUpdateRegion } from "./types/enreach/registry/tx";
import { MsgDeleteRegion } from "./types/enreach/registry/tx";
import { QueryGetRegionResponse } from "./types/enreach/registry/query";
import { QueryParamsRequest } from "./types/enreach/registry/query";
import { QueryParamsResponse } from "./types/enreach/registry/query";
import { QueryAllRegionResponse } from "./types/enreach/registry/query";
import { MsgUpdateParamsResponse } from "./types/enreach/registry/tx";
import { MsgUpdateRegionResponse } from "./types/enreach/registry/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/enreach.registry.Params", Params],
    ["/enreach.registry.QueryGetRegionRequest", QueryGetRegionRequest],
    ["/enreach.registry.QueryAllRegionRequest", QueryAllRegionRequest],
    ["/enreach.registry.MsgUpdateParams", MsgUpdateParams],
    ["/enreach.registry.MsgDeleteRegionResponse", MsgDeleteRegionResponse],
    ["/enreach.registry.MsgCreateRegion", MsgCreateRegion],
    ["/enreach.registry.MsgCreateRegionResponse", MsgCreateRegionResponse],
    ["/enreach.registry.Region", Region],
    ["/enreach.registry.GenesisState", GenesisState],
    ["/enreach.registry.MsgUpdateRegion", MsgUpdateRegion],
    ["/enreach.registry.MsgDeleteRegion", MsgDeleteRegion],
    ["/enreach.registry.QueryGetRegionResponse", QueryGetRegionResponse],
    ["/enreach.registry.QueryParamsRequest", QueryParamsRequest],
    ["/enreach.registry.QueryParamsResponse", QueryParamsResponse],
    ["/enreach.registry.QueryAllRegionResponse", QueryAllRegionResponse],
    ["/enreach.registry.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/enreach.registry.MsgUpdateRegionResponse", MsgUpdateRegionResponse],
    
];

export { msgTypes }