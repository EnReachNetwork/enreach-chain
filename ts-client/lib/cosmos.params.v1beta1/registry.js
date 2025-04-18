"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const query_1 = require("./types/cosmos/params/v1beta1/query");
const query_2 = require("./types/cosmos/params/v1beta1/query");
const params_1 = require("./types/cosmos/params/v1beta1/params");
const query_3 = require("./types/cosmos/params/v1beta1/query");
const query_4 = require("./types/cosmos/params/v1beta1/query");
const params_2 = require("./types/cosmos/params/v1beta1/params");
const query_5 = require("./types/cosmos/params/v1beta1/query");
const msgTypes = [
    ["/cosmos.params.v1beta1.QuerySubspacesRequest", query_1.QuerySubspacesRequest],
    ["/cosmos.params.v1beta1.Subspace", query_2.Subspace],
    ["/cosmos.params.v1beta1.ParameterChangeProposal", params_1.ParameterChangeProposal],
    ["/cosmos.params.v1beta1.QueryParamsRequest", query_3.QueryParamsRequest],
    ["/cosmos.params.v1beta1.QuerySubspacesResponse", query_4.QuerySubspacesResponse],
    ["/cosmos.params.v1beta1.ParamChange", params_2.ParamChange],
    ["/cosmos.params.v1beta1.QueryParamsResponse", query_5.QueryParamsResponse],
];
exports.msgTypes = msgTypes;
