import _m0 from "protobufjs/minimal";
import { Duration } from "../../../google/protobuf/duration";
export declare const protobufPackage = "cosmos.slashing.v1beta1";
/**
 * ValidatorSigningInfo defines a validator's signing info for monitoring their
 * liveness activity.
 */
export interface ValidatorSigningInfo {
    address: string;
    /** Height at which validator was first a candidate OR was un-jailed */
    startHeight: number;
    /**
     * Index which is incremented every time a validator is bonded in a block and
     * _may_ have signed a pre-commit or not. This in conjunction with the
     * signed_blocks_window param determines the index in the missed block bitmap.
     */
    indexOffset: number;
    /** Timestamp until which the validator is jailed due to liveness downtime. */
    jailedUntil: Date | undefined;
    /**
     * Whether or not a validator has been tombstoned (killed out of validator
     * set). It is set once the validator commits an equivocation or for any other
     * configured misbehavior.
     */
    tombstoned: boolean;
    /**
     * A counter of missed (unsigned) blocks. It is used to avoid unnecessary
     * reads in the missed block bitmap.
     */
    missedBlocksCounter: number;
}
/** Params represents the parameters used for by the slashing module. */
export interface Params {
    signedBlocksWindow: number;
    minSignedPerWindow: Uint8Array;
    downtimeJailDuration: Duration | undefined;
    slashFractionDoubleSign: Uint8Array;
    slashFractionDowntime: Uint8Array;
}
export declare const ValidatorSigningInfo: {
    encode(message: ValidatorSigningInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorSigningInfo;
    fromJSON(object: any): ValidatorSigningInfo;
    toJSON(message: ValidatorSigningInfo): unknown;
    create<I extends Exact<DeepPartial<ValidatorSigningInfo>, I>>(base?: I): ValidatorSigningInfo;
    fromPartial<I extends Exact<DeepPartial<ValidatorSigningInfo>, I>>(object: I): ValidatorSigningInfo;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    create<I extends Exact<DeepPartial<Params>, I>>(base?: I): Params;
    fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params;
};
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
