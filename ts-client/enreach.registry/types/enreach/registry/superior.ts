/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "enreach.registry";

export interface Superior {
  account: string;
  creator: string;
  createAt: number;
  updator: string;
  updateAt: number;
  signer: string;
}

function createBaseSuperior(): Superior {
  return { account: "", creator: "", createAt: 0, updator: "", updateAt: 0, signer: "" };
}

export const Superior = {
  encode(message: Superior, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.createAt !== 0) {
      writer.uint32(24).uint64(message.createAt);
    }
    if (message.updator !== "") {
      writer.uint32(34).string(message.updator);
    }
    if (message.updateAt !== 0) {
      writer.uint32(40).uint64(message.updateAt);
    }
    if (message.signer !== "") {
      writer.uint32(50).string(message.signer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Superior {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperior();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.account = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.createAt = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.updator = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.updateAt = longToNumber(reader.uint64() as Long);
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.signer = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Superior {
    return {
      account: isSet(object.account) ? String(object.account) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
      createAt: isSet(object.createAt) ? Number(object.createAt) : 0,
      updator: isSet(object.updator) ? String(object.updator) : "",
      updateAt: isSet(object.updateAt) ? Number(object.updateAt) : 0,
      signer: isSet(object.signer) ? String(object.signer) : "",
    };
  },

  toJSON(message: Superior): unknown {
    const obj: any = {};
    if (message.account !== "") {
      obj.account = message.account;
    }
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.createAt !== 0) {
      obj.createAt = Math.round(message.createAt);
    }
    if (message.updator !== "") {
      obj.updator = message.updator;
    }
    if (message.updateAt !== 0) {
      obj.updateAt = Math.round(message.updateAt);
    }
    if (message.signer !== "") {
      obj.signer = message.signer;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Superior>, I>>(base?: I): Superior {
    return Superior.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Superior>, I>>(object: I): Superior {
    const message = createBaseSuperior();
    message.account = object.account ?? "";
    message.creator = object.creator ?? "";
    message.createAt = object.createAt ?? 0;
    message.updator = object.updator ?? "";
    message.updateAt = object.updateAt ?? 0;
    message.signer = object.signer ?? "";
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
