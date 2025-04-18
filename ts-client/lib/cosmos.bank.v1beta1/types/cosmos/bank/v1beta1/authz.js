"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendAuthorization = exports.protobufPackage = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const coin_1 = require("../../base/v1beta1/coin");
exports.protobufPackage = "cosmos.bank.v1beta1";
function createBaseSendAuthorization() {
    return { spendLimit: [], allowList: [] };
}
exports.SendAuthorization = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.spendLimit) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.allowList) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSendAuthorization();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.spendLimit.push(coin_1.Coin.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.allowList.push(reader.string());
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
            spendLimit: Array.isArray(object?.spendLimit) ? object.spendLimit.map((e) => coin_1.Coin.fromJSON(e)) : [],
            allowList: Array.isArray(object?.allowList) ? object.allowList.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.spendLimit?.length) {
            obj.spendLimit = message.spendLimit.map((e) => coin_1.Coin.toJSON(e));
        }
        if (message.allowList?.length) {
            obj.allowList = message.allowList;
        }
        return obj;
    },
    create(base) {
        return exports.SendAuthorization.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSendAuthorization();
        message.spendLimit = object.spendLimit?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        message.allowList = object.allowList?.map((e) => e) || [];
        return message;
    },
};
