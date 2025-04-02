import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { EraProcessData, ReputationDeltaPoint, ReputationPoint, ReputationPointChangeData } from "./reputationpoint";
import { Superior } from "./superior";
import { ManagerRPWorkload, ManagerWRWorkload, NodeWorkload } from "./workload";
import { EpochProcessData, Workreport } from "./workreport";
export declare const protobufPackage = "enreach.workload";
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
export interface QueryGetEraLengthRequest {
}
export interface QueryGetEraLengthResponse {
    eraLength: number;
}
export interface QueryGetCurrentEraRequest {
}
export interface QueryGetCurrentEraResponse {
    currentEra: number;
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
export interface QueryGetReputationPointRequest {
    nodeID: string;
}
export interface QueryGetReputationPointResponse {
    ReputationPoint: ReputationPoint | undefined;
}
export interface QueryGetAllReputationPointRequest {
    pagination: PageRequest | undefined;
}
export interface QueryGetAllReputationPointResponse {
    ReputationPoints: ReputationPoint[];
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
export declare const QueryGetWorkreportProcessBatchSizeRequest: {
    encode(_: QueryGetWorkreportProcessBatchSizeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetWorkreportProcessBatchSizeRequest;
    fromJSON(_: any): QueryGetWorkreportProcessBatchSizeRequest;
    toJSON(_: QueryGetWorkreportProcessBatchSizeRequest): unknown;
    create<I extends Exact<DeepPartial<QueryGetWorkreportProcessBatchSizeRequest>, I>>(base?: I): QueryGetWorkreportProcessBatchSizeRequest;
    fromPartial<I extends Exact<DeepPartial<QueryGetWorkreportProcessBatchSizeRequest>, I>>(_: I): QueryGetWorkreportProcessBatchSizeRequest;
};
export declare const QueryGetWorkreportProcessBatchSizeResponse: {
    encode(message: QueryGetWorkreportProcessBatchSizeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetWorkreportProcessBatchSizeResponse;
    fromJSON(object: any): QueryGetWorkreportProcessBatchSizeResponse;
    toJSON(message: QueryGetWorkreportProcessBatchSizeResponse): unknown;
    create<I extends Exact<DeepPartial<QueryGetWorkreportProcessBatchSizeResponse>, I>>(base?: I): QueryGetWorkreportProcessBatchSizeResponse;
    fromPartial<I extends Exact<DeepPartial<QueryGetWorkreportProcessBatchSizeResponse>, I>>(object: I): QueryGetWorkreportProcessBatchSizeResponse;
};
export declare const QueryGetHistoryEpochDataDepthRequest: {
    encode(_: QueryGetHistoryEpochDataDepthRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetHistoryEpochDataDepthRequest;
    fromJSON(_: any): QueryGetHistoryEpochDataDepthRequest;
    toJSON(_: QueryGetHistoryEpochDataDepthRequest): unknown;
    create<I extends Exact<DeepPartial<QueryGetHistoryEpochDataDepthRequest>, I>>(base?: I): QueryGetHistoryEpochDataDepthRequest;
    fromPartial<I extends Exact<DeepPartial<QueryGetHistoryEpochDataDepthRequest>, I>>(_: I): QueryGetHistoryEpochDataDepthRequest;
};
export declare const QueryGetHistoryEpochDataDepthResponse: {
    encode(message: QueryGetHistoryEpochDataDepthResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetHistoryEpochDataDepthResponse;
    fromJSON(object: any): QueryGetHistoryEpochDataDepthResponse;
    toJSON(message: QueryGetHistoryEpochDataDepthResponse): unknown;
    create<I extends Exact<DeepPartial<QueryGetHistoryEpochDataDepthResponse>, I>>(base?: I): QueryGetHistoryEpochDataDepthResponse;
    fromPartial<I extends Exact<DeepPartial<QueryGetHistoryEpochDataDepthResponse>, I>>(object: I): QueryGetHistoryEpochDataDepthResponse;
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
export declare const QueryGetReputationPointRequest: {
    encode(message: QueryGetReputationPointRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetReputationPointRequest;
    fromJSON(object: any): QueryGetReputationPointRequest;
    toJSON(message: QueryGetReputationPointRequest): unknown;
    create<I extends Exact<DeepPartial<QueryGetReputationPointRequest>, I>>(base?: I): QueryGetReputationPointRequest;
    fromPartial<I extends Exact<DeepPartial<QueryGetReputationPointRequest>, I>>(object: I): QueryGetReputationPointRequest;
};
export declare const QueryGetReputationPointResponse: {
    encode(message: QueryGetReputationPointResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetReputationPointResponse;
    fromJSON(object: any): QueryGetReputationPointResponse;
    toJSON(message: QueryGetReputationPointResponse): unknown;
    create<I extends Exact<DeepPartial<QueryGetReputationPointResponse>, I>>(base?: I): QueryGetReputationPointResponse;
    fromPartial<I extends Exact<DeepPartial<QueryGetReputationPointResponse>, I>>(object: I): QueryGetReputationPointResponse;
};
export declare const QueryGetAllReputationPointRequest: {
    encode(message: QueryGetAllReputationPointRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllReputationPointRequest;
    fromJSON(object: any): QueryGetAllReputationPointRequest;
    toJSON(message: QueryGetAllReputationPointRequest): unknown;
    create<I extends Exact<DeepPartial<QueryGetAllReputationPointRequest>, I>>(base?: I): QueryGetAllReputationPointRequest;
    fromPartial<I extends Exact<DeepPartial<QueryGetAllReputationPointRequest>, I>>(object: I): QueryGetAllReputationPointRequest;
};
export declare const QueryGetAllReputationPointResponse: {
    encode(message: QueryGetAllReputationPointResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllReputationPointResponse;
    fromJSON(object: any): QueryGetAllReputationPointResponse;
    toJSON(message: QueryGetAllReputationPointResponse): unknown;
    create<I extends Exact<DeepPartial<QueryGetAllReputationPointResponse>, I>>(base?: I): QueryGetAllReputationPointResponse;
    fromPartial<I extends Exact<DeepPartial<QueryGetAllReputationPointResponse>, I>>(object: I): QueryGetAllReputationPointResponse;
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
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries epoch */
    EpochLength(request: QueryGetEpochLengthRequest): Promise<QueryGetEpochLengthResponse>;
    CurrentEpoch(request: QueryGetCurrentEpochRequest): Promise<QueryGetCurrentEpochResponse>;
    /** Queries a list of Node Workload items. */
    NodeWorkload(request: QueryGetNodeWorkloadRequest): Promise<QueryGetNodeWorkloadResponse>;
    AllNodeWorkloadByEpoch(request: QueryGetAllNodeWorkloadByEpochRequest): Promise<QueryGetAllNodeWorkloadByEpochResponse>;
    /** Queries a list of Manager Workload items. */
    ManagerWRWorkload(request: QueryGetManagerWRWorkloadRequest): Promise<QueryGetManagerWRWorkloadResponse>;
    AllManagerWRWorkloadByEpoch(request: QueryGetAllManagerWRWorkloadByEpochRequest): Promise<QueryGetAllManagerWRWorkloadByEpochResponse>;
    ManagerRPWorkload(request: QueryGetManagerRPWorkloadRequest): Promise<QueryGetManagerRPWorkloadResponse>;
    AllManagerRPWorkloadByEra(request: QueryGetAllManagerRPWorkloadByEraRequest): Promise<QueryGetAllManagerRPWorkloadByEraResponse>;
    /** Queries a list of Workreport items. */
    Workreport(request: QueryGetWorkreportRequest): Promise<QueryGetWorkreportResponse>;
    AllWorkreportByEpoch(request: QueryGetAllWorkreportByEpochRequest): Promise<QueryGetAllWorkreportByEpochResponse>;
    /** Queries some param settings */
    WorkreportProcessBatchSize(request: QueryGetWorkreportProcessBatchSizeRequest): Promise<QueryGetWorkreportProcessBatchSizeResponse>;
    HistoryEpochDataDepth(request: QueryGetHistoryEpochDataDepthRequest): Promise<QueryGetHistoryEpochDataDepthResponse>;
    EpochProcessData(request: QueryGetEpochProcessDataRequest): Promise<QueryGetEpochProcessDataResponse>;
    AllEpochProcessData(request: QueryGetAllEpochProcessDataRequest): Promise<QueryGetAllEpochProcessDataResponse>;
    /** Queries a Superior */
    Superior(request: QueryGetSuperiorRequest): Promise<QueryGetSuperiorResponse>;
    /** Queries era */
    EraLength(request: QueryGetEraLengthRequest): Promise<QueryGetEraLengthResponse>;
    CurrentEra(request: QueryGetCurrentEraRequest): Promise<QueryGetCurrentEraResponse>;
    /** Queries a list of ReputationPointChangeData items. */
    ReputationPointChangeData(request: QueryGetReputationPointChangeDataRequest): Promise<QueryGetReputationPointChangeDataResponse>;
    AllReputationPointChangeDataByEra(request: QueryGetAllReputationPointChangeDataByEraRequest): Promise<QueryGetAllReputationPointChangeDataByEraResponse>;
    /** Queries a list of ReputationPoint items. */
    ReputationDeltaPoint(request: QueryGetReputationDeltaPointRequest): Promise<QueryGetReputationDeltaPointResponse>;
    AllReputationDeltaPointByEra(request: QueryGetAllReputationDeltaPointByEraRequest): Promise<QueryGetAllReputationDeltaPointByEraResponse>;
    ReputationPoint(request: QueryGetReputationPointRequest): Promise<QueryGetReputationPointResponse>;
    AllReputationPoint(request: QueryGetAllReputationPointRequest): Promise<QueryGetAllReputationPointResponse>;
    /** Queries a list of EpochProcessData items. */
    EraProcessData(request: QueryGetEraProcessDataRequest): Promise<QueryGetEraProcessDataResponse>;
    AllEraProcessData(request: QueryGetAllEraProcessDataRequest): Promise<QueryGetAllEraProcessDataResponse>;
}
export declare const QueryServiceName = "enreach.workload.Query";
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    EpochLength(request: QueryGetEpochLengthRequest): Promise<QueryGetEpochLengthResponse>;
    CurrentEpoch(request: QueryGetCurrentEpochRequest): Promise<QueryGetCurrentEpochResponse>;
    NodeWorkload(request: QueryGetNodeWorkloadRequest): Promise<QueryGetNodeWorkloadResponse>;
    AllNodeWorkloadByEpoch(request: QueryGetAllNodeWorkloadByEpochRequest): Promise<QueryGetAllNodeWorkloadByEpochResponse>;
    ManagerWRWorkload(request: QueryGetManagerWRWorkloadRequest): Promise<QueryGetManagerWRWorkloadResponse>;
    AllManagerWRWorkloadByEpoch(request: QueryGetAllManagerWRWorkloadByEpochRequest): Promise<QueryGetAllManagerWRWorkloadByEpochResponse>;
    ManagerRPWorkload(request: QueryGetManagerRPWorkloadRequest): Promise<QueryGetManagerRPWorkloadResponse>;
    AllManagerRPWorkloadByEra(request: QueryGetAllManagerRPWorkloadByEraRequest): Promise<QueryGetAllManagerRPWorkloadByEraResponse>;
    Workreport(request: QueryGetWorkreportRequest): Promise<QueryGetWorkreportResponse>;
    AllWorkreportByEpoch(request: QueryGetAllWorkreportByEpochRequest): Promise<QueryGetAllWorkreportByEpochResponse>;
    WorkreportProcessBatchSize(request: QueryGetWorkreportProcessBatchSizeRequest): Promise<QueryGetWorkreportProcessBatchSizeResponse>;
    HistoryEpochDataDepth(request: QueryGetHistoryEpochDataDepthRequest): Promise<QueryGetHistoryEpochDataDepthResponse>;
    EpochProcessData(request: QueryGetEpochProcessDataRequest): Promise<QueryGetEpochProcessDataResponse>;
    AllEpochProcessData(request: QueryGetAllEpochProcessDataRequest): Promise<QueryGetAllEpochProcessDataResponse>;
    Superior(request: QueryGetSuperiorRequest): Promise<QueryGetSuperiorResponse>;
    EraLength(request: QueryGetEraLengthRequest): Promise<QueryGetEraLengthResponse>;
    CurrentEra(request: QueryGetCurrentEraRequest): Promise<QueryGetCurrentEraResponse>;
    ReputationPointChangeData(request: QueryGetReputationPointChangeDataRequest): Promise<QueryGetReputationPointChangeDataResponse>;
    AllReputationPointChangeDataByEra(request: QueryGetAllReputationPointChangeDataByEraRequest): Promise<QueryGetAllReputationPointChangeDataByEraResponse>;
    ReputationDeltaPoint(request: QueryGetReputationDeltaPointRequest): Promise<QueryGetReputationDeltaPointResponse>;
    AllReputationDeltaPointByEra(request: QueryGetAllReputationDeltaPointByEraRequest): Promise<QueryGetAllReputationDeltaPointByEraResponse>;
    ReputationPoint(request: QueryGetReputationPointRequest): Promise<QueryGetReputationPointResponse>;
    AllReputationPoint(request: QueryGetAllReputationPointRequest): Promise<QueryGetAllReputationPointResponse>;
    EraProcessData(request: QueryGetEraProcessDataRequest): Promise<QueryGetEraProcessDataResponse>;
    AllEraProcessData(request: QueryGetAllEraProcessDataRequest): Promise<QueryGetAllEraProcessDataResponse>;
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
