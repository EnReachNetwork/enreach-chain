import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Coin } from "../../../../cosmos/base/v1beta1/coin";
import { DenomTrace, Params } from "./transfer";
export declare const protobufPackage = "ibc.applications.transfer.v1";
/**
 * QueryDenomTraceRequest is the request type for the Query/DenomTrace RPC
 * method
 */
export interface QueryDenomTraceRequest {
    /** hash (in hex format) or denom (full denom with ibc prefix) of the denomination trace information. */
    hash: string;
}
/**
 * QueryDenomTraceResponse is the response type for the Query/DenomTrace RPC
 * method.
 */
export interface QueryDenomTraceResponse {
    /** denom_trace returns the requested denomination trace information. */
    denomTrace: DenomTrace | undefined;
}
/**
 * QueryConnectionsRequest is the request type for the Query/DenomTraces RPC
 * method
 */
export interface QueryDenomTracesRequest {
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest | undefined;
}
/**
 * QueryConnectionsResponse is the response type for the Query/DenomTraces RPC
 * method.
 */
export interface QueryDenomTracesResponse {
    /** denom_traces returns all denominations trace information. */
    denomTraces: DenomTrace[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse | undefined;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params: Params | undefined;
}
/**
 * QueryDenomHashRequest is the request type for the Query/DenomHash RPC
 * method
 */
export interface QueryDenomHashRequest {
    /** The denomination trace ([port_id]/[channel_id])+/[denom] */
    trace: string;
}
/**
 * QueryDenomHashResponse is the response type for the Query/DenomHash RPC
 * method.
 */
export interface QueryDenomHashResponse {
    /** hash (in hex format) of the denomination trace information. */
    hash: string;
}
/** QueryEscrowAddressRequest is the request type for the EscrowAddress RPC method. */
export interface QueryEscrowAddressRequest {
    /** unique port identifier */
    portId: string;
    /** unique channel identifier */
    channelId: string;
}
/** QueryEscrowAddressResponse is the response type of the EscrowAddress RPC method. */
export interface QueryEscrowAddressResponse {
    /** the escrow account address */
    escrowAddress: string;
}
/** QueryTotalEscrowForDenomRequest is the request type for TotalEscrowForDenom RPC method. */
export interface QueryTotalEscrowForDenomRequest {
    denom: string;
}
/** QueryTotalEscrowForDenomResponse is the response type for TotalEscrowForDenom RPC method. */
export interface QueryTotalEscrowForDenomResponse {
    amount: Coin | undefined;
}
export declare const QueryDenomTraceRequest: {
    encode(message: QueryDenomTraceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomTraceRequest;
    fromJSON(object: any): QueryDenomTraceRequest;
    toJSON(message: QueryDenomTraceRequest): unknown;
    create<I extends Exact<DeepPartial<QueryDenomTraceRequest>, I>>(base?: I): QueryDenomTraceRequest;
    fromPartial<I extends Exact<DeepPartial<QueryDenomTraceRequest>, I>>(object: I): QueryDenomTraceRequest;
};
export declare const QueryDenomTraceResponse: {
    encode(message: QueryDenomTraceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomTraceResponse;
    fromJSON(object: any): QueryDenomTraceResponse;
    toJSON(message: QueryDenomTraceResponse): unknown;
    create<I extends Exact<DeepPartial<QueryDenomTraceResponse>, I>>(base?: I): QueryDenomTraceResponse;
    fromPartial<I extends Exact<DeepPartial<QueryDenomTraceResponse>, I>>(object: I): QueryDenomTraceResponse;
};
export declare const QueryDenomTracesRequest: {
    encode(message: QueryDenomTracesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomTracesRequest;
    fromJSON(object: any): QueryDenomTracesRequest;
    toJSON(message: QueryDenomTracesRequest): unknown;
    create<I extends Exact<DeepPartial<QueryDenomTracesRequest>, I>>(base?: I): QueryDenomTracesRequest;
    fromPartial<I extends Exact<DeepPartial<QueryDenomTracesRequest>, I>>(object: I): QueryDenomTracesRequest;
};
export declare const QueryDenomTracesResponse: {
    encode(message: QueryDenomTracesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomTracesResponse;
    fromJSON(object: any): QueryDenomTracesResponse;
    toJSON(message: QueryDenomTracesResponse): unknown;
    create<I extends Exact<DeepPartial<QueryDenomTracesResponse>, I>>(base?: I): QueryDenomTracesResponse;
    fromPartial<I extends Exact<DeepPartial<QueryDenomTracesResponse>, I>>(object: I): QueryDenomTracesResponse;
};
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
export declare const QueryDenomHashRequest: {
    encode(message: QueryDenomHashRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomHashRequest;
    fromJSON(object: any): QueryDenomHashRequest;
    toJSON(message: QueryDenomHashRequest): unknown;
    create<I extends Exact<DeepPartial<QueryDenomHashRequest>, I>>(base?: I): QueryDenomHashRequest;
    fromPartial<I extends Exact<DeepPartial<QueryDenomHashRequest>, I>>(object: I): QueryDenomHashRequest;
};
export declare const QueryDenomHashResponse: {
    encode(message: QueryDenomHashResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomHashResponse;
    fromJSON(object: any): QueryDenomHashResponse;
    toJSON(message: QueryDenomHashResponse): unknown;
    create<I extends Exact<DeepPartial<QueryDenomHashResponse>, I>>(base?: I): QueryDenomHashResponse;
    fromPartial<I extends Exact<DeepPartial<QueryDenomHashResponse>, I>>(object: I): QueryDenomHashResponse;
};
export declare const QueryEscrowAddressRequest: {
    encode(message: QueryEscrowAddressRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryEscrowAddressRequest;
    fromJSON(object: any): QueryEscrowAddressRequest;
    toJSON(message: QueryEscrowAddressRequest): unknown;
    create<I extends Exact<DeepPartial<QueryEscrowAddressRequest>, I>>(base?: I): QueryEscrowAddressRequest;
    fromPartial<I extends Exact<DeepPartial<QueryEscrowAddressRequest>, I>>(object: I): QueryEscrowAddressRequest;
};
export declare const QueryEscrowAddressResponse: {
    encode(message: QueryEscrowAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryEscrowAddressResponse;
    fromJSON(object: any): QueryEscrowAddressResponse;
    toJSON(message: QueryEscrowAddressResponse): unknown;
    create<I extends Exact<DeepPartial<QueryEscrowAddressResponse>, I>>(base?: I): QueryEscrowAddressResponse;
    fromPartial<I extends Exact<DeepPartial<QueryEscrowAddressResponse>, I>>(object: I): QueryEscrowAddressResponse;
};
export declare const QueryTotalEscrowForDenomRequest: {
    encode(message: QueryTotalEscrowForDenomRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalEscrowForDenomRequest;
    fromJSON(object: any): QueryTotalEscrowForDenomRequest;
    toJSON(message: QueryTotalEscrowForDenomRequest): unknown;
    create<I extends Exact<DeepPartial<QueryTotalEscrowForDenomRequest>, I>>(base?: I): QueryTotalEscrowForDenomRequest;
    fromPartial<I extends Exact<DeepPartial<QueryTotalEscrowForDenomRequest>, I>>(object: I): QueryTotalEscrowForDenomRequest;
};
export declare const QueryTotalEscrowForDenomResponse: {
    encode(message: QueryTotalEscrowForDenomResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalEscrowForDenomResponse;
    fromJSON(object: any): QueryTotalEscrowForDenomResponse;
    toJSON(message: QueryTotalEscrowForDenomResponse): unknown;
    create<I extends Exact<DeepPartial<QueryTotalEscrowForDenomResponse>, I>>(base?: I): QueryTotalEscrowForDenomResponse;
    fromPartial<I extends Exact<DeepPartial<QueryTotalEscrowForDenomResponse>, I>>(object: I): QueryTotalEscrowForDenomResponse;
};
/** Query provides defines the gRPC querier service. */
export interface Query {
    /** DenomTraces queries all denomination traces. */
    DenomTraces(request: QueryDenomTracesRequest): Promise<QueryDenomTracesResponse>;
    /** DenomTrace queries a denomination trace information. */
    DenomTrace(request: QueryDenomTraceRequest): Promise<QueryDenomTraceResponse>;
    /** Params queries all parameters of the ibc-transfer module. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** DenomHash queries a denomination hash information. */
    DenomHash(request: QueryDenomHashRequest): Promise<QueryDenomHashResponse>;
    /** EscrowAddress returns the escrow address for a particular port and channel id. */
    EscrowAddress(request: QueryEscrowAddressRequest): Promise<QueryEscrowAddressResponse>;
    /** TotalEscrowForDenom returns the total amount of tokens in escrow based on the denom. */
    TotalEscrowForDenom(request: QueryTotalEscrowForDenomRequest): Promise<QueryTotalEscrowForDenomResponse>;
}
export declare const QueryServiceName = "ibc.applications.transfer.v1.Query";
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    DenomTraces(request: QueryDenomTracesRequest): Promise<QueryDenomTracesResponse>;
    DenomTrace(request: QueryDenomTraceRequest): Promise<QueryDenomTraceResponse>;
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    DenomHash(request: QueryDenomHashRequest): Promise<QueryDenomHashResponse>;
    EscrowAddress(request: QueryEscrowAddressRequest): Promise<QueryEscrowAddressResponse>;
    TotalEscrowForDenom(request: QueryTotalEscrowForDenomRequest): Promise<QueryTotalEscrowForDenomResponse>;
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
