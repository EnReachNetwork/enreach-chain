"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const slashing_1 = require("./types/cosmos/slashing/v1beta1/slashing");
const query_1 = require("./types/cosmos/slashing/v1beta1/query");
const query_2 = require("./types/cosmos/slashing/v1beta1/query");
const genesis_1 = require("./types/cosmos/slashing/v1beta1/genesis");
const query_3 = require("./types/cosmos/slashing/v1beta1/query");
const query_4 = require("./types/cosmos/slashing/v1beta1/query");
const query_5 = require("./types/cosmos/slashing/v1beta1/query");
const tx_1 = require("./types/cosmos/slashing/v1beta1/tx");
const tx_2 = require("./types/cosmos/slashing/v1beta1/tx");
const tx_3 = require("./types/cosmos/slashing/v1beta1/tx");
const genesis_2 = require("./types/cosmos/slashing/v1beta1/genesis");
const query_6 = require("./types/cosmos/slashing/v1beta1/query");
const slashing_2 = require("./types/cosmos/slashing/v1beta1/slashing");
const tx_4 = require("./types/cosmos/slashing/v1beta1/tx");
const genesis_3 = require("./types/cosmos/slashing/v1beta1/genesis");
const genesis_4 = require("./types/cosmos/slashing/v1beta1/genesis");
const msgTypes = [
    ["/cosmos.slashing.v1beta1.Params", slashing_1.Params],
    ["/cosmos.slashing.v1beta1.QueryParamsRequest", query_1.QueryParamsRequest],
    ["/cosmos.slashing.v1beta1.QuerySigningInfoResponse", query_2.QuerySigningInfoResponse],
    ["/cosmos.slashing.v1beta1.SigningInfo", genesis_1.SigningInfo],
    ["/cosmos.slashing.v1beta1.QueryParamsResponse", query_3.QueryParamsResponse],
    ["/cosmos.slashing.v1beta1.QuerySigningInfosRequest", query_4.QuerySigningInfosRequest],
    ["/cosmos.slashing.v1beta1.QuerySigningInfosResponse", query_5.QuerySigningInfosResponse],
    ["/cosmos.slashing.v1beta1.MsgUnjailResponse", tx_1.MsgUnjailResponse],
    ["/cosmos.slashing.v1beta1.MsgUpdateParams", tx_2.MsgUpdateParams],
    ["/cosmos.slashing.v1beta1.MsgUpdateParamsResponse", tx_3.MsgUpdateParamsResponse],
    ["/cosmos.slashing.v1beta1.MissedBlock", genesis_2.MissedBlock],
    ["/cosmos.slashing.v1beta1.QuerySigningInfoRequest", query_6.QuerySigningInfoRequest],
    ["/cosmos.slashing.v1beta1.ValidatorSigningInfo", slashing_2.ValidatorSigningInfo],
    ["/cosmos.slashing.v1beta1.MsgUnjail", tx_4.MsgUnjail],
    ["/cosmos.slashing.v1beta1.GenesisState", genesis_3.GenesisState],
    ["/cosmos.slashing.v1beta1.ValidatorMissedBlocks", genesis_4.ValidatorMissedBlocks],
];
exports.msgTypes = msgTypes;
