import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
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
export { User, QueryGetNodeResponse, MsgUpdateParamsResponse, MsgRegisterNode, QueryAllUserResponse, MsgUnbindNodeResponse, QueryAllUserRequest, MsgUpdateSuperior, MsgBindUserEVMAccountResponse, MsgCreateSuperiorResponse, GenesisState, MsgCreateUser, MsgBindUserEVMAccount, MsgBindAndActivateNode, QueryParamsResponse, QueryGetUserRequest, QueryGetUserResponse, MsgBindAndActivateNodeResponse, MsgCreateUserResponse, MsgCreateSuperior, MsgUpdateParams, MsgRegisterNodeResponse, Params, Node, Superior, QueryAllNodeRequest, QueryGetSuperiorResponse, MsgUnbindNode, MsgUpdateSuperiorResponse, QueryParamsRequest, QueryGetNodeRequest, QueryAllNodeResponse, QueryGetSuperiorRequest };
type sendUserParams = {
    value: User;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetNodeResponseParams = {
    value: QueryGetNodeResponse;
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
type sendMsgUnbindNodeResponseParams = {
    value: MsgUnbindNodeResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllUserRequestParams = {
    value: QueryAllUserRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateSuperiorParams = {
    value: MsgUpdateSuperior;
    fee?: StdFee;
    memo?: string;
};
type sendMsgBindUserEVMAccountResponseParams = {
    value: MsgBindUserEVMAccountResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateSuperiorResponseParams = {
    value: MsgCreateSuperiorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateUserParams = {
    value: MsgCreateUser;
    fee?: StdFee;
    memo?: string;
};
type sendMsgBindUserEVMAccountParams = {
    value: MsgBindUserEVMAccount;
    fee?: StdFee;
    memo?: string;
};
type sendMsgBindAndActivateNodeParams = {
    value: MsgBindAndActivateNode;
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
type sendQueryGetUserResponseParams = {
    value: QueryGetUserResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgBindAndActivateNodeResponseParams = {
    value: MsgBindAndActivateNodeResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateUserResponseParams = {
    value: MsgCreateUserResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateSuperiorParams = {
    value: MsgCreateSuperior;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRegisterNodeResponseParams = {
    value: MsgRegisterNodeResponse;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendNodeParams = {
    value: Node;
    fee?: StdFee;
    memo?: string;
};
type sendSuperiorParams = {
    value: Superior;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllNodeRequestParams = {
    value: QueryAllNodeRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetSuperiorResponseParams = {
    value: QueryGetSuperiorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUnbindNodeParams = {
    value: MsgUnbindNode;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateSuperiorResponseParams = {
    value: MsgUpdateSuperiorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetNodeRequestParams = {
    value: QueryGetNodeRequest;
    fee?: StdFee;
    memo?: string;
};
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
type userParams = {
    value: User;
};
type queryGetNodeResponseParams = {
    value: QueryGetNodeResponse;
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
type msgUnbindNodeResponseParams = {
    value: MsgUnbindNodeResponse;
};
type queryAllUserRequestParams = {
    value: QueryAllUserRequest;
};
type msgUpdateSuperiorParams = {
    value: MsgUpdateSuperior;
};
type msgBindUserEvmaccountResponseParams = {
    value: MsgBindUserEVMAccountResponse;
};
type msgCreateSuperiorResponseParams = {
    value: MsgCreateSuperiorResponse;
};
type genesisStateParams = {
    value: GenesisState;
};
type msgCreateUserParams = {
    value: MsgCreateUser;
};
type msgBindUserEvmaccountParams = {
    value: MsgBindUserEVMAccount;
};
type msgBindAndActivateNodeParams = {
    value: MsgBindAndActivateNode;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type queryGetUserRequestParams = {
    value: QueryGetUserRequest;
};
type queryGetUserResponseParams = {
    value: QueryGetUserResponse;
};
type msgBindAndActivateNodeResponseParams = {
    value: MsgBindAndActivateNodeResponse;
};
type msgCreateUserResponseParams = {
    value: MsgCreateUserResponse;
};
type msgCreateSuperiorParams = {
    value: MsgCreateSuperior;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type msgRegisterNodeResponseParams = {
    value: MsgRegisterNodeResponse;
};
type paramsParams = {
    value: Params;
};
type nodeParams = {
    value: Node;
};
type superiorParams = {
    value: Superior;
};
type queryAllNodeRequestParams = {
    value: QueryAllNodeRequest;
};
type queryGetSuperiorResponseParams = {
    value: QueryGetSuperiorResponse;
};
type msgUnbindNodeParams = {
    value: MsgUnbindNode;
};
type msgUpdateSuperiorResponseParams = {
    value: MsgUpdateSuperiorResponse;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type queryGetNodeRequestParams = {
    value: QueryGetNodeRequest;
};
type queryAllNodeResponseParams = {
    value: QueryAllNodeResponse;
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
    sendUser({ value, fee, memo }: sendUserParams): Promise<DeliverTxResponse>;
    sendQueryGetNodeResponse({ value, fee, memo }: sendQueryGetNodeResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendMsgRegisterNode({ value, fee, memo }: sendMsgRegisterNodeParams): Promise<DeliverTxResponse>;
    sendQueryAllUserResponse({ value, fee, memo }: sendQueryAllUserResponseParams): Promise<DeliverTxResponse>;
    sendMsgUnbindNodeResponse({ value, fee, memo }: sendMsgUnbindNodeResponseParams): Promise<DeliverTxResponse>;
    sendQueryAllUserRequest({ value, fee, memo }: sendQueryAllUserRequestParams): Promise<DeliverTxResponse>;
    sendMsgUpdateSuperior({ value, fee, memo }: sendMsgUpdateSuperiorParams): Promise<DeliverTxResponse>;
    sendMsgBindUserEVMAccountResponse({ value, fee, memo }: sendMsgBindUserEVMAccountResponseParams): Promise<DeliverTxResponse>;
    sendMsgCreateSuperiorResponse({ value, fee, memo }: sendMsgCreateSuperiorResponseParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendMsgCreateUser({ value, fee, memo }: sendMsgCreateUserParams): Promise<DeliverTxResponse>;
    sendMsgBindUserEVMAccount({ value, fee, memo }: sendMsgBindUserEVMAccountParams): Promise<DeliverTxResponse>;
    sendMsgBindAndActivateNode({ value, fee, memo }: sendMsgBindAndActivateNodeParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetUserRequest({ value, fee, memo }: sendQueryGetUserRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetUserResponse({ value, fee, memo }: sendQueryGetUserResponseParams): Promise<DeliverTxResponse>;
    sendMsgBindAndActivateNodeResponse({ value, fee, memo }: sendMsgBindAndActivateNodeResponseParams): Promise<DeliverTxResponse>;
    sendMsgCreateUserResponse({ value, fee, memo }: sendMsgCreateUserResponseParams): Promise<DeliverTxResponse>;
    sendMsgCreateSuperior({ value, fee, memo }: sendMsgCreateSuperiorParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendMsgRegisterNodeResponse({ value, fee, memo }: sendMsgRegisterNodeResponseParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendNode({ value, fee, memo }: sendNodeParams): Promise<DeliverTxResponse>;
    sendSuperior({ value, fee, memo }: sendSuperiorParams): Promise<DeliverTxResponse>;
    sendQueryAllNodeRequest({ value, fee, memo }: sendQueryAllNodeRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetSuperiorResponse({ value, fee, memo }: sendQueryGetSuperiorResponseParams): Promise<DeliverTxResponse>;
    sendMsgUnbindNode({ value, fee, memo }: sendMsgUnbindNodeParams): Promise<DeliverTxResponse>;
    sendMsgUpdateSuperiorResponse({ value, fee, memo }: sendMsgUpdateSuperiorResponseParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendQueryGetNodeRequest({ value, fee, memo }: sendQueryGetNodeRequestParams): Promise<DeliverTxResponse>;
    sendQueryAllNodeResponse({ value, fee, memo }: sendQueryAllNodeResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetSuperiorRequest({ value, fee, memo }: sendQueryGetSuperiorRequestParams): Promise<DeliverTxResponse>;
    user({ value }: userParams): EncodeObject;
    queryGetNodeResponse({ value }: queryGetNodeResponseParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    msgRegisterNode({ value }: msgRegisterNodeParams): EncodeObject;
    queryAllUserResponse({ value }: queryAllUserResponseParams): EncodeObject;
    msgUnbindNodeResponse({ value }: msgUnbindNodeResponseParams): EncodeObject;
    queryAllUserRequest({ value }: queryAllUserRequestParams): EncodeObject;
    msgUpdateSuperior({ value }: msgUpdateSuperiorParams): EncodeObject;
    msgBindUserEvmaccountResponse({ value }: msgBindUserEvmaccountResponseParams): EncodeObject;
    msgCreateSuperiorResponse({ value }: msgCreateSuperiorResponseParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    msgCreateUser({ value }: msgCreateUserParams): EncodeObject;
    msgBindUserEvmaccount({ value }: msgBindUserEvmaccountParams): EncodeObject;
    msgBindAndActivateNode({ value }: msgBindAndActivateNodeParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    queryGetUserRequest({ value }: queryGetUserRequestParams): EncodeObject;
    queryGetUserResponse({ value }: queryGetUserResponseParams): EncodeObject;
    msgBindAndActivateNodeResponse({ value }: msgBindAndActivateNodeResponseParams): EncodeObject;
    msgCreateUserResponse({ value }: msgCreateUserResponseParams): EncodeObject;
    msgCreateSuperior({ value }: msgCreateSuperiorParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    msgRegisterNodeResponse({ value }: msgRegisterNodeResponseParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    node({ value }: nodeParams): EncodeObject;
    superior({ value }: superiorParams): EncodeObject;
    queryAllNodeRequest({ value }: queryAllNodeRequestParams): EncodeObject;
    queryGetSuperiorResponse({ value }: queryGetSuperiorResponseParams): EncodeObject;
    msgUnbindNode({ value }: msgUnbindNodeParams): EncodeObject;
    msgUpdateSuperiorResponse({ value }: msgUpdateSuperiorResponseParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    queryGetNodeRequest({ value }: queryGetNodeRequestParams): EncodeObject;
    queryAllNodeResponse({ value }: queryAllNodeResponseParams): EncodeObject;
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
