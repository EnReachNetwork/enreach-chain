"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const params_1 = require("./params");
const region_1 = require("./region");
const superior_1 = require("./superior");
exports.protobufPackage = "enreach.registry";
function createBaseGenesisState() {
    return { adminAccount: "", params: undefined, regionList: [], regionCount: 0, superior: undefined };
}
exports.GenesisState = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.adminAccount !== "") {
            writer.uint32(10).string(message.adminAccount);
        }
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.regionList) {
            region_1.Region.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.regionCount !== 0) {
            writer.uint32(32).uint64(message.regionCount);
        }
        if (message.superior !== undefined) {
            superior_1.Superior.encode(message.superior, writer.uint32(42).fork()).ldelim();
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
                    message.adminAccount = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.regionList.push(region_1.Region.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.regionCount = longToNumber(reader.uint64());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.superior = superior_1.Superior.decode(reader, reader.uint32());
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
            adminAccount: isSet(object.adminAccount) ? String(object.adminAccount) : "",
            params: isSet(object.params) ? params_1.Params.fromJSON(object.params) : undefined,
            regionList: Array.isArray(object?.regionList) ? object.regionList.map((e) => region_1.Region.fromJSON(e)) : [],
            regionCount: isSet(object.regionCount) ? Number(object.regionCount) : 0,
            superior: isSet(object.superior) ? superior_1.Superior.fromJSON(object.superior) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.adminAccount !== "") {
            obj.adminAccount = message.adminAccount;
        }
        if (message.params !== undefined) {
            obj.params = params_1.Params.toJSON(message.params);
        }
        if (message.regionList?.length) {
            obj.regionList = message.regionList.map((e) => region_1.Region.toJSON(e));
        }
        if (message.regionCount !== 0) {
            obj.regionCount = Math.round(message.regionCount);
        }
        if (message.superior !== undefined) {
            obj.superior = superior_1.Superior.toJSON(message.superior);
        }
        return obj;
    },
    create(base) {
        return exports.GenesisState.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.adminAccount = object.adminAccount ?? "";
        message.params = (object.params !== undefined && object.params !== null)
            ? params_1.Params.fromPartial(object.params)
            : undefined;
        message.regionList = object.regionList?.map((e) => region_1.Region.fromPartial(e)) || [];
        message.regionCount = object.regionCount ?? 0;
        message.superior = (object.superior !== undefined && object.superior !== null)
            ? superior_1.Superior.fromPartial(object.superior)
            : undefined;
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
