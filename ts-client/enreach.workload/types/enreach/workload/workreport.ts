/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageResponse } from "../../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "enreach.workload";

export interface NodeScore {
  nodeID: string;
  score: number;
}

export interface NodeScoreDB {
  score: number;
  createAt: number;
  updateAt: number;
}

export interface ManagerNodeScoreMap {
  /** manager_account => score */
  managerScoreMap: { [key: string]: NodeScoreDB };
}

export interface ManagerNodeScoreMap_ManagerScoreMapEntry {
  key: string;
  value: NodeScoreDB | undefined;
}

export interface Workreport {
  epoch: number;
  nodeID: string;
  managerScoreMap: { [key: string]: NodeScoreDB };
}

export interface Workreport_ManagerScoreMapEntry {
  key: string;
  value: NodeScoreDB | undefined;
}

export interface EpochProcessData {
  epoch: number;
  /** total nodes count need to be processed */
  totalNodesCount: number;
  /** accumulated processed nodes count */
  processedNodesCount: number;
  startAt: number;
  updateAt: number;
  status: string;
  pagination: PageResponse | undefined;
}

function createBaseNodeScore(): NodeScore {
  return { nodeID: "", score: 0 };
}

export const NodeScore = {
  encode(message: NodeScore, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nodeID !== "") {
      writer.uint32(10).string(message.nodeID);
    }
    if (message.score !== 0) {
      writer.uint32(16).uint64(message.score);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NodeScore {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeScore();
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
          if (tag !== 16) {
            break;
          }

          message.score = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NodeScore {
    return {
      nodeID: isSet(object.nodeID) ? String(object.nodeID) : "",
      score: isSet(object.score) ? Number(object.score) : 0,
    };
  },

  toJSON(message: NodeScore): unknown {
    const obj: any = {};
    if (message.nodeID !== "") {
      obj.nodeID = message.nodeID;
    }
    if (message.score !== 0) {
      obj.score = Math.round(message.score);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NodeScore>, I>>(base?: I): NodeScore {
    return NodeScore.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NodeScore>, I>>(object: I): NodeScore {
    const message = createBaseNodeScore();
    message.nodeID = object.nodeID ?? "";
    message.score = object.score ?? 0;
    return message;
  },
};

function createBaseNodeScoreDB(): NodeScoreDB {
  return { score: 0, createAt: 0, updateAt: 0 };
}

export const NodeScoreDB = {
  encode(message: NodeScoreDB, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.score !== 0) {
      writer.uint32(8).uint64(message.score);
    }
    if (message.createAt !== 0) {
      writer.uint32(16).uint64(message.createAt);
    }
    if (message.updateAt !== 0) {
      writer.uint32(24).uint64(message.updateAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NodeScoreDB {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeScoreDB();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.score = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.createAt = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
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

  fromJSON(object: any): NodeScoreDB {
    return {
      score: isSet(object.score) ? Number(object.score) : 0,
      createAt: isSet(object.createAt) ? Number(object.createAt) : 0,
      updateAt: isSet(object.updateAt) ? Number(object.updateAt) : 0,
    };
  },

  toJSON(message: NodeScoreDB): unknown {
    const obj: any = {};
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

  create<I extends Exact<DeepPartial<NodeScoreDB>, I>>(base?: I): NodeScoreDB {
    return NodeScoreDB.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NodeScoreDB>, I>>(object: I): NodeScoreDB {
    const message = createBaseNodeScoreDB();
    message.score = object.score ?? 0;
    message.createAt = object.createAt ?? 0;
    message.updateAt = object.updateAt ?? 0;
    return message;
  },
};

function createBaseManagerNodeScoreMap(): ManagerNodeScoreMap {
  return { managerScoreMap: {} };
}

export const ManagerNodeScoreMap = {
  encode(message: ManagerNodeScoreMap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.managerScoreMap).forEach(([key, value]) => {
      ManagerNodeScoreMap_ManagerScoreMapEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ManagerNodeScoreMap {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseManagerNodeScoreMap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = ManagerNodeScoreMap_ManagerScoreMapEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.managerScoreMap[entry1.key] = entry1.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ManagerNodeScoreMap {
    return {
      managerScoreMap: isObject(object.managerScoreMap)
        ? Object.entries(object.managerScoreMap).reduce<{ [key: string]: NodeScoreDB }>((acc, [key, value]) => {
          acc[key] = NodeScoreDB.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: ManagerNodeScoreMap): unknown {
    const obj: any = {};
    if (message.managerScoreMap) {
      const entries = Object.entries(message.managerScoreMap);
      if (entries.length > 0) {
        obj.managerScoreMap = {};
        entries.forEach(([k, v]) => {
          obj.managerScoreMap[k] = NodeScoreDB.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ManagerNodeScoreMap>, I>>(base?: I): ManagerNodeScoreMap {
    return ManagerNodeScoreMap.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ManagerNodeScoreMap>, I>>(object: I): ManagerNodeScoreMap {
    const message = createBaseManagerNodeScoreMap();
    message.managerScoreMap = Object.entries(object.managerScoreMap ?? {}).reduce<{ [key: string]: NodeScoreDB }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = NodeScoreDB.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseManagerNodeScoreMap_ManagerScoreMapEntry(): ManagerNodeScoreMap_ManagerScoreMapEntry {
  return { key: "", value: undefined };
}

export const ManagerNodeScoreMap_ManagerScoreMapEntry = {
  encode(message: ManagerNodeScoreMap_ManagerScoreMapEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      NodeScoreDB.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ManagerNodeScoreMap_ManagerScoreMapEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseManagerNodeScoreMap_ManagerScoreMapEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = NodeScoreDB.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ManagerNodeScoreMap_ManagerScoreMapEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? NodeScoreDB.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: ManagerNodeScoreMap_ManagerScoreMapEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = NodeScoreDB.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ManagerNodeScoreMap_ManagerScoreMapEntry>, I>>(
    base?: I,
  ): ManagerNodeScoreMap_ManagerScoreMapEntry {
    return ManagerNodeScoreMap_ManagerScoreMapEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ManagerNodeScoreMap_ManagerScoreMapEntry>, I>>(
    object: I,
  ): ManagerNodeScoreMap_ManagerScoreMapEntry {
    const message = createBaseManagerNodeScoreMap_ManagerScoreMapEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? NodeScoreDB.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseWorkreport(): Workreport {
  return { epoch: 0, nodeID: "", managerScoreMap: {} };
}

export const Workreport = {
  encode(message: Workreport, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.epoch !== 0) {
      writer.uint32(8).uint64(message.epoch);
    }
    if (message.nodeID !== "") {
      writer.uint32(18).string(message.nodeID);
    }
    Object.entries(message.managerScoreMap).forEach(([key, value]) => {
      Workreport_ManagerScoreMapEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Workreport {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWorkreport();
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
          if (tag !== 26) {
            break;
          }

          const entry3 = Workreport_ManagerScoreMapEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.managerScoreMap[entry3.key] = entry3.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Workreport {
    return {
      epoch: isSet(object.epoch) ? Number(object.epoch) : 0,
      nodeID: isSet(object.nodeID) ? String(object.nodeID) : "",
      managerScoreMap: isObject(object.managerScoreMap)
        ? Object.entries(object.managerScoreMap).reduce<{ [key: string]: NodeScoreDB }>((acc, [key, value]) => {
          acc[key] = NodeScoreDB.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: Workreport): unknown {
    const obj: any = {};
    if (message.epoch !== 0) {
      obj.epoch = Math.round(message.epoch);
    }
    if (message.nodeID !== "") {
      obj.nodeID = message.nodeID;
    }
    if (message.managerScoreMap) {
      const entries = Object.entries(message.managerScoreMap);
      if (entries.length > 0) {
        obj.managerScoreMap = {};
        entries.forEach(([k, v]) => {
          obj.managerScoreMap[k] = NodeScoreDB.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Workreport>, I>>(base?: I): Workreport {
    return Workreport.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Workreport>, I>>(object: I): Workreport {
    const message = createBaseWorkreport();
    message.epoch = object.epoch ?? 0;
    message.nodeID = object.nodeID ?? "";
    message.managerScoreMap = Object.entries(object.managerScoreMap ?? {}).reduce<{ [key: string]: NodeScoreDB }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = NodeScoreDB.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseWorkreport_ManagerScoreMapEntry(): Workreport_ManagerScoreMapEntry {
  return { key: "", value: undefined };
}

export const Workreport_ManagerScoreMapEntry = {
  encode(message: Workreport_ManagerScoreMapEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      NodeScoreDB.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Workreport_ManagerScoreMapEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWorkreport_ManagerScoreMapEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = NodeScoreDB.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Workreport_ManagerScoreMapEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? NodeScoreDB.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: Workreport_ManagerScoreMapEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = NodeScoreDB.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Workreport_ManagerScoreMapEntry>, I>>(base?: I): Workreport_ManagerScoreMapEntry {
    return Workreport_ManagerScoreMapEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Workreport_ManagerScoreMapEntry>, I>>(
    object: I,
  ): Workreport_ManagerScoreMapEntry {
    const message = createBaseWorkreport_ManagerScoreMapEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? NodeScoreDB.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseEpochProcessData(): EpochProcessData {
  return {
    epoch: 0,
    totalNodesCount: 0,
    processedNodesCount: 0,
    startAt: 0,
    updateAt: 0,
    status: "",
    pagination: undefined,
  };
}

export const EpochProcessData = {
  encode(message: EpochProcessData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.epoch !== 0) {
      writer.uint32(8).uint64(message.epoch);
    }
    if (message.totalNodesCount !== 0) {
      writer.uint32(16).uint64(message.totalNodesCount);
    }
    if (message.processedNodesCount !== 0) {
      writer.uint32(24).uint64(message.processedNodesCount);
    }
    if (message.startAt !== 0) {
      writer.uint32(32).uint64(message.startAt);
    }
    if (message.updateAt !== 0) {
      writer.uint32(40).uint64(message.updateAt);
    }
    if (message.status !== "") {
      writer.uint32(50).string(message.status);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EpochProcessData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEpochProcessData();
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
          if (tag !== 16) {
            break;
          }

          message.totalNodesCount = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.processedNodesCount = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.startAt = longToNumber(reader.uint64() as Long);
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

          message.status = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EpochProcessData {
    return {
      epoch: isSet(object.epoch) ? Number(object.epoch) : 0,
      totalNodesCount: isSet(object.totalNodesCount) ? Number(object.totalNodesCount) : 0,
      processedNodesCount: isSet(object.processedNodesCount) ? Number(object.processedNodesCount) : 0,
      startAt: isSet(object.startAt) ? Number(object.startAt) : 0,
      updateAt: isSet(object.updateAt) ? Number(object.updateAt) : 0,
      status: isSet(object.status) ? String(object.status) : "",
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: EpochProcessData): unknown {
    const obj: any = {};
    if (message.epoch !== 0) {
      obj.epoch = Math.round(message.epoch);
    }
    if (message.totalNodesCount !== 0) {
      obj.totalNodesCount = Math.round(message.totalNodesCount);
    }
    if (message.processedNodesCount !== 0) {
      obj.processedNodesCount = Math.round(message.processedNodesCount);
    }
    if (message.startAt !== 0) {
      obj.startAt = Math.round(message.startAt);
    }
    if (message.updateAt !== 0) {
      obj.updateAt = Math.round(message.updateAt);
    }
    if (message.status !== "") {
      obj.status = message.status;
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EpochProcessData>, I>>(base?: I): EpochProcessData {
    return EpochProcessData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EpochProcessData>, I>>(object: I): EpochProcessData {
    const message = createBaseEpochProcessData();
    message.epoch = object.epoch ?? 0;
    message.totalNodesCount = object.totalNodesCount ?? 0;
    message.processedNodesCount = object.processedNodesCount ?? 0;
    message.startAt = object.startAt ?? 0;
    message.updateAt = object.updateAt ?? 0;
    message.status = object.status ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
