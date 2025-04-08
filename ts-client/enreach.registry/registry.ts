import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgDeleteRegion } from "./types/enreach/registry/tx";
import { QueryParamsResponse } from "./types/enreach/registry/query";
import { QueryParamsRequest } from "./types/enreach/registry/query";
import { QueryGetRegionRequest } from "./types/enreach/registry/query";
import { MsgUpdateParamsResponse } from "./types/enreach/registry/tx";
import { MsgUpdateSuperiorResponse } from "./types/enreach/registry/tx";
import { MsgUpdateRegionResponse } from "./types/enreach/registry/tx";
import { MsgDeleteRegionResponse } from "./types/enreach/registry/tx";
import { MsgUpdateRegion } from "./types/enreach/registry/tx";
import { QueryGetRegionResponse } from "./types/enreach/registry/query";
import { QueryAllRegionResponse } from "./types/enreach/registry/query";
import { Region } from "./types/enreach/registry/region";
import { MsgCreateRegionResponse } from "./types/enreach/registry/tx";
import { Superior } from "./types/enreach/registry/superior";
import { MsgUpdateParams } from "./types/enreach/registry/tx";
import { MsgCreateSuperior } from "./types/enreach/registry/tx";
import { QueryAllRegionRequest } from "./types/enreach/registry/query";
import { MsgCreateSuperiorResponse } from "./types/enreach/registry/tx";
import { GenesisState } from "./types/enreach/registry/genesis";
import { MsgCreateRegion } from "./types/enreach/registry/tx";
import { MsgUpdateSuperior } from "./types/enreach/registry/tx";
import { QueryGetSuperiorRequest } from "./types/enreach/registry/query";
import { QueryGetSuperiorResponse } from "./types/enreach/registry/query";
import { Params } from "./types/enreach/registry/params";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/enreach.registry.MsgDeleteRegion", MsgDeleteRegion],
    ["/enreach.registry.QueryParamsResponse", QueryParamsResponse],
    ["/enreach.registry.QueryParamsRequest", QueryParamsRequest],
    ["/enreach.registry.QueryGetRegionRequest", QueryGetRegionRequest],
    ["/enreach.registry.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/enreach.registry.MsgUpdateSuperiorResponse", MsgUpdateSuperiorResponse],
    ["/enreach.registry.MsgUpdateRegionResponse", MsgUpdateRegionResponse],
    ["/enreach.registry.MsgDeleteRegionResponse", MsgDeleteRegionResponse],
    ["/enreach.registry.MsgUpdateRegion", MsgUpdateRegion],
    ["/enreach.registry.QueryGetRegionResponse", QueryGetRegionResponse],
    ["/enreach.registry.QueryAllRegionResponse", QueryAllRegionResponse],
    ["/enreach.registry.Region", Region],
    ["/enreach.registry.MsgCreateRegionResponse", MsgCreateRegionResponse],
    ["/enreach.registry.Superior", Superior],
    ["/enreach.registry.MsgUpdateParams", MsgUpdateParams],
    ["/enreach.registry.MsgCreateSuperior", MsgCreateSuperior],
    ["/enreach.registry.QueryAllRegionRequest", QueryAllRegionRequest],
    ["/enreach.registry.MsgCreateSuperiorResponse", MsgCreateSuperiorResponse],
    ["/enreach.registry.GenesisState", GenesisState],
    ["/enreach.registry.MsgCreateRegion", MsgCreateRegion],
    ["/enreach.registry.MsgUpdateSuperior", MsgUpdateSuperior],
    ["/enreach.registry.QueryGetSuperiorRequest", QueryGetSuperiorRequest],
    ["/enreach.registry.QueryGetSuperiorResponse", QueryGetSuperiorResponse],
    ["/enreach.registry.Params", Params],
    
];

export { msgTypes }