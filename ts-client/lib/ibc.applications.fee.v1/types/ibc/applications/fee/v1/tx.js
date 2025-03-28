"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgServiceName = exports.MsgPayPacketFeeAsyncResponse = exports.MsgPayPacketFeeAsync = exports.MsgPayPacketFeeResponse = exports.MsgPayPacketFee = exports.MsgRegisterCounterpartyPayeeResponse = exports.MsgRegisterCounterpartyPayee = exports.MsgRegisterPayeeResponse = exports.MsgRegisterPayee = exports.protobufPackage = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const channel_1 = require("../../../core/channel/v1/channel");
const fee_1 = require("./fee");
exports.protobufPackage = "ibc.applications.fee.v1";
function createBaseMsgRegisterPayee() {
    return { portId: "", channelId: "", relayer: "", payee: "" };
}
exports.MsgRegisterPayee = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.relayer !== "") {
            writer.uint32(26).string(message.relayer);
        }
        if (message.payee !== "") {
            writer.uint32(34).string(message.payee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRegisterPayee();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.portId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.channelId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.relayer = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.payee = reader.string();
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
            portId: isSet(object.portId) ? String(object.portId) : "",
            channelId: isSet(object.channelId) ? String(object.channelId) : "",
            relayer: isSet(object.relayer) ? String(object.relayer) : "",
            payee: isSet(object.payee) ? String(object.payee) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.portId !== "") {
            obj.portId = message.portId;
        }
        if (message.channelId !== "") {
            obj.channelId = message.channelId;
        }
        if (message.relayer !== "") {
            obj.relayer = message.relayer;
        }
        if (message.payee !== "") {
            obj.payee = message.payee;
        }
        return obj;
    },
    create(base) {
        return exports.MsgRegisterPayee.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgRegisterPayee();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.relayer = object.relayer ?? "";
        message.payee = object.payee ?? "";
        return message;
    },
};
function createBaseMsgRegisterPayeeResponse() {
    return {};
}
exports.MsgRegisterPayeeResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRegisterPayeeResponse();
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
        return exports.MsgRegisterPayeeResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgRegisterPayeeResponse();
        return message;
    },
};
function createBaseMsgRegisterCounterpartyPayee() {
    return { portId: "", channelId: "", relayer: "", counterpartyPayee: "" };
}
exports.MsgRegisterCounterpartyPayee = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.relayer !== "") {
            writer.uint32(26).string(message.relayer);
        }
        if (message.counterpartyPayee !== "") {
            writer.uint32(34).string(message.counterpartyPayee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRegisterCounterpartyPayee();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.portId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.channelId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.relayer = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.counterpartyPayee = reader.string();
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
            portId: isSet(object.portId) ? String(object.portId) : "",
            channelId: isSet(object.channelId) ? String(object.channelId) : "",
            relayer: isSet(object.relayer) ? String(object.relayer) : "",
            counterpartyPayee: isSet(object.counterpartyPayee) ? String(object.counterpartyPayee) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.portId !== "") {
            obj.portId = message.portId;
        }
        if (message.channelId !== "") {
            obj.channelId = message.channelId;
        }
        if (message.relayer !== "") {
            obj.relayer = message.relayer;
        }
        if (message.counterpartyPayee !== "") {
            obj.counterpartyPayee = message.counterpartyPayee;
        }
        return obj;
    },
    create(base) {
        return exports.MsgRegisterCounterpartyPayee.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgRegisterCounterpartyPayee();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.relayer = object.relayer ?? "";
        message.counterpartyPayee = object.counterpartyPayee ?? "";
        return message;
    },
};
function createBaseMsgRegisterCounterpartyPayeeResponse() {
    return {};
}
exports.MsgRegisterCounterpartyPayeeResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRegisterCounterpartyPayeeResponse();
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
        return exports.MsgRegisterCounterpartyPayeeResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgRegisterCounterpartyPayeeResponse();
        return message;
    },
};
function createBaseMsgPayPacketFee() {
    return { fee: undefined, sourcePortId: "", sourceChannelId: "", signer: "", relayers: [] };
}
exports.MsgPayPacketFee = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.fee !== undefined) {
            fee_1.Fee.encode(message.fee, writer.uint32(10).fork()).ldelim();
        }
        if (message.sourcePortId !== "") {
            writer.uint32(18).string(message.sourcePortId);
        }
        if (message.sourceChannelId !== "") {
            writer.uint32(26).string(message.sourceChannelId);
        }
        if (message.signer !== "") {
            writer.uint32(34).string(message.signer);
        }
        for (const v of message.relayers) {
            writer.uint32(42).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgPayPacketFee();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.fee = fee_1.Fee.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.sourcePortId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.sourceChannelId = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.signer = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.relayers.push(reader.string());
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
            fee: isSet(object.fee) ? fee_1.Fee.fromJSON(object.fee) : undefined,
            sourcePortId: isSet(object.sourcePortId) ? String(object.sourcePortId) : "",
            sourceChannelId: isSet(object.sourceChannelId) ? String(object.sourceChannelId) : "",
            signer: isSet(object.signer) ? String(object.signer) : "",
            relayers: Array.isArray(object?.relayers) ? object.relayers.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.fee !== undefined) {
            obj.fee = fee_1.Fee.toJSON(message.fee);
        }
        if (message.sourcePortId !== "") {
            obj.sourcePortId = message.sourcePortId;
        }
        if (message.sourceChannelId !== "") {
            obj.sourceChannelId = message.sourceChannelId;
        }
        if (message.signer !== "") {
            obj.signer = message.signer;
        }
        if (message.relayers?.length) {
            obj.relayers = message.relayers;
        }
        return obj;
    },
    create(base) {
        return exports.MsgPayPacketFee.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgPayPacketFee();
        message.fee = (object.fee !== undefined && object.fee !== null) ? fee_1.Fee.fromPartial(object.fee) : undefined;
        message.sourcePortId = object.sourcePortId ?? "";
        message.sourceChannelId = object.sourceChannelId ?? "";
        message.signer = object.signer ?? "";
        message.relayers = object.relayers?.map((e) => e) || [];
        return message;
    },
};
function createBaseMsgPayPacketFeeResponse() {
    return {};
}
exports.MsgPayPacketFeeResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgPayPacketFeeResponse();
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
        return exports.MsgPayPacketFeeResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgPayPacketFeeResponse();
        return message;
    },
};
function createBaseMsgPayPacketFeeAsync() {
    return { packetId: undefined, packetFee: undefined };
}
exports.MsgPayPacketFeeAsync = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.packetId !== undefined) {
            channel_1.PacketId.encode(message.packetId, writer.uint32(10).fork()).ldelim();
        }
        if (message.packetFee !== undefined) {
            fee_1.PacketFee.encode(message.packetFee, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgPayPacketFeeAsync();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.packetId = channel_1.PacketId.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.packetFee = fee_1.PacketFee.decode(reader, reader.uint32());
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
            packetId: isSet(object.packetId) ? channel_1.PacketId.fromJSON(object.packetId) : undefined,
            packetFee: isSet(object.packetFee) ? fee_1.PacketFee.fromJSON(object.packetFee) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.packetId !== undefined) {
            obj.packetId = channel_1.PacketId.toJSON(message.packetId);
        }
        if (message.packetFee !== undefined) {
            obj.packetFee = fee_1.PacketFee.toJSON(message.packetFee);
        }
        return obj;
    },
    create(base) {
        return exports.MsgPayPacketFeeAsync.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgPayPacketFeeAsync();
        message.packetId = (object.packetId !== undefined && object.packetId !== null)
            ? channel_1.PacketId.fromPartial(object.packetId)
            : undefined;
        message.packetFee = (object.packetFee !== undefined && object.packetFee !== null)
            ? fee_1.PacketFee.fromPartial(object.packetFee)
            : undefined;
        return message;
    },
};
function createBaseMsgPayPacketFeeAsyncResponse() {
    return {};
}
exports.MsgPayPacketFeeAsyncResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgPayPacketFeeAsyncResponse();
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
        return exports.MsgPayPacketFeeAsyncResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgPayPacketFeeAsyncResponse();
        return message;
    },
};
exports.MsgServiceName = "ibc.applications.fee.v1.Msg";
class MsgClientImpl {
    constructor(rpc, opts) {
        this.service = opts?.service || exports.MsgServiceName;
        this.rpc = rpc;
        this.RegisterPayee = this.RegisterPayee.bind(this);
        this.RegisterCounterpartyPayee = this.RegisterCounterpartyPayee.bind(this);
        this.PayPacketFee = this.PayPacketFee.bind(this);
        this.PayPacketFeeAsync = this.PayPacketFeeAsync.bind(this);
    }
    RegisterPayee(request) {
        const data = exports.MsgRegisterPayee.encode(request).finish();
        const promise = this.rpc.request(this.service, "RegisterPayee", data);
        return promise.then((data) => exports.MsgRegisterPayeeResponse.decode(minimal_1.default.Reader.create(data)));
    }
    RegisterCounterpartyPayee(request) {
        const data = exports.MsgRegisterCounterpartyPayee.encode(request).finish();
        const promise = this.rpc.request(this.service, "RegisterCounterpartyPayee", data);
        return promise.then((data) => exports.MsgRegisterCounterpartyPayeeResponse.decode(minimal_1.default.Reader.create(data)));
    }
    PayPacketFee(request) {
        const data = exports.MsgPayPacketFee.encode(request).finish();
        const promise = this.rpc.request(this.service, "PayPacketFee", data);
        return promise.then((data) => exports.MsgPayPacketFeeResponse.decode(minimal_1.default.Reader.create(data)));
    }
    PayPacketFeeAsync(request) {
        const data = exports.MsgPayPacketFeeAsync.encode(request).finish();
        const promise = this.rpc.request(this.service, "PayPacketFeeAsync", data);
        return promise.then((data) => exports.MsgPayPacketFeeAsyncResponse.decode(minimal_1.default.Reader.create(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
function isSet(value) {
    return value !== null && value !== undefined;
}
