import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
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
export { QueryAllNodeResponse, QueryGetSuperiorRequest, QueryGetSuperiorResponse, MsgUpdateParamsResponse, MsgUpdateNodeTrafficTypeBatch, MsgUnbindNodeResponse, MsgCreateSuperiorResponse, QueryGetUserRequest, QueryGetNodeRequest, QueryGetNodeResponse, QueryAllNodeRequest, MsgBindUserEVMAccount, User, MsgRegisterNode, Node, MsgRegisterNodeResponse, MsgUpdateSuperiorResponse, MsgUpdateParams, MsgCreateSuperior, MsgUpdateSuperior, Superior, MsgBindUserEVMAccountResponse, MsgUpdateNodeTrafficTypeBatchResponse, Params, GenesisState, QueryAllUserRequest, QueryAllUserResponse, MsgCreateUser, MsgUnbindNode, MsgBindAndActivateNode, QueryParamsRequest, QueryParamsResponse, QueryGetUserResponse, MsgCreateUserResponse, MsgBindAndActivateNodeResponse };
type sendQueryAllNodeResponseParams = {
    value: QueryAllNodeResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetSuperiorRequestParams = {
    value: QueryGetSuperiorRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetSuperiorResponseParams = {
    value: QueryGetSuperiorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateNodeTrafficTypeBatchParams = {
    value: MsgUpdateNodeTrafficTypeBatch;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUnbindNodeResponseParams = {
    value: MsgUnbindNodeResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateSuperiorResponseParams = {
    value: MsgCreateSuperiorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetUserRequestParams = {
    value: QueryGetUserRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetNodeRequestParams = {
    value: QueryGetNodeRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetNodeResponseParams = {
    value: QueryGetNodeResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllNodeRequestParams = {
    value: QueryAllNodeRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgBindUserEVMAccountParams = {
    value: MsgBindUserEVMAccount;
    fee?: StdFee;
    memo?: string;
};
type sendUserParams = {
    value: User;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRegisterNodeParams = {
    value: MsgRegisterNode;
    fee?: StdFee;
    memo?: string;
};
type sendNodeParams = {
    value: Node;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRegisterNodeResponseParams = {
    value: MsgRegisterNodeResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateSuperiorResponseParams = {
    value: MsgUpdateSuperiorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateSuperiorParams = {
    value: MsgCreateSuperior;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateSuperiorParams = {
    value: MsgUpdateSuperior;
    fee?: StdFee;
    memo?: string;
};
type sendSuperiorParams = {
    value: Superior;
    fee?: StdFee;
    memo?: string;
};
type sendMsgBindUserEVMAccountResponseParams = {
    value: MsgBindUserEVMAccountResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateNodeTrafficTypeBatchResponseParams = {
    value: MsgUpdateNodeTrafficTypeBatchResponse;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllUserRequestParams = {
    value: QueryAllUserRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllUserResponseParams = {
    value: QueryAllUserResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateUserParams = {
    value: MsgCreateUser;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUnbindNodeParams = {
    value: MsgUnbindNode;
    fee?: StdFee;
    memo?: string;
};
type sendMsgBindAndActivateNodeParams = {
    value: MsgBindAndActivateNode;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
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
type sendMsgCreateUserResponseParams = {
    value: MsgCreateUserResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgBindAndActivateNodeResponseParams = {
    value: MsgBindAndActivateNodeResponse;
    fee?: StdFee;
    memo?: string;
};
type queryAllNodeResponseParams = {
    value: QueryAllNodeResponse;
};
type queryGetSuperiorRequestParams = {
    value: QueryGetSuperiorRequest;
};
type queryGetSuperiorResponseParams = {
    value: QueryGetSuperiorResponse;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type msgUpdateNodeTrafficTypeBatchParams = {
    value: MsgUpdateNodeTrafficTypeBatch;
};
type msgUnbindNodeResponseParams = {
    value: MsgUnbindNodeResponse;
};
type msgCreateSuperiorResponseParams = {
    value: MsgCreateSuperiorResponse;
};
type queryGetUserRequestParams = {
    value: QueryGetUserRequest;
};
type queryGetNodeRequestParams = {
    value: QueryGetNodeRequest;
};
type queryGetNodeResponseParams = {
    value: QueryGetNodeResponse;
};
type queryAllNodeRequestParams = {
    value: QueryAllNodeRequest;
};
type msgBindUserEvmaccountParams = {
    value: MsgBindUserEVMAccount;
};
type userParams = {
    value: User;
};
type msgRegisterNodeParams = {
    value: MsgRegisterNode;
};
type nodeParams = {
    value: Node;
};
type msgRegisterNodeResponseParams = {
    value: MsgRegisterNodeResponse;
};
type msgUpdateSuperiorResponseParams = {
    value: MsgUpdateSuperiorResponse;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type msgCreateSuperiorParams = {
    value: MsgCreateSuperior;
};
type msgUpdateSuperiorParams = {
    value: MsgUpdateSuperior;
};
type superiorParams = {
    value: Superior;
};
type msgBindUserEvmaccountResponseParams = {
    value: MsgBindUserEVMAccountResponse;
};
type msgUpdateNodeTrafficTypeBatchResponseParams = {
    value: MsgUpdateNodeTrafficTypeBatchResponse;
};
type paramsParams = {
    value: Params;
};
type genesisStateParams = {
    value: GenesisState;
};
type queryAllUserRequestParams = {
    value: QueryAllUserRequest;
};
type queryAllUserResponseParams = {
    value: QueryAllUserResponse;
};
type msgCreateUserParams = {
    value: MsgCreateUser;
};
type msgUnbindNodeParams = {
    value: MsgUnbindNode;
};
type msgBindAndActivateNodeParams = {
    value: MsgBindAndActivateNode;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type queryGetUserResponseParams = {
    value: QueryGetUserResponse;
};
type msgCreateUserResponseParams = {
    value: MsgCreateUserResponse;
};
type msgBindAndActivateNodeResponseParams = {
    value: MsgBindAndActivateNodeResponse;
};
export declare const registry: any;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendQueryAllNodeResponse({ value, fee, memo }: sendQueryAllNodeResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetSuperiorRequest({ value, fee, memo }: sendQueryGetSuperiorRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetSuperiorResponse({ value, fee, memo }: sendQueryGetSuperiorResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateNodeTrafficTypeBatch({ value, fee, memo }: sendMsgUpdateNodeTrafficTypeBatchParams): Promise<DeliverTxResponse>;
    sendMsgUnbindNodeResponse({ value, fee, memo }: sendMsgUnbindNodeResponseParams): Promise<DeliverTxResponse>;
    sendMsgCreateSuperiorResponse({ value, fee, memo }: sendMsgCreateSuperiorResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetUserRequest({ value, fee, memo }: sendQueryGetUserRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetNodeRequest({ value, fee, memo }: sendQueryGetNodeRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetNodeResponse({ value, fee, memo }: sendQueryGetNodeResponseParams): Promise<DeliverTxResponse>;
    sendQueryAllNodeRequest({ value, fee, memo }: sendQueryAllNodeRequestParams): Promise<DeliverTxResponse>;
    sendMsgBindUserEVMAccount({ value, fee, memo }: sendMsgBindUserEVMAccountParams): Promise<DeliverTxResponse>;
    sendUser({ value, fee, memo }: sendUserParams): Promise<DeliverTxResponse>;
    sendMsgRegisterNode({ value, fee, memo }: sendMsgRegisterNodeParams): Promise<DeliverTxResponse>;
    sendNode({ value, fee, memo }: sendNodeParams): Promise<DeliverTxResponse>;
    sendMsgRegisterNodeResponse({ value, fee, memo }: sendMsgRegisterNodeResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateSuperiorResponse({ value, fee, memo }: sendMsgUpdateSuperiorResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendMsgCreateSuperior({ value, fee, memo }: sendMsgCreateSuperiorParams): Promise<DeliverTxResponse>;
    sendMsgUpdateSuperior({ value, fee, memo }: sendMsgUpdateSuperiorParams): Promise<DeliverTxResponse>;
    sendSuperior({ value, fee, memo }: sendSuperiorParams): Promise<DeliverTxResponse>;
    sendMsgBindUserEVMAccountResponse({ value, fee, memo }: sendMsgBindUserEVMAccountResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateNodeTrafficTypeBatchResponse({ value, fee, memo }: sendMsgUpdateNodeTrafficTypeBatchResponseParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendQueryAllUserRequest({ value, fee, memo }: sendQueryAllUserRequestParams): Promise<DeliverTxResponse>;
    sendQueryAllUserResponse({ value, fee, memo }: sendQueryAllUserResponseParams): Promise<DeliverTxResponse>;
    sendMsgCreateUser({ value, fee, memo }: sendMsgCreateUserParams): Promise<DeliverTxResponse>;
    sendMsgUnbindNode({ value, fee, memo }: sendMsgUnbindNodeParams): Promise<DeliverTxResponse>;
    sendMsgBindAndActivateNode({ value, fee, memo }: sendMsgBindAndActivateNodeParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetUserResponse({ value, fee, memo }: sendQueryGetUserResponseParams): Promise<DeliverTxResponse>;
    sendMsgCreateUserResponse({ value, fee, memo }: sendMsgCreateUserResponseParams): Promise<DeliverTxResponse>;
    sendMsgBindAndActivateNodeResponse({ value, fee, memo }: sendMsgBindAndActivateNodeResponseParams): Promise<DeliverTxResponse>;
    queryAllNodeResponse({ value }: queryAllNodeResponseParams): EncodeObject;
    queryGetSuperiorRequest({ value }: queryGetSuperiorRequestParams): EncodeObject;
    queryGetSuperiorResponse({ value }: queryGetSuperiorResponseParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    msgUpdateNodeTrafficTypeBatch({ value }: msgUpdateNodeTrafficTypeBatchParams): EncodeObject;
    msgUnbindNodeResponse({ value }: msgUnbindNodeResponseParams): EncodeObject;
    msgCreateSuperiorResponse({ value }: msgCreateSuperiorResponseParams): EncodeObject;
    queryGetUserRequest({ value }: queryGetUserRequestParams): EncodeObject;
    queryGetNodeRequest({ value }: queryGetNodeRequestParams): EncodeObject;
    queryGetNodeResponse({ value }: queryGetNodeResponseParams): EncodeObject;
    queryAllNodeRequest({ value }: queryAllNodeRequestParams): EncodeObject;
    msgBindUserEvmaccount({ value }: msgBindUserEvmaccountParams): EncodeObject;
    user({ value }: userParams): EncodeObject;
    msgRegisterNode({ value }: msgRegisterNodeParams): EncodeObject;
    node({ value }: nodeParams): EncodeObject;
    msgRegisterNodeResponse({ value }: msgRegisterNodeResponseParams): EncodeObject;
    msgUpdateSuperiorResponse({ value }: msgUpdateSuperiorResponseParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    msgCreateSuperior({ value }: msgCreateSuperiorParams): EncodeObject;
    msgUpdateSuperior({ value }: msgUpdateSuperiorParams): EncodeObject;
    superior({ value }: superiorParams): EncodeObject;
    msgBindUserEvmaccountResponse({ value }: msgBindUserEvmaccountResponseParams): EncodeObject;
    msgUpdateNodeTrafficTypeBatchResponse({ value }: msgUpdateNodeTrafficTypeBatchResponseParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    queryAllUserRequest({ value }: queryAllUserRequestParams): EncodeObject;
    queryAllUserResponse({ value }: queryAllUserResponseParams): EncodeObject;
    msgCreateUser({ value }: msgCreateUserParams): EncodeObject;
    msgUnbindNode({ value }: msgUnbindNodeParams): EncodeObject;
    msgBindAndActivateNode({ value }: msgBindAndActivateNodeParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    queryGetUserResponse({ value }: queryGetUserResponseParams): EncodeObject;
    msgCreateUserResponse({ value }: msgCreateUserResponseParams): EncodeObject;
    msgBindAndActivateNodeResponse({ value }: msgBindAndActivateNodeResponseParams): EncodeObject;
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
