import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { ParameterChangeProposal } from "./types/cosmos/params/v1beta1/params";
import { QuerySubspacesRequest } from "./types/cosmos/params/v1beta1/query";
import { Subspace } from "./types/cosmos/params/v1beta1/query";
import { ParamChange } from "./types/cosmos/params/v1beta1/params";
import { QueryParamsRequest } from "./types/cosmos/params/v1beta1/query";
import { QueryParamsResponse } from "./types/cosmos/params/v1beta1/query";
import { QuerySubspacesResponse } from "./types/cosmos/params/v1beta1/query";
export { ParameterChangeProposal, QuerySubspacesRequest, Subspace, ParamChange, QueryParamsRequest, QueryParamsResponse, QuerySubspacesResponse };
type sendParameterChangeProposalParams = {
    value: ParameterChangeProposal;
    fee?: StdFee;
    memo?: string;
};
type sendQuerySubspacesRequestParams = {
    value: QuerySubspacesRequest;
    fee?: StdFee;
    memo?: string;
};
type sendSubspaceParams = {
    value: Subspace;
    fee?: StdFee;
    memo?: string;
};
type sendParamChangeParams = {
    value: ParamChange;
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
type sendQuerySubspacesResponseParams = {
    value: QuerySubspacesResponse;
    fee?: StdFee;
    memo?: string;
};
type parameterChangeProposalParams = {
    value: ParameterChangeProposal;
};
type querySubspacesRequestParams = {
    value: QuerySubspacesRequest;
};
type subspaceParams = {
    value: Subspace;
};
type paramChangeParams = {
    value: ParamChange;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type querySubspacesResponseParams = {
    value: QuerySubspacesResponse;
};
export declare const registry: any;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendParameterChangeProposal({ value, fee, memo }: sendParameterChangeProposalParams): Promise<DeliverTxResponse>;
    sendQuerySubspacesRequest({ value, fee, memo }: sendQuerySubspacesRequestParams): Promise<DeliverTxResponse>;
    sendSubspace({ value, fee, memo }: sendSubspaceParams): Promise<DeliverTxResponse>;
    sendParamChange({ value, fee, memo }: sendParamChangeParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendQuerySubspacesResponse({ value, fee, memo }: sendQuerySubspacesResponseParams): Promise<DeliverTxResponse>;
    parameterChangeProposal({ value }: parameterChangeProposalParams): EncodeObject;
    querySubspacesRequest({ value }: querySubspacesRequestParams): EncodeObject;
    subspace({ value }: subspaceParams): EncodeObject;
    paramChange({ value }: paramChangeParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    querySubspacesResponse({ value }: querySubspacesResponseParams): EncodeObject;
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
        CosmosParamsV1Beta1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
