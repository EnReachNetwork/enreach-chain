/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "enreach.workload";

export interface EpochInfo {
  number: number;
  startTime: number;
  startBlock: number;
  endTime: number;
  endBlock: number;
}

function createBaseEpochInfo(): EpochInfo {
  return { number: 0, startTime: 0, startBlock: 0, endTime: 0, endBlock: 0 };
}

export const EpochInfo = {
  encode(message: EpochInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.number !== 0) {
      writer.uint32(8).uint64(message.number);
    }
    if (message.startTime !== 0) {
      writer.uint32(16).uint64(message.startTime);
    }
    if (message.startBlock !== 0) {
      writer.uint32(24).uint64(message.startBlock);
    }
    if (message.endTime !== 0) {
      writer.uint32(32).uint64(message.endTime);
    }
    if (message.endBlock !== 0) {
      writer.uint32(40).uint64(message.endBlock);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EpochInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEpochInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.number = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.startTime = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.startBlock = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.endTime = longToNumber(reader.uint64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.endBlock = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EpochInfo {
    return {
      number: isSet(object.number) ? Number(object.number) : 0,
      startTime: isSet(object.startTime) ? Number(object.startTime) : 0,
      startBlock: isSet(object.startBlock) ? Number(object.startBlock) : 0,
      endTime: isSet(object.endTime) ? Number(object.endTime) : 0,
      endBlock: isSet(object.endBlock) ? Number(object.endBlock) : 0,
    };
  },

  toJSON(message: EpochInfo): unknown {
    const obj: any = {};
    if (message.number !== 0) {
      obj.number = Math.round(message.number);
    }
    if (message.startTime !== 0) {
      obj.startTime = Math.round(message.startTime);
    }
    if (message.startBlock !== 0) {
      obj.startBlock = Math.round(message.startBlock);
    }
    if (message.endTime !== 0) {
      obj.endTime = Math.round(message.endTime);
    }
    if (message.endBlock !== 0) {
      obj.endBlock = Math.round(message.endBlock);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EpochInfo>, I>>(base?: I): EpochInfo {
    return EpochInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EpochInfo>, I>>(object: I): EpochInfo {
    const message = createBaseEpochInfo();
    message.number = object.number ?? 0;
    message.startTime = object.startTime ?? 0;
    message.startBlock = object.startBlock ?? 0;
    message.endTime = object.endTime ?? 0;
    message.endBlock = object.endBlock ?? 0;
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
