"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const epoch_info_1 = require("./epoch_info");
const era_info_1 = require("./era_info");
const params_1 = require("./params");
const superior_1 = require("./superior");
exports.protobufPackage = "enreach.workload";
function createBaseGenesisState() {
    return {
        params: undefined,
        superior: undefined,
        currentEpoch: undefined,
        pendingNextEpoch: undefined,
        currentEra: undefined,
        pendingNextEra: undefined,
    };
}
exports.GenesisState = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.superior !== undefined) {
            superior_1.Superior.encode(message.superior, writer.uint32(18).fork()).ldelim();
        }
        if (message.currentEpoch !== undefined) {
            epoch_info_1.EpochInfo.encode(message.currentEpoch, writer.uint32(26).fork()).ldelim();
        }
        if (message.pendingNextEpoch !== undefined) {
            epoch_info_1.EpochInfo.encode(message.pendingNextEpoch, writer.uint32(34).fork()).ldelim();
        }
        if (message.currentEra !== undefined) {
            era_info_1.EraInfo.encode(message.currentEra, writer.uint32(42).fork()).ldelim();
        }
        if (message.pendingNextEra !== undefined) {
            era_info_1.EraInfo.encode(message.pendingNextEra, writer.uint32(50).fork()).ldelim();
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
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.superior = superior_1.Superior.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.currentEpoch = epoch_info_1.EpochInfo.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.pendingNextEpoch = epoch_info_1.EpochInfo.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.currentEra = era_info_1.EraInfo.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.pendingNextEra = era_info_1.EraInfo.decode(reader, reader.uint32());
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
            params: isSet(object.params) ? params_1.Params.fromJSON(object.params) : undefined,
            superior: isSet(object.superior) ? superior_1.Superior.fromJSON(object.superior) : undefined,
            currentEpoch: isSet(object.currentEpoch) ? epoch_info_1.EpochInfo.fromJSON(object.currentEpoch) : undefined,
            pendingNextEpoch: isSet(object.pendingNextEpoch) ? epoch_info_1.EpochInfo.fromJSON(object.pendingNextEpoch) : undefined,
            currentEra: isSet(object.currentEra) ? era_info_1.EraInfo.fromJSON(object.currentEra) : undefined,
            pendingNextEra: isSet(object.pendingNextEra) ? era_info_1.EraInfo.fromJSON(object.pendingNextEra) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.params !== undefined) {
            obj.params = params_1.Params.toJSON(message.params);
        }
        if (message.superior !== undefined) {
            obj.superior = superior_1.Superior.toJSON(message.superior);
        }
        if (message.currentEpoch !== undefined) {
            obj.currentEpoch = epoch_info_1.EpochInfo.toJSON(message.currentEpoch);
        }
        if (message.pendingNextEpoch !== undefined) {
            obj.pendingNextEpoch = epoch_info_1.EpochInfo.toJSON(message.pendingNextEpoch);
        }
        if (message.currentEra !== undefined) {
            obj.currentEra = era_info_1.EraInfo.toJSON(message.currentEra);
        }
        if (message.pendingNextEra !== undefined) {
            obj.pendingNextEra = era_info_1.EraInfo.toJSON(message.pendingNextEra);
        }
        return obj;
    },
    create(base) {
        return exports.GenesisState.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = (object.params !== undefined && object.params !== null)
            ? params_1.Params.fromPartial(object.params)
            : undefined;
        message.superior = (object.superior !== undefined && object.superior !== null)
            ? superior_1.Superior.fromPartial(object.superior)
            : undefined;
        message.currentEpoch = (object.currentEpoch !== undefined && object.currentEpoch !== null)
            ? epoch_info_1.EpochInfo.fromPartial(object.currentEpoch)
            : undefined;
        message.pendingNextEpoch = (object.pendingNextEpoch !== undefined && object.pendingNextEpoch !== null)
            ? epoch_info_1.EpochInfo.fromPartial(object.pendingNextEpoch)
            : undefined;
        message.currentEra = (object.currentEra !== undefined && object.currentEra !== null)
            ? era_info_1.EraInfo.fromPartial(object.currentEra)
            : undefined;
        message.pendingNextEra = (object.pendingNextEra !== undefined && object.pendingNextEra !== null)
            ? era_info_1.EraInfo.fromPartial(object.pendingNextEra)
            : undefined;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
