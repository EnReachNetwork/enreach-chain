"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidatorUpdate = exports.Validator = exports.TxResult = exports.ExecTxResult = exports.EventAttribute = exports.Event = exports.ExtendedCommitInfo = exports.CommitInfo = exports.ResponseFinalizeBlock = exports.ResponseVerifyVoteExtension = exports.ResponseExtendVote = exports.ResponseProcessProposal = exports.ResponsePrepareProposal = exports.ResponseApplySnapshotChunk = exports.ResponseLoadSnapshotChunk = exports.ResponseOfferSnapshot = exports.ResponseListSnapshots = exports.ResponseCommit = exports.ResponseCheckTx = exports.ResponseQuery = exports.ResponseInitChain = exports.ResponseInfo = exports.ResponseFlush = exports.ResponseEcho = exports.ResponseException = exports.Response = exports.RequestFinalizeBlock = exports.RequestVerifyVoteExtension = exports.RequestExtendVote = exports.RequestProcessProposal = exports.RequestPrepareProposal = exports.RequestApplySnapshotChunk = exports.RequestLoadSnapshotChunk = exports.RequestOfferSnapshot = exports.RequestListSnapshots = exports.RequestCommit = exports.RequestCheckTx = exports.RequestQuery = exports.RequestInitChain = exports.RequestInfo = exports.RequestFlush = exports.RequestEcho = exports.Request = exports.ResponseVerifyVoteExtension_VerifyStatus = exports.ResponseProcessProposal_ProposalStatus = exports.ResponseApplySnapshotChunk_Result = exports.ResponseOfferSnapshot_Result = exports.MisbehaviorType = exports.CheckTxType = exports.protobufPackage = void 0;
exports.ABCIClientImpl = exports.ABCIServiceName = exports.Snapshot = exports.Misbehavior = exports.ExtendedVoteInfo = exports.VoteInfo = void 0;
exports.checkTxTypeFromJSON = checkTxTypeFromJSON;
exports.checkTxTypeToJSON = checkTxTypeToJSON;
exports.misbehaviorTypeFromJSON = misbehaviorTypeFromJSON;
exports.misbehaviorTypeToJSON = misbehaviorTypeToJSON;
exports.responseOfferSnapshot_ResultFromJSON = responseOfferSnapshot_ResultFromJSON;
exports.responseOfferSnapshot_ResultToJSON = responseOfferSnapshot_ResultToJSON;
exports.responseApplySnapshotChunk_ResultFromJSON = responseApplySnapshotChunk_ResultFromJSON;
exports.responseApplySnapshotChunk_ResultToJSON = responseApplySnapshotChunk_ResultToJSON;
exports.responseProcessProposal_ProposalStatusFromJSON = responseProcessProposal_ProposalStatusFromJSON;
exports.responseProcessProposal_ProposalStatusToJSON = responseProcessProposal_ProposalStatusToJSON;
exports.responseVerifyVoteExtension_VerifyStatusFromJSON = responseVerifyVoteExtension_VerifyStatusFromJSON;
exports.responseVerifyVoteExtension_VerifyStatusToJSON = responseVerifyVoteExtension_VerifyStatusToJSON;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("../../google/protobuf/timestamp");
const keys_1 = require("../crypto/keys");
const proof_1 = require("../crypto/proof");
const params_1 = require("../types/params");
const validator_1 = require("../types/validator");
exports.protobufPackage = "tendermint.abci";
var CheckTxType;
(function (CheckTxType) {
    CheckTxType[CheckTxType["NEW"] = 0] = "NEW";
    CheckTxType[CheckTxType["RECHECK"] = 1] = "RECHECK";
    CheckTxType[CheckTxType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(CheckTxType || (exports.CheckTxType = CheckTxType = {}));
function checkTxTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "NEW":
            return CheckTxType.NEW;
        case 1:
        case "RECHECK":
            return CheckTxType.RECHECK;
        case -1:
        case "UNRECOGNIZED":
        default:
            return CheckTxType.UNRECOGNIZED;
    }
}
function checkTxTypeToJSON(object) {
    switch (object) {
        case CheckTxType.NEW:
            return "NEW";
        case CheckTxType.RECHECK:
            return "RECHECK";
        case CheckTxType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
var MisbehaviorType;
(function (MisbehaviorType) {
    MisbehaviorType[MisbehaviorType["UNKNOWN"] = 0] = "UNKNOWN";
    MisbehaviorType[MisbehaviorType["DUPLICATE_VOTE"] = 1] = "DUPLICATE_VOTE";
    MisbehaviorType[MisbehaviorType["LIGHT_CLIENT_ATTACK"] = 2] = "LIGHT_CLIENT_ATTACK";
    MisbehaviorType[MisbehaviorType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(MisbehaviorType || (exports.MisbehaviorType = MisbehaviorType = {}));
function misbehaviorTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN":
            return MisbehaviorType.UNKNOWN;
        case 1:
        case "DUPLICATE_VOTE":
            return MisbehaviorType.DUPLICATE_VOTE;
        case 2:
        case "LIGHT_CLIENT_ATTACK":
            return MisbehaviorType.LIGHT_CLIENT_ATTACK;
        case -1:
        case "UNRECOGNIZED":
        default:
            return MisbehaviorType.UNRECOGNIZED;
    }
}
function misbehaviorTypeToJSON(object) {
    switch (object) {
        case MisbehaviorType.UNKNOWN:
            return "UNKNOWN";
        case MisbehaviorType.DUPLICATE_VOTE:
            return "DUPLICATE_VOTE";
        case MisbehaviorType.LIGHT_CLIENT_ATTACK:
            return "LIGHT_CLIENT_ATTACK";
        case MisbehaviorType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
var ResponseOfferSnapshot_Result;
(function (ResponseOfferSnapshot_Result) {
    /** UNKNOWN - Unknown result, abort all snapshot restoration */
    ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["UNKNOWN"] = 0] = "UNKNOWN";
    /** ACCEPT - Snapshot accepted, apply chunks */
    ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["ACCEPT"] = 1] = "ACCEPT";
    /** ABORT - Abort all snapshot restoration */
    ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["ABORT"] = 2] = "ABORT";
    /** REJECT - Reject this specific snapshot, try others */
    ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["REJECT"] = 3] = "REJECT";
    /** REJECT_FORMAT - Reject all snapshots of this format, try others */
    ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["REJECT_FORMAT"] = 4] = "REJECT_FORMAT";
    /** REJECT_SENDER - Reject all snapshots from the sender(s), try others */
    ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["REJECT_SENDER"] = 5] = "REJECT_SENDER";
    ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ResponseOfferSnapshot_Result || (exports.ResponseOfferSnapshot_Result = ResponseOfferSnapshot_Result = {}));
function responseOfferSnapshot_ResultFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN":
            return ResponseOfferSnapshot_Result.UNKNOWN;
        case 1:
        case "ACCEPT":
            return ResponseOfferSnapshot_Result.ACCEPT;
        case 2:
        case "ABORT":
            return ResponseOfferSnapshot_Result.ABORT;
        case 3:
        case "REJECT":
            return ResponseOfferSnapshot_Result.REJECT;
        case 4:
        case "REJECT_FORMAT":
            return ResponseOfferSnapshot_Result.REJECT_FORMAT;
        case 5:
        case "REJECT_SENDER":
            return ResponseOfferSnapshot_Result.REJECT_SENDER;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ResponseOfferSnapshot_Result.UNRECOGNIZED;
    }
}
function responseOfferSnapshot_ResultToJSON(object) {
    switch (object) {
        case ResponseOfferSnapshot_Result.UNKNOWN:
            return "UNKNOWN";
        case ResponseOfferSnapshot_Result.ACCEPT:
            return "ACCEPT";
        case ResponseOfferSnapshot_Result.ABORT:
            return "ABORT";
        case ResponseOfferSnapshot_Result.REJECT:
            return "REJECT";
        case ResponseOfferSnapshot_Result.REJECT_FORMAT:
            return "REJECT_FORMAT";
        case ResponseOfferSnapshot_Result.REJECT_SENDER:
            return "REJECT_SENDER";
        case ResponseOfferSnapshot_Result.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
var ResponseApplySnapshotChunk_Result;
(function (ResponseApplySnapshotChunk_Result) {
    /** UNKNOWN - Unknown result, abort all snapshot restoration */
    ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["UNKNOWN"] = 0] = "UNKNOWN";
    /** ACCEPT - Chunk successfully accepted */
    ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["ACCEPT"] = 1] = "ACCEPT";
    /** ABORT - Abort all snapshot restoration */
    ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["ABORT"] = 2] = "ABORT";
    /** RETRY - Retry chunk (combine with refetch and reject) */
    ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["RETRY"] = 3] = "RETRY";
    /** RETRY_SNAPSHOT - Retry snapshot (combine with refetch and reject) */
    ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["RETRY_SNAPSHOT"] = 4] = "RETRY_SNAPSHOT";
    /** REJECT_SNAPSHOT - Reject this snapshot, try others */
    ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["REJECT_SNAPSHOT"] = 5] = "REJECT_SNAPSHOT";
    ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ResponseApplySnapshotChunk_Result || (exports.ResponseApplySnapshotChunk_Result = ResponseApplySnapshotChunk_Result = {}));
function responseApplySnapshotChunk_ResultFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN":
            return ResponseApplySnapshotChunk_Result.UNKNOWN;
        case 1:
        case "ACCEPT":
            return ResponseApplySnapshotChunk_Result.ACCEPT;
        case 2:
        case "ABORT":
            return ResponseApplySnapshotChunk_Result.ABORT;
        case 3:
        case "RETRY":
            return ResponseApplySnapshotChunk_Result.RETRY;
        case 4:
        case "RETRY_SNAPSHOT":
            return ResponseApplySnapshotChunk_Result.RETRY_SNAPSHOT;
        case 5:
        case "REJECT_SNAPSHOT":
            return ResponseApplySnapshotChunk_Result.REJECT_SNAPSHOT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ResponseApplySnapshotChunk_Result.UNRECOGNIZED;
    }
}
function responseApplySnapshotChunk_ResultToJSON(object) {
    switch (object) {
        case ResponseApplySnapshotChunk_Result.UNKNOWN:
            return "UNKNOWN";
        case ResponseApplySnapshotChunk_Result.ACCEPT:
            return "ACCEPT";
        case ResponseApplySnapshotChunk_Result.ABORT:
            return "ABORT";
        case ResponseApplySnapshotChunk_Result.RETRY:
            return "RETRY";
        case ResponseApplySnapshotChunk_Result.RETRY_SNAPSHOT:
            return "RETRY_SNAPSHOT";
        case ResponseApplySnapshotChunk_Result.REJECT_SNAPSHOT:
            return "REJECT_SNAPSHOT";
        case ResponseApplySnapshotChunk_Result.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
var ResponseProcessProposal_ProposalStatus;
(function (ResponseProcessProposal_ProposalStatus) {
    ResponseProcessProposal_ProposalStatus[ResponseProcessProposal_ProposalStatus["UNKNOWN"] = 0] = "UNKNOWN";
    ResponseProcessProposal_ProposalStatus[ResponseProcessProposal_ProposalStatus["ACCEPT"] = 1] = "ACCEPT";
    ResponseProcessProposal_ProposalStatus[ResponseProcessProposal_ProposalStatus["REJECT"] = 2] = "REJECT";
    ResponseProcessProposal_ProposalStatus[ResponseProcessProposal_ProposalStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ResponseProcessProposal_ProposalStatus || (exports.ResponseProcessProposal_ProposalStatus = ResponseProcessProposal_ProposalStatus = {}));
function responseProcessProposal_ProposalStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN":
            return ResponseProcessProposal_ProposalStatus.UNKNOWN;
        case 1:
        case "ACCEPT":
            return ResponseProcessProposal_ProposalStatus.ACCEPT;
        case 2:
        case "REJECT":
            return ResponseProcessProposal_ProposalStatus.REJECT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ResponseProcessProposal_ProposalStatus.UNRECOGNIZED;
    }
}
function responseProcessProposal_ProposalStatusToJSON(object) {
    switch (object) {
        case ResponseProcessProposal_ProposalStatus.UNKNOWN:
            return "UNKNOWN";
        case ResponseProcessProposal_ProposalStatus.ACCEPT:
            return "ACCEPT";
        case ResponseProcessProposal_ProposalStatus.REJECT:
            return "REJECT";
        case ResponseProcessProposal_ProposalStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
var ResponseVerifyVoteExtension_VerifyStatus;
(function (ResponseVerifyVoteExtension_VerifyStatus) {
    ResponseVerifyVoteExtension_VerifyStatus[ResponseVerifyVoteExtension_VerifyStatus["UNKNOWN"] = 0] = "UNKNOWN";
    ResponseVerifyVoteExtension_VerifyStatus[ResponseVerifyVoteExtension_VerifyStatus["ACCEPT"] = 1] = "ACCEPT";
    /**
     * REJECT - Rejecting the vote extension will reject the entire precommit by the sender.
     * Incorrectly implementing this thus has liveness implications as it may affect
     * CometBFT's ability to receive 2/3+ valid votes to finalize the block.
     * Honest nodes should never be rejected.
     */
    ResponseVerifyVoteExtension_VerifyStatus[ResponseVerifyVoteExtension_VerifyStatus["REJECT"] = 2] = "REJECT";
    ResponseVerifyVoteExtension_VerifyStatus[ResponseVerifyVoteExtension_VerifyStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ResponseVerifyVoteExtension_VerifyStatus || (exports.ResponseVerifyVoteExtension_VerifyStatus = ResponseVerifyVoteExtension_VerifyStatus = {}));
function responseVerifyVoteExtension_VerifyStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN":
            return ResponseVerifyVoteExtension_VerifyStatus.UNKNOWN;
        case 1:
        case "ACCEPT":
            return ResponseVerifyVoteExtension_VerifyStatus.ACCEPT;
        case 2:
        case "REJECT":
            return ResponseVerifyVoteExtension_VerifyStatus.REJECT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ResponseVerifyVoteExtension_VerifyStatus.UNRECOGNIZED;
    }
}
function responseVerifyVoteExtension_VerifyStatusToJSON(object) {
    switch (object) {
        case ResponseVerifyVoteExtension_VerifyStatus.UNKNOWN:
            return "UNKNOWN";
        case ResponseVerifyVoteExtension_VerifyStatus.ACCEPT:
            return "ACCEPT";
        case ResponseVerifyVoteExtension_VerifyStatus.REJECT:
            return "REJECT";
        case ResponseVerifyVoteExtension_VerifyStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseRequest() {
    return {
        echo: undefined,
        flush: undefined,
        info: undefined,
        initChain: undefined,
        query: undefined,
        checkTx: undefined,
        commit: undefined,
        listSnapshots: undefined,
        offerSnapshot: undefined,
        loadSnapshotChunk: undefined,
        applySnapshotChunk: undefined,
        prepareProposal: undefined,
        processProposal: undefined,
        extendVote: undefined,
        verifyVoteExtension: undefined,
        finalizeBlock: undefined,
    };
}
exports.Request = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.echo !== undefined) {
            exports.RequestEcho.encode(message.echo, writer.uint32(10).fork()).ldelim();
        }
        if (message.flush !== undefined) {
            exports.RequestFlush.encode(message.flush, writer.uint32(18).fork()).ldelim();
        }
        if (message.info !== undefined) {
            exports.RequestInfo.encode(message.info, writer.uint32(26).fork()).ldelim();
        }
        if (message.initChain !== undefined) {
            exports.RequestInitChain.encode(message.initChain, writer.uint32(42).fork()).ldelim();
        }
        if (message.query !== undefined) {
            exports.RequestQuery.encode(message.query, writer.uint32(50).fork()).ldelim();
        }
        if (message.checkTx !== undefined) {
            exports.RequestCheckTx.encode(message.checkTx, writer.uint32(66).fork()).ldelim();
        }
        if (message.commit !== undefined) {
            exports.RequestCommit.encode(message.commit, writer.uint32(90).fork()).ldelim();
        }
        if (message.listSnapshots !== undefined) {
            exports.RequestListSnapshots.encode(message.listSnapshots, writer.uint32(98).fork()).ldelim();
        }
        if (message.offerSnapshot !== undefined) {
            exports.RequestOfferSnapshot.encode(message.offerSnapshot, writer.uint32(106).fork()).ldelim();
        }
        if (message.loadSnapshotChunk !== undefined) {
            exports.RequestLoadSnapshotChunk.encode(message.loadSnapshotChunk, writer.uint32(114).fork()).ldelim();
        }
        if (message.applySnapshotChunk !== undefined) {
            exports.RequestApplySnapshotChunk.encode(message.applySnapshotChunk, writer.uint32(122).fork()).ldelim();
        }
        if (message.prepareProposal !== undefined) {
            exports.RequestPrepareProposal.encode(message.prepareProposal, writer.uint32(130).fork()).ldelim();
        }
        if (message.processProposal !== undefined) {
            exports.RequestProcessProposal.encode(message.processProposal, writer.uint32(138).fork()).ldelim();
        }
        if (message.extendVote !== undefined) {
            exports.RequestExtendVote.encode(message.extendVote, writer.uint32(146).fork()).ldelim();
        }
        if (message.verifyVoteExtension !== undefined) {
            exports.RequestVerifyVoteExtension.encode(message.verifyVoteExtension, writer.uint32(154).fork()).ldelim();
        }
        if (message.finalizeBlock !== undefined) {
            exports.RequestFinalizeBlock.encode(message.finalizeBlock, writer.uint32(162).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.echo = exports.RequestEcho.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.flush = exports.RequestFlush.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.info = exports.RequestInfo.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.initChain = exports.RequestInitChain.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.query = exports.RequestQuery.decode(reader, reader.uint32());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.checkTx = exports.RequestCheckTx.decode(reader, reader.uint32());
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.commit = exports.RequestCommit.decode(reader, reader.uint32());
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.listSnapshots = exports.RequestListSnapshots.decode(reader, reader.uint32());
                    continue;
                case 13:
                    if (tag !== 106) {
                        break;
                    }
                    message.offerSnapshot = exports.RequestOfferSnapshot.decode(reader, reader.uint32());
                    continue;
                case 14:
                    if (tag !== 114) {
                        break;
                    }
                    message.loadSnapshotChunk = exports.RequestLoadSnapshotChunk.decode(reader, reader.uint32());
                    continue;
                case 15:
                    if (tag !== 122) {
                        break;
                    }
                    message.applySnapshotChunk = exports.RequestApplySnapshotChunk.decode(reader, reader.uint32());
                    continue;
                case 16:
                    if (tag !== 130) {
                        break;
                    }
                    message.prepareProposal = exports.RequestPrepareProposal.decode(reader, reader.uint32());
                    continue;
                case 17:
                    if (tag !== 138) {
                        break;
                    }
                    message.processProposal = exports.RequestProcessProposal.decode(reader, reader.uint32());
                    continue;
                case 18:
                    if (tag !== 146) {
                        break;
                    }
                    message.extendVote = exports.RequestExtendVote.decode(reader, reader.uint32());
                    continue;
                case 19:
                    if (tag !== 154) {
                        break;
                    }
                    message.verifyVoteExtension = exports.RequestVerifyVoteExtension.decode(reader, reader.uint32());
                    continue;
                case 20:
                    if (tag !== 162) {
                        break;
                    }
                    message.finalizeBlock = exports.RequestFinalizeBlock.decode(reader, reader.uint32());
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
            echo: isSet(object.echo) ? exports.RequestEcho.fromJSON(object.echo) : undefined,
            flush: isSet(object.flush) ? exports.RequestFlush.fromJSON(object.flush) : undefined,
            info: isSet(object.info) ? exports.RequestInfo.fromJSON(object.info) : undefined,
            initChain: isSet(object.initChain) ? exports.RequestInitChain.fromJSON(object.initChain) : undefined,
            query: isSet(object.query) ? exports.RequestQuery.fromJSON(object.query) : undefined,
            checkTx: isSet(object.checkTx) ? exports.RequestCheckTx.fromJSON(object.checkTx) : undefined,
            commit: isSet(object.commit) ? exports.RequestCommit.fromJSON(object.commit) : undefined,
            listSnapshots: isSet(object.listSnapshots) ? exports.RequestListSnapshots.fromJSON(object.listSnapshots) : undefined,
            offerSnapshot: isSet(object.offerSnapshot) ? exports.RequestOfferSnapshot.fromJSON(object.offerSnapshot) : undefined,
            loadSnapshotChunk: isSet(object.loadSnapshotChunk)
                ? exports.RequestLoadSnapshotChunk.fromJSON(object.loadSnapshotChunk)
                : undefined,
            applySnapshotChunk: isSet(object.applySnapshotChunk)
                ? exports.RequestApplySnapshotChunk.fromJSON(object.applySnapshotChunk)
                : undefined,
            prepareProposal: isSet(object.prepareProposal)
                ? exports.RequestPrepareProposal.fromJSON(object.prepareProposal)
                : undefined,
            processProposal: isSet(object.processProposal)
                ? exports.RequestProcessProposal.fromJSON(object.processProposal)
                : undefined,
            extendVote: isSet(object.extendVote) ? exports.RequestExtendVote.fromJSON(object.extendVote) : undefined,
            verifyVoteExtension: isSet(object.verifyVoteExtension)
                ? exports.RequestVerifyVoteExtension.fromJSON(object.verifyVoteExtension)
                : undefined,
            finalizeBlock: isSet(object.finalizeBlock) ? exports.RequestFinalizeBlock.fromJSON(object.finalizeBlock) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.echo !== undefined) {
            obj.echo = exports.RequestEcho.toJSON(message.echo);
        }
        if (message.flush !== undefined) {
            obj.flush = exports.RequestFlush.toJSON(message.flush);
        }
        if (message.info !== undefined) {
            obj.info = exports.RequestInfo.toJSON(message.info);
        }
        if (message.initChain !== undefined) {
            obj.initChain = exports.RequestInitChain.toJSON(message.initChain);
        }
        if (message.query !== undefined) {
            obj.query = exports.RequestQuery.toJSON(message.query);
        }
        if (message.checkTx !== undefined) {
            obj.checkTx = exports.RequestCheckTx.toJSON(message.checkTx);
        }
        if (message.commit !== undefined) {
            obj.commit = exports.RequestCommit.toJSON(message.commit);
        }
        if (message.listSnapshots !== undefined) {
            obj.listSnapshots = exports.RequestListSnapshots.toJSON(message.listSnapshots);
        }
        if (message.offerSnapshot !== undefined) {
            obj.offerSnapshot = exports.RequestOfferSnapshot.toJSON(message.offerSnapshot);
        }
        if (message.loadSnapshotChunk !== undefined) {
            obj.loadSnapshotChunk = exports.RequestLoadSnapshotChunk.toJSON(message.loadSnapshotChunk);
        }
        if (message.applySnapshotChunk !== undefined) {
            obj.applySnapshotChunk = exports.RequestApplySnapshotChunk.toJSON(message.applySnapshotChunk);
        }
        if (message.prepareProposal !== undefined) {
            obj.prepareProposal = exports.RequestPrepareProposal.toJSON(message.prepareProposal);
        }
        if (message.processProposal !== undefined) {
            obj.processProposal = exports.RequestProcessProposal.toJSON(message.processProposal);
        }
        if (message.extendVote !== undefined) {
            obj.extendVote = exports.RequestExtendVote.toJSON(message.extendVote);
        }
        if (message.verifyVoteExtension !== undefined) {
            obj.verifyVoteExtension = exports.RequestVerifyVoteExtension.toJSON(message.verifyVoteExtension);
        }
        if (message.finalizeBlock !== undefined) {
            obj.finalizeBlock = exports.RequestFinalizeBlock.toJSON(message.finalizeBlock);
        }
        return obj;
    },
    create(base) {
        return exports.Request.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRequest();
        message.echo = (object.echo !== undefined && object.echo !== null)
            ? exports.RequestEcho.fromPartial(object.echo)
            : undefined;
        message.flush = (object.flush !== undefined && object.flush !== null)
            ? exports.RequestFlush.fromPartial(object.flush)
            : undefined;
        message.info = (object.info !== undefined && object.info !== null)
            ? exports.RequestInfo.fromPartial(object.info)
            : undefined;
        message.initChain = (object.initChain !== undefined && object.initChain !== null)
            ? exports.RequestInitChain.fromPartial(object.initChain)
            : undefined;
        message.query = (object.query !== undefined && object.query !== null)
            ? exports.RequestQuery.fromPartial(object.query)
            : undefined;
        message.checkTx = (object.checkTx !== undefined && object.checkTx !== null)
            ? exports.RequestCheckTx.fromPartial(object.checkTx)
            : undefined;
        message.commit = (object.commit !== undefined && object.commit !== null)
            ? exports.RequestCommit.fromPartial(object.commit)
            : undefined;
        message.listSnapshots = (object.listSnapshots !== undefined && object.listSnapshots !== null)
            ? exports.RequestListSnapshots.fromPartial(object.listSnapshots)
            : undefined;
        message.offerSnapshot = (object.offerSnapshot !== undefined && object.offerSnapshot !== null)
            ? exports.RequestOfferSnapshot.fromPartial(object.offerSnapshot)
            : undefined;
        message.loadSnapshotChunk = (object.loadSnapshotChunk !== undefined && object.loadSnapshotChunk !== null)
            ? exports.RequestLoadSnapshotChunk.fromPartial(object.loadSnapshotChunk)
            : undefined;
        message.applySnapshotChunk = (object.applySnapshotChunk !== undefined && object.applySnapshotChunk !== null)
            ? exports.RequestApplySnapshotChunk.fromPartial(object.applySnapshotChunk)
            : undefined;
        message.prepareProposal = (object.prepareProposal !== undefined && object.prepareProposal !== null)
            ? exports.RequestPrepareProposal.fromPartial(object.prepareProposal)
            : undefined;
        message.processProposal = (object.processProposal !== undefined && object.processProposal !== null)
            ? exports.RequestProcessProposal.fromPartial(object.processProposal)
            : undefined;
        message.extendVote = (object.extendVote !== undefined && object.extendVote !== null)
            ? exports.RequestExtendVote.fromPartial(object.extendVote)
            : undefined;
        message.verifyVoteExtension = (object.verifyVoteExtension !== undefined && object.verifyVoteExtension !== null)
            ? exports.RequestVerifyVoteExtension.fromPartial(object.verifyVoteExtension)
            : undefined;
        message.finalizeBlock = (object.finalizeBlock !== undefined && object.finalizeBlock !== null)
            ? exports.RequestFinalizeBlock.fromPartial(object.finalizeBlock)
            : undefined;
        return message;
    },
};
function createBaseRequestEcho() {
    return { message: "" };
}
exports.RequestEcho = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.message !== "") {
            writer.uint32(10).string(message.message);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestEcho();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.message = reader.string();
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
        return { message: isSet(object.message) ? String(object.message) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.message !== "") {
            obj.message = message.message;
        }
        return obj;
    },
    create(base) {
        return exports.RequestEcho.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRequestEcho();
        message.message = object.message ?? "";
        return message;
    },
};
function createBaseRequestFlush() {
    return {};
}
exports.RequestFlush = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestFlush();
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
        return exports.RequestFlush.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseRequestFlush();
        return message;
    },
};
function createBaseRequestInfo() {
    return { version: "", blockVersion: 0, p2pVersion: 0, abciVersion: "" };
}
exports.RequestInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.version !== "") {
            writer.uint32(10).string(message.version);
        }
        if (message.blockVersion !== 0) {
            writer.uint32(16).uint64(message.blockVersion);
        }
        if (message.p2pVersion !== 0) {
            writer.uint32(24).uint64(message.p2pVersion);
        }
        if (message.abciVersion !== "") {
            writer.uint32(34).string(message.abciVersion);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.version = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.blockVersion = longToNumber(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.p2pVersion = longToNumber(reader.uint64());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.abciVersion = reader.string();
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
            version: isSet(object.version) ? String(object.version) : "",
            blockVersion: isSet(object.blockVersion) ? Number(object.blockVersion) : 0,
            p2pVersion: isSet(object.p2pVersion) ? Number(object.p2pVersion) : 0,
            abciVersion: isSet(object.abciVersion) ? String(object.abciVersion) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.version !== "") {
            obj.version = message.version;
        }
        if (message.blockVersion !== 0) {
            obj.blockVersion = Math.round(message.blockVersion);
        }
        if (message.p2pVersion !== 0) {
            obj.p2pVersion = Math.round(message.p2pVersion);
        }
        if (message.abciVersion !== "") {
            obj.abciVersion = message.abciVersion;
        }
        return obj;
    },
    create(base) {
        return exports.RequestInfo.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRequestInfo();
        message.version = object.version ?? "";
        message.blockVersion = object.blockVersion ?? 0;
        message.p2pVersion = object.p2pVersion ?? 0;
        message.abciVersion = object.abciVersion ?? "";
        return message;
    },
};
function createBaseRequestInitChain() {
    return {
        time: undefined,
        chainId: "",
        consensusParams: undefined,
        validators: [],
        appStateBytes: new Uint8Array(0),
        initialHeight: 0,
    };
}
exports.RequestInitChain = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.time), writer.uint32(10).fork()).ldelim();
        }
        if (message.chainId !== "") {
            writer.uint32(18).string(message.chainId);
        }
        if (message.consensusParams !== undefined) {
            params_1.ConsensusParams.encode(message.consensusParams, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.validators) {
            exports.ValidatorUpdate.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.appStateBytes.length !== 0) {
            writer.uint32(42).bytes(message.appStateBytes);
        }
        if (message.initialHeight !== 0) {
            writer.uint32(48).int64(message.initialHeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestInitChain();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.time = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.chainId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.consensusParams = params_1.ConsensusParams.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.validators.push(exports.ValidatorUpdate.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.appStateBytes = reader.bytes();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.initialHeight = longToNumber(reader.int64());
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
            time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
            chainId: isSet(object.chainId) ? String(object.chainId) : "",
            consensusParams: isSet(object.consensusParams) ? params_1.ConsensusParams.fromJSON(object.consensusParams) : undefined,
            validators: Array.isArray(object?.validators)
                ? object.validators.map((e) => exports.ValidatorUpdate.fromJSON(e))
                : [],
            appStateBytes: isSet(object.appStateBytes) ? bytesFromBase64(object.appStateBytes) : new Uint8Array(0),
            initialHeight: isSet(object.initialHeight) ? Number(object.initialHeight) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.time !== undefined) {
            obj.time = message.time.toISOString();
        }
        if (message.chainId !== "") {
            obj.chainId = message.chainId;
        }
        if (message.consensusParams !== undefined) {
            obj.consensusParams = params_1.ConsensusParams.toJSON(message.consensusParams);
        }
        if (message.validators?.length) {
            obj.validators = message.validators.map((e) => exports.ValidatorUpdate.toJSON(e));
        }
        if (message.appStateBytes.length !== 0) {
            obj.appStateBytes = base64FromBytes(message.appStateBytes);
        }
        if (message.initialHeight !== 0) {
            obj.initialHeight = Math.round(message.initialHeight);
        }
        return obj;
    },
    create(base) {
        return exports.RequestInitChain.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRequestInitChain();
        message.time = object.time ?? undefined;
        message.chainId = object.chainId ?? "";
        message.consensusParams = (object.consensusParams !== undefined && object.consensusParams !== null)
            ? params_1.ConsensusParams.fromPartial(object.consensusParams)
            : undefined;
        message.validators = object.validators?.map((e) => exports.ValidatorUpdate.fromPartial(e)) || [];
        message.appStateBytes = object.appStateBytes ?? new Uint8Array(0);
        message.initialHeight = object.initialHeight ?? 0;
        return message;
    },
};
function createBaseRequestQuery() {
    return { data: new Uint8Array(0), path: "", height: 0, prove: false };
}
exports.RequestQuery = {
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
        const message = createBaseRequestQuery();
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
        return exports.RequestQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRequestQuery();
        message.data = object.data ?? new Uint8Array(0);
        message.path = object.path ?? "";
        message.height = object.height ?? 0;
        message.prove = object.prove ?? false;
        return message;
    },
};
function createBaseRequestCheckTx() {
    return { tx: new Uint8Array(0), type: 0 };
}
exports.RequestCheckTx = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.tx.length !== 0) {
            writer.uint32(10).bytes(message.tx);
        }
        if (message.type !== 0) {
            writer.uint32(16).int32(message.type);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestCheckTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.tx = reader.bytes();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.type = reader.int32();
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
            tx: isSet(object.tx) ? bytesFromBase64(object.tx) : new Uint8Array(0),
            type: isSet(object.type) ? checkTxTypeFromJSON(object.type) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.tx.length !== 0) {
            obj.tx = base64FromBytes(message.tx);
        }
        if (message.type !== 0) {
            obj.type = checkTxTypeToJSON(message.type);
        }
        return obj;
    },
    create(base) {
        return exports.RequestCheckTx.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRequestCheckTx();
        message.tx = object.tx ?? new Uint8Array(0);
        message.type = object.type ?? 0;
        return message;
    },
};
function createBaseRequestCommit() {
    return {};
}
exports.RequestCommit = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestCommit();
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
        return exports.RequestCommit.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseRequestCommit();
        return message;
    },
};
function createBaseRequestListSnapshots() {
    return {};
}
exports.RequestListSnapshots = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestListSnapshots();
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
        return exports.RequestListSnapshots.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseRequestListSnapshots();
        return message;
    },
};
function createBaseRequestOfferSnapshot() {
    return { snapshot: undefined, appHash: new Uint8Array(0) };
}
exports.RequestOfferSnapshot = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.snapshot !== undefined) {
            exports.Snapshot.encode(message.snapshot, writer.uint32(10).fork()).ldelim();
        }
        if (message.appHash.length !== 0) {
            writer.uint32(18).bytes(message.appHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestOfferSnapshot();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.snapshot = exports.Snapshot.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.appHash = reader.bytes();
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
            snapshot: isSet(object.snapshot) ? exports.Snapshot.fromJSON(object.snapshot) : undefined,
            appHash: isSet(object.appHash) ? bytesFromBase64(object.appHash) : new Uint8Array(0),
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.snapshot !== undefined) {
            obj.snapshot = exports.Snapshot.toJSON(message.snapshot);
        }
        if (message.appHash.length !== 0) {
            obj.appHash = base64FromBytes(message.appHash);
        }
        return obj;
    },
    create(base) {
        return exports.RequestOfferSnapshot.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRequestOfferSnapshot();
        message.snapshot = (object.snapshot !== undefined && object.snapshot !== null)
            ? exports.Snapshot.fromPartial(object.snapshot)
            : undefined;
        message.appHash = object.appHash ?? new Uint8Array(0);
        return message;
    },
};
function createBaseRequestLoadSnapshotChunk() {
    return { height: 0, format: 0, chunk: 0 };
}
exports.RequestLoadSnapshotChunk = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.height !== 0) {
            writer.uint32(8).uint64(message.height);
        }
        if (message.format !== 0) {
            writer.uint32(16).uint32(message.format);
        }
        if (message.chunk !== 0) {
            writer.uint32(24).uint32(message.chunk);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestLoadSnapshotChunk();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.height = longToNumber(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.format = reader.uint32();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.chunk = reader.uint32();
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
            format: isSet(object.format) ? Number(object.format) : 0,
            chunk: isSet(object.chunk) ? Number(object.chunk) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.height !== 0) {
            obj.height = Math.round(message.height);
        }
        if (message.format !== 0) {
            obj.format = Math.round(message.format);
        }
        if (message.chunk !== 0) {
            obj.chunk = Math.round(message.chunk);
        }
        return obj;
    },
    create(base) {
        return exports.RequestLoadSnapshotChunk.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRequestLoadSnapshotChunk();
        message.height = object.height ?? 0;
        message.format = object.format ?? 0;
        message.chunk = object.chunk ?? 0;
        return message;
    },
};
function createBaseRequestApplySnapshotChunk() {
    return { index: 0, chunk: new Uint8Array(0), sender: "" };
}
exports.RequestApplySnapshotChunk = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.index !== 0) {
            writer.uint32(8).uint32(message.index);
        }
        if (message.chunk.length !== 0) {
            writer.uint32(18).bytes(message.chunk);
        }
        if (message.sender !== "") {
            writer.uint32(26).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestApplySnapshotChunk();
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
                    message.chunk = reader.bytes();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.sender = reader.string();
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
            chunk: isSet(object.chunk) ? bytesFromBase64(object.chunk) : new Uint8Array(0),
            sender: isSet(object.sender) ? String(object.sender) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.index !== 0) {
            obj.index = Math.round(message.index);
        }
        if (message.chunk.length !== 0) {
            obj.chunk = base64FromBytes(message.chunk);
        }
        if (message.sender !== "") {
            obj.sender = message.sender;
        }
        return obj;
    },
    create(base) {
        return exports.RequestApplySnapshotChunk.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRequestApplySnapshotChunk();
        message.index = object.index ?? 0;
        message.chunk = object.chunk ?? new Uint8Array(0);
        message.sender = object.sender ?? "";
        return message;
    },
};
function createBaseRequestPrepareProposal() {
    return {
        maxTxBytes: 0,
        txs: [],
        localLastCommit: undefined,
        misbehavior: [],
        height: 0,
        time: undefined,
        nextValidatorsHash: new Uint8Array(0),
        proposerAddress: new Uint8Array(0),
    };
}
exports.RequestPrepareProposal = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.maxTxBytes !== 0) {
            writer.uint32(8).int64(message.maxTxBytes);
        }
        for (const v of message.txs) {
            writer.uint32(18).bytes(v);
        }
        if (message.localLastCommit !== undefined) {
            exports.ExtendedCommitInfo.encode(message.localLastCommit, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.misbehavior) {
            exports.Misbehavior.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.height !== 0) {
            writer.uint32(40).int64(message.height);
        }
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.time), writer.uint32(50).fork()).ldelim();
        }
        if (message.nextValidatorsHash.length !== 0) {
            writer.uint32(58).bytes(message.nextValidatorsHash);
        }
        if (message.proposerAddress.length !== 0) {
            writer.uint32(66).bytes(message.proposerAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestPrepareProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.maxTxBytes = longToNumber(reader.int64());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.txs.push(reader.bytes());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.localLastCommit = exports.ExtendedCommitInfo.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.misbehavior.push(exports.Misbehavior.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.height = longToNumber(reader.int64());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.time = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.nextValidatorsHash = reader.bytes();
                    continue;
                case 8:
                    if (tag !== 66) {
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
            maxTxBytes: isSet(object.maxTxBytes) ? Number(object.maxTxBytes) : 0,
            txs: Array.isArray(object?.txs) ? object.txs.map((e) => bytesFromBase64(e)) : [],
            localLastCommit: isSet(object.localLastCommit) ? exports.ExtendedCommitInfo.fromJSON(object.localLastCommit) : undefined,
            misbehavior: Array.isArray(object?.misbehavior)
                ? object.misbehavior.map((e) => exports.Misbehavior.fromJSON(e))
                : [],
            height: isSet(object.height) ? Number(object.height) : 0,
            time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
            nextValidatorsHash: isSet(object.nextValidatorsHash)
                ? bytesFromBase64(object.nextValidatorsHash)
                : new Uint8Array(0),
            proposerAddress: isSet(object.proposerAddress) ? bytesFromBase64(object.proposerAddress) : new Uint8Array(0),
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.maxTxBytes !== 0) {
            obj.maxTxBytes = Math.round(message.maxTxBytes);
        }
        if (message.txs?.length) {
            obj.txs = message.txs.map((e) => base64FromBytes(e));
        }
        if (message.localLastCommit !== undefined) {
            obj.localLastCommit = exports.ExtendedCommitInfo.toJSON(message.localLastCommit);
        }
        if (message.misbehavior?.length) {
            obj.misbehavior = message.misbehavior.map((e) => exports.Misbehavior.toJSON(e));
        }
        if (message.height !== 0) {
            obj.height = Math.round(message.height);
        }
        if (message.time !== undefined) {
            obj.time = message.time.toISOString();
        }
        if (message.nextValidatorsHash.length !== 0) {
            obj.nextValidatorsHash = base64FromBytes(message.nextValidatorsHash);
        }
        if (message.proposerAddress.length !== 0) {
            obj.proposerAddress = base64FromBytes(message.proposerAddress);
        }
        return obj;
    },
    create(base) {
        return exports.RequestPrepareProposal.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRequestPrepareProposal();
        message.maxTxBytes = object.maxTxBytes ?? 0;
        message.txs = object.txs?.map((e) => e) || [];
        message.localLastCommit = (object.localLastCommit !== undefined && object.localLastCommit !== null)
            ? exports.ExtendedCommitInfo.fromPartial(object.localLastCommit)
            : undefined;
        message.misbehavior = object.misbehavior?.map((e) => exports.Misbehavior.fromPartial(e)) || [];
        message.height = object.height ?? 0;
        message.time = object.time ?? undefined;
        message.nextValidatorsHash = object.nextValidatorsHash ?? new Uint8Array(0);
        message.proposerAddress = object.proposerAddress ?? new Uint8Array(0);
        return message;
    },
};
function createBaseRequestProcessProposal() {
    return {
        txs: [],
        proposedLastCommit: undefined,
        misbehavior: [],
        hash: new Uint8Array(0),
        height: 0,
        time: undefined,
        nextValidatorsHash: new Uint8Array(0),
        proposerAddress: new Uint8Array(0),
    };
}
exports.RequestProcessProposal = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.txs) {
            writer.uint32(10).bytes(v);
        }
        if (message.proposedLastCommit !== undefined) {
            exports.CommitInfo.encode(message.proposedLastCommit, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.misbehavior) {
            exports.Misbehavior.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.hash.length !== 0) {
            writer.uint32(34).bytes(message.hash);
        }
        if (message.height !== 0) {
            writer.uint32(40).int64(message.height);
        }
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.time), writer.uint32(50).fork()).ldelim();
        }
        if (message.nextValidatorsHash.length !== 0) {
            writer.uint32(58).bytes(message.nextValidatorsHash);
        }
        if (message.proposerAddress.length !== 0) {
            writer.uint32(66).bytes(message.proposerAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestProcessProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.txs.push(reader.bytes());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.proposedLastCommit = exports.CommitInfo.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.misbehavior.push(exports.Misbehavior.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.hash = reader.bytes();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.height = longToNumber(reader.int64());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.time = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.nextValidatorsHash = reader.bytes();
                    continue;
                case 8:
                    if (tag !== 66) {
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
            txs: Array.isArray(object?.txs) ? object.txs.map((e) => bytesFromBase64(e)) : [],
            proposedLastCommit: isSet(object.proposedLastCommit) ? exports.CommitInfo.fromJSON(object.proposedLastCommit) : undefined,
            misbehavior: Array.isArray(object?.misbehavior)
                ? object.misbehavior.map((e) => exports.Misbehavior.fromJSON(e))
                : [],
            hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array(0),
            height: isSet(object.height) ? Number(object.height) : 0,
            time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
            nextValidatorsHash: isSet(object.nextValidatorsHash)
                ? bytesFromBase64(object.nextValidatorsHash)
                : new Uint8Array(0),
            proposerAddress: isSet(object.proposerAddress) ? bytesFromBase64(object.proposerAddress) : new Uint8Array(0),
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.txs?.length) {
            obj.txs = message.txs.map((e) => base64FromBytes(e));
        }
        if (message.proposedLastCommit !== undefined) {
            obj.proposedLastCommit = exports.CommitInfo.toJSON(message.proposedLastCommit);
        }
        if (message.misbehavior?.length) {
            obj.misbehavior = message.misbehavior.map((e) => exports.Misbehavior.toJSON(e));
        }
        if (message.hash.length !== 0) {
            obj.hash = base64FromBytes(message.hash);
        }
        if (message.height !== 0) {
            obj.height = Math.round(message.height);
        }
        if (message.time !== undefined) {
            obj.time = message.time.toISOString();
        }
        if (message.nextValidatorsHash.length !== 0) {
            obj.nextValidatorsHash = base64FromBytes(message.nextValidatorsHash);
        }
        if (message.proposerAddress.length !== 0) {
            obj.proposerAddress = base64FromBytes(message.proposerAddress);
        }
        return obj;
    },
    create(base) {
        return exports.RequestProcessProposal.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRequestProcessProposal();
        message.txs = object.txs?.map((e) => e) || [];
        message.proposedLastCommit = (object.proposedLastCommit !== undefined && object.proposedLastCommit !== null)
            ? exports.CommitInfo.fromPartial(object.proposedLastCommit)
            : undefined;
        message.misbehavior = object.misbehavior?.map((e) => exports.Misbehavior.fromPartial(e)) || [];
        message.hash = object.hash ?? new Uint8Array(0);
        message.height = object.height ?? 0;
        message.time = object.time ?? undefined;
        message.nextValidatorsHash = object.nextValidatorsHash ?? new Uint8Array(0);
        message.proposerAddress = object.proposerAddress ?? new Uint8Array(0);
        return message;
    },
};
function createBaseRequestExtendVote() {
    return {
        hash: new Uint8Array(0),
        height: 0,
        time: undefined,
        txs: [],
        proposedLastCommit: undefined,
        misbehavior: [],
        nextValidatorsHash: new Uint8Array(0),
        proposerAddress: new Uint8Array(0),
    };
}
exports.RequestExtendVote = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.hash.length !== 0) {
            writer.uint32(10).bytes(message.hash);
        }
        if (message.height !== 0) {
            writer.uint32(16).int64(message.height);
        }
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.time), writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.txs) {
            writer.uint32(34).bytes(v);
        }
        if (message.proposedLastCommit !== undefined) {
            exports.CommitInfo.encode(message.proposedLastCommit, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.misbehavior) {
            exports.Misbehavior.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (message.nextValidatorsHash.length !== 0) {
            writer.uint32(58).bytes(message.nextValidatorsHash);
        }
        if (message.proposerAddress.length !== 0) {
            writer.uint32(66).bytes(message.proposerAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestExtendVote();
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
                    if (tag !== 16) {
                        break;
                    }
                    message.height = longToNumber(reader.int64());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.time = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.txs.push(reader.bytes());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.proposedLastCommit = exports.CommitInfo.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.misbehavior.push(exports.Misbehavior.decode(reader, reader.uint32()));
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.nextValidatorsHash = reader.bytes();
                    continue;
                case 8:
                    if (tag !== 66) {
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
            hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array(0),
            height: isSet(object.height) ? Number(object.height) : 0,
            time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
            txs: Array.isArray(object?.txs) ? object.txs.map((e) => bytesFromBase64(e)) : [],
            proposedLastCommit: isSet(object.proposedLastCommit) ? exports.CommitInfo.fromJSON(object.proposedLastCommit) : undefined,
            misbehavior: Array.isArray(object?.misbehavior)
                ? object.misbehavior.map((e) => exports.Misbehavior.fromJSON(e))
                : [],
            nextValidatorsHash: isSet(object.nextValidatorsHash)
                ? bytesFromBase64(object.nextValidatorsHash)
                : new Uint8Array(0),
            proposerAddress: isSet(object.proposerAddress) ? bytesFromBase64(object.proposerAddress) : new Uint8Array(0),
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.hash.length !== 0) {
            obj.hash = base64FromBytes(message.hash);
        }
        if (message.height !== 0) {
            obj.height = Math.round(message.height);
        }
        if (message.time !== undefined) {
            obj.time = message.time.toISOString();
        }
        if (message.txs?.length) {
            obj.txs = message.txs.map((e) => base64FromBytes(e));
        }
        if (message.proposedLastCommit !== undefined) {
            obj.proposedLastCommit = exports.CommitInfo.toJSON(message.proposedLastCommit);
        }
        if (message.misbehavior?.length) {
            obj.misbehavior = message.misbehavior.map((e) => exports.Misbehavior.toJSON(e));
        }
        if (message.nextValidatorsHash.length !== 0) {
            obj.nextValidatorsHash = base64FromBytes(message.nextValidatorsHash);
        }
        if (message.proposerAddress.length !== 0) {
            obj.proposerAddress = base64FromBytes(message.proposerAddress);
        }
        return obj;
    },
    create(base) {
        return exports.RequestExtendVote.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRequestExtendVote();
        message.hash = object.hash ?? new Uint8Array(0);
        message.height = object.height ?? 0;
        message.time = object.time ?? undefined;
        message.txs = object.txs?.map((e) => e) || [];
        message.proposedLastCommit = (object.proposedLastCommit !== undefined && object.proposedLastCommit !== null)
            ? exports.CommitInfo.fromPartial(object.proposedLastCommit)
            : undefined;
        message.misbehavior = object.misbehavior?.map((e) => exports.Misbehavior.fromPartial(e)) || [];
        message.nextValidatorsHash = object.nextValidatorsHash ?? new Uint8Array(0);
        message.proposerAddress = object.proposerAddress ?? new Uint8Array(0);
        return message;
    },
};
function createBaseRequestVerifyVoteExtension() {
    return { hash: new Uint8Array(0), validatorAddress: new Uint8Array(0), height: 0, voteExtension: new Uint8Array(0) };
}
exports.RequestVerifyVoteExtension = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.hash.length !== 0) {
            writer.uint32(10).bytes(message.hash);
        }
        if (message.validatorAddress.length !== 0) {
            writer.uint32(18).bytes(message.validatorAddress);
        }
        if (message.height !== 0) {
            writer.uint32(24).int64(message.height);
        }
        if (message.voteExtension.length !== 0) {
            writer.uint32(34).bytes(message.voteExtension);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestVerifyVoteExtension();
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
                    message.validatorAddress = reader.bytes();
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
                    message.voteExtension = reader.bytes();
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
            validatorAddress: isSet(object.validatorAddress) ? bytesFromBase64(object.validatorAddress) : new Uint8Array(0),
            height: isSet(object.height) ? Number(object.height) : 0,
            voteExtension: isSet(object.voteExtension) ? bytesFromBase64(object.voteExtension) : new Uint8Array(0),
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.hash.length !== 0) {
            obj.hash = base64FromBytes(message.hash);
        }
        if (message.validatorAddress.length !== 0) {
            obj.validatorAddress = base64FromBytes(message.validatorAddress);
        }
        if (message.height !== 0) {
            obj.height = Math.round(message.height);
        }
        if (message.voteExtension.length !== 0) {
            obj.voteExtension = base64FromBytes(message.voteExtension);
        }
        return obj;
    },
    create(base) {
        return exports.RequestVerifyVoteExtension.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRequestVerifyVoteExtension();
        message.hash = object.hash ?? new Uint8Array(0);
        message.validatorAddress = object.validatorAddress ?? new Uint8Array(0);
        message.height = object.height ?? 0;
        message.voteExtension = object.voteExtension ?? new Uint8Array(0);
        return message;
    },
};
function createBaseRequestFinalizeBlock() {
    return {
        txs: [],
        decidedLastCommit: undefined,
        misbehavior: [],
        hash: new Uint8Array(0),
        height: 0,
        time: undefined,
        nextValidatorsHash: new Uint8Array(0),
        proposerAddress: new Uint8Array(0),
    };
}
exports.RequestFinalizeBlock = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.txs) {
            writer.uint32(10).bytes(v);
        }
        if (message.decidedLastCommit !== undefined) {
            exports.CommitInfo.encode(message.decidedLastCommit, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.misbehavior) {
            exports.Misbehavior.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.hash.length !== 0) {
            writer.uint32(34).bytes(message.hash);
        }
        if (message.height !== 0) {
            writer.uint32(40).int64(message.height);
        }
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.time), writer.uint32(50).fork()).ldelim();
        }
        if (message.nextValidatorsHash.length !== 0) {
            writer.uint32(58).bytes(message.nextValidatorsHash);
        }
        if (message.proposerAddress.length !== 0) {
            writer.uint32(66).bytes(message.proposerAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestFinalizeBlock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.txs.push(reader.bytes());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.decidedLastCommit = exports.CommitInfo.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.misbehavior.push(exports.Misbehavior.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.hash = reader.bytes();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.height = longToNumber(reader.int64());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.time = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.nextValidatorsHash = reader.bytes();
                    continue;
                case 8:
                    if (tag !== 66) {
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
            txs: Array.isArray(object?.txs) ? object.txs.map((e) => bytesFromBase64(e)) : [],
            decidedLastCommit: isSet(object.decidedLastCommit) ? exports.CommitInfo.fromJSON(object.decidedLastCommit) : undefined,
            misbehavior: Array.isArray(object?.misbehavior)
                ? object.misbehavior.map((e) => exports.Misbehavior.fromJSON(e))
                : [],
            hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array(0),
            height: isSet(object.height) ? Number(object.height) : 0,
            time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
            nextValidatorsHash: isSet(object.nextValidatorsHash)
                ? bytesFromBase64(object.nextValidatorsHash)
                : new Uint8Array(0),
            proposerAddress: isSet(object.proposerAddress) ? bytesFromBase64(object.proposerAddress) : new Uint8Array(0),
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.txs?.length) {
            obj.txs = message.txs.map((e) => base64FromBytes(e));
        }
        if (message.decidedLastCommit !== undefined) {
            obj.decidedLastCommit = exports.CommitInfo.toJSON(message.decidedLastCommit);
        }
        if (message.misbehavior?.length) {
            obj.misbehavior = message.misbehavior.map((e) => exports.Misbehavior.toJSON(e));
        }
        if (message.hash.length !== 0) {
            obj.hash = base64FromBytes(message.hash);
        }
        if (message.height !== 0) {
            obj.height = Math.round(message.height);
        }
        if (message.time !== undefined) {
            obj.time = message.time.toISOString();
        }
        if (message.nextValidatorsHash.length !== 0) {
            obj.nextValidatorsHash = base64FromBytes(message.nextValidatorsHash);
        }
        if (message.proposerAddress.length !== 0) {
            obj.proposerAddress = base64FromBytes(message.proposerAddress);
        }
        return obj;
    },
    create(base) {
        return exports.RequestFinalizeBlock.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRequestFinalizeBlock();
        message.txs = object.txs?.map((e) => e) || [];
        message.decidedLastCommit = (object.decidedLastCommit !== undefined && object.decidedLastCommit !== null)
            ? exports.CommitInfo.fromPartial(object.decidedLastCommit)
            : undefined;
        message.misbehavior = object.misbehavior?.map((e) => exports.Misbehavior.fromPartial(e)) || [];
        message.hash = object.hash ?? new Uint8Array(0);
        message.height = object.height ?? 0;
        message.time = object.time ?? undefined;
        message.nextValidatorsHash = object.nextValidatorsHash ?? new Uint8Array(0);
        message.proposerAddress = object.proposerAddress ?? new Uint8Array(0);
        return message;
    },
};
function createBaseResponse() {
    return {
        exception: undefined,
        echo: undefined,
        flush: undefined,
        info: undefined,
        initChain: undefined,
        query: undefined,
        checkTx: undefined,
        commit: undefined,
        listSnapshots: undefined,
        offerSnapshot: undefined,
        loadSnapshotChunk: undefined,
        applySnapshotChunk: undefined,
        prepareProposal: undefined,
        processProposal: undefined,
        extendVote: undefined,
        verifyVoteExtension: undefined,
        finalizeBlock: undefined,
    };
}
exports.Response = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.exception !== undefined) {
            exports.ResponseException.encode(message.exception, writer.uint32(10).fork()).ldelim();
        }
        if (message.echo !== undefined) {
            exports.ResponseEcho.encode(message.echo, writer.uint32(18).fork()).ldelim();
        }
        if (message.flush !== undefined) {
            exports.ResponseFlush.encode(message.flush, writer.uint32(26).fork()).ldelim();
        }
        if (message.info !== undefined) {
            exports.ResponseInfo.encode(message.info, writer.uint32(34).fork()).ldelim();
        }
        if (message.initChain !== undefined) {
            exports.ResponseInitChain.encode(message.initChain, writer.uint32(50).fork()).ldelim();
        }
        if (message.query !== undefined) {
            exports.ResponseQuery.encode(message.query, writer.uint32(58).fork()).ldelim();
        }
        if (message.checkTx !== undefined) {
            exports.ResponseCheckTx.encode(message.checkTx, writer.uint32(74).fork()).ldelim();
        }
        if (message.commit !== undefined) {
            exports.ResponseCommit.encode(message.commit, writer.uint32(98).fork()).ldelim();
        }
        if (message.listSnapshots !== undefined) {
            exports.ResponseListSnapshots.encode(message.listSnapshots, writer.uint32(106).fork()).ldelim();
        }
        if (message.offerSnapshot !== undefined) {
            exports.ResponseOfferSnapshot.encode(message.offerSnapshot, writer.uint32(114).fork()).ldelim();
        }
        if (message.loadSnapshotChunk !== undefined) {
            exports.ResponseLoadSnapshotChunk.encode(message.loadSnapshotChunk, writer.uint32(122).fork()).ldelim();
        }
        if (message.applySnapshotChunk !== undefined) {
            exports.ResponseApplySnapshotChunk.encode(message.applySnapshotChunk, writer.uint32(130).fork()).ldelim();
        }
        if (message.prepareProposal !== undefined) {
            exports.ResponsePrepareProposal.encode(message.prepareProposal, writer.uint32(138).fork()).ldelim();
        }
        if (message.processProposal !== undefined) {
            exports.ResponseProcessProposal.encode(message.processProposal, writer.uint32(146).fork()).ldelim();
        }
        if (message.extendVote !== undefined) {
            exports.ResponseExtendVote.encode(message.extendVote, writer.uint32(154).fork()).ldelim();
        }
        if (message.verifyVoteExtension !== undefined) {
            exports.ResponseVerifyVoteExtension.encode(message.verifyVoteExtension, writer.uint32(162).fork()).ldelim();
        }
        if (message.finalizeBlock !== undefined) {
            exports.ResponseFinalizeBlock.encode(message.finalizeBlock, writer.uint32(170).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.exception = exports.ResponseException.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.echo = exports.ResponseEcho.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.flush = exports.ResponseFlush.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.info = exports.ResponseInfo.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.initChain = exports.ResponseInitChain.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.query = exports.ResponseQuery.decode(reader, reader.uint32());
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.checkTx = exports.ResponseCheckTx.decode(reader, reader.uint32());
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.commit = exports.ResponseCommit.decode(reader, reader.uint32());
                    continue;
                case 13:
                    if (tag !== 106) {
                        break;
                    }
                    message.listSnapshots = exports.ResponseListSnapshots.decode(reader, reader.uint32());
                    continue;
                case 14:
                    if (tag !== 114) {
                        break;
                    }
                    message.offerSnapshot = exports.ResponseOfferSnapshot.decode(reader, reader.uint32());
                    continue;
                case 15:
                    if (tag !== 122) {
                        break;
                    }
                    message.loadSnapshotChunk = exports.ResponseLoadSnapshotChunk.decode(reader, reader.uint32());
                    continue;
                case 16:
                    if (tag !== 130) {
                        break;
                    }
                    message.applySnapshotChunk = exports.ResponseApplySnapshotChunk.decode(reader, reader.uint32());
                    continue;
                case 17:
                    if (tag !== 138) {
                        break;
                    }
                    message.prepareProposal = exports.ResponsePrepareProposal.decode(reader, reader.uint32());
                    continue;
                case 18:
                    if (tag !== 146) {
                        break;
                    }
                    message.processProposal = exports.ResponseProcessProposal.decode(reader, reader.uint32());
                    continue;
                case 19:
                    if (tag !== 154) {
                        break;
                    }
                    message.extendVote = exports.ResponseExtendVote.decode(reader, reader.uint32());
                    continue;
                case 20:
                    if (tag !== 162) {
                        break;
                    }
                    message.verifyVoteExtension = exports.ResponseVerifyVoteExtension.decode(reader, reader.uint32());
                    continue;
                case 21:
                    if (tag !== 170) {
                        break;
                    }
                    message.finalizeBlock = exports.ResponseFinalizeBlock.decode(reader, reader.uint32());
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
            exception: isSet(object.exception) ? exports.ResponseException.fromJSON(object.exception) : undefined,
            echo: isSet(object.echo) ? exports.ResponseEcho.fromJSON(object.echo) : undefined,
            flush: isSet(object.flush) ? exports.ResponseFlush.fromJSON(object.flush) : undefined,
            info: isSet(object.info) ? exports.ResponseInfo.fromJSON(object.info) : undefined,
            initChain: isSet(object.initChain) ? exports.ResponseInitChain.fromJSON(object.initChain) : undefined,
            query: isSet(object.query) ? exports.ResponseQuery.fromJSON(object.query) : undefined,
            checkTx: isSet(object.checkTx) ? exports.ResponseCheckTx.fromJSON(object.checkTx) : undefined,
            commit: isSet(object.commit) ? exports.ResponseCommit.fromJSON(object.commit) : undefined,
            listSnapshots: isSet(object.listSnapshots) ? exports.ResponseListSnapshots.fromJSON(object.listSnapshots) : undefined,
            offerSnapshot: isSet(object.offerSnapshot) ? exports.ResponseOfferSnapshot.fromJSON(object.offerSnapshot) : undefined,
            loadSnapshotChunk: isSet(object.loadSnapshotChunk)
                ? exports.ResponseLoadSnapshotChunk.fromJSON(object.loadSnapshotChunk)
                : undefined,
            applySnapshotChunk: isSet(object.applySnapshotChunk)
                ? exports.ResponseApplySnapshotChunk.fromJSON(object.applySnapshotChunk)
                : undefined,
            prepareProposal: isSet(object.prepareProposal)
                ? exports.ResponsePrepareProposal.fromJSON(object.prepareProposal)
                : undefined,
            processProposal: isSet(object.processProposal)
                ? exports.ResponseProcessProposal.fromJSON(object.processProposal)
                : undefined,
            extendVote: isSet(object.extendVote) ? exports.ResponseExtendVote.fromJSON(object.extendVote) : undefined,
            verifyVoteExtension: isSet(object.verifyVoteExtension)
                ? exports.ResponseVerifyVoteExtension.fromJSON(object.verifyVoteExtension)
                : undefined,
            finalizeBlock: isSet(object.finalizeBlock) ? exports.ResponseFinalizeBlock.fromJSON(object.finalizeBlock) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.exception !== undefined) {
            obj.exception = exports.ResponseException.toJSON(message.exception);
        }
        if (message.echo !== undefined) {
            obj.echo = exports.ResponseEcho.toJSON(message.echo);
        }
        if (message.flush !== undefined) {
            obj.flush = exports.ResponseFlush.toJSON(message.flush);
        }
        if (message.info !== undefined) {
            obj.info = exports.ResponseInfo.toJSON(message.info);
        }
        if (message.initChain !== undefined) {
            obj.initChain = exports.ResponseInitChain.toJSON(message.initChain);
        }
        if (message.query !== undefined) {
            obj.query = exports.ResponseQuery.toJSON(message.query);
        }
        if (message.checkTx !== undefined) {
            obj.checkTx = exports.ResponseCheckTx.toJSON(message.checkTx);
        }
        if (message.commit !== undefined) {
            obj.commit = exports.ResponseCommit.toJSON(message.commit);
        }
        if (message.listSnapshots !== undefined) {
            obj.listSnapshots = exports.ResponseListSnapshots.toJSON(message.listSnapshots);
        }
        if (message.offerSnapshot !== undefined) {
            obj.offerSnapshot = exports.ResponseOfferSnapshot.toJSON(message.offerSnapshot);
        }
        if (message.loadSnapshotChunk !== undefined) {
            obj.loadSnapshotChunk = exports.ResponseLoadSnapshotChunk.toJSON(message.loadSnapshotChunk);
        }
        if (message.applySnapshotChunk !== undefined) {
            obj.applySnapshotChunk = exports.ResponseApplySnapshotChunk.toJSON(message.applySnapshotChunk);
        }
        if (message.prepareProposal !== undefined) {
            obj.prepareProposal = exports.ResponsePrepareProposal.toJSON(message.prepareProposal);
        }
        if (message.processProposal !== undefined) {
            obj.processProposal = exports.ResponseProcessProposal.toJSON(message.processProposal);
        }
        if (message.extendVote !== undefined) {
            obj.extendVote = exports.ResponseExtendVote.toJSON(message.extendVote);
        }
        if (message.verifyVoteExtension !== undefined) {
            obj.verifyVoteExtension = exports.ResponseVerifyVoteExtension.toJSON(message.verifyVoteExtension);
        }
        if (message.finalizeBlock !== undefined) {
            obj.finalizeBlock = exports.ResponseFinalizeBlock.toJSON(message.finalizeBlock);
        }
        return obj;
    },
    create(base) {
        return exports.Response.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseResponse();
        message.exception = (object.exception !== undefined && object.exception !== null)
            ? exports.ResponseException.fromPartial(object.exception)
            : undefined;
        message.echo = (object.echo !== undefined && object.echo !== null)
            ? exports.ResponseEcho.fromPartial(object.echo)
            : undefined;
        message.flush = (object.flush !== undefined && object.flush !== null)
            ? exports.ResponseFlush.fromPartial(object.flush)
            : undefined;
        message.info = (object.info !== undefined && object.info !== null)
            ? exports.ResponseInfo.fromPartial(object.info)
            : undefined;
        message.initChain = (object.initChain !== undefined && object.initChain !== null)
            ? exports.ResponseInitChain.fromPartial(object.initChain)
            : undefined;
        message.query = (object.query !== undefined && object.query !== null)
            ? exports.ResponseQuery.fromPartial(object.query)
            : undefined;
        message.checkTx = (object.checkTx !== undefined && object.checkTx !== null)
            ? exports.ResponseCheckTx.fromPartial(object.checkTx)
            : undefined;
        message.commit = (object.commit !== undefined && object.commit !== null)
            ? exports.ResponseCommit.fromPartial(object.commit)
            : undefined;
        message.listSnapshots = (object.listSnapshots !== undefined && object.listSnapshots !== null)
            ? exports.ResponseListSnapshots.fromPartial(object.listSnapshots)
            : undefined;
        message.offerSnapshot = (object.offerSnapshot !== undefined && object.offerSnapshot !== null)
            ? exports.ResponseOfferSnapshot.fromPartial(object.offerSnapshot)
            : undefined;
        message.loadSnapshotChunk = (object.loadSnapshotChunk !== undefined && object.loadSnapshotChunk !== null)
            ? exports.ResponseLoadSnapshotChunk.fromPartial(object.loadSnapshotChunk)
            : undefined;
        message.applySnapshotChunk = (object.applySnapshotChunk !== undefined && object.applySnapshotChunk !== null)
            ? exports.ResponseApplySnapshotChunk.fromPartial(object.applySnapshotChunk)
            : undefined;
        message.prepareProposal = (object.prepareProposal !== undefined && object.prepareProposal !== null)
            ? exports.ResponsePrepareProposal.fromPartial(object.prepareProposal)
            : undefined;
        message.processProposal = (object.processProposal !== undefined && object.processProposal !== null)
            ? exports.ResponseProcessProposal.fromPartial(object.processProposal)
            : undefined;
        message.extendVote = (object.extendVote !== undefined && object.extendVote !== null)
            ? exports.ResponseExtendVote.fromPartial(object.extendVote)
            : undefined;
        message.verifyVoteExtension = (object.verifyVoteExtension !== undefined && object.verifyVoteExtension !== null)
            ? exports.ResponseVerifyVoteExtension.fromPartial(object.verifyVoteExtension)
            : undefined;
        message.finalizeBlock = (object.finalizeBlock !== undefined && object.finalizeBlock !== null)
            ? exports.ResponseFinalizeBlock.fromPartial(object.finalizeBlock)
            : undefined;
        return message;
    },
};
function createBaseResponseException() {
    return { error: "" };
}
exports.ResponseException = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.error !== "") {
            writer.uint32(10).string(message.error);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseException();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.error = reader.string();
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
        return { error: isSet(object.error) ? String(object.error) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.error !== "") {
            obj.error = message.error;
        }
        return obj;
    },
    create(base) {
        return exports.ResponseException.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseResponseException();
        message.error = object.error ?? "";
        return message;
    },
};
function createBaseResponseEcho() {
    return { message: "" };
}
exports.ResponseEcho = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.message !== "") {
            writer.uint32(10).string(message.message);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseEcho();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.message = reader.string();
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
        return { message: isSet(object.message) ? String(object.message) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.message !== "") {
            obj.message = message.message;
        }
        return obj;
    },
    create(base) {
        return exports.ResponseEcho.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseResponseEcho();
        message.message = object.message ?? "";
        return message;
    },
};
function createBaseResponseFlush() {
    return {};
}
exports.ResponseFlush = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseFlush();
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
        return exports.ResponseFlush.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseResponseFlush();
        return message;
    },
};
function createBaseResponseInfo() {
    return { data: "", version: "", appVersion: 0, lastBlockHeight: 0, lastBlockAppHash: new Uint8Array(0) };
}
exports.ResponseInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.data !== "") {
            writer.uint32(10).string(message.data);
        }
        if (message.version !== "") {
            writer.uint32(18).string(message.version);
        }
        if (message.appVersion !== 0) {
            writer.uint32(24).uint64(message.appVersion);
        }
        if (message.lastBlockHeight !== 0) {
            writer.uint32(32).int64(message.lastBlockHeight);
        }
        if (message.lastBlockAppHash.length !== 0) {
            writer.uint32(42).bytes(message.lastBlockAppHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.data = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.version = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.appVersion = longToNumber(reader.uint64());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.lastBlockHeight = longToNumber(reader.int64());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.lastBlockAppHash = reader.bytes();
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
            data: isSet(object.data) ? String(object.data) : "",
            version: isSet(object.version) ? String(object.version) : "",
            appVersion: isSet(object.appVersion) ? Number(object.appVersion) : 0,
            lastBlockHeight: isSet(object.lastBlockHeight) ? Number(object.lastBlockHeight) : 0,
            lastBlockAppHash: isSet(object.lastBlockAppHash) ? bytesFromBase64(object.lastBlockAppHash) : new Uint8Array(0),
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.data !== "") {
            obj.data = message.data;
        }
        if (message.version !== "") {
            obj.version = message.version;
        }
        if (message.appVersion !== 0) {
            obj.appVersion = Math.round(message.appVersion);
        }
        if (message.lastBlockHeight !== 0) {
            obj.lastBlockHeight = Math.round(message.lastBlockHeight);
        }
        if (message.lastBlockAppHash.length !== 0) {
            obj.lastBlockAppHash = base64FromBytes(message.lastBlockAppHash);
        }
        return obj;
    },
    create(base) {
        return exports.ResponseInfo.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseResponseInfo();
        message.data = object.data ?? "";
        message.version = object.version ?? "";
        message.appVersion = object.appVersion ?? 0;
        message.lastBlockHeight = object.lastBlockHeight ?? 0;
        message.lastBlockAppHash = object.lastBlockAppHash ?? new Uint8Array(0);
        return message;
    },
};
function createBaseResponseInitChain() {
    return { consensusParams: undefined, validators: [], appHash: new Uint8Array(0) };
}
exports.ResponseInitChain = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.consensusParams !== undefined) {
            params_1.ConsensusParams.encode(message.consensusParams, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.validators) {
            exports.ValidatorUpdate.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.appHash.length !== 0) {
            writer.uint32(26).bytes(message.appHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseInitChain();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.consensusParams = params_1.ConsensusParams.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.validators.push(exports.ValidatorUpdate.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.appHash = reader.bytes();
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
            consensusParams: isSet(object.consensusParams) ? params_1.ConsensusParams.fromJSON(object.consensusParams) : undefined,
            validators: Array.isArray(object?.validators)
                ? object.validators.map((e) => exports.ValidatorUpdate.fromJSON(e))
                : [],
            appHash: isSet(object.appHash) ? bytesFromBase64(object.appHash) : new Uint8Array(0),
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.consensusParams !== undefined) {
            obj.consensusParams = params_1.ConsensusParams.toJSON(message.consensusParams);
        }
        if (message.validators?.length) {
            obj.validators = message.validators.map((e) => exports.ValidatorUpdate.toJSON(e));
        }
        if (message.appHash.length !== 0) {
            obj.appHash = base64FromBytes(message.appHash);
        }
        return obj;
    },
    create(base) {
        return exports.ResponseInitChain.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseResponseInitChain();
        message.consensusParams = (object.consensusParams !== undefined && object.consensusParams !== null)
            ? params_1.ConsensusParams.fromPartial(object.consensusParams)
            : undefined;
        message.validators = object.validators?.map((e) => exports.ValidatorUpdate.fromPartial(e)) || [];
        message.appHash = object.appHash ?? new Uint8Array(0);
        return message;
    },
};
function createBaseResponseQuery() {
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
exports.ResponseQuery = {
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
            proof_1.ProofOps.encode(message.proofOps, writer.uint32(66).fork()).ldelim();
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
        const message = createBaseResponseQuery();
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
                    message.proofOps = proof_1.ProofOps.decode(reader, reader.uint32());
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
            proofOps: isSet(object.proofOps) ? proof_1.ProofOps.fromJSON(object.proofOps) : undefined,
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
            obj.proofOps = proof_1.ProofOps.toJSON(message.proofOps);
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
        return exports.ResponseQuery.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseResponseQuery();
        message.code = object.code ?? 0;
        message.log = object.log ?? "";
        message.info = object.info ?? "";
        message.index = object.index ?? 0;
        message.key = object.key ?? new Uint8Array(0);
        message.value = object.value ?? new Uint8Array(0);
        message.proofOps = (object.proofOps !== undefined && object.proofOps !== null)
            ? proof_1.ProofOps.fromPartial(object.proofOps)
            : undefined;
        message.height = object.height ?? 0;
        message.codespace = object.codespace ?? "";
        return message;
    },
};
function createBaseResponseCheckTx() {
    return { code: 0, data: new Uint8Array(0), log: "", info: "", gasWanted: 0, gasUsed: 0, events: [], codespace: "" };
}
exports.ResponseCheckTx = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.code !== 0) {
            writer.uint32(8).uint32(message.code);
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        if (message.log !== "") {
            writer.uint32(26).string(message.log);
        }
        if (message.info !== "") {
            writer.uint32(34).string(message.info);
        }
        if (message.gasWanted !== 0) {
            writer.uint32(40).int64(message.gasWanted);
        }
        if (message.gasUsed !== 0) {
            writer.uint32(48).int64(message.gasUsed);
        }
        for (const v of message.events) {
            exports.Event.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.codespace !== "") {
            writer.uint32(66).string(message.codespace);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseCheckTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.code = reader.uint32();
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
                    message.gasWanted = longToNumber(reader.int64());
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.gasUsed = longToNumber(reader.int64());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.events.push(exports.Event.decode(reader, reader.uint32()));
                    continue;
                case 8:
                    if (tag !== 66) {
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
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0),
            log: isSet(object.log) ? String(object.log) : "",
            info: isSet(object.info) ? String(object.info) : "",
            gasWanted: isSet(object.gas_wanted) ? Number(object.gas_wanted) : 0,
            gasUsed: isSet(object.gas_used) ? Number(object.gas_used) : 0,
            events: Array.isArray(object?.events) ? object.events.map((e) => exports.Event.fromJSON(e)) : [],
            codespace: isSet(object.codespace) ? String(object.codespace) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.code !== 0) {
            obj.code = Math.round(message.code);
        }
        if (message.data.length !== 0) {
            obj.data = base64FromBytes(message.data);
        }
        if (message.log !== "") {
            obj.log = message.log;
        }
        if (message.info !== "") {
            obj.info = message.info;
        }
        if (message.gasWanted !== 0) {
            obj.gas_wanted = Math.round(message.gasWanted);
        }
        if (message.gasUsed !== 0) {
            obj.gas_used = Math.round(message.gasUsed);
        }
        if (message.events?.length) {
            obj.events = message.events.map((e) => exports.Event.toJSON(e));
        }
        if (message.codespace !== "") {
            obj.codespace = message.codespace;
        }
        return obj;
    },
    create(base) {
        return exports.ResponseCheckTx.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseResponseCheckTx();
        message.code = object.code ?? 0;
        message.data = object.data ?? new Uint8Array(0);
        message.log = object.log ?? "";
        message.info = object.info ?? "";
        message.gasWanted = object.gasWanted ?? 0;
        message.gasUsed = object.gasUsed ?? 0;
        message.events = object.events?.map((e) => exports.Event.fromPartial(e)) || [];
        message.codespace = object.codespace ?? "";
        return message;
    },
};
function createBaseResponseCommit() {
    return { retainHeight: 0 };
}
exports.ResponseCommit = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.retainHeight !== 0) {
            writer.uint32(24).int64(message.retainHeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseCommit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.retainHeight = longToNumber(reader.int64());
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
        return { retainHeight: isSet(object.retainHeight) ? Number(object.retainHeight) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.retainHeight !== 0) {
            obj.retainHeight = Math.round(message.retainHeight);
        }
        return obj;
    },
    create(base) {
        return exports.ResponseCommit.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseResponseCommit();
        message.retainHeight = object.retainHeight ?? 0;
        return message;
    },
};
function createBaseResponseListSnapshots() {
    return { snapshots: [] };
}
exports.ResponseListSnapshots = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.snapshots) {
            exports.Snapshot.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseListSnapshots();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.snapshots.push(exports.Snapshot.decode(reader, reader.uint32()));
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
            snapshots: Array.isArray(object?.snapshots) ? object.snapshots.map((e) => exports.Snapshot.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.snapshots?.length) {
            obj.snapshots = message.snapshots.map((e) => exports.Snapshot.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.ResponseListSnapshots.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseResponseListSnapshots();
        message.snapshots = object.snapshots?.map((e) => exports.Snapshot.fromPartial(e)) || [];
        return message;
    },
};
function createBaseResponseOfferSnapshot() {
    return { result: 0 };
}
exports.ResponseOfferSnapshot = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.result !== 0) {
            writer.uint32(8).int32(message.result);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseOfferSnapshot();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.result = reader.int32();
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
        return { result: isSet(object.result) ? responseOfferSnapshot_ResultFromJSON(object.result) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.result !== 0) {
            obj.result = responseOfferSnapshot_ResultToJSON(message.result);
        }
        return obj;
    },
    create(base) {
        return exports.ResponseOfferSnapshot.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseResponseOfferSnapshot();
        message.result = object.result ?? 0;
        return message;
    },
};
function createBaseResponseLoadSnapshotChunk() {
    return { chunk: new Uint8Array(0) };
}
exports.ResponseLoadSnapshotChunk = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.chunk.length !== 0) {
            writer.uint32(10).bytes(message.chunk);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseLoadSnapshotChunk();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.chunk = reader.bytes();
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
        return { chunk: isSet(object.chunk) ? bytesFromBase64(object.chunk) : new Uint8Array(0) };
    },
    toJSON(message) {
        const obj = {};
        if (message.chunk.length !== 0) {
            obj.chunk = base64FromBytes(message.chunk);
        }
        return obj;
    },
    create(base) {
        return exports.ResponseLoadSnapshotChunk.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseResponseLoadSnapshotChunk();
        message.chunk = object.chunk ?? new Uint8Array(0);
        return message;
    },
};
function createBaseResponseApplySnapshotChunk() {
    return { result: 0, refetchChunks: [], rejectSenders: [] };
}
exports.ResponseApplySnapshotChunk = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.result !== 0) {
            writer.uint32(8).int32(message.result);
        }
        writer.uint32(18).fork();
        for (const v of message.refetchChunks) {
            writer.uint32(v);
        }
        writer.ldelim();
        for (const v of message.rejectSenders) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseApplySnapshotChunk();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.result = reader.int32();
                    continue;
                case 2:
                    if (tag === 16) {
                        message.refetchChunks.push(reader.uint32());
                        continue;
                    }
                    if (tag === 18) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.refetchChunks.push(reader.uint32());
                        }
                        continue;
                    }
                    break;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.rejectSenders.push(reader.string());
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
            result: isSet(object.result) ? responseApplySnapshotChunk_ResultFromJSON(object.result) : 0,
            refetchChunks: Array.isArray(object?.refetchChunks) ? object.refetchChunks.map((e) => Number(e)) : [],
            rejectSenders: Array.isArray(object?.rejectSenders) ? object.rejectSenders.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.result !== 0) {
            obj.result = responseApplySnapshotChunk_ResultToJSON(message.result);
        }
        if (message.refetchChunks?.length) {
            obj.refetchChunks = message.refetchChunks.map((e) => Math.round(e));
        }
        if (message.rejectSenders?.length) {
            obj.rejectSenders = message.rejectSenders;
        }
        return obj;
    },
    create(base) {
        return exports.ResponseApplySnapshotChunk.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseResponseApplySnapshotChunk();
        message.result = object.result ?? 0;
        message.refetchChunks = object.refetchChunks?.map((e) => e) || [];
        message.rejectSenders = object.rejectSenders?.map((e) => e) || [];
        return message;
    },
};
function createBaseResponsePrepareProposal() {
    return { txs: [] };
}
exports.ResponsePrepareProposal = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.txs) {
            writer.uint32(10).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponsePrepareProposal();
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
        return exports.ResponsePrepareProposal.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseResponsePrepareProposal();
        message.txs = object.txs?.map((e) => e) || [];
        return message;
    },
};
function createBaseResponseProcessProposal() {
    return { status: 0 };
}
exports.ResponseProcessProposal = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.status !== 0) {
            writer.uint32(8).int32(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseProcessProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.status = reader.int32();
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
        return { status: isSet(object.status) ? responseProcessProposal_ProposalStatusFromJSON(object.status) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.status !== 0) {
            obj.status = responseProcessProposal_ProposalStatusToJSON(message.status);
        }
        return obj;
    },
    create(base) {
        return exports.ResponseProcessProposal.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseResponseProcessProposal();
        message.status = object.status ?? 0;
        return message;
    },
};
function createBaseResponseExtendVote() {
    return { voteExtension: new Uint8Array(0) };
}
exports.ResponseExtendVote = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.voteExtension.length !== 0) {
            writer.uint32(10).bytes(message.voteExtension);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseExtendVote();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.voteExtension = reader.bytes();
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
        return { voteExtension: isSet(object.voteExtension) ? bytesFromBase64(object.voteExtension) : new Uint8Array(0) };
    },
    toJSON(message) {
        const obj = {};
        if (message.voteExtension.length !== 0) {
            obj.voteExtension = base64FromBytes(message.voteExtension);
        }
        return obj;
    },
    create(base) {
        return exports.ResponseExtendVote.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseResponseExtendVote();
        message.voteExtension = object.voteExtension ?? new Uint8Array(0);
        return message;
    },
};
function createBaseResponseVerifyVoteExtension() {
    return { status: 0 };
}
exports.ResponseVerifyVoteExtension = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.status !== 0) {
            writer.uint32(8).int32(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseVerifyVoteExtension();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.status = reader.int32();
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
        return { status: isSet(object.status) ? responseVerifyVoteExtension_VerifyStatusFromJSON(object.status) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.status !== 0) {
            obj.status = responseVerifyVoteExtension_VerifyStatusToJSON(message.status);
        }
        return obj;
    },
    create(base) {
        return exports.ResponseVerifyVoteExtension.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseResponseVerifyVoteExtension();
        message.status = object.status ?? 0;
        return message;
    },
};
function createBaseResponseFinalizeBlock() {
    return {
        events: [],
        txResults: [],
        validatorUpdates: [],
        consensusParamUpdates: undefined,
        appHash: new Uint8Array(0),
    };
}
exports.ResponseFinalizeBlock = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.events) {
            exports.Event.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.txResults) {
            exports.ExecTxResult.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.validatorUpdates) {
            exports.ValidatorUpdate.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.consensusParamUpdates !== undefined) {
            params_1.ConsensusParams.encode(message.consensusParamUpdates, writer.uint32(34).fork()).ldelim();
        }
        if (message.appHash.length !== 0) {
            writer.uint32(42).bytes(message.appHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseFinalizeBlock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.events.push(exports.Event.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.txResults.push(exports.ExecTxResult.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.validatorUpdates.push(exports.ValidatorUpdate.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.consensusParamUpdates = params_1.ConsensusParams.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.appHash = reader.bytes();
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
            events: Array.isArray(object?.events) ? object.events.map((e) => exports.Event.fromJSON(e)) : [],
            txResults: Array.isArray(object?.txResults) ? object.txResults.map((e) => exports.ExecTxResult.fromJSON(e)) : [],
            validatorUpdates: Array.isArray(object?.validatorUpdates)
                ? object.validatorUpdates.map((e) => exports.ValidatorUpdate.fromJSON(e))
                : [],
            consensusParamUpdates: isSet(object.consensusParamUpdates)
                ? params_1.ConsensusParams.fromJSON(object.consensusParamUpdates)
                : undefined,
            appHash: isSet(object.appHash) ? bytesFromBase64(object.appHash) : new Uint8Array(0),
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.events?.length) {
            obj.events = message.events.map((e) => exports.Event.toJSON(e));
        }
        if (message.txResults?.length) {
            obj.txResults = message.txResults.map((e) => exports.ExecTxResult.toJSON(e));
        }
        if (message.validatorUpdates?.length) {
            obj.validatorUpdates = message.validatorUpdates.map((e) => exports.ValidatorUpdate.toJSON(e));
        }
        if (message.consensusParamUpdates !== undefined) {
            obj.consensusParamUpdates = params_1.ConsensusParams.toJSON(message.consensusParamUpdates);
        }
        if (message.appHash.length !== 0) {
            obj.appHash = base64FromBytes(message.appHash);
        }
        return obj;
    },
    create(base) {
        return exports.ResponseFinalizeBlock.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseResponseFinalizeBlock();
        message.events = object.events?.map((e) => exports.Event.fromPartial(e)) || [];
        message.txResults = object.txResults?.map((e) => exports.ExecTxResult.fromPartial(e)) || [];
        message.validatorUpdates = object.validatorUpdates?.map((e) => exports.ValidatorUpdate.fromPartial(e)) || [];
        message.consensusParamUpdates =
            (object.consensusParamUpdates !== undefined && object.consensusParamUpdates !== null)
                ? params_1.ConsensusParams.fromPartial(object.consensusParamUpdates)
                : undefined;
        message.appHash = object.appHash ?? new Uint8Array(0);
        return message;
    },
};
function createBaseCommitInfo() {
    return { round: 0, votes: [] };
}
exports.CommitInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.round !== 0) {
            writer.uint32(8).int32(message.round);
        }
        for (const v of message.votes) {
            exports.VoteInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommitInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.round = reader.int32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.votes.push(exports.VoteInfo.decode(reader, reader.uint32()));
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
            round: isSet(object.round) ? Number(object.round) : 0,
            votes: Array.isArray(object?.votes) ? object.votes.map((e) => exports.VoteInfo.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.round !== 0) {
            obj.round = Math.round(message.round);
        }
        if (message.votes?.length) {
            obj.votes = message.votes.map((e) => exports.VoteInfo.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.CommitInfo.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCommitInfo();
        message.round = object.round ?? 0;
        message.votes = object.votes?.map((e) => exports.VoteInfo.fromPartial(e)) || [];
        return message;
    },
};
function createBaseExtendedCommitInfo() {
    return { round: 0, votes: [] };
}
exports.ExtendedCommitInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.round !== 0) {
            writer.uint32(8).int32(message.round);
        }
        for (const v of message.votes) {
            exports.ExtendedVoteInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExtendedCommitInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.round = reader.int32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.votes.push(exports.ExtendedVoteInfo.decode(reader, reader.uint32()));
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
            round: isSet(object.round) ? Number(object.round) : 0,
            votes: Array.isArray(object?.votes) ? object.votes.map((e) => exports.ExtendedVoteInfo.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.round !== 0) {
            obj.round = Math.round(message.round);
        }
        if (message.votes?.length) {
            obj.votes = message.votes.map((e) => exports.ExtendedVoteInfo.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.ExtendedCommitInfo.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseExtendedCommitInfo();
        message.round = object.round ?? 0;
        message.votes = object.votes?.map((e) => exports.ExtendedVoteInfo.fromPartial(e)) || [];
        return message;
    },
};
function createBaseEvent() {
    return { type: "", attributes: [] };
}
exports.Event = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.type !== "") {
            writer.uint32(10).string(message.type);
        }
        for (const v of message.attributes) {
            exports.EventAttribute.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEvent();
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
                    message.attributes.push(exports.EventAttribute.decode(reader, reader.uint32()));
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
            attributes: Array.isArray(object?.attributes)
                ? object.attributes.map((e) => exports.EventAttribute.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.type !== "") {
            obj.type = message.type;
        }
        if (message.attributes?.length) {
            obj.attributes = message.attributes.map((e) => exports.EventAttribute.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.Event.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseEvent();
        message.type = object.type ?? "";
        message.attributes = object.attributes?.map((e) => exports.EventAttribute.fromPartial(e)) || [];
        return message;
    },
};
function createBaseEventAttribute() {
    return { key: "", value: "", index: false };
}
exports.EventAttribute = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        if (message.index === true) {
            writer.uint32(24).bool(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventAttribute();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.key = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.value = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.index = reader.bool();
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
            key: isSet(object.key) ? String(object.key) : "",
            value: isSet(object.value) ? String(object.value) : "",
            index: isSet(object.index) ? Boolean(object.index) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.key !== "") {
            obj.key = message.key;
        }
        if (message.value !== "") {
            obj.value = message.value;
        }
        if (message.index === true) {
            obj.index = message.index;
        }
        return obj;
    },
    create(base) {
        return exports.EventAttribute.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseEventAttribute();
        message.key = object.key ?? "";
        message.value = object.value ?? "";
        message.index = object.index ?? false;
        return message;
    },
};
function createBaseExecTxResult() {
    return { code: 0, data: new Uint8Array(0), log: "", info: "", gasWanted: 0, gasUsed: 0, events: [], codespace: "" };
}
exports.ExecTxResult = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.code !== 0) {
            writer.uint32(8).uint32(message.code);
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        if (message.log !== "") {
            writer.uint32(26).string(message.log);
        }
        if (message.info !== "") {
            writer.uint32(34).string(message.info);
        }
        if (message.gasWanted !== 0) {
            writer.uint32(40).int64(message.gasWanted);
        }
        if (message.gasUsed !== 0) {
            writer.uint32(48).int64(message.gasUsed);
        }
        for (const v of message.events) {
            exports.Event.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.codespace !== "") {
            writer.uint32(66).string(message.codespace);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExecTxResult();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.code = reader.uint32();
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
                    message.gasWanted = longToNumber(reader.int64());
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.gasUsed = longToNumber(reader.int64());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.events.push(exports.Event.decode(reader, reader.uint32()));
                    continue;
                case 8:
                    if (tag !== 66) {
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
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0),
            log: isSet(object.log) ? String(object.log) : "",
            info: isSet(object.info) ? String(object.info) : "",
            gasWanted: isSet(object.gas_wanted) ? Number(object.gas_wanted) : 0,
            gasUsed: isSet(object.gas_used) ? Number(object.gas_used) : 0,
            events: Array.isArray(object?.events) ? object.events.map((e) => exports.Event.fromJSON(e)) : [],
            codespace: isSet(object.codespace) ? String(object.codespace) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.code !== 0) {
            obj.code = Math.round(message.code);
        }
        if (message.data.length !== 0) {
            obj.data = base64FromBytes(message.data);
        }
        if (message.log !== "") {
            obj.log = message.log;
        }
        if (message.info !== "") {
            obj.info = message.info;
        }
        if (message.gasWanted !== 0) {
            obj.gas_wanted = Math.round(message.gasWanted);
        }
        if (message.gasUsed !== 0) {
            obj.gas_used = Math.round(message.gasUsed);
        }
        if (message.events?.length) {
            obj.events = message.events.map((e) => exports.Event.toJSON(e));
        }
        if (message.codespace !== "") {
            obj.codespace = message.codespace;
        }
        return obj;
    },
    create(base) {
        return exports.ExecTxResult.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseExecTxResult();
        message.code = object.code ?? 0;
        message.data = object.data ?? new Uint8Array(0);
        message.log = object.log ?? "";
        message.info = object.info ?? "";
        message.gasWanted = object.gasWanted ?? 0;
        message.gasUsed = object.gasUsed ?? 0;
        message.events = object.events?.map((e) => exports.Event.fromPartial(e)) || [];
        message.codespace = object.codespace ?? "";
        return message;
    },
};
function createBaseTxResult() {
    return { height: 0, index: 0, tx: new Uint8Array(0), result: undefined };
}
exports.TxResult = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.height !== 0) {
            writer.uint32(8).int64(message.height);
        }
        if (message.index !== 0) {
            writer.uint32(16).uint32(message.index);
        }
        if (message.tx.length !== 0) {
            writer.uint32(26).bytes(message.tx);
        }
        if (message.result !== undefined) {
            exports.ExecTxResult.encode(message.result, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxResult();
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
                    message.index = reader.uint32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.tx = reader.bytes();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.result = exports.ExecTxResult.decode(reader, reader.uint32());
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
            index: isSet(object.index) ? Number(object.index) : 0,
            tx: isSet(object.tx) ? bytesFromBase64(object.tx) : new Uint8Array(0),
            result: isSet(object.result) ? exports.ExecTxResult.fromJSON(object.result) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.height !== 0) {
            obj.height = Math.round(message.height);
        }
        if (message.index !== 0) {
            obj.index = Math.round(message.index);
        }
        if (message.tx.length !== 0) {
            obj.tx = base64FromBytes(message.tx);
        }
        if (message.result !== undefined) {
            obj.result = exports.ExecTxResult.toJSON(message.result);
        }
        return obj;
    },
    create(base) {
        return exports.TxResult.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseTxResult();
        message.height = object.height ?? 0;
        message.index = object.index ?? 0;
        message.tx = object.tx ?? new Uint8Array(0);
        message.result = (object.result !== undefined && object.result !== null)
            ? exports.ExecTxResult.fromPartial(object.result)
            : undefined;
        return message;
    },
};
function createBaseValidator() {
    return { address: new Uint8Array(0), power: 0 };
}
exports.Validator = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.address.length !== 0) {
            writer.uint32(10).bytes(message.address);
        }
        if (message.power !== 0) {
            writer.uint32(24).int64(message.power);
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
                    message.address = reader.bytes();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.power = longToNumber(reader.int64());
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
            address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(0),
            power: isSet(object.power) ? Number(object.power) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.address.length !== 0) {
            obj.address = base64FromBytes(message.address);
        }
        if (message.power !== 0) {
            obj.power = Math.round(message.power);
        }
        return obj;
    },
    create(base) {
        return exports.Validator.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseValidator();
        message.address = object.address ?? new Uint8Array(0);
        message.power = object.power ?? 0;
        return message;
    },
};
function createBaseValidatorUpdate() {
    return { pubKey: undefined, power: 0 };
}
exports.ValidatorUpdate = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pubKey !== undefined) {
            keys_1.PublicKey.encode(message.pubKey, writer.uint32(10).fork()).ldelim();
        }
        if (message.power !== 0) {
            writer.uint32(16).int64(message.power);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorUpdate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.pubKey = keys_1.PublicKey.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.power = longToNumber(reader.int64());
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
            pubKey: isSet(object.pubKey) ? keys_1.PublicKey.fromJSON(object.pubKey) : undefined,
            power: isSet(object.power) ? Number(object.power) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.pubKey !== undefined) {
            obj.pubKey = keys_1.PublicKey.toJSON(message.pubKey);
        }
        if (message.power !== 0) {
            obj.power = Math.round(message.power);
        }
        return obj;
    },
    create(base) {
        return exports.ValidatorUpdate.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseValidatorUpdate();
        message.pubKey = (object.pubKey !== undefined && object.pubKey !== null)
            ? keys_1.PublicKey.fromPartial(object.pubKey)
            : undefined;
        message.power = object.power ?? 0;
        return message;
    },
};
function createBaseVoteInfo() {
    return { validator: undefined, blockIdFlag: 0 };
}
exports.VoteInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.validator !== undefined) {
            exports.Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
        }
        if (message.blockIdFlag !== 0) {
            writer.uint32(24).int32(message.blockIdFlag);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVoteInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.validator = exports.Validator.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.blockIdFlag = reader.int32();
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
            validator: isSet(object.validator) ? exports.Validator.fromJSON(object.validator) : undefined,
            blockIdFlag: isSet(object.blockIdFlag) ? (0, validator_1.blockIDFlagFromJSON)(object.blockIdFlag) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.validator !== undefined) {
            obj.validator = exports.Validator.toJSON(message.validator);
        }
        if (message.blockIdFlag !== 0) {
            obj.blockIdFlag = (0, validator_1.blockIDFlagToJSON)(message.blockIdFlag);
        }
        return obj;
    },
    create(base) {
        return exports.VoteInfo.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseVoteInfo();
        message.validator = (object.validator !== undefined && object.validator !== null)
            ? exports.Validator.fromPartial(object.validator)
            : undefined;
        message.blockIdFlag = object.blockIdFlag ?? 0;
        return message;
    },
};
function createBaseExtendedVoteInfo() {
    return {
        validator: undefined,
        voteExtension: new Uint8Array(0),
        extensionSignature: new Uint8Array(0),
        blockIdFlag: 0,
    };
}
exports.ExtendedVoteInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.validator !== undefined) {
            exports.Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
        }
        if (message.voteExtension.length !== 0) {
            writer.uint32(26).bytes(message.voteExtension);
        }
        if (message.extensionSignature.length !== 0) {
            writer.uint32(34).bytes(message.extensionSignature);
        }
        if (message.blockIdFlag !== 0) {
            writer.uint32(40).int32(message.blockIdFlag);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExtendedVoteInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.validator = exports.Validator.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.voteExtension = reader.bytes();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.extensionSignature = reader.bytes();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.blockIdFlag = reader.int32();
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
            validator: isSet(object.validator) ? exports.Validator.fromJSON(object.validator) : undefined,
            voteExtension: isSet(object.voteExtension) ? bytesFromBase64(object.voteExtension) : new Uint8Array(0),
            extensionSignature: isSet(object.extensionSignature)
                ? bytesFromBase64(object.extensionSignature)
                : new Uint8Array(0),
            blockIdFlag: isSet(object.blockIdFlag) ? (0, validator_1.blockIDFlagFromJSON)(object.blockIdFlag) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.validator !== undefined) {
            obj.validator = exports.Validator.toJSON(message.validator);
        }
        if (message.voteExtension.length !== 0) {
            obj.voteExtension = base64FromBytes(message.voteExtension);
        }
        if (message.extensionSignature.length !== 0) {
            obj.extensionSignature = base64FromBytes(message.extensionSignature);
        }
        if (message.blockIdFlag !== 0) {
            obj.blockIdFlag = (0, validator_1.blockIDFlagToJSON)(message.blockIdFlag);
        }
        return obj;
    },
    create(base) {
        return exports.ExtendedVoteInfo.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseExtendedVoteInfo();
        message.validator = (object.validator !== undefined && object.validator !== null)
            ? exports.Validator.fromPartial(object.validator)
            : undefined;
        message.voteExtension = object.voteExtension ?? new Uint8Array(0);
        message.extensionSignature = object.extensionSignature ?? new Uint8Array(0);
        message.blockIdFlag = object.blockIdFlag ?? 0;
        return message;
    },
};
function createBaseMisbehavior() {
    return { type: 0, validator: undefined, height: 0, time: undefined, totalVotingPower: 0 };
}
exports.Misbehavior = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.validator !== undefined) {
            exports.Validator.encode(message.validator, writer.uint32(18).fork()).ldelim();
        }
        if (message.height !== 0) {
            writer.uint32(24).int64(message.height);
        }
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.time), writer.uint32(34).fork()).ldelim();
        }
        if (message.totalVotingPower !== 0) {
            writer.uint32(40).int64(message.totalVotingPower);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMisbehavior();
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
                    if (tag !== 18) {
                        break;
                    }
                    message.validator = exports.Validator.decode(reader, reader.uint32());
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
                    if (tag !== 40) {
                        break;
                    }
                    message.totalVotingPower = longToNumber(reader.int64());
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
            type: isSet(object.type) ? misbehaviorTypeFromJSON(object.type) : 0,
            validator: isSet(object.validator) ? exports.Validator.fromJSON(object.validator) : undefined,
            height: isSet(object.height) ? Number(object.height) : 0,
            time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
            totalVotingPower: isSet(object.totalVotingPower) ? Number(object.totalVotingPower) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.type !== 0) {
            obj.type = misbehaviorTypeToJSON(message.type);
        }
        if (message.validator !== undefined) {
            obj.validator = exports.Validator.toJSON(message.validator);
        }
        if (message.height !== 0) {
            obj.height = Math.round(message.height);
        }
        if (message.time !== undefined) {
            obj.time = message.time.toISOString();
        }
        if (message.totalVotingPower !== 0) {
            obj.totalVotingPower = Math.round(message.totalVotingPower);
        }
        return obj;
    },
    create(base) {
        return exports.Misbehavior.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMisbehavior();
        message.type = object.type ?? 0;
        message.validator = (object.validator !== undefined && object.validator !== null)
            ? exports.Validator.fromPartial(object.validator)
            : undefined;
        message.height = object.height ?? 0;
        message.time = object.time ?? undefined;
        message.totalVotingPower = object.totalVotingPower ?? 0;
        return message;
    },
};
function createBaseSnapshot() {
    return { height: 0, format: 0, chunks: 0, hash: new Uint8Array(0), metadata: new Uint8Array(0) };
}
exports.Snapshot = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.height !== 0) {
            writer.uint32(8).uint64(message.height);
        }
        if (message.format !== 0) {
            writer.uint32(16).uint32(message.format);
        }
        if (message.chunks !== 0) {
            writer.uint32(24).uint32(message.chunks);
        }
        if (message.hash.length !== 0) {
            writer.uint32(34).bytes(message.hash);
        }
        if (message.metadata.length !== 0) {
            writer.uint32(42).bytes(message.metadata);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSnapshot();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.height = longToNumber(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.format = reader.uint32();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.chunks = reader.uint32();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.hash = reader.bytes();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.metadata = reader.bytes();
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
            format: isSet(object.format) ? Number(object.format) : 0,
            chunks: isSet(object.chunks) ? Number(object.chunks) : 0,
            hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array(0),
            metadata: isSet(object.metadata) ? bytesFromBase64(object.metadata) : new Uint8Array(0),
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.height !== 0) {
            obj.height = Math.round(message.height);
        }
        if (message.format !== 0) {
            obj.format = Math.round(message.format);
        }
        if (message.chunks !== 0) {
            obj.chunks = Math.round(message.chunks);
        }
        if (message.hash.length !== 0) {
            obj.hash = base64FromBytes(message.hash);
        }
        if (message.metadata.length !== 0) {
            obj.metadata = base64FromBytes(message.metadata);
        }
        return obj;
    },
    create(base) {
        return exports.Snapshot.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSnapshot();
        message.height = object.height ?? 0;
        message.format = object.format ?? 0;
        message.chunks = object.chunks ?? 0;
        message.hash = object.hash ?? new Uint8Array(0);
        message.metadata = object.metadata ?? new Uint8Array(0);
        return message;
    },
};
exports.ABCIServiceName = "tendermint.abci.ABCI";
class ABCIClientImpl {
    constructor(rpc, opts) {
        this.service = opts?.service || exports.ABCIServiceName;
        this.rpc = rpc;
        this.Echo = this.Echo.bind(this);
        this.Flush = this.Flush.bind(this);
        this.Info = this.Info.bind(this);
        this.CheckTx = this.CheckTx.bind(this);
        this.Query = this.Query.bind(this);
        this.Commit = this.Commit.bind(this);
        this.InitChain = this.InitChain.bind(this);
        this.ListSnapshots = this.ListSnapshots.bind(this);
        this.OfferSnapshot = this.OfferSnapshot.bind(this);
        this.LoadSnapshotChunk = this.LoadSnapshotChunk.bind(this);
        this.ApplySnapshotChunk = this.ApplySnapshotChunk.bind(this);
        this.PrepareProposal = this.PrepareProposal.bind(this);
        this.ProcessProposal = this.ProcessProposal.bind(this);
        this.ExtendVote = this.ExtendVote.bind(this);
        this.VerifyVoteExtension = this.VerifyVoteExtension.bind(this);
        this.FinalizeBlock = this.FinalizeBlock.bind(this);
    }
    Echo(request) {
        const data = exports.RequestEcho.encode(request).finish();
        const promise = this.rpc.request(this.service, "Echo", data);
        return promise.then((data) => exports.ResponseEcho.decode(minimal_1.default.Reader.create(data)));
    }
    Flush(request) {
        const data = exports.RequestFlush.encode(request).finish();
        const promise = this.rpc.request(this.service, "Flush", data);
        return promise.then((data) => exports.ResponseFlush.decode(minimal_1.default.Reader.create(data)));
    }
    Info(request) {
        const data = exports.RequestInfo.encode(request).finish();
        const promise = this.rpc.request(this.service, "Info", data);
        return promise.then((data) => exports.ResponseInfo.decode(minimal_1.default.Reader.create(data)));
    }
    CheckTx(request) {
        const data = exports.RequestCheckTx.encode(request).finish();
        const promise = this.rpc.request(this.service, "CheckTx", data);
        return promise.then((data) => exports.ResponseCheckTx.decode(minimal_1.default.Reader.create(data)));
    }
    Query(request) {
        const data = exports.RequestQuery.encode(request).finish();
        const promise = this.rpc.request(this.service, "Query", data);
        return promise.then((data) => exports.ResponseQuery.decode(minimal_1.default.Reader.create(data)));
    }
    Commit(request) {
        const data = exports.RequestCommit.encode(request).finish();
        const promise = this.rpc.request(this.service, "Commit", data);
        return promise.then((data) => exports.ResponseCommit.decode(minimal_1.default.Reader.create(data)));
    }
    InitChain(request) {
        const data = exports.RequestInitChain.encode(request).finish();
        const promise = this.rpc.request(this.service, "InitChain", data);
        return promise.then((data) => exports.ResponseInitChain.decode(minimal_1.default.Reader.create(data)));
    }
    ListSnapshots(request) {
        const data = exports.RequestListSnapshots.encode(request).finish();
        const promise = this.rpc.request(this.service, "ListSnapshots", data);
        return promise.then((data) => exports.ResponseListSnapshots.decode(minimal_1.default.Reader.create(data)));
    }
    OfferSnapshot(request) {
        const data = exports.RequestOfferSnapshot.encode(request).finish();
        const promise = this.rpc.request(this.service, "OfferSnapshot", data);
        return promise.then((data) => exports.ResponseOfferSnapshot.decode(minimal_1.default.Reader.create(data)));
    }
    LoadSnapshotChunk(request) {
        const data = exports.RequestLoadSnapshotChunk.encode(request).finish();
        const promise = this.rpc.request(this.service, "LoadSnapshotChunk", data);
        return promise.then((data) => exports.ResponseLoadSnapshotChunk.decode(minimal_1.default.Reader.create(data)));
    }
    ApplySnapshotChunk(request) {
        const data = exports.RequestApplySnapshotChunk.encode(request).finish();
        const promise = this.rpc.request(this.service, "ApplySnapshotChunk", data);
        return promise.then((data) => exports.ResponseApplySnapshotChunk.decode(minimal_1.default.Reader.create(data)));
    }
    PrepareProposal(request) {
        const data = exports.RequestPrepareProposal.encode(request).finish();
        const promise = this.rpc.request(this.service, "PrepareProposal", data);
        return promise.then((data) => exports.ResponsePrepareProposal.decode(minimal_1.default.Reader.create(data)));
    }
    ProcessProposal(request) {
        const data = exports.RequestProcessProposal.encode(request).finish();
        const promise = this.rpc.request(this.service, "ProcessProposal", data);
        return promise.then((data) => exports.ResponseProcessProposal.decode(minimal_1.default.Reader.create(data)));
    }
    ExtendVote(request) {
        const data = exports.RequestExtendVote.encode(request).finish();
        const promise = this.rpc.request(this.service, "ExtendVote", data);
        return promise.then((data) => exports.ResponseExtendVote.decode(minimal_1.default.Reader.create(data)));
    }
    VerifyVoteExtension(request) {
        const data = exports.RequestVerifyVoteExtension.encode(request).finish();
        const promise = this.rpc.request(this.service, "VerifyVoteExtension", data);
        return promise.then((data) => exports.ResponseVerifyVoteExtension.decode(minimal_1.default.Reader.create(data)));
    }
    FinalizeBlock(request) {
        const data = exports.RequestFinalizeBlock.encode(request).finish();
        const promise = this.rpc.request(this.service, "FinalizeBlock", data);
        return promise.then((data) => exports.ResponseFinalizeBlock.decode(minimal_1.default.Reader.create(data)));
    }
}
exports.ABCIClientImpl = ABCIClientImpl;
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
