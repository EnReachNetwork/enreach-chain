import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "enreach.workload";
/** Params defines the parameters for the module. */
export interface Params {
    data: {
        [key: string]: string;
    };
}
export interface Params_DataEntry {
    key: string;
    value: string;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    create<I extends Exact<DeepPartial<Params>, I>>(base?: I): Params;
    fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params;
};
export declare const Params_DataEntry: {
    encode(message: Params_DataEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params_DataEntry;
    fromJSON(object: any): Params_DataEntry;
    toJSON(message: Params_DataEntry): unknown;
    create<I extends Exact<DeepPartial<Params_DataEntry>, I>>(base?: I): Params_DataEntry;
    fromPartial<I extends Exact<DeepPartial<Params_DataEntry>, I>>(object: I): Params_DataEntry;
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
