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
export interface CheatStatusCRDB {
    cheatStatus?: string;
    /** @format uint64 */
    createAt?: string;
    /** @format uint64 */
    updateAt?: string;
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
export interface EraInfo {
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
export interface QueryGetAllCheatStatusCRDataByEraResponse {
    CheatStatusCRDatas?: {
        era?: string;
        nodeID?: string;
        data?: Record<string, {
            cheatStatus?: string;
            createAt?: string;
            updateAt?: string;
        }>;
    }[];
    pagination?: {
        next_key?: string;
        total?: string;
    };
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
export interface QueryGetAllEraCheatStatusProcessDataResponse {
    EraCheatStatusProcessDatas?: {
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
export interface QueryGetAllHistoryEraResponse {
    EraInfos?: {
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
export interface QueryGetAllManagerCSWorkloadByEraResponse {
    ManagerCSWorkloads?: {
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
export interface QueryGetCheatStatusCRDataResponse {
    CheatStatusCRData?: {
        era?: string;
        nodeID?: string;
        data?: Record<string, {
            cheatStatus?: string;
            createAt?: string;
            updateAt?: string;
        }>;
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
    EraInfo?: {
        number?: string;
        startTime?: string;
        startBlock?: string;
        endTime?: string;
        endBlock?: string;
    };
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
export interface QueryGetEraCheatStatusProcessDataResponse {
    EraCheatStatusProcessData?: {
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
export interface QueryGetHistoryEpochResponse {
    EpochInfo?: {
        number?: string;
        startTime?: string;
        startBlock?: string;
        endTime?: string;
        endBlock?: string;
    };
}
export interface QueryGetHistoryEraResponse {
    EraInfo?: {
        number?: string;
        startTime?: string;
        startBlock?: string;
        endTime?: string;
        endBlock?: string;
    };
}
export interface QueryGetManagerCSWorkloadResponse {
    ManagerCSWorkload?: {
        era?: string;
        managerAccount?: string;
        reportedNodesCount?: string;
        score?: string;
        createAt?: string;
        updateAt?: string;
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
export interface QueryGetPendingNextEraResponse {
    EraInfo?: {
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
export interface QueryParamResponse {
    paramValue?: string;
}
export interface QueryParamsResponse {
    params?: {
        data?: Record<string, string>;
    };
}
export interface ReputationPointChangeRawDataDB {
    /** @format int64 */
    deltaPoint?: string;
    /** @format uint64 */
    createAt?: string;
    /** @format uint64 */
    updateAt?: string;
}
export interface WorkloadCheatStatusCRData {
    /** @format uint64 */
    era?: string;
    nodeID?: string;
    data?: Record<string, {
        cheatStatus?: string;
        createAt?: string;
        updateAt?: string;
    }>;
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
export interface WorkloadEraCheatStatusProcessData {
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
export interface WorkloadManagerCSWorkload {
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
export interface WorkloadParams {
    data?: Record<string, string>;
}
export interface WorkloadReputationDeltaPoint {
    /** @format uint64 */
    era?: string;
    nodeID?: string;
    /** @format int64 */
    deltaPoint?: string;
    /** @format uint64 */
    createAt?: string;
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
export interface CheatStatusCR {
    nodeID?: string;
    cheatStatus?: string;
}
export type MsgCreateSuperiorResponse = object;
export type MsgSubmitCheatStatusCRResponse = object;
export type MsgSubmitReputationPointChangeDataResponse = object;
export type MsgSubmitWorkreportsResponse = object;
export type MsgUpdateParamResponse = object;
export type MsgUpdateSuperiorResponse = object;
export interface NodeScore {
    nodeID?: string;
    /** @format uint64 */
    score?: string;
}
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
     * @name QueryParam
     * @request GET:/enreach/edgenode/param/{paramKey}
     */
    queryParam: (paramKey: string, params?: RequestParams) => Promise<AxiosResponse<T>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryAllCheatStatusCrDataByEra
     * @request GET:/enreach/workload/cheat_status_cr_data/{era}
     */
    queryAllCheatStatusCRDataByEra: (era: string, query?: {
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
     * @name QueryCheatStatusCrData
     * @request GET:/enreach/workload/cheat_status_cr_data/{era}/{nodeID}
     */
    queryCheatStatusCRData: (era: string, nodeId: string, params?: RequestParams) => Promise<AxiosResponse<T>>;
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
     * @request GET:/enreach/workload/era/current_era
     */
    queryCurrentEra: (params?: RequestParams) => Promise<AxiosResponse<T>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryHistoryEra
     * @request GET:/enreach/workload/era/history_era/{eraNumber}
     */
    queryHistoryEra: (eraNumber: string, params?: RequestParams) => Promise<AxiosResponse<T>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryAllHistoryEra
     * @request GET:/enreach/workload/era/history_eras
     */
    queryAllHistoryEra: (query?: {
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
     * @name QueryEraLength
     * @request GET:/enreach/workload/era/length
     */
    queryEraLength: (params?: RequestParams) => Promise<AxiosResponse<T>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryPendingNextEra
     * @request GET:/enreach/workload/era/pending_next_era
     */
    queryPendingNextEra: (params?: RequestParams) => Promise<AxiosResponse<T>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryManagerCsWorkload
     * @request GET:/enreach/workload/manager_cs_workload/{era}/{managerAccount}
     */
    queryManagerCSWorkload: (era: string, managerAccount: string, params?: RequestParams) => Promise<AxiosResponse<T>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryAllManagerCsWorkloadByEra
     * @request GET:/enreach/workload/manager_cs_workloads/{era}
     */
    queryAllManagerCSWorkloadByEra: (era: string, query?: {
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
     * @name QueryEraCheatStatusProcessData
     * @request GET:/enreach/workload/workreport/era_cheat_status_process_data/{era}
     */
    queryEraCheatStatusProcessData: (era: string, params?: RequestParams) => Promise<AxiosResponse<T>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryAllEraCheatStatusProcessData
     * @request GET:/enreach/workload/workreport/era_cheat_status_process_datas
     */
    queryAllEraCheatStatusProcessData: (query?: {
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
