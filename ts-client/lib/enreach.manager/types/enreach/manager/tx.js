"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgServiceName = exports.MsgDeleteManagerResponse = exports.MsgDeleteManager = exports.MsgUpdateManagerResponse = exports.MsgUpdateManager = exports.MsgRegisterManagerResponse = exports.MsgRegisterManager = exports.MsgUpdateParamsResponse = exports.MsgUpdateParams = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const params_1 = require("./params");
exports.protobufPackage = "enreach.manager";
function createBaseMsgUpdateParams() {
    return { authority: "", params: undefined };
}
exports.MsgUpdateParams = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.authority = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.params = params_1.Params.decode(reader, reader.uint32());
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
            authority: isSet(object.authority) ? String(object.authority) : "",
            params: isSet(object.params) ? params_1.Params.fromJSON(object.params) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.authority !== "") {
            obj.authority = message.authority;
        }
        if (message.params !== undefined) {
            obj.params = params_1.Params.toJSON(message.params);
        }
        return obj;
    },
    create(base) {
        return exports.MsgUpdateParams.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateParams();
        message.authority = object.authority ?? "";
        message.params = (object.params !== undefined && object.params !== null)
            ? params_1.Params.fromPartial(object.params)
            : undefined;
        return message;
    },
};
function createBaseMsgUpdateParamsResponse() {
    return {};
}
exports.MsgUpdateParamsResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParamsResponse();
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
        return exports.MsgUpdateParamsResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateParamsResponse();
        return message;
    },
};
function createBaseMsgRegisterManager() {
    return {
        creator: "",
        managerAddress: "",
        operatorName: "",
        operatorDesc: "",
        operatorWebsiteURL: "",
        evmAddress: "",
        hostAddress: "",
        managerPort: 0,
        trackerPort: 0,
        chainAPIPort: 0,
        chainRPCPort: 0,
        regionCode: "",
    };
}
exports.MsgRegisterManager = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.managerAddress !== "") {
            writer.uint32(18).string(message.managerAddress);
        }
        if (message.operatorName !== "") {
            writer.uint32(26).string(message.operatorName);
        }
        if (message.operatorDesc !== "") {
            writer.uint32(34).string(message.operatorDesc);
        }
        if (message.operatorWebsiteURL !== "") {
            writer.uint32(42).string(message.operatorWebsiteURL);
        }
        if (message.evmAddress !== "") {
            writer.uint32(50).string(message.evmAddress);
        }
        if (message.hostAddress !== "") {
            writer.uint32(58).string(message.hostAddress);
        }
        if (message.managerPort !== 0) {
            writer.uint32(64).uint32(message.managerPort);
        }
        if (message.trackerPort !== 0) {
            writer.uint32(72).uint32(message.trackerPort);
        }
        if (message.chainAPIPort !== 0) {
            writer.uint32(80).uint32(message.chainAPIPort);
        }
        if (message.chainRPCPort !== 0) {
            writer.uint32(88).uint32(message.chainRPCPort);
        }
        if (message.regionCode !== "") {
            writer.uint32(98).string(message.regionCode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRegisterManager();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.creator = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.managerAddress = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.operatorName = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.operatorDesc = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.operatorWebsiteURL = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.evmAddress = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.hostAddress = reader.string();
                    continue;
                case 8:
                    if (tag !== 64) {
                        break;
                    }
                    message.managerPort = reader.uint32();
                    continue;
                case 9:
                    if (tag !== 72) {
                        break;
                    }
                    message.trackerPort = reader.uint32();
                    continue;
                case 10:
                    if (tag !== 80) {
                        break;
                    }
                    message.chainAPIPort = reader.uint32();
                    continue;
                case 11:
                    if (tag !== 88) {
                        break;
                    }
                    message.chainRPCPort = reader.uint32();
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.regionCode = reader.string();
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            managerAddress: isSet(object.managerAddress) ? String(object.managerAddress) : "",
            operatorName: isSet(object.operatorName) ? String(object.operatorName) : "",
            operatorDesc: isSet(object.operatorDesc) ? String(object.operatorDesc) : "",
            operatorWebsiteURL: isSet(object.operatorWebsiteURL) ? String(object.operatorWebsiteURL) : "",
            evmAddress: isSet(object.evmAddress) ? String(object.evmAddress) : "",
            hostAddress: isSet(object.hostAddress) ? String(object.hostAddress) : "",
            managerPort: isSet(object.managerPort) ? Number(object.managerPort) : 0,
            trackerPort: isSet(object.trackerPort) ? Number(object.trackerPort) : 0,
            chainAPIPort: isSet(object.chainAPIPort) ? Number(object.chainAPIPort) : 0,
            chainRPCPort: isSet(object.chainRPCPort) ? Number(object.chainRPCPort) : 0,
            regionCode: isSet(object.regionCode) ? String(object.regionCode) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.creator !== "") {
            obj.creator = message.creator;
        }
        if (message.managerAddress !== "") {
            obj.managerAddress = message.managerAddress;
        }
        if (message.operatorName !== "") {
            obj.operatorName = message.operatorName;
        }
        if (message.operatorDesc !== "") {
            obj.operatorDesc = message.operatorDesc;
        }
        if (message.operatorWebsiteURL !== "") {
            obj.operatorWebsiteURL = message.operatorWebsiteURL;
        }
        if (message.evmAddress !== "") {
            obj.evmAddress = message.evmAddress;
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
        return obj;
    },
    create(base) {
        return exports.MsgRegisterManager.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgRegisterManager();
        message.creator = object.creator ?? "";
        message.managerAddress = object.managerAddress ?? "";
        message.operatorName = object.operatorName ?? "";
        message.operatorDesc = object.operatorDesc ?? "";
        message.operatorWebsiteURL = object.operatorWebsiteURL ?? "";
        message.evmAddress = object.evmAddress ?? "";
        message.hostAddress = object.hostAddress ?? "";
        message.managerPort = object.managerPort ?? 0;
        message.trackerPort = object.trackerPort ?? 0;
        message.chainAPIPort = object.chainAPIPort ?? 0;
        message.chainRPCPort = object.chainRPCPort ?? 0;
        message.regionCode = object.regionCode ?? "";
        return message;
    },
};
function createBaseMsgRegisterManagerResponse() {
    return { id: 0 };
}
exports.MsgRegisterManagerResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRegisterManagerResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.id = longToNumber(reader.uint64());
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
        return { id: isSet(object.id) ? Number(object.id) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== 0) {
            obj.id = Math.round(message.id);
        }
        return obj;
    },
    create(base) {
        return exports.MsgRegisterManagerResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgRegisterManagerResponse();
        message.id = object.id ?? 0;
        return message;
    },
};
function createBaseMsgUpdateManager() {
    return {
        creator: "",
        id: 0,
        managerAddress: "",
        operatorName: "",
        operatorDesc: "",
        operatorWebsiteURL: "",
        evmAddress: "",
        hostAddress: "",
        managerPort: 0,
        trackerPort: 0,
        chainAPIPort: 0,
        chainRPCPort: 0,
        regionCode: "",
    };
}
exports.MsgUpdateManager = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.managerAddress !== "") {
            writer.uint32(26).string(message.managerAddress);
        }
        if (message.operatorName !== "") {
            writer.uint32(34).string(message.operatorName);
        }
        if (message.operatorDesc !== "") {
            writer.uint32(42).string(message.operatorDesc);
        }
        if (message.operatorWebsiteURL !== "") {
            writer.uint32(50).string(message.operatorWebsiteURL);
        }
        if (message.evmAddress !== "") {
            writer.uint32(58).string(message.evmAddress);
        }
        if (message.hostAddress !== "") {
            writer.uint32(66).string(message.hostAddress);
        }
        if (message.managerPort !== 0) {
            writer.uint32(72).uint32(message.managerPort);
        }
        if (message.trackerPort !== 0) {
            writer.uint32(80).uint32(message.trackerPort);
        }
        if (message.chainAPIPort !== 0) {
            writer.uint32(88).uint32(message.chainAPIPort);
        }
        if (message.chainRPCPort !== 0) {
            writer.uint32(96).uint32(message.chainRPCPort);
        }
        if (message.regionCode !== "") {
            writer.uint32(106).string(message.regionCode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateManager();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.creator = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.id = longToNumber(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.managerAddress = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.operatorName = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.operatorDesc = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.operatorWebsiteURL = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.evmAddress = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.hostAddress = reader.string();
                    continue;
                case 9:
                    if (tag !== 72) {
                        break;
                    }
                    message.managerPort = reader.uint32();
                    continue;
                case 10:
                    if (tag !== 80) {
                        break;
                    }
                    message.trackerPort = reader.uint32();
                    continue;
                case 11:
                    if (tag !== 88) {
                        break;
                    }
                    message.chainAPIPort = reader.uint32();
                    continue;
                case 12:
                    if (tag !== 96) {
                        break;
                    }
                    message.chainRPCPort = reader.uint32();
                    continue;
                case 13:
                    if (tag !== 106) {
                        break;
                    }
                    message.regionCode = reader.string();
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            id: isSet(object.id) ? Number(object.id) : 0,
            managerAddress: isSet(object.managerAddress) ? String(object.managerAddress) : "",
            operatorName: isSet(object.operatorName) ? String(object.operatorName) : "",
            operatorDesc: isSet(object.operatorDesc) ? String(object.operatorDesc) : "",
            operatorWebsiteURL: isSet(object.operatorWebsiteURL) ? String(object.operatorWebsiteURL) : "",
            evmAddress: isSet(object.evmAddress) ? String(object.evmAddress) : "",
            hostAddress: isSet(object.hostAddress) ? String(object.hostAddress) : "",
            managerPort: isSet(object.managerPort) ? Number(object.managerPort) : 0,
            trackerPort: isSet(object.trackerPort) ? Number(object.trackerPort) : 0,
            chainAPIPort: isSet(object.chainAPIPort) ? Number(object.chainAPIPort) : 0,
            chainRPCPort: isSet(object.chainRPCPort) ? Number(object.chainRPCPort) : 0,
            regionCode: isSet(object.regionCode) ? String(object.regionCode) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.creator !== "") {
            obj.creator = message.creator;
        }
        if (message.id !== 0) {
            obj.id = Math.round(message.id);
        }
        if (message.managerAddress !== "") {
            obj.managerAddress = message.managerAddress;
        }
        if (message.operatorName !== "") {
            obj.operatorName = message.operatorName;
        }
        if (message.operatorDesc !== "") {
            obj.operatorDesc = message.operatorDesc;
        }
        if (message.operatorWebsiteURL !== "") {
            obj.operatorWebsiteURL = message.operatorWebsiteURL;
        }
        if (message.evmAddress !== "") {
            obj.evmAddress = message.evmAddress;
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
        return obj;
    },
    create(base) {
        return exports.MsgUpdateManager.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateManager();
        message.creator = object.creator ?? "";
        message.id = object.id ?? 0;
        message.managerAddress = object.managerAddress ?? "";
        message.operatorName = object.operatorName ?? "";
        message.operatorDesc = object.operatorDesc ?? "";
        message.operatorWebsiteURL = object.operatorWebsiteURL ?? "";
        message.evmAddress = object.evmAddress ?? "";
        message.hostAddress = object.hostAddress ?? "";
        message.managerPort = object.managerPort ?? 0;
        message.trackerPort = object.trackerPort ?? 0;
        message.chainAPIPort = object.chainAPIPort ?? 0;
        message.chainRPCPort = object.chainRPCPort ?? 0;
        message.regionCode = object.regionCode ?? "";
        return message;
    },
};
function createBaseMsgUpdateManagerResponse() {
    return {};
}
exports.MsgUpdateManagerResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateManagerResponse();
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
        return exports.MsgUpdateManagerResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateManagerResponse();
        return message;
    },
};
function createBaseMsgDeleteManager() {
    return { creator: "", id: 0 };
}
exports.MsgDeleteManager = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDeleteManager();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.creator = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.id = longToNumber(reader.uint64());
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            id: isSet(object.id) ? Number(object.id) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.creator !== "") {
            obj.creator = message.creator;
        }
        if (message.id !== 0) {
            obj.id = Math.round(message.id);
        }
        return obj;
    },
    create(base) {
        return exports.MsgDeleteManager.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgDeleteManager();
        message.creator = object.creator ?? "";
        message.id = object.id ?? 0;
        return message;
    },
};
function createBaseMsgDeleteManagerResponse() {
    return {};
}
exports.MsgDeleteManagerResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDeleteManagerResponse();
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
        return exports.MsgDeleteManagerResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgDeleteManagerResponse();
        return message;
    },
};
exports.MsgServiceName = "enreach.manager.Msg";
class MsgClientImpl {
    constructor(rpc, opts) {
        this.service = opts?.service || exports.MsgServiceName;
        this.rpc = rpc;
        this.UpdateParams = this.UpdateParams.bind(this);
        this.RegisterManager = this.RegisterManager.bind(this);
        this.UpdateManager = this.UpdateManager.bind(this);
        this.DeleteManager = this.DeleteManager.bind(this);
    }
    UpdateParams(request) {
        const data = exports.MsgUpdateParams.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpdateParams", data);
        return promise.then((data) => exports.MsgUpdateParamsResponse.decode(minimal_1.default.Reader.create(data)));
    }
    RegisterManager(request) {
        const data = exports.MsgRegisterManager.encode(request).finish();
        const promise = this.rpc.request(this.service, "RegisterManager", data);
        return promise.then((data) => exports.MsgRegisterManagerResponse.decode(minimal_1.default.Reader.create(data)));
    }
    UpdateManager(request) {
        const data = exports.MsgUpdateManager.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpdateManager", data);
        return promise.then((data) => exports.MsgUpdateManagerResponse.decode(minimal_1.default.Reader.create(data)));
    }
    DeleteManager(request) {
        const data = exports.MsgDeleteManager.encode(request).finish();
        const promise = this.rpc.request(this.service, "DeleteManager", data);
        return promise.then((data) => exports.MsgDeleteManagerResponse.decode(minimal_1.default.Reader.create(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
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
