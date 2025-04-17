"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const query_1 = require("./types/enreach/manager/query");
const query_2 = require("./types/enreach/manager/query");
const tx_1 = require("./types/enreach/manager/tx");
const tx_2 = require("./types/enreach/manager/tx");
const query_3 = require("./types/enreach/manager/query");
const query_4 = require("./types/enreach/manager/query");
const query_5 = require("./types/enreach/manager/query");
const tx_3 = require("./types/enreach/manager/tx");
const tx_4 = require("./types/enreach/manager/tx");
const query_6 = require("./types/enreach/manager/query");
const manager_1 = require("./types/enreach/manager/manager");
const tx_5 = require("./types/enreach/manager/tx");
const tx_6 = require("./types/enreach/manager/tx");
const tx_7 = require("./types/enreach/manager/tx");
const query_7 = require("./types/enreach/manager/query");
const tx_8 = require("./types/enreach/manager/tx");
const tx_9 = require("./types/enreach/manager/tx");
const tx_10 = require("./types/enreach/manager/tx");
const tx_11 = require("./types/enreach/manager/tx");
const query_8 = require("./types/enreach/manager/query");
const query_9 = require("./types/enreach/manager/query");
const query_10 = require("./types/enreach/manager/query");
const query_11 = require("./types/enreach/manager/query");
const superior_1 = require("./types/enreach/manager/superior");
const tx_12 = require("./types/enreach/manager/tx");
const tx_13 = require("./types/enreach/manager/tx");
const tx_14 = require("./types/enreach/manager/tx");
const params_1 = require("./types/enreach/manager/params");
const query_12 = require("./types/enreach/manager/query");
const tx_15 = require("./types/enreach/manager/tx");
const tx_16 = require("./types/enreach/manager/tx");
const tx_17 = require("./types/enreach/manager/tx");
const tx_18 = require("./types/enreach/manager/tx");
const tx_19 = require("./types/enreach/manager/tx");
const tx_20 = require("./types/enreach/manager/tx");
const tx_21 = require("./types/enreach/manager/tx");
const tx_22 = require("./types/enreach/manager/tx");
const tx_23 = require("./types/enreach/manager/tx");
const query_13 = require("./types/enreach/manager/query");
const query_14 = require("./types/enreach/manager/query");
const genesis_1 = require("./types/enreach/manager/genesis");
const tx_24 = require("./types/enreach/manager/tx");
const operator_1 = require("./types/enreach/manager/operator");
const msgTypes = [
    ["/enreach.manager.QueryGetOperatorResponse", query_1.QueryGetOperatorResponse],
    ["/enreach.manager.QueryAllOperatorRequest", query_2.QueryAllOperatorRequest],
    ["/enreach.manager.MsgSetManagerRegionResponse", tx_1.MsgSetManagerRegionResponse],
    ["/enreach.manager.MsgBindOperatorEVMAccountResponse", tx_2.MsgBindOperatorEVMAccountResponse],
    ["/enreach.manager.QueryAllManagerResponse", query_3.QueryAllManagerResponse],
    ["/enreach.manager.QueryGetManagerByRegionRequest", query_4.QueryGetManagerByRegionRequest],
    ["/enreach.manager.QueryGetSuperiorResponse", query_5.QueryGetSuperiorResponse],
    ["/enreach.manager.MsgSetManagerRegion", tx_3.MsgSetManagerRegion],
    ["/enreach.manager.MsgBindOperatorEVMAccount", tx_4.MsgBindOperatorEVMAccount],
    ["/enreach.manager.QueryGetOperatorRequest", query_6.QueryGetOperatorRequest],
    ["/enreach.manager.Manager", manager_1.Manager],
    ["/enreach.manager.MsgGoWorking", tx_5.MsgGoWorking],
    ["/enreach.manager.MsgGoWorkingResponse", tx_6.MsgGoWorkingResponse],
    ["/enreach.manager.MsgCreateSuperiorResponse", tx_7.MsgCreateSuperiorResponse],
    ["/enreach.manager.QueryAllManagerRequest", query_7.QueryAllManagerRequest],
    ["/enreach.manager.MsgActivateManager", tx_8.MsgActivateManager],
    ["/enreach.manager.MsgUpdateManagerConnParamsResponse", tx_9.MsgUpdateManagerConnParamsResponse],
    ["/enreach.manager.MsgUpdateParamsResponse", tx_10.MsgUpdateParamsResponse],
    ["/enreach.manager.MsgBindOperatorManagerAccountResponse", tx_11.MsgBindOperatorManagerAccountResponse],
    ["/enreach.manager.QueryParamsRequest", query_8.QueryParamsRequest],
    ["/enreach.manager.QueryAllOperatorResponse", query_9.QueryAllOperatorResponse],
    ["/enreach.manager.QueryGetManagerRequest", query_10.QueryGetManagerRequest],
    ["/enreach.manager.QueryGetManagerByRegionResponse", query_11.QueryGetManagerByRegionResponse],
    ["/enreach.manager.Superior", superior_1.Superior],
    ["/enreach.manager.MsgCreateOperatorResponse", tx_12.MsgCreateOperatorResponse],
    ["/enreach.manager.MsgActivateManagerResponse", tx_13.MsgActivateManagerResponse],
    ["/enreach.manager.MsgUpdateOperatorBasicInfoResponse", tx_14.MsgUpdateOperatorBasicInfoResponse],
    ["/enreach.manager.Params", params_1.Params],
    ["/enreach.manager.QueryGetSuperiorRequest", query_12.QueryGetSuperiorRequest],
    ["/enreach.manager.MsgUpdateManagerConnParams", tx_15.MsgUpdateManagerConnParams],
    ["/enreach.manager.MsgCreateSuperior", tx_16.MsgCreateSuperior],
    ["/enreach.manager.MsgRegisterManagerResponse", tx_17.MsgRegisterManagerResponse],
    ["/enreach.manager.MsgUpdateSuperiorResponse", tx_18.MsgUpdateSuperiorResponse],
    ["/enreach.manager.MsgCreateOperator", tx_19.MsgCreateOperator],
    ["/enreach.manager.MsgUpdateOperatorBasicInfo", tx_20.MsgUpdateOperatorBasicInfo],
    ["/enreach.manager.MsgUpdateParams", tx_21.MsgUpdateParams],
    ["/enreach.manager.MsgUpdateSuperior", tx_22.MsgUpdateSuperior],
    ["/enreach.manager.MsgRegisterManager", tx_23.MsgRegisterManager],
    ["/enreach.manager.QueryParamsResponse", query_13.QueryParamsResponse],
    ["/enreach.manager.QueryGetManagerResponse", query_14.QueryGetManagerResponse],
    ["/enreach.manager.GenesisState", genesis_1.GenesisState],
    ["/enreach.manager.MsgBindOperatorManagerAccount", tx_24.MsgBindOperatorManagerAccount],
    ["/enreach.manager.Operator", operator_1.Operator],
];
exports.msgTypes = msgTypes;
