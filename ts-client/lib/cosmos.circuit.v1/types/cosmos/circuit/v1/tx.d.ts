import _m0 from "protobufjs/minimal";
import { Permissions } from "./types";
export declare const protobufPackage = "cosmos.circuit.v1";
/** MsgAuthorizeCircuitBreaker defines the Msg/AuthorizeCircuitBreaker request type. */
export interface MsgAuthorizeCircuitBreaker {
    /**
     * granter is the granter of the circuit breaker permissions and must have
     * LEVEL_SUPER_ADMIN.
     */
    granter: string;
    /** grantee is the account authorized with the provided permissions. */
    grantee: string;
    /**
     * permissions are the circuit breaker permissions that the grantee receives.
     * These will overwrite any existing permissions. LEVEL_NONE_UNSPECIFIED can
     * be specified to revoke all permissions.
     */
    permissions: Permissions | undefined;
}
/** MsgAuthorizeCircuitBreakerResponse defines the Msg/AuthorizeCircuitBreaker response type. */
export interface MsgAuthorizeCircuitBreakerResponse {
    success: boolean;
}
/** MsgTripCircuitBreaker defines the Msg/TripCircuitBreaker request type. */
export interface MsgTripCircuitBreaker {
    /** authority is the account authorized to trip the circuit breaker. */
    authority: string;
    /**
     * msg_type_urls specifies a list of type URLs to immediately stop processing.
     * IF IT IS LEFT EMPTY, ALL MSG PROCESSING WILL STOP IMMEDIATELY.
     * This value is validated against the authority's permissions and if the
     * authority does not have permissions to trip the specified msg type URLs
     * (or all URLs), the operation will fail.
     */
    msgTypeUrls: string[];
}
/** MsgTripCircuitBreakerResponse defines the Msg/TripCircuitBreaker response type. */
export interface MsgTripCircuitBreakerResponse {
    success: boolean;
}
/** MsgResetCircuitBreaker defines the Msg/ResetCircuitBreaker request type. */
export interface MsgResetCircuitBreaker {
    /** authority is the account authorized to trip or reset the circuit breaker. */
    authority: string;
    /**
     * msg_type_urls specifies a list of Msg type URLs to resume processing. If
     * it is left empty all Msg processing for type URLs that the account is
     * authorized to trip will resume.
     */
    msgTypeUrls: string[];
}
/** MsgResetCircuitBreakerResponse defines the Msg/ResetCircuitBreaker response type. */
export interface MsgResetCircuitBreakerResponse {
    success: boolean;
}
export declare const MsgAuthorizeCircuitBreaker: {
    encode(message: MsgAuthorizeCircuitBreaker, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAuthorizeCircuitBreaker;
    fromJSON(object: any): MsgAuthorizeCircuitBreaker;
    toJSON(message: MsgAuthorizeCircuitBreaker): unknown;
    create<I extends Exact<DeepPartial<MsgAuthorizeCircuitBreaker>, I>>(base?: I): MsgAuthorizeCircuitBreaker;
    fromPartial<I extends Exact<DeepPartial<MsgAuthorizeCircuitBreaker>, I>>(object: I): MsgAuthorizeCircuitBreaker;
};
export declare const MsgAuthorizeCircuitBreakerResponse: {
    encode(message: MsgAuthorizeCircuitBreakerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAuthorizeCircuitBreakerResponse;
    fromJSON(object: any): MsgAuthorizeCircuitBreakerResponse;
    toJSON(message: MsgAuthorizeCircuitBreakerResponse): unknown;
    create<I extends Exact<DeepPartial<MsgAuthorizeCircuitBreakerResponse>, I>>(base?: I): MsgAuthorizeCircuitBreakerResponse;
    fromPartial<I extends Exact<DeepPartial<MsgAuthorizeCircuitBreakerResponse>, I>>(object: I): MsgAuthorizeCircuitBreakerResponse;
};
export declare const MsgTripCircuitBreaker: {
    encode(message: MsgTripCircuitBreaker, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTripCircuitBreaker;
    fromJSON(object: any): MsgTripCircuitBreaker;
    toJSON(message: MsgTripCircuitBreaker): unknown;
    create<I extends Exact<DeepPartial<MsgTripCircuitBreaker>, I>>(base?: I): MsgTripCircuitBreaker;
    fromPartial<I extends Exact<DeepPartial<MsgTripCircuitBreaker>, I>>(object: I): MsgTripCircuitBreaker;
};
export declare const MsgTripCircuitBreakerResponse: {
    encode(message: MsgTripCircuitBreakerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTripCircuitBreakerResponse;
    fromJSON(object: any): MsgTripCircuitBreakerResponse;
    toJSON(message: MsgTripCircuitBreakerResponse): unknown;
    create<I extends Exact<DeepPartial<MsgTripCircuitBreakerResponse>, I>>(base?: I): MsgTripCircuitBreakerResponse;
    fromPartial<I extends Exact<DeepPartial<MsgTripCircuitBreakerResponse>, I>>(object: I): MsgTripCircuitBreakerResponse;
};
export declare const MsgResetCircuitBreaker: {
    encode(message: MsgResetCircuitBreaker, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgResetCircuitBreaker;
    fromJSON(object: any): MsgResetCircuitBreaker;
    toJSON(message: MsgResetCircuitBreaker): unknown;
    create<I extends Exact<DeepPartial<MsgResetCircuitBreaker>, I>>(base?: I): MsgResetCircuitBreaker;
    fromPartial<I extends Exact<DeepPartial<MsgResetCircuitBreaker>, I>>(object: I): MsgResetCircuitBreaker;
};
export declare const MsgResetCircuitBreakerResponse: {
    encode(message: MsgResetCircuitBreakerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgResetCircuitBreakerResponse;
    fromJSON(object: any): MsgResetCircuitBreakerResponse;
    toJSON(message: MsgResetCircuitBreakerResponse): unknown;
    create<I extends Exact<DeepPartial<MsgResetCircuitBreakerResponse>, I>>(base?: I): MsgResetCircuitBreakerResponse;
    fromPartial<I extends Exact<DeepPartial<MsgResetCircuitBreakerResponse>, I>>(object: I): MsgResetCircuitBreakerResponse;
};
/** Msg defines the circuit Msg service. */
export interface Msg {
    /**
     * AuthorizeCircuitBreaker allows a super-admin to grant (or revoke) another
     * account's circuit breaker permissions.
     */
    AuthorizeCircuitBreaker(request: MsgAuthorizeCircuitBreaker): Promise<MsgAuthorizeCircuitBreakerResponse>;
    /** TripCircuitBreaker pauses processing of Msg's in the state machine. */
    TripCircuitBreaker(request: MsgTripCircuitBreaker): Promise<MsgTripCircuitBreakerResponse>;
    /**
     * ResetCircuitBreaker resumes processing of Msg's in the state machine that
     * have been been paused using TripCircuitBreaker.
     */
    ResetCircuitBreaker(request: MsgResetCircuitBreaker): Promise<MsgResetCircuitBreakerResponse>;
}
export declare const MsgServiceName = "cosmos.circuit.v1.Msg";
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    AuthorizeCircuitBreaker(request: MsgAuthorizeCircuitBreaker): Promise<MsgAuthorizeCircuitBreakerResponse>;
    TripCircuitBreaker(request: MsgTripCircuitBreaker): Promise<MsgTripCircuitBreakerResponse>;
    ResetCircuitBreaker(request: MsgResetCircuitBreaker): Promise<MsgResetCircuitBreakerResponse>;
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
