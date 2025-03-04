import _m0 from "protobufjs/minimal";
import { Params } from "./params";
export declare const protobufPackage = "enreach.miner";
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
    /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
    authority: string;
    /** NOTE: All parameters must be supplied. */
    params: Params | undefined;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {
}
export interface MsgCreateMiner {
    creator: string;
    minerId: string;
    evmAddress: string;
    regionCode: string;
    status: string;
}
export interface MsgCreateMinerResponse {
    id: number;
}
export interface MsgUpdateMiner {
    creator: string;
    id: number;
    minerId: string;
    evmAddress: string;
    regionCode: string;
    status: string;
}
export interface MsgUpdateMinerResponse {
}
export interface MsgDeleteMiner {
    creator: string;
    id: number;
}
export interface MsgDeleteMinerResponse {
}
export declare const MsgUpdateParams: {
    encode(message: MsgUpdateParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams;
    fromJSON(object: any): MsgUpdateParams;
    toJSON(message: MsgUpdateParams): unknown;
    create<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(base?: I): MsgUpdateParams;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(object: I): MsgUpdateParams;
};
export declare const MsgUpdateParamsResponse: {
    encode(_: MsgUpdateParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse;
    fromJSON(_: any): MsgUpdateParamsResponse;
    toJSON(_: MsgUpdateParamsResponse): unknown;
    create<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(base?: I): MsgUpdateParamsResponse;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(_: I): MsgUpdateParamsResponse;
};
export declare const MsgCreateMiner: {
    encode(message: MsgCreateMiner, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateMiner;
    fromJSON(object: any): MsgCreateMiner;
    toJSON(message: MsgCreateMiner): unknown;
    create<I extends Exact<DeepPartial<MsgCreateMiner>, I>>(base?: I): MsgCreateMiner;
    fromPartial<I extends Exact<DeepPartial<MsgCreateMiner>, I>>(object: I): MsgCreateMiner;
};
export declare const MsgCreateMinerResponse: {
    encode(message: MsgCreateMinerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateMinerResponse;
    fromJSON(object: any): MsgCreateMinerResponse;
    toJSON(message: MsgCreateMinerResponse): unknown;
    create<I extends Exact<DeepPartial<MsgCreateMinerResponse>, I>>(base?: I): MsgCreateMinerResponse;
    fromPartial<I extends Exact<DeepPartial<MsgCreateMinerResponse>, I>>(object: I): MsgCreateMinerResponse;
};
export declare const MsgUpdateMiner: {
    encode(message: MsgUpdateMiner, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateMiner;
    fromJSON(object: any): MsgUpdateMiner;
    toJSON(message: MsgUpdateMiner): unknown;
    create<I extends Exact<DeepPartial<MsgUpdateMiner>, I>>(base?: I): MsgUpdateMiner;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateMiner>, I>>(object: I): MsgUpdateMiner;
};
export declare const MsgUpdateMinerResponse: {
    encode(_: MsgUpdateMinerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateMinerResponse;
    fromJSON(_: any): MsgUpdateMinerResponse;
    toJSON(_: MsgUpdateMinerResponse): unknown;
    create<I extends Exact<DeepPartial<MsgUpdateMinerResponse>, I>>(base?: I): MsgUpdateMinerResponse;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateMinerResponse>, I>>(_: I): MsgUpdateMinerResponse;
};
export declare const MsgDeleteMiner: {
    encode(message: MsgDeleteMiner, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteMiner;
    fromJSON(object: any): MsgDeleteMiner;
    toJSON(message: MsgDeleteMiner): unknown;
    create<I extends Exact<DeepPartial<MsgDeleteMiner>, I>>(base?: I): MsgDeleteMiner;
    fromPartial<I extends Exact<DeepPartial<MsgDeleteMiner>, I>>(object: I): MsgDeleteMiner;
};
export declare const MsgDeleteMinerResponse: {
    encode(_: MsgDeleteMinerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteMinerResponse;
    fromJSON(_: any): MsgDeleteMinerResponse;
    toJSON(_: MsgDeleteMinerResponse): unknown;
    create<I extends Exact<DeepPartial<MsgDeleteMinerResponse>, I>>(base?: I): MsgDeleteMinerResponse;
    fromPartial<I extends Exact<DeepPartial<MsgDeleteMinerResponse>, I>>(_: I): MsgDeleteMinerResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /**
     * UpdateParams defines a (governance) operation for updating the module
     * parameters. The authority defaults to the x/gov module account.
     */
    UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
    CreateMiner(request: MsgCreateMiner): Promise<MsgCreateMinerResponse>;
    UpdateMiner(request: MsgUpdateMiner): Promise<MsgUpdateMinerResponse>;
    DeleteMiner(request: MsgDeleteMiner): Promise<MsgDeleteMinerResponse>;
}
export declare const MsgServiceName = "enreach.miner.Msg";
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
    CreateMiner(request: MsgCreateMiner): Promise<MsgCreateMinerResponse>;
    UpdateMiner(request: MsgUpdateMiner): Promise<MsgUpdateMinerResponse>;
    DeleteMiner(request: MsgDeleteMiner): Promise<MsgDeleteMinerResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
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
