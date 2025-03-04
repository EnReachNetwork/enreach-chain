import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { GenesisAccountPermissions, Permissions } from "./types";
export declare const protobufPackage = "cosmos.circuit.v1";
/** QueryAccountRequest is the request type for the Query/Account RPC method. */
export interface QueryAccountRequest {
    address: string;
}
/** AccountResponse is the response type for the Query/Account RPC method. */
export interface AccountResponse {
    permission: Permissions | undefined;
}
/** QueryAccountsRequest is the request type for the Query/Accounts RPC method. */
export interface QueryAccountsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest | undefined;
}
/** AccountsResponse is the response type for the Query/Accounts RPC method. */
export interface AccountsResponse {
    accounts: GenesisAccountPermissions[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse | undefined;
}
/** QueryDisableListRequest is the request type for the Query/DisabledList RPC method. */
export interface QueryDisabledListRequest {
}
/** DisabledListResponse is the response type for the Query/DisabledList RPC method. */
export interface DisabledListResponse {
    disabledList: string[];
}
export declare const QueryAccountRequest: {
    encode(message: QueryAccountRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountRequest;
    fromJSON(object: any): QueryAccountRequest;
    toJSON(message: QueryAccountRequest): unknown;
    create<I extends Exact<DeepPartial<QueryAccountRequest>, I>>(base?: I): QueryAccountRequest;
    fromPartial<I extends Exact<DeepPartial<QueryAccountRequest>, I>>(object: I): QueryAccountRequest;
};
export declare const AccountResponse: {
    encode(message: AccountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccountResponse;
    fromJSON(object: any): AccountResponse;
    toJSON(message: AccountResponse): unknown;
    create<I extends Exact<DeepPartial<AccountResponse>, I>>(base?: I): AccountResponse;
    fromPartial<I extends Exact<DeepPartial<AccountResponse>, I>>(object: I): AccountResponse;
};
export declare const QueryAccountsRequest: {
    encode(message: QueryAccountsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountsRequest;
    fromJSON(object: any): QueryAccountsRequest;
    toJSON(message: QueryAccountsRequest): unknown;
    create<I extends Exact<DeepPartial<QueryAccountsRequest>, I>>(base?: I): QueryAccountsRequest;
    fromPartial<I extends Exact<DeepPartial<QueryAccountsRequest>, I>>(object: I): QueryAccountsRequest;
};
export declare const AccountsResponse: {
    encode(message: AccountsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccountsResponse;
    fromJSON(object: any): AccountsResponse;
    toJSON(message: AccountsResponse): unknown;
    create<I extends Exact<DeepPartial<AccountsResponse>, I>>(base?: I): AccountsResponse;
    fromPartial<I extends Exact<DeepPartial<AccountsResponse>, I>>(object: I): AccountsResponse;
};
export declare const QueryDisabledListRequest: {
    encode(_: QueryDisabledListRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDisabledListRequest;
    fromJSON(_: any): QueryDisabledListRequest;
    toJSON(_: QueryDisabledListRequest): unknown;
    create<I extends Exact<DeepPartial<QueryDisabledListRequest>, I>>(base?: I): QueryDisabledListRequest;
    fromPartial<I extends Exact<DeepPartial<QueryDisabledListRequest>, I>>(_: I): QueryDisabledListRequest;
};
export declare const DisabledListResponse: {
    encode(message: DisabledListResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DisabledListResponse;
    fromJSON(object: any): DisabledListResponse;
    toJSON(message: DisabledListResponse): unknown;
    create<I extends Exact<DeepPartial<DisabledListResponse>, I>>(base?: I): DisabledListResponse;
    fromPartial<I extends Exact<DeepPartial<DisabledListResponse>, I>>(object: I): DisabledListResponse;
};
/** Query defines the circuit gRPC querier service. */
export interface Query {
    /** Account returns account permissions. */
    Account(request: QueryAccountRequest): Promise<AccountResponse>;
    /** Account returns account permissions. */
    Accounts(request: QueryAccountsRequest): Promise<AccountsResponse>;
    /** DisabledList returns a list of disabled message urls */
    DisabledList(request: QueryDisabledListRequest): Promise<DisabledListResponse>;
}
export declare const QueryServiceName = "cosmos.circuit.v1.Query";
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Account(request: QueryAccountRequest): Promise<AccountResponse>;
    Accounts(request: QueryAccountsRequest): Promise<AccountsResponse>;
    DisabledList(request: QueryDisabledListRequest): Promise<DisabledListResponse>;
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
