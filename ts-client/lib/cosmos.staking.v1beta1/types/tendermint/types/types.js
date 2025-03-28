"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TxProof = exports.BlockMeta = exports.LightBlock = exports.SignedHeader = exports.Proposal = exports.ExtendedCommitSig = exports.ExtendedCommit = exports.CommitSig = exports.Commit = exports.Vote = exports.Data = exports.Header = exports.BlockID = exports.Part = exports.PartSetHeader = exports.SignedMsgType = exports.protobufPackage = void 0;
exports.signedMsgTypeFromJSON = signedMsgTypeFromJSON;
exports.signedMsgTypeToJSON = signedMsgTypeToJSON;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("../../google/protobuf/timestamp");
const proof_1 = require("../crypto/proof");
const types_1 = require("../version/types");
const validator_1 = require("./validator");
exports.protobufPackage = "tendermint.types";
/** SignedMsgType is a type of signed message in the consensus. */
var SignedMsgType;
(function (SignedMsgType) {
    SignedMsgType[SignedMsgType["SIGNED_MSG_TYPE_UNKNOWN"] = 0] = "SIGNED_MSG_TYPE_UNKNOWN";
    /** SIGNED_MSG_TYPE_PREVOTE - Votes */
    SignedMsgType[SignedMsgType["SIGNED_MSG_TYPE_PREVOTE"] = 1] = "SIGNED_MSG_TYPE_PREVOTE";
    SignedMsgType[SignedMsgType["SIGNED_MSG_TYPE_PRECOMMIT"] = 2] = "SIGNED_MSG_TYPE_PRECOMMIT";
    /** SIGNED_MSG_TYPE_PROPOSAL - Proposals */
    SignedMsgType[SignedMsgType["SIGNED_MSG_TYPE_PROPOSAL"] = 32] = "SIGNED_MSG_TYPE_PROPOSAL";
    SignedMsgType[SignedMsgType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SignedMsgType || (exports.SignedMsgType = SignedMsgType = {}));
function signedMsgTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "SIGNED_MSG_TYPE_UNKNOWN":
            return SignedMsgType.SIGNED_MSG_TYPE_UNKNOWN;
        case 1:
        case "SIGNED_MSG_TYPE_PREVOTE":
            return SignedMsgType.SIGNED_MSG_TYPE_PREVOTE;
        case 2:
        case "SIGNED_MSG_TYPE_PRECOMMIT":
            return SignedMsgType.SIGNED_MSG_TYPE_PRECOMMIT;
        case 32:
        case "SIGNED_MSG_TYPE_PROPOSAL":
            return SignedMsgType.SIGNED_MSG_TYPE_PROPOSAL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return SignedMsgType.UNRECOGNIZED;
    }
}
function signedMsgTypeToJSON(object) {
    switch (object) {
        case SignedMsgType.SIGNED_MSG_TYPE_UNKNOWN:
            return "SIGNED_MSG_TYPE_UNKNOWN";
        case SignedMsgType.SIGNED_MSG_TYPE_PREVOTE:
            return "SIGNED_MSG_TYPE_PREVOTE";
        case SignedMsgType.SIGNED_MSG_TYPE_PRECOMMIT:
            return "SIGNED_MSG_TYPE_PRECOMMIT";
        case SignedMsgType.SIGNED_MSG_TYPE_PROPOSAL:
            return "SIGNED_MSG_TYPE_PROPOSAL";
        case SignedMsgType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBasePartSetHeader() {
    return { total: 0, hash: new Uint8Array(0) };
}
exports.PartSetHeader = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.total !== 0) {
            writer.uint32(8).uint32(message.total);
        }
        if (message.hash.length !== 0) {
            writer.uint32(18).bytes(message.hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePartSetHeader();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.total = reader.uint32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.hash = reader.bytes();
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
            total: isSet(object.total) ? Number(object.total) : 0,
            hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array(0),
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.total !== 0) {
            obj.total = Math.round(message.total);
        }
        if (message.hash.length !== 0) {
            obj.hash = base64FromBytes(message.hash);
        }
        return obj;
    },
    create(base) {
        return exports.PartSetHeader.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePartSetHeader();
        message.total = object.total ?? 0;
        message.hash = object.hash ?? new Uint8Array(0);
        return message;
    },
};
function createBasePart() {
    return { index: 0, bytes: new Uint8Array(0), proof: undefined };
}
exports.Part = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.index !== 0) {
            writer.uint32(8).uint32(message.index);
        }
        if (message.bytes.length !== 0) {
            writer.uint32(18).bytes(message.bytes);
        }
        if (message.proof !== undefined) {
            proof_1.Proof.encode(message.proof, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePart();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.index = reader.uint32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.bytes = reader.bytes();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.proof = proof_1.Proof.decode(reader, reader.uint32());
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
            index: isSet(object.index) ? Number(object.index) : 0,
            bytes: isSet(object.bytes) ? bytesFromBase64(object.bytes) : new Uint8Array(0),
            proof: isSet(object.proof) ? proof_1.Proof.fromJSON(object.proof) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.index !== 0) {
            obj.index = Math.round(message.index);
        }
        if (message.bytes.length !== 0) {
            obj.bytes = base64FromBytes(message.bytes);
        }
        if (message.proof !== undefined) {
            obj.proof = proof_1.Proof.toJSON(message.proof);
        }
        return obj;
    },
    create(base) {
        return exports.Part.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePart();
        message.index = object.index ?? 0;
        message.bytes = object.bytes ?? new Uint8Array(0);
        message.proof = (object.proof !== undefined && object.proof !== null) ? proof_1.Proof.fromPartial(object.proof) : undefined;
        return message;
    },
};
function createBaseBlockID() {
    return { hash: new Uint8Array(0), partSetHeader: undefined };
}
exports.BlockID = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.hash.length !== 0) {
            writer.uint32(10).bytes(message.hash);
        }
        if (message.partSetHeader !== undefined) {
            exports.PartSetHeader.encode(message.partSetHeader, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBlockID();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.hash = reader.bytes();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.partSetHeader = exports.PartSetHeader.decode(reader, reader.uint32());
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
            hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array(0),
            partSetHeader: isSet(object.partSetHeader) ? exports.PartSetHeader.fromJSON(object.partSetHeader) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.hash.length !== 0) {
            obj.hash = base64FromBytes(message.hash);
        }
        if (message.partSetHeader !== undefined) {
            obj.partSetHeader = exports.PartSetHeader.toJSON(message.partSetHeader);
        }
        return obj;
    },
    create(base) {
        return exports.BlockID.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseBlockID();
        message.hash = object.hash ?? new Uint8Array(0);
        message.partSetHeader = (object.partSetHeader !== undefined && object.partSetHeader !== null)
            ? exports.PartSetHeader.fromPartial(object.partSetHeader)
            : undefined;
        return message;
    },
};
function createBaseHeader() {
    return {
        version: undefined,
        chainId: "",
        height: 0,
        time: undefined,
        lastBlockId: undefined,
        lastCommitHash: new Uint8Array(0),
        dataHash: new Uint8Array(0),
        validatorsHash: new Uint8Array(0),
        nextValidatorsHash: new Uint8Array(0),
        consensusHash: new Uint8Array(0),
        appHash: new Uint8Array(0),
        lastResultsHash: new Uint8Array(0),
        evidenceHash: new Uint8Array(0),
        proposerAddress: new Uint8Array(0),
    };
}
exports.Header = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.version !== undefined) {
            types_1.Consensus.encode(message.version, writer.uint32(10).fork()).ldelim();
        }
        if (message.chainId !== "") {
            writer.uint32(18).string(message.chainId);
        }
        if (message.height !== 0) {
            writer.uint32(24).int64(message.height);
        }
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.time), writer.uint32(34).fork()).ldelim();
        }
        if (message.lastBlockId !== undefined) {
            exports.BlockID.encode(message.lastBlockId, writer.uint32(42).fork()).ldelim();
        }
        if (message.lastCommitHash.length !== 0) {
            writer.uint32(50).bytes(message.lastCommitHash);
        }
        if (message.dataHash.length !== 0) {
            writer.uint32(58).bytes(message.dataHash);
        }
        if (message.validatorsHash.length !== 0) {
            writer.uint32(66).bytes(message.validatorsHash);
        }
        if (message.nextValidatorsHash.length !== 0) {
            writer.uint32(74).bytes(message.nextValidatorsHash);
        }
        if (message.consensusHash.length !== 0) {
            writer.uint32(82).bytes(message.consensusHash);
        }
        if (message.appHash.length !== 0) {
            writer.uint32(90).bytes(message.appHash);
        }
        if (message.lastResultsHash.length !== 0) {
            writer.uint32(98).bytes(message.lastResultsHash);
        }
        if (message.evidenceHash.length !== 0) {
            writer.uint32(106).bytes(message.evidenceHash);
        }
        if (message.proposerAddress.length !== 0) {
            writer.uint32(114).bytes(message.proposerAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHeader();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.version = types_1.Consensus.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.chainId = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.height = longToNumber(reader.int64());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.time = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.lastBlockId = exports.BlockID.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.lastCommitHash = reader.bytes();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.dataHash = reader.bytes();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.validatorsHash = reader.bytes();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.nextValidatorsHash = reader.bytes();
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.consensusHash = reader.bytes();
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.appHash = reader.bytes();
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.lastResultsHash = reader.bytes();
                    continue;
                case 13:
                    if (tag !== 106) {
                        break;
                    }
                    message.evidenceHash = reader.bytes();
                    continue;
                case 14:
                    if (tag !== 114) {
                        break;
                    }
                    message.proposerAddress = reader.bytes();
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
            version: isSet(object.version) ? types_1.Consensus.fromJSON(object.version) : undefined,
            chainId: isSet(object.chainId) ? String(object.chainId) : "",
            height: isSet(object.height) ? Number(object.height) : 0,
            time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
            lastBlockId: isSet(object.lastBlockId) ? exports.BlockID.fromJSON(object.lastBlockId) : undefined,
            lastCommitHash: isSet(object.lastCommitHash) ? bytesFromBase64(object.lastCommitHash) : new Uint8Array(0),
            dataHash: isSet(object.dataHash) ? bytesFromBase64(object.dataHash) : new Uint8Array(0),
            validatorsHash: isSet(object.validatorsHash) ? bytesFromBase64(object.validatorsHash) : new Uint8Array(0),
            nextValidatorsHash: isSet(object.nextValidatorsHash)
                ? bytesFromBase64(object.nextValidatorsHash)
                : new Uint8Array(0),
            consensusHash: isSet(object.consensusHash) ? bytesFromBase64(object.consensusHash) : new Uint8Array(0),
            appHash: isSet(object.appHash) ? bytesFromBase64(object.appHash) : new Uint8Array(0),
            lastResultsHash: isSet(object.lastResultsHash) ? bytesFromBase64(object.lastResultsHash) : new Uint8Array(0),
            evidenceHash: isSet(object.evidenceHash) ? bytesFromBase64(object.evidenceHash) : new Uint8Array(0),
            proposerAddress: isSet(object.proposerAddress) ? bytesFromBase64(object.proposerAddress) : new Uint8Array(0),
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.version !== undefined) {
            obj.version = types_1.Consensus.toJSON(message.version);
        }
        if (message.chainId !== "") {
            obj.chainId = message.chainId;
        }
        if (message.height !== 0) {
            obj.height = Math.round(message.height);
        }
        if (message.time !== undefined) {
            obj.time = message.time.toISOString();
        }
        if (message.lastBlockId !== undefined) {
            obj.lastBlockId = exports.BlockID.toJSON(message.lastBlockId);
        }
        if (message.lastCommitHash.length !== 0) {
            obj.lastCommitHash = base64FromBytes(message.lastCommitHash);
        }
        if (message.dataHash.length !== 0) {
            obj.dataHash = base64FromBytes(message.dataHash);
        }
        if (message.validatorsHash.length !== 0) {
            obj.validatorsHash = base64FromBytes(message.validatorsHash);
        }
        if (message.nextValidatorsHash.length !== 0) {
            obj.nextValidatorsHash = base64FromBytes(message.nextValidatorsHash);
        }
        if (message.consensusHash.length !== 0) {
            obj.consensusHash = base64FromBytes(message.consensusHash);
        }
        if (message.appHash.length !== 0) {
            obj.appHash = base64FromBytes(message.appHash);
        }
        if (message.lastResultsHash.length !== 0) {
            obj.lastResultsHash = base64FromBytes(message.lastResultsHash);
        }
        if (message.evidenceHash.length !== 0) {
            obj.evidenceHash = base64FromBytes(message.evidenceHash);
        }
        if (message.proposerAddress.length !== 0) {
            obj.proposerAddress = base64FromBytes(message.proposerAddress);
        }
        return obj;
    },
    create(base) {
        return exports.Header.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseHeader();
        message.version = (object.version !== undefined && object.version !== null)
            ? types_1.Consensus.fromPartial(object.version)
            : undefined;
        message.chainId = object.chainId ?? "";
        message.height = object.height ?? 0;
        message.time = object.time ?? undefined;
        message.lastBlockId = (object.lastBlockId !== undefined && object.lastBlockId !== null)
            ? exports.BlockID.fromPartial(object.lastBlockId)
            : undefined;
        message.lastCommitHash = object.lastCommitHash ?? new Uint8Array(0);
        message.dataHash = object.dataHash ?? new Uint8Array(0);
        message.validatorsHash = object.validatorsHash ?? new Uint8Array(0);
        message.nextValidatorsHash = object.nextValidatorsHash ?? new Uint8Array(0);
        message.consensusHash = object.consensusHash ?? new Uint8Array(0);
        message.appHash = object.appHash ?? new Uint8Array(0);
        message.lastResultsHash = object.lastResultsHash ?? new Uint8Array(0);
        message.evidenceHash = object.evidenceHash ?? new Uint8Array(0);
        message.proposerAddress = object.proposerAddress ?? new Uint8Array(0);
        return message;
    },
};
function createBaseData() {
    return { txs: [] };
}
exports.Data = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.txs) {
            writer.uint32(10).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.txs.push(reader.bytes());
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
        return { txs: Array.isArray(object?.txs) ? object.txs.map((e) => bytesFromBase64(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.txs?.length) {
            obj.txs = message.txs.map((e) => base64FromBytes(e));
        }
        return obj;
    },
    create(base) {
        return exports.Data.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseData();
        message.txs = object.txs?.map((e) => e) || [];
        return message;
    },
};
function createBaseVote() {
    return {
        type: 0,
        height: 0,
        round: 0,
        blockId: undefined,
        timestamp: undefined,
        validatorAddress: new Uint8Array(0),
        validatorIndex: 0,
        signature: new Uint8Array(0),
        extension: new Uint8Array(0),
        extensionSignature: new Uint8Array(0),
    };
}
exports.Vote = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.height !== 0) {
            writer.uint32(16).int64(message.height);
        }
        if (message.round !== 0) {
            writer.uint32(24).int32(message.round);
        }
        if (message.blockId !== undefined) {
            exports.BlockID.encode(message.blockId, writer.uint32(34).fork()).ldelim();
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(42).fork()).ldelim();
        }
        if (message.validatorAddress.length !== 0) {
            writer.uint32(50).bytes(message.validatorAddress);
        }
        if (message.validatorIndex !== 0) {
            writer.uint32(56).int32(message.validatorIndex);
        }
        if (message.signature.length !== 0) {
            writer.uint32(66).bytes(message.signature);
        }
        if (message.extension.length !== 0) {
            writer.uint32(74).bytes(message.extension);
        }
        if (message.extensionSignature.length !== 0) {
            writer.uint32(82).bytes(message.extensionSignature);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVote();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.type = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.height = longToNumber(reader.int64());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.round = reader.int32();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.blockId = exports.BlockID.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.timestamp = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.validatorAddress = reader.bytes();
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.validatorIndex = reader.int32();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.signature = reader.bytes();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.extension = reader.bytes();
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.extensionSignature = reader.bytes();
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
            type: isSet(object.type) ? signedMsgTypeFromJSON(object.type) : 0,
            height: isSet(object.height) ? Number(object.height) : 0,
            round: isSet(object.round) ? Number(object.round) : 0,
            blockId: isSet(object.blockId) ? exports.BlockID.fromJSON(object.blockId) : undefined,
            timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
            validatorAddress: isSet(object.validatorAddress) ? bytesFromBase64(object.validatorAddress) : new Uint8Array(0),
            validatorIndex: isSet(object.validatorIndex) ? Number(object.validatorIndex) : 0,
            signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array(0),
            extension: isSet(object.extension) ? bytesFromBase64(object.extension) : new Uint8Array(0),
            extensionSignature: isSet(object.extensionSignature)
                ? bytesFromBase64(object.extensionSignature)
                : new Uint8Array(0),
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.type !== 0) {
            obj.type = signedMsgTypeToJSON(message.type);
        }
        if (message.height !== 0) {
            obj.height = Math.round(message.height);
        }
        if (message.round !== 0) {
            obj.round = Math.round(message.round);
        }
        if (message.blockId !== undefined) {
            obj.blockId = exports.BlockID.toJSON(message.blockId);
        }
        if (message.timestamp !== undefined) {
            obj.timestamp = message.timestamp.toISOString();
        }
        if (message.validatorAddress.length !== 0) {
            obj.validatorAddress = base64FromBytes(message.validatorAddress);
        }
        if (message.validatorIndex !== 0) {
            obj.validatorIndex = Math.round(message.validatorIndex);
        }
        if (message.signature.length !== 0) {
            obj.signature = base64FromBytes(message.signature);
        }
        if (message.extension.length !== 0) {
            obj.extension = base64FromBytes(message.extension);
        }
        if (message.extensionSignature.length !== 0) {
            obj.extensionSignature = base64FromBytes(message.extensionSignature);
        }
        return obj;
    },
    create(base) {
        return exports.Vote.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseVote();
        message.type = object.type ?? 0;
        message.height = object.height ?? 0;
        message.round = object.round ?? 0;
        message.blockId = (object.blockId !== undefined && object.blockId !== null)
            ? exports.BlockID.fromPartial(object.blockId)
            : undefined;
        message.timestamp = object.timestamp ?? undefined;
        message.validatorAddress = object.validatorAddress ?? new Uint8Array(0);
        message.validatorIndex = object.validatorIndex ?? 0;
        message.signature = object.signature ?? new Uint8Array(0);
        message.extension = object.extension ?? new Uint8Array(0);
        message.extensionSignature = object.extensionSignature ?? new Uint8Array(0);
        return message;
    },
};
function createBaseCommit() {
    return { height: 0, round: 0, blockId: undefined, signatures: [] };
}
exports.Commit = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.height !== 0) {
            writer.uint32(8).int64(message.height);
        }
        if (message.round !== 0) {
            writer.uint32(16).int32(message.round);
        }
        if (message.blockId !== undefined) {
            exports.BlockID.encode(message.blockId, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.signatures) {
            exports.CommitSig.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.height = longToNumber(reader.int64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.round = reader.int32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.blockId = exports.BlockID.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.signatures.push(exports.CommitSig.decode(reader, reader.uint32()));
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
            height: isSet(object.height) ? Number(object.height) : 0,
            round: isSet(object.round) ? Number(object.round) : 0,
            blockId: isSet(object.blockId) ? exports.BlockID.fromJSON(object.blockId) : undefined,
            signatures: Array.isArray(object?.signatures) ? object.signatures.map((e) => exports.CommitSig.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.height !== 0) {
            obj.height = Math.round(message.height);
        }
        if (message.round !== 0) {
            obj.round = Math.round(message.round);
        }
        if (message.blockId !== undefined) {
            obj.blockId = exports.BlockID.toJSON(message.blockId);
        }
        if (message.signatures?.length) {
            obj.signatures = message.signatures.map((e) => exports.CommitSig.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.Commit.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCommit();
        message.height = object.height ?? 0;
        message.round = object.round ?? 0;
        message.blockId = (object.blockId !== undefined && object.blockId !== null)
            ? exports.BlockID.fromPartial(object.blockId)
            : undefined;
        message.signatures = object.signatures?.map((e) => exports.CommitSig.fromPartial(e)) || [];
        return message;
    },
};
function createBaseCommitSig() {
    return { blockIdFlag: 0, validatorAddress: new Uint8Array(0), timestamp: undefined, signature: new Uint8Array(0) };
}
exports.CommitSig = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.blockIdFlag !== 0) {
            writer.uint32(8).int32(message.blockIdFlag);
        }
        if (message.validatorAddress.length !== 0) {
            writer.uint32(18).bytes(message.validatorAddress);
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(26).fork()).ldelim();
        }
        if (message.signature.length !== 0) {
            writer.uint32(34).bytes(message.signature);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommitSig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.blockIdFlag = reader.int32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.validatorAddress = reader.bytes();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.timestamp = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.signature = reader.bytes();
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
            blockIdFlag: isSet(object.blockIdFlag) ? (0, validator_1.blockIDFlagFromJSON)(object.blockIdFlag) : 0,
            validatorAddress: isSet(object.validatorAddress) ? bytesFromBase64(object.validatorAddress) : new Uint8Array(0),
            timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
            signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array(0),
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.blockIdFlag !== 0) {
            obj.blockIdFlag = (0, validator_1.blockIDFlagToJSON)(message.blockIdFlag);
        }
        if (message.validatorAddress.length !== 0) {
            obj.validatorAddress = base64FromBytes(message.validatorAddress);
        }
        if (message.timestamp !== undefined) {
            obj.timestamp = message.timestamp.toISOString();
        }
        if (message.signature.length !== 0) {
            obj.signature = base64FromBytes(message.signature);
        }
        return obj;
    },
    create(base) {
        return exports.CommitSig.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCommitSig();
        message.blockIdFlag = object.blockIdFlag ?? 0;
        message.validatorAddress = object.validatorAddress ?? new Uint8Array(0);
        message.timestamp = object.timestamp ?? undefined;
        message.signature = object.signature ?? new Uint8Array(0);
        return message;
    },
};
function createBaseExtendedCommit() {
    return { height: 0, round: 0, blockId: undefined, extendedSignatures: [] };
}
exports.ExtendedCommit = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.height !== 0) {
            writer.uint32(8).int64(message.height);
        }
        if (message.round !== 0) {
            writer.uint32(16).int32(message.round);
        }
        if (message.blockId !== undefined) {
            exports.BlockID.encode(message.blockId, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.extendedSignatures) {
            exports.ExtendedCommitSig.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExtendedCommit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.height = longToNumber(reader.int64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.round = reader.int32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.blockId = exports.BlockID.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.extendedSignatures.push(exports.ExtendedCommitSig.decode(reader, reader.uint32()));
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
            height: isSet(object.height) ? Number(object.height) : 0,
            round: isSet(object.round) ? Number(object.round) : 0,
            blockId: isSet(object.blockId) ? exports.BlockID.fromJSON(object.blockId) : undefined,
            extendedSignatures: Array.isArray(object?.extendedSignatures)
                ? object.extendedSignatures.map((e) => exports.ExtendedCommitSig.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.height !== 0) {
            obj.height = Math.round(message.height);
        }
        if (message.round !== 0) {
            obj.round = Math.round(message.round);
        }
        if (message.blockId !== undefined) {
            obj.blockId = exports.BlockID.toJSON(message.blockId);
        }
        if (message.extendedSignatures?.length) {
            obj.extendedSignatures = message.extendedSignatures.map((e) => exports.ExtendedCommitSig.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.ExtendedCommit.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseExtendedCommit();
        message.height = object.height ?? 0;
        message.round = object.round ?? 0;
        message.blockId = (object.blockId !== undefined && object.blockId !== null)
            ? exports.BlockID.fromPartial(object.blockId)
            : undefined;
        message.extendedSignatures = object.extendedSignatures?.map((e) => exports.ExtendedCommitSig.fromPartial(e)) || [];
        return message;
    },
};
function createBaseExtendedCommitSig() {
    return {
        blockIdFlag: 0,
        validatorAddress: new Uint8Array(0),
        timestamp: undefined,
        signature: new Uint8Array(0),
        extension: new Uint8Array(0),
        extensionSignature: new Uint8Array(0),
    };
}
exports.ExtendedCommitSig = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.blockIdFlag !== 0) {
            writer.uint32(8).int32(message.blockIdFlag);
        }
        if (message.validatorAddress.length !== 0) {
            writer.uint32(18).bytes(message.validatorAddress);
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(26).fork()).ldelim();
        }
        if (message.signature.length !== 0) {
            writer.uint32(34).bytes(message.signature);
        }
        if (message.extension.length !== 0) {
            writer.uint32(42).bytes(message.extension);
        }
        if (message.extensionSignature.length !== 0) {
            writer.uint32(50).bytes(message.extensionSignature);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExtendedCommitSig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.blockIdFlag = reader.int32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.validatorAddress = reader.bytes();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.timestamp = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.signature = reader.bytes();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.extension = reader.bytes();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.extensionSignature = reader.bytes();
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
            blockIdFlag: isSet(object.blockIdFlag) ? (0, validator_1.blockIDFlagFromJSON)(object.blockIdFlag) : 0,
            validatorAddress: isSet(object.validatorAddress) ? bytesFromBase64(object.validatorAddress) : new Uint8Array(0),
            timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
            signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array(0),
            extension: isSet(object.extension) ? bytesFromBase64(object.extension) : new Uint8Array(0),
            extensionSignature: isSet(object.extensionSignature)
                ? bytesFromBase64(object.extensionSignature)
                : new Uint8Array(0),
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.blockIdFlag !== 0) {
            obj.blockIdFlag = (0, validator_1.blockIDFlagToJSON)(message.blockIdFlag);
        }
        if (message.validatorAddress.length !== 0) {
            obj.validatorAddress = base64FromBytes(message.validatorAddress);
        }
        if (message.timestamp !== undefined) {
            obj.timestamp = message.timestamp.toISOString();
        }
        if (message.signature.length !== 0) {
            obj.signature = base64FromBytes(message.signature);
        }
        if (message.extension.length !== 0) {
            obj.extension = base64FromBytes(message.extension);
        }
        if (message.extensionSignature.length !== 0) {
            obj.extensionSignature = base64FromBytes(message.extensionSignature);
        }
        return obj;
    },
    create(base) {
        return exports.ExtendedCommitSig.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseExtendedCommitSig();
        message.blockIdFlag = object.blockIdFlag ?? 0;
        message.validatorAddress = object.validatorAddress ?? new Uint8Array(0);
        message.timestamp = object.timestamp ?? undefined;
        message.signature = object.signature ?? new Uint8Array(0);
        message.extension = object.extension ?? new Uint8Array(0);
        message.extensionSignature = object.extensionSignature ?? new Uint8Array(0);
        return message;
    },
};
function createBaseProposal() {
    return {
        type: 0,
        height: 0,
        round: 0,
        polRound: 0,
        blockId: undefined,
        timestamp: undefined,
        signature: new Uint8Array(0),
    };
}
exports.Proposal = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.height !== 0) {
            writer.uint32(16).int64(message.height);
        }
        if (message.round !== 0) {
            writer.uint32(24).int32(message.round);
        }
        if (message.polRound !== 0) {
            writer.uint32(32).int32(message.polRound);
        }
        if (message.blockId !== undefined) {
            exports.BlockID.encode(message.blockId, writer.uint32(42).fork()).ldelim();
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(50).fork()).ldelim();
        }
        if (message.signature.length !== 0) {
            writer.uint32(58).bytes(message.signature);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.type = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.height = longToNumber(reader.int64());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.round = reader.int32();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.polRound = reader.int32();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.blockId = exports.BlockID.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.timestamp = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.signature = reader.bytes();
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
            type: isSet(object.type) ? signedMsgTypeFromJSON(object.type) : 0,
            height: isSet(object.height) ? Number(object.height) : 0,
            round: isSet(object.round) ? Number(object.round) : 0,
            polRound: isSet(object.polRound) ? Number(object.polRound) : 0,
            blockId: isSet(object.blockId) ? exports.BlockID.fromJSON(object.blockId) : undefined,
            timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
            signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array(0),
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.type !== 0) {
            obj.type = signedMsgTypeToJSON(message.type);
        }
        if (message.height !== 0) {
            obj.height = Math.round(message.height);
        }
        if (message.round !== 0) {
            obj.round = Math.round(message.round);
        }
        if (message.polRound !== 0) {
            obj.polRound = Math.round(message.polRound);
        }
        if (message.blockId !== undefined) {
            obj.blockId = exports.BlockID.toJSON(message.blockId);
        }
        if (message.timestamp !== undefined) {
            obj.timestamp = message.timestamp.toISOString();
        }
        if (message.signature.length !== 0) {
            obj.signature = base64FromBytes(message.signature);
        }
        return obj;
    },
    create(base) {
        return exports.Proposal.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseProposal();
        message.type = object.type ?? 0;
        message.height = object.height ?? 0;
        message.round = object.round ?? 0;
        message.polRound = object.polRound ?? 0;
        message.blockId = (object.blockId !== undefined && object.blockId !== null)
            ? exports.BlockID.fromPartial(object.blockId)
            : undefined;
        message.timestamp = object.timestamp ?? undefined;
        message.signature = object.signature ?? new Uint8Array(0);
        return message;
    },
};
function createBaseSignedHeader() {
    return { header: undefined, commit: undefined };
}
exports.SignedHeader = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.header !== undefined) {
            exports.Header.encode(message.header, writer.uint32(10).fork()).ldelim();
        }
        if (message.commit !== undefined) {
            exports.Commit.encode(message.commit, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignedHeader();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.header = exports.Header.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.commit = exports.Commit.decode(reader, reader.uint32());
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
            header: isSet(object.header) ? exports.Header.fromJSON(object.header) : undefined,
            commit: isSet(object.commit) ? exports.Commit.fromJSON(object.commit) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.header !== undefined) {
            obj.header = exports.Header.toJSON(message.header);
        }
        if (message.commit !== undefined) {
            obj.commit = exports.Commit.toJSON(message.commit);
        }
        return obj;
    },
    create(base) {
        return exports.SignedHeader.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSignedHeader();
        message.header = (object.header !== undefined && object.header !== null)
            ? exports.Header.fromPartial(object.header)
            : undefined;
        message.commit = (object.commit !== undefined && object.commit !== null)
            ? exports.Commit.fromPartial(object.commit)
            : undefined;
        return message;
    },
};
function createBaseLightBlock() {
    return { signedHeader: undefined, validatorSet: undefined };
}
exports.LightBlock = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.signedHeader !== undefined) {
            exports.SignedHeader.encode(message.signedHeader, writer.uint32(10).fork()).ldelim();
        }
        if (message.validatorSet !== undefined) {
            validator_1.ValidatorSet.encode(message.validatorSet, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLightBlock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.signedHeader = exports.SignedHeader.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.validatorSet = validator_1.ValidatorSet.decode(reader, reader.uint32());
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
            signedHeader: isSet(object.signedHeader) ? exports.SignedHeader.fromJSON(object.signedHeader) : undefined,
            validatorSet: isSet(object.validatorSet) ? validator_1.ValidatorSet.fromJSON(object.validatorSet) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.signedHeader !== undefined) {
            obj.signedHeader = exports.SignedHeader.toJSON(message.signedHeader);
        }
        if (message.validatorSet !== undefined) {
            obj.validatorSet = validator_1.ValidatorSet.toJSON(message.validatorSet);
        }
        return obj;
    },
    create(base) {
        return exports.LightBlock.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseLightBlock();
        message.signedHeader = (object.signedHeader !== undefined && object.signedHeader !== null)
            ? exports.SignedHeader.fromPartial(object.signedHeader)
            : undefined;
        message.validatorSet = (object.validatorSet !== undefined && object.validatorSet !== null)
            ? validator_1.ValidatorSet.fromPartial(object.validatorSet)
            : undefined;
        return message;
    },
};
function createBaseBlockMeta() {
    return { blockId: undefined, blockSize: 0, header: undefined, numTxs: 0 };
}
exports.BlockMeta = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.blockId !== undefined) {
            exports.BlockID.encode(message.blockId, writer.uint32(10).fork()).ldelim();
        }
        if (message.blockSize !== 0) {
            writer.uint32(16).int64(message.blockSize);
        }
        if (message.header !== undefined) {
            exports.Header.encode(message.header, writer.uint32(26).fork()).ldelim();
        }
        if (message.numTxs !== 0) {
            writer.uint32(32).int64(message.numTxs);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBlockMeta();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.blockId = exports.BlockID.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.blockSize = longToNumber(reader.int64());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.header = exports.Header.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.numTxs = longToNumber(reader.int64());
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
            blockId: isSet(object.blockId) ? exports.BlockID.fromJSON(object.blockId) : undefined,
            blockSize: isSet(object.blockSize) ? Number(object.blockSize) : 0,
            header: isSet(object.header) ? exports.Header.fromJSON(object.header) : undefined,
            numTxs: isSet(object.numTxs) ? Number(object.numTxs) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.blockId !== undefined) {
            obj.blockId = exports.BlockID.toJSON(message.blockId);
        }
        if (message.blockSize !== 0) {
            obj.blockSize = Math.round(message.blockSize);
        }
        if (message.header !== undefined) {
            obj.header = exports.Header.toJSON(message.header);
        }
        if (message.numTxs !== 0) {
            obj.numTxs = Math.round(message.numTxs);
        }
        return obj;
    },
    create(base) {
        return exports.BlockMeta.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseBlockMeta();
        message.blockId = (object.blockId !== undefined && object.blockId !== null)
            ? exports.BlockID.fromPartial(object.blockId)
            : undefined;
        message.blockSize = object.blockSize ?? 0;
        message.header = (object.header !== undefined && object.header !== null)
            ? exports.Header.fromPartial(object.header)
            : undefined;
        message.numTxs = object.numTxs ?? 0;
        return message;
    },
};
function createBaseTxProof() {
    return { rootHash: new Uint8Array(0), data: new Uint8Array(0), proof: undefined };
}
exports.TxProof = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.rootHash.length !== 0) {
            writer.uint32(10).bytes(message.rootHash);
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        if (message.proof !== undefined) {
            proof_1.Proof.encode(message.proof, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxProof();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.rootHash = reader.bytes();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.data = reader.bytes();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.proof = proof_1.Proof.decode(reader, reader.uint32());
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
            rootHash: isSet(object.rootHash) ? bytesFromBase64(object.rootHash) : new Uint8Array(0),
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0),
            proof: isSet(object.proof) ? proof_1.Proof.fromJSON(object.proof) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.rootHash.length !== 0) {
            obj.rootHash = base64FromBytes(message.rootHash);
        }
        if (message.data.length !== 0) {
            obj.data = base64FromBytes(message.data);
        }
        if (message.proof !== undefined) {
            obj.proof = proof_1.Proof.toJSON(message.proof);
        }
        return obj;
    },
    create(base) {
        return exports.TxProof.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseTxProof();
        message.rootHash = object.rootHash ?? new Uint8Array(0);
        message.data = object.data ?? new Uint8Array(0);
        message.proof = (object.proof !== undefined && object.proof !== null) ? proof_1.Proof.fromPartial(object.proof) : undefined;
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
