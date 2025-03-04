"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryServiceName = exports.QueryChannelParamsResponse = exports.QueryChannelParamsRequest = exports.QueryUpgradeResponse = exports.QueryUpgradeRequest = exports.QueryUpgradeErrorResponse = exports.QueryUpgradeErrorRequest = exports.QueryNextSequenceSendResponse = exports.QueryNextSequenceSendRequest = exports.QueryNextSequenceReceiveResponse = exports.QueryNextSequenceReceiveRequest = exports.QueryUnreceivedAcksResponse = exports.QueryUnreceivedAcksRequest = exports.QueryUnreceivedPacketsResponse = exports.QueryUnreceivedPacketsRequest = exports.QueryPacketAcknowledgementsResponse = exports.QueryPacketAcknowledgementsRequest = exports.QueryPacketAcknowledgementResponse = exports.QueryPacketAcknowledgementRequest = exports.QueryPacketReceiptResponse = exports.QueryPacketReceiptRequest = exports.QueryPacketCommitmentsResponse = exports.QueryPacketCommitmentsRequest = exports.QueryPacketCommitmentResponse = exports.QueryPacketCommitmentRequest = exports.QueryChannelConsensusStateResponse = exports.QueryChannelConsensusStateRequest = exports.QueryChannelClientStateResponse = exports.QueryChannelClientStateRequest = exports.QueryConnectionChannelsResponse = exports.QueryConnectionChannelsRequest = exports.QueryChannelsResponse = exports.QueryChannelsRequest = exports.QueryChannelResponse = exports.QueryChannelRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const pagination_1 = require("../../../../cosmos/base/query/v1beta1/pagination");
const any_1 = require("../../../../google/protobuf/any");
const client_1 = require("../../client/v1/client");
const channel_1 = require("./channel");
const upgrade_1 = require("./upgrade");
exports.protobufPackage = "ibc.core.channel.v1";
function createBaseQueryChannelRequest() {
    return { portId: "", channelId: "" };
}
exports.QueryChannelRequest = {
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
        const message = createBaseQueryChannelRequest();
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
        return exports.QueryChannelRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryChannelRequest();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        return message;
    },
};
function createBaseQueryChannelResponse() {
    return { channel: undefined, proof: new Uint8Array(0), proofHeight: undefined };
}
exports.QueryChannelResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.channel !== undefined) {
            channel_1.Channel.encode(message.channel, writer.uint32(10).fork()).ldelim();
        }
        if (message.proof.length !== 0) {
            writer.uint32(18).bytes(message.proof);
        }
        if (message.proofHeight !== undefined) {
            client_1.Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryChannelResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.channel = channel_1.Channel.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.proof = reader.bytes();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.proofHeight = client_1.Height.decode(reader, reader.uint32());
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
            channel: isSet(object.channel) ? channel_1.Channel.fromJSON(object.channel) : undefined,
            proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(0),
            proofHeight: isSet(object.proofHeight) ? client_1.Height.fromJSON(object.proofHeight) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.channel !== undefined) {
            obj.channel = channel_1.Channel.toJSON(message.channel);
        }
        if (message.proof.length !== 0) {
            obj.proof = base64FromBytes(message.proof);
        }
        if (message.proofHeight !== undefined) {
            obj.proofHeight = client_1.Height.toJSON(message.proofHeight);
        }
        return obj;
    },
    create(base) {
        return exports.QueryChannelResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryChannelResponse();
        message.channel = (object.channel !== undefined && object.channel !== null)
            ? channel_1.Channel.fromPartial(object.channel)
            : undefined;
        message.proof = object.proof ?? new Uint8Array(0);
        message.proofHeight = (object.proofHeight !== undefined && object.proofHeight !== null)
            ? client_1.Height.fromPartial(object.proofHeight)
            : undefined;
        return message;
    },
};
function createBaseQueryChannelsRequest() {
    return { pagination: undefined };
}
exports.QueryChannelsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryChannelsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
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
        return { pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageRequest.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.QueryChannelsRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryChannelsRequest();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryChannelsResponse() {
    return { channels: [], pagination: undefined, height: undefined };
}
exports.QueryChannelsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.channels) {
            channel_1.IdentifiedChannel.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        if (message.height !== undefined) {
            client_1.Height.encode(message.height, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryChannelsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.channels.push(channel_1.IdentifiedChannel.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.height = client_1.Height.decode(reader, reader.uint32());
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
            channels: Array.isArray(object?.channels) ? object.channels.map((e) => channel_1.IdentifiedChannel.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
            height: isSet(object.height) ? client_1.Height.fromJSON(object.height) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.channels?.length) {
            obj.channels = message.channels.map((e) => channel_1.IdentifiedChannel.toJSON(e));
        }
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageResponse.toJSON(message.pagination);
        }
        if (message.height !== undefined) {
            obj.height = client_1.Height.toJSON(message.height);
        }
        return obj;
    },
    create(base) {
        return exports.QueryChannelsResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryChannelsResponse();
        message.channels = object.channels?.map((e) => channel_1.IdentifiedChannel.fromPartial(e)) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        message.height = (object.height !== undefined && object.height !== null)
            ? client_1.Height.fromPartial(object.height)
            : undefined;
        return message;
    },
};
function createBaseQueryConnectionChannelsRequest() {
    return { connection: "", pagination: undefined };
}
exports.QueryConnectionChannelsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.connection !== "") {
            writer.uint32(10).string(message.connection);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConnectionChannelsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.connection = reader.string();
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
            connection: isSet(object.connection) ? String(object.connection) : "",
            pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.connection !== "") {
            obj.connection = message.connection;
        }
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageRequest.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.QueryConnectionChannelsRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryConnectionChannelsRequest();
        message.connection = object.connection ?? "";
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryConnectionChannelsResponse() {
    return { channels: [], pagination: undefined, height: undefined };
}
exports.QueryConnectionChannelsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.channels) {
            channel_1.IdentifiedChannel.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        if (message.height !== undefined) {
            client_1.Height.encode(message.height, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConnectionChannelsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.channels.push(channel_1.IdentifiedChannel.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.height = client_1.Height.decode(reader, reader.uint32());
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
            channels: Array.isArray(object?.channels) ? object.channels.map((e) => channel_1.IdentifiedChannel.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
            height: isSet(object.height) ? client_1.Height.fromJSON(object.height) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.channels?.length) {
            obj.channels = message.channels.map((e) => channel_1.IdentifiedChannel.toJSON(e));
        }
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageResponse.toJSON(message.pagination);
        }
        if (message.height !== undefined) {
            obj.height = client_1.Height.toJSON(message.height);
        }
        return obj;
    },
    create(base) {
        return exports.QueryConnectionChannelsResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryConnectionChannelsResponse();
        message.channels = object.channels?.map((e) => channel_1.IdentifiedChannel.fromPartial(e)) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        message.height = (object.height !== undefined && object.height !== null)
            ? client_1.Height.fromPartial(object.height)
            : undefined;
        return message;
    },
};
function createBaseQueryChannelClientStateRequest() {
    return { portId: "", channelId: "" };
}
exports.QueryChannelClientStateRequest = {
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
        const message = createBaseQueryChannelClientStateRequest();
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
        return exports.QueryChannelClientStateRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryChannelClientStateRequest();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        return message;
    },
};
function createBaseQueryChannelClientStateResponse() {
    return { identifiedClientState: undefined, proof: new Uint8Array(0), proofHeight: undefined };
}
exports.QueryChannelClientStateResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.identifiedClientState !== undefined) {
            client_1.IdentifiedClientState.encode(message.identifiedClientState, writer.uint32(10).fork()).ldelim();
        }
        if (message.proof.length !== 0) {
            writer.uint32(18).bytes(message.proof);
        }
        if (message.proofHeight !== undefined) {
            client_1.Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryChannelClientStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.identifiedClientState = client_1.IdentifiedClientState.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.proof = reader.bytes();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.proofHeight = client_1.Height.decode(reader, reader.uint32());
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
            identifiedClientState: isSet(object.identifiedClientState)
                ? client_1.IdentifiedClientState.fromJSON(object.identifiedClientState)
                : undefined,
            proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(0),
            proofHeight: isSet(object.proofHeight) ? client_1.Height.fromJSON(object.proofHeight) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.identifiedClientState !== undefined) {
            obj.identifiedClientState = client_1.IdentifiedClientState.toJSON(message.identifiedClientState);
        }
        if (message.proof.length !== 0) {
            obj.proof = base64FromBytes(message.proof);
        }
        if (message.proofHeight !== undefined) {
            obj.proofHeight = client_1.Height.toJSON(message.proofHeight);
        }
        return obj;
    },
    create(base) {
        return exports.QueryChannelClientStateResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryChannelClientStateResponse();
        message.identifiedClientState =
            (object.identifiedClientState !== undefined && object.identifiedClientState !== null)
                ? client_1.IdentifiedClientState.fromPartial(object.identifiedClientState)
                : undefined;
        message.proof = object.proof ?? new Uint8Array(0);
        message.proofHeight = (object.proofHeight !== undefined && object.proofHeight !== null)
            ? client_1.Height.fromPartial(object.proofHeight)
            : undefined;
        return message;
    },
};
function createBaseQueryChannelConsensusStateRequest() {
    return { portId: "", channelId: "", revisionNumber: 0, revisionHeight: 0 };
}
exports.QueryChannelConsensusStateRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.revisionNumber !== 0) {
            writer.uint32(24).uint64(message.revisionNumber);
        }
        if (message.revisionHeight !== 0) {
            writer.uint32(32).uint64(message.revisionHeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryChannelConsensusStateRequest();
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
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.revisionNumber = longToNumber(reader.uint64());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.revisionHeight = longToNumber(reader.uint64());
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
            revisionNumber: isSet(object.revisionNumber) ? Number(object.revisionNumber) : 0,
            revisionHeight: isSet(object.revisionHeight) ? Number(object.revisionHeight) : 0,
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
        if (message.revisionNumber !== 0) {
            obj.revisionNumber = Math.round(message.revisionNumber);
        }
        if (message.revisionHeight !== 0) {
            obj.revisionHeight = Math.round(message.revisionHeight);
        }
        return obj;
    },
    create(base) {
        return exports.QueryChannelConsensusStateRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryChannelConsensusStateRequest();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.revisionNumber = object.revisionNumber ?? 0;
        message.revisionHeight = object.revisionHeight ?? 0;
        return message;
    },
};
function createBaseQueryChannelConsensusStateResponse() {
    return { consensusState: undefined, clientId: "", proof: new Uint8Array(0), proofHeight: undefined };
}
exports.QueryChannelConsensusStateResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.consensusState !== undefined) {
            any_1.Any.encode(message.consensusState, writer.uint32(10).fork()).ldelim();
        }
        if (message.clientId !== "") {
            writer.uint32(18).string(message.clientId);
        }
        if (message.proof.length !== 0) {
            writer.uint32(26).bytes(message.proof);
        }
        if (message.proofHeight !== undefined) {
            client_1.Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryChannelConsensusStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.consensusState = any_1.Any.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.clientId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.proof = reader.bytes();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.proofHeight = client_1.Height.decode(reader, reader.uint32());
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
            consensusState: isSet(object.consensusState) ? any_1.Any.fromJSON(object.consensusState) : undefined,
            clientId: isSet(object.clientId) ? String(object.clientId) : "",
            proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(0),
            proofHeight: isSet(object.proofHeight) ? client_1.Height.fromJSON(object.proofHeight) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.consensusState !== undefined) {
            obj.consensusState = any_1.Any.toJSON(message.consensusState);
        }
        if (message.clientId !== "") {
            obj.clientId = message.clientId;
        }
        if (message.proof.length !== 0) {
            obj.proof = base64FromBytes(message.proof);
        }
        if (message.proofHeight !== undefined) {
            obj.proofHeight = client_1.Height.toJSON(message.proofHeight);
        }
        return obj;
    },
    create(base) {
        return exports.QueryChannelConsensusStateResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryChannelConsensusStateResponse();
        message.consensusState = (object.consensusState !== undefined && object.consensusState !== null)
            ? any_1.Any.fromPartial(object.consensusState)
            : undefined;
        message.clientId = object.clientId ?? "";
        message.proof = object.proof ?? new Uint8Array(0);
        message.proofHeight = (object.proofHeight !== undefined && object.proofHeight !== null)
            ? client_1.Height.fromPartial(object.proofHeight)
            : undefined;
        return message;
    },
};
function createBaseQueryPacketCommitmentRequest() {
    return { portId: "", channelId: "", sequence: 0 };
}
exports.QueryPacketCommitmentRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.sequence !== 0) {
            writer.uint32(24).uint64(message.sequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPacketCommitmentRequest();
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
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.sequence = longToNumber(reader.uint64());
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
            sequence: isSet(object.sequence) ? Number(object.sequence) : 0,
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
        if (message.sequence !== 0) {
            obj.sequence = Math.round(message.sequence);
        }
        return obj;
    },
    create(base) {
        return exports.QueryPacketCommitmentRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryPacketCommitmentRequest();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.sequence = object.sequence ?? 0;
        return message;
    },
};
function createBaseQueryPacketCommitmentResponse() {
    return { commitment: new Uint8Array(0), proof: new Uint8Array(0), proofHeight: undefined };
}
exports.QueryPacketCommitmentResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.commitment.length !== 0) {
            writer.uint32(10).bytes(message.commitment);
        }
        if (message.proof.length !== 0) {
            writer.uint32(18).bytes(message.proof);
        }
        if (message.proofHeight !== undefined) {
            client_1.Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPacketCommitmentResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.commitment = reader.bytes();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.proof = reader.bytes();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.proofHeight = client_1.Height.decode(reader, reader.uint32());
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
            commitment: isSet(object.commitment) ? bytesFromBase64(object.commitment) : new Uint8Array(0),
            proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(0),
            proofHeight: isSet(object.proofHeight) ? client_1.Height.fromJSON(object.proofHeight) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.commitment.length !== 0) {
            obj.commitment = base64FromBytes(message.commitment);
        }
        if (message.proof.length !== 0) {
            obj.proof = base64FromBytes(message.proof);
        }
        if (message.proofHeight !== undefined) {
            obj.proofHeight = client_1.Height.toJSON(message.proofHeight);
        }
        return obj;
    },
    create(base) {
        return exports.QueryPacketCommitmentResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryPacketCommitmentResponse();
        message.commitment = object.commitment ?? new Uint8Array(0);
        message.proof = object.proof ?? new Uint8Array(0);
        message.proofHeight = (object.proofHeight !== undefined && object.proofHeight !== null)
            ? client_1.Height.fromPartial(object.proofHeight)
            : undefined;
        return message;
    },
};
function createBaseQueryPacketCommitmentsRequest() {
    return { portId: "", channelId: "", pagination: undefined };
}
exports.QueryPacketCommitmentsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPacketCommitmentsRequest();
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
                case 3:
                    if (tag !== 26) {
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
            portId: isSet(object.portId) ? String(object.portId) : "",
            channelId: isSet(object.channelId) ? String(object.channelId) : "",
            pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined,
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
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageRequest.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.QueryPacketCommitmentsRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryPacketCommitmentsRequest();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryPacketCommitmentsResponse() {
    return { commitments: [], pagination: undefined, height: undefined };
}
exports.QueryPacketCommitmentsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.commitments) {
            channel_1.PacketState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        if (message.height !== undefined) {
            client_1.Height.encode(message.height, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPacketCommitmentsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.commitments.push(channel_1.PacketState.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.height = client_1.Height.decode(reader, reader.uint32());
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
            commitments: Array.isArray(object?.commitments)
                ? object.commitments.map((e) => channel_1.PacketState.fromJSON(e))
                : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
            height: isSet(object.height) ? client_1.Height.fromJSON(object.height) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.commitments?.length) {
            obj.commitments = message.commitments.map((e) => channel_1.PacketState.toJSON(e));
        }
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageResponse.toJSON(message.pagination);
        }
        if (message.height !== undefined) {
            obj.height = client_1.Height.toJSON(message.height);
        }
        return obj;
    },
    create(base) {
        return exports.QueryPacketCommitmentsResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryPacketCommitmentsResponse();
        message.commitments = object.commitments?.map((e) => channel_1.PacketState.fromPartial(e)) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        message.height = (object.height !== undefined && object.height !== null)
            ? client_1.Height.fromPartial(object.height)
            : undefined;
        return message;
    },
};
function createBaseQueryPacketReceiptRequest() {
    return { portId: "", channelId: "", sequence: 0 };
}
exports.QueryPacketReceiptRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.sequence !== 0) {
            writer.uint32(24).uint64(message.sequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPacketReceiptRequest();
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
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.sequence = longToNumber(reader.uint64());
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
            sequence: isSet(object.sequence) ? Number(object.sequence) : 0,
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
        if (message.sequence !== 0) {
            obj.sequence = Math.round(message.sequence);
        }
        return obj;
    },
    create(base) {
        return exports.QueryPacketReceiptRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryPacketReceiptRequest();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.sequence = object.sequence ?? 0;
        return message;
    },
};
function createBaseQueryPacketReceiptResponse() {
    return { received: false, proof: new Uint8Array(0), proofHeight: undefined };
}
exports.QueryPacketReceiptResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.received === true) {
            writer.uint32(16).bool(message.received);
        }
        if (message.proof.length !== 0) {
            writer.uint32(26).bytes(message.proof);
        }
        if (message.proofHeight !== undefined) {
            client_1.Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPacketReceiptResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.received = reader.bool();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.proof = reader.bytes();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.proofHeight = client_1.Height.decode(reader, reader.uint32());
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
            received: isSet(object.received) ? Boolean(object.received) : false,
            proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(0),
            proofHeight: isSet(object.proofHeight) ? client_1.Height.fromJSON(object.proofHeight) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.received === true) {
            obj.received = message.received;
        }
        if (message.proof.length !== 0) {
            obj.proof = base64FromBytes(message.proof);
        }
        if (message.proofHeight !== undefined) {
            obj.proofHeight = client_1.Height.toJSON(message.proofHeight);
        }
        return obj;
    },
    create(base) {
        return exports.QueryPacketReceiptResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryPacketReceiptResponse();
        message.received = object.received ?? false;
        message.proof = object.proof ?? new Uint8Array(0);
        message.proofHeight = (object.proofHeight !== undefined && object.proofHeight !== null)
            ? client_1.Height.fromPartial(object.proofHeight)
            : undefined;
        return message;
    },
};
function createBaseQueryPacketAcknowledgementRequest() {
    return { portId: "", channelId: "", sequence: 0 };
}
exports.QueryPacketAcknowledgementRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.sequence !== 0) {
            writer.uint32(24).uint64(message.sequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPacketAcknowledgementRequest();
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
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.sequence = longToNumber(reader.uint64());
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
            sequence: isSet(object.sequence) ? Number(object.sequence) : 0,
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
        if (message.sequence !== 0) {
            obj.sequence = Math.round(message.sequence);
        }
        return obj;
    },
    create(base) {
        return exports.QueryPacketAcknowledgementRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryPacketAcknowledgementRequest();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.sequence = object.sequence ?? 0;
        return message;
    },
};
function createBaseQueryPacketAcknowledgementResponse() {
    return { acknowledgement: new Uint8Array(0), proof: new Uint8Array(0), proofHeight: undefined };
}
exports.QueryPacketAcknowledgementResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.acknowledgement.length !== 0) {
            writer.uint32(10).bytes(message.acknowledgement);
        }
        if (message.proof.length !== 0) {
            writer.uint32(18).bytes(message.proof);
        }
        if (message.proofHeight !== undefined) {
            client_1.Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPacketAcknowledgementResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.acknowledgement = reader.bytes();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.proof = reader.bytes();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.proofHeight = client_1.Height.decode(reader, reader.uint32());
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
            acknowledgement: isSet(object.acknowledgement) ? bytesFromBase64(object.acknowledgement) : new Uint8Array(0),
            proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(0),
            proofHeight: isSet(object.proofHeight) ? client_1.Height.fromJSON(object.proofHeight) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.acknowledgement.length !== 0) {
            obj.acknowledgement = base64FromBytes(message.acknowledgement);
        }
        if (message.proof.length !== 0) {
            obj.proof = base64FromBytes(message.proof);
        }
        if (message.proofHeight !== undefined) {
            obj.proofHeight = client_1.Height.toJSON(message.proofHeight);
        }
        return obj;
    },
    create(base) {
        return exports.QueryPacketAcknowledgementResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryPacketAcknowledgementResponse();
        message.acknowledgement = object.acknowledgement ?? new Uint8Array(0);
        message.proof = object.proof ?? new Uint8Array(0);
        message.proofHeight = (object.proofHeight !== undefined && object.proofHeight !== null)
            ? client_1.Height.fromPartial(object.proofHeight)
            : undefined;
        return message;
    },
};
function createBaseQueryPacketAcknowledgementsRequest() {
    return { portId: "", channelId: "", pagination: undefined, packetCommitmentSequences: [] };
}
exports.QueryPacketAcknowledgementsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        writer.uint32(34).fork();
        for (const v of message.packetCommitmentSequences) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPacketAcknowledgementsRequest();
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
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag === 32) {
                        message.packetCommitmentSequences.push(longToNumber(reader.uint64()));
                        continue;
                    }
                    if (tag === 34) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.packetCommitmentSequences.push(longToNumber(reader.uint64()));
                        }
                        continue;
                    }
                    break;
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
            pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined,
            packetCommitmentSequences: Array.isArray(object?.packetCommitmentSequences)
                ? object.packetCommitmentSequences.map((e) => Number(e))
                : [],
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
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageRequest.toJSON(message.pagination);
        }
        if (message.packetCommitmentSequences?.length) {
            obj.packetCommitmentSequences = message.packetCommitmentSequences.map((e) => Math.round(e));
        }
        return obj;
    },
    create(base) {
        return exports.QueryPacketAcknowledgementsRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryPacketAcknowledgementsRequest();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        message.packetCommitmentSequences = object.packetCommitmentSequences?.map((e) => e) || [];
        return message;
    },
};
function createBaseQueryPacketAcknowledgementsResponse() {
    return { acknowledgements: [], pagination: undefined, height: undefined };
}
exports.QueryPacketAcknowledgementsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.acknowledgements) {
            channel_1.PacketState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        if (message.height !== undefined) {
            client_1.Height.encode(message.height, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPacketAcknowledgementsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.acknowledgements.push(channel_1.PacketState.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.height = client_1.Height.decode(reader, reader.uint32());
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
            acknowledgements: Array.isArray(object?.acknowledgements)
                ? object.acknowledgements.map((e) => channel_1.PacketState.fromJSON(e))
                : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
            height: isSet(object.height) ? client_1.Height.fromJSON(object.height) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.acknowledgements?.length) {
            obj.acknowledgements = message.acknowledgements.map((e) => channel_1.PacketState.toJSON(e));
        }
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageResponse.toJSON(message.pagination);
        }
        if (message.height !== undefined) {
            obj.height = client_1.Height.toJSON(message.height);
        }
        return obj;
    },
    create(base) {
        return exports.QueryPacketAcknowledgementsResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryPacketAcknowledgementsResponse();
        message.acknowledgements = object.acknowledgements?.map((e) => channel_1.PacketState.fromPartial(e)) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        message.height = (object.height !== undefined && object.height !== null)
            ? client_1.Height.fromPartial(object.height)
            : undefined;
        return message;
    },
};
function createBaseQueryUnreceivedPacketsRequest() {
    return { portId: "", channelId: "", packetCommitmentSequences: [] };
}
exports.QueryUnreceivedPacketsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        writer.uint32(26).fork();
        for (const v of message.packetCommitmentSequences) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUnreceivedPacketsRequest();
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
                case 3:
                    if (tag === 24) {
                        message.packetCommitmentSequences.push(longToNumber(reader.uint64()));
                        continue;
                    }
                    if (tag === 26) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.packetCommitmentSequences.push(longToNumber(reader.uint64()));
                        }
                        continue;
                    }
                    break;
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
            packetCommitmentSequences: Array.isArray(object?.packetCommitmentSequences)
                ? object.packetCommitmentSequences.map((e) => Number(e))
                : [],
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
        if (message.packetCommitmentSequences?.length) {
            obj.packetCommitmentSequences = message.packetCommitmentSequences.map((e) => Math.round(e));
        }
        return obj;
    },
    create(base) {
        return exports.QueryUnreceivedPacketsRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryUnreceivedPacketsRequest();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.packetCommitmentSequences = object.packetCommitmentSequences?.map((e) => e) || [];
        return message;
    },
};
function createBaseQueryUnreceivedPacketsResponse() {
    return { sequences: [], height: undefined };
}
exports.QueryUnreceivedPacketsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.sequences) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.height !== undefined) {
            client_1.Height.encode(message.height, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUnreceivedPacketsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag === 8) {
                        message.sequences.push(longToNumber(reader.uint64()));
                        continue;
                    }
                    if (tag === 10) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.sequences.push(longToNumber(reader.uint64()));
                        }
                        continue;
                    }
                    break;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.height = client_1.Height.decode(reader, reader.uint32());
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
            sequences: Array.isArray(object?.sequences) ? object.sequences.map((e) => Number(e)) : [],
            height: isSet(object.height) ? client_1.Height.fromJSON(object.height) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.sequences?.length) {
            obj.sequences = message.sequences.map((e) => Math.round(e));
        }
        if (message.height !== undefined) {
            obj.height = client_1.Height.toJSON(message.height);
        }
        return obj;
    },
    create(base) {
        return exports.QueryUnreceivedPacketsResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryUnreceivedPacketsResponse();
        message.sequences = object.sequences?.map((e) => e) || [];
        message.height = (object.height !== undefined && object.height !== null)
            ? client_1.Height.fromPartial(object.height)
            : undefined;
        return message;
    },
};
function createBaseQueryUnreceivedAcksRequest() {
    return { portId: "", channelId: "", packetAckSequences: [] };
}
exports.QueryUnreceivedAcksRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        writer.uint32(26).fork();
        for (const v of message.packetAckSequences) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUnreceivedAcksRequest();
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
                case 3:
                    if (tag === 24) {
                        message.packetAckSequences.push(longToNumber(reader.uint64()));
                        continue;
                    }
                    if (tag === 26) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.packetAckSequences.push(longToNumber(reader.uint64()));
                        }
                        continue;
                    }
                    break;
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
            packetAckSequences: Array.isArray(object?.packetAckSequences)
                ? object.packetAckSequences.map((e) => Number(e))
                : [],
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
        if (message.packetAckSequences?.length) {
            obj.packetAckSequences = message.packetAckSequences.map((e) => Math.round(e));
        }
        return obj;
    },
    create(base) {
        return exports.QueryUnreceivedAcksRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryUnreceivedAcksRequest();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.packetAckSequences = object.packetAckSequences?.map((e) => e) || [];
        return message;
    },
};
function createBaseQueryUnreceivedAcksResponse() {
    return { sequences: [], height: undefined };
}
exports.QueryUnreceivedAcksResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.sequences) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.height !== undefined) {
            client_1.Height.encode(message.height, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUnreceivedAcksResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag === 8) {
                        message.sequences.push(longToNumber(reader.uint64()));
                        continue;
                    }
                    if (tag === 10) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.sequences.push(longToNumber(reader.uint64()));
                        }
                        continue;
                    }
                    break;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.height = client_1.Height.decode(reader, reader.uint32());
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
            sequences: Array.isArray(object?.sequences) ? object.sequences.map((e) => Number(e)) : [],
            height: isSet(object.height) ? client_1.Height.fromJSON(object.height) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.sequences?.length) {
            obj.sequences = message.sequences.map((e) => Math.round(e));
        }
        if (message.height !== undefined) {
            obj.height = client_1.Height.toJSON(message.height);
        }
        return obj;
    },
    create(base) {
        return exports.QueryUnreceivedAcksResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryUnreceivedAcksResponse();
        message.sequences = object.sequences?.map((e) => e) || [];
        message.height = (object.height !== undefined && object.height !== null)
            ? client_1.Height.fromPartial(object.height)
            : undefined;
        return message;
    },
};
function createBaseQueryNextSequenceReceiveRequest() {
    return { portId: "", channelId: "" };
}
exports.QueryNextSequenceReceiveRequest = {
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
        const message = createBaseQueryNextSequenceReceiveRequest();
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
        return exports.QueryNextSequenceReceiveRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryNextSequenceReceiveRequest();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        return message;
    },
};
function createBaseQueryNextSequenceReceiveResponse() {
    return { nextSequenceReceive: 0, proof: new Uint8Array(0), proofHeight: undefined };
}
exports.QueryNextSequenceReceiveResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.nextSequenceReceive !== 0) {
            writer.uint32(8).uint64(message.nextSequenceReceive);
        }
        if (message.proof.length !== 0) {
            writer.uint32(18).bytes(message.proof);
        }
        if (message.proofHeight !== undefined) {
            client_1.Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryNextSequenceReceiveResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.nextSequenceReceive = longToNumber(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.proof = reader.bytes();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.proofHeight = client_1.Height.decode(reader, reader.uint32());
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
            nextSequenceReceive: isSet(object.nextSequenceReceive) ? Number(object.nextSequenceReceive) : 0,
            proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(0),
            proofHeight: isSet(object.proofHeight) ? client_1.Height.fromJSON(object.proofHeight) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.nextSequenceReceive !== 0) {
            obj.nextSequenceReceive = Math.round(message.nextSequenceReceive);
        }
        if (message.proof.length !== 0) {
            obj.proof = base64FromBytes(message.proof);
        }
        if (message.proofHeight !== undefined) {
            obj.proofHeight = client_1.Height.toJSON(message.proofHeight);
        }
        return obj;
    },
    create(base) {
        return exports.QueryNextSequenceReceiveResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryNextSequenceReceiveResponse();
        message.nextSequenceReceive = object.nextSequenceReceive ?? 0;
        message.proof = object.proof ?? new Uint8Array(0);
        message.proofHeight = (object.proofHeight !== undefined && object.proofHeight !== null)
            ? client_1.Height.fromPartial(object.proofHeight)
            : undefined;
        return message;
    },
};
function createBaseQueryNextSequenceSendRequest() {
    return { portId: "", channelId: "" };
}
exports.QueryNextSequenceSendRequest = {
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
        const message = createBaseQueryNextSequenceSendRequest();
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
        return exports.QueryNextSequenceSendRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryNextSequenceSendRequest();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        return message;
    },
};
function createBaseQueryNextSequenceSendResponse() {
    return { nextSequenceSend: 0, proof: new Uint8Array(0), proofHeight: undefined };
}
exports.QueryNextSequenceSendResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.nextSequenceSend !== 0) {
            writer.uint32(8).uint64(message.nextSequenceSend);
        }
        if (message.proof.length !== 0) {
            writer.uint32(18).bytes(message.proof);
        }
        if (message.proofHeight !== undefined) {
            client_1.Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryNextSequenceSendResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.nextSequenceSend = longToNumber(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.proof = reader.bytes();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.proofHeight = client_1.Height.decode(reader, reader.uint32());
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
            nextSequenceSend: isSet(object.nextSequenceSend) ? Number(object.nextSequenceSend) : 0,
            proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(0),
            proofHeight: isSet(object.proofHeight) ? client_1.Height.fromJSON(object.proofHeight) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.nextSequenceSend !== 0) {
            obj.nextSequenceSend = Math.round(message.nextSequenceSend);
        }
        if (message.proof.length !== 0) {
            obj.proof = base64FromBytes(message.proof);
        }
        if (message.proofHeight !== undefined) {
            obj.proofHeight = client_1.Height.toJSON(message.proofHeight);
        }
        return obj;
    },
    create(base) {
        return exports.QueryNextSequenceSendResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryNextSequenceSendResponse();
        message.nextSequenceSend = object.nextSequenceSend ?? 0;
        message.proof = object.proof ?? new Uint8Array(0);
        message.proofHeight = (object.proofHeight !== undefined && object.proofHeight !== null)
            ? client_1.Height.fromPartial(object.proofHeight)
            : undefined;
        return message;
    },
};
function createBaseQueryUpgradeErrorRequest() {
    return { portId: "", channelId: "" };
}
exports.QueryUpgradeErrorRequest = {
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
        const message = createBaseQueryUpgradeErrorRequest();
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
        return exports.QueryUpgradeErrorRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryUpgradeErrorRequest();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        return message;
    },
};
function createBaseQueryUpgradeErrorResponse() {
    return { errorReceipt: undefined, proof: new Uint8Array(0), proofHeight: undefined };
}
exports.QueryUpgradeErrorResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.errorReceipt !== undefined) {
            upgrade_1.ErrorReceipt.encode(message.errorReceipt, writer.uint32(10).fork()).ldelim();
        }
        if (message.proof.length !== 0) {
            writer.uint32(18).bytes(message.proof);
        }
        if (message.proofHeight !== undefined) {
            client_1.Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUpgradeErrorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.errorReceipt = upgrade_1.ErrorReceipt.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.proof = reader.bytes();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.proofHeight = client_1.Height.decode(reader, reader.uint32());
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
            errorReceipt: isSet(object.errorReceipt) ? upgrade_1.ErrorReceipt.fromJSON(object.errorReceipt) : undefined,
            proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(0),
            proofHeight: isSet(object.proofHeight) ? client_1.Height.fromJSON(object.proofHeight) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.errorReceipt !== undefined) {
            obj.errorReceipt = upgrade_1.ErrorReceipt.toJSON(message.errorReceipt);
        }
        if (message.proof.length !== 0) {
            obj.proof = base64FromBytes(message.proof);
        }
        if (message.proofHeight !== undefined) {
            obj.proofHeight = client_1.Height.toJSON(message.proofHeight);
        }
        return obj;
    },
    create(base) {
        return exports.QueryUpgradeErrorResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryUpgradeErrorResponse();
        message.errorReceipt = (object.errorReceipt !== undefined && object.errorReceipt !== null)
            ? upgrade_1.ErrorReceipt.fromPartial(object.errorReceipt)
            : undefined;
        message.proof = object.proof ?? new Uint8Array(0);
        message.proofHeight = (object.proofHeight !== undefined && object.proofHeight !== null)
            ? client_1.Height.fromPartial(object.proofHeight)
            : undefined;
        return message;
    },
};
function createBaseQueryUpgradeRequest() {
    return { portId: "", channelId: "" };
}
exports.QueryUpgradeRequest = {
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
        const message = createBaseQueryUpgradeRequest();
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
        return exports.QueryUpgradeRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryUpgradeRequest();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        return message;
    },
};
function createBaseQueryUpgradeResponse() {
    return { upgrade: undefined, proof: new Uint8Array(0), proofHeight: undefined };
}
exports.QueryUpgradeResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.upgrade !== undefined) {
            upgrade_1.Upgrade.encode(message.upgrade, writer.uint32(10).fork()).ldelim();
        }
        if (message.proof.length !== 0) {
            writer.uint32(18).bytes(message.proof);
        }
        if (message.proofHeight !== undefined) {
            client_1.Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUpgradeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.upgrade = upgrade_1.Upgrade.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.proof = reader.bytes();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.proofHeight = client_1.Height.decode(reader, reader.uint32());
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
            upgrade: isSet(object.upgrade) ? upgrade_1.Upgrade.fromJSON(object.upgrade) : undefined,
            proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(0),
            proofHeight: isSet(object.proofHeight) ? client_1.Height.fromJSON(object.proofHeight) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.upgrade !== undefined) {
            obj.upgrade = upgrade_1.Upgrade.toJSON(message.upgrade);
        }
        if (message.proof.length !== 0) {
            obj.proof = base64FromBytes(message.proof);
        }
        if (message.proofHeight !== undefined) {
            obj.proofHeight = client_1.Height.toJSON(message.proofHeight);
        }
        return obj;
    },
    create(base) {
        return exports.QueryUpgradeResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryUpgradeResponse();
        message.upgrade = (object.upgrade !== undefined && object.upgrade !== null)
            ? upgrade_1.Upgrade.fromPartial(object.upgrade)
            : undefined;
        message.proof = object.proof ?? new Uint8Array(0);
        message.proofHeight = (object.proofHeight !== undefined && object.proofHeight !== null)
            ? client_1.Height.fromPartial(object.proofHeight)
            : undefined;
        return message;
    },
};
function createBaseQueryChannelParamsRequest() {
    return {};
}
exports.QueryChannelParamsRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryChannelParamsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.QueryChannelParamsRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseQueryChannelParamsRequest();
        return message;
    },
};
function createBaseQueryChannelParamsResponse() {
    return { params: undefined };
}
exports.QueryChannelParamsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.params !== undefined) {
            channel_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryChannelParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.params = channel_1.Params.decode(reader, reader.uint32());
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
        return { params: isSet(object.params) ? channel_1.Params.fromJSON(object.params) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.params !== undefined) {
            obj.params = channel_1.Params.toJSON(message.params);
        }
        return obj;
    },
    create(base) {
        return exports.QueryChannelParamsResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryChannelParamsResponse();
        message.params = (object.params !== undefined && object.params !== null)
            ? channel_1.Params.fromPartial(object.params)
            : undefined;
        return message;
    },
};
exports.QueryServiceName = "ibc.core.channel.v1.Query";
class QueryClientImpl {
    constructor(rpc, opts) {
        this.service = opts?.service || exports.QueryServiceName;
        this.rpc = rpc;
        this.Channel = this.Channel.bind(this);
        this.Channels = this.Channels.bind(this);
        this.ConnectionChannels = this.ConnectionChannels.bind(this);
        this.ChannelClientState = this.ChannelClientState.bind(this);
        this.ChannelConsensusState = this.ChannelConsensusState.bind(this);
        this.PacketCommitment = this.PacketCommitment.bind(this);
        this.PacketCommitments = this.PacketCommitments.bind(this);
        this.PacketReceipt = this.PacketReceipt.bind(this);
        this.PacketAcknowledgement = this.PacketAcknowledgement.bind(this);
        this.PacketAcknowledgements = this.PacketAcknowledgements.bind(this);
        this.UnreceivedPackets = this.UnreceivedPackets.bind(this);
        this.UnreceivedAcks = this.UnreceivedAcks.bind(this);
        this.NextSequenceReceive = this.NextSequenceReceive.bind(this);
        this.NextSequenceSend = this.NextSequenceSend.bind(this);
        this.UpgradeError = this.UpgradeError.bind(this);
        this.Upgrade = this.Upgrade.bind(this);
        this.ChannelParams = this.ChannelParams.bind(this);
    }
    Channel(request) {
        const data = exports.QueryChannelRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Channel", data);
        return promise.then((data) => exports.QueryChannelResponse.decode(minimal_1.default.Reader.create(data)));
    }
    Channels(request) {
        const data = exports.QueryChannelsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Channels", data);
        return promise.then((data) => exports.QueryChannelsResponse.decode(minimal_1.default.Reader.create(data)));
    }
    ConnectionChannels(request) {
        const data = exports.QueryConnectionChannelsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "ConnectionChannels", data);
        return promise.then((data) => exports.QueryConnectionChannelsResponse.decode(minimal_1.default.Reader.create(data)));
    }
    ChannelClientState(request) {
        const data = exports.QueryChannelClientStateRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "ChannelClientState", data);
        return promise.then((data) => exports.QueryChannelClientStateResponse.decode(minimal_1.default.Reader.create(data)));
    }
    ChannelConsensusState(request) {
        const data = exports.QueryChannelConsensusStateRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "ChannelConsensusState", data);
        return promise.then((data) => exports.QueryChannelConsensusStateResponse.decode(minimal_1.default.Reader.create(data)));
    }
    PacketCommitment(request) {
        const data = exports.QueryPacketCommitmentRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "PacketCommitment", data);
        return promise.then((data) => exports.QueryPacketCommitmentResponse.decode(minimal_1.default.Reader.create(data)));
    }
    PacketCommitments(request) {
        const data = exports.QueryPacketCommitmentsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "PacketCommitments", data);
        return promise.then((data) => exports.QueryPacketCommitmentsResponse.decode(minimal_1.default.Reader.create(data)));
    }
    PacketReceipt(request) {
        const data = exports.QueryPacketReceiptRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "PacketReceipt", data);
        return promise.then((data) => exports.QueryPacketReceiptResponse.decode(minimal_1.default.Reader.create(data)));
    }
    PacketAcknowledgement(request) {
        const data = exports.QueryPacketAcknowledgementRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "PacketAcknowledgement", data);
        return promise.then((data) => exports.QueryPacketAcknowledgementResponse.decode(minimal_1.default.Reader.create(data)));
    }
    PacketAcknowledgements(request) {
        const data = exports.QueryPacketAcknowledgementsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "PacketAcknowledgements", data);
        return promise.then((data) => exports.QueryPacketAcknowledgementsResponse.decode(minimal_1.default.Reader.create(data)));
    }
    UnreceivedPackets(request) {
        const data = exports.QueryUnreceivedPacketsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "UnreceivedPackets", data);
        return promise.then((data) => exports.QueryUnreceivedPacketsResponse.decode(minimal_1.default.Reader.create(data)));
    }
    UnreceivedAcks(request) {
        const data = exports.QueryUnreceivedAcksRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "UnreceivedAcks", data);
        return promise.then((data) => exports.QueryUnreceivedAcksResponse.decode(minimal_1.default.Reader.create(data)));
    }
    NextSequenceReceive(request) {
        const data = exports.QueryNextSequenceReceiveRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "NextSequenceReceive", data);
        return promise.then((data) => exports.QueryNextSequenceReceiveResponse.decode(minimal_1.default.Reader.create(data)));
    }
    NextSequenceSend(request) {
        const data = exports.QueryNextSequenceSendRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "NextSequenceSend", data);
        return promise.then((data) => exports.QueryNextSequenceSendResponse.decode(minimal_1.default.Reader.create(data)));
    }
    UpgradeError(request) {
        const data = exports.QueryUpgradeErrorRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpgradeError", data);
        return promise.then((data) => exports.QueryUpgradeErrorResponse.decode(minimal_1.default.Reader.create(data)));
    }
    Upgrade(request) {
        const data = exports.QueryUpgradeRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Upgrade", data);
        return promise.then((data) => exports.QueryUpgradeResponse.decode(minimal_1.default.Reader.create(data)));
    }
    ChannelParams(request) {
        const data = exports.QueryChannelParamsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "ChannelParams", data);
        return promise.then((data) => exports.QueryChannelParamsResponse.decode(minimal_1.default.Reader.create(data)));
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
