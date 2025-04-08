"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/enreach/manager/tx");
const query_1 = require("./types/enreach/manager/query");
const tx_2 = require("./types/enreach/manager/tx");
const manager_1 = require("./types/enreach/manager/manager");
const tx_3 = require("./types/enreach/manager/tx");
const params_1 = require("./types/enreach/manager/params");
const tx_4 = require("./types/enreach/manager/tx");
const query_2 = require("./types/enreach/manager/query");
const query_3 = require("./types/enreach/manager/query");
const tx_5 = require("./types/enreach/manager/tx");
const superior_1 = require("./types/enreach/manager/superior");
const genesis_1 = require("./types/enreach/manager/genesis");
const tx_6 = require("./types/enreach/manager/tx");
const tx_7 = require("./types/enreach/manager/tx");
const query_4 = require("./types/enreach/manager/query");
const query_5 = require("./types/enreach/manager/query");
const query_6 = require("./types/enreach/manager/query");
const tx_8 = require("./types/enreach/manager/tx");
const tx_9 = require("./types/enreach/manager/tx");
const tx_10 = require("./types/enreach/manager/tx");
const operator_1 = require("./types/enreach/manager/operator");
const tx_11 = require("./types/enreach/manager/tx");
const tx_12 = require("./types/enreach/manager/tx");
const query_7 = require("./types/enreach/manager/query");
const tx_13 = require("./types/enreach/manager/tx");
const tx_14 = require("./types/enreach/manager/tx");
const tx_15 = require("./types/enreach/manager/tx");
const query_8 = require("./types/enreach/manager/query");
const tx_16 = require("./types/enreach/manager/tx");
const tx_17 = require("./types/enreach/manager/tx");
const tx_18 = require("./types/enreach/manager/tx");
const tx_19 = require("./types/enreach/manager/tx");
const tx_20 = require("./types/enreach/manager/tx");
const tx_21 = require("./types/enreach/manager/tx");
const query_9 = require("./types/enreach/manager/query");
const query_10 = require("./types/enreach/manager/query");
const query_11 = require("./types/enreach/manager/query");
const tx_22 = require("./types/enreach/manager/tx");
const tx_23 = require("./types/enreach/manager/tx");
const tx_24 = require("./types/enreach/manager/tx");
const query_12 = require("./types/enreach/manager/query");
const query_13 = require("./types/enreach/manager/query");
const query_14 = require("./types/enreach/manager/query");
const msgTypes = [
    ["/enreach.manager.MsgUpdateParams", tx_1.MsgUpdateParams],
    ["/enreach.manager.QueryParamsRequest", query_1.QueryParamsRequest],
    ["/enreach.manager.MsgUpdateSuperior", tx_2.MsgUpdateSuperior],
    ["/enreach.manager.Manager", manager_1.Manager],
    ["/enreach.manager.MsgActivateManagerResponse", tx_3.MsgActivateManagerResponse],
    ["/enreach.manager.Params", params_1.Params],
    ["/enreach.manager.MsgCreateOperator", tx_4.MsgCreateOperator],
    ["/enreach.manager.QueryGetManagerResponse", query_2.QueryGetManagerResponse],
    ["/enreach.manager.QueryAllManagerResponse", query_3.QueryAllManagerResponse],
    ["/enreach.manager.MsgBindOperatorManagerAccountResponse", tx_5.MsgBindOperatorManagerAccountResponse],
    ["/enreach.manager.Superior", superior_1.Superior],
    ["/enreach.manager.GenesisState", genesis_1.GenesisState],
    ["/enreach.manager.MsgActivateManager", tx_6.MsgActivateManager],
    ["/enreach.manager.MsgBindOperatorEVMAccount", tx_7.MsgBindOperatorEVMAccount],
    ["/enreach.manager.QueryParamsResponse", query_4.QueryParamsResponse],
    ["/enreach.manager.QueryGetOperatorRequest", query_5.QueryGetOperatorRequest],
    ["/enreach.manager.QueryAllManagerRequest", query_6.QueryAllManagerRequest],
    ["/enreach.manager.MsgCreateOperatorResponse", tx_8.MsgCreateOperatorResponse],
    ["/enreach.manager.MsgGoWorkingResponse", tx_9.MsgGoWorkingResponse],
    ["/enreach.manager.MsgCreateSuperior", tx_10.MsgCreateSuperior],
    ["/enreach.manager.Operator", operator_1.Operator],
    ["/enreach.manager.MsgSetManagerRegion", tx_11.MsgSetManagerRegion],
    ["/enreach.manager.MsgUpdateManagerConnParams", tx_12.MsgUpdateManagerConnParams],
    ["/enreach.manager.QueryGetSuperiorRequest", query_7.QueryGetSuperiorRequest],
    ["/enreach.manager.MsgUpdateParamsResponse", tx_13.MsgUpdateParamsResponse],
    ["/enreach.manager.MsgSetManagerRegionResponse", tx_14.MsgSetManagerRegionResponse],
    ["/enreach.manager.MsgRegisterManagerResponse", tx_15.MsgRegisterManagerResponse],
    ["/enreach.manager.QueryGetManagerByRegionRequest", query_8.QueryGetManagerByRegionRequest],
    ["/enreach.manager.MsgUpdateManagerConnParamsResponse", tx_16.MsgUpdateManagerConnParamsResponse],
    ["/enreach.manager.MsgRegisterManager", tx_17.MsgRegisterManager],
    ["/enreach.manager.MsgCreateSuperiorResponse", tx_18.MsgCreateSuperiorResponse],
    ["/enreach.manager.MsgGoWorking", tx_19.MsgGoWorking],
    ["/enreach.manager.MsgUpdateSuperiorResponse", tx_20.MsgUpdateSuperiorResponse],
    ["/enreach.manager.MsgUpdateOperatorBasicInfo", tx_21.MsgUpdateOperatorBasicInfo],
    ["/enreach.manager.QueryGetOperatorResponse", query_9.QueryGetOperatorResponse],
    ["/enreach.manager.QueryGetManagerByRegionResponse", query_10.QueryGetManagerByRegionResponse],
    ["/enreach.manager.QueryGetSuperiorResponse", query_11.QueryGetSuperiorResponse],
    ["/enreach.manager.MsgBindOperatorEVMAccountResponse", tx_22.MsgBindOperatorEVMAccountResponse],
    ["/enreach.manager.MsgUpdateOperatorBasicInfoResponse", tx_23.MsgUpdateOperatorBasicInfoResponse],
    ["/enreach.manager.MsgBindOperatorManagerAccount", tx_24.MsgBindOperatorManagerAccount],
    ["/enreach.manager.QueryAllOperatorRequest", query_12.QueryAllOperatorRequest],
    ["/enreach.manager.QueryAllOperatorResponse", query_13.QueryAllOperatorResponse],
    ["/enreach.manager.QueryGetManagerRequest", query_14.QueryGetManagerRequest],
];
exports.msgTypes = msgTypes;
