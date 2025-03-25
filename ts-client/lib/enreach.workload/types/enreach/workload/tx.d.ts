import _m0 from "protobufjs/minimal";
import { Params } from "./params";
import { NodeScore } from "./workreport";
export declare const protobufPackage = "enreach.workload";
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
export interface MsgSubmitWorkreports {
    managerAccount: string;
    epoch: number;
    nodeScores: NodeScore[];
}
export interface MsgSubmitWorkreportsResponse {
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
export declare const MsgSubmitWorkreports: {
    encode(message: MsgSubmitWorkreports, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitWorkreports;
    fromJSON(object: any): MsgSubmitWorkreports;
    toJSON(message: MsgSubmitWorkreports): unknown;
    create<I extends Exact<DeepPartial<MsgSubmitWorkreports>, I>>(base?: I): MsgSubmitWorkreports;
    fromPartial<I extends Exact<DeepPartial<MsgSubmitWorkreports>, I>>(object: I): MsgSubmitWorkreports;
};
export declare const MsgSubmitWorkreportsResponse: {
    encode(_: MsgSubmitWorkreportsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitWorkreportsResponse;
    fromJSON(_: any): MsgSubmitWorkreportsResponse;
    toJSON(_: MsgSubmitWorkreportsResponse): unknown;
    create<I extends Exact<DeepPartial<MsgSubmitWorkreportsResponse>, I>>(base?: I): MsgSubmitWorkreportsResponse;
    fromPartial<I extends Exact<DeepPartial<MsgSubmitWorkreportsResponse>, I>>(_: I): MsgSubmitWorkreportsResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /**
     * UpdateParams defines a (governance) operation for updating the module
     * parameters. The authority defaults to the x/gov module account.
     */
    UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
    SubmitWorkreports(request: MsgSubmitWorkreports): Promise<MsgSubmitWorkreportsResponse>;
}
export declare const MsgServiceName = "enreach.workload.Msg";
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
    SubmitWorkreports(request: MsgSubmitWorkreports): Promise<MsgSubmitWorkreportsResponse>;
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
