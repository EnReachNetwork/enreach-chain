/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Manager } from "./manager";
import { Operator } from "./operator";
import { Params } from "./params";

export const protobufPackage = "enreach.manager";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetOperatorRequest {
  operatorAccount: string;
}

export interface QueryGetOperatorResponse {
  Operator: Operator | undefined;
}

export interface QueryAllOperatorRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllOperatorResponse {
  Operator: Operator[];
  pagination: PageResponse | undefined;
}

export interface QueryGetManagerRequest {
  managerAccount: string;
}

export interface QueryGetManagerResponse {
  Manager: Manager | undefined;
}

export interface QueryAllManagerRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllManagerResponse {
  Manager: Manager[];
  pagination: PageResponse | undefined;
}

export interface QueryGetManagerByRegionRequest {
  regionCode: string;
}

export interface QueryGetManagerByRegionResponse {
  managers: Manager[];
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

function createBaseQueryGetOperatorRequest(): QueryGetOperatorRequest {
  return { operatorAccount: "" };
}

export const QueryGetOperatorRequest = {
  encode(message: QueryGetOperatorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operatorAccount !== "") {
      writer.uint32(10).string(message.operatorAccount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOperatorRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetOperatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.operatorAccount = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetOperatorRequest {
    return { operatorAccount: isSet(object.operatorAccount) ? String(object.operatorAccount) : "" };
  },

  toJSON(message: QueryGetOperatorRequest): unknown {
    const obj: any = {};
    if (message.operatorAccount !== "") {
      obj.operatorAccount = message.operatorAccount;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetOperatorRequest>, I>>(base?: I): QueryGetOperatorRequest {
    return QueryGetOperatorRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetOperatorRequest>, I>>(object: I): QueryGetOperatorRequest {
    const message = createBaseQueryGetOperatorRequest();
    message.operatorAccount = object.operatorAccount ?? "";
    return message;
  },
};

function createBaseQueryGetOperatorResponse(): QueryGetOperatorResponse {
  return { Operator: undefined };
}

export const QueryGetOperatorResponse = {
  encode(message: QueryGetOperatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Operator !== undefined) {
      Operator.encode(message.Operator, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOperatorResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetOperatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.Operator = Operator.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetOperatorResponse {
    return { Operator: isSet(object.Operator) ? Operator.fromJSON(object.Operator) : undefined };
  },

  toJSON(message: QueryGetOperatorResponse): unknown {
    const obj: any = {};
    if (message.Operator !== undefined) {
      obj.Operator = Operator.toJSON(message.Operator);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetOperatorResponse>, I>>(base?: I): QueryGetOperatorResponse {
    return QueryGetOperatorResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetOperatorResponse>, I>>(object: I): QueryGetOperatorResponse {
    const message = createBaseQueryGetOperatorResponse();
    message.Operator = (object.Operator !== undefined && object.Operator !== null)
      ? Operator.fromPartial(object.Operator)
      : undefined;
    return message;
  },
};

function createBaseQueryAllOperatorRequest(): QueryAllOperatorRequest {
  return { pagination: undefined };
}

export const QueryAllOperatorRequest = {
  encode(message: QueryAllOperatorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllOperatorRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllOperatorRequest();
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

  fromJSON(object: any): QueryAllOperatorRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllOperatorRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllOperatorRequest>, I>>(base?: I): QueryAllOperatorRequest {
    return QueryAllOperatorRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllOperatorRequest>, I>>(object: I): QueryAllOperatorRequest {
    const message = createBaseQueryAllOperatorRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllOperatorResponse(): QueryAllOperatorResponse {
  return { Operator: [], pagination: undefined };
}

export const QueryAllOperatorResponse = {
  encode(message: QueryAllOperatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Operator) {
      Operator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllOperatorResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllOperatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.Operator.push(Operator.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllOperatorResponse {
    return {
      Operator: Array.isArray(object?.Operator) ? object.Operator.map((e: any) => Operator.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllOperatorResponse): unknown {
    const obj: any = {};
    if (message.Operator?.length) {
      obj.Operator = message.Operator.map((e) => Operator.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllOperatorResponse>, I>>(base?: I): QueryAllOperatorResponse {
    return QueryAllOperatorResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllOperatorResponse>, I>>(object: I): QueryAllOperatorResponse {
    const message = createBaseQueryAllOperatorResponse();
    message.Operator = object.Operator?.map((e) => Operator.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetManagerRequest(): QueryGetManagerRequest {
  return { managerAccount: "" };
}

export const QueryGetManagerRequest = {
  encode(message: QueryGetManagerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.managerAccount !== "") {
      writer.uint32(10).string(message.managerAccount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetManagerRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetManagerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): QueryGetManagerRequest {
    return { managerAccount: isSet(object.managerAccount) ? String(object.managerAccount) : "" };
  },

  toJSON(message: QueryGetManagerRequest): unknown {
    const obj: any = {};
    if (message.managerAccount !== "") {
      obj.managerAccount = message.managerAccount;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetManagerRequest>, I>>(base?: I): QueryGetManagerRequest {
    return QueryGetManagerRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetManagerRequest>, I>>(object: I): QueryGetManagerRequest {
    const message = createBaseQueryGetManagerRequest();
    message.managerAccount = object.managerAccount ?? "";
    return message;
  },
};

function createBaseQueryGetManagerResponse(): QueryGetManagerResponse {
  return { Manager: undefined };
}

export const QueryGetManagerResponse = {
  encode(message: QueryGetManagerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Manager !== undefined) {
      Manager.encode(message.Manager, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetManagerResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetManagerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.Manager = Manager.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetManagerResponse {
    return { Manager: isSet(object.Manager) ? Manager.fromJSON(object.Manager) : undefined };
  },

  toJSON(message: QueryGetManagerResponse): unknown {
    const obj: any = {};
    if (message.Manager !== undefined) {
      obj.Manager = Manager.toJSON(message.Manager);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetManagerResponse>, I>>(base?: I): QueryGetManagerResponse {
    return QueryGetManagerResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetManagerResponse>, I>>(object: I): QueryGetManagerResponse {
    const message = createBaseQueryGetManagerResponse();
    message.Manager = (object.Manager !== undefined && object.Manager !== null)
      ? Manager.fromPartial(object.Manager)
      : undefined;
    return message;
  },
};

function createBaseQueryAllManagerRequest(): QueryAllManagerRequest {
  return { pagination: undefined };
}

export const QueryAllManagerRequest = {
  encode(message: QueryAllManagerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllManagerRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllManagerRequest();
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

  fromJSON(object: any): QueryAllManagerRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllManagerRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllManagerRequest>, I>>(base?: I): QueryAllManagerRequest {
    return QueryAllManagerRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllManagerRequest>, I>>(object: I): QueryAllManagerRequest {
    const message = createBaseQueryAllManagerRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllManagerResponse(): QueryAllManagerResponse {
  return { Manager: [], pagination: undefined };
}

export const QueryAllManagerResponse = {
  encode(message: QueryAllManagerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Manager) {
      Manager.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllManagerResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllManagerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.Manager.push(Manager.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllManagerResponse {
    return {
      Manager: Array.isArray(object?.Manager) ? object.Manager.map((e: any) => Manager.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllManagerResponse): unknown {
    const obj: any = {};
    if (message.Manager?.length) {
      obj.Manager = message.Manager.map((e) => Manager.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllManagerResponse>, I>>(base?: I): QueryAllManagerResponse {
    return QueryAllManagerResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllManagerResponse>, I>>(object: I): QueryAllManagerResponse {
    const message = createBaseQueryAllManagerResponse();
    message.Manager = object.Manager?.map((e) => Manager.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetManagerByRegionRequest(): QueryGetManagerByRegionRequest {
  return { regionCode: "" };
}

export const QueryGetManagerByRegionRequest = {
  encode(message: QueryGetManagerByRegionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.regionCode !== "") {
      writer.uint32(10).string(message.regionCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetManagerByRegionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetManagerByRegionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.regionCode = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetManagerByRegionRequest {
    return { regionCode: isSet(object.regionCode) ? String(object.regionCode) : "" };
  },

  toJSON(message: QueryGetManagerByRegionRequest): unknown {
    const obj: any = {};
    if (message.regionCode !== "") {
      obj.regionCode = message.regionCode;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetManagerByRegionRequest>, I>>(base?: I): QueryGetManagerByRegionRequest {
    return QueryGetManagerByRegionRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetManagerByRegionRequest>, I>>(
    object: I,
  ): QueryGetManagerByRegionRequest {
    const message = createBaseQueryGetManagerByRegionRequest();
    message.regionCode = object.regionCode ?? "";
    return message;
  },
};

function createBaseQueryGetManagerByRegionResponse(): QueryGetManagerByRegionResponse {
  return { managers: [] };
}

export const QueryGetManagerByRegionResponse = {
  encode(message: QueryGetManagerByRegionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.managers) {
      Manager.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetManagerByRegionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetManagerByRegionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.managers.push(Manager.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetManagerByRegionResponse {
    return { managers: Array.isArray(object?.managers) ? object.managers.map((e: any) => Manager.fromJSON(e)) : [] };
  },

  toJSON(message: QueryGetManagerByRegionResponse): unknown {
    const obj: any = {};
    if (message.managers?.length) {
      obj.managers = message.managers.map((e) => Manager.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetManagerByRegionResponse>, I>>(base?: I): QueryGetManagerByRegionResponse {
    return QueryGetManagerByRegionResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetManagerByRegionResponse>, I>>(
    object: I,
  ): QueryGetManagerByRegionResponse {
    const message = createBaseQueryGetManagerByRegionResponse();
    message.managers = object.managers?.map((e) => Manager.fromPartial(e)) || [];
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

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of Operator items. */
  Operator(request: QueryGetOperatorRequest): Promise<QueryGetOperatorResponse>;
  OperatorAll(request: QueryAllOperatorRequest): Promise<QueryAllOperatorResponse>;
  /** Queries a list of Manager items. */
  Manager(request: QueryGetManagerRequest): Promise<QueryGetManagerResponse>;
  ManagerAll(request: QueryAllManagerRequest): Promise<QueryAllManagerResponse>;
  /** Queries a list of GetManagerByRegion items. */
  GetManagerByRegion(request: QueryGetManagerByRegionRequest): Promise<QueryGetManagerByRegionResponse>;
  /** Queries epoch */
  GetEpochLength(request: QueryGetEpochLengthRequest): Promise<QueryGetEpochLengthResponse>;
  GetCurrentEpoch(request: QueryGetCurrentEpochRequest): Promise<QueryGetCurrentEpochResponse>;
}

export const QueryServiceName = "enreach.manager.Query";
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || QueryServiceName;
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.Operator = this.Operator.bind(this);
    this.OperatorAll = this.OperatorAll.bind(this);
    this.Manager = this.Manager.bind(this);
    this.ManagerAll = this.ManagerAll.bind(this);
    this.GetManagerByRegion = this.GetManagerByRegion.bind(this);
    this.GetEpochLength = this.GetEpochLength.bind(this);
    this.GetCurrentEpoch = this.GetCurrentEpoch.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(_m0.Reader.create(data)));
  }

  Operator(request: QueryGetOperatorRequest): Promise<QueryGetOperatorResponse> {
    const data = QueryGetOperatorRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Operator", data);
    return promise.then((data) => QueryGetOperatorResponse.decode(_m0.Reader.create(data)));
  }

  OperatorAll(request: QueryAllOperatorRequest): Promise<QueryAllOperatorResponse> {
    const data = QueryAllOperatorRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "OperatorAll", data);
    return promise.then((data) => QueryAllOperatorResponse.decode(_m0.Reader.create(data)));
  }

  Manager(request: QueryGetManagerRequest): Promise<QueryGetManagerResponse> {
    const data = QueryGetManagerRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Manager", data);
    return promise.then((data) => QueryGetManagerResponse.decode(_m0.Reader.create(data)));
  }

  ManagerAll(request: QueryAllManagerRequest): Promise<QueryAllManagerResponse> {
    const data = QueryAllManagerRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ManagerAll", data);
    return promise.then((data) => QueryAllManagerResponse.decode(_m0.Reader.create(data)));
  }

  GetManagerByRegion(request: QueryGetManagerByRegionRequest): Promise<QueryGetManagerByRegionResponse> {
    const data = QueryGetManagerByRegionRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetManagerByRegion", data);
    return promise.then((data) => QueryGetManagerByRegionResponse.decode(_m0.Reader.create(data)));
  }

  GetEpochLength(request: QueryGetEpochLengthRequest): Promise<QueryGetEpochLengthResponse> {
    const data = QueryGetEpochLengthRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetEpochLength", data);
    return promise.then((data) => QueryGetEpochLengthResponse.decode(_m0.Reader.create(data)));
  }

  GetCurrentEpoch(request: QueryGetCurrentEpochRequest): Promise<QueryGetCurrentEpochResponse> {
    const data = QueryGetCurrentEpochRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetCurrentEpoch", data);
    return promise.then((data) => QueryGetCurrentEpochResponse.decode(_m0.Reader.create(data)));
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
