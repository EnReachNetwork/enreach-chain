"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryGetEraProcessDataRequest = exports.QueryGetAllReputationPointResponse = exports.QueryGetAllReputationPointRequest = exports.QueryGetReputationPointResponse = exports.QueryGetReputationPointRequest = exports.QueryGetAllReputationDeltaPointByEraResponse = exports.QueryGetAllReputationDeltaPointByEraRequest = exports.QueryGetReputationDeltaPointResponse = exports.QueryGetReputationDeltaPointRequest = exports.QueryGetAllReputationPointChangeDataByEraResponse = exports.QueryGetAllReputationPointChangeDataByEraRequest = exports.QueryGetReputationPointChangeDataResponse = exports.QueryGetReputationPointChangeDataRequest = exports.QueryGetCurrentEraResponse = exports.QueryGetCurrentEraRequest = exports.QueryGetEraLengthResponse = exports.QueryGetEraLengthRequest = exports.QueryGetSuperiorResponse = exports.QueryGetSuperiorRequest = exports.QueryGetAllEpochProcessDataResponse = exports.QueryGetAllEpochProcessDataRequest = exports.QueryGetEpochProcessDataResponse = exports.QueryGetEpochProcessDataRequest = exports.QueryGetHistoryEpochDataDepthResponse = exports.QueryGetHistoryEpochDataDepthRequest = exports.QueryGetWorkreportProcessBatchSizeResponse = exports.QueryGetWorkreportProcessBatchSizeRequest = exports.QueryGetAllWorkreportByEpochResponse = exports.QueryGetAllWorkreportByEpochRequest = exports.QueryGetWorkreportResponse = exports.QueryGetWorkreportRequest = exports.QueryGetAllManagerRPWorkloadByEraResponse = exports.QueryGetAllManagerRPWorkloadByEraRequest = exports.QueryGetManagerRPWorkloadResponse = exports.QueryGetManagerRPWorkloadRequest = exports.QueryGetAllManagerWRWorkloadByEpochResponse = exports.QueryGetAllManagerWRWorkloadByEpochRequest = exports.QueryGetManagerWRWorkloadResponse = exports.QueryGetManagerWRWorkloadRequest = exports.QueryGetAllNodeWorkloadByEpochResponse = exports.QueryGetAllNodeWorkloadByEpochRequest = exports.QueryGetNodeWorkloadResponse = exports.QueryGetNodeWorkloadRequest = exports.QueryGetCurrentEpochResponse = exports.QueryGetCurrentEpochRequest = exports.QueryGetEpochLengthResponse = exports.QueryGetEpochLengthRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.protobufPackage = void 0;
exports.QueryClientImpl = exports.QueryServiceName = exports.QueryGetAllEraProcessDataResponse = exports.QueryGetAllEraProcessDataRequest = exports.QueryGetEraProcessDataResponse = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const pagination_1 = require("../../cosmos/base/query/v1beta1/pagination");
const params_1 = require("./params");
const reputationpoint_1 = require("./reputationpoint");
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
function createBaseQueryGetManagerWRWorkloadRequest() {
    return { epoch: 0, managerAccount: "" };
}
exports.QueryGetManagerWRWorkloadRequest = {
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
        const message = createBaseQueryGetManagerWRWorkloadRequest();
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
        return exports.QueryGetManagerWRWorkloadRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetManagerWRWorkloadRequest();
        message.epoch = object.epoch ?? 0;
        message.managerAccount = object.managerAccount ?? "";
        return message;
    },
};
function createBaseQueryGetManagerWRWorkloadResponse() {
    return { ManagerWRWorkload: undefined };
}
exports.QueryGetManagerWRWorkloadResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.ManagerWRWorkload !== undefined) {
            workload_1.ManagerWRWorkload.encode(message.ManagerWRWorkload, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetManagerWRWorkloadResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.ManagerWRWorkload = workload_1.ManagerWRWorkload.decode(reader, reader.uint32());
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
            ManagerWRWorkload: isSet(object.ManagerWRWorkload)
                ? workload_1.ManagerWRWorkload.fromJSON(object.ManagerWRWorkload)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.ManagerWRWorkload !== undefined) {
            obj.ManagerWRWorkload = workload_1.ManagerWRWorkload.toJSON(message.ManagerWRWorkload);
        }
        return obj;
    },
    create(base) {
        return exports.QueryGetManagerWRWorkloadResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetManagerWRWorkloadResponse();
        message.ManagerWRWorkload = (object.ManagerWRWorkload !== undefined && object.ManagerWRWorkload !== null)
            ? workload_1.ManagerWRWorkload.fromPartial(object.ManagerWRWorkload)
            : undefined;
        return message;
    },
};
function createBaseQueryGetAllManagerWRWorkloadByEpochRequest() {
    return { epoch: 0, pagination: undefined };
}
exports.QueryGetAllManagerWRWorkloadByEpochRequest = {
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
        const message = createBaseQueryGetAllManagerWRWorkloadByEpochRequest();
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
        return exports.QueryGetAllManagerWRWorkloadByEpochRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetAllManagerWRWorkloadByEpochRequest();
        message.epoch = object.epoch ?? 0;
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryGetAllManagerWRWorkloadByEpochResponse() {
    return { ManagerWRWorkloads: [], pagination: undefined };
}
exports.QueryGetAllManagerWRWorkloadByEpochResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.ManagerWRWorkloads) {
            workload_1.ManagerWRWorkload.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetAllManagerWRWorkloadByEpochResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.ManagerWRWorkloads.push(workload_1.ManagerWRWorkload.decode(reader, reader.uint32()));
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
            ManagerWRWorkloads: Array.isArray(object?.ManagerWRWorkloads)
                ? object.ManagerWRWorkloads.map((e) => workload_1.ManagerWRWorkload.fromJSON(e))
                : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.ManagerWRWorkloads?.length) {
            obj.ManagerWRWorkloads = message.ManagerWRWorkloads.map((e) => workload_1.ManagerWRWorkload.toJSON(e));
        }
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageResponse.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.QueryGetAllManagerWRWorkloadByEpochResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetAllManagerWRWorkloadByEpochResponse();
        message.ManagerWRWorkloads = object.ManagerWRWorkloads?.map((e) => workload_1.ManagerWRWorkload.fromPartial(e)) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryGetManagerRPWorkloadRequest() {
    return { era: 0, managerAccount: "" };
}
exports.QueryGetManagerRPWorkloadRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.era !== 0) {
            writer.uint32(8).uint64(message.era);
        }
        if (message.managerAccount !== "") {
            writer.uint32(18).string(message.managerAccount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetManagerRPWorkloadRequest();
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
        return obj;
    },
    create(base) {
        return exports.QueryGetManagerRPWorkloadRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetManagerRPWorkloadRequest();
        message.era = object.era ?? 0;
        message.managerAccount = object.managerAccount ?? "";
        return message;
    },
};
function createBaseQueryGetManagerRPWorkloadResponse() {
    return { ManagerRPWorkload: undefined };
}
exports.QueryGetManagerRPWorkloadResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.ManagerRPWorkload !== undefined) {
            workload_1.ManagerRPWorkload.encode(message.ManagerRPWorkload, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetManagerRPWorkloadResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.ManagerRPWorkload = workload_1.ManagerRPWorkload.decode(reader, reader.uint32());
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
            ManagerRPWorkload: isSet(object.ManagerRPWorkload)
                ? workload_1.ManagerRPWorkload.fromJSON(object.ManagerRPWorkload)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.ManagerRPWorkload !== undefined) {
            obj.ManagerRPWorkload = workload_1.ManagerRPWorkload.toJSON(message.ManagerRPWorkload);
        }
        return obj;
    },
    create(base) {
        return exports.QueryGetManagerRPWorkloadResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetManagerRPWorkloadResponse();
        message.ManagerRPWorkload = (object.ManagerRPWorkload !== undefined && object.ManagerRPWorkload !== null)
            ? workload_1.ManagerRPWorkload.fromPartial(object.ManagerRPWorkload)
            : undefined;
        return message;
    },
};
function createBaseQueryGetAllManagerRPWorkloadByEraRequest() {
    return { era: 0, pagination: undefined };
}
exports.QueryGetAllManagerRPWorkloadByEraRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.era !== 0) {
            writer.uint32(8).uint64(message.era);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetAllManagerRPWorkloadByEraRequest();
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
            era: isSet(object.era) ? Number(object.era) : 0,
            pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.era !== 0) {
            obj.era = Math.round(message.era);
        }
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageRequest.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.QueryGetAllManagerRPWorkloadByEraRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetAllManagerRPWorkloadByEraRequest();
        message.era = object.era ?? 0;
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryGetAllManagerRPWorkloadByEraResponse() {
    return { ManagerRPWorkloads: [], pagination: undefined };
}
exports.QueryGetAllManagerRPWorkloadByEraResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.ManagerRPWorkloads) {
            workload_1.ManagerRPWorkload.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetAllManagerRPWorkloadByEraResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.ManagerRPWorkloads.push(workload_1.ManagerRPWorkload.decode(reader, reader.uint32()));
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
            ManagerRPWorkloads: Array.isArray(object?.ManagerRPWorkloads)
                ? object.ManagerRPWorkloads.map((e) => workload_1.ManagerRPWorkload.fromJSON(e))
                : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.ManagerRPWorkloads?.length) {
            obj.ManagerRPWorkloads = message.ManagerRPWorkloads.map((e) => workload_1.ManagerRPWorkload.toJSON(e));
        }
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageResponse.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.QueryGetAllManagerRPWorkloadByEraResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetAllManagerRPWorkloadByEraResponse();
        message.ManagerRPWorkloads = object.ManagerRPWorkloads?.map((e) => workload_1.ManagerRPWorkload.fromPartial(e)) || [];
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
function createBaseQueryGetEraLengthRequest() {
    return {};
}
exports.QueryGetEraLengthRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetEraLengthRequest();
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
        return exports.QueryGetEraLengthRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseQueryGetEraLengthRequest();
        return message;
    },
};
function createBaseQueryGetEraLengthResponse() {
    return { eraLength: 0 };
}
exports.QueryGetEraLengthResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.eraLength !== 0) {
            writer.uint32(8).uint64(message.eraLength);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetEraLengthResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.eraLength = longToNumber(reader.uint64());
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
        return { eraLength: isSet(object.eraLength) ? Number(object.eraLength) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.eraLength !== 0) {
            obj.eraLength = Math.round(message.eraLength);
        }
        return obj;
    },
    create(base) {
        return exports.QueryGetEraLengthResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetEraLengthResponse();
        message.eraLength = object.eraLength ?? 0;
        return message;
    },
};
function createBaseQueryGetCurrentEraRequest() {
    return {};
}
exports.QueryGetCurrentEraRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetCurrentEraRequest();
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
        return exports.QueryGetCurrentEraRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseQueryGetCurrentEraRequest();
        return message;
    },
};
function createBaseQueryGetCurrentEraResponse() {
    return { currentEra: 0 };
}
exports.QueryGetCurrentEraResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.currentEra !== 0) {
            writer.uint32(8).uint64(message.currentEra);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetCurrentEraResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.currentEra = longToNumber(reader.uint64());
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
        return { currentEra: isSet(object.currentEra) ? Number(object.currentEra) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.currentEra !== 0) {
            obj.currentEra = Math.round(message.currentEra);
        }
        return obj;
    },
    create(base) {
        return exports.QueryGetCurrentEraResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetCurrentEraResponse();
        message.currentEra = object.currentEra ?? 0;
        return message;
    },
};
function createBaseQueryGetReputationPointChangeDataRequest() {
    return { era: 0, nodeID: "" };
}
exports.QueryGetReputationPointChangeDataRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.era !== 0) {
            writer.uint32(8).uint64(message.era);
        }
        if (message.nodeID !== "") {
            writer.uint32(18).string(message.nodeID);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetReputationPointChangeDataRequest();
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
            era: isSet(object.era) ? Number(object.era) : 0,
            nodeID: isSet(object.nodeID) ? String(object.nodeID) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.era !== 0) {
            obj.era = Math.round(message.era);
        }
        if (message.nodeID !== "") {
            obj.nodeID = message.nodeID;
        }
        return obj;
    },
    create(base) {
        return exports.QueryGetReputationPointChangeDataRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetReputationPointChangeDataRequest();
        message.era = object.era ?? 0;
        message.nodeID = object.nodeID ?? "";
        return message;
    },
};
function createBaseQueryGetReputationPointChangeDataResponse() {
    return { ReputationPointChangeData: undefined };
}
exports.QueryGetReputationPointChangeDataResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.ReputationPointChangeData !== undefined) {
            reputationpoint_1.ReputationPointChangeData.encode(message.ReputationPointChangeData, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetReputationPointChangeDataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.ReputationPointChangeData = reputationpoint_1.ReputationPointChangeData.decode(reader, reader.uint32());
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
            ReputationPointChangeData: isSet(object.ReputationPointChangeData)
                ? reputationpoint_1.ReputationPointChangeData.fromJSON(object.ReputationPointChangeData)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.ReputationPointChangeData !== undefined) {
            obj.ReputationPointChangeData = reputationpoint_1.ReputationPointChangeData.toJSON(message.ReputationPointChangeData);
        }
        return obj;
    },
    create(base) {
        return exports.QueryGetReputationPointChangeDataResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetReputationPointChangeDataResponse();
        message.ReputationPointChangeData =
            (object.ReputationPointChangeData !== undefined && object.ReputationPointChangeData !== null)
                ? reputationpoint_1.ReputationPointChangeData.fromPartial(object.ReputationPointChangeData)
                : undefined;
        return message;
    },
};
function createBaseQueryGetAllReputationPointChangeDataByEraRequest() {
    return { era: 0, pagination: undefined };
}
exports.QueryGetAllReputationPointChangeDataByEraRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.era !== 0) {
            writer.uint32(8).uint64(message.era);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetAllReputationPointChangeDataByEraRequest();
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
            era: isSet(object.era) ? Number(object.era) : 0,
            pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.era !== 0) {
            obj.era = Math.round(message.era);
        }
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageRequest.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.QueryGetAllReputationPointChangeDataByEraRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetAllReputationPointChangeDataByEraRequest();
        message.era = object.era ?? 0;
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryGetAllReputationPointChangeDataByEraResponse() {
    return { ReputationPointChangeDatas: [], pagination: undefined };
}
exports.QueryGetAllReputationPointChangeDataByEraResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.ReputationPointChangeDatas) {
            reputationpoint_1.ReputationPointChangeData.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetAllReputationPointChangeDataByEraResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.ReputationPointChangeDatas.push(reputationpoint_1.ReputationPointChangeData.decode(reader, reader.uint32()));
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
            ReputationPointChangeDatas: Array.isArray(object?.ReputationPointChangeDatas)
                ? object.ReputationPointChangeDatas.map((e) => reputationpoint_1.ReputationPointChangeData.fromJSON(e))
                : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.ReputationPointChangeDatas?.length) {
            obj.ReputationPointChangeDatas = message.ReputationPointChangeDatas.map((e) => reputationpoint_1.ReputationPointChangeData.toJSON(e));
        }
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageResponse.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.QueryGetAllReputationPointChangeDataByEraResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetAllReputationPointChangeDataByEraResponse();
        message.ReputationPointChangeDatas =
            object.ReputationPointChangeDatas?.map((e) => reputationpoint_1.ReputationPointChangeData.fromPartial(e)) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryGetReputationDeltaPointRequest() {
    return { era: 0, nodeID: "" };
}
exports.QueryGetReputationDeltaPointRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.era !== 0) {
            writer.uint32(8).uint64(message.era);
        }
        if (message.nodeID !== "") {
            writer.uint32(18).string(message.nodeID);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetReputationDeltaPointRequest();
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
            era: isSet(object.era) ? Number(object.era) : 0,
            nodeID: isSet(object.nodeID) ? String(object.nodeID) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.era !== 0) {
            obj.era = Math.round(message.era);
        }
        if (message.nodeID !== "") {
            obj.nodeID = message.nodeID;
        }
        return obj;
    },
    create(base) {
        return exports.QueryGetReputationDeltaPointRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetReputationDeltaPointRequest();
        message.era = object.era ?? 0;
        message.nodeID = object.nodeID ?? "";
        return message;
    },
};
function createBaseQueryGetReputationDeltaPointResponse() {
    return { ReputationDeltaPoint: undefined };
}
exports.QueryGetReputationDeltaPointResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.ReputationDeltaPoint !== undefined) {
            reputationpoint_1.ReputationDeltaPoint.encode(message.ReputationDeltaPoint, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetReputationDeltaPointResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.ReputationDeltaPoint = reputationpoint_1.ReputationDeltaPoint.decode(reader, reader.uint32());
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
            ReputationDeltaPoint: isSet(object.ReputationDeltaPoint)
                ? reputationpoint_1.ReputationDeltaPoint.fromJSON(object.ReputationDeltaPoint)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.ReputationDeltaPoint !== undefined) {
            obj.ReputationDeltaPoint = reputationpoint_1.ReputationDeltaPoint.toJSON(message.ReputationDeltaPoint);
        }
        return obj;
    },
    create(base) {
        return exports.QueryGetReputationDeltaPointResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetReputationDeltaPointResponse();
        message.ReputationDeltaPoint = (object.ReputationDeltaPoint !== undefined && object.ReputationDeltaPoint !== null)
            ? reputationpoint_1.ReputationDeltaPoint.fromPartial(object.ReputationDeltaPoint)
            : undefined;
        return message;
    },
};
function createBaseQueryGetAllReputationDeltaPointByEraRequest() {
    return { era: 0, pagination: undefined };
}
exports.QueryGetAllReputationDeltaPointByEraRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.era !== 0) {
            writer.uint32(8).uint64(message.era);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetAllReputationDeltaPointByEraRequest();
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
            era: isSet(object.era) ? Number(object.era) : 0,
            pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.era !== 0) {
            obj.era = Math.round(message.era);
        }
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageRequest.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.QueryGetAllReputationDeltaPointByEraRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetAllReputationDeltaPointByEraRequest();
        message.era = object.era ?? 0;
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryGetAllReputationDeltaPointByEraResponse() {
    return { ReputationDeltaPoints: [], pagination: undefined };
}
exports.QueryGetAllReputationDeltaPointByEraResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.ReputationDeltaPoints) {
            reputationpoint_1.ReputationDeltaPoint.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetAllReputationDeltaPointByEraResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.ReputationDeltaPoints.push(reputationpoint_1.ReputationDeltaPoint.decode(reader, reader.uint32()));
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
            ReputationDeltaPoints: Array.isArray(object?.ReputationDeltaPoints)
                ? object.ReputationDeltaPoints.map((e) => reputationpoint_1.ReputationDeltaPoint.fromJSON(e))
                : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.ReputationDeltaPoints?.length) {
            obj.ReputationDeltaPoints = message.ReputationDeltaPoints.map((e) => reputationpoint_1.ReputationDeltaPoint.toJSON(e));
        }
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageResponse.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.QueryGetAllReputationDeltaPointByEraResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetAllReputationDeltaPointByEraResponse();
        message.ReputationDeltaPoints = object.ReputationDeltaPoints?.map((e) => reputationpoint_1.ReputationDeltaPoint.fromPartial(e)) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryGetReputationPointRequest() {
    return { nodeID: "" };
}
exports.QueryGetReputationPointRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.nodeID !== "") {
            writer.uint32(10).string(message.nodeID);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetReputationPointRequest();
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
        return exports.QueryGetReputationPointRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetReputationPointRequest();
        message.nodeID = object.nodeID ?? "";
        return message;
    },
};
function createBaseQueryGetReputationPointResponse() {
    return { ReputationPoint: undefined };
}
exports.QueryGetReputationPointResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.ReputationPoint !== undefined) {
            reputationpoint_1.ReputationPoint.encode(message.ReputationPoint, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetReputationPointResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.ReputationPoint = reputationpoint_1.ReputationPoint.decode(reader, reader.uint32());
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
            ReputationPoint: isSet(object.ReputationPoint) ? reputationpoint_1.ReputationPoint.fromJSON(object.ReputationPoint) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.ReputationPoint !== undefined) {
            obj.ReputationPoint = reputationpoint_1.ReputationPoint.toJSON(message.ReputationPoint);
        }
        return obj;
    },
    create(base) {
        return exports.QueryGetReputationPointResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetReputationPointResponse();
        message.ReputationPoint = (object.ReputationPoint !== undefined && object.ReputationPoint !== null)
            ? reputationpoint_1.ReputationPoint.fromPartial(object.ReputationPoint)
            : undefined;
        return message;
    },
};
function createBaseQueryGetAllReputationPointRequest() {
    return { pagination: undefined };
}
exports.QueryGetAllReputationPointRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetAllReputationPointRequest();
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
        return exports.QueryGetAllReputationPointRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetAllReputationPointRequest();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryGetAllReputationPointResponse() {
    return { ReputationPoints: [], pagination: undefined };
}
exports.QueryGetAllReputationPointResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.ReputationPoints) {
            reputationpoint_1.ReputationPoint.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetAllReputationPointResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.ReputationPoints.push(reputationpoint_1.ReputationPoint.decode(reader, reader.uint32()));
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
            ReputationPoints: Array.isArray(object?.ReputationPoints)
                ? object.ReputationPoints.map((e) => reputationpoint_1.ReputationPoint.fromJSON(e))
                : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.ReputationPoints?.length) {
            obj.ReputationPoints = message.ReputationPoints.map((e) => reputationpoint_1.ReputationPoint.toJSON(e));
        }
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageResponse.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.QueryGetAllReputationPointResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetAllReputationPointResponse();
        message.ReputationPoints = object.ReputationPoints?.map((e) => reputationpoint_1.ReputationPoint.fromPartial(e)) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryGetEraProcessDataRequest() {
    return { era: 0 };
}
exports.QueryGetEraProcessDataRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.era !== 0) {
            writer.uint32(8).uint64(message.era);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetEraProcessDataRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.era = longToNumber(reader.uint64());
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
        return { era: isSet(object.era) ? Number(object.era) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.era !== 0) {
            obj.era = Math.round(message.era);
        }
        return obj;
    },
    create(base) {
        return exports.QueryGetEraProcessDataRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetEraProcessDataRequest();
        message.era = object.era ?? 0;
        return message;
    },
};
function createBaseQueryGetEraProcessDataResponse() {
    return { EraProcessData: undefined };
}
exports.QueryGetEraProcessDataResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.EraProcessData !== undefined) {
            reputationpoint_1.EraProcessData.encode(message.EraProcessData, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetEraProcessDataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.EraProcessData = reputationpoint_1.EraProcessData.decode(reader, reader.uint32());
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
            EraProcessData: isSet(object.EraProcessData) ? reputationpoint_1.EraProcessData.fromJSON(object.EraProcessData) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.EraProcessData !== undefined) {
            obj.EraProcessData = reputationpoint_1.EraProcessData.toJSON(message.EraProcessData);
        }
        return obj;
    },
    create(base) {
        return exports.QueryGetEraProcessDataResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetEraProcessDataResponse();
        message.EraProcessData = (object.EraProcessData !== undefined && object.EraProcessData !== null)
            ? reputationpoint_1.EraProcessData.fromPartial(object.EraProcessData)
            : undefined;
        return message;
    },
};
function createBaseQueryGetAllEraProcessDataRequest() {
    return { pagination: undefined };
}
exports.QueryGetAllEraProcessDataRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetAllEraProcessDataRequest();
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
        return exports.QueryGetAllEraProcessDataRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetAllEraProcessDataRequest();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryGetAllEraProcessDataResponse() {
    return { EraProcessDatas: [], pagination: undefined };
}
exports.QueryGetAllEraProcessDataResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.EraProcessDatas) {
            reputationpoint_1.EraProcessData.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetAllEraProcessDataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.EraProcessDatas.push(reputationpoint_1.EraProcessData.decode(reader, reader.uint32()));
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
            EraProcessDatas: Array.isArray(object?.EraProcessDatas)
                ? object.EraProcessDatas.map((e) => reputationpoint_1.EraProcessData.fromJSON(e))
                : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.EraProcessDatas?.length) {
            obj.EraProcessDatas = message.EraProcessDatas.map((e) => reputationpoint_1.EraProcessData.toJSON(e));
        }
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageResponse.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.QueryGetAllEraProcessDataResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetAllEraProcessDataResponse();
        message.EraProcessDatas = object.EraProcessDatas?.map((e) => reputationpoint_1.EraProcessData.fromPartial(e)) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
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
        this.ManagerWRWorkload = this.ManagerWRWorkload.bind(this);
        this.AllManagerWRWorkloadByEpoch = this.AllManagerWRWorkloadByEpoch.bind(this);
        this.ManagerRPWorkload = this.ManagerRPWorkload.bind(this);
        this.AllManagerRPWorkloadByEra = this.AllManagerRPWorkloadByEra.bind(this);
        this.Workreport = this.Workreport.bind(this);
        this.AllWorkreportByEpoch = this.AllWorkreportByEpoch.bind(this);
        this.WorkreportProcessBatchSize = this.WorkreportProcessBatchSize.bind(this);
        this.HistoryEpochDataDepth = this.HistoryEpochDataDepth.bind(this);
        this.EpochProcessData = this.EpochProcessData.bind(this);
        this.AllEpochProcessData = this.AllEpochProcessData.bind(this);
        this.Superior = this.Superior.bind(this);
        this.EraLength = this.EraLength.bind(this);
        this.CurrentEra = this.CurrentEra.bind(this);
        this.ReputationPointChangeData = this.ReputationPointChangeData.bind(this);
        this.AllReputationPointChangeDataByEra = this.AllReputationPointChangeDataByEra.bind(this);
        this.ReputationDeltaPoint = this.ReputationDeltaPoint.bind(this);
        this.AllReputationDeltaPointByEra = this.AllReputationDeltaPointByEra.bind(this);
        this.ReputationPoint = this.ReputationPoint.bind(this);
        this.AllReputationPoint = this.AllReputationPoint.bind(this);
        this.EraProcessData = this.EraProcessData.bind(this);
        this.AllEraProcessData = this.AllEraProcessData.bind(this);
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
    ManagerWRWorkload(request) {
        const data = exports.QueryGetManagerWRWorkloadRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "ManagerWRWorkload", data);
        return promise.then((data) => exports.QueryGetManagerWRWorkloadResponse.decode(minimal_1.default.Reader.create(data)));
    }
    AllManagerWRWorkloadByEpoch(request) {
        const data = exports.QueryGetAllManagerWRWorkloadByEpochRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "AllManagerWRWorkloadByEpoch", data);
        return promise.then((data) => exports.QueryGetAllManagerWRWorkloadByEpochResponse.decode(minimal_1.default.Reader.create(data)));
    }
    ManagerRPWorkload(request) {
        const data = exports.QueryGetManagerRPWorkloadRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "ManagerRPWorkload", data);
        return promise.then((data) => exports.QueryGetManagerRPWorkloadResponse.decode(minimal_1.default.Reader.create(data)));
    }
    AllManagerRPWorkloadByEra(request) {
        const data = exports.QueryGetAllManagerRPWorkloadByEraRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "AllManagerRPWorkloadByEra", data);
        return promise.then((data) => exports.QueryGetAllManagerRPWorkloadByEraResponse.decode(minimal_1.default.Reader.create(data)));
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
    EraLength(request) {
        const data = exports.QueryGetEraLengthRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "EraLength", data);
        return promise.then((data) => exports.QueryGetEraLengthResponse.decode(minimal_1.default.Reader.create(data)));
    }
    CurrentEra(request) {
        const data = exports.QueryGetCurrentEraRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "CurrentEra", data);
        return promise.then((data) => exports.QueryGetCurrentEraResponse.decode(minimal_1.default.Reader.create(data)));
    }
    ReputationPointChangeData(request) {
        const data = exports.QueryGetReputationPointChangeDataRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "ReputationPointChangeData", data);
        return promise.then((data) => exports.QueryGetReputationPointChangeDataResponse.decode(minimal_1.default.Reader.create(data)));
    }
    AllReputationPointChangeDataByEra(request) {
        const data = exports.QueryGetAllReputationPointChangeDataByEraRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "AllReputationPointChangeDataByEra", data);
        return promise.then((data) => exports.QueryGetAllReputationPointChangeDataByEraResponse.decode(minimal_1.default.Reader.create(data)));
    }
    ReputationDeltaPoint(request) {
        const data = exports.QueryGetReputationDeltaPointRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "ReputationDeltaPoint", data);
        return promise.then((data) => exports.QueryGetReputationDeltaPointResponse.decode(minimal_1.default.Reader.create(data)));
    }
    AllReputationDeltaPointByEra(request) {
        const data = exports.QueryGetAllReputationDeltaPointByEraRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "AllReputationDeltaPointByEra", data);
        return promise.then((data) => exports.QueryGetAllReputationDeltaPointByEraResponse.decode(minimal_1.default.Reader.create(data)));
    }
    ReputationPoint(request) {
        const data = exports.QueryGetReputationPointRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "ReputationPoint", data);
        return promise.then((data) => exports.QueryGetReputationPointResponse.decode(minimal_1.default.Reader.create(data)));
    }
    AllReputationPoint(request) {
        const data = exports.QueryGetAllReputationPointRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "AllReputationPoint", data);
        return promise.then((data) => exports.QueryGetAllReputationPointResponse.decode(minimal_1.default.Reader.create(data)));
    }
    EraProcessData(request) {
        const data = exports.QueryGetEraProcessDataRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "EraProcessData", data);
        return promise.then((data) => exports.QueryGetEraProcessDataResponse.decode(minimal_1.default.Reader.create(data)));
    }
    AllEraProcessData(request) {
        const data = exports.QueryGetAllEraProcessDataRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "AllEraProcessData", data);
        return promise.then((data) => exports.QueryGetAllEraProcessDataResponse.decode(minimal_1.default.Reader.create(data)));
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
