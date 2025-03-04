"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryServiceName = exports.DisabledListResponse = exports.QueryDisabledListRequest = exports.AccountsResponse = exports.QueryAccountsRequest = exports.AccountResponse = exports.QueryAccountRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const pagination_1 = require("../../base/query/v1beta1/pagination");
const types_1 = require("./types");
exports.protobufPackage = "cosmos.circuit.v1";
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
function createBaseAccountResponse() {
    return { permission: undefined };
}
exports.AccountResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.permission !== undefined) {
            types_1.Permissions.encode(message.permission, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.permission = types_1.Permissions.decode(reader, reader.uint32());
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
        return { permission: isSet(object.permission) ? types_1.Permissions.fromJSON(object.permission) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.permission !== undefined) {
            obj.permission = types_1.Permissions.toJSON(message.permission);
        }
        return obj;
    },
    create(base) {
        return exports.AccountResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAccountResponse();
        message.permission = (object.permission !== undefined && object.permission !== null)
            ? types_1.Permissions.fromPartial(object.permission)
            : undefined;
        return message;
    },
};
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
function createBaseAccountsResponse() {
    return { accounts: [], pagination: undefined };
}
exports.AccountsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.accounts) {
            types_1.GenesisAccountPermissions.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.accounts.push(types_1.GenesisAccountPermissions.decode(reader, reader.uint32()));
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
            accounts: Array.isArray(object?.accounts)
                ? object.accounts.map((e) => types_1.GenesisAccountPermissions.fromJSON(e))
                : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.accounts?.length) {
            obj.accounts = message.accounts.map((e) => types_1.GenesisAccountPermissions.toJSON(e));
        }
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageResponse.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.AccountsResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAccountsResponse();
        message.accounts = object.accounts?.map((e) => types_1.GenesisAccountPermissions.fromPartial(e)) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryDisabledListRequest() {
    return {};
}
exports.QueryDisabledListRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDisabledListRequest();
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
        return exports.QueryDisabledListRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseQueryDisabledListRequest();
        return message;
    },
};
function createBaseDisabledListResponse() {
    return { disabledList: [] };
}
exports.DisabledListResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.disabledList) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDisabledListResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.disabledList.push(reader.string());
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
        return { disabledList: Array.isArray(object?.disabledList) ? object.disabledList.map((e) => String(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.disabledList?.length) {
            obj.disabledList = message.disabledList;
        }
        return obj;
    },
    create(base) {
        return exports.DisabledListResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDisabledListResponse();
        message.disabledList = object.disabledList?.map((e) => e) || [];
        return message;
    },
};
exports.QueryServiceName = "cosmos.circuit.v1.Query";
class QueryClientImpl {
    constructor(rpc, opts) {
        this.service = opts?.service || exports.QueryServiceName;
        this.rpc = rpc;
        this.Account = this.Account.bind(this);
        this.Accounts = this.Accounts.bind(this);
        this.DisabledList = this.DisabledList.bind(this);
    }
    Account(request) {
        const data = exports.QueryAccountRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Account", data);
        return promise.then((data) => exports.AccountResponse.decode(minimal_1.default.Reader.create(data)));
    }
    Accounts(request) {
        const data = exports.QueryAccountsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Accounts", data);
        return promise.then((data) => exports.AccountsResponse.decode(minimal_1.default.Reader.create(data)));
    }
    DisabledList(request) {
        const data = exports.QueryDisabledListRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "DisabledList", data);
        return promise.then((data) => exports.DisabledListResponse.decode(minimal_1.default.Reader.create(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
function isSet(value) {
    return value !== null && value !== undefined;
}
