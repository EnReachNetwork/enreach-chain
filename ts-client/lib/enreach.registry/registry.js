"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const region_1 = require("./types/enreach/registry/region");
const query_1 = require("./types/enreach/registry/query");
const params_1 = require("./types/enreach/registry/params");
const superior_1 = require("./types/enreach/registry/superior");
const genesis_1 = require("./types/enreach/registry/genesis");
const query_2 = require("./types/enreach/registry/query");
const tx_1 = require("./types/enreach/registry/tx");
const tx_2 = require("./types/enreach/registry/tx");
const query_3 = require("./types/enreach/registry/query");
const query_4 = require("./types/enreach/registry/query");
const tx_3 = require("./types/enreach/registry/tx");
const tx_4 = require("./types/enreach/registry/tx");
const query_5 = require("./types/enreach/registry/query");
const tx_5 = require("./types/enreach/registry/tx");
const tx_6 = require("./types/enreach/registry/tx");
const query_6 = require("./types/enreach/registry/query");
const query_7 = require("./types/enreach/registry/query");
const tx_7 = require("./types/enreach/registry/tx");
const tx_8 = require("./types/enreach/registry/tx");
const tx_9 = require("./types/enreach/registry/tx");
const tx_10 = require("./types/enreach/registry/tx");
const tx_11 = require("./types/enreach/registry/tx");
const query_8 = require("./types/enreach/registry/query");
const tx_12 = require("./types/enreach/registry/tx");
const msgTypes = [
    ["/enreach.registry.Region", region_1.Region],
    ["/enreach.registry.QueryGetRegionRequest", query_1.QueryGetRegionRequest],
    ["/enreach.registry.Params", params_1.Params],
    ["/enreach.registry.Superior", superior_1.Superior],
    ["/enreach.registry.GenesisState", genesis_1.GenesisState],
    ["/enreach.registry.QueryGetRegionResponse", query_2.QueryGetRegionResponse],
    ["/enreach.registry.MsgCreateRegionResponse", tx_1.MsgCreateRegionResponse],
    ["/enreach.registry.MsgUpdateRegionResponse", tx_2.MsgUpdateRegionResponse],
    ["/enreach.registry.QueryParamsResponse", query_3.QueryParamsResponse],
    ["/enreach.registry.QueryGetSuperiorRequest", query_4.QueryGetSuperiorRequest],
    ["/enreach.registry.MsgCreateSuperior", tx_3.MsgCreateSuperior],
    ["/enreach.registry.MsgDeleteRegion", tx_4.MsgDeleteRegion],
    ["/enreach.registry.QueryGetSuperiorResponse", query_5.QueryGetSuperiorResponse],
    ["/enreach.registry.MsgUpdateSuperior", tx_5.MsgUpdateSuperior],
    ["/enreach.registry.MsgUpdateParams", tx_6.MsgUpdateParams],
    ["/enreach.registry.QueryParamsRequest", query_6.QueryParamsRequest],
    ["/enreach.registry.QueryAllRegionResponse", query_7.QueryAllRegionResponse],
    ["/enreach.registry.MsgUpdateParamsResponse", tx_7.MsgUpdateParamsResponse],
    ["/enreach.registry.MsgCreateRegion", tx_8.MsgCreateRegion],
    ["/enreach.registry.MsgUpdateRegion", tx_9.MsgUpdateRegion],
    ["/enreach.registry.MsgDeleteRegionResponse", tx_10.MsgDeleteRegionResponse],
    ["/enreach.registry.MsgUpdateSuperiorResponse", tx_11.MsgUpdateSuperiorResponse],
    ["/enreach.registry.QueryAllRegionRequest", query_8.QueryAllRegionRequest],
    ["/enreach.registry.MsgCreateSuperiorResponse", tx_12.MsgCreateSuperiorResponse],
];
exports.msgTypes = msgTypes;
