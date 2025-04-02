import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgUpdateParamsResponse } from "./types/enreach/edgenode/tx";
import { QueryGetSuperiorRequest } from "./types/enreach/edgenode/query";
import { MsgUpdateParams } from "./types/enreach/edgenode/tx";
import { MsgUnbindNodeResponse } from "./types/enreach/edgenode/tx";
import { QueryGetUserResponse } from "./types/enreach/edgenode/query";
import { QueryGetNodeRequest } from "./types/enreach/edgenode/query";
import { QueryAllNodeResponse } from "./types/enreach/edgenode/query";
import { MsgBindAndActivateNodeResponse } from "./types/enreach/edgenode/tx";
import { MsgUpdateSuperior } from "./types/enreach/edgenode/tx";
import { Params } from "./types/enreach/edgenode/params";
import { QueryParamsRequest } from "./types/enreach/edgenode/query";
import { MsgCreateUser } from "./types/enreach/edgenode/tx";
import { MsgBindUserEVMAccount } from "./types/enreach/edgenode/tx";
import { MsgBindUserEVMAccountResponse } from "./types/enreach/edgenode/tx";
import { MsgBindAndActivateNode } from "./types/enreach/edgenode/tx";
import { GenesisState } from "./types/enreach/edgenode/genesis";
import { QueryGetSuperiorResponse } from "./types/enreach/edgenode/query";
import { MsgCreateSuperiorResponse } from "./types/enreach/edgenode/tx";
import { MsgUpdateSuperiorResponse } from "./types/enreach/edgenode/tx";
import { QueryAllUserRequest } from "./types/enreach/edgenode/query";
import { MsgRegisterNodeResponse } from "./types/enreach/edgenode/tx";
import { MsgCreateSuperior } from "./types/enreach/edgenode/tx";
import { Node } from "./types/enreach/edgenode/node";
import { QueryAllUserResponse } from "./types/enreach/edgenode/query";
import { QueryGetNodeResponse } from "./types/enreach/edgenode/query";
import { QueryAllNodeRequest } from "./types/enreach/edgenode/query";
import { MsgUnbindNode } from "./types/enreach/edgenode/tx";
import { QueryParamsResponse } from "./types/enreach/edgenode/query";
import { User } from "./types/enreach/edgenode/user";
import { Superior } from "./types/enreach/edgenode/superior";
import { MsgCreateUserResponse } from "./types/enreach/edgenode/tx";
import { MsgRegisterNode } from "./types/enreach/edgenode/tx";
import { QueryGetUserRequest } from "./types/enreach/edgenode/query";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/enreach.edgenode.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/enreach.edgenode.QueryGetSuperiorRequest", QueryGetSuperiorRequest],
    ["/enreach.edgenode.MsgUpdateParams", MsgUpdateParams],
    ["/enreach.edgenode.MsgUnbindNodeResponse", MsgUnbindNodeResponse],
    ["/enreach.edgenode.QueryGetUserResponse", QueryGetUserResponse],
    ["/enreach.edgenode.QueryGetNodeRequest", QueryGetNodeRequest],
    ["/enreach.edgenode.QueryAllNodeResponse", QueryAllNodeResponse],
    ["/enreach.edgenode.MsgBindAndActivateNodeResponse", MsgBindAndActivateNodeResponse],
    ["/enreach.edgenode.MsgUpdateSuperior", MsgUpdateSuperior],
    ["/enreach.edgenode.Params", Params],
    ["/enreach.edgenode.QueryParamsRequest", QueryParamsRequest],
    ["/enreach.edgenode.MsgCreateUser", MsgCreateUser],
    ["/enreach.edgenode.MsgBindUserEVMAccount", MsgBindUserEVMAccount],
    ["/enreach.edgenode.MsgBindUserEVMAccountResponse", MsgBindUserEVMAccountResponse],
    ["/enreach.edgenode.MsgBindAndActivateNode", MsgBindAndActivateNode],
    ["/enreach.edgenode.GenesisState", GenesisState],
    ["/enreach.edgenode.QueryGetSuperiorResponse", QueryGetSuperiorResponse],
    ["/enreach.edgenode.MsgCreateSuperiorResponse", MsgCreateSuperiorResponse],
    ["/enreach.edgenode.MsgUpdateSuperiorResponse", MsgUpdateSuperiorResponse],
    ["/enreach.edgenode.QueryAllUserRequest", QueryAllUserRequest],
    ["/enreach.edgenode.MsgRegisterNodeResponse", MsgRegisterNodeResponse],
    ["/enreach.edgenode.MsgCreateSuperior", MsgCreateSuperior],
    ["/enreach.edgenode.Node", Node],
    ["/enreach.edgenode.QueryAllUserResponse", QueryAllUserResponse],
    ["/enreach.edgenode.QueryGetNodeResponse", QueryGetNodeResponse],
    ["/enreach.edgenode.QueryAllNodeRequest", QueryAllNodeRequest],
    ["/enreach.edgenode.MsgUnbindNode", MsgUnbindNode],
    ["/enreach.edgenode.QueryParamsResponse", QueryParamsResponse],
    ["/enreach.edgenode.User", User],
    ["/enreach.edgenode.Superior", Superior],
    ["/enreach.edgenode.MsgCreateUserResponse", MsgCreateUserResponse],
    ["/enreach.edgenode.MsgRegisterNode", MsgRegisterNode],
    ["/enreach.edgenode.QueryGetUserRequest", QueryGetUserRequest],
    
];

export { msgTypes }