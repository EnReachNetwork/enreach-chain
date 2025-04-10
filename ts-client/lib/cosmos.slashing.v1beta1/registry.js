"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/cosmos/slashing/v1beta1/tx");
const genesis_1 = require("./types/cosmos/slashing/v1beta1/genesis");
const slashing_1 = require("./types/cosmos/slashing/v1beta1/slashing");
const query_1 = require("./types/cosmos/slashing/v1beta1/query");
const query_2 = require("./types/cosmos/slashing/v1beta1/query");
const genesis_2 = require("./types/cosmos/slashing/v1beta1/genesis");
const genesis_3 = require("./types/cosmos/slashing/v1beta1/genesis");
const query_3 = require("./types/cosmos/slashing/v1beta1/query");
const query_4 = require("./types/cosmos/slashing/v1beta1/query");
const tx_2 = require("./types/cosmos/slashing/v1beta1/tx");
const slashing_2 = require("./types/cosmos/slashing/v1beta1/slashing");
const query_5 = require("./types/cosmos/slashing/v1beta1/query");
const tx_3 = require("./types/cosmos/slashing/v1beta1/tx");
const tx_4 = require("./types/cosmos/slashing/v1beta1/tx");
const genesis_4 = require("./types/cosmos/slashing/v1beta1/genesis");
const query_6 = require("./types/cosmos/slashing/v1beta1/query");
const msgTypes = [
    ["/cosmos.slashing.v1beta1.MsgUpdateParams", tx_1.MsgUpdateParams],
    ["/cosmos.slashing.v1beta1.MissedBlock", genesis_1.MissedBlock],
    ["/cosmos.slashing.v1beta1.ValidatorSigningInfo", slashing_1.ValidatorSigningInfo],
    ["/cosmos.slashing.v1beta1.QuerySigningInfosRequest", query_1.QuerySigningInfosRequest],
    ["/cosmos.slashing.v1beta1.QuerySigningInfosResponse", query_2.QuerySigningInfosResponse],
    ["/cosmos.slashing.v1beta1.GenesisState", genesis_2.GenesisState],
    ["/cosmos.slashing.v1beta1.ValidatorMissedBlocks", genesis_3.ValidatorMissedBlocks],
    ["/cosmos.slashing.v1beta1.QueryParamsRequest", query_3.QueryParamsRequest],
    ["/cosmos.slashing.v1beta1.QuerySigningInfoRequest", query_4.QuerySigningInfoRequest],
    ["/cosmos.slashing.v1beta1.MsgUnjailResponse", tx_2.MsgUnjailResponse],
    ["/cosmos.slashing.v1beta1.Params", slashing_2.Params],
    ["/cosmos.slashing.v1beta1.QuerySigningInfoResponse", query_5.QuerySigningInfoResponse],
    ["/cosmos.slashing.v1beta1.MsgUnjail", tx_3.MsgUnjail],
    ["/cosmos.slashing.v1beta1.MsgUpdateParamsResponse", tx_4.MsgUpdateParamsResponse],
    ["/cosmos.slashing.v1beta1.SigningInfo", genesis_4.SigningInfo],
    ["/cosmos.slashing.v1beta1.QueryParamsResponse", query_6.QueryParamsResponse],
];
exports.msgTypes = msgTypes;
