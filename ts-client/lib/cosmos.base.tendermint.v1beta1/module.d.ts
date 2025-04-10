import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { ProofOps } from "./types/cosmos/base/tendermint/v1beta1/query";
import { Header } from "./types/cosmos/base/tendermint/v1beta1/types";
import { ABCIQueryRequest } from "./types/cosmos/base/tendermint/v1beta1/query";
import { ProofOp } from "./types/cosmos/base/tendermint/v1beta1/query";
import { Module } from "./types/cosmos/base/tendermint/v1beta1/query";
import { GetValidatorSetByHeightResponse } from "./types/cosmos/base/tendermint/v1beta1/query";
import { GetBlockByHeightRequest } from "./types/cosmos/base/tendermint/v1beta1/query";
import { Block } from "./types/cosmos/base/tendermint/v1beta1/types";
import { Validator } from "./types/cosmos/base/tendermint/v1beta1/query";
import { GetLatestBlockRequest } from "./types/cosmos/base/tendermint/v1beta1/query";
import { ABCIQueryResponse } from "./types/cosmos/base/tendermint/v1beta1/query";
import { GetLatestValidatorSetRequest } from "./types/cosmos/base/tendermint/v1beta1/query";
import { GetLatestValidatorSetResponse } from "./types/cosmos/base/tendermint/v1beta1/query";
import { GetValidatorSetByHeightRequest } from "./types/cosmos/base/tendermint/v1beta1/query";
import { GetNodeInfoResponse } from "./types/cosmos/base/tendermint/v1beta1/query";
import { VersionInfo } from "./types/cosmos/base/tendermint/v1beta1/query";
import { GetSyncingResponse } from "./types/cosmos/base/tendermint/v1beta1/query";
import { GetBlockByHeightResponse } from "./types/cosmos/base/tendermint/v1beta1/query";
import { GetLatestBlockResponse } from "./types/cosmos/base/tendermint/v1beta1/query";
import { GetSyncingRequest } from "./types/cosmos/base/tendermint/v1beta1/query";
import { GetNodeInfoRequest } from "./types/cosmos/base/tendermint/v1beta1/query";
export { ProofOps, Header, ABCIQueryRequest, ProofOp, Module, GetValidatorSetByHeightResponse, GetBlockByHeightRequest, Block, Validator, GetLatestBlockRequest, ABCIQueryResponse, GetLatestValidatorSetRequest, GetLatestValidatorSetResponse, GetValidatorSetByHeightRequest, GetNodeInfoResponse, VersionInfo, GetSyncingResponse, GetBlockByHeightResponse, GetLatestBlockResponse, GetSyncingRequest, GetNodeInfoRequest };
type sendProofOpsParams = {
    value: ProofOps;
    fee?: StdFee;
    memo?: string;
};
type sendHeaderParams = {
    value: Header;
    fee?: StdFee;
    memo?: string;
};
type sendABCIQueryRequestParams = {
    value: ABCIQueryRequest;
    fee?: StdFee;
    memo?: string;
};
type sendProofOpParams = {
    value: ProofOp;
    fee?: StdFee;
    memo?: string;
};
type sendModuleParams = {
    value: Module;
    fee?: StdFee;
    memo?: string;
};
type sendGetValidatorSetByHeightResponseParams = {
    value: GetValidatorSetByHeightResponse;
    fee?: StdFee;
    memo?: string;
};
type sendGetBlockByHeightRequestParams = {
    value: GetBlockByHeightRequest;
    fee?: StdFee;
    memo?: string;
};
type sendBlockParams = {
    value: Block;
    fee?: StdFee;
    memo?: string;
};
type sendValidatorParams = {
    value: Validator;
    fee?: StdFee;
    memo?: string;
};
type sendGetLatestBlockRequestParams = {
    value: GetLatestBlockRequest;
    fee?: StdFee;
    memo?: string;
};
type sendABCIQueryResponseParams = {
    value: ABCIQueryResponse;
    fee?: StdFee;
    memo?: string;
};
type sendGetLatestValidatorSetRequestParams = {
    value: GetLatestValidatorSetRequest;
    fee?: StdFee;
    memo?: string;
};
type sendGetLatestValidatorSetResponseParams = {
    value: GetLatestValidatorSetResponse;
    fee?: StdFee;
    memo?: string;
};
type sendGetValidatorSetByHeightRequestParams = {
    value: GetValidatorSetByHeightRequest;
    fee?: StdFee;
    memo?: string;
};
type sendGetNodeInfoResponseParams = {
    value: GetNodeInfoResponse;
    fee?: StdFee;
    memo?: string;
};
type sendVersionInfoParams = {
    value: VersionInfo;
    fee?: StdFee;
    memo?: string;
};
type sendGetSyncingResponseParams = {
    value: GetSyncingResponse;
    fee?: StdFee;
    memo?: string;
};
type sendGetBlockByHeightResponseParams = {
    value: GetBlockByHeightResponse;
    fee?: StdFee;
    memo?: string;
};
type sendGetLatestBlockResponseParams = {
    value: GetLatestBlockResponse;
    fee?: StdFee;
    memo?: string;
};
type sendGetSyncingRequestParams = {
    value: GetSyncingRequest;
    fee?: StdFee;
    memo?: string;
};
type sendGetNodeInfoRequestParams = {
    value: GetNodeInfoRequest;
    fee?: StdFee;
    memo?: string;
};
type proofOpsParams = {
    value: ProofOps;
};
type headerParams = {
    value: Header;
};
type abciqueryRequestParams = {
    value: ABCIQueryRequest;
};
type proofOpParams = {
    value: ProofOp;
};
type moduleParams = {
    value: Module;
};
type getValidatorSetByHeightResponseParams = {
    value: GetValidatorSetByHeightResponse;
};
type getBlockByHeightRequestParams = {
    value: GetBlockByHeightRequest;
};
type blockParams = {
    value: Block;
};
type validatorParams = {
    value: Validator;
};
type getLatestBlockRequestParams = {
    value: GetLatestBlockRequest;
};
type abciqueryResponseParams = {
    value: ABCIQueryResponse;
};
type getLatestValidatorSetRequestParams = {
    value: GetLatestValidatorSetRequest;
};
type getLatestValidatorSetResponseParams = {
    value: GetLatestValidatorSetResponse;
};
type getValidatorSetByHeightRequestParams = {
    value: GetValidatorSetByHeightRequest;
};
type getNodeInfoResponseParams = {
    value: GetNodeInfoResponse;
};
type versionInfoParams = {
    value: VersionInfo;
};
type getSyncingResponseParams = {
    value: GetSyncingResponse;
};
type getBlockByHeightResponseParams = {
    value: GetBlockByHeightResponse;
};
type getLatestBlockResponseParams = {
    value: GetLatestBlockResponse;
};
type getSyncingRequestParams = {
    value: GetSyncingRequest;
};
type getNodeInfoRequestParams = {
    value: GetNodeInfoRequest;
};
export declare const registry: any;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendProofOps({ value, fee, memo }: sendProofOpsParams): Promise<DeliverTxResponse>;
    sendHeader({ value, fee, memo }: sendHeaderParams): Promise<DeliverTxResponse>;
    sendABCIQueryRequest({ value, fee, memo }: sendABCIQueryRequestParams): Promise<DeliverTxResponse>;
    sendProofOp({ value, fee, memo }: sendProofOpParams): Promise<DeliverTxResponse>;
    sendModule({ value, fee, memo }: sendModuleParams): Promise<DeliverTxResponse>;
    sendGetValidatorSetByHeightResponse({ value, fee, memo }: sendGetValidatorSetByHeightResponseParams): Promise<DeliverTxResponse>;
    sendGetBlockByHeightRequest({ value, fee, memo }: sendGetBlockByHeightRequestParams): Promise<DeliverTxResponse>;
    sendBlock({ value, fee, memo }: sendBlockParams): Promise<DeliverTxResponse>;
    sendValidator({ value, fee, memo }: sendValidatorParams): Promise<DeliverTxResponse>;
    sendGetLatestBlockRequest({ value, fee, memo }: sendGetLatestBlockRequestParams): Promise<DeliverTxResponse>;
    sendABCIQueryResponse({ value, fee, memo }: sendABCIQueryResponseParams): Promise<DeliverTxResponse>;
    sendGetLatestValidatorSetRequest({ value, fee, memo }: sendGetLatestValidatorSetRequestParams): Promise<DeliverTxResponse>;
    sendGetLatestValidatorSetResponse({ value, fee, memo }: sendGetLatestValidatorSetResponseParams): Promise<DeliverTxResponse>;
    sendGetValidatorSetByHeightRequest({ value, fee, memo }: sendGetValidatorSetByHeightRequestParams): Promise<DeliverTxResponse>;
    sendGetNodeInfoResponse({ value, fee, memo }: sendGetNodeInfoResponseParams): Promise<DeliverTxResponse>;
    sendVersionInfo({ value, fee, memo }: sendVersionInfoParams): Promise<DeliverTxResponse>;
    sendGetSyncingResponse({ value, fee, memo }: sendGetSyncingResponseParams): Promise<DeliverTxResponse>;
    sendGetBlockByHeightResponse({ value, fee, memo }: sendGetBlockByHeightResponseParams): Promise<DeliverTxResponse>;
    sendGetLatestBlockResponse({ value, fee, memo }: sendGetLatestBlockResponseParams): Promise<DeliverTxResponse>;
    sendGetSyncingRequest({ value, fee, memo }: sendGetSyncingRequestParams): Promise<DeliverTxResponse>;
    sendGetNodeInfoRequest({ value, fee, memo }: sendGetNodeInfoRequestParams): Promise<DeliverTxResponse>;
    proofOps({ value }: proofOpsParams): EncodeObject;
    header({ value }: headerParams): EncodeObject;
    abciqueryRequest({ value }: abciqueryRequestParams): EncodeObject;
    proofOp({ value }: proofOpParams): EncodeObject;
    module({ value }: moduleParams): EncodeObject;
    getValidatorSetByHeightResponse({ value }: getValidatorSetByHeightResponseParams): EncodeObject;
    getBlockByHeightRequest({ value }: getBlockByHeightRequestParams): EncodeObject;
    block({ value }: blockParams): EncodeObject;
    validator({ value }: validatorParams): EncodeObject;
    getLatestBlockRequest({ value }: getLatestBlockRequestParams): EncodeObject;
    abciqueryResponse({ value }: abciqueryResponseParams): EncodeObject;
    getLatestValidatorSetRequest({ value }: getLatestValidatorSetRequestParams): EncodeObject;
    getLatestValidatorSetResponse({ value }: getLatestValidatorSetResponseParams): EncodeObject;
    getValidatorSetByHeightRequest({ value }: getValidatorSetByHeightRequestParams): EncodeObject;
    getNodeInfoResponse({ value }: getNodeInfoResponseParams): EncodeObject;
    versionInfo({ value }: versionInfoParams): EncodeObject;
    getSyncingResponse({ value }: getSyncingResponseParams): EncodeObject;
    getBlockByHeightResponse({ value }: getBlockByHeightResponseParams): EncodeObject;
    getLatestBlockResponse({ value }: getLatestBlockResponseParams): EncodeObject;
    getSyncingRequest({ value }: getSyncingRequestParams): EncodeObject;
    getNodeInfoRequest({ value }: getNodeInfoRequestParams): EncodeObject;
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
        CosmosBaseTendermintV1Beta1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
