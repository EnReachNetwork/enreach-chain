"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryServiceName = exports.QueryUpgradedConsensusStateResponse = exports.QueryUpgradedConsensusStateRequest = exports.QueryUpgradedClientStateResponse = exports.QueryUpgradedClientStateRequest = exports.QueryClientParamsResponse = exports.QueryClientParamsRequest = exports.QueryClientStatusResponse = exports.QueryClientStatusRequest = exports.QueryConsensusStateHeightsResponse = exports.QueryConsensusStateHeightsRequest = exports.QueryConsensusStatesResponse = exports.QueryConsensusStatesRequest = exports.QueryConsensusStateResponse = exports.QueryConsensusStateRequest = exports.QueryClientStatesResponse = exports.QueryClientStatesRequest = exports.QueryClientStateResponse = exports.QueryClientStateRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const pagination_1 = require("../../../../cosmos/base/query/v1beta1/pagination");
const any_1 = require("../../../../google/protobuf/any");
const client_1 = require("./client");
exports.protobufPackage = "ibc.core.client.v1";
function createBaseQueryClientStateRequest() {
    return { clientId: "" };
}
exports.QueryClientStateRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClientStateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.clientId = reader.string();
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
        return { clientId: isSet(object.clientId) ? String(object.clientId) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.clientId !== "") {
            obj.clientId = message.clientId;
        }
        return obj;
    },
    create(base) {
        return exports.QueryClientStateRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryClientStateRequest();
        message.clientId = object.clientId ?? "";
        return message;
    },
};
function createBaseQueryClientStateResponse() {
    return { clientState: undefined, proof: new Uint8Array(0), proofHeight: undefined };
}
exports.QueryClientStateResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clientState !== undefined) {
            any_1.Any.encode(message.clientState, writer.uint32(10).fork()).ldelim();
        }
        if (message.proof.length !== 0) {
            writer.uint32(18).bytes(message.proof);
        }
        if (message.proofHeight !== undefined) {
            client_1.Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClientStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.clientState = any_1.Any.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.proof = reader.bytes();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.proofHeight = client_1.Height.decode(reader, reader.uint32());
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
            clientState: isSet(object.clientState) ? any_1.Any.fromJSON(object.clientState) : undefined,
            proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(0),
            proofHeight: isSet(object.proofHeight) ? client_1.Height.fromJSON(object.proofHeight) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.clientState !== undefined) {
            obj.clientState = any_1.Any.toJSON(message.clientState);
        }
        if (message.proof.length !== 0) {
            obj.proof = base64FromBytes(message.proof);
        }
        if (message.proofHeight !== undefined) {
            obj.proofHeight = client_1.Height.toJSON(message.proofHeight);
        }
        return obj;
    },
    create(base) {
        return exports.QueryClientStateResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryClientStateResponse();
        message.clientState = (object.clientState !== undefined && object.clientState !== null)
            ? any_1.Any.fromPartial(object.clientState)
            : undefined;
        message.proof = object.proof ?? new Uint8Array(0);
        message.proofHeight = (object.proofHeight !== undefined && object.proofHeight !== null)
            ? client_1.Height.fromPartial(object.proofHeight)
            : undefined;
        return message;
    },
};
function createBaseQueryClientStatesRequest() {
    return { pagination: undefined };
}
exports.QueryClientStatesRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClientStatesRequest();
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
        return exports.QueryClientStatesRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryClientStatesRequest();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryClientStatesResponse() {
    return { clientStates: [], pagination: undefined };
}
exports.QueryClientStatesResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.clientStates) {
            client_1.IdentifiedClientState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClientStatesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.clientStates.push(client_1.IdentifiedClientState.decode(reader, reader.uint32()));
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
            clientStates: Array.isArray(object?.clientStates)
                ? object.clientStates.map((e) => client_1.IdentifiedClientState.fromJSON(e))
                : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.clientStates?.length) {
            obj.clientStates = message.clientStates.map((e) => client_1.IdentifiedClientState.toJSON(e));
        }
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageResponse.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.QueryClientStatesResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryClientStatesResponse();
        message.clientStates = object.clientStates?.map((e) => client_1.IdentifiedClientState.fromPartial(e)) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryConsensusStateRequest() {
    return { clientId: "", revisionNumber: 0, revisionHeight: 0, latestHeight: false };
}
exports.QueryConsensusStateRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        if (message.revisionNumber !== 0) {
            writer.uint32(16).uint64(message.revisionNumber);
        }
        if (message.revisionHeight !== 0) {
            writer.uint32(24).uint64(message.revisionHeight);
        }
        if (message.latestHeight === true) {
            writer.uint32(32).bool(message.latestHeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConsensusStateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.clientId = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.revisionNumber = longToNumber(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.revisionHeight = longToNumber(reader.uint64());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.latestHeight = reader.bool();
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
            clientId: isSet(object.clientId) ? String(object.clientId) : "",
            revisionNumber: isSet(object.revisionNumber) ? Number(object.revisionNumber) : 0,
            revisionHeight: isSet(object.revisionHeight) ? Number(object.revisionHeight) : 0,
            latestHeight: isSet(object.latestHeight) ? Boolean(object.latestHeight) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.clientId !== "") {
            obj.clientId = message.clientId;
        }
        if (message.revisionNumber !== 0) {
            obj.revisionNumber = Math.round(message.revisionNumber);
        }
        if (message.revisionHeight !== 0) {
            obj.revisionHeight = Math.round(message.revisionHeight);
        }
        if (message.latestHeight === true) {
            obj.latestHeight = message.latestHeight;
        }
        return obj;
    },
    create(base) {
        return exports.QueryConsensusStateRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryConsensusStateRequest();
        message.clientId = object.clientId ?? "";
        message.revisionNumber = object.revisionNumber ?? 0;
        message.revisionHeight = object.revisionHeight ?? 0;
        message.latestHeight = object.latestHeight ?? false;
        return message;
    },
};
function createBaseQueryConsensusStateResponse() {
    return { consensusState: undefined, proof: new Uint8Array(0), proofHeight: undefined };
}
exports.QueryConsensusStateResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.consensusState !== undefined) {
            any_1.Any.encode(message.consensusState, writer.uint32(10).fork()).ldelim();
        }
        if (message.proof.length !== 0) {
            writer.uint32(18).bytes(message.proof);
        }
        if (message.proofHeight !== undefined) {
            client_1.Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConsensusStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.consensusState = any_1.Any.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.proof = reader.bytes();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.proofHeight = client_1.Height.decode(reader, reader.uint32());
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
            consensusState: isSet(object.consensusState) ? any_1.Any.fromJSON(object.consensusState) : undefined,
            proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(0),
            proofHeight: isSet(object.proofHeight) ? client_1.Height.fromJSON(object.proofHeight) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.consensusState !== undefined) {
            obj.consensusState = any_1.Any.toJSON(message.consensusState);
        }
        if (message.proof.length !== 0) {
            obj.proof = base64FromBytes(message.proof);
        }
        if (message.proofHeight !== undefined) {
            obj.proofHeight = client_1.Height.toJSON(message.proofHeight);
        }
        return obj;
    },
    create(base) {
        return exports.QueryConsensusStateResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryConsensusStateResponse();
        message.consensusState = (object.consensusState !== undefined && object.consensusState !== null)
            ? any_1.Any.fromPartial(object.consensusState)
            : undefined;
        message.proof = object.proof ?? new Uint8Array(0);
        message.proofHeight = (object.proofHeight !== undefined && object.proofHeight !== null)
            ? client_1.Height.fromPartial(object.proofHeight)
            : undefined;
        return message;
    },
};
function createBaseQueryConsensusStatesRequest() {
    return { clientId: "", pagination: undefined };
}
exports.QueryConsensusStatesRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConsensusStatesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.clientId = reader.string();
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
            clientId: isSet(object.clientId) ? String(object.clientId) : "",
            pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.clientId !== "") {
            obj.clientId = message.clientId;
        }
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageRequest.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.QueryConsensusStatesRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryConsensusStatesRequest();
        message.clientId = object.clientId ?? "";
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryConsensusStatesResponse() {
    return { consensusStates: [], pagination: undefined };
}
exports.QueryConsensusStatesResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.consensusStates) {
            client_1.ConsensusStateWithHeight.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConsensusStatesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.consensusStates.push(client_1.ConsensusStateWithHeight.decode(reader, reader.uint32()));
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
            consensusStates: Array.isArray(object?.consensusStates)
                ? object.consensusStates.map((e) => client_1.ConsensusStateWithHeight.fromJSON(e))
                : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.consensusStates?.length) {
            obj.consensusStates = message.consensusStates.map((e) => client_1.ConsensusStateWithHeight.toJSON(e));
        }
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageResponse.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.QueryConsensusStatesResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryConsensusStatesResponse();
        message.consensusStates = object.consensusStates?.map((e) => client_1.ConsensusStateWithHeight.fromPartial(e)) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryConsensusStateHeightsRequest() {
    return { clientId: "", pagination: undefined };
}
exports.QueryConsensusStateHeightsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConsensusStateHeightsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.clientId = reader.string();
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
            clientId: isSet(object.clientId) ? String(object.clientId) : "",
            pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.clientId !== "") {
            obj.clientId = message.clientId;
        }
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageRequest.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.QueryConsensusStateHeightsRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryConsensusStateHeightsRequest();
        message.clientId = object.clientId ?? "";
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryConsensusStateHeightsResponse() {
    return { consensusStateHeights: [], pagination: undefined };
}
exports.QueryConsensusStateHeightsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.consensusStateHeights) {
            client_1.Height.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConsensusStateHeightsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.consensusStateHeights.push(client_1.Height.decode(reader, reader.uint32()));
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
            consensusStateHeights: Array.isArray(object?.consensusStateHeights)
                ? object.consensusStateHeights.map((e) => client_1.Height.fromJSON(e))
                : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.consensusStateHeights?.length) {
            obj.consensusStateHeights = message.consensusStateHeights.map((e) => client_1.Height.toJSON(e));
        }
        if (message.pagination !== undefined) {
            obj.pagination = pagination_1.PageResponse.toJSON(message.pagination);
        }
        return obj;
    },
    create(base) {
        return exports.QueryConsensusStateHeightsResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryConsensusStateHeightsResponse();
        message.consensusStateHeights = object.consensusStateHeights?.map((e) => client_1.Height.fromPartial(e)) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryClientStatusRequest() {
    return { clientId: "" };
}
exports.QueryClientStatusRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClientStatusRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.clientId = reader.string();
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
        return { clientId: isSet(object.clientId) ? String(object.clientId) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.clientId !== "") {
            obj.clientId = message.clientId;
        }
        return obj;
    },
    create(base) {
        return exports.QueryClientStatusRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryClientStatusRequest();
        message.clientId = object.clientId ?? "";
        return message;
    },
};
function createBaseQueryClientStatusResponse() {
    return { status: "" };
}
exports.QueryClientStatusResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.status !== "") {
            writer.uint32(10).string(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClientStatusResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.status = reader.string();
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
        return { status: isSet(object.status) ? String(object.status) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.status !== "") {
            obj.status = message.status;
        }
        return obj;
    },
    create(base) {
        return exports.QueryClientStatusResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryClientStatusResponse();
        message.status = object.status ?? "";
        return message;
    },
};
function createBaseQueryClientParamsRequest() {
    return {};
}
exports.QueryClientParamsRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClientParamsRequest();
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
        return exports.QueryClientParamsRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseQueryClientParamsRequest();
        return message;
    },
};
function createBaseQueryClientParamsResponse() {
    return { params: undefined };
}
exports.QueryClientParamsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.params !== undefined) {
            client_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClientParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.params = client_1.Params.decode(reader, reader.uint32());
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
        return { params: isSet(object.params) ? client_1.Params.fromJSON(object.params) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.params !== undefined) {
            obj.params = client_1.Params.toJSON(message.params);
        }
        return obj;
    },
    create(base) {
        return exports.QueryClientParamsResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryClientParamsResponse();
        message.params = (object.params !== undefined && object.params !== null)
            ? client_1.Params.fromPartial(object.params)
            : undefined;
        return message;
    },
};
function createBaseQueryUpgradedClientStateRequest() {
    return {};
}
exports.QueryUpgradedClientStateRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUpgradedClientStateRequest();
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
        return exports.QueryUpgradedClientStateRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseQueryUpgradedClientStateRequest();
        return message;
    },
};
function createBaseQueryUpgradedClientStateResponse() {
    return { upgradedClientState: undefined };
}
exports.QueryUpgradedClientStateResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.upgradedClientState !== undefined) {
            any_1.Any.encode(message.upgradedClientState, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUpgradedClientStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.upgradedClientState = any_1.Any.decode(reader, reader.uint32());
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
            upgradedClientState: isSet(object.upgradedClientState) ? any_1.Any.fromJSON(object.upgradedClientState) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.upgradedClientState !== undefined) {
            obj.upgradedClientState = any_1.Any.toJSON(message.upgradedClientState);
        }
        return obj;
    },
    create(base) {
        return exports.QueryUpgradedClientStateResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryUpgradedClientStateResponse();
        message.upgradedClientState = (object.upgradedClientState !== undefined && object.upgradedClientState !== null)
            ? any_1.Any.fromPartial(object.upgradedClientState)
            : undefined;
        return message;
    },
};
function createBaseQueryUpgradedConsensusStateRequest() {
    return {};
}
exports.QueryUpgradedConsensusStateRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUpgradedConsensusStateRequest();
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
        return exports.QueryUpgradedConsensusStateRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseQueryUpgradedConsensusStateRequest();
        return message;
    },
};
function createBaseQueryUpgradedConsensusStateResponse() {
    return { upgradedConsensusState: undefined };
}
exports.QueryUpgradedConsensusStateResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.upgradedConsensusState !== undefined) {
            any_1.Any.encode(message.upgradedConsensusState, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUpgradedConsensusStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.upgradedConsensusState = any_1.Any.decode(reader, reader.uint32());
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
            upgradedConsensusState: isSet(object.upgradedConsensusState)
                ? any_1.Any.fromJSON(object.upgradedConsensusState)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.upgradedConsensusState !== undefined) {
            obj.upgradedConsensusState = any_1.Any.toJSON(message.upgradedConsensusState);
        }
        return obj;
    },
    create(base) {
        return exports.QueryUpgradedConsensusStateResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryUpgradedConsensusStateResponse();
        message.upgradedConsensusState =
            (object.upgradedConsensusState !== undefined && object.upgradedConsensusState !== null)
                ? any_1.Any.fromPartial(object.upgradedConsensusState)
                : undefined;
        return message;
    },
};
exports.QueryServiceName = "ibc.core.client.v1.Query";
class QueryClientImpl {
    constructor(rpc, opts) {
        this.service = opts?.service || exports.QueryServiceName;
        this.rpc = rpc;
        this.ClientState = this.ClientState.bind(this);
        this.ClientStates = this.ClientStates.bind(this);
        this.ConsensusState = this.ConsensusState.bind(this);
        this.ConsensusStates = this.ConsensusStates.bind(this);
        this.ConsensusStateHeights = this.ConsensusStateHeights.bind(this);
        this.ClientStatus = this.ClientStatus.bind(this);
        this.ClientParams = this.ClientParams.bind(this);
        this.UpgradedClientState = this.UpgradedClientState.bind(this);
        this.UpgradedConsensusState = this.UpgradedConsensusState.bind(this);
    }
    ClientState(request) {
        const data = exports.QueryClientStateRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "ClientState", data);
        return promise.then((data) => exports.QueryClientStateResponse.decode(minimal_1.default.Reader.create(data)));
    }
    ClientStates(request) {
        const data = exports.QueryClientStatesRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "ClientStates", data);
        return promise.then((data) => exports.QueryClientStatesResponse.decode(minimal_1.default.Reader.create(data)));
    }
    ConsensusState(request) {
        const data = exports.QueryConsensusStateRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "ConsensusState", data);
        return promise.then((data) => exports.QueryConsensusStateResponse.decode(minimal_1.default.Reader.create(data)));
    }
    ConsensusStates(request) {
        const data = exports.QueryConsensusStatesRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "ConsensusStates", data);
        return promise.then((data) => exports.QueryConsensusStatesResponse.decode(minimal_1.default.Reader.create(data)));
    }
    ConsensusStateHeights(request) {
        const data = exports.QueryConsensusStateHeightsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "ConsensusStateHeights", data);
        return promise.then((data) => exports.QueryConsensusStateHeightsResponse.decode(minimal_1.default.Reader.create(data)));
    }
    ClientStatus(request) {
        const data = exports.QueryClientStatusRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "ClientStatus", data);
        return promise.then((data) => exports.QueryClientStatusResponse.decode(minimal_1.default.Reader.create(data)));
    }
    ClientParams(request) {
        const data = exports.QueryClientParamsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "ClientParams", data);
        return promise.then((data) => exports.QueryClientParamsResponse.decode(minimal_1.default.Reader.create(data)));
    }
    UpgradedClientState(request) {
        const data = exports.QueryUpgradedClientStateRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpgradedClientState", data);
        return promise.then((data) => exports.QueryUpgradedClientStateResponse.decode(minimal_1.default.Reader.create(data)));
    }
    UpgradedConsensusState(request) {
        const data = exports.QueryUpgradedConsensusStateRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpgradedConsensusState", data);
        return promise.then((data) => exports.QueryUpgradedConsensusStateResponse.decode(minimal_1.default.Reader.create(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
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
