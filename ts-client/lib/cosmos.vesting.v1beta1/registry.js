"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const vesting_1 = require("./types/cosmos/vesting/v1beta1/vesting");
const vesting_2 = require("./types/cosmos/vesting/v1beta1/vesting");
const tx_1 = require("./types/cosmos/vesting/v1beta1/tx");
const tx_2 = require("./types/cosmos/vesting/v1beta1/tx");
const vesting_3 = require("./types/cosmos/vesting/v1beta1/vesting");
const vesting_4 = require("./types/cosmos/vesting/v1beta1/vesting");
const tx_3 = require("./types/cosmos/vesting/v1beta1/tx");
const vesting_5 = require("./types/cosmos/vesting/v1beta1/vesting");
const vesting_6 = require("./types/cosmos/vesting/v1beta1/vesting");
const tx_4 = require("./types/cosmos/vesting/v1beta1/tx");
const tx_5 = require("./types/cosmos/vesting/v1beta1/tx");
const tx_6 = require("./types/cosmos/vesting/v1beta1/tx");
const msgTypes = [
    ["/cosmos.vesting.v1beta1.Period", vesting_1.Period],
    ["/cosmos.vesting.v1beta1.PermanentLockedAccount", vesting_2.PermanentLockedAccount],
    ["/cosmos.vesting.v1beta1.MsgCreateVestingAccount", tx_1.MsgCreateVestingAccount],
    ["/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccountResponse", tx_2.MsgCreatePermanentLockedAccountResponse],
    ["/cosmos.vesting.v1beta1.BaseVestingAccount", vesting_3.BaseVestingAccount],
    ["/cosmos.vesting.v1beta1.ContinuousVestingAccount", vesting_4.ContinuousVestingAccount],
    ["/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount", tx_3.MsgCreatePermanentLockedAccount],
    ["/cosmos.vesting.v1beta1.DelayedVestingAccount", vesting_5.DelayedVestingAccount],
    ["/cosmos.vesting.v1beta1.PeriodicVestingAccount", vesting_6.PeriodicVestingAccount],
    ["/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount", tx_4.MsgCreatePeriodicVestingAccount],
    ["/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccountResponse", tx_5.MsgCreatePeriodicVestingAccountResponse],
    ["/cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse", tx_6.MsgCreateVestingAccountResponse],
];
exports.msgTypes = msgTypes;
