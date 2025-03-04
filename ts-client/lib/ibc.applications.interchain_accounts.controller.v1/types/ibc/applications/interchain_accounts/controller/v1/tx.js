"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgServiceName = exports.MsgUpdateParamsResponse = exports.MsgUpdateParams = exports.MsgSendTxResponse = exports.MsgSendTx = exports.MsgRegisterInterchainAccountResponse = exports.MsgRegisterInterchainAccount = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const channel_1 = require("../../../../core/channel/v1/channel");
const packet_1 = require("../../v1/packet");
const controller_1 = require("./controller");
exports.protobufPackage = "ibc.applications.interchain_accounts.controller.v1";
function createBaseMsgRegisterInterchainAccount() {
    return { owner: "", connectionId: "", version: "", ordering: 0 };
}
exports.MsgRegisterInterchainAccount = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.connectionId !== "") {
            writer.uint32(18).string(message.connectionId);
        }
        if (message.version !== "") {
            writer.uint32(26).string(message.version);
        }
        if (message.ordering !== 0) {
            writer.uint32(32).int32(message.ordering);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRegisterInterchainAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.owner = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.connectionId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.version = reader.string();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.ordering = reader.int32();
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
            owner: isSet(object.owner) ? String(object.owner) : "",
            connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
            version: isSet(object.version) ? String(object.version) : "",
            ordering: isSet(object.ordering) ? (0, channel_1.orderFromJSON)(object.ordering) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.owner !== "") {
            obj.owner = message.owner;
        }
        if (message.connectionId !== "") {
            obj.connectionId = message.connectionId;
        }
        if (message.version !== "") {
            obj.version = message.version;
        }
        if (message.ordering !== 0) {
            obj.ordering = (0, channel_1.orderToJSON)(message.ordering);
        }
        return obj;
    },
    create(base) {
        return exports.MsgRegisterInterchainAccount.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgRegisterInterchainAccount();
        message.owner = object.owner ?? "";
        message.connectionId = object.connectionId ?? "";
        message.version = object.version ?? "";
        message.ordering = object.ordering ?? 0;
        return message;
    },
};
function createBaseMsgRegisterInterchainAccountResponse() {
    return { channelId: "", portId: "" };
}
exports.MsgRegisterInterchainAccountResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.channelId !== "") {
            writer.uint32(10).string(message.channelId);
        }
        if (message.portId !== "") {
            writer.uint32(18).string(message.portId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRegisterInterchainAccountResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.channelId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.portId = reader.string();
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
            channelId: isSet(object.channelId) ? String(object.channelId) : "",
            portId: isSet(object.portId) ? String(object.portId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.channelId !== "") {
            obj.channelId = message.channelId;
        }
        if (message.portId !== "") {
            obj.portId = message.portId;
        }
        return obj;
    },
    create(base) {
        return exports.MsgRegisterInterchainAccountResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgRegisterInterchainAccountResponse();
        message.channelId = object.channelId ?? "";
        message.portId = object.portId ?? "";
        return message;
    },
};
function createBaseMsgSendTx() {
    return { owner: "", connectionId: "", packetData: undefined, relativeTimeout: 0 };
}
exports.MsgSendTx = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.connectionId !== "") {
            writer.uint32(18).string(message.connectionId);
        }
        if (message.packetData !== undefined) {
            packet_1.InterchainAccountPacketData.encode(message.packetData, writer.uint32(26).fork()).ldelim();
        }
        if (message.relativeTimeout !== 0) {
            writer.uint32(32).uint64(message.relativeTimeout);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSendTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.owner = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.connectionId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.packetData = packet_1.InterchainAccountPacketData.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.relativeTimeout = longToNumber(reader.uint64());
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
            owner: isSet(object.owner) ? String(object.owner) : "",
            connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
            packetData: isSet(object.packetData) ? packet_1.InterchainAccountPacketData.fromJSON(object.packetData) : undefined,
            relativeTimeout: isSet(object.relativeTimeout) ? Number(object.relativeTimeout) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.owner !== "") {
            obj.owner = message.owner;
        }
        if (message.connectionId !== "") {
            obj.connectionId = message.connectionId;
        }
        if (message.packetData !== undefined) {
            obj.packetData = packet_1.InterchainAccountPacketData.toJSON(message.packetData);
        }
        if (message.relativeTimeout !== 0) {
            obj.relativeTimeout = Math.round(message.relativeTimeout);
        }
        return obj;
    },
    create(base) {
        return exports.MsgSendTx.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgSendTx();
        message.owner = object.owner ?? "";
        message.connectionId = object.connectionId ?? "";
        message.packetData = (object.packetData !== undefined && object.packetData !== null)
            ? packet_1.InterchainAccountPacketData.fromPartial(object.packetData)
            : undefined;
        message.relativeTimeout = object.relativeTimeout ?? 0;
        return message;
    },
};
function createBaseMsgSendTxResponse() {
    return { sequence: 0 };
}
exports.MsgSendTxResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sequence !== 0) {
            writer.uint32(8).uint64(message.sequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSendTxResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
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
        return { sequence: isSet(object.sequence) ? Number(object.sequence) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.sequence !== 0) {
            obj.sequence = Math.round(message.sequence);
        }
        return obj;
    },
    create(base) {
        return exports.MsgSendTxResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgSendTxResponse();
        message.sequence = object.sequence ?? 0;
        return message;
    },
};
function createBaseMsgUpdateParams() {
    return { signer: "", params: undefined };
}
exports.MsgUpdateParams = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.signer !== "") {
            writer.uint32(10).string(message.signer);
        }
        if (message.params !== undefined) {
            controller_1.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
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
                    message.signer = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.params = controller_1.Params.decode(reader, reader.uint32());
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
            params: isSet(object.params) ? controller_1.Params.fromJSON(object.params) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.signer !== "") {
            obj.signer = message.signer;
        }
        if (message.params !== undefined) {
            obj.params = controller_1.Params.toJSON(message.params);
        }
        return obj;
    },
    create(base) {
        return exports.MsgUpdateParams.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateParams();
        message.signer = object.signer ?? "";
        message.params = (object.params !== undefined && object.params !== null)
            ? controller_1.Params.fromPartial(object.params)
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
exports.MsgServiceName = "ibc.applications.interchain_accounts.controller.v1.Msg";
class MsgClientImpl {
    constructor(rpc, opts) {
        this.service = opts?.service || exports.MsgServiceName;
        this.rpc = rpc;
        this.RegisterInterchainAccount = this.RegisterInterchainAccount.bind(this);
        this.SendTx = this.SendTx.bind(this);
        this.UpdateParams = this.UpdateParams.bind(this);
    }
    RegisterInterchainAccount(request) {
        const data = exports.MsgRegisterInterchainAccount.encode(request).finish();
        const promise = this.rpc.request(this.service, "RegisterInterchainAccount", data);
        return promise.then((data) => exports.MsgRegisterInterchainAccountResponse.decode(minimal_1.default.Reader.create(data)));
    }
    SendTx(request) {
        const data = exports.MsgSendTx.encode(request).finish();
        const promise = this.rpc.request(this.service, "SendTx", data);
        return promise.then((data) => exports.MsgSendTxResponse.decode(minimal_1.default.Reader.create(data)));
    }
    UpdateParams(request) {
        const data = exports.MsgUpdateParams.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpdateParams", data);
        return promise.then((data) => exports.MsgUpdateParamsResponse.decode(minimal_1.default.Reader.create(data)));
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
