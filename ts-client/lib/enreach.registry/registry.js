"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/enreach/registry/tx");
const superior_1 = require("./types/enreach/registry/superior");
const query_1 = require("./types/enreach/registry/query");
const tx_2 = require("./types/enreach/registry/tx");
const tx_3 = require("./types/enreach/registry/tx");
const params_1 = require("./types/enreach/registry/params");
const query_2 = require("./types/enreach/registry/query");
const tx_4 = require("./types/enreach/registry/tx");
const tx_5 = require("./types/enreach/registry/tx");
const tx_6 = require("./types/enreach/registry/tx");
const query_3 = require("./types/enreach/registry/query");
const tx_7 = require("./types/enreach/registry/tx");
const tx_8 = require("./types/enreach/registry/tx");
const query_4 = require("./types/enreach/registry/query");
const tx_9 = require("./types/enreach/registry/tx");
const query_5 = require("./types/enreach/registry/query");
const query_6 = require("./types/enreach/registry/query");
const tx_10 = require("./types/enreach/registry/tx");
const genesis_1 = require("./types/enreach/registry/genesis");
const tx_11 = require("./types/enreach/registry/tx");
const query_7 = require("./types/enreach/registry/query");
const tx_12 = require("./types/enreach/registry/tx");
const query_8 = require("./types/enreach/registry/query");
const region_1 = require("./types/enreach/registry/region");
const msgTypes = [
    ["/enreach.registry.MsgCreateRegion", tx_1.MsgCreateRegion],
    ["/enreach.registry.Superior", superior_1.Superior],
    ["/enreach.registry.QueryParamsRequest", query_1.QueryParamsRequest],
    ["/enreach.registry.MsgCreateRegionResponse", tx_2.MsgCreateRegionResponse],
    ["/enreach.registry.MsgDeleteRegionResponse", tx_3.MsgDeleteRegionResponse],
    ["/enreach.registry.Params", params_1.Params],
    ["/enreach.registry.QueryAllRegionRequest", query_2.QueryAllRegionRequest],
    ["/enreach.registry.MsgUpdateRegionResponse", tx_4.MsgUpdateRegionResponse],
    ["/enreach.registry.MsgUpdateSuperiorResponse", tx_5.MsgUpdateSuperiorResponse],
    ["/enreach.registry.MsgUpdateSuperior", tx_6.MsgUpdateSuperior],
    ["/enreach.registry.QueryGetRegionRequest", query_3.QueryGetRegionRequest],
    ["/enreach.registry.MsgUpdateParamsResponse", tx_7.MsgUpdateParamsResponse],
    ["/enreach.registry.MsgUpdateParams", tx_8.MsgUpdateParams],
    ["/enreach.registry.QueryGetRegionResponse", query_4.QueryGetRegionResponse],
    ["/enreach.registry.MsgCreateSuperiorResponse", tx_9.MsgCreateSuperiorResponse],
    ["/enreach.registry.QueryAllRegionResponse", query_5.QueryAllRegionResponse],
    ["/enreach.registry.QueryGetSuperiorResponse", query_6.QueryGetSuperiorResponse],
    ["/enreach.registry.MsgUpdateRegion", tx_10.MsgUpdateRegion],
    ["/enreach.registry.GenesisState", genesis_1.GenesisState],
    ["/enreach.registry.MsgCreateSuperior", tx_11.MsgCreateSuperior],
    ["/enreach.registry.QueryParamsResponse", query_7.QueryParamsResponse],
    ["/enreach.registry.MsgDeleteRegion", tx_12.MsgDeleteRegion],
    ["/enreach.registry.QueryGetSuperiorRequest", query_8.QueryGetSuperiorRequest],
    ["/enreach.registry.Region", region_1.Region],
];
exports.msgTypes = msgTypes;
