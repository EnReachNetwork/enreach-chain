"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const distribution_1 = require("./types/cosmos/distribution/v1beta1/distribution");
const tx_1 = require("./types/cosmos/distribution/v1beta1/tx");
const query_1 = require("./types/cosmos/distribution/v1beta1/query");
const genesis_1 = require("./types/cosmos/distribution/v1beta1/genesis");
const distribution_2 = require("./types/cosmos/distribution/v1beta1/distribution");
const distribution_3 = require("./types/cosmos/distribution/v1beta1/distribution");
const tx_2 = require("./types/cosmos/distribution/v1beta1/tx");
const query_2 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_4 = require("./types/cosmos/distribution/v1beta1/distribution");
const distribution_5 = require("./types/cosmos/distribution/v1beta1/distribution");
const distribution_6 = require("./types/cosmos/distribution/v1beta1/distribution");
const query_3 = require("./types/cosmos/distribution/v1beta1/query");
const query_4 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_7 = require("./types/cosmos/distribution/v1beta1/distribution");
const tx_3 = require("./types/cosmos/distribution/v1beta1/tx");
const query_5 = require("./types/cosmos/distribution/v1beta1/query");
const query_6 = require("./types/cosmos/distribution/v1beta1/query");
const genesis_2 = require("./types/cosmos/distribution/v1beta1/genesis");
const tx_4 = require("./types/cosmos/distribution/v1beta1/tx");
const genesis_3 = require("./types/cosmos/distribution/v1beta1/genesis");
const tx_5 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_6 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_7 = require("./types/cosmos/distribution/v1beta1/tx");
const distribution_8 = require("./types/cosmos/distribution/v1beta1/distribution");
const query_7 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_9 = require("./types/cosmos/distribution/v1beta1/distribution");
const tx_8 = require("./types/cosmos/distribution/v1beta1/tx");
const query_8 = require("./types/cosmos/distribution/v1beta1/query");
const query_9 = require("./types/cosmos/distribution/v1beta1/query");
const query_10 = require("./types/cosmos/distribution/v1beta1/query");
const genesis_4 = require("./types/cosmos/distribution/v1beta1/genesis");
const distribution_10 = require("./types/cosmos/distribution/v1beta1/distribution");
const distribution_11 = require("./types/cosmos/distribution/v1beta1/distribution");
const query_11 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_12 = require("./types/cosmos/distribution/v1beta1/distribution");
const tx_9 = require("./types/cosmos/distribution/v1beta1/tx");
const query_12 = require("./types/cosmos/distribution/v1beta1/query");
const query_13 = require("./types/cosmos/distribution/v1beta1/query");
const query_14 = require("./types/cosmos/distribution/v1beta1/query");
const tx_10 = require("./types/cosmos/distribution/v1beta1/tx");
const query_15 = require("./types/cosmos/distribution/v1beta1/query");
const genesis_5 = require("./types/cosmos/distribution/v1beta1/genesis");
const query_16 = require("./types/cosmos/distribution/v1beta1/query");
const genesis_6 = require("./types/cosmos/distribution/v1beta1/genesis");
const tx_11 = require("./types/cosmos/distribution/v1beta1/tx");
const query_17 = require("./types/cosmos/distribution/v1beta1/query");
const query_18 = require("./types/cosmos/distribution/v1beta1/query");
const query_19 = require("./types/cosmos/distribution/v1beta1/query");
const query_20 = require("./types/cosmos/distribution/v1beta1/query");
const genesis_7 = require("./types/cosmos/distribution/v1beta1/genesis");
const tx_12 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_13 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_14 = require("./types/cosmos/distribution/v1beta1/tx");
const genesis_8 = require("./types/cosmos/distribution/v1beta1/genesis");
const msgTypes = [
    ["/cosmos.distribution.v1beta1.FeePool", distribution_1.FeePool],
    ["/cosmos.distribution.v1beta1.MsgSetWithdrawAddress", tx_1.MsgSetWithdrawAddress],
    ["/cosmos.distribution.v1beta1.QueryParamsResponse", query_1.QueryParamsResponse],
    ["/cosmos.distribution.v1beta1.ValidatorAccumulatedCommissionRecord", genesis_1.ValidatorAccumulatedCommissionRecord],
    ["/cosmos.distribution.v1beta1.ValidatorSlashEvent", distribution_2.ValidatorSlashEvent],
    ["/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit", distribution_3.CommunityPoolSpendProposalWithDeposit],
    ["/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPoolResponse", tx_2.MsgDepositValidatorRewardsPoolResponse],
    ["/cosmos.distribution.v1beta1.QueryValidatorDistributionInfoResponse", query_2.QueryValidatorDistributionInfoResponse],
    ["/cosmos.distribution.v1beta1.ValidatorCurrentRewards", distribution_4.ValidatorCurrentRewards],
    ["/cosmos.distribution.v1beta1.ValidatorAccumulatedCommission", distribution_5.ValidatorAccumulatedCommission],
    ["/cosmos.distribution.v1beta1.DelegatorStartingInfo", distribution_6.DelegatorStartingInfo],
    ["/cosmos.distribution.v1beta1.QueryValidatorCommissionResponse", query_3.QueryValidatorCommissionResponse],
    ["/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressRequest", query_4.QueryDelegatorWithdrawAddressRequest],
    ["/cosmos.distribution.v1beta1.ValidatorOutstandingRewards", distribution_7.ValidatorOutstandingRewards],
    ["/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPool", tx_3.MsgDepositValidatorRewardsPool],
    ["/cosmos.distribution.v1beta1.QueryValidatorSlashesResponse", query_5.QueryValidatorSlashesResponse],
    ["/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse", query_6.QueryDelegationTotalRewardsResponse],
    ["/cosmos.distribution.v1beta1.DelegatorWithdrawInfo", genesis_2.DelegatorWithdrawInfo],
    ["/cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse", tx_4.MsgSetWithdrawAddressResponse],
    ["/cosmos.distribution.v1beta1.GenesisState", genesis_3.GenesisState],
    ["/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse", tx_5.MsgWithdrawValidatorCommissionResponse],
    ["/cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse", tx_6.MsgFundCommunityPoolResponse],
    ["/cosmos.distribution.v1beta1.MsgCommunityPoolSpend", tx_7.MsgCommunityPoolSpend],
    ["/cosmos.distribution.v1beta1.DelegationDelegatorReward", distribution_8.DelegationDelegatorReward],
    ["/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsRequest", query_7.QueryDelegationTotalRewardsRequest],
    ["/cosmos.distribution.v1beta1.Params", distribution_9.Params],
    ["/cosmos.distribution.v1beta1.MsgCommunityPoolSpendResponse", tx_8.MsgCommunityPoolSpendResponse],
    ["/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsRequest", query_8.QueryValidatorOutstandingRewardsRequest],
    ["/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse", query_9.QueryValidatorOutstandingRewardsResponse],
    ["/cosmos.distribution.v1beta1.QueryDelegationRewardsRequest", query_10.QueryDelegationRewardsRequest],
    ["/cosmos.distribution.v1beta1.ValidatorOutstandingRewardsRecord", genesis_4.ValidatorOutstandingRewardsRecord],
    ["/cosmos.distribution.v1beta1.CommunityPoolSpendProposal", distribution_10.CommunityPoolSpendProposal],
    ["/cosmos.distribution.v1beta1.ValidatorHistoricalRewards", distribution_11.ValidatorHistoricalRewards],
    ["/cosmos.distribution.v1beta1.QueryValidatorDistributionInfoRequest", query_11.QueryValidatorDistributionInfoRequest],
    ["/cosmos.distribution.v1beta1.ValidatorSlashEvents", distribution_12.ValidatorSlashEvents],
    ["/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission", tx_9.MsgWithdrawValidatorCommission],
    ["/cosmos.distribution.v1beta1.QueryDelegatorValidatorsResponse", query_12.QueryDelegatorValidatorsResponse],
    ["/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressResponse", query_13.QueryDelegatorWithdrawAddressResponse],
    ["/cosmos.distribution.v1beta1.QueryCommunityPoolResponse", query_14.QueryCommunityPoolResponse],
    ["/cosmos.distribution.v1beta1.MsgUpdateParams", tx_10.MsgUpdateParams],
    ["/cosmos.distribution.v1beta1.QueryParamsRequest", query_15.QueryParamsRequest],
    ["/cosmos.distribution.v1beta1.DelegatorStartingInfoRecord", genesis_5.DelegatorStartingInfoRecord],
    ["/cosmos.distribution.v1beta1.QueryDelegatorValidatorsRequest", query_16.QueryDelegatorValidatorsRequest],
    ["/cosmos.distribution.v1beta1.ValidatorHistoricalRewardsRecord", genesis_6.ValidatorHistoricalRewardsRecord],
    ["/cosmos.distribution.v1beta1.MsgUpdateParamsResponse", tx_11.MsgUpdateParamsResponse],
    ["/cosmos.distribution.v1beta1.QueryDelegationRewardsResponse", query_17.QueryDelegationRewardsResponse],
    ["/cosmos.distribution.v1beta1.QueryValidatorCommissionRequest", query_18.QueryValidatorCommissionRequest],
    ["/cosmos.distribution.v1beta1.QueryValidatorSlashesRequest", query_19.QueryValidatorSlashesRequest],
    ["/cosmos.distribution.v1beta1.QueryCommunityPoolRequest", query_20.QueryCommunityPoolRequest],
    ["/cosmos.distribution.v1beta1.ValidatorCurrentRewardsRecord", genesis_7.ValidatorCurrentRewardsRecord],
    ["/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward", tx_12.MsgWithdrawDelegatorReward],
    ["/cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse", tx_13.MsgWithdrawDelegatorRewardResponse],
    ["/cosmos.distribution.v1beta1.MsgFundCommunityPool", tx_14.MsgFundCommunityPool],
    ["/cosmos.distribution.v1beta1.ValidatorSlashEventRecord", genesis_8.ValidatorSlashEventRecord],
];
exports.msgTypes = msgTypes;
