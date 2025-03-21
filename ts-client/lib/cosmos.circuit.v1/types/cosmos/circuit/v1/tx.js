"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgServiceName = exports.MsgResetCircuitBreakerResponse = exports.MsgResetCircuitBreaker = exports.MsgTripCircuitBreakerResponse = exports.MsgTripCircuitBreaker = exports.MsgAuthorizeCircuitBreakerResponse = exports.MsgAuthorizeCircuitBreaker = exports.protobufPackage = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const types_1 = require("./types");
exports.protobufPackage = "cosmos.circuit.v1";
function createBaseMsgAuthorizeCircuitBreaker() {
    return { granter: "", grantee: "", permissions: undefined };
}
exports.MsgAuthorizeCircuitBreaker = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.granter !== "") {
            writer.uint32(10).string(message.granter);
        }
        if (message.grantee !== "") {
            writer.uint32(18).string(message.grantee);
        }
        if (message.permissions !== undefined) {
            types_1.Permissions.encode(message.permissions, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAuthorizeCircuitBreaker();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.granter = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.grantee = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.permissions = types_1.Permissions.decode(reader, reader.uint32());
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
            granter: isSet(object.granter) ? String(object.granter) : "",
            grantee: isSet(object.grantee) ? String(object.grantee) : "",
            permissions: isSet(object.permissions) ? types_1.Permissions.fromJSON(object.permissions) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.granter !== "") {
            obj.granter = message.granter;
        }
        if (message.grantee !== "") {
            obj.grantee = message.grantee;
        }
        if (message.permissions !== undefined) {
            obj.permissions = types_1.Permissions.toJSON(message.permissions);
        }
        return obj;
    },
    create(base) {
        return exports.MsgAuthorizeCircuitBreaker.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgAuthorizeCircuitBreaker();
        message.granter = object.granter ?? "";
        message.grantee = object.grantee ?? "";
        message.permissions = (object.permissions !== undefined && object.permissions !== null)
            ? types_1.Permissions.fromPartial(object.permissions)
            : undefined;
        return message;
    },
};
function createBaseMsgAuthorizeCircuitBreakerResponse() {
    return { success: false };
}
exports.MsgAuthorizeCircuitBreakerResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.success === true) {
            writer.uint32(8).bool(message.success);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAuthorizeCircuitBreakerResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.success = reader.bool();
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
        return { success: isSet(object.success) ? Boolean(object.success) : false };
    },
    toJSON(message) {
        const obj = {};
        if (message.success === true) {
            obj.success = message.success;
        }
        return obj;
    },
    create(base) {
        return exports.MsgAuthorizeCircuitBreakerResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgAuthorizeCircuitBreakerResponse();
        message.success = object.success ?? false;
        return message;
    },
};
function createBaseMsgTripCircuitBreaker() {
    return { authority: "", msgTypeUrls: [] };
}
exports.MsgTripCircuitBreaker = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        for (const v of message.msgTypeUrls) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTripCircuitBreaker();
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
                    message.msgTypeUrls.push(reader.string());
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
            msgTypeUrls: Array.isArray(object?.msgTypeUrls) ? object.msgTypeUrls.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.authority !== "") {
            obj.authority = message.authority;
        }
        if (message.msgTypeUrls?.length) {
            obj.msgTypeUrls = message.msgTypeUrls;
        }
        return obj;
    },
    create(base) {
        return exports.MsgTripCircuitBreaker.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgTripCircuitBreaker();
        message.authority = object.authority ?? "";
        message.msgTypeUrls = object.msgTypeUrls?.map((e) => e) || [];
        return message;
    },
};
function createBaseMsgTripCircuitBreakerResponse() {
    return { success: false };
}
exports.MsgTripCircuitBreakerResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.success === true) {
            writer.uint32(8).bool(message.success);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTripCircuitBreakerResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.success = reader.bool();
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
        return { success: isSet(object.success) ? Boolean(object.success) : false };
    },
    toJSON(message) {
        const obj = {};
        if (message.success === true) {
            obj.success = message.success;
        }
        return obj;
    },
    create(base) {
        return exports.MsgTripCircuitBreakerResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgTripCircuitBreakerResponse();
        message.success = object.success ?? false;
        return message;
    },
};
function createBaseMsgResetCircuitBreaker() {
    return { authority: "", msgTypeUrls: [] };
}
exports.MsgResetCircuitBreaker = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        for (const v of message.msgTypeUrls) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgResetCircuitBreaker();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.authority = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.msgTypeUrls.push(reader.string());
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
            msgTypeUrls: Array.isArray(object?.msgTypeUrls) ? object.msgTypeUrls.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.authority !== "") {
            obj.authority = message.authority;
        }
        if (message.msgTypeUrls?.length) {
            obj.msgTypeUrls = message.msgTypeUrls;
        }
        return obj;
    },
    create(base) {
        return exports.MsgResetCircuitBreaker.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgResetCircuitBreaker();
        message.authority = object.authority ?? "";
        message.msgTypeUrls = object.msgTypeUrls?.map((e) => e) || [];
        return message;
    },
};
function createBaseMsgResetCircuitBreakerResponse() {
    return { success: false };
}
exports.MsgResetCircuitBreakerResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.success === true) {
            writer.uint32(8).bool(message.success);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgResetCircuitBreakerResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.success = reader.bool();
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
        return { success: isSet(object.success) ? Boolean(object.success) : false };
    },
    toJSON(message) {
        const obj = {};
        if (message.success === true) {
            obj.success = message.success;
        }
        return obj;
    },
    create(base) {
        return exports.MsgResetCircuitBreakerResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgResetCircuitBreakerResponse();
        message.success = object.success ?? false;
        return message;
    },
};
exports.MsgServiceName = "cosmos.circuit.v1.Msg";
class MsgClientImpl {
    constructor(rpc, opts) {
        this.service = opts?.service || exports.MsgServiceName;
        this.rpc = rpc;
        this.AuthorizeCircuitBreaker = this.AuthorizeCircuitBreaker.bind(this);
        this.TripCircuitBreaker = this.TripCircuitBreaker.bind(this);
        this.ResetCircuitBreaker = this.ResetCircuitBreaker.bind(this);
    }
    AuthorizeCircuitBreaker(request) {
        const data = exports.MsgAuthorizeCircuitBreaker.encode(request).finish();
        const promise = this.rpc.request(this.service, "AuthorizeCircuitBreaker", data);
        return promise.then((data) => exports.MsgAuthorizeCircuitBreakerResponse.decode(minimal_1.default.Reader.create(data)));
    }
    TripCircuitBreaker(request) {
        const data = exports.MsgTripCircuitBreaker.encode(request).finish();
        const promise = this.rpc.request(this.service, "TripCircuitBreaker", data);
        return promise.then((data) => exports.MsgTripCircuitBreakerResponse.decode(minimal_1.default.Reader.create(data)));
    }
    ResetCircuitBreaker(request) {
        const data = exports.MsgResetCircuitBreaker.encode(request).finish();
        const promise = this.rpc.request(this.service, "ResetCircuitBreaker", data);
        return promise.then((data) => exports.MsgResetCircuitBreakerResponse.decode(minimal_1.default.Reader.create(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
function isSet(value) {
    return value !== null && value !== undefined;
}
