"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const query_1 = require("./types/enreach/registry/query");
const query_2 = require("./types/enreach/registry/query");
const query_3 = require("./types/enreach/registry/query");
const tx_1 = require("./types/enreach/registry/tx");
const query_4 = require("./types/enreach/registry/query");
const tx_2 = require("./types/enreach/registry/tx");
const tx_3 = require("./types/enreach/registry/tx");
const tx_4 = require("./types/enreach/registry/tx");
const genesis_1 = require("./types/enreach/registry/genesis");
const query_5 = require("./types/enreach/registry/query");
const query_6 = require("./types/enreach/registry/query");
const region_1 = require("./types/enreach/registry/region");
const tx_5 = require("./types/enreach/registry/tx");
const params_1 = require("./types/enreach/registry/params");
const tx_6 = require("./types/enreach/registry/tx");
const tx_7 = require("./types/enreach/registry/tx");
const query_7 = require("./types/enreach/registry/query");
const tx_8 = require("./types/enreach/registry/tx");
const tx_9 = require("./types/enreach/registry/tx");
const superior_1 = require("./types/enreach/registry/superior");
const tx_10 = require("./types/enreach/registry/tx");
const tx_11 = require("./types/enreach/registry/tx");
const query_8 = require("./types/enreach/registry/query");
const tx_12 = require("./types/enreach/registry/tx");
const msgTypes = [
    ["/enreach.registry.QueryParamsRequest", query_1.QueryParamsRequest],
    ["/enreach.registry.QueryParamsResponse", query_2.QueryParamsResponse],
    ["/enreach.registry.QueryGetSuperiorResponse", query_3.QueryGetSuperiorResponse],
    ["/enreach.registry.MsgUpdateSuperiorResponse", tx_1.MsgUpdateSuperiorResponse],
    ["/enreach.registry.QueryAllRegionRequest", query_4.QueryAllRegionRequest],
    ["/enreach.registry.MsgUpdateParamsResponse", tx_2.MsgUpdateParamsResponse],
    ["/enreach.registry.MsgDeleteRegionResponse", tx_3.MsgDeleteRegionResponse],
    ["/enreach.registry.MsgCreateSuperiorResponse", tx_4.MsgCreateSuperiorResponse],
    ["/enreach.registry.GenesisState", genesis_1.GenesisState],
    ["/enreach.registry.QueryGetRegionRequest", query_5.QueryGetRegionRequest],
    ["/enreach.registry.QueryAllRegionResponse", query_6.QueryAllRegionResponse],
    ["/enreach.registry.Region", region_1.Region],
    ["/enreach.registry.MsgUpdateParams", tx_5.MsgUpdateParams],
    ["/enreach.registry.Params", params_1.Params],
    ["/enreach.registry.MsgDeleteRegion", tx_6.MsgDeleteRegion],
    ["/enreach.registry.MsgCreateRegionResponse", tx_7.MsgCreateRegionResponse],
    ["/enreach.registry.QueryGetRegionResponse", query_7.QueryGetRegionResponse],
    ["/enreach.registry.MsgCreateRegion", tx_8.MsgCreateRegion],
    ["/enreach.registry.MsgUpdateRegion", tx_9.MsgUpdateRegion],
    ["/enreach.registry.Superior", superior_1.Superior],
    ["/enreach.registry.MsgCreateSuperior", tx_10.MsgCreateSuperior],
    ["/enreach.registry.MsgUpdateSuperior", tx_11.MsgUpdateSuperior],
    ["/enreach.registry.QueryGetSuperiorRequest", query_8.QueryGetSuperiorRequest],
    ["/enreach.registry.MsgUpdateRegionResponse", tx_12.MsgUpdateRegionResponse],
];
exports.msgTypes = msgTypes;
