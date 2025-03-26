import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Manager } from "./manager";
import { Operator } from "./operator";
import { Params } from "./params";
import { Superior } from "./superior";
export declare const protobufPackage = "enreach.manager";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params | undefined;
}
export interface QueryGetOperatorRequest {
    operatorAccount: string;
}
export interface QueryGetOperatorResponse {
    Operator: Operator | undefined;
}
export interface QueryAllOperatorRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllOperatorResponse {
    Operator: Operator[];
    pagination: PageResponse | undefined;
}
export interface QueryGetManagerRequest {
    managerAccount: string;
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
export declare const QueryGetOperatorRequest: {
    encode(message: QueryGetOperatorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOperatorRequest;
    fromJSON(object: any): QueryGetOperatorRequest;
    toJSON(message: QueryGetOperatorRequest): unknown;
    create<I extends Exact<DeepPartial<QueryGetOperatorRequest>, I>>(base?: I): QueryGetOperatorRequest;
    fromPartial<I extends Exact<DeepPartial<QueryGetOperatorRequest>, I>>(object: I): QueryGetOperatorRequest;
};
export declare const QueryGetOperatorResponse: {
    encode(message: QueryGetOperatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOperatorResponse;
    fromJSON(object: any): QueryGetOperatorResponse;
    toJSON(message: QueryGetOperatorResponse): unknown;
    create<I extends Exact<DeepPartial<QueryGetOperatorResponse>, I>>(base?: I): QueryGetOperatorResponse;
    fromPartial<I extends Exact<DeepPartial<QueryGetOperatorResponse>, I>>(object: I): QueryGetOperatorResponse;
};
export declare const QueryAllOperatorRequest: {
    encode(message: QueryAllOperatorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllOperatorRequest;
    fromJSON(object: any): QueryAllOperatorRequest;
    toJSON(message: QueryAllOperatorRequest): unknown;
    create<I extends Exact<DeepPartial<QueryAllOperatorRequest>, I>>(base?: I): QueryAllOperatorRequest;
    fromPartial<I extends Exact<DeepPartial<QueryAllOperatorRequest>, I>>(object: I): QueryAllOperatorRequest;
};
export declare const QueryAllOperatorResponse: {
    encode(message: QueryAllOperatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllOperatorResponse;
    fromJSON(object: any): QueryAllOperatorResponse;
    toJSON(message: QueryAllOperatorResponse): unknown;
    create<I extends Exact<DeepPartial<QueryAllOperatorResponse>, I>>(base?: I): QueryAllOperatorResponse;
    fromPartial<I extends Exact<DeepPartial<QueryAllOperatorResponse>, I>>(object: I): QueryAllOperatorResponse;
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
    /** Queries a list of Operator items. */
    Operator(request: QueryGetOperatorRequest): Promise<QueryGetOperatorResponse>;
    OperatorAll(request: QueryAllOperatorRequest): Promise<QueryAllOperatorResponse>;
    /** Queries a list of Manager items. */
    Manager(request: QueryGetManagerRequest): Promise<QueryGetManagerResponse>;
    ManagerAll(request: QueryAllManagerRequest): Promise<QueryAllManagerResponse>;
    /** Queries a list of GetManagerByRegion items. */
    GetManagerByRegion(request: QueryGetManagerByRegionRequest): Promise<QueryGetManagerByRegionResponse>;
    /** Queries a Superior by index. */
    Superior(request: QueryGetSuperiorRequest): Promise<QueryGetSuperiorResponse>;
}
export declare const QueryServiceName = "enreach.manager.Query";
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    Operator(request: QueryGetOperatorRequest): Promise<QueryGetOperatorResponse>;
    OperatorAll(request: QueryAllOperatorRequest): Promise<QueryAllOperatorResponse>;
    Manager(request: QueryGetManagerRequest): Promise<QueryGetManagerResponse>;
    ManagerAll(request: QueryAllManagerRequest): Promise<QueryAllManagerResponse>;
    GetManagerByRegion(request: QueryGetManagerByRegionRequest): Promise<QueryGetManagerByRegionResponse>;
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
