"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entry = exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const nft_1 = require("./nft");
exports.protobufPackage = "cosmos.nft.v1beta1";
function createBaseGenesisState() {
    return { classes: [], entries: [] };
}
exports.GenesisState = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.classes) {
            nft_1.Class.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.entries) {
            exports.Entry.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.classes.push(nft_1.Class.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.entries.push(exports.Entry.decode(reader, reader.uint32()));
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
            classes: Array.isArray(object?.classes) ? object.classes.map((e) => nft_1.Class.fromJSON(e)) : [],
            entries: Array.isArray(object?.entries) ? object.entries.map((e) => exports.Entry.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.classes?.length) {
            obj.classes = message.classes.map((e) => nft_1.Class.toJSON(e));
        }
        if (message.entries?.length) {
            obj.entries = message.entries.map((e) => exports.Entry.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.GenesisState.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.classes = object.classes?.map((e) => nft_1.Class.fromPartial(e)) || [];
        message.entries = object.entries?.map((e) => exports.Entry.fromPartial(e)) || [];
        return message;
    },
};
function createBaseEntry() {
    return { owner: "", nfts: [] };
}
exports.Entry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        for (const v of message.nfts) {
            nft_1.NFT.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.owner = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.nfts.push(nft_1.NFT.decode(reader, reader.uint32()));
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
            owner: isSet(object.owner) ? String(object.owner) : "",
            nfts: Array.isArray(object?.nfts) ? object.nfts.map((e) => nft_1.NFT.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.owner !== "") {
            obj.owner = message.owner;
        }
        if (message.nfts?.length) {
            obj.nfts = message.nfts.map((e) => nft_1.NFT.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.Entry.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseEntry();
        message.owner = object.owner ?? "";
        message.nfts = object.nfts?.map((e) => nft_1.NFT.fromPartial(e)) || [];
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
