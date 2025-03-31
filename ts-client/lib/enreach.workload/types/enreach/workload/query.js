"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryServiceName = exports.QueryGetSuperiorResponse = exports.QueryGetSuperiorRequest = exports.QueryGetAllEpochProcessDataResponse = exports.QueryGetAllEpochProcessDataRequest = exports.QueryGetEpochProcessDataResponse = exports.QueryGetEpochProcessDataRequest = exports.QueryGetHistoryEpochDataDepthResponse = exports.QueryGetHistoryEpochDataDepthRequest = exports.QueryGetWorkreportProcessBatchSizeResponse = exports.QueryGetWorkreportProcessBatchSizeRequest = exports.QueryGetAllWorkreportByEpochResponse = exports.QueryGetAllWorkreportByEpochRequest = exports.QueryGetWorkreportResponse = exports.QueryGetWorkreportRequest = exports.QueryGetAllManagerWorkloadByEpochResponse = exports.QueryGetAllManagerWorkloadByEpochRequest = exports.QueryGetManagerWorkloadResponse = exports.QueryGetManagerWorkloadRequest = exports.QueryGetAllNodeWorkloadByEpochResponse = exports.QueryGetAllNodeWorkloadByEpochRequest = exports.QueryGetNodeWorkloadResponse = exports.QueryGetNodeWorkloadRequest = exports.QueryGetCurrentEpochResponse = exports.QueryGetCurrentEpochRequest = exports.QueryGetEpochLengthResponse = exports.QueryGetEpochLengthRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const pagination_1 = require("../../cosmos/base/query/v1beta1/pagination");
const params_1 = require("./params");
const superior_1 = require("./superior");
const workload_1 = require("./workload");
const workreport_1 = require("./workreport");
exports.protobufPackage = "enreach.workload";
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
function createBaseQueryGetEpochLengthRequest() {
    return {};
}
exports.QueryGetEpochLengthRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetEpochLengthRequest();
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
        return exports.QueryGetEpochLengthRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseQueryGetEpochLengthRequest();
        return message;
    },
};
function createBaseQueryGetEpochLengthResponse() {
    return { epochLength: 0 };
}
exports.QueryGetEpochLengthResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.epochLength !== 0) {
            writer.uint32(8).uint64(message.epochLength);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetEpochLengthResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.epochLength = longToNumber(reader.uint64());
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
        return { epochLength: isSet(object.epochLength) ? Number(object.epochLength) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.epochLength !== 0) {
            obj.epochLength = Math.round(message.epochLength);
        }
        return obj;
    },
    create(base) {
        return exports.QueryGetEpochLengthResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetEpochLengthResponse();
        message.epochLength = object.epochLength ?? 0;
        return message;
    },
};
function createBaseQueryGetCurrentEpochRequest() {
    return {};
}
exports.QueryGetCurrentEpochRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetCurrentEpochRequest();
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
        return exports.QueryGetCurrentEpochRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseQueryGetCurrentEpochRequest();
        return message;
    },
};
function createBaseQueryGetCurrentEpochResponse() {
    return { currentEpoch: 0 };
}
exports.QueryGetCurrentEpochResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.currentEpoch !== 0) {
            writer.uint32(8).uint64(message.currentEpoch);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetCurrentEpochResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.currentEpoch = longToNumber(reader.uint64());
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
        return { currentEpoch: isSet(object.currentEpoch) ? Number(object.currentEpoch) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.currentEpoch !== 0) {
            obj.currentEpoch = Math.round(message.currentEpoch);
        }
        return obj;
    },
    create(base) {
        return exports.QueryGetCurrentEpochResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetCurrentEpochResponse();
        message.currentEpoch = object.currentEpoch ?? 0;
        return message;
    },
};
function createBaseQueryGetNodeWorkloadRequest() {
    return { epoch: 0, nodeID: "" };
}
exports.QueryGetNodeWorkloadRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.epoch !== 0) {
            writer.uint32(8).uint64(message.epoch);
        }
        if (message.nodeID !== "") {
            writer.uint32(18).string(message.nodeID);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetNodeWorkloadRequest();
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
        return obj;
    },
    create(base) {
        return exports.QueryGetNodeWorkloadRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetNodeWorkloadRequest();
        message.epoch = object.epoch ?? 0;
        message.nodeID = object.nodeID ?? "";
        return message;
    },
};
function createBaseQueryGetNodeWorkloadResponse() {
    return { NodeWorkload: undefined };
}
exports.QueryGetNodeWorkloadResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.NodeWorkload !== undefined) {
            workload_1.NodeWorkload.encode(message.NodeWorkload, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetNodeWorkloadResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.NodeWorkload = workload_1.NodeWorkload.decode(reader, reader.uint32());
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
        return { NodeWorkload: isSet(object.NodeWorkload) ? workload_1.NodeWorkload.fromJSON(object.NodeWorkload) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.NodeWorkload !== undefined) {
            obj.NodeWorkload = workload_1.NodeWorkload.toJSON(message.NodeWorkload);
        }
        return obj;
    },
    create(base) {
        return exports.QueryGetNodeWorkloadResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetNodeWorkloadResponse();
        message.NodeWorkload = (object.NodeWorkload !== undefined && object.NodeWorkload !== null)
            ? workload_1.NodeWorkload.fromPartial(object.NodeWorkload)
            : undefined;
        return message;
    },
};
function createBaseQueryGetAllNodeWorkloadByEpochRequest() {
    return { epoch: 0, pagination: undefined };
}
exports.QueryGetAllNodeWorkloadByEpochRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.epoch !== 0) {
            writer.uint32(8).uint64(message.epoch);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetAllNodeWorkloadByEpochRequest();
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
        return {
            epoch: isSet(object.epoch) ? Number(object.epoch) : 0,
            pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.epoch !== 0) {
            obj.epoch = Math.round(message.epoch);
        }
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageRequest.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.QueryGetAllNodeWorkloadByEpochRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetAllNodeWorkloadByEpochRequest();
        message.epoch = object.epoch ?? 0;
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryGetAllNodeWorkloadByEpochResponse() {
    return { NodeWorkloads: [], pagination: undefined };
}
exports.QueryGetAllNodeWorkloadByEpochResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.NodeWorkloads) {
            workload_1.NodeWorkload.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetAllNodeWorkloadByEpochResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.NodeWorkloads.push(workload_1.NodeWorkload.decode(reader, reader.uint32()));
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
            NodeWorkloads: Array.isArray(object?.NodeWorkloads)
                ? object.NodeWorkloads.map((e) => workload_1.NodeWorkload.fromJSON(e))
                : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.NodeWorkloads?.length) {
            obj.NodeWorkloads = message.NodeWorkloads.map((e) => workload_1.NodeWorkload.toJSON(e));
        }
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageResponse.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.QueryGetAllNodeWorkloadByEpochResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetAllNodeWorkloadByEpochResponse();
        message.NodeWorkloads = object.NodeWorkloads?.map((e) => workload_1.NodeWorkload.fromPartial(e)) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryGetManagerWorkloadRequest() {
    return { epoch: 0, managerAccount: "" };
}
exports.QueryGetManagerWorkloadRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.epoch !== 0) {
            writer.uint32(8).uint64(message.epoch);
        }
        if (message.managerAccount !== "") {
            writer.uint32(18).string(message.managerAccount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetManagerWorkloadRequest();
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
        return obj;
    },
    create(base) {
        return exports.QueryGetManagerWorkloadRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetManagerWorkloadRequest();
        message.epoch = object.epoch ?? 0;
        message.managerAccount = object.managerAccount ?? "";
        return message;
    },
};
function createBaseQueryGetManagerWorkloadResponse() {
    return { ManagerWorkload: undefined };
}
exports.QueryGetManagerWorkloadResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.ManagerWorkload !== undefined) {
            workload_1.ManagerWorkload.encode(message.ManagerWorkload, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetManagerWorkloadResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.ManagerWorkload = workload_1.ManagerWorkload.decode(reader, reader.uint32());
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
            ManagerWorkload: isSet(object.ManagerWorkload) ? workload_1.ManagerWorkload.fromJSON(object.ManagerWorkload) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.ManagerWorkload !== undefined) {
            obj.ManagerWorkload = workload_1.ManagerWorkload.toJSON(message.ManagerWorkload);
        }
        return obj;
    },
    create(base) {
        return exports.QueryGetManagerWorkloadResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetManagerWorkloadResponse();
        message.ManagerWorkload = (object.ManagerWorkload !== undefined && object.ManagerWorkload !== null)
            ? workload_1.ManagerWorkload.fromPartial(object.ManagerWorkload)
            : undefined;
        return message;
    },
};
function createBaseQueryGetAllManagerWorkloadByEpochRequest() {
    return { epoch: 0, pagination: undefined };
}
exports.QueryGetAllManagerWorkloadByEpochRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.epoch !== 0) {
            writer.uint32(8).uint64(message.epoch);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetAllManagerWorkloadByEpochRequest();
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
        return {
            epoch: isSet(object.epoch) ? Number(object.epoch) : 0,
            pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.epoch !== 0) {
            obj.epoch = Math.round(message.epoch);
        }
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageRequest.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.QueryGetAllManagerWorkloadByEpochRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetAllManagerWorkloadByEpochRequest();
        message.epoch = object.epoch ?? 0;
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryGetAllManagerWorkloadByEpochResponse() {
    return { ManagerWorkloads: [], pagination: undefined };
}
exports.QueryGetAllManagerWorkloadByEpochResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.ManagerWorkloads) {
            workload_1.ManagerWorkload.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetAllManagerWorkloadByEpochResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.ManagerWorkloads.push(workload_1.ManagerWorkload.decode(reader, reader.uint32()));
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
            ManagerWorkloads: Array.isArray(object?.ManagerWorkloads)
                ? object.ManagerWorkloads.map((e) => workload_1.ManagerWorkload.fromJSON(e))
                : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.ManagerWorkloads?.length) {
            obj.ManagerWorkloads = message.ManagerWorkloads.map((e) => workload_1.ManagerWorkload.toJSON(e));
        }
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageResponse.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.QueryGetAllManagerWorkloadByEpochResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetAllManagerWorkloadByEpochResponse();
        message.ManagerWorkloads = object.ManagerWorkloads?.map((e) => workload_1.ManagerWorkload.fromPartial(e)) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryGetWorkreportRequest() {
    return { epoch: 0, nodeID: "" };
}
exports.QueryGetWorkreportRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.epoch !== 0) {
            writer.uint32(8).uint64(message.epoch);
        }
        if (message.nodeID !== "") {
            writer.uint32(18).string(message.nodeID);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetWorkreportRequest();
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
        return obj;
    },
    create(base) {
        return exports.QueryGetWorkreportRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetWorkreportRequest();
        message.epoch = object.epoch ?? 0;
        message.nodeID = object.nodeID ?? "";
        return message;
    },
};
function createBaseQueryGetWorkreportResponse() {
    return { Workreport: undefined };
}
exports.QueryGetWorkreportResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.Workreport !== undefined) {
            workreport_1.Workreport.encode(message.Workreport, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetWorkreportResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.Workreport = workreport_1.Workreport.decode(reader, reader.uint32());
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
        return { Workreport: isSet(object.Workreport) ? workreport_1.Workreport.fromJSON(object.Workreport) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.Workreport !== undefined) {
            obj.Workreport = workreport_1.Workreport.toJSON(message.Workreport);
        }
        return obj;
    },
    create(base) {
        return exports.QueryGetWorkreportResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetWorkreportResponse();
        message.Workreport = (object.Workreport !== undefined && object.Workreport !== null)
            ? workreport_1.Workreport.fromPartial(object.Workreport)
            : undefined;
        return message;
    },
};
function createBaseQueryGetAllWorkreportByEpochRequest() {
    return { epoch: 0, pagination: undefined };
}
exports.QueryGetAllWorkreportByEpochRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.epoch !== 0) {
            writer.uint32(8).uint64(message.epoch);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetAllWorkreportByEpochRequest();
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
        return {
            epoch: isSet(object.epoch) ? Number(object.epoch) : 0,
            pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.epoch !== 0) {
            obj.epoch = Math.round(message.epoch);
        }
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageRequest.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.QueryGetAllWorkreportByEpochRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetAllWorkreportByEpochRequest();
        message.epoch = object.epoch ?? 0;
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryGetAllWorkreportByEpochResponse() {
    return { Workreports: [], pagination: undefined };
}
exports.QueryGetAllWorkreportByEpochResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.Workreports) {
            workreport_1.Workreport.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetAllWorkreportByEpochResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.Workreports.push(workreport_1.Workreport.decode(reader, reader.uint32()));
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
            Workreports: Array.isArray(object?.Workreports) ? object.Workreports.map((e) => workreport_1.Workreport.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.Workreports?.length) {
            obj.Workreports = message.Workreports.map((e) => workreport_1.Workreport.toJSON(e));
        }
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageResponse.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.QueryGetAllWorkreportByEpochResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetAllWorkreportByEpochResponse();
        message.Workreports = object.Workreports?.map((e) => workreport_1.Workreport.fromPartial(e)) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryGetWorkreportProcessBatchSizeRequest() {
    return {};
}
exports.QueryGetWorkreportProcessBatchSizeRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetWorkreportProcessBatchSizeRequest();
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
        return exports.QueryGetWorkreportProcessBatchSizeRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseQueryGetWorkreportProcessBatchSizeRequest();
        return message;
    },
};
function createBaseQueryGetWorkreportProcessBatchSizeResponse() {
    return { batchSize: 0 };
}
exports.QueryGetWorkreportProcessBatchSizeResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.batchSize !== 0) {
            writer.uint32(8).uint64(message.batchSize);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetWorkreportProcessBatchSizeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.batchSize = longToNumber(reader.uint64());
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
        return { batchSize: isSet(object.batchSize) ? Number(object.batchSize) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.batchSize !== 0) {
            obj.batchSize = Math.round(message.batchSize);
        }
        return obj;
    },
    create(base) {
        return exports.QueryGetWorkreportProcessBatchSizeResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetWorkreportProcessBatchSizeResponse();
        message.batchSize = object.batchSize ?? 0;
        return message;
    },
};
function createBaseQueryGetHistoryEpochDataDepthRequest() {
    return {};
}
exports.QueryGetHistoryEpochDataDepthRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetHistoryEpochDataDepthRequest();
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
        return exports.QueryGetHistoryEpochDataDepthRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseQueryGetHistoryEpochDataDepthRequest();
        return message;
    },
};
function createBaseQueryGetHistoryEpochDataDepthResponse() {
    return { depth: 0 };
}
exports.QueryGetHistoryEpochDataDepthResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.depth !== 0) {
            writer.uint32(8).uint64(message.depth);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetHistoryEpochDataDepthResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.depth = longToNumber(reader.uint64());
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
        return { depth: isSet(object.depth) ? Number(object.depth) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.depth !== 0) {
            obj.depth = Math.round(message.depth);
        }
        return obj;
    },
    create(base) {
        return exports.QueryGetHistoryEpochDataDepthResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetHistoryEpochDataDepthResponse();
        message.depth = object.depth ?? 0;
        return message;
    },
};
function createBaseQueryGetEpochProcessDataRequest() {
    return { epoch: 0 };
}
exports.QueryGetEpochProcessDataRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.epoch !== 0) {
            writer.uint32(8).uint64(message.epoch);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetEpochProcessDataRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.epoch = longToNumber(reader.uint64());
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
        return { epoch: isSet(object.epoch) ? Number(object.epoch) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.epoch !== 0) {
            obj.epoch = Math.round(message.epoch);
        }
        return obj;
    },
    create(base) {
        return exports.QueryGetEpochProcessDataRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetEpochProcessDataRequest();
        message.epoch = object.epoch ?? 0;
        return message;
    },
};
function createBaseQueryGetEpochProcessDataResponse() {
    return { EpochProcessData: undefined };
}
exports.QueryGetEpochProcessDataResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.EpochProcessData !== undefined) {
            workreport_1.EpochProcessData.encode(message.EpochProcessData, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetEpochProcessDataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.EpochProcessData = workreport_1.EpochProcessData.decode(reader, reader.uint32());
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
            EpochProcessData: isSet(object.EpochProcessData) ? workreport_1.EpochProcessData.fromJSON(object.EpochProcessData) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.EpochProcessData !== undefined) {
            obj.EpochProcessData = workreport_1.EpochProcessData.toJSON(message.EpochProcessData);
        }
        return obj;
    },
    create(base) {
        return exports.QueryGetEpochProcessDataResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetEpochProcessDataResponse();
        message.EpochProcessData = (object.EpochProcessData !== undefined && object.EpochProcessData !== null)
            ? workreport_1.EpochProcessData.fromPartial(object.EpochProcessData)
            : undefined;
        return message;
    },
};
function createBaseQueryGetAllEpochProcessDataRequest() {
    return { pagination: undefined };
}
exports.QueryGetAllEpochProcessDataRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetAllEpochProcessDataRequest();
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
        return exports.QueryGetAllEpochProcessDataRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetAllEpochProcessDataRequest();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryGetAllEpochProcessDataResponse() {
    return { EpochProcessDatas: [], pagination: undefined };
}
exports.QueryGetAllEpochProcessDataResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.EpochProcessDatas) {
            workreport_1.EpochProcessData.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetAllEpochProcessDataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.EpochProcessDatas.push(workreport_1.EpochProcessData.decode(reader, reader.uint32()));
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
            EpochProcessDatas: Array.isArray(object?.EpochProcessDatas)
                ? object.EpochProcessDatas.map((e) => workreport_1.EpochProcessData.fromJSON(e))
                : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.EpochProcessDatas?.length) {
            obj.EpochProcessDatas = message.EpochProcessDatas.map((e) => workreport_1.EpochProcessData.toJSON(e));
        }
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageResponse.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.QueryGetAllEpochProcessDataResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetAllEpochProcessDataResponse();
        message.EpochProcessDatas = object.EpochProcessDatas?.map((e) => workreport_1.EpochProcessData.fromPartial(e)) || [];
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
exports.QueryServiceName = "enreach.workload.Query";
class QueryClientImpl {
    constructor(rpc, opts) {
        this.service = opts?.service || exports.QueryServiceName;
        this.rpc = rpc;
        this.Params = this.Params.bind(this);
        this.EpochLength = this.EpochLength.bind(this);
        this.CurrentEpoch = this.CurrentEpoch.bind(this);
        this.NodeWorkload = this.NodeWorkload.bind(this);
        this.AllNodeWorkloadByEpoch = this.AllNodeWorkloadByEpoch.bind(this);
        this.ManagerWorkload = this.ManagerWorkload.bind(this);
        this.AllManagerWorkloadByEpoch = this.AllManagerWorkloadByEpoch.bind(this);
        this.Workreport = this.Workreport.bind(this);
        this.AllWorkreportByEpoch = this.AllWorkreportByEpoch.bind(this);
        this.WorkreportProcessBatchSize = this.WorkreportProcessBatchSize.bind(this);
        this.HistoryEpochDataDepth = this.HistoryEpochDataDepth.bind(this);
        this.EpochProcessData = this.EpochProcessData.bind(this);
        this.AllEpochProcessData = this.AllEpochProcessData.bind(this);
        this.Superior = this.Superior.bind(this);
    }
    Params(request) {
        const data = exports.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Params", data);
        return promise.then((data) => exports.QueryParamsResponse.decode(minimal_1.default.Reader.create(data)));
    }
    EpochLength(request) {
        const data = exports.QueryGetEpochLengthRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "EpochLength", data);
        return promise.then((data) => exports.QueryGetEpochLengthResponse.decode(minimal_1.default.Reader.create(data)));
    }
    CurrentEpoch(request) {
        const data = exports.QueryGetCurrentEpochRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "CurrentEpoch", data);
        return promise.then((data) => exports.QueryGetCurrentEpochResponse.decode(minimal_1.default.Reader.create(data)));
    }
    NodeWorkload(request) {
        const data = exports.QueryGetNodeWorkloadRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "NodeWorkload", data);
        return promise.then((data) => exports.QueryGetNodeWorkloadResponse.decode(minimal_1.default.Reader.create(data)));
    }
    AllNodeWorkloadByEpoch(request) {
        const data = exports.QueryGetAllNodeWorkloadByEpochRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "AllNodeWorkloadByEpoch", data);
        return promise.then((data) => exports.QueryGetAllNodeWorkloadByEpochResponse.decode(minimal_1.default.Reader.create(data)));
    }
    ManagerWorkload(request) {
        const data = exports.QueryGetManagerWorkloadRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "ManagerWorkload", data);
        return promise.then((data) => exports.QueryGetManagerWorkloadResponse.decode(minimal_1.default.Reader.create(data)));
    }
    AllManagerWorkloadByEpoch(request) {
        const data = exports.QueryGetAllManagerWorkloadByEpochRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "AllManagerWorkloadByEpoch", data);
        return promise.then((data) => exports.QueryGetAllManagerWorkloadByEpochResponse.decode(minimal_1.default.Reader.create(data)));
    }
    Workreport(request) {
        const data = exports.QueryGetWorkreportRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Workreport", data);
        return promise.then((data) => exports.QueryGetWorkreportResponse.decode(minimal_1.default.Reader.create(data)));
    }
    AllWorkreportByEpoch(request) {
        const data = exports.QueryGetAllWorkreportByEpochRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "AllWorkreportByEpoch", data);
        return promise.then((data) => exports.QueryGetAllWorkreportByEpochResponse.decode(minimal_1.default.Reader.create(data)));
    }
    WorkreportProcessBatchSize(request) {
        const data = exports.QueryGetWorkreportProcessBatchSizeRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "WorkreportProcessBatchSize", data);
        return promise.then((data) => exports.QueryGetWorkreportProcessBatchSizeResponse.decode(minimal_1.default.Reader.create(data)));
    }
    HistoryEpochDataDepth(request) {
        const data = exports.QueryGetHistoryEpochDataDepthRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "HistoryEpochDataDepth", data);
        return promise.then((data) => exports.QueryGetHistoryEpochDataDepthResponse.decode(minimal_1.default.Reader.create(data)));
    }
    EpochProcessData(request) {
        const data = exports.QueryGetEpochProcessDataRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "EpochProcessData", data);
        return promise.then((data) => exports.QueryGetEpochProcessDataResponse.decode(minimal_1.default.Reader.create(data)));
    }
    AllEpochProcessData(request) {
        const data = exports.QueryGetAllEpochProcessDataRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "AllEpochProcessData", data);
        return promise.then((data) => exports.QueryGetAllEpochProcessDataResponse.decode(minimal_1.default.Reader.create(data)));
    }
    Superior(request) {
        const data = exports.QueryGetSuperiorRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Superior", data);
        return promise.then((data) => exports.QueryGetSuperiorResponse.decode(minimal_1.default.Reader.create(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
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
