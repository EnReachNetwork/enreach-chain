"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EpochInfo = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("../../google/protobuf/timestamp");
exports.protobufPackage = "enreach.workload";
function createBaseEpochInfo() {
    return { number: 0, startTime: undefined, startBlock: 0, endTime: undefined, endBlock: 0 };
}
exports.EpochInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.number !== 0) {
            writer.uint32(8).uint64(message.number);
        }
        if (message.startTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.startTime), writer.uint32(18).fork()).ldelim();
        }
        if (message.startBlock !== 0) {
            writer.uint32(24).uint64(message.startBlock);
        }
        if (message.endTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.endTime), writer.uint32(34).fork()).ldelim();
        }
        if (message.endBlock !== 0) {
            writer.uint32(40).uint64(message.endBlock);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEpochInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.number = longToNumber(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.startTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.startBlock = longToNumber(reader.uint64());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.endTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.endBlock = longToNumber(reader.uint64());
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
            number: isSet(object.number) ? Number(object.number) : 0,
            startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
            startBlock: isSet(object.startBlock) ? Number(object.startBlock) : 0,
            endTime: isSet(object.endTime) ? fromJsonTimestamp(object.endTime) : undefined,
            endBlock: isSet(object.endBlock) ? Number(object.endBlock) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.number !== 0) {
            obj.number = Math.round(message.number);
        }
        if (message.startTime !== undefined) {
            obj.startTime = message.startTime.toISOString();
        }
        if (message.startBlock !== 0) {
            obj.startBlock = Math.round(message.startBlock);
        }
        if (message.endTime !== undefined) {
            obj.endTime = message.endTime.toISOString();
        }
        if (message.endBlock !== 0) {
            obj.endBlock = Math.round(message.endBlock);
        }
        return obj;
    },
    create(base) {
        return exports.EpochInfo.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseEpochInfo();
        message.number = object.number ?? 0;
        message.startTime = object.startTime ?? undefined;
        message.startBlock = object.startBlock ?? 0;
        message.endTime = object.endTime ?? undefined;
        message.endBlock = object.endBlock ?? 0;
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
function toTimestamp(date) {
    const seconds = date.getTime() / 1000;
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = (t.seconds || 0) * 1000;
    millis += (t.nanos || 0) / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new Date(o);
    }
    else {
        return fromTimestamp(timestamp_1.Timestamp.fromJSON(o));
    }
}
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
