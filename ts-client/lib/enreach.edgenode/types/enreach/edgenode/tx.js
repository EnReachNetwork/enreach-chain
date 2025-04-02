"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgServiceName = exports.MsgUpdateNodeTrafficTypeBatchResponse = exports.MsgUpdateNodeTrafficTypeBatch = exports.MsgUpdateSuperiorResponse = exports.MsgUpdateSuperior = exports.MsgCreateSuperiorResponse = exports.MsgCreateSuperior = exports.MsgUnbindNodeResponse = exports.MsgUnbindNode = exports.MsgBindAndActivateNodeResponse = exports.MsgBindAndActivateNode = exports.MsgRegisterNodeResponse = exports.MsgRegisterNode = exports.MsgBindUserEVMAccountResponse = exports.MsgBindUserEVMAccount = exports.MsgCreateUserResponse = exports.MsgCreateUser = exports.MsgUpdateParamsResponse = exports.MsgUpdateParams = exports.protobufPackage = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const params_1 = require("./params");
exports.protobufPackage = "enreach.edgenode";
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
function createBaseMsgCreateUser() {
    return { signer: "", userID: "" };
}
exports.MsgCreateUser = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.signer !== "") {
            writer.uint32(10).string(message.signer);
        }
        if (message.userID !== "") {
            writer.uint32(18).string(message.userID);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateUser();
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
                    message.userID = reader.string();
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
            userID: isSet(object.userID) ? String(object.userID) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.signer !== "") {
            obj.signer = message.signer;
        }
        if (message.userID !== "") {
            obj.userID = message.userID;
        }
        return obj;
    },
    create(base) {
        return exports.MsgCreateUser.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgCreateUser();
        message.signer = object.signer ?? "";
        message.userID = object.userID ?? "";
        return message;
    },
};
function createBaseMsgCreateUserResponse() {
    return {};
}
exports.MsgCreateUserResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateUserResponse();
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
        return exports.MsgCreateUserResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgCreateUserResponse();
        return message;
    },
};
function createBaseMsgBindUserEVMAccount() {
    return { signer: "", userID: "", evmAccount: "", evmSignature: new Uint8Array(0) };
}
exports.MsgBindUserEVMAccount = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.signer !== "") {
            writer.uint32(10).string(message.signer);
        }
        if (message.userID !== "") {
            writer.uint32(18).string(message.userID);
        }
        if (message.evmAccount !== "") {
            writer.uint32(26).string(message.evmAccount);
        }
        if (message.evmSignature.length !== 0) {
            writer.uint32(34).bytes(message.evmSignature);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBindUserEVMAccount();
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
                    message.userID = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.evmAccount = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.evmSignature = reader.bytes();
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
            userID: isSet(object.userID) ? String(object.userID) : "",
            evmAccount: isSet(object.evmAccount) ? String(object.evmAccount) : "",
            evmSignature: isSet(object.evmSignature) ? bytesFromBase64(object.evmSignature) : new Uint8Array(0),
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.signer !== "") {
            obj.signer = message.signer;
        }
        if (message.userID !== "") {
            obj.userID = message.userID;
        }
        if (message.evmAccount !== "") {
            obj.evmAccount = message.evmAccount;
        }
        if (message.evmSignature.length !== 0) {
            obj.evmSignature = base64FromBytes(message.evmSignature);
        }
        return obj;
    },
    create(base) {
        return exports.MsgBindUserEVMAccount.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgBindUserEVMAccount();
        message.signer = object.signer ?? "";
        message.userID = object.userID ?? "";
        message.evmAccount = object.evmAccount ?? "";
        message.evmSignature = object.evmSignature ?? new Uint8Array(0);
        return message;
    },
};
function createBaseMsgBindUserEVMAccountResponse() {
    return {};
}
exports.MsgBindUserEVMAccountResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBindUserEVMAccountResponse();
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
        return exports.MsgBindUserEVMAccountResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgBindUserEVMAccountResponse();
        return message;
    },
};
function createBaseMsgRegisterNode() {
    return { signer: "", nodeID: "", deviceType: "" };
}
exports.MsgRegisterNode = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.signer !== "") {
            writer.uint32(10).string(message.signer);
        }
        if (message.nodeID !== "") {
            writer.uint32(18).string(message.nodeID);
        }
        if (message.deviceType !== "") {
            writer.uint32(26).string(message.deviceType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRegisterNode();
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
                    message.nodeID = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.deviceType = reader.string();
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
            nodeID: isSet(object.nodeID) ? String(object.nodeID) : "",
            deviceType: isSet(object.deviceType) ? String(object.deviceType) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.signer !== "") {
            obj.signer = message.signer;
        }
        if (message.nodeID !== "") {
            obj.nodeID = message.nodeID;
        }
        if (message.deviceType !== "") {
            obj.deviceType = message.deviceType;
        }
        return obj;
    },
    create(base) {
        return exports.MsgRegisterNode.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgRegisterNode();
        message.signer = object.signer ?? "";
        message.nodeID = object.nodeID ?? "";
        message.deviceType = object.deviceType ?? "";
        return message;
    },
};
function createBaseMsgRegisterNodeResponse() {
    return {};
}
exports.MsgRegisterNodeResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRegisterNodeResponse();
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
        return exports.MsgRegisterNodeResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgRegisterNodeResponse();
        return message;
    },
};
function createBaseMsgBindAndActivateNode() {
    return { signer: "", nodeID: "", userID: "", nodeName: "", regionCode: "" };
}
exports.MsgBindAndActivateNode = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.signer !== "") {
            writer.uint32(10).string(message.signer);
        }
        if (message.nodeID !== "") {
            writer.uint32(18).string(message.nodeID);
        }
        if (message.userID !== "") {
            writer.uint32(26).string(message.userID);
        }
        if (message.nodeName !== "") {
            writer.uint32(34).string(message.nodeName);
        }
        if (message.regionCode !== "") {
            writer.uint32(42).string(message.regionCode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBindAndActivateNode();
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
                    message.nodeID = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.userID = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.nodeName = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
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
            signer: isSet(object.signer) ? String(object.signer) : "",
            nodeID: isSet(object.nodeID) ? String(object.nodeID) : "",
            userID: isSet(object.userID) ? String(object.userID) : "",
            nodeName: isSet(object.nodeName) ? String(object.nodeName) : "",
            regionCode: isSet(object.regionCode) ? String(object.regionCode) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.signer !== "") {
            obj.signer = message.signer;
        }
        if (message.nodeID !== "") {
            obj.nodeID = message.nodeID;
        }
        if (message.userID !== "") {
            obj.userID = message.userID;
        }
        if (message.nodeName !== "") {
            obj.nodeName = message.nodeName;
        }
        if (message.regionCode !== "") {
            obj.regionCode = message.regionCode;
        }
        return obj;
    },
    create(base) {
        return exports.MsgBindAndActivateNode.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgBindAndActivateNode();
        message.signer = object.signer ?? "";
        message.nodeID = object.nodeID ?? "";
        message.userID = object.userID ?? "";
        message.nodeName = object.nodeName ?? "";
        message.regionCode = object.regionCode ?? "";
        return message;
    },
};
function createBaseMsgBindAndActivateNodeResponse() {
    return {};
}
exports.MsgBindAndActivateNodeResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBindAndActivateNodeResponse();
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
        return exports.MsgBindAndActivateNodeResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgBindAndActivateNodeResponse();
        return message;
    },
};
function createBaseMsgUnbindNode() {
    return { signer: "", nodeID: "", userID: "" };
}
exports.MsgUnbindNode = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.signer !== "") {
            writer.uint32(10).string(message.signer);
        }
        if (message.nodeID !== "") {
            writer.uint32(18).string(message.nodeID);
        }
        if (message.userID !== "") {
            writer.uint32(26).string(message.userID);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUnbindNode();
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
                    message.nodeID = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.userID = reader.string();
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
            nodeID: isSet(object.nodeID) ? String(object.nodeID) : "",
            userID: isSet(object.userID) ? String(object.userID) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.signer !== "") {
            obj.signer = message.signer;
        }
        if (message.nodeID !== "") {
            obj.nodeID = message.nodeID;
        }
        if (message.userID !== "") {
            obj.userID = message.userID;
        }
        return obj;
    },
    create(base) {
        return exports.MsgUnbindNode.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgUnbindNode();
        message.signer = object.signer ?? "";
        message.nodeID = object.nodeID ?? "";
        message.userID = object.userID ?? "";
        return message;
    },
};
function createBaseMsgUnbindNodeResponse() {
    return {};
}
exports.MsgUnbindNodeResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUnbindNodeResponse();
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
        return exports.MsgUnbindNodeResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgUnbindNodeResponse();
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
function createBaseMsgUpdateNodeTrafficTypeBatch() {
    return { signer: "", trafficType: 0, nodeIDs: [], skipNonExistNode: false };
}
exports.MsgUpdateNodeTrafficTypeBatch = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.signer !== "") {
            writer.uint32(10).string(message.signer);
        }
        if (message.trafficType !== 0) {
            writer.uint32(16).uint32(message.trafficType);
        }
        for (const v of message.nodeIDs) {
            writer.uint32(26).string(v);
        }
        if (message.skipNonExistNode === true) {
            writer.uint32(32).bool(message.skipNonExistNode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateNodeTrafficTypeBatch();
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
                    message.trafficType = reader.uint32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.nodeIDs.push(reader.string());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.skipNonExistNode = reader.bool();
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
            trafficType: isSet(object.trafficType) ? Number(object.trafficType) : 0,
            nodeIDs: Array.isArray(object?.nodeIDs) ? object.nodeIDs.map((e) => String(e)) : [],
            skipNonExistNode: isSet(object.skipNonExistNode) ? Boolean(object.skipNonExistNode) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.signer !== "") {
            obj.signer = message.signer;
        }
        if (message.trafficType !== 0) {
            obj.trafficType = Math.round(message.trafficType);
        }
        if (message.nodeIDs?.length) {
            obj.nodeIDs = message.nodeIDs;
        }
        if (message.skipNonExistNode === true) {
            obj.skipNonExistNode = message.skipNonExistNode;
        }
        return obj;
    },
    create(base) {
        return exports.MsgUpdateNodeTrafficTypeBatch.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateNodeTrafficTypeBatch();
        message.signer = object.signer ?? "";
        message.trafficType = object.trafficType ?? 0;
        message.nodeIDs = object.nodeIDs?.map((e) => e) || [];
        message.skipNonExistNode = object.skipNonExistNode ?? false;
        return message;
    },
};
function createBaseMsgUpdateNodeTrafficTypeBatchResponse() {
    return {};
}
exports.MsgUpdateNodeTrafficTypeBatchResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateNodeTrafficTypeBatchResponse();
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
        return exports.MsgUpdateNodeTrafficTypeBatchResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateNodeTrafficTypeBatchResponse();
        return message;
    },
};
exports.MsgServiceName = "enreach.edgenode.Msg";
class MsgClientImpl {
    constructor(rpc, opts) {
        this.service = opts?.service || exports.MsgServiceName;
        this.rpc = rpc;
        this.UpdateParams = this.UpdateParams.bind(this);
        this.CreateUser = this.CreateUser.bind(this);
        this.BindUserEVMAccount = this.BindUserEVMAccount.bind(this);
        this.RegisterNode = this.RegisterNode.bind(this);
        this.BindAndActivateNode = this.BindAndActivateNode.bind(this);
        this.UnbindNode = this.UnbindNode.bind(this);
        this.CreateSuperior = this.CreateSuperior.bind(this);
        this.UpdateSuperior = this.UpdateSuperior.bind(this);
        this.UpdateNodeTrafficTypeBatch = this.UpdateNodeTrafficTypeBatch.bind(this);
    }
    UpdateParams(request) {
        const data = exports.MsgUpdateParams.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpdateParams", data);
        return promise.then((data) => exports.MsgUpdateParamsResponse.decode(minimal_1.default.Reader.create(data)));
    }
    CreateUser(request) {
        const data = exports.MsgCreateUser.encode(request).finish();
        const promise = this.rpc.request(this.service, "CreateUser", data);
        return promise.then((data) => exports.MsgCreateUserResponse.decode(minimal_1.default.Reader.create(data)));
    }
    BindUserEVMAccount(request) {
        const data = exports.MsgBindUserEVMAccount.encode(request).finish();
        const promise = this.rpc.request(this.service, "BindUserEVMAccount", data);
        return promise.then((data) => exports.MsgBindUserEVMAccountResponse.decode(minimal_1.default.Reader.create(data)));
    }
    RegisterNode(request) {
        const data = exports.MsgRegisterNode.encode(request).finish();
        const promise = this.rpc.request(this.service, "RegisterNode", data);
        return promise.then((data) => exports.MsgRegisterNodeResponse.decode(minimal_1.default.Reader.create(data)));
    }
    BindAndActivateNode(request) {
        const data = exports.MsgBindAndActivateNode.encode(request).finish();
        const promise = this.rpc.request(this.service, "BindAndActivateNode", data);
        return promise.then((data) => exports.MsgBindAndActivateNodeResponse.decode(minimal_1.default.Reader.create(data)));
    }
    UnbindNode(request) {
        const data = exports.MsgUnbindNode.encode(request).finish();
        const promise = this.rpc.request(this.service, "UnbindNode", data);
        return promise.then((data) => exports.MsgUnbindNodeResponse.decode(minimal_1.default.Reader.create(data)));
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
    UpdateNodeTrafficTypeBatch(request) {
        const data = exports.MsgUpdateNodeTrafficTypeBatch.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpdateNodeTrafficTypeBatch", data);
        return promise.then((data) => exports.MsgUpdateNodeTrafficTypeBatchResponse.decode(minimal_1.default.Reader.create(data)));
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
function isSet(value) {
    return value !== null && value !== undefined;
}
