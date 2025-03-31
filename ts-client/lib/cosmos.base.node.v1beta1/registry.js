"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const query_1 = require("./types/cosmos/base/node/v1beta1/query");
const query_2 = require("./types/cosmos/base/node/v1beta1/query");
const query_3 = require("./types/cosmos/base/node/v1beta1/query");
const query_4 = require("./types/cosmos/base/node/v1beta1/query");
const msgTypes = [
    ["/cosmos.base.node.v1beta1.StatusResponse", query_1.StatusResponse],
    ["/cosmos.base.node.v1beta1.ConfigRequest", query_2.ConfigRequest],
    ["/cosmos.base.node.v1beta1.ConfigResponse", query_3.ConfigResponse],
    ["/cosmos.base.node.v1beta1.StatusRequest", query_4.StatusRequest],
];
exports.msgTypes = msgTypes;
