"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/cosmos/slashing/v1beta1/tx");
const tx_2 = require("./types/cosmos/slashing/v1beta1/tx");
const tx_3 = require("./types/cosmos/slashing/v1beta1/tx");
const query_1 = require("./types/cosmos/slashing/v1beta1/query");
const query_2 = require("./types/cosmos/slashing/v1beta1/query");
const query_3 = require("./types/cosmos/slashing/v1beta1/query");
const query_4 = require("./types/cosmos/slashing/v1beta1/query");
const query_5 = require("./types/cosmos/slashing/v1beta1/query");
const slashing_1 = require("./types/cosmos/slashing/v1beta1/slashing");
const genesis_1 = require("./types/cosmos/slashing/v1beta1/genesis");
const genesis_2 = require("./types/cosmos/slashing/v1beta1/genesis");
const genesis_3 = require("./types/cosmos/slashing/v1beta1/genesis");
const query_6 = require("./types/cosmos/slashing/v1beta1/query");
const slashing_2 = require("./types/cosmos/slashing/v1beta1/slashing");
const tx_4 = require("./types/cosmos/slashing/v1beta1/tx");
const genesis_4 = require("./types/cosmos/slashing/v1beta1/genesis");
const msgTypes = [
    ["/cosmos.slashing.v1beta1.MsgUnjailResponse", tx_1.MsgUnjailResponse],
    ["/cosmos.slashing.v1beta1.MsgUnjail", tx_2.MsgUnjail],
    ["/cosmos.slashing.v1beta1.MsgUpdateParams", tx_3.MsgUpdateParams],
    ["/cosmos.slashing.v1beta1.QueryParamsResponse", query_1.QueryParamsResponse],
    ["/cosmos.slashing.v1beta1.QuerySigningInfoRequest", query_2.QuerySigningInfoRequest],
    ["/cosmos.slashing.v1beta1.QuerySigningInfoResponse", query_3.QuerySigningInfoResponse],
    ["/cosmos.slashing.v1beta1.QuerySigningInfosRequest", query_4.QuerySigningInfosRequest],
    ["/cosmos.slashing.v1beta1.QuerySigningInfosResponse", query_5.QuerySigningInfosResponse],
    ["/cosmos.slashing.v1beta1.ValidatorSigningInfo", slashing_1.ValidatorSigningInfo],
    ["/cosmos.slashing.v1beta1.GenesisState", genesis_1.GenesisState],
    ["/cosmos.slashing.v1beta1.SigningInfo", genesis_2.SigningInfo],
    ["/cosmos.slashing.v1beta1.ValidatorMissedBlocks", genesis_3.ValidatorMissedBlocks],
    ["/cosmos.slashing.v1beta1.QueryParamsRequest", query_6.QueryParamsRequest],
    ["/cosmos.slashing.v1beta1.Params", slashing_2.Params],
    ["/cosmos.slashing.v1beta1.MsgUpdateParamsResponse", tx_4.MsgUpdateParamsResponse],
    ["/cosmos.slashing.v1beta1.MissedBlock", genesis_4.MissedBlock],
];
exports.msgTypes = msgTypes;
