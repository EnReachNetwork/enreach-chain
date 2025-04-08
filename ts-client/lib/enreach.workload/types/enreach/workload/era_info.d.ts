import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "enreach.workload";
export interface EraInfo {
    number: number;
    startTime: Date | undefined;
    startBlock: number;
    endTime: Date | undefined;
    endBlock: number;
}
export declare const EraInfo: {
    encode(message: EraInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EraInfo;
    fromJSON(object: any): EraInfo;
    toJSON(message: EraInfo): unknown;
    create<I extends Exact<DeepPartial<EraInfo>, I>>(base?: I): EraInfo;
    fromPartial<I extends Exact<DeepPartial<EraInfo>, I>>(object: I): EraInfo;
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
