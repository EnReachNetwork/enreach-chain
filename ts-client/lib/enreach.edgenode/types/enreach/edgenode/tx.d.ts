import _m0 from "protobufjs/minimal";
import { Params } from "./params";
export declare const protobufPackage = "enreach.edgenode";
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
export interface MsgCreateUser {
    signer: string;
    userID: string;
}
export interface MsgCreateUserResponse {
}
export interface MsgBindUserEVMAccount {
    signer: string;
    userID: string;
    evmAccount: string;
    evmPubkey: Uint8Array;
    evmSignature: Uint8Array;
}
export interface MsgBindUserEVMAccountResponse {
}
export interface MsgRegisterNode {
    signer: string;
    nodeID: string;
    deviceType: string;
    regionCode: string;
}
export interface MsgRegisterNodeResponse {
}
export interface MsgBindAndActivateNode {
    signer: string;
    nodeID: string;
    userID: string;
}
export interface MsgBindAndActivateNodeResponse {
}
export interface MsgUnbindNode {
    signer: string;
    nodeID: string;
    userID: string;
}
export interface MsgUnbindNodeResponse {
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
export declare const MsgCreateUser: {
    encode(message: MsgCreateUser, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateUser;
    fromJSON(object: any): MsgCreateUser;
    toJSON(message: MsgCreateUser): unknown;
    create<I extends Exact<DeepPartial<MsgCreateUser>, I>>(base?: I): MsgCreateUser;
    fromPartial<I extends Exact<DeepPartial<MsgCreateUser>, I>>(object: I): MsgCreateUser;
};
export declare const MsgCreateUserResponse: {
    encode(_: MsgCreateUserResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateUserResponse;
    fromJSON(_: any): MsgCreateUserResponse;
    toJSON(_: MsgCreateUserResponse): unknown;
    create<I extends Exact<DeepPartial<MsgCreateUserResponse>, I>>(base?: I): MsgCreateUserResponse;
    fromPartial<I extends Exact<DeepPartial<MsgCreateUserResponse>, I>>(_: I): MsgCreateUserResponse;
};
export declare const MsgBindUserEVMAccount: {
    encode(message: MsgBindUserEVMAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBindUserEVMAccount;
    fromJSON(object: any): MsgBindUserEVMAccount;
    toJSON(message: MsgBindUserEVMAccount): unknown;
    create<I extends Exact<DeepPartial<MsgBindUserEVMAccount>, I>>(base?: I): MsgBindUserEVMAccount;
    fromPartial<I extends Exact<DeepPartial<MsgBindUserEVMAccount>, I>>(object: I): MsgBindUserEVMAccount;
};
export declare const MsgBindUserEVMAccountResponse: {
    encode(_: MsgBindUserEVMAccountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBindUserEVMAccountResponse;
    fromJSON(_: any): MsgBindUserEVMAccountResponse;
    toJSON(_: MsgBindUserEVMAccountResponse): unknown;
    create<I extends Exact<DeepPartial<MsgBindUserEVMAccountResponse>, I>>(base?: I): MsgBindUserEVMAccountResponse;
    fromPartial<I extends Exact<DeepPartial<MsgBindUserEVMAccountResponse>, I>>(_: I): MsgBindUserEVMAccountResponse;
};
export declare const MsgRegisterNode: {
    encode(message: MsgRegisterNode, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterNode;
    fromJSON(object: any): MsgRegisterNode;
    toJSON(message: MsgRegisterNode): unknown;
    create<I extends Exact<DeepPartial<MsgRegisterNode>, I>>(base?: I): MsgRegisterNode;
    fromPartial<I extends Exact<DeepPartial<MsgRegisterNode>, I>>(object: I): MsgRegisterNode;
};
export declare const MsgRegisterNodeResponse: {
    encode(_: MsgRegisterNodeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterNodeResponse;
    fromJSON(_: any): MsgRegisterNodeResponse;
    toJSON(_: MsgRegisterNodeResponse): unknown;
    create<I extends Exact<DeepPartial<MsgRegisterNodeResponse>, I>>(base?: I): MsgRegisterNodeResponse;
    fromPartial<I extends Exact<DeepPartial<MsgRegisterNodeResponse>, I>>(_: I): MsgRegisterNodeResponse;
};
export declare const MsgBindAndActivateNode: {
    encode(message: MsgBindAndActivateNode, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBindAndActivateNode;
    fromJSON(object: any): MsgBindAndActivateNode;
    toJSON(message: MsgBindAndActivateNode): unknown;
    create<I extends Exact<DeepPartial<MsgBindAndActivateNode>, I>>(base?: I): MsgBindAndActivateNode;
    fromPartial<I extends Exact<DeepPartial<MsgBindAndActivateNode>, I>>(object: I): MsgBindAndActivateNode;
};
export declare const MsgBindAndActivateNodeResponse: {
    encode(_: MsgBindAndActivateNodeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBindAndActivateNodeResponse;
    fromJSON(_: any): MsgBindAndActivateNodeResponse;
    toJSON(_: MsgBindAndActivateNodeResponse): unknown;
    create<I extends Exact<DeepPartial<MsgBindAndActivateNodeResponse>, I>>(base?: I): MsgBindAndActivateNodeResponse;
    fromPartial<I extends Exact<DeepPartial<MsgBindAndActivateNodeResponse>, I>>(_: I): MsgBindAndActivateNodeResponse;
};
export declare const MsgUnbindNode: {
    encode(message: MsgUnbindNode, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnbindNode;
    fromJSON(object: any): MsgUnbindNode;
    toJSON(message: MsgUnbindNode): unknown;
    create<I extends Exact<DeepPartial<MsgUnbindNode>, I>>(base?: I): MsgUnbindNode;
    fromPartial<I extends Exact<DeepPartial<MsgUnbindNode>, I>>(object: I): MsgUnbindNode;
};
export declare const MsgUnbindNodeResponse: {
    encode(_: MsgUnbindNodeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnbindNodeResponse;
    fromJSON(_: any): MsgUnbindNodeResponse;
    toJSON(_: MsgUnbindNodeResponse): unknown;
    create<I extends Exact<DeepPartial<MsgUnbindNodeResponse>, I>>(base?: I): MsgUnbindNodeResponse;
    fromPartial<I extends Exact<DeepPartial<MsgUnbindNodeResponse>, I>>(_: I): MsgUnbindNodeResponse;
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
    CreateUser(request: MsgCreateUser): Promise<MsgCreateUserResponse>;
    BindUserEVMAccount(request: MsgBindUserEVMAccount): Promise<MsgBindUserEVMAccountResponse>;
    RegisterNode(request: MsgRegisterNode): Promise<MsgRegisterNodeResponse>;
    BindAndActivateNode(request: MsgBindAndActivateNode): Promise<MsgBindAndActivateNodeResponse>;
    UnbindNode(request: MsgUnbindNode): Promise<MsgUnbindNodeResponse>;
    CreateSuperior(request: MsgCreateSuperior): Promise<MsgCreateSuperiorResponse>;
    UpdateSuperior(request: MsgUpdateSuperior): Promise<MsgUpdateSuperiorResponse>;
}
export declare const MsgServiceName = "enreach.edgenode.Msg";
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
    CreateUser(request: MsgCreateUser): Promise<MsgCreateUserResponse>;
    BindUserEVMAccount(request: MsgBindUserEVMAccount): Promise<MsgBindUserEVMAccountResponse>;
    RegisterNode(request: MsgRegisterNode): Promise<MsgRegisterNodeResponse>;
    BindAndActivateNode(request: MsgBindAndActivateNode): Promise<MsgBindAndActivateNodeResponse>;
    UnbindNode(request: MsgUnbindNode): Promise<MsgUnbindNodeResponse>;
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
