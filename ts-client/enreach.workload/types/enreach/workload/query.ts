/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { Workload } from "./workload";
import { Workreport } from "./workreport";

export const protobufPackage = "enreach.workload";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetWorkloadRequest {
  id: number;
}

export interface QueryGetWorkloadResponse {
  Workload: Workload | undefined;
}

export interface QueryAllWorkloadRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllWorkloadResponse {
  Workload: Workload[];
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
  Workreport: Workreport[];
  pagination: PageResponse | undefined;
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

function createBaseQueryGetWorkloadRequest(): QueryGetWorkloadRequest {
  return { id: 0 };
}

export const QueryGetWorkloadRequest = {
  encode(message: QueryGetWorkloadRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetWorkloadRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetWorkloadRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetWorkloadRequest {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: QueryGetWorkloadRequest): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetWorkloadRequest>, I>>(base?: I): QueryGetWorkloadRequest {
    return QueryGetWorkloadRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetWorkloadRequest>, I>>(object: I): QueryGetWorkloadRequest {
    const message = createBaseQueryGetWorkloadRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseQueryGetWorkloadResponse(): QueryGetWorkloadResponse {
  return { Workload: undefined };
}

export const QueryGetWorkloadResponse = {
  encode(message: QueryGetWorkloadResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Workload !== undefined) {
      Workload.encode(message.Workload, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetWorkloadResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetWorkloadResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.Workload = Workload.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetWorkloadResponse {
    return { Workload: isSet(object.Workload) ? Workload.fromJSON(object.Workload) : undefined };
  },

  toJSON(message: QueryGetWorkloadResponse): unknown {
    const obj: any = {};
    if (message.Workload !== undefined) {
      obj.Workload = Workload.toJSON(message.Workload);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetWorkloadResponse>, I>>(base?: I): QueryGetWorkloadResponse {
    return QueryGetWorkloadResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetWorkloadResponse>, I>>(object: I): QueryGetWorkloadResponse {
    const message = createBaseQueryGetWorkloadResponse();
    message.Workload = (object.Workload !== undefined && object.Workload !== null)
      ? Workload.fromPartial(object.Workload)
      : undefined;
    return message;
  },
};

function createBaseQueryAllWorkloadRequest(): QueryAllWorkloadRequest {
  return { pagination: undefined };
}

export const QueryAllWorkloadRequest = {
  encode(message: QueryAllWorkloadRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllWorkloadRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllWorkloadRequest();
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

  fromJSON(object: any): QueryAllWorkloadRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllWorkloadRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllWorkloadRequest>, I>>(base?: I): QueryAllWorkloadRequest {
    return QueryAllWorkloadRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllWorkloadRequest>, I>>(object: I): QueryAllWorkloadRequest {
    const message = createBaseQueryAllWorkloadRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllWorkloadResponse(): QueryAllWorkloadResponse {
  return { Workload: [], pagination: undefined };
}

export const QueryAllWorkloadResponse = {
  encode(message: QueryAllWorkloadResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Workload) {
      Workload.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllWorkloadResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllWorkloadResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.Workload.push(Workload.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllWorkloadResponse {
    return {
      Workload: Array.isArray(object?.Workload) ? object.Workload.map((e: any) => Workload.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllWorkloadResponse): unknown {
    const obj: any = {};
    if (message.Workload?.length) {
      obj.Workload = message.Workload.map((e) => Workload.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllWorkloadResponse>, I>>(base?: I): QueryAllWorkloadResponse {
    return QueryAllWorkloadResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllWorkloadResponse>, I>>(object: I): QueryAllWorkloadResponse {
    const message = createBaseQueryAllWorkloadResponse();
    message.Workload = object.Workload?.map((e) => Workload.fromPartial(e)) || [];
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
  return { Workreport: [], pagination: undefined };
}

export const QueryGetAllWorkreportByEpochResponse = {
  encode(message: QueryGetAllWorkreportByEpochResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Workreport) {
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

          message.Workreport.push(Workreport.decode(reader, reader.uint32()));
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
      Workreport: Array.isArray(object?.Workreport) ? object.Workreport.map((e: any) => Workreport.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryGetAllWorkreportByEpochResponse): unknown {
    const obj: any = {};
    if (message.Workreport?.length) {
      obj.Workreport = message.Workreport.map((e) => Workreport.toJSON(e));
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
    message.Workreport = object.Workreport?.map((e) => Workreport.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of Workload items. */
  Workload(request: QueryGetWorkloadRequest): Promise<QueryGetWorkloadResponse>;
  WorkloadAll(request: QueryAllWorkloadRequest): Promise<QueryAllWorkloadResponse>;
  /** Queries a list of Workreport items. */
  GetWorkreport(request: QueryGetWorkreportRequest): Promise<QueryGetWorkreportResponse>;
  GetAllWorkreportByEpoch(request: QueryGetAllWorkreportByEpochRequest): Promise<QueryGetAllWorkreportByEpochResponse>;
}

export const QueryServiceName = "enreach.workload.Query";
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || QueryServiceName;
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.Workload = this.Workload.bind(this);
    this.WorkloadAll = this.WorkloadAll.bind(this);
    this.GetWorkreport = this.GetWorkreport.bind(this);
    this.GetAllWorkreportByEpoch = this.GetAllWorkreportByEpoch.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(_m0.Reader.create(data)));
  }

  Workload(request: QueryGetWorkloadRequest): Promise<QueryGetWorkloadResponse> {
    const data = QueryGetWorkloadRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Workload", data);
    return promise.then((data) => QueryGetWorkloadResponse.decode(_m0.Reader.create(data)));
  }

  WorkloadAll(request: QueryAllWorkloadRequest): Promise<QueryAllWorkloadResponse> {
    const data = QueryAllWorkloadRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "WorkloadAll", data);
    return promise.then((data) => QueryAllWorkloadResponse.decode(_m0.Reader.create(data)));
  }

  GetWorkreport(request: QueryGetWorkreportRequest): Promise<QueryGetWorkreportResponse> {
    const data = QueryGetWorkreportRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetWorkreport", data);
    return promise.then((data) => QueryGetWorkreportResponse.decode(_m0.Reader.create(data)));
  }

  GetAllWorkreportByEpoch(request: QueryGetAllWorkreportByEpochRequest): Promise<QueryGetAllWorkreportByEpochResponse> {
    const data = QueryGetAllWorkreportByEpochRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetAllWorkreportByEpoch", data);
    return promise.then((data) => QueryGetAllWorkreportByEpochResponse.decode(_m0.Reader.create(data)));
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
