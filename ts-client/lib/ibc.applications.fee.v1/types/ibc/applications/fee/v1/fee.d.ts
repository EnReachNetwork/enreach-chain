import _m0 from "protobufjs/minimal";
import { Coin } from "../../../../cosmos/base/v1beta1/coin";
import { PacketId } from "../../../core/channel/v1/channel";
export declare const protobufPackage = "ibc.applications.fee.v1";
/** Fee defines the ICS29 receive, acknowledgement and timeout fees */
export interface Fee {
    /** the packet receive fee */
    recvFee: Coin[];
    /** the packet acknowledgement fee */
    ackFee: Coin[];
    /** the packet timeout fee */
    timeoutFee: Coin[];
}
/** PacketFee contains ICS29 relayer fees, refund address and optional list of permitted relayers */
export interface PacketFee {
    /** fee encapsulates the recv, ack and timeout fees associated with an IBC packet */
    fee: Fee | undefined;
    /** the refund address for unspent fees */
    refundAddress: string;
    /** optional list of relayers permitted to receive fees */
    relayers: string[];
}
/** PacketFees contains a list of type PacketFee */
export interface PacketFees {
    /** list of packet fees */
    packetFees: PacketFee[];
}
/** IdentifiedPacketFees contains a list of type PacketFee and associated PacketId */
export interface IdentifiedPacketFees {
    /** unique packet identifier comprised of the channel ID, port ID and sequence */
    packetId: PacketId | undefined;
    /** list of packet fees */
    packetFees: PacketFee[];
}
export declare const Fee: {
    encode(message: Fee, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Fee;
    fromJSON(object: any): Fee;
    toJSON(message: Fee): unknown;
    create<I extends Exact<DeepPartial<Fee>, I>>(base?: I): Fee;
    fromPartial<I extends Exact<DeepPartial<Fee>, I>>(object: I): Fee;
};
export declare const PacketFee: {
    encode(message: PacketFee, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PacketFee;
    fromJSON(object: any): PacketFee;
    toJSON(message: PacketFee): unknown;
    create<I extends Exact<DeepPartial<PacketFee>, I>>(base?: I): PacketFee;
    fromPartial<I extends Exact<DeepPartial<PacketFee>, I>>(object: I): PacketFee;
};
export declare const PacketFees: {
    encode(message: PacketFees, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PacketFees;
    fromJSON(object: any): PacketFees;
    toJSON(message: PacketFees): unknown;
    create<I extends Exact<DeepPartial<PacketFees>, I>>(base?: I): PacketFees;
    fromPartial<I extends Exact<DeepPartial<PacketFees>, I>>(object: I): PacketFees;
};
export declare const IdentifiedPacketFees: {
    encode(message: IdentifiedPacketFees, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IdentifiedPacketFees;
    fromJSON(object: any): IdentifiedPacketFees;
    toJSON(message: IdentifiedPacketFees): unknown;
    create<I extends Exact<DeepPartial<IdentifiedPacketFees>, I>>(base?: I): IdentifiedPacketFees;
    fromPartial<I extends Exact<DeepPartial<IdentifiedPacketFees>, I>>(object: I): IdentifiedPacketFees;
};
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
