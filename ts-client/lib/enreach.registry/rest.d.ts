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
export interface QueryAllRegionResponse {
    Region?: {
        code?: string;
        name?: string;
        description?: string;
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
export interface QueryGetRegionResponse {
    Region?: {
        code?: string;
        name?: string;
        description?: string;
        creator?: string;
        createAt?: string;
        updator?: string;
        updateAt?: string;
    };
}
export interface QueryGetSuperiorResponse {
    Superior?: {
        account?: string;
        creator?: string;
        createAt?: string;
        updator?: string;
        updateAt?: string;
        signer?: string;
    };
}
export interface QueryParamsResponse {
    params?: object;
}
export type RegistryParams = object;
export interface RegistryRegion {
    code?: string;
    name?: string;
    description?: string;
    creator?: string;
    /** @format uint64 */
    createAt?: string;
    updator?: string;
    /** @format uint64 */
    updateAt?: string;
}
export interface RegistrySuperior {
    account?: string;
    creator?: string;
    /** @format uint64 */
    createAt?: string;
    updator?: string;
    /** @format uint64 */
    updateAt?: string;
    signer?: string;
}
export type MsgCreateRegionResponse = object;
export type MsgCreateSuperiorResponse = object;
export type MsgDeleteRegionResponse = object;
export type MsgUpdateParamsResponse = object;
export type MsgUpdateRegionResponse = object;
export type MsgUpdateSuperiorResponse = object;
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
 * @title HTTP API Console enreach.registry
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Query
     * @name QueryParams
     * @request GET:/enreach/registry/params
     */
    queryParams: (params?: RequestParams) => Promise<AxiosResponse<T>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryRegion
     * @request GET:/enreach/registry/region/{code}
     */
    queryRegion: (code: string, params?: RequestParams) => Promise<AxiosResponse<T>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryRegionAll
     * @request GET:/enreach/registry/regions
     */
    queryRegionAll: (query?: {
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
     * @name QuerySuperior
     * @request GET:/enreach/registry/superior
     */
    querySuperior: (params?: RequestParams) => Promise<AxiosResponse<T>>;
}
