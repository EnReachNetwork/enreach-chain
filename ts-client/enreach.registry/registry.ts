import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgDeleteRegion } from "./types/enreach/registry/tx";
import { Region } from "./types/enreach/registry/region";
import { MsgDeleteRegionResponse } from "./types/enreach/registry/tx";
import { Superior } from "./types/enreach/registry/superior";
import { MsgUpdateRegion } from "./types/enreach/registry/tx";
import { QueryGetRegionResponse } from "./types/enreach/registry/query";
import { QueryAllRegionResponse } from "./types/enreach/registry/query";
import { MsgCreateRegion } from "./types/enreach/registry/tx";
import { MsgCreateSuperior } from "./types/enreach/registry/tx";
import { GenesisState } from "./types/enreach/registry/genesis";
import { MsgCreateRegionResponse } from "./types/enreach/registry/tx";
import { MsgUpdateRegionResponse } from "./types/enreach/registry/tx";
import { MsgCreateSuperiorResponse } from "./types/enreach/registry/tx";
import { QueryParamsRequest } from "./types/enreach/registry/query";
import { Params } from "./types/enreach/registry/params";
import { QueryParamsResponse } from "./types/enreach/registry/query";
import { MsgUpdateParams } from "./types/enreach/registry/tx";
import { QueryGetRegionRequest } from "./types/enreach/registry/query";
import { QueryAllRegionRequest } from "./types/enreach/registry/query";
import { QueryGetSuperiorResponse } from "./types/enreach/registry/query";
import { MsgUpdateParamsResponse } from "./types/enreach/registry/tx";
import { MsgUpdateSuperior } from "./types/enreach/registry/tx";
import { MsgUpdateSuperiorResponse } from "./types/enreach/registry/tx";
import { QueryGetSuperiorRequest } from "./types/enreach/registry/query";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/enreach.registry.MsgDeleteRegion", MsgDeleteRegion],
    ["/enreach.registry.Region", Region],
    ["/enreach.registry.MsgDeleteRegionResponse", MsgDeleteRegionResponse],
    ["/enreach.registry.Superior", Superior],
    ["/enreach.registry.MsgUpdateRegion", MsgUpdateRegion],
    ["/enreach.registry.QueryGetRegionResponse", QueryGetRegionResponse],
    ["/enreach.registry.QueryAllRegionResponse", QueryAllRegionResponse],
    ["/enreach.registry.MsgCreateRegion", MsgCreateRegion],
    ["/enreach.registry.MsgCreateSuperior", MsgCreateSuperior],
    ["/enreach.registry.GenesisState", GenesisState],
    ["/enreach.registry.MsgCreateRegionResponse", MsgCreateRegionResponse],
    ["/enreach.registry.MsgUpdateRegionResponse", MsgUpdateRegionResponse],
    ["/enreach.registry.MsgCreateSuperiorResponse", MsgCreateSuperiorResponse],
    ["/enreach.registry.QueryParamsRequest", QueryParamsRequest],
    ["/enreach.registry.Params", Params],
    ["/enreach.registry.QueryParamsResponse", QueryParamsResponse],
    ["/enreach.registry.MsgUpdateParams", MsgUpdateParams],
    ["/enreach.registry.QueryGetRegionRequest", QueryGetRegionRequest],
    ["/enreach.registry.QueryAllRegionRequest", QueryAllRegionRequest],
    ["/enreach.registry.QueryGetSuperiorResponse", QueryGetSuperiorResponse],
    ["/enreach.registry.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/enreach.registry.MsgUpdateSuperior", MsgUpdateSuperior],
    ["/enreach.registry.MsgUpdateSuperiorResponse", MsgUpdateSuperiorResponse],
    ["/enreach.registry.QueryGetSuperiorRequest", QueryGetSuperiorRequest],
    
];

export { msgTypes }