"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/cosmos/crisis/v1beta1/tx");
const tx_2 = require("./types/cosmos/crisis/v1beta1/tx");
const tx_3 = require("./types/cosmos/crisis/v1beta1/tx");
const tx_4 = require("./types/cosmos/crisis/v1beta1/tx");
const genesis_1 = require("./types/cosmos/crisis/v1beta1/genesis");
const msgTypes = [
    ["/cosmos.crisis.v1beta1.MsgVerifyInvariant", tx_1.MsgVerifyInvariant],
    ["/cosmos.crisis.v1beta1.MsgVerifyInvariantResponse", tx_2.MsgVerifyInvariantResponse],
    ["/cosmos.crisis.v1beta1.MsgUpdateParams", tx_3.MsgUpdateParams],
    ["/cosmos.crisis.v1beta1.MsgUpdateParamsResponse", tx_4.MsgUpdateParamsResponse],
    ["/cosmos.crisis.v1beta1.GenesisState", genesis_1.GenesisState],
];
exports.msgTypes = msgTypes;
