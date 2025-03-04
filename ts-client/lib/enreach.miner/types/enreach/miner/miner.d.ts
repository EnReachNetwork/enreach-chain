import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "enreach.miner";
export interface Miner {
    id: number;
    minerId: string;
    evmAddress: string;
    regionCode: string;
    status: string;
    creator: string;
}
export declare const Miner: {
    encode(message: Miner, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Miner;
    fromJSON(object: any): Miner;
    toJSON(message: Miner): unknown;
    create<I extends Exact<DeepPartial<Miner>, I>>(base?: I): Miner;
    fromPartial<I extends Exact<DeepPartial<Miner>, I>>(object: I): Miner;
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
