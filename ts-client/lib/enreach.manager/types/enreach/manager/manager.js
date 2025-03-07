"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manager = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "enreach.manager";
function createBaseManager() {
    return {
        managerAccount: "",
        operatorAccount: "",
        hostAddress: "",
        managerPort: 0,
        trackerPort: 0,
        chainAPIPort: 0,
        chainRPCPort: 0,
        regionCode: "",
        registerStatus: "",
        workingStatus: "",
        creator: "",
        createAt: 0,
        updator: "",
        updateAt: 0,
    };
}
exports.Manager = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.managerAccount !== "") {
            writer.uint32(10).string(message.managerAccount);
        }
        if (message.operatorAccount !== "") {
            writer.uint32(18).string(message.operatorAccount);
        }
        if (message.hostAddress !== "") {
            writer.uint32(26).string(message.hostAddress);
        }
        if (message.managerPort !== 0) {
            writer.uint32(32).uint32(message.managerPort);
        }
        if (message.trackerPort !== 0) {
            writer.uint32(40).uint32(message.trackerPort);
        }
        if (message.chainAPIPort !== 0) {
            writer.uint32(48).uint32(message.chainAPIPort);
        }
        if (message.chainRPCPort !== 0) {
            writer.uint32(56).uint32(message.chainRPCPort);
        }
        if (message.regionCode !== "") {
            writer.uint32(66).string(message.regionCode);
        }
        if (message.registerStatus !== "") {
            writer.uint32(74).string(message.registerStatus);
        }
        if (message.workingStatus !== "") {
            writer.uint32(82).string(message.workingStatus);
        }
        if (message.creator !== "") {
            writer.uint32(90).string(message.creator);
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
        const message = createBaseManager();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.managerAccount = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.operatorAccount = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.hostAddress = reader.string();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.managerPort = reader.uint32();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.trackerPort = reader.uint32();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.chainAPIPort = reader.uint32();
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.chainRPCPort = reader.uint32();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.regionCode = reader.string();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.registerStatus = reader.string();
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.workingStatus = reader.string();
                    continue;
                case 11:
                    if (tag !== 90) {
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
            managerAccount: isSet(object.managerAccount) ? String(object.managerAccount) : "",
            operatorAccount: isSet(object.operatorAccount) ? String(object.operatorAccount) : "",
            hostAddress: isSet(object.hostAddress) ? String(object.hostAddress) : "",
            managerPort: isSet(object.managerPort) ? Number(object.managerPort) : 0,
            trackerPort: isSet(object.trackerPort) ? Number(object.trackerPort) : 0,
            chainAPIPort: isSet(object.chainAPIPort) ? Number(object.chainAPIPort) : 0,
            chainRPCPort: isSet(object.chainRPCPort) ? Number(object.chainRPCPort) : 0,
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
        if (message.managerAccount !== "") {
            obj.managerAccount = message.managerAccount;
        }
        if (message.operatorAccount !== "") {
            obj.operatorAccount = message.operatorAccount;
        }
        if (message.hostAddress !== "") {
            obj.hostAddress = message.hostAddress;
        }
        if (message.managerPort !== 0) {
            obj.managerPort = Math.round(message.managerPort);
        }
        if (message.trackerPort !== 0) {
            obj.trackerPort = Math.round(message.trackerPort);
        }
        if (message.chainAPIPort !== 0) {
            obj.chainAPIPort = Math.round(message.chainAPIPort);
        }
        if (message.chainRPCPort !== 0) {
            obj.chainRPCPort = Math.round(message.chainRPCPort);
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
        return exports.Manager.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseManager();
        message.managerAccount = object.managerAccount ?? "";
        message.operatorAccount = object.operatorAccount ?? "";
        message.hostAddress = object.hostAddress ?? "";
        message.managerPort = object.managerPort ?? 0;
        message.trackerPort = object.trackerPort ?? 0;
        message.chainAPIPort = object.chainAPIPort ?? 0;
        message.chainRPCPort = object.chainRPCPort ?? 0;
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
