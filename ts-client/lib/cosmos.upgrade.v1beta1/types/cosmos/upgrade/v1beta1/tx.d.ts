import _m0 from "protobufjs/minimal";
import { Plan } from "./upgrade";
export declare const protobufPackage = "cosmos.upgrade.v1beta1";
/** Since: cosmos-sdk 0.46 */
/**
 * MsgSoftwareUpgrade is the Msg/SoftwareUpgrade request type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgSoftwareUpgrade {
    /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
    authority: string;
    /** plan is the upgrade plan. */
    plan: Plan | undefined;
}
/**
 * MsgSoftwareUpgradeResponse is the Msg/SoftwareUpgrade response type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgSoftwareUpgradeResponse {
}
/**
 * MsgCancelUpgrade is the Msg/CancelUpgrade request type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgCancelUpgrade {
    /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
    authority: string;
}
/**
 * MsgCancelUpgradeResponse is the Msg/CancelUpgrade response type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgCancelUpgradeResponse {
}
export declare const MsgSoftwareUpgrade: {
    encode(message: MsgSoftwareUpgrade, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSoftwareUpgrade;
    fromJSON(object: any): MsgSoftwareUpgrade;
    toJSON(message: MsgSoftwareUpgrade): unknown;
    create<I extends Exact<DeepPartial<MsgSoftwareUpgrade>, I>>(base?: I): MsgSoftwareUpgrade;
    fromPartial<I extends Exact<DeepPartial<MsgSoftwareUpgrade>, I>>(object: I): MsgSoftwareUpgrade;
};
export declare const MsgSoftwareUpgradeResponse: {
    encode(_: MsgSoftwareUpgradeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSoftwareUpgradeResponse;
    fromJSON(_: any): MsgSoftwareUpgradeResponse;
    toJSON(_: MsgSoftwareUpgradeResponse): unknown;
    create<I extends Exact<DeepPartial<MsgSoftwareUpgradeResponse>, I>>(base?: I): MsgSoftwareUpgradeResponse;
    fromPartial<I extends Exact<DeepPartial<MsgSoftwareUpgradeResponse>, I>>(_: I): MsgSoftwareUpgradeResponse;
};
export declare const MsgCancelUpgrade: {
    encode(message: MsgCancelUpgrade, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelUpgrade;
    fromJSON(object: any): MsgCancelUpgrade;
    toJSON(message: MsgCancelUpgrade): unknown;
    create<I extends Exact<DeepPartial<MsgCancelUpgrade>, I>>(base?: I): MsgCancelUpgrade;
    fromPartial<I extends Exact<DeepPartial<MsgCancelUpgrade>, I>>(object: I): MsgCancelUpgrade;
};
export declare const MsgCancelUpgradeResponse: {
    encode(_: MsgCancelUpgradeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelUpgradeResponse;
    fromJSON(_: any): MsgCancelUpgradeResponse;
    toJSON(_: MsgCancelUpgradeResponse): unknown;
    create<I extends Exact<DeepPartial<MsgCancelUpgradeResponse>, I>>(base?: I): MsgCancelUpgradeResponse;
    fromPartial<I extends Exact<DeepPartial<MsgCancelUpgradeResponse>, I>>(_: I): MsgCancelUpgradeResponse;
};
/** Msg defines the upgrade Msg service. */
export interface Msg {
    /**
     * SoftwareUpgrade is a governance operation for initiating a software upgrade.
     *
     * Since: cosmos-sdk 0.46
     */
    SoftwareUpgrade(request: MsgSoftwareUpgrade): Promise<MsgSoftwareUpgradeResponse>;
    /**
     * CancelUpgrade is a governance operation for cancelling a previously
     * approved software upgrade.
     *
     * Since: cosmos-sdk 0.46
     */
    CancelUpgrade(request: MsgCancelUpgrade): Promise<MsgCancelUpgradeResponse>;
}
export declare const MsgServiceName = "cosmos.upgrade.v1beta1.Msg";
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    SoftwareUpgrade(request: MsgSoftwareUpgrade): Promise<MsgSoftwareUpgradeResponse>;
    CancelUpgrade(request: MsgCancelUpgrade): Promise<MsgCancelUpgradeResponse>;
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
