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
  pagination?: { next_key?: string; total?: string };
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
  pagination?: { next_key?: string; total?: string };
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
 * @title HTTP API Console enreach.manager
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryGetCurrentEpoch
   * @request GET:/enreach/manager/epoch/currentepoch
   */
  queryGetCurrentEpoch = (params: RequestParams = {}) =>
    this.request<{ currentEpoch?: string }, { code?: number; message?: string; details?: { "@type"?: string }[] }>({
      path: `/enreach/manager/epoch/currentepoch`,
      method: "GET",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryGetEpochLength
   * @request GET:/enreach/manager/epoch/length
   */
  queryGetEpochLength = (params: RequestParams = {}) =>
    this.request<{ epochLength?: string }, { code?: number; message?: string; details?: { "@type"?: string }[] }>({
      path: `/enreach/manager/epoch/length`,
      method: "GET",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryGetManagerByRegion
   * @request GET:/enreach/manager/get_manager_by_region/{regionCode}
   */
  queryGetManagerByRegion = (regionCode: string, params: RequestParams = {}) =>
    this.request<
      {
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
      },
      { code?: number; message?: string; details?: { "@type"?: string }[] }
    >({
      path: `/enreach/manager/get_manager_by_region/${regionCode}`,
      method: "GET",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryManager
   * @request GET:/enreach/manager/manager/{managerAccount}
   */
  queryManager = (managerAccount: string, params: RequestParams = {}) =>
    this.request<
      {
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
      },
      { code?: number; message?: string; details?: { "@type"?: string }[] }
    >({
      path: `/enreach/manager/manager/${managerAccount}`,
      method: "GET",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryManagerAll
   * @request GET:/enreach/manager/managers
   */
  queryManagerAll = (
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
        pagination?: { next_key?: string; total?: string };
      },
      { code?: number; message?: string; details?: { "@type"?: string }[] }
    >({
      path: `/enreach/manager/managers`,
      method: "GET",
      query: query,
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryOperator
   * @request GET:/enreach/manager/operator/{operatorAccount}
   */
  queryOperator = (operatorAccount: string, params: RequestParams = {}) =>
    this.request<
      {
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
      },
      { code?: number; message?: string; details?: { "@type"?: string }[] }
    >({
      path: `/enreach/manager/operator/${operatorAccount}`,
      method: "GET",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryOperatorAll
   * @request GET:/enreach/manager/operators
   */
  queryOperatorAll = (
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
        pagination?: { next_key?: string; total?: string };
      },
      { code?: number; message?: string; details?: { "@type"?: string }[] }
    >({
      path: `/enreach/manager/operators`,
      method: "GET",
      query: query,
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryParams
   * @request GET:/enreach/manager/params
   */
  queryParams = (params: RequestParams = {}) =>
    this.request<{ params?: object }, { code?: number; message?: string; details?: { "@type"?: string }[] }>({
      path: `/enreach/manager/params`,
      method: "GET",
      ...params,
    });
}
