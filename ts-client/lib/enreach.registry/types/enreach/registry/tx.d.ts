import _m0 from "protobufjs/minimal";
import { Params } from "./params";
export declare const protobufPackage = "enreach.registry";
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
export interface MsgCreateRegion {
    signer: string;
    code: string;
    name: string;
    description: string;
}
export interface MsgCreateRegionResponse {
}
export interface MsgUpdateRegion {
    signer: string;
    code: string;
    name: string;
    description: string;
}
export interface MsgUpdateRegionResponse {
}
export interface MsgDeleteRegion {
    signer: string;
    code: string;
}
export interface MsgDeleteRegionResponse {
}
export interface MsgCreateSuperior {
    signer: string;
    account: string;
}
export interface MsgCreateSuperiorResponse {
}
export interface MsgUpdateSuperior {
    signer: string;
    account: string;
}
export interface MsgUpdateSuperiorResponse {
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
export declare const MsgCreateRegion: {
    encode(message: MsgCreateRegion, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateRegion;
    fromJSON(object: any): MsgCreateRegion;
    toJSON(message: MsgCreateRegion): unknown;
    create<I extends Exact<DeepPartial<MsgCreateRegion>, I>>(base?: I): MsgCreateRegion;
    fromPartial<I extends Exact<DeepPartial<MsgCreateRegion>, I>>(object: I): MsgCreateRegion;
};
export declare const MsgCreateRegionResponse: {
    encode(_: MsgCreateRegionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateRegionResponse;
    fromJSON(_: any): MsgCreateRegionResponse;
    toJSON(_: MsgCreateRegionResponse): unknown;
    create<I extends Exact<DeepPartial<MsgCreateRegionResponse>, I>>(base?: I): MsgCreateRegionResponse;
    fromPartial<I extends Exact<DeepPartial<MsgCreateRegionResponse>, I>>(_: I): MsgCreateRegionResponse;
};
export declare const MsgUpdateRegion: {
    encode(message: MsgUpdateRegion, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateRegion;
    fromJSON(object: any): MsgUpdateRegion;
    toJSON(message: MsgUpdateRegion): unknown;
    create<I extends Exact<DeepPartial<MsgUpdateRegion>, I>>(base?: I): MsgUpdateRegion;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateRegion>, I>>(object: I): MsgUpdateRegion;
};
export declare const MsgUpdateRegionResponse: {
    encode(_: MsgUpdateRegionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateRegionResponse;
    fromJSON(_: any): MsgUpdateRegionResponse;
    toJSON(_: MsgUpdateRegionResponse): unknown;
    create<I extends Exact<DeepPartial<MsgUpdateRegionResponse>, I>>(base?: I): MsgUpdateRegionResponse;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateRegionResponse>, I>>(_: I): MsgUpdateRegionResponse;
};
export declare const MsgDeleteRegion: {
    encode(message: MsgDeleteRegion, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteRegion;
    fromJSON(object: any): MsgDeleteRegion;
    toJSON(message: MsgDeleteRegion): unknown;
    create<I extends Exact<DeepPartial<MsgDeleteRegion>, I>>(base?: I): MsgDeleteRegion;
    fromPartial<I extends Exact<DeepPartial<MsgDeleteRegion>, I>>(object: I): MsgDeleteRegion;
};
export declare const MsgDeleteRegionResponse: {
    encode(_: MsgDeleteRegionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteRegionResponse;
    fromJSON(_: any): MsgDeleteRegionResponse;
    toJSON(_: MsgDeleteRegionResponse): unknown;
    create<I extends Exact<DeepPartial<MsgDeleteRegionResponse>, I>>(base?: I): MsgDeleteRegionResponse;
    fromPartial<I extends Exact<DeepPartial<MsgDeleteRegionResponse>, I>>(_: I): MsgDeleteRegionResponse;
};
export declare const MsgCreateSuperior: {
    encode(message: MsgCreateSuperior, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateSuperior;
    fromJSON(object: any): MsgCreateSuperior;
    toJSON(message: MsgCreateSuperior): unknown;
    create<I extends Exact<DeepPartial<MsgCreateSuperior>, I>>(base?: I): MsgCreateSuperior;
    fromPartial<I extends Exact<DeepPartial<MsgCreateSuperior>, I>>(object: I): MsgCreateSuperior;
};
export declare const MsgCreateSuperiorResponse: {
    encode(_: MsgCreateSuperiorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateSuperiorResponse;
    fromJSON(_: any): MsgCreateSuperiorResponse;
    toJSON(_: MsgCreateSuperiorResponse): unknown;
    create<I extends Exact<DeepPartial<MsgCreateSuperiorResponse>, I>>(base?: I): MsgCreateSuperiorResponse;
    fromPartial<I extends Exact<DeepPartial<MsgCreateSuperiorResponse>, I>>(_: I): MsgCreateSuperiorResponse;
};
export declare const MsgUpdateSuperior: {
    encode(message: MsgUpdateSuperior, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateSuperior;
    fromJSON(object: any): MsgUpdateSuperior;
    toJSON(message: MsgUpdateSuperior): unknown;
    create<I extends Exact<DeepPartial<MsgUpdateSuperior>, I>>(base?: I): MsgUpdateSuperior;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateSuperior>, I>>(object: I): MsgUpdateSuperior;
};
export declare const MsgUpdateSuperiorResponse: {
    encode(_: MsgUpdateSuperiorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateSuperiorResponse;
    fromJSON(_: any): MsgUpdateSuperiorResponse;
    toJSON(_: MsgUpdateSuperiorResponse): unknown;
    create<I extends Exact<DeepPartial<MsgUpdateSuperiorResponse>, I>>(base?: I): MsgUpdateSuperiorResponse;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateSuperiorResponse>, I>>(_: I): MsgUpdateSuperiorResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /**
     * UpdateParams defines a (governance) operation for updating the module
     * parameters. The authority defaults to the x/gov module account.
     */
    UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
    CreateRegion(request: MsgCreateRegion): Promise<MsgCreateRegionResponse>;
    UpdateRegion(request: MsgUpdateRegion): Promise<MsgUpdateRegionResponse>;
    DeleteRegion(request: MsgDeleteRegion): Promise<MsgDeleteRegionResponse>;
    CreateSuperior(request: MsgCreateSuperior): Promise<MsgCreateSuperiorResponse>;
    UpdateSuperior(request: MsgUpdateSuperior): Promise<MsgUpdateSuperiorResponse>;
}
export declare const MsgServiceName = "enreach.registry.Msg";
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
    CreateRegion(request: MsgCreateRegion): Promise<MsgCreateRegionResponse>;
    UpdateRegion(request: MsgUpdateRegion): Promise<MsgUpdateRegionResponse>;
    DeleteRegion(request: MsgDeleteRegion): Promise<MsgDeleteRegionResponse>;
    CreateSuperior(request: MsgCreateSuperior): Promise<MsgCreateSuperiorResponse>;
    UpdateSuperior(request: MsgUpdateSuperior): Promise<MsgUpdateSuperiorResponse>;
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
