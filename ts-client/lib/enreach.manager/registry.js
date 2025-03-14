"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/enreach/manager/tx");
const query_1 = require("./types/enreach/manager/query");
const query_2 = require("./types/enreach/manager/query");
const params_1 = require("./types/enreach/manager/params");
const tx_2 = require("./types/enreach/manager/tx");
const operator_1 = require("./types/enreach/manager/operator");
const tx_3 = require("./types/enreach/manager/tx");
const tx_4 = require("./types/enreach/manager/tx");
const manager_1 = require("./types/enreach/manager/manager");
const query_3 = require("./types/enreach/manager/query");
const tx_5 = require("./types/enreach/manager/tx");
const tx_6 = require("./types/enreach/manager/tx");
const tx_7 = require("./types/enreach/manager/tx");
const query_4 = require("./types/enreach/manager/query");
const query_5 = require("./types/enreach/manager/query");
const tx_8 = require("./types/enreach/manager/tx");
const query_6 = require("./types/enreach/manager/query");
const query_7 = require("./types/enreach/manager/query");
const tx_9 = require("./types/enreach/manager/tx");
const tx_10 = require("./types/enreach/manager/tx");
const genesis_1 = require("./types/enreach/manager/genesis");
const query_8 = require("./types/enreach/manager/query");
const query_9 = require("./types/enreach/manager/query");
const query_10 = require("./types/enreach/manager/query");
const tx_11 = require("./types/enreach/manager/tx");
const query_11 = require("./types/enreach/manager/query");
const query_12 = require("./types/enreach/manager/query");
const tx_12 = require("./types/enreach/manager/tx");
const tx_13 = require("./types/enreach/manager/tx");
const query_13 = require("./types/enreach/manager/query");
const tx_14 = require("./types/enreach/manager/tx");
const tx_15 = require("./types/enreach/manager/tx");
const tx_16 = require("./types/enreach/manager/tx");
const tx_17 = require("./types/enreach/manager/tx");
const tx_18 = require("./types/enreach/manager/tx");
const query_14 = require("./types/enreach/manager/query");
const query_15 = require("./types/enreach/manager/query");
const query_16 = require("./types/enreach/manager/query");
const tx_19 = require("./types/enreach/manager/tx");
const tx_20 = require("./types/enreach/manager/tx");
const msgTypes = [
    ["/enreach.manager.MsgBindOperatorEVMAccount", tx_1.MsgBindOperatorEVMAccount],
    ["/enreach.manager.QueryGetManagerResponse", query_1.QueryGetManagerResponse],
    ["/enreach.manager.QueryGetManagerByRegionResponse", query_2.QueryGetManagerByRegionResponse],
    ["/enreach.manager.Params", params_1.Params],
    ["/enreach.manager.MsgUpdateParams", tx_2.MsgUpdateParams],
    ["/enreach.manager.Operator", operator_1.Operator],
    ["/enreach.manager.MsgUpdateOperatorBasicInfoResponse", tx_3.MsgUpdateOperatorBasicInfoResponse],
    ["/enreach.manager.MsgGoWorkingResponse", tx_4.MsgGoWorkingResponse],
    ["/enreach.manager.Manager", manager_1.Manager],
    ["/enreach.manager.QueryAllManagerResponse", query_3.QueryAllManagerResponse],
    ["/enreach.manager.MsgSetManagerRegion", tx_5.MsgSetManagerRegion],
    ["/enreach.manager.MsgSetManagerRegionResponse", tx_6.MsgSetManagerRegionResponse],
    ["/enreach.manager.MsgUpdateOperatorBasicInfo", tx_7.MsgUpdateOperatorBasicInfo],
    ["/enreach.manager.QueryAllOperatorResponse", query_4.QueryAllOperatorResponse],
    ["/enreach.manager.QueryGetEpochLengthRequest", query_5.QueryGetEpochLengthRequest],
    ["/enreach.manager.MsgRegisterManager", tx_8.MsgRegisterManager],
    ["/enreach.manager.QueryGetOperatorRequest", query_6.QueryGetOperatorRequest],
    ["/enreach.manager.QueryGetCurrentEpochResponse", query_7.QueryGetCurrentEpochResponse],
    ["/enreach.manager.MsgActivateManager", tx_9.MsgActivateManager],
    ["/enreach.manager.MsgRegisterManagerResponse", tx_10.MsgRegisterManagerResponse],
    ["/enreach.manager.GenesisState", genesis_1.GenesisState],
    ["/enreach.manager.QueryGetOperatorResponse", query_8.QueryGetOperatorResponse],
    ["/enreach.manager.QueryAllOperatorRequest", query_9.QueryAllOperatorRequest],
    ["/enreach.manager.QueryAllManagerRequest", query_10.QueryAllManagerRequest],
    ["/enreach.manager.MsgBindOperatorEVMAccountResponse", tx_11.MsgBindOperatorEVMAccountResponse],
    ["/enreach.manager.QueryParamsRequest", query_11.QueryParamsRequest],
    ["/enreach.manager.QueryGetManagerRequest", query_12.QueryGetManagerRequest],
    ["/enreach.manager.MsgUpdateParamsResponse", tx_12.MsgUpdateParamsResponse],
    ["/enreach.manager.MsgActivateManagerResponse", tx_13.MsgActivateManagerResponse],
    ["/enreach.manager.QueryGetCurrentEpochRequest", query_13.QueryGetCurrentEpochRequest],
    ["/enreach.manager.MsgCreateOperator", tx_14.MsgCreateOperator],
    ["/enreach.manager.MsgCreateOperatorResponse", tx_15.MsgCreateOperatorResponse],
    ["/enreach.manager.MsgBindOperatorManagerAccountResponse", tx_16.MsgBindOperatorManagerAccountResponse],
    ["/enreach.manager.MsgUpdateManagerConnParamsResponse", tx_17.MsgUpdateManagerConnParamsResponse],
    ["/enreach.manager.MsgGoWorking", tx_18.MsgGoWorking],
    ["/enreach.manager.QueryParamsResponse", query_14.QueryParamsResponse],
    ["/enreach.manager.QueryGetManagerByRegionRequest", query_15.QueryGetManagerByRegionRequest],
    ["/enreach.manager.QueryGetEpochLengthResponse", query_16.QueryGetEpochLengthResponse],
    ["/enreach.manager.MsgBindOperatorManagerAccount", tx_19.MsgBindOperatorManagerAccount],
    ["/enreach.manager.MsgUpdateManagerConnParams", tx_20.MsgUpdateManagerConnParams],
];
exports.msgTypes = msgTypes;
