/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "./params";

export const protobufPackage = "enreach.manager";

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

export interface MsgCreateManager {
  creator: string;
  managerId: string;
  evmAddress: string;
  regionCode: string;
  status: string;
}

export interface MsgCreateManagerResponse {
  id: number;
}

export interface MsgUpdateManager {
  creator: string;
  id: number;
  managerId: string;
  evmAddress: string;
  regionCode: string;
  status: string;
}

export interface MsgUpdateManagerResponse {
}

export interface MsgDeleteManager {
  creator: string;
  id: number;
}

export interface MsgDeleteManagerResponse {
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

function createBaseMsgCreateManager(): MsgCreateManager {
  return { creator: "", managerId: "", evmAddress: "", regionCode: "", status: "" };
}

export const MsgCreateManager = {
  encode(message: MsgCreateManager, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.managerId !== "") {
      writer.uint32(18).string(message.managerId);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateManager {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateManager();
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

          message.managerId = reader.string();
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

  fromJSON(object: any): MsgCreateManager {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      managerId: isSet(object.managerId) ? String(object.managerId) : "",
      evmAddress: isSet(object.evmAddress) ? String(object.evmAddress) : "",
      regionCode: isSet(object.regionCode) ? String(object.regionCode) : "",
      status: isSet(object.status) ? String(object.status) : "",
    };
  },

  toJSON(message: MsgCreateManager): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.managerId !== "") {
      obj.managerId = message.managerId;
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

  create<I extends Exact<DeepPartial<MsgCreateManager>, I>>(base?: I): MsgCreateManager {
    return MsgCreateManager.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateManager>, I>>(object: I): MsgCreateManager {
    const message = createBaseMsgCreateManager();
    message.creator = object.creator ?? "";
    message.managerId = object.managerId ?? "";
    message.evmAddress = object.evmAddress ?? "";
    message.regionCode = object.regionCode ?? "";
    message.status = object.status ?? "";
    return message;
  },
};

function createBaseMsgCreateManagerResponse(): MsgCreateManagerResponse {
  return { id: 0 };
}

export const MsgCreateManagerResponse = {
  encode(message: MsgCreateManagerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateManagerResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateManagerResponse();
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

  fromJSON(object: any): MsgCreateManagerResponse {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: MsgCreateManagerResponse): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateManagerResponse>, I>>(base?: I): MsgCreateManagerResponse {
    return MsgCreateManagerResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateManagerResponse>, I>>(object: I): MsgCreateManagerResponse {
    const message = createBaseMsgCreateManagerResponse();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgUpdateManager(): MsgUpdateManager {
  return { creator: "", id: 0, managerId: "", evmAddress: "", regionCode: "", status: "" };
}

export const MsgUpdateManager = {
  encode(message: MsgUpdateManager, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.managerId !== "") {
      writer.uint32(26).string(message.managerId);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateManager {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateManager();
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

          message.managerId = reader.string();
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

  fromJSON(object: any): MsgUpdateManager {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
      managerId: isSet(object.managerId) ? String(object.managerId) : "",
      evmAddress: isSet(object.evmAddress) ? String(object.evmAddress) : "",
      regionCode: isSet(object.regionCode) ? String(object.regionCode) : "",
      status: isSet(object.status) ? String(object.status) : "",
    };
  },

  toJSON(message: MsgUpdateManager): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.managerId !== "") {
      obj.managerId = message.managerId;
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

  create<I extends Exact<DeepPartial<MsgUpdateManager>, I>>(base?: I): MsgUpdateManager {
    return MsgUpdateManager.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateManager>, I>>(object: I): MsgUpdateManager {
    const message = createBaseMsgUpdateManager();
    message.creator = object.creator ?? "";
    message.id = object.id ?? 0;
    message.managerId = object.managerId ?? "";
    message.evmAddress = object.evmAddress ?? "";
    message.regionCode = object.regionCode ?? "";
    message.status = object.status ?? "";
    return message;
  },
};

function createBaseMsgUpdateManagerResponse(): MsgUpdateManagerResponse {
  return {};
}

export const MsgUpdateManagerResponse = {
  encode(_: MsgUpdateManagerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateManagerResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateManagerResponse();
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

  fromJSON(_: any): MsgUpdateManagerResponse {
    return {};
  },

  toJSON(_: MsgUpdateManagerResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateManagerResponse>, I>>(base?: I): MsgUpdateManagerResponse {
    return MsgUpdateManagerResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateManagerResponse>, I>>(_: I): MsgUpdateManagerResponse {
    const message = createBaseMsgUpdateManagerResponse();
    return message;
  },
};

function createBaseMsgDeleteManager(): MsgDeleteManager {
  return { creator: "", id: 0 };
}

export const MsgDeleteManager = {
  encode(message: MsgDeleteManager, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteManager {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteManager();
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

  fromJSON(object: any): MsgDeleteManager {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: MsgDeleteManager): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgDeleteManager>, I>>(base?: I): MsgDeleteManager {
    return MsgDeleteManager.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgDeleteManager>, I>>(object: I): MsgDeleteManager {
    const message = createBaseMsgDeleteManager();
    message.creator = object.creator ?? "";
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgDeleteManagerResponse(): MsgDeleteManagerResponse {
  return {};
}

export const MsgDeleteManagerResponse = {
  encode(_: MsgDeleteManagerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteManagerResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteManagerResponse();
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

  fromJSON(_: any): MsgDeleteManagerResponse {
    return {};
  },

  toJSON(_: MsgDeleteManagerResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgDeleteManagerResponse>, I>>(base?: I): MsgDeleteManagerResponse {
    return MsgDeleteManagerResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgDeleteManagerResponse>, I>>(_: I): MsgDeleteManagerResponse {
    const message = createBaseMsgDeleteManagerResponse();
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
  CreateManager(request: MsgCreateManager): Promise<MsgCreateManagerResponse>;
  UpdateManager(request: MsgUpdateManager): Promise<MsgUpdateManagerResponse>;
  DeleteManager(request: MsgDeleteManager): Promise<MsgDeleteManagerResponse>;
}

export const MsgServiceName = "enreach.manager.Msg";
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MsgServiceName;
    this.rpc = rpc;
    this.UpdateParams = this.UpdateParams.bind(this);
    this.CreateManager = this.CreateManager.bind(this);
    this.UpdateManager = this.UpdateManager.bind(this);
    this.DeleteManager = this.DeleteManager.bind(this);
  }
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(_m0.Reader.create(data)));
  }

  CreateManager(request: MsgCreateManager): Promise<MsgCreateManagerResponse> {
    const data = MsgCreateManager.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateManager", data);
    return promise.then((data) => MsgCreateManagerResponse.decode(_m0.Reader.create(data)));
  }

  UpdateManager(request: MsgUpdateManager): Promise<MsgUpdateManagerResponse> {
    const data = MsgUpdateManager.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateManager", data);
    return promise.then((data) => MsgUpdateManagerResponse.decode(_m0.Reader.create(data)));
  }

  DeleteManager(request: MsgDeleteManager): Promise<MsgDeleteManagerResponse> {
    const data = MsgDeleteManager.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeleteManager", data);
    return promise.then((data) => MsgDeleteManagerResponse.decode(_m0.Reader.create(data)));
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
