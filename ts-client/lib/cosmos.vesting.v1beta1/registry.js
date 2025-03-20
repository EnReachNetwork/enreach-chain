"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const vesting_1 = require("./types/cosmos/vesting/v1beta1/vesting");
const vesting_2 = require("./types/cosmos/vesting/v1beta1/vesting");
const tx_1 = require("./types/cosmos/vesting/v1beta1/tx");
const tx_2 = require("./types/cosmos/vesting/v1beta1/tx");
const vesting_3 = require("./types/cosmos/vesting/v1beta1/vesting");
const tx_3 = require("./types/cosmos/vesting/v1beta1/tx");
const tx_4 = require("./types/cosmos/vesting/v1beta1/tx");
const vesting_4 = require("./types/cosmos/vesting/v1beta1/vesting");
const vesting_5 = require("./types/cosmos/vesting/v1beta1/vesting");
const vesting_6 = require("./types/cosmos/vesting/v1beta1/vesting");
const tx_5 = require("./types/cosmos/vesting/v1beta1/tx");
const tx_6 = require("./types/cosmos/vesting/v1beta1/tx");
const msgTypes = [
    ["/cosmos.vesting.v1beta1.DelayedVestingAccount", vesting_1.DelayedVestingAccount],
    ["/cosmos.vesting.v1beta1.PeriodicVestingAccount", vesting_2.PeriodicVestingAccount],
    ["/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccountResponse", tx_1.MsgCreatePeriodicVestingAccountResponse],
    ["/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount", tx_2.MsgCreatePermanentLockedAccount],
    ["/cosmos.vesting.v1beta1.Period", vesting_3.Period],
    ["/cosmos.vesting.v1beta1.MsgCreateVestingAccount", tx_3.MsgCreateVestingAccount],
    ["/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount", tx_4.MsgCreatePeriodicVestingAccount],
    ["/cosmos.vesting.v1beta1.BaseVestingAccount", vesting_4.BaseVestingAccount],
    ["/cosmos.vesting.v1beta1.ContinuousVestingAccount", vesting_5.ContinuousVestingAccount],
    ["/cosmos.vesting.v1beta1.PermanentLockedAccount", vesting_6.PermanentLockedAccount],
    ["/cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse", tx_5.MsgCreateVestingAccountResponse],
    ["/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccountResponse", tx_6.MsgCreatePermanentLockedAccountResponse],
];
exports.msgTypes = msgTypes;
