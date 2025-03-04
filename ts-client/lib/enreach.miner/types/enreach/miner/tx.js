"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgServiceName = exports.MsgDeleteMinerResponse = exports.MsgDeleteMiner = exports.MsgUpdateMinerResponse = exports.MsgUpdateMiner = exports.MsgCreateMinerResponse = exports.MsgCreateMiner = exports.MsgUpdateParamsResponse = exports.MsgUpdateParams = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const params_1 = require("./params");
exports.protobufPackage = "enreach.miner";
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
function createBaseMsgCreateMiner() {
    return { creator: "", minerId: "", evmAddress: "", regionCode: "", status: "" };
}
exports.MsgCreateMiner = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
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
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateMiner();
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
            minerId: isSet(object.minerId) ? String(object.minerId) : "",
            evmAddress: isSet(object.evmAddress) ? String(object.evmAddress) : "",
            regionCode: isSet(object.regionCode) ? String(object.regionCode) : "",
            status: isSet(object.status) ? String(object.status) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.creator !== "") {
            obj.creator = message.creator;
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
        return obj;
    },
    create(base) {
        return exports.MsgCreateMiner.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgCreateMiner();
        message.creator = object.creator ?? "";
        message.minerId = object.minerId ?? "";
        message.evmAddress = object.evmAddress ?? "";
        message.regionCode = object.regionCode ?? "";
        message.status = object.status ?? "";
        return message;
    },
};
function createBaseMsgCreateMinerResponse() {
    return { id: 0 };
}
exports.MsgCreateMinerResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateMinerResponse();
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
        return exports.MsgCreateMinerResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgCreateMinerResponse();
        message.id = object.id ?? 0;
        return message;
    },
};
function createBaseMsgUpdateMiner() {
    return { creator: "", id: 0, minerId: "", evmAddress: "", regionCode: "", status: "" };
}
exports.MsgUpdateMiner = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.minerId !== "") {
            writer.uint32(26).string(message.minerId);
        }
        if (message.evmAddress !== "") {
            writer.uint32(34).string(message.evmAddress);
        }
        if (message.regionCode !== "") {
            writer.uint32(42).string(message.regionCode);
        }
        if (message.status !== "") {
            writer.uint32(50).string(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateMiner();
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
                    message.minerId = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.evmAddress = reader.string();
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
                    message.status = reader.string();
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
            minerId: isSet(object.minerId) ? String(object.minerId) : "",
            evmAddress: isSet(object.evmAddress) ? String(object.evmAddress) : "",
            regionCode: isSet(object.regionCode) ? String(object.regionCode) : "",
            status: isSet(object.status) ? String(object.status) : "",
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
        return obj;
    },
    create(base) {
        return exports.MsgUpdateMiner.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateMiner();
        message.creator = object.creator ?? "";
        message.id = object.id ?? 0;
        message.minerId = object.minerId ?? "";
        message.evmAddress = object.evmAddress ?? "";
        message.regionCode = object.regionCode ?? "";
        message.status = object.status ?? "";
        return message;
    },
};
function createBaseMsgUpdateMinerResponse() {
    return {};
}
exports.MsgUpdateMinerResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateMinerResponse();
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
        return exports.MsgUpdateMinerResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateMinerResponse();
        return message;
    },
};
function createBaseMsgDeleteMiner() {
    return { creator: "", id: 0 };
}
exports.MsgDeleteMiner = {
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
        const message = createBaseMsgDeleteMiner();
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
        return exports.MsgDeleteMiner.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgDeleteMiner();
        message.creator = object.creator ?? "";
        message.id = object.id ?? 0;
        return message;
    },
};
function createBaseMsgDeleteMinerResponse() {
    return {};
}
exports.MsgDeleteMinerResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDeleteMinerResponse();
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
        return exports.MsgDeleteMinerResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgDeleteMinerResponse();
        return message;
    },
};
exports.MsgServiceName = "enreach.miner.Msg";
class MsgClientImpl {
    constructor(rpc, opts) {
        this.service = opts?.service || exports.MsgServiceName;
        this.rpc = rpc;
        this.UpdateParams = this.UpdateParams.bind(this);
        this.CreateMiner = this.CreateMiner.bind(this);
        this.UpdateMiner = this.UpdateMiner.bind(this);
        this.DeleteMiner = this.DeleteMiner.bind(this);
    }
    UpdateParams(request) {
        const data = exports.MsgUpdateParams.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpdateParams", data);
        return promise.then((data) => exports.MsgUpdateParamsResponse.decode(minimal_1.default.Reader.create(data)));
    }
    CreateMiner(request) {
        const data = exports.MsgCreateMiner.encode(request).finish();
        const promise = this.rpc.request(this.service, "CreateMiner", data);
        return promise.then((data) => exports.MsgCreateMinerResponse.decode(minimal_1.default.Reader.create(data)));
    }
    UpdateMiner(request) {
        const data = exports.MsgUpdateMiner.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpdateMiner", data);
        return promise.then((data) => exports.MsgUpdateMinerResponse.decode(minimal_1.default.Reader.create(data)));
    }
    DeleteMiner(request) {
        const data = exports.MsgDeleteMiner.encode(request).finish();
        const promise = this.rpc.request(this.service, "DeleteMiner", data);
        return promise.then((data) => exports.MsgDeleteMinerResponse.decode(minimal_1.default.Reader.create(data)));
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
