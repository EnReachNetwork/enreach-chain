"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompressedNonExistenceProof = exports.CompressedExistenceProof = exports.CompressedBatchEntry = exports.CompressedBatchProof = exports.BatchEntry = exports.BatchProof = exports.InnerSpec = exports.ProofSpec = exports.InnerOp = exports.LeafOp = exports.CommitmentProof = exports.NonExistenceProof = exports.ExistenceProof = exports.LengthOp = exports.HashOp = exports.protobufPackage = void 0;
exports.hashOpFromJSON = hashOpFromJSON;
exports.hashOpToJSON = hashOpToJSON;
exports.lengthOpFromJSON = lengthOpFromJSON;
exports.lengthOpToJSON = lengthOpToJSON;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "cosmos.ics23.v1";
var HashOp;
(function (HashOp) {
    /** NO_HASH - NO_HASH is the default if no data passed. Note this is an illegal argument some places. */
    HashOp[HashOp["NO_HASH"] = 0] = "NO_HASH";
    HashOp[HashOp["SHA256"] = 1] = "SHA256";
    HashOp[HashOp["SHA512"] = 2] = "SHA512";
    HashOp[HashOp["KECCAK"] = 3] = "KECCAK";
    HashOp[HashOp["RIPEMD160"] = 4] = "RIPEMD160";
    /** BITCOIN - ripemd160(sha256(x)) */
    HashOp[HashOp["BITCOIN"] = 5] = "BITCOIN";
    HashOp[HashOp["SHA512_256"] = 6] = "SHA512_256";
    HashOp[HashOp["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(HashOp || (exports.HashOp = HashOp = {}));
function hashOpFromJSON(object) {
    switch (object) {
        case 0:
        case "NO_HASH":
            return HashOp.NO_HASH;
        case 1:
        case "SHA256":
            return HashOp.SHA256;
        case 2:
        case "SHA512":
            return HashOp.SHA512;
        case 3:
        case "KECCAK":
            return HashOp.KECCAK;
        case 4:
        case "RIPEMD160":
            return HashOp.RIPEMD160;
        case 5:
        case "BITCOIN":
            return HashOp.BITCOIN;
        case 6:
        case "SHA512_256":
            return HashOp.SHA512_256;
        case -1:
        case "UNRECOGNIZED":
        default:
            return HashOp.UNRECOGNIZED;
    }
}
function hashOpToJSON(object) {
    switch (object) {
        case HashOp.NO_HASH:
            return "NO_HASH";
        case HashOp.SHA256:
            return "SHA256";
        case HashOp.SHA512:
            return "SHA512";
        case HashOp.KECCAK:
            return "KECCAK";
        case HashOp.RIPEMD160:
            return "RIPEMD160";
        case HashOp.BITCOIN:
            return "BITCOIN";
        case HashOp.SHA512_256:
            return "SHA512_256";
        case HashOp.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
/**
 * LengthOp defines how to process the key and value of the LeafOp
 * to include length information. After encoding the length with the given
 * algorithm, the length will be prepended to the key and value bytes.
 * (Each one with it's own encoded length)
 */
var LengthOp;
(function (LengthOp) {
    /** NO_PREFIX - NO_PREFIX don't include any length info */
    LengthOp[LengthOp["NO_PREFIX"] = 0] = "NO_PREFIX";
    /** VAR_PROTO - VAR_PROTO uses protobuf (and go-amino) varint encoding of the length */
    LengthOp[LengthOp["VAR_PROTO"] = 1] = "VAR_PROTO";
    /** VAR_RLP - VAR_RLP uses rlp int encoding of the length */
    LengthOp[LengthOp["VAR_RLP"] = 2] = "VAR_RLP";
    /** FIXED32_BIG - FIXED32_BIG uses big-endian encoding of the length as a 32 bit integer */
    LengthOp[LengthOp["FIXED32_BIG"] = 3] = "FIXED32_BIG";
    /** FIXED32_LITTLE - FIXED32_LITTLE uses little-endian encoding of the length as a 32 bit integer */
    LengthOp[LengthOp["FIXED32_LITTLE"] = 4] = "FIXED32_LITTLE";
    /** FIXED64_BIG - FIXED64_BIG uses big-endian encoding of the length as a 64 bit integer */
    LengthOp[LengthOp["FIXED64_BIG"] = 5] = "FIXED64_BIG";
    /** FIXED64_LITTLE - FIXED64_LITTLE uses little-endian encoding of the length as a 64 bit integer */
    LengthOp[LengthOp["FIXED64_LITTLE"] = 6] = "FIXED64_LITTLE";
    /** REQUIRE_32_BYTES - REQUIRE_32_BYTES is like NONE, but will fail if the input is not exactly 32 bytes (sha256 output) */
    LengthOp[LengthOp["REQUIRE_32_BYTES"] = 7] = "REQUIRE_32_BYTES";
    /** REQUIRE_64_BYTES - REQUIRE_64_BYTES is like NONE, but will fail if the input is not exactly 64 bytes (sha512 output) */
    LengthOp[LengthOp["REQUIRE_64_BYTES"] = 8] = "REQUIRE_64_BYTES";
    LengthOp[LengthOp["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(LengthOp || (exports.LengthOp = LengthOp = {}));
function lengthOpFromJSON(object) {
    switch (object) {
        case 0:
        case "NO_PREFIX":
            return LengthOp.NO_PREFIX;
        case 1:
        case "VAR_PROTO":
            return LengthOp.VAR_PROTO;
        case 2:
        case "VAR_RLP":
            return LengthOp.VAR_RLP;
        case 3:
        case "FIXED32_BIG":
            return LengthOp.FIXED32_BIG;
        case 4:
        case "FIXED32_LITTLE":
            return LengthOp.FIXED32_LITTLE;
        case 5:
        case "FIXED64_BIG":
            return LengthOp.FIXED64_BIG;
        case 6:
        case "FIXED64_LITTLE":
            return LengthOp.FIXED64_LITTLE;
        case 7:
        case "REQUIRE_32_BYTES":
            return LengthOp.REQUIRE_32_BYTES;
        case 8:
        case "REQUIRE_64_BYTES":
            return LengthOp.REQUIRE_64_BYTES;
        case -1:
        case "UNRECOGNIZED":
        default:
            return LengthOp.UNRECOGNIZED;
    }
}
function lengthOpToJSON(object) {
    switch (object) {
        case LengthOp.NO_PREFIX:
            return "NO_PREFIX";
        case LengthOp.VAR_PROTO:
            return "VAR_PROTO";
        case LengthOp.VAR_RLP:
            return "VAR_RLP";
        case LengthOp.FIXED32_BIG:
            return "FIXED32_BIG";
        case LengthOp.FIXED32_LITTLE:
            return "FIXED32_LITTLE";
        case LengthOp.FIXED64_BIG:
            return "FIXED64_BIG";
        case LengthOp.FIXED64_LITTLE:
            return "FIXED64_LITTLE";
        case LengthOp.REQUIRE_32_BYTES:
            return "REQUIRE_32_BYTES";
        case LengthOp.REQUIRE_64_BYTES:
            return "REQUIRE_64_BYTES";
        case LengthOp.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseExistenceProof() {
    return { key: new Uint8Array(0), value: new Uint8Array(0), leaf: undefined, path: [] };
}
exports.ExistenceProof = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        if (message.leaf !== undefined) {
            exports.LeafOp.encode(message.leaf, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.path) {
            exports.InnerOp.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExistenceProof();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.key = reader.bytes();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.value = reader.bytes();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.leaf = exports.LeafOp.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.path.push(exports.InnerOp.decode(reader, reader.uint32()));
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
            key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(0),
            value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(0),
            leaf: isSet(object.leaf) ? exports.LeafOp.fromJSON(object.leaf) : undefined,
            path: Array.isArray(object?.path) ? object.path.map((e) => exports.InnerOp.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.key.length !== 0) {
            obj.key = base64FromBytes(message.key);
        }
        if (message.value.length !== 0) {
            obj.value = base64FromBytes(message.value);
        }
        if (message.leaf !== undefined) {
            obj.leaf = exports.LeafOp.toJSON(message.leaf);
        }
        if (message.path?.length) {
            obj.path = message.path.map((e) => exports.InnerOp.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.ExistenceProof.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseExistenceProof();
        message.key = object.key ?? new Uint8Array(0);
        message.value = object.value ?? new Uint8Array(0);
        message.leaf = (object.leaf !== undefined && object.leaf !== null) ? exports.LeafOp.fromPartial(object.leaf) : undefined;
        message.path = object.path?.map((e) => exports.InnerOp.fromPartial(e)) || [];
        return message;
    },
};
function createBaseNonExistenceProof() {
    return { key: new Uint8Array(0), left: undefined, right: undefined };
}
exports.NonExistenceProof = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.left !== undefined) {
            exports.ExistenceProof.encode(message.left, writer.uint32(18).fork()).ldelim();
        }
        if (message.right !== undefined) {
            exports.ExistenceProof.encode(message.right, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNonExistenceProof();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.key = reader.bytes();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.left = exports.ExistenceProof.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.right = exports.ExistenceProof.decode(reader, reader.uint32());
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
            key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(0),
            left: isSet(object.left) ? exports.ExistenceProof.fromJSON(object.left) : undefined,
            right: isSet(object.right) ? exports.ExistenceProof.fromJSON(object.right) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.key.length !== 0) {
            obj.key = base64FromBytes(message.key);
        }
        if (message.left !== undefined) {
            obj.left = exports.ExistenceProof.toJSON(message.left);
        }
        if (message.right !== undefined) {
            obj.right = exports.ExistenceProof.toJSON(message.right);
        }
        return obj;
    },
    create(base) {
        return exports.NonExistenceProof.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseNonExistenceProof();
        message.key = object.key ?? new Uint8Array(0);
        message.left = (object.left !== undefined && object.left !== null)
            ? exports.ExistenceProof.fromPartial(object.left)
            : undefined;
        message.right = (object.right !== undefined && object.right !== null)
            ? exports.ExistenceProof.fromPartial(object.right)
            : undefined;
        return message;
    },
};
function createBaseCommitmentProof() {
    return { exist: undefined, nonexist: undefined, batch: undefined, compressed: undefined };
}
exports.CommitmentProof = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.exist !== undefined) {
            exports.ExistenceProof.encode(message.exist, writer.uint32(10).fork()).ldelim();
        }
        if (message.nonexist !== undefined) {
            exports.NonExistenceProof.encode(message.nonexist, writer.uint32(18).fork()).ldelim();
        }
        if (message.batch !== undefined) {
            exports.BatchProof.encode(message.batch, writer.uint32(26).fork()).ldelim();
        }
        if (message.compressed !== undefined) {
            exports.CompressedBatchProof.encode(message.compressed, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommitmentProof();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.exist = exports.ExistenceProof.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.nonexist = exports.NonExistenceProof.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.batch = exports.BatchProof.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.compressed = exports.CompressedBatchProof.decode(reader, reader.uint32());
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
            exist: isSet(object.exist) ? exports.ExistenceProof.fromJSON(object.exist) : undefined,
            nonexist: isSet(object.nonexist) ? exports.NonExistenceProof.fromJSON(object.nonexist) : undefined,
            batch: isSet(object.batch) ? exports.BatchProof.fromJSON(object.batch) : undefined,
            compressed: isSet(object.compressed) ? exports.CompressedBatchProof.fromJSON(object.compressed) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.exist !== undefined) {
            obj.exist = exports.ExistenceProof.toJSON(message.exist);
        }
        if (message.nonexist !== undefined) {
            obj.nonexist = exports.NonExistenceProof.toJSON(message.nonexist);
        }
        if (message.batch !== undefined) {
            obj.batch = exports.BatchProof.toJSON(message.batch);
        }
        if (message.compressed !== undefined) {
            obj.compressed = exports.CompressedBatchProof.toJSON(message.compressed);
        }
        return obj;
    },
    create(base) {
        return exports.CommitmentProof.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCommitmentProof();
        message.exist = (object.exist !== undefined && object.exist !== null)
            ? exports.ExistenceProof.fromPartial(object.exist)
            : undefined;
        message.nonexist = (object.nonexist !== undefined && object.nonexist !== null)
            ? exports.NonExistenceProof.fromPartial(object.nonexist)
            : undefined;
        message.batch = (object.batch !== undefined && object.batch !== null)
            ? exports.BatchProof.fromPartial(object.batch)
            : undefined;
        message.compressed = (object.compressed !== undefined && object.compressed !== null)
            ? exports.CompressedBatchProof.fromPartial(object.compressed)
            : undefined;
        return message;
    },
};
function createBaseLeafOp() {
    return { hash: 0, prehashKey: 0, prehashValue: 0, length: 0, prefix: new Uint8Array(0) };
}
exports.LeafOp = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.hash !== 0) {
            writer.uint32(8).int32(message.hash);
        }
        if (message.prehashKey !== 0) {
            writer.uint32(16).int32(message.prehashKey);
        }
        if (message.prehashValue !== 0) {
            writer.uint32(24).int32(message.prehashValue);
        }
        if (message.length !== 0) {
            writer.uint32(32).int32(message.length);
        }
        if (message.prefix.length !== 0) {
            writer.uint32(42).bytes(message.prefix);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLeafOp();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.hash = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.prehashKey = reader.int32();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.prehashValue = reader.int32();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.length = reader.int32();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.prefix = reader.bytes();
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
            hash: isSet(object.hash) ? hashOpFromJSON(object.hash) : 0,
            prehashKey: isSet(object.prehashKey) ? hashOpFromJSON(object.prehashKey) : 0,
            prehashValue: isSet(object.prehashValue) ? hashOpFromJSON(object.prehashValue) : 0,
            length: isSet(object.length) ? lengthOpFromJSON(object.length) : 0,
            prefix: isSet(object.prefix) ? bytesFromBase64(object.prefix) : new Uint8Array(0),
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.hash !== 0) {
            obj.hash = hashOpToJSON(message.hash);
        }
        if (message.prehashKey !== 0) {
            obj.prehashKey = hashOpToJSON(message.prehashKey);
        }
        if (message.prehashValue !== 0) {
            obj.prehashValue = hashOpToJSON(message.prehashValue);
        }
        if (message.length !== 0) {
            obj.length = lengthOpToJSON(message.length);
        }
        if (message.prefix.length !== 0) {
            obj.prefix = base64FromBytes(message.prefix);
        }
        return obj;
    },
    create(base) {
        return exports.LeafOp.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseLeafOp();
        message.hash = object.hash ?? 0;
        message.prehashKey = object.prehashKey ?? 0;
        message.prehashValue = object.prehashValue ?? 0;
        message.length = object.length ?? 0;
        message.prefix = object.prefix ?? new Uint8Array(0);
        return message;
    },
};
function createBaseInnerOp() {
    return { hash: 0, prefix: new Uint8Array(0), suffix: new Uint8Array(0) };
}
exports.InnerOp = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.hash !== 0) {
            writer.uint32(8).int32(message.hash);
        }
        if (message.prefix.length !== 0) {
            writer.uint32(18).bytes(message.prefix);
        }
        if (message.suffix.length !== 0) {
            writer.uint32(26).bytes(message.suffix);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInnerOp();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.hash = reader.int32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.prefix = reader.bytes();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.suffix = reader.bytes();
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
            hash: isSet(object.hash) ? hashOpFromJSON(object.hash) : 0,
            prefix: isSet(object.prefix) ? bytesFromBase64(object.prefix) : new Uint8Array(0),
            suffix: isSet(object.suffix) ? bytesFromBase64(object.suffix) : new Uint8Array(0),
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.hash !== 0) {
            obj.hash = hashOpToJSON(message.hash);
        }
        if (message.prefix.length !== 0) {
            obj.prefix = base64FromBytes(message.prefix);
        }
        if (message.suffix.length !== 0) {
            obj.suffix = base64FromBytes(message.suffix);
        }
        return obj;
    },
    create(base) {
        return exports.InnerOp.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseInnerOp();
        message.hash = object.hash ?? 0;
        message.prefix = object.prefix ?? new Uint8Array(0);
        message.suffix = object.suffix ?? new Uint8Array(0);
        return message;
    },
};
function createBaseProofSpec() {
    return { leafSpec: undefined, innerSpec: undefined, maxDepth: 0, minDepth: 0 };
}
exports.ProofSpec = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.leafSpec !== undefined) {
            exports.LeafOp.encode(message.leafSpec, writer.uint32(10).fork()).ldelim();
        }
        if (message.innerSpec !== undefined) {
            exports.InnerSpec.encode(message.innerSpec, writer.uint32(18).fork()).ldelim();
        }
        if (message.maxDepth !== 0) {
            writer.uint32(24).int32(message.maxDepth);
        }
        if (message.minDepth !== 0) {
            writer.uint32(32).int32(message.minDepth);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProofSpec();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.leafSpec = exports.LeafOp.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.innerSpec = exports.InnerSpec.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.maxDepth = reader.int32();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.minDepth = reader.int32();
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
            leafSpec: isSet(object.leafSpec) ? exports.LeafOp.fromJSON(object.leafSpec) : undefined,
            innerSpec: isSet(object.innerSpec) ? exports.InnerSpec.fromJSON(object.innerSpec) : undefined,
            maxDepth: isSet(object.maxDepth) ? Number(object.maxDepth) : 0,
            minDepth: isSet(object.minDepth) ? Number(object.minDepth) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.leafSpec !== undefined) {
            obj.leafSpec = exports.LeafOp.toJSON(message.leafSpec);
        }
        if (message.innerSpec !== undefined) {
            obj.innerSpec = exports.InnerSpec.toJSON(message.innerSpec);
        }
        if (message.maxDepth !== 0) {
            obj.maxDepth = Math.round(message.maxDepth);
        }
        if (message.minDepth !== 0) {
            obj.minDepth = Math.round(message.minDepth);
        }
        return obj;
    },
    create(base) {
        return exports.ProofSpec.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseProofSpec();
        message.leafSpec = (object.leafSpec !== undefined && object.leafSpec !== null)
            ? exports.LeafOp.fromPartial(object.leafSpec)
            : undefined;
        message.innerSpec = (object.innerSpec !== undefined && object.innerSpec !== null)
            ? exports.InnerSpec.fromPartial(object.innerSpec)
            : undefined;
        message.maxDepth = object.maxDepth ?? 0;
        message.minDepth = object.minDepth ?? 0;
        return message;
    },
};
function createBaseInnerSpec() {
    return {
        childOrder: [],
        childSize: 0,
        minPrefixLength: 0,
        maxPrefixLength: 0,
        emptyChild: new Uint8Array(0),
        hash: 0,
    };
}
exports.InnerSpec = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.childOrder) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.childSize !== 0) {
            writer.uint32(16).int32(message.childSize);
        }
        if (message.minPrefixLength !== 0) {
            writer.uint32(24).int32(message.minPrefixLength);
        }
        if (message.maxPrefixLength !== 0) {
            writer.uint32(32).int32(message.maxPrefixLength);
        }
        if (message.emptyChild.length !== 0) {
            writer.uint32(42).bytes(message.emptyChild);
        }
        if (message.hash !== 0) {
            writer.uint32(48).int32(message.hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInnerSpec();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag === 8) {
                        message.childOrder.push(reader.int32());
                        continue;
                    }
                    if (tag === 10) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.childOrder.push(reader.int32());
                        }
                        continue;
                    }
                    break;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.childSize = reader.int32();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.minPrefixLength = reader.int32();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.maxPrefixLength = reader.int32();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.emptyChild = reader.bytes();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.hash = reader.int32();
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
            childOrder: Array.isArray(object?.childOrder) ? object.childOrder.map((e) => Number(e)) : [],
            childSize: isSet(object.childSize) ? Number(object.childSize) : 0,
            minPrefixLength: isSet(object.minPrefixLength) ? Number(object.minPrefixLength) : 0,
            maxPrefixLength: isSet(object.maxPrefixLength) ? Number(object.maxPrefixLength) : 0,
            emptyChild: isSet(object.emptyChild) ? bytesFromBase64(object.emptyChild) : new Uint8Array(0),
            hash: isSet(object.hash) ? hashOpFromJSON(object.hash) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.childOrder?.length) {
            obj.childOrder = message.childOrder.map((e) => Math.round(e));
        }
        if (message.childSize !== 0) {
            obj.childSize = Math.round(message.childSize);
        }
        if (message.minPrefixLength !== 0) {
            obj.minPrefixLength = Math.round(message.minPrefixLength);
        }
        if (message.maxPrefixLength !== 0) {
            obj.maxPrefixLength = Math.round(message.maxPrefixLength);
        }
        if (message.emptyChild.length !== 0) {
            obj.emptyChild = base64FromBytes(message.emptyChild);
        }
        if (message.hash !== 0) {
            obj.hash = hashOpToJSON(message.hash);
        }
        return obj;
    },
    create(base) {
        return exports.InnerSpec.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseInnerSpec();
        message.childOrder = object.childOrder?.map((e) => e) || [];
        message.childSize = object.childSize ?? 0;
        message.minPrefixLength = object.minPrefixLength ?? 0;
        message.maxPrefixLength = object.maxPrefixLength ?? 0;
        message.emptyChild = object.emptyChild ?? new Uint8Array(0);
        message.hash = object.hash ?? 0;
        return message;
    },
};
function createBaseBatchProof() {
    return { entries: [] };
}
exports.BatchProof = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.entries) {
            exports.BatchEntry.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBatchProof();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.entries.push(exports.BatchEntry.decode(reader, reader.uint32()));
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
        return { entries: Array.isArray(object?.entries) ? object.entries.map((e) => exports.BatchEntry.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.entries?.length) {
            obj.entries = message.entries.map((e) => exports.BatchEntry.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.BatchProof.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseBatchProof();
        message.entries = object.entries?.map((e) => exports.BatchEntry.fromPartial(e)) || [];
        return message;
    },
};
function createBaseBatchEntry() {
    return { exist: undefined, nonexist: undefined };
}
exports.BatchEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.exist !== undefined) {
            exports.ExistenceProof.encode(message.exist, writer.uint32(10).fork()).ldelim();
        }
        if (message.nonexist !== undefined) {
            exports.NonExistenceProof.encode(message.nonexist, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBatchEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.exist = exports.ExistenceProof.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.nonexist = exports.NonExistenceProof.decode(reader, reader.uint32());
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
            exist: isSet(object.exist) ? exports.ExistenceProof.fromJSON(object.exist) : undefined,
            nonexist: isSet(object.nonexist) ? exports.NonExistenceProof.fromJSON(object.nonexist) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.exist !== undefined) {
            obj.exist = exports.ExistenceProof.toJSON(message.exist);
        }
        if (message.nonexist !== undefined) {
            obj.nonexist = exports.NonExistenceProof.toJSON(message.nonexist);
        }
        return obj;
    },
    create(base) {
        return exports.BatchEntry.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseBatchEntry();
        message.exist = (object.exist !== undefined && object.exist !== null)
            ? exports.ExistenceProof.fromPartial(object.exist)
            : undefined;
        message.nonexist = (object.nonexist !== undefined && object.nonexist !== null)
            ? exports.NonExistenceProof.fromPartial(object.nonexist)
            : undefined;
        return message;
    },
};
function createBaseCompressedBatchProof() {
    return { entries: [], lookupInners: [] };
}
exports.CompressedBatchProof = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.entries) {
            exports.CompressedBatchEntry.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.lookupInners) {
            exports.InnerOp.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCompressedBatchProof();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.entries.push(exports.CompressedBatchEntry.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.lookupInners.push(exports.InnerOp.decode(reader, reader.uint32()));
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
            entries: Array.isArray(object?.entries) ? object.entries.map((e) => exports.CompressedBatchEntry.fromJSON(e)) : [],
            lookupInners: Array.isArray(object?.lookupInners) ? object.lookupInners.map((e) => exports.InnerOp.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.entries?.length) {
            obj.entries = message.entries.map((e) => exports.CompressedBatchEntry.toJSON(e));
        }
        if (message.lookupInners?.length) {
            obj.lookupInners = message.lookupInners.map((e) => exports.InnerOp.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.CompressedBatchProof.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCompressedBatchProof();
        message.entries = object.entries?.map((e) => exports.CompressedBatchEntry.fromPartial(e)) || [];
        message.lookupInners = object.lookupInners?.map((e) => exports.InnerOp.fromPartial(e)) || [];
        return message;
    },
};
function createBaseCompressedBatchEntry() {
    return { exist: undefined, nonexist: undefined };
}
exports.CompressedBatchEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.exist !== undefined) {
            exports.CompressedExistenceProof.encode(message.exist, writer.uint32(10).fork()).ldelim();
        }
        if (message.nonexist !== undefined) {
            exports.CompressedNonExistenceProof.encode(message.nonexist, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCompressedBatchEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.exist = exports.CompressedExistenceProof.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.nonexist = exports.CompressedNonExistenceProof.decode(reader, reader.uint32());
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
            exist: isSet(object.exist) ? exports.CompressedExistenceProof.fromJSON(object.exist) : undefined,
            nonexist: isSet(object.nonexist) ? exports.CompressedNonExistenceProof.fromJSON(object.nonexist) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.exist !== undefined) {
            obj.exist = exports.CompressedExistenceProof.toJSON(message.exist);
        }
        if (message.nonexist !== undefined) {
            obj.nonexist = exports.CompressedNonExistenceProof.toJSON(message.nonexist);
        }
        return obj;
    },
    create(base) {
        return exports.CompressedBatchEntry.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCompressedBatchEntry();
        message.exist = (object.exist !== undefined && object.exist !== null)
            ? exports.CompressedExistenceProof.fromPartial(object.exist)
            : undefined;
        message.nonexist = (object.nonexist !== undefined && object.nonexist !== null)
            ? exports.CompressedNonExistenceProof.fromPartial(object.nonexist)
            : undefined;
        return message;
    },
};
function createBaseCompressedExistenceProof() {
    return { key: new Uint8Array(0), value: new Uint8Array(0), leaf: undefined, path: [] };
}
exports.CompressedExistenceProof = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        if (message.leaf !== undefined) {
            exports.LeafOp.encode(message.leaf, writer.uint32(26).fork()).ldelim();
        }
        writer.uint32(34).fork();
        for (const v of message.path) {
            writer.int32(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCompressedExistenceProof();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.key = reader.bytes();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.value = reader.bytes();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.leaf = exports.LeafOp.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag === 32) {
                        message.path.push(reader.int32());
                        continue;
                    }
                    if (tag === 34) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.path.push(reader.int32());
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
            key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(0),
            value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(0),
            leaf: isSet(object.leaf) ? exports.LeafOp.fromJSON(object.leaf) : undefined,
            path: Array.isArray(object?.path) ? object.path.map((e) => Number(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.key.length !== 0) {
            obj.key = base64FromBytes(message.key);
        }
        if (message.value.length !== 0) {
            obj.value = base64FromBytes(message.value);
        }
        if (message.leaf !== undefined) {
            obj.leaf = exports.LeafOp.toJSON(message.leaf);
        }
        if (message.path?.length) {
            obj.path = message.path.map((e) => Math.round(e));
        }
        return obj;
    },
    create(base) {
        return exports.CompressedExistenceProof.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCompressedExistenceProof();
        message.key = object.key ?? new Uint8Array(0);
        message.value = object.value ?? new Uint8Array(0);
        message.leaf = (object.leaf !== undefined && object.leaf !== null) ? exports.LeafOp.fromPartial(object.leaf) : undefined;
        message.path = object.path?.map((e) => e) || [];
        return message;
    },
};
function createBaseCompressedNonExistenceProof() {
    return { key: new Uint8Array(0), left: undefined, right: undefined };
}
exports.CompressedNonExistenceProof = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.left !== undefined) {
            exports.CompressedExistenceProof.encode(message.left, writer.uint32(18).fork()).ldelim();
        }
        if (message.right !== undefined) {
            exports.CompressedExistenceProof.encode(message.right, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCompressedNonExistenceProof();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.key = reader.bytes();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.left = exports.CompressedExistenceProof.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.right = exports.CompressedExistenceProof.decode(reader, reader.uint32());
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
            key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(0),
            left: isSet(object.left) ? exports.CompressedExistenceProof.fromJSON(object.left) : undefined,
            right: isSet(object.right) ? exports.CompressedExistenceProof.fromJSON(object.right) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.key.length !== 0) {
            obj.key = base64FromBytes(message.key);
        }
        if (message.left !== undefined) {
            obj.left = exports.CompressedExistenceProof.toJSON(message.left);
        }
        if (message.right !== undefined) {
            obj.right = exports.CompressedExistenceProof.toJSON(message.right);
        }
        return obj;
    },
    create(base) {
        return exports.CompressedNonExistenceProof.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCompressedNonExistenceProof();
        message.key = object.key ?? new Uint8Array(0);
        message.left = (object.left !== undefined && object.left !== null)
            ? exports.CompressedExistenceProof.fromPartial(object.left)
            : undefined;
        message.right = (object.right !== undefined && object.right !== null)
            ? exports.CompressedExistenceProof.fromPartial(object.right)
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
function isSet(value) {
    return value !== null && value !== undefined;
}
