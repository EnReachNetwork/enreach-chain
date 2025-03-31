import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgUpdateSuperior } from "./types/enreach/edgenode/tx";
import { MsgCreateUserResponse } from "./types/enreach/edgenode/tx";
import { MsgRegisterNode } from "./types/enreach/edgenode/tx";
import { MsgCreateSuperiorResponse } from "./types/enreach/edgenode/tx";
import { Node } from "./types/enreach/edgenode/node";
import { Superior } from "./types/enreach/edgenode/superior";
import { User } from "./types/enreach/edgenode/user";
import { QueryParamsRequest } from "./types/enreach/edgenode/query";
import { QueryGetUserRequest } from "./types/enreach/edgenode/query";
import { QueryGetSuperiorResponse } from "./types/enreach/edgenode/query";
import { Params } from "./types/enreach/edgenode/params";
import { MsgUpdateParamsResponse } from "./types/enreach/edgenode/tx";
import { MsgRegisterNodeResponse } from "./types/enreach/edgenode/tx";
import { MsgUnbindNodeResponse } from "./types/enreach/edgenode/tx";
import { MsgUpdateSuperiorResponse } from "./types/enreach/edgenode/tx";
import { GenesisState } from "./types/enreach/edgenode/genesis";
import { QueryAllUserRequest } from "./types/enreach/edgenode/query";
import { QueryAllNodeResponse } from "./types/enreach/edgenode/query";
import { MsgCreateUser } from "./types/enreach/edgenode/tx";
import { MsgBindAndActivateNode } from "./types/enreach/edgenode/tx";
import { MsgBindAndActivateNodeResponse } from "./types/enreach/edgenode/tx";
import { MsgUnbindNode } from "./types/enreach/edgenode/tx";
import { QueryParamsResponse } from "./types/enreach/edgenode/query";
import { QueryGetUserResponse } from "./types/enreach/edgenode/query";
import { QueryGetSuperiorRequest } from "./types/enreach/edgenode/query";
import { MsgUpdateParams } from "./types/enreach/edgenode/tx";
import { QueryGetNodeRequest } from "./types/enreach/edgenode/query";
import { QueryGetNodeResponse } from "./types/enreach/edgenode/query";
import { MsgCreateSuperior } from "./types/enreach/edgenode/tx";
import { MsgBindUserEVMAccount } from "./types/enreach/edgenode/tx";
import { MsgBindUserEVMAccountResponse } from "./types/enreach/edgenode/tx";
import { QueryAllUserResponse } from "./types/enreach/edgenode/query";
import { QueryAllNodeRequest } from "./types/enreach/edgenode/query";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/enreach.edgenode.MsgUpdateSuperior", MsgUpdateSuperior],
    ["/enreach.edgenode.MsgCreateUserResponse", MsgCreateUserResponse],
    ["/enreach.edgenode.MsgRegisterNode", MsgRegisterNode],
    ["/enreach.edgenode.MsgCreateSuperiorResponse", MsgCreateSuperiorResponse],
    ["/enreach.edgenode.Node", Node],
    ["/enreach.edgenode.Superior", Superior],
    ["/enreach.edgenode.User", User],
    ["/enreach.edgenode.QueryParamsRequest", QueryParamsRequest],
    ["/enreach.edgenode.QueryGetUserRequest", QueryGetUserRequest],
    ["/enreach.edgenode.QueryGetSuperiorResponse", QueryGetSuperiorResponse],
    ["/enreach.edgenode.Params", Params],
    ["/enreach.edgenode.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/enreach.edgenode.MsgRegisterNodeResponse", MsgRegisterNodeResponse],
    ["/enreach.edgenode.MsgUnbindNodeResponse", MsgUnbindNodeResponse],
    ["/enreach.edgenode.MsgUpdateSuperiorResponse", MsgUpdateSuperiorResponse],
    ["/enreach.edgenode.GenesisState", GenesisState],
    ["/enreach.edgenode.QueryAllUserRequest", QueryAllUserRequest],
    ["/enreach.edgenode.QueryAllNodeResponse", QueryAllNodeResponse],
    ["/enreach.edgenode.MsgCreateUser", MsgCreateUser],
    ["/enreach.edgenode.MsgBindAndActivateNode", MsgBindAndActivateNode],
    ["/enreach.edgenode.MsgBindAndActivateNodeResponse", MsgBindAndActivateNodeResponse],
    ["/enreach.edgenode.MsgUnbindNode", MsgUnbindNode],
    ["/enreach.edgenode.QueryParamsResponse", QueryParamsResponse],
    ["/enreach.edgenode.QueryGetUserResponse", QueryGetUserResponse],
    ["/enreach.edgenode.QueryGetSuperiorRequest", QueryGetSuperiorRequest],
    ["/enreach.edgenode.MsgUpdateParams", MsgUpdateParams],
    ["/enreach.edgenode.QueryGetNodeRequest", QueryGetNodeRequest],
    ["/enreach.edgenode.QueryGetNodeResponse", QueryGetNodeResponse],
    ["/enreach.edgenode.MsgCreateSuperior", MsgCreateSuperior],
    ["/enreach.edgenode.MsgBindUserEVMAccount", MsgBindUserEVMAccount],
    ["/enreach.edgenode.MsgBindUserEVMAccountResponse", MsgBindUserEVMAccountResponse],
    ["/enreach.edgenode.QueryAllUserResponse", QueryAllUserResponse],
    ["/enreach.edgenode.QueryAllNodeRequest", QueryAllNodeRequest],
    
];

export { msgTypes }