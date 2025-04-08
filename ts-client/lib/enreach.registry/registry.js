"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/enreach/registry/tx");
const query_1 = require("./types/enreach/registry/query");
const query_2 = require("./types/enreach/registry/query");
const query_3 = require("./types/enreach/registry/query");
const tx_2 = require("./types/enreach/registry/tx");
const tx_3 = require("./types/enreach/registry/tx");
const tx_4 = require("./types/enreach/registry/tx");
const tx_5 = require("./types/enreach/registry/tx");
const tx_6 = require("./types/enreach/registry/tx");
const query_4 = require("./types/enreach/registry/query");
const query_5 = require("./types/enreach/registry/query");
const region_1 = require("./types/enreach/registry/region");
const tx_7 = require("./types/enreach/registry/tx");
const superior_1 = require("./types/enreach/registry/superior");
const tx_8 = require("./types/enreach/registry/tx");
const tx_9 = require("./types/enreach/registry/tx");
const query_6 = require("./types/enreach/registry/query");
const tx_10 = require("./types/enreach/registry/tx");
const genesis_1 = require("./types/enreach/registry/genesis");
const tx_11 = require("./types/enreach/registry/tx");
const tx_12 = require("./types/enreach/registry/tx");
const query_7 = require("./types/enreach/registry/query");
const query_8 = require("./types/enreach/registry/query");
const params_1 = require("./types/enreach/registry/params");
const msgTypes = [
    ["/enreach.registry.MsgDeleteRegion", tx_1.MsgDeleteRegion],
    ["/enreach.registry.QueryParamsResponse", query_1.QueryParamsResponse],
    ["/enreach.registry.QueryParamsRequest", query_2.QueryParamsRequest],
    ["/enreach.registry.QueryGetRegionRequest", query_3.QueryGetRegionRequest],
    ["/enreach.registry.MsgUpdateParamsResponse", tx_2.MsgUpdateParamsResponse],
    ["/enreach.registry.MsgUpdateSuperiorResponse", tx_3.MsgUpdateSuperiorResponse],
    ["/enreach.registry.MsgUpdateRegionResponse", tx_4.MsgUpdateRegionResponse],
    ["/enreach.registry.MsgDeleteRegionResponse", tx_5.MsgDeleteRegionResponse],
    ["/enreach.registry.MsgUpdateRegion", tx_6.MsgUpdateRegion],
    ["/enreach.registry.QueryGetRegionResponse", query_4.QueryGetRegionResponse],
    ["/enreach.registry.QueryAllRegionResponse", query_5.QueryAllRegionResponse],
    ["/enreach.registry.Region", region_1.Region],
    ["/enreach.registry.MsgCreateRegionResponse", tx_7.MsgCreateRegionResponse],
    ["/enreach.registry.Superior", superior_1.Superior],
    ["/enreach.registry.MsgUpdateParams", tx_8.MsgUpdateParams],
    ["/enreach.registry.MsgCreateSuperior", tx_9.MsgCreateSuperior],
    ["/enreach.registry.QueryAllRegionRequest", query_6.QueryAllRegionRequest],
    ["/enreach.registry.MsgCreateSuperiorResponse", tx_10.MsgCreateSuperiorResponse],
    ["/enreach.registry.GenesisState", genesis_1.GenesisState],
    ["/enreach.registry.MsgCreateRegion", tx_11.MsgCreateRegion],
    ["/enreach.registry.MsgUpdateSuperior", tx_12.MsgUpdateSuperior],
    ["/enreach.registry.QueryGetSuperiorRequest", query_7.QueryGetSuperiorRequest],
    ["/enreach.registry.QueryGetSuperiorResponse", query_8.QueryGetSuperiorResponse],
    ["/enreach.registry.Params", params_1.Params],
];
exports.msgTypes = msgTypes;
