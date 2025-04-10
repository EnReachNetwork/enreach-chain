import _m0 from "protobufjs/minimal";
import { CheatStatusCR } from "./cheat_status";
import { ReputationPointChangeRawData } from "./reputationpoint";
import { NodeScore } from "./workreport";
export declare const protobufPackage = "enreach.workload";
/** /////////////////////////////////////////////////////////////// */
export interface MsgUpdateParam {
    signer: string;
    paramKey: string;
    paramValue: string;
}
export interface MsgUpdateParamResponse {
}
/** //////////////// */
export interface MsgSubmitWorkreports {
    managerAccount: string;
    epoch: number;
    nodeScores: NodeScore[];
}
export interface MsgSubmitWorkreportsResponse {
}
/** /////////////// */
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
/** //////////////// */
export interface MsgSubmitReputationPointChangeData {
    managerAccount: string;
    era: number;
    nodePoints: ReputationPointChangeRawData[];
}
export interface MsgSubmitReputationPointChangeDataResponse {
}
export interface MsgSubmitCheatStatusCR {
    managerAccount: string;
    era: number;
    nodeDatas: CheatStatusCR[];
}
export interface MsgSubmitCheatStatusCRResponse {
}
export declare const MsgUpdateParam: {
    encode(message: MsgUpdateParam, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParam;
    fromJSON(object: any): MsgUpdateParam;
    toJSON(message: MsgUpdateParam): unknown;
    create<I extends Exact<DeepPartial<MsgUpdateParam>, I>>(base?: I): MsgUpdateParam;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateParam>, I>>(object: I): MsgUpdateParam;
};
export declare const MsgUpdateParamResponse: {
    encode(_: MsgUpdateParamResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamResponse;
    fromJSON(_: any): MsgUpdateParamResponse;
    toJSON(_: MsgUpdateParamResponse): unknown;
    create<I extends Exact<DeepPartial<MsgUpdateParamResponse>, I>>(base?: I): MsgUpdateParamResponse;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateParamResponse>, I>>(_: I): MsgUpdateParamResponse;
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
export declare const MsgSubmitCheatStatusCR: {
    encode(message: MsgSubmitCheatStatusCR, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitCheatStatusCR;
    fromJSON(object: any): MsgSubmitCheatStatusCR;
    toJSON(message: MsgSubmitCheatStatusCR): unknown;
    create<I extends Exact<DeepPartial<MsgSubmitCheatStatusCR>, I>>(base?: I): MsgSubmitCheatStatusCR;
    fromPartial<I extends Exact<DeepPartial<MsgSubmitCheatStatusCR>, I>>(object: I): MsgSubmitCheatStatusCR;
};
export declare const MsgSubmitCheatStatusCRResponse: {
    encode(_: MsgSubmitCheatStatusCRResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitCheatStatusCRResponse;
    fromJSON(_: any): MsgSubmitCheatStatusCRResponse;
    toJSON(_: MsgSubmitCheatStatusCRResponse): unknown;
    create<I extends Exact<DeepPartial<MsgSubmitCheatStatusCRResponse>, I>>(base?: I): MsgSubmitCheatStatusCRResponse;
    fromPartial<I extends Exact<DeepPartial<MsgSubmitCheatStatusCRResponse>, I>>(_: I): MsgSubmitCheatStatusCRResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /**
     * UpdateParams defines a (governance) operation for updating the module
     * parameters. The authority defaults to the x/gov module account.
     */
    UpdateParam(request: MsgUpdateParam): Promise<MsgUpdateParamResponse>;
    SubmitWorkreports(request: MsgSubmitWorkreports): Promise<MsgSubmitWorkreportsResponse>;
    CreateSuperior(request: MsgCreateSuperior): Promise<MsgCreateSuperiorResponse>;
    UpdateSuperior(request: MsgUpdateSuperior): Promise<MsgUpdateSuperiorResponse>;
    SubmitReputationPointChangeData(request: MsgSubmitReputationPointChangeData): Promise<MsgSubmitReputationPointChangeDataResponse>;
    SubmitCheatStatusCR(request: MsgSubmitCheatStatusCR): Promise<MsgSubmitCheatStatusCRResponse>;
}
export declare const MsgServiceName = "enreach.workload.Msg";
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    UpdateParam(request: MsgUpdateParam): Promise<MsgUpdateParamResponse>;
    SubmitWorkreports(request: MsgSubmitWorkreports): Promise<MsgSubmitWorkreportsResponse>;
    CreateSuperior(request: MsgCreateSuperior): Promise<MsgCreateSuperiorResponse>;
    UpdateSuperior(request: MsgUpdateSuperior): Promise<MsgUpdateSuperiorResponse>;
    SubmitReputationPointChangeData(request: MsgSubmitReputationPointChangeData): Promise<MsgSubmitReputationPointChangeDataResponse>;
    SubmitCheatStatusCR(request: MsgSubmitCheatStatusCR): Promise<MsgSubmitCheatStatusCRResponse>;
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
