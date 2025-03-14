"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const query_1 = require("./types/cosmos/upgrade/v1beta1/query");
const query_2 = require("./types/cosmos/upgrade/v1beta1/query");
const upgrade_1 = require("./types/cosmos/upgrade/v1beta1/upgrade");
const query_3 = require("./types/cosmos/upgrade/v1beta1/query");
const query_4 = require("./types/cosmos/upgrade/v1beta1/query");
const upgrade_2 = require("./types/cosmos/upgrade/v1beta1/upgrade");
const tx_1 = require("./types/cosmos/upgrade/v1beta1/tx");
const query_5 = require("./types/cosmos/upgrade/v1beta1/query");
const tx_2 = require("./types/cosmos/upgrade/v1beta1/tx");
const upgrade_3 = require("./types/cosmos/upgrade/v1beta1/upgrade");
const upgrade_4 = require("./types/cosmos/upgrade/v1beta1/upgrade");
const query_6 = require("./types/cosmos/upgrade/v1beta1/query");
const query_7 = require("./types/cosmos/upgrade/v1beta1/query");
const tx_3 = require("./types/cosmos/upgrade/v1beta1/tx");
const tx_4 = require("./types/cosmos/upgrade/v1beta1/tx");
const query_8 = require("./types/cosmos/upgrade/v1beta1/query");
const query_9 = require("./types/cosmos/upgrade/v1beta1/query");
const query_10 = require("./types/cosmos/upgrade/v1beta1/query");
const msgTypes = [
    ["/cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateResponse", query_1.QueryUpgradedConsensusStateResponse],
    ["/cosmos.upgrade.v1beta1.QueryAuthorityResponse", query_2.QueryAuthorityResponse],
    ["/cosmos.upgrade.v1beta1.Plan", upgrade_1.Plan],
    ["/cosmos.upgrade.v1beta1.QueryAppliedPlanRequest", query_3.QueryAppliedPlanRequest],
    ["/cosmos.upgrade.v1beta1.QueryAppliedPlanResponse", query_4.QueryAppliedPlanResponse],
    ["/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal", upgrade_2.CancelSoftwareUpgradeProposal],
    ["/cosmos.upgrade.v1beta1.MsgSoftwareUpgradeResponse", tx_1.MsgSoftwareUpgradeResponse],
    ["/cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateRequest", query_5.QueryUpgradedConsensusStateRequest],
    ["/cosmos.upgrade.v1beta1.MsgCancelUpgradeResponse", tx_2.MsgCancelUpgradeResponse],
    ["/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal", upgrade_3.SoftwareUpgradeProposal],
    ["/cosmos.upgrade.v1beta1.ModuleVersion", upgrade_4.ModuleVersion],
    ["/cosmos.upgrade.v1beta1.QueryCurrentPlanResponse", query_6.QueryCurrentPlanResponse],
    ["/cosmos.upgrade.v1beta1.QueryAuthorityRequest", query_7.QueryAuthorityRequest],
    ["/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade", tx_3.MsgSoftwareUpgrade],
    ["/cosmos.upgrade.v1beta1.MsgCancelUpgrade", tx_4.MsgCancelUpgrade],
    ["/cosmos.upgrade.v1beta1.QueryCurrentPlanRequest", query_8.QueryCurrentPlanRequest],
    ["/cosmos.upgrade.v1beta1.QueryModuleVersionsRequest", query_9.QueryModuleVersionsRequest],
    ["/cosmos.upgrade.v1beta1.QueryModuleVersionsResponse", query_10.QueryModuleVersionsResponse],
];
exports.msgTypes = msgTypes;
