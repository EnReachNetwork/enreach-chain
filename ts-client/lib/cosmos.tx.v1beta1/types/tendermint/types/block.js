"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Block = exports.protobufPackage = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const evidence_1 = require("./evidence");
const types_1 = require("./types");
exports.protobufPackage = "tendermint.types";
function createBaseBlock() {
    return { header: undefined, data: undefined, evidence: undefined, lastCommit: undefined };
}
exports.Block = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.header !== undefined) {
            types_1.Header.encode(message.header, writer.uint32(10).fork()).ldelim();
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
                    message.header = types_1.Header.decode(reader, reader.uint32());
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
            header: isSet(object.header) ? types_1.Header.fromJSON(object.header) : undefined,
            data: isSet(object.data) ? types_1.Data.fromJSON(object.data) : undefined,
            evidence: isSet(object.evidence) ? evidence_1.EvidenceList.fromJSON(object.evidence) : undefined,
            lastCommit: isSet(object.lastCommit) ? types_1.Commit.fromJSON(object.lastCommit) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.header !== undefined) {
            obj.header = types_1.Header.toJSON(message.header);
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
            ? types_1.Header.fromPartial(object.header)
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
function isSet(value) {
    return value !== null && value !== undefined;
}
