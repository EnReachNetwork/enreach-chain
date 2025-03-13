import { GeneratedType } from "@cosmjs/proto-signing";
import { Superior } from "./types/enreach/edgenode/superior";
import { MsgCreateSuperior } from "./types/enreach/edgenode/tx";
import { QueryAllNodeRequest } from "./types/enreach/edgenode/query";
import { MsgBindAndActivateNode } from "./types/enreach/edgenode/tx";
import { MsgBindUserEVMAccountResponse } from "./types/enreach/edgenode/tx";
import { QueryGetSuperiorResponse } from "./types/enreach/edgenode/query";
import { MsgCreateUser } from "./types/enreach/edgenode/tx";
import { Node } from "./types/enreach/edgenode/node";
import { MsgCreateUserResponse } from "./types/enreach/edgenode/tx";
import { QueryAllUserResponse } from "./types/enreach/edgenode/query";
import { MsgRegisterNodeResponse } from "./types/enreach/edgenode/tx";
import { User } from "./types/enreach/edgenode/user";
import { MsgUpdateSuperior } from "./types/enreach/edgenode/tx";
import { Params } from "./types/enreach/edgenode/params";
import { QueryParamsResponse } from "./types/enreach/edgenode/query";
import { QueryGetUserResponse } from "./types/enreach/edgenode/query";
import { QueryGetNodeRequest } from "./types/enreach/edgenode/query";
import { MsgBindUserEVMAccount } from "./types/enreach/edgenode/tx";
import { MsgUnbindNodeResponse } from "./types/enreach/edgenode/tx";
import { MsgUpdateSuperiorResponse } from "./types/enreach/edgenode/tx";
import { MsgUnbindNode } from "./types/enreach/edgenode/tx";
import { GenesisState } from "./types/enreach/edgenode/genesis";
import { QueryParamsRequest } from "./types/enreach/edgenode/query";
import { MsgUpdateParamsResponse } from "./types/enreach/edgenode/tx";
import { MsgBindAndActivateNodeResponse } from "./types/enreach/edgenode/tx";
import { MsgRegisterNode } from "./types/enreach/edgenode/tx";
import { MsgCreateSuperiorResponse } from "./types/enreach/edgenode/tx";
import { MsgUpdateParams } from "./types/enreach/edgenode/tx";
import { QueryGetUserRequest } from "./types/enreach/edgenode/query";
import { QueryGetNodeResponse } from "./types/enreach/edgenode/query";
import { QueryAllNodeResponse } from "./types/enreach/edgenode/query";
import { QueryAllUserRequest } from "./types/enreach/edgenode/query";
import { QueryGetSuperiorRequest } from "./types/enreach/edgenode/query";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/enreach.edgenode.Superior", Superior],
    ["/enreach.edgenode.MsgCreateSuperior", MsgCreateSuperior],
    ["/enreach.edgenode.QueryAllNodeRequest", QueryAllNodeRequest],
    ["/enreach.edgenode.MsgBindAndActivateNode", MsgBindAndActivateNode],
    ["/enreach.edgenode.MsgBindUserEVMAccountResponse", MsgBindUserEVMAccountResponse],
    ["/enreach.edgenode.QueryGetSuperiorResponse", QueryGetSuperiorResponse],
    ["/enreach.edgenode.MsgCreateUser", MsgCreateUser],
    ["/enreach.edgenode.Node", Node],
    ["/enreach.edgenode.MsgCreateUserResponse", MsgCreateUserResponse],
    ["/enreach.edgenode.QueryAllUserResponse", QueryAllUserResponse],
    ["/enreach.edgenode.MsgRegisterNodeResponse", MsgRegisterNodeResponse],
    ["/enreach.edgenode.User", User],
    ["/enreach.edgenode.MsgUpdateSuperior", MsgUpdateSuperior],
    ["/enreach.edgenode.Params", Params],
    ["/enreach.edgenode.QueryParamsResponse", QueryParamsResponse],
    ["/enreach.edgenode.QueryGetUserResponse", QueryGetUserResponse],
    ["/enreach.edgenode.QueryGetNodeRequest", QueryGetNodeRequest],
    ["/enreach.edgenode.MsgBindUserEVMAccount", MsgBindUserEVMAccount],
    ["/enreach.edgenode.MsgUnbindNodeResponse", MsgUnbindNodeResponse],
    ["/enreach.edgenode.MsgUpdateSuperiorResponse", MsgUpdateSuperiorResponse],
    ["/enreach.edgenode.MsgUnbindNode", MsgUnbindNode],
    ["/enreach.edgenode.GenesisState", GenesisState],
    ["/enreach.edgenode.QueryParamsRequest", QueryParamsRequest],
    ["/enreach.edgenode.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/enreach.edgenode.MsgBindAndActivateNodeResponse", MsgBindAndActivateNodeResponse],
    ["/enreach.edgenode.MsgRegisterNode", MsgRegisterNode],
    ["/enreach.edgenode.MsgCreateSuperiorResponse", MsgCreateSuperiorResponse],
    ["/enreach.edgenode.MsgUpdateParams", MsgUpdateParams],
    ["/enreach.edgenode.QueryGetUserRequest", QueryGetUserRequest],
    ["/enreach.edgenode.QueryGetNodeResponse", QueryGetNodeResponse],
    ["/enreach.edgenode.QueryAllNodeResponse", QueryAllNodeResponse],
    ["/enreach.edgenode.QueryAllUserRequest", QueryAllUserRequest],
    ["/enreach.edgenode.QueryGetSuperiorRequest", QueryGetSuperiorRequest],
    
];

export { msgTypes }