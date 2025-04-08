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
export interface EpochInfo {
    /** @format uint64 */
    number?: string;
    /** @format date-time */
    startTime?: string;
    /** @format uint64 */
    startBlock?: string;
    /** @format date-time */
    endTime?: string;
    /** @format uint64 */
    endBlock?: string;
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
        pagination?: {
            next_key?: string;
            total?: string;
        };
    }[];
    pagination?: {
        next_key?: string;
        total?: string;
    };
}
export interface QueryGetAllEraProcessDataResponse {
    EraProcessDatas?: {
        era?: string;
        totalNodesCount?: string;
        processedNodesCount?: string;
        startAt?: string;
        updateAt?: string;
        status?: string;
        pagination?: {
            next_key?: string;
            total?: string;
        };
    }[];
    pagination?: {
        next_key?: string;
        total?: string;
    };
}
export interface QueryGetAllHistoryEpochResponse {
    EpochInfos?: {
        number?: string;
        startTime?: string;
        startBlock?: string;
        endTime?: string;
        endBlock?: string;
    }[];
    pagination?: {
        next_key?: string;
        total?: string;
    };
}
export interface QueryGetAllManagerRPWorkloadByEraResponse {
    ManagerRPWorkloads?: {
        era?: string;
        managerAccount?: string;
        reportedNodesCount?: string;
        score?: string;
        createAt?: string;
        updateAt?: string;
    }[];
    pagination?: {
        next_key?: string;
        total?: string;
    };
}
export interface QueryGetAllManagerWRWorkloadByEpochResponse {
    ManagerWRWorkloads?: {
        epoch?: string;
        managerAccount?: string;
        reportedNodesCount?: string;
        score?: string;
        createAt?: string;
        updateAt?: string;
    }[];
    pagination?: {
        next_key?: string;
        total?: string;
    };
}
export interface QueryGetAllNodeWorkloadByEpochResponse {
    NodeWorkloads?: {
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
export interface QueryGetAllReputationDeltaPointByEraResponse {
    ReputationDeltaPoints?: {
        era?: string;
        nodeID?: string;
        deltaPoint?: string;
        createAt?: string;
    }[];
    pagination?: {
        next_key?: string;
        total?: string;
    };
}
export interface QueryGetAllReputationPointChangeDataByEraResponse {
    ReputationPointChangeDatas?: {
        era?: string;
        nodeID?: string;
        data?: Record<string, {
            deltaPoint?: string;
            createAt?: string;
            updateAt?: string;
        }>;
    }[];
    pagination?: {
        next_key?: string;
        total?: string;
    };
}
export interface QueryGetAllReputationPointResponse {
    ReputationPoints?: {
        nodeID?: string;
        point?: string;
        createAt?: string;
        updateAt?: string;
    }[];
    pagination?: {
        next_key?: string;
        total?: string;
    };
}
export interface QueryGetAllWorkreportByEpochResponse {
    Workreports?: {
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
    EpochInfo?: {
        number?: string;
        startTime?: string;
        startBlock?: string;
        endTime?: string;
        endBlock?: string;
    };
}
export interface QueryGetCurrentEraResponse {
    /** @format uint64 */
    currentEra?: string;
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
        pagination?: {
            next_key?: string;
            total?: string;
        };
    };
}
export interface QueryGetEraLengthResponse {
    /** @format uint64 */
    eraLength?: string;
}
export interface QueryGetEraProcessDataResponse {
    EraProcessData?: {
        era?: string;
        totalNodesCount?: string;
        processedNodesCount?: string;
        startAt?: string;
        updateAt?: string;
        status?: string;
        pagination?: {
            next_key?: string;
            total?: string;
        };
    };
}
export interface QueryGetHistoryEpochDataDepthResponse {
    /** @format uint64 */
    depth?: string;
}
export interface QueryGetHistoryEpochResponse {
    EpochInfo?: {
        number?: string;
        startTime?: string;
        startBlock?: string;
        endTime?: string;
        endBlock?: string;
    };
}
export interface QueryGetManagerRPWorkloadResponse {
    ManagerRPWorkload?: {
        era?: string;
        managerAccount?: string;
        reportedNodesCount?: string;
        score?: string;
        createAt?: string;
        updateAt?: string;
    };
}
export interface QueryGetManagerWRWorkloadResponse {
    ManagerWRWorkload?: {
        epoch?: string;
        managerAccount?: string;
        reportedNodesCount?: string;
        score?: string;
        createAt?: string;
        updateAt?: string;
    };
}
export interface QueryGetNodeWorkloadResponse {
    NodeWorkload?: {
        epoch?: string;
        nodeID?: string;
        score?: string;
        createAt?: string;
    };
}
export interface QueryGetPendingNextEpochResponse {
    EpochInfo?: {
        number?: string;
        startTime?: string;
        startBlock?: string;
        endTime?: string;
        endBlock?: string;
    };
}
export interface QueryGetReputationDeltaPointResponse {
    ReputationDeltaPoint?: {
        era?: string;
        nodeID?: string;
        deltaPoint?: string;
        createAt?: string;
    };
}
export interface QueryGetReputationPointChangeDataResponse {
    ReputationPointChangeData?: {
        era?: string;
        nodeID?: string;
        data?: Record<string, {
            deltaPoint?: string;
            createAt?: string;
            updateAt?: string;
        }>;
    };
}
export interface QueryGetReputationPointResponse {
    ReputationPoint?: {
        nodeID?: string;
        point?: string;
        createAt?: string;
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
export interface QueryGetWorkreportProcessBatchSizeResponse {
    /** @format uint64 */
    batchSize?: string;
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
export interface ReputationPointChangeRawDataDB {
    /** @format int64 */
    deltaPoint?: string;
    /** @format uint64 */
    createAt?: string;
    /** @format uint64 */
    updateAt?: string;
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
    pagination?: {
        next_key?: string;
        total?: string;
    };
}
export interface WorkloadEraProcessData {
    /** @format uint64 */
    era?: string;
    /** @format uint64 */
    totalNodesCount?: string;
    /** @format uint64 */
    processedNodesCount?: string;
    /** @format uint64 */
    startAt?: string;
    /** @format uint64 */
    updateAt?: string;
    status?: string;
    pagination?: {
        next_key?: string;
        total?: string;
    };
}
export interface WorkloadManagerRPWorkload {
    /** @format uint64 */
    era?: string;
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
export interface WorkloadManagerWRWorkload {
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
export interface WorkloadReputationDeltaPoint {
    /** @format uint64 */
    era?: string;
    nodeID?: string;
    /** @format int64 */
    deltaPoint?: string;
    /** @format uint64 */
    createAt?: string;
}
export interface WorkloadReputationPoint {
    nodeID?: string;
    /** @format int64 */
    point?: string;
    /** @format uint64 */
    createAt?: string;
    /** @format uint64 */
    updateAt?: string;
}
export interface WorkloadReputationPointChangeData {
    /** @format uint64 */
    era?: string;
    nodeID?: string;
    data?: Record<string, {
        deltaPoint?: string;
        createAt?: string;
        updateAt?: string;
    }>;
}
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
    managerScoreMap?: Record<string, {
        score?: string;
        createAt?: string;
        updateAt?: string;
    }>;
}
export type MsgCreateSuperiorResponse = object;
export type MsgSubmitReputationPointChangeDataResponse = object;
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
export interface ReputationPointChangeRawData {
    nodeID?: string;
    /** @format int64 */
    deltaPoint?: string;
}
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
     * @name QueryCurrentEpoch
     * @request GET:/enreach/workload/epoch/current_epoch
     */
    queryCurrentEpoch: (params?: RequestParams) => Promise<AxiosResponse<T>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryHistoryEpoch
     * @request GET:/enreach/workload/epoch/history_epoch/{epochNumber}
     */
    queryHistoryEpoch: (epochNumber: string, params?: RequestParams) => Promise<AxiosResponse<T>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryAllHistoryEpoch
     * @request GET:/enreach/workload/epoch/history_epochs
     */
    queryAllHistoryEpoch: (query?: {
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
     * @name QueryEpochLength
     * @request GET:/enreach/workload/epoch/length
     */
    queryEpochLength: (params?: RequestParams) => Promise<AxiosResponse<T>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryPendingNextEpoch
     * @request GET:/enreach/workload/epoch/pending_next_epoch
     */
    queryPendingNextEpoch: (params?: RequestParams) => Promise<AxiosResponse<T>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryCurrentEra
     * @request GET:/enreach/workload/era/currentera
     */
    queryCurrentEra: (params?: RequestParams) => Promise<AxiosResponse<T>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryEraLength
     * @request GET:/enreach/workload/era/length
     */
    queryEraLength: (params?: RequestParams) => Promise<AxiosResponse<T>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryManagerRpWorkload
     * @request GET:/enreach/workload/manager_rp_workload/{era}/{managerAccount}
     */
    queryManagerRPWorkload: (era: string, managerAccount: string, params?: RequestParams) => Promise<AxiosResponse<T>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryAllManagerRpWorkloadByEra
     * @request GET:/enreach/workload/manager_rp_workloads/{era}
     */
    queryAllManagerRPWorkloadByEra: (era: string, query?: {
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
     * @name QueryManagerWrWorkload
     * @request GET:/enreach/workload/manager_wr_workload/{epoch}/{managerAccount}
     */
    queryManagerWRWorkload: (epoch: string, managerAccount: string, params?: RequestParams) => Promise<AxiosResponse<T>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryAllManagerWrWorkloadByEpoch
     * @request GET:/enreach/workload/manager_wr_workloads/{epoch}
     */
    queryAllManagerWRWorkloadByEpoch: (epoch: string, query?: {
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
     * @name QueryNodeWorkload
     * @request GET:/enreach/workload/node_workload/{epoch}/{nodeID}
     */
    queryNodeWorkload: (epoch: string, nodeId: string, params?: RequestParams) => Promise<AxiosResponse<T>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryAllNodeWorkloadByEpoch
     * @request GET:/enreach/workload/node_workloads/{epoch}
     */
    queryAllNodeWorkloadByEpoch: (epoch: string, query?: {
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
     * @request GET:/enreach/workload/params
     */
    queryParams: (params?: RequestParams) => Promise<AxiosResponse<T>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryReputationDeltaPoint
     * @request GET:/enreach/workload/reputation_delta_point/{era}/{nodeID}
     */
    queryReputationDeltaPoint: (era: string, nodeId: string, params?: RequestParams) => Promise<AxiosResponse<T>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryAllReputationDeltaPointByEra
     * @request GET:/enreach/workload/reputation_delta_points/{era}
     */
    queryAllReputationDeltaPointByEra: (era: string, query?: {
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
     * @name QueryReputationPoint
     * @request GET:/enreach/workload/reputation_point/{nodeID}
     */
    queryReputationPoint: (nodeId: string, params?: RequestParams) => Promise<AxiosResponse<T>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryReputationPointChangeData
     * @request GET:/enreach/workload/reputation_point_change_data/{era}/{nodeID}
     */
    queryReputationPointChangeData: (era: string, nodeId: string, params?: RequestParams) => Promise<AxiosResponse<T>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryAllReputationPointChangeDataByEra
     * @request GET:/enreach/workload/reputation_point_change_datas/{era}
     */
    queryAllReputationPointChangeDataByEra: (era: string, query?: {
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
     * @name QueryAllReputationPoint
     * @request GET:/enreach/workload/reputation_points
     */
    queryAllReputationPoint: (query?: {
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
     * @request GET:/enreach/workload/superior
     */
    querySuperior: (params?: RequestParams) => Promise<AxiosResponse<T>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryEpochProcessData
     * @request GET:/enreach/workload/workreport/epoch_process_data/{epoch}
     */
    queryEpochProcessData: (epoch: string, params?: RequestParams) => Promise<AxiosResponse<T>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryAllEpochProcessData
     * @request GET:/enreach/workload/workreport/epoch_process_datas
     */
    queryAllEpochProcessData: (query?: {
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
     * @name QueryEraProcessData
     * @request GET:/enreach/workload/workreport/era_process_data/{era}
     */
    queryEraProcessData: (era: string, params?: RequestParams) => Promise<AxiosResponse<T>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryAllEraProcessData
     * @request GET:/enreach/workload/workreport/era_process_datas
     */
    queryAllEraProcessData: (query?: {
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
     * @name QueryHistoryEpochDataDepth
     * @request GET:/enreach/workload/workreport/history_epoch_data_depth
     */
    queryHistoryEpochDataDepth: (params?: RequestParams) => Promise<AxiosResponse<T>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryWorkreportProcessBatchSize
     * @request GET:/enreach/workload/workreport/process_batch_size
     */
    queryWorkreportProcessBatchSize: (params?: RequestParams) => Promise<AxiosResponse<T>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryWorkreport
     * @request GET:/enreach/workload/workreport/{epoch}/{nodeID}
     */
    queryWorkreport: (epoch: string, nodeId: string, params?: RequestParams) => Promise<AxiosResponse<T>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryAllWorkreportByEpoch
     * @request GET:/enreach/workload/workreports/{epoch}
     */
    queryAllWorkreportByEpoch: (epoch: string, query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.count_total"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<AxiosResponse<T>>;
}
