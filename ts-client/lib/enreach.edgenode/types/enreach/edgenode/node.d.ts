import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "enreach.edgenode";
export interface Node {
    nodeID: string;
    userID: string;
    nodeName: string;
    deviceType: string;
    regionCode: string;
    /** Default 0 - stands for Enreach traffic */
    trafficType: number;
    registerStatus: string;
    workingStatus: string;
    cheatStatus: string;
    reputationPoint: number;
    creator: string;
    createAt: number;
    updator: string;
    updateAt: number;
}
export declare const Node: {
    encode(message: Node, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Node;
    fromJSON(object: any): Node;
    toJSON(message: Node): unknown;
    create<I extends Exact<DeepPartial<Node>, I>>(base?: I): Node;
    fromPartial<I extends Exact<DeepPartial<Node>, I>>(object: I): Node;
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
