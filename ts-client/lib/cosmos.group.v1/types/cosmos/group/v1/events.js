"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventProposalPruned = exports.EventLeaveGroup = exports.EventExec = exports.EventVote = exports.EventWithdrawProposal = exports.EventSubmitProposal = exports.EventUpdateGroupPolicy = exports.EventCreateGroupPolicy = exports.EventUpdateGroup = exports.EventCreateGroup = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const types_1 = require("./types");
exports.protobufPackage = "cosmos.group.v1";
function createBaseEventCreateGroup() {
    return { groupId: 0 };
}
exports.EventCreateGroup = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.groupId !== 0) {
            writer.uint32(8).uint64(message.groupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventCreateGroup();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.groupId = longToNumber(reader.uint64());
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
        return { groupId: isSet(object.groupId) ? Number(object.groupId) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.groupId !== 0) {
            obj.groupId = Math.round(message.groupId);
        }
        return obj;
    },
    create(base) {
        return exports.EventCreateGroup.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseEventCreateGroup();
        message.groupId = object.groupId ?? 0;
        return message;
    },
};
function createBaseEventUpdateGroup() {
    return { groupId: 0 };
}
exports.EventUpdateGroup = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.groupId !== 0) {
            writer.uint32(8).uint64(message.groupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventUpdateGroup();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.groupId = longToNumber(reader.uint64());
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
        return { groupId: isSet(object.groupId) ? Number(object.groupId) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.groupId !== 0) {
            obj.groupId = Math.round(message.groupId);
        }
        return obj;
    },
    create(base) {
        return exports.EventUpdateGroup.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseEventUpdateGroup();
        message.groupId = object.groupId ?? 0;
        return message;
    },
};
function createBaseEventCreateGroupPolicy() {
    return { address: "" };
}
exports.EventCreateGroupPolicy = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventCreateGroupPolicy();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.address = reader.string();
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
        return { address: isSet(object.address) ? String(object.address) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.address !== "") {
            obj.address = message.address;
        }
        return obj;
    },
    create(base) {
        return exports.EventCreateGroupPolicy.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseEventCreateGroupPolicy();
        message.address = object.address ?? "";
        return message;
    },
};
function createBaseEventUpdateGroupPolicy() {
    return { address: "" };
}
exports.EventUpdateGroupPolicy = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventUpdateGroupPolicy();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.address = reader.string();
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
        return { address: isSet(object.address) ? String(object.address) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.address !== "") {
            obj.address = message.address;
        }
        return obj;
    },
    create(base) {
        return exports.EventUpdateGroupPolicy.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseEventUpdateGroupPolicy();
        message.address = object.address ?? "";
        return message;
    },
};
function createBaseEventSubmitProposal() {
    return { proposalId: 0 };
}
exports.EventSubmitProposal = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.proposalId !== 0) {
            writer.uint32(8).uint64(message.proposalId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventSubmitProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.proposalId = longToNumber(reader.uint64());
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
        return { proposalId: isSet(object.proposalId) ? Number(object.proposalId) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.proposalId !== 0) {
            obj.proposalId = Math.round(message.proposalId);
        }
        return obj;
    },
    create(base) {
        return exports.EventSubmitProposal.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseEventSubmitProposal();
        message.proposalId = object.proposalId ?? 0;
        return message;
    },
};
function createBaseEventWithdrawProposal() {
    return { proposalId: 0 };
}
exports.EventWithdrawProposal = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.proposalId !== 0) {
            writer.uint32(8).uint64(message.proposalId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventWithdrawProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.proposalId = longToNumber(reader.uint64());
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
        return { proposalId: isSet(object.proposalId) ? Number(object.proposalId) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.proposalId !== 0) {
            obj.proposalId = Math.round(message.proposalId);
        }
        return obj;
    },
    create(base) {
        return exports.EventWithdrawProposal.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseEventWithdrawProposal();
        message.proposalId = object.proposalId ?? 0;
        return message;
    },
};
function createBaseEventVote() {
    return { proposalId: 0 };
}
exports.EventVote = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.proposalId !== 0) {
            writer.uint32(8).uint64(message.proposalId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventVote();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.proposalId = longToNumber(reader.uint64());
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
        return { proposalId: isSet(object.proposalId) ? Number(object.proposalId) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.proposalId !== 0) {
            obj.proposalId = Math.round(message.proposalId);
        }
        return obj;
    },
    create(base) {
        return exports.EventVote.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseEventVote();
        message.proposalId = object.proposalId ?? 0;
        return message;
    },
};
function createBaseEventExec() {
    return { proposalId: 0, result: 0, logs: "" };
}
exports.EventExec = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.proposalId !== 0) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.result !== 0) {
            writer.uint32(16).int32(message.result);
        }
        if (message.logs !== "") {
            writer.uint32(26).string(message.logs);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventExec();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.proposalId = longToNumber(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.result = reader.int32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.logs = reader.string();
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
            proposalId: isSet(object.proposalId) ? Number(object.proposalId) : 0,
            result: isSet(object.result) ? (0, types_1.proposalExecutorResultFromJSON)(object.result) : 0,
            logs: isSet(object.logs) ? String(object.logs) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.proposalId !== 0) {
            obj.proposalId = Math.round(message.proposalId);
        }
        if (message.result !== 0) {
            obj.result = (0, types_1.proposalExecutorResultToJSON)(message.result);
        }
        if (message.logs !== "") {
            obj.logs = message.logs;
        }
        return obj;
    },
    create(base) {
        return exports.EventExec.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseEventExec();
        message.proposalId = object.proposalId ?? 0;
        message.result = object.result ?? 0;
        message.logs = object.logs ?? "";
        return message;
    },
};
function createBaseEventLeaveGroup() {
    return { groupId: 0, address: "" };
}
exports.EventLeaveGroup = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.groupId !== 0) {
            writer.uint32(8).uint64(message.groupId);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventLeaveGroup();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.groupId = longToNumber(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.address = reader.string();
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
            groupId: isSet(object.groupId) ? Number(object.groupId) : 0,
            address: isSet(object.address) ? String(object.address) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.groupId !== 0) {
            obj.groupId = Math.round(message.groupId);
        }
        if (message.address !== "") {
            obj.address = message.address;
        }
        return obj;
    },
    create(base) {
        return exports.EventLeaveGroup.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseEventLeaveGroup();
        message.groupId = object.groupId ?? 0;
        message.address = object.address ?? "";
        return message;
    },
};
function createBaseEventProposalPruned() {
    return { proposalId: 0, status: 0, tallyResult: undefined };
}
exports.EventProposalPruned = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.proposalId !== 0) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.status !== 0) {
            writer.uint32(16).int32(message.status);
        }
        if (message.tallyResult !== undefined) {
            types_1.TallyResult.encode(message.tallyResult, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventProposalPruned();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.proposalId = longToNumber(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.status = reader.int32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.tallyResult = types_1.TallyResult.decode(reader, reader.uint32());
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
            proposalId: isSet(object.proposalId) ? Number(object.proposalId) : 0,
            status: isSet(object.status) ? (0, types_1.proposalStatusFromJSON)(object.status) : 0,
            tallyResult: isSet(object.tallyResult) ? types_1.TallyResult.fromJSON(object.tallyResult) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.proposalId !== 0) {
            obj.proposalId = Math.round(message.proposalId);
        }
        if (message.status !== 0) {
            obj.status = (0, types_1.proposalStatusToJSON)(message.status);
        }
        if (message.tallyResult !== undefined) {
            obj.tallyResult = types_1.TallyResult.toJSON(message.tallyResult);
        }
        return obj;
    },
    create(base) {
        return exports.EventProposalPruned.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseEventProposalPruned();
        message.proposalId = object.proposalId ?? 0;
        message.status = object.status ?? 0;
        message.tallyResult = (object.tallyResult !== undefined && object.tallyResult !== null)
            ? types_1.TallyResult.fromPartial(object.tallyResult)
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
