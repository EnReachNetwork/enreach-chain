"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const query_1 = require("./types/cosmos/upgrade/v1beta1/query");
const query_2 = require("./types/cosmos/upgrade/v1beta1/query");
const query_3 = require("./types/cosmos/upgrade/v1beta1/query");
const upgrade_1 = require("./types/cosmos/upgrade/v1beta1/upgrade");
const upgrade_2 = require("./types/cosmos/upgrade/v1beta1/upgrade");
const query_4 = require("./types/cosmos/upgrade/v1beta1/query");
const query_5 = require("./types/cosmos/upgrade/v1beta1/query");
const tx_1 = require("./types/cosmos/upgrade/v1beta1/tx");
const tx_2 = require("./types/cosmos/upgrade/v1beta1/tx");
const upgrade_3 = require("./types/cosmos/upgrade/v1beta1/upgrade");
const query_6 = require("./types/cosmos/upgrade/v1beta1/query");
const query_7 = require("./types/cosmos/upgrade/v1beta1/query");
const query_8 = require("./types/cosmos/upgrade/v1beta1/query");
const tx_3 = require("./types/cosmos/upgrade/v1beta1/tx");
const upgrade_4 = require("./types/cosmos/upgrade/v1beta1/upgrade");
const query_9 = require("./types/cosmos/upgrade/v1beta1/query");
const query_10 = require("./types/cosmos/upgrade/v1beta1/query");
const tx_4 = require("./types/cosmos/upgrade/v1beta1/tx");
const msgTypes = [
    ["/cosmos.upgrade.v1beta1.QueryCurrentPlanRequest", query_1.QueryCurrentPlanRequest],
    ["/cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateResponse", query_2.QueryUpgradedConsensusStateResponse],
    ["/cosmos.upgrade.v1beta1.QueryAuthorityRequest", query_3.QueryAuthorityRequest],
    ["/cosmos.upgrade.v1beta1.Plan", upgrade_1.Plan],
    ["/cosmos.upgrade.v1beta1.ModuleVersion", upgrade_2.ModuleVersion],
    ["/cosmos.upgrade.v1beta1.QueryCurrentPlanResponse", query_4.QueryCurrentPlanResponse],
    ["/cosmos.upgrade.v1beta1.QueryModuleVersionsRequest", query_5.QueryModuleVersionsRequest],
    ["/cosmos.upgrade.v1beta1.MsgCancelUpgrade", tx_1.MsgCancelUpgrade],
    ["/cosmos.upgrade.v1beta1.MsgSoftwareUpgradeResponse", tx_2.MsgSoftwareUpgradeResponse],
    ["/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal", upgrade_3.CancelSoftwareUpgradeProposal],
    ["/cosmos.upgrade.v1beta1.QueryAppliedPlanResponse", query_6.QueryAppliedPlanResponse],
    ["/cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateRequest", query_7.QueryUpgradedConsensusStateRequest],
    ["/cosmos.upgrade.v1beta1.QueryAuthorityResponse", query_8.QueryAuthorityResponse],
    ["/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade", tx_3.MsgSoftwareUpgrade],
    ["/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal", upgrade_4.SoftwareUpgradeProposal],
    ["/cosmos.upgrade.v1beta1.QueryAppliedPlanRequest", query_9.QueryAppliedPlanRequest],
    ["/cosmos.upgrade.v1beta1.QueryModuleVersionsResponse", query_10.QueryModuleVersionsResponse],
    ["/cosmos.upgrade.v1beta1.MsgCancelUpgradeResponse", tx_4.MsgCancelUpgradeResponse],
];
exports.msgTypes = msgTypes;
