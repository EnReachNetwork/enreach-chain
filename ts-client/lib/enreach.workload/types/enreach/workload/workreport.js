"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EpochProcessData = exports.Workreport_ManagerScoreMapEntry = exports.Workreport = exports.ManagerNodeScoreMap_ManagerScoreMapEntry = exports.ManagerNodeScoreMap = exports.NodeScoreDB = exports.NodeScore = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const pagination_1 = require("../../cosmos/base/query/v1beta1/pagination");
exports.protobufPackage = "enreach.workload";
function createBaseNodeScore() {
    return { nodeID: "", score: 0 };
}
exports.NodeScore = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.nodeID !== "") {
            writer.uint32(10).string(message.nodeID);
        }
        if (message.score !== 0) {
            writer.uint32(16).uint64(message.score);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNodeScore();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.nodeID = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.score = longToNumber(reader.uint64());
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
            nodeID: isSet(object.nodeID) ? String(object.nodeID) : "",
            score: isSet(object.score) ? Number(object.score) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.nodeID !== "") {
            obj.nodeID = message.nodeID;
        }
        if (message.score !== 0) {
            obj.score = Math.round(message.score);
        }
        return obj;
    },
    create(base) {
        return exports.NodeScore.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseNodeScore();
        message.nodeID = object.nodeID ?? "";
        message.score = object.score ?? 0;
        return message;
    },
};
function createBaseNodeScoreDB() {
    return { score: 0, createAt: 0, updateAt: 0 };
}
exports.NodeScoreDB = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.score !== 0) {
            writer.uint32(8).uint64(message.score);
        }
        if (message.createAt !== 0) {
            writer.uint32(16).uint64(message.createAt);
        }
        if (message.updateAt !== 0) {
            writer.uint32(24).uint64(message.updateAt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNodeScoreDB();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.score = longToNumber(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.createAt = longToNumber(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.updateAt = longToNumber(reader.uint64());
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
            score: isSet(object.score) ? Number(object.score) : 0,
            createAt: isSet(object.createAt) ? Number(object.createAt) : 0,
            updateAt: isSet(object.updateAt) ? Number(object.updateAt) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.score !== 0) {
            obj.score = Math.round(message.score);
        }
        if (message.createAt !== 0) {
            obj.createAt = Math.round(message.createAt);
        }
        if (message.updateAt !== 0) {
            obj.updateAt = Math.round(message.updateAt);
        }
        return obj;
    },
    create(base) {
        return exports.NodeScoreDB.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseNodeScoreDB();
        message.score = object.score ?? 0;
        message.createAt = object.createAt ?? 0;
        message.updateAt = object.updateAt ?? 0;
        return message;
    },
};
function createBaseManagerNodeScoreMap() {
    return { managerScoreMap: {} };
}
exports.ManagerNodeScoreMap = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        Object.entries(message.managerScoreMap).forEach(([key, value]) => {
            exports.ManagerNodeScoreMap_ManagerScoreMapEntry.encode({ key: key, value }, writer.uint32(10).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseManagerNodeScoreMap();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    const entry1 = exports.ManagerNodeScoreMap_ManagerScoreMapEntry.decode(reader, reader.uint32());
                    if (entry1.value !== undefined) {
                        message.managerScoreMap[entry1.key] = entry1.value;
                    }
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
            managerScoreMap: isObject(object.managerScoreMap)
                ? Object.entries(object.managerScoreMap).reduce((acc, [key, value]) => {
                    acc[key] = exports.NodeScoreDB.fromJSON(value);
                    return acc;
                }, {})
                : {},
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.managerScoreMap) {
            const entries = Object.entries(message.managerScoreMap);
            if (entries.length > 0) {
                obj.managerScoreMap = {};
                entries.forEach(([k, v]) => {
                    obj.managerScoreMap[k] = exports.NodeScoreDB.toJSON(v);
                });
            }
        }
        return obj;
    },
    create(base) {
        return exports.ManagerNodeScoreMap.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseManagerNodeScoreMap();
        message.managerScoreMap = Object.entries(object.managerScoreMap ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = exports.NodeScoreDB.fromPartial(value);
            }
            return acc;
        }, {});
        return message;
    },
};
function createBaseManagerNodeScoreMap_ManagerScoreMapEntry() {
    return { key: "", value: undefined };
}
exports.ManagerNodeScoreMap_ManagerScoreMapEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            exports.NodeScoreDB.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseManagerNodeScoreMap_ManagerScoreMapEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.key = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.value = exports.NodeScoreDB.decode(reader, reader.uint32());
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
            key: isSet(object.key) ? String(object.key) : "",
            value: isSet(object.value) ? exports.NodeScoreDB.fromJSON(object.value) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.key !== "") {
            obj.key = message.key;
        }
        if (message.value !== undefined) {
            obj.value = exports.NodeScoreDB.toJSON(message.value);
        }
        return obj;
    },
    create(base) {
        return exports.ManagerNodeScoreMap_ManagerScoreMapEntry.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseManagerNodeScoreMap_ManagerScoreMapEntry();
        message.key = object.key ?? "";
        message.value = (object.value !== undefined && object.value !== null)
            ? exports.NodeScoreDB.fromPartial(object.value)
            : undefined;
        return message;
    },
};
function createBaseWorkreport() {
    return { epoch: 0, nodeID: "", managerScoreMap: {} };
}
exports.Workreport = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.epoch !== 0) {
            writer.uint32(8).uint64(message.epoch);
        }
        if (message.nodeID !== "") {
            writer.uint32(18).string(message.nodeID);
        }
        Object.entries(message.managerScoreMap).forEach(([key, value]) => {
            exports.Workreport_ManagerScoreMapEntry.encode({ key: key, value }, writer.uint32(26).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWorkreport();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.epoch = longToNumber(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.nodeID = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    const entry3 = exports.Workreport_ManagerScoreMapEntry.decode(reader, reader.uint32());
                    if (entry3.value !== undefined) {
                        message.managerScoreMap[entry3.key] = entry3.value;
                    }
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
            epoch: isSet(object.epoch) ? Number(object.epoch) : 0,
            nodeID: isSet(object.nodeID) ? String(object.nodeID) : "",
            managerScoreMap: isObject(object.managerScoreMap)
                ? Object.entries(object.managerScoreMap).reduce((acc, [key, value]) => {
                    acc[key] = exports.NodeScoreDB.fromJSON(value);
                    return acc;
                }, {})
                : {},
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.epoch !== 0) {
            obj.epoch = Math.round(message.epoch);
        }
        if (message.nodeID !== "") {
            obj.nodeID = message.nodeID;
        }
        if (message.managerScoreMap) {
            const entries = Object.entries(message.managerScoreMap);
            if (entries.length > 0) {
                obj.managerScoreMap = {};
                entries.forEach(([k, v]) => {
                    obj.managerScoreMap[k] = exports.NodeScoreDB.toJSON(v);
                });
            }
        }
        return obj;
    },
    create(base) {
        return exports.Workreport.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseWorkreport();
        message.epoch = object.epoch ?? 0;
        message.nodeID = object.nodeID ?? "";
        message.managerScoreMap = Object.entries(object.managerScoreMap ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = exports.NodeScoreDB.fromPartial(value);
            }
            return acc;
        }, {});
        return message;
    },
};
function createBaseWorkreport_ManagerScoreMapEntry() {
    return { key: "", value: undefined };
}
exports.Workreport_ManagerScoreMapEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            exports.NodeScoreDB.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWorkreport_ManagerScoreMapEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.key = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.value = exports.NodeScoreDB.decode(reader, reader.uint32());
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
            key: isSet(object.key) ? String(object.key) : "",
            value: isSet(object.value) ? exports.NodeScoreDB.fromJSON(object.value) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.key !== "") {
            obj.key = message.key;
        }
        if (message.value !== undefined) {
            obj.value = exports.NodeScoreDB.toJSON(message.value);
        }
        return obj;
    },
    create(base) {
        return exports.Workreport_ManagerScoreMapEntry.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseWorkreport_ManagerScoreMapEntry();
        message.key = object.key ?? "";
        message.value = (object.value !== undefined && object.value !== null)
            ? exports.NodeScoreDB.fromPartial(object.value)
            : undefined;
        return message;
    },
};
function createBaseEpochProcessData() {
    return {
        epoch: 0,
        totalNodesCount: 0,
        processedNodesCount: 0,
        startAt: 0,
        updateAt: 0,
        status: "",
        pagination: undefined,
    };
}
exports.EpochProcessData = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.epoch !== 0) {
            writer.uint32(8).uint64(message.epoch);
        }
        if (message.totalNodesCount !== 0) {
            writer.uint32(16).uint64(message.totalNodesCount);
        }
        if (message.processedNodesCount !== 0) {
            writer.uint32(24).uint64(message.processedNodesCount);
        }
        if (message.startAt !== 0) {
            writer.uint32(32).uint64(message.startAt);
        }
        if (message.updateAt !== 0) {
            writer.uint32(40).uint64(message.updateAt);
        }
        if (message.status !== "") {
            writer.uint32(50).string(message.status);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEpochProcessData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.epoch = longToNumber(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.totalNodesCount = longToNumber(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.processedNodesCount = longToNumber(reader.uint64());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.startAt = longToNumber(reader.uint64());
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.updateAt = longToNumber(reader.uint64());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.status = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            epoch: isSet(object.epoch) ? Number(object.epoch) : 0,
            totalNodesCount: isSet(object.totalNodesCount) ? Number(object.totalNodesCount) : 0,
            processedNodesCount: isSet(object.processedNodesCount) ? Number(object.processedNodesCount) : 0,
            startAt: isSet(object.startAt) ? Number(object.startAt) : 0,
            updateAt: isSet(object.updateAt) ? Number(object.updateAt) : 0,
            status: isSet(object.status) ? String(object.status) : "",
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.epoch !== 0) {
            obj.epoch = Math.round(message.epoch);
        }
        if (message.totalNodesCount !== 0) {
            obj.totalNodesCount = Math.round(message.totalNodesCount);
        }
        if (message.processedNodesCount !== 0) {
            obj.processedNodesCount = Math.round(message.processedNodesCount);
        }
        if (message.startAt !== 0) {
            obj.startAt = Math.round(message.startAt);
        }
        if (message.updateAt !== 0) {
            obj.updateAt = Math.round(message.updateAt);
        }
        if (message.status !== "") {
            obj.status = message.status;
        }
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageResponse.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.EpochProcessData.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseEpochProcessData();
        message.epoch = object.epoch ?? 0;
        message.totalNodesCount = object.totalNodesCount ?? 0;
        message.processedNodesCount = object.processedNodesCount ?? 0;
        message.startAt = object.startAt ?? 0;
        message.updateAt = object.updateAt ?? 0;
        message.status = object.status ?? "";
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
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
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
