/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Params } from "./params";

export const protobufPackage = "enreach.registry";

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

export interface MsgCreateRegion {
  signer: string;
  code: string;
  name: string;
  description: string;
}

export interface MsgCreateRegionResponse {
}

export interface MsgUpdateRegion {
  signer: string;
  code: string;
  name: string;
  description: string;
}

export interface MsgUpdateRegionResponse {
}

export interface MsgDeleteRegion {
  signer: string;
  code: string;
}

export interface MsgDeleteRegionResponse {
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

function createBaseMsgCreateRegion(): MsgCreateRegion {
  return { signer: "", code: "", name: "", description: "" };
}

export const MsgCreateRegion = {
  encode(message: MsgCreateRegion, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.code !== "") {
      writer.uint32(18).string(message.code);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateRegion {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateRegion();
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

          message.code = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.name = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.description = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateRegion {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      code: isSet(object.code) ? String(object.code) : "",
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
    };
  },

  toJSON(message: MsgCreateRegion): unknown {
    const obj: any = {};
    if (message.signer !== "") {
      obj.signer = message.signer;
    }
    if (message.code !== "") {
      obj.code = message.code;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateRegion>, I>>(base?: I): MsgCreateRegion {
    return MsgCreateRegion.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateRegion>, I>>(object: I): MsgCreateRegion {
    const message = createBaseMsgCreateRegion();
    message.signer = object.signer ?? "";
    message.code = object.code ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    return message;
  },
};

function createBaseMsgCreateRegionResponse(): MsgCreateRegionResponse {
  return {};
}

export const MsgCreateRegionResponse = {
  encode(_: MsgCreateRegionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateRegionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateRegionResponse();
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

  fromJSON(_: any): MsgCreateRegionResponse {
    return {};
  },

  toJSON(_: MsgCreateRegionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateRegionResponse>, I>>(base?: I): MsgCreateRegionResponse {
    return MsgCreateRegionResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateRegionResponse>, I>>(_: I): MsgCreateRegionResponse {
    const message = createBaseMsgCreateRegionResponse();
    return message;
  },
};

function createBaseMsgUpdateRegion(): MsgUpdateRegion {
  return { signer: "", code: "", name: "", description: "" };
}

export const MsgUpdateRegion = {
  encode(message: MsgUpdateRegion, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.code !== "") {
      writer.uint32(18).string(message.code);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateRegion {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateRegion();
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

          message.code = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.name = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.description = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateRegion {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      code: isSet(object.code) ? String(object.code) : "",
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
    };
  },

  toJSON(message: MsgUpdateRegion): unknown {
    const obj: any = {};
    if (message.signer !== "") {
      obj.signer = message.signer;
    }
    if (message.code !== "") {
      obj.code = message.code;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateRegion>, I>>(base?: I): MsgUpdateRegion {
    return MsgUpdateRegion.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateRegion>, I>>(object: I): MsgUpdateRegion {
    const message = createBaseMsgUpdateRegion();
    message.signer = object.signer ?? "";
    message.code = object.code ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    return message;
  },
};

function createBaseMsgUpdateRegionResponse(): MsgUpdateRegionResponse {
  return {};
}

export const MsgUpdateRegionResponse = {
  encode(_: MsgUpdateRegionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateRegionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateRegionResponse();
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

  fromJSON(_: any): MsgUpdateRegionResponse {
    return {};
  },

  toJSON(_: MsgUpdateRegionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateRegionResponse>, I>>(base?: I): MsgUpdateRegionResponse {
    return MsgUpdateRegionResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateRegionResponse>, I>>(_: I): MsgUpdateRegionResponse {
    const message = createBaseMsgUpdateRegionResponse();
    return message;
  },
};

function createBaseMsgDeleteRegion(): MsgDeleteRegion {
  return { signer: "", code: "" };
}

export const MsgDeleteRegion = {
  encode(message: MsgDeleteRegion, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.code !== "") {
      writer.uint32(18).string(message.code);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteRegion {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteRegion();
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

          message.code = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteRegion {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      code: isSet(object.code) ? String(object.code) : "",
    };
  },

  toJSON(message: MsgDeleteRegion): unknown {
    const obj: any = {};
    if (message.signer !== "") {
      obj.signer = message.signer;
    }
    if (message.code !== "") {
      obj.code = message.code;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgDeleteRegion>, I>>(base?: I): MsgDeleteRegion {
    return MsgDeleteRegion.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgDeleteRegion>, I>>(object: I): MsgDeleteRegion {
    const message = createBaseMsgDeleteRegion();
    message.signer = object.signer ?? "";
    message.code = object.code ?? "";
    return message;
  },
};

function createBaseMsgDeleteRegionResponse(): MsgDeleteRegionResponse {
  return {};
}

export const MsgDeleteRegionResponse = {
  encode(_: MsgDeleteRegionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteRegionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteRegionResponse();
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

  fromJSON(_: any): MsgDeleteRegionResponse {
    return {};
  },

  toJSON(_: MsgDeleteRegionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgDeleteRegionResponse>, I>>(base?: I): MsgDeleteRegionResponse {
    return MsgDeleteRegionResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgDeleteRegionResponse>, I>>(_: I): MsgDeleteRegionResponse {
    const message = createBaseMsgDeleteRegionResponse();
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

/** Msg defines the Msg service. */
export interface Msg {
  /**
   * UpdateParams defines a (governance) operation for updating the module
   * parameters. The authority defaults to the x/gov module account.
   */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  CreateRegion(request: MsgCreateRegion): Promise<MsgCreateRegionResponse>;
  UpdateRegion(request: MsgUpdateRegion): Promise<MsgUpdateRegionResponse>;
  DeleteRegion(request: MsgDeleteRegion): Promise<MsgDeleteRegionResponse>;
  CreateSuperior(request: MsgCreateSuperior): Promise<MsgCreateSuperiorResponse>;
  UpdateSuperior(request: MsgUpdateSuperior): Promise<MsgUpdateSuperiorResponse>;
}

export const MsgServiceName = "enreach.registry.Msg";
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MsgServiceName;
    this.rpc = rpc;
    this.UpdateParams = this.UpdateParams.bind(this);
    this.CreateRegion = this.CreateRegion.bind(this);
    this.UpdateRegion = this.UpdateRegion.bind(this);
    this.DeleteRegion = this.DeleteRegion.bind(this);
    this.CreateSuperior = this.CreateSuperior.bind(this);
    this.UpdateSuperior = this.UpdateSuperior.bind(this);
  }
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(_m0.Reader.create(data)));
  }

  CreateRegion(request: MsgCreateRegion): Promise<MsgCreateRegionResponse> {
    const data = MsgCreateRegion.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateRegion", data);
    return promise.then((data) => MsgCreateRegionResponse.decode(_m0.Reader.create(data)));
  }

  UpdateRegion(request: MsgUpdateRegion): Promise<MsgUpdateRegionResponse> {
    const data = MsgUpdateRegion.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateRegion", data);
    return promise.then((data) => MsgUpdateRegionResponse.decode(_m0.Reader.create(data)));
  }

  DeleteRegion(request: MsgDeleteRegion): Promise<MsgDeleteRegionResponse> {
    const data = MsgDeleteRegion.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeleteRegion", data);
    return promise.then((data) => MsgDeleteRegionResponse.decode(_m0.Reader.create(data)));
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
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
