import { GeneratedType } from "@cosmjs/proto-signing";
import { QueryParamsRequest } from "./types/enreach/registry/query";
import { QueryParamsResponse } from "./types/enreach/registry/query";
import { QueryGetSuperiorResponse } from "./types/enreach/registry/query";
import { MsgUpdateSuperiorResponse } from "./types/enreach/registry/tx";
import { QueryAllRegionRequest } from "./types/enreach/registry/query";
import { MsgUpdateParamsResponse } from "./types/enreach/registry/tx";
import { MsgDeleteRegionResponse } from "./types/enreach/registry/tx";
import { MsgCreateSuperiorResponse } from "./types/enreach/registry/tx";
import { GenesisState } from "./types/enreach/registry/genesis";
import { QueryGetRegionRequest } from "./types/enreach/registry/query";
import { QueryAllRegionResponse } from "./types/enreach/registry/query";
import { Region } from "./types/enreach/registry/region";
import { MsgUpdateParams } from "./types/enreach/registry/tx";
import { Params } from "./types/enreach/registry/params";
import { MsgDeleteRegion } from "./types/enreach/registry/tx";
import { MsgCreateRegionResponse } from "./types/enreach/registry/tx";
import { QueryGetRegionResponse } from "./types/enreach/registry/query";
import { MsgCreateRegion } from "./types/enreach/registry/tx";
import { MsgUpdateRegion } from "./types/enreach/registry/tx";
import { Superior } from "./types/enreach/registry/superior";
import { MsgCreateSuperior } from "./types/enreach/registry/tx";
import { MsgUpdateSuperior } from "./types/enreach/registry/tx";
import { QueryGetSuperiorRequest } from "./types/enreach/registry/query";
import { MsgUpdateRegionResponse } from "./types/enreach/registry/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/enreach.registry.QueryParamsRequest", QueryParamsRequest],
    ["/enreach.registry.QueryParamsResponse", QueryParamsResponse],
    ["/enreach.registry.QueryGetSuperiorResponse", QueryGetSuperiorResponse],
    ["/enreach.registry.MsgUpdateSuperiorResponse", MsgUpdateSuperiorResponse],
    ["/enreach.registry.QueryAllRegionRequest", QueryAllRegionRequest],
    ["/enreach.registry.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/enreach.registry.MsgDeleteRegionResponse", MsgDeleteRegionResponse],
    ["/enreach.registry.MsgCreateSuperiorResponse", MsgCreateSuperiorResponse],
    ["/enreach.registry.GenesisState", GenesisState],
    ["/enreach.registry.QueryGetRegionRequest", QueryGetRegionRequest],
    ["/enreach.registry.QueryAllRegionResponse", QueryAllRegionResponse],
    ["/enreach.registry.Region", Region],
    ["/enreach.registry.MsgUpdateParams", MsgUpdateParams],
    ["/enreach.registry.Params", Params],
    ["/enreach.registry.MsgDeleteRegion", MsgDeleteRegion],
    ["/enreach.registry.MsgCreateRegionResponse", MsgCreateRegionResponse],
    ["/enreach.registry.QueryGetRegionResponse", QueryGetRegionResponse],
    ["/enreach.registry.MsgCreateRegion", MsgCreateRegion],
    ["/enreach.registry.MsgUpdateRegion", MsgUpdateRegion],
    ["/enreach.registry.Superior", Superior],
    ["/enreach.registry.MsgCreateSuperior", MsgCreateSuperior],
    ["/enreach.registry.MsgUpdateSuperior", MsgUpdateSuperior],
    ["/enreach.registry.QueryGetSuperiorRequest", QueryGetSuperiorRequest],
    ["/enreach.registry.MsgUpdateRegionResponse", MsgUpdateRegionResponse],
    
];

export { msgTypes }