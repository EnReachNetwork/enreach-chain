"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/cosmos/vesting/v1beta1/tx");
const vesting_1 = require("./types/cosmos/vesting/v1beta1/vesting");
const tx_2 = require("./types/cosmos/vesting/v1beta1/tx");
const vesting_2 = require("./types/cosmos/vesting/v1beta1/vesting");
const tx_3 = require("./types/cosmos/vesting/v1beta1/tx");
const tx_4 = require("./types/cosmos/vesting/v1beta1/tx");
const vesting_3 = require("./types/cosmos/vesting/v1beta1/vesting");
const vesting_4 = require("./types/cosmos/vesting/v1beta1/vesting");
const vesting_5 = require("./types/cosmos/vesting/v1beta1/vesting");
const vesting_6 = require("./types/cosmos/vesting/v1beta1/vesting");
const tx_5 = require("./types/cosmos/vesting/v1beta1/tx");
const tx_6 = require("./types/cosmos/vesting/v1beta1/tx");
const msgTypes = [
    ["/cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse", tx_1.MsgCreateVestingAccountResponse],
    ["/cosmos.vesting.v1beta1.DelayedVestingAccount", vesting_1.DelayedVestingAccount],
    ["/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccountResponse", tx_2.MsgCreatePermanentLockedAccountResponse],
    ["/cosmos.vesting.v1beta1.ContinuousVestingAccount", vesting_2.ContinuousVestingAccount],
    ["/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount", tx_3.MsgCreatePermanentLockedAccount],
    ["/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccountResponse", tx_4.MsgCreatePeriodicVestingAccountResponse],
    ["/cosmos.vesting.v1beta1.Period", vesting_3.Period],
    ["/cosmos.vesting.v1beta1.BaseVestingAccount", vesting_4.BaseVestingAccount],
    ["/cosmos.vesting.v1beta1.PeriodicVestingAccount", vesting_5.PeriodicVestingAccount],
    ["/cosmos.vesting.v1beta1.PermanentLockedAccount", vesting_6.PermanentLockedAccount],
    ["/cosmos.vesting.v1beta1.MsgCreateVestingAccount", tx_5.MsgCreateVestingAccount],
    ["/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount", tx_6.MsgCreatePeriodicVestingAccount],
];
exports.msgTypes = msgTypes;
