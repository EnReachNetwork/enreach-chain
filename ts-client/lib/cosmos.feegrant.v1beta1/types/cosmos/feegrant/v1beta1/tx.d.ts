import _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
export declare const protobufPackage = "cosmos.feegrant.v1beta1";
/** Since: cosmos-sdk 0.43 */
/**
 * MsgGrantAllowance adds permission for Grantee to spend up to Allowance
 * of fees from the account of Granter.
 */
export interface MsgGrantAllowance {
    /** granter is the address of the user granting an allowance of their funds. */
    granter: string;
    /** grantee is the address of the user being granted an allowance of another user's funds. */
    grantee: string;
    /** allowance can be any of basic, periodic, allowed fee allowance. */
    allowance: Any | undefined;
}
/** MsgGrantAllowanceResponse defines the Msg/GrantAllowanceResponse response type. */
export interface MsgGrantAllowanceResponse {
}
/** MsgRevokeAllowance removes any existing Allowance from Granter to Grantee. */
export interface MsgRevokeAllowance {
    /** granter is the address of the user granting an allowance of their funds. */
    granter: string;
    /** grantee is the address of the user being granted an allowance of another user's funds. */
    grantee: string;
}
/** MsgRevokeAllowanceResponse defines the Msg/RevokeAllowanceResponse response type. */
export interface MsgRevokeAllowanceResponse {
}
/**
 * MsgPruneAllowances prunes expired fee allowances.
 *
 * Since cosmos-sdk 0.50
 */
export interface MsgPruneAllowances {
    /** pruner is the address of the user pruning expired allowances. */
    pruner: string;
}
/**
 * MsgPruneAllowancesResponse defines the Msg/PruneAllowancesResponse response type.
 *
 * Since cosmos-sdk 0.50
 */
export interface MsgPruneAllowancesResponse {
}
export declare const MsgGrantAllowance: {
    encode(message: MsgGrantAllowance, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgGrantAllowance;
    fromJSON(object: any): MsgGrantAllowance;
    toJSON(message: MsgGrantAllowance): unknown;
    create<I extends Exact<DeepPartial<MsgGrantAllowance>, I>>(base?: I): MsgGrantAllowance;
    fromPartial<I extends Exact<DeepPartial<MsgGrantAllowance>, I>>(object: I): MsgGrantAllowance;
};
export declare const MsgGrantAllowanceResponse: {
    encode(_: MsgGrantAllowanceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgGrantAllowanceResponse;
    fromJSON(_: any): MsgGrantAllowanceResponse;
    toJSON(_: MsgGrantAllowanceResponse): unknown;
    create<I extends Exact<DeepPartial<MsgGrantAllowanceResponse>, I>>(base?: I): MsgGrantAllowanceResponse;
    fromPartial<I extends Exact<DeepPartial<MsgGrantAllowanceResponse>, I>>(_: I): MsgGrantAllowanceResponse;
};
export declare const MsgRevokeAllowance: {
    encode(message: MsgRevokeAllowance, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeAllowance;
    fromJSON(object: any): MsgRevokeAllowance;
    toJSON(message: MsgRevokeAllowance): unknown;
    create<I extends Exact<DeepPartial<MsgRevokeAllowance>, I>>(base?: I): MsgRevokeAllowance;
    fromPartial<I extends Exact<DeepPartial<MsgRevokeAllowance>, I>>(object: I): MsgRevokeAllowance;
};
export declare const MsgRevokeAllowanceResponse: {
    encode(_: MsgRevokeAllowanceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeAllowanceResponse;
    fromJSON(_: any): MsgRevokeAllowanceResponse;
    toJSON(_: MsgRevokeAllowanceResponse): unknown;
    create<I extends Exact<DeepPartial<MsgRevokeAllowanceResponse>, I>>(base?: I): MsgRevokeAllowanceResponse;
    fromPartial<I extends Exact<DeepPartial<MsgRevokeAllowanceResponse>, I>>(_: I): MsgRevokeAllowanceResponse;
};
export declare const MsgPruneAllowances: {
    encode(message: MsgPruneAllowances, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgPruneAllowances;
    fromJSON(object: any): MsgPruneAllowances;
    toJSON(message: MsgPruneAllowances): unknown;
    create<I extends Exact<DeepPartial<MsgPruneAllowances>, I>>(base?: I): MsgPruneAllowances;
    fromPartial<I extends Exact<DeepPartial<MsgPruneAllowances>, I>>(object: I): MsgPruneAllowances;
};
export declare const MsgPruneAllowancesResponse: {
    encode(_: MsgPruneAllowancesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgPruneAllowancesResponse;
    fromJSON(_: any): MsgPruneAllowancesResponse;
    toJSON(_: MsgPruneAllowancesResponse): unknown;
    create<I extends Exact<DeepPartial<MsgPruneAllowancesResponse>, I>>(base?: I): MsgPruneAllowancesResponse;
    fromPartial<I extends Exact<DeepPartial<MsgPruneAllowancesResponse>, I>>(_: I): MsgPruneAllowancesResponse;
};
/** Msg defines the feegrant msg service. */
export interface Msg {
    /**
     * GrantAllowance grants fee allowance to the grantee on the granter's
     * account with the provided expiration time.
     */
    GrantAllowance(request: MsgGrantAllowance): Promise<MsgGrantAllowanceResponse>;
    /**
     * RevokeAllowance revokes any fee allowance of granter's account that
     * has been granted to the grantee.
     */
    RevokeAllowance(request: MsgRevokeAllowance): Promise<MsgRevokeAllowanceResponse>;
    /**
     * PruneAllowances prunes expired fee allowances, currently up to 75 at a time.
     *
     * Since cosmos-sdk 0.50
     */
    PruneAllowances(request: MsgPruneAllowances): Promise<MsgPruneAllowancesResponse>;
}
export declare const MsgServiceName = "cosmos.feegrant.v1beta1.Msg";
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    GrantAllowance(request: MsgGrantAllowance): Promise<MsgGrantAllowanceResponse>;
    RevokeAllowance(request: MsgRevokeAllowance): Promise<MsgRevokeAllowanceResponse>;
    PruneAllowances(request: MsgPruneAllowances): Promise<MsgPruneAllowancesResponse>;
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
