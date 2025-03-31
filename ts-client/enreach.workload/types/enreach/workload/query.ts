/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { Superior } from "./superior";
import { ManagerWorkload, NodeWorkload } from "./workload";
import { EpochProcessData, Workreport } from "./workreport";

export const protobufPackage = "enreach.workload";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetEpochLengthRequest {
}

export interface QueryGetEpochLengthResponse {
  epochLength: number;
}

export interface QueryGetCurrentEpochRequest {
}

export interface QueryGetCurrentEpochResponse {
  currentEpoch: number;
}

export interface QueryGetNodeWorkloadRequest {
  epoch: number;
  nodeID: string;
}

export interface QueryGetNodeWorkloadResponse {
  NodeWorkload: NodeWorkload | undefined;
}

export interface QueryGetAllNodeWorkloadByEpochRequest {
  epoch: number;
  pagination: PageRequest | undefined;
}

export interface QueryGetAllNodeWorkloadByEpochResponse {
  NodeWorkloads: NodeWorkload[];
  pagination: PageResponse | undefined;
}

export interface QueryGetManagerWorkloadRequest {
  epoch: number;
  managerAccount: string;
}

export interface QueryGetManagerWorkloadResponse {
  ManagerWorkload: ManagerWorkload | undefined;
}

export interface QueryGetAllManagerWorkloadByEpochRequest {
  epoch: number;
  pagination: PageRequest | undefined;
}

export interface QueryGetAllManagerWorkloadByEpochResponse {
  ManagerWorkloads: ManagerWorkload[];
  pagination: PageResponse | undefined;
}

export interface QueryGetWorkreportRequest {
  epoch: number;
  nodeID: string;
}

export interface QueryGetWorkreportResponse {
  Workreport: Workreport | undefined;
}

export interface QueryGetAllWorkreportByEpochRequest {
  epoch: number;
  pagination: PageRequest | undefined;
}

export interface QueryGetAllWorkreportByEpochResponse {
  Workreports: Workreport[];
  pagination: PageResponse | undefined;
}

export interface QueryGetWorkreportProcessBatchSizeRequest {
}

export interface QueryGetWorkreportProcessBatchSizeResponse {
  batchSize: number;
}

export interface QueryGetHistoryEpochDataDepthRequest {
}

export interface QueryGetHistoryEpochDataDepthResponse {
  depth: number;
}

export interface QueryGetEpochProcessDataRequest {
  epoch: number;
}

export interface QueryGetEpochProcessDataResponse {
  EpochProcessData: EpochProcessData | undefined;
}

export interface QueryGetAllEpochProcessDataRequest {
  pagination: PageRequest | undefined;
}

export interface QueryGetAllEpochProcessDataResponse {
  EpochProcessDatas: EpochProcessData[];
  pagination: PageResponse | undefined;
}

export interface QueryGetSuperiorRequest {
}

export interface QueryGetSuperiorResponse {
  Superior: Superior | undefined;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(base?: I): QueryParamsRequest {
    return QueryParamsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    if (message.params !== undefined) {
      obj.params = Params.toJSON(message.params);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(base?: I): QueryParamsResponse {
    return QueryParamsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryGetEpochLengthRequest(): QueryGetEpochLengthRequest {
  return {};
}

export const QueryGetEpochLengthRequest = {
  encode(_: QueryGetEpochLengthRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetEpochLengthRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetEpochLengthRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): QueryGetEpochLengthRequest {
    return {};
  },

  toJSON(_: QueryGetEpochLengthRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetEpochLengthRequest>, I>>(base?: I): QueryGetEpochLengthRequest {
    return QueryGetEpochLengthRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetEpochLengthRequest>, I>>(_: I): QueryGetEpochLengthRequest {
    const message = createBaseQueryGetEpochLengthRequest();
    return message;
  },
};

function createBaseQueryGetEpochLengthResponse(): QueryGetEpochLengthResponse {
  return { epochLength: 0 };
}

export const QueryGetEpochLengthResponse = {
  encode(message: QueryGetEpochLengthResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.epochLength !== 0) {
      writer.uint32(8).uint64(message.epochLength);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetEpochLengthResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetEpochLengthResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.epochLength = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetEpochLengthResponse {
    return { epochLength: isSet(object.epochLength) ? Number(object.epochLength) : 0 };
  },

  toJSON(message: QueryGetEpochLengthResponse): unknown {
    const obj: any = {};
    if (message.epochLength !== 0) {
      obj.epochLength = Math.round(message.epochLength);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetEpochLengthResponse>, I>>(base?: I): QueryGetEpochLengthResponse {
    return QueryGetEpochLengthResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetEpochLengthResponse>, I>>(object: I): QueryGetEpochLengthResponse {
    const message = createBaseQueryGetEpochLengthResponse();
    message.epochLength = object.epochLength ?? 0;
    return message;
  },
};

function createBaseQueryGetCurrentEpochRequest(): QueryGetCurrentEpochRequest {
  return {};
}

export const QueryGetCurrentEpochRequest = {
  encode(_: QueryGetCurrentEpochRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetCurrentEpochRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetCurrentEpochRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): QueryGetCurrentEpochRequest {
    return {};
  },

  toJSON(_: QueryGetCurrentEpochRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetCurrentEpochRequest>, I>>(base?: I): QueryGetCurrentEpochRequest {
    return QueryGetCurrentEpochRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetCurrentEpochRequest>, I>>(_: I): QueryGetCurrentEpochRequest {
    const message = createBaseQueryGetCurrentEpochRequest();
    return message;
  },
};

function createBaseQueryGetCurrentEpochResponse(): QueryGetCurrentEpochResponse {
  return { currentEpoch: 0 };
}

export const QueryGetCurrentEpochResponse = {
  encode(message: QueryGetCurrentEpochResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.currentEpoch !== 0) {
      writer.uint32(8).uint64(message.currentEpoch);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetCurrentEpochResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetCurrentEpochResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.currentEpoch = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetCurrentEpochResponse {
    return { currentEpoch: isSet(object.currentEpoch) ? Number(object.currentEpoch) : 0 };
  },

  toJSON(message: QueryGetCurrentEpochResponse): unknown {
    const obj: any = {};
    if (message.currentEpoch !== 0) {
      obj.currentEpoch = Math.round(message.currentEpoch);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetCurrentEpochResponse>, I>>(base?: I): QueryGetCurrentEpochResponse {
    return QueryGetCurrentEpochResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetCurrentEpochResponse>, I>>(object: I): QueryGetCurrentEpochResponse {
    const message = createBaseQueryGetCurrentEpochResponse();
    message.currentEpoch = object.currentEpoch ?? 0;
    return message;
  },
};

function createBaseQueryGetNodeWorkloadRequest(): QueryGetNodeWorkloadRequest {
  return { epoch: 0, nodeID: "" };
}

export const QueryGetNodeWorkloadRequest = {
  encode(message: QueryGetNodeWorkloadRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.epoch !== 0) {
      writer.uint32(8).uint64(message.epoch);
    }
    if (message.nodeID !== "") {
      writer.uint32(18).string(message.nodeID);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetNodeWorkloadRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetNodeWorkloadRequest();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetNodeWorkloadRequest {
    return {
      epoch: isSet(object.epoch) ? Number(object.epoch) : 0,
      nodeID: isSet(object.nodeID) ? String(object.nodeID) : "",
    };
  },

  toJSON(message: QueryGetNodeWorkloadRequest): unknown {
    const obj: any = {};
    if (message.epoch !== 0) {
      obj.epoch = Math.round(message.epoch);
    }
    if (message.nodeID !== "") {
      obj.nodeID = message.nodeID;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetNodeWorkloadRequest>, I>>(base?: I): QueryGetNodeWorkloadRequest {
    return QueryGetNodeWorkloadRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetNodeWorkloadRequest>, I>>(object: I): QueryGetNodeWorkloadRequest {
    const message = createBaseQueryGetNodeWorkloadRequest();
    message.epoch = object.epoch ?? 0;
    message.nodeID = object.nodeID ?? "";
    return message;
  },
};

function createBaseQueryGetNodeWorkloadResponse(): QueryGetNodeWorkloadResponse {
  return { NodeWorkload: undefined };
}

export const QueryGetNodeWorkloadResponse = {
  encode(message: QueryGetNodeWorkloadResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.NodeWorkload !== undefined) {
      NodeWorkload.encode(message.NodeWorkload, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetNodeWorkloadResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetNodeWorkloadResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.NodeWorkload = NodeWorkload.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetNodeWorkloadResponse {
    return { NodeWorkload: isSet(object.NodeWorkload) ? NodeWorkload.fromJSON(object.NodeWorkload) : undefined };
  },

  toJSON(message: QueryGetNodeWorkloadResponse): unknown {
    const obj: any = {};
    if (message.NodeWorkload !== undefined) {
      obj.NodeWorkload = NodeWorkload.toJSON(message.NodeWorkload);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetNodeWorkloadResponse>, I>>(base?: I): QueryGetNodeWorkloadResponse {
    return QueryGetNodeWorkloadResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetNodeWorkloadResponse>, I>>(object: I): QueryGetNodeWorkloadResponse {
    const message = createBaseQueryGetNodeWorkloadResponse();
    message.NodeWorkload = (object.NodeWorkload !== undefined && object.NodeWorkload !== null)
      ? NodeWorkload.fromPartial(object.NodeWorkload)
      : undefined;
    return message;
  },
};

function createBaseQueryGetAllNodeWorkloadByEpochRequest(): QueryGetAllNodeWorkloadByEpochRequest {
  return { epoch: 0, pagination: undefined };
}

export const QueryGetAllNodeWorkloadByEpochRequest = {
  encode(message: QueryGetAllNodeWorkloadByEpochRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.epoch !== 0) {
      writer.uint32(8).uint64(message.epoch);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllNodeWorkloadByEpochRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAllNodeWorkloadByEpochRequest();
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

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetAllNodeWorkloadByEpochRequest {
    return {
      epoch: isSet(object.epoch) ? Number(object.epoch) : 0,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryGetAllNodeWorkloadByEpochRequest): unknown {
    const obj: any = {};
    if (message.epoch !== 0) {
      obj.epoch = Math.round(message.epoch);
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetAllNodeWorkloadByEpochRequest>, I>>(
    base?: I,
  ): QueryGetAllNodeWorkloadByEpochRequest {
    return QueryGetAllNodeWorkloadByEpochRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetAllNodeWorkloadByEpochRequest>, I>>(
    object: I,
  ): QueryGetAllNodeWorkloadByEpochRequest {
    const message = createBaseQueryGetAllNodeWorkloadByEpochRequest();
    message.epoch = object.epoch ?? 0;
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetAllNodeWorkloadByEpochResponse(): QueryGetAllNodeWorkloadByEpochResponse {
  return { NodeWorkloads: [], pagination: undefined };
}

export const QueryGetAllNodeWorkloadByEpochResponse = {
  encode(message: QueryGetAllNodeWorkloadByEpochResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.NodeWorkloads) {
      NodeWorkload.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllNodeWorkloadByEpochResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAllNodeWorkloadByEpochResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.NodeWorkloads.push(NodeWorkload.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): QueryGetAllNodeWorkloadByEpochResponse {
    return {
      NodeWorkloads: Array.isArray(object?.NodeWorkloads)
        ? object.NodeWorkloads.map((e: any) => NodeWorkload.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryGetAllNodeWorkloadByEpochResponse): unknown {
    const obj: any = {};
    if (message.NodeWorkloads?.length) {
      obj.NodeWorkloads = message.NodeWorkloads.map((e) => NodeWorkload.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetAllNodeWorkloadByEpochResponse>, I>>(
    base?: I,
  ): QueryGetAllNodeWorkloadByEpochResponse {
    return QueryGetAllNodeWorkloadByEpochResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetAllNodeWorkloadByEpochResponse>, I>>(
    object: I,
  ): QueryGetAllNodeWorkloadByEpochResponse {
    const message = createBaseQueryGetAllNodeWorkloadByEpochResponse();
    message.NodeWorkloads = object.NodeWorkloads?.map((e) => NodeWorkload.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetManagerWorkloadRequest(): QueryGetManagerWorkloadRequest {
  return { epoch: 0, managerAccount: "" };
}

export const QueryGetManagerWorkloadRequest = {
  encode(message: QueryGetManagerWorkloadRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.epoch !== 0) {
      writer.uint32(8).uint64(message.epoch);
    }
    if (message.managerAccount !== "") {
      writer.uint32(18).string(message.managerAccount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetManagerWorkloadRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetManagerWorkloadRequest();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetManagerWorkloadRequest {
    return {
      epoch: isSet(object.epoch) ? Number(object.epoch) : 0,
      managerAccount: isSet(object.managerAccount) ? String(object.managerAccount) : "",
    };
  },

  toJSON(message: QueryGetManagerWorkloadRequest): unknown {
    const obj: any = {};
    if (message.epoch !== 0) {
      obj.epoch = Math.round(message.epoch);
    }
    if (message.managerAccount !== "") {
      obj.managerAccount = message.managerAccount;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetManagerWorkloadRequest>, I>>(base?: I): QueryGetManagerWorkloadRequest {
    return QueryGetManagerWorkloadRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetManagerWorkloadRequest>, I>>(
    object: I,
  ): QueryGetManagerWorkloadRequest {
    const message = createBaseQueryGetManagerWorkloadRequest();
    message.epoch = object.epoch ?? 0;
    message.managerAccount = object.managerAccount ?? "";
    return message;
  },
};

function createBaseQueryGetManagerWorkloadResponse(): QueryGetManagerWorkloadResponse {
  return { ManagerWorkload: undefined };
}

export const QueryGetManagerWorkloadResponse = {
  encode(message: QueryGetManagerWorkloadResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ManagerWorkload !== undefined) {
      ManagerWorkload.encode(message.ManagerWorkload, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetManagerWorkloadResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetManagerWorkloadResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ManagerWorkload = ManagerWorkload.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetManagerWorkloadResponse {
    return {
      ManagerWorkload: isSet(object.ManagerWorkload) ? ManagerWorkload.fromJSON(object.ManagerWorkload) : undefined,
    };
  },

  toJSON(message: QueryGetManagerWorkloadResponse): unknown {
    const obj: any = {};
    if (message.ManagerWorkload !== undefined) {
      obj.ManagerWorkload = ManagerWorkload.toJSON(message.ManagerWorkload);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetManagerWorkloadResponse>, I>>(base?: I): QueryGetManagerWorkloadResponse {
    return QueryGetManagerWorkloadResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetManagerWorkloadResponse>, I>>(
    object: I,
  ): QueryGetManagerWorkloadResponse {
    const message = createBaseQueryGetManagerWorkloadResponse();
    message.ManagerWorkload = (object.ManagerWorkload !== undefined && object.ManagerWorkload !== null)
      ? ManagerWorkload.fromPartial(object.ManagerWorkload)
      : undefined;
    return message;
  },
};

function createBaseQueryGetAllManagerWorkloadByEpochRequest(): QueryGetAllManagerWorkloadByEpochRequest {
  return { epoch: 0, pagination: undefined };
}

export const QueryGetAllManagerWorkloadByEpochRequest = {
  encode(message: QueryGetAllManagerWorkloadByEpochRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.epoch !== 0) {
      writer.uint32(8).uint64(message.epoch);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllManagerWorkloadByEpochRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAllManagerWorkloadByEpochRequest();
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

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetAllManagerWorkloadByEpochRequest {
    return {
      epoch: isSet(object.epoch) ? Number(object.epoch) : 0,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryGetAllManagerWorkloadByEpochRequest): unknown {
    const obj: any = {};
    if (message.epoch !== 0) {
      obj.epoch = Math.round(message.epoch);
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetAllManagerWorkloadByEpochRequest>, I>>(
    base?: I,
  ): QueryGetAllManagerWorkloadByEpochRequest {
    return QueryGetAllManagerWorkloadByEpochRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetAllManagerWorkloadByEpochRequest>, I>>(
    object: I,
  ): QueryGetAllManagerWorkloadByEpochRequest {
    const message = createBaseQueryGetAllManagerWorkloadByEpochRequest();
    message.epoch = object.epoch ?? 0;
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetAllManagerWorkloadByEpochResponse(): QueryGetAllManagerWorkloadByEpochResponse {
  return { ManagerWorkloads: [], pagination: undefined };
}

export const QueryGetAllManagerWorkloadByEpochResponse = {
  encode(message: QueryGetAllManagerWorkloadByEpochResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.ManagerWorkloads) {
      ManagerWorkload.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllManagerWorkloadByEpochResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAllManagerWorkloadByEpochResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ManagerWorkloads.push(ManagerWorkload.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): QueryGetAllManagerWorkloadByEpochResponse {
    return {
      ManagerWorkloads: Array.isArray(object?.ManagerWorkloads)
        ? object.ManagerWorkloads.map((e: any) => ManagerWorkload.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryGetAllManagerWorkloadByEpochResponse): unknown {
    const obj: any = {};
    if (message.ManagerWorkloads?.length) {
      obj.ManagerWorkloads = message.ManagerWorkloads.map((e) => ManagerWorkload.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetAllManagerWorkloadByEpochResponse>, I>>(
    base?: I,
  ): QueryGetAllManagerWorkloadByEpochResponse {
    return QueryGetAllManagerWorkloadByEpochResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetAllManagerWorkloadByEpochResponse>, I>>(
    object: I,
  ): QueryGetAllManagerWorkloadByEpochResponse {
    const message = createBaseQueryGetAllManagerWorkloadByEpochResponse();
    message.ManagerWorkloads = object.ManagerWorkloads?.map((e) => ManagerWorkload.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetWorkreportRequest(): QueryGetWorkreportRequest {
  return { epoch: 0, nodeID: "" };
}

export const QueryGetWorkreportRequest = {
  encode(message: QueryGetWorkreportRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.epoch !== 0) {
      writer.uint32(8).uint64(message.epoch);
    }
    if (message.nodeID !== "") {
      writer.uint32(18).string(message.nodeID);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetWorkreportRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetWorkreportRequest();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetWorkreportRequest {
    return {
      epoch: isSet(object.epoch) ? Number(object.epoch) : 0,
      nodeID: isSet(object.nodeID) ? String(object.nodeID) : "",
    };
  },

  toJSON(message: QueryGetWorkreportRequest): unknown {
    const obj: any = {};
    if (message.epoch !== 0) {
      obj.epoch = Math.round(message.epoch);
    }
    if (message.nodeID !== "") {
      obj.nodeID = message.nodeID;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetWorkreportRequest>, I>>(base?: I): QueryGetWorkreportRequest {
    return QueryGetWorkreportRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetWorkreportRequest>, I>>(object: I): QueryGetWorkreportRequest {
    const message = createBaseQueryGetWorkreportRequest();
    message.epoch = object.epoch ?? 0;
    message.nodeID = object.nodeID ?? "";
    return message;
  },
};

function createBaseQueryGetWorkreportResponse(): QueryGetWorkreportResponse {
  return { Workreport: undefined };
}

export const QueryGetWorkreportResponse = {
  encode(message: QueryGetWorkreportResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Workreport !== undefined) {
      Workreport.encode(message.Workreport, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetWorkreportResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetWorkreportResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.Workreport = Workreport.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetWorkreportResponse {
    return { Workreport: isSet(object.Workreport) ? Workreport.fromJSON(object.Workreport) : undefined };
  },

  toJSON(message: QueryGetWorkreportResponse): unknown {
    const obj: any = {};
    if (message.Workreport !== undefined) {
      obj.Workreport = Workreport.toJSON(message.Workreport);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetWorkreportResponse>, I>>(base?: I): QueryGetWorkreportResponse {
    return QueryGetWorkreportResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetWorkreportResponse>, I>>(object: I): QueryGetWorkreportResponse {
    const message = createBaseQueryGetWorkreportResponse();
    message.Workreport = (object.Workreport !== undefined && object.Workreport !== null)
      ? Workreport.fromPartial(object.Workreport)
      : undefined;
    return message;
  },
};

function createBaseQueryGetAllWorkreportByEpochRequest(): QueryGetAllWorkreportByEpochRequest {
  return { epoch: 0, pagination: undefined };
}

export const QueryGetAllWorkreportByEpochRequest = {
  encode(message: QueryGetAllWorkreportByEpochRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.epoch !== 0) {
      writer.uint32(8).uint64(message.epoch);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllWorkreportByEpochRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAllWorkreportByEpochRequest();
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

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetAllWorkreportByEpochRequest {
    return {
      epoch: isSet(object.epoch) ? Number(object.epoch) : 0,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryGetAllWorkreportByEpochRequest): unknown {
    const obj: any = {};
    if (message.epoch !== 0) {
      obj.epoch = Math.round(message.epoch);
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetAllWorkreportByEpochRequest>, I>>(
    base?: I,
  ): QueryGetAllWorkreportByEpochRequest {
    return QueryGetAllWorkreportByEpochRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetAllWorkreportByEpochRequest>, I>>(
    object: I,
  ): QueryGetAllWorkreportByEpochRequest {
    const message = createBaseQueryGetAllWorkreportByEpochRequest();
    message.epoch = object.epoch ?? 0;
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetAllWorkreportByEpochResponse(): QueryGetAllWorkreportByEpochResponse {
  return { Workreports: [], pagination: undefined };
}

export const QueryGetAllWorkreportByEpochResponse = {
  encode(message: QueryGetAllWorkreportByEpochResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Workreports) {
      Workreport.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllWorkreportByEpochResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAllWorkreportByEpochResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.Workreports.push(Workreport.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): QueryGetAllWorkreportByEpochResponse {
    return {
      Workreports: Array.isArray(object?.Workreports) ? object.Workreports.map((e: any) => Workreport.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryGetAllWorkreportByEpochResponse): unknown {
    const obj: any = {};
    if (message.Workreports?.length) {
      obj.Workreports = message.Workreports.map((e) => Workreport.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetAllWorkreportByEpochResponse>, I>>(
    base?: I,
  ): QueryGetAllWorkreportByEpochResponse {
    return QueryGetAllWorkreportByEpochResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetAllWorkreportByEpochResponse>, I>>(
    object: I,
  ): QueryGetAllWorkreportByEpochResponse {
    const message = createBaseQueryGetAllWorkreportByEpochResponse();
    message.Workreports = object.Workreports?.map((e) => Workreport.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetWorkreportProcessBatchSizeRequest(): QueryGetWorkreportProcessBatchSizeRequest {
  return {};
}

export const QueryGetWorkreportProcessBatchSizeRequest = {
  encode(_: QueryGetWorkreportProcessBatchSizeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetWorkreportProcessBatchSizeRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetWorkreportProcessBatchSizeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): QueryGetWorkreportProcessBatchSizeRequest {
    return {};
  },

  toJSON(_: QueryGetWorkreportProcessBatchSizeRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetWorkreportProcessBatchSizeRequest>, I>>(
    base?: I,
  ): QueryGetWorkreportProcessBatchSizeRequest {
    return QueryGetWorkreportProcessBatchSizeRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetWorkreportProcessBatchSizeRequest>, I>>(
    _: I,
  ): QueryGetWorkreportProcessBatchSizeRequest {
    const message = createBaseQueryGetWorkreportProcessBatchSizeRequest();
    return message;
  },
};

function createBaseQueryGetWorkreportProcessBatchSizeResponse(): QueryGetWorkreportProcessBatchSizeResponse {
  return { batchSize: 0 };
}

export const QueryGetWorkreportProcessBatchSizeResponse = {
  encode(message: QueryGetWorkreportProcessBatchSizeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.batchSize !== 0) {
      writer.uint32(8).uint64(message.batchSize);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetWorkreportProcessBatchSizeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetWorkreportProcessBatchSizeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.batchSize = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetWorkreportProcessBatchSizeResponse {
    return { batchSize: isSet(object.batchSize) ? Number(object.batchSize) : 0 };
  },

  toJSON(message: QueryGetWorkreportProcessBatchSizeResponse): unknown {
    const obj: any = {};
    if (message.batchSize !== 0) {
      obj.batchSize = Math.round(message.batchSize);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetWorkreportProcessBatchSizeResponse>, I>>(
    base?: I,
  ): QueryGetWorkreportProcessBatchSizeResponse {
    return QueryGetWorkreportProcessBatchSizeResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetWorkreportProcessBatchSizeResponse>, I>>(
    object: I,
  ): QueryGetWorkreportProcessBatchSizeResponse {
    const message = createBaseQueryGetWorkreportProcessBatchSizeResponse();
    message.batchSize = object.batchSize ?? 0;
    return message;
  },
};

function createBaseQueryGetHistoryEpochDataDepthRequest(): QueryGetHistoryEpochDataDepthRequest {
  return {};
}

export const QueryGetHistoryEpochDataDepthRequest = {
  encode(_: QueryGetHistoryEpochDataDepthRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetHistoryEpochDataDepthRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetHistoryEpochDataDepthRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): QueryGetHistoryEpochDataDepthRequest {
    return {};
  },

  toJSON(_: QueryGetHistoryEpochDataDepthRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetHistoryEpochDataDepthRequest>, I>>(
    base?: I,
  ): QueryGetHistoryEpochDataDepthRequest {
    return QueryGetHistoryEpochDataDepthRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetHistoryEpochDataDepthRequest>, I>>(
    _: I,
  ): QueryGetHistoryEpochDataDepthRequest {
    const message = createBaseQueryGetHistoryEpochDataDepthRequest();
    return message;
  },
};

function createBaseQueryGetHistoryEpochDataDepthResponse(): QueryGetHistoryEpochDataDepthResponse {
  return { depth: 0 };
}

export const QueryGetHistoryEpochDataDepthResponse = {
  encode(message: QueryGetHistoryEpochDataDepthResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depth !== 0) {
      writer.uint32(8).uint64(message.depth);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetHistoryEpochDataDepthResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetHistoryEpochDataDepthResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.depth = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetHistoryEpochDataDepthResponse {
    return { depth: isSet(object.depth) ? Number(object.depth) : 0 };
  },

  toJSON(message: QueryGetHistoryEpochDataDepthResponse): unknown {
    const obj: any = {};
    if (message.depth !== 0) {
      obj.depth = Math.round(message.depth);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetHistoryEpochDataDepthResponse>, I>>(
    base?: I,
  ): QueryGetHistoryEpochDataDepthResponse {
    return QueryGetHistoryEpochDataDepthResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetHistoryEpochDataDepthResponse>, I>>(
    object: I,
  ): QueryGetHistoryEpochDataDepthResponse {
    const message = createBaseQueryGetHistoryEpochDataDepthResponse();
    message.depth = object.depth ?? 0;
    return message;
  },
};

function createBaseQueryGetEpochProcessDataRequest(): QueryGetEpochProcessDataRequest {
  return { epoch: 0 };
}

export const QueryGetEpochProcessDataRequest = {
  encode(message: QueryGetEpochProcessDataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.epoch !== 0) {
      writer.uint32(8).uint64(message.epoch);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetEpochProcessDataRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetEpochProcessDataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.epoch = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetEpochProcessDataRequest {
    return { epoch: isSet(object.epoch) ? Number(object.epoch) : 0 };
  },

  toJSON(message: QueryGetEpochProcessDataRequest): unknown {
    const obj: any = {};
    if (message.epoch !== 0) {
      obj.epoch = Math.round(message.epoch);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetEpochProcessDataRequest>, I>>(base?: I): QueryGetEpochProcessDataRequest {
    return QueryGetEpochProcessDataRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetEpochProcessDataRequest>, I>>(
    object: I,
  ): QueryGetEpochProcessDataRequest {
    const message = createBaseQueryGetEpochProcessDataRequest();
    message.epoch = object.epoch ?? 0;
    return message;
  },
};

function createBaseQueryGetEpochProcessDataResponse(): QueryGetEpochProcessDataResponse {
  return { EpochProcessData: undefined };
}

export const QueryGetEpochProcessDataResponse = {
  encode(message: QueryGetEpochProcessDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.EpochProcessData !== undefined) {
      EpochProcessData.encode(message.EpochProcessData, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetEpochProcessDataResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetEpochProcessDataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.EpochProcessData = EpochProcessData.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetEpochProcessDataResponse {
    return {
      EpochProcessData: isSet(object.EpochProcessData) ? EpochProcessData.fromJSON(object.EpochProcessData) : undefined,
    };
  },

  toJSON(message: QueryGetEpochProcessDataResponse): unknown {
    const obj: any = {};
    if (message.EpochProcessData !== undefined) {
      obj.EpochProcessData = EpochProcessData.toJSON(message.EpochProcessData);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetEpochProcessDataResponse>, I>>(
    base?: I,
  ): QueryGetEpochProcessDataResponse {
    return QueryGetEpochProcessDataResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetEpochProcessDataResponse>, I>>(
    object: I,
  ): QueryGetEpochProcessDataResponse {
    const message = createBaseQueryGetEpochProcessDataResponse();
    message.EpochProcessData = (object.EpochProcessData !== undefined && object.EpochProcessData !== null)
      ? EpochProcessData.fromPartial(object.EpochProcessData)
      : undefined;
    return message;
  },
};

function createBaseQueryGetAllEpochProcessDataRequest(): QueryGetAllEpochProcessDataRequest {
  return { pagination: undefined };
}

export const QueryGetAllEpochProcessDataRequest = {
  encode(message: QueryGetAllEpochProcessDataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllEpochProcessDataRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAllEpochProcessDataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetAllEpochProcessDataRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryGetAllEpochProcessDataRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetAllEpochProcessDataRequest>, I>>(
    base?: I,
  ): QueryGetAllEpochProcessDataRequest {
    return QueryGetAllEpochProcessDataRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetAllEpochProcessDataRequest>, I>>(
    object: I,
  ): QueryGetAllEpochProcessDataRequest {
    const message = createBaseQueryGetAllEpochProcessDataRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetAllEpochProcessDataResponse(): QueryGetAllEpochProcessDataResponse {
  return { EpochProcessDatas: [], pagination: undefined };
}

export const QueryGetAllEpochProcessDataResponse = {
  encode(message: QueryGetAllEpochProcessDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.EpochProcessDatas) {
      EpochProcessData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllEpochProcessDataResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAllEpochProcessDataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.EpochProcessDatas.push(EpochProcessData.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): QueryGetAllEpochProcessDataResponse {
    return {
      EpochProcessDatas: Array.isArray(object?.EpochProcessDatas)
        ? object.EpochProcessDatas.map((e: any) => EpochProcessData.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryGetAllEpochProcessDataResponse): unknown {
    const obj: any = {};
    if (message.EpochProcessDatas?.length) {
      obj.EpochProcessDatas = message.EpochProcessDatas.map((e) => EpochProcessData.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetAllEpochProcessDataResponse>, I>>(
    base?: I,
  ): QueryGetAllEpochProcessDataResponse {
    return QueryGetAllEpochProcessDataResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetAllEpochProcessDataResponse>, I>>(
    object: I,
  ): QueryGetAllEpochProcessDataResponse {
    const message = createBaseQueryGetAllEpochProcessDataResponse();
    message.EpochProcessDatas = object.EpochProcessDatas?.map((e) => EpochProcessData.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetSuperiorRequest(): QueryGetSuperiorRequest {
  return {};
}

export const QueryGetSuperiorRequest = {
  encode(_: QueryGetSuperiorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetSuperiorRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSuperiorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): QueryGetSuperiorRequest {
    return {};
  },

  toJSON(_: QueryGetSuperiorRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetSuperiorRequest>, I>>(base?: I): QueryGetSuperiorRequest {
    return QueryGetSuperiorRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetSuperiorRequest>, I>>(_: I): QueryGetSuperiorRequest {
    const message = createBaseQueryGetSuperiorRequest();
    return message;
  },
};

function createBaseQueryGetSuperiorResponse(): QueryGetSuperiorResponse {
  return { Superior: undefined };
}

export const QueryGetSuperiorResponse = {
  encode(message: QueryGetSuperiorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Superior !== undefined) {
      Superior.encode(message.Superior, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetSuperiorResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSuperiorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.Superior = Superior.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetSuperiorResponse {
    return { Superior: isSet(object.Superior) ? Superior.fromJSON(object.Superior) : undefined };
  },

  toJSON(message: QueryGetSuperiorResponse): unknown {
    const obj: any = {};
    if (message.Superior !== undefined) {
      obj.Superior = Superior.toJSON(message.Superior);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetSuperiorResponse>, I>>(base?: I): QueryGetSuperiorResponse {
    return QueryGetSuperiorResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetSuperiorResponse>, I>>(object: I): QueryGetSuperiorResponse {
    const message = createBaseQueryGetSuperiorResponse();
    message.Superior = (object.Superior !== undefined && object.Superior !== null)
      ? Superior.fromPartial(object.Superior)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries epoch */
  EpochLength(request: QueryGetEpochLengthRequest): Promise<QueryGetEpochLengthResponse>;
  CurrentEpoch(request: QueryGetCurrentEpochRequest): Promise<QueryGetCurrentEpochResponse>;
  /** Queries a list of Node Workload items. */
  NodeWorkload(request: QueryGetNodeWorkloadRequest): Promise<QueryGetNodeWorkloadResponse>;
  AllNodeWorkloadByEpoch(
    request: QueryGetAllNodeWorkloadByEpochRequest,
  ): Promise<QueryGetAllNodeWorkloadByEpochResponse>;
  /** Queries a list of Manager Workload items. */
  ManagerWorkload(request: QueryGetManagerWorkloadRequest): Promise<QueryGetManagerWorkloadResponse>;
  AllManagerWorkloadByEpoch(
    request: QueryGetAllManagerWorkloadByEpochRequest,
  ): Promise<QueryGetAllManagerWorkloadByEpochResponse>;
  /** Queries a list of Workreport items. */
  Workreport(request: QueryGetWorkreportRequest): Promise<QueryGetWorkreportResponse>;
  AllWorkreportByEpoch(request: QueryGetAllWorkreportByEpochRequest): Promise<QueryGetAllWorkreportByEpochResponse>;
  /** Queries some param settings */
  WorkreportProcessBatchSize(
    request: QueryGetWorkreportProcessBatchSizeRequest,
  ): Promise<QueryGetWorkreportProcessBatchSizeResponse>;
  HistoryEpochDataDepth(request: QueryGetHistoryEpochDataDepthRequest): Promise<QueryGetHistoryEpochDataDepthResponse>;
  EpochProcessData(request: QueryGetEpochProcessDataRequest): Promise<QueryGetEpochProcessDataResponse>;
  AllEpochProcessData(request: QueryGetAllEpochProcessDataRequest): Promise<QueryGetAllEpochProcessDataResponse>;
  /** Queries a Superior */
  Superior(request: QueryGetSuperiorRequest): Promise<QueryGetSuperiorResponse>;
}

export const QueryServiceName = "enreach.workload.Query";
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || QueryServiceName;
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.EpochLength = this.EpochLength.bind(this);
    this.CurrentEpoch = this.CurrentEpoch.bind(this);
    this.NodeWorkload = this.NodeWorkload.bind(this);
    this.AllNodeWorkloadByEpoch = this.AllNodeWorkloadByEpoch.bind(this);
    this.ManagerWorkload = this.ManagerWorkload.bind(this);
    this.AllManagerWorkloadByEpoch = this.AllManagerWorkloadByEpoch.bind(this);
    this.Workreport = this.Workreport.bind(this);
    this.AllWorkreportByEpoch = this.AllWorkreportByEpoch.bind(this);
    this.WorkreportProcessBatchSize = this.WorkreportProcessBatchSize.bind(this);
    this.HistoryEpochDataDepth = this.HistoryEpochDataDepth.bind(this);
    this.EpochProcessData = this.EpochProcessData.bind(this);
    this.AllEpochProcessData = this.AllEpochProcessData.bind(this);
    this.Superior = this.Superior.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(_m0.Reader.create(data)));
  }

  EpochLength(request: QueryGetEpochLengthRequest): Promise<QueryGetEpochLengthResponse> {
    const data = QueryGetEpochLengthRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "EpochLength", data);
    return promise.then((data) => QueryGetEpochLengthResponse.decode(_m0.Reader.create(data)));
  }

  CurrentEpoch(request: QueryGetCurrentEpochRequest): Promise<QueryGetCurrentEpochResponse> {
    const data = QueryGetCurrentEpochRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CurrentEpoch", data);
    return promise.then((data) => QueryGetCurrentEpochResponse.decode(_m0.Reader.create(data)));
  }

  NodeWorkload(request: QueryGetNodeWorkloadRequest): Promise<QueryGetNodeWorkloadResponse> {
    const data = QueryGetNodeWorkloadRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "NodeWorkload", data);
    return promise.then((data) => QueryGetNodeWorkloadResponse.decode(_m0.Reader.create(data)));
  }

  AllNodeWorkloadByEpoch(
    request: QueryGetAllNodeWorkloadByEpochRequest,
  ): Promise<QueryGetAllNodeWorkloadByEpochResponse> {
    const data = QueryGetAllNodeWorkloadByEpochRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AllNodeWorkloadByEpoch", data);
    return promise.then((data) => QueryGetAllNodeWorkloadByEpochResponse.decode(_m0.Reader.create(data)));
  }

  ManagerWorkload(request: QueryGetManagerWorkloadRequest): Promise<QueryGetManagerWorkloadResponse> {
    const data = QueryGetManagerWorkloadRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ManagerWorkload", data);
    return promise.then((data) => QueryGetManagerWorkloadResponse.decode(_m0.Reader.create(data)));
  }

  AllManagerWorkloadByEpoch(
    request: QueryGetAllManagerWorkloadByEpochRequest,
  ): Promise<QueryGetAllManagerWorkloadByEpochResponse> {
    const data = QueryGetAllManagerWorkloadByEpochRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AllManagerWorkloadByEpoch", data);
    return promise.then((data) => QueryGetAllManagerWorkloadByEpochResponse.decode(_m0.Reader.create(data)));
  }

  Workreport(request: QueryGetWorkreportRequest): Promise<QueryGetWorkreportResponse> {
    const data = QueryGetWorkreportRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Workreport", data);
    return promise.then((data) => QueryGetWorkreportResponse.decode(_m0.Reader.create(data)));
  }

  AllWorkreportByEpoch(request: QueryGetAllWorkreportByEpochRequest): Promise<QueryGetAllWorkreportByEpochResponse> {
    const data = QueryGetAllWorkreportByEpochRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AllWorkreportByEpoch", data);
    return promise.then((data) => QueryGetAllWorkreportByEpochResponse.decode(_m0.Reader.create(data)));
  }

  WorkreportProcessBatchSize(
    request: QueryGetWorkreportProcessBatchSizeRequest,
  ): Promise<QueryGetWorkreportProcessBatchSizeResponse> {
    const data = QueryGetWorkreportProcessBatchSizeRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "WorkreportProcessBatchSize", data);
    return promise.then((data) => QueryGetWorkreportProcessBatchSizeResponse.decode(_m0.Reader.create(data)));
  }

  HistoryEpochDataDepth(request: QueryGetHistoryEpochDataDepthRequest): Promise<QueryGetHistoryEpochDataDepthResponse> {
    const data = QueryGetHistoryEpochDataDepthRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "HistoryEpochDataDepth", data);
    return promise.then((data) => QueryGetHistoryEpochDataDepthResponse.decode(_m0.Reader.create(data)));
  }

  EpochProcessData(request: QueryGetEpochProcessDataRequest): Promise<QueryGetEpochProcessDataResponse> {
    const data = QueryGetEpochProcessDataRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "EpochProcessData", data);
    return promise.then((data) => QueryGetEpochProcessDataResponse.decode(_m0.Reader.create(data)));
  }

  AllEpochProcessData(request: QueryGetAllEpochProcessDataRequest): Promise<QueryGetAllEpochProcessDataResponse> {
    const data = QueryGetAllEpochProcessDataRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AllEpochProcessData", data);
    return promise.then((data) => QueryGetAllEpochProcessDataResponse.decode(_m0.Reader.create(data)));
  }

  Superior(request: QueryGetSuperiorRequest): Promise<QueryGetSuperiorResponse> {
    const data = QueryGetSuperiorRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Superior", data);
    return promise.then((data) => QueryGetSuperiorResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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
