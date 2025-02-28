import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgRegisterManager } from "./types/enreach/manager/tx";
import { MsgDeleteManager } from "./types/enreach/manager/tx";
import { GenesisState } from "./types/enreach/manager/genesis";
import { Manager } from "./types/enreach/manager/manager";
import { MsgUpdateManager } from "./types/enreach/manager/tx";
import { MsgRegisterManagerResponse } from "./types/enreach/manager/tx";
import { MsgUpdateManagerResponse } from "./types/enreach/manager/tx";
import { QueryParamsRequest } from "./types/enreach/manager/query";
import { QueryGetManagerRequest } from "./types/enreach/manager/query";
import { QueryGetManagerByRegionRequest } from "./types/enreach/manager/query";
import { QueryGetManagerByRegionResponse } from "./types/enreach/manager/query";
import { Params } from "./types/enreach/manager/params";
import { QueryGetManagerResponse } from "./types/enreach/manager/query";
import { QueryAllManagerResponse } from "./types/enreach/manager/query";
import { MsgUpdateParams } from "./types/enreach/manager/tx";
import { MsgUpdateParamsResponse } from "./types/enreach/manager/tx";
import { MsgDeleteManagerResponse } from "./types/enreach/manager/tx";
import { QueryParamsResponse } from "./types/enreach/manager/query";
import { QueryAllManagerRequest } from "./types/enreach/manager/query";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/enreach.manager.MsgRegisterManager", MsgRegisterManager],
    ["/enreach.manager.MsgDeleteManager", MsgDeleteManager],
    ["/enreach.manager.GenesisState", GenesisState],
    ["/enreach.manager.Manager", Manager],
    ["/enreach.manager.MsgUpdateManager", MsgUpdateManager],
    ["/enreach.manager.MsgRegisterManagerResponse", MsgRegisterManagerResponse],
    ["/enreach.manager.MsgUpdateManagerResponse", MsgUpdateManagerResponse],
    ["/enreach.manager.QueryParamsRequest", QueryParamsRequest],
    ["/enreach.manager.QueryGetManagerRequest", QueryGetManagerRequest],
    ["/enreach.manager.QueryGetManagerByRegionRequest", QueryGetManagerByRegionRequest],
    ["/enreach.manager.QueryGetManagerByRegionResponse", QueryGetManagerByRegionResponse],
    ["/enreach.manager.Params", Params],
    ["/enreach.manager.QueryGetManagerResponse", QueryGetManagerResponse],
    ["/enreach.manager.QueryAllManagerResponse", QueryAllManagerResponse],
    ["/enreach.manager.MsgUpdateParams", MsgUpdateParams],
    ["/enreach.manager.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/enreach.manager.MsgDeleteManagerResponse", MsgDeleteManagerResponse],
    ["/enreach.manager.QueryParamsResponse", QueryParamsResponse],
    ["/enreach.manager.QueryAllManagerRequest", QueryAllManagerRequest],
    
];

export { msgTypes }