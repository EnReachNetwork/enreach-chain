/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "./params";

export const protobufPackage = "enreach.miner";

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

export interface MsgCreateMiner {
  creator: string;
  minerId: string;
  evmAddress: string;
  regionCode: string;
  status: string;
}

export interface MsgCreateMinerResponse {
  id: number;
}

export interface MsgUpdateMiner {
  creator: string;
  id: number;
  minerId: string;
  evmAddress: string;
  regionCode: string;
  status: string;
}

export interface MsgUpdateMinerResponse {
}

export interface MsgDeleteMiner {
  creator: string;
  id: number;
}

export interface MsgDeleteMinerResponse {
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

function createBaseMsgCreateMiner(): MsgCreateMiner {
  return { creator: "", minerId: "", evmAddress: "", regionCode: "", status: "" };
}

export const MsgCreateMiner = {
  encode(message: MsgCreateMiner, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.minerId !== "") {
      writer.uint32(18).string(message.minerId);
    }
    if (message.evmAddress !== "") {
      writer.uint32(26).string(message.evmAddress);
    }
    if (message.regionCode !== "") {
      writer.uint32(34).string(message.regionCode);
    }
    if (message.status !== "") {
      writer.uint32(42).string(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateMiner {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateMiner();
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
          if (tag !== 18) {
            break;
          }

          message.minerId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.evmAddress = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.regionCode = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
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

  fromJSON(object: any): MsgCreateMiner {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      minerId: isSet(object.minerId) ? String(object.minerId) : "",
      evmAddress: isSet(object.evmAddress) ? String(object.evmAddress) : "",
      regionCode: isSet(object.regionCode) ? String(object.regionCode) : "",
      status: isSet(object.status) ? String(object.status) : "",
    };
  },

  toJSON(message: MsgCreateMiner): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.minerId !== "") {
      obj.minerId = message.minerId;
    }
    if (message.evmAddress !== "") {
      obj.evmAddress = message.evmAddress;
    }
    if (message.regionCode !== "") {
      obj.regionCode = message.regionCode;
    }
    if (message.status !== "") {
      obj.status = message.status;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateMiner>, I>>(base?: I): MsgCreateMiner {
    return MsgCreateMiner.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateMiner>, I>>(object: I): MsgCreateMiner {
    const message = createBaseMsgCreateMiner();
    message.creator = object.creator ?? "";
    message.minerId = object.minerId ?? "";
    message.evmAddress = object.evmAddress ?? "";
    message.regionCode = object.regionCode ?? "";
    message.status = object.status ?? "";
    return message;
  },
};

function createBaseMsgCreateMinerResponse(): MsgCreateMinerResponse {
  return { id: 0 };
}

export const MsgCreateMinerResponse = {
  encode(message: MsgCreateMinerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateMinerResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateMinerResponse();
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

  fromJSON(object: any): MsgCreateMinerResponse {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: MsgCreateMinerResponse): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateMinerResponse>, I>>(base?: I): MsgCreateMinerResponse {
    return MsgCreateMinerResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateMinerResponse>, I>>(object: I): MsgCreateMinerResponse {
    const message = createBaseMsgCreateMinerResponse();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgUpdateMiner(): MsgUpdateMiner {
  return { creator: "", id: 0, minerId: "", evmAddress: "", regionCode: "", status: "" };
}

export const MsgUpdateMiner = {
  encode(message: MsgUpdateMiner, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.minerId !== "") {
      writer.uint32(26).string(message.minerId);
    }
    if (message.evmAddress !== "") {
      writer.uint32(34).string(message.evmAddress);
    }
    if (message.regionCode !== "") {
      writer.uint32(42).string(message.regionCode);
    }
    if (message.status !== "") {
      writer.uint32(50).string(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateMiner {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMiner();
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
          if (tag !== 26) {
            break;
          }

          message.minerId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.evmAddress = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.regionCode = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
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

  fromJSON(object: any): MsgUpdateMiner {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
      minerId: isSet(object.minerId) ? String(object.minerId) : "",
      evmAddress: isSet(object.evmAddress) ? String(object.evmAddress) : "",
      regionCode: isSet(object.regionCode) ? String(object.regionCode) : "",
      status: isSet(object.status) ? String(object.status) : "",
    };
  },

  toJSON(message: MsgUpdateMiner): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.minerId !== "") {
      obj.minerId = message.minerId;
    }
    if (message.evmAddress !== "") {
      obj.evmAddress = message.evmAddress;
    }
    if (message.regionCode !== "") {
      obj.regionCode = message.regionCode;
    }
    if (message.status !== "") {
      obj.status = message.status;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateMiner>, I>>(base?: I): MsgUpdateMiner {
    return MsgUpdateMiner.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateMiner>, I>>(object: I): MsgUpdateMiner {
    const message = createBaseMsgUpdateMiner();
    message.creator = object.creator ?? "";
    message.id = object.id ?? 0;
    message.minerId = object.minerId ?? "";
    message.evmAddress = object.evmAddress ?? "";
    message.regionCode = object.regionCode ?? "";
    message.status = object.status ?? "";
    return message;
  },
};

function createBaseMsgUpdateMinerResponse(): MsgUpdateMinerResponse {
  return {};
}

export const MsgUpdateMinerResponse = {
  encode(_: MsgUpdateMinerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateMinerResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMinerResponse();
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

  fromJSON(_: any): MsgUpdateMinerResponse {
    return {};
  },

  toJSON(_: MsgUpdateMinerResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateMinerResponse>, I>>(base?: I): MsgUpdateMinerResponse {
    return MsgUpdateMinerResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateMinerResponse>, I>>(_: I): MsgUpdateMinerResponse {
    const message = createBaseMsgUpdateMinerResponse();
    return message;
  },
};

function createBaseMsgDeleteMiner(): MsgDeleteMiner {
  return { creator: "", id: 0 };
}

export const MsgDeleteMiner = {
  encode(message: MsgDeleteMiner, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteMiner {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteMiner();
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

  fromJSON(object: any): MsgDeleteMiner {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: MsgDeleteMiner): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgDeleteMiner>, I>>(base?: I): MsgDeleteMiner {
    return MsgDeleteMiner.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgDeleteMiner>, I>>(object: I): MsgDeleteMiner {
    const message = createBaseMsgDeleteMiner();
    message.creator = object.creator ?? "";
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgDeleteMinerResponse(): MsgDeleteMinerResponse {
  return {};
}

export const MsgDeleteMinerResponse = {
  encode(_: MsgDeleteMinerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteMinerResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteMinerResponse();
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

  fromJSON(_: any): MsgDeleteMinerResponse {
    return {};
  },

  toJSON(_: MsgDeleteMinerResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgDeleteMinerResponse>, I>>(base?: I): MsgDeleteMinerResponse {
    return MsgDeleteMinerResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgDeleteMinerResponse>, I>>(_: I): MsgDeleteMinerResponse {
    const message = createBaseMsgDeleteMinerResponse();
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
  CreateMiner(request: MsgCreateMiner): Promise<MsgCreateMinerResponse>;
  UpdateMiner(request: MsgUpdateMiner): Promise<MsgUpdateMinerResponse>;
  DeleteMiner(request: MsgDeleteMiner): Promise<MsgDeleteMinerResponse>;
}

export const MsgServiceName = "enreach.miner.Msg";
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MsgServiceName;
    this.rpc = rpc;
    this.UpdateParams = this.UpdateParams.bind(this);
    this.CreateMiner = this.CreateMiner.bind(this);
    this.UpdateMiner = this.UpdateMiner.bind(this);
    this.DeleteMiner = this.DeleteMiner.bind(this);
  }
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(_m0.Reader.create(data)));
  }

  CreateMiner(request: MsgCreateMiner): Promise<MsgCreateMinerResponse> {
    const data = MsgCreateMiner.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateMiner", data);
    return promise.then((data) => MsgCreateMinerResponse.decode(_m0.Reader.create(data)));
  }

  UpdateMiner(request: MsgUpdateMiner): Promise<MsgUpdateMinerResponse> {
    const data = MsgUpdateMiner.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateMiner", data);
    return promise.then((data) => MsgUpdateMinerResponse.decode(_m0.Reader.create(data)));
  }

  DeleteMiner(request: MsgDeleteMiner): Promise<MsgDeleteMinerResponse> {
    const data = MsgDeleteMiner.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeleteMiner", data);
    return promise.then((data) => MsgDeleteMinerResponse.decode(_m0.Reader.create(data)));
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
