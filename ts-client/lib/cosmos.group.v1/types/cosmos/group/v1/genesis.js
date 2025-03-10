"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const types_1 = require("./types");
exports.protobufPackage = "cosmos.group.v1";
function createBaseGenesisState() {
    return {
        groupSeq: 0,
        groups: [],
        groupMembers: [],
        groupPolicySeq: 0,
        groupPolicies: [],
        proposalSeq: 0,
        proposals: [],
        votes: [],
    };
}
exports.GenesisState = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.groupSeq !== 0) {
            writer.uint32(8).uint64(message.groupSeq);
        }
        for (const v of message.groups) {
            types_1.GroupInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.groupMembers) {
            types_1.GroupMember.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.groupPolicySeq !== 0) {
            writer.uint32(32).uint64(message.groupPolicySeq);
        }
        for (const v of message.groupPolicies) {
            types_1.GroupPolicyInfo.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.proposalSeq !== 0) {
            writer.uint32(48).uint64(message.proposalSeq);
        }
        for (const v of message.proposals) {
            types_1.Proposal.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.votes) {
            types_1.Vote.encode(v, writer.uint32(66).fork()).ldelim();
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
                    if (tag !== 8) {
                        break;
                    }
                    message.groupSeq = longToNumber(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.groups.push(types_1.GroupInfo.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.groupMembers.push(types_1.GroupMember.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.groupPolicySeq = longToNumber(reader.uint64());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.groupPolicies.push(types_1.GroupPolicyInfo.decode(reader, reader.uint32()));
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.proposalSeq = longToNumber(reader.uint64());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.proposals.push(types_1.Proposal.decode(reader, reader.uint32()));
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.votes.push(types_1.Vote.decode(reader, reader.uint32()));
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
            groupSeq: isSet(object.groupSeq) ? Number(object.groupSeq) : 0,
            groups: Array.isArray(object?.groups) ? object.groups.map((e) => types_1.GroupInfo.fromJSON(e)) : [],
            groupMembers: Array.isArray(object?.groupMembers)
                ? object.groupMembers.map((e) => types_1.GroupMember.fromJSON(e))
                : [],
            groupPolicySeq: isSet(object.groupPolicySeq) ? Number(object.groupPolicySeq) : 0,
            groupPolicies: Array.isArray(object?.groupPolicies)
                ? object.groupPolicies.map((e) => types_1.GroupPolicyInfo.fromJSON(e))
                : [],
            proposalSeq: isSet(object.proposalSeq) ? Number(object.proposalSeq) : 0,
            proposals: Array.isArray(object?.proposals) ? object.proposals.map((e) => types_1.Proposal.fromJSON(e)) : [],
            votes: Array.isArray(object?.votes) ? object.votes.map((e) => types_1.Vote.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.groupSeq !== 0) {
            obj.groupSeq = Math.round(message.groupSeq);
        }
        if (message.groups?.length) {
            obj.groups = message.groups.map((e) => types_1.GroupInfo.toJSON(e));
        }
        if (message.groupMembers?.length) {
            obj.groupMembers = message.groupMembers.map((e) => types_1.GroupMember.toJSON(e));
        }
        if (message.groupPolicySeq !== 0) {
            obj.groupPolicySeq = Math.round(message.groupPolicySeq);
        }
        if (message.groupPolicies?.length) {
            obj.groupPolicies = message.groupPolicies.map((e) => types_1.GroupPolicyInfo.toJSON(e));
        }
        if (message.proposalSeq !== 0) {
            obj.proposalSeq = Math.round(message.proposalSeq);
        }
        if (message.proposals?.length) {
            obj.proposals = message.proposals.map((e) => types_1.Proposal.toJSON(e));
        }
        if (message.votes?.length) {
            obj.votes = message.votes.map((e) => types_1.Vote.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.GenesisState.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.groupSeq = object.groupSeq ?? 0;
        message.groups = object.groups?.map((e) => types_1.GroupInfo.fromPartial(e)) || [];
        message.groupMembers = object.groupMembers?.map((e) => types_1.GroupMember.fromPartial(e)) || [];
        message.groupPolicySeq = object.groupPolicySeq ?? 0;
        message.groupPolicies = object.groupPolicies?.map((e) => types_1.GroupPolicyInfo.fromPartial(e)) || [];
        message.proposalSeq = object.proposalSeq ?? 0;
        message.proposals = object.proposals?.map((e) => types_1.Proposal.fromPartial(e)) || [];
        message.votes = object.votes?.map((e) => types_1.Vote.fromPartial(e)) || [];
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
