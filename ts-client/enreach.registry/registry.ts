import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgUpdateParams } from "./types/enreach/registry/tx";
import { MsgDeleteRegionResponse } from "./types/enreach/registry/tx";
import { Params } from "./types/enreach/registry/params";
import { QueryGetSuperiorRequest } from "./types/enreach/registry/query";
import { MsgCreateSuperiorResponse } from "./types/enreach/registry/tx";
import { MsgUpdateSuperiorResponse } from "./types/enreach/registry/tx";
import { MsgUpdateRegion } from "./types/enreach/registry/tx";
import { QueryGetSuperiorResponse } from "./types/enreach/registry/query";
import { MsgUpdateParamsResponse } from "./types/enreach/registry/tx";
import { MsgCreateRegion } from "./types/enreach/registry/tx";
import { QueryAllRegionRequest } from "./types/enreach/registry/query";
import { QueryAllRegionResponse } from "./types/enreach/registry/query";
import { MsgDeleteRegion } from "./types/enreach/registry/tx";
import { GenesisState } from "./types/enreach/registry/genesis";
import { Region } from "./types/enreach/registry/region";
import { MsgCreateRegionResponse } from "./types/enreach/registry/tx";
import { MsgUpdateRegionResponse } from "./types/enreach/registry/tx";
import { QueryParamsRequest } from "./types/enreach/registry/query";
import { QueryParamsResponse } from "./types/enreach/registry/query";
import { QueryGetRegionResponse } from "./types/enreach/registry/query";
import { MsgUpdateSuperior } from "./types/enreach/registry/tx";
import { QueryGetRegionRequest } from "./types/enreach/registry/query";
import { MsgCreateSuperior } from "./types/enreach/registry/tx";
import { Superior } from "./types/enreach/registry/superior";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/enreach.registry.MsgUpdateParams", MsgUpdateParams],
    ["/enreach.registry.MsgDeleteRegionResponse", MsgDeleteRegionResponse],
    ["/enreach.registry.Params", Params],
    ["/enreach.registry.QueryGetSuperiorRequest", QueryGetSuperiorRequest],
    ["/enreach.registry.MsgCreateSuperiorResponse", MsgCreateSuperiorResponse],
    ["/enreach.registry.MsgUpdateSuperiorResponse", MsgUpdateSuperiorResponse],
    ["/enreach.registry.MsgUpdateRegion", MsgUpdateRegion],
    ["/enreach.registry.QueryGetSuperiorResponse", QueryGetSuperiorResponse],
    ["/enreach.registry.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/enreach.registry.MsgCreateRegion", MsgCreateRegion],
    ["/enreach.registry.QueryAllRegionRequest", QueryAllRegionRequest],
    ["/enreach.registry.QueryAllRegionResponse", QueryAllRegionResponse],
    ["/enreach.registry.MsgDeleteRegion", MsgDeleteRegion],
    ["/enreach.registry.GenesisState", GenesisState],
    ["/enreach.registry.Region", Region],
    ["/enreach.registry.MsgCreateRegionResponse", MsgCreateRegionResponse],
    ["/enreach.registry.MsgUpdateRegionResponse", MsgUpdateRegionResponse],
    ["/enreach.registry.QueryParamsRequest", QueryParamsRequest],
    ["/enreach.registry.QueryParamsResponse", QueryParamsResponse],
    ["/enreach.registry.QueryGetRegionResponse", QueryGetRegionResponse],
    ["/enreach.registry.MsgUpdateSuperior", MsgUpdateSuperior],
    ["/enreach.registry.QueryGetRegionRequest", QueryGetRegionRequest],
    ["/enreach.registry.MsgCreateSuperior", MsgCreateSuperior],
    ["/enreach.registry.Superior", Superior],
    
];

export { msgTypes }