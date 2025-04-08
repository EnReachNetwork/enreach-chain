"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api = exports.HttpClient = exports.ContentType = void 0;
const axios_1 = __importDefault(require("axios"));
var ContentType;
(function (ContentType) {
    ContentType["Json"] = "application/json";
    ContentType["FormData"] = "multipart/form-data";
    ContentType["UrlEncoded"] = "application/x-www-form-urlencoded";
})(ContentType || (exports.ContentType = ContentType = {}));
class HttpClient {
    constructor({ securityWorker, secure, format, ...axiosConfig } = {}) {
        this.securityData = null;
        this.setSecurityData = (data) => {
            this.securityData = data;
        };
        this.request = async ({ secure, path, type, query, format, body, ...params }) => {
            const secureParams = ((typeof secure === "boolean" ? secure : this.secure) &&
                this.securityWorker &&
                (await this.securityWorker(this.securityData))) ||
                {};
            const requestParams = this.mergeRequestParams(params, secureParams);
            const responseFormat = (format && this.format) || void 0;
            if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
                requestParams.headers.common = { Accept: "*/*" };
                requestParams.headers.post = {};
                requestParams.headers.put = {};
                body = this.createFormData(body);
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
        this.instance = axios_1.default.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "" });
        this.secure = secure;
        this.format = format;
        this.securityWorker = securityWorker;
    }
    mergeRequestParams(params1, params2) {
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
    createFormData(input) {
        return Object.keys(input || {}).reduce((formData, key) => {
            const property = input[key];
            formData.append(key, property instanceof Blob
                ? property
                : typeof property === "object" && property !== null
                    ? JSON.stringify(property)
                    : `${property}`);
            return formData;
        }, new FormData());
    }
}
exports.HttpClient = HttpClient;
/**
 * @title HTTP API Console enreach.workload
 */
class Api extends HttpClient {
    constructor() {
        super(...arguments);
        /**
         * No description
         *
         * @tags Query
         * @name QueryAllCheatStatusCrDataByEra
         * @request GET:/enreach/workload/cheat_status_cr_data/{era}
         */
        this.queryAllCheatStatusCRDataByEra = (era, query, params = {}) => this.request({
            path: `/enreach/workload/cheat_status_cr_data/${era}`,
            method: "GET",
            query: query,
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryCheatStatusCrData
         * @request GET:/enreach/workload/cheat_status_cr_data/{era}/{nodeID}
         */
        this.queryCheatStatusCRData = (era, nodeId, params = {}) => this.request({
            path: `/enreach/workload/cheat_status_cr_data/${era}/${nodeId}`,
            method: "GET",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryCurrentEpoch
         * @request GET:/enreach/workload/epoch/current_epoch
         */
        this.queryCurrentEpoch = (params = {}) => this.request({
            path: `/enreach/workload/epoch/current_epoch`,
            method: "GET",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryHistoryEpoch
         * @request GET:/enreach/workload/epoch/history_epoch/{epochNumber}
         */
        this.queryHistoryEpoch = (epochNumber, params = {}) => this.request({
            path: `/enreach/workload/epoch/history_epoch/${epochNumber}`,
            method: "GET",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryAllHistoryEpoch
         * @request GET:/enreach/workload/epoch/history_epochs
         */
        this.queryAllHistoryEpoch = (query, params = {}) => this.request({
            path: `/enreach/workload/epoch/history_epochs`,
            method: "GET",
            query: query,
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryEpochLength
         * @request GET:/enreach/workload/epoch/length
         */
        this.queryEpochLength = (params = {}) => this.request({
            path: `/enreach/workload/epoch/length`,
            method: "GET",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryPendingNextEpoch
         * @request GET:/enreach/workload/epoch/pending_next_epoch
         */
        this.queryPendingNextEpoch = (params = {}) => this.request({
            path: `/enreach/workload/epoch/pending_next_epoch`,
            method: "GET",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryCurrentEra
         * @request GET:/enreach/workload/era/current_era
         */
        this.queryCurrentEra = (params = {}) => this.request({
            path: `/enreach/workload/era/current_era`,
            method: "GET",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryHistoryEra
         * @request GET:/enreach/workload/era/history_era/{eraNumber}
         */
        this.queryHistoryEra = (eraNumber, params = {}) => this.request({
            path: `/enreach/workload/era/history_era/${eraNumber}`,
            method: "GET",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryAllHistoryEra
         * @request GET:/enreach/workload/era/history_eras
         */
        this.queryAllHistoryEra = (query, params = {}) => this.request({
            path: `/enreach/workload/era/history_eras`,
            method: "GET",
            query: query,
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryEraLength
         * @request GET:/enreach/workload/era/length
         */
        this.queryEraLength = (params = {}) => this.request({
            path: `/enreach/workload/era/length`,
            method: "GET",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryPendingNextEra
         * @request GET:/enreach/workload/era/pending_next_era
         */
        this.queryPendingNextEra = (params = {}) => this.request({
            path: `/enreach/workload/era/pending_next_era`,
            method: "GET",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryManagerCsWorkload
         * @request GET:/enreach/workload/manager_cs_workload/{era}/{managerAccount}
         */
        this.queryManagerCSWorkload = (era, managerAccount, params = {}) => this.request({
            path: `/enreach/workload/manager_cs_workload/${era}/${managerAccount}`,
            method: "GET",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryAllManagerCsWorkloadByEra
         * @request GET:/enreach/workload/manager_cs_workloads/{era}
         */
        this.queryAllManagerCSWorkloadByEra = (era, query, params = {}) => this.request({
            path: `/enreach/workload/manager_cs_workloads/${era}`,
            method: "GET",
            query: query,
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryManagerRpWorkload
         * @request GET:/enreach/workload/manager_rp_workload/{era}/{managerAccount}
         */
        this.queryManagerRPWorkload = (era, managerAccount, params = {}) => this.request({
            path: `/enreach/workload/manager_rp_workload/${era}/${managerAccount}`,
            method: "GET",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryAllManagerRpWorkloadByEra
         * @request GET:/enreach/workload/manager_rp_workloads/{era}
         */
        this.queryAllManagerRPWorkloadByEra = (era, query, params = {}) => this.request({
            path: `/enreach/workload/manager_rp_workloads/${era}`,
            method: "GET",
            query: query,
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryManagerWrWorkload
         * @request GET:/enreach/workload/manager_wr_workload/{epoch}/{managerAccount}
         */
        this.queryManagerWRWorkload = (epoch, managerAccount, params = {}) => this.request({
            path: `/enreach/workload/manager_wr_workload/${epoch}/${managerAccount}`,
            method: "GET",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryAllManagerWrWorkloadByEpoch
         * @request GET:/enreach/workload/manager_wr_workloads/{epoch}
         */
        this.queryAllManagerWRWorkloadByEpoch = (epoch, query, params = {}) => this.request({
            path: `/enreach/workload/manager_wr_workloads/${epoch}`,
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
        this.queryNodeWorkload = (epoch, nodeId, params = {}) => this.request({
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
        this.queryAllNodeWorkloadByEpoch = (epoch, query, params = {}) => this.request({
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
        this.queryParams = (params = {}) => this.request({
            path: `/enreach/workload/params`,
            method: "GET",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryReputationDeltaPoint
         * @request GET:/enreach/workload/reputation_delta_point/{era}/{nodeID}
         */
        this.queryReputationDeltaPoint = (era, nodeId, params = {}) => this.request({
            path: `/enreach/workload/reputation_delta_point/${era}/${nodeId}`,
            method: "GET",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryAllReputationDeltaPointByEra
         * @request GET:/enreach/workload/reputation_delta_points/{era}
         */
        this.queryAllReputationDeltaPointByEra = (era, query, params = {}) => this.request({
            path: `/enreach/workload/reputation_delta_points/${era}`,
            method: "GET",
            query: query,
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryReputationPointChangeData
         * @request GET:/enreach/workload/reputation_point_change_data/{era}/{nodeID}
         */
        this.queryReputationPointChangeData = (era, nodeId, params = {}) => this.request({
            path: `/enreach/workload/reputation_point_change_data/${era}/${nodeId}`,
            method: "GET",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryAllReputationPointChangeDataByEra
         * @request GET:/enreach/workload/reputation_point_change_datas/{era}
         */
        this.queryAllReputationPointChangeDataByEra = (era, query, params = {}) => this.request({
            path: `/enreach/workload/reputation_point_change_datas/${era}`,
            method: "GET",
            query: query,
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QuerySuperior
         * @request GET:/enreach/workload/superior
         */
        this.querySuperior = (params = {}) => this.request({
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
        this.queryEpochProcessData = (epoch, params = {}) => this.request({
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
        this.queryAllEpochProcessData = (query, params = {}) => this.request({
            path: `/enreach/workload/workreport/epoch_process_datas`,
            method: "GET",
            query: query,
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryEraCheatStatusProcessData
         * @request GET:/enreach/workload/workreport/era_cheat_status_process_data/{era}
         */
        this.queryEraCheatStatusProcessData = (era, params = {}) => this.request({
            path: `/enreach/workload/workreport/era_cheat_status_process_data/${era}`,
            method: "GET",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryAllEraCheatStatusProcessData
         * @request GET:/enreach/workload/workreport/era_cheat_status_process_datas
         */
        this.queryAllEraCheatStatusProcessData = (query, params = {}) => this.request({
            path: `/enreach/workload/workreport/era_cheat_status_process_datas`,
            method: "GET",
            query: query,
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryEraProcessData
         * @request GET:/enreach/workload/workreport/era_process_data/{era}
         */
        this.queryEraProcessData = (era, params = {}) => this.request({
            path: `/enreach/workload/workreport/era_process_data/${era}`,
            method: "GET",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryAllEraProcessData
         * @request GET:/enreach/workload/workreport/era_process_datas
         */
        this.queryAllEraProcessData = (query, params = {}) => this.request({
            path: `/enreach/workload/workreport/era_process_datas`,
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
        this.queryHistoryEpochDataDepth = (params = {}) => this.request({
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
        this.queryWorkreportProcessBatchSize = (params = {}) => this.request({
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
        this.queryWorkreport = (epoch, nodeId, params = {}) => this.request({
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
        this.queryAllWorkreportByEpoch = (epoch, query, params = {}) => this.request({
            path: `/enreach/workload/workreports/${epoch}`,
            method: "GET",
            query: query,
            ...params,
        });
    }
}
exports.Api = Api;
