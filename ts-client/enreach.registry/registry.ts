import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgUpdateRegion } from "./types/enreach/registry/tx";
import { QueryGetRegionResponse } from "./types/enreach/registry/query";
import { QueryAllRegionRequest } from "./types/enreach/registry/query";
import { MsgUpdateRegionResponse } from "./types/enreach/registry/tx";
import { Region } from "./types/enreach/registry/region";
import { MsgUpdateSuperiorResponse } from "./types/enreach/registry/tx";
import { MsgCreateRegion } from "./types/enreach/registry/tx";
import { MsgUpdateParams } from "./types/enreach/registry/tx";
import { MsgCreateSuperiorResponse } from "./types/enreach/registry/tx";
import { MsgUpdateSuperior } from "./types/enreach/registry/tx";
import { QueryAllRegionResponse } from "./types/enreach/registry/query";
import { MsgCreateRegionResponse } from "./types/enreach/registry/tx";
import { MsgDeleteRegionResponse } from "./types/enreach/registry/tx";
import { GenesisState } from "./types/enreach/registry/genesis";
import { Params } from "./types/enreach/registry/params";
import { Superior } from "./types/enreach/registry/superior";
import { QueryParamsRequest } from "./types/enreach/registry/query";
import { QueryGetSuperiorResponse } from "./types/enreach/registry/query";
import { QueryGetSuperiorRequest } from "./types/enreach/registry/query";
import { MsgUpdateParamsResponse } from "./types/enreach/registry/tx";
import { MsgCreateSuperior } from "./types/enreach/registry/tx";
import { MsgDeleteRegion } from "./types/enreach/registry/tx";
import { QueryParamsResponse } from "./types/enreach/registry/query";
import { QueryGetRegionRequest } from "./types/enreach/registry/query";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/enreach.registry.MsgUpdateRegion", MsgUpdateRegion],
    ["/enreach.registry.QueryGetRegionResponse", QueryGetRegionResponse],
    ["/enreach.registry.QueryAllRegionRequest", QueryAllRegionRequest],
    ["/enreach.registry.MsgUpdateRegionResponse", MsgUpdateRegionResponse],
    ["/enreach.registry.Region", Region],
    ["/enreach.registry.MsgUpdateSuperiorResponse", MsgUpdateSuperiorResponse],
    ["/enreach.registry.MsgCreateRegion", MsgCreateRegion],
    ["/enreach.registry.MsgUpdateParams", MsgUpdateParams],
    ["/enreach.registry.MsgCreateSuperiorResponse", MsgCreateSuperiorResponse],
    ["/enreach.registry.MsgUpdateSuperior", MsgUpdateSuperior],
    ["/enreach.registry.QueryAllRegionResponse", QueryAllRegionResponse],
    ["/enreach.registry.MsgCreateRegionResponse", MsgCreateRegionResponse],
    ["/enreach.registry.MsgDeleteRegionResponse", MsgDeleteRegionResponse],
    ["/enreach.registry.GenesisState", GenesisState],
    ["/enreach.registry.Params", Params],
    ["/enreach.registry.Superior", Superior],
    ["/enreach.registry.QueryParamsRequest", QueryParamsRequest],
    ["/enreach.registry.QueryGetSuperiorResponse", QueryGetSuperiorResponse],
    ["/enreach.registry.QueryGetSuperiorRequest", QueryGetSuperiorRequest],
    ["/enreach.registry.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/enreach.registry.MsgCreateSuperior", MsgCreateSuperior],
    ["/enreach.registry.MsgDeleteRegion", MsgDeleteRegion],
    ["/enreach.registry.QueryParamsResponse", QueryParamsResponse],
    ["/enreach.registry.QueryGetRegionRequest", QueryGetRegionRequest],
    
];

export { msgTypes }