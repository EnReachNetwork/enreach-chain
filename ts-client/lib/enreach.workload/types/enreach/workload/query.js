"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryGetAllHistoryEraRequest = exports.QueryGetHistoryEraResponse = exports.QueryGetHistoryEraRequest = exports.QueryGetPendingNextEraResponse = exports.QueryGetPendingNextEraRequest = exports.QueryGetCurrentEraResponse = exports.QueryGetCurrentEraRequest = exports.QueryGetEraLengthResponse = exports.QueryGetEraLengthRequest = exports.QueryGetSuperiorResponse = exports.QueryGetSuperiorRequest = exports.QueryGetAllEpochProcessDataResponse = exports.QueryGetAllEpochProcessDataRequest = exports.QueryGetEpochProcessDataResponse = exports.QueryGetEpochProcessDataRequest = exports.QueryGetAllWorkreportByEpochResponse = exports.QueryGetAllWorkreportByEpochRequest = exports.QueryGetWorkreportResponse = exports.QueryGetWorkreportRequest = exports.QueryGetAllManagerCSWorkloadByEraResponse = exports.QueryGetAllManagerCSWorkloadByEraRequest = exports.QueryGetManagerCSWorkloadResponse = exports.QueryGetManagerCSWorkloadRequest = exports.QueryGetAllManagerRPWorkloadByEraResponse = exports.QueryGetAllManagerRPWorkloadByEraRequest = exports.QueryGetManagerRPWorkloadResponse = exports.QueryGetManagerRPWorkloadRequest = exports.QueryGetAllManagerWRWorkloadByEpochResponse = exports.QueryGetAllManagerWRWorkloadByEpochRequest = exports.QueryGetManagerWRWorkloadResponse = exports.QueryGetManagerWRWorkloadRequest = exports.QueryGetAllNodeWorkloadByEpochResponse = exports.QueryGetAllNodeWorkloadByEpochRequest = exports.QueryGetNodeWorkloadResponse = exports.QueryGetNodeWorkloadRequest = exports.QueryGetAllHistoryEpochResponse = exports.QueryGetAllHistoryEpochRequest = exports.QueryGetHistoryEpochResponse = exports.QueryGetHistoryEpochRequest = exports.QueryGetPendingNextEpochResponse = exports.QueryGetPendingNextEpochRequest = exports.QueryGetCurrentEpochResponse = exports.QueryGetCurrentEpochRequest = exports.QueryGetEpochLengthResponse = exports.QueryGetEpochLengthRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryParamResponse = exports.QueryParamRequest = exports.protobufPackage = void 0;
exports.QueryClientImpl = exports.QueryServiceName = exports.QueryGetAllEraCheatStatusProcessDataResponse = exports.QueryGetAllEraCheatStatusProcessDataRequest = exports.QueryGetEraCheatStatusProcessDataResponse = exports.QueryGetEraCheatStatusProcessDataRequest = exports.QueryGetAllCheatStatusCRDataByEraResponse = exports.QueryGetAllCheatStatusCRDataByEraRequest = exports.QueryGetCheatStatusCRDataResponse = exports.QueryGetCheatStatusCRDataRequest = exports.QueryGetAllEraProcessDataResponse = exports.QueryGetAllEraProcessDataRequest = exports.QueryGetEraProcessDataResponse = exports.QueryGetEraProcessDataRequest = exports.QueryGetAllReputationDeltaPointByEraResponse = exports.QueryGetAllReputationDeltaPointByEraRequest = exports.QueryGetReputationDeltaPointResponse = exports.QueryGetReputationDeltaPointRequest = exports.QueryGetAllReputationPointChangeDataByEraResponse = exports.QueryGetAllReputationPointChangeDataByEraRequest = exports.QueryGetReputationPointChangeDataResponse = exports.QueryGetReputationPointChangeDataRequest = exports.QueryGetAllHistoryEraResponse = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const pagination_1 = require("../../cosmos/base/query/v1beta1/pagination");
const cheat_status_1 = require("./cheat_status");
const epoch_info_1 = require("./epoch_info");
const era_info_1 = require("./era_info");
const params_1 = require("./params");
const reputationpoint_1 = require("./reputationpoint");
const superior_1 = require("./superior");
const workload_1 = require("./workload");
const workreport_1 = require("./workreport");
exports.protobufPackage = "enreach.workload";
function createBaseQueryParamRequest() {
    return { paramKey: "" };
}
exports.QueryParamRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.paramKey !== "") {
            writer.uint32(10).string(message.paramKey);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.paramKey = reader.string();
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
        return { paramKey: isSet(object.paramKey) ? String(object.paramKey) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.paramKey !== "") {
            obj.paramKey = message.paramKey;
        }
        return obj;
    },
    create(base) {
        return exports.QueryParamRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryParamRequest();
        message.paramKey = object.paramKey ?? "";
        return message;
    },
};
function createBaseQueryParamResponse() {
    return { paramValue: "" };
}
exports.QueryParamResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.paramValue !== "") {
            writer.uint32(10).string(message.paramValue);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
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
        return { paramValue: isSet(object.paramValue) ? String(object.paramValue) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.paramValue !== "") {
            obj.paramValue = message.paramValue;
        }
        return obj;
    },
    create(base) {
        return exports.QueryParamResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryParamResponse();
        message.paramValue = object.paramValue ?? "";
        return message;
    },
};
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
    return { EpochInfo: undefined };
}
exports.QueryGetCurrentEpochResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.EpochInfo !== undefined) {
            epoch_info_1.EpochInfo.encode(message.EpochInfo, writer.uint32(10).fork()).ldelim();
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
                    if (tag !== 10) {
                        break;
                    }
                    message.EpochInfo = epoch_info_1.EpochInfo.decode(reader, reader.uint32());
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
        return { EpochInfo: isSet(object.EpochInfo) ? epoch_info_1.EpochInfo.fromJSON(object.EpochInfo) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.EpochInfo !== undefined) {
            obj.EpochInfo = epoch_info_1.EpochInfo.toJSON(message.EpochInfo);
        }
        return obj;
    },
    create(base) {
        return exports.QueryGetCurrentEpochResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetCurrentEpochResponse();
        message.EpochInfo = (object.EpochInfo !== undefined && object.EpochInfo !== null)
            ? epoch_info_1.EpochInfo.fromPartial(object.EpochInfo)
            : undefined;
        return message;
    },
};
function createBaseQueryGetPendingNextEpochRequest() {
    return {};
}
exports.QueryGetPendingNextEpochRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetPendingNextEpochRequest();
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
        return exports.QueryGetPendingNextEpochRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseQueryGetPendingNextEpochRequest();
        return message;
    },
};
function createBaseQueryGetPendingNextEpochResponse() {
    return { EpochInfo: undefined };
}
exports.QueryGetPendingNextEpochResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.EpochInfo !== undefined) {
            epoch_info_1.EpochInfo.encode(message.EpochInfo, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetPendingNextEpochResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.EpochInfo = epoch_info_1.EpochInfo.decode(reader, reader.uint32());
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
        return { EpochInfo: isSet(object.EpochInfo) ? epoch_info_1.EpochInfo.fromJSON(object.EpochInfo) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.EpochInfo !== undefined) {
            obj.EpochInfo = epoch_info_1.EpochInfo.toJSON(message.EpochInfo);
        }
        return obj;
    },
    create(base) {
        return exports.QueryGetPendingNextEpochResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetPendingNextEpochResponse();
        message.EpochInfo = (object.EpochInfo !== undefined && object.EpochInfo !== null)
            ? epoch_info_1.EpochInfo.fromPartial(object.EpochInfo)
            : undefined;
        return message;
    },
};
function createBaseQueryGetHistoryEpochRequest() {
    return { epochNumber: 0 };
}
exports.QueryGetHistoryEpochRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.epochNumber !== 0) {
            writer.uint32(8).uint64(message.epochNumber);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetHistoryEpochRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.epochNumber = longToNumber(reader.uint64());
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
        return { epochNumber: isSet(object.epochNumber) ? Number(object.epochNumber) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.epochNumber !== 0) {
            obj.epochNumber = Math.round(message.epochNumber);
        }
        return obj;
    },
    create(base) {
        return exports.QueryGetHistoryEpochRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetHistoryEpochRequest();
        message.epochNumber = object.epochNumber ?? 0;
        return message;
    },
};
function createBaseQueryGetHistoryEpochResponse() {
    return { EpochInfo: undefined };
}
exports.QueryGetHistoryEpochResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.EpochInfo !== undefined) {
            epoch_info_1.EpochInfo.encode(message.EpochInfo, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetHistoryEpochResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.EpochInfo = epoch_info_1.EpochInfo.decode(reader, reader.uint32());
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
        return { EpochInfo: isSet(object.EpochInfo) ? epoch_info_1.EpochInfo.fromJSON(object.EpochInfo) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.EpochInfo !== undefined) {
            obj.EpochInfo = epoch_info_1.EpochInfo.toJSON(message.EpochInfo);
        }
        return obj;
    },
    create(base) {
        return exports.QueryGetHistoryEpochResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetHistoryEpochResponse();
        message.EpochInfo = (object.EpochInfo !== undefined && object.EpochInfo !== null)
            ? epoch_info_1.EpochInfo.fromPartial(object.EpochInfo)
            : undefined;
        return message;
    },
};
function createBaseQueryGetAllHistoryEpochRequest() {
    return { pagination: undefined };
}
exports.QueryGetAllHistoryEpochRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetAllHistoryEpochRequest();
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
        return exports.QueryGetAllHistoryEpochRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetAllHistoryEpochRequest();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryGetAllHistoryEpochResponse() {
    return { EpochInfos: [], pagination: undefined };
}
exports.QueryGetAllHistoryEpochResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.EpochInfos) {
            epoch_info_1.EpochInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetAllHistoryEpochResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.EpochInfos.push(epoch_info_1.EpochInfo.decode(reader, reader.uint32()));
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
            EpochInfos: Array.isArray(object?.EpochInfos) ? object.EpochInfos.map((e) => epoch_info_1.EpochInfo.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.EpochInfos?.length) {
            obj.EpochInfos = message.EpochInfos.map((e) => epoch_info_1.EpochInfo.toJSON(e));
        }
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageResponse.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.QueryGetAllHistoryEpochResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetAllHistoryEpochResponse();
        message.EpochInfos = object.EpochInfos?.map((e) => epoch_info_1.EpochInfo.fromPartial(e)) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
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
function createBaseQueryGetManagerCSWorkloadRequest() {
    return { era: 0, managerAccount: "" };
}
exports.QueryGetManagerCSWorkloadRequest = {
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
        const message = createBaseQueryGetManagerCSWorkloadRequest();
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
        return exports.QueryGetManagerCSWorkloadRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetManagerCSWorkloadRequest();
        message.era = object.era ?? 0;
        message.managerAccount = object.managerAccount ?? "";
        return message;
    },
};
function createBaseQueryGetManagerCSWorkloadResponse() {
    return { ManagerCSWorkload: undefined };
}
exports.QueryGetManagerCSWorkloadResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.ManagerCSWorkload !== undefined) {
            workload_1.ManagerCSWorkload.encode(message.ManagerCSWorkload, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetManagerCSWorkloadResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.ManagerCSWorkload = workload_1.ManagerCSWorkload.decode(reader, reader.uint32());
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
            ManagerCSWorkload: isSet(object.ManagerCSWorkload)
                ? workload_1.ManagerCSWorkload.fromJSON(object.ManagerCSWorkload)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.ManagerCSWorkload !== undefined) {
            obj.ManagerCSWorkload = workload_1.ManagerCSWorkload.toJSON(message.ManagerCSWorkload);
        }
        return obj;
    },
    create(base) {
        return exports.QueryGetManagerCSWorkloadResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetManagerCSWorkloadResponse();
        message.ManagerCSWorkload = (object.ManagerCSWorkload !== undefined && object.ManagerCSWorkload !== null)
            ? workload_1.ManagerCSWorkload.fromPartial(object.ManagerCSWorkload)
            : undefined;
        return message;
    },
};
function createBaseQueryGetAllManagerCSWorkloadByEraRequest() {
    return { era: 0, pagination: undefined };
}
exports.QueryGetAllManagerCSWorkloadByEraRequest = {
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
        const message = createBaseQueryGetAllManagerCSWorkloadByEraRequest();
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
        return exports.QueryGetAllManagerCSWorkloadByEraRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetAllManagerCSWorkloadByEraRequest();
        message.era = object.era ?? 0;
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryGetAllManagerCSWorkloadByEraResponse() {
    return { ManagerCSWorkloads: [], pagination: undefined };
}
exports.QueryGetAllManagerCSWorkloadByEraResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.ManagerCSWorkloads) {
            workload_1.ManagerCSWorkload.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetAllManagerCSWorkloadByEraResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.ManagerCSWorkloads.push(workload_1.ManagerCSWorkload.decode(reader, reader.uint32()));
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
            ManagerCSWorkloads: Array.isArray(object?.ManagerCSWorkloads)
                ? object.ManagerCSWorkloads.map((e) => workload_1.ManagerCSWorkload.fromJSON(e))
                : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.ManagerCSWorkloads?.length) {
            obj.ManagerCSWorkloads = message.ManagerCSWorkloads.map((e) => workload_1.ManagerCSWorkload.toJSON(e));
        }
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageResponse.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.QueryGetAllManagerCSWorkloadByEraResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetAllManagerCSWorkloadByEraResponse();
        message.ManagerCSWorkloads = object.ManagerCSWorkloads?.map((e) => workload_1.ManagerCSWorkload.fromPartial(e)) || [];
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
    return { EraInfo: undefined };
}
exports.QueryGetCurrentEraResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.EraInfo !== undefined) {
            era_info_1.EraInfo.encode(message.EraInfo, writer.uint32(10).fork()).ldelim();
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
                    if (tag !== 10) {
                        break;
                    }
                    message.EraInfo = era_info_1.EraInfo.decode(reader, reader.uint32());
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
        return { EraInfo: isSet(object.EraInfo) ? era_info_1.EraInfo.fromJSON(object.EraInfo) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.EraInfo !== undefined) {
            obj.EraInfo = era_info_1.EraInfo.toJSON(message.EraInfo);
        }
        return obj;
    },
    create(base) {
        return exports.QueryGetCurrentEraResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetCurrentEraResponse();
        message.EraInfo = (object.EraInfo !== undefined && object.EraInfo !== null)
            ? era_info_1.EraInfo.fromPartial(object.EraInfo)
            : undefined;
        return message;
    },
};
function createBaseQueryGetPendingNextEraRequest() {
    return {};
}
exports.QueryGetPendingNextEraRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetPendingNextEraRequest();
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
        return exports.QueryGetPendingNextEraRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseQueryGetPendingNextEraRequest();
        return message;
    },
};
function createBaseQueryGetPendingNextEraResponse() {
    return { EraInfo: undefined };
}
exports.QueryGetPendingNextEraResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.EraInfo !== undefined) {
            era_info_1.EraInfo.encode(message.EraInfo, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetPendingNextEraResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.EraInfo = era_info_1.EraInfo.decode(reader, reader.uint32());
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
        return { EraInfo: isSet(object.EraInfo) ? era_info_1.EraInfo.fromJSON(object.EraInfo) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.EraInfo !== undefined) {
            obj.EraInfo = era_info_1.EraInfo.toJSON(message.EraInfo);
        }
        return obj;
    },
    create(base) {
        return exports.QueryGetPendingNextEraResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetPendingNextEraResponse();
        message.EraInfo = (object.EraInfo !== undefined && object.EraInfo !== null)
            ? era_info_1.EraInfo.fromPartial(object.EraInfo)
            : undefined;
        return message;
    },
};
function createBaseQueryGetHistoryEraRequest() {
    return { eraNumber: 0 };
}
exports.QueryGetHistoryEraRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.eraNumber !== 0) {
            writer.uint32(8).uint64(message.eraNumber);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetHistoryEraRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.eraNumber = longToNumber(reader.uint64());
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
        return { eraNumber: isSet(object.eraNumber) ? Number(object.eraNumber) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.eraNumber !== 0) {
            obj.eraNumber = Math.round(message.eraNumber);
        }
        return obj;
    },
    create(base) {
        return exports.QueryGetHistoryEraRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetHistoryEraRequest();
        message.eraNumber = object.eraNumber ?? 0;
        return message;
    },
};
function createBaseQueryGetHistoryEraResponse() {
    return { EraInfo: undefined };
}
exports.QueryGetHistoryEraResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.EraInfo !== undefined) {
            era_info_1.EraInfo.encode(message.EraInfo, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetHistoryEraResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.EraInfo = era_info_1.EraInfo.decode(reader, reader.uint32());
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
        return { EraInfo: isSet(object.EraInfo) ? era_info_1.EraInfo.fromJSON(object.EraInfo) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.EraInfo !== undefined) {
            obj.EraInfo = era_info_1.EraInfo.toJSON(message.EraInfo);
        }
        return obj;
    },
    create(base) {
        return exports.QueryGetHistoryEraResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetHistoryEraResponse();
        message.EraInfo = (object.EraInfo !== undefined && object.EraInfo !== null)
            ? era_info_1.EraInfo.fromPartial(object.EraInfo)
            : undefined;
        return message;
    },
};
function createBaseQueryGetAllHistoryEraRequest() {
    return { pagination: undefined };
}
exports.QueryGetAllHistoryEraRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetAllHistoryEraRequest();
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
        return exports.QueryGetAllHistoryEraRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetAllHistoryEraRequest();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryGetAllHistoryEraResponse() {
    return { EraInfos: [], pagination: undefined };
}
exports.QueryGetAllHistoryEraResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.EraInfos) {
            era_info_1.EraInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetAllHistoryEraResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.EraInfos.push(era_info_1.EraInfo.decode(reader, reader.uint32()));
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
            EraInfos: Array.isArray(object?.EraInfos) ? object.EraInfos.map((e) => era_info_1.EraInfo.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.EraInfos?.length) {
            obj.EraInfos = message.EraInfos.map((e) => era_info_1.EraInfo.toJSON(e));
        }
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageResponse.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.QueryGetAllHistoryEraResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetAllHistoryEraResponse();
        message.EraInfos = object.EraInfos?.map((e) => era_info_1.EraInfo.fromPartial(e)) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
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
function createBaseQueryGetCheatStatusCRDataRequest() {
    return { era: 0, nodeID: "" };
}
exports.QueryGetCheatStatusCRDataRequest = {
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
        const message = createBaseQueryGetCheatStatusCRDataRequest();
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
        return exports.QueryGetCheatStatusCRDataRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetCheatStatusCRDataRequest();
        message.era = object.era ?? 0;
        message.nodeID = object.nodeID ?? "";
        return message;
    },
};
function createBaseQueryGetCheatStatusCRDataResponse() {
    return { CheatStatusCRData: undefined };
}
exports.QueryGetCheatStatusCRDataResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.CheatStatusCRData !== undefined) {
            cheat_status_1.CheatStatusCRData.encode(message.CheatStatusCRData, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetCheatStatusCRDataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.CheatStatusCRData = cheat_status_1.CheatStatusCRData.decode(reader, reader.uint32());
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
            CheatStatusCRData: isSet(object.CheatStatusCRData)
                ? cheat_status_1.CheatStatusCRData.fromJSON(object.CheatStatusCRData)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.CheatStatusCRData !== undefined) {
            obj.CheatStatusCRData = cheat_status_1.CheatStatusCRData.toJSON(message.CheatStatusCRData);
        }
        return obj;
    },
    create(base) {
        return exports.QueryGetCheatStatusCRDataResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetCheatStatusCRDataResponse();
        message.CheatStatusCRData = (object.CheatStatusCRData !== undefined && object.CheatStatusCRData !== null)
            ? cheat_status_1.CheatStatusCRData.fromPartial(object.CheatStatusCRData)
            : undefined;
        return message;
    },
};
function createBaseQueryGetAllCheatStatusCRDataByEraRequest() {
    return { era: 0, pagination: undefined };
}
exports.QueryGetAllCheatStatusCRDataByEraRequest = {
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
        const message = createBaseQueryGetAllCheatStatusCRDataByEraRequest();
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
        return exports.QueryGetAllCheatStatusCRDataByEraRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetAllCheatStatusCRDataByEraRequest();
        message.era = object.era ?? 0;
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryGetAllCheatStatusCRDataByEraResponse() {
    return { CheatStatusCRDatas: [], pagination: undefined };
}
exports.QueryGetAllCheatStatusCRDataByEraResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.CheatStatusCRDatas) {
            cheat_status_1.CheatStatusCRData.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetAllCheatStatusCRDataByEraResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.CheatStatusCRDatas.push(cheat_status_1.CheatStatusCRData.decode(reader, reader.uint32()));
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
            CheatStatusCRDatas: Array.isArray(object?.CheatStatusCRDatas)
                ? object.CheatStatusCRDatas.map((e) => cheat_status_1.CheatStatusCRData.fromJSON(e))
                : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.CheatStatusCRDatas?.length) {
            obj.CheatStatusCRDatas = message.CheatStatusCRDatas.map((e) => cheat_status_1.CheatStatusCRData.toJSON(e));
        }
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageResponse.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.QueryGetAllCheatStatusCRDataByEraResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetAllCheatStatusCRDataByEraResponse();
        message.CheatStatusCRDatas = object.CheatStatusCRDatas?.map((e) => cheat_status_1.CheatStatusCRData.fromPartial(e)) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryGetEraCheatStatusProcessDataRequest() {
    return { era: 0 };
}
exports.QueryGetEraCheatStatusProcessDataRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.era !== 0) {
            writer.uint32(8).uint64(message.era);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetEraCheatStatusProcessDataRequest();
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
        return exports.QueryGetEraCheatStatusProcessDataRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetEraCheatStatusProcessDataRequest();
        message.era = object.era ?? 0;
        return message;
    },
};
function createBaseQueryGetEraCheatStatusProcessDataResponse() {
    return { EraCheatStatusProcessData: undefined };
}
exports.QueryGetEraCheatStatusProcessDataResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.EraCheatStatusProcessData !== undefined) {
            cheat_status_1.EraCheatStatusProcessData.encode(message.EraCheatStatusProcessData, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetEraCheatStatusProcessDataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.EraCheatStatusProcessData = cheat_status_1.EraCheatStatusProcessData.decode(reader, reader.uint32());
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
            EraCheatStatusProcessData: isSet(object.EraCheatStatusProcessData)
                ? cheat_status_1.EraCheatStatusProcessData.fromJSON(object.EraCheatStatusProcessData)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.EraCheatStatusProcessData !== undefined) {
            obj.EraCheatStatusProcessData = cheat_status_1.EraCheatStatusProcessData.toJSON(message.EraCheatStatusProcessData);
        }
        return obj;
    },
    create(base) {
        return exports.QueryGetEraCheatStatusProcessDataResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetEraCheatStatusProcessDataResponse();
        message.EraCheatStatusProcessData =
            (object.EraCheatStatusProcessData !== undefined && object.EraCheatStatusProcessData !== null)
                ? cheat_status_1.EraCheatStatusProcessData.fromPartial(object.EraCheatStatusProcessData)
                : undefined;
        return message;
    },
};
function createBaseQueryGetAllEraCheatStatusProcessDataRequest() {
    return { pagination: undefined };
}
exports.QueryGetAllEraCheatStatusProcessDataRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetAllEraCheatStatusProcessDataRequest();
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
        return exports.QueryGetAllEraCheatStatusProcessDataRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetAllEraCheatStatusProcessDataRequest();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryGetAllEraCheatStatusProcessDataResponse() {
    return { EraCheatStatusProcessDatas: [], pagination: undefined };
}
exports.QueryGetAllEraCheatStatusProcessDataResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.EraCheatStatusProcessDatas) {
            cheat_status_1.EraCheatStatusProcessData.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetAllEraCheatStatusProcessDataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.EraCheatStatusProcessDatas.push(cheat_status_1.EraCheatStatusProcessData.decode(reader, reader.uint32()));
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
            EraCheatStatusProcessDatas: Array.isArray(object?.EraCheatStatusProcessDatas)
                ? object.EraCheatStatusProcessDatas.map((e) => cheat_status_1.EraCheatStatusProcessData.fromJSON(e))
                : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.EraCheatStatusProcessDatas?.length) {
            obj.EraCheatStatusProcessDatas = message.EraCheatStatusProcessDatas.map((e) => cheat_status_1.EraCheatStatusProcessData.toJSON(e));
        }
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageResponse.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.QueryGetAllEraCheatStatusProcessDataResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetAllEraCheatStatusProcessDataResponse();
        message.EraCheatStatusProcessDatas =
            object.EraCheatStatusProcessDatas?.map((e) => cheat_status_1.EraCheatStatusProcessData.fromPartial(e)) || [];
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
        this.Param = this.Param.bind(this);
        this.Params = this.Params.bind(this);
        this.EpochLength = this.EpochLength.bind(this);
        this.CurrentEpoch = this.CurrentEpoch.bind(this);
        this.PendingNextEpoch = this.PendingNextEpoch.bind(this);
        this.HistoryEpoch = this.HistoryEpoch.bind(this);
        this.AllHistoryEpoch = this.AllHistoryEpoch.bind(this);
        this.NodeWorkload = this.NodeWorkload.bind(this);
        this.AllNodeWorkloadByEpoch = this.AllNodeWorkloadByEpoch.bind(this);
        this.ManagerWRWorkload = this.ManagerWRWorkload.bind(this);
        this.AllManagerWRWorkloadByEpoch = this.AllManagerWRWorkloadByEpoch.bind(this);
        this.ManagerRPWorkload = this.ManagerRPWorkload.bind(this);
        this.AllManagerRPWorkloadByEra = this.AllManagerRPWorkloadByEra.bind(this);
        this.ManagerCSWorkload = this.ManagerCSWorkload.bind(this);
        this.AllManagerCSWorkloadByEra = this.AllManagerCSWorkloadByEra.bind(this);
        this.Workreport = this.Workreport.bind(this);
        this.AllWorkreportByEpoch = this.AllWorkreportByEpoch.bind(this);
        this.EpochProcessData = this.EpochProcessData.bind(this);
        this.AllEpochProcessData = this.AllEpochProcessData.bind(this);
        this.Superior = this.Superior.bind(this);
        this.EraLength = this.EraLength.bind(this);
        this.CurrentEra = this.CurrentEra.bind(this);
        this.PendingNextEra = this.PendingNextEra.bind(this);
        this.HistoryEra = this.HistoryEra.bind(this);
        this.AllHistoryEra = this.AllHistoryEra.bind(this);
        this.ReputationPointChangeData = this.ReputationPointChangeData.bind(this);
        this.AllReputationPointChangeDataByEra = this.AllReputationPointChangeDataByEra.bind(this);
        this.ReputationDeltaPoint = this.ReputationDeltaPoint.bind(this);
        this.AllReputationDeltaPointByEra = this.AllReputationDeltaPointByEra.bind(this);
        this.EraProcessData = this.EraProcessData.bind(this);
        this.AllEraProcessData = this.AllEraProcessData.bind(this);
        this.CheatStatusCRData = this.CheatStatusCRData.bind(this);
        this.AllCheatStatusCRDataByEra = this.AllCheatStatusCRDataByEra.bind(this);
        this.EraCheatStatusProcessData = this.EraCheatStatusProcessData.bind(this);
        this.AllEraCheatStatusProcessData = this.AllEraCheatStatusProcessData.bind(this);
    }
    Param(request) {
        const data = exports.QueryParamRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Param", data);
        return promise.then((data) => exports.QueryParamResponse.decode(minimal_1.default.Reader.create(data)));
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
    PendingNextEpoch(request) {
        const data = exports.QueryGetPendingNextEpochRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "PendingNextEpoch", data);
        return promise.then((data) => exports.QueryGetPendingNextEpochResponse.decode(minimal_1.default.Reader.create(data)));
    }
    HistoryEpoch(request) {
        const data = exports.QueryGetHistoryEpochRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "HistoryEpoch", data);
        return promise.then((data) => exports.QueryGetHistoryEpochResponse.decode(minimal_1.default.Reader.create(data)));
    }
    AllHistoryEpoch(request) {
        const data = exports.QueryGetAllHistoryEpochRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "AllHistoryEpoch", data);
        return promise.then((data) => exports.QueryGetAllHistoryEpochResponse.decode(minimal_1.default.Reader.create(data)));
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
    ManagerCSWorkload(request) {
        const data = exports.QueryGetManagerCSWorkloadRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "ManagerCSWorkload", data);
        return promise.then((data) => exports.QueryGetManagerCSWorkloadResponse.decode(minimal_1.default.Reader.create(data)));
    }
    AllManagerCSWorkloadByEra(request) {
        const data = exports.QueryGetAllManagerCSWorkloadByEraRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "AllManagerCSWorkloadByEra", data);
        return promise.then((data) => exports.QueryGetAllManagerCSWorkloadByEraResponse.decode(minimal_1.default.Reader.create(data)));
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
    PendingNextEra(request) {
        const data = exports.QueryGetPendingNextEraRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "PendingNextEra", data);
        return promise.then((data) => exports.QueryGetPendingNextEraResponse.decode(minimal_1.default.Reader.create(data)));
    }
    HistoryEra(request) {
        const data = exports.QueryGetHistoryEraRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "HistoryEra", data);
        return promise.then((data) => exports.QueryGetHistoryEraResponse.decode(minimal_1.default.Reader.create(data)));
    }
    AllHistoryEra(request) {
        const data = exports.QueryGetAllHistoryEraRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "AllHistoryEra", data);
        return promise.then((data) => exports.QueryGetAllHistoryEraResponse.decode(minimal_1.default.Reader.create(data)));
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
    CheatStatusCRData(request) {
        const data = exports.QueryGetCheatStatusCRDataRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "CheatStatusCRData", data);
        return promise.then((data) => exports.QueryGetCheatStatusCRDataResponse.decode(minimal_1.default.Reader.create(data)));
    }
    AllCheatStatusCRDataByEra(request) {
        const data = exports.QueryGetAllCheatStatusCRDataByEraRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "AllCheatStatusCRDataByEra", data);
        return promise.then((data) => exports.QueryGetAllCheatStatusCRDataByEraResponse.decode(minimal_1.default.Reader.create(data)));
    }
    EraCheatStatusProcessData(request) {
        const data = exports.QueryGetEraCheatStatusProcessDataRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "EraCheatStatusProcessData", data);
        return promise.then((data) => exports.QueryGetEraCheatStatusProcessDataResponse.decode(minimal_1.default.Reader.create(data)));
    }
    AllEraCheatStatusProcessData(request) {
        const data = exports.QueryGetAllEraCheatStatusProcessDataRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "AllEraCheatStatusProcessData", data);
        return promise.then((data) => exports.QueryGetAllEraCheatStatusProcessDataResponse.decode(minimal_1.default.Reader.create(data)));
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
