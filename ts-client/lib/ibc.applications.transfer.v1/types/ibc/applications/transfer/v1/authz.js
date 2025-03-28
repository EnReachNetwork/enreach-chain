"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransferAuthorization = exports.Allocation = exports.protobufPackage = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const coin_1 = require("../../../../cosmos/base/v1beta1/coin");
exports.protobufPackage = "ibc.applications.transfer.v1";
function createBaseAllocation() {
    return { sourcePort: "", sourceChannel: "", spendLimit: [], allowList: [], allowedPacketData: [] };
}
exports.Allocation = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sourcePort !== "") {
            writer.uint32(10).string(message.sourcePort);
        }
        if (message.sourceChannel !== "") {
            writer.uint32(18).string(message.sourceChannel);
        }
        for (const v of message.spendLimit) {
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.allowList) {
            writer.uint32(34).string(v);
        }
        for (const v of message.allowedPacketData) {
            writer.uint32(42).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAllocation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.sourcePort = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.sourceChannel = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.spendLimit.push(coin_1.Coin.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.allowList.push(reader.string());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.allowedPacketData.push(reader.string());
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
            sourcePort: isSet(object.sourcePort) ? String(object.sourcePort) : "",
            sourceChannel: isSet(object.sourceChannel) ? String(object.sourceChannel) : "",
            spendLimit: Array.isArray(object?.spendLimit) ? object.spendLimit.map((e) => coin_1.Coin.fromJSON(e)) : [],
            allowList: Array.isArray(object?.allowList) ? object.allowList.map((e) => String(e)) : [],
            allowedPacketData: Array.isArray(object?.allowedPacketData)
                ? object.allowedPacketData.map((e) => String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.sourcePort !== "") {
            obj.sourcePort = message.sourcePort;
        }
        if (message.sourceChannel !== "") {
            obj.sourceChannel = message.sourceChannel;
        }
        if (message.spendLimit?.length) {
            obj.spendLimit = message.spendLimit.map((e) => coin_1.Coin.toJSON(e));
        }
        if (message.allowList?.length) {
            obj.allowList = message.allowList;
        }
        if (message.allowedPacketData?.length) {
            obj.allowedPacketData = message.allowedPacketData;
        }
        return obj;
    },
    create(base) {
        return exports.Allocation.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAllocation();
        message.sourcePort = object.sourcePort ?? "";
        message.sourceChannel = object.sourceChannel ?? "";
        message.spendLimit = object.spendLimit?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        message.allowList = object.allowList?.map((e) => e) || [];
        message.allowedPacketData = object.allowedPacketData?.map((e) => e) || [];
        return message;
    },
};
function createBaseTransferAuthorization() {
    return { allocations: [] };
}
exports.TransferAuthorization = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.allocations) {
            exports.Allocation.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTransferAuthorization();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.allocations.push(exports.Allocation.decode(reader, reader.uint32()));
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
            allocations: Array.isArray(object?.allocations) ? object.allocations.map((e) => exports.Allocation.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.allocations?.length) {
            obj.allocations = message.allocations.map((e) => exports.Allocation.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.TransferAuthorization.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseTransferAuthorization();
        message.allocations = object.allocations?.map((e) => exports.Allocation.fromPartial(e)) || [];
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
