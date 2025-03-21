"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgServiceName = exports.MsgPruneAcknowledgementsResponse = exports.MsgPruneAcknowledgements = exports.MsgUpdateParamsResponse = exports.MsgUpdateParams = exports.MsgChannelUpgradeCancelResponse = exports.MsgChannelUpgradeCancel = exports.MsgChannelUpgradeTimeoutResponse = exports.MsgChannelUpgradeTimeout = exports.MsgChannelUpgradeOpenResponse = exports.MsgChannelUpgradeOpen = exports.MsgChannelUpgradeConfirmResponse = exports.MsgChannelUpgradeConfirm = exports.MsgChannelUpgradeAckResponse = exports.MsgChannelUpgradeAck = exports.MsgChannelUpgradeTryResponse = exports.MsgChannelUpgradeTry = exports.MsgChannelUpgradeInitResponse = exports.MsgChannelUpgradeInit = exports.MsgAcknowledgementResponse = exports.MsgAcknowledgement = exports.MsgTimeoutOnCloseResponse = exports.MsgTimeoutOnClose = exports.MsgTimeoutResponse = exports.MsgTimeout = exports.MsgRecvPacketResponse = exports.MsgRecvPacket = exports.MsgChannelCloseConfirmResponse = exports.MsgChannelCloseConfirm = exports.MsgChannelCloseInitResponse = exports.MsgChannelCloseInit = exports.MsgChannelOpenConfirmResponse = exports.MsgChannelOpenConfirm = exports.MsgChannelOpenAckResponse = exports.MsgChannelOpenAck = exports.MsgChannelOpenTryResponse = exports.MsgChannelOpenTry = exports.MsgChannelOpenInitResponse = exports.MsgChannelOpenInit = exports.ResponseResultType = exports.protobufPackage = void 0;
exports.responseResultTypeFromJSON = responseResultTypeFromJSON;
exports.responseResultTypeToJSON = responseResultTypeToJSON;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const client_1 = require("../../client/v1/client");
const channel_1 = require("./channel");
const upgrade_1 = require("./upgrade");
exports.protobufPackage = "ibc.core.channel.v1";
/** ResponseResultType defines the possible outcomes of the execution of a message */
var ResponseResultType;
(function (ResponseResultType) {
    /** RESPONSE_RESULT_TYPE_UNSPECIFIED - Default zero value enumeration */
    ResponseResultType[ResponseResultType["RESPONSE_RESULT_TYPE_UNSPECIFIED"] = 0] = "RESPONSE_RESULT_TYPE_UNSPECIFIED";
    /** RESPONSE_RESULT_TYPE_NOOP - The message did not call the IBC application callbacks (because, for example, the packet had already been relayed) */
    ResponseResultType[ResponseResultType["RESPONSE_RESULT_TYPE_NOOP"] = 1] = "RESPONSE_RESULT_TYPE_NOOP";
    /** RESPONSE_RESULT_TYPE_SUCCESS - The message was executed successfully */
    ResponseResultType[ResponseResultType["RESPONSE_RESULT_TYPE_SUCCESS"] = 2] = "RESPONSE_RESULT_TYPE_SUCCESS";
    /** RESPONSE_RESULT_TYPE_FAILURE - The message was executed unsuccessfully */
    ResponseResultType[ResponseResultType["RESPONSE_RESULT_TYPE_FAILURE"] = 3] = "RESPONSE_RESULT_TYPE_FAILURE";
    ResponseResultType[ResponseResultType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ResponseResultType || (exports.ResponseResultType = ResponseResultType = {}));
function responseResultTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "RESPONSE_RESULT_TYPE_UNSPECIFIED":
            return ResponseResultType.RESPONSE_RESULT_TYPE_UNSPECIFIED;
        case 1:
        case "RESPONSE_RESULT_TYPE_NOOP":
            return ResponseResultType.RESPONSE_RESULT_TYPE_NOOP;
        case 2:
        case "RESPONSE_RESULT_TYPE_SUCCESS":
            return ResponseResultType.RESPONSE_RESULT_TYPE_SUCCESS;
        case 3:
        case "RESPONSE_RESULT_TYPE_FAILURE":
            return ResponseResultType.RESPONSE_RESULT_TYPE_FAILURE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ResponseResultType.UNRECOGNIZED;
    }
}
function responseResultTypeToJSON(object) {
    switch (object) {
        case ResponseResultType.RESPONSE_RESULT_TYPE_UNSPECIFIED:
            return "RESPONSE_RESULT_TYPE_UNSPECIFIED";
        case ResponseResultType.RESPONSE_RESULT_TYPE_NOOP:
            return "RESPONSE_RESULT_TYPE_NOOP";
        case ResponseResultType.RESPONSE_RESULT_TYPE_SUCCESS:
            return "RESPONSE_RESULT_TYPE_SUCCESS";
        case ResponseResultType.RESPONSE_RESULT_TYPE_FAILURE:
            return "RESPONSE_RESULT_TYPE_FAILURE";
        case ResponseResultType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseMsgChannelOpenInit() {
    return { portId: "", channel: undefined, signer: "" };
}
exports.MsgChannelOpenInit = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channel !== undefined) {
            channel_1.Channel.encode(message.channel, writer.uint32(18).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(26).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelOpenInit();
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
                    message.channel = channel_1.Channel.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.signer = reader.string();
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
            channel: isSet(object.channel) ? channel_1.Channel.fromJSON(object.channel) : undefined,
            signer: isSet(object.signer) ? String(object.signer) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.portId !== "") {
            obj.portId = message.portId;
        }
        if (message.channel !== undefined) {
            obj.channel = channel_1.Channel.toJSON(message.channel);
        }
        if (message.signer !== "") {
            obj.signer = message.signer;
        }
        return obj;
    },
    create(base) {
        return exports.MsgChannelOpenInit.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgChannelOpenInit();
        message.portId = object.portId ?? "";
        message.channel = (object.channel !== undefined && object.channel !== null)
            ? channel_1.Channel.fromPartial(object.channel)
            : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
};
function createBaseMsgChannelOpenInitResponse() {
    return { channelId: "", version: "" };
}
exports.MsgChannelOpenInitResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.channelId !== "") {
            writer.uint32(10).string(message.channelId);
        }
        if (message.version !== "") {
            writer.uint32(18).string(message.version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelOpenInitResponse();
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
                    message.version = reader.string();
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
            version: isSet(object.version) ? String(object.version) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.channelId !== "") {
            obj.channelId = message.channelId;
        }
        if (message.version !== "") {
            obj.version = message.version;
        }
        return obj;
    },
    create(base) {
        return exports.MsgChannelOpenInitResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgChannelOpenInitResponse();
        message.channelId = object.channelId ?? "";
        message.version = object.version ?? "";
        return message;
    },
};
function createBaseMsgChannelOpenTry() {
    return {
        portId: "",
        previousChannelId: "",
        channel: undefined,
        counterpartyVersion: "",
        proofInit: new Uint8Array(0),
        proofHeight: undefined,
        signer: "",
    };
}
exports.MsgChannelOpenTry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.previousChannelId !== "") {
            writer.uint32(18).string(message.previousChannelId);
        }
        if (message.channel !== undefined) {
            channel_1.Channel.encode(message.channel, writer.uint32(26).fork()).ldelim();
        }
        if (message.counterpartyVersion !== "") {
            writer.uint32(34).string(message.counterpartyVersion);
        }
        if (message.proofInit.length !== 0) {
            writer.uint32(42).bytes(message.proofInit);
        }
        if (message.proofHeight !== undefined) {
            client_1.Height.encode(message.proofHeight, writer.uint32(50).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(58).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelOpenTry();
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
                    message.previousChannelId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.channel = channel_1.Channel.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.counterpartyVersion = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.proofInit = reader.bytes();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.proofHeight = client_1.Height.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.signer = reader.string();
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
            previousChannelId: isSet(object.previousChannelId) ? String(object.previousChannelId) : "",
            channel: isSet(object.channel) ? channel_1.Channel.fromJSON(object.channel) : undefined,
            counterpartyVersion: isSet(object.counterpartyVersion) ? String(object.counterpartyVersion) : "",
            proofInit: isSet(object.proofInit) ? bytesFromBase64(object.proofInit) : new Uint8Array(0),
            proofHeight: isSet(object.proofHeight) ? client_1.Height.fromJSON(object.proofHeight) : undefined,
            signer: isSet(object.signer) ? String(object.signer) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.portId !== "") {
            obj.portId = message.portId;
        }
        if (message.previousChannelId !== "") {
            obj.previousChannelId = message.previousChannelId;
        }
        if (message.channel !== undefined) {
            obj.channel = channel_1.Channel.toJSON(message.channel);
        }
        if (message.counterpartyVersion !== "") {
            obj.counterpartyVersion = message.counterpartyVersion;
        }
        if (message.proofInit.length !== 0) {
            obj.proofInit = base64FromBytes(message.proofInit);
        }
        if (message.proofHeight !== undefined) {
            obj.proofHeight = client_1.Height.toJSON(message.proofHeight);
        }
        if (message.signer !== "") {
            obj.signer = message.signer;
        }
        return obj;
    },
    create(base) {
        return exports.MsgChannelOpenTry.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgChannelOpenTry();
        message.portId = object.portId ?? "";
        message.previousChannelId = object.previousChannelId ?? "";
        message.channel = (object.channel !== undefined && object.channel !== null)
            ? channel_1.Channel.fromPartial(object.channel)
            : undefined;
        message.counterpartyVersion = object.counterpartyVersion ?? "";
        message.proofInit = object.proofInit ?? new Uint8Array(0);
        message.proofHeight = (object.proofHeight !== undefined && object.proofHeight !== null)
            ? client_1.Height.fromPartial(object.proofHeight)
            : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
};
function createBaseMsgChannelOpenTryResponse() {
    return { version: "", channelId: "" };
}
exports.MsgChannelOpenTryResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.version !== "") {
            writer.uint32(10).string(message.version);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelOpenTryResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.version = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.channelId = reader.string();
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
            version: isSet(object.version) ? String(object.version) : "",
            channelId: isSet(object.channelId) ? String(object.channelId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.version !== "") {
            obj.version = message.version;
        }
        if (message.channelId !== "") {
            obj.channelId = message.channelId;
        }
        return obj;
    },
    create(base) {
        return exports.MsgChannelOpenTryResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgChannelOpenTryResponse();
        message.version = object.version ?? "";
        message.channelId = object.channelId ?? "";
        return message;
    },
};
function createBaseMsgChannelOpenAck() {
    return {
        portId: "",
        channelId: "",
        counterpartyChannelId: "",
        counterpartyVersion: "",
        proofTry: new Uint8Array(0),
        proofHeight: undefined,
        signer: "",
    };
}
exports.MsgChannelOpenAck = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.counterpartyChannelId !== "") {
            writer.uint32(26).string(message.counterpartyChannelId);
        }
        if (message.counterpartyVersion !== "") {
            writer.uint32(34).string(message.counterpartyVersion);
        }
        if (message.proofTry.length !== 0) {
            writer.uint32(42).bytes(message.proofTry);
        }
        if (message.proofHeight !== undefined) {
            client_1.Height.encode(message.proofHeight, writer.uint32(50).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(58).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelOpenAck();
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
                    message.counterpartyChannelId = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.counterpartyVersion = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.proofTry = reader.bytes();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.proofHeight = client_1.Height.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.signer = reader.string();
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
            counterpartyChannelId: isSet(object.counterpartyChannelId) ? String(object.counterpartyChannelId) : "",
            counterpartyVersion: isSet(object.counterpartyVersion) ? String(object.counterpartyVersion) : "",
            proofTry: isSet(object.proofTry) ? bytesFromBase64(object.proofTry) : new Uint8Array(0),
            proofHeight: isSet(object.proofHeight) ? client_1.Height.fromJSON(object.proofHeight) : undefined,
            signer: isSet(object.signer) ? String(object.signer) : "",
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
        if (message.counterpartyChannelId !== "") {
            obj.counterpartyChannelId = message.counterpartyChannelId;
        }
        if (message.counterpartyVersion !== "") {
            obj.counterpartyVersion = message.counterpartyVersion;
        }
        if (message.proofTry.length !== 0) {
            obj.proofTry = base64FromBytes(message.proofTry);
        }
        if (message.proofHeight !== undefined) {
            obj.proofHeight = client_1.Height.toJSON(message.proofHeight);
        }
        if (message.signer !== "") {
            obj.signer = message.signer;
        }
        return obj;
    },
    create(base) {
        return exports.MsgChannelOpenAck.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgChannelOpenAck();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.counterpartyChannelId = object.counterpartyChannelId ?? "";
        message.counterpartyVersion = object.counterpartyVersion ?? "";
        message.proofTry = object.proofTry ?? new Uint8Array(0);
        message.proofHeight = (object.proofHeight !== undefined && object.proofHeight !== null)
            ? client_1.Height.fromPartial(object.proofHeight)
            : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
};
function createBaseMsgChannelOpenAckResponse() {
    return {};
}
exports.MsgChannelOpenAckResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelOpenAckResponse();
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
        return exports.MsgChannelOpenAckResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgChannelOpenAckResponse();
        return message;
    },
};
function createBaseMsgChannelOpenConfirm() {
    return { portId: "", channelId: "", proofAck: new Uint8Array(0), proofHeight: undefined, signer: "" };
}
exports.MsgChannelOpenConfirm = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.proofAck.length !== 0) {
            writer.uint32(26).bytes(message.proofAck);
        }
        if (message.proofHeight !== undefined) {
            client_1.Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(42).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelOpenConfirm();
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
                    message.proofAck = reader.bytes();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.proofHeight = client_1.Height.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.signer = reader.string();
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
            proofAck: isSet(object.proofAck) ? bytesFromBase64(object.proofAck) : new Uint8Array(0),
            proofHeight: isSet(object.proofHeight) ? client_1.Height.fromJSON(object.proofHeight) : undefined,
            signer: isSet(object.signer) ? String(object.signer) : "",
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
        if (message.proofAck.length !== 0) {
            obj.proofAck = base64FromBytes(message.proofAck);
        }
        if (message.proofHeight !== undefined) {
            obj.proofHeight = client_1.Height.toJSON(message.proofHeight);
        }
        if (message.signer !== "") {
            obj.signer = message.signer;
        }
        return obj;
    },
    create(base) {
        return exports.MsgChannelOpenConfirm.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgChannelOpenConfirm();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.proofAck = object.proofAck ?? new Uint8Array(0);
        message.proofHeight = (object.proofHeight !== undefined && object.proofHeight !== null)
            ? client_1.Height.fromPartial(object.proofHeight)
            : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
};
function createBaseMsgChannelOpenConfirmResponse() {
    return {};
}
exports.MsgChannelOpenConfirmResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelOpenConfirmResponse();
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
        return exports.MsgChannelOpenConfirmResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgChannelOpenConfirmResponse();
        return message;
    },
};
function createBaseMsgChannelCloseInit() {
    return { portId: "", channelId: "", signer: "" };
}
exports.MsgChannelCloseInit = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.signer !== "") {
            writer.uint32(26).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelCloseInit();
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
                    message.signer = reader.string();
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
            signer: isSet(object.signer) ? String(object.signer) : "",
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
        if (message.signer !== "") {
            obj.signer = message.signer;
        }
        return obj;
    },
    create(base) {
        return exports.MsgChannelCloseInit.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgChannelCloseInit();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.signer = object.signer ?? "";
        return message;
    },
};
function createBaseMsgChannelCloseInitResponse() {
    return {};
}
exports.MsgChannelCloseInitResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelCloseInitResponse();
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
        return exports.MsgChannelCloseInitResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgChannelCloseInitResponse();
        return message;
    },
};
function createBaseMsgChannelCloseConfirm() {
    return {
        portId: "",
        channelId: "",
        proofInit: new Uint8Array(0),
        proofHeight: undefined,
        signer: "",
        counterpartyUpgradeSequence: 0,
    };
}
exports.MsgChannelCloseConfirm = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.proofInit.length !== 0) {
            writer.uint32(26).bytes(message.proofInit);
        }
        if (message.proofHeight !== undefined) {
            client_1.Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(42).string(message.signer);
        }
        if (message.counterpartyUpgradeSequence !== 0) {
            writer.uint32(48).uint64(message.counterpartyUpgradeSequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelCloseConfirm();
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
                    message.proofInit = reader.bytes();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.proofHeight = client_1.Height.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.signer = reader.string();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.counterpartyUpgradeSequence = longToNumber(reader.uint64());
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
            proofInit: isSet(object.proofInit) ? bytesFromBase64(object.proofInit) : new Uint8Array(0),
            proofHeight: isSet(object.proofHeight) ? client_1.Height.fromJSON(object.proofHeight) : undefined,
            signer: isSet(object.signer) ? String(object.signer) : "",
            counterpartyUpgradeSequence: isSet(object.counterpartyUpgradeSequence)
                ? Number(object.counterpartyUpgradeSequence)
                : 0,
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
        if (message.proofInit.length !== 0) {
            obj.proofInit = base64FromBytes(message.proofInit);
        }
        if (message.proofHeight !== undefined) {
            obj.proofHeight = client_1.Height.toJSON(message.proofHeight);
        }
        if (message.signer !== "") {
            obj.signer = message.signer;
        }
        if (message.counterpartyUpgradeSequence !== 0) {
            obj.counterpartyUpgradeSequence = Math.round(message.counterpartyUpgradeSequence);
        }
        return obj;
    },
    create(base) {
        return exports.MsgChannelCloseConfirm.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgChannelCloseConfirm();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.proofInit = object.proofInit ?? new Uint8Array(0);
        message.proofHeight = (object.proofHeight !== undefined && object.proofHeight !== null)
            ? client_1.Height.fromPartial(object.proofHeight)
            : undefined;
        message.signer = object.signer ?? "";
        message.counterpartyUpgradeSequence = object.counterpartyUpgradeSequence ?? 0;
        return message;
    },
};
function createBaseMsgChannelCloseConfirmResponse() {
    return {};
}
exports.MsgChannelCloseConfirmResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelCloseConfirmResponse();
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
        return exports.MsgChannelCloseConfirmResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgChannelCloseConfirmResponse();
        return message;
    },
};
function createBaseMsgRecvPacket() {
    return { packet: undefined, proofCommitment: new Uint8Array(0), proofHeight: undefined, signer: "" };
}
exports.MsgRecvPacket = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.packet !== undefined) {
            channel_1.Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
        }
        if (message.proofCommitment.length !== 0) {
            writer.uint32(18).bytes(message.proofCommitment);
        }
        if (message.proofHeight !== undefined) {
            client_1.Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(34).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRecvPacket();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.packet = channel_1.Packet.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.proofCommitment = reader.bytes();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.proofHeight = client_1.Height.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.signer = reader.string();
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
            packet: isSet(object.packet) ? channel_1.Packet.fromJSON(object.packet) : undefined,
            proofCommitment: isSet(object.proofCommitment) ? bytesFromBase64(object.proofCommitment) : new Uint8Array(0),
            proofHeight: isSet(object.proofHeight) ? client_1.Height.fromJSON(object.proofHeight) : undefined,
            signer: isSet(object.signer) ? String(object.signer) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.packet !== undefined) {
            obj.packet = channel_1.Packet.toJSON(message.packet);
        }
        if (message.proofCommitment.length !== 0) {
            obj.proofCommitment = base64FromBytes(message.proofCommitment);
        }
        if (message.proofHeight !== undefined) {
            obj.proofHeight = client_1.Height.toJSON(message.proofHeight);
        }
        if (message.signer !== "") {
            obj.signer = message.signer;
        }
        return obj;
    },
    create(base) {
        return exports.MsgRecvPacket.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgRecvPacket();
        message.packet = (object.packet !== undefined && object.packet !== null)
            ? channel_1.Packet.fromPartial(object.packet)
            : undefined;
        message.proofCommitment = object.proofCommitment ?? new Uint8Array(0);
        message.proofHeight = (object.proofHeight !== undefined && object.proofHeight !== null)
            ? client_1.Height.fromPartial(object.proofHeight)
            : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
};
function createBaseMsgRecvPacketResponse() {
    return { result: 0 };
}
exports.MsgRecvPacketResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.result !== 0) {
            writer.uint32(8).int32(message.result);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRecvPacketResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.result = reader.int32();
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
        return { result: isSet(object.result) ? responseResultTypeFromJSON(object.result) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.result !== 0) {
            obj.result = responseResultTypeToJSON(message.result);
        }
        return obj;
    },
    create(base) {
        return exports.MsgRecvPacketResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgRecvPacketResponse();
        message.result = object.result ?? 0;
        return message;
    },
};
function createBaseMsgTimeout() {
    return {
        packet: undefined,
        proofUnreceived: new Uint8Array(0),
        proofHeight: undefined,
        nextSequenceRecv: 0,
        signer: "",
    };
}
exports.MsgTimeout = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.packet !== undefined) {
            channel_1.Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
        }
        if (message.proofUnreceived.length !== 0) {
            writer.uint32(18).bytes(message.proofUnreceived);
        }
        if (message.proofHeight !== undefined) {
            client_1.Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
        }
        if (message.nextSequenceRecv !== 0) {
            writer.uint32(32).uint64(message.nextSequenceRecv);
        }
        if (message.signer !== "") {
            writer.uint32(42).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTimeout();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.packet = channel_1.Packet.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.proofUnreceived = reader.bytes();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.proofHeight = client_1.Height.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.nextSequenceRecv = longToNumber(reader.uint64());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.signer = reader.string();
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
            packet: isSet(object.packet) ? channel_1.Packet.fromJSON(object.packet) : undefined,
            proofUnreceived: isSet(object.proofUnreceived) ? bytesFromBase64(object.proofUnreceived) : new Uint8Array(0),
            proofHeight: isSet(object.proofHeight) ? client_1.Height.fromJSON(object.proofHeight) : undefined,
            nextSequenceRecv: isSet(object.nextSequenceRecv) ? Number(object.nextSequenceRecv) : 0,
            signer: isSet(object.signer) ? String(object.signer) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.packet !== undefined) {
            obj.packet = channel_1.Packet.toJSON(message.packet);
        }
        if (message.proofUnreceived.length !== 0) {
            obj.proofUnreceived = base64FromBytes(message.proofUnreceived);
        }
        if (message.proofHeight !== undefined) {
            obj.proofHeight = client_1.Height.toJSON(message.proofHeight);
        }
        if (message.nextSequenceRecv !== 0) {
            obj.nextSequenceRecv = Math.round(message.nextSequenceRecv);
        }
        if (message.signer !== "") {
            obj.signer = message.signer;
        }
        return obj;
    },
    create(base) {
        return exports.MsgTimeout.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgTimeout();
        message.packet = (object.packet !== undefined && object.packet !== null)
            ? channel_1.Packet.fromPartial(object.packet)
            : undefined;
        message.proofUnreceived = object.proofUnreceived ?? new Uint8Array(0);
        message.proofHeight = (object.proofHeight !== undefined && object.proofHeight !== null)
            ? client_1.Height.fromPartial(object.proofHeight)
            : undefined;
        message.nextSequenceRecv = object.nextSequenceRecv ?? 0;
        message.signer = object.signer ?? "";
        return message;
    },
};
function createBaseMsgTimeoutResponse() {
    return { result: 0 };
}
exports.MsgTimeoutResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.result !== 0) {
            writer.uint32(8).int32(message.result);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTimeoutResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.result = reader.int32();
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
        return { result: isSet(object.result) ? responseResultTypeFromJSON(object.result) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.result !== 0) {
            obj.result = responseResultTypeToJSON(message.result);
        }
        return obj;
    },
    create(base) {
        return exports.MsgTimeoutResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgTimeoutResponse();
        message.result = object.result ?? 0;
        return message;
    },
};
function createBaseMsgTimeoutOnClose() {
    return {
        packet: undefined,
        proofUnreceived: new Uint8Array(0),
        proofClose: new Uint8Array(0),
        proofHeight: undefined,
        nextSequenceRecv: 0,
        signer: "",
        counterpartyUpgradeSequence: 0,
    };
}
exports.MsgTimeoutOnClose = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.packet !== undefined) {
            channel_1.Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
        }
        if (message.proofUnreceived.length !== 0) {
            writer.uint32(18).bytes(message.proofUnreceived);
        }
        if (message.proofClose.length !== 0) {
            writer.uint32(26).bytes(message.proofClose);
        }
        if (message.proofHeight !== undefined) {
            client_1.Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
        }
        if (message.nextSequenceRecv !== 0) {
            writer.uint32(40).uint64(message.nextSequenceRecv);
        }
        if (message.signer !== "") {
            writer.uint32(50).string(message.signer);
        }
        if (message.counterpartyUpgradeSequence !== 0) {
            writer.uint32(56).uint64(message.counterpartyUpgradeSequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTimeoutOnClose();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.packet = channel_1.Packet.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.proofUnreceived = reader.bytes();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.proofClose = reader.bytes();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.proofHeight = client_1.Height.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.nextSequenceRecv = longToNumber(reader.uint64());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.signer = reader.string();
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.counterpartyUpgradeSequence = longToNumber(reader.uint64());
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
            packet: isSet(object.packet) ? channel_1.Packet.fromJSON(object.packet) : undefined,
            proofUnreceived: isSet(object.proofUnreceived) ? bytesFromBase64(object.proofUnreceived) : new Uint8Array(0),
            proofClose: isSet(object.proofClose) ? bytesFromBase64(object.proofClose) : new Uint8Array(0),
            proofHeight: isSet(object.proofHeight) ? client_1.Height.fromJSON(object.proofHeight) : undefined,
            nextSequenceRecv: isSet(object.nextSequenceRecv) ? Number(object.nextSequenceRecv) : 0,
            signer: isSet(object.signer) ? String(object.signer) : "",
            counterpartyUpgradeSequence: isSet(object.counterpartyUpgradeSequence)
                ? Number(object.counterpartyUpgradeSequence)
                : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.packet !== undefined) {
            obj.packet = channel_1.Packet.toJSON(message.packet);
        }
        if (message.proofUnreceived.length !== 0) {
            obj.proofUnreceived = base64FromBytes(message.proofUnreceived);
        }
        if (message.proofClose.length !== 0) {
            obj.proofClose = base64FromBytes(message.proofClose);
        }
        if (message.proofHeight !== undefined) {
            obj.proofHeight = client_1.Height.toJSON(message.proofHeight);
        }
        if (message.nextSequenceRecv !== 0) {
            obj.nextSequenceRecv = Math.round(message.nextSequenceRecv);
        }
        if (message.signer !== "") {
            obj.signer = message.signer;
        }
        if (message.counterpartyUpgradeSequence !== 0) {
            obj.counterpartyUpgradeSequence = Math.round(message.counterpartyUpgradeSequence);
        }
        return obj;
    },
    create(base) {
        return exports.MsgTimeoutOnClose.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgTimeoutOnClose();
        message.packet = (object.packet !== undefined && object.packet !== null)
            ? channel_1.Packet.fromPartial(object.packet)
            : undefined;
        message.proofUnreceived = object.proofUnreceived ?? new Uint8Array(0);
        message.proofClose = object.proofClose ?? new Uint8Array(0);
        message.proofHeight = (object.proofHeight !== undefined && object.proofHeight !== null)
            ? client_1.Height.fromPartial(object.proofHeight)
            : undefined;
        message.nextSequenceRecv = object.nextSequenceRecv ?? 0;
        message.signer = object.signer ?? "";
        message.counterpartyUpgradeSequence = object.counterpartyUpgradeSequence ?? 0;
        return message;
    },
};
function createBaseMsgTimeoutOnCloseResponse() {
    return { result: 0 };
}
exports.MsgTimeoutOnCloseResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.result !== 0) {
            writer.uint32(8).int32(message.result);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTimeoutOnCloseResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.result = reader.int32();
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
        return { result: isSet(object.result) ? responseResultTypeFromJSON(object.result) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.result !== 0) {
            obj.result = responseResultTypeToJSON(message.result);
        }
        return obj;
    },
    create(base) {
        return exports.MsgTimeoutOnCloseResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgTimeoutOnCloseResponse();
        message.result = object.result ?? 0;
        return message;
    },
};
function createBaseMsgAcknowledgement() {
    return {
        packet: undefined,
        acknowledgement: new Uint8Array(0),
        proofAcked: new Uint8Array(0),
        proofHeight: undefined,
        signer: "",
    };
}
exports.MsgAcknowledgement = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.packet !== undefined) {
            channel_1.Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
        }
        if (message.acknowledgement.length !== 0) {
            writer.uint32(18).bytes(message.acknowledgement);
        }
        if (message.proofAcked.length !== 0) {
            writer.uint32(26).bytes(message.proofAcked);
        }
        if (message.proofHeight !== undefined) {
            client_1.Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(42).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAcknowledgement();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.packet = channel_1.Packet.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.acknowledgement = reader.bytes();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.proofAcked = reader.bytes();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.proofHeight = client_1.Height.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.signer = reader.string();
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
            packet: isSet(object.packet) ? channel_1.Packet.fromJSON(object.packet) : undefined,
            acknowledgement: isSet(object.acknowledgement) ? bytesFromBase64(object.acknowledgement) : new Uint8Array(0),
            proofAcked: isSet(object.proofAcked) ? bytesFromBase64(object.proofAcked) : new Uint8Array(0),
            proofHeight: isSet(object.proofHeight) ? client_1.Height.fromJSON(object.proofHeight) : undefined,
            signer: isSet(object.signer) ? String(object.signer) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.packet !== undefined) {
            obj.packet = channel_1.Packet.toJSON(message.packet);
        }
        if (message.acknowledgement.length !== 0) {
            obj.acknowledgement = base64FromBytes(message.acknowledgement);
        }
        if (message.proofAcked.length !== 0) {
            obj.proofAcked = base64FromBytes(message.proofAcked);
        }
        if (message.proofHeight !== undefined) {
            obj.proofHeight = client_1.Height.toJSON(message.proofHeight);
        }
        if (message.signer !== "") {
            obj.signer = message.signer;
        }
        return obj;
    },
    create(base) {
        return exports.MsgAcknowledgement.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgAcknowledgement();
        message.packet = (object.packet !== undefined && object.packet !== null)
            ? channel_1.Packet.fromPartial(object.packet)
            : undefined;
        message.acknowledgement = object.acknowledgement ?? new Uint8Array(0);
        message.proofAcked = object.proofAcked ?? new Uint8Array(0);
        message.proofHeight = (object.proofHeight !== undefined && object.proofHeight !== null)
            ? client_1.Height.fromPartial(object.proofHeight)
            : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
};
function createBaseMsgAcknowledgementResponse() {
    return { result: 0 };
}
exports.MsgAcknowledgementResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.result !== 0) {
            writer.uint32(8).int32(message.result);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAcknowledgementResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.result = reader.int32();
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
        return { result: isSet(object.result) ? responseResultTypeFromJSON(object.result) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.result !== 0) {
            obj.result = responseResultTypeToJSON(message.result);
        }
        return obj;
    },
    create(base) {
        return exports.MsgAcknowledgementResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgAcknowledgementResponse();
        message.result = object.result ?? 0;
        return message;
    },
};
function createBaseMsgChannelUpgradeInit() {
    return { portId: "", channelId: "", fields: undefined, signer: "" };
}
exports.MsgChannelUpgradeInit = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.fields !== undefined) {
            upgrade_1.UpgradeFields.encode(message.fields, writer.uint32(26).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(34).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelUpgradeInit();
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
                    message.fields = upgrade_1.UpgradeFields.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.signer = reader.string();
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
            fields: isSet(object.fields) ? upgrade_1.UpgradeFields.fromJSON(object.fields) : undefined,
            signer: isSet(object.signer) ? String(object.signer) : "",
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
        if (message.fields !== undefined) {
            obj.fields = upgrade_1.UpgradeFields.toJSON(message.fields);
        }
        if (message.signer !== "") {
            obj.signer = message.signer;
        }
        return obj;
    },
    create(base) {
        return exports.MsgChannelUpgradeInit.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgChannelUpgradeInit();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.fields = (object.fields !== undefined && object.fields !== null)
            ? upgrade_1.UpgradeFields.fromPartial(object.fields)
            : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
};
function createBaseMsgChannelUpgradeInitResponse() {
    return { upgrade: undefined, upgradeSequence: 0 };
}
exports.MsgChannelUpgradeInitResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.upgrade !== undefined) {
            upgrade_1.Upgrade.encode(message.upgrade, writer.uint32(10).fork()).ldelim();
        }
        if (message.upgradeSequence !== 0) {
            writer.uint32(16).uint64(message.upgradeSequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelUpgradeInitResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.upgrade = upgrade_1.Upgrade.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.upgradeSequence = longToNumber(reader.uint64());
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
            upgrade: isSet(object.upgrade) ? upgrade_1.Upgrade.fromJSON(object.upgrade) : undefined,
            upgradeSequence: isSet(object.upgradeSequence) ? Number(object.upgradeSequence) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.upgrade !== undefined) {
            obj.upgrade = upgrade_1.Upgrade.toJSON(message.upgrade);
        }
        if (message.upgradeSequence !== 0) {
            obj.upgradeSequence = Math.round(message.upgradeSequence);
        }
        return obj;
    },
    create(base) {
        return exports.MsgChannelUpgradeInitResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgChannelUpgradeInitResponse();
        message.upgrade = (object.upgrade !== undefined && object.upgrade !== null)
            ? upgrade_1.Upgrade.fromPartial(object.upgrade)
            : undefined;
        message.upgradeSequence = object.upgradeSequence ?? 0;
        return message;
    },
};
function createBaseMsgChannelUpgradeTry() {
    return {
        portId: "",
        channelId: "",
        proposedUpgradeConnectionHops: [],
        counterpartyUpgradeFields: undefined,
        counterpartyUpgradeSequence: 0,
        proofChannel: new Uint8Array(0),
        proofUpgrade: new Uint8Array(0),
        proofHeight: undefined,
        signer: "",
    };
}
exports.MsgChannelUpgradeTry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        for (const v of message.proposedUpgradeConnectionHops) {
            writer.uint32(26).string(v);
        }
        if (message.counterpartyUpgradeFields !== undefined) {
            upgrade_1.UpgradeFields.encode(message.counterpartyUpgradeFields, writer.uint32(34).fork()).ldelim();
        }
        if (message.counterpartyUpgradeSequence !== 0) {
            writer.uint32(40).uint64(message.counterpartyUpgradeSequence);
        }
        if (message.proofChannel.length !== 0) {
            writer.uint32(50).bytes(message.proofChannel);
        }
        if (message.proofUpgrade.length !== 0) {
            writer.uint32(58).bytes(message.proofUpgrade);
        }
        if (message.proofHeight !== undefined) {
            client_1.Height.encode(message.proofHeight, writer.uint32(66).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(74).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelUpgradeTry();
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
                    message.proposedUpgradeConnectionHops.push(reader.string());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.counterpartyUpgradeFields = upgrade_1.UpgradeFields.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.counterpartyUpgradeSequence = longToNumber(reader.uint64());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.proofChannel = reader.bytes();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.proofUpgrade = reader.bytes();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.proofHeight = client_1.Height.decode(reader, reader.uint32());
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.signer = reader.string();
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
            proposedUpgradeConnectionHops: Array.isArray(object?.proposedUpgradeConnectionHops)
                ? object.proposedUpgradeConnectionHops.map((e) => String(e))
                : [],
            counterpartyUpgradeFields: isSet(object.counterpartyUpgradeFields)
                ? upgrade_1.UpgradeFields.fromJSON(object.counterpartyUpgradeFields)
                : undefined,
            counterpartyUpgradeSequence: isSet(object.counterpartyUpgradeSequence)
                ? Number(object.counterpartyUpgradeSequence)
                : 0,
            proofChannel: isSet(object.proofChannel) ? bytesFromBase64(object.proofChannel) : new Uint8Array(0),
            proofUpgrade: isSet(object.proofUpgrade) ? bytesFromBase64(object.proofUpgrade) : new Uint8Array(0),
            proofHeight: isSet(object.proofHeight) ? client_1.Height.fromJSON(object.proofHeight) : undefined,
            signer: isSet(object.signer) ? String(object.signer) : "",
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
        if (message.proposedUpgradeConnectionHops?.length) {
            obj.proposedUpgradeConnectionHops = message.proposedUpgradeConnectionHops;
        }
        if (message.counterpartyUpgradeFields !== undefined) {
            obj.counterpartyUpgradeFields = upgrade_1.UpgradeFields.toJSON(message.counterpartyUpgradeFields);
        }
        if (message.counterpartyUpgradeSequence !== 0) {
            obj.counterpartyUpgradeSequence = Math.round(message.counterpartyUpgradeSequence);
        }
        if (message.proofChannel.length !== 0) {
            obj.proofChannel = base64FromBytes(message.proofChannel);
        }
        if (message.proofUpgrade.length !== 0) {
            obj.proofUpgrade = base64FromBytes(message.proofUpgrade);
        }
        if (message.proofHeight !== undefined) {
            obj.proofHeight = client_1.Height.toJSON(message.proofHeight);
        }
        if (message.signer !== "") {
            obj.signer = message.signer;
        }
        return obj;
    },
    create(base) {
        return exports.MsgChannelUpgradeTry.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgChannelUpgradeTry();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.proposedUpgradeConnectionHops = object.proposedUpgradeConnectionHops?.map((e) => e) || [];
        message.counterpartyUpgradeFields =
            (object.counterpartyUpgradeFields !== undefined && object.counterpartyUpgradeFields !== null)
                ? upgrade_1.UpgradeFields.fromPartial(object.counterpartyUpgradeFields)
                : undefined;
        message.counterpartyUpgradeSequence = object.counterpartyUpgradeSequence ?? 0;
        message.proofChannel = object.proofChannel ?? new Uint8Array(0);
        message.proofUpgrade = object.proofUpgrade ?? new Uint8Array(0);
        message.proofHeight = (object.proofHeight !== undefined && object.proofHeight !== null)
            ? client_1.Height.fromPartial(object.proofHeight)
            : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
};
function createBaseMsgChannelUpgradeTryResponse() {
    return { upgrade: undefined, upgradeSequence: 0, result: 0 };
}
exports.MsgChannelUpgradeTryResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.upgrade !== undefined) {
            upgrade_1.Upgrade.encode(message.upgrade, writer.uint32(10).fork()).ldelim();
        }
        if (message.upgradeSequence !== 0) {
            writer.uint32(16).uint64(message.upgradeSequence);
        }
        if (message.result !== 0) {
            writer.uint32(24).int32(message.result);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelUpgradeTryResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.upgrade = upgrade_1.Upgrade.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.upgradeSequence = longToNumber(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.result = reader.int32();
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
            upgrade: isSet(object.upgrade) ? upgrade_1.Upgrade.fromJSON(object.upgrade) : undefined,
            upgradeSequence: isSet(object.upgradeSequence) ? Number(object.upgradeSequence) : 0,
            result: isSet(object.result) ? responseResultTypeFromJSON(object.result) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.upgrade !== undefined) {
            obj.upgrade = upgrade_1.Upgrade.toJSON(message.upgrade);
        }
        if (message.upgradeSequence !== 0) {
            obj.upgradeSequence = Math.round(message.upgradeSequence);
        }
        if (message.result !== 0) {
            obj.result = responseResultTypeToJSON(message.result);
        }
        return obj;
    },
    create(base) {
        return exports.MsgChannelUpgradeTryResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgChannelUpgradeTryResponse();
        message.upgrade = (object.upgrade !== undefined && object.upgrade !== null)
            ? upgrade_1.Upgrade.fromPartial(object.upgrade)
            : undefined;
        message.upgradeSequence = object.upgradeSequence ?? 0;
        message.result = object.result ?? 0;
        return message;
    },
};
function createBaseMsgChannelUpgradeAck() {
    return {
        portId: "",
        channelId: "",
        counterpartyUpgrade: undefined,
        proofChannel: new Uint8Array(0),
        proofUpgrade: new Uint8Array(0),
        proofHeight: undefined,
        signer: "",
    };
}
exports.MsgChannelUpgradeAck = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.counterpartyUpgrade !== undefined) {
            upgrade_1.Upgrade.encode(message.counterpartyUpgrade, writer.uint32(26).fork()).ldelim();
        }
        if (message.proofChannel.length !== 0) {
            writer.uint32(34).bytes(message.proofChannel);
        }
        if (message.proofUpgrade.length !== 0) {
            writer.uint32(42).bytes(message.proofUpgrade);
        }
        if (message.proofHeight !== undefined) {
            client_1.Height.encode(message.proofHeight, writer.uint32(50).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(58).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelUpgradeAck();
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
                    message.counterpartyUpgrade = upgrade_1.Upgrade.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.proofChannel = reader.bytes();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.proofUpgrade = reader.bytes();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.proofHeight = client_1.Height.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.signer = reader.string();
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
            counterpartyUpgrade: isSet(object.counterpartyUpgrade) ? upgrade_1.Upgrade.fromJSON(object.counterpartyUpgrade) : undefined,
            proofChannel: isSet(object.proofChannel) ? bytesFromBase64(object.proofChannel) : new Uint8Array(0),
            proofUpgrade: isSet(object.proofUpgrade) ? bytesFromBase64(object.proofUpgrade) : new Uint8Array(0),
            proofHeight: isSet(object.proofHeight) ? client_1.Height.fromJSON(object.proofHeight) : undefined,
            signer: isSet(object.signer) ? String(object.signer) : "",
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
        if (message.counterpartyUpgrade !== undefined) {
            obj.counterpartyUpgrade = upgrade_1.Upgrade.toJSON(message.counterpartyUpgrade);
        }
        if (message.proofChannel.length !== 0) {
            obj.proofChannel = base64FromBytes(message.proofChannel);
        }
        if (message.proofUpgrade.length !== 0) {
            obj.proofUpgrade = base64FromBytes(message.proofUpgrade);
        }
        if (message.proofHeight !== undefined) {
            obj.proofHeight = client_1.Height.toJSON(message.proofHeight);
        }
        if (message.signer !== "") {
            obj.signer = message.signer;
        }
        return obj;
    },
    create(base) {
        return exports.MsgChannelUpgradeAck.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgChannelUpgradeAck();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.counterpartyUpgrade = (object.counterpartyUpgrade !== undefined && object.counterpartyUpgrade !== null)
            ? upgrade_1.Upgrade.fromPartial(object.counterpartyUpgrade)
            : undefined;
        message.proofChannel = object.proofChannel ?? new Uint8Array(0);
        message.proofUpgrade = object.proofUpgrade ?? new Uint8Array(0);
        message.proofHeight = (object.proofHeight !== undefined && object.proofHeight !== null)
            ? client_1.Height.fromPartial(object.proofHeight)
            : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
};
function createBaseMsgChannelUpgradeAckResponse() {
    return { result: 0 };
}
exports.MsgChannelUpgradeAckResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.result !== 0) {
            writer.uint32(8).int32(message.result);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelUpgradeAckResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.result = reader.int32();
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
        return { result: isSet(object.result) ? responseResultTypeFromJSON(object.result) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.result !== 0) {
            obj.result = responseResultTypeToJSON(message.result);
        }
        return obj;
    },
    create(base) {
        return exports.MsgChannelUpgradeAckResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgChannelUpgradeAckResponse();
        message.result = object.result ?? 0;
        return message;
    },
};
function createBaseMsgChannelUpgradeConfirm() {
    return {
        portId: "",
        channelId: "",
        counterpartyChannelState: 0,
        counterpartyUpgrade: undefined,
        proofChannel: new Uint8Array(0),
        proofUpgrade: new Uint8Array(0),
        proofHeight: undefined,
        signer: "",
    };
}
exports.MsgChannelUpgradeConfirm = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.counterpartyChannelState !== 0) {
            writer.uint32(24).int32(message.counterpartyChannelState);
        }
        if (message.counterpartyUpgrade !== undefined) {
            upgrade_1.Upgrade.encode(message.counterpartyUpgrade, writer.uint32(34).fork()).ldelim();
        }
        if (message.proofChannel.length !== 0) {
            writer.uint32(42).bytes(message.proofChannel);
        }
        if (message.proofUpgrade.length !== 0) {
            writer.uint32(50).bytes(message.proofUpgrade);
        }
        if (message.proofHeight !== undefined) {
            client_1.Height.encode(message.proofHeight, writer.uint32(58).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(66).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelUpgradeConfirm();
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
                    if (tag !== 24) {
                        break;
                    }
                    message.counterpartyChannelState = reader.int32();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.counterpartyUpgrade = upgrade_1.Upgrade.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.proofChannel = reader.bytes();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.proofUpgrade = reader.bytes();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.proofHeight = client_1.Height.decode(reader, reader.uint32());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.signer = reader.string();
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
            counterpartyChannelState: isSet(object.counterpartyChannelState)
                ? (0, channel_1.stateFromJSON)(object.counterpartyChannelState)
                : 0,
            counterpartyUpgrade: isSet(object.counterpartyUpgrade) ? upgrade_1.Upgrade.fromJSON(object.counterpartyUpgrade) : undefined,
            proofChannel: isSet(object.proofChannel) ? bytesFromBase64(object.proofChannel) : new Uint8Array(0),
            proofUpgrade: isSet(object.proofUpgrade) ? bytesFromBase64(object.proofUpgrade) : new Uint8Array(0),
            proofHeight: isSet(object.proofHeight) ? client_1.Height.fromJSON(object.proofHeight) : undefined,
            signer: isSet(object.signer) ? String(object.signer) : "",
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
        if (message.counterpartyChannelState !== 0) {
            obj.counterpartyChannelState = (0, channel_1.stateToJSON)(message.counterpartyChannelState);
        }
        if (message.counterpartyUpgrade !== undefined) {
            obj.counterpartyUpgrade = upgrade_1.Upgrade.toJSON(message.counterpartyUpgrade);
        }
        if (message.proofChannel.length !== 0) {
            obj.proofChannel = base64FromBytes(message.proofChannel);
        }
        if (message.proofUpgrade.length !== 0) {
            obj.proofUpgrade = base64FromBytes(message.proofUpgrade);
        }
        if (message.proofHeight !== undefined) {
            obj.proofHeight = client_1.Height.toJSON(message.proofHeight);
        }
        if (message.signer !== "") {
            obj.signer = message.signer;
        }
        return obj;
    },
    create(base) {
        return exports.MsgChannelUpgradeConfirm.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgChannelUpgradeConfirm();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.counterpartyChannelState = object.counterpartyChannelState ?? 0;
        message.counterpartyUpgrade = (object.counterpartyUpgrade !== undefined && object.counterpartyUpgrade !== null)
            ? upgrade_1.Upgrade.fromPartial(object.counterpartyUpgrade)
            : undefined;
        message.proofChannel = object.proofChannel ?? new Uint8Array(0);
        message.proofUpgrade = object.proofUpgrade ?? new Uint8Array(0);
        message.proofHeight = (object.proofHeight !== undefined && object.proofHeight !== null)
            ? client_1.Height.fromPartial(object.proofHeight)
            : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
};
function createBaseMsgChannelUpgradeConfirmResponse() {
    return { result: 0 };
}
exports.MsgChannelUpgradeConfirmResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.result !== 0) {
            writer.uint32(8).int32(message.result);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelUpgradeConfirmResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.result = reader.int32();
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
        return { result: isSet(object.result) ? responseResultTypeFromJSON(object.result) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.result !== 0) {
            obj.result = responseResultTypeToJSON(message.result);
        }
        return obj;
    },
    create(base) {
        return exports.MsgChannelUpgradeConfirmResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgChannelUpgradeConfirmResponse();
        message.result = object.result ?? 0;
        return message;
    },
};
function createBaseMsgChannelUpgradeOpen() {
    return {
        portId: "",
        channelId: "",
        counterpartyChannelState: 0,
        counterpartyUpgradeSequence: 0,
        proofChannel: new Uint8Array(0),
        proofHeight: undefined,
        signer: "",
    };
}
exports.MsgChannelUpgradeOpen = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.counterpartyChannelState !== 0) {
            writer.uint32(24).int32(message.counterpartyChannelState);
        }
        if (message.counterpartyUpgradeSequence !== 0) {
            writer.uint32(32).uint64(message.counterpartyUpgradeSequence);
        }
        if (message.proofChannel.length !== 0) {
            writer.uint32(42).bytes(message.proofChannel);
        }
        if (message.proofHeight !== undefined) {
            client_1.Height.encode(message.proofHeight, writer.uint32(50).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(58).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelUpgradeOpen();
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
                    if (tag !== 24) {
                        break;
                    }
                    message.counterpartyChannelState = reader.int32();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.counterpartyUpgradeSequence = longToNumber(reader.uint64());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.proofChannel = reader.bytes();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.proofHeight = client_1.Height.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.signer = reader.string();
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
            counterpartyChannelState: isSet(object.counterpartyChannelState)
                ? (0, channel_1.stateFromJSON)(object.counterpartyChannelState)
                : 0,
            counterpartyUpgradeSequence: isSet(object.counterpartyUpgradeSequence)
                ? Number(object.counterpartyUpgradeSequence)
                : 0,
            proofChannel: isSet(object.proofChannel) ? bytesFromBase64(object.proofChannel) : new Uint8Array(0),
            proofHeight: isSet(object.proofHeight) ? client_1.Height.fromJSON(object.proofHeight) : undefined,
            signer: isSet(object.signer) ? String(object.signer) : "",
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
        if (message.counterpartyChannelState !== 0) {
            obj.counterpartyChannelState = (0, channel_1.stateToJSON)(message.counterpartyChannelState);
        }
        if (message.counterpartyUpgradeSequence !== 0) {
            obj.counterpartyUpgradeSequence = Math.round(message.counterpartyUpgradeSequence);
        }
        if (message.proofChannel.length !== 0) {
            obj.proofChannel = base64FromBytes(message.proofChannel);
        }
        if (message.proofHeight !== undefined) {
            obj.proofHeight = client_1.Height.toJSON(message.proofHeight);
        }
        if (message.signer !== "") {
            obj.signer = message.signer;
        }
        return obj;
    },
    create(base) {
        return exports.MsgChannelUpgradeOpen.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgChannelUpgradeOpen();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.counterpartyChannelState = object.counterpartyChannelState ?? 0;
        message.counterpartyUpgradeSequence = object.counterpartyUpgradeSequence ?? 0;
        message.proofChannel = object.proofChannel ?? new Uint8Array(0);
        message.proofHeight = (object.proofHeight !== undefined && object.proofHeight !== null)
            ? client_1.Height.fromPartial(object.proofHeight)
            : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
};
function createBaseMsgChannelUpgradeOpenResponse() {
    return {};
}
exports.MsgChannelUpgradeOpenResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelUpgradeOpenResponse();
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
        return exports.MsgChannelUpgradeOpenResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgChannelUpgradeOpenResponse();
        return message;
    },
};
function createBaseMsgChannelUpgradeTimeout() {
    return {
        portId: "",
        channelId: "",
        counterpartyChannel: undefined,
        proofChannel: new Uint8Array(0),
        proofHeight: undefined,
        signer: "",
    };
}
exports.MsgChannelUpgradeTimeout = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.counterpartyChannel !== undefined) {
            channel_1.Channel.encode(message.counterpartyChannel, writer.uint32(26).fork()).ldelim();
        }
        if (message.proofChannel.length !== 0) {
            writer.uint32(34).bytes(message.proofChannel);
        }
        if (message.proofHeight !== undefined) {
            client_1.Height.encode(message.proofHeight, writer.uint32(42).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(50).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelUpgradeTimeout();
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
                    message.counterpartyChannel = channel_1.Channel.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.proofChannel = reader.bytes();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.proofHeight = client_1.Height.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.signer = reader.string();
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
            counterpartyChannel: isSet(object.counterpartyChannel) ? channel_1.Channel.fromJSON(object.counterpartyChannel) : undefined,
            proofChannel: isSet(object.proofChannel) ? bytesFromBase64(object.proofChannel) : new Uint8Array(0),
            proofHeight: isSet(object.proofHeight) ? client_1.Height.fromJSON(object.proofHeight) : undefined,
            signer: isSet(object.signer) ? String(object.signer) : "",
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
        if (message.counterpartyChannel !== undefined) {
            obj.counterpartyChannel = channel_1.Channel.toJSON(message.counterpartyChannel);
        }
        if (message.proofChannel.length !== 0) {
            obj.proofChannel = base64FromBytes(message.proofChannel);
        }
        if (message.proofHeight !== undefined) {
            obj.proofHeight = client_1.Height.toJSON(message.proofHeight);
        }
        if (message.signer !== "") {
            obj.signer = message.signer;
        }
        return obj;
    },
    create(base) {
        return exports.MsgChannelUpgradeTimeout.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgChannelUpgradeTimeout();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.counterpartyChannel = (object.counterpartyChannel !== undefined && object.counterpartyChannel !== null)
            ? channel_1.Channel.fromPartial(object.counterpartyChannel)
            : undefined;
        message.proofChannel = object.proofChannel ?? new Uint8Array(0);
        message.proofHeight = (object.proofHeight !== undefined && object.proofHeight !== null)
            ? client_1.Height.fromPartial(object.proofHeight)
            : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
};
function createBaseMsgChannelUpgradeTimeoutResponse() {
    return {};
}
exports.MsgChannelUpgradeTimeoutResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelUpgradeTimeoutResponse();
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
        return exports.MsgChannelUpgradeTimeoutResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgChannelUpgradeTimeoutResponse();
        return message;
    },
};
function createBaseMsgChannelUpgradeCancel() {
    return {
        portId: "",
        channelId: "",
        errorReceipt: undefined,
        proofErrorReceipt: new Uint8Array(0),
        proofHeight: undefined,
        signer: "",
    };
}
exports.MsgChannelUpgradeCancel = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.errorReceipt !== undefined) {
            upgrade_1.ErrorReceipt.encode(message.errorReceipt, writer.uint32(26).fork()).ldelim();
        }
        if (message.proofErrorReceipt.length !== 0) {
            writer.uint32(34).bytes(message.proofErrorReceipt);
        }
        if (message.proofHeight !== undefined) {
            client_1.Height.encode(message.proofHeight, writer.uint32(42).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(50).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelUpgradeCancel();
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
                    message.errorReceipt = upgrade_1.ErrorReceipt.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.proofErrorReceipt = reader.bytes();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.proofHeight = client_1.Height.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.signer = reader.string();
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
            errorReceipt: isSet(object.errorReceipt) ? upgrade_1.ErrorReceipt.fromJSON(object.errorReceipt) : undefined,
            proofErrorReceipt: isSet(object.proofErrorReceipt)
                ? bytesFromBase64(object.proofErrorReceipt)
                : new Uint8Array(0),
            proofHeight: isSet(object.proofHeight) ? client_1.Height.fromJSON(object.proofHeight) : undefined,
            signer: isSet(object.signer) ? String(object.signer) : "",
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
        if (message.errorReceipt !== undefined) {
            obj.errorReceipt = upgrade_1.ErrorReceipt.toJSON(message.errorReceipt);
        }
        if (message.proofErrorReceipt.length !== 0) {
            obj.proofErrorReceipt = base64FromBytes(message.proofErrorReceipt);
        }
        if (message.proofHeight !== undefined) {
            obj.proofHeight = client_1.Height.toJSON(message.proofHeight);
        }
        if (message.signer !== "") {
            obj.signer = message.signer;
        }
        return obj;
    },
    create(base) {
        return exports.MsgChannelUpgradeCancel.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgChannelUpgradeCancel();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.errorReceipt = (object.errorReceipt !== undefined && object.errorReceipt !== null)
            ? upgrade_1.ErrorReceipt.fromPartial(object.errorReceipt)
            : undefined;
        message.proofErrorReceipt = object.proofErrorReceipt ?? new Uint8Array(0);
        message.proofHeight = (object.proofHeight !== undefined && object.proofHeight !== null)
            ? client_1.Height.fromPartial(object.proofHeight)
            : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
};
function createBaseMsgChannelUpgradeCancelResponse() {
    return {};
}
exports.MsgChannelUpgradeCancelResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelUpgradeCancelResponse();
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
        return exports.MsgChannelUpgradeCancelResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgChannelUpgradeCancelResponse();
        return message;
    },
};
function createBaseMsgUpdateParams() {
    return { authority: "", params: undefined };
}
exports.MsgUpdateParams = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.params !== undefined) {
            channel_1.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
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
                    message.params = channel_1.Params.decode(reader, reader.uint32());
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
            params: isSet(object.params) ? channel_1.Params.fromJSON(object.params) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.authority !== "") {
            obj.authority = message.authority;
        }
        if (message.params !== undefined) {
            obj.params = channel_1.Params.toJSON(message.params);
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
            ? channel_1.Params.fromPartial(object.params)
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
function createBaseMsgPruneAcknowledgements() {
    return { portId: "", channelId: "", limit: 0, signer: "" };
}
exports.MsgPruneAcknowledgements = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.limit !== 0) {
            writer.uint32(24).uint64(message.limit);
        }
        if (message.signer !== "") {
            writer.uint32(34).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgPruneAcknowledgements();
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
                    if (tag !== 24) {
                        break;
                    }
                    message.limit = longToNumber(reader.uint64());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.signer = reader.string();
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
            limit: isSet(object.limit) ? Number(object.limit) : 0,
            signer: isSet(object.signer) ? String(object.signer) : "",
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
        if (message.limit !== 0) {
            obj.limit = Math.round(message.limit);
        }
        if (message.signer !== "") {
            obj.signer = message.signer;
        }
        return obj;
    },
    create(base) {
        return exports.MsgPruneAcknowledgements.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgPruneAcknowledgements();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.limit = object.limit ?? 0;
        message.signer = object.signer ?? "";
        return message;
    },
};
function createBaseMsgPruneAcknowledgementsResponse() {
    return { totalPrunedSequences: 0, totalRemainingSequences: 0 };
}
exports.MsgPruneAcknowledgementsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.totalPrunedSequences !== 0) {
            writer.uint32(8).uint64(message.totalPrunedSequences);
        }
        if (message.totalRemainingSequences !== 0) {
            writer.uint32(16).uint64(message.totalRemainingSequences);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgPruneAcknowledgementsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.totalPrunedSequences = longToNumber(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.totalRemainingSequences = longToNumber(reader.uint64());
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
            totalPrunedSequences: isSet(object.totalPrunedSequences) ? Number(object.totalPrunedSequences) : 0,
            totalRemainingSequences: isSet(object.totalRemainingSequences) ? Number(object.totalRemainingSequences) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.totalPrunedSequences !== 0) {
            obj.totalPrunedSequences = Math.round(message.totalPrunedSequences);
        }
        if (message.totalRemainingSequences !== 0) {
            obj.totalRemainingSequences = Math.round(message.totalRemainingSequences);
        }
        return obj;
    },
    create(base) {
        return exports.MsgPruneAcknowledgementsResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgPruneAcknowledgementsResponse();
        message.totalPrunedSequences = object.totalPrunedSequences ?? 0;
        message.totalRemainingSequences = object.totalRemainingSequences ?? 0;
        return message;
    },
};
exports.MsgServiceName = "ibc.core.channel.v1.Msg";
class MsgClientImpl {
    constructor(rpc, opts) {
        this.service = opts?.service || exports.MsgServiceName;
        this.rpc = rpc;
        this.ChannelOpenInit = this.ChannelOpenInit.bind(this);
        this.ChannelOpenTry = this.ChannelOpenTry.bind(this);
        this.ChannelOpenAck = this.ChannelOpenAck.bind(this);
        this.ChannelOpenConfirm = this.ChannelOpenConfirm.bind(this);
        this.ChannelCloseInit = this.ChannelCloseInit.bind(this);
        this.ChannelCloseConfirm = this.ChannelCloseConfirm.bind(this);
        this.RecvPacket = this.RecvPacket.bind(this);
        this.Timeout = this.Timeout.bind(this);
        this.TimeoutOnClose = this.TimeoutOnClose.bind(this);
        this.Acknowledgement = this.Acknowledgement.bind(this);
        this.ChannelUpgradeInit = this.ChannelUpgradeInit.bind(this);
        this.ChannelUpgradeTry = this.ChannelUpgradeTry.bind(this);
        this.ChannelUpgradeAck = this.ChannelUpgradeAck.bind(this);
        this.ChannelUpgradeConfirm = this.ChannelUpgradeConfirm.bind(this);
        this.ChannelUpgradeOpen = this.ChannelUpgradeOpen.bind(this);
        this.ChannelUpgradeTimeout = this.ChannelUpgradeTimeout.bind(this);
        this.ChannelUpgradeCancel = this.ChannelUpgradeCancel.bind(this);
        this.UpdateChannelParams = this.UpdateChannelParams.bind(this);
        this.PruneAcknowledgements = this.PruneAcknowledgements.bind(this);
    }
    ChannelOpenInit(request) {
        const data = exports.MsgChannelOpenInit.encode(request).finish();
        const promise = this.rpc.request(this.service, "ChannelOpenInit", data);
        return promise.then((data) => exports.MsgChannelOpenInitResponse.decode(minimal_1.default.Reader.create(data)));
    }
    ChannelOpenTry(request) {
        const data = exports.MsgChannelOpenTry.encode(request).finish();
        const promise = this.rpc.request(this.service, "ChannelOpenTry", data);
        return promise.then((data) => exports.MsgChannelOpenTryResponse.decode(minimal_1.default.Reader.create(data)));
    }
    ChannelOpenAck(request) {
        const data = exports.MsgChannelOpenAck.encode(request).finish();
        const promise = this.rpc.request(this.service, "ChannelOpenAck", data);
        return promise.then((data) => exports.MsgChannelOpenAckResponse.decode(minimal_1.default.Reader.create(data)));
    }
    ChannelOpenConfirm(request) {
        const data = exports.MsgChannelOpenConfirm.encode(request).finish();
        const promise = this.rpc.request(this.service, "ChannelOpenConfirm", data);
        return promise.then((data) => exports.MsgChannelOpenConfirmResponse.decode(minimal_1.default.Reader.create(data)));
    }
    ChannelCloseInit(request) {
        const data = exports.MsgChannelCloseInit.encode(request).finish();
        const promise = this.rpc.request(this.service, "ChannelCloseInit", data);
        return promise.then((data) => exports.MsgChannelCloseInitResponse.decode(minimal_1.default.Reader.create(data)));
    }
    ChannelCloseConfirm(request) {
        const data = exports.MsgChannelCloseConfirm.encode(request).finish();
        const promise = this.rpc.request(this.service, "ChannelCloseConfirm", data);
        return promise.then((data) => exports.MsgChannelCloseConfirmResponse.decode(minimal_1.default.Reader.create(data)));
    }
    RecvPacket(request) {
        const data = exports.MsgRecvPacket.encode(request).finish();
        const promise = this.rpc.request(this.service, "RecvPacket", data);
        return promise.then((data) => exports.MsgRecvPacketResponse.decode(minimal_1.default.Reader.create(data)));
    }
    Timeout(request) {
        const data = exports.MsgTimeout.encode(request).finish();
        const promise = this.rpc.request(this.service, "Timeout", data);
        return promise.then((data) => exports.MsgTimeoutResponse.decode(minimal_1.default.Reader.create(data)));
    }
    TimeoutOnClose(request) {
        const data = exports.MsgTimeoutOnClose.encode(request).finish();
        const promise = this.rpc.request(this.service, "TimeoutOnClose", data);
        return promise.then((data) => exports.MsgTimeoutOnCloseResponse.decode(minimal_1.default.Reader.create(data)));
    }
    Acknowledgement(request) {
        const data = exports.MsgAcknowledgement.encode(request).finish();
        const promise = this.rpc.request(this.service, "Acknowledgement", data);
        return promise.then((data) => exports.MsgAcknowledgementResponse.decode(minimal_1.default.Reader.create(data)));
    }
    ChannelUpgradeInit(request) {
        const data = exports.MsgChannelUpgradeInit.encode(request).finish();
        const promise = this.rpc.request(this.service, "ChannelUpgradeInit", data);
        return promise.then((data) => exports.MsgChannelUpgradeInitResponse.decode(minimal_1.default.Reader.create(data)));
    }
    ChannelUpgradeTry(request) {
        const data = exports.MsgChannelUpgradeTry.encode(request).finish();
        const promise = this.rpc.request(this.service, "ChannelUpgradeTry", data);
        return promise.then((data) => exports.MsgChannelUpgradeTryResponse.decode(minimal_1.default.Reader.create(data)));
    }
    ChannelUpgradeAck(request) {
        const data = exports.MsgChannelUpgradeAck.encode(request).finish();
        const promise = this.rpc.request(this.service, "ChannelUpgradeAck", data);
        return promise.then((data) => exports.MsgChannelUpgradeAckResponse.decode(minimal_1.default.Reader.create(data)));
    }
    ChannelUpgradeConfirm(request) {
        const data = exports.MsgChannelUpgradeConfirm.encode(request).finish();
        const promise = this.rpc.request(this.service, "ChannelUpgradeConfirm", data);
        return promise.then((data) => exports.MsgChannelUpgradeConfirmResponse.decode(minimal_1.default.Reader.create(data)));
    }
    ChannelUpgradeOpen(request) {
        const data = exports.MsgChannelUpgradeOpen.encode(request).finish();
        const promise = this.rpc.request(this.service, "ChannelUpgradeOpen", data);
        return promise.then((data) => exports.MsgChannelUpgradeOpenResponse.decode(minimal_1.default.Reader.create(data)));
    }
    ChannelUpgradeTimeout(request) {
        const data = exports.MsgChannelUpgradeTimeout.encode(request).finish();
        const promise = this.rpc.request(this.service, "ChannelUpgradeTimeout", data);
        return promise.then((data) => exports.MsgChannelUpgradeTimeoutResponse.decode(minimal_1.default.Reader.create(data)));
    }
    ChannelUpgradeCancel(request) {
        const data = exports.MsgChannelUpgradeCancel.encode(request).finish();
        const promise = this.rpc.request(this.service, "ChannelUpgradeCancel", data);
        return promise.then((data) => exports.MsgChannelUpgradeCancelResponse.decode(minimal_1.default.Reader.create(data)));
    }
    UpdateChannelParams(request) {
        const data = exports.MsgUpdateParams.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpdateChannelParams", data);
        return promise.then((data) => exports.MsgUpdateParamsResponse.decode(minimal_1.default.Reader.create(data)));
    }
    PruneAcknowledgements(request) {
        const data = exports.MsgPruneAcknowledgements.encode(request).finish();
        const promise = this.rpc.request(this.service, "PruneAcknowledgements", data);
        return promise.then((data) => exports.MsgPruneAcknowledgementsResponse.decode(minimal_1.default.Reader.create(data)));
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
function bytesFromBase64(b64) {
    if (tsProtoGlobalThis.Buffer) {
        return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
    }
    else {
        const bin = tsProtoGlobalThis.atob(b64);
        const arr = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; ++i) {
            arr[i] = bin.charCodeAt(i);
        }
        return arr;
    }
}
function base64FromBytes(arr) {
    if (tsProtoGlobalThis.Buffer) {
        return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
    }
    else {
        const bin = [];
        arr.forEach((byte) => {
            bin.push(String.fromCharCode(byte));
        });
        return tsProtoGlobalThis.btoa(bin.join(""));
    }
}
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
