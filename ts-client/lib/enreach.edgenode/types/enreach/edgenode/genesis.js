"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const node_1 = require("./node");
const params_1 = require("./params");
const superior_1 = require("./superior");
const user_1 = require("./user");
exports.protobufPackage = "enreach.edgenode";
function createBaseGenesisState() {
    return { params: undefined, userList: [], userCount: 0, nodeList: [], nodeCount: 0, superior: undefined };
}
exports.GenesisState = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.userList) {
            user_1.User.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.userCount !== 0) {
            writer.uint32(24).uint64(message.userCount);
        }
        for (const v of message.nodeList) {
            node_1.Node.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.nodeCount !== 0) {
            writer.uint32(40).uint64(message.nodeCount);
        }
        if (message.superior !== undefined) {
            superior_1.Superior.encode(message.superior, writer.uint32(50).fork()).ldelim();
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
                    message.userList.push(user_1.User.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.userCount = longToNumber(reader.uint64());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.nodeList.push(node_1.Node.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.nodeCount = longToNumber(reader.uint64());
                    continue;
                case 6:
                    if (tag !== 50) {
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
            params: isSet(object.params) ? params_1.Params.fromJSON(object.params) : undefined,
            userList: Array.isArray(object?.userList) ? object.userList.map((e) => user_1.User.fromJSON(e)) : [],
            userCount: isSet(object.userCount) ? Number(object.userCount) : 0,
            nodeList: Array.isArray(object?.nodeList) ? object.nodeList.map((e) => node_1.Node.fromJSON(e)) : [],
            nodeCount: isSet(object.nodeCount) ? Number(object.nodeCount) : 0,
            superior: isSet(object.superior) ? superior_1.Superior.fromJSON(object.superior) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.params !== undefined) {
            obj.params = params_1.Params.toJSON(message.params);
        }
        if (message.userList?.length) {
            obj.userList = message.userList.map((e) => user_1.User.toJSON(e));
        }
        if (message.userCount !== 0) {
            obj.userCount = Math.round(message.userCount);
        }
        if (message.nodeList?.length) {
            obj.nodeList = message.nodeList.map((e) => node_1.Node.toJSON(e));
        }
        if (message.nodeCount !== 0) {
            obj.nodeCount = Math.round(message.nodeCount);
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
        message.params = (object.params !== undefined && object.params !== null)
            ? params_1.Params.fromPartial(object.params)
            : undefined;
        message.userList = object.userList?.map((e) => user_1.User.fromPartial(e)) || [];
        message.userCount = object.userCount ?? 0;
        message.nodeList = object.nodeList?.map((e) => node_1.Node.fromPartial(e)) || [];
        message.nodeCount = object.nodeCount ?? 0;
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
