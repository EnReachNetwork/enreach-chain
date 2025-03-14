"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/cosmos/slashing/v1beta1/tx");
const tx_2 = require("./types/cosmos/slashing/v1beta1/tx");
const genesis_1 = require("./types/cosmos/slashing/v1beta1/genesis");
const genesis_2 = require("./types/cosmos/slashing/v1beta1/genesis");
const query_1 = require("./types/cosmos/slashing/v1beta1/query");
const query_2 = require("./types/cosmos/slashing/v1beta1/query");
const query_3 = require("./types/cosmos/slashing/v1beta1/query");
const slashing_1 = require("./types/cosmos/slashing/v1beta1/slashing");
const query_4 = require("./types/cosmos/slashing/v1beta1/query");
const tx_3 = require("./types/cosmos/slashing/v1beta1/tx");
const tx_4 = require("./types/cosmos/slashing/v1beta1/tx");
const slashing_2 = require("./types/cosmos/slashing/v1beta1/slashing");
const genesis_3 = require("./types/cosmos/slashing/v1beta1/genesis");
const genesis_4 = require("./types/cosmos/slashing/v1beta1/genesis");
const query_5 = require("./types/cosmos/slashing/v1beta1/query");
const query_6 = require("./types/cosmos/slashing/v1beta1/query");
const msgTypes = [
    ["/cosmos.slashing.v1beta1.MsgUpdateParams", tx_1.MsgUpdateParams],
    ["/cosmos.slashing.v1beta1.MsgUpdateParamsResponse", tx_2.MsgUpdateParamsResponse],
    ["/cosmos.slashing.v1beta1.GenesisState", genesis_1.GenesisState],
    ["/cosmos.slashing.v1beta1.SigningInfo", genesis_2.SigningInfo],
    ["/cosmos.slashing.v1beta1.QuerySigningInfoRequest", query_1.QuerySigningInfoRequest],
    ["/cosmos.slashing.v1beta1.QuerySigningInfoResponse", query_2.QuerySigningInfoResponse],
    ["/cosmos.slashing.v1beta1.QuerySigningInfosResponse", query_3.QuerySigningInfosResponse],
    ["/cosmos.slashing.v1beta1.Params", slashing_1.Params],
    ["/cosmos.slashing.v1beta1.QuerySigningInfosRequest", query_4.QuerySigningInfosRequest],
    ["/cosmos.slashing.v1beta1.MsgUnjail", tx_3.MsgUnjail],
    ["/cosmos.slashing.v1beta1.MsgUnjailResponse", tx_4.MsgUnjailResponse],
    ["/cosmos.slashing.v1beta1.ValidatorSigningInfo", slashing_2.ValidatorSigningInfo],
    ["/cosmos.slashing.v1beta1.ValidatorMissedBlocks", genesis_3.ValidatorMissedBlocks],
    ["/cosmos.slashing.v1beta1.MissedBlock", genesis_4.MissedBlock],
    ["/cosmos.slashing.v1beta1.QueryParamsRequest", query_5.QueryParamsRequest],
    ["/cosmos.slashing.v1beta1.QueryParamsResponse", query_6.QueryParamsResponse],
];
exports.msgTypes = msgTypes;
