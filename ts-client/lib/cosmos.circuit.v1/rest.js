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
exports.Api = exports.HttpClient = exports.ContentType = exports.Level = void 0;
var Level;
(function (Level) {
    Level["LEVEL_NONE_UNSPECIFIED"] = "LEVEL_NONE_UNSPECIFIED";
    Level["LEVEL_SOME_MSGS"] = "LEVEL_SOME_MSGS";
    Level["LEVEL_ALL_MSGS"] = "LEVEL_ALL_MSGS";
    Level["LEVEL_SUPER_ADMIN"] = "LEVEL_SUPER_ADMIN";
})(Level || (exports.Level = Level = {}));
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
 * @title HTTP API Console cosmos.circuit.v1
 */
class Api extends HttpClient {
    constructor() {
        super(...arguments);
        /**
         * No description
         *
         * @tags Query
         * @name QueryAccounts
         * @request GET:/cosmos/circuit/v1/accounts
         */
        this.queryAccounts = (query, params = {}) => this.request({
            path: `/cosmos/circuit/v1/accounts`,
            method: "GET",
            query: query,
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryAccount
         * @request GET:/cosmos/circuit/v1/accounts/{address}
         */
        this.queryAccount = (address, params = {}) => this.request({
            path: `/cosmos/circuit/v1/accounts/${address}`,
            method: "GET",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryDisabledList
         * @request GET:/cosmos/circuit/v1/disable_list
         */
        this.queryDisabledList = (params = {}) => this.request({
            path: `/cosmos/circuit/v1/disable_list`,
            method: "GET",
            ...params,
        });
    }
}
exports.Api = Api;
