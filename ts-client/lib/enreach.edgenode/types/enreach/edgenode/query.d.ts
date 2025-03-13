import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Node } from "./node";
import { Params } from "./params";
import { Superior } from "./superior";
import { User } from "./user";
export declare const protobufPackage = "enreach.edgenode";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params | undefined;
}
export interface QueryGetUserRequest {
    userID: string;
}
export interface QueryGetUserResponse {
    User: User | undefined;
}
export interface QueryAllUserRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllUserResponse {
    User: User[];
    pagination: PageResponse | undefined;
}
export interface QueryGetNodeRequest {
    nodeID: string;
}
export interface QueryGetNodeResponse {
    Node: Node | undefined;
}
export interface QueryAllNodeRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllNodeResponse {
    Node: Node[];
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
export declare const QueryGetUserRequest: {
    encode(message: QueryGetUserRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetUserRequest;
    fromJSON(object: any): QueryGetUserRequest;
    toJSON(message: QueryGetUserRequest): unknown;
    create<I extends Exact<DeepPartial<QueryGetUserRequest>, I>>(base?: I): QueryGetUserRequest;
    fromPartial<I extends Exact<DeepPartial<QueryGetUserRequest>, I>>(object: I): QueryGetUserRequest;
};
export declare const QueryGetUserResponse: {
    encode(message: QueryGetUserResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetUserResponse;
    fromJSON(object: any): QueryGetUserResponse;
    toJSON(message: QueryGetUserResponse): unknown;
    create<I extends Exact<DeepPartial<QueryGetUserResponse>, I>>(base?: I): QueryGetUserResponse;
    fromPartial<I extends Exact<DeepPartial<QueryGetUserResponse>, I>>(object: I): QueryGetUserResponse;
};
export declare const QueryAllUserRequest: {
    encode(message: QueryAllUserRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllUserRequest;
    fromJSON(object: any): QueryAllUserRequest;
    toJSON(message: QueryAllUserRequest): unknown;
    create<I extends Exact<DeepPartial<QueryAllUserRequest>, I>>(base?: I): QueryAllUserRequest;
    fromPartial<I extends Exact<DeepPartial<QueryAllUserRequest>, I>>(object: I): QueryAllUserRequest;
};
export declare const QueryAllUserResponse: {
    encode(message: QueryAllUserResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllUserResponse;
    fromJSON(object: any): QueryAllUserResponse;
    toJSON(message: QueryAllUserResponse): unknown;
    create<I extends Exact<DeepPartial<QueryAllUserResponse>, I>>(base?: I): QueryAllUserResponse;
    fromPartial<I extends Exact<DeepPartial<QueryAllUserResponse>, I>>(object: I): QueryAllUserResponse;
};
export declare const QueryGetNodeRequest: {
    encode(message: QueryGetNodeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetNodeRequest;
    fromJSON(object: any): QueryGetNodeRequest;
    toJSON(message: QueryGetNodeRequest): unknown;
    create<I extends Exact<DeepPartial<QueryGetNodeRequest>, I>>(base?: I): QueryGetNodeRequest;
    fromPartial<I extends Exact<DeepPartial<QueryGetNodeRequest>, I>>(object: I): QueryGetNodeRequest;
};
export declare const QueryGetNodeResponse: {
    encode(message: QueryGetNodeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetNodeResponse;
    fromJSON(object: any): QueryGetNodeResponse;
    toJSON(message: QueryGetNodeResponse): unknown;
    create<I extends Exact<DeepPartial<QueryGetNodeResponse>, I>>(base?: I): QueryGetNodeResponse;
    fromPartial<I extends Exact<DeepPartial<QueryGetNodeResponse>, I>>(object: I): QueryGetNodeResponse;
};
export declare const QueryAllNodeRequest: {
    encode(message: QueryAllNodeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllNodeRequest;
    fromJSON(object: any): QueryAllNodeRequest;
    toJSON(message: QueryAllNodeRequest): unknown;
    create<I extends Exact<DeepPartial<QueryAllNodeRequest>, I>>(base?: I): QueryAllNodeRequest;
    fromPartial<I extends Exact<DeepPartial<QueryAllNodeRequest>, I>>(object: I): QueryAllNodeRequest;
};
export declare const QueryAllNodeResponse: {
    encode(message: QueryAllNodeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllNodeResponse;
    fromJSON(object: any): QueryAllNodeResponse;
    toJSON(message: QueryAllNodeResponse): unknown;
    create<I extends Exact<DeepPartial<QueryAllNodeResponse>, I>>(base?: I): QueryAllNodeResponse;
    fromPartial<I extends Exact<DeepPartial<QueryAllNodeResponse>, I>>(object: I): QueryAllNodeResponse;
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
    /** Queries a list of User items. */
    User(request: QueryGetUserRequest): Promise<QueryGetUserResponse>;
    UserAll(request: QueryAllUserRequest): Promise<QueryAllUserResponse>;
    /** Queries a list of Node items. */
    Node(request: QueryGetNodeRequest): Promise<QueryGetNodeResponse>;
    NodeAll(request: QueryAllNodeRequest): Promise<QueryAllNodeResponse>;
    /** Queries a Superior by index. */
    Superior(request: QueryGetSuperiorRequest): Promise<QueryGetSuperiorResponse>;
}
export declare const QueryServiceName = "enreach.edgenode.Query";
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    User(request: QueryGetUserRequest): Promise<QueryGetUserResponse>;
    UserAll(request: QueryAllUserRequest): Promise<QueryAllUserResponse>;
    Node(request: QueryGetNodeRequest): Promise<QueryGetNodeResponse>;
    NodeAll(request: QueryAllNodeRequest): Promise<QueryAllNodeResponse>;
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
