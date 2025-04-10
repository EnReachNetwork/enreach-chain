import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { QueryParamsResponse } from "./types/ibc/applications/interchain_accounts/host/v1/query";
import { Params } from "./types/ibc/applications/interchain_accounts/host/v1/host";
import { QueryParamsRequest } from "./types/ibc/applications/interchain_accounts/host/v1/query";
import { MsgUpdateParams } from "./types/ibc/applications/interchain_accounts/host/v1/tx";
import { MsgUpdateParamsResponse } from "./types/ibc/applications/interchain_accounts/host/v1/tx";
export { QueryParamsResponse, Params, QueryParamsRequest, MsgUpdateParams, MsgUpdateParamsResponse };
type sendQueryParamsResponseParams = {
    value: QueryParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
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
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type paramsParams = {
    value: Params;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
export declare const registry: any;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
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
        IbcApplicationsInterchainAccountsHostV1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
