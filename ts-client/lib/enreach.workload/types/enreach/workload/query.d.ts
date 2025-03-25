import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { Workload } from "./workload";
import { Workreport } from "./workreport";
export declare const protobufPackage = "enreach.workload";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params | undefined;
}
export interface QueryGetWorkloadRequest {
    id: number;
}
export interface QueryGetWorkloadResponse {
    Workload: Workload | undefined;
}
export interface QueryAllWorkloadRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllWorkloadResponse {
    Workload: Workload[];
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
    Workreport: Workreport[];
    pagination: PageResponse | undefined;
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
export declare const QueryGetWorkloadRequest: {
    encode(message: QueryGetWorkloadRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetWorkloadRequest;
    fromJSON(object: any): QueryGetWorkloadRequest;
    toJSON(message: QueryGetWorkloadRequest): unknown;
    create<I extends Exact<DeepPartial<QueryGetWorkloadRequest>, I>>(base?: I): QueryGetWorkloadRequest;
    fromPartial<I extends Exact<DeepPartial<QueryGetWorkloadRequest>, I>>(object: I): QueryGetWorkloadRequest;
};
export declare const QueryGetWorkloadResponse: {
    encode(message: QueryGetWorkloadResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetWorkloadResponse;
    fromJSON(object: any): QueryGetWorkloadResponse;
    toJSON(message: QueryGetWorkloadResponse): unknown;
    create<I extends Exact<DeepPartial<QueryGetWorkloadResponse>, I>>(base?: I): QueryGetWorkloadResponse;
    fromPartial<I extends Exact<DeepPartial<QueryGetWorkloadResponse>, I>>(object: I): QueryGetWorkloadResponse;
};
export declare const QueryAllWorkloadRequest: {
    encode(message: QueryAllWorkloadRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllWorkloadRequest;
    fromJSON(object: any): QueryAllWorkloadRequest;
    toJSON(message: QueryAllWorkloadRequest): unknown;
    create<I extends Exact<DeepPartial<QueryAllWorkloadRequest>, I>>(base?: I): QueryAllWorkloadRequest;
    fromPartial<I extends Exact<DeepPartial<QueryAllWorkloadRequest>, I>>(object: I): QueryAllWorkloadRequest;
};
export declare const QueryAllWorkloadResponse: {
    encode(message: QueryAllWorkloadResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllWorkloadResponse;
    fromJSON(object: any): QueryAllWorkloadResponse;
    toJSON(message: QueryAllWorkloadResponse): unknown;
    create<I extends Exact<DeepPartial<QueryAllWorkloadResponse>, I>>(base?: I): QueryAllWorkloadResponse;
    fromPartial<I extends Exact<DeepPartial<QueryAllWorkloadResponse>, I>>(object: I): QueryAllWorkloadResponse;
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
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a list of Workload items. */
    Workload(request: QueryGetWorkloadRequest): Promise<QueryGetWorkloadResponse>;
    WorkloadAll(request: QueryAllWorkloadRequest): Promise<QueryAllWorkloadResponse>;
    /** Queries a list of Workreport items. */
    GetWorkreport(request: QueryGetWorkreportRequest): Promise<QueryGetWorkreportResponse>;
    GetAllWorkreportByEpoch(request: QueryGetAllWorkreportByEpochRequest): Promise<QueryGetAllWorkreportByEpochResponse>;
}
export declare const QueryServiceName = "enreach.workload.Query";
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    Workload(request: QueryGetWorkloadRequest): Promise<QueryGetWorkloadResponse>;
    WorkloadAll(request: QueryAllWorkloadRequest): Promise<QueryAllWorkloadResponse>;
    GetWorkreport(request: QueryGetWorkreportRequest): Promise<QueryGetWorkreportResponse>;
    GetAllWorkreportByEpoch(request: QueryGetAllWorkreportByEpochRequest): Promise<QueryGetAllWorkreportByEpochResponse>;
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
