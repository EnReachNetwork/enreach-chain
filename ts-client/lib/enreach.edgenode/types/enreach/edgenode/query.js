"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryServiceName = exports.QueryGetSuperiorResponse = exports.QueryGetSuperiorRequest = exports.QueryAllNodeResponse = exports.QueryAllNodeRequest = exports.QueryGetNodeResponse = exports.QueryGetNodeRequest = exports.QueryAllUserResponse = exports.QueryAllUserRequest = exports.QueryGetUserResponse = exports.QueryGetUserRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const pagination_1 = require("../../cosmos/base/query/v1beta1/pagination");
const node_1 = require("./node");
const params_1 = require("./params");
const superior_1 = require("./superior");
const user_1 = require("./user");
exports.protobufPackage = "enreach.edgenode";
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
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
        return exports.QueryParamsRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
};
function createBaseQueryParamsResponse() {
    return { params: undefined };
}
exports.QueryParamsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.params = params_1.Params.decode(reader, reader.uint32());
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
        return { params: isSet(object.params) ? params_1.Params.fromJSON(object.params) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.params !== undefined) {
            obj.params = params_1.Params.toJSON(message.params);
        }
        return obj;
    },
    create(base) {
        return exports.QueryParamsResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = (object.params !== undefined && object.params !== null)
            ? params_1.Params.fromPartial(object.params)
            : undefined;
        return message;
    },
};
function createBaseQueryGetUserRequest() {
    return { userID: "" };
}
exports.QueryGetUserRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userID !== "") {
            writer.uint32(10).string(message.userID);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetUserRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.userID = reader.string();
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
        return { userID: isSet(object.userID) ? String(object.userID) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.userID !== "") {
            obj.userID = message.userID;
        }
        return obj;
    },
    create(base) {
        return exports.QueryGetUserRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetUserRequest();
        message.userID = object.userID ?? "";
        return message;
    },
};
function createBaseQueryGetUserResponse() {
    return { User: undefined };
}
exports.QueryGetUserResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.User !== undefined) {
            user_1.User.encode(message.User, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetUserResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.User = user_1.User.decode(reader, reader.uint32());
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
        return { User: isSet(object.User) ? user_1.User.fromJSON(object.User) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.User !== undefined) {
            obj.User = user_1.User.toJSON(message.User);
        }
        return obj;
    },
    create(base) {
        return exports.QueryGetUserResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetUserResponse();
        message.User = (object.User !== undefined && object.User !== null) ? user_1.User.fromPartial(object.User) : undefined;
        return message;
    },
};
function createBaseQueryAllUserRequest() {
    return { pagination: undefined };
}
exports.QueryAllUserRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllUserRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
        return { pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageRequest.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.QueryAllUserRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryAllUserRequest();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryAllUserResponse() {
    return { User: [], pagination: undefined };
}
exports.QueryAllUserResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.User) {
            user_1.User.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllUserResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.User.push(user_1.User.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
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
            User: Array.isArray(object?.User) ? object.User.map((e) => user_1.User.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.User?.length) {
            obj.User = message.User.map((e) => user_1.User.toJSON(e));
        }
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageResponse.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.QueryAllUserResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryAllUserResponse();
        message.User = object.User?.map((e) => user_1.User.fromPartial(e)) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryGetNodeRequest() {
    return { nodeID: "" };
}
exports.QueryGetNodeRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.nodeID !== "") {
            writer.uint32(10).string(message.nodeID);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetNodeRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.nodeID = reader.string();
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
        return { nodeID: isSet(object.nodeID) ? String(object.nodeID) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.nodeID !== "") {
            obj.nodeID = message.nodeID;
        }
        return obj;
    },
    create(base) {
        return exports.QueryGetNodeRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetNodeRequest();
        message.nodeID = object.nodeID ?? "";
        return message;
    },
};
function createBaseQueryGetNodeResponse() {
    return { Node: undefined };
}
exports.QueryGetNodeResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.Node !== undefined) {
            node_1.Node.encode(message.Node, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetNodeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.Node = node_1.Node.decode(reader, reader.uint32());
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
        return { Node: isSet(object.Node) ? node_1.Node.fromJSON(object.Node) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.Node !== undefined) {
            obj.Node = node_1.Node.toJSON(message.Node);
        }
        return obj;
    },
    create(base) {
        return exports.QueryGetNodeResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetNodeResponse();
        message.Node = (object.Node !== undefined && object.Node !== null) ? node_1.Node.fromPartial(object.Node) : undefined;
        return message;
    },
};
function createBaseQueryAllNodeRequest() {
    return { pagination: undefined };
}
exports.QueryAllNodeRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllNodeRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
        return { pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageRequest.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.QueryAllNodeRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryAllNodeRequest();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryAllNodeResponse() {
    return { Node: [], pagination: undefined };
}
exports.QueryAllNodeResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.Node) {
            node_1.Node.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllNodeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.Node.push(node_1.Node.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
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
            Node: Array.isArray(object?.Node) ? object.Node.map((e) => node_1.Node.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.Node?.length) {
            obj.Node = message.Node.map((e) => node_1.Node.toJSON(e));
        }
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageResponse.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.QueryAllNodeResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryAllNodeResponse();
        message.Node = object.Node?.map((e) => node_1.Node.fromPartial(e)) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryGetSuperiorRequest() {
    return {};
}
exports.QueryGetSuperiorRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetSuperiorRequest();
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
        return exports.QueryGetSuperiorRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseQueryGetSuperiorRequest();
        return message;
    },
};
function createBaseQueryGetSuperiorResponse() {
    return { Superior: undefined };
}
exports.QueryGetSuperiorResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.Superior !== undefined) {
            superior_1.Superior.encode(message.Superior, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetSuperiorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.Superior = superior_1.Superior.decode(reader, reader.uint32());
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
        return { Superior: isSet(object.Superior) ? superior_1.Superior.fromJSON(object.Superior) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.Superior !== undefined) {
            obj.Superior = superior_1.Superior.toJSON(message.Superior);
        }
        return obj;
    },
    create(base) {
        return exports.QueryGetSuperiorResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetSuperiorResponse();
        message.Superior = (object.Superior !== undefined && object.Superior !== null)
            ? superior_1.Superior.fromPartial(object.Superior)
            : undefined;
        return message;
    },
};
exports.QueryServiceName = "enreach.edgenode.Query";
class QueryClientImpl {
    constructor(rpc, opts) {
        this.service = opts?.service || exports.QueryServiceName;
        this.rpc = rpc;
        this.Params = this.Params.bind(this);
        this.User = this.User.bind(this);
        this.UserAll = this.UserAll.bind(this);
        this.Node = this.Node.bind(this);
        this.NodeAll = this.NodeAll.bind(this);
        this.Superior = this.Superior.bind(this);
    }
    Params(request) {
        const data = exports.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Params", data);
        return promise.then((data) => exports.QueryParamsResponse.decode(minimal_1.default.Reader.create(data)));
    }
    User(request) {
        const data = exports.QueryGetUserRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "User", data);
        return promise.then((data) => exports.QueryGetUserResponse.decode(minimal_1.default.Reader.create(data)));
    }
    UserAll(request) {
        const data = exports.QueryAllUserRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "UserAll", data);
        return promise.then((data) => exports.QueryAllUserResponse.decode(minimal_1.default.Reader.create(data)));
    }
    Node(request) {
        const data = exports.QueryGetNodeRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Node", data);
        return promise.then((data) => exports.QueryGetNodeResponse.decode(minimal_1.default.Reader.create(data)));
    }
    NodeAll(request) {
        const data = exports.QueryAllNodeRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "NodeAll", data);
        return promise.then((data) => exports.QueryAllNodeResponse.decode(minimal_1.default.Reader.create(data)));
    }
    Superior(request) {
        const data = exports.QueryGetSuperiorRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Superior", data);
        return promise.then((data) => exports.QueryGetSuperiorResponse.decode(minimal_1.default.Reader.create(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
function isSet(value) {
    return value !== null && value !== undefined;
}
