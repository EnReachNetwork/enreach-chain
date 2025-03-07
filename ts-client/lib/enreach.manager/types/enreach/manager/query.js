"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryServiceName = exports.QueryGetManagerByRegionResponse = exports.QueryGetManagerByRegionRequest = exports.QueryAllManagerResponse = exports.QueryAllManagerRequest = exports.QueryGetManagerResponse = exports.QueryGetManagerRequest = exports.QueryAllOperatorResponse = exports.QueryAllOperatorRequest = exports.QueryGetOperatorResponse = exports.QueryGetOperatorRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const pagination_1 = require("../../cosmos/base/query/v1beta1/pagination");
const manager_1 = require("./manager");
const operator_1 = require("./operator");
const params_1 = require("./params");
exports.protobufPackage = "enreach.manager";
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
function createBaseQueryGetOperatorRequest() {
    return { operatorAccount: "" };
}
exports.QueryGetOperatorRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.operatorAccount !== "") {
            writer.uint32(10).string(message.operatorAccount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetOperatorRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.operatorAccount = reader.string();
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
        return { operatorAccount: isSet(object.operatorAccount) ? String(object.operatorAccount) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.operatorAccount !== "") {
            obj.operatorAccount = message.operatorAccount;
        }
        return obj;
    },
    create(base) {
        return exports.QueryGetOperatorRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetOperatorRequest();
        message.operatorAccount = object.operatorAccount ?? "";
        return message;
    },
};
function createBaseQueryGetOperatorResponse() {
    return { Operator: undefined };
}
exports.QueryGetOperatorResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.Operator !== undefined) {
            operator_1.Operator.encode(message.Operator, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetOperatorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.Operator = operator_1.Operator.decode(reader, reader.uint32());
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
        return { Operator: isSet(object.Operator) ? operator_1.Operator.fromJSON(object.Operator) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.Operator !== undefined) {
            obj.Operator = operator_1.Operator.toJSON(message.Operator);
        }
        return obj;
    },
    create(base) {
        return exports.QueryGetOperatorResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetOperatorResponse();
        message.Operator = (object.Operator !== undefined && object.Operator !== null)
            ? operator_1.Operator.fromPartial(object.Operator)
            : undefined;
        return message;
    },
};
function createBaseQueryAllOperatorRequest() {
    return { pagination: undefined };
}
exports.QueryAllOperatorRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllOperatorRequest();
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
        return exports.QueryAllOperatorRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryAllOperatorRequest();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryAllOperatorResponse() {
    return { Operator: [], pagination: undefined };
}
exports.QueryAllOperatorResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.Operator) {
            operator_1.Operator.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllOperatorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.Operator.push(operator_1.Operator.decode(reader, reader.uint32()));
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
            Operator: Array.isArray(object?.Operator) ? object.Operator.map((e) => operator_1.Operator.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.Operator?.length) {
            obj.Operator = message.Operator.map((e) => operator_1.Operator.toJSON(e));
        }
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageResponse.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.QueryAllOperatorResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryAllOperatorResponse();
        message.Operator = object.Operator?.map((e) => operator_1.Operator.fromPartial(e)) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryGetManagerRequest() {
    return { managerAccount: "" };
}
exports.QueryGetManagerRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.managerAccount !== "") {
            writer.uint32(10).string(message.managerAccount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetManagerRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.managerAccount = reader.string();
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
        return { managerAccount: isSet(object.managerAccount) ? String(object.managerAccount) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.managerAccount !== "") {
            obj.managerAccount = message.managerAccount;
        }
        return obj;
    },
    create(base) {
        return exports.QueryGetManagerRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetManagerRequest();
        message.managerAccount = object.managerAccount ?? "";
        return message;
    },
};
function createBaseQueryGetManagerResponse() {
    return { Manager: undefined };
}
exports.QueryGetManagerResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.Manager !== undefined) {
            manager_1.Manager.encode(message.Manager, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetManagerResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.Manager = manager_1.Manager.decode(reader, reader.uint32());
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
        return { Manager: isSet(object.Manager) ? manager_1.Manager.fromJSON(object.Manager) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.Manager !== undefined) {
            obj.Manager = manager_1.Manager.toJSON(message.Manager);
        }
        return obj;
    },
    create(base) {
        return exports.QueryGetManagerResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetManagerResponse();
        message.Manager = (object.Manager !== undefined && object.Manager !== null)
            ? manager_1.Manager.fromPartial(object.Manager)
            : undefined;
        return message;
    },
};
function createBaseQueryAllManagerRequest() {
    return { pagination: undefined };
}
exports.QueryAllManagerRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllManagerRequest();
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
        return exports.QueryAllManagerRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryAllManagerRequest();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryAllManagerResponse() {
    return { Manager: [], pagination: undefined };
}
exports.QueryAllManagerResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.Manager) {
            manager_1.Manager.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllManagerResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.Manager.push(manager_1.Manager.decode(reader, reader.uint32()));
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
            Manager: Array.isArray(object?.Manager) ? object.Manager.map((e) => manager_1.Manager.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.Manager?.length) {
            obj.Manager = message.Manager.map((e) => manager_1.Manager.toJSON(e));
        }
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageResponse.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.QueryAllManagerResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryAllManagerResponse();
        message.Manager = object.Manager?.map((e) => manager_1.Manager.fromPartial(e)) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryGetManagerByRegionRequest() {
    return { regionCode: "" };
}
exports.QueryGetManagerByRegionRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.regionCode !== "") {
            writer.uint32(10).string(message.regionCode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetManagerByRegionRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.regionCode = reader.string();
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
        return { regionCode: isSet(object.regionCode) ? String(object.regionCode) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.regionCode !== "") {
            obj.regionCode = message.regionCode;
        }
        return obj;
    },
    create(base) {
        return exports.QueryGetManagerByRegionRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetManagerByRegionRequest();
        message.regionCode = object.regionCode ?? "";
        return message;
    },
};
function createBaseQueryGetManagerByRegionResponse() {
    return { managers: [] };
}
exports.QueryGetManagerByRegionResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.managers) {
            manager_1.Manager.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetManagerByRegionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.managers.push(manager_1.Manager.decode(reader, reader.uint32()));
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
        return { managers: Array.isArray(object?.managers) ? object.managers.map((e) => manager_1.Manager.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.managers?.length) {
            obj.managers = message.managers.map((e) => manager_1.Manager.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.QueryGetManagerByRegionResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetManagerByRegionResponse();
        message.managers = object.managers?.map((e) => manager_1.Manager.fromPartial(e)) || [];
        return message;
    },
};
exports.QueryServiceName = "enreach.manager.Query";
class QueryClientImpl {
    constructor(rpc, opts) {
        this.service = opts?.service || exports.QueryServiceName;
        this.rpc = rpc;
        this.Params = this.Params.bind(this);
        this.Operator = this.Operator.bind(this);
        this.OperatorAll = this.OperatorAll.bind(this);
        this.Manager = this.Manager.bind(this);
        this.ManagerAll = this.ManagerAll.bind(this);
        this.GetManagerByRegion = this.GetManagerByRegion.bind(this);
    }
    Params(request) {
        const data = exports.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Params", data);
        return promise.then((data) => exports.QueryParamsResponse.decode(minimal_1.default.Reader.create(data)));
    }
    Operator(request) {
        const data = exports.QueryGetOperatorRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Operator", data);
        return promise.then((data) => exports.QueryGetOperatorResponse.decode(minimal_1.default.Reader.create(data)));
    }
    OperatorAll(request) {
        const data = exports.QueryAllOperatorRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "OperatorAll", data);
        return promise.then((data) => exports.QueryAllOperatorResponse.decode(minimal_1.default.Reader.create(data)));
    }
    Manager(request) {
        const data = exports.QueryGetManagerRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Manager", data);
        return promise.then((data) => exports.QueryGetManagerResponse.decode(minimal_1.default.Reader.create(data)));
    }
    ManagerAll(request) {
        const data = exports.QueryAllManagerRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "ManagerAll", data);
        return promise.then((data) => exports.QueryAllManagerResponse.decode(minimal_1.default.Reader.create(data)));
    }
    GetManagerByRegion(request) {
        const data = exports.QueryGetManagerByRegionRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "GetManagerByRegion", data);
        return promise.then((data) => exports.QueryGetManagerByRegionResponse.decode(minimal_1.default.Reader.create(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
function isSet(value) {
    return value !== null && value !== undefined;
}
