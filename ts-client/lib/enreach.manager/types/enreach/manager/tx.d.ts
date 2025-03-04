import _m0 from "protobufjs/minimal";
import { Params } from "./params";
export declare const protobufPackage = "enreach.manager";
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
export interface MsgRegisterManager {
    creator: string;
    managerAddress: string;
    operatorName: string;
    operatorDesc: string;
    operatorWebsiteURL: string;
    evmAddress: string;
    hostAddress: string;
    managerPort: number;
    trackerPort: number;
    chainAPIPort: number;
    chainRPCPort: number;
    regionCode: string;
}
export interface MsgRegisterManagerResponse {
    id: number;
}
export interface MsgUpdateManager {
    creator: string;
    id: number;
    managerAddress: string;
    operatorName: string;
    operatorDesc: string;
    operatorWebsiteURL: string;
    evmAddress: string;
    hostAddress: string;
    managerPort: number;
    trackerPort: number;
    chainAPIPort: number;
    chainRPCPort: number;
    regionCode: string;
}
export interface MsgUpdateManagerResponse {
}
export interface MsgDeleteManager {
    creator: string;
    id: number;
}
export interface MsgDeleteManagerResponse {
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
export declare const MsgRegisterManager: {
    encode(message: MsgRegisterManager, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterManager;
    fromJSON(object: any): MsgRegisterManager;
    toJSON(message: MsgRegisterManager): unknown;
    create<I extends Exact<DeepPartial<MsgRegisterManager>, I>>(base?: I): MsgRegisterManager;
    fromPartial<I extends Exact<DeepPartial<MsgRegisterManager>, I>>(object: I): MsgRegisterManager;
};
export declare const MsgRegisterManagerResponse: {
    encode(message: MsgRegisterManagerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterManagerResponse;
    fromJSON(object: any): MsgRegisterManagerResponse;
    toJSON(message: MsgRegisterManagerResponse): unknown;
    create<I extends Exact<DeepPartial<MsgRegisterManagerResponse>, I>>(base?: I): MsgRegisterManagerResponse;
    fromPartial<I extends Exact<DeepPartial<MsgRegisterManagerResponse>, I>>(object: I): MsgRegisterManagerResponse;
};
export declare const MsgUpdateManager: {
    encode(message: MsgUpdateManager, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateManager;
    fromJSON(object: any): MsgUpdateManager;
    toJSON(message: MsgUpdateManager): unknown;
    create<I extends Exact<DeepPartial<MsgUpdateManager>, I>>(base?: I): MsgUpdateManager;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateManager>, I>>(object: I): MsgUpdateManager;
};
export declare const MsgUpdateManagerResponse: {
    encode(_: MsgUpdateManagerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateManagerResponse;
    fromJSON(_: any): MsgUpdateManagerResponse;
    toJSON(_: MsgUpdateManagerResponse): unknown;
    create<I extends Exact<DeepPartial<MsgUpdateManagerResponse>, I>>(base?: I): MsgUpdateManagerResponse;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateManagerResponse>, I>>(_: I): MsgUpdateManagerResponse;
};
export declare const MsgDeleteManager: {
    encode(message: MsgDeleteManager, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteManager;
    fromJSON(object: any): MsgDeleteManager;
    toJSON(message: MsgDeleteManager): unknown;
    create<I extends Exact<DeepPartial<MsgDeleteManager>, I>>(base?: I): MsgDeleteManager;
    fromPartial<I extends Exact<DeepPartial<MsgDeleteManager>, I>>(object: I): MsgDeleteManager;
};
export declare const MsgDeleteManagerResponse: {
    encode(_: MsgDeleteManagerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteManagerResponse;
    fromJSON(_: any): MsgDeleteManagerResponse;
    toJSON(_: MsgDeleteManagerResponse): unknown;
    create<I extends Exact<DeepPartial<MsgDeleteManagerResponse>, I>>(base?: I): MsgDeleteManagerResponse;
    fromPartial<I extends Exact<DeepPartial<MsgDeleteManagerResponse>, I>>(_: I): MsgDeleteManagerResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /**
     * UpdateParams defines a (governance) operation for updating the module
     * parameters. The authority defaults to the x/gov module account.
     */
    UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
    RegisterManager(request: MsgRegisterManager): Promise<MsgRegisterManagerResponse>;
    UpdateManager(request: MsgUpdateManager): Promise<MsgUpdateManagerResponse>;
    DeleteManager(request: MsgDeleteManager): Promise<MsgDeleteManagerResponse>;
}
export declare const MsgServiceName = "enreach.manager.Msg";
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
    RegisterManager(request: MsgRegisterManager): Promise<MsgRegisterManagerResponse>;
    UpdateManager(request: MsgUpdateManager): Promise<MsgUpdateManagerResponse>;
    DeleteManager(request: MsgDeleteManager): Promise<MsgDeleteManagerResponse>;
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
