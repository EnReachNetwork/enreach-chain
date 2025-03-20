"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const params_1 = require("./types/cosmos/params/v1beta1/params");
const query_1 = require("./types/cosmos/params/v1beta1/query");
const query_2 = require("./types/cosmos/params/v1beta1/query");
const params_2 = require("./types/cosmos/params/v1beta1/params");
const query_3 = require("./types/cosmos/params/v1beta1/query");
const query_4 = require("./types/cosmos/params/v1beta1/query");
const query_5 = require("./types/cosmos/params/v1beta1/query");
const msgTypes = [
    ["/cosmos.params.v1beta1.ParamChange", params_1.ParamChange],
    ["/cosmos.params.v1beta1.Subspace", query_1.Subspace],
    ["/cosmos.params.v1beta1.QuerySubspacesResponse", query_2.QuerySubspacesResponse],
    ["/cosmos.params.v1beta1.ParameterChangeProposal", params_2.ParameterChangeProposal],
    ["/cosmos.params.v1beta1.QueryParamsRequest", query_3.QueryParamsRequest],
    ["/cosmos.params.v1beta1.QueryParamsResponse", query_4.QueryParamsResponse],
    ["/cosmos.params.v1beta1.QuerySubspacesRequest", query_5.QuerySubspacesRequest],
];
exports.msgTypes = msgTypes;
