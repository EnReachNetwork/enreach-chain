import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { Params } from "./types/ibc/applications/interchain_accounts/controller/v1/controller";
import { MsgSendTxResponse } from "./types/ibc/applications/interchain_accounts/controller/v1/tx";
import { MsgUpdateParams } from "./types/ibc/applications/interchain_accounts/controller/v1/tx";
import { MsgUpdateParamsResponse } from "./types/ibc/applications/interchain_accounts/controller/v1/tx";
import { QueryParamsResponse } from "./types/ibc/applications/interchain_accounts/controller/v1/query";
import { QueryParamsRequest } from "./types/ibc/applications/interchain_accounts/controller/v1/query";
import { MsgRegisterInterchainAccount } from "./types/ibc/applications/interchain_accounts/controller/v1/tx";
import { MsgSendTx } from "./types/ibc/applications/interchain_accounts/controller/v1/tx";
import { QueryInterchainAccountRequest } from "./types/ibc/applications/interchain_accounts/controller/v1/query";
import { MsgRegisterInterchainAccountResponse } from "./types/ibc/applications/interchain_accounts/controller/v1/tx";
import { QueryInterchainAccountResponse } from "./types/ibc/applications/interchain_accounts/controller/v1/query";
export { Params, MsgSendTxResponse, MsgUpdateParams, MsgUpdateParamsResponse, QueryParamsResponse, QueryParamsRequest, MsgRegisterInterchainAccount, MsgSendTx, QueryInterchainAccountRequest, MsgRegisterInterchainAccountResponse, QueryInterchainAccountResponse };
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSendTxResponseParams = {
    value: MsgSendTxResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
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
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRegisterInterchainAccountParams = {
    value: MsgRegisterInterchainAccount;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSendTxParams = {
    value: MsgSendTx;
    fee?: StdFee;
    memo?: string;
};
type sendQueryInterchainAccountRequestParams = {
    value: QueryInterchainAccountRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgRegisterInterchainAccountResponseParams = {
    value: MsgRegisterInterchainAccountResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryInterchainAccountResponseParams = {
    value: QueryInterchainAccountResponse;
    fee?: StdFee;
    memo?: string;
};
type paramsParams = {
    value: Params;
};
type msgSendTxResponseParams = {
    value: MsgSendTxResponse;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type msgRegisterInterchainAccountParams = {
    value: MsgRegisterInterchainAccount;
};
type msgSendTxParams = {
    value: MsgSendTx;
};
type queryInterchainAccountRequestParams = {
    value: QueryInterchainAccountRequest;
};
type msgRegisterInterchainAccountResponseParams = {
    value: MsgRegisterInterchainAccountResponse;
};
type queryInterchainAccountResponseParams = {
    value: QueryInterchainAccountResponse;
};
export declare const registry: any;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendMsgSendTxResponse({ value, fee, memo }: sendMsgSendTxResponseParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendMsgRegisterInterchainAccount({ value, fee, memo }: sendMsgRegisterInterchainAccountParams): Promise<DeliverTxResponse>;
    sendMsgSendTx({ value, fee, memo }: sendMsgSendTxParams): Promise<DeliverTxResponse>;
    sendQueryInterchainAccountRequest({ value, fee, memo }: sendQueryInterchainAccountRequestParams): Promise<DeliverTxResponse>;
    sendMsgRegisterInterchainAccountResponse({ value, fee, memo }: sendMsgRegisterInterchainAccountResponseParams): Promise<DeliverTxResponse>;
    sendQueryInterchainAccountResponse({ value, fee, memo }: sendQueryInterchainAccountResponseParams): Promise<DeliverTxResponse>;
    params({ value }: paramsParams): EncodeObject;
    msgSendTxResponse({ value }: msgSendTxResponseParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    msgRegisterInterchainAccount({ value }: msgRegisterInterchainAccountParams): EncodeObject;
    msgSendTx({ value }: msgSendTxParams): EncodeObject;
    queryInterchainAccountRequest({ value }: queryInterchainAccountRequestParams): EncodeObject;
    msgRegisterInterchainAccountResponse({ value }: msgRegisterInterchainAccountResponseParams): EncodeObject;
    queryInterchainAccountResponse({ value }: queryInterchainAccountResponseParams): EncodeObject;
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
        IbcApplicationsInterchainAccountsControllerV1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
