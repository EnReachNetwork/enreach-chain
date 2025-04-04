"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = exports.Block = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("../../../../google/protobuf/timestamp");
const evidence_1 = require("../../../../tendermint/types/evidence");
const types_1 = require("../../../../tendermint/types/types");
const types_2 = require("../../../../tendermint/version/types");
exports.protobufPackage = "cosmos.base.tendermint.v1beta1";
function createBaseBlock() {
    return { header: undefined, data: undefined, evidence: undefined, lastCommit: undefined };
}
exports.Block = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.header !== undefined) {
            exports.Header.encode(message.header, writer.uint32(10).fork()).ldelim();
        }
        if (message.data !== undefined) {
            types_1.Data.encode(message.data, writer.uint32(18).fork()).ldelim();
        }
        if (message.evidence !== undefined) {
            evidence_1.EvidenceList.encode(message.evidence, writer.uint32(26).fork()).ldelim();
        }
        if (message.lastCommit !== undefined) {
            types_1.Commit.encode(message.lastCommit, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBlock();
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
                    message.data = types_1.Data.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.evidence = evidence_1.EvidenceList.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.lastCommit = types_1.Commit.decode(reader, reader.uint32());
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
            data: isSet(object.data) ? types_1.Data.fromJSON(object.data) : undefined,
            evidence: isSet(object.evidence) ? evidence_1.EvidenceList.fromJSON(object.evidence) : undefined,
            lastCommit: isSet(object.lastCommit) ? types_1.Commit.fromJSON(object.lastCommit) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.header !== undefined) {
            obj.header = exports.Header.toJSON(message.header);
        }
        if (message.data !== undefined) {
            obj.data = types_1.Data.toJSON(message.data);
        }
        if (message.evidence !== undefined) {
            obj.evidence = evidence_1.EvidenceList.toJSON(message.evidence);
        }
        if (message.lastCommit !== undefined) {
            obj.lastCommit = types_1.Commit.toJSON(message.lastCommit);
        }
        return obj;
    },
    create(base) {
        return exports.Block.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseBlock();
        message.header = (object.header !== undefined && object.header !== null)
            ? exports.Header.fromPartial(object.header)
            : undefined;
        message.data = (object.data !== undefined && object.data !== null) ? types_1.Data.fromPartial(object.data) : undefined;
        message.evidence = (object.evidence !== undefined && object.evidence !== null)
            ? evidence_1.EvidenceList.fromPartial(object.evidence)
            : undefined;
        message.lastCommit = (object.lastCommit !== undefined && object.lastCommit !== null)
            ? types_1.Commit.fromPartial(object.lastCommit)
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
        proposerAddress: "",
    };
}
exports.Header = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.version !== undefined) {
            types_2.Consensus.encode(message.version, writer.uint32(10).fork()).ldelim();
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
            types_1.BlockID.encode(message.lastBlockId, writer.uint32(42).fork()).ldelim();
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
        if (message.proposerAddress !== "") {
            writer.uint32(114).string(message.proposerAddress);
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
                    message.version = types_2.Consensus.decode(reader, reader.uint32());
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
                    message.lastBlockId = types_1.BlockID.decode(reader, reader.uint32());
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
                    message.proposerAddress = reader.string();
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
            version: isSet(object.version) ? types_2.Consensus.fromJSON(object.version) : undefined,
            chainId: isSet(object.chainId) ? String(object.chainId) : "",
            height: isSet(object.height) ? Number(object.height) : 0,
            time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
            lastBlockId: isSet(object.lastBlockId) ? types_1.BlockID.fromJSON(object.lastBlockId) : undefined,
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
            proposerAddress: isSet(object.proposerAddress) ? String(object.proposerAddress) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.version !== undefined) {
            obj.version = types_2.Consensus.toJSON(message.version);
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
            obj.lastBlockId = types_1.BlockID.toJSON(message.lastBlockId);
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
        if (message.proposerAddress !== "") {
            obj.proposerAddress = message.proposerAddress;
        }
        return obj;
    },
    create(base) {
        return exports.Header.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseHeader();
        message.version = (object.version !== undefined && object.version !== null)
            ? types_2.Consensus.fromPartial(object.version)
            : undefined;
        message.chainId = object.chainId ?? "";
        message.height = object.height ?? 0;
        message.time = object.time ?? undefined;
        message.lastBlockId = (object.lastBlockId !== undefined && object.lastBlockId !== null)
            ? types_1.BlockID.fromPartial(object.lastBlockId)
            : undefined;
        message.lastCommitHash = object.lastCommitHash ?? new Uint8Array(0);
        message.dataHash = object.dataHash ?? new Uint8Array(0);
        message.validatorsHash = object.validatorsHash ?? new Uint8Array(0);
        message.nextValidatorsHash = object.nextValidatorsHash ?? new Uint8Array(0);
        message.consensusHash = object.consensusHash ?? new Uint8Array(0);
        message.appHash = object.appHash ?? new Uint8Array(0);
        message.lastResultsHash = object.lastResultsHash ?? new Uint8Array(0);
        message.evidenceHash = object.evidenceHash ?? new Uint8Array(0);
        message.proposerAddress = object.proposerAddress ?? "";
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
