"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/enreach/registry/tx");
const query_1 = require("./types/enreach/registry/query");
const query_2 = require("./types/enreach/registry/query");
const tx_2 = require("./types/enreach/registry/tx");
const region_1 = require("./types/enreach/registry/region");
const tx_3 = require("./types/enreach/registry/tx");
const tx_4 = require("./types/enreach/registry/tx");
const tx_5 = require("./types/enreach/registry/tx");
const tx_6 = require("./types/enreach/registry/tx");
const tx_7 = require("./types/enreach/registry/tx");
const query_3 = require("./types/enreach/registry/query");
const tx_8 = require("./types/enreach/registry/tx");
const tx_9 = require("./types/enreach/registry/tx");
const genesis_1 = require("./types/enreach/registry/genesis");
const params_1 = require("./types/enreach/registry/params");
const superior_1 = require("./types/enreach/registry/superior");
const query_4 = require("./types/enreach/registry/query");
const query_5 = require("./types/enreach/registry/query");
const query_6 = require("./types/enreach/registry/query");
const tx_10 = require("./types/enreach/registry/tx");
const tx_11 = require("./types/enreach/registry/tx");
const tx_12 = require("./types/enreach/registry/tx");
const query_7 = require("./types/enreach/registry/query");
const query_8 = require("./types/enreach/registry/query");
const msgTypes = [
    ["/enreach.registry.MsgUpdateRegion", tx_1.MsgUpdateRegion],
    ["/enreach.registry.QueryGetRegionResponse", query_1.QueryGetRegionResponse],
    ["/enreach.registry.QueryAllRegionRequest", query_2.QueryAllRegionRequest],
    ["/enreach.registry.MsgUpdateRegionResponse", tx_2.MsgUpdateRegionResponse],
    ["/enreach.registry.Region", region_1.Region],
    ["/enreach.registry.MsgUpdateSuperiorResponse", tx_3.MsgUpdateSuperiorResponse],
    ["/enreach.registry.MsgCreateRegion", tx_4.MsgCreateRegion],
    ["/enreach.registry.MsgUpdateParams", tx_5.MsgUpdateParams],
    ["/enreach.registry.MsgCreateSuperiorResponse", tx_6.MsgCreateSuperiorResponse],
    ["/enreach.registry.MsgUpdateSuperior", tx_7.MsgUpdateSuperior],
    ["/enreach.registry.QueryAllRegionResponse", query_3.QueryAllRegionResponse],
    ["/enreach.registry.MsgCreateRegionResponse", tx_8.MsgCreateRegionResponse],
    ["/enreach.registry.MsgDeleteRegionResponse", tx_9.MsgDeleteRegionResponse],
    ["/enreach.registry.GenesisState", genesis_1.GenesisState],
    ["/enreach.registry.Params", params_1.Params],
    ["/enreach.registry.Superior", superior_1.Superior],
    ["/enreach.registry.QueryParamsRequest", query_4.QueryParamsRequest],
    ["/enreach.registry.QueryGetSuperiorResponse", query_5.QueryGetSuperiorResponse],
    ["/enreach.registry.QueryGetSuperiorRequest", query_6.QueryGetSuperiorRequest],
    ["/enreach.registry.MsgUpdateParamsResponse", tx_10.MsgUpdateParamsResponse],
    ["/enreach.registry.MsgCreateSuperior", tx_11.MsgCreateSuperior],
    ["/enreach.registry.MsgDeleteRegion", tx_12.MsgDeleteRegion],
    ["/enreach.registry.QueryParamsResponse", query_7.QueryParamsResponse],
    ["/enreach.registry.QueryGetRegionRequest", query_8.QueryGetRegionRequest],
];
exports.msgTypes = msgTypes;
