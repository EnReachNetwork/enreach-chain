/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { CheatStatusCRData, EraCheatStatusProcessData } from "./cheat_status";
import { EpochInfo } from "./epoch_info";
import { EraInfo } from "./era_info";
import { Params } from "./params";
import { EraProcessData, ReputationDeltaPoint, ReputationPointChangeData } from "./reputationpoint";
import { Superior } from "./superior";
import { ManagerCSWorkload, ManagerRPWorkload, ManagerWRWorkload, NodeWorkload } from "./workload";
import { EpochProcessData, Workreport } from "./workreport";

export const protobufPackage = "enreach.workload";

/** ////////////////////////////////////////////////////// */
export interface QueryParamRequest {
  paramKey: string;
}

export interface QueryParamResponse {
  paramValue: string;
}

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

/** ////////// */
export interface QueryGetEpochLengthRequest {
}

export interface QueryGetEpochLengthResponse {
  epochLength: number;
}

export interface QueryGetCurrentEpochRequest {
}

export interface QueryGetCurrentEpochResponse {
  EpochInfo: EpochInfo | undefined;
}

export interface QueryGetPendingNextEpochRequest {
}

export interface QueryGetPendingNextEpochResponse {
  EpochInfo: EpochInfo | undefined;
}

export interface QueryGetHistoryEpochRequest {
  epochNumber: number;
}

export interface QueryGetHistoryEpochResponse {
  EpochInfo: EpochInfo | undefined;
}

export interface QueryGetAllHistoryEpochRequest {
  pagination: PageRequest | undefined;
}

export interface QueryGetAllHistoryEpochResponse {
  EpochInfos: EpochInfo[];
  pagination: PageResponse | undefined;
}

/** ////////// */
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

/** ////////// */
export interface QueryGetManagerWRWorkloadRequest {
  epoch: number;
  managerAccount: string;
}

export interface QueryGetManagerWRWorkloadResponse {
  ManagerWRWorkload: ManagerWRWorkload | undefined;
}

export interface QueryGetAllManagerWRWorkloadByEpochRequest {
  epoch: number;
  pagination: PageRequest | undefined;
}

export interface QueryGetAllManagerWRWorkloadByEpochResponse {
  ManagerWRWorkloads: ManagerWRWorkload[];
  pagination: PageResponse | undefined;
}

/** ////////// */
export interface QueryGetManagerRPWorkloadRequest {
  era: number;
  managerAccount: string;
}

export interface QueryGetManagerRPWorkloadResponse {
  ManagerRPWorkload: ManagerRPWorkload | undefined;
}

export interface QueryGetAllManagerRPWorkloadByEraRequest {
  era: number;
  pagination: PageRequest | undefined;
}

export interface QueryGetAllManagerRPWorkloadByEraResponse {
  ManagerRPWorkloads: ManagerRPWorkload[];
  pagination: PageResponse | undefined;
}

/** ////////// */
export interface QueryGetManagerCSWorkloadRequest {
  era: number;
  managerAccount: string;
}

export interface QueryGetManagerCSWorkloadResponse {
  ManagerCSWorkload: ManagerCSWorkload | undefined;
}

export interface QueryGetAllManagerCSWorkloadByEraRequest {
  era: number;
  pagination: PageRequest | undefined;
}

export interface QueryGetAllManagerCSWorkloadByEraResponse {
  ManagerCSWorkloads: ManagerCSWorkload[];
  pagination: PageResponse | undefined;
}

/** ////////// */
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

/** ////////// */
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

/** ////////// */
export interface QueryGetSuperiorRequest {
}

export interface QueryGetSuperiorResponse {
  Superior: Superior | undefined;
}

/** ////////// */
export interface QueryGetEraLengthRequest {
}

export interface QueryGetEraLengthResponse {
  eraLength: number;
}

export interface QueryGetCurrentEraRequest {
}

export interface QueryGetCurrentEraResponse {
  EraInfo: EraInfo | undefined;
}

export interface QueryGetPendingNextEraRequest {
}

export interface QueryGetPendingNextEraResponse {
  EraInfo: EraInfo | undefined;
}

export interface QueryGetHistoryEraRequest {
  eraNumber: number;
}

export interface QueryGetHistoryEraResponse {
  EraInfo: EraInfo | undefined;
}

export interface QueryGetAllHistoryEraRequest {
  pagination: PageRequest | undefined;
}

export interface QueryGetAllHistoryEraResponse {
  EraInfos: EraInfo[];
  pagination: PageResponse | undefined;
}

export interface QueryGetReputationPointChangeDataRequest {
  era: number;
  nodeID: string;
}

export interface QueryGetReputationPointChangeDataResponse {
  ReputationPointChangeData: ReputationPointChangeData | undefined;
}

export interface QueryGetAllReputationPointChangeDataByEraRequest {
  era: number;
  pagination: PageRequest | undefined;
}

export interface QueryGetAllReputationPointChangeDataByEraResponse {
  ReputationPointChangeDatas: ReputationPointChangeData[];
  pagination: PageResponse | undefined;
}

export interface QueryGetReputationDeltaPointRequest {
  era: number;
  nodeID: string;
}

export interface QueryGetReputationDeltaPointResponse {
  ReputationDeltaPoint: ReputationDeltaPoint | undefined;
}

export interface QueryGetAllReputationDeltaPointByEraRequest {
  era: number;
  pagination: PageRequest | undefined;
}

export interface QueryGetAllReputationDeltaPointByEraResponse {
  ReputationDeltaPoints: ReputationDeltaPoint[];
  pagination: PageResponse | undefined;
}

export interface QueryGetEraProcessDataRequest {
  era: number;
}

export interface QueryGetEraProcessDataResponse {
  EraProcessData: EraProcessData | undefined;
}

export interface QueryGetAllEraProcessDataRequest {
  pagination: PageRequest | undefined;
}

export interface QueryGetAllEraProcessDataResponse {
  EraProcessDatas: EraProcessData[];
  pagination: PageResponse | undefined;
}

export interface QueryGetCheatStatusCRDataRequest {
  era: number;
  nodeID: string;
}

export interface QueryGetCheatStatusCRDataResponse {
  CheatStatusCRData: CheatStatusCRData | undefined;
}

export interface QueryGetAllCheatStatusCRDataByEraRequest {
  era: number;
  pagination: PageRequest | undefined;
}

export interface QueryGetAllCheatStatusCRDataByEraResponse {
  CheatStatusCRDatas: CheatStatusCRData[];
  pagination: PageResponse | undefined;
}

/** ////////// */
export interface QueryGetEraCheatStatusProcessDataRequest {
  era: number;
}

export interface QueryGetEraCheatStatusProcessDataResponse {
  EraCheatStatusProcessData: EraCheatStatusProcessData | undefined;
}

export interface QueryGetAllEraCheatStatusProcessDataRequest {
  pagination: PageRequest | undefined;
}

export interface QueryGetAllEraCheatStatusProcessDataResponse {
  EraCheatStatusProcessDatas: EraCheatStatusProcessData[];
  pagination: PageResponse | undefined;
}

function createBaseQueryParamRequest(): QueryParamRequest {
  return { paramKey: "" };
}

export const QueryParamRequest = {
  encode(message: QueryParamRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.paramKey !== "") {
      writer.uint32(10).string(message.paramKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.paramKey = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryParamRequest {
    return { paramKey: isSet(object.paramKey) ? String(object.paramKey) : "" };
  },

  toJSON(message: QueryParamRequest): unknown {
    const obj: any = {};
    if (message.paramKey !== "") {
      obj.paramKey = message.paramKey;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryParamRequest>, I>>(base?: I): QueryParamRequest {
    return QueryParamRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamRequest>, I>>(object: I): QueryParamRequest {
    const message = createBaseQueryParamRequest();
    message.paramKey = object.paramKey ?? "";
    return message;
  },
};

function createBaseQueryParamResponse(): QueryParamResponse {
  return { paramValue: "" };
}

export const QueryParamResponse = {
  encode(message: QueryParamResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.paramValue !== "") {
      writer.uint32(10).string(message.paramValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.paramValue = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryParamResponse {
    return { paramValue: isSet(object.paramValue) ? String(object.paramValue) : "" };
  },

  toJSON(message: QueryParamResponse): unknown {
    const obj: any = {};
    if (message.paramValue !== "") {
      obj.paramValue = message.paramValue;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryParamResponse>, I>>(base?: I): QueryParamResponse {
    return QueryParamResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamResponse>, I>>(object: I): QueryParamResponse {
    const message = createBaseQueryParamResponse();
    message.paramValue = object.paramValue ?? "";
    return message;
  },
};

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
  return { EpochInfo: undefined };
}

export const QueryGetCurrentEpochResponse = {
  encode(message: QueryGetCurrentEpochResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.EpochInfo !== undefined) {
      EpochInfo.encode(message.EpochInfo, writer.uint32(10).fork()).ldelim();
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
          if (tag !== 10) {
            break;
          }

          message.EpochInfo = EpochInfo.decode(reader, reader.uint32());
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
    return { EpochInfo: isSet(object.EpochInfo) ? EpochInfo.fromJSON(object.EpochInfo) : undefined };
  },

  toJSON(message: QueryGetCurrentEpochResponse): unknown {
    const obj: any = {};
    if (message.EpochInfo !== undefined) {
      obj.EpochInfo = EpochInfo.toJSON(message.EpochInfo);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetCurrentEpochResponse>, I>>(base?: I): QueryGetCurrentEpochResponse {
    return QueryGetCurrentEpochResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetCurrentEpochResponse>, I>>(object: I): QueryGetCurrentEpochResponse {
    const message = createBaseQueryGetCurrentEpochResponse();
    message.EpochInfo = (object.EpochInfo !== undefined && object.EpochInfo !== null)
      ? EpochInfo.fromPartial(object.EpochInfo)
      : undefined;
    return message;
  },
};

function createBaseQueryGetPendingNextEpochRequest(): QueryGetPendingNextEpochRequest {
  return {};
}

export const QueryGetPendingNextEpochRequest = {
  encode(_: QueryGetPendingNextEpochRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPendingNextEpochRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPendingNextEpochRequest();
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

  fromJSON(_: any): QueryGetPendingNextEpochRequest {
    return {};
  },

  toJSON(_: QueryGetPendingNextEpochRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetPendingNextEpochRequest>, I>>(base?: I): QueryGetPendingNextEpochRequest {
    return QueryGetPendingNextEpochRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetPendingNextEpochRequest>, I>>(_: I): QueryGetPendingNextEpochRequest {
    const message = createBaseQueryGetPendingNextEpochRequest();
    return message;
  },
};

function createBaseQueryGetPendingNextEpochResponse(): QueryGetPendingNextEpochResponse {
  return { EpochInfo: undefined };
}

export const QueryGetPendingNextEpochResponse = {
  encode(message: QueryGetPendingNextEpochResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.EpochInfo !== undefined) {
      EpochInfo.encode(message.EpochInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPendingNextEpochResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPendingNextEpochResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.EpochInfo = EpochInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetPendingNextEpochResponse {
    return { EpochInfo: isSet(object.EpochInfo) ? EpochInfo.fromJSON(object.EpochInfo) : undefined };
  },

  toJSON(message: QueryGetPendingNextEpochResponse): unknown {
    const obj: any = {};
    if (message.EpochInfo !== undefined) {
      obj.EpochInfo = EpochInfo.toJSON(message.EpochInfo);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetPendingNextEpochResponse>, I>>(
    base?: I,
  ): QueryGetPendingNextEpochResponse {
    return QueryGetPendingNextEpochResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetPendingNextEpochResponse>, I>>(
    object: I,
  ): QueryGetPendingNextEpochResponse {
    const message = createBaseQueryGetPendingNextEpochResponse();
    message.EpochInfo = (object.EpochInfo !== undefined && object.EpochInfo !== null)
      ? EpochInfo.fromPartial(object.EpochInfo)
      : undefined;
    return message;
  },
};

function createBaseQueryGetHistoryEpochRequest(): QueryGetHistoryEpochRequest {
  return { epochNumber: 0 };
}

export const QueryGetHistoryEpochRequest = {
  encode(message: QueryGetHistoryEpochRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.epochNumber !== 0) {
      writer.uint32(8).uint64(message.epochNumber);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetHistoryEpochRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetHistoryEpochRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.epochNumber = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetHistoryEpochRequest {
    return { epochNumber: isSet(object.epochNumber) ? Number(object.epochNumber) : 0 };
  },

  toJSON(message: QueryGetHistoryEpochRequest): unknown {
    const obj: any = {};
    if (message.epochNumber !== 0) {
      obj.epochNumber = Math.round(message.epochNumber);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetHistoryEpochRequest>, I>>(base?: I): QueryGetHistoryEpochRequest {
    return QueryGetHistoryEpochRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetHistoryEpochRequest>, I>>(object: I): QueryGetHistoryEpochRequest {
    const message = createBaseQueryGetHistoryEpochRequest();
    message.epochNumber = object.epochNumber ?? 0;
    return message;
  },
};

function createBaseQueryGetHistoryEpochResponse(): QueryGetHistoryEpochResponse {
  return { EpochInfo: undefined };
}

export const QueryGetHistoryEpochResponse = {
  encode(message: QueryGetHistoryEpochResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.EpochInfo !== undefined) {
      EpochInfo.encode(message.EpochInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetHistoryEpochResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetHistoryEpochResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.EpochInfo = EpochInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetHistoryEpochResponse {
    return { EpochInfo: isSet(object.EpochInfo) ? EpochInfo.fromJSON(object.EpochInfo) : undefined };
  },

  toJSON(message: QueryGetHistoryEpochResponse): unknown {
    const obj: any = {};
    if (message.EpochInfo !== undefined) {
      obj.EpochInfo = EpochInfo.toJSON(message.EpochInfo);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetHistoryEpochResponse>, I>>(base?: I): QueryGetHistoryEpochResponse {
    return QueryGetHistoryEpochResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetHistoryEpochResponse>, I>>(object: I): QueryGetHistoryEpochResponse {
    const message = createBaseQueryGetHistoryEpochResponse();
    message.EpochInfo = (object.EpochInfo !== undefined && object.EpochInfo !== null)
      ? EpochInfo.fromPartial(object.EpochInfo)
      : undefined;
    return message;
  },
};

function createBaseQueryGetAllHistoryEpochRequest(): QueryGetAllHistoryEpochRequest {
  return { pagination: undefined };
}

export const QueryGetAllHistoryEpochRequest = {
  encode(message: QueryGetAllHistoryEpochRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllHistoryEpochRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAllHistoryEpochRequest();
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

  fromJSON(object: any): QueryGetAllHistoryEpochRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryGetAllHistoryEpochRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetAllHistoryEpochRequest>, I>>(base?: I): QueryGetAllHistoryEpochRequest {
    return QueryGetAllHistoryEpochRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetAllHistoryEpochRequest>, I>>(
    object: I,
  ): QueryGetAllHistoryEpochRequest {
    const message = createBaseQueryGetAllHistoryEpochRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetAllHistoryEpochResponse(): QueryGetAllHistoryEpochResponse {
  return { EpochInfos: [], pagination: undefined };
}

export const QueryGetAllHistoryEpochResponse = {
  encode(message: QueryGetAllHistoryEpochResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.EpochInfos) {
      EpochInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllHistoryEpochResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAllHistoryEpochResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.EpochInfos.push(EpochInfo.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryGetAllHistoryEpochResponse {
    return {
      EpochInfos: Array.isArray(object?.EpochInfos) ? object.EpochInfos.map((e: any) => EpochInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryGetAllHistoryEpochResponse): unknown {
    const obj: any = {};
    if (message.EpochInfos?.length) {
      obj.EpochInfos = message.EpochInfos.map((e) => EpochInfo.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetAllHistoryEpochResponse>, I>>(base?: I): QueryGetAllHistoryEpochResponse {
    return QueryGetAllHistoryEpochResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetAllHistoryEpochResponse>, I>>(
    object: I,
  ): QueryGetAllHistoryEpochResponse {
    const message = createBaseQueryGetAllHistoryEpochResponse();
    message.EpochInfos = object.EpochInfos?.map((e) => EpochInfo.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
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

function createBaseQueryGetManagerWRWorkloadRequest(): QueryGetManagerWRWorkloadRequest {
  return { epoch: 0, managerAccount: "" };
}

export const QueryGetManagerWRWorkloadRequest = {
  encode(message: QueryGetManagerWRWorkloadRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.epoch !== 0) {
      writer.uint32(8).uint64(message.epoch);
    }
    if (message.managerAccount !== "") {
      writer.uint32(18).string(message.managerAccount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetManagerWRWorkloadRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetManagerWRWorkloadRequest();
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

  fromJSON(object: any): QueryGetManagerWRWorkloadRequest {
    return {
      epoch: isSet(object.epoch) ? Number(object.epoch) : 0,
      managerAccount: isSet(object.managerAccount) ? String(object.managerAccount) : "",
    };
  },

  toJSON(message: QueryGetManagerWRWorkloadRequest): unknown {
    const obj: any = {};
    if (message.epoch !== 0) {
      obj.epoch = Math.round(message.epoch);
    }
    if (message.managerAccount !== "") {
      obj.managerAccount = message.managerAccount;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetManagerWRWorkloadRequest>, I>>(
    base?: I,
  ): QueryGetManagerWRWorkloadRequest {
    return QueryGetManagerWRWorkloadRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetManagerWRWorkloadRequest>, I>>(
    object: I,
  ): QueryGetManagerWRWorkloadRequest {
    const message = createBaseQueryGetManagerWRWorkloadRequest();
    message.epoch = object.epoch ?? 0;
    message.managerAccount = object.managerAccount ?? "";
    return message;
  },
};

function createBaseQueryGetManagerWRWorkloadResponse(): QueryGetManagerWRWorkloadResponse {
  return { ManagerWRWorkload: undefined };
}

export const QueryGetManagerWRWorkloadResponse = {
  encode(message: QueryGetManagerWRWorkloadResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ManagerWRWorkload !== undefined) {
      ManagerWRWorkload.encode(message.ManagerWRWorkload, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetManagerWRWorkloadResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetManagerWRWorkloadResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ManagerWRWorkload = ManagerWRWorkload.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetManagerWRWorkloadResponse {
    return {
      ManagerWRWorkload: isSet(object.ManagerWRWorkload)
        ? ManagerWRWorkload.fromJSON(object.ManagerWRWorkload)
        : undefined,
    };
  },

  toJSON(message: QueryGetManagerWRWorkloadResponse): unknown {
    const obj: any = {};
    if (message.ManagerWRWorkload !== undefined) {
      obj.ManagerWRWorkload = ManagerWRWorkload.toJSON(message.ManagerWRWorkload);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetManagerWRWorkloadResponse>, I>>(
    base?: I,
  ): QueryGetManagerWRWorkloadResponse {
    return QueryGetManagerWRWorkloadResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetManagerWRWorkloadResponse>, I>>(
    object: I,
  ): QueryGetManagerWRWorkloadResponse {
    const message = createBaseQueryGetManagerWRWorkloadResponse();
    message.ManagerWRWorkload = (object.ManagerWRWorkload !== undefined && object.ManagerWRWorkload !== null)
      ? ManagerWRWorkload.fromPartial(object.ManagerWRWorkload)
      : undefined;
    return message;
  },
};

function createBaseQueryGetAllManagerWRWorkloadByEpochRequest(): QueryGetAllManagerWRWorkloadByEpochRequest {
  return { epoch: 0, pagination: undefined };
}

export const QueryGetAllManagerWRWorkloadByEpochRequest = {
  encode(message: QueryGetAllManagerWRWorkloadByEpochRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.epoch !== 0) {
      writer.uint32(8).uint64(message.epoch);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllManagerWRWorkloadByEpochRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAllManagerWRWorkloadByEpochRequest();
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

  fromJSON(object: any): QueryGetAllManagerWRWorkloadByEpochRequest {
    return {
      epoch: isSet(object.epoch) ? Number(object.epoch) : 0,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryGetAllManagerWRWorkloadByEpochRequest): unknown {
    const obj: any = {};
    if (message.epoch !== 0) {
      obj.epoch = Math.round(message.epoch);
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetAllManagerWRWorkloadByEpochRequest>, I>>(
    base?: I,
  ): QueryGetAllManagerWRWorkloadByEpochRequest {
    return QueryGetAllManagerWRWorkloadByEpochRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetAllManagerWRWorkloadByEpochRequest>, I>>(
    object: I,
  ): QueryGetAllManagerWRWorkloadByEpochRequest {
    const message = createBaseQueryGetAllManagerWRWorkloadByEpochRequest();
    message.epoch = object.epoch ?? 0;
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetAllManagerWRWorkloadByEpochResponse(): QueryGetAllManagerWRWorkloadByEpochResponse {
  return { ManagerWRWorkloads: [], pagination: undefined };
}

export const QueryGetAllManagerWRWorkloadByEpochResponse = {
  encode(message: QueryGetAllManagerWRWorkloadByEpochResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.ManagerWRWorkloads) {
      ManagerWRWorkload.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllManagerWRWorkloadByEpochResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAllManagerWRWorkloadByEpochResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ManagerWRWorkloads.push(ManagerWRWorkload.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryGetAllManagerWRWorkloadByEpochResponse {
    return {
      ManagerWRWorkloads: Array.isArray(object?.ManagerWRWorkloads)
        ? object.ManagerWRWorkloads.map((e: any) => ManagerWRWorkload.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryGetAllManagerWRWorkloadByEpochResponse): unknown {
    const obj: any = {};
    if (message.ManagerWRWorkloads?.length) {
      obj.ManagerWRWorkloads = message.ManagerWRWorkloads.map((e) => ManagerWRWorkload.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetAllManagerWRWorkloadByEpochResponse>, I>>(
    base?: I,
  ): QueryGetAllManagerWRWorkloadByEpochResponse {
    return QueryGetAllManagerWRWorkloadByEpochResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetAllManagerWRWorkloadByEpochResponse>, I>>(
    object: I,
  ): QueryGetAllManagerWRWorkloadByEpochResponse {
    const message = createBaseQueryGetAllManagerWRWorkloadByEpochResponse();
    message.ManagerWRWorkloads = object.ManagerWRWorkloads?.map((e) => ManagerWRWorkload.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetManagerRPWorkloadRequest(): QueryGetManagerRPWorkloadRequest {
  return { era: 0, managerAccount: "" };
}

export const QueryGetManagerRPWorkloadRequest = {
  encode(message: QueryGetManagerRPWorkloadRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.era !== 0) {
      writer.uint32(8).uint64(message.era);
    }
    if (message.managerAccount !== "") {
      writer.uint32(18).string(message.managerAccount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetManagerRPWorkloadRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetManagerRPWorkloadRequest();
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

  fromJSON(object: any): QueryGetManagerRPWorkloadRequest {
    return {
      era: isSet(object.era) ? Number(object.era) : 0,
      managerAccount: isSet(object.managerAccount) ? String(object.managerAccount) : "",
    };
  },

  toJSON(message: QueryGetManagerRPWorkloadRequest): unknown {
    const obj: any = {};
    if (message.era !== 0) {
      obj.era = Math.round(message.era);
    }
    if (message.managerAccount !== "") {
      obj.managerAccount = message.managerAccount;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetManagerRPWorkloadRequest>, I>>(
    base?: I,
  ): QueryGetManagerRPWorkloadRequest {
    return QueryGetManagerRPWorkloadRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetManagerRPWorkloadRequest>, I>>(
    object: I,
  ): QueryGetManagerRPWorkloadRequest {
    const message = createBaseQueryGetManagerRPWorkloadRequest();
    message.era = object.era ?? 0;
    message.managerAccount = object.managerAccount ?? "";
    return message;
  },
};

function createBaseQueryGetManagerRPWorkloadResponse(): QueryGetManagerRPWorkloadResponse {
  return { ManagerRPWorkload: undefined };
}

export const QueryGetManagerRPWorkloadResponse = {
  encode(message: QueryGetManagerRPWorkloadResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ManagerRPWorkload !== undefined) {
      ManagerRPWorkload.encode(message.ManagerRPWorkload, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetManagerRPWorkloadResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetManagerRPWorkloadResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ManagerRPWorkload = ManagerRPWorkload.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetManagerRPWorkloadResponse {
    return {
      ManagerRPWorkload: isSet(object.ManagerRPWorkload)
        ? ManagerRPWorkload.fromJSON(object.ManagerRPWorkload)
        : undefined,
    };
  },

  toJSON(message: QueryGetManagerRPWorkloadResponse): unknown {
    const obj: any = {};
    if (message.ManagerRPWorkload !== undefined) {
      obj.ManagerRPWorkload = ManagerRPWorkload.toJSON(message.ManagerRPWorkload);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetManagerRPWorkloadResponse>, I>>(
    base?: I,
  ): QueryGetManagerRPWorkloadResponse {
    return QueryGetManagerRPWorkloadResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetManagerRPWorkloadResponse>, I>>(
    object: I,
  ): QueryGetManagerRPWorkloadResponse {
    const message = createBaseQueryGetManagerRPWorkloadResponse();
    message.ManagerRPWorkload = (object.ManagerRPWorkload !== undefined && object.ManagerRPWorkload !== null)
      ? ManagerRPWorkload.fromPartial(object.ManagerRPWorkload)
      : undefined;
    return message;
  },
};

function createBaseQueryGetAllManagerRPWorkloadByEraRequest(): QueryGetAllManagerRPWorkloadByEraRequest {
  return { era: 0, pagination: undefined };
}

export const QueryGetAllManagerRPWorkloadByEraRequest = {
  encode(message: QueryGetAllManagerRPWorkloadByEraRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.era !== 0) {
      writer.uint32(8).uint64(message.era);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllManagerRPWorkloadByEraRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAllManagerRPWorkloadByEraRequest();
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

  fromJSON(object: any): QueryGetAllManagerRPWorkloadByEraRequest {
    return {
      era: isSet(object.era) ? Number(object.era) : 0,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryGetAllManagerRPWorkloadByEraRequest): unknown {
    const obj: any = {};
    if (message.era !== 0) {
      obj.era = Math.round(message.era);
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetAllManagerRPWorkloadByEraRequest>, I>>(
    base?: I,
  ): QueryGetAllManagerRPWorkloadByEraRequest {
    return QueryGetAllManagerRPWorkloadByEraRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetAllManagerRPWorkloadByEraRequest>, I>>(
    object: I,
  ): QueryGetAllManagerRPWorkloadByEraRequest {
    const message = createBaseQueryGetAllManagerRPWorkloadByEraRequest();
    message.era = object.era ?? 0;
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetAllManagerRPWorkloadByEraResponse(): QueryGetAllManagerRPWorkloadByEraResponse {
  return { ManagerRPWorkloads: [], pagination: undefined };
}

export const QueryGetAllManagerRPWorkloadByEraResponse = {
  encode(message: QueryGetAllManagerRPWorkloadByEraResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.ManagerRPWorkloads) {
      ManagerRPWorkload.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllManagerRPWorkloadByEraResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAllManagerRPWorkloadByEraResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ManagerRPWorkloads.push(ManagerRPWorkload.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryGetAllManagerRPWorkloadByEraResponse {
    return {
      ManagerRPWorkloads: Array.isArray(object?.ManagerRPWorkloads)
        ? object.ManagerRPWorkloads.map((e: any) => ManagerRPWorkload.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryGetAllManagerRPWorkloadByEraResponse): unknown {
    const obj: any = {};
    if (message.ManagerRPWorkloads?.length) {
      obj.ManagerRPWorkloads = message.ManagerRPWorkloads.map((e) => ManagerRPWorkload.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetAllManagerRPWorkloadByEraResponse>, I>>(
    base?: I,
  ): QueryGetAllManagerRPWorkloadByEraResponse {
    return QueryGetAllManagerRPWorkloadByEraResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetAllManagerRPWorkloadByEraResponse>, I>>(
    object: I,
  ): QueryGetAllManagerRPWorkloadByEraResponse {
    const message = createBaseQueryGetAllManagerRPWorkloadByEraResponse();
    message.ManagerRPWorkloads = object.ManagerRPWorkloads?.map((e) => ManagerRPWorkload.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetManagerCSWorkloadRequest(): QueryGetManagerCSWorkloadRequest {
  return { era: 0, managerAccount: "" };
}

export const QueryGetManagerCSWorkloadRequest = {
  encode(message: QueryGetManagerCSWorkloadRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.era !== 0) {
      writer.uint32(8).uint64(message.era);
    }
    if (message.managerAccount !== "") {
      writer.uint32(18).string(message.managerAccount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetManagerCSWorkloadRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetManagerCSWorkloadRequest();
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

  fromJSON(object: any): QueryGetManagerCSWorkloadRequest {
    return {
      era: isSet(object.era) ? Number(object.era) : 0,
      managerAccount: isSet(object.managerAccount) ? String(object.managerAccount) : "",
    };
  },

  toJSON(message: QueryGetManagerCSWorkloadRequest): unknown {
    const obj: any = {};
    if (message.era !== 0) {
      obj.era = Math.round(message.era);
    }
    if (message.managerAccount !== "") {
      obj.managerAccount = message.managerAccount;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetManagerCSWorkloadRequest>, I>>(
    base?: I,
  ): QueryGetManagerCSWorkloadRequest {
    return QueryGetManagerCSWorkloadRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetManagerCSWorkloadRequest>, I>>(
    object: I,
  ): QueryGetManagerCSWorkloadRequest {
    const message = createBaseQueryGetManagerCSWorkloadRequest();
    message.era = object.era ?? 0;
    message.managerAccount = object.managerAccount ?? "";
    return message;
  },
};

function createBaseQueryGetManagerCSWorkloadResponse(): QueryGetManagerCSWorkloadResponse {
  return { ManagerCSWorkload: undefined };
}

export const QueryGetManagerCSWorkloadResponse = {
  encode(message: QueryGetManagerCSWorkloadResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ManagerCSWorkload !== undefined) {
      ManagerCSWorkload.encode(message.ManagerCSWorkload, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetManagerCSWorkloadResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetManagerCSWorkloadResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ManagerCSWorkload = ManagerCSWorkload.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetManagerCSWorkloadResponse {
    return {
      ManagerCSWorkload: isSet(object.ManagerCSWorkload)
        ? ManagerCSWorkload.fromJSON(object.ManagerCSWorkload)
        : undefined,
    };
  },

  toJSON(message: QueryGetManagerCSWorkloadResponse): unknown {
    const obj: any = {};
    if (message.ManagerCSWorkload !== undefined) {
      obj.ManagerCSWorkload = ManagerCSWorkload.toJSON(message.ManagerCSWorkload);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetManagerCSWorkloadResponse>, I>>(
    base?: I,
  ): QueryGetManagerCSWorkloadResponse {
    return QueryGetManagerCSWorkloadResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetManagerCSWorkloadResponse>, I>>(
    object: I,
  ): QueryGetManagerCSWorkloadResponse {
    const message = createBaseQueryGetManagerCSWorkloadResponse();
    message.ManagerCSWorkload = (object.ManagerCSWorkload !== undefined && object.ManagerCSWorkload !== null)
      ? ManagerCSWorkload.fromPartial(object.ManagerCSWorkload)
      : undefined;
    return message;
  },
};

function createBaseQueryGetAllManagerCSWorkloadByEraRequest(): QueryGetAllManagerCSWorkloadByEraRequest {
  return { era: 0, pagination: undefined };
}

export const QueryGetAllManagerCSWorkloadByEraRequest = {
  encode(message: QueryGetAllManagerCSWorkloadByEraRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.era !== 0) {
      writer.uint32(8).uint64(message.era);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllManagerCSWorkloadByEraRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAllManagerCSWorkloadByEraRequest();
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

  fromJSON(object: any): QueryGetAllManagerCSWorkloadByEraRequest {
    return {
      era: isSet(object.era) ? Number(object.era) : 0,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryGetAllManagerCSWorkloadByEraRequest): unknown {
    const obj: any = {};
    if (message.era !== 0) {
      obj.era = Math.round(message.era);
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetAllManagerCSWorkloadByEraRequest>, I>>(
    base?: I,
  ): QueryGetAllManagerCSWorkloadByEraRequest {
    return QueryGetAllManagerCSWorkloadByEraRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetAllManagerCSWorkloadByEraRequest>, I>>(
    object: I,
  ): QueryGetAllManagerCSWorkloadByEraRequest {
    const message = createBaseQueryGetAllManagerCSWorkloadByEraRequest();
    message.era = object.era ?? 0;
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetAllManagerCSWorkloadByEraResponse(): QueryGetAllManagerCSWorkloadByEraResponse {
  return { ManagerCSWorkloads: [], pagination: undefined };
}

export const QueryGetAllManagerCSWorkloadByEraResponse = {
  encode(message: QueryGetAllManagerCSWorkloadByEraResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.ManagerCSWorkloads) {
      ManagerCSWorkload.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllManagerCSWorkloadByEraResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAllManagerCSWorkloadByEraResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ManagerCSWorkloads.push(ManagerCSWorkload.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryGetAllManagerCSWorkloadByEraResponse {
    return {
      ManagerCSWorkloads: Array.isArray(object?.ManagerCSWorkloads)
        ? object.ManagerCSWorkloads.map((e: any) => ManagerCSWorkload.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryGetAllManagerCSWorkloadByEraResponse): unknown {
    const obj: any = {};
    if (message.ManagerCSWorkloads?.length) {
      obj.ManagerCSWorkloads = message.ManagerCSWorkloads.map((e) => ManagerCSWorkload.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetAllManagerCSWorkloadByEraResponse>, I>>(
    base?: I,
  ): QueryGetAllManagerCSWorkloadByEraResponse {
    return QueryGetAllManagerCSWorkloadByEraResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetAllManagerCSWorkloadByEraResponse>, I>>(
    object: I,
  ): QueryGetAllManagerCSWorkloadByEraResponse {
    const message = createBaseQueryGetAllManagerCSWorkloadByEraResponse();
    message.ManagerCSWorkloads = object.ManagerCSWorkloads?.map((e) => ManagerCSWorkload.fromPartial(e)) || [];
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

function createBaseQueryGetEraLengthRequest(): QueryGetEraLengthRequest {
  return {};
}

export const QueryGetEraLengthRequest = {
  encode(_: QueryGetEraLengthRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetEraLengthRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetEraLengthRequest();
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

  fromJSON(_: any): QueryGetEraLengthRequest {
    return {};
  },

  toJSON(_: QueryGetEraLengthRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetEraLengthRequest>, I>>(base?: I): QueryGetEraLengthRequest {
    return QueryGetEraLengthRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetEraLengthRequest>, I>>(_: I): QueryGetEraLengthRequest {
    const message = createBaseQueryGetEraLengthRequest();
    return message;
  },
};

function createBaseQueryGetEraLengthResponse(): QueryGetEraLengthResponse {
  return { eraLength: 0 };
}

export const QueryGetEraLengthResponse = {
  encode(message: QueryGetEraLengthResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eraLength !== 0) {
      writer.uint32(8).uint64(message.eraLength);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetEraLengthResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetEraLengthResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.eraLength = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetEraLengthResponse {
    return { eraLength: isSet(object.eraLength) ? Number(object.eraLength) : 0 };
  },

  toJSON(message: QueryGetEraLengthResponse): unknown {
    const obj: any = {};
    if (message.eraLength !== 0) {
      obj.eraLength = Math.round(message.eraLength);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetEraLengthResponse>, I>>(base?: I): QueryGetEraLengthResponse {
    return QueryGetEraLengthResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetEraLengthResponse>, I>>(object: I): QueryGetEraLengthResponse {
    const message = createBaseQueryGetEraLengthResponse();
    message.eraLength = object.eraLength ?? 0;
    return message;
  },
};

function createBaseQueryGetCurrentEraRequest(): QueryGetCurrentEraRequest {
  return {};
}

export const QueryGetCurrentEraRequest = {
  encode(_: QueryGetCurrentEraRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetCurrentEraRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetCurrentEraRequest();
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

  fromJSON(_: any): QueryGetCurrentEraRequest {
    return {};
  },

  toJSON(_: QueryGetCurrentEraRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetCurrentEraRequest>, I>>(base?: I): QueryGetCurrentEraRequest {
    return QueryGetCurrentEraRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetCurrentEraRequest>, I>>(_: I): QueryGetCurrentEraRequest {
    const message = createBaseQueryGetCurrentEraRequest();
    return message;
  },
};

function createBaseQueryGetCurrentEraResponse(): QueryGetCurrentEraResponse {
  return { EraInfo: undefined };
}

export const QueryGetCurrentEraResponse = {
  encode(message: QueryGetCurrentEraResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.EraInfo !== undefined) {
      EraInfo.encode(message.EraInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetCurrentEraResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetCurrentEraResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.EraInfo = EraInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetCurrentEraResponse {
    return { EraInfo: isSet(object.EraInfo) ? EraInfo.fromJSON(object.EraInfo) : undefined };
  },

  toJSON(message: QueryGetCurrentEraResponse): unknown {
    const obj: any = {};
    if (message.EraInfo !== undefined) {
      obj.EraInfo = EraInfo.toJSON(message.EraInfo);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetCurrentEraResponse>, I>>(base?: I): QueryGetCurrentEraResponse {
    return QueryGetCurrentEraResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetCurrentEraResponse>, I>>(object: I): QueryGetCurrentEraResponse {
    const message = createBaseQueryGetCurrentEraResponse();
    message.EraInfo = (object.EraInfo !== undefined && object.EraInfo !== null)
      ? EraInfo.fromPartial(object.EraInfo)
      : undefined;
    return message;
  },
};

function createBaseQueryGetPendingNextEraRequest(): QueryGetPendingNextEraRequest {
  return {};
}

export const QueryGetPendingNextEraRequest = {
  encode(_: QueryGetPendingNextEraRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPendingNextEraRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPendingNextEraRequest();
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

  fromJSON(_: any): QueryGetPendingNextEraRequest {
    return {};
  },

  toJSON(_: QueryGetPendingNextEraRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetPendingNextEraRequest>, I>>(base?: I): QueryGetPendingNextEraRequest {
    return QueryGetPendingNextEraRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetPendingNextEraRequest>, I>>(_: I): QueryGetPendingNextEraRequest {
    const message = createBaseQueryGetPendingNextEraRequest();
    return message;
  },
};

function createBaseQueryGetPendingNextEraResponse(): QueryGetPendingNextEraResponse {
  return { EraInfo: undefined };
}

export const QueryGetPendingNextEraResponse = {
  encode(message: QueryGetPendingNextEraResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.EraInfo !== undefined) {
      EraInfo.encode(message.EraInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPendingNextEraResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPendingNextEraResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.EraInfo = EraInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetPendingNextEraResponse {
    return { EraInfo: isSet(object.EraInfo) ? EraInfo.fromJSON(object.EraInfo) : undefined };
  },

  toJSON(message: QueryGetPendingNextEraResponse): unknown {
    const obj: any = {};
    if (message.EraInfo !== undefined) {
      obj.EraInfo = EraInfo.toJSON(message.EraInfo);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetPendingNextEraResponse>, I>>(base?: I): QueryGetPendingNextEraResponse {
    return QueryGetPendingNextEraResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetPendingNextEraResponse>, I>>(
    object: I,
  ): QueryGetPendingNextEraResponse {
    const message = createBaseQueryGetPendingNextEraResponse();
    message.EraInfo = (object.EraInfo !== undefined && object.EraInfo !== null)
      ? EraInfo.fromPartial(object.EraInfo)
      : undefined;
    return message;
  },
};

function createBaseQueryGetHistoryEraRequest(): QueryGetHistoryEraRequest {
  return { eraNumber: 0 };
}

export const QueryGetHistoryEraRequest = {
  encode(message: QueryGetHistoryEraRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eraNumber !== 0) {
      writer.uint32(8).uint64(message.eraNumber);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetHistoryEraRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetHistoryEraRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.eraNumber = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetHistoryEraRequest {
    return { eraNumber: isSet(object.eraNumber) ? Number(object.eraNumber) : 0 };
  },

  toJSON(message: QueryGetHistoryEraRequest): unknown {
    const obj: any = {};
    if (message.eraNumber !== 0) {
      obj.eraNumber = Math.round(message.eraNumber);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetHistoryEraRequest>, I>>(base?: I): QueryGetHistoryEraRequest {
    return QueryGetHistoryEraRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetHistoryEraRequest>, I>>(object: I): QueryGetHistoryEraRequest {
    const message = createBaseQueryGetHistoryEraRequest();
    message.eraNumber = object.eraNumber ?? 0;
    return message;
  },
};

function createBaseQueryGetHistoryEraResponse(): QueryGetHistoryEraResponse {
  return { EraInfo: undefined };
}

export const QueryGetHistoryEraResponse = {
  encode(message: QueryGetHistoryEraResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.EraInfo !== undefined) {
      EraInfo.encode(message.EraInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetHistoryEraResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetHistoryEraResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.EraInfo = EraInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetHistoryEraResponse {
    return { EraInfo: isSet(object.EraInfo) ? EraInfo.fromJSON(object.EraInfo) : undefined };
  },

  toJSON(message: QueryGetHistoryEraResponse): unknown {
    const obj: any = {};
    if (message.EraInfo !== undefined) {
      obj.EraInfo = EraInfo.toJSON(message.EraInfo);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetHistoryEraResponse>, I>>(base?: I): QueryGetHistoryEraResponse {
    return QueryGetHistoryEraResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetHistoryEraResponse>, I>>(object: I): QueryGetHistoryEraResponse {
    const message = createBaseQueryGetHistoryEraResponse();
    message.EraInfo = (object.EraInfo !== undefined && object.EraInfo !== null)
      ? EraInfo.fromPartial(object.EraInfo)
      : undefined;
    return message;
  },
};

function createBaseQueryGetAllHistoryEraRequest(): QueryGetAllHistoryEraRequest {
  return { pagination: undefined };
}

export const QueryGetAllHistoryEraRequest = {
  encode(message: QueryGetAllHistoryEraRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllHistoryEraRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAllHistoryEraRequest();
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

  fromJSON(object: any): QueryGetAllHistoryEraRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryGetAllHistoryEraRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetAllHistoryEraRequest>, I>>(base?: I): QueryGetAllHistoryEraRequest {
    return QueryGetAllHistoryEraRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetAllHistoryEraRequest>, I>>(object: I): QueryGetAllHistoryEraRequest {
    const message = createBaseQueryGetAllHistoryEraRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetAllHistoryEraResponse(): QueryGetAllHistoryEraResponse {
  return { EraInfos: [], pagination: undefined };
}

export const QueryGetAllHistoryEraResponse = {
  encode(message: QueryGetAllHistoryEraResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.EraInfos) {
      EraInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllHistoryEraResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAllHistoryEraResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.EraInfos.push(EraInfo.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryGetAllHistoryEraResponse {
    return {
      EraInfos: Array.isArray(object?.EraInfos) ? object.EraInfos.map((e: any) => EraInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryGetAllHistoryEraResponse): unknown {
    const obj: any = {};
    if (message.EraInfos?.length) {
      obj.EraInfos = message.EraInfos.map((e) => EraInfo.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetAllHistoryEraResponse>, I>>(base?: I): QueryGetAllHistoryEraResponse {
    return QueryGetAllHistoryEraResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetAllHistoryEraResponse>, I>>(
    object: I,
  ): QueryGetAllHistoryEraResponse {
    const message = createBaseQueryGetAllHistoryEraResponse();
    message.EraInfos = object.EraInfos?.map((e) => EraInfo.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetReputationPointChangeDataRequest(): QueryGetReputationPointChangeDataRequest {
  return { era: 0, nodeID: "" };
}

export const QueryGetReputationPointChangeDataRequest = {
  encode(message: QueryGetReputationPointChangeDataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.era !== 0) {
      writer.uint32(8).uint64(message.era);
    }
    if (message.nodeID !== "") {
      writer.uint32(18).string(message.nodeID);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetReputationPointChangeDataRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetReputationPointChangeDataRequest();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetReputationPointChangeDataRequest {
    return {
      era: isSet(object.era) ? Number(object.era) : 0,
      nodeID: isSet(object.nodeID) ? String(object.nodeID) : "",
    };
  },

  toJSON(message: QueryGetReputationPointChangeDataRequest): unknown {
    const obj: any = {};
    if (message.era !== 0) {
      obj.era = Math.round(message.era);
    }
    if (message.nodeID !== "") {
      obj.nodeID = message.nodeID;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetReputationPointChangeDataRequest>, I>>(
    base?: I,
  ): QueryGetReputationPointChangeDataRequest {
    return QueryGetReputationPointChangeDataRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetReputationPointChangeDataRequest>, I>>(
    object: I,
  ): QueryGetReputationPointChangeDataRequest {
    const message = createBaseQueryGetReputationPointChangeDataRequest();
    message.era = object.era ?? 0;
    message.nodeID = object.nodeID ?? "";
    return message;
  },
};

function createBaseQueryGetReputationPointChangeDataResponse(): QueryGetReputationPointChangeDataResponse {
  return { ReputationPointChangeData: undefined };
}

export const QueryGetReputationPointChangeDataResponse = {
  encode(message: QueryGetReputationPointChangeDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ReputationPointChangeData !== undefined) {
      ReputationPointChangeData.encode(message.ReputationPointChangeData, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetReputationPointChangeDataResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetReputationPointChangeDataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ReputationPointChangeData = ReputationPointChangeData.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetReputationPointChangeDataResponse {
    return {
      ReputationPointChangeData: isSet(object.ReputationPointChangeData)
        ? ReputationPointChangeData.fromJSON(object.ReputationPointChangeData)
        : undefined,
    };
  },

  toJSON(message: QueryGetReputationPointChangeDataResponse): unknown {
    const obj: any = {};
    if (message.ReputationPointChangeData !== undefined) {
      obj.ReputationPointChangeData = ReputationPointChangeData.toJSON(message.ReputationPointChangeData);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetReputationPointChangeDataResponse>, I>>(
    base?: I,
  ): QueryGetReputationPointChangeDataResponse {
    return QueryGetReputationPointChangeDataResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetReputationPointChangeDataResponse>, I>>(
    object: I,
  ): QueryGetReputationPointChangeDataResponse {
    const message = createBaseQueryGetReputationPointChangeDataResponse();
    message.ReputationPointChangeData =
      (object.ReputationPointChangeData !== undefined && object.ReputationPointChangeData !== null)
        ? ReputationPointChangeData.fromPartial(object.ReputationPointChangeData)
        : undefined;
    return message;
  },
};

function createBaseQueryGetAllReputationPointChangeDataByEraRequest(): QueryGetAllReputationPointChangeDataByEraRequest {
  return { era: 0, pagination: undefined };
}

export const QueryGetAllReputationPointChangeDataByEraRequest = {
  encode(
    message: QueryGetAllReputationPointChangeDataByEraRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.era !== 0) {
      writer.uint32(8).uint64(message.era);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllReputationPointChangeDataByEraRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAllReputationPointChangeDataByEraRequest();
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

  fromJSON(object: any): QueryGetAllReputationPointChangeDataByEraRequest {
    return {
      era: isSet(object.era) ? Number(object.era) : 0,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryGetAllReputationPointChangeDataByEraRequest): unknown {
    const obj: any = {};
    if (message.era !== 0) {
      obj.era = Math.round(message.era);
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetAllReputationPointChangeDataByEraRequest>, I>>(
    base?: I,
  ): QueryGetAllReputationPointChangeDataByEraRequest {
    return QueryGetAllReputationPointChangeDataByEraRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetAllReputationPointChangeDataByEraRequest>, I>>(
    object: I,
  ): QueryGetAllReputationPointChangeDataByEraRequest {
    const message = createBaseQueryGetAllReputationPointChangeDataByEraRequest();
    message.era = object.era ?? 0;
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetAllReputationPointChangeDataByEraResponse(): QueryGetAllReputationPointChangeDataByEraResponse {
  return { ReputationPointChangeDatas: [], pagination: undefined };
}

export const QueryGetAllReputationPointChangeDataByEraResponse = {
  encode(
    message: QueryGetAllReputationPointChangeDataByEraResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.ReputationPointChangeDatas) {
      ReputationPointChangeData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllReputationPointChangeDataByEraResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAllReputationPointChangeDataByEraResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ReputationPointChangeDatas.push(ReputationPointChangeData.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryGetAllReputationPointChangeDataByEraResponse {
    return {
      ReputationPointChangeDatas: Array.isArray(object?.ReputationPointChangeDatas)
        ? object.ReputationPointChangeDatas.map((e: any) => ReputationPointChangeData.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryGetAllReputationPointChangeDataByEraResponse): unknown {
    const obj: any = {};
    if (message.ReputationPointChangeDatas?.length) {
      obj.ReputationPointChangeDatas = message.ReputationPointChangeDatas.map((e) =>
        ReputationPointChangeData.toJSON(e)
      );
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetAllReputationPointChangeDataByEraResponse>, I>>(
    base?: I,
  ): QueryGetAllReputationPointChangeDataByEraResponse {
    return QueryGetAllReputationPointChangeDataByEraResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetAllReputationPointChangeDataByEraResponse>, I>>(
    object: I,
  ): QueryGetAllReputationPointChangeDataByEraResponse {
    const message = createBaseQueryGetAllReputationPointChangeDataByEraResponse();
    message.ReputationPointChangeDatas =
      object.ReputationPointChangeDatas?.map((e) => ReputationPointChangeData.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetReputationDeltaPointRequest(): QueryGetReputationDeltaPointRequest {
  return { era: 0, nodeID: "" };
}

export const QueryGetReputationDeltaPointRequest = {
  encode(message: QueryGetReputationDeltaPointRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.era !== 0) {
      writer.uint32(8).uint64(message.era);
    }
    if (message.nodeID !== "") {
      writer.uint32(18).string(message.nodeID);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetReputationDeltaPointRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetReputationDeltaPointRequest();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetReputationDeltaPointRequest {
    return {
      era: isSet(object.era) ? Number(object.era) : 0,
      nodeID: isSet(object.nodeID) ? String(object.nodeID) : "",
    };
  },

  toJSON(message: QueryGetReputationDeltaPointRequest): unknown {
    const obj: any = {};
    if (message.era !== 0) {
      obj.era = Math.round(message.era);
    }
    if (message.nodeID !== "") {
      obj.nodeID = message.nodeID;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetReputationDeltaPointRequest>, I>>(
    base?: I,
  ): QueryGetReputationDeltaPointRequest {
    return QueryGetReputationDeltaPointRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetReputationDeltaPointRequest>, I>>(
    object: I,
  ): QueryGetReputationDeltaPointRequest {
    const message = createBaseQueryGetReputationDeltaPointRequest();
    message.era = object.era ?? 0;
    message.nodeID = object.nodeID ?? "";
    return message;
  },
};

function createBaseQueryGetReputationDeltaPointResponse(): QueryGetReputationDeltaPointResponse {
  return { ReputationDeltaPoint: undefined };
}

export const QueryGetReputationDeltaPointResponse = {
  encode(message: QueryGetReputationDeltaPointResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ReputationDeltaPoint !== undefined) {
      ReputationDeltaPoint.encode(message.ReputationDeltaPoint, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetReputationDeltaPointResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetReputationDeltaPointResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ReputationDeltaPoint = ReputationDeltaPoint.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetReputationDeltaPointResponse {
    return {
      ReputationDeltaPoint: isSet(object.ReputationDeltaPoint)
        ? ReputationDeltaPoint.fromJSON(object.ReputationDeltaPoint)
        : undefined,
    };
  },

  toJSON(message: QueryGetReputationDeltaPointResponse): unknown {
    const obj: any = {};
    if (message.ReputationDeltaPoint !== undefined) {
      obj.ReputationDeltaPoint = ReputationDeltaPoint.toJSON(message.ReputationDeltaPoint);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetReputationDeltaPointResponse>, I>>(
    base?: I,
  ): QueryGetReputationDeltaPointResponse {
    return QueryGetReputationDeltaPointResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetReputationDeltaPointResponse>, I>>(
    object: I,
  ): QueryGetReputationDeltaPointResponse {
    const message = createBaseQueryGetReputationDeltaPointResponse();
    message.ReputationDeltaPoint = (object.ReputationDeltaPoint !== undefined && object.ReputationDeltaPoint !== null)
      ? ReputationDeltaPoint.fromPartial(object.ReputationDeltaPoint)
      : undefined;
    return message;
  },
};

function createBaseQueryGetAllReputationDeltaPointByEraRequest(): QueryGetAllReputationDeltaPointByEraRequest {
  return { era: 0, pagination: undefined };
}

export const QueryGetAllReputationDeltaPointByEraRequest = {
  encode(message: QueryGetAllReputationDeltaPointByEraRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.era !== 0) {
      writer.uint32(8).uint64(message.era);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllReputationDeltaPointByEraRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAllReputationDeltaPointByEraRequest();
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

  fromJSON(object: any): QueryGetAllReputationDeltaPointByEraRequest {
    return {
      era: isSet(object.era) ? Number(object.era) : 0,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryGetAllReputationDeltaPointByEraRequest): unknown {
    const obj: any = {};
    if (message.era !== 0) {
      obj.era = Math.round(message.era);
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetAllReputationDeltaPointByEraRequest>, I>>(
    base?: I,
  ): QueryGetAllReputationDeltaPointByEraRequest {
    return QueryGetAllReputationDeltaPointByEraRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetAllReputationDeltaPointByEraRequest>, I>>(
    object: I,
  ): QueryGetAllReputationDeltaPointByEraRequest {
    const message = createBaseQueryGetAllReputationDeltaPointByEraRequest();
    message.era = object.era ?? 0;
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetAllReputationDeltaPointByEraResponse(): QueryGetAllReputationDeltaPointByEraResponse {
  return { ReputationDeltaPoints: [], pagination: undefined };
}

export const QueryGetAllReputationDeltaPointByEraResponse = {
  encode(message: QueryGetAllReputationDeltaPointByEraResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.ReputationDeltaPoints) {
      ReputationDeltaPoint.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllReputationDeltaPointByEraResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAllReputationDeltaPointByEraResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ReputationDeltaPoints.push(ReputationDeltaPoint.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryGetAllReputationDeltaPointByEraResponse {
    return {
      ReputationDeltaPoints: Array.isArray(object?.ReputationDeltaPoints)
        ? object.ReputationDeltaPoints.map((e: any) => ReputationDeltaPoint.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryGetAllReputationDeltaPointByEraResponse): unknown {
    const obj: any = {};
    if (message.ReputationDeltaPoints?.length) {
      obj.ReputationDeltaPoints = message.ReputationDeltaPoints.map((e) => ReputationDeltaPoint.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetAllReputationDeltaPointByEraResponse>, I>>(
    base?: I,
  ): QueryGetAllReputationDeltaPointByEraResponse {
    return QueryGetAllReputationDeltaPointByEraResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetAllReputationDeltaPointByEraResponse>, I>>(
    object: I,
  ): QueryGetAllReputationDeltaPointByEraResponse {
    const message = createBaseQueryGetAllReputationDeltaPointByEraResponse();
    message.ReputationDeltaPoints = object.ReputationDeltaPoints?.map((e) => ReputationDeltaPoint.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetEraProcessDataRequest(): QueryGetEraProcessDataRequest {
  return { era: 0 };
}

export const QueryGetEraProcessDataRequest = {
  encode(message: QueryGetEraProcessDataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.era !== 0) {
      writer.uint32(8).uint64(message.era);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetEraProcessDataRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetEraProcessDataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.era = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetEraProcessDataRequest {
    return { era: isSet(object.era) ? Number(object.era) : 0 };
  },

  toJSON(message: QueryGetEraProcessDataRequest): unknown {
    const obj: any = {};
    if (message.era !== 0) {
      obj.era = Math.round(message.era);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetEraProcessDataRequest>, I>>(base?: I): QueryGetEraProcessDataRequest {
    return QueryGetEraProcessDataRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetEraProcessDataRequest>, I>>(
    object: I,
  ): QueryGetEraProcessDataRequest {
    const message = createBaseQueryGetEraProcessDataRequest();
    message.era = object.era ?? 0;
    return message;
  },
};

function createBaseQueryGetEraProcessDataResponse(): QueryGetEraProcessDataResponse {
  return { EraProcessData: undefined };
}

export const QueryGetEraProcessDataResponse = {
  encode(message: QueryGetEraProcessDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.EraProcessData !== undefined) {
      EraProcessData.encode(message.EraProcessData, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetEraProcessDataResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetEraProcessDataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.EraProcessData = EraProcessData.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetEraProcessDataResponse {
    return {
      EraProcessData: isSet(object.EraProcessData) ? EraProcessData.fromJSON(object.EraProcessData) : undefined,
    };
  },

  toJSON(message: QueryGetEraProcessDataResponse): unknown {
    const obj: any = {};
    if (message.EraProcessData !== undefined) {
      obj.EraProcessData = EraProcessData.toJSON(message.EraProcessData);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetEraProcessDataResponse>, I>>(base?: I): QueryGetEraProcessDataResponse {
    return QueryGetEraProcessDataResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetEraProcessDataResponse>, I>>(
    object: I,
  ): QueryGetEraProcessDataResponse {
    const message = createBaseQueryGetEraProcessDataResponse();
    message.EraProcessData = (object.EraProcessData !== undefined && object.EraProcessData !== null)
      ? EraProcessData.fromPartial(object.EraProcessData)
      : undefined;
    return message;
  },
};

function createBaseQueryGetAllEraProcessDataRequest(): QueryGetAllEraProcessDataRequest {
  return { pagination: undefined };
}

export const QueryGetAllEraProcessDataRequest = {
  encode(message: QueryGetAllEraProcessDataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllEraProcessDataRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAllEraProcessDataRequest();
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

  fromJSON(object: any): QueryGetAllEraProcessDataRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryGetAllEraProcessDataRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetAllEraProcessDataRequest>, I>>(
    base?: I,
  ): QueryGetAllEraProcessDataRequest {
    return QueryGetAllEraProcessDataRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetAllEraProcessDataRequest>, I>>(
    object: I,
  ): QueryGetAllEraProcessDataRequest {
    const message = createBaseQueryGetAllEraProcessDataRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetAllEraProcessDataResponse(): QueryGetAllEraProcessDataResponse {
  return { EraProcessDatas: [], pagination: undefined };
}

export const QueryGetAllEraProcessDataResponse = {
  encode(message: QueryGetAllEraProcessDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.EraProcessDatas) {
      EraProcessData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllEraProcessDataResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAllEraProcessDataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.EraProcessDatas.push(EraProcessData.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryGetAllEraProcessDataResponse {
    return {
      EraProcessDatas: Array.isArray(object?.EraProcessDatas)
        ? object.EraProcessDatas.map((e: any) => EraProcessData.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryGetAllEraProcessDataResponse): unknown {
    const obj: any = {};
    if (message.EraProcessDatas?.length) {
      obj.EraProcessDatas = message.EraProcessDatas.map((e) => EraProcessData.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetAllEraProcessDataResponse>, I>>(
    base?: I,
  ): QueryGetAllEraProcessDataResponse {
    return QueryGetAllEraProcessDataResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetAllEraProcessDataResponse>, I>>(
    object: I,
  ): QueryGetAllEraProcessDataResponse {
    const message = createBaseQueryGetAllEraProcessDataResponse();
    message.EraProcessDatas = object.EraProcessDatas?.map((e) => EraProcessData.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetCheatStatusCRDataRequest(): QueryGetCheatStatusCRDataRequest {
  return { era: 0, nodeID: "" };
}

export const QueryGetCheatStatusCRDataRequest = {
  encode(message: QueryGetCheatStatusCRDataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.era !== 0) {
      writer.uint32(8).uint64(message.era);
    }
    if (message.nodeID !== "") {
      writer.uint32(18).string(message.nodeID);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetCheatStatusCRDataRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetCheatStatusCRDataRequest();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetCheatStatusCRDataRequest {
    return {
      era: isSet(object.era) ? Number(object.era) : 0,
      nodeID: isSet(object.nodeID) ? String(object.nodeID) : "",
    };
  },

  toJSON(message: QueryGetCheatStatusCRDataRequest): unknown {
    const obj: any = {};
    if (message.era !== 0) {
      obj.era = Math.round(message.era);
    }
    if (message.nodeID !== "") {
      obj.nodeID = message.nodeID;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetCheatStatusCRDataRequest>, I>>(
    base?: I,
  ): QueryGetCheatStatusCRDataRequest {
    return QueryGetCheatStatusCRDataRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetCheatStatusCRDataRequest>, I>>(
    object: I,
  ): QueryGetCheatStatusCRDataRequest {
    const message = createBaseQueryGetCheatStatusCRDataRequest();
    message.era = object.era ?? 0;
    message.nodeID = object.nodeID ?? "";
    return message;
  },
};

function createBaseQueryGetCheatStatusCRDataResponse(): QueryGetCheatStatusCRDataResponse {
  return { CheatStatusCRData: undefined };
}

export const QueryGetCheatStatusCRDataResponse = {
  encode(message: QueryGetCheatStatusCRDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.CheatStatusCRData !== undefined) {
      CheatStatusCRData.encode(message.CheatStatusCRData, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetCheatStatusCRDataResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetCheatStatusCRDataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.CheatStatusCRData = CheatStatusCRData.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetCheatStatusCRDataResponse {
    return {
      CheatStatusCRData: isSet(object.CheatStatusCRData)
        ? CheatStatusCRData.fromJSON(object.CheatStatusCRData)
        : undefined,
    };
  },

  toJSON(message: QueryGetCheatStatusCRDataResponse): unknown {
    const obj: any = {};
    if (message.CheatStatusCRData !== undefined) {
      obj.CheatStatusCRData = CheatStatusCRData.toJSON(message.CheatStatusCRData);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetCheatStatusCRDataResponse>, I>>(
    base?: I,
  ): QueryGetCheatStatusCRDataResponse {
    return QueryGetCheatStatusCRDataResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetCheatStatusCRDataResponse>, I>>(
    object: I,
  ): QueryGetCheatStatusCRDataResponse {
    const message = createBaseQueryGetCheatStatusCRDataResponse();
    message.CheatStatusCRData = (object.CheatStatusCRData !== undefined && object.CheatStatusCRData !== null)
      ? CheatStatusCRData.fromPartial(object.CheatStatusCRData)
      : undefined;
    return message;
  },
};

function createBaseQueryGetAllCheatStatusCRDataByEraRequest(): QueryGetAllCheatStatusCRDataByEraRequest {
  return { era: 0, pagination: undefined };
}

export const QueryGetAllCheatStatusCRDataByEraRequest = {
  encode(message: QueryGetAllCheatStatusCRDataByEraRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.era !== 0) {
      writer.uint32(8).uint64(message.era);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllCheatStatusCRDataByEraRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAllCheatStatusCRDataByEraRequest();
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

  fromJSON(object: any): QueryGetAllCheatStatusCRDataByEraRequest {
    return {
      era: isSet(object.era) ? Number(object.era) : 0,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryGetAllCheatStatusCRDataByEraRequest): unknown {
    const obj: any = {};
    if (message.era !== 0) {
      obj.era = Math.round(message.era);
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetAllCheatStatusCRDataByEraRequest>, I>>(
    base?: I,
  ): QueryGetAllCheatStatusCRDataByEraRequest {
    return QueryGetAllCheatStatusCRDataByEraRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetAllCheatStatusCRDataByEraRequest>, I>>(
    object: I,
  ): QueryGetAllCheatStatusCRDataByEraRequest {
    const message = createBaseQueryGetAllCheatStatusCRDataByEraRequest();
    message.era = object.era ?? 0;
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetAllCheatStatusCRDataByEraResponse(): QueryGetAllCheatStatusCRDataByEraResponse {
  return { CheatStatusCRDatas: [], pagination: undefined };
}

export const QueryGetAllCheatStatusCRDataByEraResponse = {
  encode(message: QueryGetAllCheatStatusCRDataByEraResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.CheatStatusCRDatas) {
      CheatStatusCRData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllCheatStatusCRDataByEraResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAllCheatStatusCRDataByEraResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.CheatStatusCRDatas.push(CheatStatusCRData.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryGetAllCheatStatusCRDataByEraResponse {
    return {
      CheatStatusCRDatas: Array.isArray(object?.CheatStatusCRDatas)
        ? object.CheatStatusCRDatas.map((e: any) => CheatStatusCRData.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryGetAllCheatStatusCRDataByEraResponse): unknown {
    const obj: any = {};
    if (message.CheatStatusCRDatas?.length) {
      obj.CheatStatusCRDatas = message.CheatStatusCRDatas.map((e) => CheatStatusCRData.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetAllCheatStatusCRDataByEraResponse>, I>>(
    base?: I,
  ): QueryGetAllCheatStatusCRDataByEraResponse {
    return QueryGetAllCheatStatusCRDataByEraResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetAllCheatStatusCRDataByEraResponse>, I>>(
    object: I,
  ): QueryGetAllCheatStatusCRDataByEraResponse {
    const message = createBaseQueryGetAllCheatStatusCRDataByEraResponse();
    message.CheatStatusCRDatas = object.CheatStatusCRDatas?.map((e) => CheatStatusCRData.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetEraCheatStatusProcessDataRequest(): QueryGetEraCheatStatusProcessDataRequest {
  return { era: 0 };
}

export const QueryGetEraCheatStatusProcessDataRequest = {
  encode(message: QueryGetEraCheatStatusProcessDataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.era !== 0) {
      writer.uint32(8).uint64(message.era);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetEraCheatStatusProcessDataRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetEraCheatStatusProcessDataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.era = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetEraCheatStatusProcessDataRequest {
    return { era: isSet(object.era) ? Number(object.era) : 0 };
  },

  toJSON(message: QueryGetEraCheatStatusProcessDataRequest): unknown {
    const obj: any = {};
    if (message.era !== 0) {
      obj.era = Math.round(message.era);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetEraCheatStatusProcessDataRequest>, I>>(
    base?: I,
  ): QueryGetEraCheatStatusProcessDataRequest {
    return QueryGetEraCheatStatusProcessDataRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetEraCheatStatusProcessDataRequest>, I>>(
    object: I,
  ): QueryGetEraCheatStatusProcessDataRequest {
    const message = createBaseQueryGetEraCheatStatusProcessDataRequest();
    message.era = object.era ?? 0;
    return message;
  },
};

function createBaseQueryGetEraCheatStatusProcessDataResponse(): QueryGetEraCheatStatusProcessDataResponse {
  return { EraCheatStatusProcessData: undefined };
}

export const QueryGetEraCheatStatusProcessDataResponse = {
  encode(message: QueryGetEraCheatStatusProcessDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.EraCheatStatusProcessData !== undefined) {
      EraCheatStatusProcessData.encode(message.EraCheatStatusProcessData, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetEraCheatStatusProcessDataResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetEraCheatStatusProcessDataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.EraCheatStatusProcessData = EraCheatStatusProcessData.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetEraCheatStatusProcessDataResponse {
    return {
      EraCheatStatusProcessData: isSet(object.EraCheatStatusProcessData)
        ? EraCheatStatusProcessData.fromJSON(object.EraCheatStatusProcessData)
        : undefined,
    };
  },

  toJSON(message: QueryGetEraCheatStatusProcessDataResponse): unknown {
    const obj: any = {};
    if (message.EraCheatStatusProcessData !== undefined) {
      obj.EraCheatStatusProcessData = EraCheatStatusProcessData.toJSON(message.EraCheatStatusProcessData);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetEraCheatStatusProcessDataResponse>, I>>(
    base?: I,
  ): QueryGetEraCheatStatusProcessDataResponse {
    return QueryGetEraCheatStatusProcessDataResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetEraCheatStatusProcessDataResponse>, I>>(
    object: I,
  ): QueryGetEraCheatStatusProcessDataResponse {
    const message = createBaseQueryGetEraCheatStatusProcessDataResponse();
    message.EraCheatStatusProcessData =
      (object.EraCheatStatusProcessData !== undefined && object.EraCheatStatusProcessData !== null)
        ? EraCheatStatusProcessData.fromPartial(object.EraCheatStatusProcessData)
        : undefined;
    return message;
  },
};

function createBaseQueryGetAllEraCheatStatusProcessDataRequest(): QueryGetAllEraCheatStatusProcessDataRequest {
  return { pagination: undefined };
}

export const QueryGetAllEraCheatStatusProcessDataRequest = {
  encode(message: QueryGetAllEraCheatStatusProcessDataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllEraCheatStatusProcessDataRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAllEraCheatStatusProcessDataRequest();
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

  fromJSON(object: any): QueryGetAllEraCheatStatusProcessDataRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryGetAllEraCheatStatusProcessDataRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetAllEraCheatStatusProcessDataRequest>, I>>(
    base?: I,
  ): QueryGetAllEraCheatStatusProcessDataRequest {
    return QueryGetAllEraCheatStatusProcessDataRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetAllEraCheatStatusProcessDataRequest>, I>>(
    object: I,
  ): QueryGetAllEraCheatStatusProcessDataRequest {
    const message = createBaseQueryGetAllEraCheatStatusProcessDataRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetAllEraCheatStatusProcessDataResponse(): QueryGetAllEraCheatStatusProcessDataResponse {
  return { EraCheatStatusProcessDatas: [], pagination: undefined };
}

export const QueryGetAllEraCheatStatusProcessDataResponse = {
  encode(message: QueryGetAllEraCheatStatusProcessDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.EraCheatStatusProcessDatas) {
      EraCheatStatusProcessData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllEraCheatStatusProcessDataResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAllEraCheatStatusProcessDataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.EraCheatStatusProcessDatas.push(EraCheatStatusProcessData.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryGetAllEraCheatStatusProcessDataResponse {
    return {
      EraCheatStatusProcessDatas: Array.isArray(object?.EraCheatStatusProcessDatas)
        ? object.EraCheatStatusProcessDatas.map((e: any) => EraCheatStatusProcessData.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryGetAllEraCheatStatusProcessDataResponse): unknown {
    const obj: any = {};
    if (message.EraCheatStatusProcessDatas?.length) {
      obj.EraCheatStatusProcessDatas = message.EraCheatStatusProcessDatas.map((e) =>
        EraCheatStatusProcessData.toJSON(e)
      );
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetAllEraCheatStatusProcessDataResponse>, I>>(
    base?: I,
  ): QueryGetAllEraCheatStatusProcessDataResponse {
    return QueryGetAllEraCheatStatusProcessDataResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetAllEraCheatStatusProcessDataResponse>, I>>(
    object: I,
  ): QueryGetAllEraCheatStatusProcessDataResponse {
    const message = createBaseQueryGetAllEraCheatStatusProcessDataResponse();
    message.EraCheatStatusProcessDatas =
      object.EraCheatStatusProcessDatas?.map((e) => EraCheatStatusProcessData.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Param(request: QueryParamRequest): Promise<QueryParamResponse>;
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries epoch */
  EpochLength(request: QueryGetEpochLengthRequest): Promise<QueryGetEpochLengthResponse>;
  CurrentEpoch(request: QueryGetCurrentEpochRequest): Promise<QueryGetCurrentEpochResponse>;
  PendingNextEpoch(request: QueryGetPendingNextEpochRequest): Promise<QueryGetPendingNextEpochResponse>;
  HistoryEpoch(request: QueryGetHistoryEpochRequest): Promise<QueryGetHistoryEpochResponse>;
  AllHistoryEpoch(request: QueryGetAllHistoryEpochRequest): Promise<QueryGetAllHistoryEpochResponse>;
  /** Queries a list of Node Workload items. */
  NodeWorkload(request: QueryGetNodeWorkloadRequest): Promise<QueryGetNodeWorkloadResponse>;
  AllNodeWorkloadByEpoch(
    request: QueryGetAllNodeWorkloadByEpochRequest,
  ): Promise<QueryGetAllNodeWorkloadByEpochResponse>;
  /** Queries a list of Manager Workload items. */
  ManagerWRWorkload(request: QueryGetManagerWRWorkloadRequest): Promise<QueryGetManagerWRWorkloadResponse>;
  AllManagerWRWorkloadByEpoch(
    request: QueryGetAllManagerWRWorkloadByEpochRequest,
  ): Promise<QueryGetAllManagerWRWorkloadByEpochResponse>;
  ManagerRPWorkload(request: QueryGetManagerRPWorkloadRequest): Promise<QueryGetManagerRPWorkloadResponse>;
  AllManagerRPWorkloadByEra(
    request: QueryGetAllManagerRPWorkloadByEraRequest,
  ): Promise<QueryGetAllManagerRPWorkloadByEraResponse>;
  ManagerCSWorkload(request: QueryGetManagerCSWorkloadRequest): Promise<QueryGetManagerCSWorkloadResponse>;
  AllManagerCSWorkloadByEra(
    request: QueryGetAllManagerCSWorkloadByEraRequest,
  ): Promise<QueryGetAllManagerCSWorkloadByEraResponse>;
  /** Queries a list of Workreport items. */
  Workreport(request: QueryGetWorkreportRequest): Promise<QueryGetWorkreportResponse>;
  AllWorkreportByEpoch(request: QueryGetAllWorkreportByEpochRequest): Promise<QueryGetAllWorkreportByEpochResponse>;
  EpochProcessData(request: QueryGetEpochProcessDataRequest): Promise<QueryGetEpochProcessDataResponse>;
  AllEpochProcessData(request: QueryGetAllEpochProcessDataRequest): Promise<QueryGetAllEpochProcessDataResponse>;
  /** Queries a Superior */
  Superior(request: QueryGetSuperiorRequest): Promise<QueryGetSuperiorResponse>;
  /** Queries era */
  EraLength(request: QueryGetEraLengthRequest): Promise<QueryGetEraLengthResponse>;
  CurrentEra(request: QueryGetCurrentEraRequest): Promise<QueryGetCurrentEraResponse>;
  PendingNextEra(request: QueryGetPendingNextEraRequest): Promise<QueryGetPendingNextEraResponse>;
  HistoryEra(request: QueryGetHistoryEraRequest): Promise<QueryGetHistoryEraResponse>;
  AllHistoryEra(request: QueryGetAllHistoryEraRequest): Promise<QueryGetAllHistoryEraResponse>;
  /** Queries a list of ReputationPointChangeData items. */
  ReputationPointChangeData(
    request: QueryGetReputationPointChangeDataRequest,
  ): Promise<QueryGetReputationPointChangeDataResponse>;
  AllReputationPointChangeDataByEra(
    request: QueryGetAllReputationPointChangeDataByEraRequest,
  ): Promise<QueryGetAllReputationPointChangeDataByEraResponse>;
  /** Queries a list of ReputationPoint items. */
  ReputationDeltaPoint(request: QueryGetReputationDeltaPointRequest): Promise<QueryGetReputationDeltaPointResponse>;
  AllReputationDeltaPointByEra(
    request: QueryGetAllReputationDeltaPointByEraRequest,
  ): Promise<QueryGetAllReputationDeltaPointByEraResponse>;
  /** Queries a list of EraProcessData items. */
  EraProcessData(request: QueryGetEraProcessDataRequest): Promise<QueryGetEraProcessDataResponse>;
  AllEraProcessData(request: QueryGetAllEraProcessDataRequest): Promise<QueryGetAllEraProcessDataResponse>;
  /** Queries a list of CheatStatusPRData items. */
  CheatStatusCRData(request: QueryGetCheatStatusCRDataRequest): Promise<QueryGetCheatStatusCRDataResponse>;
  AllCheatStatusCRDataByEra(
    request: QueryGetAllCheatStatusCRDataByEraRequest,
  ): Promise<QueryGetAllCheatStatusCRDataByEraResponse>;
  /** Queries a list of EraCheatStatusProcessData items. */
  EraCheatStatusProcessData(
    request: QueryGetEraCheatStatusProcessDataRequest,
  ): Promise<QueryGetEraCheatStatusProcessDataResponse>;
  AllEraCheatStatusProcessData(
    request: QueryGetAllEraCheatStatusProcessDataRequest,
  ): Promise<QueryGetAllEraCheatStatusProcessDataResponse>;
}

export const QueryServiceName = "enreach.workload.Query";
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || QueryServiceName;
    this.rpc = rpc;
    this.Param = this.Param.bind(this);
    this.Params = this.Params.bind(this);
    this.EpochLength = this.EpochLength.bind(this);
    this.CurrentEpoch = this.CurrentEpoch.bind(this);
    this.PendingNextEpoch = this.PendingNextEpoch.bind(this);
    this.HistoryEpoch = this.HistoryEpoch.bind(this);
    this.AllHistoryEpoch = this.AllHistoryEpoch.bind(this);
    this.NodeWorkload = this.NodeWorkload.bind(this);
    this.AllNodeWorkloadByEpoch = this.AllNodeWorkloadByEpoch.bind(this);
    this.ManagerWRWorkload = this.ManagerWRWorkload.bind(this);
    this.AllManagerWRWorkloadByEpoch = this.AllManagerWRWorkloadByEpoch.bind(this);
    this.ManagerRPWorkload = this.ManagerRPWorkload.bind(this);
    this.AllManagerRPWorkloadByEra = this.AllManagerRPWorkloadByEra.bind(this);
    this.ManagerCSWorkload = this.ManagerCSWorkload.bind(this);
    this.AllManagerCSWorkloadByEra = this.AllManagerCSWorkloadByEra.bind(this);
    this.Workreport = this.Workreport.bind(this);
    this.AllWorkreportByEpoch = this.AllWorkreportByEpoch.bind(this);
    this.EpochProcessData = this.EpochProcessData.bind(this);
    this.AllEpochProcessData = this.AllEpochProcessData.bind(this);
    this.Superior = this.Superior.bind(this);
    this.EraLength = this.EraLength.bind(this);
    this.CurrentEra = this.CurrentEra.bind(this);
    this.PendingNextEra = this.PendingNextEra.bind(this);
    this.HistoryEra = this.HistoryEra.bind(this);
    this.AllHistoryEra = this.AllHistoryEra.bind(this);
    this.ReputationPointChangeData = this.ReputationPointChangeData.bind(this);
    this.AllReputationPointChangeDataByEra = this.AllReputationPointChangeDataByEra.bind(this);
    this.ReputationDeltaPoint = this.ReputationDeltaPoint.bind(this);
    this.AllReputationDeltaPointByEra = this.AllReputationDeltaPointByEra.bind(this);
    this.EraProcessData = this.EraProcessData.bind(this);
    this.AllEraProcessData = this.AllEraProcessData.bind(this);
    this.CheatStatusCRData = this.CheatStatusCRData.bind(this);
    this.AllCheatStatusCRDataByEra = this.AllCheatStatusCRDataByEra.bind(this);
    this.EraCheatStatusProcessData = this.EraCheatStatusProcessData.bind(this);
    this.AllEraCheatStatusProcessData = this.AllEraCheatStatusProcessData.bind(this);
  }
  Param(request: QueryParamRequest): Promise<QueryParamResponse> {
    const data = QueryParamRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Param", data);
    return promise.then((data) => QueryParamResponse.decode(_m0.Reader.create(data)));
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

  PendingNextEpoch(request: QueryGetPendingNextEpochRequest): Promise<QueryGetPendingNextEpochResponse> {
    const data = QueryGetPendingNextEpochRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "PendingNextEpoch", data);
    return promise.then((data) => QueryGetPendingNextEpochResponse.decode(_m0.Reader.create(data)));
  }

  HistoryEpoch(request: QueryGetHistoryEpochRequest): Promise<QueryGetHistoryEpochResponse> {
    const data = QueryGetHistoryEpochRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "HistoryEpoch", data);
    return promise.then((data) => QueryGetHistoryEpochResponse.decode(_m0.Reader.create(data)));
  }

  AllHistoryEpoch(request: QueryGetAllHistoryEpochRequest): Promise<QueryGetAllHistoryEpochResponse> {
    const data = QueryGetAllHistoryEpochRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AllHistoryEpoch", data);
    return promise.then((data) => QueryGetAllHistoryEpochResponse.decode(_m0.Reader.create(data)));
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

  ManagerWRWorkload(request: QueryGetManagerWRWorkloadRequest): Promise<QueryGetManagerWRWorkloadResponse> {
    const data = QueryGetManagerWRWorkloadRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ManagerWRWorkload", data);
    return promise.then((data) => QueryGetManagerWRWorkloadResponse.decode(_m0.Reader.create(data)));
  }

  AllManagerWRWorkloadByEpoch(
    request: QueryGetAllManagerWRWorkloadByEpochRequest,
  ): Promise<QueryGetAllManagerWRWorkloadByEpochResponse> {
    const data = QueryGetAllManagerWRWorkloadByEpochRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AllManagerWRWorkloadByEpoch", data);
    return promise.then((data) => QueryGetAllManagerWRWorkloadByEpochResponse.decode(_m0.Reader.create(data)));
  }

  ManagerRPWorkload(request: QueryGetManagerRPWorkloadRequest): Promise<QueryGetManagerRPWorkloadResponse> {
    const data = QueryGetManagerRPWorkloadRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ManagerRPWorkload", data);
    return promise.then((data) => QueryGetManagerRPWorkloadResponse.decode(_m0.Reader.create(data)));
  }

  AllManagerRPWorkloadByEra(
    request: QueryGetAllManagerRPWorkloadByEraRequest,
  ): Promise<QueryGetAllManagerRPWorkloadByEraResponse> {
    const data = QueryGetAllManagerRPWorkloadByEraRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AllManagerRPWorkloadByEra", data);
    return promise.then((data) => QueryGetAllManagerRPWorkloadByEraResponse.decode(_m0.Reader.create(data)));
  }

  ManagerCSWorkload(request: QueryGetManagerCSWorkloadRequest): Promise<QueryGetManagerCSWorkloadResponse> {
    const data = QueryGetManagerCSWorkloadRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ManagerCSWorkload", data);
    return promise.then((data) => QueryGetManagerCSWorkloadResponse.decode(_m0.Reader.create(data)));
  }

  AllManagerCSWorkloadByEra(
    request: QueryGetAllManagerCSWorkloadByEraRequest,
  ): Promise<QueryGetAllManagerCSWorkloadByEraResponse> {
    const data = QueryGetAllManagerCSWorkloadByEraRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AllManagerCSWorkloadByEra", data);
    return promise.then((data) => QueryGetAllManagerCSWorkloadByEraResponse.decode(_m0.Reader.create(data)));
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

  EraLength(request: QueryGetEraLengthRequest): Promise<QueryGetEraLengthResponse> {
    const data = QueryGetEraLengthRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "EraLength", data);
    return promise.then((data) => QueryGetEraLengthResponse.decode(_m0.Reader.create(data)));
  }

  CurrentEra(request: QueryGetCurrentEraRequest): Promise<QueryGetCurrentEraResponse> {
    const data = QueryGetCurrentEraRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CurrentEra", data);
    return promise.then((data) => QueryGetCurrentEraResponse.decode(_m0.Reader.create(data)));
  }

  PendingNextEra(request: QueryGetPendingNextEraRequest): Promise<QueryGetPendingNextEraResponse> {
    const data = QueryGetPendingNextEraRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "PendingNextEra", data);
    return promise.then((data) => QueryGetPendingNextEraResponse.decode(_m0.Reader.create(data)));
  }

  HistoryEra(request: QueryGetHistoryEraRequest): Promise<QueryGetHistoryEraResponse> {
    const data = QueryGetHistoryEraRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "HistoryEra", data);
    return promise.then((data) => QueryGetHistoryEraResponse.decode(_m0.Reader.create(data)));
  }

  AllHistoryEra(request: QueryGetAllHistoryEraRequest): Promise<QueryGetAllHistoryEraResponse> {
    const data = QueryGetAllHistoryEraRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AllHistoryEra", data);
    return promise.then((data) => QueryGetAllHistoryEraResponse.decode(_m0.Reader.create(data)));
  }

  ReputationPointChangeData(
    request: QueryGetReputationPointChangeDataRequest,
  ): Promise<QueryGetReputationPointChangeDataResponse> {
    const data = QueryGetReputationPointChangeDataRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ReputationPointChangeData", data);
    return promise.then((data) => QueryGetReputationPointChangeDataResponse.decode(_m0.Reader.create(data)));
  }

  AllReputationPointChangeDataByEra(
    request: QueryGetAllReputationPointChangeDataByEraRequest,
  ): Promise<QueryGetAllReputationPointChangeDataByEraResponse> {
    const data = QueryGetAllReputationPointChangeDataByEraRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AllReputationPointChangeDataByEra", data);
    return promise.then((data) => QueryGetAllReputationPointChangeDataByEraResponse.decode(_m0.Reader.create(data)));
  }

  ReputationDeltaPoint(request: QueryGetReputationDeltaPointRequest): Promise<QueryGetReputationDeltaPointResponse> {
    const data = QueryGetReputationDeltaPointRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ReputationDeltaPoint", data);
    return promise.then((data) => QueryGetReputationDeltaPointResponse.decode(_m0.Reader.create(data)));
  }

  AllReputationDeltaPointByEra(
    request: QueryGetAllReputationDeltaPointByEraRequest,
  ): Promise<QueryGetAllReputationDeltaPointByEraResponse> {
    const data = QueryGetAllReputationDeltaPointByEraRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AllReputationDeltaPointByEra", data);
    return promise.then((data) => QueryGetAllReputationDeltaPointByEraResponse.decode(_m0.Reader.create(data)));
  }

  EraProcessData(request: QueryGetEraProcessDataRequest): Promise<QueryGetEraProcessDataResponse> {
    const data = QueryGetEraProcessDataRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "EraProcessData", data);
    return promise.then((data) => QueryGetEraProcessDataResponse.decode(_m0.Reader.create(data)));
  }

  AllEraProcessData(request: QueryGetAllEraProcessDataRequest): Promise<QueryGetAllEraProcessDataResponse> {
    const data = QueryGetAllEraProcessDataRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AllEraProcessData", data);
    return promise.then((data) => QueryGetAllEraProcessDataResponse.decode(_m0.Reader.create(data)));
  }

  CheatStatusCRData(request: QueryGetCheatStatusCRDataRequest): Promise<QueryGetCheatStatusCRDataResponse> {
    const data = QueryGetCheatStatusCRDataRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CheatStatusCRData", data);
    return promise.then((data) => QueryGetCheatStatusCRDataResponse.decode(_m0.Reader.create(data)));
  }

  AllCheatStatusCRDataByEra(
    request: QueryGetAllCheatStatusCRDataByEraRequest,
  ): Promise<QueryGetAllCheatStatusCRDataByEraResponse> {
    const data = QueryGetAllCheatStatusCRDataByEraRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AllCheatStatusCRDataByEra", data);
    return promise.then((data) => QueryGetAllCheatStatusCRDataByEraResponse.decode(_m0.Reader.create(data)));
  }

  EraCheatStatusProcessData(
    request: QueryGetEraCheatStatusProcessDataRequest,
  ): Promise<QueryGetEraCheatStatusProcessDataResponse> {
    const data = QueryGetEraCheatStatusProcessDataRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "EraCheatStatusProcessData", data);
    return promise.then((data) => QueryGetEraCheatStatusProcessDataResponse.decode(_m0.Reader.create(data)));
  }

  AllEraCheatStatusProcessData(
    request: QueryGetAllEraCheatStatusProcessDataRequest,
  ): Promise<QueryGetAllEraCheatStatusProcessDataResponse> {
    const data = QueryGetAllEraCheatStatusProcessDataRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AllEraCheatStatusProcessData", data);
    return promise.then((data) => QueryGetAllEraCheatStatusProcessDataResponse.decode(_m0.Reader.create(data)));
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
