"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/cosmos/vesting/v1beta1/tx");
const vesting_1 = require("./types/cosmos/vesting/v1beta1/vesting");
const vesting_2 = require("./types/cosmos/vesting/v1beta1/vesting");
const vesting_3 = require("./types/cosmos/vesting/v1beta1/vesting");
const tx_2 = require("./types/cosmos/vesting/v1beta1/tx");
const vesting_4 = require("./types/cosmos/vesting/v1beta1/vesting");
const tx_3 = require("./types/cosmos/vesting/v1beta1/tx");
const tx_4 = require("./types/cosmos/vesting/v1beta1/tx");
const tx_5 = require("./types/cosmos/vesting/v1beta1/tx");
const vesting_5 = require("./types/cosmos/vesting/v1beta1/vesting");
const vesting_6 = require("./types/cosmos/vesting/v1beta1/vesting");
const tx_6 = require("./types/cosmos/vesting/v1beta1/tx");
const msgTypes = [
    ["/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccountResponse", tx_1.MsgCreatePermanentLockedAccountResponse],
    ["/cosmos.vesting.v1beta1.ContinuousVestingAccount", vesting_1.ContinuousVestingAccount],
    ["/cosmos.vesting.v1beta1.PermanentLockedAccount", vesting_2.PermanentLockedAccount],
    ["/cosmos.vesting.v1beta1.Period", vesting_3.Period],
    ["/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount", tx_2.MsgCreatePermanentLockedAccount],
    ["/cosmos.vesting.v1beta1.DelayedVestingAccount", vesting_4.DelayedVestingAccount],
    ["/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount", tx_3.MsgCreatePeriodicVestingAccount],
    ["/cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse", tx_4.MsgCreateVestingAccountResponse],
    ["/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccountResponse", tx_5.MsgCreatePeriodicVestingAccountResponse],
    ["/cosmos.vesting.v1beta1.BaseVestingAccount", vesting_5.BaseVestingAccount],
    ["/cosmos.vesting.v1beta1.PeriodicVestingAccount", vesting_6.PeriodicVestingAccount],
    ["/cosmos.vesting.v1beta1.MsgCreateVestingAccount", tx_6.MsgCreateVestingAccount],
];
exports.msgTypes = msgTypes;
