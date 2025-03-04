import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Manager } from "./manager";
import { Params } from "./params";
export declare const protobufPackage = "enreach.manager";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params | undefined;
}
export interface QueryGetManagerRequest {
    id: number;
}
export interface QueryGetManagerResponse {
    Manager: Manager | undefined;
}
export interface QueryAllManagerRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllManagerResponse {
    Manager: Manager[];
    pagination: PageResponse | undefined;
}
export interface QueryGetManagerByRegionRequest {
    regionCode: string;
}
export interface QueryGetManagerByRegionResponse {
    managers: Manager[];
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
export declare const QueryGetManagerRequest: {
    encode(message: QueryGetManagerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetManagerRequest;
    fromJSON(object: any): QueryGetManagerRequest;
    toJSON(message: QueryGetManagerRequest): unknown;
    create<I extends Exact<DeepPartial<QueryGetManagerRequest>, I>>(base?: I): QueryGetManagerRequest;
    fromPartial<I extends Exact<DeepPartial<QueryGetManagerRequest>, I>>(object: I): QueryGetManagerRequest;
};
export declare const QueryGetManagerResponse: {
    encode(message: QueryGetManagerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetManagerResponse;
    fromJSON(object: any): QueryGetManagerResponse;
    toJSON(message: QueryGetManagerResponse): unknown;
    create<I extends Exact<DeepPartial<QueryGetManagerResponse>, I>>(base?: I): QueryGetManagerResponse;
    fromPartial<I extends Exact<DeepPartial<QueryGetManagerResponse>, I>>(object: I): QueryGetManagerResponse;
};
export declare const QueryAllManagerRequest: {
    encode(message: QueryAllManagerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllManagerRequest;
    fromJSON(object: any): QueryAllManagerRequest;
    toJSON(message: QueryAllManagerRequest): unknown;
    create<I extends Exact<DeepPartial<QueryAllManagerRequest>, I>>(base?: I): QueryAllManagerRequest;
    fromPartial<I extends Exact<DeepPartial<QueryAllManagerRequest>, I>>(object: I): QueryAllManagerRequest;
};
export declare const QueryAllManagerResponse: {
    encode(message: QueryAllManagerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllManagerResponse;
    fromJSON(object: any): QueryAllManagerResponse;
    toJSON(message: QueryAllManagerResponse): unknown;
    create<I extends Exact<DeepPartial<QueryAllManagerResponse>, I>>(base?: I): QueryAllManagerResponse;
    fromPartial<I extends Exact<DeepPartial<QueryAllManagerResponse>, I>>(object: I): QueryAllManagerResponse;
};
export declare const QueryGetManagerByRegionRequest: {
    encode(message: QueryGetManagerByRegionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetManagerByRegionRequest;
    fromJSON(object: any): QueryGetManagerByRegionRequest;
    toJSON(message: QueryGetManagerByRegionRequest): unknown;
    create<I extends Exact<DeepPartial<QueryGetManagerByRegionRequest>, I>>(base?: I): QueryGetManagerByRegionRequest;
    fromPartial<I extends Exact<DeepPartial<QueryGetManagerByRegionRequest>, I>>(object: I): QueryGetManagerByRegionRequest;
};
export declare const QueryGetManagerByRegionResponse: {
    encode(message: QueryGetManagerByRegionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetManagerByRegionResponse;
    fromJSON(object: any): QueryGetManagerByRegionResponse;
    toJSON(message: QueryGetManagerByRegionResponse): unknown;
    create<I extends Exact<DeepPartial<QueryGetManagerByRegionResponse>, I>>(base?: I): QueryGetManagerByRegionResponse;
    fromPartial<I extends Exact<DeepPartial<QueryGetManagerByRegionResponse>, I>>(object: I): QueryGetManagerByRegionResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a list of Manager items. */
    Manager(request: QueryGetManagerRequest): Promise<QueryGetManagerResponse>;
    ManagerAll(request: QueryAllManagerRequest): Promise<QueryAllManagerResponse>;
    /** Queries a list of GetManagerByRegion items. */
    GetManagerByRegion(request: QueryGetManagerByRegionRequest): Promise<QueryGetManagerByRegionResponse>;
}
export declare const QueryServiceName = "enreach.manager.Query";
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    Manager(request: QueryGetManagerRequest): Promise<QueryGetManagerResponse>;
    ManagerAll(request: QueryAllManagerRequest): Promise<QueryAllManagerResponse>;
    GetManagerByRegion(request: QueryGetManagerByRegionRequest): Promise<QueryGetManagerByRegionResponse>;
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
