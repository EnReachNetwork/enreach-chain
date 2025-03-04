import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Any } from "../../../../google/protobuf/any";
import { Height, IdentifiedClientState } from "../../client/v1/client";
import { Channel, IdentifiedChannel, PacketState, Params } from "./channel";
import { ErrorReceipt, Upgrade } from "./upgrade";
export declare const protobufPackage = "ibc.core.channel.v1";
/** QueryChannelRequest is the request type for the Query/Channel RPC method */
export interface QueryChannelRequest {
    /** port unique identifier */
    portId: string;
    /** channel unique identifier */
    channelId: string;
}
/**
 * QueryChannelResponse is the response type for the Query/Channel RPC method.
 * Besides the Channel end, it includes a proof and the height from which the
 * proof was retrieved.
 */
export interface QueryChannelResponse {
    /** channel associated with the request identifiers */
    channel: Channel | undefined;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proofHeight: Height | undefined;
}
/** QueryChannelsRequest is the request type for the Query/Channels RPC method */
export interface QueryChannelsRequest {
    /** pagination request */
    pagination: PageRequest | undefined;
}
/** QueryChannelsResponse is the response type for the Query/Channels RPC method. */
export interface QueryChannelsResponse {
    /** list of stored channels of the chain. */
    channels: IdentifiedChannel[];
    /** pagination response */
    pagination: PageResponse | undefined;
    /** query block height */
    height: Height | undefined;
}
/**
 * QueryConnectionChannelsRequest is the request type for the
 * Query/QueryConnectionChannels RPC method
 */
export interface QueryConnectionChannelsRequest {
    /** connection unique identifier */
    connection: string;
    /** pagination request */
    pagination: PageRequest | undefined;
}
/**
 * QueryConnectionChannelsResponse is the Response type for the
 * Query/QueryConnectionChannels RPC method
 */
export interface QueryConnectionChannelsResponse {
    /** list of channels associated with a connection. */
    channels: IdentifiedChannel[];
    /** pagination response */
    pagination: PageResponse | undefined;
    /** query block height */
    height: Height | undefined;
}
/**
 * QueryChannelClientStateRequest is the request type for the Query/ClientState
 * RPC method
 */
export interface QueryChannelClientStateRequest {
    /** port unique identifier */
    portId: string;
    /** channel unique identifier */
    channelId: string;
}
/**
 * QueryChannelClientStateResponse is the Response type for the
 * Query/QueryChannelClientState RPC method
 */
export interface QueryChannelClientStateResponse {
    /** client state associated with the channel */
    identifiedClientState: IdentifiedClientState | undefined;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proofHeight: Height | undefined;
}
/**
 * QueryChannelConsensusStateRequest is the request type for the
 * Query/ConsensusState RPC method
 */
export interface QueryChannelConsensusStateRequest {
    /** port unique identifier */
    portId: string;
    /** channel unique identifier */
    channelId: string;
    /** revision number of the consensus state */
    revisionNumber: number;
    /** revision height of the consensus state */
    revisionHeight: number;
}
/**
 * QueryChannelClientStateResponse is the Response type for the
 * Query/QueryChannelClientState RPC method
 */
export interface QueryChannelConsensusStateResponse {
    /** consensus state associated with the channel */
    consensusState: Any | undefined;
    /** client ID associated with the consensus state */
    clientId: string;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proofHeight: Height | undefined;
}
/**
 * QueryPacketCommitmentRequest is the request type for the
 * Query/PacketCommitment RPC method
 */
export interface QueryPacketCommitmentRequest {
    /** port unique identifier */
    portId: string;
    /** channel unique identifier */
    channelId: string;
    /** packet sequence */
    sequence: number;
}
/**
 * QueryPacketCommitmentResponse defines the client query response for a packet
 * which also includes a proof and the height from which the proof was
 * retrieved
 */
export interface QueryPacketCommitmentResponse {
    /** packet associated with the request fields */
    commitment: Uint8Array;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proofHeight: Height | undefined;
}
/**
 * QueryPacketCommitmentsRequest is the request type for the
 * Query/QueryPacketCommitments RPC method
 */
export interface QueryPacketCommitmentsRequest {
    /** port unique identifier */
    portId: string;
    /** channel unique identifier */
    channelId: string;
    /** pagination request */
    pagination: PageRequest | undefined;
}
/**
 * QueryPacketCommitmentsResponse is the request type for the
 * Query/QueryPacketCommitments RPC method
 */
export interface QueryPacketCommitmentsResponse {
    commitments: PacketState[];
    /** pagination response */
    pagination: PageResponse | undefined;
    /** query block height */
    height: Height | undefined;
}
/**
 * QueryPacketReceiptRequest is the request type for the
 * Query/PacketReceipt RPC method
 */
export interface QueryPacketReceiptRequest {
    /** port unique identifier */
    portId: string;
    /** channel unique identifier */
    channelId: string;
    /** packet sequence */
    sequence: number;
}
/**
 * QueryPacketReceiptResponse defines the client query response for a packet
 * receipt which also includes a proof, and the height from which the proof was
 * retrieved
 */
export interface QueryPacketReceiptResponse {
    /** success flag for if receipt exists */
    received: boolean;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proofHeight: Height | undefined;
}
/**
 * QueryPacketAcknowledgementRequest is the request type for the
 * Query/PacketAcknowledgement RPC method
 */
export interface QueryPacketAcknowledgementRequest {
    /** port unique identifier */
    portId: string;
    /** channel unique identifier */
    channelId: string;
    /** packet sequence */
    sequence: number;
}
/**
 * QueryPacketAcknowledgementResponse defines the client query response for a
 * packet which also includes a proof and the height from which the
 * proof was retrieved
 */
export interface QueryPacketAcknowledgementResponse {
    /** packet associated with the request fields */
    acknowledgement: Uint8Array;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proofHeight: Height | undefined;
}
/**
 * QueryPacketAcknowledgementsRequest is the request type for the
 * Query/QueryPacketCommitments RPC method
 */
export interface QueryPacketAcknowledgementsRequest {
    /** port unique identifier */
    portId: string;
    /** channel unique identifier */
    channelId: string;
    /** pagination request */
    pagination: PageRequest | undefined;
    /** list of packet sequences */
    packetCommitmentSequences: number[];
}
/**
 * QueryPacketAcknowledgemetsResponse is the request type for the
 * Query/QueryPacketAcknowledgements RPC method
 */
export interface QueryPacketAcknowledgementsResponse {
    acknowledgements: PacketState[];
    /** pagination response */
    pagination: PageResponse | undefined;
    /** query block height */
    height: Height | undefined;
}
/**
 * QueryUnreceivedPacketsRequest is the request type for the
 * Query/UnreceivedPackets RPC method
 */
export interface QueryUnreceivedPacketsRequest {
    /** port unique identifier */
    portId: string;
    /** channel unique identifier */
    channelId: string;
    /** list of packet sequences */
    packetCommitmentSequences: number[];
}
/**
 * QueryUnreceivedPacketsResponse is the response type for the
 * Query/UnreceivedPacketCommitments RPC method
 */
export interface QueryUnreceivedPacketsResponse {
    /** list of unreceived packet sequences */
    sequences: number[];
    /** query block height */
    height: Height | undefined;
}
/**
 * QueryUnreceivedAcks is the request type for the
 * Query/UnreceivedAcks RPC method
 */
export interface QueryUnreceivedAcksRequest {
    /** port unique identifier */
    portId: string;
    /** channel unique identifier */
    channelId: string;
    /** list of acknowledgement sequences */
    packetAckSequences: number[];
}
/**
 * QueryUnreceivedAcksResponse is the response type for the
 * Query/UnreceivedAcks RPC method
 */
export interface QueryUnreceivedAcksResponse {
    /** list of unreceived acknowledgement sequences */
    sequences: number[];
    /** query block height */
    height: Height | undefined;
}
/**
 * QueryNextSequenceReceiveRequest is the request type for the
 * Query/QueryNextSequenceReceiveRequest RPC method
 */
export interface QueryNextSequenceReceiveRequest {
    /** port unique identifier */
    portId: string;
    /** channel unique identifier */
    channelId: string;
}
/**
 * QuerySequenceResponse is the response type for the
 * Query/QueryNextSequenceReceiveResponse RPC method
 */
export interface QueryNextSequenceReceiveResponse {
    /** next sequence receive number */
    nextSequenceReceive: number;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proofHeight: Height | undefined;
}
/**
 * QueryNextSequenceSendRequest is the request type for the
 * Query/QueryNextSequenceSend RPC method
 */
export interface QueryNextSequenceSendRequest {
    /** port unique identifier */
    portId: string;
    /** channel unique identifier */
    channelId: string;
}
/**
 * QueryNextSequenceSendResponse is the request type for the
 * Query/QueryNextSequenceSend RPC method
 */
export interface QueryNextSequenceSendResponse {
    /** next sequence send number */
    nextSequenceSend: number;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proofHeight: Height | undefined;
}
/** QueryUpgradeErrorRequest is the request type for the Query/QueryUpgradeError RPC method */
export interface QueryUpgradeErrorRequest {
    portId: string;
    channelId: string;
}
/** QueryUpgradeErrorResponse is the response type for the Query/QueryUpgradeError RPC method */
export interface QueryUpgradeErrorResponse {
    errorReceipt: ErrorReceipt | undefined;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proofHeight: Height | undefined;
}
/** QueryUpgradeRequest is the request type for the QueryUpgradeRequest RPC method */
export interface QueryUpgradeRequest {
    portId: string;
    channelId: string;
}
/** QueryUpgradeResponse is the response type for the QueryUpgradeResponse RPC method */
export interface QueryUpgradeResponse {
    upgrade: Upgrade | undefined;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proofHeight: Height | undefined;
}
/** QueryChannelParamsRequest is the request type for the Query/ChannelParams RPC method. */
export interface QueryChannelParamsRequest {
}
/** QueryChannelParamsResponse is the response type for the Query/ChannelParams RPC method. */
export interface QueryChannelParamsResponse {
    /** params defines the parameters of the module. */
    params: Params | undefined;
}
export declare const QueryChannelRequest: {
    encode(message: QueryChannelRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryChannelRequest;
    fromJSON(object: any): QueryChannelRequest;
    toJSON(message: QueryChannelRequest): unknown;
    create<I extends Exact<DeepPartial<QueryChannelRequest>, I>>(base?: I): QueryChannelRequest;
    fromPartial<I extends Exact<DeepPartial<QueryChannelRequest>, I>>(object: I): QueryChannelRequest;
};
export declare const QueryChannelResponse: {
    encode(message: QueryChannelResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryChannelResponse;
    fromJSON(object: any): QueryChannelResponse;
    toJSON(message: QueryChannelResponse): unknown;
    create<I extends Exact<DeepPartial<QueryChannelResponse>, I>>(base?: I): QueryChannelResponse;
    fromPartial<I extends Exact<DeepPartial<QueryChannelResponse>, I>>(object: I): QueryChannelResponse;
};
export declare const QueryChannelsRequest: {
    encode(message: QueryChannelsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryChannelsRequest;
    fromJSON(object: any): QueryChannelsRequest;
    toJSON(message: QueryChannelsRequest): unknown;
    create<I extends Exact<DeepPartial<QueryChannelsRequest>, I>>(base?: I): QueryChannelsRequest;
    fromPartial<I extends Exact<DeepPartial<QueryChannelsRequest>, I>>(object: I): QueryChannelsRequest;
};
export declare const QueryChannelsResponse: {
    encode(message: QueryChannelsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryChannelsResponse;
    fromJSON(object: any): QueryChannelsResponse;
    toJSON(message: QueryChannelsResponse): unknown;
    create<I extends Exact<DeepPartial<QueryChannelsResponse>, I>>(base?: I): QueryChannelsResponse;
    fromPartial<I extends Exact<DeepPartial<QueryChannelsResponse>, I>>(object: I): QueryChannelsResponse;
};
export declare const QueryConnectionChannelsRequest: {
    encode(message: QueryConnectionChannelsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConnectionChannelsRequest;
    fromJSON(object: any): QueryConnectionChannelsRequest;
    toJSON(message: QueryConnectionChannelsRequest): unknown;
    create<I extends Exact<DeepPartial<QueryConnectionChannelsRequest>, I>>(base?: I): QueryConnectionChannelsRequest;
    fromPartial<I extends Exact<DeepPartial<QueryConnectionChannelsRequest>, I>>(object: I): QueryConnectionChannelsRequest;
};
export declare const QueryConnectionChannelsResponse: {
    encode(message: QueryConnectionChannelsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConnectionChannelsResponse;
    fromJSON(object: any): QueryConnectionChannelsResponse;
    toJSON(message: QueryConnectionChannelsResponse): unknown;
    create<I extends Exact<DeepPartial<QueryConnectionChannelsResponse>, I>>(base?: I): QueryConnectionChannelsResponse;
    fromPartial<I extends Exact<DeepPartial<QueryConnectionChannelsResponse>, I>>(object: I): QueryConnectionChannelsResponse;
};
export declare const QueryChannelClientStateRequest: {
    encode(message: QueryChannelClientStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryChannelClientStateRequest;
    fromJSON(object: any): QueryChannelClientStateRequest;
    toJSON(message: QueryChannelClientStateRequest): unknown;
    create<I extends Exact<DeepPartial<QueryChannelClientStateRequest>, I>>(base?: I): QueryChannelClientStateRequest;
    fromPartial<I extends Exact<DeepPartial<QueryChannelClientStateRequest>, I>>(object: I): QueryChannelClientStateRequest;
};
export declare const QueryChannelClientStateResponse: {
    encode(message: QueryChannelClientStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryChannelClientStateResponse;
    fromJSON(object: any): QueryChannelClientStateResponse;
    toJSON(message: QueryChannelClientStateResponse): unknown;
    create<I extends Exact<DeepPartial<QueryChannelClientStateResponse>, I>>(base?: I): QueryChannelClientStateResponse;
    fromPartial<I extends Exact<DeepPartial<QueryChannelClientStateResponse>, I>>(object: I): QueryChannelClientStateResponse;
};
export declare const QueryChannelConsensusStateRequest: {
    encode(message: QueryChannelConsensusStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryChannelConsensusStateRequest;
    fromJSON(object: any): QueryChannelConsensusStateRequest;
    toJSON(message: QueryChannelConsensusStateRequest): unknown;
    create<I extends Exact<DeepPartial<QueryChannelConsensusStateRequest>, I>>(base?: I): QueryChannelConsensusStateRequest;
    fromPartial<I extends Exact<DeepPartial<QueryChannelConsensusStateRequest>, I>>(object: I): QueryChannelConsensusStateRequest;
};
export declare const QueryChannelConsensusStateResponse: {
    encode(message: QueryChannelConsensusStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryChannelConsensusStateResponse;
    fromJSON(object: any): QueryChannelConsensusStateResponse;
    toJSON(message: QueryChannelConsensusStateResponse): unknown;
    create<I extends Exact<DeepPartial<QueryChannelConsensusStateResponse>, I>>(base?: I): QueryChannelConsensusStateResponse;
    fromPartial<I extends Exact<DeepPartial<QueryChannelConsensusStateResponse>, I>>(object: I): QueryChannelConsensusStateResponse;
};
export declare const QueryPacketCommitmentRequest: {
    encode(message: QueryPacketCommitmentRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketCommitmentRequest;
    fromJSON(object: any): QueryPacketCommitmentRequest;
    toJSON(message: QueryPacketCommitmentRequest): unknown;
    create<I extends Exact<DeepPartial<QueryPacketCommitmentRequest>, I>>(base?: I): QueryPacketCommitmentRequest;
    fromPartial<I extends Exact<DeepPartial<QueryPacketCommitmentRequest>, I>>(object: I): QueryPacketCommitmentRequest;
};
export declare const QueryPacketCommitmentResponse: {
    encode(message: QueryPacketCommitmentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketCommitmentResponse;
    fromJSON(object: any): QueryPacketCommitmentResponse;
    toJSON(message: QueryPacketCommitmentResponse): unknown;
    create<I extends Exact<DeepPartial<QueryPacketCommitmentResponse>, I>>(base?: I): QueryPacketCommitmentResponse;
    fromPartial<I extends Exact<DeepPartial<QueryPacketCommitmentResponse>, I>>(object: I): QueryPacketCommitmentResponse;
};
export declare const QueryPacketCommitmentsRequest: {
    encode(message: QueryPacketCommitmentsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketCommitmentsRequest;
    fromJSON(object: any): QueryPacketCommitmentsRequest;
    toJSON(message: QueryPacketCommitmentsRequest): unknown;
    create<I extends Exact<DeepPartial<QueryPacketCommitmentsRequest>, I>>(base?: I): QueryPacketCommitmentsRequest;
    fromPartial<I extends Exact<DeepPartial<QueryPacketCommitmentsRequest>, I>>(object: I): QueryPacketCommitmentsRequest;
};
export declare const QueryPacketCommitmentsResponse: {
    encode(message: QueryPacketCommitmentsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketCommitmentsResponse;
    fromJSON(object: any): QueryPacketCommitmentsResponse;
    toJSON(message: QueryPacketCommitmentsResponse): unknown;
    create<I extends Exact<DeepPartial<QueryPacketCommitmentsResponse>, I>>(base?: I): QueryPacketCommitmentsResponse;
    fromPartial<I extends Exact<DeepPartial<QueryPacketCommitmentsResponse>, I>>(object: I): QueryPacketCommitmentsResponse;
};
export declare const QueryPacketReceiptRequest: {
    encode(message: QueryPacketReceiptRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketReceiptRequest;
    fromJSON(object: any): QueryPacketReceiptRequest;
    toJSON(message: QueryPacketReceiptRequest): unknown;
    create<I extends Exact<DeepPartial<QueryPacketReceiptRequest>, I>>(base?: I): QueryPacketReceiptRequest;
    fromPartial<I extends Exact<DeepPartial<QueryPacketReceiptRequest>, I>>(object: I): QueryPacketReceiptRequest;
};
export declare const QueryPacketReceiptResponse: {
    encode(message: QueryPacketReceiptResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketReceiptResponse;
    fromJSON(object: any): QueryPacketReceiptResponse;
    toJSON(message: QueryPacketReceiptResponse): unknown;
    create<I extends Exact<DeepPartial<QueryPacketReceiptResponse>, I>>(base?: I): QueryPacketReceiptResponse;
    fromPartial<I extends Exact<DeepPartial<QueryPacketReceiptResponse>, I>>(object: I): QueryPacketReceiptResponse;
};
export declare const QueryPacketAcknowledgementRequest: {
    encode(message: QueryPacketAcknowledgementRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketAcknowledgementRequest;
    fromJSON(object: any): QueryPacketAcknowledgementRequest;
    toJSON(message: QueryPacketAcknowledgementRequest): unknown;
    create<I extends Exact<DeepPartial<QueryPacketAcknowledgementRequest>, I>>(base?: I): QueryPacketAcknowledgementRequest;
    fromPartial<I extends Exact<DeepPartial<QueryPacketAcknowledgementRequest>, I>>(object: I): QueryPacketAcknowledgementRequest;
};
export declare const QueryPacketAcknowledgementResponse: {
    encode(message: QueryPacketAcknowledgementResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketAcknowledgementResponse;
    fromJSON(object: any): QueryPacketAcknowledgementResponse;
    toJSON(message: QueryPacketAcknowledgementResponse): unknown;
    create<I extends Exact<DeepPartial<QueryPacketAcknowledgementResponse>, I>>(base?: I): QueryPacketAcknowledgementResponse;
    fromPartial<I extends Exact<DeepPartial<QueryPacketAcknowledgementResponse>, I>>(object: I): QueryPacketAcknowledgementResponse;
};
export declare const QueryPacketAcknowledgementsRequest: {
    encode(message: QueryPacketAcknowledgementsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketAcknowledgementsRequest;
    fromJSON(object: any): QueryPacketAcknowledgementsRequest;
    toJSON(message: QueryPacketAcknowledgementsRequest): unknown;
    create<I extends Exact<DeepPartial<QueryPacketAcknowledgementsRequest>, I>>(base?: I): QueryPacketAcknowledgementsRequest;
    fromPartial<I extends Exact<DeepPartial<QueryPacketAcknowledgementsRequest>, I>>(object: I): QueryPacketAcknowledgementsRequest;
};
export declare const QueryPacketAcknowledgementsResponse: {
    encode(message: QueryPacketAcknowledgementsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketAcknowledgementsResponse;
    fromJSON(object: any): QueryPacketAcknowledgementsResponse;
    toJSON(message: QueryPacketAcknowledgementsResponse): unknown;
    create<I extends Exact<DeepPartial<QueryPacketAcknowledgementsResponse>, I>>(base?: I): QueryPacketAcknowledgementsResponse;
    fromPartial<I extends Exact<DeepPartial<QueryPacketAcknowledgementsResponse>, I>>(object: I): QueryPacketAcknowledgementsResponse;
};
export declare const QueryUnreceivedPacketsRequest: {
    encode(message: QueryUnreceivedPacketsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnreceivedPacketsRequest;
    fromJSON(object: any): QueryUnreceivedPacketsRequest;
    toJSON(message: QueryUnreceivedPacketsRequest): unknown;
    create<I extends Exact<DeepPartial<QueryUnreceivedPacketsRequest>, I>>(base?: I): QueryUnreceivedPacketsRequest;
    fromPartial<I extends Exact<DeepPartial<QueryUnreceivedPacketsRequest>, I>>(object: I): QueryUnreceivedPacketsRequest;
};
export declare const QueryUnreceivedPacketsResponse: {
    encode(message: QueryUnreceivedPacketsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnreceivedPacketsResponse;
    fromJSON(object: any): QueryUnreceivedPacketsResponse;
    toJSON(message: QueryUnreceivedPacketsResponse): unknown;
    create<I extends Exact<DeepPartial<QueryUnreceivedPacketsResponse>, I>>(base?: I): QueryUnreceivedPacketsResponse;
    fromPartial<I extends Exact<DeepPartial<QueryUnreceivedPacketsResponse>, I>>(object: I): QueryUnreceivedPacketsResponse;
};
export declare const QueryUnreceivedAcksRequest: {
    encode(message: QueryUnreceivedAcksRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnreceivedAcksRequest;
    fromJSON(object: any): QueryUnreceivedAcksRequest;
    toJSON(message: QueryUnreceivedAcksRequest): unknown;
    create<I extends Exact<DeepPartial<QueryUnreceivedAcksRequest>, I>>(base?: I): QueryUnreceivedAcksRequest;
    fromPartial<I extends Exact<DeepPartial<QueryUnreceivedAcksRequest>, I>>(object: I): QueryUnreceivedAcksRequest;
};
export declare const QueryUnreceivedAcksResponse: {
    encode(message: QueryUnreceivedAcksResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnreceivedAcksResponse;
    fromJSON(object: any): QueryUnreceivedAcksResponse;
    toJSON(message: QueryUnreceivedAcksResponse): unknown;
    create<I extends Exact<DeepPartial<QueryUnreceivedAcksResponse>, I>>(base?: I): QueryUnreceivedAcksResponse;
    fromPartial<I extends Exact<DeepPartial<QueryUnreceivedAcksResponse>, I>>(object: I): QueryUnreceivedAcksResponse;
};
export declare const QueryNextSequenceReceiveRequest: {
    encode(message: QueryNextSequenceReceiveRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryNextSequenceReceiveRequest;
    fromJSON(object: any): QueryNextSequenceReceiveRequest;
    toJSON(message: QueryNextSequenceReceiveRequest): unknown;
    create<I extends Exact<DeepPartial<QueryNextSequenceReceiveRequest>, I>>(base?: I): QueryNextSequenceReceiveRequest;
    fromPartial<I extends Exact<DeepPartial<QueryNextSequenceReceiveRequest>, I>>(object: I): QueryNextSequenceReceiveRequest;
};
export declare const QueryNextSequenceReceiveResponse: {
    encode(message: QueryNextSequenceReceiveResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryNextSequenceReceiveResponse;
    fromJSON(object: any): QueryNextSequenceReceiveResponse;
    toJSON(message: QueryNextSequenceReceiveResponse): unknown;
    create<I extends Exact<DeepPartial<QueryNextSequenceReceiveResponse>, I>>(base?: I): QueryNextSequenceReceiveResponse;
    fromPartial<I extends Exact<DeepPartial<QueryNextSequenceReceiveResponse>, I>>(object: I): QueryNextSequenceReceiveResponse;
};
export declare const QueryNextSequenceSendRequest: {
    encode(message: QueryNextSequenceSendRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryNextSequenceSendRequest;
    fromJSON(object: any): QueryNextSequenceSendRequest;
    toJSON(message: QueryNextSequenceSendRequest): unknown;
    create<I extends Exact<DeepPartial<QueryNextSequenceSendRequest>, I>>(base?: I): QueryNextSequenceSendRequest;
    fromPartial<I extends Exact<DeepPartial<QueryNextSequenceSendRequest>, I>>(object: I): QueryNextSequenceSendRequest;
};
export declare const QueryNextSequenceSendResponse: {
    encode(message: QueryNextSequenceSendResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryNextSequenceSendResponse;
    fromJSON(object: any): QueryNextSequenceSendResponse;
    toJSON(message: QueryNextSequenceSendResponse): unknown;
    create<I extends Exact<DeepPartial<QueryNextSequenceSendResponse>, I>>(base?: I): QueryNextSequenceSendResponse;
    fromPartial<I extends Exact<DeepPartial<QueryNextSequenceSendResponse>, I>>(object: I): QueryNextSequenceSendResponse;
};
export declare const QueryUpgradeErrorRequest: {
    encode(message: QueryUpgradeErrorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUpgradeErrorRequest;
    fromJSON(object: any): QueryUpgradeErrorRequest;
    toJSON(message: QueryUpgradeErrorRequest): unknown;
    create<I extends Exact<DeepPartial<QueryUpgradeErrorRequest>, I>>(base?: I): QueryUpgradeErrorRequest;
    fromPartial<I extends Exact<DeepPartial<QueryUpgradeErrorRequest>, I>>(object: I): QueryUpgradeErrorRequest;
};
export declare const QueryUpgradeErrorResponse: {
    encode(message: QueryUpgradeErrorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUpgradeErrorResponse;
    fromJSON(object: any): QueryUpgradeErrorResponse;
    toJSON(message: QueryUpgradeErrorResponse): unknown;
    create<I extends Exact<DeepPartial<QueryUpgradeErrorResponse>, I>>(base?: I): QueryUpgradeErrorResponse;
    fromPartial<I extends Exact<DeepPartial<QueryUpgradeErrorResponse>, I>>(object: I): QueryUpgradeErrorResponse;
};
export declare const QueryUpgradeRequest: {
    encode(message: QueryUpgradeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUpgradeRequest;
    fromJSON(object: any): QueryUpgradeRequest;
    toJSON(message: QueryUpgradeRequest): unknown;
    create<I extends Exact<DeepPartial<QueryUpgradeRequest>, I>>(base?: I): QueryUpgradeRequest;
    fromPartial<I extends Exact<DeepPartial<QueryUpgradeRequest>, I>>(object: I): QueryUpgradeRequest;
};
export declare const QueryUpgradeResponse: {
    encode(message: QueryUpgradeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUpgradeResponse;
    fromJSON(object: any): QueryUpgradeResponse;
    toJSON(message: QueryUpgradeResponse): unknown;
    create<I extends Exact<DeepPartial<QueryUpgradeResponse>, I>>(base?: I): QueryUpgradeResponse;
    fromPartial<I extends Exact<DeepPartial<QueryUpgradeResponse>, I>>(object: I): QueryUpgradeResponse;
};
export declare const QueryChannelParamsRequest: {
    encode(_: QueryChannelParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryChannelParamsRequest;
    fromJSON(_: any): QueryChannelParamsRequest;
    toJSON(_: QueryChannelParamsRequest): unknown;
    create<I extends Exact<DeepPartial<QueryChannelParamsRequest>, I>>(base?: I): QueryChannelParamsRequest;
    fromPartial<I extends Exact<DeepPartial<QueryChannelParamsRequest>, I>>(_: I): QueryChannelParamsRequest;
};
export declare const QueryChannelParamsResponse: {
    encode(message: QueryChannelParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryChannelParamsResponse;
    fromJSON(object: any): QueryChannelParamsResponse;
    toJSON(message: QueryChannelParamsResponse): unknown;
    create<I extends Exact<DeepPartial<QueryChannelParamsResponse>, I>>(base?: I): QueryChannelParamsResponse;
    fromPartial<I extends Exact<DeepPartial<QueryChannelParamsResponse>, I>>(object: I): QueryChannelParamsResponse;
};
/** Query provides defines the gRPC querier service */
export interface Query {
    /** Channel queries an IBC Channel. */
    Channel(request: QueryChannelRequest): Promise<QueryChannelResponse>;
    /** Channels queries all the IBC channels of a chain. */
    Channels(request: QueryChannelsRequest): Promise<QueryChannelsResponse>;
    /**
     * ConnectionChannels queries all the channels associated with a connection
     * end.
     */
    ConnectionChannels(request: QueryConnectionChannelsRequest): Promise<QueryConnectionChannelsResponse>;
    /**
     * ChannelClientState queries for the client state for the channel associated
     * with the provided channel identifiers.
     */
    ChannelClientState(request: QueryChannelClientStateRequest): Promise<QueryChannelClientStateResponse>;
    /**
     * ChannelConsensusState queries for the consensus state for the channel
     * associated with the provided channel identifiers.
     */
    ChannelConsensusState(request: QueryChannelConsensusStateRequest): Promise<QueryChannelConsensusStateResponse>;
    /** PacketCommitment queries a stored packet commitment hash. */
    PacketCommitment(request: QueryPacketCommitmentRequest): Promise<QueryPacketCommitmentResponse>;
    /**
     * PacketCommitments returns all the packet commitments hashes associated
     * with a channel.
     */
    PacketCommitments(request: QueryPacketCommitmentsRequest): Promise<QueryPacketCommitmentsResponse>;
    /**
     * PacketReceipt queries if a given packet sequence has been received on the
     * queried chain
     */
    PacketReceipt(request: QueryPacketReceiptRequest): Promise<QueryPacketReceiptResponse>;
    /** PacketAcknowledgement queries a stored packet acknowledgement hash. */
    PacketAcknowledgement(request: QueryPacketAcknowledgementRequest): Promise<QueryPacketAcknowledgementResponse>;
    /**
     * PacketAcknowledgements returns all the packet acknowledgements associated
     * with a channel.
     */
    PacketAcknowledgements(request: QueryPacketAcknowledgementsRequest): Promise<QueryPacketAcknowledgementsResponse>;
    /**
     * UnreceivedPackets returns all the unreceived IBC packets associated with a
     * channel and sequences.
     */
    UnreceivedPackets(request: QueryUnreceivedPacketsRequest): Promise<QueryUnreceivedPacketsResponse>;
    /**
     * UnreceivedAcks returns all the unreceived IBC acknowledgements associated
     * with a channel and sequences.
     */
    UnreceivedAcks(request: QueryUnreceivedAcksRequest): Promise<QueryUnreceivedAcksResponse>;
    /** NextSequenceReceive returns the next receive sequence for a given channel. */
    NextSequenceReceive(request: QueryNextSequenceReceiveRequest): Promise<QueryNextSequenceReceiveResponse>;
    /** NextSequenceSend returns the next send sequence for a given channel. */
    NextSequenceSend(request: QueryNextSequenceSendRequest): Promise<QueryNextSequenceSendResponse>;
    /** UpgradeError returns the error receipt if the upgrade handshake failed. */
    UpgradeError(request: QueryUpgradeErrorRequest): Promise<QueryUpgradeErrorResponse>;
    /** Upgrade returns the upgrade for a given port and channel id. */
    Upgrade(request: QueryUpgradeRequest): Promise<QueryUpgradeResponse>;
    /** ChannelParams queries all parameters of the ibc channel submodule. */
    ChannelParams(request: QueryChannelParamsRequest): Promise<QueryChannelParamsResponse>;
}
export declare const QueryServiceName = "ibc.core.channel.v1.Query";
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Channel(request: QueryChannelRequest): Promise<QueryChannelResponse>;
    Channels(request: QueryChannelsRequest): Promise<QueryChannelsResponse>;
    ConnectionChannels(request: QueryConnectionChannelsRequest): Promise<QueryConnectionChannelsResponse>;
    ChannelClientState(request: QueryChannelClientStateRequest): Promise<QueryChannelClientStateResponse>;
    ChannelConsensusState(request: QueryChannelConsensusStateRequest): Promise<QueryChannelConsensusStateResponse>;
    PacketCommitment(request: QueryPacketCommitmentRequest): Promise<QueryPacketCommitmentResponse>;
    PacketCommitments(request: QueryPacketCommitmentsRequest): Promise<QueryPacketCommitmentsResponse>;
    PacketReceipt(request: QueryPacketReceiptRequest): Promise<QueryPacketReceiptResponse>;
    PacketAcknowledgement(request: QueryPacketAcknowledgementRequest): Promise<QueryPacketAcknowledgementResponse>;
    PacketAcknowledgements(request: QueryPacketAcknowledgementsRequest): Promise<QueryPacketAcknowledgementsResponse>;
    UnreceivedPackets(request: QueryUnreceivedPacketsRequest): Promise<QueryUnreceivedPacketsResponse>;
    UnreceivedAcks(request: QueryUnreceivedAcksRequest): Promise<QueryUnreceivedAcksResponse>;
    NextSequenceReceive(request: QueryNextSequenceReceiveRequest): Promise<QueryNextSequenceReceiveResponse>;
    NextSequenceSend(request: QueryNextSequenceSendRequest): Promise<QueryNextSequenceSendResponse>;
    UpgradeError(request: QueryUpgradeErrorRequest): Promise<QueryUpgradeErrorResponse>;
    Upgrade(request: QueryUpgradeRequest): Promise<QueryUpgradeResponse>;
    ChannelParams(request: QueryChannelParamsRequest): Promise<QueryChannelParamsResponse>;
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
