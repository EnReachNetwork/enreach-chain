"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const query_1 = require("./types/enreach/manager/query");
const tx_1 = require("./types/enreach/manager/tx");
const query_2 = require("./types/enreach/manager/query");
const query_3 = require("./types/enreach/manager/query");
const query_4 = require("./types/enreach/manager/query");
const query_5 = require("./types/enreach/manager/query");
const params_1 = require("./types/enreach/manager/params");
const tx_2 = require("./types/enreach/manager/tx");
const tx_3 = require("./types/enreach/manager/tx");
const query_6 = require("./types/enreach/manager/query");
const tx_4 = require("./types/enreach/manager/tx");
const tx_5 = require("./types/enreach/manager/tx");
const tx_6 = require("./types/enreach/manager/tx");
const tx_7 = require("./types/enreach/manager/tx");
const tx_8 = require("./types/enreach/manager/tx");
const tx_9 = require("./types/enreach/manager/tx");
const tx_10 = require("./types/enreach/manager/tx");
const tx_11 = require("./types/enreach/manager/tx");
const tx_12 = require("./types/enreach/manager/tx");
const genesis_1 = require("./types/enreach/manager/genesis");
const query_7 = require("./types/enreach/manager/query");
const query_8 = require("./types/enreach/manager/query");
const query_9 = require("./types/enreach/manager/query");
const tx_13 = require("./types/enreach/manager/tx");
const tx_14 = require("./types/enreach/manager/tx");
const tx_15 = require("./types/enreach/manager/tx");
const query_10 = require("./types/enreach/manager/query");
const tx_16 = require("./types/enreach/manager/tx");
const tx_17 = require("./types/enreach/manager/tx");
const query_11 = require("./types/enreach/manager/query");
const tx_18 = require("./types/enreach/manager/tx");
const tx_19 = require("./types/enreach/manager/tx");
const operator_1 = require("./types/enreach/manager/operator");
const query_12 = require("./types/enreach/manager/query");
const tx_20 = require("./types/enreach/manager/tx");
const manager_1 = require("./types/enreach/manager/manager");
const msgTypes = [
    ["/enreach.manager.QueryParamsRequest", query_1.QueryParamsRequest],
    ["/enreach.manager.MsgCreateOperatorResponse", tx_1.MsgCreateOperatorResponse],
    ["/enreach.manager.QueryGetOperatorResponse", query_2.QueryGetOperatorResponse],
    ["/enreach.manager.QueryAllOperatorRequest", query_3.QueryAllOperatorRequest],
    ["/enreach.manager.QueryAllOperatorResponse", query_4.QueryAllOperatorResponse],
    ["/enreach.manager.QueryAllManagerResponse", query_5.QueryAllManagerResponse],
    ["/enreach.manager.Params", params_1.Params],
    ["/enreach.manager.MsgActivateManager", tx_2.MsgActivateManager],
    ["/enreach.manager.MsgBindOperatorEVMAccount", tx_3.MsgBindOperatorEVMAccount],
    ["/enreach.manager.QueryAllManagerRequest", query_6.QueryAllManagerRequest],
    ["/enreach.manager.MsgUpdateParamsResponse", tx_4.MsgUpdateParamsResponse],
    ["/enreach.manager.MsgBindOperatorManagerAccountResponse", tx_5.MsgBindOperatorManagerAccountResponse],
    ["/enreach.manager.MsgSetManagerRegion", tx_6.MsgSetManagerRegion],
    ["/enreach.manager.MsgSetManagerRegionResponse", tx_7.MsgSetManagerRegionResponse],
    ["/enreach.manager.MsgUpdateOperatorBasicInfo", tx_8.MsgUpdateOperatorBasicInfo],
    ["/enreach.manager.MsgUpdateOperatorBasicInfoResponse", tx_9.MsgUpdateOperatorBasicInfoResponse],
    ["/enreach.manager.MsgRegisterManagerResponse", tx_10.MsgRegisterManagerResponse],
    ["/enreach.manager.MsgGoWorkingResponse", tx_11.MsgGoWorkingResponse],
    ["/enreach.manager.MsgUpdateParams", tx_12.MsgUpdateParams],
    ["/enreach.manager.GenesisState", genesis_1.GenesisState],
    ["/enreach.manager.QueryGetOperatorRequest", query_7.QueryGetOperatorRequest],
    ["/enreach.manager.QueryGetManagerByRegionRequest", query_8.QueryGetManagerByRegionRequest],
    ["/enreach.manager.QueryGetManagerByRegionResponse", query_9.QueryGetManagerByRegionResponse],
    ["/enreach.manager.MsgBindOperatorManagerAccount", tx_13.MsgBindOperatorManagerAccount],
    ["/enreach.manager.MsgUpdateManagerConnParams", tx_14.MsgUpdateManagerConnParams],
    ["/enreach.manager.MsgRegisterManager", tx_15.MsgRegisterManager],
    ["/enreach.manager.QueryParamsResponse", query_10.QueryParamsResponse],
    ["/enreach.manager.MsgActivateManagerResponse", tx_16.MsgActivateManagerResponse],
    ["/enreach.manager.MsgGoWorking", tx_17.MsgGoWorking],
    ["/enreach.manager.QueryGetManagerRequest", query_11.QueryGetManagerRequest],
    ["/enreach.manager.MsgUpdateManagerConnParamsResponse", tx_18.MsgUpdateManagerConnParamsResponse],
    ["/enreach.manager.MsgBindOperatorEVMAccountResponse", tx_19.MsgBindOperatorEVMAccountResponse],
    ["/enreach.manager.Operator", operator_1.Operator],
    ["/enreach.manager.QueryGetManagerResponse", query_12.QueryGetManagerResponse],
    ["/enreach.manager.MsgCreateOperator", tx_20.MsgCreateOperator],
    ["/enreach.manager.Manager", manager_1.Manager],
];
exports.msgTypes = msgTypes;
