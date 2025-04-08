"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const genesis_1 = require("./types/enreach/registry/genesis");
const tx_1 = require("./types/enreach/registry/tx");
const tx_2 = require("./types/enreach/registry/tx");
const query_1 = require("./types/enreach/registry/query");
const params_1 = require("./types/enreach/registry/params");
const query_2 = require("./types/enreach/registry/query");
const query_3 = require("./types/enreach/registry/query");
const tx_3 = require("./types/enreach/registry/tx");
const tx_4 = require("./types/enreach/registry/tx");
const tx_5 = require("./types/enreach/registry/tx");
const query_4 = require("./types/enreach/registry/query");
const tx_6 = require("./types/enreach/registry/tx");
const tx_7 = require("./types/enreach/registry/tx");
const tx_8 = require("./types/enreach/registry/tx");
const tx_9 = require("./types/enreach/registry/tx");
const tx_10 = require("./types/enreach/registry/tx");
const region_1 = require("./types/enreach/registry/region");
const tx_11 = require("./types/enreach/registry/tx");
const tx_12 = require("./types/enreach/registry/tx");
const query_5 = require("./types/enreach/registry/query");
const query_6 = require("./types/enreach/registry/query");
const query_7 = require("./types/enreach/registry/query");
const query_8 = require("./types/enreach/registry/query");
const superior_1 = require("./types/enreach/registry/superior");
const msgTypes = [
    ["/enreach.registry.GenesisState", genesis_1.GenesisState],
    ["/enreach.registry.MsgDeleteRegionResponse", tx_1.MsgDeleteRegionResponse],
    ["/enreach.registry.MsgUpdateSuperiorResponse", tx_2.MsgUpdateSuperiorResponse],
    ["/enreach.registry.QueryAllRegionRequest", query_1.QueryAllRegionRequest],
    ["/enreach.registry.Params", params_1.Params],
    ["/enreach.registry.QueryGetSuperiorRequest", query_2.QueryGetSuperiorRequest],
    ["/enreach.registry.QueryGetSuperiorResponse", query_3.QueryGetSuperiorResponse],
    ["/enreach.registry.MsgUpdateRegion", tx_3.MsgUpdateRegion],
    ["/enreach.registry.MsgCreateSuperiorResponse", tx_4.MsgCreateSuperiorResponse],
    ["/enreach.registry.MsgUpdateRegionResponse", tx_5.MsgUpdateRegionResponse],
    ["/enreach.registry.QueryAllRegionResponse", query_4.QueryAllRegionResponse],
    ["/enreach.registry.MsgUpdateParamsResponse", tx_6.MsgUpdateParamsResponse],
    ["/enreach.registry.MsgCreateRegionResponse", tx_7.MsgCreateRegionResponse],
    ["/enreach.registry.MsgCreateRegion", tx_8.MsgCreateRegion],
    ["/enreach.registry.MsgCreateSuperior", tx_9.MsgCreateSuperior],
    ["/enreach.registry.MsgUpdateSuperior", tx_10.MsgUpdateSuperior],
    ["/enreach.registry.Region", region_1.Region],
    ["/enreach.registry.MsgUpdateParams", tx_11.MsgUpdateParams],
    ["/enreach.registry.MsgDeleteRegion", tx_12.MsgDeleteRegion],
    ["/enreach.registry.QueryGetRegionResponse", query_5.QueryGetRegionResponse],
    ["/enreach.registry.QueryParamsResponse", query_6.QueryParamsResponse],
    ["/enreach.registry.QueryParamsRequest", query_7.QueryParamsRequest],
    ["/enreach.registry.QueryGetRegionRequest", query_8.QueryGetRegionRequest],
    ["/enreach.registry.Superior", superior_1.Superior],
];
exports.msgTypes = msgTypes;
