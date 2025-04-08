"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const query_1 = require("./types/enreach/manager/query");
const query_2 = require("./types/enreach/manager/query");
const tx_1 = require("./types/enreach/manager/tx");
const tx_2 = require("./types/enreach/manager/tx");
const tx_3 = require("./types/enreach/manager/tx");
const query_3 = require("./types/enreach/manager/query");
const query_4 = require("./types/enreach/manager/query");
const tx_4 = require("./types/enreach/manager/tx");
const tx_5 = require("./types/enreach/manager/tx");
const query_5 = require("./types/enreach/manager/query");
const query_6 = require("./types/enreach/manager/query");
const superior_1 = require("./types/enreach/manager/superior");
const tx_6 = require("./types/enreach/manager/tx");
const manager_1 = require("./types/enreach/manager/manager");
const tx_7 = require("./types/enreach/manager/tx");
const query_7 = require("./types/enreach/manager/query");
const query_8 = require("./types/enreach/manager/query");
const tx_8 = require("./types/enreach/manager/tx");
const tx_9 = require("./types/enreach/manager/tx");
const tx_10 = require("./types/enreach/manager/tx");
const tx_11 = require("./types/enreach/manager/tx");
const tx_12 = require("./types/enreach/manager/tx");
const tx_13 = require("./types/enreach/manager/tx");
const genesis_1 = require("./types/enreach/manager/genesis");
const tx_14 = require("./types/enreach/manager/tx");
const tx_15 = require("./types/enreach/manager/tx");
const query_9 = require("./types/enreach/manager/query");
const query_10 = require("./types/enreach/manager/query");
const query_11 = require("./types/enreach/manager/query");
const tx_16 = require("./types/enreach/manager/tx");
const params_1 = require("./types/enreach/manager/params");
const tx_17 = require("./types/enreach/manager/tx");
const operator_1 = require("./types/enreach/manager/operator");
const query_12 = require("./types/enreach/manager/query");
const tx_18 = require("./types/enreach/manager/tx");
const tx_19 = require("./types/enreach/manager/tx");
const query_13 = require("./types/enreach/manager/query");
const tx_20 = require("./types/enreach/manager/tx");
const tx_21 = require("./types/enreach/manager/tx");
const tx_22 = require("./types/enreach/manager/tx");
const tx_23 = require("./types/enreach/manager/tx");
const tx_24 = require("./types/enreach/manager/tx");
const query_14 = require("./types/enreach/manager/query");
const msgTypes = [
    ["/enreach.manager.QueryGetOperatorRequest", query_1.QueryGetOperatorRequest],
    ["/enreach.manager.QueryGetSuperiorRequest", query_2.QueryGetSuperiorRequest],
    ["/enreach.manager.MsgBindOperatorManagerAccountResponse", tx_1.MsgBindOperatorManagerAccountResponse],
    ["/enreach.manager.MsgBindOperatorEVMAccount", tx_2.MsgBindOperatorEVMAccount],
    ["/enreach.manager.MsgUpdateParams", tx_3.MsgUpdateParams],
    ["/enreach.manager.QueryParamsRequest", query_3.QueryParamsRequest],
    ["/enreach.manager.QueryAllManagerRequest", query_4.QueryAllManagerRequest],
    ["/enreach.manager.MsgRegisterManager", tx_4.MsgRegisterManager],
    ["/enreach.manager.MsgGoWorkingResponse", tx_5.MsgGoWorkingResponse],
    ["/enreach.manager.QueryAllManagerResponse", query_5.QueryAllManagerResponse],
    ["/enreach.manager.QueryGetSuperiorResponse", query_6.QueryGetSuperiorResponse],
    ["/enreach.manager.Superior", superior_1.Superior],
    ["/enreach.manager.MsgUpdateParamsResponse", tx_6.MsgUpdateParamsResponse],
    ["/enreach.manager.Manager", manager_1.Manager],
    ["/enreach.manager.MsgUpdateOperatorBasicInfo", tx_7.MsgUpdateOperatorBasicInfo],
    ["/enreach.manager.QueryParamsResponse", query_7.QueryParamsResponse],
    ["/enreach.manager.QueryGetOperatorResponse", query_8.QueryGetOperatorResponse],
    ["/enreach.manager.MsgUpdateManagerConnParamsResponse", tx_8.MsgUpdateManagerConnParamsResponse],
    ["/enreach.manager.MsgActivateManagerResponse", tx_9.MsgActivateManagerResponse],
    ["/enreach.manager.MsgCreateSuperior", tx_10.MsgCreateSuperior],
    ["/enreach.manager.MsgSetManagerRegionResponse", tx_11.MsgSetManagerRegionResponse],
    ["/enreach.manager.MsgUpdateOperatorBasicInfoResponse", tx_12.MsgUpdateOperatorBasicInfoResponse],
    ["/enreach.manager.MsgCreateSuperiorResponse", tx_13.MsgCreateSuperiorResponse],
    ["/enreach.manager.GenesisState", genesis_1.GenesisState],
    ["/enreach.manager.MsgCreateOperator", tx_14.MsgCreateOperator],
    ["/enreach.manager.MsgSetManagerRegion", tx_15.MsgSetManagerRegion],
    ["/enreach.manager.QueryGetManagerResponse", query_9.QueryGetManagerResponse],
    ["/enreach.manager.QueryAllOperatorResponse", query_10.QueryAllOperatorResponse],
    ["/enreach.manager.QueryGetManagerRequest", query_11.QueryGetManagerRequest],
    ["/enreach.manager.MsgCreateOperatorResponse", tx_16.MsgCreateOperatorResponse],
    ["/enreach.manager.Params", params_1.Params],
    ["/enreach.manager.MsgUpdateManagerConnParams", tx_17.MsgUpdateManagerConnParams],
    ["/enreach.manager.Operator", operator_1.Operator],
    ["/enreach.manager.QueryAllOperatorRequest", query_12.QueryAllOperatorRequest],
    ["/enreach.manager.MsgBindOperatorEVMAccountResponse", tx_18.MsgBindOperatorEVMAccountResponse],
    ["/enreach.manager.MsgRegisterManagerResponse", tx_19.MsgRegisterManagerResponse],
    ["/enreach.manager.QueryGetManagerByRegionResponse", query_13.QueryGetManagerByRegionResponse],
    ["/enreach.manager.MsgGoWorking", tx_20.MsgGoWorking],
    ["/enreach.manager.MsgUpdateSuperior", tx_21.MsgUpdateSuperior],
    ["/enreach.manager.MsgUpdateSuperiorResponse", tx_22.MsgUpdateSuperiorResponse],
    ["/enreach.manager.MsgBindOperatorManagerAccount", tx_23.MsgBindOperatorManagerAccount],
    ["/enreach.manager.MsgActivateManager", tx_24.MsgActivateManager],
    ["/enreach.manager.QueryGetManagerByRegionRequest", query_14.QueryGetManagerByRegionRequest],
];
exports.msgTypes = msgTypes;
