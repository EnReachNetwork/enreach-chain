/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Any {
  "@type"?: string;
}

export interface Status {
  /** @format int32 */
  code?: number;
  message?: string;
  details?: { "@type"?: string }[];
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
    trafficType?: number;
    registerStatus?: string;
    workingStatus?: string;
    cheatStatus?: string;
    reputationPoint?: string;
    creator?: string;
    createAt?: string;
    updator?: string;
    updateAt?: string;
  }[];
  pagination?: { next_key?: string; total?: string };
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
  pagination?: { next_key?: string; total?: string };
}

export interface QueryGetNodeResponse {
  Node?: {
    nodeID?: string;
    userID?: string;
    nodeName?: string;
    deviceType?: string;
    regionCode?: string;
    trafficType?: number;
    registerStatus?: string;
    workingStatus?: string;
    cheatStatus?: string;
    reputationPoint?: string;
    creator?: string;
    createAt?: string;
    updator?: string;
    updateAt?: string;
  };
}

export interface QueryGetSuperiorResponse {
  Superior?: { account?: string; creator?: string; createAt?: string; updator?: string; updateAt?: string };
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

  /** @format int64 */
  trafficType?: number;
  registerStatus?: string;
  workingStatus?: string;
  cheatStatus?: string;

  /** @format int64 */
  reputationPoint?: string;
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

export type MsgUpdateNodeTrafficTypeBatchResponse = object;

export type MsgUpdateParamsResponse = object;

export type MsgUpdateSuperiorResponse = object;

export type Params = object;

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from "axios";

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
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  private mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.instance.defaults.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      formData.append(
        key,
        property instanceof Blob
          ? property
          : typeof property === "object" && property !== null
          ? JSON.stringify(property)
          : `${property}`,
      );
      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = (format && this.format) || void 0;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      requestParams.headers.common = { Accept: "*/*" };
      requestParams.headers.post = {};
      requestParams.headers.put = {};

      body = this.createFormData(body as Record<string, unknown>);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title HTTP API Console enreach.edgenode
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryNode
   * @request GET:/enreach/edgenode/node/{nodeID}
   */
  queryNode = (nodeId: string, params: RequestParams = {}) =>
    this.request<
      {
        Node?: {
          nodeID?: string;
          userID?: string;
          nodeName?: string;
          deviceType?: string;
          regionCode?: string;
          trafficType?: number;
          registerStatus?: string;
          workingStatus?: string;
          cheatStatus?: string;
          reputationPoint?: string;
          creator?: string;
          createAt?: string;
          updator?: string;
          updateAt?: string;
        };
      },
      { code?: number; message?: string; details?: { "@type"?: string }[] }
    >({
      path: `/enreach/edgenode/node/${nodeId}`,
      method: "GET",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryNodeAll
   * @request GET:/enreach/edgenode/nodes
   */
  queryNodeAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      {
        Node?: {
          nodeID?: string;
          userID?: string;
          nodeName?: string;
          deviceType?: string;
          regionCode?: string;
          trafficType?: number;
          registerStatus?: string;
          workingStatus?: string;
          cheatStatus?: string;
          reputationPoint?: string;
          creator?: string;
          createAt?: string;
          updator?: string;
          updateAt?: string;
        }[];
        pagination?: { next_key?: string; total?: string };
      },
      { code?: number; message?: string; details?: { "@type"?: string }[] }
    >({
      path: `/enreach/edgenode/nodes`,
      method: "GET",
      query: query,
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryParams
   * @request GET:/enreach/edgenode/params
   */
  queryParams = (params: RequestParams = {}) =>
    this.request<{ params?: object }, { code?: number; message?: string; details?: { "@type"?: string }[] }>({
      path: `/enreach/edgenode/params`,
      method: "GET",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QuerySuperior
   * @request GET:/enreach/edgenode/superior
   */
  querySuperior = (params: RequestParams = {}) =>
    this.request<
      { Superior?: { account?: string; creator?: string; createAt?: string; updator?: string; updateAt?: string } },
      { code?: number; message?: string; details?: { "@type"?: string }[] }
    >({
      path: `/enreach/edgenode/superior`,
      method: "GET",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryUser
   * @request GET:/enreach/edgenode/user/{userID}
   */
  queryUser = (userId: string, params: RequestParams = {}) =>
    this.request<
      {
        User?: {
          userID?: string;
          evmAccount?: string;
          creator?: string;
          createAt?: string;
          updator?: string;
          updateAt?: string;
        };
      },
      { code?: number; message?: string; details?: { "@type"?: string }[] }
    >({
      path: `/enreach/edgenode/user/${userId}`,
      method: "GET",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryUserAll
   * @request GET:/enreach/edgenode/users
   */
  queryUserAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      {
        User?: {
          userID?: string;
          evmAccount?: string;
          creator?: string;
          createAt?: string;
          updator?: string;
          updateAt?: string;
        }[];
        pagination?: { next_key?: string; total?: string };
      },
      { code?: number; message?: string; details?: { "@type"?: string }[] }
    >({
      path: `/enreach/edgenode/users`,
      method: "GET",
      query: query,
      ...params,
    });
}
