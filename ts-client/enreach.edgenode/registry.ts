import { GeneratedType } from "@cosmjs/proto-signing";
import { QueryAllNodeResponse } from "./types/enreach/edgenode/query";
import { QueryGetSuperiorRequest } from "./types/enreach/edgenode/query";
import { QueryGetSuperiorResponse } from "./types/enreach/edgenode/query";
import { MsgUpdateParamsResponse } from "./types/enreach/edgenode/tx";
import { MsgUpdateNodeTrafficTypeBatch } from "./types/enreach/edgenode/tx";
import { MsgUnbindNodeResponse } from "./types/enreach/edgenode/tx";
import { MsgCreateSuperiorResponse } from "./types/enreach/edgenode/tx";
import { QueryGetUserRequest } from "./types/enreach/edgenode/query";
import { QueryGetNodeRequest } from "./types/enreach/edgenode/query";
import { QueryGetNodeResponse } from "./types/enreach/edgenode/query";
import { QueryAllNodeRequest } from "./types/enreach/edgenode/query";
import { MsgBindUserEVMAccount } from "./types/enreach/edgenode/tx";
import { User } from "./types/enreach/edgenode/user";
import { MsgRegisterNode } from "./types/enreach/edgenode/tx";
import { Node } from "./types/enreach/edgenode/node";
import { MsgRegisterNodeResponse } from "./types/enreach/edgenode/tx";
import { MsgUpdateSuperiorResponse } from "./types/enreach/edgenode/tx";
import { MsgUpdateParams } from "./types/enreach/edgenode/tx";
import { MsgCreateSuperior } from "./types/enreach/edgenode/tx";
import { MsgUpdateSuperior } from "./types/enreach/edgenode/tx";
import { Superior } from "./types/enreach/edgenode/superior";
import { MsgBindUserEVMAccountResponse } from "./types/enreach/edgenode/tx";
import { MsgUpdateNodeTrafficTypeBatchResponse } from "./types/enreach/edgenode/tx";
import { Params } from "./types/enreach/edgenode/params";
import { GenesisState } from "./types/enreach/edgenode/genesis";
import { QueryAllUserRequest } from "./types/enreach/edgenode/query";
import { QueryAllUserResponse } from "./types/enreach/edgenode/query";
import { MsgCreateUser } from "./types/enreach/edgenode/tx";
import { MsgUnbindNode } from "./types/enreach/edgenode/tx";
import { MsgBindAndActivateNode } from "./types/enreach/edgenode/tx";
import { QueryParamsRequest } from "./types/enreach/edgenode/query";
import { QueryParamsResponse } from "./types/enreach/edgenode/query";
import { QueryGetUserResponse } from "./types/enreach/edgenode/query";
import { MsgCreateUserResponse } from "./types/enreach/edgenode/tx";
import { MsgBindAndActivateNodeResponse } from "./types/enreach/edgenode/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/enreach.edgenode.QueryAllNodeResponse", QueryAllNodeResponse],
    ["/enreach.edgenode.QueryGetSuperiorRequest", QueryGetSuperiorRequest],
    ["/enreach.edgenode.QueryGetSuperiorResponse", QueryGetSuperiorResponse],
    ["/enreach.edgenode.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/enreach.edgenode.MsgUpdateNodeTrafficTypeBatch", MsgUpdateNodeTrafficTypeBatch],
    ["/enreach.edgenode.MsgUnbindNodeResponse", MsgUnbindNodeResponse],
    ["/enreach.edgenode.MsgCreateSuperiorResponse", MsgCreateSuperiorResponse],
    ["/enreach.edgenode.QueryGetUserRequest", QueryGetUserRequest],
    ["/enreach.edgenode.QueryGetNodeRequest", QueryGetNodeRequest],
    ["/enreach.edgenode.QueryGetNodeResponse", QueryGetNodeResponse],
    ["/enreach.edgenode.QueryAllNodeRequest", QueryAllNodeRequest],
    ["/enreach.edgenode.MsgBindUserEVMAccount", MsgBindUserEVMAccount],
    ["/enreach.edgenode.User", User],
    ["/enreach.edgenode.MsgRegisterNode", MsgRegisterNode],
    ["/enreach.edgenode.Node", Node],
    ["/enreach.edgenode.MsgRegisterNodeResponse", MsgRegisterNodeResponse],
    ["/enreach.edgenode.MsgUpdateSuperiorResponse", MsgUpdateSuperiorResponse],
    ["/enreach.edgenode.MsgUpdateParams", MsgUpdateParams],
    ["/enreach.edgenode.MsgCreateSuperior", MsgCreateSuperior],
    ["/enreach.edgenode.MsgUpdateSuperior", MsgUpdateSuperior],
    ["/enreach.edgenode.Superior", Superior],
    ["/enreach.edgenode.MsgBindUserEVMAccountResponse", MsgBindUserEVMAccountResponse],
    ["/enreach.edgenode.MsgUpdateNodeTrafficTypeBatchResponse", MsgUpdateNodeTrafficTypeBatchResponse],
    ["/enreach.edgenode.Params", Params],
    ["/enreach.edgenode.GenesisState", GenesisState],
    ["/enreach.edgenode.QueryAllUserRequest", QueryAllUserRequest],
    ["/enreach.edgenode.QueryAllUserResponse", QueryAllUserResponse],
    ["/enreach.edgenode.MsgCreateUser", MsgCreateUser],
    ["/enreach.edgenode.MsgUnbindNode", MsgUnbindNode],
    ["/enreach.edgenode.MsgBindAndActivateNode", MsgBindAndActivateNode],
    ["/enreach.edgenode.QueryParamsRequest", QueryParamsRequest],
    ["/enreach.edgenode.QueryParamsResponse", QueryParamsResponse],
    ["/enreach.edgenode.QueryGetUserResponse", QueryGetUserResponse],
    ["/enreach.edgenode.MsgCreateUserResponse", MsgCreateUserResponse],
    ["/enreach.edgenode.MsgBindAndActivateNodeResponse", MsgBindAndActivateNodeResponse],
    
];

export { msgTypes }