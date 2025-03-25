import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "enreach.workload";
export interface NodeScore {
    nodeID: string;
    score: number;
}
export interface NodeScoreDB {
    score: number;
    createAt: number;
    updateAt: number;
}
export interface ManagerNodeScoreMap {
    /** manager_account => score */
    managerScoreMap: {
        [key: string]: NodeScoreDB;
    };
}
export interface ManagerNodeScoreMap_ManagerScoreMapEntry {
    key: string;
    value: NodeScoreDB | undefined;
}
export interface Workreport {
    epoch: number;
    nodeID: string;
    managerScoreMap: {
        [key: string]: NodeScoreDB;
    };
}
export interface Workreport_ManagerScoreMapEntry {
    key: string;
    value: NodeScoreDB | undefined;
}
export declare const NodeScore: {
    encode(message: NodeScore, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NodeScore;
    fromJSON(object: any): NodeScore;
    toJSON(message: NodeScore): unknown;
    create<I extends Exact<DeepPartial<NodeScore>, I>>(base?: I): NodeScore;
    fromPartial<I extends Exact<DeepPartial<NodeScore>, I>>(object: I): NodeScore;
};
export declare const NodeScoreDB: {
    encode(message: NodeScoreDB, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NodeScoreDB;
    fromJSON(object: any): NodeScoreDB;
    toJSON(message: NodeScoreDB): unknown;
    create<I extends Exact<DeepPartial<NodeScoreDB>, I>>(base?: I): NodeScoreDB;
    fromPartial<I extends Exact<DeepPartial<NodeScoreDB>, I>>(object: I): NodeScoreDB;
};
export declare const ManagerNodeScoreMap: {
    encode(message: ManagerNodeScoreMap, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ManagerNodeScoreMap;
    fromJSON(object: any): ManagerNodeScoreMap;
    toJSON(message: ManagerNodeScoreMap): unknown;
    create<I extends Exact<DeepPartial<ManagerNodeScoreMap>, I>>(base?: I): ManagerNodeScoreMap;
    fromPartial<I extends Exact<DeepPartial<ManagerNodeScoreMap>, I>>(object: I): ManagerNodeScoreMap;
};
export declare const ManagerNodeScoreMap_ManagerScoreMapEntry: {
    encode(message: ManagerNodeScoreMap_ManagerScoreMapEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ManagerNodeScoreMap_ManagerScoreMapEntry;
    fromJSON(object: any): ManagerNodeScoreMap_ManagerScoreMapEntry;
    toJSON(message: ManagerNodeScoreMap_ManagerScoreMapEntry): unknown;
    create<I extends Exact<DeepPartial<ManagerNodeScoreMap_ManagerScoreMapEntry>, I>>(base?: I): ManagerNodeScoreMap_ManagerScoreMapEntry;
    fromPartial<I extends Exact<DeepPartial<ManagerNodeScoreMap_ManagerScoreMapEntry>, I>>(object: I): ManagerNodeScoreMap_ManagerScoreMapEntry;
};
export declare const Workreport: {
    encode(message: Workreport, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Workreport;
    fromJSON(object: any): Workreport;
    toJSON(message: Workreport): unknown;
    create<I extends Exact<DeepPartial<Workreport>, I>>(base?: I): Workreport;
    fromPartial<I extends Exact<DeepPartial<Workreport>, I>>(object: I): Workreport;
};
export declare const Workreport_ManagerScoreMapEntry: {
    encode(message: Workreport_ManagerScoreMapEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Workreport_ManagerScoreMapEntry;
    fromJSON(object: any): Workreport_ManagerScoreMapEntry;
    toJSON(message: Workreport_ManagerScoreMapEntry): unknown;
    create<I extends Exact<DeepPartial<Workreport_ManagerScoreMapEntry>, I>>(base?: I): Workreport_ManagerScoreMapEntry;
    fromPartial<I extends Exact<DeepPartial<Workreport_ManagerScoreMapEntry>, I>>(object: I): Workreport_ManagerScoreMapEntry;
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
