"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/enreach/manager/tx");
const tx_2 = require("./types/enreach/manager/tx");
const tx_3 = require("./types/enreach/manager/tx");
const tx_4 = require("./types/enreach/manager/tx");
const tx_5 = require("./types/enreach/manager/tx");
const query_1 = require("./types/enreach/manager/query");
const query_2 = require("./types/enreach/manager/query");
const tx_6 = require("./types/enreach/manager/tx");
const tx_7 = require("./types/enreach/manager/tx");
const tx_8 = require("./types/enreach/manager/tx");
const query_3 = require("./types/enreach/manager/query");
const query_4 = require("./types/enreach/manager/query");
const query_5 = require("./types/enreach/manager/query");
const tx_9 = require("./types/enreach/manager/tx");
const tx_10 = require("./types/enreach/manager/tx");
const query_6 = require("./types/enreach/manager/query");
const manager_1 = require("./types/enreach/manager/manager");
const tx_11 = require("./types/enreach/manager/tx");
const tx_12 = require("./types/enreach/manager/tx");
const tx_13 = require("./types/enreach/manager/tx");
const tx_14 = require("./types/enreach/manager/tx");
const tx_15 = require("./types/enreach/manager/tx");
const query_7 = require("./types/enreach/manager/query");
const tx_16 = require("./types/enreach/manager/tx");
const genesis_1 = require("./types/enreach/manager/genesis");
const params_1 = require("./types/enreach/manager/params");
const tx_17 = require("./types/enreach/manager/tx");
const tx_18 = require("./types/enreach/manager/tx");
const query_8 = require("./types/enreach/manager/query");
const query_9 = require("./types/enreach/manager/query");
const query_10 = require("./types/enreach/manager/query");
const tx_19 = require("./types/enreach/manager/tx");
const tx_20 = require("./types/enreach/manager/tx");
const query_11 = require("./types/enreach/manager/query");
const query_12 = require("./types/enreach/manager/query");
const operator_1 = require("./types/enreach/manager/operator");
const msgTypes = [
    ["/enreach.manager.MsgActivateManagerResponse", tx_1.MsgActivateManagerResponse],
    ["/enreach.manager.MsgGoWorking", tx_2.MsgGoWorking],
    ["/enreach.manager.MsgCreateOperator", tx_3.MsgCreateOperator],
    ["/enreach.manager.MsgSetManagerRegionResponse", tx_4.MsgSetManagerRegionResponse],
    ["/enreach.manager.MsgUpdateManagerConnParamsResponse", tx_5.MsgUpdateManagerConnParamsResponse],
    ["/enreach.manager.QueryGetManagerResponse", query_1.QueryGetManagerResponse],
    ["/enreach.manager.QueryAllManagerResponse", query_2.QueryAllManagerResponse],
    ["/enreach.manager.MsgUpdateParams", tx_6.MsgUpdateParams],
    ["/enreach.manager.MsgBindOperatorEVMAccountResponse", tx_7.MsgBindOperatorEVMAccountResponse],
    ["/enreach.manager.MsgUpdateOperatorBasicInfo", tx_8.MsgUpdateOperatorBasicInfo],
    ["/enreach.manager.QueryParamsRequest", query_3.QueryParamsRequest],
    ["/enreach.manager.QueryGetOperatorResponse", query_4.QueryGetOperatorResponse],
    ["/enreach.manager.QueryGetManagerRequest", query_5.QueryGetManagerRequest],
    ["/enreach.manager.MsgBindOperatorManagerAccountResponse", tx_9.MsgBindOperatorManagerAccountResponse],
    ["/enreach.manager.MsgSetManagerRegion", tx_10.MsgSetManagerRegion],
    ["/enreach.manager.QueryParamsResponse", query_6.QueryParamsResponse],
    ["/enreach.manager.Manager", manager_1.Manager],
    ["/enreach.manager.MsgBindOperatorEVMAccount", tx_11.MsgBindOperatorEVMAccount],
    ["/enreach.manager.MsgGoWorkingResponse", tx_12.MsgGoWorkingResponse],
    ["/enreach.manager.MsgRegisterManager", tx_13.MsgRegisterManager],
    ["/enreach.manager.MsgBindOperatorManagerAccount", tx_14.MsgBindOperatorManagerAccount],
    ["/enreach.manager.MsgActivateManager", tx_15.MsgActivateManager],
    ["/enreach.manager.QueryGetManagerByRegionResponse", query_7.QueryGetManagerByRegionResponse],
    ["/enreach.manager.MsgCreateOperatorResponse", tx_16.MsgCreateOperatorResponse],
    ["/enreach.manager.GenesisState", genesis_1.GenesisState],
    ["/enreach.manager.Params", params_1.Params],
    ["/enreach.manager.MsgUpdateParamsResponse", tx_17.MsgUpdateParamsResponse],
    ["/enreach.manager.MsgRegisterManagerResponse", tx_18.MsgRegisterManagerResponse],
    ["/enreach.manager.QueryGetOperatorRequest", query_8.QueryGetOperatorRequest],
    ["/enreach.manager.QueryAllOperatorRequest", query_9.QueryAllOperatorRequest],
    ["/enreach.manager.QueryAllOperatorResponse", query_10.QueryAllOperatorResponse],
    ["/enreach.manager.MsgUpdateManagerConnParams", tx_19.MsgUpdateManagerConnParams],
    ["/enreach.manager.MsgUpdateOperatorBasicInfoResponse", tx_20.MsgUpdateOperatorBasicInfoResponse],
    ["/enreach.manager.QueryAllManagerRequest", query_11.QueryAllManagerRequest],
    ["/enreach.manager.QueryGetManagerByRegionRequest", query_12.QueryGetManagerByRegionRequest],
    ["/enreach.manager.Operator", operator_1.Operator],
];
exports.msgTypes = msgTypes;
