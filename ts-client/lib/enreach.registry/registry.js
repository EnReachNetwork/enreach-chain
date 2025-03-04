"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/enreach/registry/tx");
const query_1 = require("./types/enreach/registry/query");
const tx_2 = require("./types/enreach/registry/tx");
const params_1 = require("./types/enreach/registry/params");
const query_2 = require("./types/enreach/registry/query");
const query_3 = require("./types/enreach/registry/query");
const query_4 = require("./types/enreach/registry/query");
const tx_3 = require("./types/enreach/registry/tx");
const tx_4 = require("./types/enreach/registry/tx");
const tx_5 = require("./types/enreach/registry/tx");
const tx_6 = require("./types/enreach/registry/tx");
const tx_7 = require("./types/enreach/registry/tx");
const query_5 = require("./types/enreach/registry/query");
const genesis_1 = require("./types/enreach/registry/genesis");
const region_1 = require("./types/enreach/registry/region");
const tx_8 = require("./types/enreach/registry/tx");
const query_6 = require("./types/enreach/registry/query");
const msgTypes = [
    ["/enreach.registry.MsgCreateRegion", tx_1.MsgCreateRegion],
    ["/enreach.registry.QueryParamsResponse", query_1.QueryParamsResponse],
    ["/enreach.registry.MsgDeleteRegion", tx_2.MsgDeleteRegion],
    ["/enreach.registry.Params", params_1.Params],
    ["/enreach.registry.QueryGetRegionResponse", query_2.QueryGetRegionResponse],
    ["/enreach.registry.QueryGetRegionRequest", query_3.QueryGetRegionRequest],
    ["/enreach.registry.QueryAllRegionResponse", query_4.QueryAllRegionResponse],
    ["/enreach.registry.MsgUpdateRegion", tx_3.MsgUpdateRegion],
    ["/enreach.registry.MsgUpdateParams", tx_4.MsgUpdateParams],
    ["/enreach.registry.MsgUpdateParamsResponse", tx_5.MsgUpdateParamsResponse],
    ["/enreach.registry.MsgUpdateRegionResponse", tx_6.MsgUpdateRegionResponse],
    ["/enreach.registry.MsgDeleteRegionResponse", tx_7.MsgDeleteRegionResponse],
    ["/enreach.registry.QueryParamsRequest", query_5.QueryParamsRequest],
    ["/enreach.registry.GenesisState", genesis_1.GenesisState],
    ["/enreach.registry.Region", region_1.Region],
    ["/enreach.registry.MsgCreateRegionResponse", tx_8.MsgCreateRegionResponse],
    ["/enreach.registry.QueryAllRegionRequest", query_6.QueryAllRegionRequest],
];
exports.msgTypes = msgTypes;
