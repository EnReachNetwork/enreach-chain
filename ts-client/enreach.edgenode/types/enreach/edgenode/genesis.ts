/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Node } from "./node";
import { Params } from "./params";
import { Superior } from "./superior";
import { User } from "./user";

export const protobufPackage = "enreach.edgenode";

/** GenesisState defines the edgenode module's genesis state. */
export interface GenesisState {
  adminAccount: string;
  /** params defines all the parameters of the module. */
  params: Params | undefined;
  userList: User[];
  userCount: number;
  nodeList: Node[];
  nodeCount: number;
  superior: Superior | undefined;
}

function createBaseGenesisState(): GenesisState {
  return {
    adminAccount: "",
    params: undefined,
    userList: [],
    userCount: 0,
    nodeList: [],
    nodeCount: 0,
    superior: undefined,
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.adminAccount !== "") {
      writer.uint32(10).string(message.adminAccount);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.userList) {
      User.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.userCount !== 0) {
      writer.uint32(32).uint64(message.userCount);
    }
    for (const v of message.nodeList) {
      Node.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.nodeCount !== 0) {
      writer.uint32(48).uint64(message.nodeCount);
    }
    if (message.superior !== undefined) {
      Superior.encode(message.superior, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.adminAccount = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.userList.push(User.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.userCount = longToNumber(reader.uint64() as Long);
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.nodeList.push(Node.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.nodeCount = longToNumber(reader.uint64() as Long);
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.superior = Superior.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      adminAccount: isSet(object.adminAccount) ? String(object.adminAccount) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      userList: Array.isArray(object?.userList) ? object.userList.map((e: any) => User.fromJSON(e)) : [],
      userCount: isSet(object.userCount) ? Number(object.userCount) : 0,
      nodeList: Array.isArray(object?.nodeList) ? object.nodeList.map((e: any) => Node.fromJSON(e)) : [],
      nodeCount: isSet(object.nodeCount) ? Number(object.nodeCount) : 0,
      superior: isSet(object.superior) ? Superior.fromJSON(object.superior) : undefined,
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.adminAccount !== "") {
      obj.adminAccount = message.adminAccount;
    }
    if (message.params !== undefined) {
      obj.params = Params.toJSON(message.params);
    }
    if (message.userList?.length) {
      obj.userList = message.userList.map((e) => User.toJSON(e));
    }
    if (message.userCount !== 0) {
      obj.userCount = Math.round(message.userCount);
    }
    if (message.nodeList?.length) {
      obj.nodeList = message.nodeList.map((e) => Node.toJSON(e));
    }
    if (message.nodeCount !== 0) {
      obj.nodeCount = Math.round(message.nodeCount);
    }
    if (message.superior !== undefined) {
      obj.superior = Superior.toJSON(message.superior);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GenesisState>, I>>(base?: I): GenesisState {
    return GenesisState.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.adminAccount = object.adminAccount ?? "";
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.userList = object.userList?.map((e) => User.fromPartial(e)) || [];
    message.userCount = object.userCount ?? 0;
    message.nodeList = object.nodeList?.map((e) => Node.fromPartial(e)) || [];
    message.nodeCount = object.nodeCount ?? 0;
    message.superior = (object.superior !== undefined && object.superior !== null)
      ? Superior.fromPartial(object.superior)
      : undefined;
    return message;
  },
};

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
