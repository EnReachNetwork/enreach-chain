/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "enreach.manager";

export interface Manager {
  managerAccount: string;
  operatorAccount: string;
  hostAddress: string;
  managerPort: number;
  trackerPort: number;
  chainAPIPort: number;
  chainRPCPort: number;
  regionCode: string;
  registerStatus: string;
  workingStatus: string;
  creator: string;
  createAt: number;
  updator: string;
  updateAt: number;
}

function createBaseManager(): Manager {
  return {
    managerAccount: "",
    operatorAccount: "",
    hostAddress: "",
    managerPort: 0,
    trackerPort: 0,
    chainAPIPort: 0,
    chainRPCPort: 0,
    regionCode: "",
    registerStatus: "",
    workingStatus: "",
    creator: "",
    createAt: 0,
    updator: "",
    updateAt: 0,
  };
}

export const Manager = {
  encode(message: Manager, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.managerAccount !== "") {
      writer.uint32(10).string(message.managerAccount);
    }
    if (message.operatorAccount !== "") {
      writer.uint32(18).string(message.operatorAccount);
    }
    if (message.hostAddress !== "") {
      writer.uint32(26).string(message.hostAddress);
    }
    if (message.managerPort !== 0) {
      writer.uint32(32).uint32(message.managerPort);
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
    if (message.regionCode !== "") {
      writer.uint32(66).string(message.regionCode);
    }
    if (message.registerStatus !== "") {
      writer.uint32(74).string(message.registerStatus);
    }
    if (message.workingStatus !== "") {
      writer.uint32(82).string(message.workingStatus);
    }
    if (message.creator !== "") {
      writer.uint32(90).string(message.creator);
    }
    if (message.createAt !== 0) {
      writer.uint32(96).uint64(message.createAt);
    }
    if (message.updator !== "") {
      writer.uint32(106).string(message.updator);
    }
    if (message.updateAt !== 0) {
      writer.uint32(112).uint64(message.updateAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Manager {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseManager();
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

          message.operatorAccount = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.hostAddress = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.managerPort = reader.uint32();
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
        case 8:
          if (tag !== 66) {
            break;
          }

          message.regionCode = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.registerStatus = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.workingStatus = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.createAt = longToNumber(reader.uint64() as Long);
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.updator = reader.string();
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }

          message.updateAt = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Manager {
    return {
      managerAccount: isSet(object.managerAccount) ? String(object.managerAccount) : "",
      operatorAccount: isSet(object.operatorAccount) ? String(object.operatorAccount) : "",
      hostAddress: isSet(object.hostAddress) ? String(object.hostAddress) : "",
      managerPort: isSet(object.managerPort) ? Number(object.managerPort) : 0,
      trackerPort: isSet(object.trackerPort) ? Number(object.trackerPort) : 0,
      chainAPIPort: isSet(object.chainAPIPort) ? Number(object.chainAPIPort) : 0,
      chainRPCPort: isSet(object.chainRPCPort) ? Number(object.chainRPCPort) : 0,
      regionCode: isSet(object.regionCode) ? String(object.regionCode) : "",
      registerStatus: isSet(object.registerStatus) ? String(object.registerStatus) : "",
      workingStatus: isSet(object.workingStatus) ? String(object.workingStatus) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
      createAt: isSet(object.createAt) ? Number(object.createAt) : 0,
      updator: isSet(object.updator) ? String(object.updator) : "",
      updateAt: isSet(object.updateAt) ? Number(object.updateAt) : 0,
    };
  },

  toJSON(message: Manager): unknown {
    const obj: any = {};
    if (message.managerAccount !== "") {
      obj.managerAccount = message.managerAccount;
    }
    if (message.operatorAccount !== "") {
      obj.operatorAccount = message.operatorAccount;
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
    if (message.registerStatus !== "") {
      obj.registerStatus = message.registerStatus;
    }
    if (message.workingStatus !== "") {
      obj.workingStatus = message.workingStatus;
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
    return obj;
  },

  create<I extends Exact<DeepPartial<Manager>, I>>(base?: I): Manager {
    return Manager.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Manager>, I>>(object: I): Manager {
    const message = createBaseManager();
    message.managerAccount = object.managerAccount ?? "";
    message.operatorAccount = object.operatorAccount ?? "";
    message.hostAddress = object.hostAddress ?? "";
    message.managerPort = object.managerPort ?? 0;
    message.trackerPort = object.trackerPort ?? 0;
    message.chainAPIPort = object.chainAPIPort ?? 0;
    message.chainRPCPort = object.chainRPCPort ?? 0;
    message.regionCode = object.regionCode ?? "";
    message.registerStatus = object.registerStatus ?? "";
    message.workingStatus = object.workingStatus ?? "";
    message.creator = object.creator ?? "";
    message.createAt = object.createAt ?? 0;
    message.updator = object.updator ?? "";
    message.updateAt = object.updateAt ?? 0;
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
