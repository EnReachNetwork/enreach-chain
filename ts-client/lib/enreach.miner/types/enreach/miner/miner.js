"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Miner = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "enreach.miner";
function createBaseMiner() {
    return { id: 0, minerId: "", evmAddress: "", regionCode: "", status: "", creator: "" };
}
exports.Miner = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.minerId !== "") {
            writer.uint32(18).string(message.minerId);
        }
        if (message.evmAddress !== "") {
            writer.uint32(26).string(message.evmAddress);
        }
        if (message.regionCode !== "") {
            writer.uint32(34).string(message.regionCode);
        }
        if (message.status !== "") {
            writer.uint32(42).string(message.status);
        }
        if (message.creator !== "") {
            writer.uint32(50).string(message.creator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMiner();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.id = longToNumber(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.minerId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.evmAddress = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.regionCode = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.status = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.creator = reader.string();
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
            id: isSet(object.id) ? Number(object.id) : 0,
            minerId: isSet(object.minerId) ? String(object.minerId) : "",
            evmAddress: isSet(object.evmAddress) ? String(object.evmAddress) : "",
            regionCode: isSet(object.regionCode) ? String(object.regionCode) : "",
            status: isSet(object.status) ? String(object.status) : "",
            creator: isSet(object.creator) ? String(object.creator) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== 0) {
            obj.id = Math.round(message.id);
        }
        if (message.minerId !== "") {
            obj.minerId = message.minerId;
        }
        if (message.evmAddress !== "") {
            obj.evmAddress = message.evmAddress;
        }
        if (message.regionCode !== "") {
            obj.regionCode = message.regionCode;
        }
        if (message.status !== "") {
            obj.status = message.status;
        }
        if (message.creator !== "") {
            obj.creator = message.creator;
        }
        return obj;
    },
    create(base) {
        return exports.Miner.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMiner();
        message.id = object.id ?? 0;
        message.minerId = object.minerId ?? "";
        message.evmAddress = object.evmAddress ?? "";
        message.regionCode = object.regionCode ?? "";
        message.status = object.status ?? "";
        message.creator = object.creator ?? "";
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
