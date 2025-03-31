"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const query_1 = require("./types/enreach/registry/query");
const tx_1 = require("./types/enreach/registry/tx");
const tx_2 = require("./types/enreach/registry/tx");
const tx_3 = require("./types/enreach/registry/tx");
const tx_4 = require("./types/enreach/registry/tx");
const tx_5 = require("./types/enreach/registry/tx");
const params_1 = require("./types/enreach/registry/params");
const query_2 = require("./types/enreach/registry/query");
const tx_6 = require("./types/enreach/registry/tx");
const tx_7 = require("./types/enreach/registry/tx");
const query_3 = require("./types/enreach/registry/query");
const region_1 = require("./types/enreach/registry/region");
const genesis_1 = require("./types/enreach/registry/genesis");
const query_4 = require("./types/enreach/registry/query");
const query_5 = require("./types/enreach/registry/query");
const query_6 = require("./types/enreach/registry/query");
const superior_1 = require("./types/enreach/registry/superior");
const query_7 = require("./types/enreach/registry/query");
const query_8 = require("./types/enreach/registry/query");
const tx_8 = require("./types/enreach/registry/tx");
const tx_9 = require("./types/enreach/registry/tx");
const tx_10 = require("./types/enreach/registry/tx");
const tx_11 = require("./types/enreach/registry/tx");
const tx_12 = require("./types/enreach/registry/tx");
const msgTypes = [
    ["/enreach.registry.QueryParamsRequest", query_1.QueryParamsRequest],
    ["/enreach.registry.MsgUpdateRegion", tx_1.MsgUpdateRegion],
    ["/enreach.registry.MsgCreateSuperior", tx_2.MsgCreateSuperior],
    ["/enreach.registry.MsgUpdateSuperior", tx_3.MsgUpdateSuperior],
    ["/enreach.registry.MsgCreateRegion", tx_4.MsgCreateRegion],
    ["/enreach.registry.MsgUpdateParamsResponse", tx_5.MsgUpdateParamsResponse],
    ["/enreach.registry.Params", params_1.Params],
    ["/enreach.registry.QueryParamsResponse", query_2.QueryParamsResponse],
    ["/enreach.registry.MsgUpdateParams", tx_6.MsgUpdateParams],
    ["/enreach.registry.MsgDeleteRegionResponse", tx_7.MsgDeleteRegionResponse],
    ["/enreach.registry.QueryGetSuperiorRequest", query_3.QueryGetSuperiorRequest],
    ["/enreach.registry.Region", region_1.Region],
    ["/enreach.registry.GenesisState", genesis_1.GenesisState],
    ["/enreach.registry.QueryGetRegionRequest", query_4.QueryGetRegionRequest],
    ["/enreach.registry.QueryAllRegionRequest", query_5.QueryAllRegionRequest],
    ["/enreach.registry.QueryGetSuperiorResponse", query_6.QueryGetSuperiorResponse],
    ["/enreach.registry.Superior", superior_1.Superior],
    ["/enreach.registry.QueryGetRegionResponse", query_7.QueryGetRegionResponse],
    ["/enreach.registry.QueryAllRegionResponse", query_8.QueryAllRegionResponse],
    ["/enreach.registry.MsgCreateRegionResponse", tx_8.MsgCreateRegionResponse],
    ["/enreach.registry.MsgUpdateRegionResponse", tx_9.MsgUpdateRegionResponse],
    ["/enreach.registry.MsgCreateSuperiorResponse", tx_10.MsgCreateSuperiorResponse],
    ["/enreach.registry.MsgUpdateSuperiorResponse", tx_11.MsgUpdateSuperiorResponse],
    ["/enreach.registry.MsgDeleteRegion", tx_12.MsgDeleteRegion],
];
exports.msgTypes = msgTypes;
