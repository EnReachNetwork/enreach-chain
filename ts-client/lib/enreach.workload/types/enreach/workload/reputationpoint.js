"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EraProcessData = exports.ReputationPoint = exports.ReputationDeltaPoint = exports.ReputationPointChangeData_DataEntry = exports.ReputationPointChangeData = exports.ReputationPointChangeRawDataMapDB_DataEntry = exports.ReputationPointChangeRawDataMapDB = exports.ReputationPointChangeRawDataDB = exports.ReputationPointChangeRawData = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const pagination_1 = require("../../cosmos/base/query/v1beta1/pagination");
exports.protobufPackage = "enreach.workload";
function createBaseReputationPointChangeRawData() {
    return { nodeID: "", deltaPoint: 0 };
}
exports.ReputationPointChangeRawData = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.nodeID !== "") {
            writer.uint32(10).string(message.nodeID);
        }
        if (message.deltaPoint !== 0) {
            writer.uint32(16).int64(message.deltaPoint);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseReputationPointChangeRawData();
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
                    message.deltaPoint = longToNumber(reader.int64());
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
            deltaPoint: isSet(object.deltaPoint) ? Number(object.deltaPoint) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.nodeID !== "") {
            obj.nodeID = message.nodeID;
        }
        if (message.deltaPoint !== 0) {
            obj.deltaPoint = Math.round(message.deltaPoint);
        }
        return obj;
    },
    create(base) {
        return exports.ReputationPointChangeRawData.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseReputationPointChangeRawData();
        message.nodeID = object.nodeID ?? "";
        message.deltaPoint = object.deltaPoint ?? 0;
        return message;
    },
};
function createBaseReputationPointChangeRawDataDB() {
    return { deltaPoint: 0, createAt: 0, updateAt: 0 };
}
exports.ReputationPointChangeRawDataDB = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.deltaPoint !== 0) {
            writer.uint32(8).int64(message.deltaPoint);
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
        const message = createBaseReputationPointChangeRawDataDB();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.deltaPoint = longToNumber(reader.int64());
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
            deltaPoint: isSet(object.deltaPoint) ? Number(object.deltaPoint) : 0,
            createAt: isSet(object.createAt) ? Number(object.createAt) : 0,
            updateAt: isSet(object.updateAt) ? Number(object.updateAt) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.deltaPoint !== 0) {
            obj.deltaPoint = Math.round(message.deltaPoint);
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
        return exports.ReputationPointChangeRawDataDB.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseReputationPointChangeRawDataDB();
        message.deltaPoint = object.deltaPoint ?? 0;
        message.createAt = object.createAt ?? 0;
        message.updateAt = object.updateAt ?? 0;
        return message;
    },
};
function createBaseReputationPointChangeRawDataMapDB() {
    return { data: {} };
}
exports.ReputationPointChangeRawDataMapDB = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        Object.entries(message.data).forEach(([key, value]) => {
            exports.ReputationPointChangeRawDataMapDB_DataEntry.encode({ key: key, value }, writer.uint32(10).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseReputationPointChangeRawDataMapDB();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    const entry1 = exports.ReputationPointChangeRawDataMapDB_DataEntry.decode(reader, reader.uint32());
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
                    acc[key] = exports.ReputationPointChangeRawDataDB.fromJSON(value);
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
                    obj.data[k] = exports.ReputationPointChangeRawDataDB.toJSON(v);
                });
            }
        }
        return obj;
    },
    create(base) {
        return exports.ReputationPointChangeRawDataMapDB.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseReputationPointChangeRawDataMapDB();
        message.data = Object.entries(object.data ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = exports.ReputationPointChangeRawDataDB.fromPartial(value);
            }
            return acc;
        }, {});
        return message;
    },
};
function createBaseReputationPointChangeRawDataMapDB_DataEntry() {
    return { key: "", value: undefined };
}
exports.ReputationPointChangeRawDataMapDB_DataEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            exports.ReputationPointChangeRawDataDB.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseReputationPointChangeRawDataMapDB_DataEntry();
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
                    message.value = exports.ReputationPointChangeRawDataDB.decode(reader, reader.uint32());
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
            value: isSet(object.value) ? exports.ReputationPointChangeRawDataDB.fromJSON(object.value) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.key !== "") {
            obj.key = message.key;
        }
        if (message.value !== undefined) {
            obj.value = exports.ReputationPointChangeRawDataDB.toJSON(message.value);
        }
        return obj;
    },
    create(base) {
        return exports.ReputationPointChangeRawDataMapDB_DataEntry.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseReputationPointChangeRawDataMapDB_DataEntry();
        message.key = object.key ?? "";
        message.value = (object.value !== undefined && object.value !== null)
            ? exports.ReputationPointChangeRawDataDB.fromPartial(object.value)
            : undefined;
        return message;
    },
};
function createBaseReputationPointChangeData() {
    return { era: 0, nodeID: "", data: {} };
}
exports.ReputationPointChangeData = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.era !== 0) {
            writer.uint32(8).uint64(message.era);
        }
        if (message.nodeID !== "") {
            writer.uint32(18).string(message.nodeID);
        }
        Object.entries(message.data).forEach(([key, value]) => {
            exports.ReputationPointChangeData_DataEntry.encode({ key: key, value }, writer.uint32(26).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseReputationPointChangeData();
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
                    const entry3 = exports.ReputationPointChangeData_DataEntry.decode(reader, reader.uint32());
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
                    acc[key] = exports.ReputationPointChangeRawDataDB.fromJSON(value);
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
                    obj.data[k] = exports.ReputationPointChangeRawDataDB.toJSON(v);
                });
            }
        }
        return obj;
    },
    create(base) {
        return exports.ReputationPointChangeData.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseReputationPointChangeData();
        message.era = object.era ?? 0;
        message.nodeID = object.nodeID ?? "";
        message.data = Object.entries(object.data ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = exports.ReputationPointChangeRawDataDB.fromPartial(value);
            }
            return acc;
        }, {});
        return message;
    },
};
function createBaseReputationPointChangeData_DataEntry() {
    return { key: "", value: undefined };
}
exports.ReputationPointChangeData_DataEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            exports.ReputationPointChangeRawDataDB.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseReputationPointChangeData_DataEntry();
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
                    message.value = exports.ReputationPointChangeRawDataDB.decode(reader, reader.uint32());
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
            value: isSet(object.value) ? exports.ReputationPointChangeRawDataDB.fromJSON(object.value) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.key !== "") {
            obj.key = message.key;
        }
        if (message.value !== undefined) {
            obj.value = exports.ReputationPointChangeRawDataDB.toJSON(message.value);
        }
        return obj;
    },
    create(base) {
        return exports.ReputationPointChangeData_DataEntry.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseReputationPointChangeData_DataEntry();
        message.key = object.key ?? "";
        message.value = (object.value !== undefined && object.value !== null)
            ? exports.ReputationPointChangeRawDataDB.fromPartial(object.value)
            : undefined;
        return message;
    },
};
function createBaseReputationDeltaPoint() {
    return { era: 0, nodeID: "", deltaPoint: 0, createAt: 0 };
}
exports.ReputationDeltaPoint = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.era !== 0) {
            writer.uint32(8).uint64(message.era);
        }
        if (message.nodeID !== "") {
            writer.uint32(18).string(message.nodeID);
        }
        if (message.deltaPoint !== 0) {
            writer.uint32(24).int64(message.deltaPoint);
        }
        if (message.createAt !== 0) {
            writer.uint32(32).uint64(message.createAt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseReputationDeltaPoint();
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
                    if (tag !== 24) {
                        break;
                    }
                    message.deltaPoint = longToNumber(reader.int64());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.createAt = longToNumber(reader.uint64());
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
            deltaPoint: isSet(object.deltaPoint) ? Number(object.deltaPoint) : 0,
            createAt: isSet(object.createAt) ? Number(object.createAt) : 0,
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
        if (message.deltaPoint !== 0) {
            obj.deltaPoint = Math.round(message.deltaPoint);
        }
        if (message.createAt !== 0) {
            obj.createAt = Math.round(message.createAt);
        }
        return obj;
    },
    create(base) {
        return exports.ReputationDeltaPoint.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseReputationDeltaPoint();
        message.era = object.era ?? 0;
        message.nodeID = object.nodeID ?? "";
        message.deltaPoint = object.deltaPoint ?? 0;
        message.createAt = object.createAt ?? 0;
        return message;
    },
};
function createBaseReputationPoint() {
    return { nodeID: "", point: 0, createAt: 0, updateAt: 0 };
}
exports.ReputationPoint = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.nodeID !== "") {
            writer.uint32(10).string(message.nodeID);
        }
        if (message.point !== 0) {
            writer.uint32(16).int64(message.point);
        }
        if (message.createAt !== 0) {
            writer.uint32(24).uint64(message.createAt);
        }
        if (message.updateAt !== 0) {
            writer.uint32(32).uint64(message.updateAt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseReputationPoint();
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
                    message.point = longToNumber(reader.int64());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.createAt = longToNumber(reader.uint64());
                    continue;
                case 4:
                    if (tag !== 32) {
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
            nodeID: isSet(object.nodeID) ? String(object.nodeID) : "",
            point: isSet(object.point) ? Number(object.point) : 0,
            createAt: isSet(object.createAt) ? Number(object.createAt) : 0,
            updateAt: isSet(object.updateAt) ? Number(object.updateAt) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.nodeID !== "") {
            obj.nodeID = message.nodeID;
        }
        if (message.point !== 0) {
            obj.point = Math.round(message.point);
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
        return exports.ReputationPoint.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseReputationPoint();
        message.nodeID = object.nodeID ?? "";
        message.point = object.point ?? 0;
        message.createAt = object.createAt ?? 0;
        message.updateAt = object.updateAt ?? 0;
        return message;
    },
};
function createBaseEraProcessData() {
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
exports.EraProcessData = {
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
        const message = createBaseEraProcessData();
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
        return exports.EraProcessData.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseEraProcessData();
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
