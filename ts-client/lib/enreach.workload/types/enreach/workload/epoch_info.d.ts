import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "enreach.workload";
export interface EpochInfo {
    number: number;
    startTime: Date | undefined;
    startBlock: number;
    endTime: Date | undefined;
    endBlock: number;
}
export declare const EpochInfo: {
    encode(message: EpochInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EpochInfo;
    fromJSON(object: any): EpochInfo;
    toJSON(message: EpochInfo): unknown;
    create<I extends Exact<DeepPartial<EpochInfo>, I>>(base?: I): EpochInfo;
    fromPartial<I extends Exact<DeepPartial<EpochInfo>, I>>(object: I): EpochInfo;
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
