"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const genesis_1 = require("./types/enreach/registry/genesis");
const query_1 = require("./types/enreach/registry/query");
const query_2 = require("./types/enreach/registry/query");
const tx_1 = require("./types/enreach/registry/tx");
const query_3 = require("./types/enreach/registry/query");
const tx_2 = require("./types/enreach/registry/tx");
const tx_3 = require("./types/enreach/registry/tx");
const tx_4 = require("./types/enreach/registry/tx");
const tx_5 = require("./types/enreach/registry/tx");
const tx_6 = require("./types/enreach/registry/tx");
const tx_7 = require("./types/enreach/registry/tx");
const params_1 = require("./types/enreach/registry/params");
const query_4 = require("./types/enreach/registry/query");
const query_5 = require("./types/enreach/registry/query");
const query_6 = require("./types/enreach/registry/query");
const query_7 = require("./types/enreach/registry/query");
const superior_1 = require("./types/enreach/registry/superior");
const tx_8 = require("./types/enreach/registry/tx");
const region_1 = require("./types/enreach/registry/region");
const query_8 = require("./types/enreach/registry/query");
const tx_9 = require("./types/enreach/registry/tx");
const tx_10 = require("./types/enreach/registry/tx");
const tx_11 = require("./types/enreach/registry/tx");
const tx_12 = require("./types/enreach/registry/tx");
const msgTypes = [
    ["/enreach.registry.GenesisState", genesis_1.GenesisState],
    ["/enreach.registry.QueryAllRegionRequest", query_1.QueryAllRegionRequest],
    ["/enreach.registry.QueryAllRegionResponse", query_2.QueryAllRegionResponse],
    ["/enreach.registry.MsgUpdateRegion", tx_1.MsgUpdateRegion],
    ["/enreach.registry.QueryGetRegionRequest", query_3.QueryGetRegionRequest],
    ["/enreach.registry.MsgCreateRegion", tx_2.MsgCreateRegion],
    ["/enreach.registry.MsgUpdateRegionResponse", tx_3.MsgUpdateRegionResponse],
    ["/enreach.registry.MsgDeleteRegionResponse", tx_4.MsgDeleteRegionResponse],
    ["/enreach.registry.MsgCreateSuperiorResponse", tx_5.MsgCreateSuperiorResponse],
    ["/enreach.registry.MsgUpdateSuperior", tx_6.MsgUpdateSuperior],
    ["/enreach.registry.MsgUpdateSuperiorResponse", tx_7.MsgUpdateSuperiorResponse],
    ["/enreach.registry.Params", params_1.Params],
    ["/enreach.registry.QueryParamsRequest", query_4.QueryParamsRequest],
    ["/enreach.registry.QueryGetRegionResponse", query_5.QueryGetRegionResponse],
    ["/enreach.registry.QueryGetSuperiorRequest", query_6.QueryGetSuperiorRequest],
    ["/enreach.registry.QueryGetSuperiorResponse", query_7.QueryGetSuperiorResponse],
    ["/enreach.registry.Superior", superior_1.Superior],
    ["/enreach.registry.MsgCreateRegionResponse", tx_8.MsgCreateRegionResponse],
    ["/enreach.registry.Region", region_1.Region],
    ["/enreach.registry.QueryParamsResponse", query_8.QueryParamsResponse],
    ["/enreach.registry.MsgUpdateParams", tx_9.MsgUpdateParams],
    ["/enreach.registry.MsgCreateSuperior", tx_10.MsgCreateSuperior],
    ["/enreach.registry.MsgUpdateParamsResponse", tx_11.MsgUpdateParamsResponse],
    ["/enreach.registry.MsgDeleteRegion", tx_12.MsgDeleteRegion],
];
exports.msgTypes = msgTypes;
