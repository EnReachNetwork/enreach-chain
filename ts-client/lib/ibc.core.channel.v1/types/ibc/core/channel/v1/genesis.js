"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacketSequence = exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const channel_1 = require("./channel");
exports.protobufPackage = "ibc.core.channel.v1";
function createBaseGenesisState() {
    return {
        channels: [],
        acknowledgements: [],
        commitments: [],
        receipts: [],
        sendSequences: [],
        recvSequences: [],
        ackSequences: [],
        nextChannelSequence: 0,
        params: undefined,
    };
}
exports.GenesisState = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.channels) {
            channel_1.IdentifiedChannel.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.acknowledgements) {
            channel_1.PacketState.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.commitments) {
            channel_1.PacketState.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.receipts) {
            channel_1.PacketState.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.sendSequences) {
            exports.PacketSequence.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.recvSequences) {
            exports.PacketSequence.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.ackSequences) {
            exports.PacketSequence.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.nextChannelSequence !== 0) {
            writer.uint32(64).uint64(message.nextChannelSequence);
        }
        if (message.params !== undefined) {
            channel_1.Params.encode(message.params, writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
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
                    message.acknowledgements.push(channel_1.PacketState.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.commitments.push(channel_1.PacketState.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.receipts.push(channel_1.PacketState.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.sendSequences.push(exports.PacketSequence.decode(reader, reader.uint32()));
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.recvSequences.push(exports.PacketSequence.decode(reader, reader.uint32()));
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.ackSequences.push(exports.PacketSequence.decode(reader, reader.uint32()));
                    continue;
                case 8:
                    if (tag !== 64) {
                        break;
                    }
                    message.nextChannelSequence = longToNumber(reader.uint64());
                    continue;
                case 9:
                    if (tag !== 74) {
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
        return {
            channels: Array.isArray(object?.channels) ? object.channels.map((e) => channel_1.IdentifiedChannel.fromJSON(e)) : [],
            acknowledgements: Array.isArray(object?.acknowledgements)
                ? object.acknowledgements.map((e) => channel_1.PacketState.fromJSON(e))
                : [],
            commitments: Array.isArray(object?.commitments)
                ? object.commitments.map((e) => channel_1.PacketState.fromJSON(e))
                : [],
            receipts: Array.isArray(object?.receipts) ? object.receipts.map((e) => channel_1.PacketState.fromJSON(e)) : [],
            sendSequences: Array.isArray(object?.sendSequences)
                ? object.sendSequences.map((e) => exports.PacketSequence.fromJSON(e))
                : [],
            recvSequences: Array.isArray(object?.recvSequences)
                ? object.recvSequences.map((e) => exports.PacketSequence.fromJSON(e))
                : [],
            ackSequences: Array.isArray(object?.ackSequences)
                ? object.ackSequences.map((e) => exports.PacketSequence.fromJSON(e))
                : [],
            nextChannelSequence: isSet(object.nextChannelSequence) ? Number(object.nextChannelSequence) : 0,
            params: isSet(object.params) ? channel_1.Params.fromJSON(object.params) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.channels?.length) {
            obj.channels = message.channels.map((e) => channel_1.IdentifiedChannel.toJSON(e));
        }
        if (message.acknowledgements?.length) {
            obj.acknowledgements = message.acknowledgements.map((e) => channel_1.PacketState.toJSON(e));
        }
        if (message.commitments?.length) {
            obj.commitments = message.commitments.map((e) => channel_1.PacketState.toJSON(e));
        }
        if (message.receipts?.length) {
            obj.receipts = message.receipts.map((e) => channel_1.PacketState.toJSON(e));
        }
        if (message.sendSequences?.length) {
            obj.sendSequences = message.sendSequences.map((e) => exports.PacketSequence.toJSON(e));
        }
        if (message.recvSequences?.length) {
            obj.recvSequences = message.recvSequences.map((e) => exports.PacketSequence.toJSON(e));
        }
        if (message.ackSequences?.length) {
            obj.ackSequences = message.ackSequences.map((e) => exports.PacketSequence.toJSON(e));
        }
        if (message.nextChannelSequence !== 0) {
            obj.nextChannelSequence = Math.round(message.nextChannelSequence);
        }
        if (message.params !== undefined) {
            obj.params = channel_1.Params.toJSON(message.params);
        }
        return obj;
    },
    create(base) {
        return exports.GenesisState.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.channels = object.channels?.map((e) => channel_1.IdentifiedChannel.fromPartial(e)) || [];
        message.acknowledgements = object.acknowledgements?.map((e) => channel_1.PacketState.fromPartial(e)) || [];
        message.commitments = object.commitments?.map((e) => channel_1.PacketState.fromPartial(e)) || [];
        message.receipts = object.receipts?.map((e) => channel_1.PacketState.fromPartial(e)) || [];
        message.sendSequences = object.sendSequences?.map((e) => exports.PacketSequence.fromPartial(e)) || [];
        message.recvSequences = object.recvSequences?.map((e) => exports.PacketSequence.fromPartial(e)) || [];
        message.ackSequences = object.ackSequences?.map((e) => exports.PacketSequence.fromPartial(e)) || [];
        message.nextChannelSequence = object.nextChannelSequence ?? 0;
        message.params = (object.params !== undefined && object.params !== null)
            ? channel_1.Params.fromPartial(object.params)
            : undefined;
        return message;
    },
};
function createBasePacketSequence() {
    return { portId: "", channelId: "", sequence: 0 };
}
exports.PacketSequence = {
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
        const message = createBasePacketSequence();
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
        return exports.PacketSequence.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePacketSequence();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.sequence = object.sequence ?? 0;
        return message;
    },
};
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
