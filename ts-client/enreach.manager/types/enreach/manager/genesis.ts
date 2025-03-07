/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Manager } from "./manager";
import { Operator } from "./operator";
import { Params } from "./params";

export const protobufPackage = "enreach.manager";

/** GenesisState defines the manager module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of the module. */
  params: Params | undefined;
  managerList: Manager[];
  managerCount: number;
  operatorList: Operator[];
  operatorCount: number;
}

function createBaseGenesisState(): GenesisState {
  return { params: undefined, managerList: [], managerCount: 0, operatorList: [], operatorCount: 0 };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.managerList) {
      Manager.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.managerCount !== 0) {
      writer.uint32(24).uint64(message.managerCount);
    }
    for (const v of message.operatorList) {
      Operator.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.operatorCount !== 0) {
      writer.uint32(40).uint64(message.operatorCount);
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

          message.params = Params.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.managerList.push(Manager.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.managerCount = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.operatorList.push(Operator.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.operatorCount = longToNumber(reader.uint64() as Long);
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
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      managerList: Array.isArray(object?.managerList) ? object.managerList.map((e: any) => Manager.fromJSON(e)) : [],
      managerCount: isSet(object.managerCount) ? Number(object.managerCount) : 0,
      operatorList: Array.isArray(object?.operatorList)
        ? object.operatorList.map((e: any) => Operator.fromJSON(e))
        : [],
      operatorCount: isSet(object.operatorCount) ? Number(object.operatorCount) : 0,
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.params !== undefined) {
      obj.params = Params.toJSON(message.params);
    }
    if (message.managerList?.length) {
      obj.managerList = message.managerList.map((e) => Manager.toJSON(e));
    }
    if (message.managerCount !== 0) {
      obj.managerCount = Math.round(message.managerCount);
    }
    if (message.operatorList?.length) {
      obj.operatorList = message.operatorList.map((e) => Operator.toJSON(e));
    }
    if (message.operatorCount !== 0) {
      obj.operatorCount = Math.round(message.operatorCount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GenesisState>, I>>(base?: I): GenesisState {
    return GenesisState.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.managerList = object.managerList?.map((e) => Manager.fromPartial(e)) || [];
    message.managerCount = object.managerCount ?? 0;
    message.operatorList = object.operatorList?.map((e) => Operator.fromPartial(e)) || [];
    message.operatorCount = object.operatorCount ?? 0;
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
