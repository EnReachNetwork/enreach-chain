import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "enreach.manager";
export interface Operator {
    operatorAccount: string;
    managerAccount: string;
    evmAccount: string;
    name: string;
    description: string;
    websiteUrl: string;
    creator: string;
    createAt: number;
    updator: string;
    updateAt: number;
}
export declare const Operator: {
    encode(message: Operator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Operator;
    fromJSON(object: any): Operator;
    toJSON(message: Operator): unknown;
    create<I extends Exact<DeepPartial<Operator>, I>>(base?: I): Operator;
    fromPartial<I extends Exact<DeepPartial<Operator>, I>>(object: I): Operator;
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
