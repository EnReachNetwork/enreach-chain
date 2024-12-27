/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "./params";

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

export interface MsgCreateWorkload {
  creator: string;
  epoch: number;
  minerId: string;
  score: number;
  managerId: string;
}

export interface MsgCreateWorkloadResponse {
  id: number;
}

export interface MsgUpdateWorkload {
  creator: string;
  id: number;
  epoch: number;
  minerId: string;
  score: number;
  managerId: string;
}

export interface MsgUpdateWorkloadResponse {
}

export interface MsgDeleteWorkload {
  creator: string;
  id: number;
}

export interface MsgDeleteWorkloadResponse {
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

function createBaseMsgCreateWorkload(): MsgCreateWorkload {
  return { creator: "", epoch: 0, minerId: "", score: 0, managerId: "" };
}

export const MsgCreateWorkload = {
  encode(message: MsgCreateWorkload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.epoch !== 0) {
      writer.uint32(16).uint64(message.epoch);
    }
    if (message.minerId !== "") {
      writer.uint32(26).string(message.minerId);
    }
    if (message.score !== 0) {
      writer.uint32(32).uint64(message.score);
    }
    if (message.managerId !== "") {
      writer.uint32(42).string(message.managerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateWorkload {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateWorkload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
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

          message.minerId = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.score = longToNumber(reader.uint64() as Long);
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.managerId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateWorkload {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      epoch: isSet(object.epoch) ? Number(object.epoch) : 0,
      minerId: isSet(object.minerId) ? String(object.minerId) : "",
      score: isSet(object.score) ? Number(object.score) : 0,
      managerId: isSet(object.managerId) ? String(object.managerId) : "",
    };
  },

  toJSON(message: MsgCreateWorkload): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.epoch !== 0) {
      obj.epoch = Math.round(message.epoch);
    }
    if (message.minerId !== "") {
      obj.minerId = message.minerId;
    }
    if (message.score !== 0) {
      obj.score = Math.round(message.score);
    }
    if (message.managerId !== "") {
      obj.managerId = message.managerId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateWorkload>, I>>(base?: I): MsgCreateWorkload {
    return MsgCreateWorkload.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateWorkload>, I>>(object: I): MsgCreateWorkload {
    const message = createBaseMsgCreateWorkload();
    message.creator = object.creator ?? "";
    message.epoch = object.epoch ?? 0;
    message.minerId = object.minerId ?? "";
    message.score = object.score ?? 0;
    message.managerId = object.managerId ?? "";
    return message;
  },
};

function createBaseMsgCreateWorkloadResponse(): MsgCreateWorkloadResponse {
  return { id: 0 };
}

export const MsgCreateWorkloadResponse = {
  encode(message: MsgCreateWorkloadResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateWorkloadResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateWorkloadResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateWorkloadResponse {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: MsgCreateWorkloadResponse): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateWorkloadResponse>, I>>(base?: I): MsgCreateWorkloadResponse {
    return MsgCreateWorkloadResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateWorkloadResponse>, I>>(object: I): MsgCreateWorkloadResponse {
    const message = createBaseMsgCreateWorkloadResponse();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgUpdateWorkload(): MsgUpdateWorkload {
  return { creator: "", id: 0, epoch: 0, minerId: "", score: 0, managerId: "" };
}

export const MsgUpdateWorkload = {
  encode(message: MsgUpdateWorkload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.epoch !== 0) {
      writer.uint32(24).uint64(message.epoch);
    }
    if (message.minerId !== "") {
      writer.uint32(34).string(message.minerId);
    }
    if (message.score !== 0) {
      writer.uint32(40).uint64(message.score);
    }
    if (message.managerId !== "") {
      writer.uint32(50).string(message.managerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateWorkload {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateWorkload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.id = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.epoch = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.minerId = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.score = longToNumber(reader.uint64() as Long);
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.managerId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateWorkload {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
      epoch: isSet(object.epoch) ? Number(object.epoch) : 0,
      minerId: isSet(object.minerId) ? String(object.minerId) : "",
      score: isSet(object.score) ? Number(object.score) : 0,
      managerId: isSet(object.managerId) ? String(object.managerId) : "",
    };
  },

  toJSON(message: MsgUpdateWorkload): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.epoch !== 0) {
      obj.epoch = Math.round(message.epoch);
    }
    if (message.minerId !== "") {
      obj.minerId = message.minerId;
    }
    if (message.score !== 0) {
      obj.score = Math.round(message.score);
    }
    if (message.managerId !== "") {
      obj.managerId = message.managerId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateWorkload>, I>>(base?: I): MsgUpdateWorkload {
    return MsgUpdateWorkload.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateWorkload>, I>>(object: I): MsgUpdateWorkload {
    const message = createBaseMsgUpdateWorkload();
    message.creator = object.creator ?? "";
    message.id = object.id ?? 0;
    message.epoch = object.epoch ?? 0;
    message.minerId = object.minerId ?? "";
    message.score = object.score ?? 0;
    message.managerId = object.managerId ?? "";
    return message;
  },
};

function createBaseMsgUpdateWorkloadResponse(): MsgUpdateWorkloadResponse {
  return {};
}

export const MsgUpdateWorkloadResponse = {
  encode(_: MsgUpdateWorkloadResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateWorkloadResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateWorkloadResponse();
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

  fromJSON(_: any): MsgUpdateWorkloadResponse {
    return {};
  },

  toJSON(_: MsgUpdateWorkloadResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateWorkloadResponse>, I>>(base?: I): MsgUpdateWorkloadResponse {
    return MsgUpdateWorkloadResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateWorkloadResponse>, I>>(_: I): MsgUpdateWorkloadResponse {
    const message = createBaseMsgUpdateWorkloadResponse();
    return message;
  },
};

function createBaseMsgDeleteWorkload(): MsgDeleteWorkload {
  return { creator: "", id: 0 };
}

export const MsgDeleteWorkload = {
  encode(message: MsgDeleteWorkload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteWorkload {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteWorkload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.id = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteWorkload {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: MsgDeleteWorkload): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgDeleteWorkload>, I>>(base?: I): MsgDeleteWorkload {
    return MsgDeleteWorkload.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgDeleteWorkload>, I>>(object: I): MsgDeleteWorkload {
    const message = createBaseMsgDeleteWorkload();
    message.creator = object.creator ?? "";
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgDeleteWorkloadResponse(): MsgDeleteWorkloadResponse {
  return {};
}

export const MsgDeleteWorkloadResponse = {
  encode(_: MsgDeleteWorkloadResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteWorkloadResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteWorkloadResponse();
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

  fromJSON(_: any): MsgDeleteWorkloadResponse {
    return {};
  },

  toJSON(_: MsgDeleteWorkloadResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgDeleteWorkloadResponse>, I>>(base?: I): MsgDeleteWorkloadResponse {
    return MsgDeleteWorkloadResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgDeleteWorkloadResponse>, I>>(_: I): MsgDeleteWorkloadResponse {
    const message = createBaseMsgDeleteWorkloadResponse();
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
  CreateWorkload(request: MsgCreateWorkload): Promise<MsgCreateWorkloadResponse>;
  UpdateWorkload(request: MsgUpdateWorkload): Promise<MsgUpdateWorkloadResponse>;
  DeleteWorkload(request: MsgDeleteWorkload): Promise<MsgDeleteWorkloadResponse>;
}

export const MsgServiceName = "enreach.workload.Msg";
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MsgServiceName;
    this.rpc = rpc;
    this.UpdateParams = this.UpdateParams.bind(this);
    this.CreateWorkload = this.CreateWorkload.bind(this);
    this.UpdateWorkload = this.UpdateWorkload.bind(this);
    this.DeleteWorkload = this.DeleteWorkload.bind(this);
  }
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(_m0.Reader.create(data)));
  }

  CreateWorkload(request: MsgCreateWorkload): Promise<MsgCreateWorkloadResponse> {
    const data = MsgCreateWorkload.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateWorkload", data);
    return promise.then((data) => MsgCreateWorkloadResponse.decode(_m0.Reader.create(data)));
  }

  UpdateWorkload(request: MsgUpdateWorkload): Promise<MsgUpdateWorkloadResponse> {
    const data = MsgUpdateWorkload.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateWorkload", data);
    return promise.then((data) => MsgUpdateWorkloadResponse.decode(_m0.Reader.create(data)));
  }

  DeleteWorkload(request: MsgDeleteWorkload): Promise<MsgDeleteWorkloadResponse> {
    const data = MsgDeleteWorkload.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeleteWorkload", data);
    return promise.then((data) => MsgDeleteWorkloadResponse.decode(_m0.Reader.create(data)));
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
