/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "enreach.workload";

export interface NodeWorkload {
  epoch: number;
  nodeID: string;
  score: number;
  createAt: number;
}

export interface ManagerWorkload {
  epoch: number;
  managerAccount: string;
  reportedNodesCount: number;
  score: number;
  createAt: number;
  updateAt: number;
}

function createBaseNodeWorkload(): NodeWorkload {
  return { epoch: 0, nodeID: "", score: 0, createAt: 0 };
}

export const NodeWorkload = {
  encode(message: NodeWorkload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.epoch !== 0) {
      writer.uint32(8).uint64(message.epoch);
    }
    if (message.nodeID !== "") {
      writer.uint32(18).string(message.nodeID);
    }
    if (message.score !== 0) {
      writer.uint32(24).uint64(message.score);
    }
    if (message.createAt !== 0) {
      writer.uint32(32).uint64(message.createAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NodeWorkload {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeWorkload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.epoch = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.nodeID = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.score = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
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

  fromJSON(object: any): NodeWorkload {
    return {
      epoch: isSet(object.epoch) ? Number(object.epoch) : 0,
      nodeID: isSet(object.nodeID) ? String(object.nodeID) : "",
      score: isSet(object.score) ? Number(object.score) : 0,
      createAt: isSet(object.createAt) ? Number(object.createAt) : 0,
    };
  },

  toJSON(message: NodeWorkload): unknown {
    const obj: any = {};
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

  create<I extends Exact<DeepPartial<NodeWorkload>, I>>(base?: I): NodeWorkload {
    return NodeWorkload.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NodeWorkload>, I>>(object: I): NodeWorkload {
    const message = createBaseNodeWorkload();
    message.epoch = object.epoch ?? 0;
    message.nodeID = object.nodeID ?? "";
    message.score = object.score ?? 0;
    message.createAt = object.createAt ?? 0;
    return message;
  },
};

function createBaseManagerWorkload(): ManagerWorkload {
  return { epoch: 0, managerAccount: "", reportedNodesCount: 0, score: 0, createAt: 0, updateAt: 0 };
}

export const ManagerWorkload = {
  encode(message: ManagerWorkload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.epoch !== 0) {
      writer.uint32(8).uint64(message.epoch);
    }
    if (message.managerAccount !== "") {
      writer.uint32(18).string(message.managerAccount);
    }
    if (message.reportedNodesCount !== 0) {
      writer.uint32(24).uint64(message.reportedNodesCount);
    }
    if (message.score !== 0) {
      writer.uint32(32).uint64(message.score);
    }
    if (message.createAt !== 0) {
      writer.uint32(40).uint64(message.createAt);
    }
    if (message.updateAt !== 0) {
      writer.uint32(48).uint64(message.updateAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ManagerWorkload {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseManagerWorkload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.epoch = longToNumber(reader.uint64() as Long);
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

          message.reportedNodesCount = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.score = longToNumber(reader.uint64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.createAt = longToNumber(reader.uint64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
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

  fromJSON(object: any): ManagerWorkload {
    return {
      epoch: isSet(object.epoch) ? Number(object.epoch) : 0,
      managerAccount: isSet(object.managerAccount) ? String(object.managerAccount) : "",
      reportedNodesCount: isSet(object.reportedNodesCount) ? Number(object.reportedNodesCount) : 0,
      score: isSet(object.score) ? Number(object.score) : 0,
      createAt: isSet(object.createAt) ? Number(object.createAt) : 0,
      updateAt: isSet(object.updateAt) ? Number(object.updateAt) : 0,
    };
  },

  toJSON(message: ManagerWorkload): unknown {
    const obj: any = {};
    if (message.epoch !== 0) {
      obj.epoch = Math.round(message.epoch);
    }
    if (message.managerAccount !== "") {
      obj.managerAccount = message.managerAccount;
    }
    if (message.reportedNodesCount !== 0) {
      obj.reportedNodesCount = Math.round(message.reportedNodesCount);
    }
    if (message.score !== 0) {
      obj.score = Math.round(message.score);
    }
    if (message.createAt !== 0) {
      obj.createAt = Math.round(message.createAt);
    }
    if (message.updateAt !== 0) {
      obj.updateAt = Math.round(message.updateAt);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ManagerWorkload>, I>>(base?: I): ManagerWorkload {
    return ManagerWorkload.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ManagerWorkload>, I>>(object: I): ManagerWorkload {
    const message = createBaseManagerWorkload();
    message.epoch = object.epoch ?? 0;
    message.managerAccount = object.managerAccount ?? "";
    message.reportedNodesCount = object.reportedNodesCount ?? 0;
    message.score = object.score ?? 0;
    message.createAt = object.createAt ?? 0;
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
