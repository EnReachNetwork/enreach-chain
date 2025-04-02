"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/enreach/registry/tx");
const tx_2 = require("./types/enreach/registry/tx");
const params_1 = require("./types/enreach/registry/params");
const query_1 = require("./types/enreach/registry/query");
const tx_3 = require("./types/enreach/registry/tx");
const tx_4 = require("./types/enreach/registry/tx");
const tx_5 = require("./types/enreach/registry/tx");
const query_2 = require("./types/enreach/registry/query");
const tx_6 = require("./types/enreach/registry/tx");
const tx_7 = require("./types/enreach/registry/tx");
const query_3 = require("./types/enreach/registry/query");
const query_4 = require("./types/enreach/registry/query");
const tx_8 = require("./types/enreach/registry/tx");
const genesis_1 = require("./types/enreach/registry/genesis");
const region_1 = require("./types/enreach/registry/region");
const tx_9 = require("./types/enreach/registry/tx");
const tx_10 = require("./types/enreach/registry/tx");
const query_5 = require("./types/enreach/registry/query");
const query_6 = require("./types/enreach/registry/query");
const query_7 = require("./types/enreach/registry/query");
const tx_11 = require("./types/enreach/registry/tx");
const query_8 = require("./types/enreach/registry/query");
const tx_12 = require("./types/enreach/registry/tx");
const superior_1 = require("./types/enreach/registry/superior");
const msgTypes = [
    ["/enreach.registry.MsgUpdateParams", tx_1.MsgUpdateParams],
    ["/enreach.registry.MsgDeleteRegionResponse", tx_2.MsgDeleteRegionResponse],
    ["/enreach.registry.Params", params_1.Params],
    ["/enreach.registry.QueryGetSuperiorRequest", query_1.QueryGetSuperiorRequest],
    ["/enreach.registry.MsgCreateSuperiorResponse", tx_3.MsgCreateSuperiorResponse],
    ["/enreach.registry.MsgUpdateSuperiorResponse", tx_4.MsgUpdateSuperiorResponse],
    ["/enreach.registry.MsgUpdateRegion", tx_5.MsgUpdateRegion],
    ["/enreach.registry.QueryGetSuperiorResponse", query_2.QueryGetSuperiorResponse],
    ["/enreach.registry.MsgUpdateParamsResponse", tx_6.MsgUpdateParamsResponse],
    ["/enreach.registry.MsgCreateRegion", tx_7.MsgCreateRegion],
    ["/enreach.registry.QueryAllRegionRequest", query_3.QueryAllRegionRequest],
    ["/enreach.registry.QueryAllRegionResponse", query_4.QueryAllRegionResponse],
    ["/enreach.registry.MsgDeleteRegion", tx_8.MsgDeleteRegion],
    ["/enreach.registry.GenesisState", genesis_1.GenesisState],
    ["/enreach.registry.Region", region_1.Region],
    ["/enreach.registry.MsgCreateRegionResponse", tx_9.MsgCreateRegionResponse],
    ["/enreach.registry.MsgUpdateRegionResponse", tx_10.MsgUpdateRegionResponse],
    ["/enreach.registry.QueryParamsRequest", query_5.QueryParamsRequest],
    ["/enreach.registry.QueryParamsResponse", query_6.QueryParamsResponse],
    ["/enreach.registry.QueryGetRegionResponse", query_7.QueryGetRegionResponse],
    ["/enreach.registry.MsgUpdateSuperior", tx_11.MsgUpdateSuperior],
    ["/enreach.registry.QueryGetRegionRequest", query_8.QueryGetRegionRequest],
    ["/enreach.registry.MsgCreateSuperior", tx_12.MsgCreateSuperior],
    ["/enreach.registry.Superior", superior_1.Superior],
];
exports.msgTypes = msgTypes;
