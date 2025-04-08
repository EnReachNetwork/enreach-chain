/* eslint-disable */
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

export interface MsgCreateOperator {
  operatorAccount: string;
  name: string;
  description: string;
  websiteUrl: string;
}

export interface MsgCreateOperatorResponse {
}

export interface MsgBindOperatorManagerAccount {
  operatorAccount: string;
  managerAccount: string;
  managerSignature: Uint8Array;
  forceUnbind: boolean;
}

export interface MsgBindOperatorManagerAccountResponse {
}

export interface MsgSetManagerRegion {
  operatorAccount: string;
  regionCode: string;
}

export interface MsgSetManagerRegionResponse {
}

export interface MsgUpdateManagerConnParams {
  operatorAccount: string;
  hostAddress: string;
  managerHTTPPort: number;
  managerWSPort: number;
  trackerPort: number;
  chainAPIPort: number;
  chainRPCPort: number;
}

export interface MsgUpdateManagerConnParamsResponse {
}

export interface MsgActivateManager {
  operatorAccount: string;
  license: string;
}

export interface MsgActivateManagerResponse {
}

export interface MsgBindOperatorEVMAccount {
  operatorAccount: string;
  evmAccount: string;
  evmSignature: Uint8Array;
}

export interface MsgBindOperatorEVMAccountResponse {
}

export interface MsgUpdateOperatorBasicInfo {
  operatorAccount: string;
  name: string;
  description: string;
  websiteUrl: string;
}

export interface MsgUpdateOperatorBasicInfoResponse {
}

export interface MsgRegisterManager {
  managerAccount: string;
  hostAddress: string;
  managerHTTPPort: number;
  managerWSPort: number;
  trackerPort: number;
  chainAPIPort: number;
  chainRPCPort: number;
}

export interface MsgRegisterManagerResponse {
}

export interface MsgGoWorking {
  managerAccount: string;
}

export interface MsgGoWorkingResponse {
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

function createBaseMsgCreateOperator(): MsgCreateOperator {
  return { operatorAccount: "", name: "", description: "", websiteUrl: "" };
}

export const MsgCreateOperator = {
  encode(message: MsgCreateOperator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operatorAccount !== "") {
      writer.uint32(10).string(message.operatorAccount);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.websiteUrl !== "") {
      writer.uint32(34).string(message.websiteUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateOperator {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateOperator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.operatorAccount = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.description = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.websiteUrl = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateOperator {
    return {
      operatorAccount: isSet(object.operatorAccount) ? String(object.operatorAccount) : "",
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      websiteUrl: isSet(object.websiteUrl) ? String(object.websiteUrl) : "",
    };
  },

  toJSON(message: MsgCreateOperator): unknown {
    const obj: any = {};
    if (message.operatorAccount !== "") {
      obj.operatorAccount = message.operatorAccount;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.websiteUrl !== "") {
      obj.websiteUrl = message.websiteUrl;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateOperator>, I>>(base?: I): MsgCreateOperator {
    return MsgCreateOperator.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateOperator>, I>>(object: I): MsgCreateOperator {
    const message = createBaseMsgCreateOperator();
    message.operatorAccount = object.operatorAccount ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.websiteUrl = object.websiteUrl ?? "";
    return message;
  },
};

function createBaseMsgCreateOperatorResponse(): MsgCreateOperatorResponse {
  return {};
}

export const MsgCreateOperatorResponse = {
  encode(_: MsgCreateOperatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateOperatorResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateOperatorResponse();
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

  fromJSON(_: any): MsgCreateOperatorResponse {
    return {};
  },

  toJSON(_: MsgCreateOperatorResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateOperatorResponse>, I>>(base?: I): MsgCreateOperatorResponse {
    return MsgCreateOperatorResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateOperatorResponse>, I>>(_: I): MsgCreateOperatorResponse {
    const message = createBaseMsgCreateOperatorResponse();
    return message;
  },
};

function createBaseMsgBindOperatorManagerAccount(): MsgBindOperatorManagerAccount {
  return { operatorAccount: "", managerAccount: "", managerSignature: new Uint8Array(0), forceUnbind: false };
}

export const MsgBindOperatorManagerAccount = {
  encode(message: MsgBindOperatorManagerAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operatorAccount !== "") {
      writer.uint32(10).string(message.operatorAccount);
    }
    if (message.managerAccount !== "") {
      writer.uint32(18).string(message.managerAccount);
    }
    if (message.managerSignature.length !== 0) {
      writer.uint32(26).bytes(message.managerSignature);
    }
    if (message.forceUnbind === true) {
      writer.uint32(32).bool(message.forceUnbind);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBindOperatorManagerAccount {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBindOperatorManagerAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.operatorAccount = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.managerAccount = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.managerSignature = reader.bytes();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.forceUnbind = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgBindOperatorManagerAccount {
    return {
      operatorAccount: isSet(object.operatorAccount) ? String(object.operatorAccount) : "",
      managerAccount: isSet(object.managerAccount) ? String(object.managerAccount) : "",
      managerSignature: isSet(object.managerSignature) ? bytesFromBase64(object.managerSignature) : new Uint8Array(0),
      forceUnbind: isSet(object.forceUnbind) ? Boolean(object.forceUnbind) : false,
    };
  },

  toJSON(message: MsgBindOperatorManagerAccount): unknown {
    const obj: any = {};
    if (message.operatorAccount !== "") {
      obj.operatorAccount = message.operatorAccount;
    }
    if (message.managerAccount !== "") {
      obj.managerAccount = message.managerAccount;
    }
    if (message.managerSignature.length !== 0) {
      obj.managerSignature = base64FromBytes(message.managerSignature);
    }
    if (message.forceUnbind === true) {
      obj.forceUnbind = message.forceUnbind;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgBindOperatorManagerAccount>, I>>(base?: I): MsgBindOperatorManagerAccount {
    return MsgBindOperatorManagerAccount.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgBindOperatorManagerAccount>, I>>(
    object: I,
  ): MsgBindOperatorManagerAccount {
    const message = createBaseMsgBindOperatorManagerAccount();
    message.operatorAccount = object.operatorAccount ?? "";
    message.managerAccount = object.managerAccount ?? "";
    message.managerSignature = object.managerSignature ?? new Uint8Array(0);
    message.forceUnbind = object.forceUnbind ?? false;
    return message;
  },
};

function createBaseMsgBindOperatorManagerAccountResponse(): MsgBindOperatorManagerAccountResponse {
  return {};
}

export const MsgBindOperatorManagerAccountResponse = {
  encode(_: MsgBindOperatorManagerAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBindOperatorManagerAccountResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBindOperatorManagerAccountResponse();
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

  fromJSON(_: any): MsgBindOperatorManagerAccountResponse {
    return {};
  },

  toJSON(_: MsgBindOperatorManagerAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgBindOperatorManagerAccountResponse>, I>>(
    base?: I,
  ): MsgBindOperatorManagerAccountResponse {
    return MsgBindOperatorManagerAccountResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgBindOperatorManagerAccountResponse>, I>>(
    _: I,
  ): MsgBindOperatorManagerAccountResponse {
    const message = createBaseMsgBindOperatorManagerAccountResponse();
    return message;
  },
};

function createBaseMsgSetManagerRegion(): MsgSetManagerRegion {
  return { operatorAccount: "", regionCode: "" };
}

export const MsgSetManagerRegion = {
  encode(message: MsgSetManagerRegion, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operatorAccount !== "") {
      writer.uint32(10).string(message.operatorAccount);
    }
    if (message.regionCode !== "") {
      writer.uint32(18).string(message.regionCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetManagerRegion {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetManagerRegion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.operatorAccount = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.regionCode = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSetManagerRegion {
    return {
      operatorAccount: isSet(object.operatorAccount) ? String(object.operatorAccount) : "",
      regionCode: isSet(object.regionCode) ? String(object.regionCode) : "",
    };
  },

  toJSON(message: MsgSetManagerRegion): unknown {
    const obj: any = {};
    if (message.operatorAccount !== "") {
      obj.operatorAccount = message.operatorAccount;
    }
    if (message.regionCode !== "") {
      obj.regionCode = message.regionCode;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSetManagerRegion>, I>>(base?: I): MsgSetManagerRegion {
    return MsgSetManagerRegion.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgSetManagerRegion>, I>>(object: I): MsgSetManagerRegion {
    const message = createBaseMsgSetManagerRegion();
    message.operatorAccount = object.operatorAccount ?? "";
    message.regionCode = object.regionCode ?? "";
    return message;
  },
};

function createBaseMsgSetManagerRegionResponse(): MsgSetManagerRegionResponse {
  return {};
}

export const MsgSetManagerRegionResponse = {
  encode(_: MsgSetManagerRegionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetManagerRegionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetManagerRegionResponse();
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

  fromJSON(_: any): MsgSetManagerRegionResponse {
    return {};
  },

  toJSON(_: MsgSetManagerRegionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSetManagerRegionResponse>, I>>(base?: I): MsgSetManagerRegionResponse {
    return MsgSetManagerRegionResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgSetManagerRegionResponse>, I>>(_: I): MsgSetManagerRegionResponse {
    const message = createBaseMsgSetManagerRegionResponse();
    return message;
  },
};

function createBaseMsgUpdateManagerConnParams(): MsgUpdateManagerConnParams {
  return {
    operatorAccount: "",
    hostAddress: "",
    managerHTTPPort: 0,
    managerWSPort: 0,
    trackerPort: 0,
    chainAPIPort: 0,
    chainRPCPort: 0,
  };
}

export const MsgUpdateManagerConnParams = {
  encode(message: MsgUpdateManagerConnParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operatorAccount !== "") {
      writer.uint32(10).string(message.operatorAccount);
    }
    if (message.hostAddress !== "") {
      writer.uint32(18).string(message.hostAddress);
    }
    if (message.managerHTTPPort !== 0) {
      writer.uint32(24).uint32(message.managerHTTPPort);
    }
    if (message.managerWSPort !== 0) {
      writer.uint32(32).uint32(message.managerWSPort);
    }
    if (message.trackerPort !== 0) {
      writer.uint32(40).uint32(message.trackerPort);
    }
    if (message.chainAPIPort !== 0) {
      writer.uint32(48).uint32(message.chainAPIPort);
    }
    if (message.chainRPCPort !== 0) {
      writer.uint32(56).uint32(message.chainRPCPort);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateManagerConnParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateManagerConnParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.operatorAccount = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.hostAddress = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.managerHTTPPort = reader.uint32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.managerWSPort = reader.uint32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.trackerPort = reader.uint32();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.chainAPIPort = reader.uint32();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.chainRPCPort = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateManagerConnParams {
    return {
      operatorAccount: isSet(object.operatorAccount) ? String(object.operatorAccount) : "",
      hostAddress: isSet(object.hostAddress) ? String(object.hostAddress) : "",
      managerHTTPPort: isSet(object.managerHTTPPort) ? Number(object.managerHTTPPort) : 0,
      managerWSPort: isSet(object.managerWSPort) ? Number(object.managerWSPort) : 0,
      trackerPort: isSet(object.trackerPort) ? Number(object.trackerPort) : 0,
      chainAPIPort: isSet(object.chainAPIPort) ? Number(object.chainAPIPort) : 0,
      chainRPCPort: isSet(object.chainRPCPort) ? Number(object.chainRPCPort) : 0,
    };
  },

  toJSON(message: MsgUpdateManagerConnParams): unknown {
    const obj: any = {};
    if (message.operatorAccount !== "") {
      obj.operatorAccount = message.operatorAccount;
    }
    if (message.hostAddress !== "") {
      obj.hostAddress = message.hostAddress;
    }
    if (message.managerHTTPPort !== 0) {
      obj.managerHTTPPort = Math.round(message.managerHTTPPort);
    }
    if (message.managerWSPort !== 0) {
      obj.managerWSPort = Math.round(message.managerWSPort);
    }
    if (message.trackerPort !== 0) {
      obj.trackerPort = Math.round(message.trackerPort);
    }
    if (message.chainAPIPort !== 0) {
      obj.chainAPIPort = Math.round(message.chainAPIPort);
    }
    if (message.chainRPCPort !== 0) {
      obj.chainRPCPort = Math.round(message.chainRPCPort);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateManagerConnParams>, I>>(base?: I): MsgUpdateManagerConnParams {
    return MsgUpdateManagerConnParams.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateManagerConnParams>, I>>(object: I): MsgUpdateManagerConnParams {
    const message = createBaseMsgUpdateManagerConnParams();
    message.operatorAccount = object.operatorAccount ?? "";
    message.hostAddress = object.hostAddress ?? "";
    message.managerHTTPPort = object.managerHTTPPort ?? 0;
    message.managerWSPort = object.managerWSPort ?? 0;
    message.trackerPort = object.trackerPort ?? 0;
    message.chainAPIPort = object.chainAPIPort ?? 0;
    message.chainRPCPort = object.chainRPCPort ?? 0;
    return message;
  },
};

function createBaseMsgUpdateManagerConnParamsResponse(): MsgUpdateManagerConnParamsResponse {
  return {};
}

export const MsgUpdateManagerConnParamsResponse = {
  encode(_: MsgUpdateManagerConnParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateManagerConnParamsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateManagerConnParamsResponse();
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

  fromJSON(_: any): MsgUpdateManagerConnParamsResponse {
    return {};
  },

  toJSON(_: MsgUpdateManagerConnParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateManagerConnParamsResponse>, I>>(
    base?: I,
  ): MsgUpdateManagerConnParamsResponse {
    return MsgUpdateManagerConnParamsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateManagerConnParamsResponse>, I>>(
    _: I,
  ): MsgUpdateManagerConnParamsResponse {
    const message = createBaseMsgUpdateManagerConnParamsResponse();
    return message;
  },
};

function createBaseMsgActivateManager(): MsgActivateManager {
  return { operatorAccount: "", license: "" };
}

export const MsgActivateManager = {
  encode(message: MsgActivateManager, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operatorAccount !== "") {
      writer.uint32(10).string(message.operatorAccount);
    }
    if (message.license !== "") {
      writer.uint32(18).string(message.license);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgActivateManager {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgActivateManager();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.operatorAccount = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.license = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgActivateManager {
    return {
      operatorAccount: isSet(object.operatorAccount) ? String(object.operatorAccount) : "",
      license: isSet(object.license) ? String(object.license) : "",
    };
  },

  toJSON(message: MsgActivateManager): unknown {
    const obj: any = {};
    if (message.operatorAccount !== "") {
      obj.operatorAccount = message.operatorAccount;
    }
    if (message.license !== "") {
      obj.license = message.license;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgActivateManager>, I>>(base?: I): MsgActivateManager {
    return MsgActivateManager.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgActivateManager>, I>>(object: I): MsgActivateManager {
    const message = createBaseMsgActivateManager();
    message.operatorAccount = object.operatorAccount ?? "";
    message.license = object.license ?? "";
    return message;
  },
};

function createBaseMsgActivateManagerResponse(): MsgActivateManagerResponse {
  return {};
}

export const MsgActivateManagerResponse = {
  encode(_: MsgActivateManagerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgActivateManagerResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgActivateManagerResponse();
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

  fromJSON(_: any): MsgActivateManagerResponse {
    return {};
  },

  toJSON(_: MsgActivateManagerResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgActivateManagerResponse>, I>>(base?: I): MsgActivateManagerResponse {
    return MsgActivateManagerResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgActivateManagerResponse>, I>>(_: I): MsgActivateManagerResponse {
    const message = createBaseMsgActivateManagerResponse();
    return message;
  },
};

function createBaseMsgBindOperatorEVMAccount(): MsgBindOperatorEVMAccount {
  return { operatorAccount: "", evmAccount: "", evmSignature: new Uint8Array(0) };
}

export const MsgBindOperatorEVMAccount = {
  encode(message: MsgBindOperatorEVMAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operatorAccount !== "") {
      writer.uint32(10).string(message.operatorAccount);
    }
    if (message.evmAccount !== "") {
      writer.uint32(18).string(message.evmAccount);
    }
    if (message.evmSignature.length !== 0) {
      writer.uint32(26).bytes(message.evmSignature);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBindOperatorEVMAccount {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBindOperatorEVMAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.operatorAccount = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.evmAccount = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.evmSignature = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgBindOperatorEVMAccount {
    return {
      operatorAccount: isSet(object.operatorAccount) ? String(object.operatorAccount) : "",
      evmAccount: isSet(object.evmAccount) ? String(object.evmAccount) : "",
      evmSignature: isSet(object.evmSignature) ? bytesFromBase64(object.evmSignature) : new Uint8Array(0),
    };
  },

  toJSON(message: MsgBindOperatorEVMAccount): unknown {
    const obj: any = {};
    if (message.operatorAccount !== "") {
      obj.operatorAccount = message.operatorAccount;
    }
    if (message.evmAccount !== "") {
      obj.evmAccount = message.evmAccount;
    }
    if (message.evmSignature.length !== 0) {
      obj.evmSignature = base64FromBytes(message.evmSignature);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgBindOperatorEVMAccount>, I>>(base?: I): MsgBindOperatorEVMAccount {
    return MsgBindOperatorEVMAccount.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgBindOperatorEVMAccount>, I>>(object: I): MsgBindOperatorEVMAccount {
    const message = createBaseMsgBindOperatorEVMAccount();
    message.operatorAccount = object.operatorAccount ?? "";
    message.evmAccount = object.evmAccount ?? "";
    message.evmSignature = object.evmSignature ?? new Uint8Array(0);
    return message;
  },
};

function createBaseMsgBindOperatorEVMAccountResponse(): MsgBindOperatorEVMAccountResponse {
  return {};
}

export const MsgBindOperatorEVMAccountResponse = {
  encode(_: MsgBindOperatorEVMAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBindOperatorEVMAccountResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBindOperatorEVMAccountResponse();
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

  fromJSON(_: any): MsgBindOperatorEVMAccountResponse {
    return {};
  },

  toJSON(_: MsgBindOperatorEVMAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgBindOperatorEVMAccountResponse>, I>>(
    base?: I,
  ): MsgBindOperatorEVMAccountResponse {
    return MsgBindOperatorEVMAccountResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgBindOperatorEVMAccountResponse>, I>>(
    _: I,
  ): MsgBindOperatorEVMAccountResponse {
    const message = createBaseMsgBindOperatorEVMAccountResponse();
    return message;
  },
};

function createBaseMsgUpdateOperatorBasicInfo(): MsgUpdateOperatorBasicInfo {
  return { operatorAccount: "", name: "", description: "", websiteUrl: "" };
}

export const MsgUpdateOperatorBasicInfo = {
  encode(message: MsgUpdateOperatorBasicInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operatorAccount !== "") {
      writer.uint32(10).string(message.operatorAccount);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.websiteUrl !== "") {
      writer.uint32(34).string(message.websiteUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateOperatorBasicInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateOperatorBasicInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.operatorAccount = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.description = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.websiteUrl = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateOperatorBasicInfo {
    return {
      operatorAccount: isSet(object.operatorAccount) ? String(object.operatorAccount) : "",
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      websiteUrl: isSet(object.websiteUrl) ? String(object.websiteUrl) : "",
    };
  },

  toJSON(message: MsgUpdateOperatorBasicInfo): unknown {
    const obj: any = {};
    if (message.operatorAccount !== "") {
      obj.operatorAccount = message.operatorAccount;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.websiteUrl !== "") {
      obj.websiteUrl = message.websiteUrl;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateOperatorBasicInfo>, I>>(base?: I): MsgUpdateOperatorBasicInfo {
    return MsgUpdateOperatorBasicInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateOperatorBasicInfo>, I>>(object: I): MsgUpdateOperatorBasicInfo {
    const message = createBaseMsgUpdateOperatorBasicInfo();
    message.operatorAccount = object.operatorAccount ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.websiteUrl = object.websiteUrl ?? "";
    return message;
  },
};

function createBaseMsgUpdateOperatorBasicInfoResponse(): MsgUpdateOperatorBasicInfoResponse {
  return {};
}

export const MsgUpdateOperatorBasicInfoResponse = {
  encode(_: MsgUpdateOperatorBasicInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateOperatorBasicInfoResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateOperatorBasicInfoResponse();
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

  fromJSON(_: any): MsgUpdateOperatorBasicInfoResponse {
    return {};
  },

  toJSON(_: MsgUpdateOperatorBasicInfoResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateOperatorBasicInfoResponse>, I>>(
    base?: I,
  ): MsgUpdateOperatorBasicInfoResponse {
    return MsgUpdateOperatorBasicInfoResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateOperatorBasicInfoResponse>, I>>(
    _: I,
  ): MsgUpdateOperatorBasicInfoResponse {
    const message = createBaseMsgUpdateOperatorBasicInfoResponse();
    return message;
  },
};

function createBaseMsgRegisterManager(): MsgRegisterManager {
  return {
    managerAccount: "",
    hostAddress: "",
    managerHTTPPort: 0,
    managerWSPort: 0,
    trackerPort: 0,
    chainAPIPort: 0,
    chainRPCPort: 0,
  };
}

export const MsgRegisterManager = {
  encode(message: MsgRegisterManager, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.managerAccount !== "") {
      writer.uint32(10).string(message.managerAccount);
    }
    if (message.hostAddress !== "") {
      writer.uint32(18).string(message.hostAddress);
    }
    if (message.managerHTTPPort !== 0) {
      writer.uint32(24).uint32(message.managerHTTPPort);
    }
    if (message.managerWSPort !== 0) {
      writer.uint32(32).uint32(message.managerWSPort);
    }
    if (message.trackerPort !== 0) {
      writer.uint32(40).uint32(message.trackerPort);
    }
    if (message.chainAPIPort !== 0) {
      writer.uint32(48).uint32(message.chainAPIPort);
    }
    if (message.chainRPCPort !== 0) {
      writer.uint32(56).uint32(message.chainRPCPort);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterManager {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterManager();
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
          if (tag !== 18) {
            break;
          }

          message.hostAddress = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.managerHTTPPort = reader.uint32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.managerWSPort = reader.uint32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.trackerPort = reader.uint32();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.chainAPIPort = reader.uint32();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.chainRPCPort = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgRegisterManager {
    return {
      managerAccount: isSet(object.managerAccount) ? String(object.managerAccount) : "",
      hostAddress: isSet(object.hostAddress) ? String(object.hostAddress) : "",
      managerHTTPPort: isSet(object.managerHTTPPort) ? Number(object.managerHTTPPort) : 0,
      managerWSPort: isSet(object.managerWSPort) ? Number(object.managerWSPort) : 0,
      trackerPort: isSet(object.trackerPort) ? Number(object.trackerPort) : 0,
      chainAPIPort: isSet(object.chainAPIPort) ? Number(object.chainAPIPort) : 0,
      chainRPCPort: isSet(object.chainRPCPort) ? Number(object.chainRPCPort) : 0,
    };
  },

  toJSON(message: MsgRegisterManager): unknown {
    const obj: any = {};
    if (message.managerAccount !== "") {
      obj.managerAccount = message.managerAccount;
    }
    if (message.hostAddress !== "") {
      obj.hostAddress = message.hostAddress;
    }
    if (message.managerHTTPPort !== 0) {
      obj.managerHTTPPort = Math.round(message.managerHTTPPort);
    }
    if (message.managerWSPort !== 0) {
      obj.managerWSPort = Math.round(message.managerWSPort);
    }
    if (message.trackerPort !== 0) {
      obj.trackerPort = Math.round(message.trackerPort);
    }
    if (message.chainAPIPort !== 0) {
      obj.chainAPIPort = Math.round(message.chainAPIPort);
    }
    if (message.chainRPCPort !== 0) {
      obj.chainRPCPort = Math.round(message.chainRPCPort);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgRegisterManager>, I>>(base?: I): MsgRegisterManager {
    return MsgRegisterManager.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgRegisterManager>, I>>(object: I): MsgRegisterManager {
    const message = createBaseMsgRegisterManager();
    message.managerAccount = object.managerAccount ?? "";
    message.hostAddress = object.hostAddress ?? "";
    message.managerHTTPPort = object.managerHTTPPort ?? 0;
    message.managerWSPort = object.managerWSPort ?? 0;
    message.trackerPort = object.trackerPort ?? 0;
    message.chainAPIPort = object.chainAPIPort ?? 0;
    message.chainRPCPort = object.chainRPCPort ?? 0;
    return message;
  },
};

function createBaseMsgRegisterManagerResponse(): MsgRegisterManagerResponse {
  return {};
}

export const MsgRegisterManagerResponse = {
  encode(_: MsgRegisterManagerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterManagerResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterManagerResponse();
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

  fromJSON(_: any): MsgRegisterManagerResponse {
    return {};
  },

  toJSON(_: MsgRegisterManagerResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgRegisterManagerResponse>, I>>(base?: I): MsgRegisterManagerResponse {
    return MsgRegisterManagerResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgRegisterManagerResponse>, I>>(_: I): MsgRegisterManagerResponse {
    const message = createBaseMsgRegisterManagerResponse();
    return message;
  },
};

function createBaseMsgGoWorking(): MsgGoWorking {
  return { managerAccount: "" };
}

export const MsgGoWorking = {
  encode(message: MsgGoWorking, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.managerAccount !== "") {
      writer.uint32(10).string(message.managerAccount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGoWorking {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGoWorking();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.managerAccount = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgGoWorking {
    return { managerAccount: isSet(object.managerAccount) ? String(object.managerAccount) : "" };
  },

  toJSON(message: MsgGoWorking): unknown {
    const obj: any = {};
    if (message.managerAccount !== "") {
      obj.managerAccount = message.managerAccount;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgGoWorking>, I>>(base?: I): MsgGoWorking {
    return MsgGoWorking.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgGoWorking>, I>>(object: I): MsgGoWorking {
    const message = createBaseMsgGoWorking();
    message.managerAccount = object.managerAccount ?? "";
    return message;
  },
};

function createBaseMsgGoWorkingResponse(): MsgGoWorkingResponse {
  return {};
}

export const MsgGoWorkingResponse = {
  encode(_: MsgGoWorkingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGoWorkingResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGoWorkingResponse();
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

  fromJSON(_: any): MsgGoWorkingResponse {
    return {};
  },

  toJSON(_: MsgGoWorkingResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgGoWorkingResponse>, I>>(base?: I): MsgGoWorkingResponse {
    return MsgGoWorkingResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgGoWorkingResponse>, I>>(_: I): MsgGoWorkingResponse {
    const message = createBaseMsgGoWorkingResponse();
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
  CreateOperator(request: MsgCreateOperator): Promise<MsgCreateOperatorResponse>;
  BindOperatorManagerAccount(request: MsgBindOperatorManagerAccount): Promise<MsgBindOperatorManagerAccountResponse>;
  SetManagerRegion(request: MsgSetManagerRegion): Promise<MsgSetManagerRegionResponse>;
  UpdateManagerConnParams(request: MsgUpdateManagerConnParams): Promise<MsgUpdateManagerConnParamsResponse>;
  ActivateManager(request: MsgActivateManager): Promise<MsgActivateManagerResponse>;
  BindOperatorEVMAccount(request: MsgBindOperatorEVMAccount): Promise<MsgBindOperatorEVMAccountResponse>;
  UpdateOperatorBasicInfo(request: MsgUpdateOperatorBasicInfo): Promise<MsgUpdateOperatorBasicInfoResponse>;
  RegisterManager(request: MsgRegisterManager): Promise<MsgRegisterManagerResponse>;
  GoWorking(request: MsgGoWorking): Promise<MsgGoWorkingResponse>;
  CreateSuperior(request: MsgCreateSuperior): Promise<MsgCreateSuperiorResponse>;
  UpdateSuperior(request: MsgUpdateSuperior): Promise<MsgUpdateSuperiorResponse>;
}

export const MsgServiceName = "enreach.manager.Msg";
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MsgServiceName;
    this.rpc = rpc;
    this.UpdateParams = this.UpdateParams.bind(this);
    this.CreateOperator = this.CreateOperator.bind(this);
    this.BindOperatorManagerAccount = this.BindOperatorManagerAccount.bind(this);
    this.SetManagerRegion = this.SetManagerRegion.bind(this);
    this.UpdateManagerConnParams = this.UpdateManagerConnParams.bind(this);
    this.ActivateManager = this.ActivateManager.bind(this);
    this.BindOperatorEVMAccount = this.BindOperatorEVMAccount.bind(this);
    this.UpdateOperatorBasicInfo = this.UpdateOperatorBasicInfo.bind(this);
    this.RegisterManager = this.RegisterManager.bind(this);
    this.GoWorking = this.GoWorking.bind(this);
    this.CreateSuperior = this.CreateSuperior.bind(this);
    this.UpdateSuperior = this.UpdateSuperior.bind(this);
  }
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(_m0.Reader.create(data)));
  }

  CreateOperator(request: MsgCreateOperator): Promise<MsgCreateOperatorResponse> {
    const data = MsgCreateOperator.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateOperator", data);
    return promise.then((data) => MsgCreateOperatorResponse.decode(_m0.Reader.create(data)));
  }

  BindOperatorManagerAccount(request: MsgBindOperatorManagerAccount): Promise<MsgBindOperatorManagerAccountResponse> {
    const data = MsgBindOperatorManagerAccount.encode(request).finish();
    const promise = this.rpc.request(this.service, "BindOperatorManagerAccount", data);
    return promise.then((data) => MsgBindOperatorManagerAccountResponse.decode(_m0.Reader.create(data)));
  }

  SetManagerRegion(request: MsgSetManagerRegion): Promise<MsgSetManagerRegionResponse> {
    const data = MsgSetManagerRegion.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetManagerRegion", data);
    return promise.then((data) => MsgSetManagerRegionResponse.decode(_m0.Reader.create(data)));
  }

  UpdateManagerConnParams(request: MsgUpdateManagerConnParams): Promise<MsgUpdateManagerConnParamsResponse> {
    const data = MsgUpdateManagerConnParams.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateManagerConnParams", data);
    return promise.then((data) => MsgUpdateManagerConnParamsResponse.decode(_m0.Reader.create(data)));
  }

  ActivateManager(request: MsgActivateManager): Promise<MsgActivateManagerResponse> {
    const data = MsgActivateManager.encode(request).finish();
    const promise = this.rpc.request(this.service, "ActivateManager", data);
    return promise.then((data) => MsgActivateManagerResponse.decode(_m0.Reader.create(data)));
  }

  BindOperatorEVMAccount(request: MsgBindOperatorEVMAccount): Promise<MsgBindOperatorEVMAccountResponse> {
    const data = MsgBindOperatorEVMAccount.encode(request).finish();
    const promise = this.rpc.request(this.service, "BindOperatorEVMAccount", data);
    return promise.then((data) => MsgBindOperatorEVMAccountResponse.decode(_m0.Reader.create(data)));
  }

  UpdateOperatorBasicInfo(request: MsgUpdateOperatorBasicInfo): Promise<MsgUpdateOperatorBasicInfoResponse> {
    const data = MsgUpdateOperatorBasicInfo.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateOperatorBasicInfo", data);
    return promise.then((data) => MsgUpdateOperatorBasicInfoResponse.decode(_m0.Reader.create(data)));
  }

  RegisterManager(request: MsgRegisterManager): Promise<MsgRegisterManagerResponse> {
    const data = MsgRegisterManager.encode(request).finish();
    const promise = this.rpc.request(this.service, "RegisterManager", data);
    return promise.then((data) => MsgRegisterManagerResponse.decode(_m0.Reader.create(data)));
  }

  GoWorking(request: MsgGoWorking): Promise<MsgGoWorkingResponse> {
    const data = MsgGoWorking.encode(request).finish();
    const promise = this.rpc.request(this.service, "GoWorking", data);
    return promise.then((data) => MsgGoWorkingResponse.decode(_m0.Reader.create(data)));
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

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
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
