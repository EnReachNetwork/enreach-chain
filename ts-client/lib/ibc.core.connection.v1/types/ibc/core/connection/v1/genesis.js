"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const connection_1 = require("./connection");
exports.protobufPackage = "ibc.core.connection.v1";
function createBaseGenesisState() {
    return { connections: [], clientConnectionPaths: [], nextConnectionSequence: 0, params: undefined };
}
exports.GenesisState = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.connections) {
            connection_1.IdentifiedConnection.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.clientConnectionPaths) {
            connection_1.ConnectionPaths.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.nextConnectionSequence !== 0) {
            writer.uint32(24).uint64(message.nextConnectionSequence);
        }
        if (message.params !== undefined) {
            connection_1.Params.encode(message.params, writer.uint32(34).fork()).ldelim();
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
                    message.connections.push(connection_1.IdentifiedConnection.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.clientConnectionPaths.push(connection_1.ConnectionPaths.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.nextConnectionSequence = longToNumber(reader.uint64());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.params = connection_1.Params.decode(reader, reader.uint32());
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
            connections: Array.isArray(object?.connections)
                ? object.connections.map((e) => connection_1.IdentifiedConnection.fromJSON(e))
                : [],
            clientConnectionPaths: Array.isArray(object?.clientConnectionPaths)
                ? object.clientConnectionPaths.map((e) => connection_1.ConnectionPaths.fromJSON(e))
                : [],
            nextConnectionSequence: isSet(object.nextConnectionSequence) ? Number(object.nextConnectionSequence) : 0,
            params: isSet(object.params) ? connection_1.Params.fromJSON(object.params) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.connections?.length) {
            obj.connections = message.connections.map((e) => connection_1.IdentifiedConnection.toJSON(e));
        }
        if (message.clientConnectionPaths?.length) {
            obj.clientConnectionPaths = message.clientConnectionPaths.map((e) => connection_1.ConnectionPaths.toJSON(e));
        }
        if (message.nextConnectionSequence !== 0) {
            obj.nextConnectionSequence = Math.round(message.nextConnectionSequence);
        }
        if (message.params !== undefined) {
            obj.params = connection_1.Params.toJSON(message.params);
        }
        return obj;
    },
    create(base) {
        return exports.GenesisState.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.connections = object.connections?.map((e) => connection_1.IdentifiedConnection.fromPartial(e)) || [];
        message.clientConnectionPaths = object.clientConnectionPaths?.map((e) => connection_1.ConnectionPaths.fromPartial(e)) || [];
        message.nextConnectionSequence = object.nextConnectionSequence ?? 0;
        message.params = (object.params !== undefined && object.params !== null)
            ? connection_1.Params.fromPartial(object.params)
            : undefined;
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
