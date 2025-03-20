"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/enreach/registry/tx");
const region_1 = require("./types/enreach/registry/region");
const query_1 = require("./types/enreach/registry/query");
const query_2 = require("./types/enreach/registry/query");
const tx_2 = require("./types/enreach/registry/tx");
const query_3 = require("./types/enreach/registry/query");
const query_4 = require("./types/enreach/registry/query");
const superior_1 = require("./types/enreach/registry/superior");
const tx_3 = require("./types/enreach/registry/tx");
const tx_4 = require("./types/enreach/registry/tx");
const tx_5 = require("./types/enreach/registry/tx");
const query_5 = require("./types/enreach/registry/query");
const query_6 = require("./types/enreach/registry/query");
const params_1 = require("./types/enreach/registry/params");
const tx_6 = require("./types/enreach/registry/tx");
const tx_7 = require("./types/enreach/registry/tx");
const query_7 = require("./types/enreach/registry/query");
const tx_8 = require("./types/enreach/registry/tx");
const genesis_1 = require("./types/enreach/registry/genesis");
const tx_9 = require("./types/enreach/registry/tx");
const tx_10 = require("./types/enreach/registry/tx");
const tx_11 = require("./types/enreach/registry/tx");
const tx_12 = require("./types/enreach/registry/tx");
const query_8 = require("./types/enreach/registry/query");
const msgTypes = [
    ["/enreach.registry.MsgCreateRegion", tx_1.MsgCreateRegion],
    ["/enreach.registry.Region", region_1.Region],
    ["/enreach.registry.QueryParamsRequest", query_1.QueryParamsRequest],
    ["/enreach.registry.QueryGetSuperiorResponse", query_2.QueryGetSuperiorResponse],
    ["/enreach.registry.MsgUpdateParamsResponse", tx_2.MsgUpdateParamsResponse],
    ["/enreach.registry.QueryAllRegionRequest", query_3.QueryAllRegionRequest],
    ["/enreach.registry.QueryAllRegionResponse", query_4.QueryAllRegionResponse],
    ["/enreach.registry.Superior", superior_1.Superior],
    ["/enreach.registry.MsgUpdateRegion", tx_3.MsgUpdateRegion],
    ["/enreach.registry.MsgDeleteRegion", tx_4.MsgDeleteRegion],
    ["/enreach.registry.MsgUpdateSuperior", tx_5.MsgUpdateSuperior],
    ["/enreach.registry.QueryParamsResponse", query_5.QueryParamsResponse],
    ["/enreach.registry.QueryGetRegionRequest", query_6.QueryGetRegionRequest],
    ["/enreach.registry.Params", params_1.Params],
    ["/enreach.registry.MsgDeleteRegionResponse", tx_6.MsgDeleteRegionResponse],
    ["/enreach.registry.MsgCreateSuperiorResponse", tx_7.MsgCreateSuperiorResponse],
    ["/enreach.registry.QueryGetRegionResponse", query_7.QueryGetRegionResponse],
    ["/enreach.registry.MsgCreateRegionResponse", tx_8.MsgCreateRegionResponse],
    ["/enreach.registry.GenesisState", genesis_1.GenesisState],
    ["/enreach.registry.MsgUpdateSuperiorResponse", tx_9.MsgUpdateSuperiorResponse],
    ["/enreach.registry.MsgUpdateParams", tx_10.MsgUpdateParams],
    ["/enreach.registry.MsgUpdateRegionResponse", tx_11.MsgUpdateRegionResponse],
    ["/enreach.registry.MsgCreateSuperior", tx_12.MsgCreateSuperior],
    ["/enreach.registry.QueryGetSuperiorRequest", query_8.QueryGetSuperiorRequest],
];
exports.msgTypes = msgTypes;
