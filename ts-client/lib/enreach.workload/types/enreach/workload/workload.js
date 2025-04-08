"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagerCSWorkload = exports.ManagerRPWorkload = exports.ManagerWRWorkload = exports.NodeWorkload = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "enreach.workload";
function createBaseNodeWorkload() {
    return { epoch: 0, nodeID: "", score: 0, createAt: 0 };
}
exports.NodeWorkload = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.epoch !== 0) {
            writer.uint32(8).uint64(message.epoch);
        }
        if (message.nodeID !== "") {
            writer.uint32(18).string(message.nodeID);
        }
        if (message.score !== 0) {
            writer.uint32(24).uint64(message.score);
        }
        if (message.createAt !== 0) {
            writer.uint32(32).uint64(message.createAt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNodeWorkload();
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
                    if (tag !== 24) {
                        break;
                    }
                    message.score = longToNumber(reader.uint64());
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
            epoch: isSet(object.epoch) ? Number(object.epoch) : 0,
            nodeID: isSet(object.nodeID) ? String(object.nodeID) : "",
            score: isSet(object.score) ? Number(object.score) : 0,
            createAt: isSet(object.createAt) ? Number(object.createAt) : 0,
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
        if (message.score !== 0) {
            obj.score = Math.round(message.score);
        }
        if (message.createAt !== 0) {
            obj.createAt = Math.round(message.createAt);
        }
        return obj;
    },
    create(base) {
        return exports.NodeWorkload.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseNodeWorkload();
        message.epoch = object.epoch ?? 0;
        message.nodeID = object.nodeID ?? "";
        message.score = object.score ?? 0;
        message.createAt = object.createAt ?? 0;
        return message;
    },
};
function createBaseManagerWRWorkload() {
    return { epoch: 0, managerAccount: "", reportedNodesCount: 0, score: 0, createAt: 0, updateAt: 0 };
}
exports.ManagerWRWorkload = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.epoch !== 0) {
            writer.uint32(8).uint64(message.epoch);
        }
        if (message.managerAccount !== "") {
            writer.uint32(18).string(message.managerAccount);
        }
        if (message.reportedNodesCount !== 0) {
            writer.uint32(24).uint64(message.reportedNodesCount);
        }
        if (message.score !== 0) {
            writer.uint32(32).uint64(message.score);
        }
        if (message.createAt !== 0) {
            writer.uint32(40).uint64(message.createAt);
        }
        if (message.updateAt !== 0) {
            writer.uint32(48).uint64(message.updateAt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseManagerWRWorkload();
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
                    message.managerAccount = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.reportedNodesCount = longToNumber(reader.uint64());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.score = longToNumber(reader.uint64());
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.createAt = longToNumber(reader.uint64());
                    continue;
                case 6:
                    if (tag !== 48) {
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
            epoch: isSet(object.epoch) ? Number(object.epoch) : 0,
            managerAccount: isSet(object.managerAccount) ? String(object.managerAccount) : "",
            reportedNodesCount: isSet(object.reportedNodesCount) ? Number(object.reportedNodesCount) : 0,
            score: isSet(object.score) ? Number(object.score) : 0,
            createAt: isSet(object.createAt) ? Number(object.createAt) : 0,
            updateAt: isSet(object.updateAt) ? Number(object.updateAt) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.epoch !== 0) {
            obj.epoch = Math.round(message.epoch);
        }
        if (message.managerAccount !== "") {
            obj.managerAccount = message.managerAccount;
        }
        if (message.reportedNodesCount !== 0) {
            obj.reportedNodesCount = Math.round(message.reportedNodesCount);
        }
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
        return exports.ManagerWRWorkload.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseManagerWRWorkload();
        message.epoch = object.epoch ?? 0;
        message.managerAccount = object.managerAccount ?? "";
        message.reportedNodesCount = object.reportedNodesCount ?? 0;
        message.score = object.score ?? 0;
        message.createAt = object.createAt ?? 0;
        message.updateAt = object.updateAt ?? 0;
        return message;
    },
};
function createBaseManagerRPWorkload() {
    return { era: 0, managerAccount: "", reportedNodesCount: 0, score: 0, createAt: 0, updateAt: 0 };
}
exports.ManagerRPWorkload = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.era !== 0) {
            writer.uint32(8).uint64(message.era);
        }
        if (message.managerAccount !== "") {
            writer.uint32(18).string(message.managerAccount);
        }
        if (message.reportedNodesCount !== 0) {
            writer.uint32(24).uint64(message.reportedNodesCount);
        }
        if (message.score !== 0) {
            writer.uint32(32).uint64(message.score);
        }
        if (message.createAt !== 0) {
            writer.uint32(40).uint64(message.createAt);
        }
        if (message.updateAt !== 0) {
            writer.uint32(48).uint64(message.updateAt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseManagerRPWorkload();
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
                    message.managerAccount = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.reportedNodesCount = longToNumber(reader.uint64());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.score = longToNumber(reader.uint64());
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.createAt = longToNumber(reader.uint64());
                    continue;
                case 6:
                    if (tag !== 48) {
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
            era: isSet(object.era) ? Number(object.era) : 0,
            managerAccount: isSet(object.managerAccount) ? String(object.managerAccount) : "",
            reportedNodesCount: isSet(object.reportedNodesCount) ? Number(object.reportedNodesCount) : 0,
            score: isSet(object.score) ? Number(object.score) : 0,
            createAt: isSet(object.createAt) ? Number(object.createAt) : 0,
            updateAt: isSet(object.updateAt) ? Number(object.updateAt) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.era !== 0) {
            obj.era = Math.round(message.era);
        }
        if (message.managerAccount !== "") {
            obj.managerAccount = message.managerAccount;
        }
        if (message.reportedNodesCount !== 0) {
            obj.reportedNodesCount = Math.round(message.reportedNodesCount);
        }
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
        return exports.ManagerRPWorkload.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseManagerRPWorkload();
        message.era = object.era ?? 0;
        message.managerAccount = object.managerAccount ?? "";
        message.reportedNodesCount = object.reportedNodesCount ?? 0;
        message.score = object.score ?? 0;
        message.createAt = object.createAt ?? 0;
        message.updateAt = object.updateAt ?? 0;
        return message;
    },
};
function createBaseManagerCSWorkload() {
    return { era: 0, managerAccount: "", reportedNodesCount: 0, score: 0, createAt: 0, updateAt: 0 };
}
exports.ManagerCSWorkload = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.era !== 0) {
            writer.uint32(8).uint64(message.era);
        }
        if (message.managerAccount !== "") {
            writer.uint32(18).string(message.managerAccount);
        }
        if (message.reportedNodesCount !== 0) {
            writer.uint32(24).uint64(message.reportedNodesCount);
        }
        if (message.score !== 0) {
            writer.uint32(32).uint64(message.score);
        }
        if (message.createAt !== 0) {
            writer.uint32(40).uint64(message.createAt);
        }
        if (message.updateAt !== 0) {
            writer.uint32(48).uint64(message.updateAt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseManagerCSWorkload();
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
                    message.managerAccount = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.reportedNodesCount = longToNumber(reader.uint64());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.score = longToNumber(reader.uint64());
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.createAt = longToNumber(reader.uint64());
                    continue;
                case 6:
                    if (tag !== 48) {
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
            era: isSet(object.era) ? Number(object.era) : 0,
            managerAccount: isSet(object.managerAccount) ? String(object.managerAccount) : "",
            reportedNodesCount: isSet(object.reportedNodesCount) ? Number(object.reportedNodesCount) : 0,
            score: isSet(object.score) ? Number(object.score) : 0,
            createAt: isSet(object.createAt) ? Number(object.createAt) : 0,
            updateAt: isSet(object.updateAt) ? Number(object.updateAt) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.era !== 0) {
            obj.era = Math.round(message.era);
        }
        if (message.managerAccount !== "") {
            obj.managerAccount = message.managerAccount;
        }
        if (message.reportedNodesCount !== 0) {
            obj.reportedNodesCount = Math.round(message.reportedNodesCount);
        }
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
        return exports.ManagerCSWorkload.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseManagerCSWorkload();
        message.era = object.era ?? 0;
        message.managerAccount = object.managerAccount ?? "";
        message.reportedNodesCount = object.reportedNodesCount ?? 0;
        message.score = object.score ?? 0;
        message.createAt = object.createAt ?? 0;
        message.updateAt = object.updateAt ?? 0;
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
