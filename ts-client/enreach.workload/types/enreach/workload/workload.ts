/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "enreach.workload";

export interface Workload {
  id: number;
  epoch: number;
  minerId: string;
  score: number;
  managerId: string;
  creator: string;
}

function createBaseWorkload(): Workload {
  return { id: 0, epoch: 0, minerId: "", score: 0, managerId: "", creator: "" };
}

export const Workload = {
  encode(message: Workload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
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
    if (message.creator !== "") {
      writer.uint32(50).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Workload {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWorkload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = longToNumber(reader.uint64() as Long);
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
        case 6:
          if (tag !== 50) {
            break;
          }

          message.creator = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Workload {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      epoch: isSet(object.epoch) ? Number(object.epoch) : 0,
      minerId: isSet(object.minerId) ? String(object.minerId) : "",
      score: isSet(object.score) ? Number(object.score) : 0,
      managerId: isSet(object.managerId) ? String(object.managerId) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
    };
  },

  toJSON(message: Workload): unknown {
    const obj: any = {};
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
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Workload>, I>>(base?: I): Workload {
    return Workload.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Workload>, I>>(object: I): Workload {
    const message = createBaseWorkload();
    message.id = object.id ?? 0;
    message.epoch = object.epoch ?? 0;
    message.minerId = object.minerId ?? "";
    message.score = object.score ?? 0;
    message.managerId = object.managerId ?? "";
    message.creator = object.creator ?? "";
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
