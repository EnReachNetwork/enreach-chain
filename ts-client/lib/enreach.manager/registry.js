"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const query_1 = require("./types/enreach/manager/query");
const query_2 = require("./types/enreach/manager/query");
const tx_1 = require("./types/enreach/manager/tx");
const query_3 = require("./types/enreach/manager/query");
const query_4 = require("./types/enreach/manager/query");
const tx_2 = require("./types/enreach/manager/tx");
const tx_3 = require("./types/enreach/manager/tx");
const tx_4 = require("./types/enreach/manager/tx");
const tx_5 = require("./types/enreach/manager/tx");
const genesis_1 = require("./types/enreach/manager/genesis");
const tx_6 = require("./types/enreach/manager/tx");
const manager_1 = require("./types/enreach/manager/manager");
const query_5 = require("./types/enreach/manager/query");
const tx_7 = require("./types/enreach/manager/tx");
const tx_8 = require("./types/enreach/manager/tx");
const tx_9 = require("./types/enreach/manager/tx");
const query_6 = require("./types/enreach/manager/query");
const query_7 = require("./types/enreach/manager/query");
const params_1 = require("./types/enreach/manager/params");
const tx_10 = require("./types/enreach/manager/tx");
const tx_11 = require("./types/enreach/manager/tx");
const query_8 = require("./types/enreach/manager/query");
const query_9 = require("./types/enreach/manager/query");
const tx_12 = require("./types/enreach/manager/tx");
const tx_13 = require("./types/enreach/manager/tx");
const tx_14 = require("./types/enreach/manager/tx");
const tx_15 = require("./types/enreach/manager/tx");
const tx_16 = require("./types/enreach/manager/tx");
const tx_17 = require("./types/enreach/manager/tx");
const query_10 = require("./types/enreach/manager/query");
const query_11 = require("./types/enreach/manager/query");
const tx_18 = require("./types/enreach/manager/tx");
const tx_19 = require("./types/enreach/manager/tx");
const operator_1 = require("./types/enreach/manager/operator");
const query_12 = require("./types/enreach/manager/query");
const superior_1 = require("./types/enreach/manager/superior");
const tx_20 = require("./types/enreach/manager/tx");
const tx_21 = require("./types/enreach/manager/tx");
const query_13 = require("./types/enreach/manager/query");
const query_14 = require("./types/enreach/manager/query");
const tx_22 = require("./types/enreach/manager/tx");
const tx_23 = require("./types/enreach/manager/tx");
const tx_24 = require("./types/enreach/manager/tx");
const msgTypes = [
    ["/enreach.manager.QueryGetOperatorResponse", query_1.QueryGetOperatorResponse],
    ["/enreach.manager.QueryAllManagerResponse", query_2.QueryAllManagerResponse],
    ["/enreach.manager.MsgUpdateManagerConnParams", tx_1.MsgUpdateManagerConnParams],
    ["/enreach.manager.QueryAllOperatorResponse", query_3.QueryAllOperatorResponse],
    ["/enreach.manager.QueryGetManagerByRegionRequest", query_4.QueryGetManagerByRegionRequest],
    ["/enreach.manager.MsgCreateSuperior", tx_2.MsgCreateSuperior],
    ["/enreach.manager.MsgBindOperatorManagerAccountResponse", tx_3.MsgBindOperatorManagerAccountResponse],
    ["/enreach.manager.MsgGoWorkingResponse", tx_4.MsgGoWorkingResponse],
    ["/enreach.manager.MsgCreateSuperiorResponse", tx_5.MsgCreateSuperiorResponse],
    ["/enreach.manager.GenesisState", genesis_1.GenesisState],
    ["/enreach.manager.MsgSetManagerRegion", tx_6.MsgSetManagerRegion],
    ["/enreach.manager.Manager", manager_1.Manager],
    ["/enreach.manager.QueryGetSuperiorRequest", query_5.QueryGetSuperiorRequest],
    ["/enreach.manager.MsgUpdateParams", tx_7.MsgUpdateParams],
    ["/enreach.manager.MsgBindOperatorEVMAccountResponse", tx_8.MsgBindOperatorEVMAccountResponse],
    ["/enreach.manager.MsgRegisterManager", tx_9.MsgRegisterManager],
    ["/enreach.manager.QueryAllManagerRequest", query_6.QueryAllManagerRequest],
    ["/enreach.manager.QueryGetSuperiorResponse", query_7.QueryGetSuperiorResponse],
    ["/enreach.manager.Params", params_1.Params],
    ["/enreach.manager.MsgBindOperatorManagerAccount", tx_10.MsgBindOperatorManagerAccount],
    ["/enreach.manager.MsgBindOperatorEVMAccount", tx_11.MsgBindOperatorEVMAccount],
    ["/enreach.manager.QueryParamsRequest", query_8.QueryParamsRequest],
    ["/enreach.manager.QueryGetManagerByRegionResponse", query_9.QueryGetManagerByRegionResponse],
    ["/enreach.manager.MsgCreateOperatorResponse", tx_12.MsgCreateOperatorResponse],
    ["/enreach.manager.MsgSetManagerRegionResponse", tx_13.MsgSetManagerRegionResponse],
    ["/enreach.manager.MsgUpdateSuperiorResponse", tx_14.MsgUpdateSuperiorResponse],
    ["/enreach.manager.MsgGoWorking", tx_15.MsgGoWorking],
    ["/enreach.manager.MsgCreateOperator", tx_16.MsgCreateOperator],
    ["/enreach.manager.MsgActivateManager", tx_17.MsgActivateManager],
    ["/enreach.manager.QueryAllOperatorRequest", query_10.QueryAllOperatorRequest],
    ["/enreach.manager.QueryGetManagerResponse", query_11.QueryGetManagerResponse],
    ["/enreach.manager.MsgActivateManagerResponse", tx_18.MsgActivateManagerResponse],
    ["/enreach.manager.MsgUpdateOperatorBasicInfoResponse", tx_19.MsgUpdateOperatorBasicInfoResponse],
    ["/enreach.manager.Operator", operator_1.Operator],
    ["/enreach.manager.QueryGetOperatorRequest", query_12.QueryGetOperatorRequest],
    ["/enreach.manager.Superior", superior_1.Superior],
    ["/enreach.manager.MsgUpdateManagerConnParamsResponse", tx_20.MsgUpdateManagerConnParamsResponse],
    ["/enreach.manager.MsgUpdateOperatorBasicInfo", tx_21.MsgUpdateOperatorBasicInfo],
    ["/enreach.manager.QueryParamsResponse", query_13.QueryParamsResponse],
    ["/enreach.manager.QueryGetManagerRequest", query_14.QueryGetManagerRequest],
    ["/enreach.manager.MsgUpdateSuperior", tx_22.MsgUpdateSuperior],
    ["/enreach.manager.MsgUpdateParamsResponse", tx_23.MsgUpdateParamsResponse],
    ["/enreach.manager.MsgRegisterManagerResponse", tx_24.MsgRegisterManagerResponse],
];
exports.msgTypes = msgTypes;
