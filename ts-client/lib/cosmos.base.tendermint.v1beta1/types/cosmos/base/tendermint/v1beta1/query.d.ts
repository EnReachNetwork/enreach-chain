import _m0 from "protobufjs/minimal";
import { Any } from "../../../../google/protobuf/any";
import { DefaultNodeInfo } from "../../../../tendermint/p2p/types";
import { Block } from "../../../../tendermint/types/block";
import { BlockID } from "../../../../tendermint/types/types";
import { PageRequest, PageResponse } from "../../query/v1beta1/pagination";
import { Block as Block1 } from "./types";
export declare const protobufPackage = "cosmos.base.tendermint.v1beta1";
/** GetValidatorSetByHeightRequest is the request type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetValidatorSetByHeightRequest {
    height: number;
    /** pagination defines an pagination for the request. */
    pagination: PageRequest | undefined;
}
/** GetValidatorSetByHeightResponse is the response type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetValidatorSetByHeightResponse {
    blockHeight: number;
    validators: Validator[];
    /** pagination defines an pagination for the response. */
    pagination: PageResponse | undefined;
}
/** GetLatestValidatorSetRequest is the request type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetLatestValidatorSetRequest {
    /** pagination defines an pagination for the request. */
    pagination: PageRequest | undefined;
}
/** GetLatestValidatorSetResponse is the response type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetLatestValidatorSetResponse {
    blockHeight: number;
    validators: Validator[];
    /** pagination defines an pagination for the response. */
    pagination: PageResponse | undefined;
}
/** Validator is the type for the validator-set. */
export interface Validator {
    address: string;
    pubKey: Any | undefined;
    votingPower: number;
    proposerPriority: number;
}
/** GetBlockByHeightRequest is the request type for the Query/GetBlockByHeight RPC method. */
export interface GetBlockByHeightRequest {
    height: number;
}
/** GetBlockByHeightResponse is the response type for the Query/GetBlockByHeight RPC method. */
export interface GetBlockByHeightResponse {
    blockId: BlockID | undefined;
    /** Deprecated: please use `sdk_block` instead */
    block: Block | undefined;
    /** Since: cosmos-sdk 0.47 */
    sdkBlock: Block1 | undefined;
}
/** GetLatestBlockRequest is the request type for the Query/GetLatestBlock RPC method. */
export interface GetLatestBlockRequest {
}
/** GetLatestBlockResponse is the response type for the Query/GetLatestBlock RPC method. */
export interface GetLatestBlockResponse {
    blockId: BlockID | undefined;
    /** Deprecated: please use `sdk_block` instead */
    block: Block | undefined;
    /** Since: cosmos-sdk 0.47 */
    sdkBlock: Block1 | undefined;
}
/** GetSyncingRequest is the request type for the Query/GetSyncing RPC method. */
export interface GetSyncingRequest {
}
/** GetSyncingResponse is the response type for the Query/GetSyncing RPC method. */
export interface GetSyncingResponse {
    syncing: boolean;
}
/** GetNodeInfoRequest is the request type for the Query/GetNodeInfo RPC method. */
export interface GetNodeInfoRequest {
}
/** GetNodeInfoResponse is the response type for the Query/GetNodeInfo RPC method. */
export interface GetNodeInfoResponse {
    defaultNodeInfo: DefaultNodeInfo | undefined;
    applicationVersion: VersionInfo | undefined;
}
/** VersionInfo is the type for the GetNodeInfoResponse message. */
export interface VersionInfo {
    name: string;
    appName: string;
    version: string;
    gitCommit: string;
    buildTags: string;
    goVersion: string;
    buildDeps: Module[];
    /** Since: cosmos-sdk 0.43 */
    cosmosSdkVersion: string;
}
/** Module is the type for VersionInfo */
export interface Module {
    /** module path */
    path: string;
    /** module version */
    version: string;
    /** checksum */
    sum: string;
}
/** ABCIQueryRequest defines the request structure for the ABCIQuery gRPC query. */
export interface ABCIQueryRequest {
    data: Uint8Array;
    path: string;
    height: number;
    prove: boolean;
}
/**
 * ABCIQueryResponse defines the response structure for the ABCIQuery gRPC query.
 *
 * Note: This type is a duplicate of the ResponseQuery proto type defined in
 * Tendermint.
 */
export interface ABCIQueryResponse {
    code: number;
    /** nondeterministic */
    log: string;
    /** nondeterministic */
    info: string;
    index: number;
    key: Uint8Array;
    value: Uint8Array;
    proofOps: ProofOps | undefined;
    height: number;
    codespace: string;
}
/**
 * ProofOp defines an operation used for calculating Merkle root. The data could
 * be arbitrary format, providing necessary data for example neighbouring node
 * hash.
 *
 * Note: This type is a duplicate of the ProofOp proto type defined in Tendermint.
 */
export interface ProofOp {
    type: string;
    key: Uint8Array;
    data: Uint8Array;
}
/**
 * ProofOps is Merkle proof defined by the list of ProofOps.
 *
 * Note: This type is a duplicate of the ProofOps proto type defined in Tendermint.
 */
export interface ProofOps {
    ops: ProofOp[];
}
export declare const GetValidatorSetByHeightRequest: {
    encode(message: GetValidatorSetByHeightRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetValidatorSetByHeightRequest;
    fromJSON(object: any): GetValidatorSetByHeightRequest;
    toJSON(message: GetValidatorSetByHeightRequest): unknown;
    create<I extends Exact<DeepPartial<GetValidatorSetByHeightRequest>, I>>(base?: I): GetValidatorSetByHeightRequest;
    fromPartial<I extends Exact<DeepPartial<GetValidatorSetByHeightRequest>, I>>(object: I): GetValidatorSetByHeightRequest;
};
export declare const GetValidatorSetByHeightResponse: {
    encode(message: GetValidatorSetByHeightResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetValidatorSetByHeightResponse;
    fromJSON(object: any): GetValidatorSetByHeightResponse;
    toJSON(message: GetValidatorSetByHeightResponse): unknown;
    create<I extends Exact<DeepPartial<GetValidatorSetByHeightResponse>, I>>(base?: I): GetValidatorSetByHeightResponse;
    fromPartial<I extends Exact<DeepPartial<GetValidatorSetByHeightResponse>, I>>(object: I): GetValidatorSetByHeightResponse;
};
export declare const GetLatestValidatorSetRequest: {
    encode(message: GetLatestValidatorSetRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetLatestValidatorSetRequest;
    fromJSON(object: any): GetLatestValidatorSetRequest;
    toJSON(message: GetLatestValidatorSetRequest): unknown;
    create<I extends Exact<DeepPartial<GetLatestValidatorSetRequest>, I>>(base?: I): GetLatestValidatorSetRequest;
    fromPartial<I extends Exact<DeepPartial<GetLatestValidatorSetRequest>, I>>(object: I): GetLatestValidatorSetRequest;
};
export declare const GetLatestValidatorSetResponse: {
    encode(message: GetLatestValidatorSetResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetLatestValidatorSetResponse;
    fromJSON(object: any): GetLatestValidatorSetResponse;
    toJSON(message: GetLatestValidatorSetResponse): unknown;
    create<I extends Exact<DeepPartial<GetLatestValidatorSetResponse>, I>>(base?: I): GetLatestValidatorSetResponse;
    fromPartial<I extends Exact<DeepPartial<GetLatestValidatorSetResponse>, I>>(object: I): GetLatestValidatorSetResponse;
};
export declare const Validator: {
    encode(message: Validator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Validator;
    fromJSON(object: any): Validator;
    toJSON(message: Validator): unknown;
    create<I extends Exact<DeepPartial<Validator>, I>>(base?: I): Validator;
    fromPartial<I extends Exact<DeepPartial<Validator>, I>>(object: I): Validator;
};
export declare const GetBlockByHeightRequest: {
    encode(message: GetBlockByHeightRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetBlockByHeightRequest;
    fromJSON(object: any): GetBlockByHeightRequest;
    toJSON(message: GetBlockByHeightRequest): unknown;
    create<I extends Exact<DeepPartial<GetBlockByHeightRequest>, I>>(base?: I): GetBlockByHeightRequest;
    fromPartial<I extends Exact<DeepPartial<GetBlockByHeightRequest>, I>>(object: I): GetBlockByHeightRequest;
};
export declare const GetBlockByHeightResponse: {
    encode(message: GetBlockByHeightResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetBlockByHeightResponse;
    fromJSON(object: any): GetBlockByHeightResponse;
    toJSON(message: GetBlockByHeightResponse): unknown;
    create<I extends Exact<DeepPartial<GetBlockByHeightResponse>, I>>(base?: I): GetBlockByHeightResponse;
    fromPartial<I extends Exact<DeepPartial<GetBlockByHeightResponse>, I>>(object: I): GetBlockByHeightResponse;
};
export declare const GetLatestBlockRequest: {
    encode(_: GetLatestBlockRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetLatestBlockRequest;
    fromJSON(_: any): GetLatestBlockRequest;
    toJSON(_: GetLatestBlockRequest): unknown;
    create<I extends Exact<DeepPartial<GetLatestBlockRequest>, I>>(base?: I): GetLatestBlockRequest;
    fromPartial<I extends Exact<DeepPartial<GetLatestBlockRequest>, I>>(_: I): GetLatestBlockRequest;
};
export declare const GetLatestBlockResponse: {
    encode(message: GetLatestBlockResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetLatestBlockResponse;
    fromJSON(object: any): GetLatestBlockResponse;
    toJSON(message: GetLatestBlockResponse): unknown;
    create<I extends Exact<DeepPartial<GetLatestBlockResponse>, I>>(base?: I): GetLatestBlockResponse;
    fromPartial<I extends Exact<DeepPartial<GetLatestBlockResponse>, I>>(object: I): GetLatestBlockResponse;
};
export declare const GetSyncingRequest: {
    encode(_: GetSyncingRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetSyncingRequest;
    fromJSON(_: any): GetSyncingRequest;
    toJSON(_: GetSyncingRequest): unknown;
    create<I extends Exact<DeepPartial<GetSyncingRequest>, I>>(base?: I): GetSyncingRequest;
    fromPartial<I extends Exact<DeepPartial<GetSyncingRequest>, I>>(_: I): GetSyncingRequest;
};
export declare const GetSyncingResponse: {
    encode(message: GetSyncingResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetSyncingResponse;
    fromJSON(object: any): GetSyncingResponse;
    toJSON(message: GetSyncingResponse): unknown;
    create<I extends Exact<DeepPartial<GetSyncingResponse>, I>>(base?: I): GetSyncingResponse;
    fromPartial<I extends Exact<DeepPartial<GetSyncingResponse>, I>>(object: I): GetSyncingResponse;
};
export declare const GetNodeInfoRequest: {
    encode(_: GetNodeInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetNodeInfoRequest;
    fromJSON(_: any): GetNodeInfoRequest;
    toJSON(_: GetNodeInfoRequest): unknown;
    create<I extends Exact<DeepPartial<GetNodeInfoRequest>, I>>(base?: I): GetNodeInfoRequest;
    fromPartial<I extends Exact<DeepPartial<GetNodeInfoRequest>, I>>(_: I): GetNodeInfoRequest;
};
export declare const GetNodeInfoResponse: {
    encode(message: GetNodeInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetNodeInfoResponse;
    fromJSON(object: any): GetNodeInfoResponse;
    toJSON(message: GetNodeInfoResponse): unknown;
    create<I extends Exact<DeepPartial<GetNodeInfoResponse>, I>>(base?: I): GetNodeInfoResponse;
    fromPartial<I extends Exact<DeepPartial<GetNodeInfoResponse>, I>>(object: I): GetNodeInfoResponse;
};
export declare const VersionInfo: {
    encode(message: VersionInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VersionInfo;
    fromJSON(object: any): VersionInfo;
    toJSON(message: VersionInfo): unknown;
    create<I extends Exact<DeepPartial<VersionInfo>, I>>(base?: I): VersionInfo;
    fromPartial<I extends Exact<DeepPartial<VersionInfo>, I>>(object: I): VersionInfo;
};
export declare const Module: {
    encode(message: Module, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Module;
    fromJSON(object: any): Module;
    toJSON(message: Module): unknown;
    create<I extends Exact<DeepPartial<Module>, I>>(base?: I): Module;
    fromPartial<I extends Exact<DeepPartial<Module>, I>>(object: I): Module;
};
export declare const ABCIQueryRequest: {
    encode(message: ABCIQueryRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ABCIQueryRequest;
    fromJSON(object: any): ABCIQueryRequest;
    toJSON(message: ABCIQueryRequest): unknown;
    create<I extends Exact<DeepPartial<ABCIQueryRequest>, I>>(base?: I): ABCIQueryRequest;
    fromPartial<I extends Exact<DeepPartial<ABCIQueryRequest>, I>>(object: I): ABCIQueryRequest;
};
export declare const ABCIQueryResponse: {
    encode(message: ABCIQueryResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ABCIQueryResponse;
    fromJSON(object: any): ABCIQueryResponse;
    toJSON(message: ABCIQueryResponse): unknown;
    create<I extends Exact<DeepPartial<ABCIQueryResponse>, I>>(base?: I): ABCIQueryResponse;
    fromPartial<I extends Exact<DeepPartial<ABCIQueryResponse>, I>>(object: I): ABCIQueryResponse;
};
export declare const ProofOp: {
    encode(message: ProofOp, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProofOp;
    fromJSON(object: any): ProofOp;
    toJSON(message: ProofOp): unknown;
    create<I extends Exact<DeepPartial<ProofOp>, I>>(base?: I): ProofOp;
    fromPartial<I extends Exact<DeepPartial<ProofOp>, I>>(object: I): ProofOp;
};
export declare const ProofOps: {
    encode(message: ProofOps, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProofOps;
    fromJSON(object: any): ProofOps;
    toJSON(message: ProofOps): unknown;
    create<I extends Exact<DeepPartial<ProofOps>, I>>(base?: I): ProofOps;
    fromPartial<I extends Exact<DeepPartial<ProofOps>, I>>(object: I): ProofOps;
};
/** Service defines the gRPC querier service for tendermint queries. */
export interface Service {
    /** GetNodeInfo queries the current node info. */
    GetNodeInfo(request: GetNodeInfoRequest): Promise<GetNodeInfoResponse>;
    /** GetSyncing queries node syncing. */
    GetSyncing(request: GetSyncingRequest): Promise<GetSyncingResponse>;
    /** GetLatestBlock returns the latest block. */
    GetLatestBlock(request: GetLatestBlockRequest): Promise<GetLatestBlockResponse>;
    /** GetBlockByHeight queries block for given height. */
    GetBlockByHeight(request: GetBlockByHeightRequest): Promise<GetBlockByHeightResponse>;
    /** GetLatestValidatorSet queries latest validator-set. */
    GetLatestValidatorSet(request: GetLatestValidatorSetRequest): Promise<GetLatestValidatorSetResponse>;
    /** GetValidatorSetByHeight queries validator-set at a given height. */
    GetValidatorSetByHeight(request: GetValidatorSetByHeightRequest): Promise<GetValidatorSetByHeightResponse>;
    /**
     * ABCIQuery defines a query handler that supports ABCI queries directly to the
     * application, bypassing Tendermint completely. The ABCI query must contain
     * a valid and supported path, including app, custom, p2p, and store.
     *
     * Since: cosmos-sdk 0.46
     */
    ABCIQuery(request: ABCIQueryRequest): Promise<ABCIQueryResponse>;
}
export declare const ServiceServiceName = "cosmos.base.tendermint.v1beta1.Service";
export declare class ServiceClientImpl implements Service {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    GetNodeInfo(request: GetNodeInfoRequest): Promise<GetNodeInfoResponse>;
    GetSyncing(request: GetSyncingRequest): Promise<GetSyncingResponse>;
    GetLatestBlock(request: GetLatestBlockRequest): Promise<GetLatestBlockResponse>;
    GetBlockByHeight(request: GetBlockByHeightRequest): Promise<GetBlockByHeightResponse>;
    GetLatestValidatorSet(request: GetLatestValidatorSetRequest): Promise<GetLatestValidatorSetResponse>;
    GetValidatorSetByHeight(request: GetValidatorSetByHeightRequest): Promise<GetValidatorSetByHeightResponse>;
    ABCIQuery(request: ABCIQueryRequest): Promise<ABCIQueryResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
