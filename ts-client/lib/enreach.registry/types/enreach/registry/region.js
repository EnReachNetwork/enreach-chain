"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Region = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "enreach.registry";
function createBaseRegion() {
    return { code: "", name: "", description: "", creator: "", createAt: 0, updator: "", updateAt: 0 };
}
exports.Region = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.code !== "") {
            writer.uint32(10).string(message.code);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        if (message.creator !== "") {
            writer.uint32(34).string(message.creator);
        }
        if (message.createAt !== 0) {
            writer.uint32(96).uint64(message.createAt);
        }
        if (message.updator !== "") {
            writer.uint32(106).string(message.updator);
        }
        if (message.updateAt !== 0) {
            writer.uint32(112).uint64(message.updateAt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegion();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.code = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.creator = reader.string();
                    continue;
                case 12:
                    if (tag !== 96) {
                        break;
                    }
                    message.createAt = longToNumber(reader.uint64());
                    continue;
                case 13:
                    if (tag !== 106) {
                        break;
                    }
                    message.updator = reader.string();
                    continue;
                case 14:
                    if (tag !== 112) {
                        break;
                    }
                    message.updateAt = longToNumber(reader.uint64());
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
            code: isSet(object.code) ? String(object.code) : "",
            name: isSet(object.name) ? String(object.name) : "",
            description: isSet(object.description) ? String(object.description) : "",
            creator: isSet(object.creator) ? String(object.creator) : "",
            createAt: isSet(object.createAt) ? Number(object.createAt) : 0,
            updator: isSet(object.updator) ? String(object.updator) : "",
            updateAt: isSet(object.updateAt) ? Number(object.updateAt) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.code !== "") {
            obj.code = message.code;
        }
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.description !== "") {
            obj.description = message.description;
        }
        if (message.creator !== "") {
            obj.creator = message.creator;
        }
        if (message.createAt !== 0) {
            obj.createAt = Math.round(message.createAt);
        }
        if (message.updator !== "") {
            obj.updator = message.updator;
        }
        if (message.updateAt !== 0) {
            obj.updateAt = Math.round(message.updateAt);
        }
        return obj;
    },
    create(base) {
        return exports.Region.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRegion();
        message.code = object.code ?? "";
        message.name = object.name ?? "";
        message.description = object.description ?? "";
        message.creator = object.creator ?? "";
        message.createAt = object.createAt ?? 0;
        message.updator = object.updator ?? "";
        message.updateAt = object.updateAt ?? 0;
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
