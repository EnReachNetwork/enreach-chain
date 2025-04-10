"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/enreach/manager/tx");
const tx_2 = require("./types/enreach/manager/tx");
const query_1 = require("./types/enreach/manager/query");
const genesis_1 = require("./types/enreach/manager/genesis");
const tx_3 = require("./types/enreach/manager/tx");
const tx_4 = require("./types/enreach/manager/tx");
const tx_5 = require("./types/enreach/manager/tx");
const query_2 = require("./types/enreach/manager/query");
const query_3 = require("./types/enreach/manager/query");
const tx_6 = require("./types/enreach/manager/tx");
const tx_7 = require("./types/enreach/manager/tx");
const operator_1 = require("./types/enreach/manager/operator");
const query_4 = require("./types/enreach/manager/query");
const query_5 = require("./types/enreach/manager/query");
const query_6 = require("./types/enreach/manager/query");
const tx_8 = require("./types/enreach/manager/tx");
const tx_9 = require("./types/enreach/manager/tx");
const tx_10 = require("./types/enreach/manager/tx");
const query_7 = require("./types/enreach/manager/query");
const query_8 = require("./types/enreach/manager/query");
const tx_11 = require("./types/enreach/manager/tx");
const tx_12 = require("./types/enreach/manager/tx");
const tx_13 = require("./types/enreach/manager/tx");
const manager_1 = require("./types/enreach/manager/manager");
const query_9 = require("./types/enreach/manager/query");
const query_10 = require("./types/enreach/manager/query");
const query_11 = require("./types/enreach/manager/query");
const query_12 = require("./types/enreach/manager/query");
const tx_14 = require("./types/enreach/manager/tx");
const superior_1 = require("./types/enreach/manager/superior");
const tx_15 = require("./types/enreach/manager/tx");
const tx_16 = require("./types/enreach/manager/tx");
const query_13 = require("./types/enreach/manager/query");
const query_14 = require("./types/enreach/manager/query");
const tx_17 = require("./types/enreach/manager/tx");
const tx_18 = require("./types/enreach/manager/tx");
const tx_19 = require("./types/enreach/manager/tx");
const tx_20 = require("./types/enreach/manager/tx");
const params_1 = require("./types/enreach/manager/params");
const tx_21 = require("./types/enreach/manager/tx");
const tx_22 = require("./types/enreach/manager/tx");
const tx_23 = require("./types/enreach/manager/tx");
const tx_24 = require("./types/enreach/manager/tx");
const msgTypes = [
    ["/enreach.manager.MsgGoWorking", tx_1.MsgGoWorking],
    ["/enreach.manager.MsgCreateSuperiorResponse", tx_2.MsgCreateSuperiorResponse],
    ["/enreach.manager.QueryParamsResponse", query_1.QueryParamsResponse],
    ["/enreach.manager.GenesisState", genesis_1.GenesisState],
    ["/enreach.manager.MsgUpdateManagerConnParams", tx_3.MsgUpdateManagerConnParams],
    ["/enreach.manager.MsgSetManagerRegionResponse", tx_4.MsgSetManagerRegionResponse],
    ["/enreach.manager.MsgGoWorkingResponse", tx_5.MsgGoWorkingResponse],
    ["/enreach.manager.QueryGetOperatorRequest", query_2.QueryGetOperatorRequest],
    ["/enreach.manager.QueryAllOperatorResponse", query_3.QueryAllOperatorResponse],
    ["/enreach.manager.MsgUpdateParamsResponse", tx_6.MsgUpdateParamsResponse],
    ["/enreach.manager.MsgCreateOperator", tx_7.MsgCreateOperator],
    ["/enreach.manager.Operator", operator_1.Operator],
    ["/enreach.manager.QueryAllManagerRequest", query_4.QueryAllManagerRequest],
    ["/enreach.manager.QueryGetManagerByRegionResponse", query_5.QueryGetManagerByRegionResponse],
    ["/enreach.manager.QueryGetSuperiorResponse", query_6.QueryGetSuperiorResponse],
    ["/enreach.manager.MsgCreateOperatorResponse", tx_8.MsgCreateOperatorResponse],
    ["/enreach.manager.MsgActivateManager", tx_9.MsgActivateManager],
    ["/enreach.manager.MsgRegisterManagerResponse", tx_10.MsgRegisterManagerResponse],
    ["/enreach.manager.QueryAllOperatorRequest", query_7.QueryAllOperatorRequest],
    ["/enreach.manager.QueryAllManagerResponse", query_8.QueryAllManagerResponse],
    ["/enreach.manager.MsgBindOperatorEVMAccount", tx_11.MsgBindOperatorEVMAccount],
    ["/enreach.manager.MsgUpdateOperatorBasicInfo", tx_12.MsgUpdateOperatorBasicInfo],
    ["/enreach.manager.MsgActivateManagerResponse", tx_13.MsgActivateManagerResponse],
    ["/enreach.manager.Manager", manager_1.Manager],
    ["/enreach.manager.QueryParamsRequest", query_9.QueryParamsRequest],
    ["/enreach.manager.QueryGetManagerResponse", query_10.QueryGetManagerResponse],
    ["/enreach.manager.QueryGetManagerByRegionRequest", query_11.QueryGetManagerByRegionRequest],
    ["/enreach.manager.QueryGetSuperiorRequest", query_12.QueryGetSuperiorRequest],
    ["/enreach.manager.MsgCreateSuperior", tx_14.MsgCreateSuperior],
    ["/enreach.manager.Superior", superior_1.Superior],
    ["/enreach.manager.MsgSetManagerRegion", tx_15.MsgSetManagerRegion],
    ["/enreach.manager.MsgUpdateOperatorBasicInfoResponse", tx_16.MsgUpdateOperatorBasicInfoResponse],
    ["/enreach.manager.QueryGetOperatorResponse", query_13.QueryGetOperatorResponse],
    ["/enreach.manager.QueryGetManagerRequest", query_14.QueryGetManagerRequest],
    ["/enreach.manager.MsgUpdateParams", tx_17.MsgUpdateParams],
    ["/enreach.manager.MsgBindOperatorManagerAccount", tx_18.MsgBindOperatorManagerAccount],
    ["/enreach.manager.MsgUpdateManagerConnParamsResponse", tx_19.MsgUpdateManagerConnParamsResponse],
    ["/enreach.manager.MsgBindOperatorEVMAccountResponse", tx_20.MsgBindOperatorEVMAccountResponse],
    ["/enreach.manager.Params", params_1.Params],
    ["/enreach.manager.MsgUpdateSuperior", tx_21.MsgUpdateSuperior],
    ["/enreach.manager.MsgBindOperatorManagerAccountResponse", tx_22.MsgBindOperatorManagerAccountResponse],
    ["/enreach.manager.MsgRegisterManager", tx_23.MsgRegisterManager],
    ["/enreach.manager.MsgUpdateSuperiorResponse", tx_24.MsgUpdateSuperiorResponse],
];
exports.msgTypes = msgTypes;
