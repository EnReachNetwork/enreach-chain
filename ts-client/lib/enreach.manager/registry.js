"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/enreach/manager/tx");
const query_1 = require("./types/enreach/manager/query");
const query_2 = require("./types/enreach/manager/query");
const tx_2 = require("./types/enreach/manager/tx");
const tx_3 = require("./types/enreach/manager/tx");
const query_3 = require("./types/enreach/manager/query");
const query_4 = require("./types/enreach/manager/query");
const tx_4 = require("./types/enreach/manager/tx");
const tx_5 = require("./types/enreach/manager/tx");
const tx_6 = require("./types/enreach/manager/tx");
const tx_7 = require("./types/enreach/manager/tx");
const tx_8 = require("./types/enreach/manager/tx");
const tx_9 = require("./types/enreach/manager/tx");
const query_5 = require("./types/enreach/manager/query");
const query_6 = require("./types/enreach/manager/query");
const superior_1 = require("./types/enreach/manager/superior");
const tx_10 = require("./types/enreach/manager/tx");
const tx_11 = require("./types/enreach/manager/tx");
const params_1 = require("./types/enreach/manager/params");
const manager_1 = require("./types/enreach/manager/manager");
const query_7 = require("./types/enreach/manager/query");
const tx_12 = require("./types/enreach/manager/tx");
const tx_13 = require("./types/enreach/manager/tx");
const tx_14 = require("./types/enreach/manager/tx");
const tx_15 = require("./types/enreach/manager/tx");
const query_8 = require("./types/enreach/manager/query");
const query_9 = require("./types/enreach/manager/query");
const query_10 = require("./types/enreach/manager/query");
const tx_16 = require("./types/enreach/manager/tx");
const tx_17 = require("./types/enreach/manager/tx");
const tx_18 = require("./types/enreach/manager/tx");
const tx_19 = require("./types/enreach/manager/tx");
const genesis_1 = require("./types/enreach/manager/genesis");
const query_11 = require("./types/enreach/manager/query");
const query_12 = require("./types/enreach/manager/query");
const tx_20 = require("./types/enreach/manager/tx");
const tx_21 = require("./types/enreach/manager/tx");
const tx_22 = require("./types/enreach/manager/tx");
const query_13 = require("./types/enreach/manager/query");
const query_14 = require("./types/enreach/manager/query");
const operator_1 = require("./types/enreach/manager/operator");
const tx_23 = require("./types/enreach/manager/tx");
const tx_24 = require("./types/enreach/manager/tx");
const msgTypes = [
    ["/enreach.manager.MsgUpdateParamsResponse", tx_1.MsgUpdateParamsResponse],
    ["/enreach.manager.QueryParamsRequest", query_1.QueryParamsRequest],
    ["/enreach.manager.QueryParamsResponse", query_2.QueryParamsResponse],
    ["/enreach.manager.MsgCreateOperator", tx_2.MsgCreateOperator],
    ["/enreach.manager.MsgCreateOperatorResponse", tx_3.MsgCreateOperatorResponse],
    ["/enreach.manager.QueryAllOperatorResponse", query_3.QueryAllOperatorResponse],
    ["/enreach.manager.QueryGetManagerRequest", query_4.QueryGetManagerRequest],
    ["/enreach.manager.MsgUpdateParams", tx_4.MsgUpdateParams],
    ["/enreach.manager.MsgBindOperatorManagerAccount", tx_5.MsgBindOperatorManagerAccount],
    ["/enreach.manager.MsgActivateManager", tx_6.MsgActivateManager],
    ["/enreach.manager.MsgUpdateOperatorBasicInfo", tx_7.MsgUpdateOperatorBasicInfo],
    ["/enreach.manager.MsgUpdateOperatorBasicInfoResponse", tx_8.MsgUpdateOperatorBasicInfoResponse],
    ["/enreach.manager.MsgCreateSuperior", tx_9.MsgCreateSuperior],
    ["/enreach.manager.QueryAllOperatorRequest", query_5.QueryAllOperatorRequest],
    ["/enreach.manager.QueryGetManagerByRegionRequest", query_6.QueryGetManagerByRegionRequest],
    ["/enreach.manager.Superior", superior_1.Superior],
    ["/enreach.manager.MsgBindOperatorEVMAccount", tx_10.MsgBindOperatorEVMAccount],
    ["/enreach.manager.MsgRegisterManager", tx_11.MsgRegisterManager],
    ["/enreach.manager.Params", params_1.Params],
    ["/enreach.manager.Manager", manager_1.Manager],
    ["/enreach.manager.QueryGetSuperiorRequest", query_7.QueryGetSuperiorRequest],
    ["/enreach.manager.MsgSetManagerRegionResponse", tx_12.MsgSetManagerRegionResponse],
    ["/enreach.manager.MsgActivateManagerResponse", tx_13.MsgActivateManagerResponse],
    ["/enreach.manager.MsgRegisterManagerResponse", tx_14.MsgRegisterManagerResponse],
    ["/enreach.manager.MsgCreateSuperiorResponse", tx_15.MsgCreateSuperiorResponse],
    ["/enreach.manager.QueryGetOperatorRequest", query_8.QueryGetOperatorRequest],
    ["/enreach.manager.QueryGetManagerResponse", query_9.QueryGetManagerResponse],
    ["/enreach.manager.QueryAllManagerRequest", query_10.QueryAllManagerRequest],
    ["/enreach.manager.MsgBindOperatorManagerAccountResponse", tx_16.MsgBindOperatorManagerAccountResponse],
    ["/enreach.manager.MsgUpdateManagerConnParams", tx_17.MsgUpdateManagerConnParams],
    ["/enreach.manager.MsgBindOperatorEVMAccountResponse", tx_18.MsgBindOperatorEVMAccountResponse],
    ["/enreach.manager.MsgUpdateSuperiorResponse", tx_19.MsgUpdateSuperiorResponse],
    ["/enreach.manager.GenesisState", genesis_1.GenesisState],
    ["/enreach.manager.QueryAllManagerResponse", query_11.QueryAllManagerResponse],
    ["/enreach.manager.QueryGetSuperiorResponse", query_12.QueryGetSuperiorResponse],
    ["/enreach.manager.MsgGoWorking", tx_20.MsgGoWorking],
    ["/enreach.manager.MsgGoWorkingResponse", tx_21.MsgGoWorkingResponse],
    ["/enreach.manager.MsgUpdateSuperior", tx_22.MsgUpdateSuperior],
    ["/enreach.manager.QueryGetOperatorResponse", query_13.QueryGetOperatorResponse],
    ["/enreach.manager.QueryGetManagerByRegionResponse", query_14.QueryGetManagerByRegionResponse],
    ["/enreach.manager.Operator", operator_1.Operator],
    ["/enreach.manager.MsgSetManagerRegion", tx_23.MsgSetManagerRegion],
    ["/enreach.manager.MsgUpdateManagerConnParamsResponse", tx_24.MsgUpdateManagerConnParamsResponse],
];
exports.msgTypes = msgTypes;
