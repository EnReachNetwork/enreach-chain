"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const region_1 = require("./types/enreach/registry/region");
const tx_1 = require("./types/enreach/registry/tx");
const params_1 = require("./types/enreach/registry/params");
const query_1 = require("./types/enreach/registry/query");
const query_2 = require("./types/enreach/registry/query");
const query_3 = require("./types/enreach/registry/query");
const tx_2 = require("./types/enreach/registry/tx");
const tx_3 = require("./types/enreach/registry/tx");
const tx_4 = require("./types/enreach/registry/tx");
const query_4 = require("./types/enreach/registry/query");
const tx_5 = require("./types/enreach/registry/tx");
const query_5 = require("./types/enreach/registry/query");
const tx_6 = require("./types/enreach/registry/tx");
const superior_1 = require("./types/enreach/registry/superior");
const query_6 = require("./types/enreach/registry/query");
const tx_7 = require("./types/enreach/registry/tx");
const tx_8 = require("./types/enreach/registry/tx");
const genesis_1 = require("./types/enreach/registry/genesis");
const query_7 = require("./types/enreach/registry/query");
const tx_9 = require("./types/enreach/registry/tx");
const tx_10 = require("./types/enreach/registry/tx");
const tx_11 = require("./types/enreach/registry/tx");
const tx_12 = require("./types/enreach/registry/tx");
const query_8 = require("./types/enreach/registry/query");
const msgTypes = [
    ["/enreach.registry.Region", region_1.Region],
    ["/enreach.registry.MsgDeleteRegion", tx_1.MsgDeleteRegion],
    ["/enreach.registry.Params", params_1.Params],
    ["/enreach.registry.QueryAllRegionResponse", query_1.QueryAllRegionResponse],
    ["/enreach.registry.QueryGetRegionRequest", query_2.QueryGetRegionRequest],
    ["/enreach.registry.QueryGetSuperiorResponse", query_3.QueryGetSuperiorResponse],
    ["/enreach.registry.MsgUpdateParamsResponse", tx_2.MsgUpdateParamsResponse],
    ["/enreach.registry.MsgCreateRegion", tx_3.MsgCreateRegion],
    ["/enreach.registry.MsgUpdateRegion", tx_4.MsgUpdateRegion],
    ["/enreach.registry.QueryParamsResponse", query_4.QueryParamsResponse],
    ["/enreach.registry.MsgUpdateSuperiorResponse", tx_5.MsgUpdateSuperiorResponse],
    ["/enreach.registry.QueryAllRegionRequest", query_5.QueryAllRegionRequest],
    ["/enreach.registry.MsgUpdateParams", tx_6.MsgUpdateParams],
    ["/enreach.registry.Superior", superior_1.Superior],
    ["/enreach.registry.QueryParamsRequest", query_6.QueryParamsRequest],
    ["/enreach.registry.MsgCreateRegionResponse", tx_7.MsgCreateRegionResponse],
    ["/enreach.registry.MsgCreateSuperior", tx_8.MsgCreateSuperior],
    ["/enreach.registry.GenesisState", genesis_1.GenesisState],
    ["/enreach.registry.QueryGetRegionResponse", query_7.QueryGetRegionResponse],
    ["/enreach.registry.MsgCreateSuperiorResponse", tx_9.MsgCreateSuperiorResponse],
    ["/enreach.registry.MsgUpdateSuperior", tx_10.MsgUpdateSuperior],
    ["/enreach.registry.MsgUpdateRegionResponse", tx_11.MsgUpdateRegionResponse],
    ["/enreach.registry.MsgDeleteRegionResponse", tx_12.MsgDeleteRegionResponse],
    ["/enreach.registry.QueryGetSuperiorRequest", query_8.QueryGetSuperiorRequest],
];
exports.msgTypes = msgTypes;
