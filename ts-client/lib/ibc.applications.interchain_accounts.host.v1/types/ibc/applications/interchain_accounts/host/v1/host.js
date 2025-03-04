"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.protobufPackage = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "ibc.applications.interchain_accounts.host.v1";
function createBaseParams() {
    return { hostEnabled: false, allowMessages: [] };
}
exports.Params = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.hostEnabled === true) {
            writer.uint32(8).bool(message.hostEnabled);
        }
        for (const v of message.allowMessages) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.hostEnabled = reader.bool();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.allowMessages.push(reader.string());
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
            hostEnabled: isSet(object.hostEnabled) ? Boolean(object.hostEnabled) : false,
            allowMessages: Array.isArray(object?.allowMessages) ? object.allowMessages.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.hostEnabled === true) {
            obj.hostEnabled = message.hostEnabled;
        }
        if (message.allowMessages?.length) {
            obj.allowMessages = message.allowMessages;
        }
        return obj;
    },
    create(base) {
        return exports.Params.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.hostEnabled = object.hostEnabled ?? false;
        message.allowMessages = object.allowMessages?.map((e) => e) || [];
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
