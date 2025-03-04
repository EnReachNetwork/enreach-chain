"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceClientImpl = exports.ServiceServiceName = exports.TxDecodeAminoResponse = exports.TxDecodeAminoRequest = exports.TxEncodeAminoResponse = exports.TxEncodeAminoRequest = exports.TxEncodeResponse = exports.TxEncodeRequest = exports.TxDecodeResponse = exports.TxDecodeRequest = exports.GetBlockWithTxsResponse = exports.GetBlockWithTxsRequest = exports.GetTxResponse = exports.GetTxRequest = exports.SimulateResponse = exports.SimulateRequest = exports.BroadcastTxResponse = exports.BroadcastTxRequest = exports.GetTxsEventResponse = exports.GetTxsEventRequest = exports.BroadcastMode = exports.OrderBy = exports.protobufPackage = void 0;
exports.orderByFromJSON = orderByFromJSON;
exports.orderByToJSON = orderByToJSON;
exports.broadcastModeFromJSON = broadcastModeFromJSON;
exports.broadcastModeToJSON = broadcastModeToJSON;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const block_1 = require("../../../tendermint/types/block");
const types_1 = require("../../../tendermint/types/types");
const abci_1 = require("../../base/abci/v1beta1/abci");
const pagination_1 = require("../../base/query/v1beta1/pagination");
const tx_1 = require("./tx");
exports.protobufPackage = "cosmos.tx.v1beta1";
/** OrderBy defines the sorting order */
var OrderBy;
(function (OrderBy) {
    /**
     * ORDER_BY_UNSPECIFIED - ORDER_BY_UNSPECIFIED specifies an unknown sorting order. OrderBy defaults
     * to ASC in this case.
     */
    OrderBy[OrderBy["ORDER_BY_UNSPECIFIED"] = 0] = "ORDER_BY_UNSPECIFIED";
    /** ORDER_BY_ASC - ORDER_BY_ASC defines ascending order */
    OrderBy[OrderBy["ORDER_BY_ASC"] = 1] = "ORDER_BY_ASC";
    /** ORDER_BY_DESC - ORDER_BY_DESC defines descending order */
    OrderBy[OrderBy["ORDER_BY_DESC"] = 2] = "ORDER_BY_DESC";
    OrderBy[OrderBy["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(OrderBy || (exports.OrderBy = OrderBy = {}));
function orderByFromJSON(object) {
    switch (object) {
        case 0:
        case "ORDER_BY_UNSPECIFIED":
            return OrderBy.ORDER_BY_UNSPECIFIED;
        case 1:
        case "ORDER_BY_ASC":
            return OrderBy.ORDER_BY_ASC;
        case 2:
        case "ORDER_BY_DESC":
            return OrderBy.ORDER_BY_DESC;
        case -1:
        case "UNRECOGNIZED":
        default:
            return OrderBy.UNRECOGNIZED;
    }
}
function orderByToJSON(object) {
    switch (object) {
        case OrderBy.ORDER_BY_UNSPECIFIED:
            return "ORDER_BY_UNSPECIFIED";
        case OrderBy.ORDER_BY_ASC:
            return "ORDER_BY_ASC";
        case OrderBy.ORDER_BY_DESC:
            return "ORDER_BY_DESC";
        case OrderBy.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
/**
 * BroadcastMode specifies the broadcast mode for the TxService.Broadcast RPC
 * method.
 */
var BroadcastMode;
(function (BroadcastMode) {
    /** BROADCAST_MODE_UNSPECIFIED - zero-value for mode ordering */
    BroadcastMode[BroadcastMode["BROADCAST_MODE_UNSPECIFIED"] = 0] = "BROADCAST_MODE_UNSPECIFIED";
    /**
     * BROADCAST_MODE_BLOCK - DEPRECATED: use BROADCAST_MODE_SYNC instead,
     * BROADCAST_MODE_BLOCK is not supported by the SDK from v0.47.x onwards.
     *
     * @deprecated
     */
    BroadcastMode[BroadcastMode["BROADCAST_MODE_BLOCK"] = 1] = "BROADCAST_MODE_BLOCK";
    /**
     * BROADCAST_MODE_SYNC - BROADCAST_MODE_SYNC defines a tx broadcasting mode where the client waits
     * for a CheckTx execution response only.
     */
    BroadcastMode[BroadcastMode["BROADCAST_MODE_SYNC"] = 2] = "BROADCAST_MODE_SYNC";
    /**
     * BROADCAST_MODE_ASYNC - BROADCAST_MODE_ASYNC defines a tx broadcasting mode where the client
     * returns immediately.
     */
    BroadcastMode[BroadcastMode["BROADCAST_MODE_ASYNC"] = 3] = "BROADCAST_MODE_ASYNC";
    BroadcastMode[BroadcastMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(BroadcastMode || (exports.BroadcastMode = BroadcastMode = {}));
function broadcastModeFromJSON(object) {
    switch (object) {
        case 0:
        case "BROADCAST_MODE_UNSPECIFIED":
            return BroadcastMode.BROADCAST_MODE_UNSPECIFIED;
        case 1:
        case "BROADCAST_MODE_BLOCK":
            return BroadcastMode.BROADCAST_MODE_BLOCK;
        case 2:
        case "BROADCAST_MODE_SYNC":
            return BroadcastMode.BROADCAST_MODE_SYNC;
        case 3:
        case "BROADCAST_MODE_ASYNC":
            return BroadcastMode.BROADCAST_MODE_ASYNC;
        case -1:
        case "UNRECOGNIZED":
        default:
            return BroadcastMode.UNRECOGNIZED;
    }
}
function broadcastModeToJSON(object) {
    switch (object) {
        case BroadcastMode.BROADCAST_MODE_UNSPECIFIED:
            return "BROADCAST_MODE_UNSPECIFIED";
        case BroadcastMode.BROADCAST_MODE_BLOCK:
            return "BROADCAST_MODE_BLOCK";
        case BroadcastMode.BROADCAST_MODE_SYNC:
            return "BROADCAST_MODE_SYNC";
        case BroadcastMode.BROADCAST_MODE_ASYNC:
            return "BROADCAST_MODE_ASYNC";
        case BroadcastMode.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseGetTxsEventRequest() {
    return { events: [], pagination: undefined, orderBy: 0, page: 0, limit: 0, query: "" };
}
exports.GetTxsEventRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.events) {
            writer.uint32(10).string(v);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        if (message.orderBy !== 0) {
            writer.uint32(24).int32(message.orderBy);
        }
        if (message.page !== 0) {
            writer.uint32(32).uint64(message.page);
        }
        if (message.limit !== 0) {
            writer.uint32(40).uint64(message.limit);
        }
        if (message.query !== "") {
            writer.uint32(50).string(message.query);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTxsEventRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.events.push(reader.string());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.orderBy = reader.int32();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.page = longToNumber(reader.uint64());
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.limit = longToNumber(reader.uint64());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.query = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            events: Array.isArray(object?.events) ? object.events.map((e) => String(e)) : [],
            pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined,
            orderBy: isSet(object.orderBy) ? orderByFromJSON(object.orderBy) : 0,
            page: isSet(object.page) ? Number(object.page) : 0,
            limit: isSet(object.limit) ? Number(object.limit) : 0,
            query: isSet(object.query) ? String(object.query) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.events?.length) {
            obj.events = message.events;
        }
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageRequest.toJSON(message.pagination);
        }
        if (message.orderBy !== 0) {
            obj.orderBy = orderByToJSON(message.orderBy);
        }
        if (message.page !== 0) {
            obj.page = Math.round(message.page);
        }
        if (message.limit !== 0) {
            obj.limit = Math.round(message.limit);
        }
        if (message.query !== "") {
            obj.query = message.query;
        }
        return obj;
    },
    create(base) {
        return exports.GetTxsEventRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetTxsEventRequest();
        message.events = object.events?.map((e) => e) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        message.orderBy = object.orderBy ?? 0;
        message.page = object.page ?? 0;
        message.limit = object.limit ?? 0;
        message.query = object.query ?? "";
        return message;
    },
};
function createBaseGetTxsEventResponse() {
    return { txs: [], txResponses: [], pagination: undefined, total: 0 };
}
exports.GetTxsEventResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.txs) {
            tx_1.Tx.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.txResponses) {
            abci_1.TxResponse.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        if (message.total !== 0) {
            writer.uint32(32).uint64(message.total);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTxsEventResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.txs.push(tx_1.Tx.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.txResponses.push(abci_1.TxResponse.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.total = longToNumber(reader.uint64());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            txs: Array.isArray(object?.txs) ? object.txs.map((e) => tx_1.Tx.fromJSON(e)) : [],
            txResponses: Array.isArray(object?.txResponses) ? object.txResponses.map((e) => abci_1.TxResponse.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
            total: isSet(object.total) ? Number(object.total) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.txs?.length) {
            obj.txs = message.txs.map((e) => tx_1.Tx.toJSON(e));
        }
        if (message.txResponses?.length) {
            obj.txResponses = message.txResponses.map((e) => abci_1.TxResponse.toJSON(e));
        }
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageResponse.toJSON(message.pagination);
        }
        if (message.total !== 0) {
            obj.total = Math.round(message.total);
        }
        return obj;
    },
    create(base) {
        return exports.GetTxsEventResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetTxsEventResponse();
        message.txs = object.txs?.map((e) => tx_1.Tx.fromPartial(e)) || [];
        message.txResponses = object.txResponses?.map((e) => abci_1.TxResponse.fromPartial(e)) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        message.total = object.total ?? 0;
        return message;
    },
};
function createBaseBroadcastTxRequest() {
    return { txBytes: new Uint8Array(0), mode: 0 };
}
exports.BroadcastTxRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.txBytes.length !== 0) {
            writer.uint32(10).bytes(message.txBytes);
        }
        if (message.mode !== 0) {
            writer.uint32(16).int32(message.mode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBroadcastTxRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.txBytes = reader.bytes();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.mode = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            txBytes: isSet(object.txBytes) ? bytesFromBase64(object.txBytes) : new Uint8Array(0),
            mode: isSet(object.mode) ? broadcastModeFromJSON(object.mode) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.txBytes.length !== 0) {
            obj.txBytes = base64FromBytes(message.txBytes);
        }
        if (message.mode !== 0) {
            obj.mode = broadcastModeToJSON(message.mode);
        }
        return obj;
    },
    create(base) {
        return exports.BroadcastTxRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseBroadcastTxRequest();
        message.txBytes = object.txBytes ?? new Uint8Array(0);
        message.mode = object.mode ?? 0;
        return message;
    },
};
function createBaseBroadcastTxResponse() {
    return { txResponse: undefined };
}
exports.BroadcastTxResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.txResponse !== undefined) {
            abci_1.TxResponse.encode(message.txResponse, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBroadcastTxResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.txResponse = abci_1.TxResponse.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { txResponse: isSet(object.txResponse) ? abci_1.TxResponse.fromJSON(object.txResponse) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.txResponse !== undefined) {
            obj.txResponse = abci_1.TxResponse.toJSON(message.txResponse);
        }
        return obj;
    },
    create(base) {
        return exports.BroadcastTxResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseBroadcastTxResponse();
        message.txResponse = (object.txResponse !== undefined && object.txResponse !== null)
            ? abci_1.TxResponse.fromPartial(object.txResponse)
            : undefined;
        return message;
    },
};
function createBaseSimulateRequest() {
    return { tx: undefined, txBytes: new Uint8Array(0) };
}
exports.SimulateRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.tx !== undefined) {
            tx_1.Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
        }
        if (message.txBytes.length !== 0) {
            writer.uint32(18).bytes(message.txBytes);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSimulateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.tx = tx_1.Tx.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.txBytes = reader.bytes();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            tx: isSet(object.tx) ? tx_1.Tx.fromJSON(object.tx) : undefined,
            txBytes: isSet(object.txBytes) ? bytesFromBase64(object.txBytes) : new Uint8Array(0),
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.tx !== undefined) {
            obj.tx = tx_1.Tx.toJSON(message.tx);
        }
        if (message.txBytes.length !== 0) {
            obj.txBytes = base64FromBytes(message.txBytes);
        }
        return obj;
    },
    create(base) {
        return exports.SimulateRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSimulateRequest();
        message.tx = (object.tx !== undefined && object.tx !== null) ? tx_1.Tx.fromPartial(object.tx) : undefined;
        message.txBytes = object.txBytes ?? new Uint8Array(0);
        return message;
    },
};
function createBaseSimulateResponse() {
    return { gasInfo: undefined, result: undefined };
}
exports.SimulateResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.gasInfo !== undefined) {
            abci_1.GasInfo.encode(message.gasInfo, writer.uint32(10).fork()).ldelim();
        }
        if (message.result !== undefined) {
            abci_1.Result.encode(message.result, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSimulateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.gasInfo = abci_1.GasInfo.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.result = abci_1.Result.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            gasInfo: isSet(object.gasInfo) ? abci_1.GasInfo.fromJSON(object.gasInfo) : undefined,
            result: isSet(object.result) ? abci_1.Result.fromJSON(object.result) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.gasInfo !== undefined) {
            obj.gasInfo = abci_1.GasInfo.toJSON(message.gasInfo);
        }
        if (message.result !== undefined) {
            obj.result = abci_1.Result.toJSON(message.result);
        }
        return obj;
    },
    create(base) {
        return exports.SimulateResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSimulateResponse();
        message.gasInfo = (object.gasInfo !== undefined && object.gasInfo !== null)
            ? abci_1.GasInfo.fromPartial(object.gasInfo)
            : undefined;
        message.result = (object.result !== undefined && object.result !== null)
            ? abci_1.Result.fromPartial(object.result)
            : undefined;
        return message;
    },
};
function createBaseGetTxRequest() {
    return { hash: "" };
}
exports.GetTxRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.hash !== "") {
            writer.uint32(10).string(message.hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTxRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.hash = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { hash: isSet(object.hash) ? String(object.hash) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.hash !== "") {
            obj.hash = message.hash;
        }
        return obj;
    },
    create(base) {
        return exports.GetTxRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetTxRequest();
        message.hash = object.hash ?? "";
        return message;
    },
};
function createBaseGetTxResponse() {
    return { tx: undefined, txResponse: undefined };
}
exports.GetTxResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.tx !== undefined) {
            tx_1.Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
        }
        if (message.txResponse !== undefined) {
            abci_1.TxResponse.encode(message.txResponse, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTxResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.tx = tx_1.Tx.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.txResponse = abci_1.TxResponse.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            tx: isSet(object.tx) ? tx_1.Tx.fromJSON(object.tx) : undefined,
            txResponse: isSet(object.txResponse) ? abci_1.TxResponse.fromJSON(object.txResponse) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.tx !== undefined) {
            obj.tx = tx_1.Tx.toJSON(message.tx);
        }
        if (message.txResponse !== undefined) {
            obj.txResponse = abci_1.TxResponse.toJSON(message.txResponse);
        }
        return obj;
    },
    create(base) {
        return exports.GetTxResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetTxResponse();
        message.tx = (object.tx !== undefined && object.tx !== null) ? tx_1.Tx.fromPartial(object.tx) : undefined;
        message.txResponse = (object.txResponse !== undefined && object.txResponse !== null)
            ? abci_1.TxResponse.fromPartial(object.txResponse)
            : undefined;
        return message;
    },
};
function createBaseGetBlockWithTxsRequest() {
    return { height: 0, pagination: undefined };
}
exports.GetBlockWithTxsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.height !== 0) {
            writer.uint32(8).int64(message.height);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetBlockWithTxsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.height = longToNumber(reader.int64());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            height: isSet(object.height) ? Number(object.height) : 0,
            pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.height !== 0) {
            obj.height = Math.round(message.height);
        }
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageRequest.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.GetBlockWithTxsRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetBlockWithTxsRequest();
        message.height = object.height ?? 0;
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseGetBlockWithTxsResponse() {
    return { txs: [], blockId: undefined, block: undefined, pagination: undefined };
}
exports.GetBlockWithTxsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.txs) {
            tx_1.Tx.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.blockId !== undefined) {
            types_1.BlockID.encode(message.blockId, writer.uint32(18).fork()).ldelim();
        }
        if (message.block !== undefined) {
            block_1.Block.encode(message.block, writer.uint32(26).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetBlockWithTxsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.txs.push(tx_1.Tx.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.blockId = types_1.BlockID.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.block = block_1.Block.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            txs: Array.isArray(object?.txs) ? object.txs.map((e) => tx_1.Tx.fromJSON(e)) : [],
            blockId: isSet(object.blockId) ? types_1.BlockID.fromJSON(object.blockId) : undefined,
            block: isSet(object.block) ? block_1.Block.fromJSON(object.block) : undefined,
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.txs?.length) {
            obj.txs = message.txs.map((e) => tx_1.Tx.toJSON(e));
        }
        if (message.blockId !== undefined) {
            obj.blockId = types_1.BlockID.toJSON(message.blockId);
        }
        if (message.block !== undefined) {
            obj.block = block_1.Block.toJSON(message.block);
        }
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageResponse.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.GetBlockWithTxsResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetBlockWithTxsResponse();
        message.txs = object.txs?.map((e) => tx_1.Tx.fromPartial(e)) || [];
        message.blockId = (object.blockId !== undefined && object.blockId !== null)
            ? types_1.BlockID.fromPartial(object.blockId)
            : undefined;
        message.block = (object.block !== undefined && object.block !== null) ? block_1.Block.fromPartial(object.block) : undefined;
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseTxDecodeRequest() {
    return { txBytes: new Uint8Array(0) };
}
exports.TxDecodeRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.txBytes.length !== 0) {
            writer.uint32(10).bytes(message.txBytes);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxDecodeRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.txBytes = reader.bytes();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { txBytes: isSet(object.txBytes) ? bytesFromBase64(object.txBytes) : new Uint8Array(0) };
    },
    toJSON(message) {
        const obj = {};
        if (message.txBytes.length !== 0) {
            obj.txBytes = base64FromBytes(message.txBytes);
        }
        return obj;
    },
    create(base) {
        return exports.TxDecodeRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseTxDecodeRequest();
        message.txBytes = object.txBytes ?? new Uint8Array(0);
        return message;
    },
};
function createBaseTxDecodeResponse() {
    return { tx: undefined };
}
exports.TxDecodeResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.tx !== undefined) {
            tx_1.Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxDecodeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.tx = tx_1.Tx.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { tx: isSet(object.tx) ? tx_1.Tx.fromJSON(object.tx) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.tx !== undefined) {
            obj.tx = tx_1.Tx.toJSON(message.tx);
        }
        return obj;
    },
    create(base) {
        return exports.TxDecodeResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseTxDecodeResponse();
        message.tx = (object.tx !== undefined && object.tx !== null) ? tx_1.Tx.fromPartial(object.tx) : undefined;
        return message;
    },
};
function createBaseTxEncodeRequest() {
    return { tx: undefined };
}
exports.TxEncodeRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.tx !== undefined) {
            tx_1.Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxEncodeRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.tx = tx_1.Tx.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { tx: isSet(object.tx) ? tx_1.Tx.fromJSON(object.tx) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.tx !== undefined) {
            obj.tx = tx_1.Tx.toJSON(message.tx);
        }
        return obj;
    },
    create(base) {
        return exports.TxEncodeRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseTxEncodeRequest();
        message.tx = (object.tx !== undefined && object.tx !== null) ? tx_1.Tx.fromPartial(object.tx) : undefined;
        return message;
    },
};
function createBaseTxEncodeResponse() {
    return { txBytes: new Uint8Array(0) };
}
exports.TxEncodeResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.txBytes.length !== 0) {
            writer.uint32(10).bytes(message.txBytes);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxEncodeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.txBytes = reader.bytes();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { txBytes: isSet(object.txBytes) ? bytesFromBase64(object.txBytes) : new Uint8Array(0) };
    },
    toJSON(message) {
        const obj = {};
        if (message.txBytes.length !== 0) {
            obj.txBytes = base64FromBytes(message.txBytes);
        }
        return obj;
    },
    create(base) {
        return exports.TxEncodeResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseTxEncodeResponse();
        message.txBytes = object.txBytes ?? new Uint8Array(0);
        return message;
    },
};
function createBaseTxEncodeAminoRequest() {
    return { aminoJson: "" };
}
exports.TxEncodeAminoRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.aminoJson !== "") {
            writer.uint32(10).string(message.aminoJson);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxEncodeAminoRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.aminoJson = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { aminoJson: isSet(object.aminoJson) ? String(object.aminoJson) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.aminoJson !== "") {
            obj.aminoJson = message.aminoJson;
        }
        return obj;
    },
    create(base) {
        return exports.TxEncodeAminoRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseTxEncodeAminoRequest();
        message.aminoJson = object.aminoJson ?? "";
        return message;
    },
};
function createBaseTxEncodeAminoResponse() {
    return { aminoBinary: new Uint8Array(0) };
}
exports.TxEncodeAminoResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.aminoBinary.length !== 0) {
            writer.uint32(10).bytes(message.aminoBinary);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxEncodeAminoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.aminoBinary = reader.bytes();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { aminoBinary: isSet(object.aminoBinary) ? bytesFromBase64(object.aminoBinary) : new Uint8Array(0) };
    },
    toJSON(message) {
        const obj = {};
        if (message.aminoBinary.length !== 0) {
            obj.aminoBinary = base64FromBytes(message.aminoBinary);
        }
        return obj;
    },
    create(base) {
        return exports.TxEncodeAminoResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseTxEncodeAminoResponse();
        message.aminoBinary = object.aminoBinary ?? new Uint8Array(0);
        return message;
    },
};
function createBaseTxDecodeAminoRequest() {
    return { aminoBinary: new Uint8Array(0) };
}
exports.TxDecodeAminoRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.aminoBinary.length !== 0) {
            writer.uint32(10).bytes(message.aminoBinary);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxDecodeAminoRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.aminoBinary = reader.bytes();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { aminoBinary: isSet(object.aminoBinary) ? bytesFromBase64(object.aminoBinary) : new Uint8Array(0) };
    },
    toJSON(message) {
        const obj = {};
        if (message.aminoBinary.length !== 0) {
            obj.aminoBinary = base64FromBytes(message.aminoBinary);
        }
        return obj;
    },
    create(base) {
        return exports.TxDecodeAminoRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseTxDecodeAminoRequest();
        message.aminoBinary = object.aminoBinary ?? new Uint8Array(0);
        return message;
    },
};
function createBaseTxDecodeAminoResponse() {
    return { aminoJson: "" };
}
exports.TxDecodeAminoResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.aminoJson !== "") {
            writer.uint32(10).string(message.aminoJson);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxDecodeAminoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.aminoJson = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { aminoJson: isSet(object.aminoJson) ? String(object.aminoJson) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.aminoJson !== "") {
            obj.aminoJson = message.aminoJson;
        }
        return obj;
    },
    create(base) {
        return exports.TxDecodeAminoResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseTxDecodeAminoResponse();
        message.aminoJson = object.aminoJson ?? "";
        return message;
    },
};
exports.ServiceServiceName = "cosmos.tx.v1beta1.Service";
class ServiceClientImpl {
    constructor(rpc, opts) {
        this.service = opts?.service || exports.ServiceServiceName;
        this.rpc = rpc;
        this.Simulate = this.Simulate.bind(this);
        this.GetTx = this.GetTx.bind(this);
        this.BroadcastTx = this.BroadcastTx.bind(this);
        this.GetTxsEvent = this.GetTxsEvent.bind(this);
        this.GetBlockWithTxs = this.GetBlockWithTxs.bind(this);
        this.TxDecode = this.TxDecode.bind(this);
        this.TxEncode = this.TxEncode.bind(this);
        this.TxEncodeAmino = this.TxEncodeAmino.bind(this);
        this.TxDecodeAmino = this.TxDecodeAmino.bind(this);
    }
    Simulate(request) {
        const data = exports.SimulateRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Simulate", data);
        return promise.then((data) => exports.SimulateResponse.decode(minimal_1.default.Reader.create(data)));
    }
    GetTx(request) {
        const data = exports.GetTxRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "GetTx", data);
        return promise.then((data) => exports.GetTxResponse.decode(minimal_1.default.Reader.create(data)));
    }
    BroadcastTx(request) {
        const data = exports.BroadcastTxRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "BroadcastTx", data);
        return promise.then((data) => exports.BroadcastTxResponse.decode(minimal_1.default.Reader.create(data)));
    }
    GetTxsEvent(request) {
        const data = exports.GetTxsEventRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "GetTxsEvent", data);
        return promise.then((data) => exports.GetTxsEventResponse.decode(minimal_1.default.Reader.create(data)));
    }
    GetBlockWithTxs(request) {
        const data = exports.GetBlockWithTxsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "GetBlockWithTxs", data);
        return promise.then((data) => exports.GetBlockWithTxsResponse.decode(minimal_1.default.Reader.create(data)));
    }
    TxDecode(request) {
        const data = exports.TxDecodeRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "TxDecode", data);
        return promise.then((data) => exports.TxDecodeResponse.decode(minimal_1.default.Reader.create(data)));
    }
    TxEncode(request) {
        const data = exports.TxEncodeRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "TxEncode", data);
        return promise.then((data) => exports.TxEncodeResponse.decode(minimal_1.default.Reader.create(data)));
    }
    TxEncodeAmino(request) {
        const data = exports.TxEncodeAminoRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "TxEncodeAmino", data);
        return promise.then((data) => exports.TxEncodeAminoResponse.decode(minimal_1.default.Reader.create(data)));
    }
    TxDecodeAmino(request) {
        const data = exports.TxDecodeAminoRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "TxDecodeAmino", data);
        return promise.then((data) => exports.TxDecodeAminoResponse.decode(minimal_1.default.Reader.create(data)));
    }
}
exports.ServiceClientImpl = ServiceClientImpl;
const tsProtoGlobalThis = (() => {
    if (typeof globalThis !== "undefined") {
        return globalThis;
    }
    if (typeof self !== "undefined") {
        return self;
    }
    if (typeof window !== "undefined") {
        return window;
    }
    if (typeof global !== "undefined") {
        return global;
    }
    throw "Unable to locate global object";
})();
function bytesFromBase64(b64) {
    if (tsProtoGlobalThis.Buffer) {
        return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
    }
    else {
        const bin = tsProtoGlobalThis.atob(b64);
        const arr = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; ++i) {
            arr[i] = bin.charCodeAt(i);
        }
        return arr;
    }
}
function base64FromBytes(arr) {
    if (tsProtoGlobalThis.Buffer) {
        return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
    }
    else {
        const bin = [];
        arr.forEach((byte) => {
            bin.push(String.fromCharCode(byte));
        });
        return tsProtoGlobalThis.btoa(bin.join(""));
    }
}
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
