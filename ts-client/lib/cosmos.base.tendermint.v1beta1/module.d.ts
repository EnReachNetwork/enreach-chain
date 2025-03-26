import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { VersionInfo } from "./types/cosmos/base/tendermint/v1beta1/query";
import { ProofOps } from "./types/cosmos/base/tendermint/v1beta1/query";
import { GetLatestValidatorSetRequest } from "./types/cosmos/base/tendermint/v1beta1/query";
import { Validator } from "./types/cosmos/base/tendermint/v1beta1/query";
import { GetBlockByHeightResponse } from "./types/cosmos/base/tendermint/v1beta1/query";
import { GetValidatorSetByHeightResponse } from "./types/cosmos/base/tendermint/v1beta1/query";
import { GetBlockByHeightRequest } from "./types/cosmos/base/tendermint/v1beta1/query";
import { GetNodeInfoRequest } from "./types/cosmos/base/tendermint/v1beta1/query";
import { ProofOp } from "./types/cosmos/base/tendermint/v1beta1/query";
import { GetLatestBlockRequest } from "./types/cosmos/base/tendermint/v1beta1/query";
import { ABCIQueryResponse } from "./types/cosmos/base/tendermint/v1beta1/query";
import { Module } from "./types/cosmos/base/tendermint/v1beta1/query";
import { GetValidatorSetByHeightRequest } from "./types/cosmos/base/tendermint/v1beta1/query";
import { GetSyncingRequest } from "./types/cosmos/base/tendermint/v1beta1/query";
import { GetSyncingResponse } from "./types/cosmos/base/tendermint/v1beta1/query";
import { Block } from "./types/cosmos/base/tendermint/v1beta1/types";
import { GetLatestValidatorSetResponse } from "./types/cosmos/base/tendermint/v1beta1/query";
import { GetNodeInfoResponse } from "./types/cosmos/base/tendermint/v1beta1/query";
import { GetLatestBlockResponse } from "./types/cosmos/base/tendermint/v1beta1/query";
import { ABCIQueryRequest } from "./types/cosmos/base/tendermint/v1beta1/query";
import { Header } from "./types/cosmos/base/tendermint/v1beta1/types";
export { VersionInfo, ProofOps, GetLatestValidatorSetRequest, Validator, GetBlockByHeightResponse, GetValidatorSetByHeightResponse, GetBlockByHeightRequest, GetNodeInfoRequest, ProofOp, GetLatestBlockRequest, ABCIQueryResponse, Module, GetValidatorSetByHeightRequest, GetSyncingRequest, GetSyncingResponse, Block, GetLatestValidatorSetResponse, GetNodeInfoResponse, GetLatestBlockResponse, ABCIQueryRequest, Header };
type sendVersionInfoParams = {
    value: VersionInfo;
    fee?: StdFee;
    memo?: string;
};
type sendProofOpsParams = {
    value: ProofOps;
    fee?: StdFee;
    memo?: string;
};
type sendGetLatestValidatorSetRequestParams = {
    value: GetLatestValidatorSetRequest;
    fee?: StdFee;
    memo?: string;
};
type sendValidatorParams = {
    value: Validator;
    fee?: StdFee;
    memo?: string;
};
type sendGetBlockByHeightResponseParams = {
    value: GetBlockByHeightResponse;
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
type sendGetNodeInfoRequestParams = {
    value: GetNodeInfoRequest;
    fee?: StdFee;
    memo?: string;
};
type sendProofOpParams = {
    value: ProofOp;
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
type sendModuleParams = {
    value: Module;
    fee?: StdFee;
    memo?: string;
};
type sendGetValidatorSetByHeightRequestParams = {
    value: GetValidatorSetByHeightRequest;
    fee?: StdFee;
    memo?: string;
};
type sendGetSyncingRequestParams = {
    value: GetSyncingRequest;
    fee?: StdFee;
    memo?: string;
};
type sendGetSyncingResponseParams = {
    value: GetSyncingResponse;
    fee?: StdFee;
    memo?: string;
};
type sendBlockParams = {
    value: Block;
    fee?: StdFee;
    memo?: string;
};
type sendGetLatestValidatorSetResponseParams = {
    value: GetLatestValidatorSetResponse;
    fee?: StdFee;
    memo?: string;
};
type sendGetNodeInfoResponseParams = {
    value: GetNodeInfoResponse;
    fee?: StdFee;
    memo?: string;
};
type sendGetLatestBlockResponseParams = {
    value: GetLatestBlockResponse;
    fee?: StdFee;
    memo?: string;
};
type sendABCIQueryRequestParams = {
    value: ABCIQueryRequest;
    fee?: StdFee;
    memo?: string;
};
type sendHeaderParams = {
    value: Header;
    fee?: StdFee;
    memo?: string;
};
type versionInfoParams = {
    value: VersionInfo;
};
type proofOpsParams = {
    value: ProofOps;
};
type getLatestValidatorSetRequestParams = {
    value: GetLatestValidatorSetRequest;
};
type validatorParams = {
    value: Validator;
};
type getBlockByHeightResponseParams = {
    value: GetBlockByHeightResponse;
};
type getValidatorSetByHeightResponseParams = {
    value: GetValidatorSetByHeightResponse;
};
type getBlockByHeightRequestParams = {
    value: GetBlockByHeightRequest;
};
type getNodeInfoRequestParams = {
    value: GetNodeInfoRequest;
};
type proofOpParams = {
    value: ProofOp;
};
type getLatestBlockRequestParams = {
    value: GetLatestBlockRequest;
};
type abciqueryResponseParams = {
    value: ABCIQueryResponse;
};
type moduleParams = {
    value: Module;
};
type getValidatorSetByHeightRequestParams = {
    value: GetValidatorSetByHeightRequest;
};
type getSyncingRequestParams = {
    value: GetSyncingRequest;
};
type getSyncingResponseParams = {
    value: GetSyncingResponse;
};
type blockParams = {
    value: Block;
};
type getLatestValidatorSetResponseParams = {
    value: GetLatestValidatorSetResponse;
};
type getNodeInfoResponseParams = {
    value: GetNodeInfoResponse;
};
type getLatestBlockResponseParams = {
    value: GetLatestBlockResponse;
};
type abciqueryRequestParams = {
    value: ABCIQueryRequest;
};
type headerParams = {
    value: Header;
};
export declare const registry: any;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendVersionInfo({ value, fee, memo }: sendVersionInfoParams): Promise<DeliverTxResponse>;
    sendProofOps({ value, fee, memo }: sendProofOpsParams): Promise<DeliverTxResponse>;
    sendGetLatestValidatorSetRequest({ value, fee, memo }: sendGetLatestValidatorSetRequestParams): Promise<DeliverTxResponse>;
    sendValidator({ value, fee, memo }: sendValidatorParams): Promise<DeliverTxResponse>;
    sendGetBlockByHeightResponse({ value, fee, memo }: sendGetBlockByHeightResponseParams): Promise<DeliverTxResponse>;
    sendGetValidatorSetByHeightResponse({ value, fee, memo }: sendGetValidatorSetByHeightResponseParams): Promise<DeliverTxResponse>;
    sendGetBlockByHeightRequest({ value, fee, memo }: sendGetBlockByHeightRequestParams): Promise<DeliverTxResponse>;
    sendGetNodeInfoRequest({ value, fee, memo }: sendGetNodeInfoRequestParams): Promise<DeliverTxResponse>;
    sendProofOp({ value, fee, memo }: sendProofOpParams): Promise<DeliverTxResponse>;
    sendGetLatestBlockRequest({ value, fee, memo }: sendGetLatestBlockRequestParams): Promise<DeliverTxResponse>;
    sendABCIQueryResponse({ value, fee, memo }: sendABCIQueryResponseParams): Promise<DeliverTxResponse>;
    sendModule({ value, fee, memo }: sendModuleParams): Promise<DeliverTxResponse>;
    sendGetValidatorSetByHeightRequest({ value, fee, memo }: sendGetValidatorSetByHeightRequestParams): Promise<DeliverTxResponse>;
    sendGetSyncingRequest({ value, fee, memo }: sendGetSyncingRequestParams): Promise<DeliverTxResponse>;
    sendGetSyncingResponse({ value, fee, memo }: sendGetSyncingResponseParams): Promise<DeliverTxResponse>;
    sendBlock({ value, fee, memo }: sendBlockParams): Promise<DeliverTxResponse>;
    sendGetLatestValidatorSetResponse({ value, fee, memo }: sendGetLatestValidatorSetResponseParams): Promise<DeliverTxResponse>;
    sendGetNodeInfoResponse({ value, fee, memo }: sendGetNodeInfoResponseParams): Promise<DeliverTxResponse>;
    sendGetLatestBlockResponse({ value, fee, memo }: sendGetLatestBlockResponseParams): Promise<DeliverTxResponse>;
    sendABCIQueryRequest({ value, fee, memo }: sendABCIQueryRequestParams): Promise<DeliverTxResponse>;
    sendHeader({ value, fee, memo }: sendHeaderParams): Promise<DeliverTxResponse>;
    versionInfo({ value }: versionInfoParams): EncodeObject;
    proofOps({ value }: proofOpsParams): EncodeObject;
    getLatestValidatorSetRequest({ value }: getLatestValidatorSetRequestParams): EncodeObject;
    validator({ value }: validatorParams): EncodeObject;
    getBlockByHeightResponse({ value }: getBlockByHeightResponseParams): EncodeObject;
    getValidatorSetByHeightResponse({ value }: getValidatorSetByHeightResponseParams): EncodeObject;
    getBlockByHeightRequest({ value }: getBlockByHeightRequestParams): EncodeObject;
    getNodeInfoRequest({ value }: getNodeInfoRequestParams): EncodeObject;
    proofOp({ value }: proofOpParams): EncodeObject;
    getLatestBlockRequest({ value }: getLatestBlockRequestParams): EncodeObject;
    abciqueryResponse({ value }: abciqueryResponseParams): EncodeObject;
    module({ value }: moduleParams): EncodeObject;
    getValidatorSetByHeightRequest({ value }: getValidatorSetByHeightRequestParams): EncodeObject;
    getSyncingRequest({ value }: getSyncingRequestParams): EncodeObject;
    getSyncingResponse({ value }: getSyncingResponseParams): EncodeObject;
    block({ value }: blockParams): EncodeObject;
    getLatestValidatorSetResponse({ value }: getLatestValidatorSetResponseParams): EncodeObject;
    getNodeInfoResponse({ value }: getNodeInfoResponseParams): EncodeObject;
    getLatestBlockResponse({ value }: getLatestBlockResponseParams): EncodeObject;
    abciqueryRequest({ value }: abciqueryRequestParams): EncodeObject;
    header({ value }: headerParams): EncodeObject;
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
