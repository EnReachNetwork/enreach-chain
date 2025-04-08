"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const slashing_1 = require("./types/cosmos/slashing/v1beta1/slashing");
const query_1 = require("./types/cosmos/slashing/v1beta1/query");
const tx_1 = require("./types/cosmos/slashing/v1beta1/tx");
const tx_2 = require("./types/cosmos/slashing/v1beta1/tx");
const genesis_1 = require("./types/cosmos/slashing/v1beta1/genesis");
const genesis_2 = require("./types/cosmos/slashing/v1beta1/genesis");
const slashing_2 = require("./types/cosmos/slashing/v1beta1/slashing");
const query_2 = require("./types/cosmos/slashing/v1beta1/query");
const query_3 = require("./types/cosmos/slashing/v1beta1/query");
const genesis_3 = require("./types/cosmos/slashing/v1beta1/genesis");
const query_4 = require("./types/cosmos/slashing/v1beta1/query");
const query_5 = require("./types/cosmos/slashing/v1beta1/query");
const query_6 = require("./types/cosmos/slashing/v1beta1/query");
const tx_3 = require("./types/cosmos/slashing/v1beta1/tx");
const tx_4 = require("./types/cosmos/slashing/v1beta1/tx");
const genesis_4 = require("./types/cosmos/slashing/v1beta1/genesis");
const msgTypes = [
    ["/cosmos.slashing.v1beta1.ValidatorSigningInfo", slashing_1.ValidatorSigningInfo],
    ["/cosmos.slashing.v1beta1.QuerySigningInfosResponse", query_1.QuerySigningInfosResponse],
    ["/cosmos.slashing.v1beta1.MsgUnjailResponse", tx_1.MsgUnjailResponse],
    ["/cosmos.slashing.v1beta1.MsgUpdateParamsResponse", tx_2.MsgUpdateParamsResponse],
    ["/cosmos.slashing.v1beta1.ValidatorMissedBlocks", genesis_1.ValidatorMissedBlocks],
    ["/cosmos.slashing.v1beta1.MissedBlock", genesis_2.MissedBlock],
    ["/cosmos.slashing.v1beta1.Params", slashing_2.Params],
    ["/cosmos.slashing.v1beta1.QueryParamsResponse", query_2.QueryParamsResponse],
    ["/cosmos.slashing.v1beta1.QuerySigningInfosRequest", query_3.QuerySigningInfosRequest],
    ["/cosmos.slashing.v1beta1.SigningInfo", genesis_3.SigningInfo],
    ["/cosmos.slashing.v1beta1.QueryParamsRequest", query_4.QueryParamsRequest],
    ["/cosmos.slashing.v1beta1.QuerySigningInfoRequest", query_5.QuerySigningInfoRequest],
    ["/cosmos.slashing.v1beta1.QuerySigningInfoResponse", query_6.QuerySigningInfoResponse],
    ["/cosmos.slashing.v1beta1.MsgUnjail", tx_3.MsgUnjail],
    ["/cosmos.slashing.v1beta1.MsgUpdateParams", tx_4.MsgUpdateParams],
    ["/cosmos.slashing.v1beta1.GenesisState", genesis_4.GenesisState],
];
exports.msgTypes = msgTypes;
