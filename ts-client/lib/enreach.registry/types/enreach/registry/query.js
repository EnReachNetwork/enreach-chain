"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryServiceName = exports.QueryGetSuperiorResponse = exports.QueryGetSuperiorRequest = exports.QueryAllRegionResponse = exports.QueryAllRegionRequest = exports.QueryGetRegionResponse = exports.QueryGetRegionRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const pagination_1 = require("../../cosmos/base/query/v1beta1/pagination");
const params_1 = require("./params");
const region_1 = require("./region");
const superior_1 = require("./superior");
exports.protobufPackage = "enreach.registry";
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
function createBaseQueryGetRegionRequest() {
    return { code: "" };
}
exports.QueryGetRegionRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.code !== "") {
            writer.uint32(10).string(message.code);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetRegionRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.code = reader.string();
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
        return { code: isSet(object.code) ? String(object.code) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.code !== "") {
            obj.code = message.code;
        }
        return obj;
    },
    create(base) {
        return exports.QueryGetRegionRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetRegionRequest();
        message.code = object.code ?? "";
        return message;
    },
};
function createBaseQueryGetRegionResponse() {
    return { Region: undefined };
}
exports.QueryGetRegionResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.Region !== undefined) {
            region_1.Region.encode(message.Region, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetRegionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.Region = region_1.Region.decode(reader, reader.uint32());
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
        return { Region: isSet(object.Region) ? region_1.Region.fromJSON(object.Region) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.Region !== undefined) {
            obj.Region = region_1.Region.toJSON(message.Region);
        }
        return obj;
    },
    create(base) {
        return exports.QueryGetRegionResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetRegionResponse();
        message.Region = (object.Region !== undefined && object.Region !== null)
            ? region_1.Region.fromPartial(object.Region)
            : undefined;
        return message;
    },
};
function createBaseQueryAllRegionRequest() {
    return { pagination: undefined };
}
exports.QueryAllRegionRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllRegionRequest();
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
        return exports.QueryAllRegionRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryAllRegionRequest();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryAllRegionResponse() {
    return { Region: [], pagination: undefined };
}
exports.QueryAllRegionResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.Region) {
            region_1.Region.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllRegionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.Region.push(region_1.Region.decode(reader, reader.uint32()));
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
            Region: Array.isArray(object?.Region) ? object.Region.map((e) => region_1.Region.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.Region?.length) {
            obj.Region = message.Region.map((e) => region_1.Region.toJSON(e));
        }
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageResponse.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.QueryAllRegionResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryAllRegionResponse();
        message.Region = object.Region?.map((e) => region_1.Region.fromPartial(e)) || [];
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
exports.QueryServiceName = "enreach.registry.Query";
class QueryClientImpl {
    constructor(rpc, opts) {
        this.service = opts?.service || exports.QueryServiceName;
        this.rpc = rpc;
        this.Params = this.Params.bind(this);
        this.Region = this.Region.bind(this);
        this.RegionAll = this.RegionAll.bind(this);
        this.Superior = this.Superior.bind(this);
    }
    Params(request) {
        const data = exports.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Params", data);
        return promise.then((data) => exports.QueryParamsResponse.decode(minimal_1.default.Reader.create(data)));
    }
    Region(request) {
        const data = exports.QueryGetRegionRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Region", data);
        return promise.then((data) => exports.QueryGetRegionResponse.decode(minimal_1.default.Reader.create(data)));
    }
    RegionAll(request) {
        const data = exports.QueryAllRegionRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "RegionAll", data);
        return promise.then((data) => exports.QueryAllRegionResponse.decode(minimal_1.default.Reader.create(data)));
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
