"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const coin_1 = require("../../../../cosmos/base/v1beta1/coin");
const transfer_1 = require("./transfer");
exports.protobufPackage = "ibc.applications.transfer.v1";
function createBaseGenesisState() {
    return { portId: "", denomTraces: [], params: undefined, totalEscrowed: [] };
}
exports.GenesisState = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        for (const v of message.denomTraces) {
            transfer_1.DenomTrace.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.params !== undefined) {
            transfer_1.Params.encode(message.params, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.totalEscrowed) {
            coin_1.Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
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
                    message.denomTraces.push(transfer_1.DenomTrace.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.params = transfer_1.Params.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.totalEscrowed.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            denomTraces: Array.isArray(object?.denomTraces) ? object.denomTraces.map((e) => transfer_1.DenomTrace.fromJSON(e)) : [],
            params: isSet(object.params) ? transfer_1.Params.fromJSON(object.params) : undefined,
            totalEscrowed: Array.isArray(object?.totalEscrowed) ? object.totalEscrowed.map((e) => coin_1.Coin.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.portId !== "") {
            obj.portId = message.portId;
        }
        if (message.denomTraces?.length) {
            obj.denomTraces = message.denomTraces.map((e) => transfer_1.DenomTrace.toJSON(e));
        }
        if (message.params !== undefined) {
            obj.params = transfer_1.Params.toJSON(message.params);
        }
        if (message.totalEscrowed?.length) {
            obj.totalEscrowed = message.totalEscrowed.map((e) => coin_1.Coin.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.GenesisState.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.portId = object.portId ?? "";
        message.denomTraces = object.denomTraces?.map((e) => transfer_1.DenomTrace.fromPartial(e)) || [];
        message.params = (object.params !== undefined && object.params !== null)
            ? transfer_1.Params.fromPartial(object.params)
            : undefined;
        message.totalEscrowed = object.totalEscrowed?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
