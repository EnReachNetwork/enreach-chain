import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { MsgUpdateSuperior } from "./types/enreach/edgenode/tx";
import { MsgCreateUserResponse } from "./types/enreach/edgenode/tx";
import { Params } from "./types/enreach/edgenode/params";
import { MsgBindAndActivateNodeResponse } from "./types/enreach/edgenode/tx";
import { MsgUpdateSuperiorResponse } from "./types/enreach/edgenode/tx";
import { MsgUpdateNodeTrafficTypeBatchResponse } from "./types/enreach/edgenode/tx";
import { QueryAllNodeRequest } from "./types/enreach/edgenode/query";
import { Node } from "./types/enreach/edgenode/node";
import { MsgBindUserEVMAccount } from "./types/enreach/edgenode/tx";
import { User } from "./types/enreach/edgenode/user";
import { MsgBindUserEVMAccountResponse } from "./types/enreach/edgenode/tx";
import { MsgUpdateParams } from "./types/enreach/edgenode/tx";
import { MsgCreateSuperiorResponse } from "./types/enreach/edgenode/tx";
import { QueryAllNodeResponse } from "./types/enreach/edgenode/query";
import { QueryAllUserRequest } from "./types/enreach/edgenode/query";
import { QueryGetNodeRequest } from "./types/enreach/edgenode/query";
import { GenesisState } from "./types/enreach/edgenode/genesis";
import { MsgCreateSuperior } from "./types/enreach/edgenode/tx";
import { MsgBindAndActivateNode } from "./types/enreach/edgenode/tx";
import { MsgUpdateNodeTrafficTypeBatch } from "./types/enreach/edgenode/tx";
import { QueryParamsResponse } from "./types/enreach/edgenode/query";
import { QueryGetUserRequest } from "./types/enreach/edgenode/query";
import { MsgCreateUser } from "./types/enreach/edgenode/tx";
import { MsgUpdateParamsResponse } from "./types/enreach/edgenode/tx";
import { MsgRegisterNode } from "./types/enreach/edgenode/tx";
import { QueryAllUserResponse } from "./types/enreach/edgenode/query";
import { QueryGetNodeResponse } from "./types/enreach/edgenode/query";
import { Superior } from "./types/enreach/edgenode/superior";
import { MsgRegisterNodeResponse } from "./types/enreach/edgenode/tx";
import { MsgUnbindNode } from "./types/enreach/edgenode/tx";
import { MsgUnbindNodeResponse } from "./types/enreach/edgenode/tx";
import { QueryParamsRequest } from "./types/enreach/edgenode/query";
import { QueryGetUserResponse } from "./types/enreach/edgenode/query";
import { QueryGetSuperiorRequest } from "./types/enreach/edgenode/query";
import { QueryGetSuperiorResponse } from "./types/enreach/edgenode/query";
export { MsgUpdateSuperior, MsgCreateUserResponse, Params, MsgBindAndActivateNodeResponse, MsgUpdateSuperiorResponse, MsgUpdateNodeTrafficTypeBatchResponse, QueryAllNodeRequest, Node, MsgBindUserEVMAccount, User, MsgBindUserEVMAccountResponse, MsgUpdateParams, MsgCreateSuperiorResponse, QueryAllNodeResponse, QueryAllUserRequest, QueryGetNodeRequest, GenesisState, MsgCreateSuperior, MsgBindAndActivateNode, MsgUpdateNodeTrafficTypeBatch, QueryParamsResponse, QueryGetUserRequest, MsgCreateUser, MsgUpdateParamsResponse, MsgRegisterNode, QueryAllUserResponse, QueryGetNodeResponse, Superior, MsgRegisterNodeResponse, MsgUnbindNode, MsgUnbindNodeResponse, QueryParamsRequest, QueryGetUserResponse, QueryGetSuperiorRequest, QueryGetSuperiorResponse };
type sendMsgUpdateSuperiorParams = {
    value: MsgUpdateSuperior;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateUserResponseParams = {
    value: MsgCreateUserResponse;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendMsgBindAndActivateNodeResponseParams = {
    value: MsgBindAndActivateNodeResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateSuperiorResponseParams = {
    value: MsgUpdateSuperiorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateNodeTrafficTypeBatchResponseParams = {
    value: MsgUpdateNodeTrafficTypeBatchResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllNodeRequestParams = {
    value: QueryAllNodeRequest;
    fee?: StdFee;
    memo?: string;
};
type sendNodeParams = {
    value: Node;
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
type sendMsgBindUserEVMAccountResponseParams = {
    value: MsgBindUserEVMAccountResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateSuperiorResponseParams = {
    value: MsgCreateSuperiorResponse;
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
type sendQueryGetNodeRequestParams = {
    value: QueryGetNodeRequest;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateSuperiorParams = {
    value: MsgCreateSuperior;
    fee?: StdFee;
    memo?: string;
};
type sendMsgBindAndActivateNodeParams = {
    value: MsgBindAndActivateNode;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateNodeTrafficTypeBatchParams = {
    value: MsgUpdateNodeTrafficTypeBatch;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsResponseParams = {
    value: QueryParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetUserRequestParams = {
    value: QueryGetUserRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateUserParams = {
    value: MsgCreateUser;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRegisterNodeParams = {
    value: MsgRegisterNode;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllUserResponseParams = {
    value: QueryAllUserResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetNodeResponseParams = {
    value: QueryGetNodeResponse;
    fee?: StdFee;
    memo?: string;
};
type sendSuperiorParams = {
    value: Superior;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRegisterNodeResponseParams = {
    value: MsgRegisterNodeResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUnbindNodeParams = {
    value: MsgUnbindNode;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUnbindNodeResponseParams = {
    value: MsgUnbindNodeResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetUserResponseParams = {
    value: QueryGetUserResponse;
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
type msgUpdateSuperiorParams = {
    value: MsgUpdateSuperior;
};
type msgCreateUserResponseParams = {
    value: MsgCreateUserResponse;
};
type paramsParams = {
    value: Params;
};
type msgBindAndActivateNodeResponseParams = {
    value: MsgBindAndActivateNodeResponse;
};
type msgUpdateSuperiorResponseParams = {
    value: MsgUpdateSuperiorResponse;
};
type msgUpdateNodeTrafficTypeBatchResponseParams = {
    value: MsgUpdateNodeTrafficTypeBatchResponse;
};
type queryAllNodeRequestParams = {
    value: QueryAllNodeRequest;
};
type nodeParams = {
    value: Node;
};
type msgBindUserEvmaccountParams = {
    value: MsgBindUserEVMAccount;
};
type userParams = {
    value: User;
};
type msgBindUserEvmaccountResponseParams = {
    value: MsgBindUserEVMAccountResponse;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type msgCreateSuperiorResponseParams = {
    value: MsgCreateSuperiorResponse;
};
type queryAllNodeResponseParams = {
    value: QueryAllNodeResponse;
};
type queryAllUserRequestParams = {
    value: QueryAllUserRequest;
};
type queryGetNodeRequestParams = {
    value: QueryGetNodeRequest;
};
type genesisStateParams = {
    value: GenesisState;
};
type msgCreateSuperiorParams = {
    value: MsgCreateSuperior;
};
type msgBindAndActivateNodeParams = {
    value: MsgBindAndActivateNode;
};
type msgUpdateNodeTrafficTypeBatchParams = {
    value: MsgUpdateNodeTrafficTypeBatch;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type queryGetUserRequestParams = {
    value: QueryGetUserRequest;
};
type msgCreateUserParams = {
    value: MsgCreateUser;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type msgRegisterNodeParams = {
    value: MsgRegisterNode;
};
type queryAllUserResponseParams = {
    value: QueryAllUserResponse;
};
type queryGetNodeResponseParams = {
    value: QueryGetNodeResponse;
};
type superiorParams = {
    value: Superior;
};
type msgRegisterNodeResponseParams = {
    value: MsgRegisterNodeResponse;
};
type msgUnbindNodeParams = {
    value: MsgUnbindNode;
};
type msgUnbindNodeResponseParams = {
    value: MsgUnbindNodeResponse;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type queryGetUserResponseParams = {
    value: QueryGetUserResponse;
};
type queryGetSuperiorRequestParams = {
    value: QueryGetSuperiorRequest;
};
type queryGetSuperiorResponseParams = {
    value: QueryGetSuperiorResponse;
};
export declare const registry: any;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendMsgUpdateSuperior({ value, fee, memo }: sendMsgUpdateSuperiorParams): Promise<DeliverTxResponse>;
    sendMsgCreateUserResponse({ value, fee, memo }: sendMsgCreateUserResponseParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendMsgBindAndActivateNodeResponse({ value, fee, memo }: sendMsgBindAndActivateNodeResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateSuperiorResponse({ value, fee, memo }: sendMsgUpdateSuperiorResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateNodeTrafficTypeBatchResponse({ value, fee, memo }: sendMsgUpdateNodeTrafficTypeBatchResponseParams): Promise<DeliverTxResponse>;
    sendQueryAllNodeRequest({ value, fee, memo }: sendQueryAllNodeRequestParams): Promise<DeliverTxResponse>;
    sendNode({ value, fee, memo }: sendNodeParams): Promise<DeliverTxResponse>;
    sendMsgBindUserEVMAccount({ value, fee, memo }: sendMsgBindUserEVMAccountParams): Promise<DeliverTxResponse>;
    sendUser({ value, fee, memo }: sendUserParams): Promise<DeliverTxResponse>;
    sendMsgBindUserEVMAccountResponse({ value, fee, memo }: sendMsgBindUserEVMAccountResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendMsgCreateSuperiorResponse({ value, fee, memo }: sendMsgCreateSuperiorResponseParams): Promise<DeliverTxResponse>;
    sendQueryAllNodeResponse({ value, fee, memo }: sendQueryAllNodeResponseParams): Promise<DeliverTxResponse>;
    sendQueryAllUserRequest({ value, fee, memo }: sendQueryAllUserRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetNodeRequest({ value, fee, memo }: sendQueryGetNodeRequestParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendMsgCreateSuperior({ value, fee, memo }: sendMsgCreateSuperiorParams): Promise<DeliverTxResponse>;
    sendMsgBindAndActivateNode({ value, fee, memo }: sendMsgBindAndActivateNodeParams): Promise<DeliverTxResponse>;
    sendMsgUpdateNodeTrafficTypeBatch({ value, fee, memo }: sendMsgUpdateNodeTrafficTypeBatchParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetUserRequest({ value, fee, memo }: sendQueryGetUserRequestParams): Promise<DeliverTxResponse>;
    sendMsgCreateUser({ value, fee, memo }: sendMsgCreateUserParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendMsgRegisterNode({ value, fee, memo }: sendMsgRegisterNodeParams): Promise<DeliverTxResponse>;
    sendQueryAllUserResponse({ value, fee, memo }: sendQueryAllUserResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetNodeResponse({ value, fee, memo }: sendQueryGetNodeResponseParams): Promise<DeliverTxResponse>;
    sendSuperior({ value, fee, memo }: sendSuperiorParams): Promise<DeliverTxResponse>;
    sendMsgRegisterNodeResponse({ value, fee, memo }: sendMsgRegisterNodeResponseParams): Promise<DeliverTxResponse>;
    sendMsgUnbindNode({ value, fee, memo }: sendMsgUnbindNodeParams): Promise<DeliverTxResponse>;
    sendMsgUnbindNodeResponse({ value, fee, memo }: sendMsgUnbindNodeResponseParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetUserResponse({ value, fee, memo }: sendQueryGetUserResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetSuperiorRequest({ value, fee, memo }: sendQueryGetSuperiorRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetSuperiorResponse({ value, fee, memo }: sendQueryGetSuperiorResponseParams): Promise<DeliverTxResponse>;
    msgUpdateSuperior({ value }: msgUpdateSuperiorParams): EncodeObject;
    msgCreateUserResponse({ value }: msgCreateUserResponseParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    msgBindAndActivateNodeResponse({ value }: msgBindAndActivateNodeResponseParams): EncodeObject;
    msgUpdateSuperiorResponse({ value }: msgUpdateSuperiorResponseParams): EncodeObject;
    msgUpdateNodeTrafficTypeBatchResponse({ value }: msgUpdateNodeTrafficTypeBatchResponseParams): EncodeObject;
    queryAllNodeRequest({ value }: queryAllNodeRequestParams): EncodeObject;
    node({ value }: nodeParams): EncodeObject;
    msgBindUserEvmaccount({ value }: msgBindUserEvmaccountParams): EncodeObject;
    user({ value }: userParams): EncodeObject;
    msgBindUserEvmaccountResponse({ value }: msgBindUserEvmaccountResponseParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    msgCreateSuperiorResponse({ value }: msgCreateSuperiorResponseParams): EncodeObject;
    queryAllNodeResponse({ value }: queryAllNodeResponseParams): EncodeObject;
    queryAllUserRequest({ value }: queryAllUserRequestParams): EncodeObject;
    queryGetNodeRequest({ value }: queryGetNodeRequestParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    msgCreateSuperior({ value }: msgCreateSuperiorParams): EncodeObject;
    msgBindAndActivateNode({ value }: msgBindAndActivateNodeParams): EncodeObject;
    msgUpdateNodeTrafficTypeBatch({ value }: msgUpdateNodeTrafficTypeBatchParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    queryGetUserRequest({ value }: queryGetUserRequestParams): EncodeObject;
    msgCreateUser({ value }: msgCreateUserParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    msgRegisterNode({ value }: msgRegisterNodeParams): EncodeObject;
    queryAllUserResponse({ value }: queryAllUserResponseParams): EncodeObject;
    queryGetNodeResponse({ value }: queryGetNodeResponseParams): EncodeObject;
    superior({ value }: superiorParams): EncodeObject;
    msgRegisterNodeResponse({ value }: msgRegisterNodeResponseParams): EncodeObject;
    msgUnbindNode({ value }: msgUnbindNodeParams): EncodeObject;
    msgUnbindNodeResponse({ value }: msgUnbindNodeResponseParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    queryGetUserResponse({ value }: queryGetUserResponseParams): EncodeObject;
    queryGetSuperiorRequest({ value }: queryGetSuperiorRequestParams): EncodeObject;
    queryGetSuperiorResponse({ value }: queryGetSuperiorResponseParams): EncodeObject;
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
