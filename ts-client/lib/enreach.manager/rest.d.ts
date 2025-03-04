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
        id?: string;
        managerAddress?: string;
        operatorName?: string;
        operatorDesc?: string;
        operatorWebsiteURL?: string;
        evmAddress?: string;
        hostAddress?: string;
        managerPort?: number;
        trackerPort?: number;
        chainAPIPort?: number;
        chainRPCPort?: number;
        regionCode?: string;
        status?: string;
        creator?: string;
    }[];
    pagination?: {
        next_key?: string;
        total?: string;
    };
}
export interface QueryGetManagerByRegionResponse {
    managers?: {
        id?: string;
        managerAddress?: string;
        operatorName?: string;
        operatorDesc?: string;
        operatorWebsiteURL?: string;
        evmAddress?: string;
        hostAddress?: string;
        managerPort?: number;
        trackerPort?: number;
        chainAPIPort?: number;
        chainRPCPort?: number;
        regionCode?: string;
        status?: string;
        creator?: string;
    }[];
}
export interface QueryGetManagerResponse {
    Manager?: {
        id?: string;
        managerAddress?: string;
        operatorName?: string;
        operatorDesc?: string;
        operatorWebsiteURL?: string;
        evmAddress?: string;
        hostAddress?: string;
        managerPort?: number;
        trackerPort?: number;
        chainAPIPort?: number;
        chainRPCPort?: number;
        regionCode?: string;
        status?: string;
        creator?: string;
    };
}
export interface QueryParamsResponse {
    params?: object;
}
export interface ManagerManager {
    /** @format uint64 */
    id?: string;
    managerAddress?: string;
    operatorName?: string;
    operatorDesc?: string;
    operatorWebsiteURL?: string;
    evmAddress?: string;
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
    status?: string;
    creator?: string;
}
export type ManagerParams = object;
export type MsgDeleteManagerResponse = object;
export interface MsgRegisterManagerResponse {
    /** @format uint64 */
    id?: string;
}
export type MsgUpdateManagerResponse = object;
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
     * @name QueryGetManagerByRegion
     * @request GET:/enreach/manager/get_manager_by_region/{regionCode}
     */
    queryGetManagerByRegion: (regionCode: string, params?: RequestParams) => Promise<AxiosResponse<T>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryManager
     * @request GET:/enreach/manager/manager/{id}
     */
    queryManager: (id: string, params?: RequestParams) => Promise<AxiosResponse<T>>;
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
     * @name QueryParams
     * @request GET:/enreach/manager/params
     */
    queryParams: (params?: RequestParams) => Promise<AxiosResponse<T>>;
}
