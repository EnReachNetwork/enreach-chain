"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/enreach/manager/tx");
const query_1 = require("./types/enreach/manager/query");
const query_2 = require("./types/enreach/manager/query");
const query_3 = require("./types/enreach/manager/query");
const query_4 = require("./types/enreach/manager/query");
const query_5 = require("./types/enreach/manager/query");
const manager_1 = require("./types/enreach/manager/manager");
const tx_2 = require("./types/enreach/manager/tx");
const tx_3 = require("./types/enreach/manager/tx");
const genesis_1 = require("./types/enreach/manager/genesis");
const query_6 = require("./types/enreach/manager/query");
const params_1 = require("./types/enreach/manager/params");
const tx_4 = require("./types/enreach/manager/tx");
const tx_5 = require("./types/enreach/manager/tx");
const tx_6 = require("./types/enreach/manager/tx");
const tx_7 = require("./types/enreach/manager/tx");
const query_7 = require("./types/enreach/manager/query");
const query_8 = require("./types/enreach/manager/query");
const tx_8 = require("./types/enreach/manager/tx");
const msgTypes = [
    ["/enreach.manager.MsgRegisterManager", tx_1.MsgRegisterManager],
    ["/enreach.manager.QueryParamsRequest", query_1.QueryParamsRequest],
    ["/enreach.manager.QueryParamsResponse", query_2.QueryParamsResponse],
    ["/enreach.manager.QueryGetManagerRequest", query_3.QueryGetManagerRequest],
    ["/enreach.manager.QueryAllManagerResponse", query_4.QueryAllManagerResponse],
    ["/enreach.manager.QueryGetManagerByRegionRequest", query_5.QueryGetManagerByRegionRequest],
    ["/enreach.manager.Manager", manager_1.Manager],
    ["/enreach.manager.MsgUpdateParamsResponse", tx_2.MsgUpdateParamsResponse],
    ["/enreach.manager.MsgDeleteManagerResponse", tx_3.MsgDeleteManagerResponse],
    ["/enreach.manager.GenesisState", genesis_1.GenesisState],
    ["/enreach.manager.QueryGetManagerByRegionResponse", query_6.QueryGetManagerByRegionResponse],
    ["/enreach.manager.Params", params_1.Params],
    ["/enreach.manager.MsgRegisterManagerResponse", tx_4.MsgRegisterManagerResponse],
    ["/enreach.manager.MsgUpdateManager", tx_5.MsgUpdateManager],
    ["/enreach.manager.MsgUpdateParams", tx_6.MsgUpdateParams],
    ["/enreach.manager.MsgUpdateManagerResponse", tx_7.MsgUpdateManagerResponse],
    ["/enreach.manager.QueryGetManagerResponse", query_7.QueryGetManagerResponse],
    ["/enreach.manager.QueryAllManagerRequest", query_8.QueryAllManagerRequest],
    ["/enreach.manager.MsgDeleteManager", tx_8.MsgDeleteManager],
];
exports.msgTypes = msgTypes;
