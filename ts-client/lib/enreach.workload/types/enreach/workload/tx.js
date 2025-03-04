"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgServiceName = exports.MsgDeleteWorkloadResponse = exports.MsgDeleteWorkload = exports.MsgUpdateWorkloadResponse = exports.MsgUpdateWorkload = exports.MsgCreateWorkloadResponse = exports.MsgCreateWorkload = exports.MsgUpdateParamsResponse = exports.MsgUpdateParams = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const params_1 = require("./params");
exports.protobufPackage = "enreach.workload";
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
function createBaseMsgCreateWorkload() {
    return { creator: "", epoch: 0, minerId: "", score: 0, managerId: "" };
}
exports.MsgCreateWorkload = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.epoch !== 0) {
            writer.uint32(16).uint64(message.epoch);
        }
        if (message.minerId !== "") {
            writer.uint32(26).string(message.minerId);
        }
        if (message.score !== 0) {
            writer.uint32(32).uint64(message.score);
        }
        if (message.managerId !== "") {
            writer.uint32(42).string(message.managerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateWorkload();
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
                    message.epoch = longToNumber(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.minerId = reader.string();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.score = longToNumber(reader.uint64());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.managerId = reader.string();
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
            epoch: isSet(object.epoch) ? Number(object.epoch) : 0,
            minerId: isSet(object.minerId) ? String(object.minerId) : "",
            score: isSet(object.score) ? Number(object.score) : 0,
            managerId: isSet(object.managerId) ? String(object.managerId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.creator !== "") {
            obj.creator = message.creator;
        }
        if (message.epoch !== 0) {
            obj.epoch = Math.round(message.epoch);
        }
        if (message.minerId !== "") {
            obj.minerId = message.minerId;
        }
        if (message.score !== 0) {
            obj.score = Math.round(message.score);
        }
        if (message.managerId !== "") {
            obj.managerId = message.managerId;
        }
        return obj;
    },
    create(base) {
        return exports.MsgCreateWorkload.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgCreateWorkload();
        message.creator = object.creator ?? "";
        message.epoch = object.epoch ?? 0;
        message.minerId = object.minerId ?? "";
        message.score = object.score ?? 0;
        message.managerId = object.managerId ?? "";
        return message;
    },
};
function createBaseMsgCreateWorkloadResponse() {
    return { id: 0 };
}
exports.MsgCreateWorkloadResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateWorkloadResponse();
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
        return exports.MsgCreateWorkloadResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgCreateWorkloadResponse();
        message.id = object.id ?? 0;
        return message;
    },
};
function createBaseMsgUpdateWorkload() {
    return { creator: "", id: 0, epoch: 0, minerId: "", score: 0, managerId: "" };
}
exports.MsgUpdateWorkload = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.epoch !== 0) {
            writer.uint32(24).uint64(message.epoch);
        }
        if (message.minerId !== "") {
            writer.uint32(34).string(message.minerId);
        }
        if (message.score !== 0) {
            writer.uint32(40).uint64(message.score);
        }
        if (message.managerId !== "") {
            writer.uint32(50).string(message.managerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateWorkload();
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
                    if (tag !== 24) {
                        break;
                    }
                    message.epoch = longToNumber(reader.uint64());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.minerId = reader.string();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.score = longToNumber(reader.uint64());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.managerId = reader.string();
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
            epoch: isSet(object.epoch) ? Number(object.epoch) : 0,
            minerId: isSet(object.minerId) ? String(object.minerId) : "",
            score: isSet(object.score) ? Number(object.score) : 0,
            managerId: isSet(object.managerId) ? String(object.managerId) : "",
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
        if (message.epoch !== 0) {
            obj.epoch = Math.round(message.epoch);
        }
        if (message.minerId !== "") {
            obj.minerId = message.minerId;
        }
        if (message.score !== 0) {
            obj.score = Math.round(message.score);
        }
        if (message.managerId !== "") {
            obj.managerId = message.managerId;
        }
        return obj;
    },
    create(base) {
        return exports.MsgUpdateWorkload.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateWorkload();
        message.creator = object.creator ?? "";
        message.id = object.id ?? 0;
        message.epoch = object.epoch ?? 0;
        message.minerId = object.minerId ?? "";
        message.score = object.score ?? 0;
        message.managerId = object.managerId ?? "";
        return message;
    },
};
function createBaseMsgUpdateWorkloadResponse() {
    return {};
}
exports.MsgUpdateWorkloadResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateWorkloadResponse();
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
        return exports.MsgUpdateWorkloadResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateWorkloadResponse();
        return message;
    },
};
function createBaseMsgDeleteWorkload() {
    return { creator: "", id: 0 };
}
exports.MsgDeleteWorkload = {
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
        const message = createBaseMsgDeleteWorkload();
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
        return exports.MsgDeleteWorkload.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgDeleteWorkload();
        message.creator = object.creator ?? "";
        message.id = object.id ?? 0;
        return message;
    },
};
function createBaseMsgDeleteWorkloadResponse() {
    return {};
}
exports.MsgDeleteWorkloadResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDeleteWorkloadResponse();
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
        return exports.MsgDeleteWorkloadResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgDeleteWorkloadResponse();
        return message;
    },
};
exports.MsgServiceName = "enreach.workload.Msg";
class MsgClientImpl {
    constructor(rpc, opts) {
        this.service = opts?.service || exports.MsgServiceName;
        this.rpc = rpc;
        this.UpdateParams = this.UpdateParams.bind(this);
        this.CreateWorkload = this.CreateWorkload.bind(this);
        this.UpdateWorkload = this.UpdateWorkload.bind(this);
        this.DeleteWorkload = this.DeleteWorkload.bind(this);
    }
    UpdateParams(request) {
        const data = exports.MsgUpdateParams.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpdateParams", data);
        return promise.then((data) => exports.MsgUpdateParamsResponse.decode(minimal_1.default.Reader.create(data)));
    }
    CreateWorkload(request) {
        const data = exports.MsgCreateWorkload.encode(request).finish();
        const promise = this.rpc.request(this.service, "CreateWorkload", data);
        return promise.then((data) => exports.MsgCreateWorkloadResponse.decode(minimal_1.default.Reader.create(data)));
    }
    UpdateWorkload(request) {
        const data = exports.MsgUpdateWorkload.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpdateWorkload", data);
        return promise.then((data) => exports.MsgUpdateWorkloadResponse.decode(minimal_1.default.Reader.create(data)));
    }
    DeleteWorkload(request) {
        const data = exports.MsgDeleteWorkload.encode(request).finish();
        const promise = this.rpc.request(this.service, "DeleteWorkload", data);
        return promise.then((data) => exports.MsgDeleteWorkloadResponse.decode(minimal_1.default.Reader.create(data)));
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
