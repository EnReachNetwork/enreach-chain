"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommunityPoolSpendProposalWithDeposit = exports.DelegationDelegatorReward = exports.DelegatorStartingInfo = exports.CommunityPoolSpendProposal = exports.FeePool = exports.ValidatorSlashEvents = exports.ValidatorSlashEvent = exports.ValidatorOutstandingRewards = exports.ValidatorAccumulatedCommission = exports.ValidatorCurrentRewards = exports.ValidatorHistoricalRewards = exports.Params = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const coin_1 = require("../../base/v1beta1/coin");
exports.protobufPackage = "cosmos.distribution.v1beta1";
function createBaseParams() {
    return { communityTax: "", baseProposerReward: "", bonusProposerReward: "", withdrawAddrEnabled: false };
}
exports.Params = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.communityTax !== "") {
            writer.uint32(10).string(message.communityTax);
        }
        if (message.baseProposerReward !== "") {
            writer.uint32(18).string(message.baseProposerReward);
        }
        if (message.bonusProposerReward !== "") {
            writer.uint32(26).string(message.bonusProposerReward);
        }
        if (message.withdrawAddrEnabled === true) {
            writer.uint32(32).bool(message.withdrawAddrEnabled);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.communityTax = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.baseProposerReward = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.bonusProposerReward = reader.string();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.withdrawAddrEnabled = reader.bool();
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
            communityTax: isSet(object.communityTax) ? String(object.communityTax) : "",
            baseProposerReward: isSet(object.baseProposerReward) ? String(object.baseProposerReward) : "",
            bonusProposerReward: isSet(object.bonusProposerReward) ? String(object.bonusProposerReward) : "",
            withdrawAddrEnabled: isSet(object.withdrawAddrEnabled) ? Boolean(object.withdrawAddrEnabled) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.communityTax !== "") {
            obj.communityTax = message.communityTax;
        }
        if (message.baseProposerReward !== "") {
            obj.baseProposerReward = message.baseProposerReward;
        }
        if (message.bonusProposerReward !== "") {
            obj.bonusProposerReward = message.bonusProposerReward;
        }
        if (message.withdrawAddrEnabled === true) {
            obj.withdrawAddrEnabled = message.withdrawAddrEnabled;
        }
        return obj;
    },
    create(base) {
        return exports.Params.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.communityTax = object.communityTax ?? "";
        message.baseProposerReward = object.baseProposerReward ?? "";
        message.bonusProposerReward = object.bonusProposerReward ?? "";
        message.withdrawAddrEnabled = object.withdrawAddrEnabled ?? false;
        return message;
    },
};
function createBaseValidatorHistoricalRewards() {
    return { cumulativeRewardRatio: [], referenceCount: 0 };
}
exports.ValidatorHistoricalRewards = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.cumulativeRewardRatio) {
            coin_1.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.referenceCount !== 0) {
            writer.uint32(16).uint32(message.referenceCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorHistoricalRewards();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.cumulativeRewardRatio.push(coin_1.DecCoin.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.referenceCount = reader.uint32();
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
            cumulativeRewardRatio: Array.isArray(object?.cumulativeRewardRatio)
                ? object.cumulativeRewardRatio.map((e) => coin_1.DecCoin.fromJSON(e))
                : [],
            referenceCount: isSet(object.referenceCount) ? Number(object.referenceCount) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.cumulativeRewardRatio?.length) {
            obj.cumulativeRewardRatio = message.cumulativeRewardRatio.map((e) => coin_1.DecCoin.toJSON(e));
        }
        if (message.referenceCount !== 0) {
            obj.referenceCount = Math.round(message.referenceCount);
        }
        return obj;
    },
    create(base) {
        return exports.ValidatorHistoricalRewards.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseValidatorHistoricalRewards();
        message.cumulativeRewardRatio = object.cumulativeRewardRatio?.map((e) => coin_1.DecCoin.fromPartial(e)) || [];
        message.referenceCount = object.referenceCount ?? 0;
        return message;
    },
};
function createBaseValidatorCurrentRewards() {
    return { rewards: [], period: 0 };
}
exports.ValidatorCurrentRewards = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.rewards) {
            coin_1.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.period !== 0) {
            writer.uint32(16).uint64(message.period);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorCurrentRewards();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.rewards.push(coin_1.DecCoin.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.period = longToNumber(reader.uint64());
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
            rewards: Array.isArray(object?.rewards) ? object.rewards.map((e) => coin_1.DecCoin.fromJSON(e)) : [],
            period: isSet(object.period) ? Number(object.period) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.rewards?.length) {
            obj.rewards = message.rewards.map((e) => coin_1.DecCoin.toJSON(e));
        }
        if (message.period !== 0) {
            obj.period = Math.round(message.period);
        }
        return obj;
    },
    create(base) {
        return exports.ValidatorCurrentRewards.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseValidatorCurrentRewards();
        message.rewards = object.rewards?.map((e) => coin_1.DecCoin.fromPartial(e)) || [];
        message.period = object.period ?? 0;
        return message;
    },
};
function createBaseValidatorAccumulatedCommission() {
    return { commission: [] };
}
exports.ValidatorAccumulatedCommission = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.commission) {
            coin_1.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorAccumulatedCommission();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.commission.push(coin_1.DecCoin.decode(reader, reader.uint32()));
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
            commission: Array.isArray(object?.commission) ? object.commission.map((e) => coin_1.DecCoin.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.commission?.length) {
            obj.commission = message.commission.map((e) => coin_1.DecCoin.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.ValidatorAccumulatedCommission.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseValidatorAccumulatedCommission();
        message.commission = object.commission?.map((e) => coin_1.DecCoin.fromPartial(e)) || [];
        return message;
    },
};
function createBaseValidatorOutstandingRewards() {
    return { rewards: [] };
}
exports.ValidatorOutstandingRewards = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.rewards) {
            coin_1.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorOutstandingRewards();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.rewards.push(coin_1.DecCoin.decode(reader, reader.uint32()));
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
        return { rewards: Array.isArray(object?.rewards) ? object.rewards.map((e) => coin_1.DecCoin.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.rewards?.length) {
            obj.rewards = message.rewards.map((e) => coin_1.DecCoin.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.ValidatorOutstandingRewards.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseValidatorOutstandingRewards();
        message.rewards = object.rewards?.map((e) => coin_1.DecCoin.fromPartial(e)) || [];
        return message;
    },
};
function createBaseValidatorSlashEvent() {
    return { validatorPeriod: 0, fraction: "" };
}
exports.ValidatorSlashEvent = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.validatorPeriod !== 0) {
            writer.uint32(8).uint64(message.validatorPeriod);
        }
        if (message.fraction !== "") {
            writer.uint32(18).string(message.fraction);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorSlashEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.validatorPeriod = longToNumber(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.fraction = reader.string();
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
            validatorPeriod: isSet(object.validatorPeriod) ? Number(object.validatorPeriod) : 0,
            fraction: isSet(object.fraction) ? String(object.fraction) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.validatorPeriod !== 0) {
            obj.validatorPeriod = Math.round(message.validatorPeriod);
        }
        if (message.fraction !== "") {
            obj.fraction = message.fraction;
        }
        return obj;
    },
    create(base) {
        return exports.ValidatorSlashEvent.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseValidatorSlashEvent();
        message.validatorPeriod = object.validatorPeriod ?? 0;
        message.fraction = object.fraction ?? "";
        return message;
    },
};
function createBaseValidatorSlashEvents() {
    return { validatorSlashEvents: [] };
}
exports.ValidatorSlashEvents = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.validatorSlashEvents) {
            exports.ValidatorSlashEvent.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorSlashEvents();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.validatorSlashEvents.push(exports.ValidatorSlashEvent.decode(reader, reader.uint32()));
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
            validatorSlashEvents: Array.isArray(object?.validatorSlashEvents)
                ? object.validatorSlashEvents.map((e) => exports.ValidatorSlashEvent.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.validatorSlashEvents?.length) {
            obj.validatorSlashEvents = message.validatorSlashEvents.map((e) => exports.ValidatorSlashEvent.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.ValidatorSlashEvents.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseValidatorSlashEvents();
        message.validatorSlashEvents = object.validatorSlashEvents?.map((e) => exports.ValidatorSlashEvent.fromPartial(e)) || [];
        return message;
    },
};
function createBaseFeePool() {
    return { communityPool: [] };
}
exports.FeePool = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.communityPool) {
            coin_1.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFeePool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.communityPool.push(coin_1.DecCoin.decode(reader, reader.uint32()));
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
            communityPool: Array.isArray(object?.communityPool)
                ? object.communityPool.map((e) => coin_1.DecCoin.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.communityPool?.length) {
            obj.communityPool = message.communityPool.map((e) => coin_1.DecCoin.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.FeePool.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseFeePool();
        message.communityPool = object.communityPool?.map((e) => coin_1.DecCoin.fromPartial(e)) || [];
        return message;
    },
};
function createBaseCommunityPoolSpendProposal() {
    return { title: "", description: "", recipient: "", amount: [] };
}
exports.CommunityPoolSpendProposal = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.recipient !== "") {
            writer.uint32(26).string(message.recipient);
        }
        for (const v of message.amount) {
            coin_1.Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommunityPoolSpendProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.recipient = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            recipient: isSet(object.recipient) ? String(object.recipient) : "",
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => coin_1.Coin.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.title !== "") {
            obj.title = message.title;
        }
        if (message.description !== "") {
            obj.description = message.description;
        }
        if (message.recipient !== "") {
            obj.recipient = message.recipient;
        }
        if (message.amount?.length) {
            obj.amount = message.amount.map((e) => coin_1.Coin.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.CommunityPoolSpendProposal.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCommunityPoolSpendProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.recipient = object.recipient ?? "";
        message.amount = object.amount?.map((e) => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
};
function createBaseDelegatorStartingInfo() {
    return { previousPeriod: 0, stake: "", height: 0 };
}
exports.DelegatorStartingInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.previousPeriod !== 0) {
            writer.uint32(8).uint64(message.previousPeriod);
        }
        if (message.stake !== "") {
            writer.uint32(18).string(message.stake);
        }
        if (message.height !== 0) {
            writer.uint32(24).uint64(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDelegatorStartingInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.previousPeriod = longToNumber(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.stake = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.height = longToNumber(reader.uint64());
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
            previousPeriod: isSet(object.previousPeriod) ? Number(object.previousPeriod) : 0,
            stake: isSet(object.stake) ? String(object.stake) : "",
            height: isSet(object.height) ? Number(object.height) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.previousPeriod !== 0) {
            obj.previousPeriod = Math.round(message.previousPeriod);
        }
        if (message.stake !== "") {
            obj.stake = message.stake;
        }
        if (message.height !== 0) {
            obj.height = Math.round(message.height);
        }
        return obj;
    },
    create(base) {
        return exports.DelegatorStartingInfo.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDelegatorStartingInfo();
        message.previousPeriod = object.previousPeriod ?? 0;
        message.stake = object.stake ?? "";
        message.height = object.height ?? 0;
        return message;
    },
};
function createBaseDelegationDelegatorReward() {
    return { validatorAddress: "", reward: [] };
}
exports.DelegationDelegatorReward = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        for (const v of message.reward) {
            coin_1.DecCoin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDelegationDelegatorReward();
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
                    message.reward.push(coin_1.DecCoin.decode(reader, reader.uint32()));
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
            reward: Array.isArray(object?.reward) ? object.reward.map((e) => coin_1.DecCoin.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.validatorAddress !== "") {
            obj.validatorAddress = message.validatorAddress;
        }
        if (message.reward?.length) {
            obj.reward = message.reward.map((e) => coin_1.DecCoin.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.DelegationDelegatorReward.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDelegationDelegatorReward();
        message.validatorAddress = object.validatorAddress ?? "";
        message.reward = object.reward?.map((e) => coin_1.DecCoin.fromPartial(e)) || [];
        return message;
    },
};
function createBaseCommunityPoolSpendProposalWithDeposit() {
    return { title: "", description: "", recipient: "", amount: "", deposit: "" };
}
exports.CommunityPoolSpendProposalWithDeposit = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.recipient !== "") {
            writer.uint32(26).string(message.recipient);
        }
        if (message.amount !== "") {
            writer.uint32(34).string(message.amount);
        }
        if (message.deposit !== "") {
            writer.uint32(42).string(message.deposit);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommunityPoolSpendProposalWithDeposit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.recipient = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.amount = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.deposit = reader.string();
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            recipient: isSet(object.recipient) ? String(object.recipient) : "",
            amount: isSet(object.amount) ? String(object.amount) : "",
            deposit: isSet(object.deposit) ? String(object.deposit) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.title !== "") {
            obj.title = message.title;
        }
        if (message.description !== "") {
            obj.description = message.description;
        }
        if (message.recipient !== "") {
            obj.recipient = message.recipient;
        }
        if (message.amount !== "") {
            obj.amount = message.amount;
        }
        if (message.deposit !== "") {
            obj.deposit = message.deposit;
        }
        return obj;
    },
    create(base) {
        return exports.CommunityPoolSpendProposalWithDeposit.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCommunityPoolSpendProposalWithDeposit();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.recipient = object.recipient ?? "";
        message.amount = object.amount ?? "";
        message.deposit = object.deposit ?? "";
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
