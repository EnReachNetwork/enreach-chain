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
export declare const protobufPackage = "enreach.workload";
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
export declare const QueryParamRequest: {
    encode(message: QueryParamRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamRequest;
    fromJSON(object: any): QueryParamRequest;
    toJSON(message: QueryParamRequest): unknown;
    create<I extends Exact<DeepPartial<QueryParamRequest>, I>>(base?: I): QueryParamRequest;
    fromPartial<I extends Exact<DeepPartial<QueryParamRequest>, I>>(object: I): QueryParamRequest;
};
export declare const QueryParamResponse: {
    encode(message: QueryParamResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamResponse;
    fromJSON(object: any): QueryParamResponse;
    toJSON(message: QueryParamResponse): unknown;
    create<I extends Exact<DeepPartial<QueryParamResponse>, I>>(base?: I): QueryParamResponse;
    fromPartial<I extends Exact<DeepPartial<QueryParamResponse>, I>>(object: I): QueryParamResponse;
};
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    create<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(base?: I): QueryParamsRequest;
    fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    create<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(base?: I): QueryParamsResponse;
    fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse;
};
export declare const QueryGetEpochLengthRequest: {
    encode(_: QueryGetEpochLengthRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetEpochLengthRequest;
    fromJSON(_: any): QueryGetEpochLengthRequest;
    toJSON(_: QueryGetEpochLengthRequest): unknown;
    create<I extends Exact<DeepPartial<QueryGetEpochLengthRequest>, I>>(base?: I): QueryGetEpochLengthRequest;
    fromPartial<I extends Exact<DeepPartial<QueryGetEpochLengthRequest>, I>>(_: I): QueryGetEpochLengthRequest;
};
export declare const QueryGetEpochLengthResponse: {
    encode(message: QueryGetEpochLengthResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetEpochLengthResponse;
    fromJSON(object: any): QueryGetEpochLengthResponse;
    toJSON(message: QueryGetEpochLengthResponse): unknown;
    create<I extends Exact<DeepPartial<QueryGetEpochLengthResponse>, I>>(base?: I): QueryGetEpochLengthResponse;
    fromPartial<I extends Exact<DeepPartial<QueryGetEpochLengthResponse>, I>>(object: I): QueryGetEpochLengthResponse;
};
export declare const QueryGetCurrentEpochRequest: {
    encode(_: QueryGetCurrentEpochRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetCurrentEpochRequest;
    fromJSON(_: any): QueryGetCurrentEpochRequest;
    toJSON(_: QueryGetCurrentEpochRequest): unknown;
    create<I extends Exact<DeepPartial<QueryGetCurrentEpochRequest>, I>>(base?: I): QueryGetCurrentEpochRequest;
    fromPartial<I extends Exact<DeepPartial<QueryGetCurrentEpochRequest>, I>>(_: I): QueryGetCurrentEpochRequest;
};
export declare const QueryGetCurrentEpochResponse: {
    encode(message: QueryGetCurrentEpochResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetCurrentEpochResponse;
    fromJSON(object: any): QueryGetCurrentEpochResponse;
    toJSON(message: QueryGetCurrentEpochResponse): unknown;
    create<I extends Exact<DeepPartial<QueryGetCurrentEpochResponse>, I>>(base?: I): QueryGetCurrentEpochResponse;
    fromPartial<I extends Exact<DeepPartial<QueryGetCurrentEpochResponse>, I>>(object: I): QueryGetCurrentEpochResponse;
};
export declare const QueryGetPendingNextEpochRequest: {
    encode(_: QueryGetPendingNextEpochRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPendingNextEpochRequest;
    fromJSON(_: any): QueryGetPendingNextEpochRequest;
    toJSON(_: QueryGetPendingNextEpochRequest): unknown;
    create<I extends Exact<DeepPartial<QueryGetPendingNextEpochRequest>, I>>(base?: I): QueryGetPendingNextEpochRequest;
    fromPartial<I extends Exact<DeepPartial<QueryGetPendingNextEpochRequest>, I>>(_: I): QueryGetPendingNextEpochRequest;
};
export declare const QueryGetPendingNextEpochResponse: {
    encode(message: QueryGetPendingNextEpochResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPendingNextEpochResponse;
    fromJSON(object: any): QueryGetPendingNextEpochResponse;
    toJSON(message: QueryGetPendingNextEpochResponse): unknown;
    create<I extends Exact<DeepPartial<QueryGetPendingNextEpochResponse>, I>>(base?: I): QueryGetPendingNextEpochResponse;
    fromPartial<I extends Exact<DeepPartial<QueryGetPendingNextEpochResponse>, I>>(object: I): QueryGetPendingNextEpochResponse;
};
export declare const QueryGetHistoryEpochRequest: {
    encode(message: QueryGetHistoryEpochRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetHistoryEpochRequest;
    fromJSON(object: any): QueryGetHistoryEpochRequest;
    toJSON(message: QueryGetHistoryEpochRequest): unknown;
    create<I extends Exact<DeepPartial<QueryGetHistoryEpochRequest>, I>>(base?: I): QueryGetHistoryEpochRequest;
    fromPartial<I extends Exact<DeepPartial<QueryGetHistoryEpochRequest>, I>>(object: I): QueryGetHistoryEpochRequest;
};
export declare const QueryGetHistoryEpochResponse: {
    encode(message: QueryGetHistoryEpochResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetHistoryEpochResponse;
    fromJSON(object: any): QueryGetHistoryEpochResponse;
    toJSON(message: QueryGetHistoryEpochResponse): unknown;
    create<I extends Exact<DeepPartial<QueryGetHistoryEpochResponse>, I>>(base?: I): QueryGetHistoryEpochResponse;
    fromPartial<I extends Exact<DeepPartial<QueryGetHistoryEpochResponse>, I>>(object: I): QueryGetHistoryEpochResponse;
};
export declare const QueryGetAllHistoryEpochRequest: {
    encode(message: QueryGetAllHistoryEpochRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllHistoryEpochRequest;
    fromJSON(object: any): QueryGetAllHistoryEpochRequest;
    toJSON(message: QueryGetAllHistoryEpochRequest): unknown;
    create<I extends Exact<DeepPartial<QueryGetAllHistoryEpochRequest>, I>>(base?: I): QueryGetAllHistoryEpochRequest;
    fromPartial<I extends Exact<DeepPartial<QueryGetAllHistoryEpochRequest>, I>>(object: I): QueryGetAllHistoryEpochRequest;
};
export declare const QueryGetAllHistoryEpochResponse: {
    encode(message: QueryGetAllHistoryEpochResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllHistoryEpochResponse;
    fromJSON(object: any): QueryGetAllHistoryEpochResponse;
    toJSON(message: QueryGetAllHistoryEpochResponse): unknown;
    create<I extends Exact<DeepPartial<QueryGetAllHistoryEpochResponse>, I>>(base?: I): QueryGetAllHistoryEpochResponse;
    fromPartial<I extends Exact<DeepPartial<QueryGetAllHistoryEpochResponse>, I>>(object: I): QueryGetAllHistoryEpochResponse;
};
export declare const QueryGetNodeWorkloadRequest: {
    encode(message: QueryGetNodeWorkloadRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetNodeWorkloadRequest;
    fromJSON(object: any): QueryGetNodeWorkloadRequest;
    toJSON(message: QueryGetNodeWorkloadRequest): unknown;
    create<I extends Exact<DeepPartial<QueryGetNodeWorkloadRequest>, I>>(base?: I): QueryGetNodeWorkloadRequest;
    fromPartial<I extends Exact<DeepPartial<QueryGetNodeWorkloadRequest>, I>>(object: I): QueryGetNodeWorkloadRequest;
};
export declare const QueryGetNodeWorkloadResponse: {
    encode(message: QueryGetNodeWorkloadResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetNodeWorkloadResponse;
    fromJSON(object: any): QueryGetNodeWorkloadResponse;
    toJSON(message: QueryGetNodeWorkloadResponse): unknown;
    create<I extends Exact<DeepPartial<QueryGetNodeWorkloadResponse>, I>>(base?: I): QueryGetNodeWorkloadResponse;
    fromPartial<I extends Exact<DeepPartial<QueryGetNodeWorkloadResponse>, I>>(object: I): QueryGetNodeWorkloadResponse;
};
export declare const QueryGetAllNodeWorkloadByEpochRequest: {
    encode(message: QueryGetAllNodeWorkloadByEpochRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllNodeWorkloadByEpochRequest;
    fromJSON(object: any): QueryGetAllNodeWorkloadByEpochRequest;
    toJSON(message: QueryGetAllNodeWorkloadByEpochRequest): unknown;
    create<I extends Exact<DeepPartial<QueryGetAllNodeWorkloadByEpochRequest>, I>>(base?: I): QueryGetAllNodeWorkloadByEpochRequest;
    fromPartial<I extends Exact<DeepPartial<QueryGetAllNodeWorkloadByEpochRequest>, I>>(object: I): QueryGetAllNodeWorkloadByEpochRequest;
};
export declare const QueryGetAllNodeWorkloadByEpochResponse: {
    encode(message: QueryGetAllNodeWorkloadByEpochResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllNodeWorkloadByEpochResponse;
    fromJSON(object: any): QueryGetAllNodeWorkloadByEpochResponse;
    toJSON(message: QueryGetAllNodeWorkloadByEpochResponse): unknown;
    create<I extends Exact<DeepPartial<QueryGetAllNodeWorkloadByEpochResponse>, I>>(base?: I): QueryGetAllNodeWorkloadByEpochResponse;
    fromPartial<I extends Exact<DeepPartial<QueryGetAllNodeWorkloadByEpochResponse>, I>>(object: I): QueryGetAllNodeWorkloadByEpochResponse;
};
export declare const QueryGetManagerWRWorkloadRequest: {
    encode(message: QueryGetManagerWRWorkloadRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetManagerWRWorkloadRequest;
    fromJSON(object: any): QueryGetManagerWRWorkloadRequest;
    toJSON(message: QueryGetManagerWRWorkloadRequest): unknown;
    create<I extends Exact<DeepPartial<QueryGetManagerWRWorkloadRequest>, I>>(base?: I): QueryGetManagerWRWorkloadRequest;
    fromPartial<I extends Exact<DeepPartial<QueryGetManagerWRWorkloadRequest>, I>>(object: I): QueryGetManagerWRWorkloadRequest;
};
export declare const QueryGetManagerWRWorkloadResponse: {
    encode(message: QueryGetManagerWRWorkloadResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetManagerWRWorkloadResponse;
    fromJSON(object: any): QueryGetManagerWRWorkloadResponse;
    toJSON(message: QueryGetManagerWRWorkloadResponse): unknown;
    create<I extends Exact<DeepPartial<QueryGetManagerWRWorkloadResponse>, I>>(base?: I): QueryGetManagerWRWorkloadResponse;
    fromPartial<I extends Exact<DeepPartial<QueryGetManagerWRWorkloadResponse>, I>>(object: I): QueryGetManagerWRWorkloadResponse;
};
export declare const QueryGetAllManagerWRWorkloadByEpochRequest: {
    encode(message: QueryGetAllManagerWRWorkloadByEpochRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllManagerWRWorkloadByEpochRequest;
    fromJSON(object: any): QueryGetAllManagerWRWorkloadByEpochRequest;
    toJSON(message: QueryGetAllManagerWRWorkloadByEpochRequest): unknown;
    create<I extends Exact<DeepPartial<QueryGetAllManagerWRWorkloadByEpochRequest>, I>>(base?: I): QueryGetAllManagerWRWorkloadByEpochRequest;
    fromPartial<I extends Exact<DeepPartial<QueryGetAllManagerWRWorkloadByEpochRequest>, I>>(object: I): QueryGetAllManagerWRWorkloadByEpochRequest;
};
export declare const QueryGetAllManagerWRWorkloadByEpochResponse: {
    encode(message: QueryGetAllManagerWRWorkloadByEpochResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllManagerWRWorkloadByEpochResponse;
    fromJSON(object: any): QueryGetAllManagerWRWorkloadByEpochResponse;
    toJSON(message: QueryGetAllManagerWRWorkloadByEpochResponse): unknown;
    create<I extends Exact<DeepPartial<QueryGetAllManagerWRWorkloadByEpochResponse>, I>>(base?: I): QueryGetAllManagerWRWorkloadByEpochResponse;
    fromPartial<I extends Exact<DeepPartial<QueryGetAllManagerWRWorkloadByEpochResponse>, I>>(object: I): QueryGetAllManagerWRWorkloadByEpochResponse;
};
export declare const QueryGetManagerRPWorkloadRequest: {
    encode(message: QueryGetManagerRPWorkloadRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetManagerRPWorkloadRequest;
    fromJSON(object: any): QueryGetManagerRPWorkloadRequest;
    toJSON(message: QueryGetManagerRPWorkloadRequest): unknown;
    create<I extends Exact<DeepPartial<QueryGetManagerRPWorkloadRequest>, I>>(base?: I): QueryGetManagerRPWorkloadRequest;
    fromPartial<I extends Exact<DeepPartial<QueryGetManagerRPWorkloadRequest>, I>>(object: I): QueryGetManagerRPWorkloadRequest;
};
export declare const QueryGetManagerRPWorkloadResponse: {
    encode(message: QueryGetManagerRPWorkloadResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetManagerRPWorkloadResponse;
    fromJSON(object: any): QueryGetManagerRPWorkloadResponse;
    toJSON(message: QueryGetManagerRPWorkloadResponse): unknown;
    create<I extends Exact<DeepPartial<QueryGetManagerRPWorkloadResponse>, I>>(base?: I): QueryGetManagerRPWorkloadResponse;
    fromPartial<I extends Exact<DeepPartial<QueryGetManagerRPWorkloadResponse>, I>>(object: I): QueryGetManagerRPWorkloadResponse;
};
export declare const QueryGetAllManagerRPWorkloadByEraRequest: {
    encode(message: QueryGetAllManagerRPWorkloadByEraRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllManagerRPWorkloadByEraRequest;
    fromJSON(object: any): QueryGetAllManagerRPWorkloadByEraRequest;
    toJSON(message: QueryGetAllManagerRPWorkloadByEraRequest): unknown;
    create<I extends Exact<DeepPartial<QueryGetAllManagerRPWorkloadByEraRequest>, I>>(base?: I): QueryGetAllManagerRPWorkloadByEraRequest;
    fromPartial<I extends Exact<DeepPartial<QueryGetAllManagerRPWorkloadByEraRequest>, I>>(object: I): QueryGetAllManagerRPWorkloadByEraRequest;
};
export declare const QueryGetAllManagerRPWorkloadByEraResponse: {
    encode(message: QueryGetAllManagerRPWorkloadByEraResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllManagerRPWorkloadByEraResponse;
    fromJSON(object: any): QueryGetAllManagerRPWorkloadByEraResponse;
    toJSON(message: QueryGetAllManagerRPWorkloadByEraResponse): unknown;
    create<I extends Exact<DeepPartial<QueryGetAllManagerRPWorkloadByEraResponse>, I>>(base?: I): QueryGetAllManagerRPWorkloadByEraResponse;
    fromPartial<I extends Exact<DeepPartial<QueryGetAllManagerRPWorkloadByEraResponse>, I>>(object: I): QueryGetAllManagerRPWorkloadByEraResponse;
};
export declare const QueryGetManagerCSWorkloadRequest: {
    encode(message: QueryGetManagerCSWorkloadRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetManagerCSWorkloadRequest;
    fromJSON(object: any): QueryGetManagerCSWorkloadRequest;
    toJSON(message: QueryGetManagerCSWorkloadRequest): unknown;
    create<I extends Exact<DeepPartial<QueryGetManagerCSWorkloadRequest>, I>>(base?: I): QueryGetManagerCSWorkloadRequest;
    fromPartial<I extends Exact<DeepPartial<QueryGetManagerCSWorkloadRequest>, I>>(object: I): QueryGetManagerCSWorkloadRequest;
};
export declare const QueryGetManagerCSWorkloadResponse: {
    encode(message: QueryGetManagerCSWorkloadResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetManagerCSWorkloadResponse;
    fromJSON(object: any): QueryGetManagerCSWorkloadResponse;
    toJSON(message: QueryGetManagerCSWorkloadResponse): unknown;
    create<I extends Exact<DeepPartial<QueryGetManagerCSWorkloadResponse>, I>>(base?: I): QueryGetManagerCSWorkloadResponse;
    fromPartial<I extends Exact<DeepPartial<QueryGetManagerCSWorkloadResponse>, I>>(object: I): QueryGetManagerCSWorkloadResponse;
};
export declare const QueryGetAllManagerCSWorkloadByEraRequest: {
    encode(message: QueryGetAllManagerCSWorkloadByEraRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllManagerCSWorkloadByEraRequest;
    fromJSON(object: any): QueryGetAllManagerCSWorkloadByEraRequest;
    toJSON(message: QueryGetAllManagerCSWorkloadByEraRequest): unknown;
    create<I extends Exact<DeepPartial<QueryGetAllManagerCSWorkloadByEraRequest>, I>>(base?: I): QueryGetAllManagerCSWorkloadByEraRequest;
    fromPartial<I extends Exact<DeepPartial<QueryGetAllManagerCSWorkloadByEraRequest>, I>>(object: I): QueryGetAllManagerCSWorkloadByEraRequest;
};
export declare const QueryGetAllManagerCSWorkloadByEraResponse: {
    encode(message: QueryGetAllManagerCSWorkloadByEraResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllManagerCSWorkloadByEraResponse;
    fromJSON(object: any): QueryGetAllManagerCSWorkloadByEraResponse;
    toJSON(message: QueryGetAllManagerCSWorkloadByEraResponse): unknown;
    create<I extends Exact<DeepPartial<QueryGetAllManagerCSWorkloadByEraResponse>, I>>(base?: I): QueryGetAllManagerCSWorkloadByEraResponse;
    fromPartial<I extends Exact<DeepPartial<QueryGetAllManagerCSWorkloadByEraResponse>, I>>(object: I): QueryGetAllManagerCSWorkloadByEraResponse;
};
export declare const QueryGetWorkreportRequest: {
    encode(message: QueryGetWorkreportRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetWorkreportRequest;
    fromJSON(object: any): QueryGetWorkreportRequest;
    toJSON(message: QueryGetWorkreportRequest): unknown;
    create<I extends Exact<DeepPartial<QueryGetWorkreportRequest>, I>>(base?: I): QueryGetWorkreportRequest;
    fromPartial<I extends Exact<DeepPartial<QueryGetWorkreportRequest>, I>>(object: I): QueryGetWorkreportRequest;
};
export declare const QueryGetWorkreportResponse: {
    encode(message: QueryGetWorkreportResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetWorkreportResponse;
    fromJSON(object: any): QueryGetWorkreportResponse;
    toJSON(message: QueryGetWorkreportResponse): unknown;
    create<I extends Exact<DeepPartial<QueryGetWorkreportResponse>, I>>(base?: I): QueryGetWorkreportResponse;
    fromPartial<I extends Exact<DeepPartial<QueryGetWorkreportResponse>, I>>(object: I): QueryGetWorkreportResponse;
};
export declare const QueryGetAllWorkreportByEpochRequest: {
    encode(message: QueryGetAllWorkreportByEpochRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllWorkreportByEpochRequest;
    fromJSON(object: any): QueryGetAllWorkreportByEpochRequest;
    toJSON(message: QueryGetAllWorkreportByEpochRequest): unknown;
    create<I extends Exact<DeepPartial<QueryGetAllWorkreportByEpochRequest>, I>>(base?: I): QueryGetAllWorkreportByEpochRequest;
    fromPartial<I extends Exact<DeepPartial<QueryGetAllWorkreportByEpochRequest>, I>>(object: I): QueryGetAllWorkreportByEpochRequest;
};
export declare const QueryGetAllWorkreportByEpochResponse: {
    encode(message: QueryGetAllWorkreportByEpochResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllWorkreportByEpochResponse;
    fromJSON(object: any): QueryGetAllWorkreportByEpochResponse;
    toJSON(message: QueryGetAllWorkreportByEpochResponse): unknown;
    create<I extends Exact<DeepPartial<QueryGetAllWorkreportByEpochResponse>, I>>(base?: I): QueryGetAllWorkreportByEpochResponse;
    fromPartial<I extends Exact<DeepPartial<QueryGetAllWorkreportByEpochResponse>, I>>(object: I): QueryGetAllWorkreportByEpochResponse;
};
export declare const QueryGetEpochProcessDataRequest: {
    encode(message: QueryGetEpochProcessDataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetEpochProcessDataRequest;
    fromJSON(object: any): QueryGetEpochProcessDataRequest;
    toJSON(message: QueryGetEpochProcessDataRequest): unknown;
    create<I extends Exact<DeepPartial<QueryGetEpochProcessDataRequest>, I>>(base?: I): QueryGetEpochProcessDataRequest;
    fromPartial<I extends Exact<DeepPartial<QueryGetEpochProcessDataRequest>, I>>(object: I): QueryGetEpochProcessDataRequest;
};
export declare const QueryGetEpochProcessDataResponse: {
    encode(message: QueryGetEpochProcessDataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetEpochProcessDataResponse;
    fromJSON(object: any): QueryGetEpochProcessDataResponse;
    toJSON(message: QueryGetEpochProcessDataResponse): unknown;
    create<I extends Exact<DeepPartial<QueryGetEpochProcessDataResponse>, I>>(base?: I): QueryGetEpochProcessDataResponse;
    fromPartial<I extends Exact<DeepPartial<QueryGetEpochProcessDataResponse>, I>>(object: I): QueryGetEpochProcessDataResponse;
};
export declare const QueryGetAllEpochProcessDataRequest: {
    encode(message: QueryGetAllEpochProcessDataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllEpochProcessDataRequest;
    fromJSON(object: any): QueryGetAllEpochProcessDataRequest;
    toJSON(message: QueryGetAllEpochProcessDataRequest): unknown;
    create<I extends Exact<DeepPartial<QueryGetAllEpochProcessDataRequest>, I>>(base?: I): QueryGetAllEpochProcessDataRequest;
    fromPartial<I extends Exact<DeepPartial<QueryGetAllEpochProcessDataRequest>, I>>(object: I): QueryGetAllEpochProcessDataRequest;
};
export declare const QueryGetAllEpochProcessDataResponse: {
    encode(message: QueryGetAllEpochProcessDataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllEpochProcessDataResponse;
    fromJSON(object: any): QueryGetAllEpochProcessDataResponse;
    toJSON(message: QueryGetAllEpochProcessDataResponse): unknown;
    create<I extends Exact<DeepPartial<QueryGetAllEpochProcessDataResponse>, I>>(base?: I): QueryGetAllEpochProcessDataResponse;
    fromPartial<I extends Exact<DeepPartial<QueryGetAllEpochProcessDataResponse>, I>>(object: I): QueryGetAllEpochProcessDataResponse;
};
export declare const QueryGetSuperiorRequest: {
    encode(_: QueryGetSuperiorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetSuperiorRequest;
    fromJSON(_: any): QueryGetSuperiorRequest;
    toJSON(_: QueryGetSuperiorRequest): unknown;
    create<I extends Exact<DeepPartial<QueryGetSuperiorRequest>, I>>(base?: I): QueryGetSuperiorRequest;
    fromPartial<I extends Exact<DeepPartial<QueryGetSuperiorRequest>, I>>(_: I): QueryGetSuperiorRequest;
};
export declare const QueryGetSuperiorResponse: {
    encode(message: QueryGetSuperiorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetSuperiorResponse;
    fromJSON(object: any): QueryGetSuperiorResponse;
    toJSON(message: QueryGetSuperiorResponse): unknown;
    create<I extends Exact<DeepPartial<QueryGetSuperiorResponse>, I>>(base?: I): QueryGetSuperiorResponse;
    fromPartial<I extends Exact<DeepPartial<QueryGetSuperiorResponse>, I>>(object: I): QueryGetSuperiorResponse;
};
export declare const QueryGetEraLengthRequest: {
    encode(_: QueryGetEraLengthRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetEraLengthRequest;
    fromJSON(_: any): QueryGetEraLengthRequest;
    toJSON(_: QueryGetEraLengthRequest): unknown;
    create<I extends Exact<DeepPartial<QueryGetEraLengthRequest>, I>>(base?: I): QueryGetEraLengthRequest;
    fromPartial<I extends Exact<DeepPartial<QueryGetEraLengthRequest>, I>>(_: I): QueryGetEraLengthRequest;
};
export declare const QueryGetEraLengthResponse: {
    encode(message: QueryGetEraLengthResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetEraLengthResponse;
    fromJSON(object: any): QueryGetEraLengthResponse;
    toJSON(message: QueryGetEraLengthResponse): unknown;
    create<I extends Exact<DeepPartial<QueryGetEraLengthResponse>, I>>(base?: I): QueryGetEraLengthResponse;
    fromPartial<I extends Exact<DeepPartial<QueryGetEraLengthResponse>, I>>(object: I): QueryGetEraLengthResponse;
};
export declare const QueryGetCurrentEraRequest: {
    encode(_: QueryGetCurrentEraRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetCurrentEraRequest;
    fromJSON(_: any): QueryGetCurrentEraRequest;
    toJSON(_: QueryGetCurrentEraRequest): unknown;
    create<I extends Exact<DeepPartial<QueryGetCurrentEraRequest>, I>>(base?: I): QueryGetCurrentEraRequest;
    fromPartial<I extends Exact<DeepPartial<QueryGetCurrentEraRequest>, I>>(_: I): QueryGetCurrentEraRequest;
};
export declare const QueryGetCurrentEraResponse: {
    encode(message: QueryGetCurrentEraResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetCurrentEraResponse;
    fromJSON(object: any): QueryGetCurrentEraResponse;
    toJSON(message: QueryGetCurrentEraResponse): unknown;
    create<I extends Exact<DeepPartial<QueryGetCurrentEraResponse>, I>>(base?: I): QueryGetCurrentEraResponse;
    fromPartial<I extends Exact<DeepPartial<QueryGetCurrentEraResponse>, I>>(object: I): QueryGetCurrentEraResponse;
};
export declare const QueryGetPendingNextEraRequest: {
    encode(_: QueryGetPendingNextEraRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPendingNextEraRequest;
    fromJSON(_: any): QueryGetPendingNextEraRequest;
    toJSON(_: QueryGetPendingNextEraRequest): unknown;
    create<I extends Exact<DeepPartial<QueryGetPendingNextEraRequest>, I>>(base?: I): QueryGetPendingNextEraRequest;
    fromPartial<I extends Exact<DeepPartial<QueryGetPendingNextEraRequest>, I>>(_: I): QueryGetPendingNextEraRequest;
};
export declare const QueryGetPendingNextEraResponse: {
    encode(message: QueryGetPendingNextEraResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPendingNextEraResponse;
    fromJSON(object: any): QueryGetPendingNextEraResponse;
    toJSON(message: QueryGetPendingNextEraResponse): unknown;
    create<I extends Exact<DeepPartial<QueryGetPendingNextEraResponse>, I>>(base?: I): QueryGetPendingNextEraResponse;
    fromPartial<I extends Exact<DeepPartial<QueryGetPendingNextEraResponse>, I>>(object: I): QueryGetPendingNextEraResponse;
};
export declare const QueryGetHistoryEraRequest: {
    encode(message: QueryGetHistoryEraRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetHistoryEraRequest;
    fromJSON(object: any): QueryGetHistoryEraRequest;
    toJSON(message: QueryGetHistoryEraRequest): unknown;
    create<I extends Exact<DeepPartial<QueryGetHistoryEraRequest>, I>>(base?: I): QueryGetHistoryEraRequest;
    fromPartial<I extends Exact<DeepPartial<QueryGetHistoryEraRequest>, I>>(object: I): QueryGetHistoryEraRequest;
};
export declare const QueryGetHistoryEraResponse: {
    encode(message: QueryGetHistoryEraResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetHistoryEraResponse;
    fromJSON(object: any): QueryGetHistoryEraResponse;
    toJSON(message: QueryGetHistoryEraResponse): unknown;
    create<I extends Exact<DeepPartial<QueryGetHistoryEraResponse>, I>>(base?: I): QueryGetHistoryEraResponse;
    fromPartial<I extends Exact<DeepPartial<QueryGetHistoryEraResponse>, I>>(object: I): QueryGetHistoryEraResponse;
};
export declare const QueryGetAllHistoryEraRequest: {
    encode(message: QueryGetAllHistoryEraRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllHistoryEraRequest;
    fromJSON(object: any): QueryGetAllHistoryEraRequest;
    toJSON(message: QueryGetAllHistoryEraRequest): unknown;
    create<I extends Exact<DeepPartial<QueryGetAllHistoryEraRequest>, I>>(base?: I): QueryGetAllHistoryEraRequest;
    fromPartial<I extends Exact<DeepPartial<QueryGetAllHistoryEraRequest>, I>>(object: I): QueryGetAllHistoryEraRequest;
};
export declare const QueryGetAllHistoryEraResponse: {
    encode(message: QueryGetAllHistoryEraResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllHistoryEraResponse;
    fromJSON(object: any): QueryGetAllHistoryEraResponse;
    toJSON(message: QueryGetAllHistoryEraResponse): unknown;
    create<I extends Exact<DeepPartial<QueryGetAllHistoryEraResponse>, I>>(base?: I): QueryGetAllHistoryEraResponse;
    fromPartial<I extends Exact<DeepPartial<QueryGetAllHistoryEraResponse>, I>>(object: I): QueryGetAllHistoryEraResponse;
};
export declare const QueryGetReputationPointChangeDataRequest: {
    encode(message: QueryGetReputationPointChangeDataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetReputationPointChangeDataRequest;
    fromJSON(object: any): QueryGetReputationPointChangeDataRequest;
    toJSON(message: QueryGetReputationPointChangeDataRequest): unknown;
    create<I extends Exact<DeepPartial<QueryGetReputationPointChangeDataRequest>, I>>(base?: I): QueryGetReputationPointChangeDataRequest;
    fromPartial<I extends Exact<DeepPartial<QueryGetReputationPointChangeDataRequest>, I>>(object: I): QueryGetReputationPointChangeDataRequest;
};
export declare const QueryGetReputationPointChangeDataResponse: {
    encode(message: QueryGetReputationPointChangeDataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetReputationPointChangeDataResponse;
    fromJSON(object: any): QueryGetReputationPointChangeDataResponse;
    toJSON(message: QueryGetReputationPointChangeDataResponse): unknown;
    create<I extends Exact<DeepPartial<QueryGetReputationPointChangeDataResponse>, I>>(base?: I): QueryGetReputationPointChangeDataResponse;
    fromPartial<I extends Exact<DeepPartial<QueryGetReputationPointChangeDataResponse>, I>>(object: I): QueryGetReputationPointChangeDataResponse;
};
export declare const QueryGetAllReputationPointChangeDataByEraRequest: {
    encode(message: QueryGetAllReputationPointChangeDataByEraRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllReputationPointChangeDataByEraRequest;
    fromJSON(object: any): QueryGetAllReputationPointChangeDataByEraRequest;
    toJSON(message: QueryGetAllReputationPointChangeDataByEraRequest): unknown;
    create<I extends Exact<DeepPartial<QueryGetAllReputationPointChangeDataByEraRequest>, I>>(base?: I): QueryGetAllReputationPointChangeDataByEraRequest;
    fromPartial<I extends Exact<DeepPartial<QueryGetAllReputationPointChangeDataByEraRequest>, I>>(object: I): QueryGetAllReputationPointChangeDataByEraRequest;
};
export declare const QueryGetAllReputationPointChangeDataByEraResponse: {
    encode(message: QueryGetAllReputationPointChangeDataByEraResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllReputationPointChangeDataByEraResponse;
    fromJSON(object: any): QueryGetAllReputationPointChangeDataByEraResponse;
    toJSON(message: QueryGetAllReputationPointChangeDataByEraResponse): unknown;
    create<I extends Exact<DeepPartial<QueryGetAllReputationPointChangeDataByEraResponse>, I>>(base?: I): QueryGetAllReputationPointChangeDataByEraResponse;
    fromPartial<I extends Exact<DeepPartial<QueryGetAllReputationPointChangeDataByEraResponse>, I>>(object: I): QueryGetAllReputationPointChangeDataByEraResponse;
};
export declare const QueryGetReputationDeltaPointRequest: {
    encode(message: QueryGetReputationDeltaPointRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetReputationDeltaPointRequest;
    fromJSON(object: any): QueryGetReputationDeltaPointRequest;
    toJSON(message: QueryGetReputationDeltaPointRequest): unknown;
    create<I extends Exact<DeepPartial<QueryGetReputationDeltaPointRequest>, I>>(base?: I): QueryGetReputationDeltaPointRequest;
    fromPartial<I extends Exact<DeepPartial<QueryGetReputationDeltaPointRequest>, I>>(object: I): QueryGetReputationDeltaPointRequest;
};
export declare const QueryGetReputationDeltaPointResponse: {
    encode(message: QueryGetReputationDeltaPointResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetReputationDeltaPointResponse;
    fromJSON(object: any): QueryGetReputationDeltaPointResponse;
    toJSON(message: QueryGetReputationDeltaPointResponse): unknown;
    create<I extends Exact<DeepPartial<QueryGetReputationDeltaPointResponse>, I>>(base?: I): QueryGetReputationDeltaPointResponse;
    fromPartial<I extends Exact<DeepPartial<QueryGetReputationDeltaPointResponse>, I>>(object: I): QueryGetReputationDeltaPointResponse;
};
export declare const QueryGetAllReputationDeltaPointByEraRequest: {
    encode(message: QueryGetAllReputationDeltaPointByEraRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllReputationDeltaPointByEraRequest;
    fromJSON(object: any): QueryGetAllReputationDeltaPointByEraRequest;
    toJSON(message: QueryGetAllReputationDeltaPointByEraRequest): unknown;
    create<I extends Exact<DeepPartial<QueryGetAllReputationDeltaPointByEraRequest>, I>>(base?: I): QueryGetAllReputationDeltaPointByEraRequest;
    fromPartial<I extends Exact<DeepPartial<QueryGetAllReputationDeltaPointByEraRequest>, I>>(object: I): QueryGetAllReputationDeltaPointByEraRequest;
};
export declare const QueryGetAllReputationDeltaPointByEraResponse: {
    encode(message: QueryGetAllReputationDeltaPointByEraResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllReputationDeltaPointByEraResponse;
    fromJSON(object: any): QueryGetAllReputationDeltaPointByEraResponse;
    toJSON(message: QueryGetAllReputationDeltaPointByEraResponse): unknown;
    create<I extends Exact<DeepPartial<QueryGetAllReputationDeltaPointByEraResponse>, I>>(base?: I): QueryGetAllReputationDeltaPointByEraResponse;
    fromPartial<I extends Exact<DeepPartial<QueryGetAllReputationDeltaPointByEraResponse>, I>>(object: I): QueryGetAllReputationDeltaPointByEraResponse;
};
export declare const QueryGetEraProcessDataRequest: {
    encode(message: QueryGetEraProcessDataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetEraProcessDataRequest;
    fromJSON(object: any): QueryGetEraProcessDataRequest;
    toJSON(message: QueryGetEraProcessDataRequest): unknown;
    create<I extends Exact<DeepPartial<QueryGetEraProcessDataRequest>, I>>(base?: I): QueryGetEraProcessDataRequest;
    fromPartial<I extends Exact<DeepPartial<QueryGetEraProcessDataRequest>, I>>(object: I): QueryGetEraProcessDataRequest;
};
export declare const QueryGetEraProcessDataResponse: {
    encode(message: QueryGetEraProcessDataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetEraProcessDataResponse;
    fromJSON(object: any): QueryGetEraProcessDataResponse;
    toJSON(message: QueryGetEraProcessDataResponse): unknown;
    create<I extends Exact<DeepPartial<QueryGetEraProcessDataResponse>, I>>(base?: I): QueryGetEraProcessDataResponse;
    fromPartial<I extends Exact<DeepPartial<QueryGetEraProcessDataResponse>, I>>(object: I): QueryGetEraProcessDataResponse;
};
export declare const QueryGetAllEraProcessDataRequest: {
    encode(message: QueryGetAllEraProcessDataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllEraProcessDataRequest;
    fromJSON(object: any): QueryGetAllEraProcessDataRequest;
    toJSON(message: QueryGetAllEraProcessDataRequest): unknown;
    create<I extends Exact<DeepPartial<QueryGetAllEraProcessDataRequest>, I>>(base?: I): QueryGetAllEraProcessDataRequest;
    fromPartial<I extends Exact<DeepPartial<QueryGetAllEraProcessDataRequest>, I>>(object: I): QueryGetAllEraProcessDataRequest;
};
export declare const QueryGetAllEraProcessDataResponse: {
    encode(message: QueryGetAllEraProcessDataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllEraProcessDataResponse;
    fromJSON(object: any): QueryGetAllEraProcessDataResponse;
    toJSON(message: QueryGetAllEraProcessDataResponse): unknown;
    create<I extends Exact<DeepPartial<QueryGetAllEraProcessDataResponse>, I>>(base?: I): QueryGetAllEraProcessDataResponse;
    fromPartial<I extends Exact<DeepPartial<QueryGetAllEraProcessDataResponse>, I>>(object: I): QueryGetAllEraProcessDataResponse;
};
export declare const QueryGetCheatStatusCRDataRequest: {
    encode(message: QueryGetCheatStatusCRDataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetCheatStatusCRDataRequest;
    fromJSON(object: any): QueryGetCheatStatusCRDataRequest;
    toJSON(message: QueryGetCheatStatusCRDataRequest): unknown;
    create<I extends Exact<DeepPartial<QueryGetCheatStatusCRDataRequest>, I>>(base?: I): QueryGetCheatStatusCRDataRequest;
    fromPartial<I extends Exact<DeepPartial<QueryGetCheatStatusCRDataRequest>, I>>(object: I): QueryGetCheatStatusCRDataRequest;
};
export declare const QueryGetCheatStatusCRDataResponse: {
    encode(message: QueryGetCheatStatusCRDataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetCheatStatusCRDataResponse;
    fromJSON(object: any): QueryGetCheatStatusCRDataResponse;
    toJSON(message: QueryGetCheatStatusCRDataResponse): unknown;
    create<I extends Exact<DeepPartial<QueryGetCheatStatusCRDataResponse>, I>>(base?: I): QueryGetCheatStatusCRDataResponse;
    fromPartial<I extends Exact<DeepPartial<QueryGetCheatStatusCRDataResponse>, I>>(object: I): QueryGetCheatStatusCRDataResponse;
};
export declare const QueryGetAllCheatStatusCRDataByEraRequest: {
    encode(message: QueryGetAllCheatStatusCRDataByEraRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllCheatStatusCRDataByEraRequest;
    fromJSON(object: any): QueryGetAllCheatStatusCRDataByEraRequest;
    toJSON(message: QueryGetAllCheatStatusCRDataByEraRequest): unknown;
    create<I extends Exact<DeepPartial<QueryGetAllCheatStatusCRDataByEraRequest>, I>>(base?: I): QueryGetAllCheatStatusCRDataByEraRequest;
    fromPartial<I extends Exact<DeepPartial<QueryGetAllCheatStatusCRDataByEraRequest>, I>>(object: I): QueryGetAllCheatStatusCRDataByEraRequest;
};
export declare const QueryGetAllCheatStatusCRDataByEraResponse: {
    encode(message: QueryGetAllCheatStatusCRDataByEraResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllCheatStatusCRDataByEraResponse;
    fromJSON(object: any): QueryGetAllCheatStatusCRDataByEraResponse;
    toJSON(message: QueryGetAllCheatStatusCRDataByEraResponse): unknown;
    create<I extends Exact<DeepPartial<QueryGetAllCheatStatusCRDataByEraResponse>, I>>(base?: I): QueryGetAllCheatStatusCRDataByEraResponse;
    fromPartial<I extends Exact<DeepPartial<QueryGetAllCheatStatusCRDataByEraResponse>, I>>(object: I): QueryGetAllCheatStatusCRDataByEraResponse;
};
export declare const QueryGetEraCheatStatusProcessDataRequest: {
    encode(message: QueryGetEraCheatStatusProcessDataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetEraCheatStatusProcessDataRequest;
    fromJSON(object: any): QueryGetEraCheatStatusProcessDataRequest;
    toJSON(message: QueryGetEraCheatStatusProcessDataRequest): unknown;
    create<I extends Exact<DeepPartial<QueryGetEraCheatStatusProcessDataRequest>, I>>(base?: I): QueryGetEraCheatStatusProcessDataRequest;
    fromPartial<I extends Exact<DeepPartial<QueryGetEraCheatStatusProcessDataRequest>, I>>(object: I): QueryGetEraCheatStatusProcessDataRequest;
};
export declare const QueryGetEraCheatStatusProcessDataResponse: {
    encode(message: QueryGetEraCheatStatusProcessDataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetEraCheatStatusProcessDataResponse;
    fromJSON(object: any): QueryGetEraCheatStatusProcessDataResponse;
    toJSON(message: QueryGetEraCheatStatusProcessDataResponse): unknown;
    create<I extends Exact<DeepPartial<QueryGetEraCheatStatusProcessDataResponse>, I>>(base?: I): QueryGetEraCheatStatusProcessDataResponse;
    fromPartial<I extends Exact<DeepPartial<QueryGetEraCheatStatusProcessDataResponse>, I>>(object: I): QueryGetEraCheatStatusProcessDataResponse;
};
export declare const QueryGetAllEraCheatStatusProcessDataRequest: {
    encode(message: QueryGetAllEraCheatStatusProcessDataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllEraCheatStatusProcessDataRequest;
    fromJSON(object: any): QueryGetAllEraCheatStatusProcessDataRequest;
    toJSON(message: QueryGetAllEraCheatStatusProcessDataRequest): unknown;
    create<I extends Exact<DeepPartial<QueryGetAllEraCheatStatusProcessDataRequest>, I>>(base?: I): QueryGetAllEraCheatStatusProcessDataRequest;
    fromPartial<I extends Exact<DeepPartial<QueryGetAllEraCheatStatusProcessDataRequest>, I>>(object: I): QueryGetAllEraCheatStatusProcessDataRequest;
};
export declare const QueryGetAllEraCheatStatusProcessDataResponse: {
    encode(message: QueryGetAllEraCheatStatusProcessDataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllEraCheatStatusProcessDataResponse;
    fromJSON(object: any): QueryGetAllEraCheatStatusProcessDataResponse;
    toJSON(message: QueryGetAllEraCheatStatusProcessDataResponse): unknown;
    create<I extends Exact<DeepPartial<QueryGetAllEraCheatStatusProcessDataResponse>, I>>(base?: I): QueryGetAllEraCheatStatusProcessDataResponse;
    fromPartial<I extends Exact<DeepPartial<QueryGetAllEraCheatStatusProcessDataResponse>, I>>(object: I): QueryGetAllEraCheatStatusProcessDataResponse;
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
    AllNodeWorkloadByEpoch(request: QueryGetAllNodeWorkloadByEpochRequest): Promise<QueryGetAllNodeWorkloadByEpochResponse>;
    /** Queries a list of Manager Workload items. */
    ManagerWRWorkload(request: QueryGetManagerWRWorkloadRequest): Promise<QueryGetManagerWRWorkloadResponse>;
    AllManagerWRWorkloadByEpoch(request: QueryGetAllManagerWRWorkloadByEpochRequest): Promise<QueryGetAllManagerWRWorkloadByEpochResponse>;
    ManagerRPWorkload(request: QueryGetManagerRPWorkloadRequest): Promise<QueryGetManagerRPWorkloadResponse>;
    AllManagerRPWorkloadByEra(request: QueryGetAllManagerRPWorkloadByEraRequest): Promise<QueryGetAllManagerRPWorkloadByEraResponse>;
    ManagerCSWorkload(request: QueryGetManagerCSWorkloadRequest): Promise<QueryGetManagerCSWorkloadResponse>;
    AllManagerCSWorkloadByEra(request: QueryGetAllManagerCSWorkloadByEraRequest): Promise<QueryGetAllManagerCSWorkloadByEraResponse>;
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
    ReputationPointChangeData(request: QueryGetReputationPointChangeDataRequest): Promise<QueryGetReputationPointChangeDataResponse>;
    AllReputationPointChangeDataByEra(request: QueryGetAllReputationPointChangeDataByEraRequest): Promise<QueryGetAllReputationPointChangeDataByEraResponse>;
    /** Queries a list of ReputationPoint items. */
    ReputationDeltaPoint(request: QueryGetReputationDeltaPointRequest): Promise<QueryGetReputationDeltaPointResponse>;
    AllReputationDeltaPointByEra(request: QueryGetAllReputationDeltaPointByEraRequest): Promise<QueryGetAllReputationDeltaPointByEraResponse>;
    /** Queries a list of EraProcessData items. */
    EraProcessData(request: QueryGetEraProcessDataRequest): Promise<QueryGetEraProcessDataResponse>;
    AllEraProcessData(request: QueryGetAllEraProcessDataRequest): Promise<QueryGetAllEraProcessDataResponse>;
    /** Queries a list of CheatStatusPRData items. */
    CheatStatusCRData(request: QueryGetCheatStatusCRDataRequest): Promise<QueryGetCheatStatusCRDataResponse>;
    AllCheatStatusCRDataByEra(request: QueryGetAllCheatStatusCRDataByEraRequest): Promise<QueryGetAllCheatStatusCRDataByEraResponse>;
    /** Queries a list of EraCheatStatusProcessData items. */
    EraCheatStatusProcessData(request: QueryGetEraCheatStatusProcessDataRequest): Promise<QueryGetEraCheatStatusProcessDataResponse>;
    AllEraCheatStatusProcessData(request: QueryGetAllEraCheatStatusProcessDataRequest): Promise<QueryGetAllEraCheatStatusProcessDataResponse>;
}
export declare const QueryServiceName = "enreach.workload.Query";
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Param(request: QueryParamRequest): Promise<QueryParamResponse>;
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    EpochLength(request: QueryGetEpochLengthRequest): Promise<QueryGetEpochLengthResponse>;
    CurrentEpoch(request: QueryGetCurrentEpochRequest): Promise<QueryGetCurrentEpochResponse>;
    PendingNextEpoch(request: QueryGetPendingNextEpochRequest): Promise<QueryGetPendingNextEpochResponse>;
    HistoryEpoch(request: QueryGetHistoryEpochRequest): Promise<QueryGetHistoryEpochResponse>;
    AllHistoryEpoch(request: QueryGetAllHistoryEpochRequest): Promise<QueryGetAllHistoryEpochResponse>;
    NodeWorkload(request: QueryGetNodeWorkloadRequest): Promise<QueryGetNodeWorkloadResponse>;
    AllNodeWorkloadByEpoch(request: QueryGetAllNodeWorkloadByEpochRequest): Promise<QueryGetAllNodeWorkloadByEpochResponse>;
    ManagerWRWorkload(request: QueryGetManagerWRWorkloadRequest): Promise<QueryGetManagerWRWorkloadResponse>;
    AllManagerWRWorkloadByEpoch(request: QueryGetAllManagerWRWorkloadByEpochRequest): Promise<QueryGetAllManagerWRWorkloadByEpochResponse>;
    ManagerRPWorkload(request: QueryGetManagerRPWorkloadRequest): Promise<QueryGetManagerRPWorkloadResponse>;
    AllManagerRPWorkloadByEra(request: QueryGetAllManagerRPWorkloadByEraRequest): Promise<QueryGetAllManagerRPWorkloadByEraResponse>;
    ManagerCSWorkload(request: QueryGetManagerCSWorkloadRequest): Promise<QueryGetManagerCSWorkloadResponse>;
    AllManagerCSWorkloadByEra(request: QueryGetAllManagerCSWorkloadByEraRequest): Promise<QueryGetAllManagerCSWorkloadByEraResponse>;
    Workreport(request: QueryGetWorkreportRequest): Promise<QueryGetWorkreportResponse>;
    AllWorkreportByEpoch(request: QueryGetAllWorkreportByEpochRequest): Promise<QueryGetAllWorkreportByEpochResponse>;
    EpochProcessData(request: QueryGetEpochProcessDataRequest): Promise<QueryGetEpochProcessDataResponse>;
    AllEpochProcessData(request: QueryGetAllEpochProcessDataRequest): Promise<QueryGetAllEpochProcessDataResponse>;
    Superior(request: QueryGetSuperiorRequest): Promise<QueryGetSuperiorResponse>;
    EraLength(request: QueryGetEraLengthRequest): Promise<QueryGetEraLengthResponse>;
    CurrentEra(request: QueryGetCurrentEraRequest): Promise<QueryGetCurrentEraResponse>;
    PendingNextEra(request: QueryGetPendingNextEraRequest): Promise<QueryGetPendingNextEraResponse>;
    HistoryEra(request: QueryGetHistoryEraRequest): Promise<QueryGetHistoryEraResponse>;
    AllHistoryEra(request: QueryGetAllHistoryEraRequest): Promise<QueryGetAllHistoryEraResponse>;
    ReputationPointChangeData(request: QueryGetReputationPointChangeDataRequest): Promise<QueryGetReputationPointChangeDataResponse>;
    AllReputationPointChangeDataByEra(request: QueryGetAllReputationPointChangeDataByEraRequest): Promise<QueryGetAllReputationPointChangeDataByEraResponse>;
    ReputationDeltaPoint(request: QueryGetReputationDeltaPointRequest): Promise<QueryGetReputationDeltaPointResponse>;
    AllReputationDeltaPointByEra(request: QueryGetAllReputationDeltaPointByEraRequest): Promise<QueryGetAllReputationDeltaPointByEraResponse>;
    EraProcessData(request: QueryGetEraProcessDataRequest): Promise<QueryGetEraProcessDataResponse>;
    AllEraProcessData(request: QueryGetAllEraProcessDataRequest): Promise<QueryGetAllEraProcessDataResponse>;
    CheatStatusCRData(request: QueryGetCheatStatusCRDataRequest): Promise<QueryGetCheatStatusCRDataResponse>;
    AllCheatStatusCRDataByEra(request: QueryGetAllCheatStatusCRDataByEraRequest): Promise<QueryGetAllCheatStatusCRDataByEraResponse>;
    EraCheatStatusProcessData(request: QueryGetEraCheatStatusProcessDataRequest): Promise<QueryGetEraCheatStatusProcessDataResponse>;
    AllEraCheatStatusProcessData(request: QueryGetAllEraCheatStatusProcessDataRequest): Promise<QueryGetAllEraCheatStatusProcessDataResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
