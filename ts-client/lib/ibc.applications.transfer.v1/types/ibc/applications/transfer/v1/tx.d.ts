import _m0 from "protobufjs/minimal";
import { Coin } from "../../../../cosmos/base/v1beta1/coin";
import { Height } from "../../../core/client/v1/client";
import { Params } from "./transfer";
export declare const protobufPackage = "ibc.applications.transfer.v1";
/**
 * MsgTransfer defines a msg to transfer fungible tokens (i.e Coins) between
 * ICS20 enabled chains. See ICS Spec here:
 * https://github.com/cosmos/ibc/tree/master/spec/app/ics-020-fungible-token-transfer#data-structures
 */
export interface MsgTransfer {
    /** the port on which the packet will be sent */
    sourcePort: string;
    /** the channel by which the packet will be sent */
    sourceChannel: string;
    /** the tokens to be transferred */
    token: Coin | undefined;
    /** the sender address */
    sender: string;
    /** the recipient address on the destination chain */
    receiver: string;
    /**
     * Timeout height relative to the current block height.
     * The timeout is disabled when set to 0.
     */
    timeoutHeight: Height | undefined;
    /**
     * Timeout timestamp in absolute nanoseconds since unix epoch.
     * The timeout is disabled when set to 0.
     */
    timeoutTimestamp: number;
    /** optional memo */
    memo: string;
}
/** MsgTransferResponse defines the Msg/Transfer response type. */
export interface MsgTransferResponse {
    /** sequence number of the transfer packet sent */
    sequence: number;
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
    /** signer address */
    signer: string;
    /**
     * params defines the transfer parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params: Params | undefined;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {
}
export declare const MsgTransfer: {
    encode(message: MsgTransfer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransfer;
    fromJSON(object: any): MsgTransfer;
    toJSON(message: MsgTransfer): unknown;
    create<I extends Exact<DeepPartial<MsgTransfer>, I>>(base?: I): MsgTransfer;
    fromPartial<I extends Exact<DeepPartial<MsgTransfer>, I>>(object: I): MsgTransfer;
};
export declare const MsgTransferResponse: {
    encode(message: MsgTransferResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferResponse;
    fromJSON(object: any): MsgTransferResponse;
    toJSON(message: MsgTransferResponse): unknown;
    create<I extends Exact<DeepPartial<MsgTransferResponse>, I>>(base?: I): MsgTransferResponse;
    fromPartial<I extends Exact<DeepPartial<MsgTransferResponse>, I>>(object: I): MsgTransferResponse;
};
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
/** Msg defines the ibc/transfer Msg service. */
export interface Msg {
    /** Transfer defines a rpc handler method for MsgTransfer. */
    Transfer(request: MsgTransfer): Promise<MsgTransferResponse>;
    /** UpdateParams defines a rpc handler for MsgUpdateParams. */
    UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export declare const MsgServiceName = "ibc.applications.transfer.v1.Msg";
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Transfer(request: MsgTransfer): Promise<MsgTransferResponse>;
    UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
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
