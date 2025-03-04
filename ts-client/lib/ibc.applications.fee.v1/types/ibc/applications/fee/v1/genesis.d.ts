import _m0 from "protobufjs/minimal";
import { PacketId } from "../../../core/channel/v1/channel";
import { IdentifiedPacketFees } from "./fee";
export declare const protobufPackage = "ibc.applications.fee.v1";
/** GenesisState defines the ICS29 fee middleware genesis state */
export interface GenesisState {
    /** list of identified packet fees */
    identifiedFees: IdentifiedPacketFees[];
    /** list of fee enabled channels */
    feeEnabledChannels: FeeEnabledChannel[];
    /** list of registered payees */
    registeredPayees: RegisteredPayee[];
    /** list of registered counterparty payees */
    registeredCounterpartyPayees: RegisteredCounterpartyPayee[];
    /** list of forward relayer addresses */
    forwardRelayers: ForwardRelayerAddress[];
}
/** FeeEnabledChannel contains the PortID & ChannelID for a fee enabled channel */
export interface FeeEnabledChannel {
    /** unique port identifier */
    portId: string;
    /** unique channel identifier */
    channelId: string;
}
/** RegisteredPayee contains the relayer address and payee address for a specific channel */
export interface RegisteredPayee {
    /** unique channel identifier */
    channelId: string;
    /** the relayer address */
    relayer: string;
    /** the payee address */
    payee: string;
}
/**
 * RegisteredCounterpartyPayee contains the relayer address and counterparty payee address for a specific channel (used
 * for recv fee distribution)
 */
export interface RegisteredCounterpartyPayee {
    /** unique channel identifier */
    channelId: string;
    /** the relayer address */
    relayer: string;
    /** the counterparty payee address */
    counterpartyPayee: string;
}
/** ForwardRelayerAddress contains the forward relayer address and PacketId used for async acknowledgements */
export interface ForwardRelayerAddress {
    /** the forward relayer address */
    address: string;
    /** unique packet identifer comprised of the channel ID, port ID and sequence */
    packetId: PacketId | undefined;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    create<I extends Exact<DeepPartial<GenesisState>, I>>(base?: I): GenesisState;
    fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState;
};
export declare const FeeEnabledChannel: {
    encode(message: FeeEnabledChannel, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FeeEnabledChannel;
    fromJSON(object: any): FeeEnabledChannel;
    toJSON(message: FeeEnabledChannel): unknown;
    create<I extends Exact<DeepPartial<FeeEnabledChannel>, I>>(base?: I): FeeEnabledChannel;
    fromPartial<I extends Exact<DeepPartial<FeeEnabledChannel>, I>>(object: I): FeeEnabledChannel;
};
export declare const RegisteredPayee: {
    encode(message: RegisteredPayee, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisteredPayee;
    fromJSON(object: any): RegisteredPayee;
    toJSON(message: RegisteredPayee): unknown;
    create<I extends Exact<DeepPartial<RegisteredPayee>, I>>(base?: I): RegisteredPayee;
    fromPartial<I extends Exact<DeepPartial<RegisteredPayee>, I>>(object: I): RegisteredPayee;
};
export declare const RegisteredCounterpartyPayee: {
    encode(message: RegisteredCounterpartyPayee, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisteredCounterpartyPayee;
    fromJSON(object: any): RegisteredCounterpartyPayee;
    toJSON(message: RegisteredCounterpartyPayee): unknown;
    create<I extends Exact<DeepPartial<RegisteredCounterpartyPayee>, I>>(base?: I): RegisteredCounterpartyPayee;
    fromPartial<I extends Exact<DeepPartial<RegisteredCounterpartyPayee>, I>>(object: I): RegisteredCounterpartyPayee;
};
export declare const ForwardRelayerAddress: {
    encode(message: ForwardRelayerAddress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ForwardRelayerAddress;
    fromJSON(object: any): ForwardRelayerAddress;
    toJSON(message: ForwardRelayerAddress): unknown;
    create<I extends Exact<DeepPartial<ForwardRelayerAddress>, I>>(base?: I): ForwardRelayerAddress;
    fromPartial<I extends Exact<DeepPartial<ForwardRelayerAddress>, I>>(object: I): ForwardRelayerAddress;
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
