import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Coin } from "../../../../cosmos/base/v1beta1/coin";
import { PacketId } from "../../../core/channel/v1/channel";
import { IdentifiedPacketFees } from "./fee";
import { FeeEnabledChannel } from "./genesis";
export declare const protobufPackage = "ibc.applications.fee.v1";
/** QueryIncentivizedPacketsRequest defines the request type for the IncentivizedPackets rpc */
export interface QueryIncentivizedPacketsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest | undefined;
    /** block height at which to query */
    queryHeight: number;
}
/** QueryIncentivizedPacketsResponse defines the response type for the IncentivizedPackets rpc */
export interface QueryIncentivizedPacketsResponse {
    /** list of identified fees for incentivized packets */
    incentivizedPackets: IdentifiedPacketFees[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse | undefined;
}
/** QueryIncentivizedPacketRequest defines the request type for the IncentivizedPacket rpc */
export interface QueryIncentivizedPacketRequest {
    /** unique packet identifier comprised of channel ID, port ID and sequence */
    packetId: PacketId | undefined;
    /** block height at which to query */
    queryHeight: number;
}
/** QueryIncentivizedPacketsResponse defines the response type for the IncentivizedPacket rpc */
export interface QueryIncentivizedPacketResponse {
    /** the identified fees for the incentivized packet */
    incentivizedPacket: IdentifiedPacketFees | undefined;
}
/**
 * QueryIncentivizedPacketsForChannelRequest defines the request type for querying for all incentivized packets
 * for a specific channel
 */
export interface QueryIncentivizedPacketsForChannelRequest {
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest | undefined;
    portId: string;
    channelId: string;
    /** Height to query at */
    queryHeight: number;
}
/** QueryIncentivizedPacketsResponse defines the response type for the incentivized packets RPC */
export interface QueryIncentivizedPacketsForChannelResponse {
    /** Map of all incentivized_packets */
    incentivizedPackets: IdentifiedPacketFees[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse | undefined;
}
/** QueryTotalRecvFeesRequest defines the request type for the TotalRecvFees rpc */
export interface QueryTotalRecvFeesRequest {
    /** the packet identifier for the associated fees */
    packetId: PacketId | undefined;
}
/** QueryTotalRecvFeesResponse defines the response type for the TotalRecvFees rpc */
export interface QueryTotalRecvFeesResponse {
    /** the total packet receive fees */
    recvFees: Coin[];
}
/** QueryTotalAckFeesRequest defines the request type for the TotalAckFees rpc */
export interface QueryTotalAckFeesRequest {
    /** the packet identifier for the associated fees */
    packetId: PacketId | undefined;
}
/** QueryTotalAckFeesResponse defines the response type for the TotalAckFees rpc */
export interface QueryTotalAckFeesResponse {
    /** the total packet acknowledgement fees */
    ackFees: Coin[];
}
/** QueryTotalTimeoutFeesRequest defines the request type for the TotalTimeoutFees rpc */
export interface QueryTotalTimeoutFeesRequest {
    /** the packet identifier for the associated fees */
    packetId: PacketId | undefined;
}
/** QueryTotalTimeoutFeesResponse defines the response type for the TotalTimeoutFees rpc */
export interface QueryTotalTimeoutFeesResponse {
    /** the total packet timeout fees */
    timeoutFees: Coin[];
}
/** QueryPayeeRequest defines the request type for the Payee rpc */
export interface QueryPayeeRequest {
    /** unique channel identifier */
    channelId: string;
    /** the relayer address to which the distribution address is registered */
    relayer: string;
}
/** QueryPayeeResponse defines the response type for the Payee rpc */
export interface QueryPayeeResponse {
    /** the payee address to which packet fees are paid out */
    payeeAddress: string;
}
/** QueryCounterpartyPayeeRequest defines the request type for the CounterpartyPayee rpc */
export interface QueryCounterpartyPayeeRequest {
    /** unique channel identifier */
    channelId: string;
    /** the relayer address to which the counterparty is registered */
    relayer: string;
}
/** QueryCounterpartyPayeeResponse defines the response type for the CounterpartyPayee rpc */
export interface QueryCounterpartyPayeeResponse {
    /** the counterparty payee address used to compensate forward relaying */
    counterpartyPayee: string;
}
/** QueryFeeEnabledChannelsRequest defines the request type for the FeeEnabledChannels rpc */
export interface QueryFeeEnabledChannelsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest | undefined;
    /** block height at which to query */
    queryHeight: number;
}
/** QueryFeeEnabledChannelsResponse defines the response type for the FeeEnabledChannels rpc */
export interface QueryFeeEnabledChannelsResponse {
    /** list of fee enabled channels */
    feeEnabledChannels: FeeEnabledChannel[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse | undefined;
}
/** QueryFeeEnabledChannelRequest defines the request type for the FeeEnabledChannel rpc */
export interface QueryFeeEnabledChannelRequest {
    /** unique port identifier */
    portId: string;
    /** unique channel identifier */
    channelId: string;
}
/** QueryFeeEnabledChannelResponse defines the response type for the FeeEnabledChannel rpc */
export interface QueryFeeEnabledChannelResponse {
    /** boolean flag representing the fee enabled channel status */
    feeEnabled: boolean;
}
export declare const QueryIncentivizedPacketsRequest: {
    encode(message: QueryIncentivizedPacketsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIncentivizedPacketsRequest;
    fromJSON(object: any): QueryIncentivizedPacketsRequest;
    toJSON(message: QueryIncentivizedPacketsRequest): unknown;
    create<I extends Exact<DeepPartial<QueryIncentivizedPacketsRequest>, I>>(base?: I): QueryIncentivizedPacketsRequest;
    fromPartial<I extends Exact<DeepPartial<QueryIncentivizedPacketsRequest>, I>>(object: I): QueryIncentivizedPacketsRequest;
};
export declare const QueryIncentivizedPacketsResponse: {
    encode(message: QueryIncentivizedPacketsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIncentivizedPacketsResponse;
    fromJSON(object: any): QueryIncentivizedPacketsResponse;
    toJSON(message: QueryIncentivizedPacketsResponse): unknown;
    create<I extends Exact<DeepPartial<QueryIncentivizedPacketsResponse>, I>>(base?: I): QueryIncentivizedPacketsResponse;
    fromPartial<I extends Exact<DeepPartial<QueryIncentivizedPacketsResponse>, I>>(object: I): QueryIncentivizedPacketsResponse;
};
export declare const QueryIncentivizedPacketRequest: {
    encode(message: QueryIncentivizedPacketRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIncentivizedPacketRequest;
    fromJSON(object: any): QueryIncentivizedPacketRequest;
    toJSON(message: QueryIncentivizedPacketRequest): unknown;
    create<I extends Exact<DeepPartial<QueryIncentivizedPacketRequest>, I>>(base?: I): QueryIncentivizedPacketRequest;
    fromPartial<I extends Exact<DeepPartial<QueryIncentivizedPacketRequest>, I>>(object: I): QueryIncentivizedPacketRequest;
};
export declare const QueryIncentivizedPacketResponse: {
    encode(message: QueryIncentivizedPacketResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIncentivizedPacketResponse;
    fromJSON(object: any): QueryIncentivizedPacketResponse;
    toJSON(message: QueryIncentivizedPacketResponse): unknown;
    create<I extends Exact<DeepPartial<QueryIncentivizedPacketResponse>, I>>(base?: I): QueryIncentivizedPacketResponse;
    fromPartial<I extends Exact<DeepPartial<QueryIncentivizedPacketResponse>, I>>(object: I): QueryIncentivizedPacketResponse;
};
export declare const QueryIncentivizedPacketsForChannelRequest: {
    encode(message: QueryIncentivizedPacketsForChannelRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIncentivizedPacketsForChannelRequest;
    fromJSON(object: any): QueryIncentivizedPacketsForChannelRequest;
    toJSON(message: QueryIncentivizedPacketsForChannelRequest): unknown;
    create<I extends Exact<DeepPartial<QueryIncentivizedPacketsForChannelRequest>, I>>(base?: I): QueryIncentivizedPacketsForChannelRequest;
    fromPartial<I extends Exact<DeepPartial<QueryIncentivizedPacketsForChannelRequest>, I>>(object: I): QueryIncentivizedPacketsForChannelRequest;
};
export declare const QueryIncentivizedPacketsForChannelResponse: {
    encode(message: QueryIncentivizedPacketsForChannelResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIncentivizedPacketsForChannelResponse;
    fromJSON(object: any): QueryIncentivizedPacketsForChannelResponse;
    toJSON(message: QueryIncentivizedPacketsForChannelResponse): unknown;
    create<I extends Exact<DeepPartial<QueryIncentivizedPacketsForChannelResponse>, I>>(base?: I): QueryIncentivizedPacketsForChannelResponse;
    fromPartial<I extends Exact<DeepPartial<QueryIncentivizedPacketsForChannelResponse>, I>>(object: I): QueryIncentivizedPacketsForChannelResponse;
};
export declare const QueryTotalRecvFeesRequest: {
    encode(message: QueryTotalRecvFeesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalRecvFeesRequest;
    fromJSON(object: any): QueryTotalRecvFeesRequest;
    toJSON(message: QueryTotalRecvFeesRequest): unknown;
    create<I extends Exact<DeepPartial<QueryTotalRecvFeesRequest>, I>>(base?: I): QueryTotalRecvFeesRequest;
    fromPartial<I extends Exact<DeepPartial<QueryTotalRecvFeesRequest>, I>>(object: I): QueryTotalRecvFeesRequest;
};
export declare const QueryTotalRecvFeesResponse: {
    encode(message: QueryTotalRecvFeesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalRecvFeesResponse;
    fromJSON(object: any): QueryTotalRecvFeesResponse;
    toJSON(message: QueryTotalRecvFeesResponse): unknown;
    create<I extends Exact<DeepPartial<QueryTotalRecvFeesResponse>, I>>(base?: I): QueryTotalRecvFeesResponse;
    fromPartial<I extends Exact<DeepPartial<QueryTotalRecvFeesResponse>, I>>(object: I): QueryTotalRecvFeesResponse;
};
export declare const QueryTotalAckFeesRequest: {
    encode(message: QueryTotalAckFeesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalAckFeesRequest;
    fromJSON(object: any): QueryTotalAckFeesRequest;
    toJSON(message: QueryTotalAckFeesRequest): unknown;
    create<I extends Exact<DeepPartial<QueryTotalAckFeesRequest>, I>>(base?: I): QueryTotalAckFeesRequest;
    fromPartial<I extends Exact<DeepPartial<QueryTotalAckFeesRequest>, I>>(object: I): QueryTotalAckFeesRequest;
};
export declare const QueryTotalAckFeesResponse: {
    encode(message: QueryTotalAckFeesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalAckFeesResponse;
    fromJSON(object: any): QueryTotalAckFeesResponse;
    toJSON(message: QueryTotalAckFeesResponse): unknown;
    create<I extends Exact<DeepPartial<QueryTotalAckFeesResponse>, I>>(base?: I): QueryTotalAckFeesResponse;
    fromPartial<I extends Exact<DeepPartial<QueryTotalAckFeesResponse>, I>>(object: I): QueryTotalAckFeesResponse;
};
export declare const QueryTotalTimeoutFeesRequest: {
    encode(message: QueryTotalTimeoutFeesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalTimeoutFeesRequest;
    fromJSON(object: any): QueryTotalTimeoutFeesRequest;
    toJSON(message: QueryTotalTimeoutFeesRequest): unknown;
    create<I extends Exact<DeepPartial<QueryTotalTimeoutFeesRequest>, I>>(base?: I): QueryTotalTimeoutFeesRequest;
    fromPartial<I extends Exact<DeepPartial<QueryTotalTimeoutFeesRequest>, I>>(object: I): QueryTotalTimeoutFeesRequest;
};
export declare const QueryTotalTimeoutFeesResponse: {
    encode(message: QueryTotalTimeoutFeesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalTimeoutFeesResponse;
    fromJSON(object: any): QueryTotalTimeoutFeesResponse;
    toJSON(message: QueryTotalTimeoutFeesResponse): unknown;
    create<I extends Exact<DeepPartial<QueryTotalTimeoutFeesResponse>, I>>(base?: I): QueryTotalTimeoutFeesResponse;
    fromPartial<I extends Exact<DeepPartial<QueryTotalTimeoutFeesResponse>, I>>(object: I): QueryTotalTimeoutFeesResponse;
};
export declare const QueryPayeeRequest: {
    encode(message: QueryPayeeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPayeeRequest;
    fromJSON(object: any): QueryPayeeRequest;
    toJSON(message: QueryPayeeRequest): unknown;
    create<I extends Exact<DeepPartial<QueryPayeeRequest>, I>>(base?: I): QueryPayeeRequest;
    fromPartial<I extends Exact<DeepPartial<QueryPayeeRequest>, I>>(object: I): QueryPayeeRequest;
};
export declare const QueryPayeeResponse: {
    encode(message: QueryPayeeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPayeeResponse;
    fromJSON(object: any): QueryPayeeResponse;
    toJSON(message: QueryPayeeResponse): unknown;
    create<I extends Exact<DeepPartial<QueryPayeeResponse>, I>>(base?: I): QueryPayeeResponse;
    fromPartial<I extends Exact<DeepPartial<QueryPayeeResponse>, I>>(object: I): QueryPayeeResponse;
};
export declare const QueryCounterpartyPayeeRequest: {
    encode(message: QueryCounterpartyPayeeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCounterpartyPayeeRequest;
    fromJSON(object: any): QueryCounterpartyPayeeRequest;
    toJSON(message: QueryCounterpartyPayeeRequest): unknown;
    create<I extends Exact<DeepPartial<QueryCounterpartyPayeeRequest>, I>>(base?: I): QueryCounterpartyPayeeRequest;
    fromPartial<I extends Exact<DeepPartial<QueryCounterpartyPayeeRequest>, I>>(object: I): QueryCounterpartyPayeeRequest;
};
export declare const QueryCounterpartyPayeeResponse: {
    encode(message: QueryCounterpartyPayeeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCounterpartyPayeeResponse;
    fromJSON(object: any): QueryCounterpartyPayeeResponse;
    toJSON(message: QueryCounterpartyPayeeResponse): unknown;
    create<I extends Exact<DeepPartial<QueryCounterpartyPayeeResponse>, I>>(base?: I): QueryCounterpartyPayeeResponse;
    fromPartial<I extends Exact<DeepPartial<QueryCounterpartyPayeeResponse>, I>>(object: I): QueryCounterpartyPayeeResponse;
};
export declare const QueryFeeEnabledChannelsRequest: {
    encode(message: QueryFeeEnabledChannelsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeEnabledChannelsRequest;
    fromJSON(object: any): QueryFeeEnabledChannelsRequest;
    toJSON(message: QueryFeeEnabledChannelsRequest): unknown;
    create<I extends Exact<DeepPartial<QueryFeeEnabledChannelsRequest>, I>>(base?: I): QueryFeeEnabledChannelsRequest;
    fromPartial<I extends Exact<DeepPartial<QueryFeeEnabledChannelsRequest>, I>>(object: I): QueryFeeEnabledChannelsRequest;
};
export declare const QueryFeeEnabledChannelsResponse: {
    encode(message: QueryFeeEnabledChannelsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeEnabledChannelsResponse;
    fromJSON(object: any): QueryFeeEnabledChannelsResponse;
    toJSON(message: QueryFeeEnabledChannelsResponse): unknown;
    create<I extends Exact<DeepPartial<QueryFeeEnabledChannelsResponse>, I>>(base?: I): QueryFeeEnabledChannelsResponse;
    fromPartial<I extends Exact<DeepPartial<QueryFeeEnabledChannelsResponse>, I>>(object: I): QueryFeeEnabledChannelsResponse;
};
export declare const QueryFeeEnabledChannelRequest: {
    encode(message: QueryFeeEnabledChannelRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeEnabledChannelRequest;
    fromJSON(object: any): QueryFeeEnabledChannelRequest;
    toJSON(message: QueryFeeEnabledChannelRequest): unknown;
    create<I extends Exact<DeepPartial<QueryFeeEnabledChannelRequest>, I>>(base?: I): QueryFeeEnabledChannelRequest;
    fromPartial<I extends Exact<DeepPartial<QueryFeeEnabledChannelRequest>, I>>(object: I): QueryFeeEnabledChannelRequest;
};
export declare const QueryFeeEnabledChannelResponse: {
    encode(message: QueryFeeEnabledChannelResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeEnabledChannelResponse;
    fromJSON(object: any): QueryFeeEnabledChannelResponse;
    toJSON(message: QueryFeeEnabledChannelResponse): unknown;
    create<I extends Exact<DeepPartial<QueryFeeEnabledChannelResponse>, I>>(base?: I): QueryFeeEnabledChannelResponse;
    fromPartial<I extends Exact<DeepPartial<QueryFeeEnabledChannelResponse>, I>>(object: I): QueryFeeEnabledChannelResponse;
};
/** Query defines the ICS29 gRPC querier service. */
export interface Query {
    /** IncentivizedPackets returns all incentivized packets and their associated fees */
    IncentivizedPackets(request: QueryIncentivizedPacketsRequest): Promise<QueryIncentivizedPacketsResponse>;
    /** IncentivizedPacket returns all packet fees for a packet given its identifier */
    IncentivizedPacket(request: QueryIncentivizedPacketRequest): Promise<QueryIncentivizedPacketResponse>;
    /** Gets all incentivized packets for a specific channel */
    IncentivizedPacketsForChannel(request: QueryIncentivizedPacketsForChannelRequest): Promise<QueryIncentivizedPacketsForChannelResponse>;
    /** TotalRecvFees returns the total receive fees for a packet given its identifier */
    TotalRecvFees(request: QueryTotalRecvFeesRequest): Promise<QueryTotalRecvFeesResponse>;
    /** TotalAckFees returns the total acknowledgement fees for a packet given its identifier */
    TotalAckFees(request: QueryTotalAckFeesRequest): Promise<QueryTotalAckFeesResponse>;
    /** TotalTimeoutFees returns the total timeout fees for a packet given its identifier */
    TotalTimeoutFees(request: QueryTotalTimeoutFeesRequest): Promise<QueryTotalTimeoutFeesResponse>;
    /** Payee returns the registered payee address for a specific channel given the relayer address */
    Payee(request: QueryPayeeRequest): Promise<QueryPayeeResponse>;
    /** CounterpartyPayee returns the registered counterparty payee for forward relaying */
    CounterpartyPayee(request: QueryCounterpartyPayeeRequest): Promise<QueryCounterpartyPayeeResponse>;
    /** FeeEnabledChannels returns a list of all fee enabled channels */
    FeeEnabledChannels(request: QueryFeeEnabledChannelsRequest): Promise<QueryFeeEnabledChannelsResponse>;
    /** FeeEnabledChannel returns true if the provided port and channel identifiers belong to a fee enabled channel */
    FeeEnabledChannel(request: QueryFeeEnabledChannelRequest): Promise<QueryFeeEnabledChannelResponse>;
}
export declare const QueryServiceName = "ibc.applications.fee.v1.Query";
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    IncentivizedPackets(request: QueryIncentivizedPacketsRequest): Promise<QueryIncentivizedPacketsResponse>;
    IncentivizedPacket(request: QueryIncentivizedPacketRequest): Promise<QueryIncentivizedPacketResponse>;
    IncentivizedPacketsForChannel(request: QueryIncentivizedPacketsForChannelRequest): Promise<QueryIncentivizedPacketsForChannelResponse>;
    TotalRecvFees(request: QueryTotalRecvFeesRequest): Promise<QueryTotalRecvFeesResponse>;
    TotalAckFees(request: QueryTotalAckFeesRequest): Promise<QueryTotalAckFeesResponse>;
    TotalTimeoutFees(request: QueryTotalTimeoutFeesRequest): Promise<QueryTotalTimeoutFeesResponse>;
    Payee(request: QueryPayeeRequest): Promise<QueryPayeeResponse>;
    CounterpartyPayee(request: QueryCounterpartyPayeeRequest): Promise<QueryCounterpartyPayeeResponse>;
    FeeEnabledChannels(request: QueryFeeEnabledChannelsRequest): Promise<QueryFeeEnabledChannelsResponse>;
    FeeEnabledChannel(request: QueryFeeEnabledChannelRequest): Promise<QueryFeeEnabledChannelResponse>;
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
