"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/enreach/registry/tx");
const tx_2 = require("./types/enreach/registry/tx");
const tx_3 = require("./types/enreach/registry/tx");
const query_1 = require("./types/enreach/registry/query");
const tx_4 = require("./types/enreach/registry/tx");
const tx_5 = require("./types/enreach/registry/tx");
const tx_6 = require("./types/enreach/registry/tx");
const params_1 = require("./types/enreach/registry/params");
const query_2 = require("./types/enreach/registry/query");
const tx_7 = require("./types/enreach/registry/tx");
const query_3 = require("./types/enreach/registry/query");
const query_4 = require("./types/enreach/registry/query");
const query_5 = require("./types/enreach/registry/query");
const tx_8 = require("./types/enreach/registry/tx");
const genesis_1 = require("./types/enreach/registry/genesis");
const region_1 = require("./types/enreach/registry/region");
const query_6 = require("./types/enreach/registry/query");
const msgTypes = [
    ["/enreach.registry.MsgUpdateRegion", tx_1.MsgUpdateRegion],
    ["/enreach.registry.MsgDeleteRegion", tx_2.MsgDeleteRegion],
    ["/enreach.registry.MsgUpdateParams", tx_3.MsgUpdateParams],
    ["/enreach.registry.QueryGetRegionRequest", query_1.QueryGetRegionRequest],
    ["/enreach.registry.MsgUpdateParamsResponse", tx_4.MsgUpdateParamsResponse],
    ["/enreach.registry.MsgCreateRegionResponse", tx_5.MsgCreateRegionResponse],
    ["/enreach.registry.MsgUpdateRegionResponse", tx_6.MsgUpdateRegionResponse],
    ["/enreach.registry.Params", params_1.Params],
    ["/enreach.registry.QueryParamsResponse", query_2.QueryParamsResponse],
    ["/enreach.registry.MsgCreateRegion", tx_7.MsgCreateRegion],
    ["/enreach.registry.QueryAllRegionRequest", query_3.QueryAllRegionRequest],
    ["/enreach.registry.QueryAllRegionResponse", query_4.QueryAllRegionResponse],
    ["/enreach.registry.QueryGetRegionResponse", query_5.QueryGetRegionResponse],
    ["/enreach.registry.MsgDeleteRegionResponse", tx_8.MsgDeleteRegionResponse],
    ["/enreach.registry.GenesisState", genesis_1.GenesisState],
    ["/enreach.registry.Region", region_1.Region],
    ["/enreach.registry.QueryParamsRequest", query_6.QueryParamsRequest],
];
exports.msgTypes = msgTypes;
