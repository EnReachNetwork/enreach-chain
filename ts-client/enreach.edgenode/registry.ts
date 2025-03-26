import { GeneratedType } from "@cosmjs/proto-signing";
import { User } from "./types/enreach/edgenode/user";
import { QueryGetNodeResponse } from "./types/enreach/edgenode/query";
import { MsgUpdateParamsResponse } from "./types/enreach/edgenode/tx";
import { MsgRegisterNode } from "./types/enreach/edgenode/tx";
import { QueryAllUserResponse } from "./types/enreach/edgenode/query";
import { MsgUnbindNodeResponse } from "./types/enreach/edgenode/tx";
import { QueryAllUserRequest } from "./types/enreach/edgenode/query";
import { MsgUpdateSuperior } from "./types/enreach/edgenode/tx";
import { MsgBindUserEVMAccountResponse } from "./types/enreach/edgenode/tx";
import { MsgCreateSuperiorResponse } from "./types/enreach/edgenode/tx";
import { GenesisState } from "./types/enreach/edgenode/genesis";
import { MsgCreateUser } from "./types/enreach/edgenode/tx";
import { MsgBindUserEVMAccount } from "./types/enreach/edgenode/tx";
import { MsgBindAndActivateNode } from "./types/enreach/edgenode/tx";
import { QueryParamsResponse } from "./types/enreach/edgenode/query";
import { QueryGetUserRequest } from "./types/enreach/edgenode/query";
import { QueryGetUserResponse } from "./types/enreach/edgenode/query";
import { MsgBindAndActivateNodeResponse } from "./types/enreach/edgenode/tx";
import { MsgCreateUserResponse } from "./types/enreach/edgenode/tx";
import { MsgCreateSuperior } from "./types/enreach/edgenode/tx";
import { MsgUpdateParams } from "./types/enreach/edgenode/tx";
import { MsgRegisterNodeResponse } from "./types/enreach/edgenode/tx";
import { Params } from "./types/enreach/edgenode/params";
import { Node } from "./types/enreach/edgenode/node";
import { Superior } from "./types/enreach/edgenode/superior";
import { QueryAllNodeRequest } from "./types/enreach/edgenode/query";
import { QueryGetSuperiorResponse } from "./types/enreach/edgenode/query";
import { MsgUnbindNode } from "./types/enreach/edgenode/tx";
import { MsgUpdateSuperiorResponse } from "./types/enreach/edgenode/tx";
import { QueryParamsRequest } from "./types/enreach/edgenode/query";
import { QueryGetNodeRequest } from "./types/enreach/edgenode/query";
import { QueryAllNodeResponse } from "./types/enreach/edgenode/query";
import { QueryGetSuperiorRequest } from "./types/enreach/edgenode/query";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/enreach.edgenode.User", User],
    ["/enreach.edgenode.QueryGetNodeResponse", QueryGetNodeResponse],
    ["/enreach.edgenode.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/enreach.edgenode.MsgRegisterNode", MsgRegisterNode],
    ["/enreach.edgenode.QueryAllUserResponse", QueryAllUserResponse],
    ["/enreach.edgenode.MsgUnbindNodeResponse", MsgUnbindNodeResponse],
    ["/enreach.edgenode.QueryAllUserRequest", QueryAllUserRequest],
    ["/enreach.edgenode.MsgUpdateSuperior", MsgUpdateSuperior],
    ["/enreach.edgenode.MsgBindUserEVMAccountResponse", MsgBindUserEVMAccountResponse],
    ["/enreach.edgenode.MsgCreateSuperiorResponse", MsgCreateSuperiorResponse],
    ["/enreach.edgenode.GenesisState", GenesisState],
    ["/enreach.edgenode.MsgCreateUser", MsgCreateUser],
    ["/enreach.edgenode.MsgBindUserEVMAccount", MsgBindUserEVMAccount],
    ["/enreach.edgenode.MsgBindAndActivateNode", MsgBindAndActivateNode],
    ["/enreach.edgenode.QueryParamsResponse", QueryParamsResponse],
    ["/enreach.edgenode.QueryGetUserRequest", QueryGetUserRequest],
    ["/enreach.edgenode.QueryGetUserResponse", QueryGetUserResponse],
    ["/enreach.edgenode.MsgBindAndActivateNodeResponse", MsgBindAndActivateNodeResponse],
    ["/enreach.edgenode.MsgCreateUserResponse", MsgCreateUserResponse],
    ["/enreach.edgenode.MsgCreateSuperior", MsgCreateSuperior],
    ["/enreach.edgenode.MsgUpdateParams", MsgUpdateParams],
    ["/enreach.edgenode.MsgRegisterNodeResponse", MsgRegisterNodeResponse],
    ["/enreach.edgenode.Params", Params],
    ["/enreach.edgenode.Node", Node],
    ["/enreach.edgenode.Superior", Superior],
    ["/enreach.edgenode.QueryAllNodeRequest", QueryAllNodeRequest],
    ["/enreach.edgenode.QueryGetSuperiorResponse", QueryGetSuperiorResponse],
    ["/enreach.edgenode.MsgUnbindNode", MsgUnbindNode],
    ["/enreach.edgenode.MsgUpdateSuperiorResponse", MsgUpdateSuperiorResponse],
    ["/enreach.edgenode.QueryParamsRequest", QueryParamsRequest],
    ["/enreach.edgenode.QueryGetNodeRequest", QueryGetNodeRequest],
    ["/enreach.edgenode.QueryAllNodeResponse", QueryAllNodeResponse],
    ["/enreach.edgenode.QueryGetSuperiorRequest", QueryGetSuperiorRequest],
    
];

export { msgTypes }