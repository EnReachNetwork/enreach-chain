import _m0 from "protobufjs/minimal";
import { PacketId } from "../../../core/channel/v1/channel";
import { Fee, PacketFee } from "./fee";
export declare const protobufPackage = "ibc.applications.fee.v1";
/** MsgRegisterPayee defines the request type for the RegisterPayee rpc */
export interface MsgRegisterPayee {
    /** unique port identifier */
    portId: string;
    /** unique channel identifier */
    channelId: string;
    /** the relayer address */
    relayer: string;
    /** the payee address */
    payee: string;
}
/** MsgRegisterPayeeResponse defines the response type for the RegisterPayee rpc */
export interface MsgRegisterPayeeResponse {
}
/** MsgRegisterCounterpartyPayee defines the request type for the RegisterCounterpartyPayee rpc */
export interface MsgRegisterCounterpartyPayee {
    /** unique port identifier */
    portId: string;
    /** unique channel identifier */
    channelId: string;
    /** the relayer address */
    relayer: string;
    /** the counterparty payee address */
    counterpartyPayee: string;
}
/** MsgRegisterCounterpartyPayeeResponse defines the response type for the RegisterCounterpartyPayee rpc */
export interface MsgRegisterCounterpartyPayeeResponse {
}
/**
 * MsgPayPacketFee defines the request type for the PayPacketFee rpc
 * This Msg can be used to pay for a packet at the next sequence send & should be combined with the Msg that will be
 * paid for
 */
export interface MsgPayPacketFee {
    /** fee encapsulates the recv, ack and timeout fees associated with an IBC packet */
    fee: Fee | undefined;
    /** the source port unique identifier */
    sourcePortId: string;
    /** the source channel unique identifer */
    sourceChannelId: string;
    /** account address to refund fee if necessary */
    signer: string;
    /** optional list of relayers permitted to the receive packet fees */
    relayers: string[];
}
/** MsgPayPacketFeeResponse defines the response type for the PayPacketFee rpc */
export interface MsgPayPacketFeeResponse {
}
/**
 * MsgPayPacketFeeAsync defines the request type for the PayPacketFeeAsync rpc
 * This Msg can be used to pay for a packet at a specified sequence (instead of the next sequence send)
 */
export interface MsgPayPacketFeeAsync {
    /** unique packet identifier comprised of the channel ID, port ID and sequence */
    packetId: PacketId | undefined;
    /** the packet fee associated with a particular IBC packet */
    packetFee: PacketFee | undefined;
}
/** MsgPayPacketFeeAsyncResponse defines the response type for the PayPacketFeeAsync rpc */
export interface MsgPayPacketFeeAsyncResponse {
}
export declare const MsgRegisterPayee: {
    encode(message: MsgRegisterPayee, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterPayee;
    fromJSON(object: any): MsgRegisterPayee;
    toJSON(message: MsgRegisterPayee): unknown;
    create<I extends Exact<DeepPartial<MsgRegisterPayee>, I>>(base?: I): MsgRegisterPayee;
    fromPartial<I extends Exact<DeepPartial<MsgRegisterPayee>, I>>(object: I): MsgRegisterPayee;
};
export declare const MsgRegisterPayeeResponse: {
    encode(_: MsgRegisterPayeeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterPayeeResponse;
    fromJSON(_: any): MsgRegisterPayeeResponse;
    toJSON(_: MsgRegisterPayeeResponse): unknown;
    create<I extends Exact<DeepPartial<MsgRegisterPayeeResponse>, I>>(base?: I): MsgRegisterPayeeResponse;
    fromPartial<I extends Exact<DeepPartial<MsgRegisterPayeeResponse>, I>>(_: I): MsgRegisterPayeeResponse;
};
export declare const MsgRegisterCounterpartyPayee: {
    encode(message: MsgRegisterCounterpartyPayee, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterCounterpartyPayee;
    fromJSON(object: any): MsgRegisterCounterpartyPayee;
    toJSON(message: MsgRegisterCounterpartyPayee): unknown;
    create<I extends Exact<DeepPartial<MsgRegisterCounterpartyPayee>, I>>(base?: I): MsgRegisterCounterpartyPayee;
    fromPartial<I extends Exact<DeepPartial<MsgRegisterCounterpartyPayee>, I>>(object: I): MsgRegisterCounterpartyPayee;
};
export declare const MsgRegisterCounterpartyPayeeResponse: {
    encode(_: MsgRegisterCounterpartyPayeeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterCounterpartyPayeeResponse;
    fromJSON(_: any): MsgRegisterCounterpartyPayeeResponse;
    toJSON(_: MsgRegisterCounterpartyPayeeResponse): unknown;
    create<I extends Exact<DeepPartial<MsgRegisterCounterpartyPayeeResponse>, I>>(base?: I): MsgRegisterCounterpartyPayeeResponse;
    fromPartial<I extends Exact<DeepPartial<MsgRegisterCounterpartyPayeeResponse>, I>>(_: I): MsgRegisterCounterpartyPayeeResponse;
};
export declare const MsgPayPacketFee: {
    encode(message: MsgPayPacketFee, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgPayPacketFee;
    fromJSON(object: any): MsgPayPacketFee;
    toJSON(message: MsgPayPacketFee): unknown;
    create<I extends Exact<DeepPartial<MsgPayPacketFee>, I>>(base?: I): MsgPayPacketFee;
    fromPartial<I extends Exact<DeepPartial<MsgPayPacketFee>, I>>(object: I): MsgPayPacketFee;
};
export declare const MsgPayPacketFeeResponse: {
    encode(_: MsgPayPacketFeeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgPayPacketFeeResponse;
    fromJSON(_: any): MsgPayPacketFeeResponse;
    toJSON(_: MsgPayPacketFeeResponse): unknown;
    create<I extends Exact<DeepPartial<MsgPayPacketFeeResponse>, I>>(base?: I): MsgPayPacketFeeResponse;
    fromPartial<I extends Exact<DeepPartial<MsgPayPacketFeeResponse>, I>>(_: I): MsgPayPacketFeeResponse;
};
export declare const MsgPayPacketFeeAsync: {
    encode(message: MsgPayPacketFeeAsync, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgPayPacketFeeAsync;
    fromJSON(object: any): MsgPayPacketFeeAsync;
    toJSON(message: MsgPayPacketFeeAsync): unknown;
    create<I extends Exact<DeepPartial<MsgPayPacketFeeAsync>, I>>(base?: I): MsgPayPacketFeeAsync;
    fromPartial<I extends Exact<DeepPartial<MsgPayPacketFeeAsync>, I>>(object: I): MsgPayPacketFeeAsync;
};
export declare const MsgPayPacketFeeAsyncResponse: {
    encode(_: MsgPayPacketFeeAsyncResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgPayPacketFeeAsyncResponse;
    fromJSON(_: any): MsgPayPacketFeeAsyncResponse;
    toJSON(_: MsgPayPacketFeeAsyncResponse): unknown;
    create<I extends Exact<DeepPartial<MsgPayPacketFeeAsyncResponse>, I>>(base?: I): MsgPayPacketFeeAsyncResponse;
    fromPartial<I extends Exact<DeepPartial<MsgPayPacketFeeAsyncResponse>, I>>(_: I): MsgPayPacketFeeAsyncResponse;
};
/** Msg defines the ICS29 Msg service. */
export interface Msg {
    /**
     * RegisterPayee defines a rpc handler method for MsgRegisterPayee
     * RegisterPayee is called by the relayer on each channelEnd and allows them to set an optional
     * payee to which reverse and timeout relayer packet fees will be paid out. The payee should be registered on
     * the source chain from which packets originate as this is where fee distribution takes place. This function may be
     * called more than once by a relayer, in which case, the latest payee is always used.
     */
    RegisterPayee(request: MsgRegisterPayee): Promise<MsgRegisterPayeeResponse>;
    /**
     * RegisterCounterpartyPayee defines a rpc handler method for MsgRegisterCounterpartyPayee
     * RegisterCounterpartyPayee is called by the relayer on each channelEnd and allows them to specify the counterparty
     * payee address before relaying. This ensures they will be properly compensated for forward relaying since
     * the destination chain must include the registered counterparty payee address in the acknowledgement. This function
     * may be called more than once by a relayer, in which case, the latest counterparty payee address is always used.
     */
    RegisterCounterpartyPayee(request: MsgRegisterCounterpartyPayee): Promise<MsgRegisterCounterpartyPayeeResponse>;
    /**
     * PayPacketFee defines a rpc handler method for MsgPayPacketFee
     * PayPacketFee is an open callback that may be called by any module/user that wishes to escrow funds in order to
     * incentivize the relaying of the packet at the next sequence
     * NOTE: This method is intended to be used within a multi msg transaction, where the subsequent msg that follows
     * initiates the lifecycle of the incentivized packet
     */
    PayPacketFee(request: MsgPayPacketFee): Promise<MsgPayPacketFeeResponse>;
    /**
     * PayPacketFeeAsync defines a rpc handler method for MsgPayPacketFeeAsync
     * PayPacketFeeAsync is an open callback that may be called by any module/user that wishes to escrow funds in order to
     * incentivize the relaying of a known packet (i.e. at a particular sequence)
     */
    PayPacketFeeAsync(request: MsgPayPacketFeeAsync): Promise<MsgPayPacketFeeAsyncResponse>;
}
export declare const MsgServiceName = "ibc.applications.fee.v1.Msg";
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    RegisterPayee(request: MsgRegisterPayee): Promise<MsgRegisterPayeeResponse>;
    RegisterCounterpartyPayee(request: MsgRegisterCounterpartyPayee): Promise<MsgRegisterCounterpartyPayeeResponse>;
    PayPacketFee(request: MsgPayPacketFee): Promise<MsgPayPacketFeeResponse>;
    PayPacketFeeAsync(request: MsgPayPacketFeeAsync): Promise<MsgPayPacketFeeAsyncResponse>;
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
