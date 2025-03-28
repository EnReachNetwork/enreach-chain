"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermanentLockedAccount = exports.PeriodicVestingAccount = exports.Period = exports.DelayedVestingAccount = exports.ContinuousVestingAccount = exports.BaseVestingAccount = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const auth_1 = require("../../auth/v1beta1/auth");
const coin_1 = require("../../base/v1beta1/coin");
exports.protobufPackage = "cosmos.vesting.v1beta1";
function createBaseBaseVestingAccount() {
    return { baseAccount: undefined, originalVesting: [], delegatedFree: [], delegatedVesting: [], endTime: 0 };
}
exports.BaseVestingAccount = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.baseAccount !== undefined) {
            auth_1.BaseAccount.encode(message.baseAccount, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.originalVesting) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.delegatedFree) {
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.delegatedVesting) {
            coin_1.Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.endTime !== 0) {
            writer.uint32(40).int64(message.endTime);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBaseVestingAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.baseAccount = auth_1.BaseAccount.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.originalVesting.push(coin_1.Coin.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.delegatedFree.push(coin_1.Coin.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.delegatedVesting.push(coin_1.Coin.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.endTime = longToNumber(reader.int64());
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
            baseAccount: isSet(object.baseAccount) ? auth_1.BaseAccount.fromJSON(object.baseAccount) : undefined,
            originalVesting: Array.isArray(object?.originalVesting)
                ? object.originalVesting.map((e) => coin_1.Coin.fromJSON(e))
                : [],
            delegatedFree: Array.isArray(object?.delegatedFree) ? object.delegatedFree.map((e) => coin_1.Coin.fromJSON(e)) : [],
            delegatedVesting: Array.isArray(object?.delegatedVesting)
                ? object.delegatedVesting.map((e) => coin_1.Coin.fromJSON(e))
                : [],
            endTime: isSet(object.endTime) ? Number(object.endTime) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.baseAccount !== undefined) {
            obj.baseAccount = auth_1.BaseAccount.toJSON(message.baseAccount);
        }
        if (message.originalVesting?.length) {
            obj.originalVesting = message.originalVesting.map((e) => coin_1.Coin.toJSON(e));
        }
        if (message.delegatedFree?.length) {
            obj.delegatedFree = message.delegatedFree.map((e) => coin_1.Coin.toJSON(e));
        }
        if (message.delegatedVesting?.length) {
            obj.delegatedVesting = message.delegatedVesting.map((e) => coin_1.Coin.toJSON(e));
        }
        if (message.endTime !== 0) {
            obj.endTime = Math.round(message.endTime);
        }
        return obj;
    },
    create(base) {
        return exports.BaseVestingAccount.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseBaseVestingAccount();
        message.baseAccount = (object.baseAccount !== undefined && object.baseAccount !== null)
            ? auth_1.BaseAccount.fromPartial(object.baseAccount)
            : undefined;
        message.originalVesting = object.originalVesting?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        message.delegatedFree = object.delegatedFree?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        message.delegatedVesting = object.delegatedVesting?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        message.endTime = object.endTime ?? 0;
        return message;
    },
};
function createBaseContinuousVestingAccount() {
    return { baseVestingAccount: undefined, startTime: 0 };
}
exports.ContinuousVestingAccount = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.baseVestingAccount !== undefined) {
            exports.BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
        }
        if (message.startTime !== 0) {
            writer.uint32(16).int64(message.startTime);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseContinuousVestingAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.baseVestingAccount = exports.BaseVestingAccount.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.startTime = longToNumber(reader.int64());
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
            baseVestingAccount: isSet(object.baseVestingAccount)
                ? exports.BaseVestingAccount.fromJSON(object.baseVestingAccount)
                : undefined,
            startTime: isSet(object.startTime) ? Number(object.startTime) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.baseVestingAccount !== undefined) {
            obj.baseVestingAccount = exports.BaseVestingAccount.toJSON(message.baseVestingAccount);
        }
        if (message.startTime !== 0) {
            obj.startTime = Math.round(message.startTime);
        }
        return obj;
    },
    create(base) {
        return exports.ContinuousVestingAccount.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseContinuousVestingAccount();
        message.baseVestingAccount = (object.baseVestingAccount !== undefined && object.baseVestingAccount !== null)
            ? exports.BaseVestingAccount.fromPartial(object.baseVestingAccount)
            : undefined;
        message.startTime = object.startTime ?? 0;
        return message;
    },
};
function createBaseDelayedVestingAccount() {
    return { baseVestingAccount: undefined };
}
exports.DelayedVestingAccount = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.baseVestingAccount !== undefined) {
            exports.BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDelayedVestingAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.baseVestingAccount = exports.BaseVestingAccount.decode(reader, reader.uint32());
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
            baseVestingAccount: isSet(object.baseVestingAccount)
                ? exports.BaseVestingAccount.fromJSON(object.baseVestingAccount)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.baseVestingAccount !== undefined) {
            obj.baseVestingAccount = exports.BaseVestingAccount.toJSON(message.baseVestingAccount);
        }
        return obj;
    },
    create(base) {
        return exports.DelayedVestingAccount.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDelayedVestingAccount();
        message.baseVestingAccount = (object.baseVestingAccount !== undefined && object.baseVestingAccount !== null)
            ? exports.BaseVestingAccount.fromPartial(object.baseVestingAccount)
            : undefined;
        return message;
    },
};
function createBasePeriod() {
    return { length: 0, amount: [] };
}
exports.Period = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.length !== 0) {
            writer.uint32(8).int64(message.length);
        }
        for (const v of message.amount) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePeriod();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.length = longToNumber(reader.int64());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            length: isSet(object.length) ? Number(object.length) : 0,
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => coin_1.Coin.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.length !== 0) {
            obj.length = Math.round(message.length);
        }
        if (message.amount?.length) {
            obj.amount = message.amount.map((e) => coin_1.Coin.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.Period.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePeriod();
        message.length = object.length ?? 0;
        message.amount = object.amount?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
};
function createBasePeriodicVestingAccount() {
    return { baseVestingAccount: undefined, startTime: 0, vestingPeriods: [] };
}
exports.PeriodicVestingAccount = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.baseVestingAccount !== undefined) {
            exports.BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
        }
        if (message.startTime !== 0) {
            writer.uint32(16).int64(message.startTime);
        }
        for (const v of message.vestingPeriods) {
            exports.Period.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePeriodicVestingAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.baseVestingAccount = exports.BaseVestingAccount.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.startTime = longToNumber(reader.int64());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.vestingPeriods.push(exports.Period.decode(reader, reader.uint32()));
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
            baseVestingAccount: isSet(object.baseVestingAccount)
                ? exports.BaseVestingAccount.fromJSON(object.baseVestingAccount)
                : undefined,
            startTime: isSet(object.startTime) ? Number(object.startTime) : 0,
            vestingPeriods: Array.isArray(object?.vestingPeriods)
                ? object.vestingPeriods.map((e) => exports.Period.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.baseVestingAccount !== undefined) {
            obj.baseVestingAccount = exports.BaseVestingAccount.toJSON(message.baseVestingAccount);
        }
        if (message.startTime !== 0) {
            obj.startTime = Math.round(message.startTime);
        }
        if (message.vestingPeriods?.length) {
            obj.vestingPeriods = message.vestingPeriods.map((e) => exports.Period.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.PeriodicVestingAccount.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePeriodicVestingAccount();
        message.baseVestingAccount = (object.baseVestingAccount !== undefined && object.baseVestingAccount !== null)
            ? exports.BaseVestingAccount.fromPartial(object.baseVestingAccount)
            : undefined;
        message.startTime = object.startTime ?? 0;
        message.vestingPeriods = object.vestingPeriods?.map((e) => exports.Period.fromPartial(e)) || [];
        return message;
    },
};
function createBasePermanentLockedAccount() {
    return { baseVestingAccount: undefined };
}
exports.PermanentLockedAccount = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.baseVestingAccount !== undefined) {
            exports.BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePermanentLockedAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.baseVestingAccount = exports.BaseVestingAccount.decode(reader, reader.uint32());
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
            baseVestingAccount: isSet(object.baseVestingAccount)
                ? exports.BaseVestingAccount.fromJSON(object.baseVestingAccount)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.baseVestingAccount !== undefined) {
            obj.baseVestingAccount = exports.BaseVestingAccount.toJSON(message.baseVestingAccount);
        }
        return obj;
    },
    create(base) {
        return exports.PermanentLockedAccount.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePermanentLockedAccount();
        message.baseVestingAccount = (object.baseVestingAccount !== undefined && object.baseVestingAccount !== null)
            ? exports.BaseVestingAccount.fromPartial(object.baseVestingAccount)
            : undefined;
        return message;
    },
};
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
