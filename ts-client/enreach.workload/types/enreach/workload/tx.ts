/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { CheatStatusCR } from "./cheat_status";
import { Params } from "./params";
import { ReputationPointChangeRawData } from "./reputationpoint";
import { NodeScore } from "./workreport";

export const protobufPackage = "enreach.workload";

/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /** NOTE: All parameters must be supplied. */
  params: Params | undefined;
}

/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {
}

export interface MsgSubmitWorkreports {
  managerAccount: string;
  epoch: number;
  nodeScores: NodeScore[];
}

export interface MsgSubmitWorkreportsResponse {
}

export interface MsgUpdateWorkreportProcessBatchSize {
  signer: string;
  batchSize: number;
}

export interface MsgUpdateWorkreportProcessBatchSizeResponse {
}

export interface MsgUpdateHistoryEpochDataDepth {
  signer: string;
  depth: number;
}

export interface MsgUpdateHistoryEpochDataDepthResponse {
}

export interface MsgCreateSuperior {
  signer: string;
  account: string;
}

export interface MsgCreateSuperiorResponse {
}

export interface MsgUpdateSuperior {
  signer: string;
  account: string;
}

export interface MsgUpdateSuperiorResponse {
}

export interface MsgSubmitReputationPointChangeData {
  managerAccount: string;
  era: number;
  nodePoints: ReputationPointChangeRawData[];
}

export interface MsgSubmitReputationPointChangeDataResponse {
}

export interface MsgSubmitCheatStatusCR {
  managerAccount: string;
  era: number;
  nodeDatas: CheatStatusCR[];
}

export interface MsgSubmitCheatStatusCRResponse {
}

function createBaseMsgUpdateParams(): MsgUpdateParams {
  return { authority: "", params: undefined };
}

export const MsgUpdateParams = {
  encode(message: MsgUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.authority = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    if (message.authority !== "") {
      obj.authority = message.authority;
    }
    if (message.params !== undefined) {
      obj.params = Params.toJSON(message.params);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(base?: I): MsgUpdateParams {
    return MsgUpdateParams.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(object: I): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}

export const MsgUpdateParamsResponse = {
  encode(_: MsgUpdateParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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

  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },

  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(base?: I): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(_: I): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
};

function createBaseMsgSubmitWorkreports(): MsgSubmitWorkreports {
  return { managerAccount: "", epoch: 0, nodeScores: [] };
}

export const MsgSubmitWorkreports = {
  encode(message: MsgSubmitWorkreports, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.managerAccount !== "") {
      writer.uint32(10).string(message.managerAccount);
    }
    if (message.epoch !== 0) {
      writer.uint32(16).uint64(message.epoch);
    }
    for (const v of message.nodeScores) {
      NodeScore.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitWorkreports {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitWorkreports();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.managerAccount = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.epoch = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.nodeScores.push(NodeScore.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSubmitWorkreports {
    return {
      managerAccount: isSet(object.managerAccount) ? String(object.managerAccount) : "",
      epoch: isSet(object.epoch) ? Number(object.epoch) : 0,
      nodeScores: Array.isArray(object?.nodeScores) ? object.nodeScores.map((e: any) => NodeScore.fromJSON(e)) : [],
    };
  },

  toJSON(message: MsgSubmitWorkreports): unknown {
    const obj: any = {};
    if (message.managerAccount !== "") {
      obj.managerAccount = message.managerAccount;
    }
    if (message.epoch !== 0) {
      obj.epoch = Math.round(message.epoch);
    }
    if (message.nodeScores?.length) {
      obj.nodeScores = message.nodeScores.map((e) => NodeScore.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSubmitWorkreports>, I>>(base?: I): MsgSubmitWorkreports {
    return MsgSubmitWorkreports.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgSubmitWorkreports>, I>>(object: I): MsgSubmitWorkreports {
    const message = createBaseMsgSubmitWorkreports();
    message.managerAccount = object.managerAccount ?? "";
    message.epoch = object.epoch ?? 0;
    message.nodeScores = object.nodeScores?.map((e) => NodeScore.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgSubmitWorkreportsResponse(): MsgSubmitWorkreportsResponse {
  return {};
}

export const MsgSubmitWorkreportsResponse = {
  encode(_: MsgSubmitWorkreportsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitWorkreportsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitWorkreportsResponse();
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

  fromJSON(_: any): MsgSubmitWorkreportsResponse {
    return {};
  },

  toJSON(_: MsgSubmitWorkreportsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSubmitWorkreportsResponse>, I>>(base?: I): MsgSubmitWorkreportsResponse {
    return MsgSubmitWorkreportsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgSubmitWorkreportsResponse>, I>>(_: I): MsgSubmitWorkreportsResponse {
    const message = createBaseMsgSubmitWorkreportsResponse();
    return message;
  },
};

function createBaseMsgUpdateWorkreportProcessBatchSize(): MsgUpdateWorkreportProcessBatchSize {
  return { signer: "", batchSize: 0 };
}

export const MsgUpdateWorkreportProcessBatchSize = {
  encode(message: MsgUpdateWorkreportProcessBatchSize, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.batchSize !== 0) {
      writer.uint32(16).uint64(message.batchSize);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateWorkreportProcessBatchSize {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateWorkreportProcessBatchSize();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.signer = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.batchSize = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateWorkreportProcessBatchSize {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      batchSize: isSet(object.batchSize) ? Number(object.batchSize) : 0,
    };
  },

  toJSON(message: MsgUpdateWorkreportProcessBatchSize): unknown {
    const obj: any = {};
    if (message.signer !== "") {
      obj.signer = message.signer;
    }
    if (message.batchSize !== 0) {
      obj.batchSize = Math.round(message.batchSize);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateWorkreportProcessBatchSize>, I>>(
    base?: I,
  ): MsgUpdateWorkreportProcessBatchSize {
    return MsgUpdateWorkreportProcessBatchSize.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateWorkreportProcessBatchSize>, I>>(
    object: I,
  ): MsgUpdateWorkreportProcessBatchSize {
    const message = createBaseMsgUpdateWorkreportProcessBatchSize();
    message.signer = object.signer ?? "";
    message.batchSize = object.batchSize ?? 0;
    return message;
  },
};

function createBaseMsgUpdateWorkreportProcessBatchSizeResponse(): MsgUpdateWorkreportProcessBatchSizeResponse {
  return {};
}

export const MsgUpdateWorkreportProcessBatchSizeResponse = {
  encode(_: MsgUpdateWorkreportProcessBatchSizeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateWorkreportProcessBatchSizeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateWorkreportProcessBatchSizeResponse();
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

  fromJSON(_: any): MsgUpdateWorkreportProcessBatchSizeResponse {
    return {};
  },

  toJSON(_: MsgUpdateWorkreportProcessBatchSizeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateWorkreportProcessBatchSizeResponse>, I>>(
    base?: I,
  ): MsgUpdateWorkreportProcessBatchSizeResponse {
    return MsgUpdateWorkreportProcessBatchSizeResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateWorkreportProcessBatchSizeResponse>, I>>(
    _: I,
  ): MsgUpdateWorkreportProcessBatchSizeResponse {
    const message = createBaseMsgUpdateWorkreportProcessBatchSizeResponse();
    return message;
  },
};

function createBaseMsgUpdateHistoryEpochDataDepth(): MsgUpdateHistoryEpochDataDepth {
  return { signer: "", depth: 0 };
}

export const MsgUpdateHistoryEpochDataDepth = {
  encode(message: MsgUpdateHistoryEpochDataDepth, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.depth !== 0) {
      writer.uint32(16).uint64(message.depth);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateHistoryEpochDataDepth {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateHistoryEpochDataDepth();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.signer = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.depth = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateHistoryEpochDataDepth {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      depth: isSet(object.depth) ? Number(object.depth) : 0,
    };
  },

  toJSON(message: MsgUpdateHistoryEpochDataDepth): unknown {
    const obj: any = {};
    if (message.signer !== "") {
      obj.signer = message.signer;
    }
    if (message.depth !== 0) {
      obj.depth = Math.round(message.depth);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateHistoryEpochDataDepth>, I>>(base?: I): MsgUpdateHistoryEpochDataDepth {
    return MsgUpdateHistoryEpochDataDepth.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateHistoryEpochDataDepth>, I>>(
    object: I,
  ): MsgUpdateHistoryEpochDataDepth {
    const message = createBaseMsgUpdateHistoryEpochDataDepth();
    message.signer = object.signer ?? "";
    message.depth = object.depth ?? 0;
    return message;
  },
};

function createBaseMsgUpdateHistoryEpochDataDepthResponse(): MsgUpdateHistoryEpochDataDepthResponse {
  return {};
}

export const MsgUpdateHistoryEpochDataDepthResponse = {
  encode(_: MsgUpdateHistoryEpochDataDepthResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateHistoryEpochDataDepthResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateHistoryEpochDataDepthResponse();
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

  fromJSON(_: any): MsgUpdateHistoryEpochDataDepthResponse {
    return {};
  },

  toJSON(_: MsgUpdateHistoryEpochDataDepthResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateHistoryEpochDataDepthResponse>, I>>(
    base?: I,
  ): MsgUpdateHistoryEpochDataDepthResponse {
    return MsgUpdateHistoryEpochDataDepthResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateHistoryEpochDataDepthResponse>, I>>(
    _: I,
  ): MsgUpdateHistoryEpochDataDepthResponse {
    const message = createBaseMsgUpdateHistoryEpochDataDepthResponse();
    return message;
  },
};

function createBaseMsgCreateSuperior(): MsgCreateSuperior {
  return { signer: "", account: "" };
}

export const MsgCreateSuperior = {
  encode(message: MsgCreateSuperior, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.account !== "") {
      writer.uint32(18).string(message.account);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateSuperior {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateSuperior();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.signer = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.account = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateSuperior {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      account: isSet(object.account) ? String(object.account) : "",
    };
  },

  toJSON(message: MsgCreateSuperior): unknown {
    const obj: any = {};
    if (message.signer !== "") {
      obj.signer = message.signer;
    }
    if (message.account !== "") {
      obj.account = message.account;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateSuperior>, I>>(base?: I): MsgCreateSuperior {
    return MsgCreateSuperior.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateSuperior>, I>>(object: I): MsgCreateSuperior {
    const message = createBaseMsgCreateSuperior();
    message.signer = object.signer ?? "";
    message.account = object.account ?? "";
    return message;
  },
};

function createBaseMsgCreateSuperiorResponse(): MsgCreateSuperiorResponse {
  return {};
}

export const MsgCreateSuperiorResponse = {
  encode(_: MsgCreateSuperiorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateSuperiorResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateSuperiorResponse();
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

  fromJSON(_: any): MsgCreateSuperiorResponse {
    return {};
  },

  toJSON(_: MsgCreateSuperiorResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateSuperiorResponse>, I>>(base?: I): MsgCreateSuperiorResponse {
    return MsgCreateSuperiorResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateSuperiorResponse>, I>>(_: I): MsgCreateSuperiorResponse {
    const message = createBaseMsgCreateSuperiorResponse();
    return message;
  },
};

function createBaseMsgUpdateSuperior(): MsgUpdateSuperior {
  return { signer: "", account: "" };
}

export const MsgUpdateSuperior = {
  encode(message: MsgUpdateSuperior, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.account !== "") {
      writer.uint32(18).string(message.account);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateSuperior {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateSuperior();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.signer = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.account = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateSuperior {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      account: isSet(object.account) ? String(object.account) : "",
    };
  },

  toJSON(message: MsgUpdateSuperior): unknown {
    const obj: any = {};
    if (message.signer !== "") {
      obj.signer = message.signer;
    }
    if (message.account !== "") {
      obj.account = message.account;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateSuperior>, I>>(base?: I): MsgUpdateSuperior {
    return MsgUpdateSuperior.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateSuperior>, I>>(object: I): MsgUpdateSuperior {
    const message = createBaseMsgUpdateSuperior();
    message.signer = object.signer ?? "";
    message.account = object.account ?? "";
    return message;
  },
};

function createBaseMsgUpdateSuperiorResponse(): MsgUpdateSuperiorResponse {
  return {};
}

export const MsgUpdateSuperiorResponse = {
  encode(_: MsgUpdateSuperiorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateSuperiorResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateSuperiorResponse();
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

  fromJSON(_: any): MsgUpdateSuperiorResponse {
    return {};
  },

  toJSON(_: MsgUpdateSuperiorResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateSuperiorResponse>, I>>(base?: I): MsgUpdateSuperiorResponse {
    return MsgUpdateSuperiorResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateSuperiorResponse>, I>>(_: I): MsgUpdateSuperiorResponse {
    const message = createBaseMsgUpdateSuperiorResponse();
    return message;
  },
};

function createBaseMsgSubmitReputationPointChangeData(): MsgSubmitReputationPointChangeData {
  return { managerAccount: "", era: 0, nodePoints: [] };
}

export const MsgSubmitReputationPointChangeData = {
  encode(message: MsgSubmitReputationPointChangeData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.managerAccount !== "") {
      writer.uint32(10).string(message.managerAccount);
    }
    if (message.era !== 0) {
      writer.uint32(16).uint64(message.era);
    }
    for (const v of message.nodePoints) {
      ReputationPointChangeRawData.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitReputationPointChangeData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitReputationPointChangeData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.managerAccount = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.era = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.nodePoints.push(ReputationPointChangeRawData.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSubmitReputationPointChangeData {
    return {
      managerAccount: isSet(object.managerAccount) ? String(object.managerAccount) : "",
      era: isSet(object.era) ? Number(object.era) : 0,
      nodePoints: Array.isArray(object?.nodePoints)
        ? object.nodePoints.map((e: any) => ReputationPointChangeRawData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgSubmitReputationPointChangeData): unknown {
    const obj: any = {};
    if (message.managerAccount !== "") {
      obj.managerAccount = message.managerAccount;
    }
    if (message.era !== 0) {
      obj.era = Math.round(message.era);
    }
    if (message.nodePoints?.length) {
      obj.nodePoints = message.nodePoints.map((e) => ReputationPointChangeRawData.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSubmitReputationPointChangeData>, I>>(
    base?: I,
  ): MsgSubmitReputationPointChangeData {
    return MsgSubmitReputationPointChangeData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgSubmitReputationPointChangeData>, I>>(
    object: I,
  ): MsgSubmitReputationPointChangeData {
    const message = createBaseMsgSubmitReputationPointChangeData();
    message.managerAccount = object.managerAccount ?? "";
    message.era = object.era ?? 0;
    message.nodePoints = object.nodePoints?.map((e) => ReputationPointChangeRawData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgSubmitReputationPointChangeDataResponse(): MsgSubmitReputationPointChangeDataResponse {
  return {};
}

export const MsgSubmitReputationPointChangeDataResponse = {
  encode(_: MsgSubmitReputationPointChangeDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitReputationPointChangeDataResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitReputationPointChangeDataResponse();
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

  fromJSON(_: any): MsgSubmitReputationPointChangeDataResponse {
    return {};
  },

  toJSON(_: MsgSubmitReputationPointChangeDataResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSubmitReputationPointChangeDataResponse>, I>>(
    base?: I,
  ): MsgSubmitReputationPointChangeDataResponse {
    return MsgSubmitReputationPointChangeDataResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgSubmitReputationPointChangeDataResponse>, I>>(
    _: I,
  ): MsgSubmitReputationPointChangeDataResponse {
    const message = createBaseMsgSubmitReputationPointChangeDataResponse();
    return message;
  },
};

function createBaseMsgSubmitCheatStatusCR(): MsgSubmitCheatStatusCR {
  return { managerAccount: "", era: 0, nodeDatas: [] };
}

export const MsgSubmitCheatStatusCR = {
  encode(message: MsgSubmitCheatStatusCR, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.managerAccount !== "") {
      writer.uint32(10).string(message.managerAccount);
    }
    if (message.era !== 0) {
      writer.uint32(16).uint64(message.era);
    }
    for (const v of message.nodeDatas) {
      CheatStatusCR.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitCheatStatusCR {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitCheatStatusCR();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.managerAccount = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.era = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.nodeDatas.push(CheatStatusCR.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSubmitCheatStatusCR {
    return {
      managerAccount: isSet(object.managerAccount) ? String(object.managerAccount) : "",
      era: isSet(object.era) ? Number(object.era) : 0,
      nodeDatas: Array.isArray(object?.nodeDatas) ? object.nodeDatas.map((e: any) => CheatStatusCR.fromJSON(e)) : [],
    };
  },

  toJSON(message: MsgSubmitCheatStatusCR): unknown {
    const obj: any = {};
    if (message.managerAccount !== "") {
      obj.managerAccount = message.managerAccount;
    }
    if (message.era !== 0) {
      obj.era = Math.round(message.era);
    }
    if (message.nodeDatas?.length) {
      obj.nodeDatas = message.nodeDatas.map((e) => CheatStatusCR.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSubmitCheatStatusCR>, I>>(base?: I): MsgSubmitCheatStatusCR {
    return MsgSubmitCheatStatusCR.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgSubmitCheatStatusCR>, I>>(object: I): MsgSubmitCheatStatusCR {
    const message = createBaseMsgSubmitCheatStatusCR();
    message.managerAccount = object.managerAccount ?? "";
    message.era = object.era ?? 0;
    message.nodeDatas = object.nodeDatas?.map((e) => CheatStatusCR.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgSubmitCheatStatusCRResponse(): MsgSubmitCheatStatusCRResponse {
  return {};
}

export const MsgSubmitCheatStatusCRResponse = {
  encode(_: MsgSubmitCheatStatusCRResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitCheatStatusCRResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitCheatStatusCRResponse();
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

  fromJSON(_: any): MsgSubmitCheatStatusCRResponse {
    return {};
  },

  toJSON(_: MsgSubmitCheatStatusCRResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSubmitCheatStatusCRResponse>, I>>(base?: I): MsgSubmitCheatStatusCRResponse {
    return MsgSubmitCheatStatusCRResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgSubmitCheatStatusCRResponse>, I>>(_: I): MsgSubmitCheatStatusCRResponse {
    const message = createBaseMsgSubmitCheatStatusCRResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /**
   * UpdateParams defines a (governance) operation for updating the module
   * parameters. The authority defaults to the x/gov module account.
   */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  SubmitWorkreports(request: MsgSubmitWorkreports): Promise<MsgSubmitWorkreportsResponse>;
  UpdateWorkreportProcessBatchSize(
    request: MsgUpdateWorkreportProcessBatchSize,
  ): Promise<MsgUpdateWorkreportProcessBatchSizeResponse>;
  UpdateHistoryEpochDataDepth(request: MsgUpdateHistoryEpochDataDepth): Promise<MsgUpdateHistoryEpochDataDepthResponse>;
  CreateSuperior(request: MsgCreateSuperior): Promise<MsgCreateSuperiorResponse>;
  UpdateSuperior(request: MsgUpdateSuperior): Promise<MsgUpdateSuperiorResponse>;
  SubmitReputationPointChangeData(
    request: MsgSubmitReputationPointChangeData,
  ): Promise<MsgSubmitReputationPointChangeDataResponse>;
  SubmitCheatStatusCR(request: MsgSubmitCheatStatusCR): Promise<MsgSubmitCheatStatusCRResponse>;
}

export const MsgServiceName = "enreach.workload.Msg";
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MsgServiceName;
    this.rpc = rpc;
    this.UpdateParams = this.UpdateParams.bind(this);
    this.SubmitWorkreports = this.SubmitWorkreports.bind(this);
    this.UpdateWorkreportProcessBatchSize = this.UpdateWorkreportProcessBatchSize.bind(this);
    this.UpdateHistoryEpochDataDepth = this.UpdateHistoryEpochDataDepth.bind(this);
    this.CreateSuperior = this.CreateSuperior.bind(this);
    this.UpdateSuperior = this.UpdateSuperior.bind(this);
    this.SubmitReputationPointChangeData = this.SubmitReputationPointChangeData.bind(this);
    this.SubmitCheatStatusCR = this.SubmitCheatStatusCR.bind(this);
  }
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(_m0.Reader.create(data)));
  }

  SubmitWorkreports(request: MsgSubmitWorkreports): Promise<MsgSubmitWorkreportsResponse> {
    const data = MsgSubmitWorkreports.encode(request).finish();
    const promise = this.rpc.request(this.service, "SubmitWorkreports", data);
    return promise.then((data) => MsgSubmitWorkreportsResponse.decode(_m0.Reader.create(data)));
  }

  UpdateWorkreportProcessBatchSize(
    request: MsgUpdateWorkreportProcessBatchSize,
  ): Promise<MsgUpdateWorkreportProcessBatchSizeResponse> {
    const data = MsgUpdateWorkreportProcessBatchSize.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateWorkreportProcessBatchSize", data);
    return promise.then((data) => MsgUpdateWorkreportProcessBatchSizeResponse.decode(_m0.Reader.create(data)));
  }

  UpdateHistoryEpochDataDepth(
    request: MsgUpdateHistoryEpochDataDepth,
  ): Promise<MsgUpdateHistoryEpochDataDepthResponse> {
    const data = MsgUpdateHistoryEpochDataDepth.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateHistoryEpochDataDepth", data);
    return promise.then((data) => MsgUpdateHistoryEpochDataDepthResponse.decode(_m0.Reader.create(data)));
  }

  CreateSuperior(request: MsgCreateSuperior): Promise<MsgCreateSuperiorResponse> {
    const data = MsgCreateSuperior.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateSuperior", data);
    return promise.then((data) => MsgCreateSuperiorResponse.decode(_m0.Reader.create(data)));
  }

  UpdateSuperior(request: MsgUpdateSuperior): Promise<MsgUpdateSuperiorResponse> {
    const data = MsgUpdateSuperior.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateSuperior", data);
    return promise.then((data) => MsgUpdateSuperiorResponse.decode(_m0.Reader.create(data)));
  }

  SubmitReputationPointChangeData(
    request: MsgSubmitReputationPointChangeData,
  ): Promise<MsgSubmitReputationPointChangeDataResponse> {
    const data = MsgSubmitReputationPointChangeData.encode(request).finish();
    const promise = this.rpc.request(this.service, "SubmitReputationPointChangeData", data);
    return promise.then((data) => MsgSubmitReputationPointChangeDataResponse.decode(_m0.Reader.create(data)));
  }

  SubmitCheatStatusCR(request: MsgSubmitCheatStatusCR): Promise<MsgSubmitCheatStatusCRResponse> {
    const data = MsgSubmitCheatStatusCR.encode(request).finish();
    const promise = this.rpc.request(this.service, "SubmitCheatStatusCR", data);
    return promise.then((data) => MsgSubmitCheatStatusCRResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

declare const self: any | undefined;
declare const window: any | undefined;
declare const global: any | undefined;
const tsProtoGlobalThis: any = (() => {
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

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
