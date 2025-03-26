"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/enreach/registry/tx");
const region_1 = require("./types/enreach/registry/region");
const tx_2 = require("./types/enreach/registry/tx");
const superior_1 = require("./types/enreach/registry/superior");
const tx_3 = require("./types/enreach/registry/tx");
const query_1 = require("./types/enreach/registry/query");
const query_2 = require("./types/enreach/registry/query");
const tx_4 = require("./types/enreach/registry/tx");
const tx_5 = require("./types/enreach/registry/tx");
const genesis_1 = require("./types/enreach/registry/genesis");
const tx_6 = require("./types/enreach/registry/tx");
const tx_7 = require("./types/enreach/registry/tx");
const tx_8 = require("./types/enreach/registry/tx");
const query_3 = require("./types/enreach/registry/query");
const params_1 = require("./types/enreach/registry/params");
const query_4 = require("./types/enreach/registry/query");
const tx_9 = require("./types/enreach/registry/tx");
const query_5 = require("./types/enreach/registry/query");
const query_6 = require("./types/enreach/registry/query");
const query_7 = require("./types/enreach/registry/query");
const tx_10 = require("./types/enreach/registry/tx");
const tx_11 = require("./types/enreach/registry/tx");
const tx_12 = require("./types/enreach/registry/tx");
const query_8 = require("./types/enreach/registry/query");
const msgTypes = [
    ["/enreach.registry.MsgDeleteRegion", tx_1.MsgDeleteRegion],
    ["/enreach.registry.Region", region_1.Region],
    ["/enreach.registry.MsgDeleteRegionResponse", tx_2.MsgDeleteRegionResponse],
    ["/enreach.registry.Superior", superior_1.Superior],
    ["/enreach.registry.MsgUpdateRegion", tx_3.MsgUpdateRegion],
    ["/enreach.registry.QueryGetRegionResponse", query_1.QueryGetRegionResponse],
    ["/enreach.registry.QueryAllRegionResponse", query_2.QueryAllRegionResponse],
    ["/enreach.registry.MsgCreateRegion", tx_4.MsgCreateRegion],
    ["/enreach.registry.MsgCreateSuperior", tx_5.MsgCreateSuperior],
    ["/enreach.registry.GenesisState", genesis_1.GenesisState],
    ["/enreach.registry.MsgCreateRegionResponse", tx_6.MsgCreateRegionResponse],
    ["/enreach.registry.MsgUpdateRegionResponse", tx_7.MsgUpdateRegionResponse],
    ["/enreach.registry.MsgCreateSuperiorResponse", tx_8.MsgCreateSuperiorResponse],
    ["/enreach.registry.QueryParamsRequest", query_3.QueryParamsRequest],
    ["/enreach.registry.Params", params_1.Params],
    ["/enreach.registry.QueryParamsResponse", query_4.QueryParamsResponse],
    ["/enreach.registry.MsgUpdateParams", tx_9.MsgUpdateParams],
    ["/enreach.registry.QueryGetRegionRequest", query_5.QueryGetRegionRequest],
    ["/enreach.registry.QueryAllRegionRequest", query_6.QueryAllRegionRequest],
    ["/enreach.registry.QueryGetSuperiorResponse", query_7.QueryGetSuperiorResponse],
    ["/enreach.registry.MsgUpdateParamsResponse", tx_10.MsgUpdateParamsResponse],
    ["/enreach.registry.MsgUpdateSuperior", tx_11.MsgUpdateSuperior],
    ["/enreach.registry.MsgUpdateSuperiorResponse", tx_12.MsgUpdateSuperiorResponse],
    ["/enreach.registry.QueryGetSuperiorRequest", query_8.QueryGetSuperiorRequest],
];
exports.msgTypes = msgTypes;
