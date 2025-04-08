import _m0 from "protobufjs/minimal";
import { PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
export declare const protobufPackage = "enreach.workload";
/** CR -> Change Request */
export interface CheatStatusCR {
    nodeID: string;
    cheatStatus: string;
}
export interface CheatStatusCRDB {
    cheatStatus: string;
    createAt: number;
    updateAt: number;
}
export interface CheatStatusCRMapDB {
    /** manager_account => cheating status */
    data: {
        [key: string]: CheatStatusCRDB;
    };
}
export interface CheatStatusCRMapDB_DataEntry {
    key: string;
    value: CheatStatusCRDB | undefined;
}
export interface CheatStatusCRData {
    era: number;
    nodeID: string;
    data: {
        [key: string]: CheatStatusCRDB;
    };
}
export interface CheatStatusCRData_DataEntry {
    key: string;
    value: CheatStatusCRDB | undefined;
}
export interface EraCheatStatusProcessData {
    era: number;
    /** total nodes count need to be processed */
    totalNodesCount: number;
    /** accumulated processed nodes count */
    processedNodesCount: number;
    startAt: number;
    updateAt: number;
    status: string;
    pagination: PageResponse | undefined;
}
export declare const CheatStatusCR: {
    encode(message: CheatStatusCR, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CheatStatusCR;
    fromJSON(object: any): CheatStatusCR;
    toJSON(message: CheatStatusCR): unknown;
    create<I extends Exact<DeepPartial<CheatStatusCR>, I>>(base?: I): CheatStatusCR;
    fromPartial<I extends Exact<DeepPartial<CheatStatusCR>, I>>(object: I): CheatStatusCR;
};
export declare const CheatStatusCRDB: {
    encode(message: CheatStatusCRDB, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CheatStatusCRDB;
    fromJSON(object: any): CheatStatusCRDB;
    toJSON(message: CheatStatusCRDB): unknown;
    create<I extends Exact<DeepPartial<CheatStatusCRDB>, I>>(base?: I): CheatStatusCRDB;
    fromPartial<I extends Exact<DeepPartial<CheatStatusCRDB>, I>>(object: I): CheatStatusCRDB;
};
export declare const CheatStatusCRMapDB: {
    encode(message: CheatStatusCRMapDB, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CheatStatusCRMapDB;
    fromJSON(object: any): CheatStatusCRMapDB;
    toJSON(message: CheatStatusCRMapDB): unknown;
    create<I extends Exact<DeepPartial<CheatStatusCRMapDB>, I>>(base?: I): CheatStatusCRMapDB;
    fromPartial<I extends Exact<DeepPartial<CheatStatusCRMapDB>, I>>(object: I): CheatStatusCRMapDB;
};
export declare const CheatStatusCRMapDB_DataEntry: {
    encode(message: CheatStatusCRMapDB_DataEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CheatStatusCRMapDB_DataEntry;
    fromJSON(object: any): CheatStatusCRMapDB_DataEntry;
    toJSON(message: CheatStatusCRMapDB_DataEntry): unknown;
    create<I extends Exact<DeepPartial<CheatStatusCRMapDB_DataEntry>, I>>(base?: I): CheatStatusCRMapDB_DataEntry;
    fromPartial<I extends Exact<DeepPartial<CheatStatusCRMapDB_DataEntry>, I>>(object: I): CheatStatusCRMapDB_DataEntry;
};
export declare const CheatStatusCRData: {
    encode(message: CheatStatusCRData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CheatStatusCRData;
    fromJSON(object: any): CheatStatusCRData;
    toJSON(message: CheatStatusCRData): unknown;
    create<I extends Exact<DeepPartial<CheatStatusCRData>, I>>(base?: I): CheatStatusCRData;
    fromPartial<I extends Exact<DeepPartial<CheatStatusCRData>, I>>(object: I): CheatStatusCRData;
};
export declare const CheatStatusCRData_DataEntry: {
    encode(message: CheatStatusCRData_DataEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CheatStatusCRData_DataEntry;
    fromJSON(object: any): CheatStatusCRData_DataEntry;
    toJSON(message: CheatStatusCRData_DataEntry): unknown;
    create<I extends Exact<DeepPartial<CheatStatusCRData_DataEntry>, I>>(base?: I): CheatStatusCRData_DataEntry;
    fromPartial<I extends Exact<DeepPartial<CheatStatusCRData_DataEntry>, I>>(object: I): CheatStatusCRData_DataEntry;
};
export declare const EraCheatStatusProcessData: {
    encode(message: EraCheatStatusProcessData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EraCheatStatusProcessData;
    fromJSON(object: any): EraCheatStatusProcessData;
    toJSON(message: EraCheatStatusProcessData): unknown;
    create<I extends Exact<DeepPartial<EraCheatStatusProcessData>, I>>(base?: I): EraCheatStatusProcessData;
    fromPartial<I extends Exact<DeepPartial<EraCheatStatusProcessData>, I>>(object: I): EraCheatStatusProcessData;
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
