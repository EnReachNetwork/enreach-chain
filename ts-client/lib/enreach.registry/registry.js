"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const region_1 = require("./types/enreach/registry/region");
const tx_1 = require("./types/enreach/registry/tx");
const tx_2 = require("./types/enreach/registry/tx");
const tx_3 = require("./types/enreach/registry/tx");
const query_1 = require("./types/enreach/registry/query");
const query_2 = require("./types/enreach/registry/query");
const genesis_1 = require("./types/enreach/registry/genesis");
const query_3 = require("./types/enreach/registry/query");
const params_1 = require("./types/enreach/registry/params");
const tx_4 = require("./types/enreach/registry/tx");
const tx_5 = require("./types/enreach/registry/tx");
const tx_6 = require("./types/enreach/registry/tx");
const tx_7 = require("./types/enreach/registry/tx");
const query_4 = require("./types/enreach/registry/query");
const query_5 = require("./types/enreach/registry/query");
const tx_8 = require("./types/enreach/registry/tx");
const superior_1 = require("./types/enreach/registry/superior");
const tx_9 = require("./types/enreach/registry/tx");
const tx_10 = require("./types/enreach/registry/tx");
const query_6 = require("./types/enreach/registry/query");
const tx_11 = require("./types/enreach/registry/tx");
const tx_12 = require("./types/enreach/registry/tx");
const query_7 = require("./types/enreach/registry/query");
const query_8 = require("./types/enreach/registry/query");
const msgTypes = [
    ["/enreach.registry.Region", region_1.Region],
    ["/enreach.registry.MsgCreateRegionResponse", tx_1.MsgCreateRegionResponse],
    ["/enreach.registry.MsgCreateSuperior", tx_2.MsgCreateSuperior],
    ["/enreach.registry.MsgCreateSuperiorResponse", tx_3.MsgCreateSuperiorResponse],
    ["/enreach.registry.QueryGetSuperiorRequest", query_1.QueryGetSuperiorRequest],
    ["/enreach.registry.QueryAllRegionResponse", query_2.QueryAllRegionResponse],
    ["/enreach.registry.GenesisState", genesis_1.GenesisState],
    ["/enreach.registry.QueryGetSuperiorResponse", query_3.QueryGetSuperiorResponse],
    ["/enreach.registry.Params", params_1.Params],
    ["/enreach.registry.MsgUpdateParamsResponse", tx_4.MsgUpdateParamsResponse],
    ["/enreach.registry.MsgUpdateRegionResponse", tx_5.MsgUpdateRegionResponse],
    ["/enreach.registry.MsgDeleteRegionResponse", tx_6.MsgDeleteRegionResponse],
    ["/enreach.registry.MsgUpdateSuperiorResponse", tx_7.MsgUpdateSuperiorResponse],
    ["/enreach.registry.QueryParamsRequest", query_4.QueryParamsRequest],
    ["/enreach.registry.QueryGetRegionResponse", query_5.QueryGetRegionResponse],
    ["/enreach.registry.MsgCreateRegion", tx_8.MsgCreateRegion],
    ["/enreach.registry.Superior", superior_1.Superior],
    ["/enreach.registry.MsgUpdateRegion", tx_9.MsgUpdateRegion],
    ["/enreach.registry.MsgDeleteRegion", tx_10.MsgDeleteRegion],
    ["/enreach.registry.QueryAllRegionRequest", query_6.QueryAllRegionRequest],
    ["/enreach.registry.MsgUpdateParams", tx_11.MsgUpdateParams],
    ["/enreach.registry.MsgUpdateSuperior", tx_12.MsgUpdateSuperior],
    ["/enreach.registry.QueryParamsResponse", query_7.QueryParamsResponse],
    ["/enreach.registry.QueryGetRegionRequest", query_8.QueryGetRegionRequest],
];
exports.msgTypes = msgTypes;
