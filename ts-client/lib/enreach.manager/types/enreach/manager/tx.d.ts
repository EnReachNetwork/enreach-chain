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
export interface MsgCreateOperator {
    operatorAccount: string;
    name: string;
    description: string;
    websiteUrl: string;
}
export interface MsgCreateOperatorResponse {
}
export interface MsgBindOperatorManagerAccount {
    operatorAccount: string;
    managerAccount: string;
    managerSignature: Uint8Array;
    forceUnbind: boolean;
}
export interface MsgBindOperatorManagerAccountResponse {
}
export interface MsgSetManagerRegion {
    operatorAccount: string;
    regionCode: string;
}
export interface MsgSetManagerRegionResponse {
}
export interface MsgUpdateManagerConnParams {
    operatorAccount: string;
    hostAddress: string;
    managerHTTPPort: number;
    managerWSPort: number;
    trackerPort: number;
    chainAPIPort: number;
    chainRPCPort: number;
}
export interface MsgUpdateManagerConnParamsResponse {
}
export interface MsgActivateManager {
    operatorAccount: string;
    license: string;
}
export interface MsgActivateManagerResponse {
}
export interface MsgBindOperatorEVMAccount {
    operatorAccount: string;
    evmAccount: string;
    evmSignature: Uint8Array;
}
export interface MsgBindOperatorEVMAccountResponse {
}
export interface MsgUpdateOperatorBasicInfo {
    operatorAccount: string;
    name: string;
    description: string;
    websiteUrl: string;
}
export interface MsgUpdateOperatorBasicInfoResponse {
}
export interface MsgRegisterManager {
    managerAccount: string;
    hostAddress: string;
    managerHTTPPort: number;
    managerWSPort: number;
    trackerPort: number;
    chainAPIPort: number;
    chainRPCPort: number;
}
export interface MsgRegisterManagerResponse {
}
export interface MsgGoWorking {
    managerAccount: string;
}
export interface MsgGoWorkingResponse {
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
export declare const MsgCreateOperator: {
    encode(message: MsgCreateOperator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateOperator;
    fromJSON(object: any): MsgCreateOperator;
    toJSON(message: MsgCreateOperator): unknown;
    create<I extends Exact<DeepPartial<MsgCreateOperator>, I>>(base?: I): MsgCreateOperator;
    fromPartial<I extends Exact<DeepPartial<MsgCreateOperator>, I>>(object: I): MsgCreateOperator;
};
export declare const MsgCreateOperatorResponse: {
    encode(_: MsgCreateOperatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateOperatorResponse;
    fromJSON(_: any): MsgCreateOperatorResponse;
    toJSON(_: MsgCreateOperatorResponse): unknown;
    create<I extends Exact<DeepPartial<MsgCreateOperatorResponse>, I>>(base?: I): MsgCreateOperatorResponse;
    fromPartial<I extends Exact<DeepPartial<MsgCreateOperatorResponse>, I>>(_: I): MsgCreateOperatorResponse;
};
export declare const MsgBindOperatorManagerAccount: {
    encode(message: MsgBindOperatorManagerAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBindOperatorManagerAccount;
    fromJSON(object: any): MsgBindOperatorManagerAccount;
    toJSON(message: MsgBindOperatorManagerAccount): unknown;
    create<I extends Exact<DeepPartial<MsgBindOperatorManagerAccount>, I>>(base?: I): MsgBindOperatorManagerAccount;
    fromPartial<I extends Exact<DeepPartial<MsgBindOperatorManagerAccount>, I>>(object: I): MsgBindOperatorManagerAccount;
};
export declare const MsgBindOperatorManagerAccountResponse: {
    encode(_: MsgBindOperatorManagerAccountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBindOperatorManagerAccountResponse;
    fromJSON(_: any): MsgBindOperatorManagerAccountResponse;
    toJSON(_: MsgBindOperatorManagerAccountResponse): unknown;
    create<I extends Exact<DeepPartial<MsgBindOperatorManagerAccountResponse>, I>>(base?: I): MsgBindOperatorManagerAccountResponse;
    fromPartial<I extends Exact<DeepPartial<MsgBindOperatorManagerAccountResponse>, I>>(_: I): MsgBindOperatorManagerAccountResponse;
};
export declare const MsgSetManagerRegion: {
    encode(message: MsgSetManagerRegion, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetManagerRegion;
    fromJSON(object: any): MsgSetManagerRegion;
    toJSON(message: MsgSetManagerRegion): unknown;
    create<I extends Exact<DeepPartial<MsgSetManagerRegion>, I>>(base?: I): MsgSetManagerRegion;
    fromPartial<I extends Exact<DeepPartial<MsgSetManagerRegion>, I>>(object: I): MsgSetManagerRegion;
};
export declare const MsgSetManagerRegionResponse: {
    encode(_: MsgSetManagerRegionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetManagerRegionResponse;
    fromJSON(_: any): MsgSetManagerRegionResponse;
    toJSON(_: MsgSetManagerRegionResponse): unknown;
    create<I extends Exact<DeepPartial<MsgSetManagerRegionResponse>, I>>(base?: I): MsgSetManagerRegionResponse;
    fromPartial<I extends Exact<DeepPartial<MsgSetManagerRegionResponse>, I>>(_: I): MsgSetManagerRegionResponse;
};
export declare const MsgUpdateManagerConnParams: {
    encode(message: MsgUpdateManagerConnParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateManagerConnParams;
    fromJSON(object: any): MsgUpdateManagerConnParams;
    toJSON(message: MsgUpdateManagerConnParams): unknown;
    create<I extends Exact<DeepPartial<MsgUpdateManagerConnParams>, I>>(base?: I): MsgUpdateManagerConnParams;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateManagerConnParams>, I>>(object: I): MsgUpdateManagerConnParams;
};
export declare const MsgUpdateManagerConnParamsResponse: {
    encode(_: MsgUpdateManagerConnParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateManagerConnParamsResponse;
    fromJSON(_: any): MsgUpdateManagerConnParamsResponse;
    toJSON(_: MsgUpdateManagerConnParamsResponse): unknown;
    create<I extends Exact<DeepPartial<MsgUpdateManagerConnParamsResponse>, I>>(base?: I): MsgUpdateManagerConnParamsResponse;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateManagerConnParamsResponse>, I>>(_: I): MsgUpdateManagerConnParamsResponse;
};
export declare const MsgActivateManager: {
    encode(message: MsgActivateManager, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgActivateManager;
    fromJSON(object: any): MsgActivateManager;
    toJSON(message: MsgActivateManager): unknown;
    create<I extends Exact<DeepPartial<MsgActivateManager>, I>>(base?: I): MsgActivateManager;
    fromPartial<I extends Exact<DeepPartial<MsgActivateManager>, I>>(object: I): MsgActivateManager;
};
export declare const MsgActivateManagerResponse: {
    encode(_: MsgActivateManagerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgActivateManagerResponse;
    fromJSON(_: any): MsgActivateManagerResponse;
    toJSON(_: MsgActivateManagerResponse): unknown;
    create<I extends Exact<DeepPartial<MsgActivateManagerResponse>, I>>(base?: I): MsgActivateManagerResponse;
    fromPartial<I extends Exact<DeepPartial<MsgActivateManagerResponse>, I>>(_: I): MsgActivateManagerResponse;
};
export declare const MsgBindOperatorEVMAccount: {
    encode(message: MsgBindOperatorEVMAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBindOperatorEVMAccount;
    fromJSON(object: any): MsgBindOperatorEVMAccount;
    toJSON(message: MsgBindOperatorEVMAccount): unknown;
    create<I extends Exact<DeepPartial<MsgBindOperatorEVMAccount>, I>>(base?: I): MsgBindOperatorEVMAccount;
    fromPartial<I extends Exact<DeepPartial<MsgBindOperatorEVMAccount>, I>>(object: I): MsgBindOperatorEVMAccount;
};
export declare const MsgBindOperatorEVMAccountResponse: {
    encode(_: MsgBindOperatorEVMAccountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBindOperatorEVMAccountResponse;
    fromJSON(_: any): MsgBindOperatorEVMAccountResponse;
    toJSON(_: MsgBindOperatorEVMAccountResponse): unknown;
    create<I extends Exact<DeepPartial<MsgBindOperatorEVMAccountResponse>, I>>(base?: I): MsgBindOperatorEVMAccountResponse;
    fromPartial<I extends Exact<DeepPartial<MsgBindOperatorEVMAccountResponse>, I>>(_: I): MsgBindOperatorEVMAccountResponse;
};
export declare const MsgUpdateOperatorBasicInfo: {
    encode(message: MsgUpdateOperatorBasicInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateOperatorBasicInfo;
    fromJSON(object: any): MsgUpdateOperatorBasicInfo;
    toJSON(message: MsgUpdateOperatorBasicInfo): unknown;
    create<I extends Exact<DeepPartial<MsgUpdateOperatorBasicInfo>, I>>(base?: I): MsgUpdateOperatorBasicInfo;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateOperatorBasicInfo>, I>>(object: I): MsgUpdateOperatorBasicInfo;
};
export declare const MsgUpdateOperatorBasicInfoResponse: {
    encode(_: MsgUpdateOperatorBasicInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateOperatorBasicInfoResponse;
    fromJSON(_: any): MsgUpdateOperatorBasicInfoResponse;
    toJSON(_: MsgUpdateOperatorBasicInfoResponse): unknown;
    create<I extends Exact<DeepPartial<MsgUpdateOperatorBasicInfoResponse>, I>>(base?: I): MsgUpdateOperatorBasicInfoResponse;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateOperatorBasicInfoResponse>, I>>(_: I): MsgUpdateOperatorBasicInfoResponse;
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
    encode(_: MsgRegisterManagerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterManagerResponse;
    fromJSON(_: any): MsgRegisterManagerResponse;
    toJSON(_: MsgRegisterManagerResponse): unknown;
    create<I extends Exact<DeepPartial<MsgRegisterManagerResponse>, I>>(base?: I): MsgRegisterManagerResponse;
    fromPartial<I extends Exact<DeepPartial<MsgRegisterManagerResponse>, I>>(_: I): MsgRegisterManagerResponse;
};
export declare const MsgGoWorking: {
    encode(message: MsgGoWorking, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgGoWorking;
    fromJSON(object: any): MsgGoWorking;
    toJSON(message: MsgGoWorking): unknown;
    create<I extends Exact<DeepPartial<MsgGoWorking>, I>>(base?: I): MsgGoWorking;
    fromPartial<I extends Exact<DeepPartial<MsgGoWorking>, I>>(object: I): MsgGoWorking;
};
export declare const MsgGoWorkingResponse: {
    encode(_: MsgGoWorkingResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgGoWorkingResponse;
    fromJSON(_: any): MsgGoWorkingResponse;
    toJSON(_: MsgGoWorkingResponse): unknown;
    create<I extends Exact<DeepPartial<MsgGoWorkingResponse>, I>>(base?: I): MsgGoWorkingResponse;
    fromPartial<I extends Exact<DeepPartial<MsgGoWorkingResponse>, I>>(_: I): MsgGoWorkingResponse;
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
    CreateOperator(request: MsgCreateOperator): Promise<MsgCreateOperatorResponse>;
    BindOperatorManagerAccount(request: MsgBindOperatorManagerAccount): Promise<MsgBindOperatorManagerAccountResponse>;
    SetManagerRegion(request: MsgSetManagerRegion): Promise<MsgSetManagerRegionResponse>;
    UpdateManagerConnParams(request: MsgUpdateManagerConnParams): Promise<MsgUpdateManagerConnParamsResponse>;
    ActivateManager(request: MsgActivateManager): Promise<MsgActivateManagerResponse>;
    BindOperatorEVMAccount(request: MsgBindOperatorEVMAccount): Promise<MsgBindOperatorEVMAccountResponse>;
    UpdateOperatorBasicInfo(request: MsgUpdateOperatorBasicInfo): Promise<MsgUpdateOperatorBasicInfoResponse>;
    RegisterManager(request: MsgRegisterManager): Promise<MsgRegisterManagerResponse>;
    GoWorking(request: MsgGoWorking): Promise<MsgGoWorkingResponse>;
    CreateSuperior(request: MsgCreateSuperior): Promise<MsgCreateSuperiorResponse>;
    UpdateSuperior(request: MsgUpdateSuperior): Promise<MsgUpdateSuperiorResponse>;
}
export declare const MsgServiceName = "enreach.manager.Msg";
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
    CreateOperator(request: MsgCreateOperator): Promise<MsgCreateOperatorResponse>;
    BindOperatorManagerAccount(request: MsgBindOperatorManagerAccount): Promise<MsgBindOperatorManagerAccountResponse>;
    SetManagerRegion(request: MsgSetManagerRegion): Promise<MsgSetManagerRegionResponse>;
    UpdateManagerConnParams(request: MsgUpdateManagerConnParams): Promise<MsgUpdateManagerConnParamsResponse>;
    ActivateManager(request: MsgActivateManager): Promise<MsgActivateManagerResponse>;
    BindOperatorEVMAccount(request: MsgBindOperatorEVMAccount): Promise<MsgBindOperatorEVMAccountResponse>;
    UpdateOperatorBasicInfo(request: MsgUpdateOperatorBasicInfo): Promise<MsgUpdateOperatorBasicInfoResponse>;
    RegisterManager(request: MsgRegisterManager): Promise<MsgRegisterManagerResponse>;
    GoWorking(request: MsgGoWorking): Promise<MsgGoWorkingResponse>;
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
