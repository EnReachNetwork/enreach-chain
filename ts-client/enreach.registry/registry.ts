import { GeneratedType } from "@cosmjs/proto-signing";
import { QueryGetSuperiorRequest } from "./types/enreach/registry/query";
import { QueryGetRegionResponse } from "./types/enreach/registry/query";
import { MsgCreateRegion } from "./types/enreach/registry/tx";
import { Superior } from "./types/enreach/registry/superior";
import { MsgDeleteRegion } from "./types/enreach/registry/tx";
import { MsgCreateSuperiorResponse } from "./types/enreach/registry/tx";
import { MsgUpdateSuperiorResponse } from "./types/enreach/registry/tx";
import { MsgCreateSuperior } from "./types/enreach/registry/tx";
import { QueryAllRegionRequest } from "./types/enreach/registry/query";
import { QueryGetSuperiorResponse } from "./types/enreach/registry/query";
import { GenesisState } from "./types/enreach/registry/genesis";
import { QueryParamsResponse } from "./types/enreach/registry/query";
import { MsgUpdateParams } from "./types/enreach/registry/tx";
import { MsgUpdateRegionResponse } from "./types/enreach/registry/tx";
import { QueryAllRegionResponse } from "./types/enreach/registry/query";
import { Params } from "./types/enreach/registry/params";
import { MsgUpdateRegion } from "./types/enreach/registry/tx";
import { MsgCreateRegionResponse } from "./types/enreach/registry/tx";
import { MsgUpdateParamsResponse } from "./types/enreach/registry/tx";
import { MsgDeleteRegionResponse } from "./types/enreach/registry/tx";
import { MsgUpdateSuperior } from "./types/enreach/registry/tx";
import { QueryParamsRequest } from "./types/enreach/registry/query";
import { QueryGetRegionRequest } from "./types/enreach/registry/query";
import { Region } from "./types/enreach/registry/region";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/enreach.registry.QueryGetSuperiorRequest", QueryGetSuperiorRequest],
    ["/enreach.registry.QueryGetRegionResponse", QueryGetRegionResponse],
    ["/enreach.registry.MsgCreateRegion", MsgCreateRegion],
    ["/enreach.registry.Superior", Superior],
    ["/enreach.registry.MsgDeleteRegion", MsgDeleteRegion],
    ["/enreach.registry.MsgCreateSuperiorResponse", MsgCreateSuperiorResponse],
    ["/enreach.registry.MsgUpdateSuperiorResponse", MsgUpdateSuperiorResponse],
    ["/enreach.registry.MsgCreateSuperior", MsgCreateSuperior],
    ["/enreach.registry.QueryAllRegionRequest", QueryAllRegionRequest],
    ["/enreach.registry.QueryGetSuperiorResponse", QueryGetSuperiorResponse],
    ["/enreach.registry.GenesisState", GenesisState],
    ["/enreach.registry.QueryParamsResponse", QueryParamsResponse],
    ["/enreach.registry.MsgUpdateParams", MsgUpdateParams],
    ["/enreach.registry.MsgUpdateRegionResponse", MsgUpdateRegionResponse],
    ["/enreach.registry.QueryAllRegionResponse", QueryAllRegionResponse],
    ["/enreach.registry.Params", Params],
    ["/enreach.registry.MsgUpdateRegion", MsgUpdateRegion],
    ["/enreach.registry.MsgCreateRegionResponse", MsgCreateRegionResponse],
    ["/enreach.registry.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/enreach.registry.MsgDeleteRegionResponse", MsgDeleteRegionResponse],
    ["/enreach.registry.MsgUpdateSuperior", MsgUpdateSuperior],
    ["/enreach.registry.QueryParamsRequest", QueryParamsRequest],
    ["/enreach.registry.QueryGetRegionRequest", QueryGetRegionRequest],
    ["/enreach.registry.Region", Region],
    
];

export { msgTypes }