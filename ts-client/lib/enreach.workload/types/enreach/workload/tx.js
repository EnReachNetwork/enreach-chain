"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgServiceName = exports.MsgSubmitCheatStatusCRResponse = exports.MsgSubmitCheatStatusCR = exports.MsgSubmitReputationPointChangeDataResponse = exports.MsgSubmitReputationPointChangeData = exports.MsgUpdateSuperiorResponse = exports.MsgUpdateSuperior = exports.MsgCreateSuperiorResponse = exports.MsgCreateSuperior = exports.MsgSubmitWorkreportsResponse = exports.MsgSubmitWorkreports = exports.MsgUpdateParamResponse = exports.MsgUpdateParam = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const cheat_status_1 = require("./cheat_status");
const reputationpoint_1 = require("./reputationpoint");
const workreport_1 = require("./workreport");
exports.protobufPackage = "enreach.workload";
function createBaseMsgUpdateParam() {
    return { signer: "", paramKey: "", paramValue: "" };
}
exports.MsgUpdateParam = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.signer !== "") {
            writer.uint32(10).string(message.signer);
        }
        if (message.paramKey !== "") {
            writer.uint32(18).string(message.paramKey);
        }
        if (message.paramValue !== "") {
            writer.uint32(26).string(message.paramValue);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParam();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.signer = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.paramKey = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.paramValue = reader.string();
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
            signer: isSet(object.signer) ? String(object.signer) : "",
            paramKey: isSet(object.paramKey) ? String(object.paramKey) : "",
            paramValue: isSet(object.paramValue) ? String(object.paramValue) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.signer !== "") {
            obj.signer = message.signer;
        }
        if (message.paramKey !== "") {
            obj.paramKey = message.paramKey;
        }
        if (message.paramValue !== "") {
            obj.paramValue = message.paramValue;
        }
        return obj;
    },
    create(base) {
        return exports.MsgUpdateParam.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateParam();
        message.signer = object.signer ?? "";
        message.paramKey = object.paramKey ?? "";
        message.paramValue = object.paramValue ?? "";
        return message;
    },
};
function createBaseMsgUpdateParamResponse() {
    return {};
}
exports.MsgUpdateParamResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParamResponse();
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
        return exports.MsgUpdateParamResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateParamResponse();
        return message;
    },
};
function createBaseMsgSubmitWorkreports() {
    return { managerAccount: "", epoch: 0, nodeScores: [] };
}
exports.MsgSubmitWorkreports = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.managerAccount !== "") {
            writer.uint32(10).string(message.managerAccount);
        }
        if (message.epoch !== 0) {
            writer.uint32(16).uint64(message.epoch);
        }
        for (const v of message.nodeScores) {
            workreport_1.NodeScore.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitWorkreports();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.managerAccount = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.epoch = longToNumber(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.nodeScores.push(workreport_1.NodeScore.decode(reader, reader.uint32()));
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
            managerAccount: isSet(object.managerAccount) ? String(object.managerAccount) : "",
            epoch: isSet(object.epoch) ? Number(object.epoch) : 0,
            nodeScores: Array.isArray(object?.nodeScores) ? object.nodeScores.map((e) => workreport_1.NodeScore.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.managerAccount !== "") {
            obj.managerAccount = message.managerAccount;
        }
        if (message.epoch !== 0) {
            obj.epoch = Math.round(message.epoch);
        }
        if (message.nodeScores?.length) {
            obj.nodeScores = message.nodeScores.map((e) => workreport_1.NodeScore.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.MsgSubmitWorkreports.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgSubmitWorkreports();
        message.managerAccount = object.managerAccount ?? "";
        message.epoch = object.epoch ?? 0;
        message.nodeScores = object.nodeScores?.map((e) => workreport_1.NodeScore.fromPartial(e)) || [];
        return message;
    },
};
function createBaseMsgSubmitWorkreportsResponse() {
    return {};
}
exports.MsgSubmitWorkreportsResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitWorkreportsResponse();
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
        return exports.MsgSubmitWorkreportsResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgSubmitWorkreportsResponse();
        return message;
    },
};
function createBaseMsgCreateSuperior() {
    return { signer: "", account: "" };
}
exports.MsgCreateSuperior = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.signer !== "") {
            writer.uint32(10).string(message.signer);
        }
        if (message.account !== "") {
            writer.uint32(18).string(message.account);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateSuperior();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.signer = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.account = reader.string();
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
            signer: isSet(object.signer) ? String(object.signer) : "",
            account: isSet(object.account) ? String(object.account) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.signer !== "") {
            obj.signer = message.signer;
        }
        if (message.account !== "") {
            obj.account = message.account;
        }
        return obj;
    },
    create(base) {
        return exports.MsgCreateSuperior.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgCreateSuperior();
        message.signer = object.signer ?? "";
        message.account = object.account ?? "";
        return message;
    },
};
function createBaseMsgCreateSuperiorResponse() {
    return {};
}
exports.MsgCreateSuperiorResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateSuperiorResponse();
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
        return exports.MsgCreateSuperiorResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgCreateSuperiorResponse();
        return message;
    },
};
function createBaseMsgUpdateSuperior() {
    return { signer: "", account: "" };
}
exports.MsgUpdateSuperior = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.signer !== "") {
            writer.uint32(10).string(message.signer);
        }
        if (message.account !== "") {
            writer.uint32(18).string(message.account);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateSuperior();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.signer = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.account = reader.string();
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
            signer: isSet(object.signer) ? String(object.signer) : "",
            account: isSet(object.account) ? String(object.account) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.signer !== "") {
            obj.signer = message.signer;
        }
        if (message.account !== "") {
            obj.account = message.account;
        }
        return obj;
    },
    create(base) {
        return exports.MsgUpdateSuperior.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateSuperior();
        message.signer = object.signer ?? "";
        message.account = object.account ?? "";
        return message;
    },
};
function createBaseMsgUpdateSuperiorResponse() {
    return {};
}
exports.MsgUpdateSuperiorResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateSuperiorResponse();
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
        return exports.MsgUpdateSuperiorResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateSuperiorResponse();
        return message;
    },
};
function createBaseMsgSubmitReputationPointChangeData() {
    return { managerAccount: "", era: 0, nodePoints: [] };
}
exports.MsgSubmitReputationPointChangeData = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.managerAccount !== "") {
            writer.uint32(10).string(message.managerAccount);
        }
        if (message.era !== 0) {
            writer.uint32(16).uint64(message.era);
        }
        for (const v of message.nodePoints) {
            reputationpoint_1.ReputationPointChangeRawData.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitReputationPointChangeData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.managerAccount = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.era = longToNumber(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.nodePoints.push(reputationpoint_1.ReputationPointChangeRawData.decode(reader, reader.uint32()));
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
            managerAccount: isSet(object.managerAccount) ? String(object.managerAccount) : "",
            era: isSet(object.era) ? Number(object.era) : 0,
            nodePoints: Array.isArray(object?.nodePoints)
                ? object.nodePoints.map((e) => reputationpoint_1.ReputationPointChangeRawData.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.managerAccount !== "") {
            obj.managerAccount = message.managerAccount;
        }
        if (message.era !== 0) {
            obj.era = Math.round(message.era);
        }
        if (message.nodePoints?.length) {
            obj.nodePoints = message.nodePoints.map((e) => reputationpoint_1.ReputationPointChangeRawData.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.MsgSubmitReputationPointChangeData.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgSubmitReputationPointChangeData();
        message.managerAccount = object.managerAccount ?? "";
        message.era = object.era ?? 0;
        message.nodePoints = object.nodePoints?.map((e) => reputationpoint_1.ReputationPointChangeRawData.fromPartial(e)) || [];
        return message;
    },
};
function createBaseMsgSubmitReputationPointChangeDataResponse() {
    return {};
}
exports.MsgSubmitReputationPointChangeDataResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitReputationPointChangeDataResponse();
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
        return exports.MsgSubmitReputationPointChangeDataResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgSubmitReputationPointChangeDataResponse();
        return message;
    },
};
function createBaseMsgSubmitCheatStatusCR() {
    return { managerAccount: "", era: 0, nodeDatas: [] };
}
exports.MsgSubmitCheatStatusCR = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.managerAccount !== "") {
            writer.uint32(10).string(message.managerAccount);
        }
        if (message.era !== 0) {
            writer.uint32(16).uint64(message.era);
        }
        for (const v of message.nodeDatas) {
            cheat_status_1.CheatStatusCR.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitCheatStatusCR();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.managerAccount = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.era = longToNumber(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.nodeDatas.push(cheat_status_1.CheatStatusCR.decode(reader, reader.uint32()));
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
            managerAccount: isSet(object.managerAccount) ? String(object.managerAccount) : "",
            era: isSet(object.era) ? Number(object.era) : 0,
            nodeDatas: Array.isArray(object?.nodeDatas) ? object.nodeDatas.map((e) => cheat_status_1.CheatStatusCR.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.managerAccount !== "") {
            obj.managerAccount = message.managerAccount;
        }
        if (message.era !== 0) {
            obj.era = Math.round(message.era);
        }
        if (message.nodeDatas?.length) {
            obj.nodeDatas = message.nodeDatas.map((e) => cheat_status_1.CheatStatusCR.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.MsgSubmitCheatStatusCR.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgSubmitCheatStatusCR();
        message.managerAccount = object.managerAccount ?? "";
        message.era = object.era ?? 0;
        message.nodeDatas = object.nodeDatas?.map((e) => cheat_status_1.CheatStatusCR.fromPartial(e)) || [];
        return message;
    },
};
function createBaseMsgSubmitCheatStatusCRResponse() {
    return {};
}
exports.MsgSubmitCheatStatusCRResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitCheatStatusCRResponse();
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
        return exports.MsgSubmitCheatStatusCRResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgSubmitCheatStatusCRResponse();
        return message;
    },
};
exports.MsgServiceName = "enreach.workload.Msg";
class MsgClientImpl {
    constructor(rpc, opts) {
        this.service = opts?.service || exports.MsgServiceName;
        this.rpc = rpc;
        this.UpdateParam = this.UpdateParam.bind(this);
        this.SubmitWorkreports = this.SubmitWorkreports.bind(this);
        this.CreateSuperior = this.CreateSuperior.bind(this);
        this.UpdateSuperior = this.UpdateSuperior.bind(this);
        this.SubmitReputationPointChangeData = this.SubmitReputationPointChangeData.bind(this);
        this.SubmitCheatStatusCR = this.SubmitCheatStatusCR.bind(this);
    }
    UpdateParam(request) {
        const data = exports.MsgUpdateParam.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpdateParam", data);
        return promise.then((data) => exports.MsgUpdateParamResponse.decode(minimal_1.default.Reader.create(data)));
    }
    SubmitWorkreports(request) {
        const data = exports.MsgSubmitWorkreports.encode(request).finish();
        const promise = this.rpc.request(this.service, "SubmitWorkreports", data);
        return promise.then((data) => exports.MsgSubmitWorkreportsResponse.decode(minimal_1.default.Reader.create(data)));
    }
    CreateSuperior(request) {
        const data = exports.MsgCreateSuperior.encode(request).finish();
        const promise = this.rpc.request(this.service, "CreateSuperior", data);
        return promise.then((data) => exports.MsgCreateSuperiorResponse.decode(minimal_1.default.Reader.create(data)));
    }
    UpdateSuperior(request) {
        const data = exports.MsgUpdateSuperior.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpdateSuperior", data);
        return promise.then((data) => exports.MsgUpdateSuperiorResponse.decode(minimal_1.default.Reader.create(data)));
    }
    SubmitReputationPointChangeData(request) {
        const data = exports.MsgSubmitReputationPointChangeData.encode(request).finish();
        const promise = this.rpc.request(this.service, "SubmitReputationPointChangeData", data);
        return promise.then((data) => exports.MsgSubmitReputationPointChangeDataResponse.decode(minimal_1.default.Reader.create(data)));
    }
    SubmitCheatStatusCR(request) {
        const data = exports.MsgSubmitCheatStatusCR.encode(request).finish();
        const promise = this.rpc.request(this.service, "SubmitCheatStatusCR", data);
        return promise.then((data) => exports.MsgSubmitCheatStatusCRResponse.decode(minimal_1.default.Reader.create(data)));
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
