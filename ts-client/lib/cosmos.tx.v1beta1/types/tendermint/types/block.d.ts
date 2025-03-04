import _m0 from "protobufjs/minimal";
import { EvidenceList } from "./evidence";
import { Commit, Data, Header } from "./types";
export declare const protobufPackage = "tendermint.types";
export interface Block {
    header: Header | undefined;
    data: Data | undefined;
    evidence: EvidenceList | undefined;
    lastCommit: Commit | undefined;
}
export declare const Block: {
    encode(message: Block, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Block;
    fromJSON(object: any): Block;
    toJSON(message: Block): unknown;
    create<I extends Exact<DeepPartial<Block>, I>>(base?: I): Block;
    fromPartial<I extends Exact<DeepPartial<Block>, I>>(object: I): Block;
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
