"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryServiceName = exports.QuerySendEnabledResponse = exports.QuerySendEnabledRequest = exports.QueryDenomOwnersByQueryResponse = exports.QueryDenomOwnersByQueryRequest = exports.QueryDenomOwnersResponse = exports.DenomOwner = exports.QueryDenomOwnersRequest = exports.QueryDenomMetadataByQueryStringResponse = exports.QueryDenomMetadataByQueryStringRequest = exports.QueryDenomMetadataResponse = exports.QueryDenomMetadataRequest = exports.QueryDenomsMetadataResponse = exports.QueryDenomsMetadataRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QuerySupplyOfResponse = exports.QuerySupplyOfRequest = exports.QueryTotalSupplyResponse = exports.QueryTotalSupplyRequest = exports.QuerySpendableBalanceByDenomResponse = exports.QuerySpendableBalanceByDenomRequest = exports.QuerySpendableBalancesResponse = exports.QuerySpendableBalancesRequest = exports.QueryAllBalancesResponse = exports.QueryAllBalancesRequest = exports.QueryBalanceResponse = exports.QueryBalanceRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const pagination_1 = require("../../base/query/v1beta1/pagination");
const coin_1 = require("../../base/v1beta1/coin");
const bank_1 = require("./bank");
exports.protobufPackage = "cosmos.bank.v1beta1";
function createBaseQueryBalanceRequest() {
    return { address: "", denom: "" };
}
exports.QueryBalanceRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBalanceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.address = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.denom = reader.string();
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
            address: isSet(object.address) ? String(object.address) : "",
            denom: isSet(object.denom) ? String(object.denom) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.address !== "") {
            obj.address = message.address;
        }
        if (message.denom !== "") {
            obj.denom = message.denom;
        }
        return obj;
    },
    create(base) {
        return exports.QueryBalanceRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryBalanceRequest();
        message.address = object.address ?? "";
        message.denom = object.denom ?? "";
        return message;
    },
};
function createBaseQueryBalanceResponse() {
    return { balance: undefined };
}
exports.QueryBalanceResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.balance !== undefined) {
            coin_1.Coin.encode(message.balance, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBalanceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.balance = coin_1.Coin.decode(reader, reader.uint32());
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
        return { balance: isSet(object.balance) ? coin_1.Coin.fromJSON(object.balance) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.balance !== undefined) {
            obj.balance = coin_1.Coin.toJSON(message.balance);
        }
        return obj;
    },
    create(base) {
        return exports.QueryBalanceResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryBalanceResponse();
        message.balance = (object.balance !== undefined && object.balance !== null)
            ? coin_1.Coin.fromPartial(object.balance)
            : undefined;
        return message;
    },
};
function createBaseQueryAllBalancesRequest() {
    return { address: "", pagination: undefined, resolveDenom: false };
}
exports.QueryAllBalancesRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        if (message.resolveDenom === true) {
            writer.uint32(24).bool(message.resolveDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllBalancesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.address = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.resolveDenom = reader.bool();
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
            address: isSet(object.address) ? String(object.address) : "",
            pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined,
            resolveDenom: isSet(object.resolveDenom) ? Boolean(object.resolveDenom) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.address !== "") {
            obj.address = message.address;
        }
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageRequest.toJSON(message.pagination);
        }
        if (message.resolveDenom === true) {
            obj.resolveDenom = message.resolveDenom;
        }
        return obj;
    },
    create(base) {
        return exports.QueryAllBalancesRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryAllBalancesRequest();
        message.address = object.address ?? "";
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        message.resolveDenom = object.resolveDenom ?? false;
        return message;
    },
};
function createBaseQueryAllBalancesResponse() {
    return { balances: [], pagination: undefined };
}
exports.QueryAllBalancesResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.balances) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllBalancesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.balances.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            balances: Array.isArray(object?.balances) ? object.balances.map((e) => coin_1.Coin.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.balances?.length) {
            obj.balances = message.balances.map((e) => coin_1.Coin.toJSON(e));
        }
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageResponse.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.QueryAllBalancesResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryAllBalancesResponse();
        message.balances = object.balances?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQuerySpendableBalancesRequest() {
    return { address: "", pagination: undefined };
}
exports.QuerySpendableBalancesRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySpendableBalancesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.address = reader.string();
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
            address: isSet(object.address) ? String(object.address) : "",
            pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.address !== "") {
            obj.address = message.address;
        }
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageRequest.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.QuerySpendableBalancesRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQuerySpendableBalancesRequest();
        message.address = object.address ?? "";
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQuerySpendableBalancesResponse() {
    return { balances: [], pagination: undefined };
}
exports.QuerySpendableBalancesResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.balances) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySpendableBalancesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.balances.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            balances: Array.isArray(object?.balances) ? object.balances.map((e) => coin_1.Coin.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.balances?.length) {
            obj.balances = message.balances.map((e) => coin_1.Coin.toJSON(e));
        }
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageResponse.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.QuerySpendableBalancesResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQuerySpendableBalancesResponse();
        message.balances = object.balances?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQuerySpendableBalanceByDenomRequest() {
    return { address: "", denom: "" };
}
exports.QuerySpendableBalanceByDenomRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySpendableBalanceByDenomRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.address = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.denom = reader.string();
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
            address: isSet(object.address) ? String(object.address) : "",
            denom: isSet(object.denom) ? String(object.denom) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.address !== "") {
            obj.address = message.address;
        }
        if (message.denom !== "") {
            obj.denom = message.denom;
        }
        return obj;
    },
    create(base) {
        return exports.QuerySpendableBalanceByDenomRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQuerySpendableBalanceByDenomRequest();
        message.address = object.address ?? "";
        message.denom = object.denom ?? "";
        return message;
    },
};
function createBaseQuerySpendableBalanceByDenomResponse() {
    return { balance: undefined };
}
exports.QuerySpendableBalanceByDenomResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.balance !== undefined) {
            coin_1.Coin.encode(message.balance, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySpendableBalanceByDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.balance = coin_1.Coin.decode(reader, reader.uint32());
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
        return { balance: isSet(object.balance) ? coin_1.Coin.fromJSON(object.balance) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.balance !== undefined) {
            obj.balance = coin_1.Coin.toJSON(message.balance);
        }
        return obj;
    },
    create(base) {
        return exports.QuerySpendableBalanceByDenomResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQuerySpendableBalanceByDenomResponse();
        message.balance = (object.balance !== undefined && object.balance !== null)
            ? coin_1.Coin.fromPartial(object.balance)
            : undefined;
        return message;
    },
};
function createBaseQueryTotalSupplyRequest() {
    return { pagination: undefined };
}
exports.QueryTotalSupplyRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalSupplyRequest();
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
        return exports.QueryTotalSupplyRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryTotalSupplyRequest();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryTotalSupplyResponse() {
    return { supply: [], pagination: undefined };
}
exports.QueryTotalSupplyResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.supply) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalSupplyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.supply.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            supply: Array.isArray(object?.supply) ? object.supply.map((e) => coin_1.Coin.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.supply?.length) {
            obj.supply = message.supply.map((e) => coin_1.Coin.toJSON(e));
        }
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageResponse.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.QueryTotalSupplyResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryTotalSupplyResponse();
        message.supply = object.supply?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQuerySupplyOfRequest() {
    return { denom: "" };
}
exports.QuerySupplyOfRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySupplyOfRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.denom = reader.string();
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
        return { denom: isSet(object.denom) ? String(object.denom) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.denom !== "") {
            obj.denom = message.denom;
        }
        return obj;
    },
    create(base) {
        return exports.QuerySupplyOfRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQuerySupplyOfRequest();
        message.denom = object.denom ?? "";
        return message;
    },
};
function createBaseQuerySupplyOfResponse() {
    return { amount: undefined };
}
exports.QuerySupplyOfResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySupplyOfResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
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
        return { amount: isSet(object.amount) ? coin_1.Coin.fromJSON(object.amount) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.amount !== undefined) {
            obj.amount = coin_1.Coin.toJSON(message.amount);
        }
        return obj;
    },
    create(base) {
        return exports.QuerySupplyOfResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQuerySupplyOfResponse();
        message.amount = (object.amount !== undefined && object.amount !== null)
            ? coin_1.Coin.fromPartial(object.amount)
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
            bank_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
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
                    message.params = bank_1.Params.decode(reader, reader.uint32());
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
        return { params: isSet(object.params) ? bank_1.Params.fromJSON(object.params) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.params !== undefined) {
            obj.params = bank_1.Params.toJSON(message.params);
        }
        return obj;
    },
    create(base) {
        return exports.QueryParamsResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = (object.params !== undefined && object.params !== null)
            ? bank_1.Params.fromPartial(object.params)
            : undefined;
        return message;
    },
};
function createBaseQueryDenomsMetadataRequest() {
    return { pagination: undefined };
}
exports.QueryDenomsMetadataRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomsMetadataRequest();
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
        return exports.QueryDenomsMetadataRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryDenomsMetadataRequest();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryDenomsMetadataResponse() {
    return { metadatas: [], pagination: undefined };
}
exports.QueryDenomsMetadataResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.metadatas) {
            bank_1.Metadata.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomsMetadataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.metadatas.push(bank_1.Metadata.decode(reader, reader.uint32()));
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
            metadatas: Array.isArray(object?.metadatas) ? object.metadatas.map((e) => bank_1.Metadata.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.metadatas?.length) {
            obj.metadatas = message.metadatas.map((e) => bank_1.Metadata.toJSON(e));
        }
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageResponse.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.QueryDenomsMetadataResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryDenomsMetadataResponse();
        message.metadatas = object.metadatas?.map((e) => bank_1.Metadata.fromPartial(e)) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryDenomMetadataRequest() {
    return { denom: "" };
}
exports.QueryDenomMetadataRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomMetadataRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.denom = reader.string();
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
        return { denom: isSet(object.denom) ? String(object.denom) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.denom !== "") {
            obj.denom = message.denom;
        }
        return obj;
    },
    create(base) {
        return exports.QueryDenomMetadataRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryDenomMetadataRequest();
        message.denom = object.denom ?? "";
        return message;
    },
};
function createBaseQueryDenomMetadataResponse() {
    return { metadata: undefined };
}
exports.QueryDenomMetadataResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.metadata !== undefined) {
            bank_1.Metadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomMetadataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.metadata = bank_1.Metadata.decode(reader, reader.uint32());
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
        return { metadata: isSet(object.metadata) ? bank_1.Metadata.fromJSON(object.metadata) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.metadata !== undefined) {
            obj.metadata = bank_1.Metadata.toJSON(message.metadata);
        }
        return obj;
    },
    create(base) {
        return exports.QueryDenomMetadataResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryDenomMetadataResponse();
        message.metadata = (object.metadata !== undefined && object.metadata !== null)
            ? bank_1.Metadata.fromPartial(object.metadata)
            : undefined;
        return message;
    },
};
function createBaseQueryDenomMetadataByQueryStringRequest() {
    return { denom: "" };
}
exports.QueryDenomMetadataByQueryStringRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomMetadataByQueryStringRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.denom = reader.string();
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
        return { denom: isSet(object.denom) ? String(object.denom) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.denom !== "") {
            obj.denom = message.denom;
        }
        return obj;
    },
    create(base) {
        return exports.QueryDenomMetadataByQueryStringRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryDenomMetadataByQueryStringRequest();
        message.denom = object.denom ?? "";
        return message;
    },
};
function createBaseQueryDenomMetadataByQueryStringResponse() {
    return { metadata: undefined };
}
exports.QueryDenomMetadataByQueryStringResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.metadata !== undefined) {
            bank_1.Metadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomMetadataByQueryStringResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.metadata = bank_1.Metadata.decode(reader, reader.uint32());
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
        return { metadata: isSet(object.metadata) ? bank_1.Metadata.fromJSON(object.metadata) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.metadata !== undefined) {
            obj.metadata = bank_1.Metadata.toJSON(message.metadata);
        }
        return obj;
    },
    create(base) {
        return exports.QueryDenomMetadataByQueryStringResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryDenomMetadataByQueryStringResponse();
        message.metadata = (object.metadata !== undefined && object.metadata !== null)
            ? bank_1.Metadata.fromPartial(object.metadata)
            : undefined;
        return message;
    },
};
function createBaseQueryDenomOwnersRequest() {
    return { denom: "", pagination: undefined };
}
exports.QueryDenomOwnersRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomOwnersRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.denom = reader.string();
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
            denom: isSet(object.denom) ? String(object.denom) : "",
            pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.denom !== "") {
            obj.denom = message.denom;
        }
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageRequest.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.QueryDenomOwnersRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryDenomOwnersRequest();
        message.denom = object.denom ?? "";
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseDenomOwner() {
    return { address: "", balance: undefined };
}
exports.DenomOwner = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.balance !== undefined) {
            coin_1.Coin.encode(message.balance, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDenomOwner();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.address = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.balance = coin_1.Coin.decode(reader, reader.uint32());
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
            address: isSet(object.address) ? String(object.address) : "",
            balance: isSet(object.balance) ? coin_1.Coin.fromJSON(object.balance) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.address !== "") {
            obj.address = message.address;
        }
        if (message.balance !== undefined) {
            obj.balance = coin_1.Coin.toJSON(message.balance);
        }
        return obj;
    },
    create(base) {
        return exports.DenomOwner.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDenomOwner();
        message.address = object.address ?? "";
        message.balance = (object.balance !== undefined && object.balance !== null)
            ? coin_1.Coin.fromPartial(object.balance)
            : undefined;
        return message;
    },
};
function createBaseQueryDenomOwnersResponse() {
    return { denomOwners: [], pagination: undefined };
}
exports.QueryDenomOwnersResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.denomOwners) {
            exports.DenomOwner.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomOwnersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.denomOwners.push(exports.DenomOwner.decode(reader, reader.uint32()));
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
            denomOwners: Array.isArray(object?.denomOwners) ? object.denomOwners.map((e) => exports.DenomOwner.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.denomOwners?.length) {
            obj.denomOwners = message.denomOwners.map((e) => exports.DenomOwner.toJSON(e));
        }
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageResponse.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.QueryDenomOwnersResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryDenomOwnersResponse();
        message.denomOwners = object.denomOwners?.map((e) => exports.DenomOwner.fromPartial(e)) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryDenomOwnersByQueryRequest() {
    return { denom: "", pagination: undefined };
}
exports.QueryDenomOwnersByQueryRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomOwnersByQueryRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.denom = reader.string();
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
            denom: isSet(object.denom) ? String(object.denom) : "",
            pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.denom !== "") {
            obj.denom = message.denom;
        }
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageRequest.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.QueryDenomOwnersByQueryRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryDenomOwnersByQueryRequest();
        message.denom = object.denom ?? "";
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryDenomOwnersByQueryResponse() {
    return { denomOwners: [], pagination: undefined };
}
exports.QueryDenomOwnersByQueryResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.denomOwners) {
            exports.DenomOwner.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomOwnersByQueryResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.denomOwners.push(exports.DenomOwner.decode(reader, reader.uint32()));
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
            denomOwners: Array.isArray(object?.denomOwners) ? object.denomOwners.map((e) => exports.DenomOwner.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.denomOwners?.length) {
            obj.denomOwners = message.denomOwners.map((e) => exports.DenomOwner.toJSON(e));
        }
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageResponse.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.QueryDenomOwnersByQueryResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryDenomOwnersByQueryResponse();
        message.denomOwners = object.denomOwners?.map((e) => exports.DenomOwner.fromPartial(e)) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQuerySendEnabledRequest() {
    return { denoms: [], pagination: undefined };
}
exports.QuerySendEnabledRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.denoms) {
            writer.uint32(10).string(v);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(794).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySendEnabledRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.denoms.push(reader.string());
                    continue;
                case 99:
                    if (tag !== 794) {
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
            denoms: Array.isArray(object?.denoms) ? object.denoms.map((e) => String(e)) : [],
            pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.denoms?.length) {
            obj.denoms = message.denoms;
        }
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageRequest.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.QuerySendEnabledRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQuerySendEnabledRequest();
        message.denoms = object.denoms?.map((e) => e) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQuerySendEnabledResponse() {
    return { sendEnabled: [], pagination: undefined };
}
exports.QuerySendEnabledResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.sendEnabled) {
            bank_1.SendEnabled.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(794).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySendEnabledResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.sendEnabled.push(bank_1.SendEnabled.decode(reader, reader.uint32()));
                    continue;
                case 99:
                    if (tag !== 794) {
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
            sendEnabled: Array.isArray(object?.sendEnabled)
                ? object.sendEnabled.map((e) => bank_1.SendEnabled.fromJSON(e))
                : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.sendEnabled?.length) {
            obj.sendEnabled = message.sendEnabled.map((e) => bank_1.SendEnabled.toJSON(e));
        }
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageResponse.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.QuerySendEnabledResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQuerySendEnabledResponse();
        message.sendEnabled = object.sendEnabled?.map((e) => bank_1.SendEnabled.fromPartial(e)) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
exports.QueryServiceName = "cosmos.bank.v1beta1.Query";
class QueryClientImpl {
    constructor(rpc, opts) {
        this.service = opts?.service || exports.QueryServiceName;
        this.rpc = rpc;
        this.Balance = this.Balance.bind(this);
        this.AllBalances = this.AllBalances.bind(this);
        this.SpendableBalances = this.SpendableBalances.bind(this);
        this.SpendableBalanceByDenom = this.SpendableBalanceByDenom.bind(this);
        this.TotalSupply = this.TotalSupply.bind(this);
        this.SupplyOf = this.SupplyOf.bind(this);
        this.Params = this.Params.bind(this);
        this.DenomMetadata = this.DenomMetadata.bind(this);
        this.DenomMetadataByQueryString = this.DenomMetadataByQueryString.bind(this);
        this.DenomsMetadata = this.DenomsMetadata.bind(this);
        this.DenomOwners = this.DenomOwners.bind(this);
        this.DenomOwnersByQuery = this.DenomOwnersByQuery.bind(this);
        this.SendEnabled = this.SendEnabled.bind(this);
    }
    Balance(request) {
        const data = exports.QueryBalanceRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Balance", data);
        return promise.then((data) => exports.QueryBalanceResponse.decode(minimal_1.default.Reader.create(data)));
    }
    AllBalances(request) {
        const data = exports.QueryAllBalancesRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "AllBalances", data);
        return promise.then((data) => exports.QueryAllBalancesResponse.decode(minimal_1.default.Reader.create(data)));
    }
    SpendableBalances(request) {
        const data = exports.QuerySpendableBalancesRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "SpendableBalances", data);
        return promise.then((data) => exports.QuerySpendableBalancesResponse.decode(minimal_1.default.Reader.create(data)));
    }
    SpendableBalanceByDenom(request) {
        const data = exports.QuerySpendableBalanceByDenomRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "SpendableBalanceByDenom", data);
        return promise.then((data) => exports.QuerySpendableBalanceByDenomResponse.decode(minimal_1.default.Reader.create(data)));
    }
    TotalSupply(request) {
        const data = exports.QueryTotalSupplyRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "TotalSupply", data);
        return promise.then((data) => exports.QueryTotalSupplyResponse.decode(minimal_1.default.Reader.create(data)));
    }
    SupplyOf(request) {
        const data = exports.QuerySupplyOfRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "SupplyOf", data);
        return promise.then((data) => exports.QuerySupplyOfResponse.decode(minimal_1.default.Reader.create(data)));
    }
    Params(request) {
        const data = exports.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Params", data);
        return promise.then((data) => exports.QueryParamsResponse.decode(minimal_1.default.Reader.create(data)));
    }
    DenomMetadata(request) {
        const data = exports.QueryDenomMetadataRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "DenomMetadata", data);
        return promise.then((data) => exports.QueryDenomMetadataResponse.decode(minimal_1.default.Reader.create(data)));
    }
    DenomMetadataByQueryString(request) {
        const data = exports.QueryDenomMetadataByQueryStringRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "DenomMetadataByQueryString", data);
        return promise.then((data) => exports.QueryDenomMetadataByQueryStringResponse.decode(minimal_1.default.Reader.create(data)));
    }
    DenomsMetadata(request) {
        const data = exports.QueryDenomsMetadataRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "DenomsMetadata", data);
        return promise.then((data) => exports.QueryDenomsMetadataResponse.decode(minimal_1.default.Reader.create(data)));
    }
    DenomOwners(request) {
        const data = exports.QueryDenomOwnersRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "DenomOwners", data);
        return promise.then((data) => exports.QueryDenomOwnersResponse.decode(minimal_1.default.Reader.create(data)));
    }
    DenomOwnersByQuery(request) {
        const data = exports.QueryDenomOwnersByQueryRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "DenomOwnersByQuery", data);
        return promise.then((data) => exports.QueryDenomOwnersByQueryResponse.decode(minimal_1.default.Reader.create(data)));
    }
    SendEnabled(request) {
        const data = exports.QuerySendEnabledRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "SendEnabled", data);
        return promise.then((data) => exports.QuerySendEnabledResponse.decode(minimal_1.default.Reader.create(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
function isSet(value) {
    return value !== null && value !== undefined;
}
