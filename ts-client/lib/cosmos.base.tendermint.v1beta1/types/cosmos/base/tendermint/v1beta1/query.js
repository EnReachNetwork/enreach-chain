"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceClientImpl = exports.ServiceServiceName = exports.ProofOps = exports.ProofOp = exports.ABCIQueryResponse = exports.ABCIQueryRequest = exports.Module = exports.VersionInfo = exports.GetNodeInfoResponse = exports.GetNodeInfoRequest = exports.GetSyncingResponse = exports.GetSyncingRequest = exports.GetLatestBlockResponse = exports.GetLatestBlockRequest = exports.GetBlockByHeightResponse = exports.GetBlockByHeightRequest = exports.Validator = exports.GetLatestValidatorSetResponse = exports.GetLatestValidatorSetRequest = exports.GetValidatorSetByHeightResponse = exports.GetValidatorSetByHeightRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const any_1 = require("../../../../google/protobuf/any");
const types_1 = require("../../../../tendermint/p2p/types");
const block_1 = require("../../../../tendermint/types/block");
const types_2 = require("../../../../tendermint/types/types");
const pagination_1 = require("../../query/v1beta1/pagination");
const types_3 = require("./types");
exports.protobufPackage = "cosmos.base.tendermint.v1beta1";
function createBaseGetValidatorSetByHeightRequest() {
    return { height: 0, pagination: undefined };
}
exports.GetValidatorSetByHeightRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.height !== 0) {
            writer.uint32(8).int64(message.height);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetValidatorSetByHeightRequest();
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
            height: isSet(object.height) ? Number(object.height) : 0,
            pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.height !== 0) {
            obj.height = Math.round(message.height);
        }
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageRequest.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.GetValidatorSetByHeightRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetValidatorSetByHeightRequest();
        message.height = object.height ?? 0;
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseGetValidatorSetByHeightResponse() {
    return { blockHeight: 0, validators: [], pagination: undefined };
}
exports.GetValidatorSetByHeightResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.blockHeight !== 0) {
            writer.uint32(8).int64(message.blockHeight);
        }
        for (const v of message.validators) {
            exports.Validator.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetValidatorSetByHeightResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.blockHeight = longToNumber(reader.int64());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.validators.push(exports.Validator.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
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
            blockHeight: isSet(object.blockHeight) ? Number(object.blockHeight) : 0,
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => exports.Validator.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.blockHeight !== 0) {
            obj.blockHeight = Math.round(message.blockHeight);
        }
        if (message.validators?.length) {
            obj.validators = message.validators.map((e) => exports.Validator.toJSON(e));
        }
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageResponse.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.GetValidatorSetByHeightResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetValidatorSetByHeightResponse();
        message.blockHeight = object.blockHeight ?? 0;
        message.validators = object.validators?.map((e) => exports.Validator.fromPartial(e)) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseGetLatestValidatorSetRequest() {
    return { pagination: undefined };
}
exports.GetLatestValidatorSetRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetLatestValidatorSetRequest();
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
        return exports.GetLatestValidatorSetRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetLatestValidatorSetRequest();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseGetLatestValidatorSetResponse() {
    return { blockHeight: 0, validators: [], pagination: undefined };
}
exports.GetLatestValidatorSetResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.blockHeight !== 0) {
            writer.uint32(8).int64(message.blockHeight);
        }
        for (const v of message.validators) {
            exports.Validator.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetLatestValidatorSetResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.blockHeight = longToNumber(reader.int64());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.validators.push(exports.Validator.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
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
            blockHeight: isSet(object.blockHeight) ? Number(object.blockHeight) : 0,
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => exports.Validator.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.blockHeight !== 0) {
            obj.blockHeight = Math.round(message.blockHeight);
        }
        if (message.validators?.length) {
            obj.validators = message.validators.map((e) => exports.Validator.toJSON(e));
        }
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageResponse.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.GetLatestValidatorSetResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetLatestValidatorSetResponse();
        message.blockHeight = object.blockHeight ?? 0;
        message.validators = object.validators?.map((e) => exports.Validator.fromPartial(e)) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseValidator() {
    return { address: "", pubKey: undefined, votingPower: 0, proposerPriority: 0 };
}
exports.Validator = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.pubKey !== undefined) {
            any_1.Any.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
        }
        if (message.votingPower !== 0) {
            writer.uint32(24).int64(message.votingPower);
        }
        if (message.proposerPriority !== 0) {
            writer.uint32(32).int64(message.proposerPriority);
        }
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
                    message.address = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.pubKey = any_1.Any.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.votingPower = longToNumber(reader.int64());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.proposerPriority = longToNumber(reader.int64());
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
            pubKey: isSet(object.pubKey) ? any_1.Any.fromJSON(object.pubKey) : undefined,
            votingPower: isSet(object.votingPower) ? Number(object.votingPower) : 0,
            proposerPriority: isSet(object.proposerPriority) ? Number(object.proposerPriority) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.address !== "") {
            obj.address = message.address;
        }
        if (message.pubKey !== undefined) {
            obj.pubKey = any_1.Any.toJSON(message.pubKey);
        }
        if (message.votingPower !== 0) {
            obj.votingPower = Math.round(message.votingPower);
        }
        if (message.proposerPriority !== 0) {
            obj.proposerPriority = Math.round(message.proposerPriority);
        }
        return obj;
    },
    create(base) {
        return exports.Validator.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseValidator();
        message.address = object.address ?? "";
        message.pubKey = (object.pubKey !== undefined && object.pubKey !== null)
            ? any_1.Any.fromPartial(object.pubKey)
            : undefined;
        message.votingPower = object.votingPower ?? 0;
        message.proposerPriority = object.proposerPriority ?? 0;
        return message;
    },
};
function createBaseGetBlockByHeightRequest() {
    return { height: 0 };
}
exports.GetBlockByHeightRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.height !== 0) {
            writer.uint32(8).int64(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetBlockByHeightRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.height = longToNumber(reader.int64());
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
        return { height: isSet(object.height) ? Number(object.height) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.height !== 0) {
            obj.height = Math.round(message.height);
        }
        return obj;
    },
    create(base) {
        return exports.GetBlockByHeightRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetBlockByHeightRequest();
        message.height = object.height ?? 0;
        return message;
    },
};
function createBaseGetBlockByHeightResponse() {
    return { blockId: undefined, block: undefined, sdkBlock: undefined };
}
exports.GetBlockByHeightResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.blockId !== undefined) {
            types_2.BlockID.encode(message.blockId, writer.uint32(10).fork()).ldelim();
        }
        if (message.block !== undefined) {
            block_1.Block.encode(message.block, writer.uint32(18).fork()).ldelim();
        }
        if (message.sdkBlock !== undefined) {
            types_3.Block.encode(message.sdkBlock, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetBlockByHeightResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.blockId = types_2.BlockID.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.block = block_1.Block.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.sdkBlock = types_3.Block.decode(reader, reader.uint32());
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
            blockId: isSet(object.blockId) ? types_2.BlockID.fromJSON(object.blockId) : undefined,
            block: isSet(object.block) ? block_1.Block.fromJSON(object.block) : undefined,
            sdkBlock: isSet(object.sdkBlock) ? types_3.Block.fromJSON(object.sdkBlock) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.blockId !== undefined) {
            obj.blockId = types_2.BlockID.toJSON(message.blockId);
        }
        if (message.block !== undefined) {
            obj.block = block_1.Block.toJSON(message.block);
        }
        if (message.sdkBlock !== undefined) {
            obj.sdkBlock = types_3.Block.toJSON(message.sdkBlock);
        }
        return obj;
    },
    create(base) {
        return exports.GetBlockByHeightResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetBlockByHeightResponse();
        message.blockId = (object.blockId !== undefined && object.blockId !== null)
            ? types_2.BlockID.fromPartial(object.blockId)
            : undefined;
        message.block = (object.block !== undefined && object.block !== null) ? block_1.Block.fromPartial(object.block) : undefined;
        message.sdkBlock = (object.sdkBlock !== undefined && object.sdkBlock !== null)
            ? types_3.Block.fromPartial(object.sdkBlock)
            : undefined;
        return message;
    },
};
function createBaseGetLatestBlockRequest() {
    return {};
}
exports.GetLatestBlockRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetLatestBlockRequest();
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
        return exports.GetLatestBlockRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseGetLatestBlockRequest();
        return message;
    },
};
function createBaseGetLatestBlockResponse() {
    return { blockId: undefined, block: undefined, sdkBlock: undefined };
}
exports.GetLatestBlockResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.blockId !== undefined) {
            types_2.BlockID.encode(message.blockId, writer.uint32(10).fork()).ldelim();
        }
        if (message.block !== undefined) {
            block_1.Block.encode(message.block, writer.uint32(18).fork()).ldelim();
        }
        if (message.sdkBlock !== undefined) {
            types_3.Block.encode(message.sdkBlock, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetLatestBlockResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.blockId = types_2.BlockID.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.block = block_1.Block.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.sdkBlock = types_3.Block.decode(reader, reader.uint32());
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
            blockId: isSet(object.blockId) ? types_2.BlockID.fromJSON(object.blockId) : undefined,
            block: isSet(object.block) ? block_1.Block.fromJSON(object.block) : undefined,
            sdkBlock: isSet(object.sdkBlock) ? types_3.Block.fromJSON(object.sdkBlock) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.blockId !== undefined) {
            obj.blockId = types_2.BlockID.toJSON(message.blockId);
        }
        if (message.block !== undefined) {
            obj.block = block_1.Block.toJSON(message.block);
        }
        if (message.sdkBlock !== undefined) {
            obj.sdkBlock = types_3.Block.toJSON(message.sdkBlock);
        }
        return obj;
    },
    create(base) {
        return exports.GetLatestBlockResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetLatestBlockResponse();
        message.blockId = (object.blockId !== undefined && object.blockId !== null)
            ? types_2.BlockID.fromPartial(object.blockId)
            : undefined;
        message.block = (object.block !== undefined && object.block !== null) ? block_1.Block.fromPartial(object.block) : undefined;
        message.sdkBlock = (object.sdkBlock !== undefined && object.sdkBlock !== null)
            ? types_3.Block.fromPartial(object.sdkBlock)
            : undefined;
        return message;
    },
};
function createBaseGetSyncingRequest() {
    return {};
}
exports.GetSyncingRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetSyncingRequest();
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
        return exports.GetSyncingRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseGetSyncingRequest();
        return message;
    },
};
function createBaseGetSyncingResponse() {
    return { syncing: false };
}
exports.GetSyncingResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.syncing === true) {
            writer.uint32(8).bool(message.syncing);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetSyncingResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.syncing = reader.bool();
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
        return { syncing: isSet(object.syncing) ? Boolean(object.syncing) : false };
    },
    toJSON(message) {
        const obj = {};
        if (message.syncing === true) {
            obj.syncing = message.syncing;
        }
        return obj;
    },
    create(base) {
        return exports.GetSyncingResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetSyncingResponse();
        message.syncing = object.syncing ?? false;
        return message;
    },
};
function createBaseGetNodeInfoRequest() {
    return {};
}
exports.GetNodeInfoRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetNodeInfoRequest();
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
        return exports.GetNodeInfoRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseGetNodeInfoRequest();
        return message;
    },
};
function createBaseGetNodeInfoResponse() {
    return { defaultNodeInfo: undefined, applicationVersion: undefined };
}
exports.GetNodeInfoResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.defaultNodeInfo !== undefined) {
            types_1.DefaultNodeInfo.encode(message.defaultNodeInfo, writer.uint32(10).fork()).ldelim();
        }
        if (message.applicationVersion !== undefined) {
            exports.VersionInfo.encode(message.applicationVersion, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetNodeInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.defaultNodeInfo = types_1.DefaultNodeInfo.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.applicationVersion = exports.VersionInfo.decode(reader, reader.uint32());
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
            defaultNodeInfo: isSet(object.defaultNodeInfo) ? types_1.DefaultNodeInfo.fromJSON(object.defaultNodeInfo) : undefined,
            applicationVersion: isSet(object.applicationVersion)
                ? exports.VersionInfo.fromJSON(object.applicationVersion)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.defaultNodeInfo !== undefined) {
            obj.defaultNodeInfo = types_1.DefaultNodeInfo.toJSON(message.defaultNodeInfo);
        }
        if (message.applicationVersion !== undefined) {
            obj.applicationVersion = exports.VersionInfo.toJSON(message.applicationVersion);
        }
        return obj;
    },
    create(base) {
        return exports.GetNodeInfoResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetNodeInfoResponse();
        message.defaultNodeInfo = (object.defaultNodeInfo !== undefined && object.defaultNodeInfo !== null)
            ? types_1.DefaultNodeInfo.fromPartial(object.defaultNodeInfo)
            : undefined;
        message.applicationVersion = (object.applicationVersion !== undefined && object.applicationVersion !== null)
            ? exports.VersionInfo.fromPartial(object.applicationVersion)
            : undefined;
        return message;
    },
};
function createBaseVersionInfo() {
    return {
        name: "",
        appName: "",
        version: "",
        gitCommit: "",
        buildTags: "",
        goVersion: "",
        buildDeps: [],
        cosmosSdkVersion: "",
    };
}
exports.VersionInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.appName !== "") {
            writer.uint32(18).string(message.appName);
        }
        if (message.version !== "") {
            writer.uint32(26).string(message.version);
        }
        if (message.gitCommit !== "") {
            writer.uint32(34).string(message.gitCommit);
        }
        if (message.buildTags !== "") {
            writer.uint32(42).string(message.buildTags);
        }
        if (message.goVersion !== "") {
            writer.uint32(50).string(message.goVersion);
        }
        for (const v of message.buildDeps) {
            exports.Module.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.cosmosSdkVersion !== "") {
            writer.uint32(66).string(message.cosmosSdkVersion);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVersionInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.appName = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.version = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.gitCommit = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.buildTags = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.goVersion = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.buildDeps.push(exports.Module.decode(reader, reader.uint32()));
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.cosmosSdkVersion = reader.string();
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
            name: isSet(object.name) ? String(object.name) : "",
            appName: isSet(object.appName) ? String(object.appName) : "",
            version: isSet(object.version) ? String(object.version) : "",
            gitCommit: isSet(object.gitCommit) ? String(object.gitCommit) : "",
            buildTags: isSet(object.buildTags) ? String(object.buildTags) : "",
            goVersion: isSet(object.goVersion) ? String(object.goVersion) : "",
            buildDeps: Array.isArray(object?.buildDeps) ? object.buildDeps.map((e) => exports.Module.fromJSON(e)) : [],
            cosmosSdkVersion: isSet(object.cosmosSdkVersion) ? String(object.cosmosSdkVersion) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.appName !== "") {
            obj.appName = message.appName;
        }
        if (message.version !== "") {
            obj.version = message.version;
        }
        if (message.gitCommit !== "") {
            obj.gitCommit = message.gitCommit;
        }
        if (message.buildTags !== "") {
            obj.buildTags = message.buildTags;
        }
        if (message.goVersion !== "") {
            obj.goVersion = message.goVersion;
        }
        if (message.buildDeps?.length) {
            obj.buildDeps = message.buildDeps.map((e) => exports.Module.toJSON(e));
        }
        if (message.cosmosSdkVersion !== "") {
            obj.cosmosSdkVersion = message.cosmosSdkVersion;
        }
        return obj;
    },
    create(base) {
        return exports.VersionInfo.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseVersionInfo();
        message.name = object.name ?? "";
        message.appName = object.appName ?? "";
        message.version = object.version ?? "";
        message.gitCommit = object.gitCommit ?? "";
        message.buildTags = object.buildTags ?? "";
        message.goVersion = object.goVersion ?? "";
        message.buildDeps = object.buildDeps?.map((e) => exports.Module.fromPartial(e)) || [];
        message.cosmosSdkVersion = object.cosmosSdkVersion ?? "";
        return message;
    },
};
function createBaseModule() {
    return { path: "", version: "", sum: "" };
}
exports.Module = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.path !== "") {
            writer.uint32(10).string(message.path);
        }
        if (message.version !== "") {
            writer.uint32(18).string(message.version);
        }
        if (message.sum !== "") {
            writer.uint32(26).string(message.sum);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModule();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.path = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.version = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.sum = reader.string();
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
            path: isSet(object.path) ? String(object.path) : "",
            version: isSet(object.version) ? String(object.version) : "",
            sum: isSet(object.sum) ? String(object.sum) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.path !== "") {
            obj.path = message.path;
        }
        if (message.version !== "") {
            obj.version = message.version;
        }
        if (message.sum !== "") {
            obj.sum = message.sum;
        }
        return obj;
    },
    create(base) {
        return exports.Module.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseModule();
        message.path = object.path ?? "";
        message.version = object.version ?? "";
        message.sum = object.sum ?? "";
        return message;
    },
};
function createBaseABCIQueryRequest() {
    return { data: new Uint8Array(0), path: "", height: 0, prove: false };
}
exports.ABCIQueryRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        if (message.path !== "") {
            writer.uint32(18).string(message.path);
        }
        if (message.height !== 0) {
            writer.uint32(24).int64(message.height);
        }
        if (message.prove === true) {
            writer.uint32(32).bool(message.prove);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseABCIQueryRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.data = reader.bytes();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.path = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.height = longToNumber(reader.int64());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.prove = reader.bool();
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
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0),
            path: isSet(object.path) ? String(object.path) : "",
            height: isSet(object.height) ? Number(object.height) : 0,
            prove: isSet(object.prove) ? Boolean(object.prove) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.data.length !== 0) {
            obj.data = base64FromBytes(message.data);
        }
        if (message.path !== "") {
            obj.path = message.path;
        }
        if (message.height !== 0) {
            obj.height = Math.round(message.height);
        }
        if (message.prove === true) {
            obj.prove = message.prove;
        }
        return obj;
    },
    create(base) {
        return exports.ABCIQueryRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseABCIQueryRequest();
        message.data = object.data ?? new Uint8Array(0);
        message.path = object.path ?? "";
        message.height = object.height ?? 0;
        message.prove = object.prove ?? false;
        return message;
    },
};
function createBaseABCIQueryResponse() {
    return {
        code: 0,
        log: "",
        info: "",
        index: 0,
        key: new Uint8Array(0),
        value: new Uint8Array(0),
        proofOps: undefined,
        height: 0,
        codespace: "",
    };
}
exports.ABCIQueryResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.code !== 0) {
            writer.uint32(8).uint32(message.code);
        }
        if (message.log !== "") {
            writer.uint32(26).string(message.log);
        }
        if (message.info !== "") {
            writer.uint32(34).string(message.info);
        }
        if (message.index !== 0) {
            writer.uint32(40).int64(message.index);
        }
        if (message.key.length !== 0) {
            writer.uint32(50).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(58).bytes(message.value);
        }
        if (message.proofOps !== undefined) {
            exports.ProofOps.encode(message.proofOps, writer.uint32(66).fork()).ldelim();
        }
        if (message.height !== 0) {
            writer.uint32(72).int64(message.height);
        }
        if (message.codespace !== "") {
            writer.uint32(82).string(message.codespace);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseABCIQueryResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.code = reader.uint32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.log = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.info = reader.string();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.index = longToNumber(reader.int64());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.key = reader.bytes();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.value = reader.bytes();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.proofOps = exports.ProofOps.decode(reader, reader.uint32());
                    continue;
                case 9:
                    if (tag !== 72) {
                        break;
                    }
                    message.height = longToNumber(reader.int64());
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.codespace = reader.string();
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
            code: isSet(object.code) ? Number(object.code) : 0,
            log: isSet(object.log) ? String(object.log) : "",
            info: isSet(object.info) ? String(object.info) : "",
            index: isSet(object.index) ? Number(object.index) : 0,
            key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(0),
            value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(0),
            proofOps: isSet(object.proofOps) ? exports.ProofOps.fromJSON(object.proofOps) : undefined,
            height: isSet(object.height) ? Number(object.height) : 0,
            codespace: isSet(object.codespace) ? String(object.codespace) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.code !== 0) {
            obj.code = Math.round(message.code);
        }
        if (message.log !== "") {
            obj.log = message.log;
        }
        if (message.info !== "") {
            obj.info = message.info;
        }
        if (message.index !== 0) {
            obj.index = Math.round(message.index);
        }
        if (message.key.length !== 0) {
            obj.key = base64FromBytes(message.key);
        }
        if (message.value.length !== 0) {
            obj.value = base64FromBytes(message.value);
        }
        if (message.proofOps !== undefined) {
            obj.proofOps = exports.ProofOps.toJSON(message.proofOps);
        }
        if (message.height !== 0) {
            obj.height = Math.round(message.height);
        }
        if (message.codespace !== "") {
            obj.codespace = message.codespace;
        }
        return obj;
    },
    create(base) {
        return exports.ABCIQueryResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseABCIQueryResponse();
        message.code = object.code ?? 0;
        message.log = object.log ?? "";
        message.info = object.info ?? "";
        message.index = object.index ?? 0;
        message.key = object.key ?? new Uint8Array(0);
        message.value = object.value ?? new Uint8Array(0);
        message.proofOps = (object.proofOps !== undefined && object.proofOps !== null)
            ? exports.ProofOps.fromPartial(object.proofOps)
            : undefined;
        message.height = object.height ?? 0;
        message.codespace = object.codespace ?? "";
        return message;
    },
};
function createBaseProofOp() {
    return { type: "", key: new Uint8Array(0), data: new Uint8Array(0) };
}
exports.ProofOp = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.type !== "") {
            writer.uint32(10).string(message.type);
        }
        if (message.key.length !== 0) {
            writer.uint32(18).bytes(message.key);
        }
        if (message.data.length !== 0) {
            writer.uint32(26).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProofOp();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.type = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.key = reader.bytes();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.data = reader.bytes();
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
            type: isSet(object.type) ? String(object.type) : "",
            key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(0),
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0),
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.type !== "") {
            obj.type = message.type;
        }
        if (message.key.length !== 0) {
            obj.key = base64FromBytes(message.key);
        }
        if (message.data.length !== 0) {
            obj.data = base64FromBytes(message.data);
        }
        return obj;
    },
    create(base) {
        return exports.ProofOp.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseProofOp();
        message.type = object.type ?? "";
        message.key = object.key ?? new Uint8Array(0);
        message.data = object.data ?? new Uint8Array(0);
        return message;
    },
};
function createBaseProofOps() {
    return { ops: [] };
}
exports.ProofOps = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.ops) {
            exports.ProofOp.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProofOps();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.ops.push(exports.ProofOp.decode(reader, reader.uint32()));
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
        return { ops: Array.isArray(object?.ops) ? object.ops.map((e) => exports.ProofOp.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.ops?.length) {
            obj.ops = message.ops.map((e) => exports.ProofOp.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.ProofOps.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseProofOps();
        message.ops = object.ops?.map((e) => exports.ProofOp.fromPartial(e)) || [];
        return message;
    },
};
exports.ServiceServiceName = "cosmos.base.tendermint.v1beta1.Service";
class ServiceClientImpl {
    constructor(rpc, opts) {
        this.service = opts?.service || exports.ServiceServiceName;
        this.rpc = rpc;
        this.GetNodeInfo = this.GetNodeInfo.bind(this);
        this.GetSyncing = this.GetSyncing.bind(this);
        this.GetLatestBlock = this.GetLatestBlock.bind(this);
        this.GetBlockByHeight = this.GetBlockByHeight.bind(this);
        this.GetLatestValidatorSet = this.GetLatestValidatorSet.bind(this);
        this.GetValidatorSetByHeight = this.GetValidatorSetByHeight.bind(this);
        this.ABCIQuery = this.ABCIQuery.bind(this);
    }
    GetNodeInfo(request) {
        const data = exports.GetNodeInfoRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "GetNodeInfo", data);
        return promise.then((data) => exports.GetNodeInfoResponse.decode(minimal_1.default.Reader.create(data)));
    }
    GetSyncing(request) {
        const data = exports.GetSyncingRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "GetSyncing", data);
        return promise.then((data) => exports.GetSyncingResponse.decode(minimal_1.default.Reader.create(data)));
    }
    GetLatestBlock(request) {
        const data = exports.GetLatestBlockRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "GetLatestBlock", data);
        return promise.then((data) => exports.GetLatestBlockResponse.decode(minimal_1.default.Reader.create(data)));
    }
    GetBlockByHeight(request) {
        const data = exports.GetBlockByHeightRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "GetBlockByHeight", data);
        return promise.then((data) => exports.GetBlockByHeightResponse.decode(minimal_1.default.Reader.create(data)));
    }
    GetLatestValidatorSet(request) {
        const data = exports.GetLatestValidatorSetRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "GetLatestValidatorSet", data);
        return promise.then((data) => exports.GetLatestValidatorSetResponse.decode(minimal_1.default.Reader.create(data)));
    }
    GetValidatorSetByHeight(request) {
        const data = exports.GetValidatorSetByHeightRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "GetValidatorSetByHeight", data);
        return promise.then((data) => exports.GetValidatorSetByHeightResponse.decode(minimal_1.default.Reader.create(data)));
    }
    ABCIQuery(request) {
        const data = exports.ABCIQueryRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "ABCIQuery", data);
        return promise.then((data) => exports.ABCIQueryResponse.decode(minimal_1.default.Reader.create(data)));
    }
}
exports.ServiceClientImpl = ServiceClientImpl;
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
