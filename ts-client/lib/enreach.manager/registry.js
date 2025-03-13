"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const genesis_1 = require("./types/enreach/manager/genesis");
const tx_1 = require("./types/enreach/manager/tx");
const tx_2 = require("./types/enreach/manager/tx");
const query_1 = require("./types/enreach/manager/query");
const query_2 = require("./types/enreach/manager/query");
const query_3 = require("./types/enreach/manager/query");
const query_4 = require("./types/enreach/manager/query");
const tx_3 = require("./types/enreach/manager/tx");
const operator_1 = require("./types/enreach/manager/operator");
const params_1 = require("./types/enreach/manager/params");
const tx_4 = require("./types/enreach/manager/tx");
const tx_5 = require("./types/enreach/manager/tx");
const manager_1 = require("./types/enreach/manager/manager");
const tx_6 = require("./types/enreach/manager/tx");
const tx_7 = require("./types/enreach/manager/tx");
const query_5 = require("./types/enreach/manager/query");
const tx_8 = require("./types/enreach/manager/tx");
const tx_9 = require("./types/enreach/manager/tx");
const tx_10 = require("./types/enreach/manager/tx");
const tx_11 = require("./types/enreach/manager/tx");
const tx_12 = require("./types/enreach/manager/tx");
const query_6 = require("./types/enreach/manager/query");
const tx_13 = require("./types/enreach/manager/tx");
const query_7 = require("./types/enreach/manager/query");
const query_8 = require("./types/enreach/manager/query");
const tx_14 = require("./types/enreach/manager/tx");
const tx_15 = require("./types/enreach/manager/tx");
const query_9 = require("./types/enreach/manager/query");
const query_10 = require("./types/enreach/manager/query");
const tx_16 = require("./types/enreach/manager/tx");
const tx_17 = require("./types/enreach/manager/tx");
const tx_18 = require("./types/enreach/manager/tx");
const query_11 = require("./types/enreach/manager/query");
const query_12 = require("./types/enreach/manager/query");
const tx_19 = require("./types/enreach/manager/tx");
const tx_20 = require("./types/enreach/manager/tx");
const msgTypes = [
    ["/enreach.manager.GenesisState", genesis_1.GenesisState],
    ["/enreach.manager.MsgBindOperatorManagerAccount", tx_1.MsgBindOperatorManagerAccount],
    ["/enreach.manager.MsgSetManagerRegionResponse", tx_2.MsgSetManagerRegionResponse],
    ["/enreach.manager.QueryGetManagerRequest", query_1.QueryGetManagerRequest],
    ["/enreach.manager.QueryAllManagerRequest", query_2.QueryAllManagerRequest],
    ["/enreach.manager.QueryParamsRequest", query_3.QueryParamsRequest],
    ["/enreach.manager.QueryAllOperatorResponse", query_4.QueryAllOperatorResponse],
    ["/enreach.manager.MsgRegisterManager", tx_3.MsgRegisterManager],
    ["/enreach.manager.Operator", operator_1.Operator],
    ["/enreach.manager.Params", params_1.Params],
    ["/enreach.manager.MsgUpdateManagerConnParamsResponse", tx_4.MsgUpdateManagerConnParamsResponse],
    ["/enreach.manager.MsgActivateManager", tx_5.MsgActivateManager],
    ["/enreach.manager.Manager", manager_1.Manager],
    ["/enreach.manager.MsgUpdateOperatorBasicInfo", tx_6.MsgUpdateOperatorBasicInfo],
    ["/enreach.manager.MsgGoWorkingResponse", tx_7.MsgGoWorkingResponse],
    ["/enreach.manager.QueryGetManagerByRegionRequest", query_5.QueryGetManagerByRegionRequest],
    ["/enreach.manager.MsgUpdateParams", tx_8.MsgUpdateParams],
    ["/enreach.manager.MsgUpdateParamsResponse", tx_9.MsgUpdateParamsResponse],
    ["/enreach.manager.MsgBindOperatorManagerAccountResponse", tx_10.MsgBindOperatorManagerAccountResponse],
    ["/enreach.manager.MsgBindOperatorEVMAccountResponse", tx_11.MsgBindOperatorEVMAccountResponse],
    ["/enreach.manager.MsgUpdateOperatorBasicInfoResponse", tx_12.MsgUpdateOperatorBasicInfoResponse],
    ["/enreach.manager.QueryGetManagerByRegionResponse", query_6.QueryGetManagerByRegionResponse],
    ["/enreach.manager.MsgActivateManagerResponse", tx_13.MsgActivateManagerResponse],
    ["/enreach.manager.QueryGetManagerResponse", query_7.QueryGetManagerResponse],
    ["/enreach.manager.QueryAllManagerResponse", query_8.QueryAllManagerResponse],
    ["/enreach.manager.MsgCreateOperator", tx_14.MsgCreateOperator],
    ["/enreach.manager.MsgSetManagerRegion", tx_15.MsgSetManagerRegion],
    ["/enreach.manager.QueryGetOperatorRequest", query_9.QueryGetOperatorRequest],
    ["/enreach.manager.QueryGetOperatorResponse", query_10.QueryGetOperatorResponse],
    ["/enreach.manager.MsgBindOperatorEVMAccount", tx_16.MsgBindOperatorEVMAccount],
    ["/enreach.manager.MsgRegisterManagerResponse", tx_17.MsgRegisterManagerResponse],
    ["/enreach.manager.MsgGoWorking", tx_18.MsgGoWorking],
    ["/enreach.manager.QueryParamsResponse", query_11.QueryParamsResponse],
    ["/enreach.manager.QueryAllOperatorRequest", query_12.QueryAllOperatorRequest],
    ["/enreach.manager.MsgCreateOperatorResponse", tx_19.MsgCreateOperatorResponse],
    ["/enreach.manager.MsgUpdateManagerConnParams", tx_20.MsgUpdateManagerConnParams],
];
exports.msgTypes = msgTypes;
