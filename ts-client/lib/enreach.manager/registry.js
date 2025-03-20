"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/enreach/manager/tx");
const tx_2 = require("./types/enreach/manager/tx");
const tx_3 = require("./types/enreach/manager/tx");
const tx_4 = require("./types/enreach/manager/tx");
const tx_5 = require("./types/enreach/manager/tx");
const tx_6 = require("./types/enreach/manager/tx");
const tx_7 = require("./types/enreach/manager/tx");
const query_1 = require("./types/enreach/manager/query");
const query_2 = require("./types/enreach/manager/query");
const query_3 = require("./types/enreach/manager/query");
const tx_8 = require("./types/enreach/manager/tx");
const tx_9 = require("./types/enreach/manager/tx");
const tx_10 = require("./types/enreach/manager/tx");
const tx_11 = require("./types/enreach/manager/tx");
const query_4 = require("./types/enreach/manager/query");
const params_1 = require("./types/enreach/manager/params");
const query_5 = require("./types/enreach/manager/query");
const query_6 = require("./types/enreach/manager/query");
const query_7 = require("./types/enreach/manager/query");
const query_8 = require("./types/enreach/manager/query");
const operator_1 = require("./types/enreach/manager/operator");
const manager_1 = require("./types/enreach/manager/manager");
const tx_12 = require("./types/enreach/manager/tx");
const tx_13 = require("./types/enreach/manager/tx");
const query_9 = require("./types/enreach/manager/query");
const query_10 = require("./types/enreach/manager/query");
const tx_14 = require("./types/enreach/manager/tx");
const tx_15 = require("./types/enreach/manager/tx");
const tx_16 = require("./types/enreach/manager/tx");
const tx_17 = require("./types/enreach/manager/tx");
const query_11 = require("./types/enreach/manager/query");
const tx_18 = require("./types/enreach/manager/tx");
const tx_19 = require("./types/enreach/manager/tx");
const query_12 = require("./types/enreach/manager/query");
const query_13 = require("./types/enreach/manager/query");
const tx_20 = require("./types/enreach/manager/tx");
const tx_21 = require("./types/enreach/manager/tx");
const superior_1 = require("./types/enreach/manager/superior");
const genesis_1 = require("./types/enreach/manager/genesis");
const tx_22 = require("./types/enreach/manager/tx");
const query_14 = require("./types/enreach/manager/query");
const query_15 = require("./types/enreach/manager/query");
const query_16 = require("./types/enreach/manager/query");
const tx_23 = require("./types/enreach/manager/tx");
const query_17 = require("./types/enreach/manager/query");
const query_18 = require("./types/enreach/manager/query");
const tx_24 = require("./types/enreach/manager/tx");
const msgTypes = [
    ["/enreach.manager.MsgCreateOperator", tx_1.MsgCreateOperator],
    ["/enreach.manager.MsgUpdateSuperior", tx_2.MsgUpdateSuperior],
    ["/enreach.manager.MsgUpdateSuperiorResponse", tx_3.MsgUpdateSuperiorResponse],
    ["/enreach.manager.MsgUpdateParams", tx_4.MsgUpdateParams],
    ["/enreach.manager.MsgUpdateParamsResponse", tx_5.MsgUpdateParamsResponse],
    ["/enreach.manager.MsgBindOperatorManagerAccount", tx_6.MsgBindOperatorManagerAccount],
    ["/enreach.manager.MsgUpdateOperatorBasicInfoResponse", tx_7.MsgUpdateOperatorBasicInfoResponse],
    ["/enreach.manager.QueryParamsRequest", query_1.QueryParamsRequest],
    ["/enreach.manager.QueryParamsResponse", query_2.QueryParamsResponse],
    ["/enreach.manager.QueryGetManagerRequest", query_3.QueryGetManagerRequest],
    ["/enreach.manager.MsgCreateSuperiorResponse", tx_8.MsgCreateSuperiorResponse],
    ["/enreach.manager.MsgGoWorking", tx_9.MsgGoWorking],
    ["/enreach.manager.MsgUpdateOperatorBasicInfo", tx_10.MsgUpdateOperatorBasicInfo],
    ["/enreach.manager.MsgActivateManagerResponse", tx_11.MsgActivateManagerResponse],
    ["/enreach.manager.QueryGetEpochLengthResponse", query_4.QueryGetEpochLengthResponse],
    ["/enreach.manager.Params", params_1.Params],
    ["/enreach.manager.QueryGetCurrentEpochResponse", query_5.QueryGetCurrentEpochResponse],
    ["/enreach.manager.QueryGetOperatorRequest", query_6.QueryGetOperatorRequest],
    ["/enreach.manager.QueryAllOperatorRequest", query_7.QueryAllOperatorRequest],
    ["/enreach.manager.QueryGetManagerByRegionResponse", query_8.QueryGetManagerByRegionResponse],
    ["/enreach.manager.Operator", operator_1.Operator],
    ["/enreach.manager.Manager", manager_1.Manager],
    ["/enreach.manager.MsgBindOperatorEVMAccount", tx_12.MsgBindOperatorEVMAccount],
    ["/enreach.manager.MsgBindOperatorEVMAccountResponse", tx_13.MsgBindOperatorEVMAccountResponse],
    ["/enreach.manager.QueryGetManagerResponse", query_9.QueryGetManagerResponse],
    ["/enreach.manager.QueryGetSuperiorResponse", query_10.QueryGetSuperiorResponse],
    ["/enreach.manager.MsgGoWorkingResponse", tx_14.MsgGoWorkingResponse],
    ["/enreach.manager.MsgSetManagerRegionResponse", tx_15.MsgSetManagerRegionResponse],
    ["/enreach.manager.MsgBindOperatorManagerAccountResponse", tx_16.MsgBindOperatorManagerAccountResponse],
    ["/enreach.manager.MsgUpdateManagerConnParams", tx_17.MsgUpdateManagerConnParams],
    ["/enreach.manager.QueryGetManagerByRegionRequest", query_11.QueryGetManagerByRegionRequest],
    ["/enreach.manager.MsgUpdateManagerConnParamsResponse", tx_18.MsgUpdateManagerConnParamsResponse],
    ["/enreach.manager.MsgRegisterManagerResponse", tx_19.MsgRegisterManagerResponse],
    ["/enreach.manager.QueryAllManagerResponse", query_12.QueryAllManagerResponse],
    ["/enreach.manager.QueryGetCurrentEpochRequest", query_13.QueryGetCurrentEpochRequest],
    ["/enreach.manager.MsgActivateManager", tx_20.MsgActivateManager],
    ["/enreach.manager.MsgCreateSuperior", tx_21.MsgCreateSuperior],
    ["/enreach.manager.Superior", superior_1.Superior],
    ["/enreach.manager.GenesisState", genesis_1.GenesisState],
    ["/enreach.manager.MsgSetManagerRegion", tx_22.MsgSetManagerRegion],
    ["/enreach.manager.QueryAllManagerRequest", query_14.QueryAllManagerRequest],
    ["/enreach.manager.QueryGetEpochLengthRequest", query_15.QueryGetEpochLengthRequest],
    ["/enreach.manager.QueryGetSuperiorRequest", query_16.QueryGetSuperiorRequest],
    ["/enreach.manager.MsgRegisterManager", tx_23.MsgRegisterManager],
    ["/enreach.manager.QueryGetOperatorResponse", query_17.QueryGetOperatorResponse],
    ["/enreach.manager.QueryAllOperatorResponse", query_18.QueryAllOperatorResponse],
    ["/enreach.manager.MsgCreateOperatorResponse", tx_24.MsgCreateOperatorResponse],
];
exports.msgTypes = msgTypes;
