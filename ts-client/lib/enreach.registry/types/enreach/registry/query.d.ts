import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { Region } from "./region";
export declare const protobufPackage = "enreach.registry";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params | undefined;
}
export interface QueryGetRegionRequest {
    code: string;
}
export interface QueryGetRegionResponse {
    Region: Region | undefined;
}
export interface QueryAllRegionRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllRegionResponse {
    Region: Region[];
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
export declare const QueryGetRegionRequest: {
    encode(message: QueryGetRegionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetRegionRequest;
    fromJSON(object: any): QueryGetRegionRequest;
    toJSON(message: QueryGetRegionRequest): unknown;
    create<I extends Exact<DeepPartial<QueryGetRegionRequest>, I>>(base?: I): QueryGetRegionRequest;
    fromPartial<I extends Exact<DeepPartial<QueryGetRegionRequest>, I>>(object: I): QueryGetRegionRequest;
};
export declare const QueryGetRegionResponse: {
    encode(message: QueryGetRegionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetRegionResponse;
    fromJSON(object: any): QueryGetRegionResponse;
    toJSON(message: QueryGetRegionResponse): unknown;
    create<I extends Exact<DeepPartial<QueryGetRegionResponse>, I>>(base?: I): QueryGetRegionResponse;
    fromPartial<I extends Exact<DeepPartial<QueryGetRegionResponse>, I>>(object: I): QueryGetRegionResponse;
};
export declare const QueryAllRegionRequest: {
    encode(message: QueryAllRegionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllRegionRequest;
    fromJSON(object: any): QueryAllRegionRequest;
    toJSON(message: QueryAllRegionRequest): unknown;
    create<I extends Exact<DeepPartial<QueryAllRegionRequest>, I>>(base?: I): QueryAllRegionRequest;
    fromPartial<I extends Exact<DeepPartial<QueryAllRegionRequest>, I>>(object: I): QueryAllRegionRequest;
};
export declare const QueryAllRegionResponse: {
    encode(message: QueryAllRegionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllRegionResponse;
    fromJSON(object: any): QueryAllRegionResponse;
    toJSON(message: QueryAllRegionResponse): unknown;
    create<I extends Exact<DeepPartial<QueryAllRegionResponse>, I>>(base?: I): QueryAllRegionResponse;
    fromPartial<I extends Exact<DeepPartial<QueryAllRegionResponse>, I>>(object: I): QueryAllRegionResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a list of Region items. */
    Region(request: QueryGetRegionRequest): Promise<QueryGetRegionResponse>;
    RegionAll(request: QueryAllRegionRequest): Promise<QueryAllRegionResponse>;
}
export declare const QueryServiceName = "enreach.registry.Query";
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    Region(request: QueryGetRegionRequest): Promise<QueryGetRegionResponse>;
    RegionAll(request: QueryAllRegionRequest): Promise<QueryAllRegionResponse>;
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
