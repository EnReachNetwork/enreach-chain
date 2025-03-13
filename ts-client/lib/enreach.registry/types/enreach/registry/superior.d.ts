import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "enreach.registry";
export interface Superior {
    account: string;
    creator: string;
    createAt: number;
    updator: string;
    updateAt: number;
    signer: string;
}
export declare const Superior: {
    encode(message: Superior, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Superior;
    fromJSON(object: any): Superior;
    toJSON(message: Superior): unknown;
    create<I extends Exact<DeepPartial<Superior>, I>>(base?: I): Superior;
    fromPartial<I extends Exact<DeepPartial<Superior>, I>>(object: I): Superior;
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
