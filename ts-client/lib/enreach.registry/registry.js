"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const query_1 = require("./types/enreach/registry/query");
const query_2 = require("./types/enreach/registry/query");
const tx_1 = require("./types/enreach/registry/tx");
const tx_2 = require("./types/enreach/registry/tx");
const params_1 = require("./types/enreach/registry/params");
const tx_3 = require("./types/enreach/registry/tx");
const query_3 = require("./types/enreach/registry/query");
const query_4 = require("./types/enreach/registry/query");
const tx_4 = require("./types/enreach/registry/tx");
const tx_5 = require("./types/enreach/registry/tx");
const tx_6 = require("./types/enreach/registry/tx");
const tx_7 = require("./types/enreach/registry/tx");
const query_5 = require("./types/enreach/registry/query");
const region_1 = require("./types/enreach/registry/region");
const genesis_1 = require("./types/enreach/registry/genesis");
const query_6 = require("./types/enreach/registry/query");
const tx_8 = require("./types/enreach/registry/tx");
const msgTypes = [
    ["/enreach.registry.QueryGetRegionResponse", query_1.QueryGetRegionResponse],
    ["/enreach.registry.QueryAllRegionResponse", query_2.QueryAllRegionResponse],
    ["/enreach.registry.MsgUpdateRegionResponse", tx_1.MsgUpdateRegionResponse],
    ["/enreach.registry.MsgDeleteRegionResponse", tx_2.MsgDeleteRegionResponse],
    ["/enreach.registry.Params", params_1.Params],
    ["/enreach.registry.MsgDeleteRegion", tx_3.MsgDeleteRegion],
    ["/enreach.registry.QueryParamsRequest", query_3.QueryParamsRequest],
    ["/enreach.registry.QueryGetRegionRequest", query_4.QueryGetRegionRequest],
    ["/enreach.registry.MsgCreateRegionResponse", tx_4.MsgCreateRegionResponse],
    ["/enreach.registry.MsgUpdateParams", tx_5.MsgUpdateParams],
    ["/enreach.registry.MsgCreateRegion", tx_6.MsgCreateRegion],
    ["/enreach.registry.MsgUpdateRegion", tx_7.MsgUpdateRegion],
    ["/enreach.registry.QueryAllRegionRequest", query_5.QueryAllRegionRequest],
    ["/enreach.registry.Region", region_1.Region],
    ["/enreach.registry.GenesisState", genesis_1.GenesisState],
    ["/enreach.registry.QueryParamsResponse", query_6.QueryParamsResponse],
    ["/enreach.registry.MsgUpdateParamsResponse", tx_8.MsgUpdateParamsResponse],
];
exports.msgTypes = msgTypes;
