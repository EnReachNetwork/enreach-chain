import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "tendermint.p2p";
export interface NetAddress {
    id: string;
    ip: string;
    port: number;
}
export interface ProtocolVersion {
    p2p: number;
    block: number;
    app: number;
}
export interface DefaultNodeInfo {
    protocolVersion: ProtocolVersion | undefined;
    defaultNodeId: string;
    listenAddr: string;
    network: string;
    version: string;
    channels: Uint8Array;
    moniker: string;
    other: DefaultNodeInfoOther | undefined;
}
export interface DefaultNodeInfoOther {
    txIndex: string;
    rpcAddress: string;
}
export declare const NetAddress: {
    encode(message: NetAddress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NetAddress;
    fromJSON(object: any): NetAddress;
    toJSON(message: NetAddress): unknown;
    create<I extends Exact<DeepPartial<NetAddress>, I>>(base?: I): NetAddress;
    fromPartial<I extends Exact<DeepPartial<NetAddress>, I>>(object: I): NetAddress;
};
export declare const ProtocolVersion: {
    encode(message: ProtocolVersion, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProtocolVersion;
    fromJSON(object: any): ProtocolVersion;
    toJSON(message: ProtocolVersion): unknown;
    create<I extends Exact<DeepPartial<ProtocolVersion>, I>>(base?: I): ProtocolVersion;
    fromPartial<I extends Exact<DeepPartial<ProtocolVersion>, I>>(object: I): ProtocolVersion;
};
export declare const DefaultNodeInfo: {
    encode(message: DefaultNodeInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DefaultNodeInfo;
    fromJSON(object: any): DefaultNodeInfo;
    toJSON(message: DefaultNodeInfo): unknown;
    create<I extends Exact<DeepPartial<DefaultNodeInfo>, I>>(base?: I): DefaultNodeInfo;
    fromPartial<I extends Exact<DeepPartial<DefaultNodeInfo>, I>>(object: I): DefaultNodeInfo;
};
export declare const DefaultNodeInfoOther: {
    encode(message: DefaultNodeInfoOther, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DefaultNodeInfoOther;
    fromJSON(object: any): DefaultNodeInfoOther;
    toJSON(message: DefaultNodeInfoOther): unknown;
    create<I extends Exact<DeepPartial<DefaultNodeInfoOther>, I>>(base?: I): DefaultNodeInfoOther;
    fromPartial<I extends Exact<DeepPartial<DefaultNodeInfoOther>, I>>(object: I): DefaultNodeInfoOther;
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
