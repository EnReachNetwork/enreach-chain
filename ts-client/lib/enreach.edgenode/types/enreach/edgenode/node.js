"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "enreach.edgenode";
function createBaseNode() {
    return {
        nodeID: "",
        userID: "",
        nodeName: "",
        deviceType: "",
        regionCode: "",
        registerStatus: "",
        workingStatus: "",
        creator: "",
        createAt: 0,
        updator: "",
        updateAt: 0,
    };
}
exports.Node = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.nodeID !== "") {
            writer.uint32(10).string(message.nodeID);
        }
        if (message.userID !== "") {
            writer.uint32(18).string(message.userID);
        }
        if (message.nodeName !== "") {
            writer.uint32(26).string(message.nodeName);
        }
        if (message.deviceType !== "") {
            writer.uint32(34).string(message.deviceType);
        }
        if (message.regionCode !== "") {
            writer.uint32(42).string(message.regionCode);
        }
        if (message.registerStatus !== "") {
            writer.uint32(50).string(message.registerStatus);
        }
        if (message.workingStatus !== "") {
            writer.uint32(58).string(message.workingStatus);
        }
        if (message.creator !== "") {
            writer.uint32(66).string(message.creator);
        }
        if (message.createAt !== 0) {
            writer.uint32(72).uint64(message.createAt);
        }
        if (message.updator !== "") {
            writer.uint32(82).string(message.updator);
        }
        if (message.updateAt !== 0) {
            writer.uint32(88).uint64(message.updateAt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNode();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.nodeID = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.userID = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.nodeName = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.deviceType = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.regionCode = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.registerStatus = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.workingStatus = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.creator = reader.string();
                    continue;
                case 9:
                    if (tag !== 72) {
                        break;
                    }
                    message.createAt = longToNumber(reader.uint64());
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.updator = reader.string();
                    continue;
                case 11:
                    if (tag !== 88) {
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
            nodeID: isSet(object.nodeID) ? String(object.nodeID) : "",
            userID: isSet(object.userID) ? String(object.userID) : "",
            nodeName: isSet(object.nodeName) ? String(object.nodeName) : "",
            deviceType: isSet(object.deviceType) ? String(object.deviceType) : "",
            regionCode: isSet(object.regionCode) ? String(object.regionCode) : "",
            registerStatus: isSet(object.registerStatus) ? String(object.registerStatus) : "",
            workingStatus: isSet(object.workingStatus) ? String(object.workingStatus) : "",
            creator: isSet(object.creator) ? String(object.creator) : "",
            createAt: isSet(object.createAt) ? Number(object.createAt) : 0,
            updator: isSet(object.updator) ? String(object.updator) : "",
            updateAt: isSet(object.updateAt) ? Number(object.updateAt) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.nodeID !== "") {
            obj.nodeID = message.nodeID;
        }
        if (message.userID !== "") {
            obj.userID = message.userID;
        }
        if (message.nodeName !== "") {
            obj.nodeName = message.nodeName;
        }
        if (message.deviceType !== "") {
            obj.deviceType = message.deviceType;
        }
        if (message.regionCode !== "") {
            obj.regionCode = message.regionCode;
        }
        if (message.registerStatus !== "") {
            obj.registerStatus = message.registerStatus;
        }
        if (message.workingStatus !== "") {
            obj.workingStatus = message.workingStatus;
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
        return exports.Node.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseNode();
        message.nodeID = object.nodeID ?? "";
        message.userID = object.userID ?? "";
        message.nodeName = object.nodeName ?? "";
        message.deviceType = object.deviceType ?? "";
        message.regionCode = object.regionCode ?? "";
        message.registerStatus = object.registerStatus ?? "";
        message.workingStatus = object.workingStatus ?? "";
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
