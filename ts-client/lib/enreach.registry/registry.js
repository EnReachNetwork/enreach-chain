"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const query_1 = require("./types/enreach/registry/query");
const query_2 = require("./types/enreach/registry/query");
const tx_1 = require("./types/enreach/registry/tx");
const superior_1 = require("./types/enreach/registry/superior");
const tx_2 = require("./types/enreach/registry/tx");
const tx_3 = require("./types/enreach/registry/tx");
const tx_4 = require("./types/enreach/registry/tx");
const tx_5 = require("./types/enreach/registry/tx");
const query_3 = require("./types/enreach/registry/query");
const query_4 = require("./types/enreach/registry/query");
const genesis_1 = require("./types/enreach/registry/genesis");
const query_5 = require("./types/enreach/registry/query");
const tx_6 = require("./types/enreach/registry/tx");
const tx_7 = require("./types/enreach/registry/tx");
const query_6 = require("./types/enreach/registry/query");
const params_1 = require("./types/enreach/registry/params");
const tx_8 = require("./types/enreach/registry/tx");
const tx_9 = require("./types/enreach/registry/tx");
const tx_10 = require("./types/enreach/registry/tx");
const tx_11 = require("./types/enreach/registry/tx");
const tx_12 = require("./types/enreach/registry/tx");
const query_7 = require("./types/enreach/registry/query");
const query_8 = require("./types/enreach/registry/query");
const region_1 = require("./types/enreach/registry/region");
const msgTypes = [
    ["/enreach.registry.QueryGetSuperiorRequest", query_1.QueryGetSuperiorRequest],
    ["/enreach.registry.QueryGetRegionResponse", query_2.QueryGetRegionResponse],
    ["/enreach.registry.MsgCreateRegion", tx_1.MsgCreateRegion],
    ["/enreach.registry.Superior", superior_1.Superior],
    ["/enreach.registry.MsgDeleteRegion", tx_2.MsgDeleteRegion],
    ["/enreach.registry.MsgCreateSuperiorResponse", tx_3.MsgCreateSuperiorResponse],
    ["/enreach.registry.MsgUpdateSuperiorResponse", tx_4.MsgUpdateSuperiorResponse],
    ["/enreach.registry.MsgCreateSuperior", tx_5.MsgCreateSuperior],
    ["/enreach.registry.QueryAllRegionRequest", query_3.QueryAllRegionRequest],
    ["/enreach.registry.QueryGetSuperiorResponse", query_4.QueryGetSuperiorResponse],
    ["/enreach.registry.GenesisState", genesis_1.GenesisState],
    ["/enreach.registry.QueryParamsResponse", query_5.QueryParamsResponse],
    ["/enreach.registry.MsgUpdateParams", tx_6.MsgUpdateParams],
    ["/enreach.registry.MsgUpdateRegionResponse", tx_7.MsgUpdateRegionResponse],
    ["/enreach.registry.QueryAllRegionResponse", query_6.QueryAllRegionResponse],
    ["/enreach.registry.Params", params_1.Params],
    ["/enreach.registry.MsgUpdateRegion", tx_8.MsgUpdateRegion],
    ["/enreach.registry.MsgCreateRegionResponse", tx_9.MsgCreateRegionResponse],
    ["/enreach.registry.MsgUpdateParamsResponse", tx_10.MsgUpdateParamsResponse],
    ["/enreach.registry.MsgDeleteRegionResponse", tx_11.MsgDeleteRegionResponse],
    ["/enreach.registry.MsgUpdateSuperior", tx_12.MsgUpdateSuperior],
    ["/enreach.registry.QueryParamsRequest", query_7.QueryParamsRequest],
    ["/enreach.registry.QueryGetRegionRequest", query_8.QueryGetRegionRequest],
    ["/enreach.registry.Region", region_1.Region],
];
exports.msgTypes = msgTypes;
