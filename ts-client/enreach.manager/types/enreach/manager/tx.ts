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

export interface MsgRegisterManager {
  creator: string;
  managerAddress: string;
  operatorName: string;
  operatorDesc: string;
  operatorWebsiteURL: string;
  evmAddress: string;
  hostAddress: string;
  managerPort: number;
  trackerPort: number;
  chainAPIPort: number;
  chainRPCPort: number;
  regionCode: string;
}

export interface MsgRegisterManagerResponse {
  id: number;
}

export interface MsgUpdateManager {
  creator: string;
  id: number;
  managerAddress: string;
  operatorName: string;
  operatorDesc: string;
  operatorWebsiteURL: string;
  evmAddress: string;
  hostAddress: string;
  managerPort: number;
  trackerPort: number;
  chainAPIPort: number;
  chainRPCPort: number;
  regionCode: string;
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

function createBaseMsgRegisterManager(): MsgRegisterManager {
  return {
    creator: "",
    managerAddress: "",
    operatorName: "",
    operatorDesc: "",
    operatorWebsiteURL: "",
    evmAddress: "",
    hostAddress: "",
    managerPort: 0,
    trackerPort: 0,
    chainAPIPort: 0,
    chainRPCPort: 0,
    regionCode: "",
  };
}

export const MsgRegisterManager = {
  encode(message: MsgRegisterManager, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.managerAddress !== "") {
      writer.uint32(18).string(message.managerAddress);
    }
    if (message.operatorName !== "") {
      writer.uint32(26).string(message.operatorName);
    }
    if (message.operatorDesc !== "") {
      writer.uint32(34).string(message.operatorDesc);
    }
    if (message.operatorWebsiteURL !== "") {
      writer.uint32(42).string(message.operatorWebsiteURL);
    }
    if (message.evmAddress !== "") {
      writer.uint32(50).string(message.evmAddress);
    }
    if (message.hostAddress !== "") {
      writer.uint32(58).string(message.hostAddress);
    }
    if (message.managerPort !== 0) {
      writer.uint32(64).uint32(message.managerPort);
    }
    if (message.trackerPort !== 0) {
      writer.uint32(72).uint32(message.trackerPort);
    }
    if (message.chainAPIPort !== 0) {
      writer.uint32(80).uint32(message.chainAPIPort);
    }
    if (message.chainRPCPort !== 0) {
      writer.uint32(88).uint32(message.chainRPCPort);
    }
    if (message.regionCode !== "") {
      writer.uint32(98).string(message.regionCode);
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

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.managerAddress = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.operatorName = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.operatorDesc = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.operatorWebsiteURL = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.evmAddress = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.hostAddress = reader.string();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.managerPort = reader.uint32();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.trackerPort = reader.uint32();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.chainAPIPort = reader.uint32();
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.chainRPCPort = reader.uint32();
          continue;
        case 12:
          if (tag !== 98) {
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

  fromJSON(object: any): MsgRegisterManager {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      managerAddress: isSet(object.managerAddress) ? String(object.managerAddress) : "",
      operatorName: isSet(object.operatorName) ? String(object.operatorName) : "",
      operatorDesc: isSet(object.operatorDesc) ? String(object.operatorDesc) : "",
      operatorWebsiteURL: isSet(object.operatorWebsiteURL) ? String(object.operatorWebsiteURL) : "",
      evmAddress: isSet(object.evmAddress) ? String(object.evmAddress) : "",
      hostAddress: isSet(object.hostAddress) ? String(object.hostAddress) : "",
      managerPort: isSet(object.managerPort) ? Number(object.managerPort) : 0,
      trackerPort: isSet(object.trackerPort) ? Number(object.trackerPort) : 0,
      chainAPIPort: isSet(object.chainAPIPort) ? Number(object.chainAPIPort) : 0,
      chainRPCPort: isSet(object.chainRPCPort) ? Number(object.chainRPCPort) : 0,
      regionCode: isSet(object.regionCode) ? String(object.regionCode) : "",
    };
  },

  toJSON(message: MsgRegisterManager): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.managerAddress !== "") {
      obj.managerAddress = message.managerAddress;
    }
    if (message.operatorName !== "") {
      obj.operatorName = message.operatorName;
    }
    if (message.operatorDesc !== "") {
      obj.operatorDesc = message.operatorDesc;
    }
    if (message.operatorWebsiteURL !== "") {
      obj.operatorWebsiteURL = message.operatorWebsiteURL;
    }
    if (message.evmAddress !== "") {
      obj.evmAddress = message.evmAddress;
    }
    if (message.hostAddress !== "") {
      obj.hostAddress = message.hostAddress;
    }
    if (message.managerPort !== 0) {
      obj.managerPort = Math.round(message.managerPort);
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
    if (message.regionCode !== "") {
      obj.regionCode = message.regionCode;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgRegisterManager>, I>>(base?: I): MsgRegisterManager {
    return MsgRegisterManager.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgRegisterManager>, I>>(object: I): MsgRegisterManager {
    const message = createBaseMsgRegisterManager();
    message.creator = object.creator ?? "";
    message.managerAddress = object.managerAddress ?? "";
    message.operatorName = object.operatorName ?? "";
    message.operatorDesc = object.operatorDesc ?? "";
    message.operatorWebsiteURL = object.operatorWebsiteURL ?? "";
    message.evmAddress = object.evmAddress ?? "";
    message.hostAddress = object.hostAddress ?? "";
    message.managerPort = object.managerPort ?? 0;
    message.trackerPort = object.trackerPort ?? 0;
    message.chainAPIPort = object.chainAPIPort ?? 0;
    message.chainRPCPort = object.chainRPCPort ?? 0;
    message.regionCode = object.regionCode ?? "";
    return message;
  },
};

function createBaseMsgRegisterManagerResponse(): MsgRegisterManagerResponse {
  return { id: 0 };
}

export const MsgRegisterManagerResponse = {
  encode(message: MsgRegisterManagerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterManagerResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterManagerResponse();
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

  fromJSON(object: any): MsgRegisterManagerResponse {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: MsgRegisterManagerResponse): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgRegisterManagerResponse>, I>>(base?: I): MsgRegisterManagerResponse {
    return MsgRegisterManagerResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgRegisterManagerResponse>, I>>(object: I): MsgRegisterManagerResponse {
    const message = createBaseMsgRegisterManagerResponse();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgUpdateManager(): MsgUpdateManager {
  return {
    creator: "",
    id: 0,
    managerAddress: "",
    operatorName: "",
    operatorDesc: "",
    operatorWebsiteURL: "",
    evmAddress: "",
    hostAddress: "",
    managerPort: 0,
    trackerPort: 0,
    chainAPIPort: 0,
    chainRPCPort: 0,
    regionCode: "",
  };
}

export const MsgUpdateManager = {
  encode(message: MsgUpdateManager, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.managerAddress !== "") {
      writer.uint32(26).string(message.managerAddress);
    }
    if (message.operatorName !== "") {
      writer.uint32(34).string(message.operatorName);
    }
    if (message.operatorDesc !== "") {
      writer.uint32(42).string(message.operatorDesc);
    }
    if (message.operatorWebsiteURL !== "") {
      writer.uint32(50).string(message.operatorWebsiteURL);
    }
    if (message.evmAddress !== "") {
      writer.uint32(58).string(message.evmAddress);
    }
    if (message.hostAddress !== "") {
      writer.uint32(66).string(message.hostAddress);
    }
    if (message.managerPort !== 0) {
      writer.uint32(72).uint32(message.managerPort);
    }
    if (message.trackerPort !== 0) {
      writer.uint32(80).uint32(message.trackerPort);
    }
    if (message.chainAPIPort !== 0) {
      writer.uint32(88).uint32(message.chainAPIPort);
    }
    if (message.chainRPCPort !== 0) {
      writer.uint32(96).uint32(message.chainRPCPort);
    }
    if (message.regionCode !== "") {
      writer.uint32(106).string(message.regionCode);
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

          message.managerAddress = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.operatorName = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.operatorDesc = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.operatorWebsiteURL = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.evmAddress = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.hostAddress = reader.string();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.managerPort = reader.uint32();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.trackerPort = reader.uint32();
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.chainAPIPort = reader.uint32();
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.chainRPCPort = reader.uint32();
          continue;
        case 13:
          if (tag !== 106) {
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

  fromJSON(object: any): MsgUpdateManager {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
      managerAddress: isSet(object.managerAddress) ? String(object.managerAddress) : "",
      operatorName: isSet(object.operatorName) ? String(object.operatorName) : "",
      operatorDesc: isSet(object.operatorDesc) ? String(object.operatorDesc) : "",
      operatorWebsiteURL: isSet(object.operatorWebsiteURL) ? String(object.operatorWebsiteURL) : "",
      evmAddress: isSet(object.evmAddress) ? String(object.evmAddress) : "",
      hostAddress: isSet(object.hostAddress) ? String(object.hostAddress) : "",
      managerPort: isSet(object.managerPort) ? Number(object.managerPort) : 0,
      trackerPort: isSet(object.trackerPort) ? Number(object.trackerPort) : 0,
      chainAPIPort: isSet(object.chainAPIPort) ? Number(object.chainAPIPort) : 0,
      chainRPCPort: isSet(object.chainRPCPort) ? Number(object.chainRPCPort) : 0,
      regionCode: isSet(object.regionCode) ? String(object.regionCode) : "",
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
    if (message.managerAddress !== "") {
      obj.managerAddress = message.managerAddress;
    }
    if (message.operatorName !== "") {
      obj.operatorName = message.operatorName;
    }
    if (message.operatorDesc !== "") {
      obj.operatorDesc = message.operatorDesc;
    }
    if (message.operatorWebsiteURL !== "") {
      obj.operatorWebsiteURL = message.operatorWebsiteURL;
    }
    if (message.evmAddress !== "") {
      obj.evmAddress = message.evmAddress;
    }
    if (message.hostAddress !== "") {
      obj.hostAddress = message.hostAddress;
    }
    if (message.managerPort !== 0) {
      obj.managerPort = Math.round(message.managerPort);
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
    if (message.regionCode !== "") {
      obj.regionCode = message.regionCode;
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
    message.managerAddress = object.managerAddress ?? "";
    message.operatorName = object.operatorName ?? "";
    message.operatorDesc = object.operatorDesc ?? "";
    message.operatorWebsiteURL = object.operatorWebsiteURL ?? "";
    message.evmAddress = object.evmAddress ?? "";
    message.hostAddress = object.hostAddress ?? "";
    message.managerPort = object.managerPort ?? 0;
    message.trackerPort = object.trackerPort ?? 0;
    message.chainAPIPort = object.chainAPIPort ?? 0;
    message.chainRPCPort = object.chainRPCPort ?? 0;
    message.regionCode = object.regionCode ?? "";
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
  RegisterManager(request: MsgRegisterManager): Promise<MsgRegisterManagerResponse>;
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
    this.RegisterManager = this.RegisterManager.bind(this);
    this.UpdateManager = this.UpdateManager.bind(this);
    this.DeleteManager = this.DeleteManager.bind(this);
  }
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(_m0.Reader.create(data)));
  }

  RegisterManager(request: MsgRegisterManager): Promise<MsgRegisterManagerResponse> {
    const data = MsgRegisterManager.encode(request).finish();
    const promise = this.rpc.request(this.service, "RegisterManager", data);
    return promise.then((data) => MsgRegisterManagerResponse.decode(_m0.Reader.create(data)));
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
