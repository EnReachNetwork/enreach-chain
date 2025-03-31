import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { Superior } from "./superior";
import { ManagerWorkload, NodeWorkload } from "./workload";
import { EpochProcessData, Workreport } from "./workreport";
export declare const protobufPackage = "enreach.workload";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params | undefined;
}
export interface QueryGetEpochLengthRequest {
}
export interface QueryGetEpochLengthResponse {
    epochLength: number;
}
export interface QueryGetCurrentEpochRequest {
}
export interface QueryGetCurrentEpochResponse {
    currentEpoch: number;
}
export interface QueryGetNodeWorkloadRequest {
    epoch: number;
    nodeID: string;
}
export interface QueryGetNodeWorkloadResponse {
    NodeWorkload: NodeWorkload | undefined;
}
export interface QueryGetAllNodeWorkloadByEpochRequest {
    epoch: number;
    pagination: PageRequest | undefined;
}
export interface QueryGetAllNodeWorkloadByEpochResponse {
    NodeWorkloads: NodeWorkload[];
    pagination: PageResponse | undefined;
}
export interface QueryGetManagerWorkloadRequest {
    epoch: number;
    managerAccount: string;
}
export interface QueryGetManagerWorkloadResponse {
    ManagerWorkload: ManagerWorkload | undefined;
}
export interface QueryGetAllManagerWorkloadByEpochRequest {
    epoch: number;
    pagination: PageRequest | undefined;
}
export interface QueryGetAllManagerWorkloadByEpochResponse {
    ManagerWorkloads: ManagerWorkload[];
    pagination: PageResponse | undefined;
}
export interface QueryGetWorkreportRequest {
    epoch: number;
    nodeID: string;
}
export interface QueryGetWorkreportResponse {
    Workreport: Workreport | undefined;
}
export interface QueryGetAllWorkreportByEpochRequest {
    epoch: number;
    pagination: PageRequest | undefined;
}
export interface QueryGetAllWorkreportByEpochResponse {
    Workreports: Workreport[];
    pagination: PageResponse | undefined;
}
export interface QueryGetWorkreportProcessBatchSizeRequest {
}
export interface QueryGetWorkreportProcessBatchSizeResponse {
    batchSize: number;
}
export interface QueryGetHistoryEpochDataDepthRequest {
}
export interface QueryGetHistoryEpochDataDepthResponse {
    depth: number;
}
export interface QueryGetEpochProcessDataRequest {
    epoch: number;
}
export interface QueryGetEpochProcessDataResponse {
    EpochProcessData: EpochProcessData | undefined;
}
export interface QueryGetAllEpochProcessDataRequest {
    pagination: PageRequest | undefined;
}
export interface QueryGetAllEpochProcessDataResponse {
    EpochProcessDatas: EpochProcessData[];
    pagination: PageResponse | undefined;
}
export interface QueryGetSuperiorRequest {
}
export interface QueryGetSuperiorResponse {
    Superior: Superior | undefined;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    create<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(base?: I): QueryParamsRequest;
    fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    create<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(base?: I): QueryParamsResponse;
    fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse;
};
export declare const QueryGetEpochLengthRequest: {
    encode(_: QueryGetEpochLengthRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetEpochLengthRequest;
    fromJSON(_: any): QueryGetEpochLengthRequest;
    toJSON(_: QueryGetEpochLengthRequest): unknown;
    create<I extends Exact<DeepPartial<QueryGetEpochLengthRequest>, I>>(base?: I): QueryGetEpochLengthRequest;
    fromPartial<I extends Exact<DeepPartial<QueryGetEpochLengthRequest>, I>>(_: I): QueryGetEpochLengthRequest;
};
export declare const QueryGetEpochLengthResponse: {
    encode(message: QueryGetEpochLengthResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetEpochLengthResponse;
    fromJSON(object: any): QueryGetEpochLengthResponse;
    toJSON(message: QueryGetEpochLengthResponse): unknown;
    create<I extends Exact<DeepPartial<QueryGetEpochLengthResponse>, I>>(base?: I): QueryGetEpochLengthResponse;
    fromPartial<I extends Exact<DeepPartial<QueryGetEpochLengthResponse>, I>>(object: I): QueryGetEpochLengthResponse;
};
export declare const QueryGetCurrentEpochRequest: {
    encode(_: QueryGetCurrentEpochRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetCurrentEpochRequest;
    fromJSON(_: any): QueryGetCurrentEpochRequest;
    toJSON(_: QueryGetCurrentEpochRequest): unknown;
    create<I extends Exact<DeepPartial<QueryGetCurrentEpochRequest>, I>>(base?: I): QueryGetCurrentEpochRequest;
    fromPartial<I extends Exact<DeepPartial<QueryGetCurrentEpochRequest>, I>>(_: I): QueryGetCurrentEpochRequest;
};
export declare const QueryGetCurrentEpochResponse: {
    encode(message: QueryGetCurrentEpochResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetCurrentEpochResponse;
    fromJSON(object: any): QueryGetCurrentEpochResponse;
    toJSON(message: QueryGetCurrentEpochResponse): unknown;
    create<I extends Exact<DeepPartial<QueryGetCurrentEpochResponse>, I>>(base?: I): QueryGetCurrentEpochResponse;
    fromPartial<I extends Exact<DeepPartial<QueryGetCurrentEpochResponse>, I>>(object: I): QueryGetCurrentEpochResponse;
};
export declare const QueryGetNodeWorkloadRequest: {
    encode(message: QueryGetNodeWorkloadRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetNodeWorkloadRequest;
    fromJSON(object: any): QueryGetNodeWorkloadRequest;
    toJSON(message: QueryGetNodeWorkloadRequest): unknown;
    create<I extends Exact<DeepPartial<QueryGetNodeWorkloadRequest>, I>>(base?: I): QueryGetNodeWorkloadRequest;
    fromPartial<I extends Exact<DeepPartial<QueryGetNodeWorkloadRequest>, I>>(object: I): QueryGetNodeWorkloadRequest;
};
export declare const QueryGetNodeWorkloadResponse: {
    encode(message: QueryGetNodeWorkloadResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetNodeWorkloadResponse;
    fromJSON(object: any): QueryGetNodeWorkloadResponse;
    toJSON(message: QueryGetNodeWorkloadResponse): unknown;
    create<I extends Exact<DeepPartial<QueryGetNodeWorkloadResponse>, I>>(base?: I): QueryGetNodeWorkloadResponse;
    fromPartial<I extends Exact<DeepPartial<QueryGetNodeWorkloadResponse>, I>>(object: I): QueryGetNodeWorkloadResponse;
};
export declare const QueryGetAllNodeWorkloadByEpochRequest: {
    encode(message: QueryGetAllNodeWorkloadByEpochRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllNodeWorkloadByEpochRequest;
    fromJSON(object: any): QueryGetAllNodeWorkloadByEpochRequest;
    toJSON(message: QueryGetAllNodeWorkloadByEpochRequest): unknown;
    create<I extends Exact<DeepPartial<QueryGetAllNodeWorkloadByEpochRequest>, I>>(base?: I): QueryGetAllNodeWorkloadByEpochRequest;
    fromPartial<I extends Exact<DeepPartial<QueryGetAllNodeWorkloadByEpochRequest>, I>>(object: I): QueryGetAllNodeWorkloadByEpochRequest;
};
export declare const QueryGetAllNodeWorkloadByEpochResponse: {
    encode(message: QueryGetAllNodeWorkloadByEpochResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllNodeWorkloadByEpochResponse;
    fromJSON(object: any): QueryGetAllNodeWorkloadByEpochResponse;
    toJSON(message: QueryGetAllNodeWorkloadByEpochResponse): unknown;
    create<I extends Exact<DeepPartial<QueryGetAllNodeWorkloadByEpochResponse>, I>>(base?: I): QueryGetAllNodeWorkloadByEpochResponse;
    fromPartial<I extends Exact<DeepPartial<QueryGetAllNodeWorkloadByEpochResponse>, I>>(object: I): QueryGetAllNodeWorkloadByEpochResponse;
};
export declare const QueryGetManagerWorkloadRequest: {
    encode(message: QueryGetManagerWorkloadRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetManagerWorkloadRequest;
    fromJSON(object: any): QueryGetManagerWorkloadRequest;
    toJSON(message: QueryGetManagerWorkloadRequest): unknown;
    create<I extends Exact<DeepPartial<QueryGetManagerWorkloadRequest>, I>>(base?: I): QueryGetManagerWorkloadRequest;
    fromPartial<I extends Exact<DeepPartial<QueryGetManagerWorkloadRequest>, I>>(object: I): QueryGetManagerWorkloadRequest;
};
export declare const QueryGetManagerWorkloadResponse: {
    encode(message: QueryGetManagerWorkloadResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetManagerWorkloadResponse;
    fromJSON(object: any): QueryGetManagerWorkloadResponse;
    toJSON(message: QueryGetManagerWorkloadResponse): unknown;
    create<I extends Exact<DeepPartial<QueryGetManagerWorkloadResponse>, I>>(base?: I): QueryGetManagerWorkloadResponse;
    fromPartial<I extends Exact<DeepPartial<QueryGetManagerWorkloadResponse>, I>>(object: I): QueryGetManagerWorkloadResponse;
};
export declare const QueryGetAllManagerWorkloadByEpochRequest: {
    encode(message: QueryGetAllManagerWorkloadByEpochRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllManagerWorkloadByEpochRequest;
    fromJSON(object: any): QueryGetAllManagerWorkloadByEpochRequest;
    toJSON(message: QueryGetAllManagerWorkloadByEpochRequest): unknown;
    create<I extends Exact<DeepPartial<QueryGetAllManagerWorkloadByEpochRequest>, I>>(base?: I): QueryGetAllManagerWorkloadByEpochRequest;
    fromPartial<I extends Exact<DeepPartial<QueryGetAllManagerWorkloadByEpochRequest>, I>>(object: I): QueryGetAllManagerWorkloadByEpochRequest;
};
export declare const QueryGetAllManagerWorkloadByEpochResponse: {
    encode(message: QueryGetAllManagerWorkloadByEpochResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllManagerWorkloadByEpochResponse;
    fromJSON(object: any): QueryGetAllManagerWorkloadByEpochResponse;
    toJSON(message: QueryGetAllManagerWorkloadByEpochResponse): unknown;
    create<I extends Exact<DeepPartial<QueryGetAllManagerWorkloadByEpochResponse>, I>>(base?: I): QueryGetAllManagerWorkloadByEpochResponse;
    fromPartial<I extends Exact<DeepPartial<QueryGetAllManagerWorkloadByEpochResponse>, I>>(object: I): QueryGetAllManagerWorkloadByEpochResponse;
};
export declare const QueryGetWorkreportRequest: {
    encode(message: QueryGetWorkreportRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetWorkreportRequest;
    fromJSON(object: any): QueryGetWorkreportRequest;
    toJSON(message: QueryGetWorkreportRequest): unknown;
    create<I extends Exact<DeepPartial<QueryGetWorkreportRequest>, I>>(base?: I): QueryGetWorkreportRequest;
    fromPartial<I extends Exact<DeepPartial<QueryGetWorkreportRequest>, I>>(object: I): QueryGetWorkreportRequest;
};
export declare const QueryGetWorkreportResponse: {
    encode(message: QueryGetWorkreportResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetWorkreportResponse;
    fromJSON(object: any): QueryGetWorkreportResponse;
    toJSON(message: QueryGetWorkreportResponse): unknown;
    create<I extends Exact<DeepPartial<QueryGetWorkreportResponse>, I>>(base?: I): QueryGetWorkreportResponse;
    fromPartial<I extends Exact<DeepPartial<QueryGetWorkreportResponse>, I>>(object: I): QueryGetWorkreportResponse;
};
export declare const QueryGetAllWorkreportByEpochRequest: {
    encode(message: QueryGetAllWorkreportByEpochRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllWorkreportByEpochRequest;
    fromJSON(object: any): QueryGetAllWorkreportByEpochRequest;
    toJSON(message: QueryGetAllWorkreportByEpochRequest): unknown;
    create<I extends Exact<DeepPartial<QueryGetAllWorkreportByEpochRequest>, I>>(base?: I): QueryGetAllWorkreportByEpochRequest;
    fromPartial<I extends Exact<DeepPartial<QueryGetAllWorkreportByEpochRequest>, I>>(object: I): QueryGetAllWorkreportByEpochRequest;
};
export declare const QueryGetAllWorkreportByEpochResponse: {
    encode(message: QueryGetAllWorkreportByEpochResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllWorkreportByEpochResponse;
    fromJSON(object: any): QueryGetAllWorkreportByEpochResponse;
    toJSON(message: QueryGetAllWorkreportByEpochResponse): unknown;
    create<I extends Exact<DeepPartial<QueryGetAllWorkreportByEpochResponse>, I>>(base?: I): QueryGetAllWorkreportByEpochResponse;
    fromPartial<I extends Exact<DeepPartial<QueryGetAllWorkreportByEpochResponse>, I>>(object: I): QueryGetAllWorkreportByEpochResponse;
};
export declare const QueryGetWorkreportProcessBatchSizeRequest: {
    encode(_: QueryGetWorkreportProcessBatchSizeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetWorkreportProcessBatchSizeRequest;
    fromJSON(_: any): QueryGetWorkreportProcessBatchSizeRequest;
    toJSON(_: QueryGetWorkreportProcessBatchSizeRequest): unknown;
    create<I extends Exact<DeepPartial<QueryGetWorkreportProcessBatchSizeRequest>, I>>(base?: I): QueryGetWorkreportProcessBatchSizeRequest;
    fromPartial<I extends Exact<DeepPartial<QueryGetWorkreportProcessBatchSizeRequest>, I>>(_: I): QueryGetWorkreportProcessBatchSizeRequest;
};
export declare const QueryGetWorkreportProcessBatchSizeResponse: {
    encode(message: QueryGetWorkreportProcessBatchSizeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetWorkreportProcessBatchSizeResponse;
    fromJSON(object: any): QueryGetWorkreportProcessBatchSizeResponse;
    toJSON(message: QueryGetWorkreportProcessBatchSizeResponse): unknown;
    create<I extends Exact<DeepPartial<QueryGetWorkreportProcessBatchSizeResponse>, I>>(base?: I): QueryGetWorkreportProcessBatchSizeResponse;
    fromPartial<I extends Exact<DeepPartial<QueryGetWorkreportProcessBatchSizeResponse>, I>>(object: I): QueryGetWorkreportProcessBatchSizeResponse;
};
export declare const QueryGetHistoryEpochDataDepthRequest: {
    encode(_: QueryGetHistoryEpochDataDepthRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetHistoryEpochDataDepthRequest;
    fromJSON(_: any): QueryGetHistoryEpochDataDepthRequest;
    toJSON(_: QueryGetHistoryEpochDataDepthRequest): unknown;
    create<I extends Exact<DeepPartial<QueryGetHistoryEpochDataDepthRequest>, I>>(base?: I): QueryGetHistoryEpochDataDepthRequest;
    fromPartial<I extends Exact<DeepPartial<QueryGetHistoryEpochDataDepthRequest>, I>>(_: I): QueryGetHistoryEpochDataDepthRequest;
};
export declare const QueryGetHistoryEpochDataDepthResponse: {
    encode(message: QueryGetHistoryEpochDataDepthResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetHistoryEpochDataDepthResponse;
    fromJSON(object: any): QueryGetHistoryEpochDataDepthResponse;
    toJSON(message: QueryGetHistoryEpochDataDepthResponse): unknown;
    create<I extends Exact<DeepPartial<QueryGetHistoryEpochDataDepthResponse>, I>>(base?: I): QueryGetHistoryEpochDataDepthResponse;
    fromPartial<I extends Exact<DeepPartial<QueryGetHistoryEpochDataDepthResponse>, I>>(object: I): QueryGetHistoryEpochDataDepthResponse;
};
export declare const QueryGetEpochProcessDataRequest: {
    encode(message: QueryGetEpochProcessDataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetEpochProcessDataRequest;
    fromJSON(object: any): QueryGetEpochProcessDataRequest;
    toJSON(message: QueryGetEpochProcessDataRequest): unknown;
    create<I extends Exact<DeepPartial<QueryGetEpochProcessDataRequest>, I>>(base?: I): QueryGetEpochProcessDataRequest;
    fromPartial<I extends Exact<DeepPartial<QueryGetEpochProcessDataRequest>, I>>(object: I): QueryGetEpochProcessDataRequest;
};
export declare const QueryGetEpochProcessDataResponse: {
    encode(message: QueryGetEpochProcessDataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetEpochProcessDataResponse;
    fromJSON(object: any): QueryGetEpochProcessDataResponse;
    toJSON(message: QueryGetEpochProcessDataResponse): unknown;
    create<I extends Exact<DeepPartial<QueryGetEpochProcessDataResponse>, I>>(base?: I): QueryGetEpochProcessDataResponse;
    fromPartial<I extends Exact<DeepPartial<QueryGetEpochProcessDataResponse>, I>>(object: I): QueryGetEpochProcessDataResponse;
};
export declare const QueryGetAllEpochProcessDataRequest: {
    encode(message: QueryGetAllEpochProcessDataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllEpochProcessDataRequest;
    fromJSON(object: any): QueryGetAllEpochProcessDataRequest;
    toJSON(message: QueryGetAllEpochProcessDataRequest): unknown;
    create<I extends Exact<DeepPartial<QueryGetAllEpochProcessDataRequest>, I>>(base?: I): QueryGetAllEpochProcessDataRequest;
    fromPartial<I extends Exact<DeepPartial<QueryGetAllEpochProcessDataRequest>, I>>(object: I): QueryGetAllEpochProcessDataRequest;
};
export declare const QueryGetAllEpochProcessDataResponse: {
    encode(message: QueryGetAllEpochProcessDataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllEpochProcessDataResponse;
    fromJSON(object: any): QueryGetAllEpochProcessDataResponse;
    toJSON(message: QueryGetAllEpochProcessDataResponse): unknown;
    create<I extends Exact<DeepPartial<QueryGetAllEpochProcessDataResponse>, I>>(base?: I): QueryGetAllEpochProcessDataResponse;
    fromPartial<I extends Exact<DeepPartial<QueryGetAllEpochProcessDataResponse>, I>>(object: I): QueryGetAllEpochProcessDataResponse;
};
export declare const QueryGetSuperiorRequest: {
    encode(_: QueryGetSuperiorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetSuperiorRequest;
    fromJSON(_: any): QueryGetSuperiorRequest;
    toJSON(_: QueryGetSuperiorRequest): unknown;
    create<I extends Exact<DeepPartial<QueryGetSuperiorRequest>, I>>(base?: I): QueryGetSuperiorRequest;
    fromPartial<I extends Exact<DeepPartial<QueryGetSuperiorRequest>, I>>(_: I): QueryGetSuperiorRequest;
};
export declare const QueryGetSuperiorResponse: {
    encode(message: QueryGetSuperiorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetSuperiorResponse;
    fromJSON(object: any): QueryGetSuperiorResponse;
    toJSON(message: QueryGetSuperiorResponse): unknown;
    create<I extends Exact<DeepPartial<QueryGetSuperiorResponse>, I>>(base?: I): QueryGetSuperiorResponse;
    fromPartial<I extends Exact<DeepPartial<QueryGetSuperiorResponse>, I>>(object: I): QueryGetSuperiorResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries epoch */
    EpochLength(request: QueryGetEpochLengthRequest): Promise<QueryGetEpochLengthResponse>;
    CurrentEpoch(request: QueryGetCurrentEpochRequest): Promise<QueryGetCurrentEpochResponse>;
    /** Queries a list of Node Workload items. */
    NodeWorkload(request: QueryGetNodeWorkloadRequest): Promise<QueryGetNodeWorkloadResponse>;
    AllNodeWorkloadByEpoch(request: QueryGetAllNodeWorkloadByEpochRequest): Promise<QueryGetAllNodeWorkloadByEpochResponse>;
    /** Queries a list of Manager Workload items. */
    ManagerWorkload(request: QueryGetManagerWorkloadRequest): Promise<QueryGetManagerWorkloadResponse>;
    AllManagerWorkloadByEpoch(request: QueryGetAllManagerWorkloadByEpochRequest): Promise<QueryGetAllManagerWorkloadByEpochResponse>;
    /** Queries a list of Workreport items. */
    Workreport(request: QueryGetWorkreportRequest): Promise<QueryGetWorkreportResponse>;
    AllWorkreportByEpoch(request: QueryGetAllWorkreportByEpochRequest): Promise<QueryGetAllWorkreportByEpochResponse>;
    /** Queries some param settings */
    WorkreportProcessBatchSize(request: QueryGetWorkreportProcessBatchSizeRequest): Promise<QueryGetWorkreportProcessBatchSizeResponse>;
    HistoryEpochDataDepth(request: QueryGetHistoryEpochDataDepthRequest): Promise<QueryGetHistoryEpochDataDepthResponse>;
    EpochProcessData(request: QueryGetEpochProcessDataRequest): Promise<QueryGetEpochProcessDataResponse>;
    AllEpochProcessData(request: QueryGetAllEpochProcessDataRequest): Promise<QueryGetAllEpochProcessDataResponse>;
    /** Queries a Superior */
    Superior(request: QueryGetSuperiorRequest): Promise<QueryGetSuperiorResponse>;
}
export declare const QueryServiceName = "enreach.workload.Query";
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    EpochLength(request: QueryGetEpochLengthRequest): Promise<QueryGetEpochLengthResponse>;
    CurrentEpoch(request: QueryGetCurrentEpochRequest): Promise<QueryGetCurrentEpochResponse>;
    NodeWorkload(request: QueryGetNodeWorkloadRequest): Promise<QueryGetNodeWorkloadResponse>;
    AllNodeWorkloadByEpoch(request: QueryGetAllNodeWorkloadByEpochRequest): Promise<QueryGetAllNodeWorkloadByEpochResponse>;
    ManagerWorkload(request: QueryGetManagerWorkloadRequest): Promise<QueryGetManagerWorkloadResponse>;
    AllManagerWorkloadByEpoch(request: QueryGetAllManagerWorkloadByEpochRequest): Promise<QueryGetAllManagerWorkloadByEpochResponse>;
    Workreport(request: QueryGetWorkreportRequest): Promise<QueryGetWorkreportResponse>;
    AllWorkreportByEpoch(request: QueryGetAllWorkreportByEpochRequest): Promise<QueryGetAllWorkreportByEpochResponse>;
    WorkreportProcessBatchSize(request: QueryGetWorkreportProcessBatchSizeRequest): Promise<QueryGetWorkreportProcessBatchSizeResponse>;
    HistoryEpochDataDepth(request: QueryGetHistoryEpochDataDepthRequest): Promise<QueryGetHistoryEpochDataDepthResponse>;
    EpochProcessData(request: QueryGetEpochProcessDataRequest): Promise<QueryGetEpochProcessDataResponse>;
    AllEpochProcessData(request: QueryGetAllEpochProcessDataRequest): Promise<QueryGetAllEpochProcessDataResponse>;
    Superior(request: QueryGetSuperiorRequest): Promise<QueryGetSuperiorResponse>;
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
