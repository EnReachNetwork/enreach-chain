"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const query_1 = require("./types/enreach/manager/query");
const query_2 = require("./types/enreach/manager/query");
const query_3 = require("./types/enreach/manager/query");
const query_4 = require("./types/enreach/manager/query");
const tx_1 = require("./types/enreach/manager/tx");
const query_5 = require("./types/enreach/manager/query");
const query_6 = require("./types/enreach/manager/query");
const query_7 = require("./types/enreach/manager/query");
const tx_2 = require("./types/enreach/manager/tx");
const tx_3 = require("./types/enreach/manager/tx");
const tx_4 = require("./types/enreach/manager/tx");
const tx_5 = require("./types/enreach/manager/tx");
const tx_6 = require("./types/enreach/manager/tx");
const tx_7 = require("./types/enreach/manager/tx");
const tx_8 = require("./types/enreach/manager/tx");
const tx_9 = require("./types/enreach/manager/tx");
const tx_10 = require("./types/enreach/manager/tx");
const operator_1 = require("./types/enreach/manager/operator");
const tx_11 = require("./types/enreach/manager/tx");
const manager_1 = require("./types/enreach/manager/manager");
const tx_12 = require("./types/enreach/manager/tx");
const tx_13 = require("./types/enreach/manager/tx");
const superior_1 = require("./types/enreach/manager/superior");
const query_8 = require("./types/enreach/manager/query");
const query_9 = require("./types/enreach/manager/query");
const params_1 = require("./types/enreach/manager/params");
const tx_14 = require("./types/enreach/manager/tx");
const tx_15 = require("./types/enreach/manager/tx");
const tx_16 = require("./types/enreach/manager/tx");
const tx_17 = require("./types/enreach/manager/tx");
const query_10 = require("./types/enreach/manager/query");
const query_11 = require("./types/enreach/manager/query");
const tx_18 = require("./types/enreach/manager/tx");
const tx_19 = require("./types/enreach/manager/tx");
const tx_20 = require("./types/enreach/manager/tx");
const tx_21 = require("./types/enreach/manager/tx");
const query_12 = require("./types/enreach/manager/query");
const tx_22 = require("./types/enreach/manager/tx");
const tx_23 = require("./types/enreach/manager/tx");
const genesis_1 = require("./types/enreach/manager/genesis");
const query_13 = require("./types/enreach/manager/query");
const query_14 = require("./types/enreach/manager/query");
const tx_24 = require("./types/enreach/manager/tx");
const msgTypes = [
    ["/enreach.manager.QueryAllOperatorRequest", query_1.QueryAllOperatorRequest],
    ["/enreach.manager.QueryGetManagerResponse", query_2.QueryGetManagerResponse],
    ["/enreach.manager.QueryAllManagerRequest", query_3.QueryAllManagerRequest],
    ["/enreach.manager.QueryGetSuperiorRequest", query_4.QueryGetSuperiorRequest],
    ["/enreach.manager.MsgCreateOperator", tx_1.MsgCreateOperator],
    ["/enreach.manager.QueryParamsResponse", query_5.QueryParamsResponse],
    ["/enreach.manager.QueryGetOperatorRequest", query_6.QueryGetOperatorRequest],
    ["/enreach.manager.QueryGetOperatorResponse", query_7.QueryGetOperatorResponse],
    ["/enreach.manager.MsgBindOperatorEVMAccountResponse", tx_2.MsgBindOperatorEVMAccountResponse],
    ["/enreach.manager.MsgRegisterManagerResponse", tx_3.MsgRegisterManagerResponse],
    ["/enreach.manager.MsgUpdateParams", tx_4.MsgUpdateParams],
    ["/enreach.manager.MsgRegisterManager", tx_5.MsgRegisterManager],
    ["/enreach.manager.MsgGoWorking", tx_6.MsgGoWorking],
    ["/enreach.manager.MsgUpdateParamsResponse", tx_7.MsgUpdateParamsResponse],
    ["/enreach.manager.MsgCreateOperatorResponse", tx_8.MsgCreateOperatorResponse],
    ["/enreach.manager.MsgActivateManager", tx_9.MsgActivateManager],
    ["/enreach.manager.MsgBindOperatorEVMAccount", tx_10.MsgBindOperatorEVMAccount],
    ["/enreach.manager.Operator", operator_1.Operator],
    ["/enreach.manager.MsgUpdateSuperior", tx_11.MsgUpdateSuperior],
    ["/enreach.manager.Manager", manager_1.Manager],
    ["/enreach.manager.MsgUpdateSuperiorResponse", tx_12.MsgUpdateSuperiorResponse],
    ["/enreach.manager.MsgUpdateOperatorBasicInfo", tx_13.MsgUpdateOperatorBasicInfo],
    ["/enreach.manager.Superior", superior_1.Superior],
    ["/enreach.manager.QueryParamsRequest", query_8.QueryParamsRequest],
    ["/enreach.manager.QueryGetManagerByRegionResponse", query_9.QueryGetManagerByRegionResponse],
    ["/enreach.manager.Params", params_1.Params],
    ["/enreach.manager.MsgUpdateManagerConnParamsResponse", tx_14.MsgUpdateManagerConnParamsResponse],
    ["/enreach.manager.MsgUpdateOperatorBasicInfoResponse", tx_15.MsgUpdateOperatorBasicInfoResponse],
    ["/enreach.manager.MsgBindOperatorManagerAccountResponse", tx_16.MsgBindOperatorManagerAccountResponse],
    ["/enreach.manager.MsgBindOperatorManagerAccount", tx_17.MsgBindOperatorManagerAccount],
    ["/enreach.manager.QueryAllManagerResponse", query_10.QueryAllManagerResponse],
    ["/enreach.manager.QueryGetSuperiorResponse", query_11.QueryGetSuperiorResponse],
    ["/enreach.manager.MsgCreateSuperior", tx_18.MsgCreateSuperior],
    ["/enreach.manager.MsgCreateSuperiorResponse", tx_19.MsgCreateSuperiorResponse],
    ["/enreach.manager.MsgSetManagerRegion", tx_20.MsgSetManagerRegion],
    ["/enreach.manager.MsgUpdateManagerConnParams", tx_21.MsgUpdateManagerConnParams],
    ["/enreach.manager.QueryGetManagerRequest", query_12.QueryGetManagerRequest],
    ["/enreach.manager.MsgSetManagerRegionResponse", tx_22.MsgSetManagerRegionResponse],
    ["/enreach.manager.MsgGoWorkingResponse", tx_23.MsgGoWorkingResponse],
    ["/enreach.manager.GenesisState", genesis_1.GenesisState],
    ["/enreach.manager.QueryAllOperatorResponse", query_13.QueryAllOperatorResponse],
    ["/enreach.manager.QueryGetManagerByRegionRequest", query_14.QueryGetManagerByRegionRequest],
    ["/enreach.manager.MsgActivateManagerResponse", tx_24.MsgActivateManagerResponse],
];
exports.msgTypes = msgTypes;
