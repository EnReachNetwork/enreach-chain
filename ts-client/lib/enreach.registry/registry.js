"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/enreach/registry/tx");
const tx_2 = require("./types/enreach/registry/tx");
const query_1 = require("./types/enreach/registry/query");
const query_2 = require("./types/enreach/registry/query");
const query_3 = require("./types/enreach/registry/query");
const tx_3 = require("./types/enreach/registry/tx");
const tx_4 = require("./types/enreach/registry/tx");
const query_4 = require("./types/enreach/registry/query");
const tx_5 = require("./types/enreach/registry/tx");
const genesis_1 = require("./types/enreach/registry/genesis");
const tx_6 = require("./types/enreach/registry/tx");
const region_1 = require("./types/enreach/registry/region");
const tx_7 = require("./types/enreach/registry/tx");
const tx_8 = require("./types/enreach/registry/tx");
const query_5 = require("./types/enreach/registry/query");
const superior_1 = require("./types/enreach/registry/superior");
const params_1 = require("./types/enreach/registry/params");
const tx_9 = require("./types/enreach/registry/tx");
const tx_10 = require("./types/enreach/registry/tx");
const query_6 = require("./types/enreach/registry/query");
const query_7 = require("./types/enreach/registry/query");
const tx_11 = require("./types/enreach/registry/tx");
const tx_12 = require("./types/enreach/registry/tx");
const query_8 = require("./types/enreach/registry/query");
const msgTypes = [
    ["/enreach.registry.MsgUpdateParams", tx_1.MsgUpdateParams],
    ["/enreach.registry.MsgUpdateParamsResponse", tx_2.MsgUpdateParamsResponse],
    ["/enreach.registry.QueryParamsResponse", query_1.QueryParamsResponse],
    ["/enreach.registry.QueryAllRegionResponse", query_2.QueryAllRegionResponse],
    ["/enreach.registry.QueryGetSuperiorResponse", query_3.QueryGetSuperiorResponse],
    ["/enreach.registry.MsgCreateRegionResponse", tx_3.MsgCreateRegionResponse],
    ["/enreach.registry.MsgUpdateSuperiorResponse", tx_4.MsgUpdateSuperiorResponse],
    ["/enreach.registry.QueryAllRegionRequest", query_4.QueryAllRegionRequest],
    ["/enreach.registry.MsgCreateRegion", tx_5.MsgCreateRegion],
    ["/enreach.registry.GenesisState", genesis_1.GenesisState],
    ["/enreach.registry.MsgCreateSuperior", tx_6.MsgCreateSuperior],
    ["/enreach.registry.Region", region_1.Region],
    ["/enreach.registry.MsgDeleteRegion", tx_7.MsgDeleteRegion],
    ["/enreach.registry.MsgCreateSuperiorResponse", tx_8.MsgCreateSuperiorResponse],
    ["/enreach.registry.QueryGetRegionRequest", query_5.QueryGetRegionRequest],
    ["/enreach.registry.Superior", superior_1.Superior],
    ["/enreach.registry.Params", params_1.Params],
    ["/enreach.registry.MsgUpdateRegionResponse", tx_9.MsgUpdateRegionResponse],
    ["/enreach.registry.MsgUpdateSuperior", tx_10.MsgUpdateSuperior],
    ["/enreach.registry.QueryParamsRequest", query_6.QueryParamsRequest],
    ["/enreach.registry.QueryGetRegionResponse", query_7.QueryGetRegionResponse],
    ["/enreach.registry.MsgUpdateRegion", tx_11.MsgUpdateRegion],
    ["/enreach.registry.MsgDeleteRegionResponse", tx_12.MsgDeleteRegionResponse],
    ["/enreach.registry.QueryGetSuperiorRequest", query_8.QueryGetSuperiorRequest],
];
exports.msgTypes = msgTypes;
