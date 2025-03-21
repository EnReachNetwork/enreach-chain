/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "enreach.workload";

export interface Workload {
  id: number;
  managerAccount: string;
  epoch: number;
  nodeID: string;
  score: number;
  createAt: number;
}

function createBaseWorkload(): Workload {
  return { id: 0, managerAccount: "", epoch: 0, nodeID: "", score: 0, createAt: 0 };
}

export const Workload = {
  encode(message: Workload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.managerAccount !== "") {
      writer.uint32(18).string(message.managerAccount);
    }
    if (message.epoch !== 0) {
      writer.uint32(24).uint64(message.epoch);
    }
    if (message.nodeID !== "") {
      writer.uint32(34).string(message.nodeID);
    }
    if (message.score !== 0) {
      writer.uint32(40).uint64(message.score);
    }
    if (message.createAt !== 0) {
      writer.uint32(48).uint64(message.createAt);
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
          if (tag !== 18) {
            break;
          }

          message.managerAccount = reader.string();
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

          message.nodeID = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.score = longToNumber(reader.uint64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.createAt = longToNumber(reader.uint64() as Long);
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
      managerAccount: isSet(object.managerAccount) ? String(object.managerAccount) : "",
      epoch: isSet(object.epoch) ? Number(object.epoch) : 0,
      nodeID: isSet(object.nodeID) ? String(object.nodeID) : "",
      score: isSet(object.score) ? Number(object.score) : 0,
      createAt: isSet(object.createAt) ? Number(object.createAt) : 0,
    };
  },

  toJSON(message: Workload): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.managerAccount !== "") {
      obj.managerAccount = message.managerAccount;
    }
    if (message.epoch !== 0) {
      obj.epoch = Math.round(message.epoch);
    }
    if (message.nodeID !== "") {
      obj.nodeID = message.nodeID;
    }
    if (message.score !== 0) {
      obj.score = Math.round(message.score);
    }
    if (message.createAt !== 0) {
      obj.createAt = Math.round(message.createAt);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Workload>, I>>(base?: I): Workload {
    return Workload.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Workload>, I>>(object: I): Workload {
    const message = createBaseWorkload();
    message.id = object.id ?? 0;
    message.managerAccount = object.managerAccount ?? "";
    message.epoch = object.epoch ?? 0;
    message.nodeID = object.nodeID ?? "";
    message.score = object.score ?? 0;
    message.createAt = object.createAt ?? 0;
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
