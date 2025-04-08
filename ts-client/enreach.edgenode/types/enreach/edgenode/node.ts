/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "enreach.edgenode";

export interface Node {
  nodeID: string;
  userID: string;
  nodeName: string;
  deviceType: string;
  regionCode: string;
  /** Default 0 - stands for Enreach traffic */
  trafficType: number;
  registerStatus: string;
  workingStatus: string;
  cheatStatus: string;
  reputationPoint: number;
  creator: string;
  createAt: number;
  updator: string;
  updateAt: number;
}

function createBaseNode(): Node {
  return {
    nodeID: "",
    userID: "",
    nodeName: "",
    deviceType: "",
    regionCode: "",
    trafficType: 0,
    registerStatus: "",
    workingStatus: "",
    cheatStatus: "",
    reputationPoint: 0,
    creator: "",
    createAt: 0,
    updator: "",
    updateAt: 0,
  };
}

export const Node = {
  encode(message: Node, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nodeID !== "") {
      writer.uint32(10).string(message.nodeID);
    }
    if (message.userID !== "") {
      writer.uint32(18).string(message.userID);
    }
    if (message.nodeName !== "") {
      writer.uint32(26).string(message.nodeName);
    }
    if (message.deviceType !== "") {
      writer.uint32(34).string(message.deviceType);
    }
    if (message.regionCode !== "") {
      writer.uint32(42).string(message.regionCode);
    }
    if (message.trafficType !== 0) {
      writer.uint32(48).uint32(message.trafficType);
    }
    if (message.registerStatus !== "") {
      writer.uint32(58).string(message.registerStatus);
    }
    if (message.workingStatus !== "") {
      writer.uint32(66).string(message.workingStatus);
    }
    if (message.cheatStatus !== "") {
      writer.uint32(74).string(message.cheatStatus);
    }
    if (message.reputationPoint !== 0) {
      writer.uint32(80).int64(message.reputationPoint);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Node {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.nodeID = reader.string();
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

          message.nodeName = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.deviceType = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.regionCode = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.trafficType = reader.uint32();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.registerStatus = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.workingStatus = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.cheatStatus = reader.string();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.reputationPoint = longToNumber(reader.int64() as Long);
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

  fromJSON(object: any): Node {
    return {
      nodeID: isSet(object.nodeID) ? String(object.nodeID) : "",
      userID: isSet(object.userID) ? String(object.userID) : "",
      nodeName: isSet(object.nodeName) ? String(object.nodeName) : "",
      deviceType: isSet(object.deviceType) ? String(object.deviceType) : "",
      regionCode: isSet(object.regionCode) ? String(object.regionCode) : "",
      trafficType: isSet(object.trafficType) ? Number(object.trafficType) : 0,
      registerStatus: isSet(object.registerStatus) ? String(object.registerStatus) : "",
      workingStatus: isSet(object.workingStatus) ? String(object.workingStatus) : "",
      cheatStatus: isSet(object.cheatStatus) ? String(object.cheatStatus) : "",
      reputationPoint: isSet(object.reputationPoint) ? Number(object.reputationPoint) : 0,
      creator: isSet(object.creator) ? String(object.creator) : "",
      createAt: isSet(object.createAt) ? Number(object.createAt) : 0,
      updator: isSet(object.updator) ? String(object.updator) : "",
      updateAt: isSet(object.updateAt) ? Number(object.updateAt) : 0,
    };
  },

  toJSON(message: Node): unknown {
    const obj: any = {};
    if (message.nodeID !== "") {
      obj.nodeID = message.nodeID;
    }
    if (message.userID !== "") {
      obj.userID = message.userID;
    }
    if (message.nodeName !== "") {
      obj.nodeName = message.nodeName;
    }
    if (message.deviceType !== "") {
      obj.deviceType = message.deviceType;
    }
    if (message.regionCode !== "") {
      obj.regionCode = message.regionCode;
    }
    if (message.trafficType !== 0) {
      obj.trafficType = Math.round(message.trafficType);
    }
    if (message.registerStatus !== "") {
      obj.registerStatus = message.registerStatus;
    }
    if (message.workingStatus !== "") {
      obj.workingStatus = message.workingStatus;
    }
    if (message.cheatStatus !== "") {
      obj.cheatStatus = message.cheatStatus;
    }
    if (message.reputationPoint !== 0) {
      obj.reputationPoint = Math.round(message.reputationPoint);
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

  create<I extends Exact<DeepPartial<Node>, I>>(base?: I): Node {
    return Node.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Node>, I>>(object: I): Node {
    const message = createBaseNode();
    message.nodeID = object.nodeID ?? "";
    message.userID = object.userID ?? "";
    message.nodeName = object.nodeName ?? "";
    message.deviceType = object.deviceType ?? "";
    message.regionCode = object.regionCode ?? "";
    message.trafficType = object.trafficType ?? 0;
    message.registerStatus = object.registerStatus ?? "";
    message.workingStatus = object.workingStatus ?? "";
    message.cheatStatus = object.cheatStatus ?? "";
    message.reputationPoint = object.reputationPoint ?? 0;
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
