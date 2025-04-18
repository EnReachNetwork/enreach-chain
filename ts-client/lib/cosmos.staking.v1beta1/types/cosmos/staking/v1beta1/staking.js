"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidatorUpdates = exports.Pool = exports.RedelegationResponse = exports.RedelegationEntryResponse = exports.DelegationResponse = exports.Params = exports.Redelegation = exports.RedelegationEntry = exports.UnbondingDelegationEntry = exports.UnbondingDelegation = exports.Delegation = exports.DVVTriplets = exports.DVVTriplet = exports.DVPairs = exports.DVPair = exports.ValAddresses = exports.Validator = exports.Description = exports.Commission = exports.CommissionRates = exports.HistoricalInfo = exports.Infraction = exports.BondStatus = exports.protobufPackage = void 0;
exports.bondStatusFromJSON = bondStatusFromJSON;
exports.bondStatusToJSON = bondStatusToJSON;
exports.infractionFromJSON = infractionFromJSON;
exports.infractionToJSON = infractionToJSON;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const any_1 = require("../../../google/protobuf/any");
const duration_1 = require("../../../google/protobuf/duration");
const timestamp_1 = require("../../../google/protobuf/timestamp");
const types_1 = require("../../../tendermint/abci/types");
const types_2 = require("../../../tendermint/types/types");
const coin_1 = require("../../base/v1beta1/coin");
exports.protobufPackage = "cosmos.staking.v1beta1";
/** BondStatus is the status of a validator. */
var BondStatus;
(function (BondStatus) {
    /** BOND_STATUS_UNSPECIFIED - UNSPECIFIED defines an invalid validator status. */
    BondStatus[BondStatus["BOND_STATUS_UNSPECIFIED"] = 0] = "BOND_STATUS_UNSPECIFIED";
    /** BOND_STATUS_UNBONDED - UNBONDED defines a validator that is not bonded. */
    BondStatus[BondStatus["BOND_STATUS_UNBONDED"] = 1] = "BOND_STATUS_UNBONDED";
    /** BOND_STATUS_UNBONDING - UNBONDING defines a validator that is unbonding. */
    BondStatus[BondStatus["BOND_STATUS_UNBONDING"] = 2] = "BOND_STATUS_UNBONDING";
    /** BOND_STATUS_BONDED - BONDED defines a validator that is bonded. */
    BondStatus[BondStatus["BOND_STATUS_BONDED"] = 3] = "BOND_STATUS_BONDED";
    BondStatus[BondStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(BondStatus || (exports.BondStatus = BondStatus = {}));
function bondStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "BOND_STATUS_UNSPECIFIED":
            return BondStatus.BOND_STATUS_UNSPECIFIED;
        case 1:
        case "BOND_STATUS_UNBONDED":
            return BondStatus.BOND_STATUS_UNBONDED;
        case 2:
        case "BOND_STATUS_UNBONDING":
            return BondStatus.BOND_STATUS_UNBONDING;
        case 3:
        case "BOND_STATUS_BONDED":
            return BondStatus.BOND_STATUS_BONDED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return BondStatus.UNRECOGNIZED;
    }
}
function bondStatusToJSON(object) {
    switch (object) {
        case BondStatus.BOND_STATUS_UNSPECIFIED:
            return "BOND_STATUS_UNSPECIFIED";
        case BondStatus.BOND_STATUS_UNBONDED:
            return "BOND_STATUS_UNBONDED";
        case BondStatus.BOND_STATUS_UNBONDING:
            return "BOND_STATUS_UNBONDING";
        case BondStatus.BOND_STATUS_BONDED:
            return "BOND_STATUS_BONDED";
        case BondStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
/** Infraction indicates the infraction a validator commited. */
var Infraction;
(function (Infraction) {
    /** INFRACTION_UNSPECIFIED - UNSPECIFIED defines an empty infraction. */
    Infraction[Infraction["INFRACTION_UNSPECIFIED"] = 0] = "INFRACTION_UNSPECIFIED";
    /** INFRACTION_DOUBLE_SIGN - DOUBLE_SIGN defines a validator that double-signs a block. */
    Infraction[Infraction["INFRACTION_DOUBLE_SIGN"] = 1] = "INFRACTION_DOUBLE_SIGN";
    /** INFRACTION_DOWNTIME - DOWNTIME defines a validator that missed signing too many blocks. */
    Infraction[Infraction["INFRACTION_DOWNTIME"] = 2] = "INFRACTION_DOWNTIME";
    Infraction[Infraction["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Infraction || (exports.Infraction = Infraction = {}));
function infractionFromJSON(object) {
    switch (object) {
        case 0:
        case "INFRACTION_UNSPECIFIED":
            return Infraction.INFRACTION_UNSPECIFIED;
        case 1:
        case "INFRACTION_DOUBLE_SIGN":
            return Infraction.INFRACTION_DOUBLE_SIGN;
        case 2:
        case "INFRACTION_DOWNTIME":
            return Infraction.INFRACTION_DOWNTIME;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Infraction.UNRECOGNIZED;
    }
}
function infractionToJSON(object) {
    switch (object) {
        case Infraction.INFRACTION_UNSPECIFIED:
            return "INFRACTION_UNSPECIFIED";
        case Infraction.INFRACTION_DOUBLE_SIGN:
            return "INFRACTION_DOUBLE_SIGN";
        case Infraction.INFRACTION_DOWNTIME:
            return "INFRACTION_DOWNTIME";
        case Infraction.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseHistoricalInfo() {
    return { header: undefined, valset: [] };
}
exports.HistoricalInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.header !== undefined) {
            types_2.Header.encode(message.header, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.valset) {
            exports.Validator.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHistoricalInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.header = types_2.Header.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.valset.push(exports.Validator.decode(reader, reader.uint32()));
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
            header: isSet(object.header) ? types_2.Header.fromJSON(object.header) : undefined,
            valset: Array.isArray(object?.valset) ? object.valset.map((e) => exports.Validator.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.header !== undefined) {
            obj.header = types_2.Header.toJSON(message.header);
        }
        if (message.valset?.length) {
            obj.valset = message.valset.map((e) => exports.Validator.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.HistoricalInfo.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseHistoricalInfo();
        message.header = (object.header !== undefined && object.header !== null)
            ? types_2.Header.fromPartial(object.header)
            : undefined;
        message.valset = object.valset?.map((e) => exports.Validator.fromPartial(e)) || [];
        return message;
    },
};
function createBaseCommissionRates() {
    return { rate: "", maxRate: "", maxChangeRate: "" };
}
exports.CommissionRates = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.rate !== "") {
            writer.uint32(10).string(message.rate);
        }
        if (message.maxRate !== "") {
            writer.uint32(18).string(message.maxRate);
        }
        if (message.maxChangeRate !== "") {
            writer.uint32(26).string(message.maxChangeRate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommissionRates();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.rate = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.maxRate = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.maxChangeRate = reader.string();
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
            rate: isSet(object.rate) ? String(object.rate) : "",
            maxRate: isSet(object.maxRate) ? String(object.maxRate) : "",
            maxChangeRate: isSet(object.maxChangeRate) ? String(object.maxChangeRate) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.rate !== "") {
            obj.rate = message.rate;
        }
        if (message.maxRate !== "") {
            obj.maxRate = message.maxRate;
        }
        if (message.maxChangeRate !== "") {
            obj.maxChangeRate = message.maxChangeRate;
        }
        return obj;
    },
    create(base) {
        return exports.CommissionRates.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCommissionRates();
        message.rate = object.rate ?? "";
        message.maxRate = object.maxRate ?? "";
        message.maxChangeRate = object.maxChangeRate ?? "";
        return message;
    },
};
function createBaseCommission() {
    return { commissionRates: undefined, updateTime: undefined };
}
exports.Commission = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.commissionRates !== undefined) {
            exports.CommissionRates.encode(message.commissionRates, writer.uint32(10).fork()).ldelim();
        }
        if (message.updateTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.updateTime), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommission();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.commissionRates = exports.CommissionRates.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.updateTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            commissionRates: isSet(object.commissionRates) ? exports.CommissionRates.fromJSON(object.commissionRates) : undefined,
            updateTime: isSet(object.updateTime) ? fromJsonTimestamp(object.updateTime) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.commissionRates !== undefined) {
            obj.commissionRates = exports.CommissionRates.toJSON(message.commissionRates);
        }
        if (message.updateTime !== undefined) {
            obj.updateTime = message.updateTime.toISOString();
        }
        return obj;
    },
    create(base) {
        return exports.Commission.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCommission();
        message.commissionRates = (object.commissionRates !== undefined && object.commissionRates !== null)
            ? exports.CommissionRates.fromPartial(object.commissionRates)
            : undefined;
        message.updateTime = object.updateTime ?? undefined;
        return message;
    },
};
function createBaseDescription() {
    return { moniker: "", identity: "", website: "", securityContact: "", details: "" };
}
exports.Description = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.moniker !== "") {
            writer.uint32(10).string(message.moniker);
        }
        if (message.identity !== "") {
            writer.uint32(18).string(message.identity);
        }
        if (message.website !== "") {
            writer.uint32(26).string(message.website);
        }
        if (message.securityContact !== "") {
            writer.uint32(34).string(message.securityContact);
        }
        if (message.details !== "") {
            writer.uint32(42).string(message.details);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDescription();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.moniker = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.identity = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.website = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.securityContact = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.details = reader.string();
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
            moniker: isSet(object.moniker) ? String(object.moniker) : "",
            identity: isSet(object.identity) ? String(object.identity) : "",
            website: isSet(object.website) ? String(object.website) : "",
            securityContact: isSet(object.securityContact) ? String(object.securityContact) : "",
            details: isSet(object.details) ? String(object.details) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.moniker !== "") {
            obj.moniker = message.moniker;
        }
        if (message.identity !== "") {
            obj.identity = message.identity;
        }
        if (message.website !== "") {
            obj.website = message.website;
        }
        if (message.securityContact !== "") {
            obj.securityContact = message.securityContact;
        }
        if (message.details !== "") {
            obj.details = message.details;
        }
        return obj;
    },
    create(base) {
        return exports.Description.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDescription();
        message.moniker = object.moniker ?? "";
        message.identity = object.identity ?? "";
        message.website = object.website ?? "";
        message.securityContact = object.securityContact ?? "";
        message.details = object.details ?? "";
        return message;
    },
};
function createBaseValidator() {
    return {
        operatorAddress: "",
        consensusPubkey: undefined,
        jailed: false,
        status: 0,
        tokens: "",
        delegatorShares: "",
        description: undefined,
        unbondingHeight: 0,
        unbondingTime: undefined,
        commission: undefined,
        minSelfDelegation: "",
        unbondingOnHoldRefCount: 0,
        unbondingIds: [],
    };
}
exports.Validator = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.operatorAddress !== "") {
            writer.uint32(10).string(message.operatorAddress);
        }
        if (message.consensusPubkey !== undefined) {
            any_1.Any.encode(message.consensusPubkey, writer.uint32(18).fork()).ldelim();
        }
        if (message.jailed === true) {
            writer.uint32(24).bool(message.jailed);
        }
        if (message.status !== 0) {
            writer.uint32(32).int32(message.status);
        }
        if (message.tokens !== "") {
            writer.uint32(42).string(message.tokens);
        }
        if (message.delegatorShares !== "") {
            writer.uint32(50).string(message.delegatorShares);
        }
        if (message.description !== undefined) {
            exports.Description.encode(message.description, writer.uint32(58).fork()).ldelim();
        }
        if (message.unbondingHeight !== 0) {
            writer.uint32(64).int64(message.unbondingHeight);
        }
        if (message.unbondingTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.unbondingTime), writer.uint32(74).fork()).ldelim();
        }
        if (message.commission !== undefined) {
            exports.Commission.encode(message.commission, writer.uint32(82).fork()).ldelim();
        }
        if (message.minSelfDelegation !== "") {
            writer.uint32(90).string(message.minSelfDelegation);
        }
        if (message.unbondingOnHoldRefCount !== 0) {
            writer.uint32(96).int64(message.unbondingOnHoldRefCount);
        }
        writer.uint32(106).fork();
        for (const v of message.unbondingIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidator();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.operatorAddress = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.consensusPubkey = any_1.Any.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.jailed = reader.bool();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.status = reader.int32();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.tokens = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.delegatorShares = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.description = exports.Description.decode(reader, reader.uint32());
                    continue;
                case 8:
                    if (tag !== 64) {
                        break;
                    }
                    message.unbondingHeight = longToNumber(reader.int64());
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.unbondingTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.commission = exports.Commission.decode(reader, reader.uint32());
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.minSelfDelegation = reader.string();
                    continue;
                case 12:
                    if (tag !== 96) {
                        break;
                    }
                    message.unbondingOnHoldRefCount = longToNumber(reader.int64());
                    continue;
                case 13:
                    if (tag === 104) {
                        message.unbondingIds.push(longToNumber(reader.uint64()));
                        continue;
                    }
                    if (tag === 106) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.unbondingIds.push(longToNumber(reader.uint64()));
                        }
                        continue;
                    }
                    break;
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
            operatorAddress: isSet(object.operatorAddress) ? String(object.operatorAddress) : "",
            consensusPubkey: isSet(object.consensusPubkey) ? any_1.Any.fromJSON(object.consensusPubkey) : undefined,
            jailed: isSet(object.jailed) ? Boolean(object.jailed) : false,
            status: isSet(object.status) ? bondStatusFromJSON(object.status) : 0,
            tokens: isSet(object.tokens) ? String(object.tokens) : "",
            delegatorShares: isSet(object.delegatorShares) ? String(object.delegatorShares) : "",
            description: isSet(object.description) ? exports.Description.fromJSON(object.description) : undefined,
            unbondingHeight: isSet(object.unbondingHeight) ? Number(object.unbondingHeight) : 0,
            unbondingTime: isSet(object.unbondingTime) ? fromJsonTimestamp(object.unbondingTime) : undefined,
            commission: isSet(object.commission) ? exports.Commission.fromJSON(object.commission) : undefined,
            minSelfDelegation: isSet(object.minSelfDelegation) ? String(object.minSelfDelegation) : "",
            unbondingOnHoldRefCount: isSet(object.unbondingOnHoldRefCount) ? Number(object.unbondingOnHoldRefCount) : 0,
            unbondingIds: Array.isArray(object?.unbondingIds) ? object.unbondingIds.map((e) => Number(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.operatorAddress !== "") {
            obj.operatorAddress = message.operatorAddress;
        }
        if (message.consensusPubkey !== undefined) {
            obj.consensusPubkey = any_1.Any.toJSON(message.consensusPubkey);
        }
        if (message.jailed === true) {
            obj.jailed = message.jailed;
        }
        if (message.status !== 0) {
            obj.status = bondStatusToJSON(message.status);
        }
        if (message.tokens !== "") {
            obj.tokens = message.tokens;
        }
        if (message.delegatorShares !== "") {
            obj.delegatorShares = message.delegatorShares;
        }
        if (message.description !== undefined) {
            obj.description = exports.Description.toJSON(message.description);
        }
        if (message.unbondingHeight !== 0) {
            obj.unbondingHeight = Math.round(message.unbondingHeight);
        }
        if (message.unbondingTime !== undefined) {
            obj.unbondingTime = message.unbondingTime.toISOString();
        }
        if (message.commission !== undefined) {
            obj.commission = exports.Commission.toJSON(message.commission);
        }
        if (message.minSelfDelegation !== "") {
            obj.minSelfDelegation = message.minSelfDelegation;
        }
        if (message.unbondingOnHoldRefCount !== 0) {
            obj.unbondingOnHoldRefCount = Math.round(message.unbondingOnHoldRefCount);
        }
        if (message.unbondingIds?.length) {
            obj.unbondingIds = message.unbondingIds.map((e) => Math.round(e));
        }
        return obj;
    },
    create(base) {
        return exports.Validator.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseValidator();
        message.operatorAddress = object.operatorAddress ?? "";
        message.consensusPubkey = (object.consensusPubkey !== undefined && object.consensusPubkey !== null)
            ? any_1.Any.fromPartial(object.consensusPubkey)
            : undefined;
        message.jailed = object.jailed ?? false;
        message.status = object.status ?? 0;
        message.tokens = object.tokens ?? "";
        message.delegatorShares = object.delegatorShares ?? "";
        message.description = (object.description !== undefined && object.description !== null)
            ? exports.Description.fromPartial(object.description)
            : undefined;
        message.unbondingHeight = object.unbondingHeight ?? 0;
        message.unbondingTime = object.unbondingTime ?? undefined;
        message.commission = (object.commission !== undefined && object.commission !== null)
            ? exports.Commission.fromPartial(object.commission)
            : undefined;
        message.minSelfDelegation = object.minSelfDelegation ?? "";
        message.unbondingOnHoldRefCount = object.unbondingOnHoldRefCount ?? 0;
        message.unbondingIds = object.unbondingIds?.map((e) => e) || [];
        return message;
    },
};
function createBaseValAddresses() {
    return { addresses: [] };
}
exports.ValAddresses = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.addresses) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValAddresses();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.addresses.push(reader.string());
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
        return { addresses: Array.isArray(object?.addresses) ? object.addresses.map((e) => String(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.addresses?.length) {
            obj.addresses = message.addresses;
        }
        return obj;
    },
    create(base) {
        return exports.ValAddresses.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseValAddresses();
        message.addresses = object.addresses?.map((e) => e) || [];
        return message;
    },
};
function createBaseDVPair() {
    return { delegatorAddress: "", validatorAddress: "" };
}
exports.DVPair = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(18).string(message.validatorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDVPair();
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
        return obj;
    },
    create(base) {
        return exports.DVPair.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDVPair();
        message.delegatorAddress = object.delegatorAddress ?? "";
        message.validatorAddress = object.validatorAddress ?? "";
        return message;
    },
};
function createBaseDVPairs() {
    return { pairs: [] };
}
exports.DVPairs = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.pairs) {
            exports.DVPair.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDVPairs();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.pairs.push(exports.DVPair.decode(reader, reader.uint32()));
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
        return { pairs: Array.isArray(object?.pairs) ? object.pairs.map((e) => exports.DVPair.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.pairs?.length) {
            obj.pairs = message.pairs.map((e) => exports.DVPair.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.DVPairs.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDVPairs();
        message.pairs = object.pairs?.map((e) => exports.DVPair.fromPartial(e)) || [];
        return message;
    },
};
function createBaseDVVTriplet() {
    return { delegatorAddress: "", validatorSrcAddress: "", validatorDstAddress: "" };
}
exports.DVVTriplet = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorSrcAddress !== "") {
            writer.uint32(18).string(message.validatorSrcAddress);
        }
        if (message.validatorDstAddress !== "") {
            writer.uint32(26).string(message.validatorDstAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDVVTriplet();
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
                    message.validatorSrcAddress = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.validatorDstAddress = reader.string();
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
            validatorSrcAddress: isSet(object.validatorSrcAddress) ? String(object.validatorSrcAddress) : "",
            validatorDstAddress: isSet(object.validatorDstAddress) ? String(object.validatorDstAddress) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.delegatorAddress !== "") {
            obj.delegatorAddress = message.delegatorAddress;
        }
        if (message.validatorSrcAddress !== "") {
            obj.validatorSrcAddress = message.validatorSrcAddress;
        }
        if (message.validatorDstAddress !== "") {
            obj.validatorDstAddress = message.validatorDstAddress;
        }
        return obj;
    },
    create(base) {
        return exports.DVVTriplet.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDVVTriplet();
        message.delegatorAddress = object.delegatorAddress ?? "";
        message.validatorSrcAddress = object.validatorSrcAddress ?? "";
        message.validatorDstAddress = object.validatorDstAddress ?? "";
        return message;
    },
};
function createBaseDVVTriplets() {
    return { triplets: [] };
}
exports.DVVTriplets = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.triplets) {
            exports.DVVTriplet.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDVVTriplets();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.triplets.push(exports.DVVTriplet.decode(reader, reader.uint32()));
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
        return { triplets: Array.isArray(object?.triplets) ? object.triplets.map((e) => exports.DVVTriplet.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.triplets?.length) {
            obj.triplets = message.triplets.map((e) => exports.DVVTriplet.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.DVVTriplets.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDVVTriplets();
        message.triplets = object.triplets?.map((e) => exports.DVVTriplet.fromPartial(e)) || [];
        return message;
    },
};
function createBaseDelegation() {
    return { delegatorAddress: "", validatorAddress: "", shares: "" };
}
exports.Delegation = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(18).string(message.validatorAddress);
        }
        if (message.shares !== "") {
            writer.uint32(26).string(message.shares);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDelegation();
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
                    message.shares = reader.string();
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
            shares: isSet(object.shares) ? String(object.shares) : "",
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
        if (message.shares !== "") {
            obj.shares = message.shares;
        }
        return obj;
    },
    create(base) {
        return exports.Delegation.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDelegation();
        message.delegatorAddress = object.delegatorAddress ?? "";
        message.validatorAddress = object.validatorAddress ?? "";
        message.shares = object.shares ?? "";
        return message;
    },
};
function createBaseUnbondingDelegation() {
    return { delegatorAddress: "", validatorAddress: "", entries: [] };
}
exports.UnbondingDelegation = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(18).string(message.validatorAddress);
        }
        for (const v of message.entries) {
            exports.UnbondingDelegationEntry.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUnbondingDelegation();
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
                    message.entries.push(exports.UnbondingDelegationEntry.decode(reader, reader.uint32()));
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
            entries: Array.isArray(object?.entries)
                ? object.entries.map((e) => exports.UnbondingDelegationEntry.fromJSON(e))
                : [],
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
        if (message.entries?.length) {
            obj.entries = message.entries.map((e) => exports.UnbondingDelegationEntry.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.UnbondingDelegation.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUnbondingDelegation();
        message.delegatorAddress = object.delegatorAddress ?? "";
        message.validatorAddress = object.validatorAddress ?? "";
        message.entries = object.entries?.map((e) => exports.UnbondingDelegationEntry.fromPartial(e)) || [];
        return message;
    },
};
function createBaseUnbondingDelegationEntry() {
    return {
        creationHeight: 0,
        completionTime: undefined,
        initialBalance: "",
        balance: "",
        unbondingId: 0,
        unbondingOnHoldRefCount: 0,
    };
}
exports.UnbondingDelegationEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.creationHeight !== 0) {
            writer.uint32(8).int64(message.creationHeight);
        }
        if (message.completionTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.completionTime), writer.uint32(18).fork()).ldelim();
        }
        if (message.initialBalance !== "") {
            writer.uint32(26).string(message.initialBalance);
        }
        if (message.balance !== "") {
            writer.uint32(34).string(message.balance);
        }
        if (message.unbondingId !== 0) {
            writer.uint32(40).uint64(message.unbondingId);
        }
        if (message.unbondingOnHoldRefCount !== 0) {
            writer.uint32(48).int64(message.unbondingOnHoldRefCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUnbondingDelegationEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.creationHeight = longToNumber(reader.int64());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.completionTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.initialBalance = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.balance = reader.string();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.unbondingId = longToNumber(reader.uint64());
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.unbondingOnHoldRefCount = longToNumber(reader.int64());
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
            creationHeight: isSet(object.creationHeight) ? Number(object.creationHeight) : 0,
            completionTime: isSet(object.completionTime) ? fromJsonTimestamp(object.completionTime) : undefined,
            initialBalance: isSet(object.initialBalance) ? String(object.initialBalance) : "",
            balance: isSet(object.balance) ? String(object.balance) : "",
            unbondingId: isSet(object.unbondingId) ? Number(object.unbondingId) : 0,
            unbondingOnHoldRefCount: isSet(object.unbondingOnHoldRefCount) ? Number(object.unbondingOnHoldRefCount) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.creationHeight !== 0) {
            obj.creationHeight = Math.round(message.creationHeight);
        }
        if (message.completionTime !== undefined) {
            obj.completionTime = message.completionTime.toISOString();
        }
        if (message.initialBalance !== "") {
            obj.initialBalance = message.initialBalance;
        }
        if (message.balance !== "") {
            obj.balance = message.balance;
        }
        if (message.unbondingId !== 0) {
            obj.unbondingId = Math.round(message.unbondingId);
        }
        if (message.unbondingOnHoldRefCount !== 0) {
            obj.unbondingOnHoldRefCount = Math.round(message.unbondingOnHoldRefCount);
        }
        return obj;
    },
    create(base) {
        return exports.UnbondingDelegationEntry.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUnbondingDelegationEntry();
        message.creationHeight = object.creationHeight ?? 0;
        message.completionTime = object.completionTime ?? undefined;
        message.initialBalance = object.initialBalance ?? "";
        message.balance = object.balance ?? "";
        message.unbondingId = object.unbondingId ?? 0;
        message.unbondingOnHoldRefCount = object.unbondingOnHoldRefCount ?? 0;
        return message;
    },
};
function createBaseRedelegationEntry() {
    return {
        creationHeight: 0,
        completionTime: undefined,
        initialBalance: "",
        sharesDst: "",
        unbondingId: 0,
        unbondingOnHoldRefCount: 0,
    };
}
exports.RedelegationEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.creationHeight !== 0) {
            writer.uint32(8).int64(message.creationHeight);
        }
        if (message.completionTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.completionTime), writer.uint32(18).fork()).ldelim();
        }
        if (message.initialBalance !== "") {
            writer.uint32(26).string(message.initialBalance);
        }
        if (message.sharesDst !== "") {
            writer.uint32(34).string(message.sharesDst);
        }
        if (message.unbondingId !== 0) {
            writer.uint32(40).uint64(message.unbondingId);
        }
        if (message.unbondingOnHoldRefCount !== 0) {
            writer.uint32(48).int64(message.unbondingOnHoldRefCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRedelegationEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.creationHeight = longToNumber(reader.int64());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.completionTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.initialBalance = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.sharesDst = reader.string();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.unbondingId = longToNumber(reader.uint64());
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.unbondingOnHoldRefCount = longToNumber(reader.int64());
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
            creationHeight: isSet(object.creationHeight) ? Number(object.creationHeight) : 0,
            completionTime: isSet(object.completionTime) ? fromJsonTimestamp(object.completionTime) : undefined,
            initialBalance: isSet(object.initialBalance) ? String(object.initialBalance) : "",
            sharesDst: isSet(object.sharesDst) ? String(object.sharesDst) : "",
            unbondingId: isSet(object.unbondingId) ? Number(object.unbondingId) : 0,
            unbondingOnHoldRefCount: isSet(object.unbondingOnHoldRefCount) ? Number(object.unbondingOnHoldRefCount) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.creationHeight !== 0) {
            obj.creationHeight = Math.round(message.creationHeight);
        }
        if (message.completionTime !== undefined) {
            obj.completionTime = message.completionTime.toISOString();
        }
        if (message.initialBalance !== "") {
            obj.initialBalance = message.initialBalance;
        }
        if (message.sharesDst !== "") {
            obj.sharesDst = message.sharesDst;
        }
        if (message.unbondingId !== 0) {
            obj.unbondingId = Math.round(message.unbondingId);
        }
        if (message.unbondingOnHoldRefCount !== 0) {
            obj.unbondingOnHoldRefCount = Math.round(message.unbondingOnHoldRefCount);
        }
        return obj;
    },
    create(base) {
        return exports.RedelegationEntry.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRedelegationEntry();
        message.creationHeight = object.creationHeight ?? 0;
        message.completionTime = object.completionTime ?? undefined;
        message.initialBalance = object.initialBalance ?? "";
        message.sharesDst = object.sharesDst ?? "";
        message.unbondingId = object.unbondingId ?? 0;
        message.unbondingOnHoldRefCount = object.unbondingOnHoldRefCount ?? 0;
        return message;
    },
};
function createBaseRedelegation() {
    return { delegatorAddress: "", validatorSrcAddress: "", validatorDstAddress: "", entries: [] };
}
exports.Redelegation = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorSrcAddress !== "") {
            writer.uint32(18).string(message.validatorSrcAddress);
        }
        if (message.validatorDstAddress !== "") {
            writer.uint32(26).string(message.validatorDstAddress);
        }
        for (const v of message.entries) {
            exports.RedelegationEntry.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRedelegation();
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
                    message.validatorSrcAddress = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.validatorDstAddress = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.entries.push(exports.RedelegationEntry.decode(reader, reader.uint32()));
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
            validatorSrcAddress: isSet(object.validatorSrcAddress) ? String(object.validatorSrcAddress) : "",
            validatorDstAddress: isSet(object.validatorDstAddress) ? String(object.validatorDstAddress) : "",
            entries: Array.isArray(object?.entries) ? object.entries.map((e) => exports.RedelegationEntry.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.delegatorAddress !== "") {
            obj.delegatorAddress = message.delegatorAddress;
        }
        if (message.validatorSrcAddress !== "") {
            obj.validatorSrcAddress = message.validatorSrcAddress;
        }
        if (message.validatorDstAddress !== "") {
            obj.validatorDstAddress = message.validatorDstAddress;
        }
        if (message.entries?.length) {
            obj.entries = message.entries.map((e) => exports.RedelegationEntry.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.Redelegation.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRedelegation();
        message.delegatorAddress = object.delegatorAddress ?? "";
        message.validatorSrcAddress = object.validatorSrcAddress ?? "";
        message.validatorDstAddress = object.validatorDstAddress ?? "";
        message.entries = object.entries?.map((e) => exports.RedelegationEntry.fromPartial(e)) || [];
        return message;
    },
};
function createBaseParams() {
    return {
        unbondingTime: undefined,
        maxValidators: 0,
        maxEntries: 0,
        historicalEntries: 0,
        bondDenom: "",
        minCommissionRate: "",
    };
}
exports.Params = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.unbondingTime !== undefined) {
            duration_1.Duration.encode(message.unbondingTime, writer.uint32(10).fork()).ldelim();
        }
        if (message.maxValidators !== 0) {
            writer.uint32(16).uint32(message.maxValidators);
        }
        if (message.maxEntries !== 0) {
            writer.uint32(24).uint32(message.maxEntries);
        }
        if (message.historicalEntries !== 0) {
            writer.uint32(32).uint32(message.historicalEntries);
        }
        if (message.bondDenom !== "") {
            writer.uint32(42).string(message.bondDenom);
        }
        if (message.minCommissionRate !== "") {
            writer.uint32(50).string(message.minCommissionRate);
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
                    message.unbondingTime = duration_1.Duration.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.maxValidators = reader.uint32();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.maxEntries = reader.uint32();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.historicalEntries = reader.uint32();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.bondDenom = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.minCommissionRate = reader.string();
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
            unbondingTime: isSet(object.unbondingTime) ? duration_1.Duration.fromJSON(object.unbondingTime) : undefined,
            maxValidators: isSet(object.maxValidators) ? Number(object.maxValidators) : 0,
            maxEntries: isSet(object.maxEntries) ? Number(object.maxEntries) : 0,
            historicalEntries: isSet(object.historicalEntries) ? Number(object.historicalEntries) : 0,
            bondDenom: isSet(object.bondDenom) ? String(object.bondDenom) : "",
            minCommissionRate: isSet(object.minCommissionRate) ? String(object.minCommissionRate) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.unbondingTime !== undefined) {
            obj.unbondingTime = duration_1.Duration.toJSON(message.unbondingTime);
        }
        if (message.maxValidators !== 0) {
            obj.maxValidators = Math.round(message.maxValidators);
        }
        if (message.maxEntries !== 0) {
            obj.maxEntries = Math.round(message.maxEntries);
        }
        if (message.historicalEntries !== 0) {
            obj.historicalEntries = Math.round(message.historicalEntries);
        }
        if (message.bondDenom !== "") {
            obj.bondDenom = message.bondDenom;
        }
        if (message.minCommissionRate !== "") {
            obj.minCommissionRate = message.minCommissionRate;
        }
        return obj;
    },
    create(base) {
        return exports.Params.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.unbondingTime = (object.unbondingTime !== undefined && object.unbondingTime !== null)
            ? duration_1.Duration.fromPartial(object.unbondingTime)
            : undefined;
        message.maxValidators = object.maxValidators ?? 0;
        message.maxEntries = object.maxEntries ?? 0;
        message.historicalEntries = object.historicalEntries ?? 0;
        message.bondDenom = object.bondDenom ?? "";
        message.minCommissionRate = object.minCommissionRate ?? "";
        return message;
    },
};
function createBaseDelegationResponse() {
    return { delegation: undefined, balance: undefined };
}
exports.DelegationResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.delegation !== undefined) {
            exports.Delegation.encode(message.delegation, writer.uint32(10).fork()).ldelim();
        }
        if (message.balance !== undefined) {
            coin_1.Coin.encode(message.balance, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDelegationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.delegation = exports.Delegation.decode(reader, reader.uint32());
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
            delegation: isSet(object.delegation) ? exports.Delegation.fromJSON(object.delegation) : undefined,
            balance: isSet(object.balance) ? coin_1.Coin.fromJSON(object.balance) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.delegation !== undefined) {
            obj.delegation = exports.Delegation.toJSON(message.delegation);
        }
        if (message.balance !== undefined) {
            obj.balance = coin_1.Coin.toJSON(message.balance);
        }
        return obj;
    },
    create(base) {
        return exports.DelegationResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDelegationResponse();
        message.delegation = (object.delegation !== undefined && object.delegation !== null)
            ? exports.Delegation.fromPartial(object.delegation)
            : undefined;
        message.balance = (object.balance !== undefined && object.balance !== null)
            ? coin_1.Coin.fromPartial(object.balance)
            : undefined;
        return message;
    },
};
function createBaseRedelegationEntryResponse() {
    return { redelegationEntry: undefined, balance: "" };
}
exports.RedelegationEntryResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.redelegationEntry !== undefined) {
            exports.RedelegationEntry.encode(message.redelegationEntry, writer.uint32(10).fork()).ldelim();
        }
        if (message.balance !== "") {
            writer.uint32(34).string(message.balance);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRedelegationEntryResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.redelegationEntry = exports.RedelegationEntry.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.balance = reader.string();
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
            redelegationEntry: isSet(object.redelegationEntry)
                ? exports.RedelegationEntry.fromJSON(object.redelegationEntry)
                : undefined,
            balance: isSet(object.balance) ? String(object.balance) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.redelegationEntry !== undefined) {
            obj.redelegationEntry = exports.RedelegationEntry.toJSON(message.redelegationEntry);
        }
        if (message.balance !== "") {
            obj.balance = message.balance;
        }
        return obj;
    },
    create(base) {
        return exports.RedelegationEntryResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRedelegationEntryResponse();
        message.redelegationEntry = (object.redelegationEntry !== undefined && object.redelegationEntry !== null)
            ? exports.RedelegationEntry.fromPartial(object.redelegationEntry)
            : undefined;
        message.balance = object.balance ?? "";
        return message;
    },
};
function createBaseRedelegationResponse() {
    return { redelegation: undefined, entries: [] };
}
exports.RedelegationResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.redelegation !== undefined) {
            exports.Redelegation.encode(message.redelegation, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.entries) {
            exports.RedelegationEntryResponse.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRedelegationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.redelegation = exports.Redelegation.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.entries.push(exports.RedelegationEntryResponse.decode(reader, reader.uint32()));
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
            redelegation: isSet(object.redelegation) ? exports.Redelegation.fromJSON(object.redelegation) : undefined,
            entries: Array.isArray(object?.entries)
                ? object.entries.map((e) => exports.RedelegationEntryResponse.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.redelegation !== undefined) {
            obj.redelegation = exports.Redelegation.toJSON(message.redelegation);
        }
        if (message.entries?.length) {
            obj.entries = message.entries.map((e) => exports.RedelegationEntryResponse.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.RedelegationResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRedelegationResponse();
        message.redelegation = (object.redelegation !== undefined && object.redelegation !== null)
            ? exports.Redelegation.fromPartial(object.redelegation)
            : undefined;
        message.entries = object.entries?.map((e) => exports.RedelegationEntryResponse.fromPartial(e)) || [];
        return message;
    },
};
function createBasePool() {
    return { notBondedTokens: "", bondedTokens: "" };
}
exports.Pool = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.notBondedTokens !== "") {
            writer.uint32(10).string(message.notBondedTokens);
        }
        if (message.bondedTokens !== "") {
            writer.uint32(18).string(message.bondedTokens);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.notBondedTokens = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.bondedTokens = reader.string();
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
            notBondedTokens: isSet(object.notBondedTokens) ? String(object.notBondedTokens) : "",
            bondedTokens: isSet(object.bondedTokens) ? String(object.bondedTokens) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.notBondedTokens !== "") {
            obj.notBondedTokens = message.notBondedTokens;
        }
        if (message.bondedTokens !== "") {
            obj.bondedTokens = message.bondedTokens;
        }
        return obj;
    },
    create(base) {
        return exports.Pool.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePool();
        message.notBondedTokens = object.notBondedTokens ?? "";
        message.bondedTokens = object.bondedTokens ?? "";
        return message;
    },
};
function createBaseValidatorUpdates() {
    return { updates: [] };
}
exports.ValidatorUpdates = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.updates) {
            types_1.ValidatorUpdate.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorUpdates();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.updates.push(types_1.ValidatorUpdate.decode(reader, reader.uint32()));
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
            updates: Array.isArray(object?.updates) ? object.updates.map((e) => types_1.ValidatorUpdate.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.updates?.length) {
            obj.updates = message.updates.map((e) => types_1.ValidatorUpdate.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.ValidatorUpdates.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseValidatorUpdates();
        message.updates = object.updates?.map((e) => types_1.ValidatorUpdate.fromPartial(e)) || [];
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
function toTimestamp(date) {
    const seconds = date.getTime() / 1000;
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = (t.seconds || 0) * 1000;
    millis += (t.nanos || 0) / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new Date(o);
    }
    else {
        return fromTimestamp(timestamp_1.Timestamp.fromJSON(o));
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
