"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const mint_1 = require("./types/cosmos/mint/v1beta1/mint");
const query_1 = require("./types/cosmos/mint/v1beta1/query");
const query_2 = require("./types/cosmos/mint/v1beta1/query");
const tx_1 = require("./types/cosmos/mint/v1beta1/tx");
const tx_2 = require("./types/cosmos/mint/v1beta1/tx");
const genesis_1 = require("./types/cosmos/mint/v1beta1/genesis");
const mint_2 = require("./types/cosmos/mint/v1beta1/mint");
const query_3 = require("./types/cosmos/mint/v1beta1/query");
const query_4 = require("./types/cosmos/mint/v1beta1/query");
const query_5 = require("./types/cosmos/mint/v1beta1/query");
const query_6 = require("./types/cosmos/mint/v1beta1/query");
const msgTypes = [
    ["/cosmos.mint.v1beta1.Params", mint_1.Params],
    ["/cosmos.mint.v1beta1.QueryAnnualProvisionsResponse", query_1.QueryAnnualProvisionsResponse],
    ["/cosmos.mint.v1beta1.QueryParamsRequest", query_2.QueryParamsRequest],
    ["/cosmos.mint.v1beta1.MsgUpdateParams", tx_1.MsgUpdateParams],
    ["/cosmos.mint.v1beta1.MsgUpdateParamsResponse", tx_2.MsgUpdateParamsResponse],
    ["/cosmos.mint.v1beta1.GenesisState", genesis_1.GenesisState],
    ["/cosmos.mint.v1beta1.Minter", mint_2.Minter],
    ["/cosmos.mint.v1beta1.QueryParamsResponse", query_3.QueryParamsResponse],
    ["/cosmos.mint.v1beta1.QueryInflationRequest", query_4.QueryInflationRequest],
    ["/cosmos.mint.v1beta1.QueryInflationResponse", query_5.QueryInflationResponse],
    ["/cosmos.mint.v1beta1.QueryAnnualProvisionsRequest", query_6.QueryAnnualProvisionsRequest],
];
exports.msgTypes = msgTypes;
