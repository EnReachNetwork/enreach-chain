"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MissedBlock = exports.ValidatorMissedBlocks = exports.SigningInfo = exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const slashing_1 = require("./slashing");
exports.protobufPackage = "cosmos.slashing.v1beta1";
function createBaseGenesisState() {
    return { params: undefined, signingInfos: [], missedBlocks: [] };
}
exports.GenesisState = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.params !== undefined) {
            slashing_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.signingInfos) {
            exports.SigningInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.missedBlocks) {
            exports.ValidatorMissedBlocks.encode(v, writer.uint32(26).fork()).ldelim();
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
                    message.params = slashing_1.Params.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.signingInfos.push(exports.SigningInfo.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.missedBlocks.push(exports.ValidatorMissedBlocks.decode(reader, reader.uint32()));
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
            params: isSet(object.params) ? slashing_1.Params.fromJSON(object.params) : undefined,
            signingInfos: Array.isArray(object?.signingInfos)
                ? object.signingInfos.map((e) => exports.SigningInfo.fromJSON(e))
                : [],
            missedBlocks: Array.isArray(object?.missedBlocks)
                ? object.missedBlocks.map((e) => exports.ValidatorMissedBlocks.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.params !== undefined) {
            obj.params = slashing_1.Params.toJSON(message.params);
        }
        if (message.signingInfos?.length) {
            obj.signingInfos = message.signingInfos.map((e) => exports.SigningInfo.toJSON(e));
        }
        if (message.missedBlocks?.length) {
            obj.missedBlocks = message.missedBlocks.map((e) => exports.ValidatorMissedBlocks.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.GenesisState.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = (object.params !== undefined && object.params !== null)
            ? slashing_1.Params.fromPartial(object.params)
            : undefined;
        message.signingInfos = object.signingInfos?.map((e) => exports.SigningInfo.fromPartial(e)) || [];
        message.missedBlocks = object.missedBlocks?.map((e) => exports.ValidatorMissedBlocks.fromPartial(e)) || [];
        return message;
    },
};
function createBaseSigningInfo() {
    return { address: "", validatorSigningInfo: undefined };
}
exports.SigningInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.validatorSigningInfo !== undefined) {
            slashing_1.ValidatorSigningInfo.encode(message.validatorSigningInfo, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSigningInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.address = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.validatorSigningInfo = slashing_1.ValidatorSigningInfo.decode(reader, reader.uint32());
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
            address: isSet(object.address) ? String(object.address) : "",
            validatorSigningInfo: isSet(object.validatorSigningInfo)
                ? slashing_1.ValidatorSigningInfo.fromJSON(object.validatorSigningInfo)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.address !== "") {
            obj.address = message.address;
        }
        if (message.validatorSigningInfo !== undefined) {
            obj.validatorSigningInfo = slashing_1.ValidatorSigningInfo.toJSON(message.validatorSigningInfo);
        }
        return obj;
    },
    create(base) {
        return exports.SigningInfo.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSigningInfo();
        message.address = object.address ?? "";
        message.validatorSigningInfo = (object.validatorSigningInfo !== undefined && object.validatorSigningInfo !== null)
            ? slashing_1.ValidatorSigningInfo.fromPartial(object.validatorSigningInfo)
            : undefined;
        return message;
    },
};
function createBaseValidatorMissedBlocks() {
    return { address: "", missedBlocks: [] };
}
exports.ValidatorMissedBlocks = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        for (const v of message.missedBlocks) {
            exports.MissedBlock.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorMissedBlocks();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.address = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.missedBlocks.push(exports.MissedBlock.decode(reader, reader.uint32()));
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
            address: isSet(object.address) ? String(object.address) : "",
            missedBlocks: Array.isArray(object?.missedBlocks)
                ? object.missedBlocks.map((e) => exports.MissedBlock.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.address !== "") {
            obj.address = message.address;
        }
        if (message.missedBlocks?.length) {
            obj.missedBlocks = message.missedBlocks.map((e) => exports.MissedBlock.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.ValidatorMissedBlocks.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseValidatorMissedBlocks();
        message.address = object.address ?? "";
        message.missedBlocks = object.missedBlocks?.map((e) => exports.MissedBlock.fromPartial(e)) || [];
        return message;
    },
};
function createBaseMissedBlock() {
    return { index: 0, missed: false };
}
exports.MissedBlock = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.index !== 0) {
            writer.uint32(8).int64(message.index);
        }
        if (message.missed === true) {
            writer.uint32(16).bool(message.missed);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMissedBlock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.index = longToNumber(reader.int64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.missed = reader.bool();
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
            index: isSet(object.index) ? Number(object.index) : 0,
            missed: isSet(object.missed) ? Boolean(object.missed) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.index !== 0) {
            obj.index = Math.round(message.index);
        }
        if (message.missed === true) {
            obj.missed = message.missed;
        }
        return obj;
    },
    create(base) {
        return exports.MissedBlock.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMissedBlock();
        message.index = object.index ?? 0;
        message.missed = object.missed ?? false;
        return message;
    },
};
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
