"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryServiceName = exports.QueryAccountInfoResponse = exports.QueryAccountInfoRequest = exports.QueryAccountAddressByIDResponse = exports.QueryAccountAddressByIDRequest = exports.AddressStringToBytesResponse = exports.AddressStringToBytesRequest = exports.AddressBytesToStringResponse = exports.AddressBytesToStringRequest = exports.Bech32PrefixResponse = exports.Bech32PrefixRequest = exports.QueryModuleAccountByNameResponse = exports.QueryModuleAccountByNameRequest = exports.QueryModuleAccountsResponse = exports.QueryModuleAccountsRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryAccountResponse = exports.QueryAccountRequest = exports.QueryAccountsResponse = exports.QueryAccountsRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const any_1 = require("../../../google/protobuf/any");
const pagination_1 = require("../../base/query/v1beta1/pagination");
const auth_1 = require("./auth");
exports.protobufPackage = "cosmos.auth.v1beta1";
function createBaseQueryAccountsRequest() {
    return { pagination: undefined };
}
exports.QueryAccountsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountsRequest();
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
        return exports.QueryAccountsRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryAccountsRequest();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryAccountsResponse() {
    return { accounts: [], pagination: undefined };
}
exports.QueryAccountsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.accounts) {
            any_1.Any.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.accounts.push(any_1.Any.decode(reader, reader.uint32()));
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
            accounts: Array.isArray(object?.accounts) ? object.accounts.map((e) => any_1.Any.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.accounts?.length) {
            obj.accounts = message.accounts.map((e) => any_1.Any.toJSON(e));
        }
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageResponse.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.QueryAccountsResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryAccountsResponse();
        message.accounts = object.accounts?.map((e) => any_1.Any.fromPartial(e)) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryAccountRequest() {
    return { address: "" };
}
exports.QueryAccountRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountRequest();
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
        return exports.QueryAccountRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryAccountRequest();
        message.address = object.address ?? "";
        return message;
    },
};
function createBaseQueryAccountResponse() {
    return { account: undefined };
}
exports.QueryAccountResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.account !== undefined) {
            any_1.Any.encode(message.account, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.account = any_1.Any.decode(reader, reader.uint32());
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
        return { account: isSet(object.account) ? any_1.Any.fromJSON(object.account) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.account !== undefined) {
            obj.account = any_1.Any.toJSON(message.account);
        }
        return obj;
    },
    create(base) {
        return exports.QueryAccountResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryAccountResponse();
        message.account = (object.account !== undefined && object.account !== null)
            ? any_1.Any.fromPartial(object.account)
            : undefined;
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
            auth_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
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
                    message.params = auth_1.Params.decode(reader, reader.uint32());
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
        return { params: isSet(object.params) ? auth_1.Params.fromJSON(object.params) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.params !== undefined) {
            obj.params = auth_1.Params.toJSON(message.params);
        }
        return obj;
    },
    create(base) {
        return exports.QueryParamsResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = (object.params !== undefined && object.params !== null)
            ? auth_1.Params.fromPartial(object.params)
            : undefined;
        return message;
    },
};
function createBaseQueryModuleAccountsRequest() {
    return {};
}
exports.QueryModuleAccountsRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleAccountsRequest();
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
        return exports.QueryModuleAccountsRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseQueryModuleAccountsRequest();
        return message;
    },
};
function createBaseQueryModuleAccountsResponse() {
    return { accounts: [] };
}
exports.QueryModuleAccountsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.accounts) {
            any_1.Any.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleAccountsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.accounts.push(any_1.Any.decode(reader, reader.uint32()));
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
        return { accounts: Array.isArray(object?.accounts) ? object.accounts.map((e) => any_1.Any.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.accounts?.length) {
            obj.accounts = message.accounts.map((e) => any_1.Any.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.QueryModuleAccountsResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryModuleAccountsResponse();
        message.accounts = object.accounts?.map((e) => any_1.Any.fromPartial(e)) || [];
        return message;
    },
};
function createBaseQueryModuleAccountByNameRequest() {
    return { name: "" };
}
exports.QueryModuleAccountByNameRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleAccountByNameRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
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
        return { name: isSet(object.name) ? String(object.name) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== "") {
            obj.name = message.name;
        }
        return obj;
    },
    create(base) {
        return exports.QueryModuleAccountByNameRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryModuleAccountByNameRequest();
        message.name = object.name ?? "";
        return message;
    },
};
function createBaseQueryModuleAccountByNameResponse() {
    return { account: undefined };
}
exports.QueryModuleAccountByNameResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.account !== undefined) {
            any_1.Any.encode(message.account, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleAccountByNameResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.account = any_1.Any.decode(reader, reader.uint32());
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
        return { account: isSet(object.account) ? any_1.Any.fromJSON(object.account) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.account !== undefined) {
            obj.account = any_1.Any.toJSON(message.account);
        }
        return obj;
    },
    create(base) {
        return exports.QueryModuleAccountByNameResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryModuleAccountByNameResponse();
        message.account = (object.account !== undefined && object.account !== null)
            ? any_1.Any.fromPartial(object.account)
            : undefined;
        return message;
    },
};
function createBaseBech32PrefixRequest() {
    return {};
}
exports.Bech32PrefixRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBech32PrefixRequest();
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
        return exports.Bech32PrefixRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseBech32PrefixRequest();
        return message;
    },
};
function createBaseBech32PrefixResponse() {
    return { bech32Prefix: "" };
}
exports.Bech32PrefixResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.bech32Prefix !== "") {
            writer.uint32(10).string(message.bech32Prefix);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBech32PrefixResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.bech32Prefix = reader.string();
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
        return { bech32Prefix: isSet(object.bech32Prefix) ? String(object.bech32Prefix) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.bech32Prefix !== "") {
            obj.bech32Prefix = message.bech32Prefix;
        }
        return obj;
    },
    create(base) {
        return exports.Bech32PrefixResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseBech32PrefixResponse();
        message.bech32Prefix = object.bech32Prefix ?? "";
        return message;
    },
};
function createBaseAddressBytesToStringRequest() {
    return { addressBytes: new Uint8Array(0) };
}
exports.AddressBytesToStringRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.addressBytes.length !== 0) {
            writer.uint32(10).bytes(message.addressBytes);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddressBytesToStringRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.addressBytes = reader.bytes();
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
        return { addressBytes: isSet(object.addressBytes) ? bytesFromBase64(object.addressBytes) : new Uint8Array(0) };
    },
    toJSON(message) {
        const obj = {};
        if (message.addressBytes.length !== 0) {
            obj.addressBytes = base64FromBytes(message.addressBytes);
        }
        return obj;
    },
    create(base) {
        return exports.AddressBytesToStringRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAddressBytesToStringRequest();
        message.addressBytes = object.addressBytes ?? new Uint8Array(0);
        return message;
    },
};
function createBaseAddressBytesToStringResponse() {
    return { addressString: "" };
}
exports.AddressBytesToStringResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.addressString !== "") {
            writer.uint32(10).string(message.addressString);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddressBytesToStringResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.addressString = reader.string();
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
        return { addressString: isSet(object.addressString) ? String(object.addressString) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.addressString !== "") {
            obj.addressString = message.addressString;
        }
        return obj;
    },
    create(base) {
        return exports.AddressBytesToStringResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAddressBytesToStringResponse();
        message.addressString = object.addressString ?? "";
        return message;
    },
};
function createBaseAddressStringToBytesRequest() {
    return { addressString: "" };
}
exports.AddressStringToBytesRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.addressString !== "") {
            writer.uint32(10).string(message.addressString);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddressStringToBytesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.addressString = reader.string();
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
        return { addressString: isSet(object.addressString) ? String(object.addressString) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.addressString !== "") {
            obj.addressString = message.addressString;
        }
        return obj;
    },
    create(base) {
        return exports.AddressStringToBytesRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAddressStringToBytesRequest();
        message.addressString = object.addressString ?? "";
        return message;
    },
};
function createBaseAddressStringToBytesResponse() {
    return { addressBytes: new Uint8Array(0) };
}
exports.AddressStringToBytesResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.addressBytes.length !== 0) {
            writer.uint32(10).bytes(message.addressBytes);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddressStringToBytesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.addressBytes = reader.bytes();
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
        return { addressBytes: isSet(object.addressBytes) ? bytesFromBase64(object.addressBytes) : new Uint8Array(0) };
    },
    toJSON(message) {
        const obj = {};
        if (message.addressBytes.length !== 0) {
            obj.addressBytes = base64FromBytes(message.addressBytes);
        }
        return obj;
    },
    create(base) {
        return exports.AddressStringToBytesResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAddressStringToBytesResponse();
        message.addressBytes = object.addressBytes ?? new Uint8Array(0);
        return message;
    },
};
function createBaseQueryAccountAddressByIDRequest() {
    return { id: 0, accountId: 0 };
}
exports.QueryAccountAddressByIDRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).int64(message.id);
        }
        if (message.accountId !== 0) {
            writer.uint32(16).uint64(message.accountId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountAddressByIDRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.id = longToNumber(reader.int64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.accountId = longToNumber(reader.uint64());
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
            id: isSet(object.id) ? Number(object.id) : 0,
            accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== 0) {
            obj.id = Math.round(message.id);
        }
        if (message.accountId !== 0) {
            obj.accountId = Math.round(message.accountId);
        }
        return obj;
    },
    create(base) {
        return exports.QueryAccountAddressByIDRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryAccountAddressByIDRequest();
        message.id = object.id ?? 0;
        message.accountId = object.accountId ?? 0;
        return message;
    },
};
function createBaseQueryAccountAddressByIDResponse() {
    return { accountAddress: "" };
}
exports.QueryAccountAddressByIDResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.accountAddress !== "") {
            writer.uint32(10).string(message.accountAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountAddressByIDResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.accountAddress = reader.string();
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
        return { accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.accountAddress !== "") {
            obj.accountAddress = message.accountAddress;
        }
        return obj;
    },
    create(base) {
        return exports.QueryAccountAddressByIDResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryAccountAddressByIDResponse();
        message.accountAddress = object.accountAddress ?? "";
        return message;
    },
};
function createBaseQueryAccountInfoRequest() {
    return { address: "" };
}
exports.QueryAccountInfoRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountInfoRequest();
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
        return exports.QueryAccountInfoRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryAccountInfoRequest();
        message.address = object.address ?? "";
        return message;
    },
};
function createBaseQueryAccountInfoResponse() {
    return { info: undefined };
}
exports.QueryAccountInfoResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.info !== undefined) {
            auth_1.BaseAccount.encode(message.info, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.info = auth_1.BaseAccount.decode(reader, reader.uint32());
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
        return { info: isSet(object.info) ? auth_1.BaseAccount.fromJSON(object.info) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.info !== undefined) {
            obj.info = auth_1.BaseAccount.toJSON(message.info);
        }
        return obj;
    },
    create(base) {
        return exports.QueryAccountInfoResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryAccountInfoResponse();
        message.info = (object.info !== undefined && object.info !== null)
            ? auth_1.BaseAccount.fromPartial(object.info)
            : undefined;
        return message;
    },
};
exports.QueryServiceName = "cosmos.auth.v1beta1.Query";
class QueryClientImpl {
    constructor(rpc, opts) {
        this.service = opts?.service || exports.QueryServiceName;
        this.rpc = rpc;
        this.Accounts = this.Accounts.bind(this);
        this.Account = this.Account.bind(this);
        this.AccountAddressByID = this.AccountAddressByID.bind(this);
        this.Params = this.Params.bind(this);
        this.ModuleAccounts = this.ModuleAccounts.bind(this);
        this.ModuleAccountByName = this.ModuleAccountByName.bind(this);
        this.Bech32Prefix = this.Bech32Prefix.bind(this);
        this.AddressBytesToString = this.AddressBytesToString.bind(this);
        this.AddressStringToBytes = this.AddressStringToBytes.bind(this);
        this.AccountInfo = this.AccountInfo.bind(this);
    }
    Accounts(request) {
        const data = exports.QueryAccountsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Accounts", data);
        return promise.then((data) => exports.QueryAccountsResponse.decode(minimal_1.default.Reader.create(data)));
    }
    Account(request) {
        const data = exports.QueryAccountRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Account", data);
        return promise.then((data) => exports.QueryAccountResponse.decode(minimal_1.default.Reader.create(data)));
    }
    AccountAddressByID(request) {
        const data = exports.QueryAccountAddressByIDRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "AccountAddressByID", data);
        return promise.then((data) => exports.QueryAccountAddressByIDResponse.decode(minimal_1.default.Reader.create(data)));
    }
    Params(request) {
        const data = exports.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Params", data);
        return promise.then((data) => exports.QueryParamsResponse.decode(minimal_1.default.Reader.create(data)));
    }
    ModuleAccounts(request) {
        const data = exports.QueryModuleAccountsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "ModuleAccounts", data);
        return promise.then((data) => exports.QueryModuleAccountsResponse.decode(minimal_1.default.Reader.create(data)));
    }
    ModuleAccountByName(request) {
        const data = exports.QueryModuleAccountByNameRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "ModuleAccountByName", data);
        return promise.then((data) => exports.QueryModuleAccountByNameResponse.decode(minimal_1.default.Reader.create(data)));
    }
    Bech32Prefix(request) {
        const data = exports.Bech32PrefixRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Bech32Prefix", data);
        return promise.then((data) => exports.Bech32PrefixResponse.decode(minimal_1.default.Reader.create(data)));
    }
    AddressBytesToString(request) {
        const data = exports.AddressBytesToStringRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "AddressBytesToString", data);
        return promise.then((data) => exports.AddressBytesToStringResponse.decode(minimal_1.default.Reader.create(data)));
    }
    AddressStringToBytes(request) {
        const data = exports.AddressStringToBytesRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "AddressStringToBytes", data);
        return promise.then((data) => exports.AddressStringToBytesResponse.decode(minimal_1.default.Reader.create(data)));
    }
    AccountInfo(request) {
        const data = exports.QueryAccountInfoRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "AccountInfo", data);
        return promise.then((data) => exports.QueryAccountInfoResponse.decode(minimal_1.default.Reader.create(data)));
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
function bytesFromBase64(b64) {
    if (tsProtoGlobalThis.Buffer) {
        return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
    }
    else {
        const bin = tsProtoGlobalThis.atob(b64);
        const arr = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; ++i) {
            arr[i] = bin.charCodeAt(i);
        }
        return arr;
    }
}
function base64FromBytes(arr) {
    if (tsProtoGlobalThis.Buffer) {
        return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
    }
    else {
        const bin = [];
        arr.forEach((byte) => {
            bin.push(String.fromCharCode(byte));
        });
        return tsProtoGlobalThis.btoa(bin.join(""));
    }
}
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
