"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/cosmos/crisis/v1beta1/tx");
const tx_2 = require("./types/cosmos/crisis/v1beta1/tx");
const tx_3 = require("./types/cosmos/crisis/v1beta1/tx");
const genesis_1 = require("./types/cosmos/crisis/v1beta1/genesis");
const tx_4 = require("./types/cosmos/crisis/v1beta1/tx");
const msgTypes = [
    ["/cosmos.crisis.v1beta1.MsgVerifyInvariantResponse", tx_1.MsgVerifyInvariantResponse],
    ["/cosmos.crisis.v1beta1.MsgUpdateParams", tx_2.MsgUpdateParams],
    ["/cosmos.crisis.v1beta1.MsgUpdateParamsResponse", tx_3.MsgUpdateParamsResponse],
    ["/cosmos.crisis.v1beta1.GenesisState", genesis_1.GenesisState],
    ["/cosmos.crisis.v1beta1.MsgVerifyInvariant", tx_4.MsgVerifyInvariant],
];
exports.msgTypes = msgTypes;
