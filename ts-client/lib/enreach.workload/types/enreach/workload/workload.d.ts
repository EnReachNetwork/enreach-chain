import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "enreach.workload";
export interface NodeWorkload {
    epoch: number;
    nodeID: string;
    score: number;
    createAt: number;
}
export interface ManagerWorkload {
    epoch: number;
    managerAccount: string;
    reportedNodesCount: number;
    score: number;
    createAt: number;
    updateAt: number;
}
export declare const NodeWorkload: {
    encode(message: NodeWorkload, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NodeWorkload;
    fromJSON(object: any): NodeWorkload;
    toJSON(message: NodeWorkload): unknown;
    create<I extends Exact<DeepPartial<NodeWorkload>, I>>(base?: I): NodeWorkload;
    fromPartial<I extends Exact<DeepPartial<NodeWorkload>, I>>(object: I): NodeWorkload;
};
export declare const ManagerWorkload: {
    encode(message: ManagerWorkload, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ManagerWorkload;
    fromJSON(object: any): ManagerWorkload;
    toJSON(message: ManagerWorkload): unknown;
    create<I extends Exact<DeepPartial<ManagerWorkload>, I>>(base?: I): ManagerWorkload;
    fromPartial<I extends Exact<DeepPartial<ManagerWorkload>, I>>(object: I): ManagerWorkload;
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
