"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const query_1 = require("./types/cosmos/upgrade/v1beta1/query");
const tx_1 = require("./types/cosmos/upgrade/v1beta1/tx");
const tx_2 = require("./types/cosmos/upgrade/v1beta1/tx");
const upgrade_1 = require("./types/cosmos/upgrade/v1beta1/upgrade");
const query_2 = require("./types/cosmos/upgrade/v1beta1/query");
const query_3 = require("./types/cosmos/upgrade/v1beta1/query");
const query_4 = require("./types/cosmos/upgrade/v1beta1/query");
const query_5 = require("./types/cosmos/upgrade/v1beta1/query");
const tx_3 = require("./types/cosmos/upgrade/v1beta1/tx");
const query_6 = require("./types/cosmos/upgrade/v1beta1/query");
const query_7 = require("./types/cosmos/upgrade/v1beta1/query");
const query_8 = require("./types/cosmos/upgrade/v1beta1/query");
const upgrade_2 = require("./types/cosmos/upgrade/v1beta1/upgrade");
const upgrade_3 = require("./types/cosmos/upgrade/v1beta1/upgrade");
const tx_4 = require("./types/cosmos/upgrade/v1beta1/tx");
const query_9 = require("./types/cosmos/upgrade/v1beta1/query");
const query_10 = require("./types/cosmos/upgrade/v1beta1/query");
const upgrade_4 = require("./types/cosmos/upgrade/v1beta1/upgrade");
const msgTypes = [
    ["/cosmos.upgrade.v1beta1.QueryCurrentPlanResponse", query_1.QueryCurrentPlanResponse],
    ["/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade", tx_1.MsgSoftwareUpgrade],
    ["/cosmos.upgrade.v1beta1.MsgCancelUpgrade", tx_2.MsgCancelUpgrade],
    ["/cosmos.upgrade.v1beta1.ModuleVersion", upgrade_1.ModuleVersion],
    ["/cosmos.upgrade.v1beta1.QueryCurrentPlanRequest", query_2.QueryCurrentPlanRequest],
    ["/cosmos.upgrade.v1beta1.QueryAppliedPlanRequest", query_3.QueryAppliedPlanRequest],
    ["/cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateRequest", query_4.QueryUpgradedConsensusStateRequest],
    ["/cosmos.upgrade.v1beta1.QueryModuleVersionsResponse", query_5.QueryModuleVersionsResponse],
    ["/cosmos.upgrade.v1beta1.MsgCancelUpgradeResponse", tx_3.MsgCancelUpgradeResponse],
    ["/cosmos.upgrade.v1beta1.QueryAppliedPlanResponse", query_6.QueryAppliedPlanResponse],
    ["/cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateResponse", query_7.QueryUpgradedConsensusStateResponse],
    ["/cosmos.upgrade.v1beta1.QueryAuthorityRequest", query_8.QueryAuthorityRequest],
    ["/cosmos.upgrade.v1beta1.Plan", upgrade_2.Plan],
    ["/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal", upgrade_3.CancelSoftwareUpgradeProposal],
    ["/cosmos.upgrade.v1beta1.MsgSoftwareUpgradeResponse", tx_4.MsgSoftwareUpgradeResponse],
    ["/cosmos.upgrade.v1beta1.QueryModuleVersionsRequest", query_9.QueryModuleVersionsRequest],
    ["/cosmos.upgrade.v1beta1.QueryAuthorityResponse", query_10.QueryAuthorityResponse],
    ["/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal", upgrade_4.SoftwareUpgradeProposal],
];
exports.msgTypes = msgTypes;
