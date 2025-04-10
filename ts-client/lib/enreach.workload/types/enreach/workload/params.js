"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params_DataEntry = exports.Params = exports.protobufPackage = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "enreach.workload";
function createBaseParams() {
    return { data: {} };
}
exports.Params = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        Object.entries(message.data).forEach(([key, value]) => {
            exports.Params_DataEntry.encode({ key: key, value }, writer.uint32(10).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    const entry1 = exports.Params_DataEntry.decode(reader, reader.uint32());
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
                    acc[key] = String(value);
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
                    obj.data[k] = v;
                });
            }
        }
        return obj;
    },
    create(base) {
        return exports.Params.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.data = Object.entries(object.data ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        return message;
    },
};
function createBaseParams_DataEntry() {
    return { key: "", value: "" };
}
exports.Params_DataEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams_DataEntry();
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
                    message.value = reader.string();
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
        return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.key !== "") {
            obj.key = message.key;
        }
        if (message.value !== "") {
            obj.value = message.value;
        }
        return obj;
    },
    create(base) {
        return exports.Params_DataEntry.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseParams_DataEntry();
        message.key = object.key ?? "";
        message.value = object.value ?? "";
        return message;
    },
};
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
