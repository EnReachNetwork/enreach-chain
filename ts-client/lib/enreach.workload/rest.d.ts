export interface Any {
    "@type"?: string;
}
export interface Status {
    /** @format int32 */
    code?: number;
    message?: string;
    details?: {
        "@type"?: string;
    }[];
}
export interface NodeScoreDB {
    /** @format uint64 */
    score?: string;
    /** @format uint64 */
    createAt?: string;
    /** @format uint64 */
    updateAt?: string;
}
export interface PageRequest {
    /** @format byte */
    key?: string;
    /** @format uint64 */
    offset?: string;
    /** @format uint64 */
    limit?: string;
    count_total?: boolean;
    reverse?: boolean;
}
export interface PageResponse {
    /** @format byte */
    next_key?: string;
    /** @format uint64 */
    total?: string;
}
export interface QueryAllWorkloadResponse {
    Workload?: {
        id?: string;
        managerAccount?: string;
        epoch?: string;
        nodeID?: string;
        score?: string;
        createAt?: string;
    }[];
    pagination?: {
        next_key?: string;
        total?: string;
    };
}
export interface QueryGetAllWorkreportByEpochResponse {
    Workreport?: {
        epoch?: string;
        nodeID?: string;
        managerScoreMap?: Record<string, {
            score?: string;
            createAt?: string;
            updateAt?: string;
        }>;
    }[];
    pagination?: {
        next_key?: string;
        total?: string;
    };
}
export interface QueryGetCurrentEpochResponse {
    /** @format uint64 */
    currentEpoch?: string;
}
export interface QueryGetEpochLengthResponse {
    /** @format uint64 */
    epochLength?: string;
}
export interface QueryGetWorkloadResponse {
    Workload?: {
        id?: string;
        managerAccount?: string;
        epoch?: string;
        nodeID?: string;
        score?: string;
        createAt?: string;
    };
}
export interface QueryGetWorkreportResponse {
    Workreport?: {
        epoch?: string;
        nodeID?: string;
        managerScoreMap?: Record<string, {
            score?: string;
            createAt?: string;
            updateAt?: string;
        }>;
    };
}
export interface QueryParamsResponse {
    params?: object;
}
export interface Workreport {
    /** @format uint64 */
    epoch?: string;
    nodeID?: string;
    managerScoreMap?: Record<string, {
        score?: string;
        createAt?: string;
        updateAt?: string;
    }>;
}
export type WorkloadParams = object;
export interface WorkloadWorkload {
    /** @format uint64 */
    id?: string;
    managerAccount?: string;
    /** @format uint64 */
    epoch?: string;
    nodeID?: string;
    /** @format uint64 */
    score?: string;
    /** @format uint64 */
    createAt?: string;
}
export type MsgSubmitWorkreportsResponse = object;
export type MsgUpdateParamsResponse = object;
export interface NodeScore {
    nodeID?: string;
    /** @format uint64 */
    score?: string;
}
export type Params = object;
import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from "axios";
export type QueryParamsType = Record<string | number, any>;
export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
    /** set parameter to `true` for call `securityWorker` for this request */
    secure?: boolean;
    /** request path */
    path: string;
    /** content type of request body */
    type?: ContentType;
    /** query params */
    query?: QueryParamsType;
    /** format of response (i.e. response.json() -> format: "json") */
    format?: ResponseType;
    /** request body */
    body?: unknown;
}
export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;
export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
    securityWorker?: (securityData: SecurityDataType | null) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
    secure?: boolean;
    format?: ResponseType;
}
export declare enum ContentType {
    Json = "application/json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded"
}
export declare class HttpClient<SecurityDataType = unknown> {
    instance: AxiosInstance;
    private securityData;
    private securityWorker?;
    private secure?;
    private format?;
    constructor({ securityWorker, secure, format, ...axiosConfig }?: ApiConfig<SecurityDataType>);
    setSecurityData: (data: SecurityDataType | null) => void;
    private mergeRequestParams;
    private createFormData;
    request: <T = any, _E = any>({ secure, path, type, query, format, body, ...params }: FullRequestParams) => Promise<AxiosResponse<T>>;
}
/**
 * @title HTTP API Console enreach.workload
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Query
     * @name QueryGetCurrentEpoch
     * @request GET:/enreach/manager/epoch/currentepoch
     */
    queryGetCurrentEpoch: (params?: RequestParams) => Promise<AxiosResponse<T>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryGetEpochLength
     * @request GET:/enreach/manager/epoch/length
     */
    queryGetEpochLength: (params?: RequestParams) => Promise<AxiosResponse<T>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryParams
     * @request GET:/enreach/workload/params
     */
    queryParams: (params?: RequestParams) => Promise<AxiosResponse<T>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryWorkload
     * @request GET:/enreach/workload/workload/{id}
     */
    queryWorkload: (id: string, params?: RequestParams) => Promise<AxiosResponse<T>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryWorkloadAll
     * @request GET:/enreach/workload/workloads
     */
    queryWorkloadAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.count_total"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<AxiosResponse<T>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryGetWorkreport
     * @request GET:/enreach/workload/workreport/{epoch}/{nodeID}
     */
    queryGetWorkreport: (epoch: string, nodeId: string, params?: RequestParams) => Promise<AxiosResponse<T>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryGetAllWorkreportByEpoch
     * @request GET:/enreach/workload/workreports/{epoch}
     */
    queryGetAllWorkreportByEpoch: (epoch: string, query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.count_total"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<AxiosResponse<T>>;
}
