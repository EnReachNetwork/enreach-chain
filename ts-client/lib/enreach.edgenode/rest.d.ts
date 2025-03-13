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
export interface QueryAllNodeResponse {
    Node?: {
        nodeID?: string;
        userID?: string;
        nodeName?: string;
        deviceType?: string;
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
export interface QueryAllUserResponse {
    User?: {
        userID?: string;
        evmAccount?: string;
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
export interface QueryGetNodeResponse {
    Node?: {
        nodeID?: string;
        userID?: string;
        nodeName?: string;
        deviceType?: string;
        regionCode?: string;
        registerStatus?: string;
        workingStatus?: string;
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
    };
}
export interface QueryGetUserResponse {
    User?: {
        userID?: string;
        evmAccount?: string;
        creator?: string;
        createAt?: string;
        updator?: string;
        updateAt?: string;
    };
}
export interface QueryParamsResponse {
    params?: object;
}
export interface EdgenodeNode {
    nodeID?: string;
    userID?: string;
    nodeName?: string;
    deviceType?: string;
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
export type EdgenodeParams = object;
export interface EdgenodeSuperior {
    account?: string;
    creator?: string;
    /** @format uint64 */
    createAt?: string;
    updator?: string;
    /** @format uint64 */
    updateAt?: string;
}
export interface EdgenodeUser {
    userID?: string;
    evmAccount?: string;
    creator?: string;
    /** @format uint64 */
    createAt?: string;
    updator?: string;
    /** @format uint64 */
    updateAt?: string;
}
export type MsgBindAndActivateNodeResponse = object;
export type MsgBindUserEVMAccountResponse = object;
export type MsgCreateSuperiorResponse = object;
export type MsgCreateUserResponse = object;
export type MsgRegisterNodeResponse = object;
export type MsgUnbindNodeResponse = object;
export type MsgUpdateParamsResponse = object;
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
 * @title HTTP API Console enreach.edgenode
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Query
     * @name QueryNode
     * @request GET:/enreach/edgenode/node/{nodeID}
     */
    queryNode: (nodeId: string, params?: RequestParams) => Promise<AxiosResponse<T>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryNodeAll
     * @request GET:/enreach/edgenode/nodes
     */
    queryNodeAll: (query?: {
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
     * @request GET:/enreach/edgenode/params
     */
    queryParams: (params?: RequestParams) => Promise<AxiosResponse<T>>;
    /**
     * No description
     *
     * @tags Query
     * @name QuerySuperior
     * @request GET:/enreach/edgenode/superior
     */
    querySuperior: (params?: RequestParams) => Promise<AxiosResponse<T>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryUser
     * @request GET:/enreach/edgenode/user/{userID}
     */
    queryUser: (userId: string, params?: RequestParams) => Promise<AxiosResponse<T>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryUserAll
     * @request GET:/enreach/edgenode/users
     */
    queryUserAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.count_total"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<AxiosResponse<T>>;
}
