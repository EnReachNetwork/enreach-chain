/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageResponse } from "../../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "enreach.workload";

export interface ReputationPointChangeRawData {
  nodeID: string;
  deltaPoint: number;
}

export interface ReputationPointChangeRawDataDB {
  deltaPoint: number;
  createAt: number;
  updateAt: number;
}

export interface ReputationPointChangeRawDataMapDB {
  /** manager_account => reputation point request */
  data: { [key: string]: ReputationPointChangeRawDataDB };
}

export interface ReputationPointChangeRawDataMapDB_DataEntry {
  key: string;
  value: ReputationPointChangeRawDataDB | undefined;
}

export interface ReputationPointChangeData {
  era: number;
  nodeID: string;
  data: { [key: string]: ReputationPointChangeRawDataDB };
}

export interface ReputationPointChangeData_DataEntry {
  key: string;
  value: ReputationPointChangeRawDataDB | undefined;
}

export interface ReputationDeltaPoint {
  era: number;
  nodeID: string;
  deltaPoint: number;
  createAt: number;
}

export interface ReputationPoint {
  nodeID: string;
  point: number;
  createAt: number;
  updateAt: number;
}

export interface EraProcessData {
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

function createBaseReputationPointChangeRawData(): ReputationPointChangeRawData {
  return { nodeID: "", deltaPoint: 0 };
}

export const ReputationPointChangeRawData = {
  encode(message: ReputationPointChangeRawData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nodeID !== "") {
      writer.uint32(10).string(message.nodeID);
    }
    if (message.deltaPoint !== 0) {
      writer.uint32(16).int64(message.deltaPoint);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReputationPointChangeRawData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReputationPointChangeRawData();
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

          message.deltaPoint = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ReputationPointChangeRawData {
    return {
      nodeID: isSet(object.nodeID) ? String(object.nodeID) : "",
      deltaPoint: isSet(object.deltaPoint) ? Number(object.deltaPoint) : 0,
    };
  },

  toJSON(message: ReputationPointChangeRawData): unknown {
    const obj: any = {};
    if (message.nodeID !== "") {
      obj.nodeID = message.nodeID;
    }
    if (message.deltaPoint !== 0) {
      obj.deltaPoint = Math.round(message.deltaPoint);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ReputationPointChangeRawData>, I>>(base?: I): ReputationPointChangeRawData {
    return ReputationPointChangeRawData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ReputationPointChangeRawData>, I>>(object: I): ReputationPointChangeRawData {
    const message = createBaseReputationPointChangeRawData();
    message.nodeID = object.nodeID ?? "";
    message.deltaPoint = object.deltaPoint ?? 0;
    return message;
  },
};

function createBaseReputationPointChangeRawDataDB(): ReputationPointChangeRawDataDB {
  return { deltaPoint: 0, createAt: 0, updateAt: 0 };
}

export const ReputationPointChangeRawDataDB = {
  encode(message: ReputationPointChangeRawDataDB, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deltaPoint !== 0) {
      writer.uint32(8).int64(message.deltaPoint);
    }
    if (message.createAt !== 0) {
      writer.uint32(16).uint64(message.createAt);
    }
    if (message.updateAt !== 0) {
      writer.uint32(24).uint64(message.updateAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReputationPointChangeRawDataDB {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReputationPointChangeRawDataDB();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.deltaPoint = longToNumber(reader.int64() as Long);
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

  fromJSON(object: any): ReputationPointChangeRawDataDB {
    return {
      deltaPoint: isSet(object.deltaPoint) ? Number(object.deltaPoint) : 0,
      createAt: isSet(object.createAt) ? Number(object.createAt) : 0,
      updateAt: isSet(object.updateAt) ? Number(object.updateAt) : 0,
    };
  },

  toJSON(message: ReputationPointChangeRawDataDB): unknown {
    const obj: any = {};
    if (message.deltaPoint !== 0) {
      obj.deltaPoint = Math.round(message.deltaPoint);
    }
    if (message.createAt !== 0) {
      obj.createAt = Math.round(message.createAt);
    }
    if (message.updateAt !== 0) {
      obj.updateAt = Math.round(message.updateAt);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ReputationPointChangeRawDataDB>, I>>(base?: I): ReputationPointChangeRawDataDB {
    return ReputationPointChangeRawDataDB.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ReputationPointChangeRawDataDB>, I>>(
    object: I,
  ): ReputationPointChangeRawDataDB {
    const message = createBaseReputationPointChangeRawDataDB();
    message.deltaPoint = object.deltaPoint ?? 0;
    message.createAt = object.createAt ?? 0;
    message.updateAt = object.updateAt ?? 0;
    return message;
  },
};

function createBaseReputationPointChangeRawDataMapDB(): ReputationPointChangeRawDataMapDB {
  return { data: {} };
}

export const ReputationPointChangeRawDataMapDB = {
  encode(message: ReputationPointChangeRawDataMapDB, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.data).forEach(([key, value]) => {
      ReputationPointChangeRawDataMapDB_DataEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReputationPointChangeRawDataMapDB {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReputationPointChangeRawDataMapDB();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = ReputationPointChangeRawDataMapDB_DataEntry.decode(reader, reader.uint32());
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

  fromJSON(object: any): ReputationPointChangeRawDataMapDB {
    return {
      data: isObject(object.data)
        ? Object.entries(object.data).reduce<{ [key: string]: ReputationPointChangeRawDataDB }>((acc, [key, value]) => {
          acc[key] = ReputationPointChangeRawDataDB.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: ReputationPointChangeRawDataMapDB): unknown {
    const obj: any = {};
    if (message.data) {
      const entries = Object.entries(message.data);
      if (entries.length > 0) {
        obj.data = {};
        entries.forEach(([k, v]) => {
          obj.data[k] = ReputationPointChangeRawDataDB.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ReputationPointChangeRawDataMapDB>, I>>(
    base?: I,
  ): ReputationPointChangeRawDataMapDB {
    return ReputationPointChangeRawDataMapDB.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ReputationPointChangeRawDataMapDB>, I>>(
    object: I,
  ): ReputationPointChangeRawDataMapDB {
    const message = createBaseReputationPointChangeRawDataMapDB();
    message.data = Object.entries(object.data ?? {}).reduce<{ [key: string]: ReputationPointChangeRawDataDB }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = ReputationPointChangeRawDataDB.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseReputationPointChangeRawDataMapDB_DataEntry(): ReputationPointChangeRawDataMapDB_DataEntry {
  return { key: "", value: undefined };
}

export const ReputationPointChangeRawDataMapDB_DataEntry = {
  encode(message: ReputationPointChangeRawDataMapDB_DataEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      ReputationPointChangeRawDataDB.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReputationPointChangeRawDataMapDB_DataEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReputationPointChangeRawDataMapDB_DataEntry();
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

          message.value = ReputationPointChangeRawDataDB.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ReputationPointChangeRawDataMapDB_DataEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? ReputationPointChangeRawDataDB.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: ReputationPointChangeRawDataMapDB_DataEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = ReputationPointChangeRawDataDB.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ReputationPointChangeRawDataMapDB_DataEntry>, I>>(
    base?: I,
  ): ReputationPointChangeRawDataMapDB_DataEntry {
    return ReputationPointChangeRawDataMapDB_DataEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ReputationPointChangeRawDataMapDB_DataEntry>, I>>(
    object: I,
  ): ReputationPointChangeRawDataMapDB_DataEntry {
    const message = createBaseReputationPointChangeRawDataMapDB_DataEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? ReputationPointChangeRawDataDB.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseReputationPointChangeData(): ReputationPointChangeData {
  return { era: 0, nodeID: "", data: {} };
}

export const ReputationPointChangeData = {
  encode(message: ReputationPointChangeData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.era !== 0) {
      writer.uint32(8).uint64(message.era);
    }
    if (message.nodeID !== "") {
      writer.uint32(18).string(message.nodeID);
    }
    Object.entries(message.data).forEach(([key, value]) => {
      ReputationPointChangeData_DataEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReputationPointChangeData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReputationPointChangeData();
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

          const entry3 = ReputationPointChangeData_DataEntry.decode(reader, reader.uint32());
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

  fromJSON(object: any): ReputationPointChangeData {
    return {
      era: isSet(object.era) ? Number(object.era) : 0,
      nodeID: isSet(object.nodeID) ? String(object.nodeID) : "",
      data: isObject(object.data)
        ? Object.entries(object.data).reduce<{ [key: string]: ReputationPointChangeRawDataDB }>((acc, [key, value]) => {
          acc[key] = ReputationPointChangeRawDataDB.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: ReputationPointChangeData): unknown {
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
          obj.data[k] = ReputationPointChangeRawDataDB.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ReputationPointChangeData>, I>>(base?: I): ReputationPointChangeData {
    return ReputationPointChangeData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ReputationPointChangeData>, I>>(object: I): ReputationPointChangeData {
    const message = createBaseReputationPointChangeData();
    message.era = object.era ?? 0;
    message.nodeID = object.nodeID ?? "";
    message.data = Object.entries(object.data ?? {}).reduce<{ [key: string]: ReputationPointChangeRawDataDB }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = ReputationPointChangeRawDataDB.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseReputationPointChangeData_DataEntry(): ReputationPointChangeData_DataEntry {
  return { key: "", value: undefined };
}

export const ReputationPointChangeData_DataEntry = {
  encode(message: ReputationPointChangeData_DataEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      ReputationPointChangeRawDataDB.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReputationPointChangeData_DataEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReputationPointChangeData_DataEntry();
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

          message.value = ReputationPointChangeRawDataDB.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ReputationPointChangeData_DataEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? ReputationPointChangeRawDataDB.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: ReputationPointChangeData_DataEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = ReputationPointChangeRawDataDB.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ReputationPointChangeData_DataEntry>, I>>(
    base?: I,
  ): ReputationPointChangeData_DataEntry {
    return ReputationPointChangeData_DataEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ReputationPointChangeData_DataEntry>, I>>(
    object: I,
  ): ReputationPointChangeData_DataEntry {
    const message = createBaseReputationPointChangeData_DataEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? ReputationPointChangeRawDataDB.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseReputationDeltaPoint(): ReputationDeltaPoint {
  return { era: 0, nodeID: "", deltaPoint: 0, createAt: 0 };
}

export const ReputationDeltaPoint = {
  encode(message: ReputationDeltaPoint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.era !== 0) {
      writer.uint32(8).uint64(message.era);
    }
    if (message.nodeID !== "") {
      writer.uint32(18).string(message.nodeID);
    }
    if (message.deltaPoint !== 0) {
      writer.uint32(24).int64(message.deltaPoint);
    }
    if (message.createAt !== 0) {
      writer.uint32(32).uint64(message.createAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReputationDeltaPoint {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReputationDeltaPoint();
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
          if (tag !== 24) {
            break;
          }

          message.deltaPoint = longToNumber(reader.int64() as Long);
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

  fromJSON(object: any): ReputationDeltaPoint {
    return {
      era: isSet(object.era) ? Number(object.era) : 0,
      nodeID: isSet(object.nodeID) ? String(object.nodeID) : "",
      deltaPoint: isSet(object.deltaPoint) ? Number(object.deltaPoint) : 0,
      createAt: isSet(object.createAt) ? Number(object.createAt) : 0,
    };
  },

  toJSON(message: ReputationDeltaPoint): unknown {
    const obj: any = {};
    if (message.era !== 0) {
      obj.era = Math.round(message.era);
    }
    if (message.nodeID !== "") {
      obj.nodeID = message.nodeID;
    }
    if (message.deltaPoint !== 0) {
      obj.deltaPoint = Math.round(message.deltaPoint);
    }
    if (message.createAt !== 0) {
      obj.createAt = Math.round(message.createAt);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ReputationDeltaPoint>, I>>(base?: I): ReputationDeltaPoint {
    return ReputationDeltaPoint.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ReputationDeltaPoint>, I>>(object: I): ReputationDeltaPoint {
    const message = createBaseReputationDeltaPoint();
    message.era = object.era ?? 0;
    message.nodeID = object.nodeID ?? "";
    message.deltaPoint = object.deltaPoint ?? 0;
    message.createAt = object.createAt ?? 0;
    return message;
  },
};

function createBaseReputationPoint(): ReputationPoint {
  return { nodeID: "", point: 0, createAt: 0, updateAt: 0 };
}

export const ReputationPoint = {
  encode(message: ReputationPoint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nodeID !== "") {
      writer.uint32(10).string(message.nodeID);
    }
    if (message.point !== 0) {
      writer.uint32(16).int64(message.point);
    }
    if (message.createAt !== 0) {
      writer.uint32(24).uint64(message.createAt);
    }
    if (message.updateAt !== 0) {
      writer.uint32(32).uint64(message.updateAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReputationPoint {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReputationPoint();
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

          message.point = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.createAt = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
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

  fromJSON(object: any): ReputationPoint {
    return {
      nodeID: isSet(object.nodeID) ? String(object.nodeID) : "",
      point: isSet(object.point) ? Number(object.point) : 0,
      createAt: isSet(object.createAt) ? Number(object.createAt) : 0,
      updateAt: isSet(object.updateAt) ? Number(object.updateAt) : 0,
    };
  },

  toJSON(message: ReputationPoint): unknown {
    const obj: any = {};
    if (message.nodeID !== "") {
      obj.nodeID = message.nodeID;
    }
    if (message.point !== 0) {
      obj.point = Math.round(message.point);
    }
    if (message.createAt !== 0) {
      obj.createAt = Math.round(message.createAt);
    }
    if (message.updateAt !== 0) {
      obj.updateAt = Math.round(message.updateAt);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ReputationPoint>, I>>(base?: I): ReputationPoint {
    return ReputationPoint.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ReputationPoint>, I>>(object: I): ReputationPoint {
    const message = createBaseReputationPoint();
    message.nodeID = object.nodeID ?? "";
    message.point = object.point ?? 0;
    message.createAt = object.createAt ?? 0;
    message.updateAt = object.updateAt ?? 0;
    return message;
  },
};

function createBaseEraProcessData(): EraProcessData {
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

export const EraProcessData = {
  encode(message: EraProcessData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): EraProcessData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEraProcessData();
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

  fromJSON(object: any): EraProcessData {
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

  toJSON(message: EraProcessData): unknown {
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

  create<I extends Exact<DeepPartial<EraProcessData>, I>>(base?: I): EraProcessData {
    return EraProcessData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EraProcessData>, I>>(object: I): EraProcessData {
    const message = createBaseEraProcessData();
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
