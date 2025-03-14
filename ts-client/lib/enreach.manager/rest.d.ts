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
export interface QueryAllManagerResponse {
    Manager?: {
        managerAccount?: string;
        operatorAccount?: string;
        hostAddress?: string;
        managerPort?: number;
        trackerPort?: number;
        chainAPIPort?: number;
        chainRPCPort?: number;
        regionCode?: string;
        registerStatus?: string;
        workingStatus?: string;
        creator?: string;
        createAt?: string;
        updator?: string;
        updateAt?: string;
    }[];
    pagination?: {
        next_key?: string;
        total?: string;
    };
}
export interface QueryAllOperatorResponse {
    Operator?: {
        operatorAccount?: string;
        managerAccount?: string;
        evmAccount?: string;
        name?: string;
        description?: string;
        websiteUrl?: string;
        creator?: string;
        createAt?: string;
        updator?: string;
        updateAt?: string;
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
export interface QueryGetManagerByRegionResponse {
    managers?: {
        managerAccount?: string;
        operatorAccount?: string;
        hostAddress?: string;
        managerPort?: number;
        trackerPort?: number;
        chainAPIPort?: number;
        chainRPCPort?: number;
        regionCode?: string;
        registerStatus?: string;
        workingStatus?: string;
        creator?: string;
        createAt?: string;
        updator?: string;
        updateAt?: string;
    }[];
}
export interface QueryGetManagerResponse {
    Manager?: {
        managerAccount?: string;
        operatorAccount?: string;
        hostAddress?: string;
        managerPort?: number;
        trackerPort?: number;
        chainAPIPort?: number;
        chainRPCPort?: number;
        regionCode?: string;
        registerStatus?: string;
        workingStatus?: string;
        creator?: string;
        createAt?: string;
        updator?: string;
        updateAt?: string;
    };
}
export interface QueryGetOperatorResponse {
    Operator?: {
        operatorAccount?: string;
        managerAccount?: string;
        evmAccount?: string;
        name?: string;
        description?: string;
        websiteUrl?: string;
        creator?: string;
        createAt?: string;
        updator?: string;
        updateAt?: string;
    };
}
export interface QueryParamsResponse {
    params?: object;
}
export interface ManagerManager {
    managerAccount?: string;
    operatorAccount?: string;
    hostAddress?: string;
    /** @format int64 */
    managerPort?: number;
    /** @format int64 */
    trackerPort?: number;
    /** @format int64 */
    chainAPIPort?: number;
    /** @format int64 */
    chainRPCPort?: number;
    regionCode?: string;
    registerStatus?: string;
    workingStatus?: string;
    creator?: string;
    /** @format uint64 */
    createAt?: string;
    updator?: string;
    /** @format uint64 */
    updateAt?: string;
}
export interface ManagerOperator {
    operatorAccount?: string;
    managerAccount?: string;
    evmAccount?: string;
    name?: string;
    description?: string;
    websiteUrl?: string;
    creator?: string;
    /** @format uint64 */
    createAt?: string;
    updator?: string;
    /** @format uint64 */
    updateAt?: string;
}
export type ManagerParams = object;
export type MsgActivateManagerResponse = object;
export type MsgBindOperatorEVMAccountResponse = object;
export type MsgBindOperatorManagerAccountResponse = object;
export type MsgCreateOperatorResponse = object;
export type MsgGoWorkingResponse = object;
export type MsgRegisterManagerResponse = object;
export type MsgSetManagerRegionResponse = object;
export type MsgUpdateManagerConnParamsResponse = object;
export type MsgUpdateOperatorBasicInfoResponse = object;
export type MsgUpdateParamsResponse = object;
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
 * @title HTTP API Console enreach.manager
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
     * @name QueryGetManagerByRegion
     * @request GET:/enreach/manager/get_manager_by_region/{regionCode}
     */
    queryGetManagerByRegion: (regionCode: string, params?: RequestParams) => Promise<AxiosResponse<T>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryManager
     * @request GET:/enreach/manager/manager/{managerAccount}
     */
    queryManager: (managerAccount: string, params?: RequestParams) => Promise<AxiosResponse<T>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryManagerAll
     * @request GET:/enreach/manager/managers
     */
    queryManagerAll: (query?: {
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
     * @name QueryOperator
     * @request GET:/enreach/manager/operator/{operatorAccount}
     */
    queryOperator: (operatorAccount: string, params?: RequestParams) => Promise<AxiosResponse<T>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryOperatorAll
     * @request GET:/enreach/manager/operators
     */
    queryOperatorAll: (query?: {
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
     * @name QueryParams
     * @request GET:/enreach/manager/params
     */
    queryParams: (params?: RequestParams) => Promise<AxiosResponse<T>>;
}
