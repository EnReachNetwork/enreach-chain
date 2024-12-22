import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgUpdateManager } from "./types/enreach/manager/tx";
import { MsgDeleteManager } from "./types/enreach/manager/tx";
import { QueryAllManagerRequest } from "./types/enreach/manager/query";
import { MsgUpdateParams } from "./types/enreach/manager/tx";
import { Params } from "./types/enreach/manager/params";
import { GenesisState } from "./types/enreach/manager/genesis";
import { Manager } from "./types/enreach/manager/manager";
import { MsgCreateManagerResponse } from "./types/enreach/manager/tx";
import { MsgUpdateManagerResponse } from "./types/enreach/manager/tx";
import { QueryParamsRequest } from "./types/enreach/manager/query";
import { QueryGetManagerResponse } from "./types/enreach/manager/query";
import { MsgDeleteManagerResponse } from "./types/enreach/manager/tx";
import { MsgCreateManager } from "./types/enreach/manager/tx";
import { QueryGetManagerRequest } from "./types/enreach/manager/query";
import { QueryAllManagerResponse } from "./types/enreach/manager/query";
import { QueryParamsResponse } from "./types/enreach/manager/query";
import { MsgUpdateParamsResponse } from "./types/enreach/manager/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/enreach.manager.MsgUpdateManager", MsgUpdateManager],
    ["/enreach.manager.MsgDeleteManager", MsgDeleteManager],
    ["/enreach.manager.QueryAllManagerRequest", QueryAllManagerRequest],
    ["/enreach.manager.MsgUpdateParams", MsgUpdateParams],
    ["/enreach.manager.Params", Params],
    ["/enreach.manager.GenesisState", GenesisState],
    ["/enreach.manager.Manager", Manager],
    ["/enreach.manager.MsgCreateManagerResponse", MsgCreateManagerResponse],
    ["/enreach.manager.MsgUpdateManagerResponse", MsgUpdateManagerResponse],
    ["/enreach.manager.QueryParamsRequest", QueryParamsRequest],
    ["/enreach.manager.QueryGetManagerResponse", QueryGetManagerResponse],
    ["/enreach.manager.MsgDeleteManagerResponse", MsgDeleteManagerResponse],
    ["/enreach.manager.MsgCreateManager", MsgCreateManager],
    ["/enreach.manager.QueryGetManagerRequest", QueryGetManagerRequest],
    ["/enreach.manager.QueryAllManagerResponse", QueryAllManagerResponse],
    ["/enreach.manager.QueryParamsResponse", QueryParamsResponse],
    ["/enreach.manager.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    
];

export { msgTypes }