import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { MsgUpdateSuperiorResponse } from "./types/enreach/edgenode/tx";
import { QueryGetNodeRequest } from "./types/enreach/edgenode/query";
import { GenesisState } from "./types/enreach/edgenode/genesis";
import { Params } from "./types/enreach/edgenode/params";
import { MsgCreateUserResponse } from "./types/enreach/edgenode/tx";
import { MsgRegisterNodeResponse } from "./types/enreach/edgenode/tx";
import { MsgBindUserEVMAccount } from "./types/enreach/edgenode/tx";
import { QueryAllNodeRequest } from "./types/enreach/edgenode/query";
import { User } from "./types/enreach/edgenode/user";
import { MsgUpdateSuperior } from "./types/enreach/edgenode/tx";
import { QueryParamsRequest } from "./types/enreach/edgenode/query";
import { Superior } from "./types/enreach/edgenode/superior";
import { MsgRegisterNode } from "./types/enreach/edgenode/tx";
import { MsgUnbindNode } from "./types/enreach/edgenode/tx";
import { MsgCreateSuperiorResponse } from "./types/enreach/edgenode/tx";
import { QueryGetSuperiorRequest } from "./types/enreach/edgenode/query";
import { MsgUpdateParamsResponse } from "./types/enreach/edgenode/tx";
import { QueryParamsResponse } from "./types/enreach/edgenode/query";
import { QueryAllUserRequest } from "./types/enreach/edgenode/query";
import { MsgBindUserEVMAccountResponse } from "./types/enreach/edgenode/tx";
import { QueryAllUserResponse } from "./types/enreach/edgenode/query";
import { MsgCreateSuperior } from "./types/enreach/edgenode/tx";
import { QueryGetUserRequest } from "./types/enreach/edgenode/query";
import { Node } from "./types/enreach/edgenode/node";
import { MsgUpdateParams } from "./types/enreach/edgenode/tx";
import { MsgCreateUser } from "./types/enreach/edgenode/tx";
import { MsgBindAndActivateNode } from "./types/enreach/edgenode/tx";
import { QueryAllNodeResponse } from "./types/enreach/edgenode/query";
import { QueryGetSuperiorResponse } from "./types/enreach/edgenode/query";
import { MsgBindAndActivateNodeResponse } from "./types/enreach/edgenode/tx";
import { MsgUnbindNodeResponse } from "./types/enreach/edgenode/tx";
import { QueryGetUserResponse } from "./types/enreach/edgenode/query";
import { QueryGetNodeResponse } from "./types/enreach/edgenode/query";
export { MsgUpdateSuperiorResponse, QueryGetNodeRequest, GenesisState, Params, MsgCreateUserResponse, MsgRegisterNodeResponse, MsgBindUserEVMAccount, QueryAllNodeRequest, User, MsgUpdateSuperior, QueryParamsRequest, Superior, MsgRegisterNode, MsgUnbindNode, MsgCreateSuperiorResponse, QueryGetSuperiorRequest, MsgUpdateParamsResponse, QueryParamsResponse, QueryAllUserRequest, MsgBindUserEVMAccountResponse, QueryAllUserResponse, MsgCreateSuperior, QueryGetUserRequest, Node, MsgUpdateParams, MsgCreateUser, MsgBindAndActivateNode, QueryAllNodeResponse, QueryGetSuperiorResponse, MsgBindAndActivateNodeResponse, MsgUnbindNodeResponse, QueryGetUserResponse, QueryGetNodeResponse };
type sendMsgUpdateSuperiorResponseParams = {
    value: MsgUpdateSuperiorResponse;
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
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateUserResponseParams = {
    value: MsgCreateUserResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRegisterNodeResponseParams = {
    value: MsgRegisterNodeResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgBindUserEVMAccountParams = {
    value: MsgBindUserEVMAccount;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllNodeRequestParams = {
    value: QueryAllNodeRequest;
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
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendSuperiorParams = {
    value: Superior;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRegisterNodeParams = {
    value: MsgRegisterNode;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUnbindNodeParams = {
    value: MsgUnbindNode;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateSuperiorResponseParams = {
    value: MsgCreateSuperiorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetSuperiorRequestParams = {
    value: QueryGetSuperiorRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsResponseParams = {
    value: QueryParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllUserRequestParams = {
    value: QueryAllUserRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgBindUserEVMAccountResponseParams = {
    value: MsgBindUserEVMAccountResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllUserResponseParams = {
    value: QueryAllUserResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateSuperiorParams = {
    value: MsgCreateSuperior;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetUserRequestParams = {
    value: QueryGetUserRequest;
    fee?: StdFee;
    memo?: string;
};
type sendNodeParams = {
    value: Node;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCreateUserParams = {
    value: MsgCreateUser;
    fee?: StdFee;
    memo?: string;
};
type sendMsgBindAndActivateNodeParams = {
    value: MsgBindAndActivateNode;
    fee?: StdFee;
    memo?: string;
};
type sendQueryAllNodeResponseParams = {
    value: QueryAllNodeResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetSuperiorResponseParams = {
    value: QueryGetSuperiorResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgBindAndActivateNodeResponseParams = {
    value: MsgBindAndActivateNodeResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUnbindNodeResponseParams = {
    value: MsgUnbindNodeResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetUserResponseParams = {
    value: QueryGetUserResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetNodeResponseParams = {
    value: QueryGetNodeResponse;
    fee?: StdFee;
    memo?: string;
};
type msgUpdateSuperiorResponseParams = {
    value: MsgUpdateSuperiorResponse;
};
type queryGetNodeRequestParams = {
    value: QueryGetNodeRequest;
};
type genesisStateParams = {
    value: GenesisState;
};
type paramsParams = {
    value: Params;
};
type msgCreateUserResponseParams = {
    value: MsgCreateUserResponse;
};
type msgRegisterNodeResponseParams = {
    value: MsgRegisterNodeResponse;
};
type msgBindUserEvmaccountParams = {
    value: MsgBindUserEVMAccount;
};
type queryAllNodeRequestParams = {
    value: QueryAllNodeRequest;
};
type userParams = {
    value: User;
};
type msgUpdateSuperiorParams = {
    value: MsgUpdateSuperior;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type superiorParams = {
    value: Superior;
};
type msgRegisterNodeParams = {
    value: MsgRegisterNode;
};
type msgUnbindNodeParams = {
    value: MsgUnbindNode;
};
type msgCreateSuperiorResponseParams = {
    value: MsgCreateSuperiorResponse;
};
type queryGetSuperiorRequestParams = {
    value: QueryGetSuperiorRequest;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type queryAllUserRequestParams = {
    value: QueryAllUserRequest;
};
type msgBindUserEvmaccountResponseParams = {
    value: MsgBindUserEVMAccountResponse;
};
type queryAllUserResponseParams = {
    value: QueryAllUserResponse;
};
type msgCreateSuperiorParams = {
    value: MsgCreateSuperior;
};
type queryGetUserRequestParams = {
    value: QueryGetUserRequest;
};
type nodeParams = {
    value: Node;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type msgCreateUserParams = {
    value: MsgCreateUser;
};
type msgBindAndActivateNodeParams = {
    value: MsgBindAndActivateNode;
};
type queryAllNodeResponseParams = {
    value: QueryAllNodeResponse;
};
type queryGetSuperiorResponseParams = {
    value: QueryGetSuperiorResponse;
};
type msgBindAndActivateNodeResponseParams = {
    value: MsgBindAndActivateNodeResponse;
};
type msgUnbindNodeResponseParams = {
    value: MsgUnbindNodeResponse;
};
type queryGetUserResponseParams = {
    value: QueryGetUserResponse;
};
type queryGetNodeResponseParams = {
    value: QueryGetNodeResponse;
};
export declare const registry: any;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendMsgUpdateSuperiorResponse({ value, fee, memo }: sendMsgUpdateSuperiorResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetNodeRequest({ value, fee, memo }: sendQueryGetNodeRequestParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendMsgCreateUserResponse({ value, fee, memo }: sendMsgCreateUserResponseParams): Promise<DeliverTxResponse>;
    sendMsgRegisterNodeResponse({ value, fee, memo }: sendMsgRegisterNodeResponseParams): Promise<DeliverTxResponse>;
    sendMsgBindUserEVMAccount({ value, fee, memo }: sendMsgBindUserEVMAccountParams): Promise<DeliverTxResponse>;
    sendQueryAllNodeRequest({ value, fee, memo }: sendQueryAllNodeRequestParams): Promise<DeliverTxResponse>;
    sendUser({ value, fee, memo }: sendUserParams): Promise<DeliverTxResponse>;
    sendMsgUpdateSuperior({ value, fee, memo }: sendMsgUpdateSuperiorParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendSuperior({ value, fee, memo }: sendSuperiorParams): Promise<DeliverTxResponse>;
    sendMsgRegisterNode({ value, fee, memo }: sendMsgRegisterNodeParams): Promise<DeliverTxResponse>;
    sendMsgUnbindNode({ value, fee, memo }: sendMsgUnbindNodeParams): Promise<DeliverTxResponse>;
    sendMsgCreateSuperiorResponse({ value, fee, memo }: sendMsgCreateSuperiorResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetSuperiorRequest({ value, fee, memo }: sendQueryGetSuperiorRequestParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryAllUserRequest({ value, fee, memo }: sendQueryAllUserRequestParams): Promise<DeliverTxResponse>;
    sendMsgBindUserEVMAccountResponse({ value, fee, memo }: sendMsgBindUserEVMAccountResponseParams): Promise<DeliverTxResponse>;
    sendQueryAllUserResponse({ value, fee, memo }: sendQueryAllUserResponseParams): Promise<DeliverTxResponse>;
    sendMsgCreateSuperior({ value, fee, memo }: sendMsgCreateSuperiorParams): Promise<DeliverTxResponse>;
    sendQueryGetUserRequest({ value, fee, memo }: sendQueryGetUserRequestParams): Promise<DeliverTxResponse>;
    sendNode({ value, fee, memo }: sendNodeParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendMsgCreateUser({ value, fee, memo }: sendMsgCreateUserParams): Promise<DeliverTxResponse>;
    sendMsgBindAndActivateNode({ value, fee, memo }: sendMsgBindAndActivateNodeParams): Promise<DeliverTxResponse>;
    sendQueryAllNodeResponse({ value, fee, memo }: sendQueryAllNodeResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetSuperiorResponse({ value, fee, memo }: sendQueryGetSuperiorResponseParams): Promise<DeliverTxResponse>;
    sendMsgBindAndActivateNodeResponse({ value, fee, memo }: sendMsgBindAndActivateNodeResponseParams): Promise<DeliverTxResponse>;
    sendMsgUnbindNodeResponse({ value, fee, memo }: sendMsgUnbindNodeResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetUserResponse({ value, fee, memo }: sendQueryGetUserResponseParams): Promise<DeliverTxResponse>;
    sendQueryGetNodeResponse({ value, fee, memo }: sendQueryGetNodeResponseParams): Promise<DeliverTxResponse>;
    msgUpdateSuperiorResponse({ value }: msgUpdateSuperiorResponseParams): EncodeObject;
    queryGetNodeRequest({ value }: queryGetNodeRequestParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    msgCreateUserResponse({ value }: msgCreateUserResponseParams): EncodeObject;
    msgRegisterNodeResponse({ value }: msgRegisterNodeResponseParams): EncodeObject;
    msgBindUserEvmaccount({ value }: msgBindUserEvmaccountParams): EncodeObject;
    queryAllNodeRequest({ value }: queryAllNodeRequestParams): EncodeObject;
    user({ value }: userParams): EncodeObject;
    msgUpdateSuperior({ value }: msgUpdateSuperiorParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    superior({ value }: superiorParams): EncodeObject;
    msgRegisterNode({ value }: msgRegisterNodeParams): EncodeObject;
    msgUnbindNode({ value }: msgUnbindNodeParams): EncodeObject;
    msgCreateSuperiorResponse({ value }: msgCreateSuperiorResponseParams): EncodeObject;
    queryGetSuperiorRequest({ value }: queryGetSuperiorRequestParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    queryAllUserRequest({ value }: queryAllUserRequestParams): EncodeObject;
    msgBindUserEvmaccountResponse({ value }: msgBindUserEvmaccountResponseParams): EncodeObject;
    queryAllUserResponse({ value }: queryAllUserResponseParams): EncodeObject;
    msgCreateSuperior({ value }: msgCreateSuperiorParams): EncodeObject;
    queryGetUserRequest({ value }: queryGetUserRequestParams): EncodeObject;
    node({ value }: nodeParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    msgCreateUser({ value }: msgCreateUserParams): EncodeObject;
    msgBindAndActivateNode({ value }: msgBindAndActivateNodeParams): EncodeObject;
    queryAllNodeResponse({ value }: queryAllNodeResponseParams): EncodeObject;
    queryGetSuperiorResponse({ value }: queryGetSuperiorResponseParams): EncodeObject;
    msgBindAndActivateNodeResponse({ value }: msgBindAndActivateNodeResponseParams): EncodeObject;
    msgUnbindNodeResponse({ value }: msgUnbindNodeResponseParams): EncodeObject;
    queryGetUserResponse({ value }: queryGetUserResponseParams): EncodeObject;
    queryGetNodeResponse({ value }: queryGetNodeResponseParams): EncodeObject;
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
