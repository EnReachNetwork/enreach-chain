import _m0 from "protobufjs/minimal";
import { Any } from "../../../../google/protobuf/any";
import { Event } from "../../../../tendermint/abci/types";
import { Block } from "../../../../tendermint/types/block";
export declare const protobufPackage = "cosmos.base.abci.v1beta1";
/**
 * TxResponse defines a structure containing relevant tx data and metadata. The
 * tags are stringified and the log is JSON decoded.
 */
export interface TxResponse {
    /** The block height */
    height: number;
    /** The transaction hash. */
    txhash: string;
    /** Namespace for the Code */
    codespace: string;
    /** Response code. */
    code: number;
    /** Result bytes, if any. */
    data: string;
    /**
     * The output of the application's logger (raw string). May be
     * non-deterministic.
     */
    rawLog: string;
    /** The output of the application's logger (typed). May be non-deterministic. */
    logs: ABCIMessageLog[];
    /** Additional information. May be non-deterministic. */
    info: string;
    /** Amount of gas requested for transaction. */
    gasWanted: number;
    /** Amount of gas consumed by transaction. */
    gasUsed: number;
    /** The request transaction bytes. */
    tx: Any | undefined;
    /**
     * Time of the previous block. For heights > 1, it's the weighted median of
     * the timestamps of the valid votes in the block.LastCommit. For height == 1,
     * it's genesis time.
     */
    timestamp: string;
    /**
     * Events defines all the events emitted by processing a transaction. Note,
     * these events include those emitted by processing all the messages and those
     * emitted from the ante. Whereas Logs contains the events, with
     * additional metadata, emitted only by processing the messages.
     *
     * Since: cosmos-sdk 0.42.11, 0.44.5, 0.45
     */
    events: Event[];
}
/** ABCIMessageLog defines a structure containing an indexed tx ABCI message log. */
export interface ABCIMessageLog {
    msgIndex: number;
    log: string;
    /**
     * Events contains a slice of Event objects that were emitted during some
     * execution.
     */
    events: StringEvent[];
}
/**
 * StringEvent defines en Event object wrapper where all the attributes
 * contain key/value pairs that are strings instead of raw bytes.
 */
export interface StringEvent {
    type: string;
    attributes: Attribute[];
}
/**
 * Attribute defines an attribute wrapper where the key and value are
 * strings instead of raw bytes.
 */
export interface Attribute {
    key: string;
    value: string;
}
/** GasInfo defines tx execution gas context. */
export interface GasInfo {
    /** GasWanted is the maximum units of work we allow this tx to perform. */
    gasWanted: number;
    /** GasUsed is the amount of gas actually consumed. */
    gasUsed: number;
}
/** Result is the union of ResponseFormat and ResponseCheckTx. */
export interface Result {
    /**
     * Data is any data returned from message or handler execution. It MUST be
     * length prefixed in order to separate data from multiple message executions.
     * Deprecated. This field is still populated, but prefer msg_response instead
     * because it also contains the Msg response typeURL.
     *
     * @deprecated
     */
    data: Uint8Array;
    /** Log contains the log information from message or handler execution. */
    log: string;
    /**
     * Events contains a slice of Event objects that were emitted during message
     * or handler execution.
     */
    events: Event[];
    /**
     * msg_responses contains the Msg handler responses type packed in Anys.
     *
     * Since: cosmos-sdk 0.46
     */
    msgResponses: Any[];
}
/**
 * SimulationResponse defines the response generated when a transaction is
 * successfully simulated.
 */
export interface SimulationResponse {
    gasInfo: GasInfo | undefined;
    result: Result | undefined;
}
/**
 * MsgData defines the data returned in a Result object during message
 * execution.
 *
 * @deprecated
 */
export interface MsgData {
    msgType: string;
    data: Uint8Array;
}
/**
 * TxMsgData defines a list of MsgData. A transaction will have a MsgData object
 * for each message.
 */
export interface TxMsgData {
    /**
     * data field is deprecated and not populated.
     *
     * @deprecated
     */
    data: MsgData[];
    /**
     * msg_responses contains the Msg handler responses packed into Anys.
     *
     * Since: cosmos-sdk 0.46
     */
    msgResponses: Any[];
}
/** SearchTxsResult defines a structure for querying txs pageable */
export interface SearchTxsResult {
    /** Count of all txs */
    totalCount: number;
    /** Count of txs in current page */
    count: number;
    /** Index of current page, start from 1 */
    pageNumber: number;
    /** Count of total pages */
    pageTotal: number;
    /** Max count txs per page */
    limit: number;
    /** List of txs in current page */
    txs: TxResponse[];
}
/** SearchBlocksResult defines a structure for querying blocks pageable */
export interface SearchBlocksResult {
    /** Count of all blocks */
    totalCount: number;
    /** Count of blocks in current page */
    count: number;
    /** Index of current page, start from 1 */
    pageNumber: number;
    /** Count of total pages */
    pageTotal: number;
    /** Max count blocks per page */
    limit: number;
    /** List of blocks in current page */
    blocks: Block[];
}
export declare const TxResponse: {
    encode(message: TxResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TxResponse;
    fromJSON(object: any): TxResponse;
    toJSON(message: TxResponse): unknown;
    create<I extends Exact<DeepPartial<TxResponse>, I>>(base?: I): TxResponse;
    fromPartial<I extends Exact<DeepPartial<TxResponse>, I>>(object: I): TxResponse;
};
export declare const ABCIMessageLog: {
    encode(message: ABCIMessageLog, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ABCIMessageLog;
    fromJSON(object: any): ABCIMessageLog;
    toJSON(message: ABCIMessageLog): unknown;
    create<I extends Exact<DeepPartial<ABCIMessageLog>, I>>(base?: I): ABCIMessageLog;
    fromPartial<I extends Exact<DeepPartial<ABCIMessageLog>, I>>(object: I): ABCIMessageLog;
};
export declare const StringEvent: {
    encode(message: StringEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StringEvent;
    fromJSON(object: any): StringEvent;
    toJSON(message: StringEvent): unknown;
    create<I extends Exact<DeepPartial<StringEvent>, I>>(base?: I): StringEvent;
    fromPartial<I extends Exact<DeepPartial<StringEvent>, I>>(object: I): StringEvent;
};
export declare const Attribute: {
    encode(message: Attribute, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Attribute;
    fromJSON(object: any): Attribute;
    toJSON(message: Attribute): unknown;
    create<I extends Exact<DeepPartial<Attribute>, I>>(base?: I): Attribute;
    fromPartial<I extends Exact<DeepPartial<Attribute>, I>>(object: I): Attribute;
};
export declare const GasInfo: {
    encode(message: GasInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GasInfo;
    fromJSON(object: any): GasInfo;
    toJSON(message: GasInfo): unknown;
    create<I extends Exact<DeepPartial<GasInfo>, I>>(base?: I): GasInfo;
    fromPartial<I extends Exact<DeepPartial<GasInfo>, I>>(object: I): GasInfo;
};
export declare const Result: {
    encode(message: Result, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Result;
    fromJSON(object: any): Result;
    toJSON(message: Result): unknown;
    create<I extends Exact<DeepPartial<Result>, I>>(base?: I): Result;
    fromPartial<I extends Exact<DeepPartial<Result>, I>>(object: I): Result;
};
export declare const SimulationResponse: {
    encode(message: SimulationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SimulationResponse;
    fromJSON(object: any): SimulationResponse;
    toJSON(message: SimulationResponse): unknown;
    create<I extends Exact<DeepPartial<SimulationResponse>, I>>(base?: I): SimulationResponse;
    fromPartial<I extends Exact<DeepPartial<SimulationResponse>, I>>(object: I): SimulationResponse;
};
export declare const MsgData: {
    encode(message: MsgData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgData;
    fromJSON(object: any): MsgData;
    toJSON(message: MsgData): unknown;
    create<I extends Exact<DeepPartial<MsgData>, I>>(base?: I): MsgData;
    fromPartial<I extends Exact<DeepPartial<MsgData>, I>>(object: I): MsgData;
};
export declare const TxMsgData: {
    encode(message: TxMsgData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TxMsgData;
    fromJSON(object: any): TxMsgData;
    toJSON(message: TxMsgData): unknown;
    create<I extends Exact<DeepPartial<TxMsgData>, I>>(base?: I): TxMsgData;
    fromPartial<I extends Exact<DeepPartial<TxMsgData>, I>>(object: I): TxMsgData;
};
export declare const SearchTxsResult: {
    encode(message: SearchTxsResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SearchTxsResult;
    fromJSON(object: any): SearchTxsResult;
    toJSON(message: SearchTxsResult): unknown;
    create<I extends Exact<DeepPartial<SearchTxsResult>, I>>(base?: I): SearchTxsResult;
    fromPartial<I extends Exact<DeepPartial<SearchTxsResult>, I>>(object: I): SearchTxsResult;
};
export declare const SearchBlocksResult: {
    encode(message: SearchBlocksResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SearchBlocksResult;
    fromJSON(object: any): SearchBlocksResult;
    toJSON(message: SearchBlocksResult): unknown;
    create<I extends Exact<DeepPartial<SearchBlocksResult>, I>>(base?: I): SearchBlocksResult;
    fromPartial<I extends Exact<DeepPartial<SearchBlocksResult>, I>>(object: I): SearchBlocksResult;
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
