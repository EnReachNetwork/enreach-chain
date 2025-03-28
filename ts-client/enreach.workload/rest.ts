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
  pagination?: { next_key?: string; total?: string };
}

export interface QueryGetAllWorkreportByEpochResponse {
  Workreport?: {
    epoch?: string;
    nodeID?: string;
    managerScoreMap?: Record<string, { score?: string; createAt?: string; updateAt?: string }>;
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
    managerScoreMap?: Record<string, { score?: string; createAt?: string; updateAt?: string }>;
  };
}

export interface QueryParamsResponse {
  params?: object;
}

export interface Workreport {
  /** @format uint64 */
  epoch?: string;
  nodeID?: string;
  managerScoreMap?: Record<string, { score?: string; createAt?: string; updateAt?: string }>;
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
 * @title HTTP API Console enreach.workload
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
   * @name QueryParams
   * @request GET:/enreach/workload/params
   */
  queryParams = (params: RequestParams = {}) =>
    this.request<{ params?: object }, { code?: number; message?: string; details?: { "@type"?: string }[] }>({
      path: `/enreach/workload/params`,
      method: "GET",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryWorkload
   * @request GET:/enreach/workload/workload/{id}
   */
  queryWorkload = (id: string, params: RequestParams = {}) =>
    this.request<
      {
        Workload?: {
          id?: string;
          managerAccount?: string;
          epoch?: string;
          nodeID?: string;
          score?: string;
          createAt?: string;
        };
      },
      { code?: number; message?: string; details?: { "@type"?: string }[] }
    >({
      path: `/enreach/workload/workload/${id}`,
      method: "GET",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryWorkloadAll
   * @request GET:/enreach/workload/workloads
   */
  queryWorkloadAll = (
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
        Workload?: {
          id?: string;
          managerAccount?: string;
          epoch?: string;
          nodeID?: string;
          score?: string;
          createAt?: string;
        }[];
        pagination?: { next_key?: string; total?: string };
      },
      { code?: number; message?: string; details?: { "@type"?: string }[] }
    >({
      path: `/enreach/workload/workloads`,
      method: "GET",
      query: query,
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryGetWorkreport
   * @request GET:/enreach/workload/workreport/{epoch}/{nodeID}
   */
  queryGetWorkreport = (epoch: string, nodeId: string, params: RequestParams = {}) =>
    this.request<
      {
        Workreport?: {
          epoch?: string;
          nodeID?: string;
          managerScoreMap?: Record<string, { score?: string; createAt?: string; updateAt?: string }>;
        };
      },
      { code?: number; message?: string; details?: { "@type"?: string }[] }
    >({
      path: `/enreach/workload/workreport/${epoch}/${nodeId}`,
      method: "GET",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryGetAllWorkreportByEpoch
   * @request GET:/enreach/workload/workreports/{epoch}
   */
  queryGetAllWorkreportByEpoch = (
    epoch: string,
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
        Workreport?: {
          epoch?: string;
          nodeID?: string;
          managerScoreMap?: Record<string, { score?: string; createAt?: string; updateAt?: string }>;
        }[];
        pagination?: { next_key?: string; total?: string };
      },
      { code?: number; message?: string; details?: { "@type"?: string }[] }
    >({
      path: `/enreach/workload/workreports/${epoch}`,
      method: "GET",
      query: query,
      ...params,
    });
}
