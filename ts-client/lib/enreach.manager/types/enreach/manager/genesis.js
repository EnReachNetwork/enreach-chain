"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const manager_1 = require("./manager");
const operator_1 = require("./operator");
const params_1 = require("./params");
const superior_1 = require("./superior");
exports.protobufPackage = "enreach.manager";
function createBaseGenesisState() {
    return {
        adminAccount: "",
        params: undefined,
        managerList: [],
        managerCount: 0,
        operatorList: [],
        operatorCount: 0,
        superior: undefined,
    };
}
exports.GenesisState = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.adminAccount !== "") {
            writer.uint32(10).string(message.adminAccount);
        }
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.managerList) {
            manager_1.Manager.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.managerCount !== 0) {
            writer.uint32(32).uint64(message.managerCount);
        }
        for (const v of message.operatorList) {
            operator_1.Operator.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.operatorCount !== 0) {
            writer.uint32(48).uint64(message.operatorCount);
        }
        if (message.superior !== undefined) {
            superior_1.Superior.encode(message.superior, writer.uint32(58).fork()).ldelim();
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
                    message.managerList.push(manager_1.Manager.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.managerCount = longToNumber(reader.uint64());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.operatorList.push(operator_1.Operator.decode(reader, reader.uint32()));
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.operatorCount = longToNumber(reader.uint64());
                    continue;
                case 7:
                    if (tag !== 58) {
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
            managerList: Array.isArray(object?.managerList) ? object.managerList.map((e) => manager_1.Manager.fromJSON(e)) : [],
            managerCount: isSet(object.managerCount) ? Number(object.managerCount) : 0,
            operatorList: Array.isArray(object?.operatorList)
                ? object.operatorList.map((e) => operator_1.Operator.fromJSON(e))
                : [],
            operatorCount: isSet(object.operatorCount) ? Number(object.operatorCount) : 0,
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
        if (message.managerList?.length) {
            obj.managerList = message.managerList.map((e) => manager_1.Manager.toJSON(e));
        }
        if (message.managerCount !== 0) {
            obj.managerCount = Math.round(message.managerCount);
        }
        if (message.operatorList?.length) {
            obj.operatorList = message.operatorList.map((e) => operator_1.Operator.toJSON(e));
        }
        if (message.operatorCount !== 0) {
            obj.operatorCount = Math.round(message.operatorCount);
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
        message.managerList = object.managerList?.map((e) => manager_1.Manager.fromPartial(e)) || [];
        message.managerCount = object.managerCount ?? 0;
        message.operatorList = object.operatorList?.map((e) => operator_1.Operator.fromPartial(e)) || [];
        message.operatorCount = object.operatorCount ?? 0;
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
