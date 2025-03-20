"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/cosmos/slashing/v1beta1/tx");
const genesis_1 = require("./types/cosmos/slashing/v1beta1/genesis");
const slashing_1 = require("./types/cosmos/slashing/v1beta1/slashing");
const slashing_2 = require("./types/cosmos/slashing/v1beta1/slashing");
const query_1 = require("./types/cosmos/slashing/v1beta1/query");
const query_2 = require("./types/cosmos/slashing/v1beta1/query");
const query_3 = require("./types/cosmos/slashing/v1beta1/query");
const genesis_2 = require("./types/cosmos/slashing/v1beta1/genesis");
const genesis_3 = require("./types/cosmos/slashing/v1beta1/genesis");
const genesis_4 = require("./types/cosmos/slashing/v1beta1/genesis");
const query_4 = require("./types/cosmos/slashing/v1beta1/query");
const tx_2 = require("./types/cosmos/slashing/v1beta1/tx");
const tx_3 = require("./types/cosmos/slashing/v1beta1/tx");
const tx_4 = require("./types/cosmos/slashing/v1beta1/tx");
const query_5 = require("./types/cosmos/slashing/v1beta1/query");
const query_6 = require("./types/cosmos/slashing/v1beta1/query");
const msgTypes = [
    ["/cosmos.slashing.v1beta1.MsgUpdateParams", tx_1.MsgUpdateParams],
    ["/cosmos.slashing.v1beta1.GenesisState", genesis_1.GenesisState],
    ["/cosmos.slashing.v1beta1.Params", slashing_1.Params],
    ["/cosmos.slashing.v1beta1.ValidatorSigningInfo", slashing_2.ValidatorSigningInfo],
    ["/cosmos.slashing.v1beta1.QueryParamsRequest", query_1.QueryParamsRequest],
    ["/cosmos.slashing.v1beta1.QuerySigningInfoRequest", query_2.QuerySigningInfoRequest],
    ["/cosmos.slashing.v1beta1.QuerySigningInfoResponse", query_3.QuerySigningInfoResponse],
    ["/cosmos.slashing.v1beta1.SigningInfo", genesis_2.SigningInfo],
    ["/cosmos.slashing.v1beta1.MissedBlock", genesis_3.MissedBlock],
    ["/cosmos.slashing.v1beta1.ValidatorMissedBlocks", genesis_4.ValidatorMissedBlocks],
    ["/cosmos.slashing.v1beta1.QuerySigningInfosResponse", query_4.QuerySigningInfosResponse],
    ["/cosmos.slashing.v1beta1.MsgUnjail", tx_2.MsgUnjail],
    ["/cosmos.slashing.v1beta1.MsgUnjailResponse", tx_3.MsgUnjailResponse],
    ["/cosmos.slashing.v1beta1.MsgUpdateParamsResponse", tx_4.MsgUpdateParamsResponse],
    ["/cosmos.slashing.v1beta1.QueryParamsResponse", query_5.QueryParamsResponse],
    ["/cosmos.slashing.v1beta1.QuerySigningInfosRequest", query_6.QuerySigningInfosRequest],
];
exports.msgTypes = msgTypes;
