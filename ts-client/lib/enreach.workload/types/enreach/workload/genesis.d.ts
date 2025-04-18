import _m0 from "protobufjs/minimal";
import { EpochInfo } from "./epoch_info";
import { EraInfo } from "./era_info";
import { Params } from "./params";
import { Superior } from "./superior";
export declare const protobufPackage = "enreach.workload";
/** GenesisState defines the workload module's genesis state. */
export interface GenesisState {
    adminAccount: string;
    /** params defines all the parameters of the module. */
    params: Params | undefined;
    superior: Superior | undefined;
    currentEpoch: EpochInfo | undefined;
    pendingNextEpoch: EpochInfo | undefined;
    currentEra: EraInfo | undefined;
    pendingNextEra: EraInfo | undefined;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    create<I extends Exact<DeepPartial<GenesisState>, I>>(base?: I): GenesisState;
    fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState;
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
