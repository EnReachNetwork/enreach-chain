import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "enreach.workload";
export interface NodeWorkload {
    epoch: number;
    nodeID: string;
    score: number;
    createAt: number;
}
/** Manager Workreport Process Workload */
export interface ManagerWRWorkload {
    epoch: number;
    managerAccount: string;
    reportedNodesCount: number;
    score: number;
    createAt: number;
    updateAt: number;
}
/** Manager ReputationPoint Process Workload */
export interface ManagerRPWorkload {
    era: number;
    managerAccount: string;
    reportedNodesCount: number;
    score: number;
    createAt: number;
    updateAt: number;
}
/** Manager CheatStatus Process Workload */
export interface ManagerCSWorkload {
    era: number;
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
export declare const ManagerWRWorkload: {
    encode(message: ManagerWRWorkload, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ManagerWRWorkload;
    fromJSON(object: any): ManagerWRWorkload;
    toJSON(message: ManagerWRWorkload): unknown;
    create<I extends Exact<DeepPartial<ManagerWRWorkload>, I>>(base?: I): ManagerWRWorkload;
    fromPartial<I extends Exact<DeepPartial<ManagerWRWorkload>, I>>(object: I): ManagerWRWorkload;
};
export declare const ManagerRPWorkload: {
    encode(message: ManagerRPWorkload, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ManagerRPWorkload;
    fromJSON(object: any): ManagerRPWorkload;
    toJSON(message: ManagerRPWorkload): unknown;
    create<I extends Exact<DeepPartial<ManagerRPWorkload>, I>>(base?: I): ManagerRPWorkload;
    fromPartial<I extends Exact<DeepPartial<ManagerRPWorkload>, I>>(object: I): ManagerRPWorkload;
};
export declare const ManagerCSWorkload: {
    encode(message: ManagerCSWorkload, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ManagerCSWorkload;
    fromJSON(object: any): ManagerCSWorkload;
    toJSON(message: ManagerCSWorkload): unknown;
    create<I extends Exact<DeepPartial<ManagerCSWorkload>, I>>(base?: I): ManagerCSWorkload;
    fromPartial<I extends Exact<DeepPartial<ManagerCSWorkload>, I>>(object: I): ManagerCSWorkload;
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
