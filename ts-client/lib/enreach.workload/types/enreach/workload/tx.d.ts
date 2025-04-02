import _m0 from "protobufjs/minimal";
import { Params } from "./params";
import { ReputationPointChangeRawData } from "./reputationpoint";
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
export interface MsgUpdateWorkreportProcessBatchSize {
    signer: string;
    batchSize: number;
}
export interface MsgUpdateWorkreportProcessBatchSizeResponse {
}
export interface MsgUpdateHistoryEpochDataDepth {
    signer: string;
    depth: number;
}
export interface MsgUpdateHistoryEpochDataDepthResponse {
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
export interface MsgSubmitReputationPointChangeData {
    managerAccount: string;
    era: number;
    nodePoints: ReputationPointChangeRawData[];
}
export interface MsgSubmitReputationPointChangeDataResponse {
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
export declare const MsgUpdateWorkreportProcessBatchSize: {
    encode(message: MsgUpdateWorkreportProcessBatchSize, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateWorkreportProcessBatchSize;
    fromJSON(object: any): MsgUpdateWorkreportProcessBatchSize;
    toJSON(message: MsgUpdateWorkreportProcessBatchSize): unknown;
    create<I extends Exact<DeepPartial<MsgUpdateWorkreportProcessBatchSize>, I>>(base?: I): MsgUpdateWorkreportProcessBatchSize;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateWorkreportProcessBatchSize>, I>>(object: I): MsgUpdateWorkreportProcessBatchSize;
};
export declare const MsgUpdateWorkreportProcessBatchSizeResponse: {
    encode(_: MsgUpdateWorkreportProcessBatchSizeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateWorkreportProcessBatchSizeResponse;
    fromJSON(_: any): MsgUpdateWorkreportProcessBatchSizeResponse;
    toJSON(_: MsgUpdateWorkreportProcessBatchSizeResponse): unknown;
    create<I extends Exact<DeepPartial<MsgUpdateWorkreportProcessBatchSizeResponse>, I>>(base?: I): MsgUpdateWorkreportProcessBatchSizeResponse;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateWorkreportProcessBatchSizeResponse>, I>>(_: I): MsgUpdateWorkreportProcessBatchSizeResponse;
};
export declare const MsgUpdateHistoryEpochDataDepth: {
    encode(message: MsgUpdateHistoryEpochDataDepth, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateHistoryEpochDataDepth;
    fromJSON(object: any): MsgUpdateHistoryEpochDataDepth;
    toJSON(message: MsgUpdateHistoryEpochDataDepth): unknown;
    create<I extends Exact<DeepPartial<MsgUpdateHistoryEpochDataDepth>, I>>(base?: I): MsgUpdateHistoryEpochDataDepth;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateHistoryEpochDataDepth>, I>>(object: I): MsgUpdateHistoryEpochDataDepth;
};
export declare const MsgUpdateHistoryEpochDataDepthResponse: {
    encode(_: MsgUpdateHistoryEpochDataDepthResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateHistoryEpochDataDepthResponse;
    fromJSON(_: any): MsgUpdateHistoryEpochDataDepthResponse;
    toJSON(_: MsgUpdateHistoryEpochDataDepthResponse): unknown;
    create<I extends Exact<DeepPartial<MsgUpdateHistoryEpochDataDepthResponse>, I>>(base?: I): MsgUpdateHistoryEpochDataDepthResponse;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateHistoryEpochDataDepthResponse>, I>>(_: I): MsgUpdateHistoryEpochDataDepthResponse;
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
export declare const MsgSubmitReputationPointChangeData: {
    encode(message: MsgSubmitReputationPointChangeData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitReputationPointChangeData;
    fromJSON(object: any): MsgSubmitReputationPointChangeData;
    toJSON(message: MsgSubmitReputationPointChangeData): unknown;
    create<I extends Exact<DeepPartial<MsgSubmitReputationPointChangeData>, I>>(base?: I): MsgSubmitReputationPointChangeData;
    fromPartial<I extends Exact<DeepPartial<MsgSubmitReputationPointChangeData>, I>>(object: I): MsgSubmitReputationPointChangeData;
};
export declare const MsgSubmitReputationPointChangeDataResponse: {
    encode(_: MsgSubmitReputationPointChangeDataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitReputationPointChangeDataResponse;
    fromJSON(_: any): MsgSubmitReputationPointChangeDataResponse;
    toJSON(_: MsgSubmitReputationPointChangeDataResponse): unknown;
    create<I extends Exact<DeepPartial<MsgSubmitReputationPointChangeDataResponse>, I>>(base?: I): MsgSubmitReputationPointChangeDataResponse;
    fromPartial<I extends Exact<DeepPartial<MsgSubmitReputationPointChangeDataResponse>, I>>(_: I): MsgSubmitReputationPointChangeDataResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /**
     * UpdateParams defines a (governance) operation for updating the module
     * parameters. The authority defaults to the x/gov module account.
     */
    UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
    SubmitWorkreports(request: MsgSubmitWorkreports): Promise<MsgSubmitWorkreportsResponse>;
    UpdateWorkreportProcessBatchSize(request: MsgUpdateWorkreportProcessBatchSize): Promise<MsgUpdateWorkreportProcessBatchSizeResponse>;
    UpdateHistoryEpochDataDepth(request: MsgUpdateHistoryEpochDataDepth): Promise<MsgUpdateHistoryEpochDataDepthResponse>;
    CreateSuperior(request: MsgCreateSuperior): Promise<MsgCreateSuperiorResponse>;
    UpdateSuperior(request: MsgUpdateSuperior): Promise<MsgUpdateSuperiorResponse>;
    SubmitReputationPointChangeData(request: MsgSubmitReputationPointChangeData): Promise<MsgSubmitReputationPointChangeDataResponse>;
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
    UpdateWorkreportProcessBatchSize(request: MsgUpdateWorkreportProcessBatchSize): Promise<MsgUpdateWorkreportProcessBatchSizeResponse>;
    UpdateHistoryEpochDataDepth(request: MsgUpdateHistoryEpochDataDepth): Promise<MsgUpdateHistoryEpochDataDepthResponse>;
    CreateSuperior(request: MsgCreateSuperior): Promise<MsgCreateSuperiorResponse>;
    UpdateSuperior(request: MsgUpdateSuperior): Promise<MsgUpdateSuperiorResponse>;
    SubmitReputationPointChangeData(request: MsgSubmitReputationPointChangeData): Promise<MsgSubmitReputationPointChangeDataResponse>;
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
