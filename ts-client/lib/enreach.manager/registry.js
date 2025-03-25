"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const query_1 = require("./types/enreach/manager/query");
const query_2 = require("./types/enreach/manager/query");
const query_3 = require("./types/enreach/manager/query");
const params_1 = require("./types/enreach/manager/params");
const tx_1 = require("./types/enreach/manager/tx");
const tx_2 = require("./types/enreach/manager/tx");
const tx_3 = require("./types/enreach/manager/tx");
const tx_4 = require("./types/enreach/manager/tx");
const tx_5 = require("./types/enreach/manager/tx");
const tx_6 = require("./types/enreach/manager/tx");
const query_4 = require("./types/enreach/manager/query");
const query_5 = require("./types/enreach/manager/query");
const query_6 = require("./types/enreach/manager/query");
const query_7 = require("./types/enreach/manager/query");
const tx_7 = require("./types/enreach/manager/tx");
const query_8 = require("./types/enreach/manager/query");
const tx_8 = require("./types/enreach/manager/tx");
const tx_9 = require("./types/enreach/manager/tx");
const query_9 = require("./types/enreach/manager/query");
const tx_10 = require("./types/enreach/manager/tx");
const query_10 = require("./types/enreach/manager/query");
const tx_11 = require("./types/enreach/manager/tx");
const query_11 = require("./types/enreach/manager/query");
const query_12 = require("./types/enreach/manager/query");
const tx_12 = require("./types/enreach/manager/tx");
const manager_1 = require("./types/enreach/manager/manager");
const query_13 = require("./types/enreach/manager/query");
const superior_1 = require("./types/enreach/manager/superior");
const tx_13 = require("./types/enreach/manager/tx");
const tx_14 = require("./types/enreach/manager/tx");
const tx_15 = require("./types/enreach/manager/tx");
const tx_16 = require("./types/enreach/manager/tx");
const query_14 = require("./types/enreach/manager/query");
const tx_17 = require("./types/enreach/manager/tx");
const query_15 = require("./types/enreach/manager/query");
const tx_18 = require("./types/enreach/manager/tx");
const query_16 = require("./types/enreach/manager/query");
const query_17 = require("./types/enreach/manager/query");
const tx_19 = require("./types/enreach/manager/tx");
const tx_20 = require("./types/enreach/manager/tx");
const tx_21 = require("./types/enreach/manager/tx");
const query_18 = require("./types/enreach/manager/query");
const tx_22 = require("./types/enreach/manager/tx");
const tx_23 = require("./types/enreach/manager/tx");
const operator_1 = require("./types/enreach/manager/operator");
const genesis_1 = require("./types/enreach/manager/genesis");
const tx_24 = require("./types/enreach/manager/tx");
const msgTypes = [
    ["/enreach.manager.QueryAllManagerResponse", query_1.QueryAllManagerResponse],
    ["/enreach.manager.QueryAllOperatorRequest", query_2.QueryAllOperatorRequest],
    ["/enreach.manager.QueryGetManagerRequest", query_3.QueryGetManagerRequest],
    ["/enreach.manager.Params", params_1.Params],
    ["/enreach.manager.MsgBindOperatorManagerAccount", tx_1.MsgBindOperatorManagerAccount],
    ["/enreach.manager.MsgBindOperatorEVMAccountResponse", tx_2.MsgBindOperatorEVMAccountResponse],
    ["/enreach.manager.MsgUpdateOperatorBasicInfo", tx_3.MsgUpdateOperatorBasicInfo],
    ["/enreach.manager.MsgUpdateParams", tx_4.MsgUpdateParams],
    ["/enreach.manager.MsgUpdateManagerConnParams", tx_5.MsgUpdateManagerConnParams],
    ["/enreach.manager.MsgGoWorking", tx_6.MsgGoWorking],
    ["/enreach.manager.QueryParamsResponse", query_4.QueryParamsResponse],
    ["/enreach.manager.QueryGetOperatorRequest", query_5.QueryGetOperatorRequest],
    ["/enreach.manager.QueryAllOperatorResponse", query_6.QueryAllOperatorResponse],
    ["/enreach.manager.QueryGetSuperiorResponse", query_7.QueryGetSuperiorResponse],
    ["/enreach.manager.MsgBindOperatorManagerAccountResponse", tx_7.MsgBindOperatorManagerAccountResponse],
    ["/enreach.manager.QueryGetEpochLengthResponse", query_8.QueryGetEpochLengthResponse],
    ["/enreach.manager.MsgCreateSuperior", tx_8.MsgCreateSuperior],
    ["/enreach.manager.MsgCreateSuperiorResponse", tx_9.MsgCreateSuperiorResponse],
    ["/enreach.manager.QueryGetCurrentEpochResponse", query_9.QueryGetCurrentEpochResponse],
    ["/enreach.manager.MsgGoWorkingResponse", tx_10.MsgGoWorkingResponse],
    ["/enreach.manager.QueryGetOperatorResponse", query_10.QueryGetOperatorResponse],
    ["/enreach.manager.MsgUpdateSuperior", tx_11.MsgUpdateSuperior],
    ["/enreach.manager.QueryGetCurrentEpochRequest", query_11.QueryGetCurrentEpochRequest],
    ["/enreach.manager.QueryGetSuperiorRequest", query_12.QueryGetSuperiorRequest],
    ["/enreach.manager.MsgActivateManagerResponse", tx_12.MsgActivateManagerResponse],
    ["/enreach.manager.Manager", manager_1.Manager],
    ["/enreach.manager.QueryGetManagerResponse", query_13.QueryGetManagerResponse],
    ["/enreach.manager.Superior", superior_1.Superior],
    ["/enreach.manager.MsgRegisterManager", tx_13.MsgRegisterManager],
    ["/enreach.manager.MsgActivateManager", tx_14.MsgActivateManager],
    ["/enreach.manager.MsgCreateOperator", tx_15.MsgCreateOperator],
    ["/enreach.manager.MsgUpdateSuperiorResponse", tx_16.MsgUpdateSuperiorResponse],
    ["/enreach.manager.QueryParamsRequest", query_14.QueryParamsRequest],
    ["/enreach.manager.MsgUpdateManagerConnParamsResponse", tx_17.MsgUpdateManagerConnParamsResponse],
    ["/enreach.manager.QueryAllManagerRequest", query_15.QueryAllManagerRequest],
    ["/enreach.manager.MsgCreateOperatorResponse", tx_18.MsgCreateOperatorResponse],
    ["/enreach.manager.QueryGetManagerByRegionResponse", query_16.QueryGetManagerByRegionResponse],
    ["/enreach.manager.QueryGetManagerByRegionRequest", query_17.QueryGetManagerByRegionRequest],
    ["/enreach.manager.MsgSetManagerRegionResponse", tx_19.MsgSetManagerRegionResponse],
    ["/enreach.manager.MsgBindOperatorEVMAccount", tx_20.MsgBindOperatorEVMAccount],
    ["/enreach.manager.MsgUpdateOperatorBasicInfoResponse", tx_21.MsgUpdateOperatorBasicInfoResponse],
    ["/enreach.manager.QueryGetEpochLengthRequest", query_18.QueryGetEpochLengthRequest],
    ["/enreach.manager.MsgSetManagerRegion", tx_22.MsgSetManagerRegion],
    ["/enreach.manager.MsgRegisterManagerResponse", tx_23.MsgRegisterManagerResponse],
    ["/enreach.manager.Operator", operator_1.Operator],
    ["/enreach.manager.GenesisState", genesis_1.GenesisState],
    ["/enreach.manager.MsgUpdateParamsResponse", tx_24.MsgUpdateParamsResponse],
];
exports.msgTypes = msgTypes;
