"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgServiceName = exports.MsgCancelUpgradeResponse = exports.MsgCancelUpgrade = exports.MsgSoftwareUpgradeResponse = exports.MsgSoftwareUpgrade = exports.protobufPackage = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const upgrade_1 = require("./upgrade");
exports.protobufPackage = "cosmos.upgrade.v1beta1";
function createBaseMsgSoftwareUpgrade() {
    return { authority: "", plan: undefined };
}
exports.MsgSoftwareUpgrade = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.plan !== undefined) {
            upgrade_1.Plan.encode(message.plan, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSoftwareUpgrade();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.authority = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.plan = upgrade_1.Plan.decode(reader, reader.uint32());
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
            authority: isSet(object.authority) ? String(object.authority) : "",
            plan: isSet(object.plan) ? upgrade_1.Plan.fromJSON(object.plan) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.authority !== "") {
            obj.authority = message.authority;
        }
        if (message.plan !== undefined) {
            obj.plan = upgrade_1.Plan.toJSON(message.plan);
        }
        return obj;
    },
    create(base) {
        return exports.MsgSoftwareUpgrade.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgSoftwareUpgrade();
        message.authority = object.authority ?? "";
        message.plan = (object.plan !== undefined && object.plan !== null) ? upgrade_1.Plan.fromPartial(object.plan) : undefined;
        return message;
    },
};
function createBaseMsgSoftwareUpgradeResponse() {
    return {};
}
exports.MsgSoftwareUpgradeResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSoftwareUpgradeResponse();
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
        return exports.MsgSoftwareUpgradeResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgSoftwareUpgradeResponse();
        return message;
    },
};
function createBaseMsgCancelUpgrade() {
    return { authority: "" };
}
exports.MsgCancelUpgrade = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCancelUpgrade();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.authority = reader.string();
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
        return { authority: isSet(object.authority) ? String(object.authority) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.authority !== "") {
            obj.authority = message.authority;
        }
        return obj;
    },
    create(base) {
        return exports.MsgCancelUpgrade.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgCancelUpgrade();
        message.authority = object.authority ?? "";
        return message;
    },
};
function createBaseMsgCancelUpgradeResponse() {
    return {};
}
exports.MsgCancelUpgradeResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCancelUpgradeResponse();
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
        return exports.MsgCancelUpgradeResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgCancelUpgradeResponse();
        return message;
    },
};
exports.MsgServiceName = "cosmos.upgrade.v1beta1.Msg";
class MsgClientImpl {
    constructor(rpc, opts) {
        this.service = opts?.service || exports.MsgServiceName;
        this.rpc = rpc;
        this.SoftwareUpgrade = this.SoftwareUpgrade.bind(this);
        this.CancelUpgrade = this.CancelUpgrade.bind(this);
    }
    SoftwareUpgrade(request) {
        const data = exports.MsgSoftwareUpgrade.encode(request).finish();
        const promise = this.rpc.request(this.service, "SoftwareUpgrade", data);
        return promise.then((data) => exports.MsgSoftwareUpgradeResponse.decode(minimal_1.default.Reader.create(data)));
    }
    CancelUpgrade(request) {
        const data = exports.MsgCancelUpgrade.encode(request).finish();
        const promise = this.rpc.request(this.service, "CancelUpgrade", data);
        return promise.then((data) => exports.MsgCancelUpgradeResponse.decode(minimal_1.default.Reader.create(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
function isSet(value) {
    return value !== null && value !== undefined;
}
