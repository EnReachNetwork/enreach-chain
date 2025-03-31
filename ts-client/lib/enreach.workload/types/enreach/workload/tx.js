"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgServiceName = exports.MsgUpdateSuperiorResponse = exports.MsgUpdateSuperior = exports.MsgCreateSuperiorResponse = exports.MsgCreateSuperior = exports.MsgUpdateHistoryEpochDataDepthResponse = exports.MsgUpdateHistoryEpochDataDepth = exports.MsgUpdateWorkreportProcessBatchSizeResponse = exports.MsgUpdateWorkreportProcessBatchSize = exports.MsgSubmitWorkreportsResponse = exports.MsgSubmitWorkreports = exports.MsgUpdateParamsResponse = exports.MsgUpdateParams = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const params_1 = require("./params");
const workreport_1 = require("./workreport");
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
function createBaseMsgSubmitWorkreports() {
    return { managerAccount: "", epoch: 0, nodeScores: [] };
}
exports.MsgSubmitWorkreports = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.managerAccount !== "") {
            writer.uint32(10).string(message.managerAccount);
        }
        if (message.epoch !== 0) {
            writer.uint32(16).uint64(message.epoch);
        }
        for (const v of message.nodeScores) {
            workreport_1.NodeScore.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitWorkreports();
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
                    if (tag !== 16) {
                        break;
                    }
                    message.epoch = longToNumber(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.nodeScores.push(workreport_1.NodeScore.decode(reader, reader.uint32()));
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
            epoch: isSet(object.epoch) ? Number(object.epoch) : 0,
            nodeScores: Array.isArray(object?.nodeScores) ? object.nodeScores.map((e) => workreport_1.NodeScore.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.managerAccount !== "") {
            obj.managerAccount = message.managerAccount;
        }
        if (message.epoch !== 0) {
            obj.epoch = Math.round(message.epoch);
        }
        if (message.nodeScores?.length) {
            obj.nodeScores = message.nodeScores.map((e) => workreport_1.NodeScore.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.MsgSubmitWorkreports.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgSubmitWorkreports();
        message.managerAccount = object.managerAccount ?? "";
        message.epoch = object.epoch ?? 0;
        message.nodeScores = object.nodeScores?.map((e) => workreport_1.NodeScore.fromPartial(e)) || [];
        return message;
    },
};
function createBaseMsgSubmitWorkreportsResponse() {
    return {};
}
exports.MsgSubmitWorkreportsResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitWorkreportsResponse();
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
        return exports.MsgSubmitWorkreportsResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgSubmitWorkreportsResponse();
        return message;
    },
};
function createBaseMsgUpdateWorkreportProcessBatchSize() {
    return { signer: "", batchSize: 0 };
}
exports.MsgUpdateWorkreportProcessBatchSize = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.signer !== "") {
            writer.uint32(10).string(message.signer);
        }
        if (message.batchSize !== 0) {
            writer.uint32(16).uint64(message.batchSize);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateWorkreportProcessBatchSize();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.signer = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.batchSize = longToNumber(reader.uint64());
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
            signer: isSet(object.signer) ? String(object.signer) : "",
            batchSize: isSet(object.batchSize) ? Number(object.batchSize) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.signer !== "") {
            obj.signer = message.signer;
        }
        if (message.batchSize !== 0) {
            obj.batchSize = Math.round(message.batchSize);
        }
        return obj;
    },
    create(base) {
        return exports.MsgUpdateWorkreportProcessBatchSize.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateWorkreportProcessBatchSize();
        message.signer = object.signer ?? "";
        message.batchSize = object.batchSize ?? 0;
        return message;
    },
};
function createBaseMsgUpdateWorkreportProcessBatchSizeResponse() {
    return {};
}
exports.MsgUpdateWorkreportProcessBatchSizeResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateWorkreportProcessBatchSizeResponse();
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
        return exports.MsgUpdateWorkreportProcessBatchSizeResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateWorkreportProcessBatchSizeResponse();
        return message;
    },
};
function createBaseMsgUpdateHistoryEpochDataDepth() {
    return { signer: "", depth: 0 };
}
exports.MsgUpdateHistoryEpochDataDepth = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.signer !== "") {
            writer.uint32(10).string(message.signer);
        }
        if (message.depth !== 0) {
            writer.uint32(16).uint64(message.depth);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateHistoryEpochDataDepth();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.signer = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.depth = longToNumber(reader.uint64());
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
            signer: isSet(object.signer) ? String(object.signer) : "",
            depth: isSet(object.depth) ? Number(object.depth) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.signer !== "") {
            obj.signer = message.signer;
        }
        if (message.depth !== 0) {
            obj.depth = Math.round(message.depth);
        }
        return obj;
    },
    create(base) {
        return exports.MsgUpdateHistoryEpochDataDepth.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateHistoryEpochDataDepth();
        message.signer = object.signer ?? "";
        message.depth = object.depth ?? 0;
        return message;
    },
};
function createBaseMsgUpdateHistoryEpochDataDepthResponse() {
    return {};
}
exports.MsgUpdateHistoryEpochDataDepthResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateHistoryEpochDataDepthResponse();
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
        return exports.MsgUpdateHistoryEpochDataDepthResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateHistoryEpochDataDepthResponse();
        return message;
    },
};
function createBaseMsgCreateSuperior() {
    return { signer: "", account: "" };
}
exports.MsgCreateSuperior = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.signer !== "") {
            writer.uint32(10).string(message.signer);
        }
        if (message.account !== "") {
            writer.uint32(18).string(message.account);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateSuperior();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.signer = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.account = reader.string();
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
            signer: isSet(object.signer) ? String(object.signer) : "",
            account: isSet(object.account) ? String(object.account) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.signer !== "") {
            obj.signer = message.signer;
        }
        if (message.account !== "") {
            obj.account = message.account;
        }
        return obj;
    },
    create(base) {
        return exports.MsgCreateSuperior.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgCreateSuperior();
        message.signer = object.signer ?? "";
        message.account = object.account ?? "";
        return message;
    },
};
function createBaseMsgCreateSuperiorResponse() {
    return {};
}
exports.MsgCreateSuperiorResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateSuperiorResponse();
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
        return exports.MsgCreateSuperiorResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgCreateSuperiorResponse();
        return message;
    },
};
function createBaseMsgUpdateSuperior() {
    return { signer: "", account: "" };
}
exports.MsgUpdateSuperior = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.signer !== "") {
            writer.uint32(10).string(message.signer);
        }
        if (message.account !== "") {
            writer.uint32(18).string(message.account);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateSuperior();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.signer = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.account = reader.string();
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
            signer: isSet(object.signer) ? String(object.signer) : "",
            account: isSet(object.account) ? String(object.account) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.signer !== "") {
            obj.signer = message.signer;
        }
        if (message.account !== "") {
            obj.account = message.account;
        }
        return obj;
    },
    create(base) {
        return exports.MsgUpdateSuperior.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateSuperior();
        message.signer = object.signer ?? "";
        message.account = object.account ?? "";
        return message;
    },
};
function createBaseMsgUpdateSuperiorResponse() {
    return {};
}
exports.MsgUpdateSuperiorResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateSuperiorResponse();
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
        return exports.MsgUpdateSuperiorResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateSuperiorResponse();
        return message;
    },
};
exports.MsgServiceName = "enreach.workload.Msg";
class MsgClientImpl {
    constructor(rpc, opts) {
        this.service = opts?.service || exports.MsgServiceName;
        this.rpc = rpc;
        this.UpdateParams = this.UpdateParams.bind(this);
        this.SubmitWorkreports = this.SubmitWorkreports.bind(this);
        this.UpdateWorkreportProcessBatchSize = this.UpdateWorkreportProcessBatchSize.bind(this);
        this.UpdateHistoryEpochDataDepth = this.UpdateHistoryEpochDataDepth.bind(this);
        this.CreateSuperior = this.CreateSuperior.bind(this);
        this.UpdateSuperior = this.UpdateSuperior.bind(this);
    }
    UpdateParams(request) {
        const data = exports.MsgUpdateParams.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpdateParams", data);
        return promise.then((data) => exports.MsgUpdateParamsResponse.decode(minimal_1.default.Reader.create(data)));
    }
    SubmitWorkreports(request) {
        const data = exports.MsgSubmitWorkreports.encode(request).finish();
        const promise = this.rpc.request(this.service, "SubmitWorkreports", data);
        return promise.then((data) => exports.MsgSubmitWorkreportsResponse.decode(minimal_1.default.Reader.create(data)));
    }
    UpdateWorkreportProcessBatchSize(request) {
        const data = exports.MsgUpdateWorkreportProcessBatchSize.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpdateWorkreportProcessBatchSize", data);
        return promise.then((data) => exports.MsgUpdateWorkreportProcessBatchSizeResponse.decode(minimal_1.default.Reader.create(data)));
    }
    UpdateHistoryEpochDataDepth(request) {
        const data = exports.MsgUpdateHistoryEpochDataDepth.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpdateHistoryEpochDataDepth", data);
        return promise.then((data) => exports.MsgUpdateHistoryEpochDataDepthResponse.decode(minimal_1.default.Reader.create(data)));
    }
    CreateSuperior(request) {
        const data = exports.MsgCreateSuperior.encode(request).finish();
        const promise = this.rpc.request(this.service, "CreateSuperior", data);
        return promise.then((data) => exports.MsgCreateSuperiorResponse.decode(minimal_1.default.Reader.create(data)));
    }
    UpdateSuperior(request) {
        const data = exports.MsgUpdateSuperior.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpdateSuperior", data);
        return promise.then((data) => exports.MsgUpdateSuperiorResponse.decode(minimal_1.default.Reader.create(data)));
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
