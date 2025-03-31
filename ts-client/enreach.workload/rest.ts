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

export interface QueryGetAllEpochProcessDataResponse {
  EpochProcessDatas?: {
    epoch?: string;
    totalNodesCount?: string;
    processedNodesCount?: string;
    startAt?: string;
    updateAt?: string;
    status?: string;
    pagination?: { next_key?: string; total?: string };
  }[];
  pagination?: { next_key?: string; total?: string };
}

export interface QueryGetAllManagerWorkloadByEpochResponse {
  ManagerWorkloads?: {
    epoch?: string;
    managerAccount?: string;
    reportedNodesCount?: string;
    score?: string;
    createAt?: string;
    updateAt?: string;
  }[];
  pagination?: { next_key?: string; total?: string };
}

export interface QueryGetAllNodeWorkloadByEpochResponse {
  NodeWorkloads?: { epoch?: string; nodeID?: string; score?: string; createAt?: string }[];
  pagination?: { next_key?: string; total?: string };
}

export interface QueryGetAllWorkreportByEpochResponse {
  Workreports?: {
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

export interface QueryGetEpochProcessDataResponse {
  EpochProcessData?: {
    epoch?: string;
    totalNodesCount?: string;
    processedNodesCount?: string;
    startAt?: string;
    updateAt?: string;
    status?: string;
    pagination?: { next_key?: string; total?: string };
  };
}

export interface QueryGetHistoryEpochDataDepthResponse {
  /** @format uint64 */
  depth?: string;
}

export interface QueryGetManagerWorkloadResponse {
  ManagerWorkload?: {
    epoch?: string;
    managerAccount?: string;
    reportedNodesCount?: string;
    score?: string;
    createAt?: string;
    updateAt?: string;
  };
}

export interface QueryGetNodeWorkloadResponse {
  NodeWorkload?: { epoch?: string; nodeID?: string; score?: string; createAt?: string };
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

export interface QueryGetWorkreportProcessBatchSizeResponse {
  /** @format uint64 */
  batchSize?: string;
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

export interface WorkloadEpochProcessData {
  /** @format uint64 */
  epoch?: string;

  /** @format uint64 */
  totalNodesCount?: string;

  /** @format uint64 */
  processedNodesCount?: string;

  /** @format uint64 */
  startAt?: string;

  /** @format uint64 */
  updateAt?: string;
  status?: string;
  pagination?: { next_key?: string; total?: string };
}

export interface WorkloadManagerWorkload {
  /** @format uint64 */
  epoch?: string;
  managerAccount?: string;

  /** @format uint64 */
  reportedNodesCount?: string;

  /** @format uint64 */
  score?: string;

  /** @format uint64 */
  createAt?: string;

  /** @format uint64 */
  updateAt?: string;
}

export interface WorkloadNodeWorkload {
  /** @format uint64 */
  epoch?: string;
  nodeID?: string;

  /** @format uint64 */
  score?: string;

  /** @format uint64 */
  createAt?: string;
}

export type WorkloadParams = object;

export interface WorkloadSuperior {
  account?: string;
  creator?: string;

  /** @format uint64 */
  createAt?: string;
  updator?: string;

  /** @format uint64 */
  updateAt?: string;
  signer?: string;
}

export interface WorkloadWorkreport {
  /** @format uint64 */
  epoch?: string;
  nodeID?: string;
  managerScoreMap?: Record<string, { score?: string; createAt?: string; updateAt?: string }>;
}

export type MsgCreateSuperiorResponse = object;

export type MsgSubmitWorkreportsResponse = object;

export type MsgUpdateHistoryEpochDataDepthResponse = object;

export type MsgUpdateParamsResponse = object;

export type MsgUpdateSuperiorResponse = object;

export type MsgUpdateWorkreportProcessBatchSizeResponse = object;

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
   * @name QueryCurrentEpoch
   * @request GET:/enreach/workload/epoch/currentepoch
   */
  queryCurrentEpoch = (params: RequestParams = {}) =>
    this.request<{ currentEpoch?: string }, { code?: number; message?: string; details?: { "@type"?: string }[] }>({
      path: `/enreach/workload/epoch/currentepoch`,
      method: "GET",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryEpochLength
   * @request GET:/enreach/workload/epoch/length
   */
  queryEpochLength = (params: RequestParams = {}) =>
    this.request<{ epochLength?: string }, { code?: number; message?: string; details?: { "@type"?: string }[] }>({
      path: `/enreach/workload/epoch/length`,
      method: "GET",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryManagerWorkload
   * @request GET:/enreach/workload/manager_workload/{epoch}/{managerAccount}
   */
  queryManagerWorkload = (epoch: string, managerAccount: string, params: RequestParams = {}) =>
    this.request<
      {
        ManagerWorkload?: {
          epoch?: string;
          managerAccount?: string;
          reportedNodesCount?: string;
          score?: string;
          createAt?: string;
          updateAt?: string;
        };
      },
      { code?: number; message?: string; details?: { "@type"?: string }[] }
    >({
      path: `/enreach/workload/manager_workload/${epoch}/${managerAccount}`,
      method: "GET",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryAllManagerWorkloadByEpoch
   * @request GET:/enreach/workload/manager_workloads/{epoch}
   */
  queryAllManagerWorkloadByEpoch = (
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
        ManagerWorkloads?: {
          epoch?: string;
          managerAccount?: string;
          reportedNodesCount?: string;
          score?: string;
          createAt?: string;
          updateAt?: string;
        }[];
        pagination?: { next_key?: string; total?: string };
      },
      { code?: number; message?: string; details?: { "@type"?: string }[] }
    >({
      path: `/enreach/workload/manager_workloads/${epoch}`,
      method: "GET",
      query: query,
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryNodeWorkload
   * @request GET:/enreach/workload/node_workload/{epoch}/{nodeID}
   */
  queryNodeWorkload = (epoch: string, nodeId: string, params: RequestParams = {}) =>
    this.request<
      { NodeWorkload?: { epoch?: string; nodeID?: string; score?: string; createAt?: string } },
      { code?: number; message?: string; details?: { "@type"?: string }[] }
    >({
      path: `/enreach/workload/node_workload/${epoch}/${nodeId}`,
      method: "GET",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryAllNodeWorkloadByEpoch
   * @request GET:/enreach/workload/node_workloads/{epoch}
   */
  queryAllNodeWorkloadByEpoch = (
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
        NodeWorkloads?: { epoch?: string; nodeID?: string; score?: string; createAt?: string }[];
        pagination?: { next_key?: string; total?: string };
      },
      { code?: number; message?: string; details?: { "@type"?: string }[] }
    >({
      path: `/enreach/workload/node_workloads/${epoch}`,
      method: "GET",
      query: query,
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
   * @name QuerySuperior
   * @request GET:/enreach/workload/superior
   */
  querySuperior = (params: RequestParams = {}) =>
    this.request<
      {
        Superior?: {
          account?: string;
          creator?: string;
          createAt?: string;
          updator?: string;
          updateAt?: string;
          signer?: string;
        };
      },
      { code?: number; message?: string; details?: { "@type"?: string }[] }
    >({
      path: `/enreach/workload/superior`,
      method: "GET",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryEpochProcessData
   * @request GET:/enreach/workload/workreport/epoch_process_data/{epoch}
   */
  queryEpochProcessData = (epoch: string, params: RequestParams = {}) =>
    this.request<
      {
        EpochProcessData?: {
          epoch?: string;
          totalNodesCount?: string;
          processedNodesCount?: string;
          startAt?: string;
          updateAt?: string;
          status?: string;
          pagination?: { next_key?: string; total?: string };
        };
      },
      { code?: number; message?: string; details?: { "@type"?: string }[] }
    >({
      path: `/enreach/workload/workreport/epoch_process_data/${epoch}`,
      method: "GET",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryAllEpochProcessData
   * @request GET:/enreach/workload/workreport/epoch_process_datas
   */
  queryAllEpochProcessData = (
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
        EpochProcessDatas?: {
          epoch?: string;
          totalNodesCount?: string;
          processedNodesCount?: string;
          startAt?: string;
          updateAt?: string;
          status?: string;
          pagination?: { next_key?: string; total?: string };
        }[];
        pagination?: { next_key?: string; total?: string };
      },
      { code?: number; message?: string; details?: { "@type"?: string }[] }
    >({
      path: `/enreach/workload/workreport/epoch_process_datas`,
      method: "GET",
      query: query,
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryHistoryEpochDataDepth
   * @request GET:/enreach/workload/workreport/history_epoch_data_depth
   */
  queryHistoryEpochDataDepth = (params: RequestParams = {}) =>
    this.request<{ depth?: string }, { code?: number; message?: string; details?: { "@type"?: string }[] }>({
      path: `/enreach/workload/workreport/history_epoch_data_depth`,
      method: "GET",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryWorkreportProcessBatchSize
   * @request GET:/enreach/workload/workreport/process_batch_size
   */
  queryWorkreportProcessBatchSize = (params: RequestParams = {}) =>
    this.request<{ batchSize?: string }, { code?: number; message?: string; details?: { "@type"?: string }[] }>({
      path: `/enreach/workload/workreport/process_batch_size`,
      method: "GET",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryWorkreport
   * @request GET:/enreach/workload/workreport/{epoch}/{nodeID}
   */
  queryWorkreport = (epoch: string, nodeId: string, params: RequestParams = {}) =>
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
   * @name QueryAllWorkreportByEpoch
   * @request GET:/enreach/workload/workreports/{epoch}
   */
  queryAllWorkreportByEpoch = (
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
        Workreports?: {
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
