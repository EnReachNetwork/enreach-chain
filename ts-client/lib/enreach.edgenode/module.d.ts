import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
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
export { Superior, MsgCreateSuperior, QueryAllNodeRequest, MsgBindAndActivateNode, MsgBindUserEVMAccountResponse, QueryGetSuperiorResponse, MsgCreateUser, Node, MsgCreateUserResponse, QueryAllUserResponse, MsgRegisterNodeResponse, User, MsgUpdateSuperior, Params, QueryParamsResponse, QueryGetUserResponse, QueryGetNodeRequest, MsgBindUserEVMAccount, MsgUnbindNodeResponse, MsgUpdateSuperiorResponse, MsgUnbindNode, GenesisState, QueryParamsRequest, MsgUpdateParamsResponse, MsgBindAndActivateNodeResponse, MsgRegisterNode, MsgCreateSuperiorResponse, MsgUpdateParams, QueryGetUserRequest, QueryGetNodeResponse, QueryAllNodeResponse, QueryAllUserRequest, QueryGetSuperiorRequest };
type sendSuperiorParams = {
    value: Superior;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateSuperiorParams = {
    value: MsgCreateSuperior;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllNodeRequestParams = {
    value: QueryAllNodeRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgBindAndActivateNodeParams = {
    value: MsgBindAndActivateNode;
    fee?: StdFee;
    memo?: string;
};
type sendMsgBindUserEVMAccountResponseParams = {
    value: MsgBindUserEVMAccountResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetSuperiorResponseParams = {
    value: QueryGetSuperiorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateUserParams = {
    value: MsgCreateUser;
    fee?: StdFee;
    memo?: string;
};
type sendNodeParams = {
    value: Node;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateUserResponseParams = {
    value: MsgCreateUserResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllUserResponseParams = {
    value: QueryAllUserResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRegisterNodeResponseParams = {
    value: MsgRegisterNodeResponse;
    fee?: StdFee;
    memo?: string;
};
type sendUserParams = {
    value: User;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateSuperiorParams = {
    value: MsgUpdateSuperior;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsResponseParams = {
    value: QueryParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetUserResponseParams = {
    value: QueryGetUserResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetNodeRequestParams = {
    value: QueryGetNodeRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgBindUserEVMAccountParams = {
    value: MsgBindUserEVMAccount;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUnbindNodeResponseParams = {
    value: MsgUnbindNodeResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateSuperiorResponseParams = {
    value: MsgUpdateSuperiorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUnbindNodeParams = {
    value: MsgUnbindNode;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgBindAndActivateNodeResponseParams = {
    value: MsgBindAndActivateNodeResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRegisterNodeParams = {
    value: MsgRegisterNode;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateSuperiorResponseParams = {
    value: MsgCreateSuperiorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetUserRequestParams = {
    value: QueryGetUserRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetNodeResponseParams = {
    value: QueryGetNodeResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllNodeResponseParams = {
    value: QueryAllNodeResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllUserRequestParams = {
    value: QueryAllUserRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetSuperiorRequestParams = {
    value: QueryGetSuperiorRequest;
    fee?: StdFee;
    memo?: string;
};
type superiorParams = {
    value: Superior;
};
type msgCreateSuperiorParams = {
    value: MsgCreateSuperior;
};
type queryAllNodeRequestParams = {
    value: QueryAllNodeRequest;
};
type msgBindAndActivateNodeParams = {
    value: MsgBindAndActivateNode;
};
type msgBindUserEvmaccountResponseParams = {
    value: MsgBindUserEVMAccountResponse;
};
type queryGetSuperiorResponseParams = {
    value: QueryGetSuperiorResponse;
};
type msgCreateUserParams = {
    value: MsgCreateUser;
};
type nodeParams = {
    value: Node;
};
type msgCreateUserResponseParams = {
    value: MsgCreateUserResponse;
};
type queryAllUserResponseParams = {
    value: QueryAllUserResponse;
};
type msgRegisterNodeResponseParams = {
    value: MsgRegisterNodeResponse;
};
type userParams = {
    value: User;
};
type msgUpdateSuperiorParams = {
    value: MsgUpdateSuperior;
};
type paramsParams = {
    value: Params;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type queryGetUserResponseParams = {
    value: QueryGetUserResponse;
};
type queryGetNodeRequestParams = {
    value: QueryGetNodeRequest;
};
type msgBindUserEvmaccountParams = {
    value: MsgBindUserEVMAccount;
};
type msgUnbindNodeResponseParams = {
    value: MsgUnbindNodeResponse;
};
type msgUpdateSuperiorResponseParams = {
    value: MsgUpdateSuperiorResponse;
};
type msgUnbindNodeParams = {
    value: MsgUnbindNode;
};
type genesisStateParams = {
    value: GenesisState;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type msgBindAndActivateNodeResponseParams = {
    value: MsgBindAndActivateNodeResponse;
};
type msgRegisterNodeParams = {
    value: MsgRegisterNode;
};
type msgCreateSuperiorResponseParams = {
    value: MsgCreateSuperiorResponse;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type queryGetUserRequestParams = {
    value: QueryGetUserRequest;
};
type queryGetNodeResponseParams = {
    value: QueryGetNodeResponse;
};
type queryAllNodeResponseParams = {
    value: QueryAllNodeResponse;
};
type queryAllUserRequestParams = {
    value: QueryAllUserRequest;
};
type queryGetSuperiorRequestParams = {
    value: QueryGetSuperiorRequest;
};
export declare const registry: any;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendSuperior({ value, fee, memo }: sendSuperiorParams): Promise<DeliverTxResponse>;
    sendMsgCreateSuperior({ value, fee, memo }: sendMsgCreateSuperiorParams): Promise<DeliverTxResponse>;
    sendQueryAllNodeRequest({ value, fee, memo }: sendQueryAllNodeRequestParams): Promise<DeliverTxResponse>;
    sendMsgBindAndActivateNode({ value, fee, memo }: sendMsgBindAndActivateNodeParams): Promise<DeliverTxResponse>;
    sendMsgBindUserEVMAccountResponse({ value, fee, memo }: sendMsgBindUserEVMAccountResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetSuperiorResponse({ value, fee, memo }: sendQueryGetSuperiorResponseParams): Promise<DeliverTxResponse>;
    sendMsgCreateUser({ value, fee, memo }: sendMsgCreateUserParams): Promise<DeliverTxResponse>;
    sendNode({ value, fee, memo }: sendNodeParams): Promise<DeliverTxResponse>;
    sendMsgCreateUserResponse({ value, fee, memo }: sendMsgCreateUserResponseParams): Promise<DeliverTxResponse>;
    sendQueryAllUserResponse({ value, fee, memo }: sendQueryAllUserResponseParams): Promise<DeliverTxResponse>;
    sendMsgRegisterNodeResponse({ value, fee, memo }: sendMsgRegisterNodeResponseParams): Promise<DeliverTxResponse>;
    sendUser({ value, fee, memo }: sendUserParams): Promise<DeliverTxResponse>;
    sendMsgUpdateSuperior({ value, fee, memo }: sendMsgUpdateSuperiorParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetUserResponse({ value, fee, memo }: sendQueryGetUserResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetNodeRequest({ value, fee, memo }: sendQueryGetNodeRequestParams): Promise<DeliverTxResponse>;
    sendMsgBindUserEVMAccount({ value, fee, memo }: sendMsgBindUserEVMAccountParams): Promise<DeliverTxResponse>;
    sendMsgUnbindNodeResponse({ value, fee, memo }: sendMsgUnbindNodeResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateSuperiorResponse({ value, fee, memo }: sendMsgUpdateSuperiorResponseParams): Promise<DeliverTxResponse>;
    sendMsgUnbindNode({ value, fee, memo }: sendMsgUnbindNodeParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendMsgBindAndActivateNodeResponse({ value, fee, memo }: sendMsgBindAndActivateNodeResponseParams): Promise<DeliverTxResponse>;
    sendMsgRegisterNode({ value, fee, memo }: sendMsgRegisterNodeParams): Promise<DeliverTxResponse>;
    sendMsgCreateSuperiorResponse({ value, fee, memo }: sendMsgCreateSuperiorResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendQueryGetUserRequest({ value, fee, memo }: sendQueryGetUserRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetNodeResponse({ value, fee, memo }: sendQueryGetNodeResponseParams): Promise<DeliverTxResponse>;
    sendQueryAllNodeResponse({ value, fee, memo }: sendQueryAllNodeResponseParams): Promise<DeliverTxResponse>;
    sendQueryAllUserRequest({ value, fee, memo }: sendQueryAllUserRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetSuperiorRequest({ value, fee, memo }: sendQueryGetSuperiorRequestParams): Promise<DeliverTxResponse>;
    superior({ value }: superiorParams): EncodeObject;
    msgCreateSuperior({ value }: msgCreateSuperiorParams): EncodeObject;
    queryAllNodeRequest({ value }: queryAllNodeRequestParams): EncodeObject;
    msgBindAndActivateNode({ value }: msgBindAndActivateNodeParams): EncodeObject;
    msgBindUserEvmaccountResponse({ value }: msgBindUserEvmaccountResponseParams): EncodeObject;
    queryGetSuperiorResponse({ value }: queryGetSuperiorResponseParams): EncodeObject;
    msgCreateUser({ value }: msgCreateUserParams): EncodeObject;
    node({ value }: nodeParams): EncodeObject;
    msgCreateUserResponse({ value }: msgCreateUserResponseParams): EncodeObject;
    queryAllUserResponse({ value }: queryAllUserResponseParams): EncodeObject;
    msgRegisterNodeResponse({ value }: msgRegisterNodeResponseParams): EncodeObject;
    user({ value }: userParams): EncodeObject;
    msgUpdateSuperior({ value }: msgUpdateSuperiorParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    queryGetUserResponse({ value }: queryGetUserResponseParams): EncodeObject;
    queryGetNodeRequest({ value }: queryGetNodeRequestParams): EncodeObject;
    msgBindUserEvmaccount({ value }: msgBindUserEvmaccountParams): EncodeObject;
    msgUnbindNodeResponse({ value }: msgUnbindNodeResponseParams): EncodeObject;
    msgUpdateSuperiorResponse({ value }: msgUpdateSuperiorResponseParams): EncodeObject;
    msgUnbindNode({ value }: msgUnbindNodeParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    msgBindAndActivateNodeResponse({ value }: msgBindAndActivateNodeResponseParams): EncodeObject;
    msgRegisterNode({ value }: msgRegisterNodeParams): EncodeObject;
    msgCreateSuperiorResponse({ value }: msgCreateSuperiorResponseParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    queryGetUserRequest({ value }: queryGetUserRequestParams): EncodeObject;
    queryGetNodeResponse({ value }: queryGetNodeResponseParams): EncodeObject;
    queryAllNodeResponse({ value }: queryAllNodeResponseParams): EncodeObject;
    queryAllUserRequest({ value }: queryAllUserRequestParams): EncodeObject;
    queryGetSuperiorRequest({ value }: queryGetSuperiorRequestParams): EncodeObject;
};
interface QueryClientOptions {
    addr: string;
}
export declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Api<unknown>;
declare class SDKModule {
    query: ReturnType<typeof queryClient>;
    tx: ReturnType<typeof txClient>;
    structure: Record<string, unknown>;
    registry: Array<[string, GeneratedType]>;
    constructor(client: IgniteClient);
    updateTX(client: IgniteClient): void;
}
declare const IgntModule: (test: IgniteClient) => {
    module: {
        EnreachEdgenode: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
