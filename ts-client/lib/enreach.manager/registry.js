"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const query_1 = require("./types/enreach/manager/query");
const tx_1 = require("./types/enreach/manager/tx");
const tx_2 = require("./types/enreach/manager/tx");
const tx_3 = require("./types/enreach/manager/tx");
const tx_4 = require("./types/enreach/manager/tx");
const query_2 = require("./types/enreach/manager/query");
const tx_5 = require("./types/enreach/manager/tx");
const tx_6 = require("./types/enreach/manager/tx");
const query_3 = require("./types/enreach/manager/query");
const params_1 = require("./types/enreach/manager/params");
const tx_7 = require("./types/enreach/manager/tx");
const superior_1 = require("./types/enreach/manager/superior");
const tx_8 = require("./types/enreach/manager/tx");
const tx_9 = require("./types/enreach/manager/tx");
const tx_10 = require("./types/enreach/manager/tx");
const tx_11 = require("./types/enreach/manager/tx");
const tx_12 = require("./types/enreach/manager/tx");
const query_4 = require("./types/enreach/manager/query");
const query_5 = require("./types/enreach/manager/query");
const query_6 = require("./types/enreach/manager/query");
const tx_13 = require("./types/enreach/manager/tx");
const query_7 = require("./types/enreach/manager/query");
const query_8 = require("./types/enreach/manager/query");
const tx_14 = require("./types/enreach/manager/tx");
const genesis_1 = require("./types/enreach/manager/genesis");
const tx_15 = require("./types/enreach/manager/tx");
const query_9 = require("./types/enreach/manager/query");
const tx_16 = require("./types/enreach/manager/tx");
const query_10 = require("./types/enreach/manager/query");
const query_11 = require("./types/enreach/manager/query");
const query_12 = require("./types/enreach/manager/query");
const tx_17 = require("./types/enreach/manager/tx");
const manager_1 = require("./types/enreach/manager/manager");
const tx_18 = require("./types/enreach/manager/tx");
const tx_19 = require("./types/enreach/manager/tx");
const operator_1 = require("./types/enreach/manager/operator");
const query_13 = require("./types/enreach/manager/query");
const tx_20 = require("./types/enreach/manager/tx");
const tx_21 = require("./types/enreach/manager/tx");
const tx_22 = require("./types/enreach/manager/tx");
const tx_23 = require("./types/enreach/manager/tx");
const query_14 = require("./types/enreach/manager/query");
const query_15 = require("./types/enreach/manager/query");
const query_16 = require("./types/enreach/manager/query");
const query_17 = require("./types/enreach/manager/query");
const query_18 = require("./types/enreach/manager/query");
const tx_24 = require("./types/enreach/manager/tx");
const msgTypes = [
    ["/enreach.manager.QueryGetOperatorResponse", query_1.QueryGetOperatorResponse],
    ["/enreach.manager.MsgUpdateParams", tx_1.MsgUpdateParams],
    ["/enreach.manager.MsgActivateManagerResponse", tx_2.MsgActivateManagerResponse],
    ["/enreach.manager.MsgUpdateParamsResponse", tx_3.MsgUpdateParamsResponse],
    ["/enreach.manager.MsgRegisterManager", tx_4.MsgRegisterManager],
    ["/enreach.manager.QueryGetManagerResponse", query_2.QueryGetManagerResponse],
    ["/enreach.manager.MsgUpdateOperatorBasicInfo", tx_5.MsgUpdateOperatorBasicInfo],
    ["/enreach.manager.MsgBindOperatorManagerAccountResponse", tx_6.MsgBindOperatorManagerAccountResponse],
    ["/enreach.manager.QueryAllOperatorResponse", query_3.QueryAllOperatorResponse],
    ["/enreach.manager.Params", params_1.Params],
    ["/enreach.manager.MsgUpdateManagerConnParamsResponse", tx_7.MsgUpdateManagerConnParamsResponse],
    ["/enreach.manager.Superior", superior_1.Superior],
    ["/enreach.manager.MsgUpdateSuperiorResponse", tx_8.MsgUpdateSuperiorResponse],
    ["/enreach.manager.MsgBindOperatorEVMAccount", tx_9.MsgBindOperatorEVMAccount],
    ["/enreach.manager.MsgBindOperatorEVMAccountResponse", tx_10.MsgBindOperatorEVMAccountResponse],
    ["/enreach.manager.MsgRegisterManagerResponse", tx_11.MsgRegisterManagerResponse],
    ["/enreach.manager.MsgCreateOperator", tx_12.MsgCreateOperator],
    ["/enreach.manager.QueryParamsResponse", query_4.QueryParamsResponse],
    ["/enreach.manager.QueryGetOperatorRequest", query_5.QueryGetOperatorRequest],
    ["/enreach.manager.QueryGetEpochLengthResponse", query_6.QueryGetEpochLengthResponse],
    ["/enreach.manager.MsgCreateOperatorResponse", tx_13.MsgCreateOperatorResponse],
    ["/enreach.manager.QueryGetManagerRequest", query_7.QueryGetManagerRequest],
    ["/enreach.manager.QueryGetManagerByRegionRequest", query_8.QueryGetManagerByRegionRequest],
    ["/enreach.manager.MsgGoWorking", tx_14.MsgGoWorking],
    ["/enreach.manager.GenesisState", genesis_1.GenesisState],
    ["/enreach.manager.MsgUpdateSuperior", tx_15.MsgUpdateSuperior],
    ["/enreach.manager.QueryGetCurrentEpochResponse", query_9.QueryGetCurrentEpochResponse],
    ["/enreach.manager.MsgCreateSuperior", tx_16.MsgCreateSuperior],
    ["/enreach.manager.QueryAllManagerRequest", query_10.QueryAllManagerRequest],
    ["/enreach.manager.QueryGetEpochLengthRequest", query_11.QueryGetEpochLengthRequest],
    ["/enreach.manager.QueryGetSuperiorRequest", query_12.QueryGetSuperiorRequest],
    ["/enreach.manager.MsgUpdateManagerConnParams", tx_17.MsgUpdateManagerConnParams],
    ["/enreach.manager.Manager", manager_1.Manager],
    ["/enreach.manager.MsgBindOperatorManagerAccount", tx_18.MsgBindOperatorManagerAccount],
    ["/enreach.manager.MsgGoWorkingResponse", tx_19.MsgGoWorkingResponse],
    ["/enreach.manager.Operator", operator_1.Operator],
    ["/enreach.manager.QueryGetManagerByRegionResponse", query_13.QueryGetManagerByRegionResponse],
    ["/enreach.manager.MsgSetManagerRegion", tx_20.MsgSetManagerRegion],
    ["/enreach.manager.MsgSetManagerRegionResponse", tx_21.MsgSetManagerRegionResponse],
    ["/enreach.manager.MsgUpdateOperatorBasicInfoResponse", tx_22.MsgUpdateOperatorBasicInfoResponse],
    ["/enreach.manager.MsgCreateSuperiorResponse", tx_23.MsgCreateSuperiorResponse],
    ["/enreach.manager.QueryGetCurrentEpochRequest", query_14.QueryGetCurrentEpochRequest],
    ["/enreach.manager.QueryGetSuperiorResponse", query_15.QueryGetSuperiorResponse],
    ["/enreach.manager.QueryParamsRequest", query_16.QueryParamsRequest],
    ["/enreach.manager.QueryAllOperatorRequest", query_17.QueryAllOperatorRequest],
    ["/enreach.manager.QueryAllManagerResponse", query_18.QueryAllManagerResponse],
    ["/enreach.manager.MsgActivateManager", tx_24.MsgActivateManager],
];
exports.msgTypes = msgTypes;
