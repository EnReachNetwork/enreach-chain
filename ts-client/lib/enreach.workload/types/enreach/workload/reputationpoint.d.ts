import _m0 from "protobufjs/minimal";
import { PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
export declare const protobufPackage = "enreach.workload";
export interface ReputationPointChangeRawData {
    nodeID: string;
    deltaPoint: number;
}
export interface ReputationPointChangeRawDataDB {
    deltaPoint: number;
    createAt: number;
    updateAt: number;
}
export interface ReputationPointChangeRawDataMapDB {
    /** manager_account => reputation point request */
    data: {
        [key: string]: ReputationPointChangeRawDataDB;
    };
}
export interface ReputationPointChangeRawDataMapDB_DataEntry {
    key: string;
    value: ReputationPointChangeRawDataDB | undefined;
}
export interface ReputationPointChangeData {
    era: number;
    nodeID: string;
    data: {
        [key: string]: ReputationPointChangeRawDataDB;
    };
}
export interface ReputationPointChangeData_DataEntry {
    key: string;
    value: ReputationPointChangeRawDataDB | undefined;
}
export interface ReputationDeltaPoint {
    era: number;
    nodeID: string;
    deltaPoint: number;
    createAt: number;
}
export interface ReputationPoint {
    nodeID: string;
    point: number;
    createAt: number;
    updateAt: number;
}
export interface EraProcessData {
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
export declare const ReputationPointChangeRawData: {
    encode(message: ReputationPointChangeRawData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReputationPointChangeRawData;
    fromJSON(object: any): ReputationPointChangeRawData;
    toJSON(message: ReputationPointChangeRawData): unknown;
    create<I extends Exact<DeepPartial<ReputationPointChangeRawData>, I>>(base?: I): ReputationPointChangeRawData;
    fromPartial<I extends Exact<DeepPartial<ReputationPointChangeRawData>, I>>(object: I): ReputationPointChangeRawData;
};
export declare const ReputationPointChangeRawDataDB: {
    encode(message: ReputationPointChangeRawDataDB, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReputationPointChangeRawDataDB;
    fromJSON(object: any): ReputationPointChangeRawDataDB;
    toJSON(message: ReputationPointChangeRawDataDB): unknown;
    create<I extends Exact<DeepPartial<ReputationPointChangeRawDataDB>, I>>(base?: I): ReputationPointChangeRawDataDB;
    fromPartial<I extends Exact<DeepPartial<ReputationPointChangeRawDataDB>, I>>(object: I): ReputationPointChangeRawDataDB;
};
export declare const ReputationPointChangeRawDataMapDB: {
    encode(message: ReputationPointChangeRawDataMapDB, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReputationPointChangeRawDataMapDB;
    fromJSON(object: any): ReputationPointChangeRawDataMapDB;
    toJSON(message: ReputationPointChangeRawDataMapDB): unknown;
    create<I extends Exact<DeepPartial<ReputationPointChangeRawDataMapDB>, I>>(base?: I): ReputationPointChangeRawDataMapDB;
    fromPartial<I extends Exact<DeepPartial<ReputationPointChangeRawDataMapDB>, I>>(object: I): ReputationPointChangeRawDataMapDB;
};
export declare const ReputationPointChangeRawDataMapDB_DataEntry: {
    encode(message: ReputationPointChangeRawDataMapDB_DataEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReputationPointChangeRawDataMapDB_DataEntry;
    fromJSON(object: any): ReputationPointChangeRawDataMapDB_DataEntry;
    toJSON(message: ReputationPointChangeRawDataMapDB_DataEntry): unknown;
    create<I extends Exact<DeepPartial<ReputationPointChangeRawDataMapDB_DataEntry>, I>>(base?: I): ReputationPointChangeRawDataMapDB_DataEntry;
    fromPartial<I extends Exact<DeepPartial<ReputationPointChangeRawDataMapDB_DataEntry>, I>>(object: I): ReputationPointChangeRawDataMapDB_DataEntry;
};
export declare const ReputationPointChangeData: {
    encode(message: ReputationPointChangeData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReputationPointChangeData;
    fromJSON(object: any): ReputationPointChangeData;
    toJSON(message: ReputationPointChangeData): unknown;
    create<I extends Exact<DeepPartial<ReputationPointChangeData>, I>>(base?: I): ReputationPointChangeData;
    fromPartial<I extends Exact<DeepPartial<ReputationPointChangeData>, I>>(object: I): ReputationPointChangeData;
};
export declare const ReputationPointChangeData_DataEntry: {
    encode(message: ReputationPointChangeData_DataEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReputationPointChangeData_DataEntry;
    fromJSON(object: any): ReputationPointChangeData_DataEntry;
    toJSON(message: ReputationPointChangeData_DataEntry): unknown;
    create<I extends Exact<DeepPartial<ReputationPointChangeData_DataEntry>, I>>(base?: I): ReputationPointChangeData_DataEntry;
    fromPartial<I extends Exact<DeepPartial<ReputationPointChangeData_DataEntry>, I>>(object: I): ReputationPointChangeData_DataEntry;
};
export declare const ReputationDeltaPoint: {
    encode(message: ReputationDeltaPoint, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReputationDeltaPoint;
    fromJSON(object: any): ReputationDeltaPoint;
    toJSON(message: ReputationDeltaPoint): unknown;
    create<I extends Exact<DeepPartial<ReputationDeltaPoint>, I>>(base?: I): ReputationDeltaPoint;
    fromPartial<I extends Exact<DeepPartial<ReputationDeltaPoint>, I>>(object: I): ReputationDeltaPoint;
};
export declare const ReputationPoint: {
    encode(message: ReputationPoint, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReputationPoint;
    fromJSON(object: any): ReputationPoint;
    toJSON(message: ReputationPoint): unknown;
    create<I extends Exact<DeepPartial<ReputationPoint>, I>>(base?: I): ReputationPoint;
    fromPartial<I extends Exact<DeepPartial<ReputationPoint>, I>>(object: I): ReputationPoint;
};
export declare const EraProcessData: {
    encode(message: EraProcessData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EraProcessData;
    fromJSON(object: any): EraProcessData;
    toJSON(message: EraProcessData): unknown;
    create<I extends Exact<DeepPartial<EraProcessData>, I>>(base?: I): EraProcessData;
    fromPartial<I extends Exact<DeepPartial<EraProcessData>, I>>(object: I): EraProcessData;
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
