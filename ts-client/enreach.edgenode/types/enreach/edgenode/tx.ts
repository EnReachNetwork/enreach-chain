/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Params } from "./params";

export const protobufPackage = "enreach.edgenode";

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

export interface MsgCreateUser {
  signer: string;
  userID: string;
}

export interface MsgCreateUserResponse {
}

export interface MsgBindUserEVMAccount {
  signer: string;
  userID: string;
  evmAccount: string;
  evmPubkey: Uint8Array;
  evmSignature: Uint8Array;
}

export interface MsgBindUserEVMAccountResponse {
}

export interface MsgRegisterNode {
  signer: string;
  nodeID: string;
  deviceType: string;
}

export interface MsgRegisterNodeResponse {
}

export interface MsgBindAndActivateNode {
  signer: string;
  nodeID: string;
  userID: string;
  nodeName: string;
  regionCode: string;
}

export interface MsgBindAndActivateNodeResponse {
}

export interface MsgUnbindNode {
  signer: string;
  nodeID: string;
  userID: string;
}

export interface MsgUnbindNodeResponse {
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

function createBaseMsgCreateUser(): MsgCreateUser {
  return { signer: "", userID: "" };
}

export const MsgCreateUser = {
  encode(message: MsgCreateUser, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.userID !== "") {
      writer.uint32(18).string(message.userID);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateUser {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateUser();
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

          message.userID = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateUser {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      userID: isSet(object.userID) ? String(object.userID) : "",
    };
  },

  toJSON(message: MsgCreateUser): unknown {
    const obj: any = {};
    if (message.signer !== "") {
      obj.signer = message.signer;
    }
    if (message.userID !== "") {
      obj.userID = message.userID;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateUser>, I>>(base?: I): MsgCreateUser {
    return MsgCreateUser.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateUser>, I>>(object: I): MsgCreateUser {
    const message = createBaseMsgCreateUser();
    message.signer = object.signer ?? "";
    message.userID = object.userID ?? "";
    return message;
  },
};

function createBaseMsgCreateUserResponse(): MsgCreateUserResponse {
  return {};
}

export const MsgCreateUserResponse = {
  encode(_: MsgCreateUserResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateUserResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateUserResponse();
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

  fromJSON(_: any): MsgCreateUserResponse {
    return {};
  },

  toJSON(_: MsgCreateUserResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateUserResponse>, I>>(base?: I): MsgCreateUserResponse {
    return MsgCreateUserResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateUserResponse>, I>>(_: I): MsgCreateUserResponse {
    const message = createBaseMsgCreateUserResponse();
    return message;
  },
};

function createBaseMsgBindUserEVMAccount(): MsgBindUserEVMAccount {
  return { signer: "", userID: "", evmAccount: "", evmPubkey: new Uint8Array(0), evmSignature: new Uint8Array(0) };
}

export const MsgBindUserEVMAccount = {
  encode(message: MsgBindUserEVMAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.userID !== "") {
      writer.uint32(18).string(message.userID);
    }
    if (message.evmAccount !== "") {
      writer.uint32(26).string(message.evmAccount);
    }
    if (message.evmPubkey.length !== 0) {
      writer.uint32(34).bytes(message.evmPubkey);
    }
    if (message.evmSignature.length !== 0) {
      writer.uint32(42).bytes(message.evmSignature);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBindUserEVMAccount {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBindUserEVMAccount();
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

          message.userID = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.evmAccount = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.evmPubkey = reader.bytes();
          continue;
        case 5:
          if (tag !== 42) {
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

  fromJSON(object: any): MsgBindUserEVMAccount {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      userID: isSet(object.userID) ? String(object.userID) : "",
      evmAccount: isSet(object.evmAccount) ? String(object.evmAccount) : "",
      evmPubkey: isSet(object.evmPubkey) ? bytesFromBase64(object.evmPubkey) : new Uint8Array(0),
      evmSignature: isSet(object.evmSignature) ? bytesFromBase64(object.evmSignature) : new Uint8Array(0),
    };
  },

  toJSON(message: MsgBindUserEVMAccount): unknown {
    const obj: any = {};
    if (message.signer !== "") {
      obj.signer = message.signer;
    }
    if (message.userID !== "") {
      obj.userID = message.userID;
    }
    if (message.evmAccount !== "") {
      obj.evmAccount = message.evmAccount;
    }
    if (message.evmPubkey.length !== 0) {
      obj.evmPubkey = base64FromBytes(message.evmPubkey);
    }
    if (message.evmSignature.length !== 0) {
      obj.evmSignature = base64FromBytes(message.evmSignature);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgBindUserEVMAccount>, I>>(base?: I): MsgBindUserEVMAccount {
    return MsgBindUserEVMAccount.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgBindUserEVMAccount>, I>>(object: I): MsgBindUserEVMAccount {
    const message = createBaseMsgBindUserEVMAccount();
    message.signer = object.signer ?? "";
    message.userID = object.userID ?? "";
    message.evmAccount = object.evmAccount ?? "";
    message.evmPubkey = object.evmPubkey ?? new Uint8Array(0);
    message.evmSignature = object.evmSignature ?? new Uint8Array(0);
    return message;
  },
};

function createBaseMsgBindUserEVMAccountResponse(): MsgBindUserEVMAccountResponse {
  return {};
}

export const MsgBindUserEVMAccountResponse = {
  encode(_: MsgBindUserEVMAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBindUserEVMAccountResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBindUserEVMAccountResponse();
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

  fromJSON(_: any): MsgBindUserEVMAccountResponse {
    return {};
  },

  toJSON(_: MsgBindUserEVMAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgBindUserEVMAccountResponse>, I>>(base?: I): MsgBindUserEVMAccountResponse {
    return MsgBindUserEVMAccountResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgBindUserEVMAccountResponse>, I>>(_: I): MsgBindUserEVMAccountResponse {
    const message = createBaseMsgBindUserEVMAccountResponse();
    return message;
  },
};

function createBaseMsgRegisterNode(): MsgRegisterNode {
  return { signer: "", nodeID: "", deviceType: "" };
}

export const MsgRegisterNode = {
  encode(message: MsgRegisterNode, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.nodeID !== "") {
      writer.uint32(18).string(message.nodeID);
    }
    if (message.deviceType !== "") {
      writer.uint32(26).string(message.deviceType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterNode {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterNode();
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

          message.nodeID = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.deviceType = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgRegisterNode {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      nodeID: isSet(object.nodeID) ? String(object.nodeID) : "",
      deviceType: isSet(object.deviceType) ? String(object.deviceType) : "",
    };
  },

  toJSON(message: MsgRegisterNode): unknown {
    const obj: any = {};
    if (message.signer !== "") {
      obj.signer = message.signer;
    }
    if (message.nodeID !== "") {
      obj.nodeID = message.nodeID;
    }
    if (message.deviceType !== "") {
      obj.deviceType = message.deviceType;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgRegisterNode>, I>>(base?: I): MsgRegisterNode {
    return MsgRegisterNode.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgRegisterNode>, I>>(object: I): MsgRegisterNode {
    const message = createBaseMsgRegisterNode();
    message.signer = object.signer ?? "";
    message.nodeID = object.nodeID ?? "";
    message.deviceType = object.deviceType ?? "";
    return message;
  },
};

function createBaseMsgRegisterNodeResponse(): MsgRegisterNodeResponse {
  return {};
}

export const MsgRegisterNodeResponse = {
  encode(_: MsgRegisterNodeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterNodeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterNodeResponse();
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

  fromJSON(_: any): MsgRegisterNodeResponse {
    return {};
  },

  toJSON(_: MsgRegisterNodeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgRegisterNodeResponse>, I>>(base?: I): MsgRegisterNodeResponse {
    return MsgRegisterNodeResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgRegisterNodeResponse>, I>>(_: I): MsgRegisterNodeResponse {
    const message = createBaseMsgRegisterNodeResponse();
    return message;
  },
};

function createBaseMsgBindAndActivateNode(): MsgBindAndActivateNode {
  return { signer: "", nodeID: "", userID: "", nodeName: "", regionCode: "" };
}

export const MsgBindAndActivateNode = {
  encode(message: MsgBindAndActivateNode, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.nodeID !== "") {
      writer.uint32(18).string(message.nodeID);
    }
    if (message.userID !== "") {
      writer.uint32(26).string(message.userID);
    }
    if (message.nodeName !== "") {
      writer.uint32(34).string(message.nodeName);
    }
    if (message.regionCode !== "") {
      writer.uint32(42).string(message.regionCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBindAndActivateNode {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBindAndActivateNode();
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

          message.nodeID = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.userID = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.nodeName = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
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

  fromJSON(object: any): MsgBindAndActivateNode {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      nodeID: isSet(object.nodeID) ? String(object.nodeID) : "",
      userID: isSet(object.userID) ? String(object.userID) : "",
      nodeName: isSet(object.nodeName) ? String(object.nodeName) : "",
      regionCode: isSet(object.regionCode) ? String(object.regionCode) : "",
    };
  },

  toJSON(message: MsgBindAndActivateNode): unknown {
    const obj: any = {};
    if (message.signer !== "") {
      obj.signer = message.signer;
    }
    if (message.nodeID !== "") {
      obj.nodeID = message.nodeID;
    }
    if (message.userID !== "") {
      obj.userID = message.userID;
    }
    if (message.nodeName !== "") {
      obj.nodeName = message.nodeName;
    }
    if (message.regionCode !== "") {
      obj.regionCode = message.regionCode;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgBindAndActivateNode>, I>>(base?: I): MsgBindAndActivateNode {
    return MsgBindAndActivateNode.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgBindAndActivateNode>, I>>(object: I): MsgBindAndActivateNode {
    const message = createBaseMsgBindAndActivateNode();
    message.signer = object.signer ?? "";
    message.nodeID = object.nodeID ?? "";
    message.userID = object.userID ?? "";
    message.nodeName = object.nodeName ?? "";
    message.regionCode = object.regionCode ?? "";
    return message;
  },
};

function createBaseMsgBindAndActivateNodeResponse(): MsgBindAndActivateNodeResponse {
  return {};
}

export const MsgBindAndActivateNodeResponse = {
  encode(_: MsgBindAndActivateNodeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBindAndActivateNodeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBindAndActivateNodeResponse();
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

  fromJSON(_: any): MsgBindAndActivateNodeResponse {
    return {};
  },

  toJSON(_: MsgBindAndActivateNodeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgBindAndActivateNodeResponse>, I>>(base?: I): MsgBindAndActivateNodeResponse {
    return MsgBindAndActivateNodeResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgBindAndActivateNodeResponse>, I>>(_: I): MsgBindAndActivateNodeResponse {
    const message = createBaseMsgBindAndActivateNodeResponse();
    return message;
  },
};

function createBaseMsgUnbindNode(): MsgUnbindNode {
  return { signer: "", nodeID: "", userID: "" };
}

export const MsgUnbindNode = {
  encode(message: MsgUnbindNode, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.nodeID !== "") {
      writer.uint32(18).string(message.nodeID);
    }
    if (message.userID !== "") {
      writer.uint32(26).string(message.userID);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnbindNode {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnbindNode();
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

          message.nodeID = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.userID = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUnbindNode {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      nodeID: isSet(object.nodeID) ? String(object.nodeID) : "",
      userID: isSet(object.userID) ? String(object.userID) : "",
    };
  },

  toJSON(message: MsgUnbindNode): unknown {
    const obj: any = {};
    if (message.signer !== "") {
      obj.signer = message.signer;
    }
    if (message.nodeID !== "") {
      obj.nodeID = message.nodeID;
    }
    if (message.userID !== "") {
      obj.userID = message.userID;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUnbindNode>, I>>(base?: I): MsgUnbindNode {
    return MsgUnbindNode.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUnbindNode>, I>>(object: I): MsgUnbindNode {
    const message = createBaseMsgUnbindNode();
    message.signer = object.signer ?? "";
    message.nodeID = object.nodeID ?? "";
    message.userID = object.userID ?? "";
    return message;
  },
};

function createBaseMsgUnbindNodeResponse(): MsgUnbindNodeResponse {
  return {};
}

export const MsgUnbindNodeResponse = {
  encode(_: MsgUnbindNodeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnbindNodeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnbindNodeResponse();
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

  fromJSON(_: any): MsgUnbindNodeResponse {
    return {};
  },

  toJSON(_: MsgUnbindNodeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUnbindNodeResponse>, I>>(base?: I): MsgUnbindNodeResponse {
    return MsgUnbindNodeResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUnbindNodeResponse>, I>>(_: I): MsgUnbindNodeResponse {
    const message = createBaseMsgUnbindNodeResponse();
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
  CreateUser(request: MsgCreateUser): Promise<MsgCreateUserResponse>;
  BindUserEVMAccount(request: MsgBindUserEVMAccount): Promise<MsgBindUserEVMAccountResponse>;
  RegisterNode(request: MsgRegisterNode): Promise<MsgRegisterNodeResponse>;
  BindAndActivateNode(request: MsgBindAndActivateNode): Promise<MsgBindAndActivateNodeResponse>;
  UnbindNode(request: MsgUnbindNode): Promise<MsgUnbindNodeResponse>;
  CreateSuperior(request: MsgCreateSuperior): Promise<MsgCreateSuperiorResponse>;
  UpdateSuperior(request: MsgUpdateSuperior): Promise<MsgUpdateSuperiorResponse>;
}

export const MsgServiceName = "enreach.edgenode.Msg";
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MsgServiceName;
    this.rpc = rpc;
    this.UpdateParams = this.UpdateParams.bind(this);
    this.CreateUser = this.CreateUser.bind(this);
    this.BindUserEVMAccount = this.BindUserEVMAccount.bind(this);
    this.RegisterNode = this.RegisterNode.bind(this);
    this.BindAndActivateNode = this.BindAndActivateNode.bind(this);
    this.UnbindNode = this.UnbindNode.bind(this);
    this.CreateSuperior = this.CreateSuperior.bind(this);
    this.UpdateSuperior = this.UpdateSuperior.bind(this);
  }
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(_m0.Reader.create(data)));
  }

  CreateUser(request: MsgCreateUser): Promise<MsgCreateUserResponse> {
    const data = MsgCreateUser.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateUser", data);
    return promise.then((data) => MsgCreateUserResponse.decode(_m0.Reader.create(data)));
  }

  BindUserEVMAccount(request: MsgBindUserEVMAccount): Promise<MsgBindUserEVMAccountResponse> {
    const data = MsgBindUserEVMAccount.encode(request).finish();
    const promise = this.rpc.request(this.service, "BindUserEVMAccount", data);
    return promise.then((data) => MsgBindUserEVMAccountResponse.decode(_m0.Reader.create(data)));
  }

  RegisterNode(request: MsgRegisterNode): Promise<MsgRegisterNodeResponse> {
    const data = MsgRegisterNode.encode(request).finish();
    const promise = this.rpc.request(this.service, "RegisterNode", data);
    return promise.then((data) => MsgRegisterNodeResponse.decode(_m0.Reader.create(data)));
  }

  BindAndActivateNode(request: MsgBindAndActivateNode): Promise<MsgBindAndActivateNodeResponse> {
    const data = MsgBindAndActivateNode.encode(request).finish();
    const promise = this.rpc.request(this.service, "BindAndActivateNode", data);
    return promise.then((data) => MsgBindAndActivateNodeResponse.decode(_m0.Reader.create(data)));
  }

  UnbindNode(request: MsgUnbindNode): Promise<MsgUnbindNodeResponse> {
    const data = MsgUnbindNode.encode(request).finish();
    const promise = this.rpc.request(this.service, "UnbindNode", data);
    return promise.then((data) => MsgUnbindNodeResponse.decode(_m0.Reader.create(data)));
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
