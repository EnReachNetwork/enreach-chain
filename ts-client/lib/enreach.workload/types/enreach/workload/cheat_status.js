"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EraCheatStatusProcessData = exports.CheatStatusCRData_DataEntry = exports.CheatStatusCRData = exports.CheatStatusCRMapDB_DataEntry = exports.CheatStatusCRMapDB = exports.CheatStatusCRDB = exports.CheatStatusCR = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const pagination_1 = require("../../cosmos/base/query/v1beta1/pagination");
exports.protobufPackage = "enreach.workload";
function createBaseCheatStatusCR() {
    return { nodeID: "", cheatStatus: "" };
}
exports.CheatStatusCR = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.nodeID !== "") {
            writer.uint32(10).string(message.nodeID);
        }
        if (message.cheatStatus !== "") {
            writer.uint32(18).string(message.cheatStatus);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCheatStatusCR();
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
                    if (tag !== 18) {
                        break;
                    }
                    message.cheatStatus = reader.string();
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
            cheatStatus: isSet(object.cheatStatus) ? String(object.cheatStatus) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.nodeID !== "") {
            obj.nodeID = message.nodeID;
        }
        if (message.cheatStatus !== "") {
            obj.cheatStatus = message.cheatStatus;
        }
        return obj;
    },
    create(base) {
        return exports.CheatStatusCR.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCheatStatusCR();
        message.nodeID = object.nodeID ?? "";
        message.cheatStatus = object.cheatStatus ?? "";
        return message;
    },
};
function createBaseCheatStatusCRDB() {
    return { cheatStatus: "", createAt: 0, updateAt: 0 };
}
exports.CheatStatusCRDB = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.cheatStatus !== "") {
            writer.uint32(10).string(message.cheatStatus);
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
        const message = createBaseCheatStatusCRDB();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.cheatStatus = reader.string();
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
            cheatStatus: isSet(object.cheatStatus) ? String(object.cheatStatus) : "",
            createAt: isSet(object.createAt) ? Number(object.createAt) : 0,
            updateAt: isSet(object.updateAt) ? Number(object.updateAt) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.cheatStatus !== "") {
            obj.cheatStatus = message.cheatStatus;
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
        return exports.CheatStatusCRDB.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCheatStatusCRDB();
        message.cheatStatus = object.cheatStatus ?? "";
        message.createAt = object.createAt ?? 0;
        message.updateAt = object.updateAt ?? 0;
        return message;
    },
};
function createBaseCheatStatusCRMapDB() {
    return { data: {} };
}
exports.CheatStatusCRMapDB = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        Object.entries(message.data).forEach(([key, value]) => {
            exports.CheatStatusCRMapDB_DataEntry.encode({ key: key, value }, writer.uint32(10).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCheatStatusCRMapDB();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    const entry1 = exports.CheatStatusCRMapDB_DataEntry.decode(reader, reader.uint32());
                    if (entry1.value !== undefined) {
                        message.data[entry1.key] = entry1.value;
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
            data: isObject(object.data)
                ? Object.entries(object.data).reduce((acc, [key, value]) => {
                    acc[key] = exports.CheatStatusCRDB.fromJSON(value);
                    return acc;
                }, {})
                : {},
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.data) {
            const entries = Object.entries(message.data);
            if (entries.length > 0) {
                obj.data = {};
                entries.forEach(([k, v]) => {
                    obj.data[k] = exports.CheatStatusCRDB.toJSON(v);
                });
            }
        }
        return obj;
    },
    create(base) {
        return exports.CheatStatusCRMapDB.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCheatStatusCRMapDB();
        message.data = Object.entries(object.data ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = exports.CheatStatusCRDB.fromPartial(value);
            }
            return acc;
        }, {});
        return message;
    },
};
function createBaseCheatStatusCRMapDB_DataEntry() {
    return { key: "", value: undefined };
}
exports.CheatStatusCRMapDB_DataEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            exports.CheatStatusCRDB.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCheatStatusCRMapDB_DataEntry();
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
                    message.value = exports.CheatStatusCRDB.decode(reader, reader.uint32());
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
            value: isSet(object.value) ? exports.CheatStatusCRDB.fromJSON(object.value) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.key !== "") {
            obj.key = message.key;
        }
        if (message.value !== undefined) {
            obj.value = exports.CheatStatusCRDB.toJSON(message.value);
        }
        return obj;
    },
    create(base) {
        return exports.CheatStatusCRMapDB_DataEntry.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCheatStatusCRMapDB_DataEntry();
        message.key = object.key ?? "";
        message.value = (object.value !== undefined && object.value !== null)
            ? exports.CheatStatusCRDB.fromPartial(object.value)
            : undefined;
        return message;
    },
};
function createBaseCheatStatusCRData() {
    return { era: 0, nodeID: "", data: {} };
}
exports.CheatStatusCRData = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.era !== 0) {
            writer.uint32(8).uint64(message.era);
        }
        if (message.nodeID !== "") {
            writer.uint32(18).string(message.nodeID);
        }
        Object.entries(message.data).forEach(([key, value]) => {
            exports.CheatStatusCRData_DataEntry.encode({ key: key, value }, writer.uint32(26).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCheatStatusCRData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.era = longToNumber(reader.uint64());
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
                    const entry3 = exports.CheatStatusCRData_DataEntry.decode(reader, reader.uint32());
                    if (entry3.value !== undefined) {
                        message.data[entry3.key] = entry3.value;
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
            era: isSet(object.era) ? Number(object.era) : 0,
            nodeID: isSet(object.nodeID) ? String(object.nodeID) : "",
            data: isObject(object.data)
                ? Object.entries(object.data).reduce((acc, [key, value]) => {
                    acc[key] = exports.CheatStatusCRDB.fromJSON(value);
                    return acc;
                }, {})
                : {},
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.era !== 0) {
            obj.era = Math.round(message.era);
        }
        if (message.nodeID !== "") {
            obj.nodeID = message.nodeID;
        }
        if (message.data) {
            const entries = Object.entries(message.data);
            if (entries.length > 0) {
                obj.data = {};
                entries.forEach(([k, v]) => {
                    obj.data[k] = exports.CheatStatusCRDB.toJSON(v);
                });
            }
        }
        return obj;
    },
    create(base) {
        return exports.CheatStatusCRData.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCheatStatusCRData();
        message.era = object.era ?? 0;
        message.nodeID = object.nodeID ?? "";
        message.data = Object.entries(object.data ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = exports.CheatStatusCRDB.fromPartial(value);
            }
            return acc;
        }, {});
        return message;
    },
};
function createBaseCheatStatusCRData_DataEntry() {
    return { key: "", value: undefined };
}
exports.CheatStatusCRData_DataEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            exports.CheatStatusCRDB.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCheatStatusCRData_DataEntry();
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
                    message.value = exports.CheatStatusCRDB.decode(reader, reader.uint32());
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
            value: isSet(object.value) ? exports.CheatStatusCRDB.fromJSON(object.value) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.key !== "") {
            obj.key = message.key;
        }
        if (message.value !== undefined) {
            obj.value = exports.CheatStatusCRDB.toJSON(message.value);
        }
        return obj;
    },
    create(base) {
        return exports.CheatStatusCRData_DataEntry.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCheatStatusCRData_DataEntry();
        message.key = object.key ?? "";
        message.value = (object.value !== undefined && object.value !== null)
            ? exports.CheatStatusCRDB.fromPartial(object.value)
            : undefined;
        return message;
    },
};
function createBaseEraCheatStatusProcessData() {
    return {
        era: 0,
        totalNodesCount: 0,
        processedNodesCount: 0,
        startAt: 0,
        updateAt: 0,
        status: "",
        pagination: undefined,
    };
}
exports.EraCheatStatusProcessData = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.era !== 0) {
            writer.uint32(8).uint64(message.era);
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
        const message = createBaseEraCheatStatusProcessData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.era = longToNumber(reader.uint64());
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
            era: isSet(object.era) ? Number(object.era) : 0,
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
        if (message.era !== 0) {
            obj.era = Math.round(message.era);
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
        return exports.EraCheatStatusProcessData.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseEraCheatStatusProcessData();
        message.era = object.era ?? 0;
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
