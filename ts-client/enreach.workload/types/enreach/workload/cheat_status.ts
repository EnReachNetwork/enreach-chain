/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageResponse } from "../../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "enreach.workload";

/** CR -> Change Request */
export interface CheatStatusCR {
  nodeID: string;
  cheatStatus: string;
}

export interface CheatStatusCRDB {
  cheatStatus: string;
  createAt: number;
  updateAt: number;
}

export interface CheatStatusCRMapDB {
  /** manager_account => cheating status */
  data: { [key: string]: CheatStatusCRDB };
}

export interface CheatStatusCRMapDB_DataEntry {
  key: string;
  value: CheatStatusCRDB | undefined;
}

export interface CheatStatusCRData {
  era: number;
  nodeID: string;
  data: { [key: string]: CheatStatusCRDB };
}

export interface CheatStatusCRData_DataEntry {
  key: string;
  value: CheatStatusCRDB | undefined;
}

export interface EraCheatStatusProcessData {
  era: number;
  /** total nodes count need to be processed */
  totalNodesCount: number;
  /** accumulated processed nodes count */
  processedNodesCount: number;
  startAt: number;
  updateAt: number;
  status: string;
  pagination: PageResponse | undefined;
}

function createBaseCheatStatusCR(): CheatStatusCR {
  return { nodeID: "", cheatStatus: "" };
}

export const CheatStatusCR = {
  encode(message: CheatStatusCR, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nodeID !== "") {
      writer.uint32(10).string(message.nodeID);
    }
    if (message.cheatStatus !== "") {
      writer.uint32(18).string(message.cheatStatus);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CheatStatusCR {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheatStatusCR();
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

          message.cheatStatus = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CheatStatusCR {
    return {
      nodeID: isSet(object.nodeID) ? String(object.nodeID) : "",
      cheatStatus: isSet(object.cheatStatus) ? String(object.cheatStatus) : "",
    };
  },

  toJSON(message: CheatStatusCR): unknown {
    const obj: any = {};
    if (message.nodeID !== "") {
      obj.nodeID = message.nodeID;
    }
    if (message.cheatStatus !== "") {
      obj.cheatStatus = message.cheatStatus;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CheatStatusCR>, I>>(base?: I): CheatStatusCR {
    return CheatStatusCR.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CheatStatusCR>, I>>(object: I): CheatStatusCR {
    const message = createBaseCheatStatusCR();
    message.nodeID = object.nodeID ?? "";
    message.cheatStatus = object.cheatStatus ?? "";
    return message;
  },
};

function createBaseCheatStatusCRDB(): CheatStatusCRDB {
  return { cheatStatus: "", createAt: 0, updateAt: 0 };
}

export const CheatStatusCRDB = {
  encode(message: CheatStatusCRDB, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cheatStatus !== "") {
      writer.uint32(10).string(message.cheatStatus);
    }
    if (message.createAt !== 0) {
      writer.uint32(16).uint64(message.createAt);
    }
    if (message.updateAt !== 0) {
      writer.uint32(24).uint64(message.updateAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CheatStatusCRDB {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheatStatusCRDB();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cheatStatus = reader.string();
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

  fromJSON(object: any): CheatStatusCRDB {
    return {
      cheatStatus: isSet(object.cheatStatus) ? String(object.cheatStatus) : "",
      createAt: isSet(object.createAt) ? Number(object.createAt) : 0,
      updateAt: isSet(object.updateAt) ? Number(object.updateAt) : 0,
    };
  },

  toJSON(message: CheatStatusCRDB): unknown {
    const obj: any = {};
    if (message.cheatStatus !== "") {
      obj.cheatStatus = message.cheatStatus;
    }
    if (message.createAt !== 0) {
      obj.createAt = Math.round(message.createAt);
    }
    if (message.updateAt !== 0) {
      obj.updateAt = Math.round(message.updateAt);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CheatStatusCRDB>, I>>(base?: I): CheatStatusCRDB {
    return CheatStatusCRDB.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CheatStatusCRDB>, I>>(object: I): CheatStatusCRDB {
    const message = createBaseCheatStatusCRDB();
    message.cheatStatus = object.cheatStatus ?? "";
    message.createAt = object.createAt ?? 0;
    message.updateAt = object.updateAt ?? 0;
    return message;
  },
};

function createBaseCheatStatusCRMapDB(): CheatStatusCRMapDB {
  return { data: {} };
}

export const CheatStatusCRMapDB = {
  encode(message: CheatStatusCRMapDB, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.data).forEach(([key, value]) => {
      CheatStatusCRMapDB_DataEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CheatStatusCRMapDB {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheatStatusCRMapDB();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = CheatStatusCRMapDB_DataEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.data[entry1.key] = entry1.value;
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

  fromJSON(object: any): CheatStatusCRMapDB {
    return {
      data: isObject(object.data)
        ? Object.entries(object.data).reduce<{ [key: string]: CheatStatusCRDB }>((acc, [key, value]) => {
          acc[key] = CheatStatusCRDB.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: CheatStatusCRMapDB): unknown {
    const obj: any = {};
    if (message.data) {
      const entries = Object.entries(message.data);
      if (entries.length > 0) {
        obj.data = {};
        entries.forEach(([k, v]) => {
          obj.data[k] = CheatStatusCRDB.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CheatStatusCRMapDB>, I>>(base?: I): CheatStatusCRMapDB {
    return CheatStatusCRMapDB.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CheatStatusCRMapDB>, I>>(object: I): CheatStatusCRMapDB {
    const message = createBaseCheatStatusCRMapDB();
    message.data = Object.entries(object.data ?? {}).reduce<{ [key: string]: CheatStatusCRDB }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = CheatStatusCRDB.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseCheatStatusCRMapDB_DataEntry(): CheatStatusCRMapDB_DataEntry {
  return { key: "", value: undefined };
}

export const CheatStatusCRMapDB_DataEntry = {
  encode(message: CheatStatusCRMapDB_DataEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      CheatStatusCRDB.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CheatStatusCRMapDB_DataEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheatStatusCRMapDB_DataEntry();
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

          message.value = CheatStatusCRDB.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CheatStatusCRMapDB_DataEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? CheatStatusCRDB.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: CheatStatusCRMapDB_DataEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = CheatStatusCRDB.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CheatStatusCRMapDB_DataEntry>, I>>(base?: I): CheatStatusCRMapDB_DataEntry {
    return CheatStatusCRMapDB_DataEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CheatStatusCRMapDB_DataEntry>, I>>(object: I): CheatStatusCRMapDB_DataEntry {
    const message = createBaseCheatStatusCRMapDB_DataEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? CheatStatusCRDB.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseCheatStatusCRData(): CheatStatusCRData {
  return { era: 0, nodeID: "", data: {} };
}

export const CheatStatusCRData = {
  encode(message: CheatStatusCRData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.era !== 0) {
      writer.uint32(8).uint64(message.era);
    }
    if (message.nodeID !== "") {
      writer.uint32(18).string(message.nodeID);
    }
    Object.entries(message.data).forEach(([key, value]) => {
      CheatStatusCRData_DataEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CheatStatusCRData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheatStatusCRData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.era = longToNumber(reader.uint64() as Long);
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

          const entry3 = CheatStatusCRData_DataEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.data[entry3.key] = entry3.value;
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

  fromJSON(object: any): CheatStatusCRData {
    return {
      era: isSet(object.era) ? Number(object.era) : 0,
      nodeID: isSet(object.nodeID) ? String(object.nodeID) : "",
      data: isObject(object.data)
        ? Object.entries(object.data).reduce<{ [key: string]: CheatStatusCRDB }>((acc, [key, value]) => {
          acc[key] = CheatStatusCRDB.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: CheatStatusCRData): unknown {
    const obj: any = {};
    if (message.era !== 0) {
      obj.era = Math.round(message.era);
    }
    if (message.nodeID !== "") {
      obj.nodeID = message.nodeID;
    }
    if (message.data) {
      const entries = Object.entries(message.data);
      if (entries.length > 0) {
        obj.data = {};
        entries.forEach(([k, v]) => {
          obj.data[k] = CheatStatusCRDB.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CheatStatusCRData>, I>>(base?: I): CheatStatusCRData {
    return CheatStatusCRData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CheatStatusCRData>, I>>(object: I): CheatStatusCRData {
    const message = createBaseCheatStatusCRData();
    message.era = object.era ?? 0;
    message.nodeID = object.nodeID ?? "";
    message.data = Object.entries(object.data ?? {}).reduce<{ [key: string]: CheatStatusCRDB }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = CheatStatusCRDB.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseCheatStatusCRData_DataEntry(): CheatStatusCRData_DataEntry {
  return { key: "", value: undefined };
}

export const CheatStatusCRData_DataEntry = {
  encode(message: CheatStatusCRData_DataEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      CheatStatusCRDB.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CheatStatusCRData_DataEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheatStatusCRData_DataEntry();
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

          message.value = CheatStatusCRDB.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CheatStatusCRData_DataEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? CheatStatusCRDB.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: CheatStatusCRData_DataEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = CheatStatusCRDB.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CheatStatusCRData_DataEntry>, I>>(base?: I): CheatStatusCRData_DataEntry {
    return CheatStatusCRData_DataEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CheatStatusCRData_DataEntry>, I>>(object: I): CheatStatusCRData_DataEntry {
    const message = createBaseCheatStatusCRData_DataEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? CheatStatusCRDB.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseEraCheatStatusProcessData(): EraCheatStatusProcessData {
  return {
    era: 0,
    totalNodesCount: 0,
    processedNodesCount: 0,
    startAt: 0,
    updateAt: 0,
    status: "",
    pagination: undefined,
  };
}

export const EraCheatStatusProcessData = {
  encode(message: EraCheatStatusProcessData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.era !== 0) {
      writer.uint32(8).uint64(message.era);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): EraCheatStatusProcessData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEraCheatStatusProcessData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.era = longToNumber(reader.uint64() as Long);
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

  fromJSON(object: any): EraCheatStatusProcessData {
    return {
      era: isSet(object.era) ? Number(object.era) : 0,
      totalNodesCount: isSet(object.totalNodesCount) ? Number(object.totalNodesCount) : 0,
      processedNodesCount: isSet(object.processedNodesCount) ? Number(object.processedNodesCount) : 0,
      startAt: isSet(object.startAt) ? Number(object.startAt) : 0,
      updateAt: isSet(object.updateAt) ? Number(object.updateAt) : 0,
      status: isSet(object.status) ? String(object.status) : "",
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: EraCheatStatusProcessData): unknown {
    const obj: any = {};
    if (message.era !== 0) {
      obj.era = Math.round(message.era);
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

  create<I extends Exact<DeepPartial<EraCheatStatusProcessData>, I>>(base?: I): EraCheatStatusProcessData {
    return EraCheatStatusProcessData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EraCheatStatusProcessData>, I>>(object: I): EraCheatStatusProcessData {
    const message = createBaseEraCheatStatusProcessData();
    message.era = object.era ?? 0;
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
