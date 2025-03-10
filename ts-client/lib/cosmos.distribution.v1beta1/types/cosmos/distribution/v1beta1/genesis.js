"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.ValidatorSlashEventRecord = exports.DelegatorStartingInfoRecord = exports.ValidatorCurrentRewardsRecord = exports.ValidatorHistoricalRewardsRecord = exports.ValidatorAccumulatedCommissionRecord = exports.ValidatorOutstandingRewardsRecord = exports.DelegatorWithdrawInfo = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const coin_1 = require("../../base/v1beta1/coin");
const distribution_1 = require("./distribution");
exports.protobufPackage = "cosmos.distribution.v1beta1";
function createBaseDelegatorWithdrawInfo() {
    return { delegatorAddress: "", withdrawAddress: "" };
}
exports.DelegatorWithdrawInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.withdrawAddress !== "") {
            writer.uint32(18).string(message.withdrawAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDelegatorWithdrawInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.delegatorAddress = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.withdrawAddress = reader.string();
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
            delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
            withdrawAddress: isSet(object.withdrawAddress) ? String(object.withdrawAddress) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.delegatorAddress !== "") {
            obj.delegatorAddress = message.delegatorAddress;
        }
        if (message.withdrawAddress !== "") {
            obj.withdrawAddress = message.withdrawAddress;
        }
        return obj;
    },
    create(base) {
        return exports.DelegatorWithdrawInfo.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDelegatorWithdrawInfo();
        message.delegatorAddress = object.delegatorAddress ?? "";
        message.withdrawAddress = object.withdrawAddress ?? "";
        return message;
    },
};
function createBaseValidatorOutstandingRewardsRecord() {
    return { validatorAddress: "", outstandingRewards: [] };
}
exports.ValidatorOutstandingRewardsRecord = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        for (const v of message.outstandingRewards) {
            coin_1.DecCoin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorOutstandingRewardsRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.validatorAddress = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.outstandingRewards.push(coin_1.DecCoin.decode(reader, reader.uint32()));
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
            validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
            outstandingRewards: Array.isArray(object?.outstandingRewards)
                ? object.outstandingRewards.map((e) => coin_1.DecCoin.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.validatorAddress !== "") {
            obj.validatorAddress = message.validatorAddress;
        }
        if (message.outstandingRewards?.length) {
            obj.outstandingRewards = message.outstandingRewards.map((e) => coin_1.DecCoin.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.ValidatorOutstandingRewardsRecord.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseValidatorOutstandingRewardsRecord();
        message.validatorAddress = object.validatorAddress ?? "";
        message.outstandingRewards = object.outstandingRewards?.map((e) => coin_1.DecCoin.fromPartial(e)) || [];
        return message;
    },
};
function createBaseValidatorAccumulatedCommissionRecord() {
    return { validatorAddress: "", accumulated: undefined };
}
exports.ValidatorAccumulatedCommissionRecord = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (message.accumulated !== undefined) {
            distribution_1.ValidatorAccumulatedCommission.encode(message.accumulated, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorAccumulatedCommissionRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.validatorAddress = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.accumulated = distribution_1.ValidatorAccumulatedCommission.decode(reader, reader.uint32());
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
            validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
            accumulated: isSet(object.accumulated) ? distribution_1.ValidatorAccumulatedCommission.fromJSON(object.accumulated) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.validatorAddress !== "") {
            obj.validatorAddress = message.validatorAddress;
        }
        if (message.accumulated !== undefined) {
            obj.accumulated = distribution_1.ValidatorAccumulatedCommission.toJSON(message.accumulated);
        }
        return obj;
    },
    create(base) {
        return exports.ValidatorAccumulatedCommissionRecord.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseValidatorAccumulatedCommissionRecord();
        message.validatorAddress = object.validatorAddress ?? "";
        message.accumulated = (object.accumulated !== undefined && object.accumulated !== null)
            ? distribution_1.ValidatorAccumulatedCommission.fromPartial(object.accumulated)
            : undefined;
        return message;
    },
};
function createBaseValidatorHistoricalRewardsRecord() {
    return { validatorAddress: "", period: 0, rewards: undefined };
}
exports.ValidatorHistoricalRewardsRecord = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (message.period !== 0) {
            writer.uint32(16).uint64(message.period);
        }
        if (message.rewards !== undefined) {
            distribution_1.ValidatorHistoricalRewards.encode(message.rewards, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorHistoricalRewardsRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.validatorAddress = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.period = longToNumber(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.rewards = distribution_1.ValidatorHistoricalRewards.decode(reader, reader.uint32());
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
            validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
            period: isSet(object.period) ? Number(object.period) : 0,
            rewards: isSet(object.rewards) ? distribution_1.ValidatorHistoricalRewards.fromJSON(object.rewards) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.validatorAddress !== "") {
            obj.validatorAddress = message.validatorAddress;
        }
        if (message.period !== 0) {
            obj.period = Math.round(message.period);
        }
        if (message.rewards !== undefined) {
            obj.rewards = distribution_1.ValidatorHistoricalRewards.toJSON(message.rewards);
        }
        return obj;
    },
    create(base) {
        return exports.ValidatorHistoricalRewardsRecord.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseValidatorHistoricalRewardsRecord();
        message.validatorAddress = object.validatorAddress ?? "";
        message.period = object.period ?? 0;
        message.rewards = (object.rewards !== undefined && object.rewards !== null)
            ? distribution_1.ValidatorHistoricalRewards.fromPartial(object.rewards)
            : undefined;
        return message;
    },
};
function createBaseValidatorCurrentRewardsRecord() {
    return { validatorAddress: "", rewards: undefined };
}
exports.ValidatorCurrentRewardsRecord = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (message.rewards !== undefined) {
            distribution_1.ValidatorCurrentRewards.encode(message.rewards, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorCurrentRewardsRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.validatorAddress = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.rewards = distribution_1.ValidatorCurrentRewards.decode(reader, reader.uint32());
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
            validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
            rewards: isSet(object.rewards) ? distribution_1.ValidatorCurrentRewards.fromJSON(object.rewards) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.validatorAddress !== "") {
            obj.validatorAddress = message.validatorAddress;
        }
        if (message.rewards !== undefined) {
            obj.rewards = distribution_1.ValidatorCurrentRewards.toJSON(message.rewards);
        }
        return obj;
    },
    create(base) {
        return exports.ValidatorCurrentRewardsRecord.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseValidatorCurrentRewardsRecord();
        message.validatorAddress = object.validatorAddress ?? "";
        message.rewards = (object.rewards !== undefined && object.rewards !== null)
            ? distribution_1.ValidatorCurrentRewards.fromPartial(object.rewards)
            : undefined;
        return message;
    },
};
function createBaseDelegatorStartingInfoRecord() {
    return { delegatorAddress: "", validatorAddress: "", startingInfo: undefined };
}
exports.DelegatorStartingInfoRecord = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(18).string(message.validatorAddress);
        }
        if (message.startingInfo !== undefined) {
            distribution_1.DelegatorStartingInfo.encode(message.startingInfo, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDelegatorStartingInfoRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.delegatorAddress = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.validatorAddress = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.startingInfo = distribution_1.DelegatorStartingInfo.decode(reader, reader.uint32());
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
            delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
            validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
            startingInfo: isSet(object.startingInfo) ? distribution_1.DelegatorStartingInfo.fromJSON(object.startingInfo) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.delegatorAddress !== "") {
            obj.delegatorAddress = message.delegatorAddress;
        }
        if (message.validatorAddress !== "") {
            obj.validatorAddress = message.validatorAddress;
        }
        if (message.startingInfo !== undefined) {
            obj.startingInfo = distribution_1.DelegatorStartingInfo.toJSON(message.startingInfo);
        }
        return obj;
    },
    create(base) {
        return exports.DelegatorStartingInfoRecord.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDelegatorStartingInfoRecord();
        message.delegatorAddress = object.delegatorAddress ?? "";
        message.validatorAddress = object.validatorAddress ?? "";
        message.startingInfo = (object.startingInfo !== undefined && object.startingInfo !== null)
            ? distribution_1.DelegatorStartingInfo.fromPartial(object.startingInfo)
            : undefined;
        return message;
    },
};
function createBaseValidatorSlashEventRecord() {
    return { validatorAddress: "", height: 0, period: 0, validatorSlashEvent: undefined };
}
exports.ValidatorSlashEventRecord = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (message.height !== 0) {
            writer.uint32(16).uint64(message.height);
        }
        if (message.period !== 0) {
            writer.uint32(24).uint64(message.period);
        }
        if (message.validatorSlashEvent !== undefined) {
            distribution_1.ValidatorSlashEvent.encode(message.validatorSlashEvent, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorSlashEventRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.validatorAddress = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.height = longToNumber(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.period = longToNumber(reader.uint64());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.validatorSlashEvent = distribution_1.ValidatorSlashEvent.decode(reader, reader.uint32());
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
            validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
            height: isSet(object.height) ? Number(object.height) : 0,
            period: isSet(object.period) ? Number(object.period) : 0,
            validatorSlashEvent: isSet(object.validatorSlashEvent)
                ? distribution_1.ValidatorSlashEvent.fromJSON(object.validatorSlashEvent)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.validatorAddress !== "") {
            obj.validatorAddress = message.validatorAddress;
        }
        if (message.height !== 0) {
            obj.height = Math.round(message.height);
        }
        if (message.period !== 0) {
            obj.period = Math.round(message.period);
        }
        if (message.validatorSlashEvent !== undefined) {
            obj.validatorSlashEvent = distribution_1.ValidatorSlashEvent.toJSON(message.validatorSlashEvent);
        }
        return obj;
    },
    create(base) {
        return exports.ValidatorSlashEventRecord.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseValidatorSlashEventRecord();
        message.validatorAddress = object.validatorAddress ?? "";
        message.height = object.height ?? 0;
        message.period = object.period ?? 0;
        message.validatorSlashEvent = (object.validatorSlashEvent !== undefined && object.validatorSlashEvent !== null)
            ? distribution_1.ValidatorSlashEvent.fromPartial(object.validatorSlashEvent)
            : undefined;
        return message;
    },
};
function createBaseGenesisState() {
    return {
        params: undefined,
        feePool: undefined,
        delegatorWithdrawInfos: [],
        previousProposer: "",
        outstandingRewards: [],
        validatorAccumulatedCommissions: [],
        validatorHistoricalRewards: [],
        validatorCurrentRewards: [],
        delegatorStartingInfos: [],
        validatorSlashEvents: [],
    };
}
exports.GenesisState = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.params !== undefined) {
            distribution_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.feePool !== undefined) {
            distribution_1.FeePool.encode(message.feePool, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.delegatorWithdrawInfos) {
            exports.DelegatorWithdrawInfo.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.previousProposer !== "") {
            writer.uint32(34).string(message.previousProposer);
        }
        for (const v of message.outstandingRewards) {
            exports.ValidatorOutstandingRewardsRecord.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.validatorAccumulatedCommissions) {
            exports.ValidatorAccumulatedCommissionRecord.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.validatorHistoricalRewards) {
            exports.ValidatorHistoricalRewardsRecord.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.validatorCurrentRewards) {
            exports.ValidatorCurrentRewardsRecord.encode(v, writer.uint32(66).fork()).ldelim();
        }
        for (const v of message.delegatorStartingInfos) {
            exports.DelegatorStartingInfoRecord.encode(v, writer.uint32(74).fork()).ldelim();
        }
        for (const v of message.validatorSlashEvents) {
            exports.ValidatorSlashEventRecord.encode(v, writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.params = distribution_1.Params.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.feePool = distribution_1.FeePool.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.delegatorWithdrawInfos.push(exports.DelegatorWithdrawInfo.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.previousProposer = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.outstandingRewards.push(exports.ValidatorOutstandingRewardsRecord.decode(reader, reader.uint32()));
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.validatorAccumulatedCommissions.push(exports.ValidatorAccumulatedCommissionRecord.decode(reader, reader.uint32()));
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.validatorHistoricalRewards.push(exports.ValidatorHistoricalRewardsRecord.decode(reader, reader.uint32()));
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.validatorCurrentRewards.push(exports.ValidatorCurrentRewardsRecord.decode(reader, reader.uint32()));
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.delegatorStartingInfos.push(exports.DelegatorStartingInfoRecord.decode(reader, reader.uint32()));
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.validatorSlashEvents.push(exports.ValidatorSlashEventRecord.decode(reader, reader.uint32()));
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
            params: isSet(object.params) ? distribution_1.Params.fromJSON(object.params) : undefined,
            feePool: isSet(object.feePool) ? distribution_1.FeePool.fromJSON(object.feePool) : undefined,
            delegatorWithdrawInfos: Array.isArray(object?.delegatorWithdrawInfos)
                ? object.delegatorWithdrawInfos.map((e) => exports.DelegatorWithdrawInfo.fromJSON(e))
                : [],
            previousProposer: isSet(object.previousProposer) ? String(object.previousProposer) : "",
            outstandingRewards: Array.isArray(object?.outstandingRewards)
                ? object.outstandingRewards.map((e) => exports.ValidatorOutstandingRewardsRecord.fromJSON(e))
                : [],
            validatorAccumulatedCommissions: Array.isArray(object?.validatorAccumulatedCommissions)
                ? object.validatorAccumulatedCommissions.map((e) => exports.ValidatorAccumulatedCommissionRecord.fromJSON(e))
                : [],
            validatorHistoricalRewards: Array.isArray(object?.validatorHistoricalRewards)
                ? object.validatorHistoricalRewards.map((e) => exports.ValidatorHistoricalRewardsRecord.fromJSON(e))
                : [],
            validatorCurrentRewards: Array.isArray(object?.validatorCurrentRewards)
                ? object.validatorCurrentRewards.map((e) => exports.ValidatorCurrentRewardsRecord.fromJSON(e))
                : [],
            delegatorStartingInfos: Array.isArray(object?.delegatorStartingInfos)
                ? object.delegatorStartingInfos.map((e) => exports.DelegatorStartingInfoRecord.fromJSON(e))
                : [],
            validatorSlashEvents: Array.isArray(object?.validatorSlashEvents)
                ? object.validatorSlashEvents.map((e) => exports.ValidatorSlashEventRecord.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.params !== undefined) {
            obj.params = distribution_1.Params.toJSON(message.params);
        }
        if (message.feePool !== undefined) {
            obj.feePool = distribution_1.FeePool.toJSON(message.feePool);
        }
        if (message.delegatorWithdrawInfos?.length) {
            obj.delegatorWithdrawInfos = message.delegatorWithdrawInfos.map((e) => exports.DelegatorWithdrawInfo.toJSON(e));
        }
        if (message.previousProposer !== "") {
            obj.previousProposer = message.previousProposer;
        }
        if (message.outstandingRewards?.length) {
            obj.outstandingRewards = message.outstandingRewards.map((e) => exports.ValidatorOutstandingRewardsRecord.toJSON(e));
        }
        if (message.validatorAccumulatedCommissions?.length) {
            obj.validatorAccumulatedCommissions = message.validatorAccumulatedCommissions.map((e) => exports.ValidatorAccumulatedCommissionRecord.toJSON(e));
        }
        if (message.validatorHistoricalRewards?.length) {
            obj.validatorHistoricalRewards = message.validatorHistoricalRewards.map((e) => exports.ValidatorHistoricalRewardsRecord.toJSON(e));
        }
        if (message.validatorCurrentRewards?.length) {
            obj.validatorCurrentRewards = message.validatorCurrentRewards.map((e) => exports.ValidatorCurrentRewardsRecord.toJSON(e));
        }
        if (message.delegatorStartingInfos?.length) {
            obj.delegatorStartingInfos = message.delegatorStartingInfos.map((e) => exports.DelegatorStartingInfoRecord.toJSON(e));
        }
        if (message.validatorSlashEvents?.length) {
            obj.validatorSlashEvents = message.validatorSlashEvents.map((e) => exports.ValidatorSlashEventRecord.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.GenesisState.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = (object.params !== undefined && object.params !== null)
            ? distribution_1.Params.fromPartial(object.params)
            : undefined;
        message.feePool = (object.feePool !== undefined && object.feePool !== null)
            ? distribution_1.FeePool.fromPartial(object.feePool)
            : undefined;
        message.delegatorWithdrawInfos = object.delegatorWithdrawInfos?.map((e) => exports.DelegatorWithdrawInfo.fromPartial(e)) ||
            [];
        message.previousProposer = object.previousProposer ?? "";
        message.outstandingRewards =
            object.outstandingRewards?.map((e) => exports.ValidatorOutstandingRewardsRecord.fromPartial(e)) || [];
        message.validatorAccumulatedCommissions =
            object.validatorAccumulatedCommissions?.map((e) => exports.ValidatorAccumulatedCommissionRecord.fromPartial(e)) || [];
        message.validatorHistoricalRewards =
            object.validatorHistoricalRewards?.map((e) => exports.ValidatorHistoricalRewardsRecord.fromPartial(e)) || [];
        message.validatorCurrentRewards =
            object.validatorCurrentRewards?.map((e) => exports.ValidatorCurrentRewardsRecord.fromPartial(e)) || [];
        message.delegatorStartingInfos =
            object.delegatorStartingInfos?.map((e) => exports.DelegatorStartingInfoRecord.fromPartial(e)) || [];
        message.validatorSlashEvents = object.validatorSlashEvents?.map((e) => exports.ValidatorSlashEventRecord.fromPartial(e)) ||
            [];
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
