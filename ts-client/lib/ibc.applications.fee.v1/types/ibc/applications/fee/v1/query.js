"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryServiceName = exports.QueryFeeEnabledChannelResponse = exports.QueryFeeEnabledChannelRequest = exports.QueryFeeEnabledChannelsResponse = exports.QueryFeeEnabledChannelsRequest = exports.QueryCounterpartyPayeeResponse = exports.QueryCounterpartyPayeeRequest = exports.QueryPayeeResponse = exports.QueryPayeeRequest = exports.QueryTotalTimeoutFeesResponse = exports.QueryTotalTimeoutFeesRequest = exports.QueryTotalAckFeesResponse = exports.QueryTotalAckFeesRequest = exports.QueryTotalRecvFeesResponse = exports.QueryTotalRecvFeesRequest = exports.QueryIncentivizedPacketsForChannelResponse = exports.QueryIncentivizedPacketsForChannelRequest = exports.QueryIncentivizedPacketResponse = exports.QueryIncentivizedPacketRequest = exports.QueryIncentivizedPacketsResponse = exports.QueryIncentivizedPacketsRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const pagination_1 = require("../../../../cosmos/base/query/v1beta1/pagination");
const coin_1 = require("../../../../cosmos/base/v1beta1/coin");
const channel_1 = require("../../../core/channel/v1/channel");
const fee_1 = require("./fee");
const genesis_1 = require("./genesis");
exports.protobufPackage = "ibc.applications.fee.v1";
function createBaseQueryIncentivizedPacketsRequest() {
    return { pagination: undefined, queryHeight: 0 };
}
exports.QueryIncentivizedPacketsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        if (message.queryHeight !== 0) {
            writer.uint32(16).uint64(message.queryHeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryIncentivizedPacketsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.queryHeight = longToNumber(reader.uint64());
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
            pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined,
            queryHeight: isSet(object.queryHeight) ? Number(object.queryHeight) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageRequest.toJSON(message.pagination);
        }
        if (message.queryHeight !== 0) {
            obj.queryHeight = Math.round(message.queryHeight);
        }
        return obj;
    },
    create(base) {
        return exports.QueryIncentivizedPacketsRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryIncentivizedPacketsRequest();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        message.queryHeight = object.queryHeight ?? 0;
        return message;
    },
};
function createBaseQueryIncentivizedPacketsResponse() {
    return { incentivizedPackets: [], pagination: undefined };
}
exports.QueryIncentivizedPacketsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.incentivizedPackets) {
            fee_1.IdentifiedPacketFees.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryIncentivizedPacketsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.incentivizedPackets.push(fee_1.IdentifiedPacketFees.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
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
            incentivizedPackets: Array.isArray(object?.incentivizedPackets)
                ? object.incentivizedPackets.map((e) => fee_1.IdentifiedPacketFees.fromJSON(e))
                : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.incentivizedPackets?.length) {
            obj.incentivizedPackets = message.incentivizedPackets.map((e) => fee_1.IdentifiedPacketFees.toJSON(e));
        }
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageResponse.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.QueryIncentivizedPacketsResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryIncentivizedPacketsResponse();
        message.incentivizedPackets = object.incentivizedPackets?.map((e) => fee_1.IdentifiedPacketFees.fromPartial(e)) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryIncentivizedPacketRequest() {
    return { packetId: undefined, queryHeight: 0 };
}
exports.QueryIncentivizedPacketRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.packetId !== undefined) {
            channel_1.PacketId.encode(message.packetId, writer.uint32(10).fork()).ldelim();
        }
        if (message.queryHeight !== 0) {
            writer.uint32(16).uint64(message.queryHeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryIncentivizedPacketRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.packetId = channel_1.PacketId.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.queryHeight = longToNumber(reader.uint64());
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
            packetId: isSet(object.packetId) ? channel_1.PacketId.fromJSON(object.packetId) : undefined,
            queryHeight: isSet(object.queryHeight) ? Number(object.queryHeight) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.packetId !== undefined) {
            obj.packetId = channel_1.PacketId.toJSON(message.packetId);
        }
        if (message.queryHeight !== 0) {
            obj.queryHeight = Math.round(message.queryHeight);
        }
        return obj;
    },
    create(base) {
        return exports.QueryIncentivizedPacketRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryIncentivizedPacketRequest();
        message.packetId = (object.packetId !== undefined && object.packetId !== null)
            ? channel_1.PacketId.fromPartial(object.packetId)
            : undefined;
        message.queryHeight = object.queryHeight ?? 0;
        return message;
    },
};
function createBaseQueryIncentivizedPacketResponse() {
    return { incentivizedPacket: undefined };
}
exports.QueryIncentivizedPacketResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.incentivizedPacket !== undefined) {
            fee_1.IdentifiedPacketFees.encode(message.incentivizedPacket, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryIncentivizedPacketResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.incentivizedPacket = fee_1.IdentifiedPacketFees.decode(reader, reader.uint32());
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
            incentivizedPacket: isSet(object.incentivizedPacket)
                ? fee_1.IdentifiedPacketFees.fromJSON(object.incentivizedPacket)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.incentivizedPacket !== undefined) {
            obj.incentivizedPacket = fee_1.IdentifiedPacketFees.toJSON(message.incentivizedPacket);
        }
        return obj;
    },
    create(base) {
        return exports.QueryIncentivizedPacketResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryIncentivizedPacketResponse();
        message.incentivizedPacket = (object.incentivizedPacket !== undefined && object.incentivizedPacket !== null)
            ? fee_1.IdentifiedPacketFees.fromPartial(object.incentivizedPacket)
            : undefined;
        return message;
    },
};
function createBaseQueryIncentivizedPacketsForChannelRequest() {
    return { pagination: undefined, portId: "", channelId: "", queryHeight: 0 };
}
exports.QueryIncentivizedPacketsForChannelRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        if (message.portId !== "") {
            writer.uint32(18).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(26).string(message.channelId);
        }
        if (message.queryHeight !== 0) {
            writer.uint32(32).uint64(message.queryHeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryIncentivizedPacketsForChannelRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.portId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.channelId = reader.string();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.queryHeight = longToNumber(reader.uint64());
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
            pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined,
            portId: isSet(object.portId) ? String(object.portId) : "",
            channelId: isSet(object.channelId) ? String(object.channelId) : "",
            queryHeight: isSet(object.queryHeight) ? Number(object.queryHeight) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageRequest.toJSON(message.pagination);
        }
        if (message.portId !== "") {
            obj.portId = message.portId;
        }
        if (message.channelId !== "") {
            obj.channelId = message.channelId;
        }
        if (message.queryHeight !== 0) {
            obj.queryHeight = Math.round(message.queryHeight);
        }
        return obj;
    },
    create(base) {
        return exports.QueryIncentivizedPacketsForChannelRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryIncentivizedPacketsForChannelRequest();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.queryHeight = object.queryHeight ?? 0;
        return message;
    },
};
function createBaseQueryIncentivizedPacketsForChannelResponse() {
    return { incentivizedPackets: [], pagination: undefined };
}
exports.QueryIncentivizedPacketsForChannelResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.incentivizedPackets) {
            fee_1.IdentifiedPacketFees.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryIncentivizedPacketsForChannelResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.incentivizedPackets.push(fee_1.IdentifiedPacketFees.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
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
            incentivizedPackets: Array.isArray(object?.incentivizedPackets)
                ? object.incentivizedPackets.map((e) => fee_1.IdentifiedPacketFees.fromJSON(e))
                : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.incentivizedPackets?.length) {
            obj.incentivizedPackets = message.incentivizedPackets.map((e) => fee_1.IdentifiedPacketFees.toJSON(e));
        }
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageResponse.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.QueryIncentivizedPacketsForChannelResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryIncentivizedPacketsForChannelResponse();
        message.incentivizedPackets = object.incentivizedPackets?.map((e) => fee_1.IdentifiedPacketFees.fromPartial(e)) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryTotalRecvFeesRequest() {
    return { packetId: undefined };
}
exports.QueryTotalRecvFeesRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.packetId !== undefined) {
            channel_1.PacketId.encode(message.packetId, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalRecvFeesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.packetId = channel_1.PacketId.decode(reader, reader.uint32());
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
        return { packetId: isSet(object.packetId) ? channel_1.PacketId.fromJSON(object.packetId) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.packetId !== undefined) {
            obj.packetId = channel_1.PacketId.toJSON(message.packetId);
        }
        return obj;
    },
    create(base) {
        return exports.QueryTotalRecvFeesRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryTotalRecvFeesRequest();
        message.packetId = (object.packetId !== undefined && object.packetId !== null)
            ? channel_1.PacketId.fromPartial(object.packetId)
            : undefined;
        return message;
    },
};
function createBaseQueryTotalRecvFeesResponse() {
    return { recvFees: [] };
}
exports.QueryTotalRecvFeesResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.recvFees) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalRecvFeesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.recvFees.push(coin_1.Coin.decode(reader, reader.uint32()));
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
        return { recvFees: Array.isArray(object?.recvFees) ? object.recvFees.map((e) => coin_1.Coin.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.recvFees?.length) {
            obj.recvFees = message.recvFees.map((e) => coin_1.Coin.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.QueryTotalRecvFeesResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryTotalRecvFeesResponse();
        message.recvFees = object.recvFees?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
};
function createBaseQueryTotalAckFeesRequest() {
    return { packetId: undefined };
}
exports.QueryTotalAckFeesRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.packetId !== undefined) {
            channel_1.PacketId.encode(message.packetId, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalAckFeesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.packetId = channel_1.PacketId.decode(reader, reader.uint32());
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
        return { packetId: isSet(object.packetId) ? channel_1.PacketId.fromJSON(object.packetId) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.packetId !== undefined) {
            obj.packetId = channel_1.PacketId.toJSON(message.packetId);
        }
        return obj;
    },
    create(base) {
        return exports.QueryTotalAckFeesRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryTotalAckFeesRequest();
        message.packetId = (object.packetId !== undefined && object.packetId !== null)
            ? channel_1.PacketId.fromPartial(object.packetId)
            : undefined;
        return message;
    },
};
function createBaseQueryTotalAckFeesResponse() {
    return { ackFees: [] };
}
exports.QueryTotalAckFeesResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.ackFees) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalAckFeesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.ackFees.push(coin_1.Coin.decode(reader, reader.uint32()));
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
        return { ackFees: Array.isArray(object?.ackFees) ? object.ackFees.map((e) => coin_1.Coin.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.ackFees?.length) {
            obj.ackFees = message.ackFees.map((e) => coin_1.Coin.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.QueryTotalAckFeesResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryTotalAckFeesResponse();
        message.ackFees = object.ackFees?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
};
function createBaseQueryTotalTimeoutFeesRequest() {
    return { packetId: undefined };
}
exports.QueryTotalTimeoutFeesRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.packetId !== undefined) {
            channel_1.PacketId.encode(message.packetId, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalTimeoutFeesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.packetId = channel_1.PacketId.decode(reader, reader.uint32());
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
        return { packetId: isSet(object.packetId) ? channel_1.PacketId.fromJSON(object.packetId) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.packetId !== undefined) {
            obj.packetId = channel_1.PacketId.toJSON(message.packetId);
        }
        return obj;
    },
    create(base) {
        return exports.QueryTotalTimeoutFeesRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryTotalTimeoutFeesRequest();
        message.packetId = (object.packetId !== undefined && object.packetId !== null)
            ? channel_1.PacketId.fromPartial(object.packetId)
            : undefined;
        return message;
    },
};
function createBaseQueryTotalTimeoutFeesResponse() {
    return { timeoutFees: [] };
}
exports.QueryTotalTimeoutFeesResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.timeoutFees) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalTimeoutFeesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.timeoutFees.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            timeoutFees: Array.isArray(object?.timeoutFees) ? object.timeoutFees.map((e) => coin_1.Coin.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.timeoutFees?.length) {
            obj.timeoutFees = message.timeoutFees.map((e) => coin_1.Coin.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.QueryTotalTimeoutFeesResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryTotalTimeoutFeesResponse();
        message.timeoutFees = object.timeoutFees?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
};
function createBaseQueryPayeeRequest() {
    return { channelId: "", relayer: "" };
}
exports.QueryPayeeRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.channelId !== "") {
            writer.uint32(10).string(message.channelId);
        }
        if (message.relayer !== "") {
            writer.uint32(18).string(message.relayer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPayeeRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.channelId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.relayer = reader.string();
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
            channelId: isSet(object.channelId) ? String(object.channelId) : "",
            relayer: isSet(object.relayer) ? String(object.relayer) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.channelId !== "") {
            obj.channelId = message.channelId;
        }
        if (message.relayer !== "") {
            obj.relayer = message.relayer;
        }
        return obj;
    },
    create(base) {
        return exports.QueryPayeeRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryPayeeRequest();
        message.channelId = object.channelId ?? "";
        message.relayer = object.relayer ?? "";
        return message;
    },
};
function createBaseQueryPayeeResponse() {
    return { payeeAddress: "" };
}
exports.QueryPayeeResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.payeeAddress !== "") {
            writer.uint32(10).string(message.payeeAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPayeeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.payeeAddress = reader.string();
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
        return { payeeAddress: isSet(object.payeeAddress) ? String(object.payeeAddress) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.payeeAddress !== "") {
            obj.payeeAddress = message.payeeAddress;
        }
        return obj;
    },
    create(base) {
        return exports.QueryPayeeResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryPayeeResponse();
        message.payeeAddress = object.payeeAddress ?? "";
        return message;
    },
};
function createBaseQueryCounterpartyPayeeRequest() {
    return { channelId: "", relayer: "" };
}
exports.QueryCounterpartyPayeeRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.channelId !== "") {
            writer.uint32(10).string(message.channelId);
        }
        if (message.relayer !== "") {
            writer.uint32(18).string(message.relayer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCounterpartyPayeeRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.channelId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.relayer = reader.string();
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
            channelId: isSet(object.channelId) ? String(object.channelId) : "",
            relayer: isSet(object.relayer) ? String(object.relayer) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.channelId !== "") {
            obj.channelId = message.channelId;
        }
        if (message.relayer !== "") {
            obj.relayer = message.relayer;
        }
        return obj;
    },
    create(base) {
        return exports.QueryCounterpartyPayeeRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryCounterpartyPayeeRequest();
        message.channelId = object.channelId ?? "";
        message.relayer = object.relayer ?? "";
        return message;
    },
};
function createBaseQueryCounterpartyPayeeResponse() {
    return { counterpartyPayee: "" };
}
exports.QueryCounterpartyPayeeResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.counterpartyPayee !== "") {
            writer.uint32(10).string(message.counterpartyPayee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCounterpartyPayeeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.counterpartyPayee = reader.string();
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
        return { counterpartyPayee: isSet(object.counterpartyPayee) ? String(object.counterpartyPayee) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.counterpartyPayee !== "") {
            obj.counterpartyPayee = message.counterpartyPayee;
        }
        return obj;
    },
    create(base) {
        return exports.QueryCounterpartyPayeeResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryCounterpartyPayeeResponse();
        message.counterpartyPayee = object.counterpartyPayee ?? "";
        return message;
    },
};
function createBaseQueryFeeEnabledChannelsRequest() {
    return { pagination: undefined, queryHeight: 0 };
}
exports.QueryFeeEnabledChannelsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        if (message.queryHeight !== 0) {
            writer.uint32(16).uint64(message.queryHeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFeeEnabledChannelsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.queryHeight = longToNumber(reader.uint64());
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
            pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined,
            queryHeight: isSet(object.queryHeight) ? Number(object.queryHeight) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageRequest.toJSON(message.pagination);
        }
        if (message.queryHeight !== 0) {
            obj.queryHeight = Math.round(message.queryHeight);
        }
        return obj;
    },
    create(base) {
        return exports.QueryFeeEnabledChannelsRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryFeeEnabledChannelsRequest();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        message.queryHeight = object.queryHeight ?? 0;
        return message;
    },
};
function createBaseQueryFeeEnabledChannelsResponse() {
    return { feeEnabledChannels: [], pagination: undefined };
}
exports.QueryFeeEnabledChannelsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.feeEnabledChannels) {
            genesis_1.FeeEnabledChannel.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFeeEnabledChannelsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.feeEnabledChannels.push(genesis_1.FeeEnabledChannel.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
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
            feeEnabledChannels: Array.isArray(object?.feeEnabledChannels)
                ? object.feeEnabledChannels.map((e) => genesis_1.FeeEnabledChannel.fromJSON(e))
                : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.feeEnabledChannels?.length) {
            obj.feeEnabledChannels = message.feeEnabledChannels.map((e) => genesis_1.FeeEnabledChannel.toJSON(e));
        }
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageResponse.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.QueryFeeEnabledChannelsResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryFeeEnabledChannelsResponse();
        message.feeEnabledChannels = object.feeEnabledChannels?.map((e) => genesis_1.FeeEnabledChannel.fromPartial(e)) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryFeeEnabledChannelRequest() {
    return { portId: "", channelId: "" };
}
exports.QueryFeeEnabledChannelRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFeeEnabledChannelRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.portId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.channelId = reader.string();
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
            portId: isSet(object.portId) ? String(object.portId) : "",
            channelId: isSet(object.channelId) ? String(object.channelId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.portId !== "") {
            obj.portId = message.portId;
        }
        if (message.channelId !== "") {
            obj.channelId = message.channelId;
        }
        return obj;
    },
    create(base) {
        return exports.QueryFeeEnabledChannelRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryFeeEnabledChannelRequest();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        return message;
    },
};
function createBaseQueryFeeEnabledChannelResponse() {
    return { feeEnabled: false };
}
exports.QueryFeeEnabledChannelResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.feeEnabled === true) {
            writer.uint32(8).bool(message.feeEnabled);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFeeEnabledChannelResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.feeEnabled = reader.bool();
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
        return { feeEnabled: isSet(object.feeEnabled) ? Boolean(object.feeEnabled) : false };
    },
    toJSON(message) {
        const obj = {};
        if (message.feeEnabled === true) {
            obj.feeEnabled = message.feeEnabled;
        }
        return obj;
    },
    create(base) {
        return exports.QueryFeeEnabledChannelResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryFeeEnabledChannelResponse();
        message.feeEnabled = object.feeEnabled ?? false;
        return message;
    },
};
exports.QueryServiceName = "ibc.applications.fee.v1.Query";
class QueryClientImpl {
    constructor(rpc, opts) {
        this.service = opts?.service || exports.QueryServiceName;
        this.rpc = rpc;
        this.IncentivizedPackets = this.IncentivizedPackets.bind(this);
        this.IncentivizedPacket = this.IncentivizedPacket.bind(this);
        this.IncentivizedPacketsForChannel = this.IncentivizedPacketsForChannel.bind(this);
        this.TotalRecvFees = this.TotalRecvFees.bind(this);
        this.TotalAckFees = this.TotalAckFees.bind(this);
        this.TotalTimeoutFees = this.TotalTimeoutFees.bind(this);
        this.Payee = this.Payee.bind(this);
        this.CounterpartyPayee = this.CounterpartyPayee.bind(this);
        this.FeeEnabledChannels = this.FeeEnabledChannels.bind(this);
        this.FeeEnabledChannel = this.FeeEnabledChannel.bind(this);
    }
    IncentivizedPackets(request) {
        const data = exports.QueryIncentivizedPacketsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "IncentivizedPackets", data);
        return promise.then((data) => exports.QueryIncentivizedPacketsResponse.decode(minimal_1.default.Reader.create(data)));
    }
    IncentivizedPacket(request) {
        const data = exports.QueryIncentivizedPacketRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "IncentivizedPacket", data);
        return promise.then((data) => exports.QueryIncentivizedPacketResponse.decode(minimal_1.default.Reader.create(data)));
    }
    IncentivizedPacketsForChannel(request) {
        const data = exports.QueryIncentivizedPacketsForChannelRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "IncentivizedPacketsForChannel", data);
        return promise.then((data) => exports.QueryIncentivizedPacketsForChannelResponse.decode(minimal_1.default.Reader.create(data)));
    }
    TotalRecvFees(request) {
        const data = exports.QueryTotalRecvFeesRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "TotalRecvFees", data);
        return promise.then((data) => exports.QueryTotalRecvFeesResponse.decode(minimal_1.default.Reader.create(data)));
    }
    TotalAckFees(request) {
        const data = exports.QueryTotalAckFeesRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "TotalAckFees", data);
        return promise.then((data) => exports.QueryTotalAckFeesResponse.decode(minimal_1.default.Reader.create(data)));
    }
    TotalTimeoutFees(request) {
        const data = exports.QueryTotalTimeoutFeesRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "TotalTimeoutFees", data);
        return promise.then((data) => exports.QueryTotalTimeoutFeesResponse.decode(minimal_1.default.Reader.create(data)));
    }
    Payee(request) {
        const data = exports.QueryPayeeRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Payee", data);
        return promise.then((data) => exports.QueryPayeeResponse.decode(minimal_1.default.Reader.create(data)));
    }
    CounterpartyPayee(request) {
        const data = exports.QueryCounterpartyPayeeRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "CounterpartyPayee", data);
        return promise.then((data) => exports.QueryCounterpartyPayeeResponse.decode(minimal_1.default.Reader.create(data)));
    }
    FeeEnabledChannels(request) {
        const data = exports.QueryFeeEnabledChannelsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "FeeEnabledChannels", data);
        return promise.then((data) => exports.QueryFeeEnabledChannelsResponse.decode(minimal_1.default.Reader.create(data)));
    }
    FeeEnabledChannel(request) {
        const data = exports.QueryFeeEnabledChannelRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "FeeEnabledChannel", data);
        return promise.then((data) => exports.QueryFeeEnabledChannelResponse.decode(minimal_1.default.Reader.create(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
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
