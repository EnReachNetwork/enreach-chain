"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgServiceName = exports.MsgGoWorkingResponse = exports.MsgGoWorking = exports.MsgRegisterManagerResponse = exports.MsgRegisterManager = exports.MsgUpdateOperatorBasicInfoResponse = exports.MsgUpdateOperatorBasicInfo = exports.MsgBindOperatorEVMAccountResponse = exports.MsgBindOperatorEVMAccount = exports.MsgActivateManagerResponse = exports.MsgActivateManager = exports.MsgUpdateManagerConnParamsResponse = exports.MsgUpdateManagerConnParams = exports.MsgSetManagerRegionResponse = exports.MsgSetManagerRegion = exports.MsgBindOperatorManagerAccountResponse = exports.MsgBindOperatorManagerAccount = exports.MsgCreateOperatorResponse = exports.MsgCreateOperator = exports.MsgUpdateParamsResponse = exports.MsgUpdateParams = exports.protobufPackage = void 0;
/* eslint-disable */
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
function createBaseMsgCreateOperator() {
    return { operatorAccount: "", name: "", description: "", websiteUrl: "" };
}
exports.MsgCreateOperator = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.operatorAccount !== "") {
            writer.uint32(10).string(message.operatorAccount);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        if (message.websiteUrl !== "") {
            writer.uint32(34).string(message.websiteUrl);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateOperator();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.operatorAccount = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.websiteUrl = reader.string();
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
            operatorAccount: isSet(object.operatorAccount) ? String(object.operatorAccount) : "",
            name: isSet(object.name) ? String(object.name) : "",
            description: isSet(object.description) ? String(object.description) : "",
            websiteUrl: isSet(object.websiteUrl) ? String(object.websiteUrl) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.operatorAccount !== "") {
            obj.operatorAccount = message.operatorAccount;
        }
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.description !== "") {
            obj.description = message.description;
        }
        if (message.websiteUrl !== "") {
            obj.websiteUrl = message.websiteUrl;
        }
        return obj;
    },
    create(base) {
        return exports.MsgCreateOperator.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgCreateOperator();
        message.operatorAccount = object.operatorAccount ?? "";
        message.name = object.name ?? "";
        message.description = object.description ?? "";
        message.websiteUrl = object.websiteUrl ?? "";
        return message;
    },
};
function createBaseMsgCreateOperatorResponse() {
    return {};
}
exports.MsgCreateOperatorResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateOperatorResponse();
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
        return exports.MsgCreateOperatorResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgCreateOperatorResponse();
        return message;
    },
};
function createBaseMsgBindOperatorManagerAccount() {
    return { operatorAccount: "", managerAccount: "", managerSignature: new Uint8Array(0), forceUnbind: false };
}
exports.MsgBindOperatorManagerAccount = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.operatorAccount !== "") {
            writer.uint32(10).string(message.operatorAccount);
        }
        if (message.managerAccount !== "") {
            writer.uint32(18).string(message.managerAccount);
        }
        if (message.managerSignature.length !== 0) {
            writer.uint32(26).bytes(message.managerSignature);
        }
        if (message.forceUnbind === true) {
            writer.uint32(32).bool(message.forceUnbind);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBindOperatorManagerAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.operatorAccount = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.managerAccount = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.managerSignature = reader.bytes();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.forceUnbind = reader.bool();
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
            operatorAccount: isSet(object.operatorAccount) ? String(object.operatorAccount) : "",
            managerAccount: isSet(object.managerAccount) ? String(object.managerAccount) : "",
            managerSignature: isSet(object.managerSignature) ? bytesFromBase64(object.managerSignature) : new Uint8Array(0),
            forceUnbind: isSet(object.forceUnbind) ? Boolean(object.forceUnbind) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.operatorAccount !== "") {
            obj.operatorAccount = message.operatorAccount;
        }
        if (message.managerAccount !== "") {
            obj.managerAccount = message.managerAccount;
        }
        if (message.managerSignature.length !== 0) {
            obj.managerSignature = base64FromBytes(message.managerSignature);
        }
        if (message.forceUnbind === true) {
            obj.forceUnbind = message.forceUnbind;
        }
        return obj;
    },
    create(base) {
        return exports.MsgBindOperatorManagerAccount.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgBindOperatorManagerAccount();
        message.operatorAccount = object.operatorAccount ?? "";
        message.managerAccount = object.managerAccount ?? "";
        message.managerSignature = object.managerSignature ?? new Uint8Array(0);
        message.forceUnbind = object.forceUnbind ?? false;
        return message;
    },
};
function createBaseMsgBindOperatorManagerAccountResponse() {
    return {};
}
exports.MsgBindOperatorManagerAccountResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBindOperatorManagerAccountResponse();
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
        return exports.MsgBindOperatorManagerAccountResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgBindOperatorManagerAccountResponse();
        return message;
    },
};
function createBaseMsgSetManagerRegion() {
    return { operatorAccount: "", regionCode: "" };
}
exports.MsgSetManagerRegion = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.operatorAccount !== "") {
            writer.uint32(10).string(message.operatorAccount);
        }
        if (message.regionCode !== "") {
            writer.uint32(18).string(message.regionCode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetManagerRegion();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.operatorAccount = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
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
            operatorAccount: isSet(object.operatorAccount) ? String(object.operatorAccount) : "",
            regionCode: isSet(object.regionCode) ? String(object.regionCode) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.operatorAccount !== "") {
            obj.operatorAccount = message.operatorAccount;
        }
        if (message.regionCode !== "") {
            obj.regionCode = message.regionCode;
        }
        return obj;
    },
    create(base) {
        return exports.MsgSetManagerRegion.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgSetManagerRegion();
        message.operatorAccount = object.operatorAccount ?? "";
        message.regionCode = object.regionCode ?? "";
        return message;
    },
};
function createBaseMsgSetManagerRegionResponse() {
    return {};
}
exports.MsgSetManagerRegionResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetManagerRegionResponse();
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
        return exports.MsgSetManagerRegionResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgSetManagerRegionResponse();
        return message;
    },
};
function createBaseMsgUpdateManagerConnParams() {
    return { operatorAccount: "", hostAddress: "", managerPort: 0, trackerPort: 0, chainAPIPort: 0, chainRPCPort: 0 };
}
exports.MsgUpdateManagerConnParams = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.operatorAccount !== "") {
            writer.uint32(10).string(message.operatorAccount);
        }
        if (message.hostAddress !== "") {
            writer.uint32(18).string(message.hostAddress);
        }
        if (message.managerPort !== 0) {
            writer.uint32(24).uint32(message.managerPort);
        }
        if (message.trackerPort !== 0) {
            writer.uint32(32).uint32(message.trackerPort);
        }
        if (message.chainAPIPort !== 0) {
            writer.uint32(40).uint32(message.chainAPIPort);
        }
        if (message.chainRPCPort !== 0) {
            writer.uint32(48).uint32(message.chainRPCPort);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateManagerConnParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.operatorAccount = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.hostAddress = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.managerPort = reader.uint32();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.trackerPort = reader.uint32();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.chainAPIPort = reader.uint32();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.chainRPCPort = reader.uint32();
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
            operatorAccount: isSet(object.operatorAccount) ? String(object.operatorAccount) : "",
            hostAddress: isSet(object.hostAddress) ? String(object.hostAddress) : "",
            managerPort: isSet(object.managerPort) ? Number(object.managerPort) : 0,
            trackerPort: isSet(object.trackerPort) ? Number(object.trackerPort) : 0,
            chainAPIPort: isSet(object.chainAPIPort) ? Number(object.chainAPIPort) : 0,
            chainRPCPort: isSet(object.chainRPCPort) ? Number(object.chainRPCPort) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
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
        return obj;
    },
    create(base) {
        return exports.MsgUpdateManagerConnParams.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateManagerConnParams();
        message.operatorAccount = object.operatorAccount ?? "";
        message.hostAddress = object.hostAddress ?? "";
        message.managerPort = object.managerPort ?? 0;
        message.trackerPort = object.trackerPort ?? 0;
        message.chainAPIPort = object.chainAPIPort ?? 0;
        message.chainRPCPort = object.chainRPCPort ?? 0;
        return message;
    },
};
function createBaseMsgUpdateManagerConnParamsResponse() {
    return {};
}
exports.MsgUpdateManagerConnParamsResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateManagerConnParamsResponse();
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
        return exports.MsgUpdateManagerConnParamsResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateManagerConnParamsResponse();
        return message;
    },
};
function createBaseMsgActivateManager() {
    return { operatorAccount: "", license: "" };
}
exports.MsgActivateManager = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.operatorAccount !== "") {
            writer.uint32(10).string(message.operatorAccount);
        }
        if (message.license !== "") {
            writer.uint32(18).string(message.license);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgActivateManager();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.operatorAccount = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.license = reader.string();
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
            operatorAccount: isSet(object.operatorAccount) ? String(object.operatorAccount) : "",
            license: isSet(object.license) ? String(object.license) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.operatorAccount !== "") {
            obj.operatorAccount = message.operatorAccount;
        }
        if (message.license !== "") {
            obj.license = message.license;
        }
        return obj;
    },
    create(base) {
        return exports.MsgActivateManager.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgActivateManager();
        message.operatorAccount = object.operatorAccount ?? "";
        message.license = object.license ?? "";
        return message;
    },
};
function createBaseMsgActivateManagerResponse() {
    return {};
}
exports.MsgActivateManagerResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgActivateManagerResponse();
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
        return exports.MsgActivateManagerResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgActivateManagerResponse();
        return message;
    },
};
function createBaseMsgBindOperatorEVMAccount() {
    return { operatorAccount: "", evmAccount: "", evmSignature: new Uint8Array(0) };
}
exports.MsgBindOperatorEVMAccount = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.operatorAccount !== "") {
            writer.uint32(10).string(message.operatorAccount);
        }
        if (message.evmAccount !== "") {
            writer.uint32(18).string(message.evmAccount);
        }
        if (message.evmSignature.length !== 0) {
            writer.uint32(26).bytes(message.evmSignature);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBindOperatorEVMAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.operatorAccount = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.evmAccount = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
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
            operatorAccount: isSet(object.operatorAccount) ? String(object.operatorAccount) : "",
            evmAccount: isSet(object.evmAccount) ? String(object.evmAccount) : "",
            evmSignature: isSet(object.evmSignature) ? bytesFromBase64(object.evmSignature) : new Uint8Array(0),
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.operatorAccount !== "") {
            obj.operatorAccount = message.operatorAccount;
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
        return exports.MsgBindOperatorEVMAccount.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgBindOperatorEVMAccount();
        message.operatorAccount = object.operatorAccount ?? "";
        message.evmAccount = object.evmAccount ?? "";
        message.evmSignature = object.evmSignature ?? new Uint8Array(0);
        return message;
    },
};
function createBaseMsgBindOperatorEVMAccountResponse() {
    return {};
}
exports.MsgBindOperatorEVMAccountResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBindOperatorEVMAccountResponse();
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
        return exports.MsgBindOperatorEVMAccountResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgBindOperatorEVMAccountResponse();
        return message;
    },
};
function createBaseMsgUpdateOperatorBasicInfo() {
    return { operatorAccount: "", name: "", description: "", websiteUrl: "" };
}
exports.MsgUpdateOperatorBasicInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.operatorAccount !== "") {
            writer.uint32(10).string(message.operatorAccount);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        if (message.websiteUrl !== "") {
            writer.uint32(34).string(message.websiteUrl);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateOperatorBasicInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.operatorAccount = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.websiteUrl = reader.string();
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
            operatorAccount: isSet(object.operatorAccount) ? String(object.operatorAccount) : "",
            name: isSet(object.name) ? String(object.name) : "",
            description: isSet(object.description) ? String(object.description) : "",
            websiteUrl: isSet(object.websiteUrl) ? String(object.websiteUrl) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.operatorAccount !== "") {
            obj.operatorAccount = message.operatorAccount;
        }
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.description !== "") {
            obj.description = message.description;
        }
        if (message.websiteUrl !== "") {
            obj.websiteUrl = message.websiteUrl;
        }
        return obj;
    },
    create(base) {
        return exports.MsgUpdateOperatorBasicInfo.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateOperatorBasicInfo();
        message.operatorAccount = object.operatorAccount ?? "";
        message.name = object.name ?? "";
        message.description = object.description ?? "";
        message.websiteUrl = object.websiteUrl ?? "";
        return message;
    },
};
function createBaseMsgUpdateOperatorBasicInfoResponse() {
    return {};
}
exports.MsgUpdateOperatorBasicInfoResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateOperatorBasicInfoResponse();
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
        return exports.MsgUpdateOperatorBasicInfoResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateOperatorBasicInfoResponse();
        return message;
    },
};
function createBaseMsgRegisterManager() {
    return { managerAccount: "", hostAddress: "", managerPort: 0, trackerPort: 0, chainAPIPort: 0, chainRPCPort: 0 };
}
exports.MsgRegisterManager = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.managerAccount !== "") {
            writer.uint32(10).string(message.managerAccount);
        }
        if (message.hostAddress !== "") {
            writer.uint32(18).string(message.hostAddress);
        }
        if (message.managerPort !== 0) {
            writer.uint32(24).uint32(message.managerPort);
        }
        if (message.trackerPort !== 0) {
            writer.uint32(32).uint32(message.trackerPort);
        }
        if (message.chainAPIPort !== 0) {
            writer.uint32(40).uint32(message.chainAPIPort);
        }
        if (message.chainRPCPort !== 0) {
            writer.uint32(48).uint32(message.chainRPCPort);
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
                    message.managerAccount = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.hostAddress = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.managerPort = reader.uint32();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.trackerPort = reader.uint32();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.chainAPIPort = reader.uint32();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.chainRPCPort = reader.uint32();
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
            hostAddress: isSet(object.hostAddress) ? String(object.hostAddress) : "",
            managerPort: isSet(object.managerPort) ? Number(object.managerPort) : 0,
            trackerPort: isSet(object.trackerPort) ? Number(object.trackerPort) : 0,
            chainAPIPort: isSet(object.chainAPIPort) ? Number(object.chainAPIPort) : 0,
            chainRPCPort: isSet(object.chainRPCPort) ? Number(object.chainRPCPort) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.managerAccount !== "") {
            obj.managerAccount = message.managerAccount;
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
        return obj;
    },
    create(base) {
        return exports.MsgRegisterManager.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgRegisterManager();
        message.managerAccount = object.managerAccount ?? "";
        message.hostAddress = object.hostAddress ?? "";
        message.managerPort = object.managerPort ?? 0;
        message.trackerPort = object.trackerPort ?? 0;
        message.chainAPIPort = object.chainAPIPort ?? 0;
        message.chainRPCPort = object.chainRPCPort ?? 0;
        return message;
    },
};
function createBaseMsgRegisterManagerResponse() {
    return {};
}
exports.MsgRegisterManagerResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRegisterManagerResponse();
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
        return exports.MsgRegisterManagerResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgRegisterManagerResponse();
        return message;
    },
};
function createBaseMsgGoWorking() {
    return { managerAccount: "" };
}
exports.MsgGoWorking = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.managerAccount !== "") {
            writer.uint32(10).string(message.managerAccount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgGoWorking();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.managerAccount = reader.string();
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
        return { managerAccount: isSet(object.managerAccount) ? String(object.managerAccount) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.managerAccount !== "") {
            obj.managerAccount = message.managerAccount;
        }
        return obj;
    },
    create(base) {
        return exports.MsgGoWorking.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgGoWorking();
        message.managerAccount = object.managerAccount ?? "";
        return message;
    },
};
function createBaseMsgGoWorkingResponse() {
    return {};
}
exports.MsgGoWorkingResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgGoWorkingResponse();
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
        return exports.MsgGoWorkingResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgGoWorkingResponse();
        return message;
    },
};
exports.MsgServiceName = "enreach.manager.Msg";
class MsgClientImpl {
    constructor(rpc, opts) {
        this.service = opts?.service || exports.MsgServiceName;
        this.rpc = rpc;
        this.UpdateParams = this.UpdateParams.bind(this);
        this.CreateOperator = this.CreateOperator.bind(this);
        this.BindOperatorManagerAccount = this.BindOperatorManagerAccount.bind(this);
        this.SetManagerRegion = this.SetManagerRegion.bind(this);
        this.UpdateManagerConnParams = this.UpdateManagerConnParams.bind(this);
        this.ActivateManager = this.ActivateManager.bind(this);
        this.BindOperatorEVMAccount = this.BindOperatorEVMAccount.bind(this);
        this.UpdateOperatorBasicInfo = this.UpdateOperatorBasicInfo.bind(this);
        this.RegisterManager = this.RegisterManager.bind(this);
        this.GoWorking = this.GoWorking.bind(this);
    }
    UpdateParams(request) {
        const data = exports.MsgUpdateParams.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpdateParams", data);
        return promise.then((data) => exports.MsgUpdateParamsResponse.decode(minimal_1.default.Reader.create(data)));
    }
    CreateOperator(request) {
        const data = exports.MsgCreateOperator.encode(request).finish();
        const promise = this.rpc.request(this.service, "CreateOperator", data);
        return promise.then((data) => exports.MsgCreateOperatorResponse.decode(minimal_1.default.Reader.create(data)));
    }
    BindOperatorManagerAccount(request) {
        const data = exports.MsgBindOperatorManagerAccount.encode(request).finish();
        const promise = this.rpc.request(this.service, "BindOperatorManagerAccount", data);
        return promise.then((data) => exports.MsgBindOperatorManagerAccountResponse.decode(minimal_1.default.Reader.create(data)));
    }
    SetManagerRegion(request) {
        const data = exports.MsgSetManagerRegion.encode(request).finish();
        const promise = this.rpc.request(this.service, "SetManagerRegion", data);
        return promise.then((data) => exports.MsgSetManagerRegionResponse.decode(minimal_1.default.Reader.create(data)));
    }
    UpdateManagerConnParams(request) {
        const data = exports.MsgUpdateManagerConnParams.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpdateManagerConnParams", data);
        return promise.then((data) => exports.MsgUpdateManagerConnParamsResponse.decode(minimal_1.default.Reader.create(data)));
    }
    ActivateManager(request) {
        const data = exports.MsgActivateManager.encode(request).finish();
        const promise = this.rpc.request(this.service, "ActivateManager", data);
        return promise.then((data) => exports.MsgActivateManagerResponse.decode(minimal_1.default.Reader.create(data)));
    }
    BindOperatorEVMAccount(request) {
        const data = exports.MsgBindOperatorEVMAccount.encode(request).finish();
        const promise = this.rpc.request(this.service, "BindOperatorEVMAccount", data);
        return promise.then((data) => exports.MsgBindOperatorEVMAccountResponse.decode(minimal_1.default.Reader.create(data)));
    }
    UpdateOperatorBasicInfo(request) {
        const data = exports.MsgUpdateOperatorBasicInfo.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpdateOperatorBasicInfo", data);
        return promise.then((data) => exports.MsgUpdateOperatorBasicInfoResponse.decode(minimal_1.default.Reader.create(data)));
    }
    RegisterManager(request) {
        const data = exports.MsgRegisterManager.encode(request).finish();
        const promise = this.rpc.request(this.service, "RegisterManager", data);
        return promise.then((data) => exports.MsgRegisterManagerResponse.decode(minimal_1.default.Reader.create(data)));
    }
    GoWorking(request) {
        const data = exports.MsgGoWorking.encode(request).finish();
        const promise = this.rpc.request(this.service, "GoWorking", data);
        return promise.then((data) => exports.MsgGoWorkingResponse.decode(minimal_1.default.Reader.create(data)));
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
