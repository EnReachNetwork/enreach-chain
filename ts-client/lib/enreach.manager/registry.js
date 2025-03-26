"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/enreach/manager/tx");
const query_1 = require("./types/enreach/manager/query");
const query_2 = require("./types/enreach/manager/query");
const query_3 = require("./types/enreach/manager/query");
const tx_2 = require("./types/enreach/manager/tx");
const tx_3 = require("./types/enreach/manager/tx");
const tx_4 = require("./types/enreach/manager/tx");
const query_4 = require("./types/enreach/manager/query");
const tx_5 = require("./types/enreach/manager/tx");
const manager_1 = require("./types/enreach/manager/manager");
const params_1 = require("./types/enreach/manager/params");
const query_5 = require("./types/enreach/manager/query");
const tx_6 = require("./types/enreach/manager/tx");
const tx_7 = require("./types/enreach/manager/tx");
const tx_8 = require("./types/enreach/manager/tx");
const tx_9 = require("./types/enreach/manager/tx");
const query_6 = require("./types/enreach/manager/query");
const query_7 = require("./types/enreach/manager/query");
const tx_10 = require("./types/enreach/manager/tx");
const query_8 = require("./types/enreach/manager/query");
const query_9 = require("./types/enreach/manager/query");
const query_10 = require("./types/enreach/manager/query");
const query_11 = require("./types/enreach/manager/query");
const tx_11 = require("./types/enreach/manager/tx");
const tx_12 = require("./types/enreach/manager/tx");
const tx_13 = require("./types/enreach/manager/tx");
const tx_14 = require("./types/enreach/manager/tx");
const tx_15 = require("./types/enreach/manager/tx");
const tx_16 = require("./types/enreach/manager/tx");
const superior_1 = require("./types/enreach/manager/superior");
const operator_1 = require("./types/enreach/manager/operator");
const genesis_1 = require("./types/enreach/manager/genesis");
const query_12 = require("./types/enreach/manager/query");
const tx_17 = require("./types/enreach/manager/tx");
const tx_18 = require("./types/enreach/manager/tx");
const tx_19 = require("./types/enreach/manager/tx");
const tx_20 = require("./types/enreach/manager/tx");
const query_13 = require("./types/enreach/manager/query");
const query_14 = require("./types/enreach/manager/query");
const tx_21 = require("./types/enreach/manager/tx");
const tx_22 = require("./types/enreach/manager/tx");
const tx_23 = require("./types/enreach/manager/tx");
const tx_24 = require("./types/enreach/manager/tx");
const msgTypes = [
    ["/enreach.manager.MsgRegisterManager", tx_1.MsgRegisterManager],
    ["/enreach.manager.QueryGetOperatorResponse", query_1.QueryGetOperatorResponse],
    ["/enreach.manager.QueryGetManagerResponse", query_2.QueryGetManagerResponse],
    ["/enreach.manager.QueryGetSuperiorResponse", query_3.QueryGetSuperiorResponse],
    ["/enreach.manager.MsgUpdateSuperior", tx_2.MsgUpdateSuperior],
    ["/enreach.manager.MsgUpdateParamsResponse", tx_3.MsgUpdateParamsResponse],
    ["/enreach.manager.MsgBindOperatorEVMAccount", tx_4.MsgBindOperatorEVMAccount],
    ["/enreach.manager.QueryAllOperatorResponse", query_4.QueryAllOperatorResponse],
    ["/enreach.manager.MsgGoWorking", tx_5.MsgGoWorking],
    ["/enreach.manager.Manager", manager_1.Manager],
    ["/enreach.manager.Params", params_1.Params],
    ["/enreach.manager.QueryGetManagerByRegionRequest", query_5.QueryGetManagerByRegionRequest],
    ["/enreach.manager.MsgSetManagerRegionResponse", tx_6.MsgSetManagerRegionResponse],
    ["/enreach.manager.MsgBindOperatorEVMAccountResponse", tx_7.MsgBindOperatorEVMAccountResponse],
    ["/enreach.manager.MsgRegisterManagerResponse", tx_8.MsgRegisterManagerResponse],
    ["/enreach.manager.MsgUpdateSuperiorResponse", tx_9.MsgUpdateSuperiorResponse],
    ["/enreach.manager.QueryParamsRequest", query_6.QueryParamsRequest],
    ["/enreach.manager.QueryGetManagerByRegionResponse", query_7.QueryGetManagerByRegionResponse],
    ["/enreach.manager.MsgCreateSuperiorResponse", tx_10.MsgCreateSuperiorResponse],
    ["/enreach.manager.QueryParamsResponse", query_8.QueryParamsResponse],
    ["/enreach.manager.QueryGetOperatorRequest", query_9.QueryGetOperatorRequest],
    ["/enreach.manager.QueryGetManagerRequest", query_10.QueryGetManagerRequest],
    ["/enreach.manager.QueryGetSuperiorRequest", query_11.QueryGetSuperiorRequest],
    ["/enreach.manager.MsgActivateManager", tx_11.MsgActivateManager],
    ["/enreach.manager.MsgCreateOperatorResponse", tx_12.MsgCreateOperatorResponse],
    ["/enreach.manager.MsgBindOperatorManagerAccountResponse", tx_13.MsgBindOperatorManagerAccountResponse],
    ["/enreach.manager.MsgUpdateManagerConnParams", tx_14.MsgUpdateManagerConnParams],
    ["/enreach.manager.MsgUpdateManagerConnParamsResponse", tx_15.MsgUpdateManagerConnParamsResponse],
    ["/enreach.manager.MsgUpdateOperatorBasicInfoResponse", tx_16.MsgUpdateOperatorBasicInfoResponse],
    ["/enreach.manager.Superior", superior_1.Superior],
    ["/enreach.manager.Operator", operator_1.Operator],
    ["/enreach.manager.GenesisState", genesis_1.GenesisState],
    ["/enreach.manager.QueryAllOperatorRequest", query_12.QueryAllOperatorRequest],
    ["/enreach.manager.MsgUpdateParams", tx_17.MsgUpdateParams],
    ["/enreach.manager.MsgBindOperatorManagerAccount", tx_18.MsgBindOperatorManagerAccount],
    ["/enreach.manager.MsgSetManagerRegion", tx_19.MsgSetManagerRegion],
    ["/enreach.manager.MsgUpdateOperatorBasicInfo", tx_20.MsgUpdateOperatorBasicInfo],
    ["/enreach.manager.QueryAllManagerRequest", query_13.QueryAllManagerRequest],
    ["/enreach.manager.QueryAllManagerResponse", query_14.QueryAllManagerResponse],
    ["/enreach.manager.MsgCreateSuperior", tx_21.MsgCreateSuperior],
    ["/enreach.manager.MsgCreateOperator", tx_22.MsgCreateOperator],
    ["/enreach.manager.MsgActivateManagerResponse", tx_23.MsgActivateManagerResponse],
    ["/enreach.manager.MsgGoWorkingResponse", tx_24.MsgGoWorkingResponse],
];
exports.msgTypes = msgTypes;
