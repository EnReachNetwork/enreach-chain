import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgUpdateManagerResponse } from "./types/enreach/manager/tx";
import { Manager } from "./types/enreach/manager/manager";
import { MsgUpdateParams } from "./types/enreach/manager/tx";
import { MsgUpdateManager } from "./types/enreach/manager/tx";
import { QueryGetManagerResponse } from "./types/enreach/manager/query";
import { GenesisState } from "./types/enreach/manager/genesis";
import { MsgCreateManager } from "./types/enreach/manager/tx";
import { QueryParamsResponse } from "./types/enreach/manager/query";
import { Params } from "./types/enreach/manager/params";
import { QueryParamsRequest } from "./types/enreach/manager/query";
import { MsgDeleteManager } from "./types/enreach/manager/tx";
import { MsgDeleteManagerResponse } from "./types/enreach/manager/tx";
import { QueryGetManagerRequest } from "./types/enreach/manager/query";
import { QueryAllManagerRequest } from "./types/enreach/manager/query";
import { QueryAllManagerResponse } from "./types/enreach/manager/query";
import { MsgUpdateParamsResponse } from "./types/enreach/manager/tx";
import { MsgCreateManagerResponse } from "./types/enreach/manager/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/enreach.manager.MsgUpdateManagerResponse", MsgUpdateManagerResponse],
    ["/enreach.manager.Manager", Manager],
    ["/enreach.manager.MsgUpdateParams", MsgUpdateParams],
    ["/enreach.manager.MsgUpdateManager", MsgUpdateManager],
    ["/enreach.manager.QueryGetManagerResponse", QueryGetManagerResponse],
    ["/enreach.manager.GenesisState", GenesisState],
    ["/enreach.manager.MsgCreateManager", MsgCreateManager],
    ["/enreach.manager.QueryParamsResponse", QueryParamsResponse],
    ["/enreach.manager.Params", Params],
    ["/enreach.manager.QueryParamsRequest", QueryParamsRequest],
    ["/enreach.manager.MsgDeleteManager", MsgDeleteManager],
    ["/enreach.manager.MsgDeleteManagerResponse", MsgDeleteManagerResponse],
    ["/enreach.manager.QueryGetManagerRequest", QueryGetManagerRequest],
    ["/enreach.manager.QueryAllManagerRequest", QueryAllManagerRequest],
    ["/enreach.manager.QueryAllManagerResponse", QueryAllManagerResponse],
    ["/enreach.manager.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/enreach.manager.MsgCreateManagerResponse", MsgCreateManagerResponse],
    
];

export { msgTypes }