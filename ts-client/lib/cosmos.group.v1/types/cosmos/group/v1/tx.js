"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgServiceName = exports.MsgLeaveGroupResponse = exports.MsgLeaveGroup = exports.MsgExecResponse = exports.MsgExec = exports.MsgVoteResponse = exports.MsgVote = exports.MsgWithdrawProposalResponse = exports.MsgWithdrawProposal = exports.MsgSubmitProposalResponse = exports.MsgSubmitProposal = exports.MsgUpdateGroupPolicyMetadataResponse = exports.MsgUpdateGroupPolicyMetadata = exports.MsgUpdateGroupPolicyDecisionPolicyResponse = exports.MsgUpdateGroupPolicyDecisionPolicy = exports.MsgCreateGroupWithPolicyResponse = exports.MsgCreateGroupWithPolicy = exports.MsgUpdateGroupPolicyAdminResponse = exports.MsgUpdateGroupPolicyAdmin = exports.MsgCreateGroupPolicyResponse = exports.MsgCreateGroupPolicy = exports.MsgUpdateGroupMetadataResponse = exports.MsgUpdateGroupMetadata = exports.MsgUpdateGroupAdminResponse = exports.MsgUpdateGroupAdmin = exports.MsgUpdateGroupMembersResponse = exports.MsgUpdateGroupMembers = exports.MsgCreateGroupResponse = exports.MsgCreateGroup = exports.Exec = exports.protobufPackage = void 0;
exports.execFromJSON = execFromJSON;
exports.execToJSON = execToJSON;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const any_1 = require("../../../google/protobuf/any");
const types_1 = require("./types");
exports.protobufPackage = "cosmos.group.v1";
/** Since: cosmos-sdk 0.46 */
/** Exec defines modes of execution of a proposal on creation or on new vote. */
var Exec;
(function (Exec) {
    /**
     * EXEC_UNSPECIFIED - An empty value means that there should be a separate
     * MsgExec request for the proposal to execute.
     */
    Exec[Exec["EXEC_UNSPECIFIED"] = 0] = "EXEC_UNSPECIFIED";
    /**
     * EXEC_TRY - Try to execute the proposal immediately.
     * If the proposal is not allowed per the DecisionPolicy,
     * the proposal will still be open and could
     * be executed at a later point.
     */
    Exec[Exec["EXEC_TRY"] = 1] = "EXEC_TRY";
    Exec[Exec["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Exec || (exports.Exec = Exec = {}));
function execFromJSON(object) {
    switch (object) {
        case 0:
        case "EXEC_UNSPECIFIED":
            return Exec.EXEC_UNSPECIFIED;
        case 1:
        case "EXEC_TRY":
            return Exec.EXEC_TRY;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Exec.UNRECOGNIZED;
    }
}
function execToJSON(object) {
    switch (object) {
        case Exec.EXEC_UNSPECIFIED:
            return "EXEC_UNSPECIFIED";
        case Exec.EXEC_TRY:
            return "EXEC_TRY";
        case Exec.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseMsgCreateGroup() {
    return { admin: "", members: [], metadata: "" };
}
exports.MsgCreateGroup = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        for (const v of message.members) {
            types_1.MemberRequest.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.metadata !== "") {
            writer.uint32(26).string(message.metadata);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateGroup();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.admin = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.members.push(types_1.MemberRequest.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.metadata = reader.string();
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
            admin: isSet(object.admin) ? String(object.admin) : "",
            members: Array.isArray(object?.members) ? object.members.map((e) => types_1.MemberRequest.fromJSON(e)) : [],
            metadata: isSet(object.metadata) ? String(object.metadata) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.admin !== "") {
            obj.admin = message.admin;
        }
        if (message.members?.length) {
            obj.members = message.members.map((e) => types_1.MemberRequest.toJSON(e));
        }
        if (message.metadata !== "") {
            obj.metadata = message.metadata;
        }
        return obj;
    },
    create(base) {
        return exports.MsgCreateGroup.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgCreateGroup();
        message.admin = object.admin ?? "";
        message.members = object.members?.map((e) => types_1.MemberRequest.fromPartial(e)) || [];
        message.metadata = object.metadata ?? "";
        return message;
    },
};
function createBaseMsgCreateGroupResponse() {
    return { groupId: 0 };
}
exports.MsgCreateGroupResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.groupId !== 0) {
            writer.uint32(8).uint64(message.groupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateGroupResponse();
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
        return exports.MsgCreateGroupResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgCreateGroupResponse();
        message.groupId = object.groupId ?? 0;
        return message;
    },
};
function createBaseMsgUpdateGroupMembers() {
    return { admin: "", groupId: 0, memberUpdates: [] };
}
exports.MsgUpdateGroupMembers = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.groupId !== 0) {
            writer.uint32(16).uint64(message.groupId);
        }
        for (const v of message.memberUpdates) {
            types_1.MemberRequest.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupMembers();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.admin = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.groupId = longToNumber(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.memberUpdates.push(types_1.MemberRequest.decode(reader, reader.uint32()));
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
            admin: isSet(object.admin) ? String(object.admin) : "",
            groupId: isSet(object.groupId) ? Number(object.groupId) : 0,
            memberUpdates: Array.isArray(object?.memberUpdates)
                ? object.memberUpdates.map((e) => types_1.MemberRequest.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.admin !== "") {
            obj.admin = message.admin;
        }
        if (message.groupId !== 0) {
            obj.groupId = Math.round(message.groupId);
        }
        if (message.memberUpdates?.length) {
            obj.memberUpdates = message.memberUpdates.map((e) => types_1.MemberRequest.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.MsgUpdateGroupMembers.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateGroupMembers();
        message.admin = object.admin ?? "";
        message.groupId = object.groupId ?? 0;
        message.memberUpdates = object.memberUpdates?.map((e) => types_1.MemberRequest.fromPartial(e)) || [];
        return message;
    },
};
function createBaseMsgUpdateGroupMembersResponse() {
    return {};
}
exports.MsgUpdateGroupMembersResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupMembersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.MsgUpdateGroupMembersResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateGroupMembersResponse();
        return message;
    },
};
function createBaseMsgUpdateGroupAdmin() {
    return { admin: "", groupId: 0, newAdmin: "" };
}
exports.MsgUpdateGroupAdmin = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.groupId !== 0) {
            writer.uint32(16).uint64(message.groupId);
        }
        if (message.newAdmin !== "") {
            writer.uint32(26).string(message.newAdmin);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupAdmin();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.admin = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.groupId = longToNumber(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.newAdmin = reader.string();
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
            admin: isSet(object.admin) ? String(object.admin) : "",
            groupId: isSet(object.groupId) ? Number(object.groupId) : 0,
            newAdmin: isSet(object.newAdmin) ? String(object.newAdmin) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.admin !== "") {
            obj.admin = message.admin;
        }
        if (message.groupId !== 0) {
            obj.groupId = Math.round(message.groupId);
        }
        if (message.newAdmin !== "") {
            obj.newAdmin = message.newAdmin;
        }
        return obj;
    },
    create(base) {
        return exports.MsgUpdateGroupAdmin.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateGroupAdmin();
        message.admin = object.admin ?? "";
        message.groupId = object.groupId ?? 0;
        message.newAdmin = object.newAdmin ?? "";
        return message;
    },
};
function createBaseMsgUpdateGroupAdminResponse() {
    return {};
}
exports.MsgUpdateGroupAdminResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupAdminResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.MsgUpdateGroupAdminResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateGroupAdminResponse();
        return message;
    },
};
function createBaseMsgUpdateGroupMetadata() {
    return { admin: "", groupId: 0, metadata: "" };
}
exports.MsgUpdateGroupMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.groupId !== 0) {
            writer.uint32(16).uint64(message.groupId);
        }
        if (message.metadata !== "") {
            writer.uint32(26).string(message.metadata);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.admin = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.groupId = longToNumber(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.metadata = reader.string();
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
            admin: isSet(object.admin) ? String(object.admin) : "",
            groupId: isSet(object.groupId) ? Number(object.groupId) : 0,
            metadata: isSet(object.metadata) ? String(object.metadata) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.admin !== "") {
            obj.admin = message.admin;
        }
        if (message.groupId !== 0) {
            obj.groupId = Math.round(message.groupId);
        }
        if (message.metadata !== "") {
            obj.metadata = message.metadata;
        }
        return obj;
    },
    create(base) {
        return exports.MsgUpdateGroupMetadata.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateGroupMetadata();
        message.admin = object.admin ?? "";
        message.groupId = object.groupId ?? 0;
        message.metadata = object.metadata ?? "";
        return message;
    },
};
function createBaseMsgUpdateGroupMetadataResponse() {
    return {};
}
exports.MsgUpdateGroupMetadataResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupMetadataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.MsgUpdateGroupMetadataResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateGroupMetadataResponse();
        return message;
    },
};
function createBaseMsgCreateGroupPolicy() {
    return { admin: "", groupId: 0, metadata: "", decisionPolicy: undefined };
}
exports.MsgCreateGroupPolicy = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.groupId !== 0) {
            writer.uint32(16).uint64(message.groupId);
        }
        if (message.metadata !== "") {
            writer.uint32(26).string(message.metadata);
        }
        if (message.decisionPolicy !== undefined) {
            any_1.Any.encode(message.decisionPolicy, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateGroupPolicy();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.admin = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.groupId = longToNumber(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.metadata = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.decisionPolicy = any_1.Any.decode(reader, reader.uint32());
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
            admin: isSet(object.admin) ? String(object.admin) : "",
            groupId: isSet(object.groupId) ? Number(object.groupId) : 0,
            metadata: isSet(object.metadata) ? String(object.metadata) : "",
            decisionPolicy: isSet(object.decisionPolicy) ? any_1.Any.fromJSON(object.decisionPolicy) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.admin !== "") {
            obj.admin = message.admin;
        }
        if (message.groupId !== 0) {
            obj.groupId = Math.round(message.groupId);
        }
        if (message.metadata !== "") {
            obj.metadata = message.metadata;
        }
        if (message.decisionPolicy !== undefined) {
            obj.decisionPolicy = any_1.Any.toJSON(message.decisionPolicy);
        }
        return obj;
    },
    create(base) {
        return exports.MsgCreateGroupPolicy.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgCreateGroupPolicy();
        message.admin = object.admin ?? "";
        message.groupId = object.groupId ?? 0;
        message.metadata = object.metadata ?? "";
        message.decisionPolicy = (object.decisionPolicy !== undefined && object.decisionPolicy !== null)
            ? any_1.Any.fromPartial(object.decisionPolicy)
            : undefined;
        return message;
    },
};
function createBaseMsgCreateGroupPolicyResponse() {
    return { address: "" };
}
exports.MsgCreateGroupPolicyResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateGroupPolicyResponse();
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
        return exports.MsgCreateGroupPolicyResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgCreateGroupPolicyResponse();
        message.address = object.address ?? "";
        return message;
    },
};
function createBaseMsgUpdateGroupPolicyAdmin() {
    return { admin: "", groupPolicyAddress: "", newAdmin: "" };
}
exports.MsgUpdateGroupPolicyAdmin = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.groupPolicyAddress !== "") {
            writer.uint32(18).string(message.groupPolicyAddress);
        }
        if (message.newAdmin !== "") {
            writer.uint32(26).string(message.newAdmin);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupPolicyAdmin();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.admin = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.groupPolicyAddress = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.newAdmin = reader.string();
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
            admin: isSet(object.admin) ? String(object.admin) : "",
            groupPolicyAddress: isSet(object.groupPolicyAddress) ? String(object.groupPolicyAddress) : "",
            newAdmin: isSet(object.newAdmin) ? String(object.newAdmin) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.admin !== "") {
            obj.admin = message.admin;
        }
        if (message.groupPolicyAddress !== "") {
            obj.groupPolicyAddress = message.groupPolicyAddress;
        }
        if (message.newAdmin !== "") {
            obj.newAdmin = message.newAdmin;
        }
        return obj;
    },
    create(base) {
        return exports.MsgUpdateGroupPolicyAdmin.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateGroupPolicyAdmin();
        message.admin = object.admin ?? "";
        message.groupPolicyAddress = object.groupPolicyAddress ?? "";
        message.newAdmin = object.newAdmin ?? "";
        return message;
    },
};
function createBaseMsgUpdateGroupPolicyAdminResponse() {
    return {};
}
exports.MsgUpdateGroupPolicyAdminResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupPolicyAdminResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.MsgUpdateGroupPolicyAdminResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateGroupPolicyAdminResponse();
        return message;
    },
};
function createBaseMsgCreateGroupWithPolicy() {
    return {
        admin: "",
        members: [],
        groupMetadata: "",
        groupPolicyMetadata: "",
        groupPolicyAsAdmin: false,
        decisionPolicy: undefined,
    };
}
exports.MsgCreateGroupWithPolicy = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        for (const v of message.members) {
            types_1.MemberRequest.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.groupMetadata !== "") {
            writer.uint32(26).string(message.groupMetadata);
        }
        if (message.groupPolicyMetadata !== "") {
            writer.uint32(34).string(message.groupPolicyMetadata);
        }
        if (message.groupPolicyAsAdmin === true) {
            writer.uint32(40).bool(message.groupPolicyAsAdmin);
        }
        if (message.decisionPolicy !== undefined) {
            any_1.Any.encode(message.decisionPolicy, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateGroupWithPolicy();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.admin = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.members.push(types_1.MemberRequest.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.groupMetadata = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.groupPolicyMetadata = reader.string();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.groupPolicyAsAdmin = reader.bool();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.decisionPolicy = any_1.Any.decode(reader, reader.uint32());
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
            admin: isSet(object.admin) ? String(object.admin) : "",
            members: Array.isArray(object?.members) ? object.members.map((e) => types_1.MemberRequest.fromJSON(e)) : [],
            groupMetadata: isSet(object.groupMetadata) ? String(object.groupMetadata) : "",
            groupPolicyMetadata: isSet(object.groupPolicyMetadata) ? String(object.groupPolicyMetadata) : "",
            groupPolicyAsAdmin: isSet(object.groupPolicyAsAdmin) ? Boolean(object.groupPolicyAsAdmin) : false,
            decisionPolicy: isSet(object.decisionPolicy) ? any_1.Any.fromJSON(object.decisionPolicy) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.admin !== "") {
            obj.admin = message.admin;
        }
        if (message.members?.length) {
            obj.members = message.members.map((e) => types_1.MemberRequest.toJSON(e));
        }
        if (message.groupMetadata !== "") {
            obj.groupMetadata = message.groupMetadata;
        }
        if (message.groupPolicyMetadata !== "") {
            obj.groupPolicyMetadata = message.groupPolicyMetadata;
        }
        if (message.groupPolicyAsAdmin === true) {
            obj.groupPolicyAsAdmin = message.groupPolicyAsAdmin;
        }
        if (message.decisionPolicy !== undefined) {
            obj.decisionPolicy = any_1.Any.toJSON(message.decisionPolicy);
        }
        return obj;
    },
    create(base) {
        return exports.MsgCreateGroupWithPolicy.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgCreateGroupWithPolicy();
        message.admin = object.admin ?? "";
        message.members = object.members?.map((e) => types_1.MemberRequest.fromPartial(e)) || [];
        message.groupMetadata = object.groupMetadata ?? "";
        message.groupPolicyMetadata = object.groupPolicyMetadata ?? "";
        message.groupPolicyAsAdmin = object.groupPolicyAsAdmin ?? false;
        message.decisionPolicy = (object.decisionPolicy !== undefined && object.decisionPolicy !== null)
            ? any_1.Any.fromPartial(object.decisionPolicy)
            : undefined;
        return message;
    },
};
function createBaseMsgCreateGroupWithPolicyResponse() {
    return { groupId: 0, groupPolicyAddress: "" };
}
exports.MsgCreateGroupWithPolicyResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.groupId !== 0) {
            writer.uint32(8).uint64(message.groupId);
        }
        if (message.groupPolicyAddress !== "") {
            writer.uint32(18).string(message.groupPolicyAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateGroupWithPolicyResponse();
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
                    message.groupPolicyAddress = reader.string();
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
            groupPolicyAddress: isSet(object.groupPolicyAddress) ? String(object.groupPolicyAddress) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.groupId !== 0) {
            obj.groupId = Math.round(message.groupId);
        }
        if (message.groupPolicyAddress !== "") {
            obj.groupPolicyAddress = message.groupPolicyAddress;
        }
        return obj;
    },
    create(base) {
        return exports.MsgCreateGroupWithPolicyResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgCreateGroupWithPolicyResponse();
        message.groupId = object.groupId ?? 0;
        message.groupPolicyAddress = object.groupPolicyAddress ?? "";
        return message;
    },
};
function createBaseMsgUpdateGroupPolicyDecisionPolicy() {
    return { admin: "", groupPolicyAddress: "", decisionPolicy: undefined };
}
exports.MsgUpdateGroupPolicyDecisionPolicy = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.groupPolicyAddress !== "") {
            writer.uint32(18).string(message.groupPolicyAddress);
        }
        if (message.decisionPolicy !== undefined) {
            any_1.Any.encode(message.decisionPolicy, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupPolicyDecisionPolicy();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.admin = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.groupPolicyAddress = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.decisionPolicy = any_1.Any.decode(reader, reader.uint32());
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
            admin: isSet(object.admin) ? String(object.admin) : "",
            groupPolicyAddress: isSet(object.groupPolicyAddress) ? String(object.groupPolicyAddress) : "",
            decisionPolicy: isSet(object.decisionPolicy) ? any_1.Any.fromJSON(object.decisionPolicy) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.admin !== "") {
            obj.admin = message.admin;
        }
        if (message.groupPolicyAddress !== "") {
            obj.groupPolicyAddress = message.groupPolicyAddress;
        }
        if (message.decisionPolicy !== undefined) {
            obj.decisionPolicy = any_1.Any.toJSON(message.decisionPolicy);
        }
        return obj;
    },
    create(base) {
        return exports.MsgUpdateGroupPolicyDecisionPolicy.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateGroupPolicyDecisionPolicy();
        message.admin = object.admin ?? "";
        message.groupPolicyAddress = object.groupPolicyAddress ?? "";
        message.decisionPolicy = (object.decisionPolicy !== undefined && object.decisionPolicy !== null)
            ? any_1.Any.fromPartial(object.decisionPolicy)
            : undefined;
        return message;
    },
};
function createBaseMsgUpdateGroupPolicyDecisionPolicyResponse() {
    return {};
}
exports.MsgUpdateGroupPolicyDecisionPolicyResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupPolicyDecisionPolicyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.MsgUpdateGroupPolicyDecisionPolicyResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateGroupPolicyDecisionPolicyResponse();
        return message;
    },
};
function createBaseMsgUpdateGroupPolicyMetadata() {
    return { admin: "", groupPolicyAddress: "", metadata: "" };
}
exports.MsgUpdateGroupPolicyMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.groupPolicyAddress !== "") {
            writer.uint32(18).string(message.groupPolicyAddress);
        }
        if (message.metadata !== "") {
            writer.uint32(26).string(message.metadata);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupPolicyMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.admin = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.groupPolicyAddress = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.metadata = reader.string();
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
            admin: isSet(object.admin) ? String(object.admin) : "",
            groupPolicyAddress: isSet(object.groupPolicyAddress) ? String(object.groupPolicyAddress) : "",
            metadata: isSet(object.metadata) ? String(object.metadata) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.admin !== "") {
            obj.admin = message.admin;
        }
        if (message.groupPolicyAddress !== "") {
            obj.groupPolicyAddress = message.groupPolicyAddress;
        }
        if (message.metadata !== "") {
            obj.metadata = message.metadata;
        }
        return obj;
    },
    create(base) {
        return exports.MsgUpdateGroupPolicyMetadata.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateGroupPolicyMetadata();
        message.admin = object.admin ?? "";
        message.groupPolicyAddress = object.groupPolicyAddress ?? "";
        message.metadata = object.metadata ?? "";
        return message;
    },
};
function createBaseMsgUpdateGroupPolicyMetadataResponse() {
    return {};
}
exports.MsgUpdateGroupPolicyMetadataResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupPolicyMetadataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.MsgUpdateGroupPolicyMetadataResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateGroupPolicyMetadataResponse();
        return message;
    },
};
function createBaseMsgSubmitProposal() {
    return { groupPolicyAddress: "", proposers: [], metadata: "", messages: [], exec: 0, title: "", summary: "" };
}
exports.MsgSubmitProposal = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.groupPolicyAddress !== "") {
            writer.uint32(10).string(message.groupPolicyAddress);
        }
        for (const v of message.proposers) {
            writer.uint32(18).string(v);
        }
        if (message.metadata !== "") {
            writer.uint32(26).string(message.metadata);
        }
        for (const v of message.messages) {
            any_1.Any.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.exec !== 0) {
            writer.uint32(40).int32(message.exec);
        }
        if (message.title !== "") {
            writer.uint32(50).string(message.title);
        }
        if (message.summary !== "") {
            writer.uint32(58).string(message.summary);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.groupPolicyAddress = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.proposers.push(reader.string());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.metadata = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.messages.push(any_1.Any.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.exec = reader.int32();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.summary = reader.string();
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
            groupPolicyAddress: isSet(object.groupPolicyAddress) ? String(object.groupPolicyAddress) : "",
            proposers: Array.isArray(object?.proposers) ? object.proposers.map((e) => String(e)) : [],
            metadata: isSet(object.metadata) ? String(object.metadata) : "",
            messages: Array.isArray(object?.messages) ? object.messages.map((e) => any_1.Any.fromJSON(e)) : [],
            exec: isSet(object.exec) ? execFromJSON(object.exec) : 0,
            title: isSet(object.title) ? String(object.title) : "",
            summary: isSet(object.summary) ? String(object.summary) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.groupPolicyAddress !== "") {
            obj.groupPolicyAddress = message.groupPolicyAddress;
        }
        if (message.proposers?.length) {
            obj.proposers = message.proposers;
        }
        if (message.metadata !== "") {
            obj.metadata = message.metadata;
        }
        if (message.messages?.length) {
            obj.messages = message.messages.map((e) => any_1.Any.toJSON(e));
        }
        if (message.exec !== 0) {
            obj.exec = execToJSON(message.exec);
        }
        if (message.title !== "") {
            obj.title = message.title;
        }
        if (message.summary !== "") {
            obj.summary = message.summary;
        }
        return obj;
    },
    create(base) {
        return exports.MsgSubmitProposal.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgSubmitProposal();
        message.groupPolicyAddress = object.groupPolicyAddress ?? "";
        message.proposers = object.proposers?.map((e) => e) || [];
        message.metadata = object.metadata ?? "";
        message.messages = object.messages?.map((e) => any_1.Any.fromPartial(e)) || [];
        message.exec = object.exec ?? 0;
        message.title = object.title ?? "";
        message.summary = object.summary ?? "";
        return message;
    },
};
function createBaseMsgSubmitProposalResponse() {
    return { proposalId: 0 };
}
exports.MsgSubmitProposalResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.proposalId !== 0) {
            writer.uint32(8).uint64(message.proposalId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitProposalResponse();
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
        return exports.MsgSubmitProposalResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgSubmitProposalResponse();
        message.proposalId = object.proposalId ?? 0;
        return message;
    },
};
function createBaseMsgWithdrawProposal() {
    return { proposalId: 0, address: "" };
}
exports.MsgWithdrawProposal = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.proposalId !== 0) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawProposal();
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
            proposalId: isSet(object.proposalId) ? Number(object.proposalId) : 0,
            address: isSet(object.address) ? String(object.address) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.proposalId !== 0) {
            obj.proposalId = Math.round(message.proposalId);
        }
        if (message.address !== "") {
            obj.address = message.address;
        }
        return obj;
    },
    create(base) {
        return exports.MsgWithdrawProposal.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgWithdrawProposal();
        message.proposalId = object.proposalId ?? 0;
        message.address = object.address ?? "";
        return message;
    },
};
function createBaseMsgWithdrawProposalResponse() {
    return {};
}
exports.MsgWithdrawProposalResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawProposalResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.MsgWithdrawProposalResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgWithdrawProposalResponse();
        return message;
    },
};
function createBaseMsgVote() {
    return { proposalId: 0, voter: "", option: 0, metadata: "", exec: 0 };
}
exports.MsgVote = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.proposalId !== 0) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.voter !== "") {
            writer.uint32(18).string(message.voter);
        }
        if (message.option !== 0) {
            writer.uint32(24).int32(message.option);
        }
        if (message.metadata !== "") {
            writer.uint32(34).string(message.metadata);
        }
        if (message.exec !== 0) {
            writer.uint32(40).int32(message.exec);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgVote();
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
                    if (tag !== 18) {
                        break;
                    }
                    message.voter = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.option = reader.int32();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.metadata = reader.string();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.exec = reader.int32();
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
            voter: isSet(object.voter) ? String(object.voter) : "",
            option: isSet(object.option) ? (0, types_1.voteOptionFromJSON)(object.option) : 0,
            metadata: isSet(object.metadata) ? String(object.metadata) : "",
            exec: isSet(object.exec) ? execFromJSON(object.exec) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.proposalId !== 0) {
            obj.proposalId = Math.round(message.proposalId);
        }
        if (message.voter !== "") {
            obj.voter = message.voter;
        }
        if (message.option !== 0) {
            obj.option = (0, types_1.voteOptionToJSON)(message.option);
        }
        if (message.metadata !== "") {
            obj.metadata = message.metadata;
        }
        if (message.exec !== 0) {
            obj.exec = execToJSON(message.exec);
        }
        return obj;
    },
    create(base) {
        return exports.MsgVote.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgVote();
        message.proposalId = object.proposalId ?? 0;
        message.voter = object.voter ?? "";
        message.option = object.option ?? 0;
        message.metadata = object.metadata ?? "";
        message.exec = object.exec ?? 0;
        return message;
    },
};
function createBaseMsgVoteResponse() {
    return {};
}
exports.MsgVoteResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgVoteResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.MsgVoteResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgVoteResponse();
        return message;
    },
};
function createBaseMsgExec() {
    return { proposalId: 0, executor: "" };
}
exports.MsgExec = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.proposalId !== 0) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.executor !== "") {
            writer.uint32(18).string(message.executor);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExec();
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
                    if (tag !== 18) {
                        break;
                    }
                    message.executor = reader.string();
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
            executor: isSet(object.executor) ? String(object.executor) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.proposalId !== 0) {
            obj.proposalId = Math.round(message.proposalId);
        }
        if (message.executor !== "") {
            obj.executor = message.executor;
        }
        return obj;
    },
    create(base) {
        return exports.MsgExec.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgExec();
        message.proposalId = object.proposalId ?? 0;
        message.executor = object.executor ?? "";
        return message;
    },
};
function createBaseMsgExecResponse() {
    return { result: 0 };
}
exports.MsgExecResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.result !== 0) {
            writer.uint32(16).int32(message.result);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExecResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.result = reader.int32();
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
        return { result: isSet(object.result) ? (0, types_1.proposalExecutorResultFromJSON)(object.result) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.result !== 0) {
            obj.result = (0, types_1.proposalExecutorResultToJSON)(message.result);
        }
        return obj;
    },
    create(base) {
        return exports.MsgExecResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgExecResponse();
        message.result = object.result ?? 0;
        return message;
    },
};
function createBaseMsgLeaveGroup() {
    return { address: "", groupId: 0 };
}
exports.MsgLeaveGroup = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.groupId !== 0) {
            writer.uint32(16).uint64(message.groupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgLeaveGroup();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.address = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
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
        return {
            address: isSet(object.address) ? String(object.address) : "",
            groupId: isSet(object.groupId) ? Number(object.groupId) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.address !== "") {
            obj.address = message.address;
        }
        if (message.groupId !== 0) {
            obj.groupId = Math.round(message.groupId);
        }
        return obj;
    },
    create(base) {
        return exports.MsgLeaveGroup.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgLeaveGroup();
        message.address = object.address ?? "";
        message.groupId = object.groupId ?? 0;
        return message;
    },
};
function createBaseMsgLeaveGroupResponse() {
    return {};
}
exports.MsgLeaveGroupResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgLeaveGroupResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.MsgLeaveGroupResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgLeaveGroupResponse();
        return message;
    },
};
exports.MsgServiceName = "cosmos.group.v1.Msg";
class MsgClientImpl {
    constructor(rpc, opts) {
        this.service = opts?.service || exports.MsgServiceName;
        this.rpc = rpc;
        this.CreateGroup = this.CreateGroup.bind(this);
        this.UpdateGroupMembers = this.UpdateGroupMembers.bind(this);
        this.UpdateGroupAdmin = this.UpdateGroupAdmin.bind(this);
        this.UpdateGroupMetadata = this.UpdateGroupMetadata.bind(this);
        this.CreateGroupPolicy = this.CreateGroupPolicy.bind(this);
        this.CreateGroupWithPolicy = this.CreateGroupWithPolicy.bind(this);
        this.UpdateGroupPolicyAdmin = this.UpdateGroupPolicyAdmin.bind(this);
        this.UpdateGroupPolicyDecisionPolicy = this.UpdateGroupPolicyDecisionPolicy.bind(this);
        this.UpdateGroupPolicyMetadata = this.UpdateGroupPolicyMetadata.bind(this);
        this.SubmitProposal = this.SubmitProposal.bind(this);
        this.WithdrawProposal = this.WithdrawProposal.bind(this);
        this.Vote = this.Vote.bind(this);
        this.Exec = this.Exec.bind(this);
        this.LeaveGroup = this.LeaveGroup.bind(this);
    }
    CreateGroup(request) {
        const data = exports.MsgCreateGroup.encode(request).finish();
        const promise = this.rpc.request(this.service, "CreateGroup", data);
        return promise.then((data) => exports.MsgCreateGroupResponse.decode(minimal_1.default.Reader.create(data)));
    }
    UpdateGroupMembers(request) {
        const data = exports.MsgUpdateGroupMembers.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpdateGroupMembers", data);
        return promise.then((data) => exports.MsgUpdateGroupMembersResponse.decode(minimal_1.default.Reader.create(data)));
    }
    UpdateGroupAdmin(request) {
        const data = exports.MsgUpdateGroupAdmin.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpdateGroupAdmin", data);
        return promise.then((data) => exports.MsgUpdateGroupAdminResponse.decode(minimal_1.default.Reader.create(data)));
    }
    UpdateGroupMetadata(request) {
        const data = exports.MsgUpdateGroupMetadata.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpdateGroupMetadata", data);
        return promise.then((data) => exports.MsgUpdateGroupMetadataResponse.decode(minimal_1.default.Reader.create(data)));
    }
    CreateGroupPolicy(request) {
        const data = exports.MsgCreateGroupPolicy.encode(request).finish();
        const promise = this.rpc.request(this.service, "CreateGroupPolicy", data);
        return promise.then((data) => exports.MsgCreateGroupPolicyResponse.decode(minimal_1.default.Reader.create(data)));
    }
    CreateGroupWithPolicy(request) {
        const data = exports.MsgCreateGroupWithPolicy.encode(request).finish();
        const promise = this.rpc.request(this.service, "CreateGroupWithPolicy", data);
        return promise.then((data) => exports.MsgCreateGroupWithPolicyResponse.decode(minimal_1.default.Reader.create(data)));
    }
    UpdateGroupPolicyAdmin(request) {
        const data = exports.MsgUpdateGroupPolicyAdmin.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpdateGroupPolicyAdmin", data);
        return promise.then((data) => exports.MsgUpdateGroupPolicyAdminResponse.decode(minimal_1.default.Reader.create(data)));
    }
    UpdateGroupPolicyDecisionPolicy(request) {
        const data = exports.MsgUpdateGroupPolicyDecisionPolicy.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpdateGroupPolicyDecisionPolicy", data);
        return promise.then((data) => exports.MsgUpdateGroupPolicyDecisionPolicyResponse.decode(minimal_1.default.Reader.create(data)));
    }
    UpdateGroupPolicyMetadata(request) {
        const data = exports.MsgUpdateGroupPolicyMetadata.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpdateGroupPolicyMetadata", data);
        return promise.then((data) => exports.MsgUpdateGroupPolicyMetadataResponse.decode(minimal_1.default.Reader.create(data)));
    }
    SubmitProposal(request) {
        const data = exports.MsgSubmitProposal.encode(request).finish();
        const promise = this.rpc.request(this.service, "SubmitProposal", data);
        return promise.then((data) => exports.MsgSubmitProposalResponse.decode(minimal_1.default.Reader.create(data)));
    }
    WithdrawProposal(request) {
        const data = exports.MsgWithdrawProposal.encode(request).finish();
        const promise = this.rpc.request(this.service, "WithdrawProposal", data);
        return promise.then((data) => exports.MsgWithdrawProposalResponse.decode(minimal_1.default.Reader.create(data)));
    }
    Vote(request) {
        const data = exports.MsgVote.encode(request).finish();
        const promise = this.rpc.request(this.service, "Vote", data);
        return promise.then((data) => exports.MsgVoteResponse.decode(minimal_1.default.Reader.create(data)));
    }
    Exec(request) {
        const data = exports.MsgExec.encode(request).finish();
        const promise = this.rpc.request(this.service, "Exec", data);
        return promise.then((data) => exports.MsgExecResponse.decode(minimal_1.default.Reader.create(data)));
    }
    LeaveGroup(request) {
        const data = exports.MsgLeaveGroup.encode(request).finish();
        const promise = this.rpc.request(this.service, "LeaveGroup", data);
        return promise.then((data) => exports.MsgLeaveGroupResponse.decode(minimal_1.default.Reader.create(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
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
