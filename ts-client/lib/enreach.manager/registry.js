"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/enreach/manager/tx");
const operator_1 = require("./types/enreach/manager/operator");
const tx_2 = require("./types/enreach/manager/tx");
const query_1 = require("./types/enreach/manager/query");
const tx_3 = require("./types/enreach/manager/tx");
const tx_4 = require("./types/enreach/manager/tx");
const query_2 = require("./types/enreach/manager/query");
const tx_5 = require("./types/enreach/manager/tx");
const tx_6 = require("./types/enreach/manager/tx");
const query_3 = require("./types/enreach/manager/query");
const query_4 = require("./types/enreach/manager/query");
const query_5 = require("./types/enreach/manager/query");
const tx_7 = require("./types/enreach/manager/tx");
const params_1 = require("./types/enreach/manager/params");
const query_6 = require("./types/enreach/manager/query");
const tx_8 = require("./types/enreach/manager/tx");
const tx_9 = require("./types/enreach/manager/tx");
const tx_10 = require("./types/enreach/manager/tx");
const tx_11 = require("./types/enreach/manager/tx");
const tx_12 = require("./types/enreach/manager/tx");
const query_7 = require("./types/enreach/manager/query");
const query_8 = require("./types/enreach/manager/query");
const genesis_1 = require("./types/enreach/manager/genesis");
const manager_1 = require("./types/enreach/manager/manager");
const tx_13 = require("./types/enreach/manager/tx");
const tx_14 = require("./types/enreach/manager/tx");
const tx_15 = require("./types/enreach/manager/tx");
const tx_16 = require("./types/enreach/manager/tx");
const query_9 = require("./types/enreach/manager/query");
const query_10 = require("./types/enreach/manager/query");
const query_11 = require("./types/enreach/manager/query");
const tx_17 = require("./types/enreach/manager/tx");
const tx_18 = require("./types/enreach/manager/tx");
const tx_19 = require("./types/enreach/manager/tx");
const tx_20 = require("./types/enreach/manager/tx");
const query_12 = require("./types/enreach/manager/query");
const query_13 = require("./types/enreach/manager/query");
const query_14 = require("./types/enreach/manager/query");
const tx_21 = require("./types/enreach/manager/tx");
const tx_22 = require("./types/enreach/manager/tx");
const superior_1 = require("./types/enreach/manager/superior");
const tx_23 = require("./types/enreach/manager/tx");
const tx_24 = require("./types/enreach/manager/tx");
const msgTypes = [
    ["/enreach.manager.MsgBindOperatorEVMAccount", tx_1.MsgBindOperatorEVMAccount],
    ["/enreach.manager.Operator", operator_1.Operator],
    ["/enreach.manager.MsgCreateSuperior", tx_2.MsgCreateSuperior],
    ["/enreach.manager.QueryGetOperatorResponse", query_1.QueryGetOperatorResponse],
    ["/enreach.manager.MsgBindOperatorManagerAccountResponse", tx_3.MsgBindOperatorManagerAccountResponse],
    ["/enreach.manager.MsgSetManagerRegionResponse", tx_4.MsgSetManagerRegionResponse],
    ["/enreach.manager.QueryGetSuperiorRequest", query_2.QueryGetSuperiorRequest],
    ["/enreach.manager.MsgUpdateParamsResponse", tx_5.MsgUpdateParamsResponse],
    ["/enreach.manager.MsgActivateManager", tx_6.MsgActivateManager],
    ["/enreach.manager.QueryAllOperatorRequest", query_3.QueryAllOperatorRequest],
    ["/enreach.manager.QueryAllManagerResponse", query_4.QueryAllManagerResponse],
    ["/enreach.manager.QueryGetManagerByRegionResponse", query_5.QueryGetManagerByRegionResponse],
    ["/enreach.manager.MsgSetManagerRegion", tx_7.MsgSetManagerRegion],
    ["/enreach.manager.Params", params_1.Params],
    ["/enreach.manager.QueryParamsRequest", query_6.QueryParamsRequest],
    ["/enreach.manager.MsgActivateManagerResponse", tx_8.MsgActivateManagerResponse],
    ["/enreach.manager.MsgBindOperatorManagerAccount", tx_9.MsgBindOperatorManagerAccount],
    ["/enreach.manager.MsgUpdateManagerConnParamsResponse", tx_10.MsgUpdateManagerConnParamsResponse],
    ["/enreach.manager.MsgGoWorking", tx_11.MsgGoWorking],
    ["/enreach.manager.MsgGoWorkingResponse", tx_12.MsgGoWorkingResponse],
    ["/enreach.manager.QueryGetManagerByRegionRequest", query_7.QueryGetManagerByRegionRequest],
    ["/enreach.manager.QueryGetSuperiorResponse", query_8.QueryGetSuperiorResponse],
    ["/enreach.manager.GenesisState", genesis_1.GenesisState],
    ["/enreach.manager.Manager", manager_1.Manager],
    ["/enreach.manager.MsgCreateSuperiorResponse", tx_13.MsgCreateSuperiorResponse],
    ["/enreach.manager.MsgUpdateSuperiorResponse", tx_14.MsgUpdateSuperiorResponse],
    ["/enreach.manager.MsgUpdateManagerConnParams", tx_15.MsgUpdateManagerConnParams],
    ["/enreach.manager.MsgUpdateOperatorBasicInfoResponse", tx_16.MsgUpdateOperatorBasicInfoResponse],
    ["/enreach.manager.QueryGetOperatorRequest", query_9.QueryGetOperatorRequest],
    ["/enreach.manager.QueryGetManagerRequest", query_10.QueryGetManagerRequest],
    ["/enreach.manager.QueryAllManagerRequest", query_11.QueryAllManagerRequest],
    ["/enreach.manager.MsgCreateOperatorResponse", tx_17.MsgCreateOperatorResponse],
    ["/enreach.manager.MsgBindOperatorEVMAccountResponse", tx_18.MsgBindOperatorEVMAccountResponse],
    ["/enreach.manager.MsgUpdateOperatorBasicInfo", tx_19.MsgUpdateOperatorBasicInfo],
    ["/enreach.manager.MsgUpdateSuperior", tx_20.MsgUpdateSuperior],
    ["/enreach.manager.QueryParamsResponse", query_12.QueryParamsResponse],
    ["/enreach.manager.QueryAllOperatorResponse", query_13.QueryAllOperatorResponse],
    ["/enreach.manager.QueryGetManagerResponse", query_14.QueryGetManagerResponse],
    ["/enreach.manager.MsgRegisterManager", tx_21.MsgRegisterManager],
    ["/enreach.manager.MsgRegisterManagerResponse", tx_22.MsgRegisterManagerResponse],
    ["/enreach.manager.Superior", superior_1.Superior],
    ["/enreach.manager.MsgUpdateParams", tx_23.MsgUpdateParams],
    ["/enreach.manager.MsgCreateOperator", tx_24.MsgCreateOperator],
];
exports.msgTypes = msgTypes;
