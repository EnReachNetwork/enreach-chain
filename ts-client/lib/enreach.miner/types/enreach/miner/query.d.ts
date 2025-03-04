import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Miner } from "./miner";
import { Params } from "./params";
export declare const protobufPackage = "enreach.miner";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params | undefined;
}
export interface QueryGetMinerRequest {
    id: number;
}
export interface QueryGetMinerResponse {
    Miner: Miner | undefined;
}
export interface QueryAllMinerRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllMinerResponse {
    Miner: Miner[];
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
export declare const QueryGetMinerRequest: {
    encode(message: QueryGetMinerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMinerRequest;
    fromJSON(object: any): QueryGetMinerRequest;
    toJSON(message: QueryGetMinerRequest): unknown;
    create<I extends Exact<DeepPartial<QueryGetMinerRequest>, I>>(base?: I): QueryGetMinerRequest;
    fromPartial<I extends Exact<DeepPartial<QueryGetMinerRequest>, I>>(object: I): QueryGetMinerRequest;
};
export declare const QueryGetMinerResponse: {
    encode(message: QueryGetMinerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMinerResponse;
    fromJSON(object: any): QueryGetMinerResponse;
    toJSON(message: QueryGetMinerResponse): unknown;
    create<I extends Exact<DeepPartial<QueryGetMinerResponse>, I>>(base?: I): QueryGetMinerResponse;
    fromPartial<I extends Exact<DeepPartial<QueryGetMinerResponse>, I>>(object: I): QueryGetMinerResponse;
};
export declare const QueryAllMinerRequest: {
    encode(message: QueryAllMinerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllMinerRequest;
    fromJSON(object: any): QueryAllMinerRequest;
    toJSON(message: QueryAllMinerRequest): unknown;
    create<I extends Exact<DeepPartial<QueryAllMinerRequest>, I>>(base?: I): QueryAllMinerRequest;
    fromPartial<I extends Exact<DeepPartial<QueryAllMinerRequest>, I>>(object: I): QueryAllMinerRequest;
};
export declare const QueryAllMinerResponse: {
    encode(message: QueryAllMinerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllMinerResponse;
    fromJSON(object: any): QueryAllMinerResponse;
    toJSON(message: QueryAllMinerResponse): unknown;
    create<I extends Exact<DeepPartial<QueryAllMinerResponse>, I>>(base?: I): QueryAllMinerResponse;
    fromPartial<I extends Exact<DeepPartial<QueryAllMinerResponse>, I>>(object: I): QueryAllMinerResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a list of Miner items. */
    Miner(request: QueryGetMinerRequest): Promise<QueryGetMinerResponse>;
    MinerAll(request: QueryAllMinerRequest): Promise<QueryAllMinerResponse>;
}
export declare const QueryServiceName = "enreach.miner.Query";
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    Miner(request: QueryGetMinerRequest): Promise<QueryGetMinerResponse>;
    MinerAll(request: QueryAllMinerRequest): Promise<QueryAllMinerResponse>;
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
