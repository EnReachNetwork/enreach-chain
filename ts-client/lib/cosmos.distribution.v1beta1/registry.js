"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/cosmos/distribution/v1beta1/tx");
const query_1 = require("./types/cosmos/distribution/v1beta1/query");
const genesis_1 = require("./types/cosmos/distribution/v1beta1/genesis");
const tx_2 = require("./types/cosmos/distribution/v1beta1/tx");
const query_2 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_1 = require("./types/cosmos/distribution/v1beta1/distribution");
const tx_3 = require("./types/cosmos/distribution/v1beta1/tx");
const query_3 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_2 = require("./types/cosmos/distribution/v1beta1/distribution");
const genesis_2 = require("./types/cosmos/distribution/v1beta1/genesis");
const genesis_3 = require("./types/cosmos/distribution/v1beta1/genesis");
const distribution_3 = require("./types/cosmos/distribution/v1beta1/distribution");
const query_4 = require("./types/cosmos/distribution/v1beta1/query");
const query_5 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_4 = require("./types/cosmos/distribution/v1beta1/distribution");
const genesis_4 = require("./types/cosmos/distribution/v1beta1/genesis");
const tx_4 = require("./types/cosmos/distribution/v1beta1/tx");
const query_6 = require("./types/cosmos/distribution/v1beta1/query");
const query_7 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_5 = require("./types/cosmos/distribution/v1beta1/distribution");
const genesis_5 = require("./types/cosmos/distribution/v1beta1/genesis");
const query_8 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_6 = require("./types/cosmos/distribution/v1beta1/distribution");
const genesis_6 = require("./types/cosmos/distribution/v1beta1/genesis");
const tx_5 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_6 = require("./types/cosmos/distribution/v1beta1/tx");
const query_9 = require("./types/cosmos/distribution/v1beta1/query");
const query_10 = require("./types/cosmos/distribution/v1beta1/query");
const tx_7 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_8 = require("./types/cosmos/distribution/v1beta1/tx");
const query_11 = require("./types/cosmos/distribution/v1beta1/query");
const tx_9 = require("./types/cosmos/distribution/v1beta1/tx");
const distribution_7 = require("./types/cosmos/distribution/v1beta1/distribution");
const tx_10 = require("./types/cosmos/distribution/v1beta1/tx");
const distribution_8 = require("./types/cosmos/distribution/v1beta1/distribution");
const genesis_7 = require("./types/cosmos/distribution/v1beta1/genesis");
const genesis_8 = require("./types/cosmos/distribution/v1beta1/genesis");
const tx_11 = require("./types/cosmos/distribution/v1beta1/tx");
const query_12 = require("./types/cosmos/distribution/v1beta1/query");
const query_13 = require("./types/cosmos/distribution/v1beta1/query");
const query_14 = require("./types/cosmos/distribution/v1beta1/query");
const query_15 = require("./types/cosmos/distribution/v1beta1/query");
const query_16 = require("./types/cosmos/distribution/v1beta1/query");
const query_17 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_9 = require("./types/cosmos/distribution/v1beta1/distribution");
const tx_12 = require("./types/cosmos/distribution/v1beta1/tx");
const distribution_10 = require("./types/cosmos/distribution/v1beta1/distribution");
const query_18 = require("./types/cosmos/distribution/v1beta1/query");
const tx_13 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_14 = require("./types/cosmos/distribution/v1beta1/tx");
const query_19 = require("./types/cosmos/distribution/v1beta1/query");
const query_20 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_11 = require("./types/cosmos/distribution/v1beta1/distribution");
const distribution_12 = require("./types/cosmos/distribution/v1beta1/distribution");
const msgTypes = [
    ["/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward", tx_1.MsgWithdrawDelegatorReward],
    ["/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse", query_1.QueryDelegationTotalRewardsResponse],
    ["/cosmos.distribution.v1beta1.ValidatorOutstandingRewardsRecord", genesis_1.ValidatorOutstandingRewardsRecord],
    ["/cosmos.distribution.v1beta1.MsgFundCommunityPool", tx_2.MsgFundCommunityPool],
    ["/cosmos.distribution.v1beta1.QueryDelegationRewardsRequest", query_2.QueryDelegationRewardsRequest],
    ["/cosmos.distribution.v1beta1.ValidatorHistoricalRewards", distribution_1.ValidatorHistoricalRewards],
    ["/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPool", tx_3.MsgDepositValidatorRewardsPool],
    ["/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressResponse", query_3.QueryDelegatorWithdrawAddressResponse],
    ["/cosmos.distribution.v1beta1.ValidatorSlashEvent", distribution_2.ValidatorSlashEvent],
    ["/cosmos.distribution.v1beta1.ValidatorHistoricalRewardsRecord", genesis_2.ValidatorHistoricalRewardsRecord],
    ["/cosmos.distribution.v1beta1.DelegatorStartingInfoRecord", genesis_3.DelegatorStartingInfoRecord],
    ["/cosmos.distribution.v1beta1.Params", distribution_3.Params],
    ["/cosmos.distribution.v1beta1.QueryValidatorCommissionRequest", query_4.QueryValidatorCommissionRequest],
    ["/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressRequest", query_5.QueryDelegatorWithdrawAddressRequest],
    ["/cosmos.distribution.v1beta1.FeePool", distribution_4.FeePool],
    ["/cosmos.distribution.v1beta1.ValidatorCurrentRewardsRecord", genesis_4.ValidatorCurrentRewardsRecord],
    ["/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission", tx_4.MsgWithdrawValidatorCommission],
    ["/cosmos.distribution.v1beta1.QueryParamsRequest", query_6.QueryParamsRequest],
    ["/cosmos.distribution.v1beta1.QueryValidatorDistributionInfoResponse", query_7.QueryValidatorDistributionInfoResponse],
    ["/cosmos.distribution.v1beta1.ValidatorAccumulatedCommission", distribution_5.ValidatorAccumulatedCommission],
    ["/cosmos.distribution.v1beta1.DelegatorWithdrawInfo", genesis_5.DelegatorWithdrawInfo],
    ["/cosmos.distribution.v1beta1.QueryValidatorDistributionInfoRequest", query_8.QueryValidatorDistributionInfoRequest],
    ["/cosmos.distribution.v1beta1.ValidatorOutstandingRewards", distribution_6.ValidatorOutstandingRewards],
    ["/cosmos.distribution.v1beta1.GenesisState", genesis_6.GenesisState],
    ["/cosmos.distribution.v1beta1.MsgSetWithdrawAddress", tx_5.MsgSetWithdrawAddress],
    ["/cosmos.distribution.v1beta1.MsgUpdateParams", tx_6.MsgUpdateParams],
    ["/cosmos.distribution.v1beta1.QueryValidatorSlashesResponse", query_9.QueryValidatorSlashesResponse],
    ["/cosmos.distribution.v1beta1.QueryCommunityPoolResponse", query_10.QueryCommunityPoolResponse],
    ["/cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse", tx_7.MsgFundCommunityPoolResponse],
    ["/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPoolResponse", tx_8.MsgDepositValidatorRewardsPoolResponse],
    ["/cosmos.distribution.v1beta1.QueryCommunityPoolRequest", query_11.QueryCommunityPoolRequest],
    ["/cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse", tx_9.MsgWithdrawDelegatorRewardResponse],
    ["/cosmos.distribution.v1beta1.ValidatorSlashEvents", distribution_7.ValidatorSlashEvents],
    ["/cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse", tx_10.MsgSetWithdrawAddressResponse],
    ["/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit", distribution_8.CommunityPoolSpendProposalWithDeposit],
    ["/cosmos.distribution.v1beta1.ValidatorAccumulatedCommissionRecord", genesis_7.ValidatorAccumulatedCommissionRecord],
    ["/cosmos.distribution.v1beta1.ValidatorSlashEventRecord", genesis_8.ValidatorSlashEventRecord],
    ["/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse", tx_11.MsgWithdrawValidatorCommissionResponse],
    ["/cosmos.distribution.v1beta1.QueryParamsResponse", query_12.QueryParamsResponse],
    ["/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse", query_13.QueryValidatorOutstandingRewardsResponse],
    ["/cosmos.distribution.v1beta1.QueryValidatorSlashesRequest", query_14.QueryValidatorSlashesRequest],
    ["/cosmos.distribution.v1beta1.QueryDelegationRewardsResponse", query_15.QueryDelegationRewardsResponse],
    ["/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsRequest", query_16.QueryValidatorOutstandingRewardsRequest],
    ["/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsRequest", query_17.QueryDelegationTotalRewardsRequest],
    ["/cosmos.distribution.v1beta1.DelegatorStartingInfo", distribution_9.DelegatorStartingInfo],
    ["/cosmos.distribution.v1beta1.MsgUpdateParamsResponse", tx_12.MsgUpdateParamsResponse],
    ["/cosmos.distribution.v1beta1.CommunityPoolSpendProposal", distribution_10.CommunityPoolSpendProposal],
    ["/cosmos.distribution.v1beta1.QueryDelegatorValidatorsRequest", query_18.QueryDelegatorValidatorsRequest],
    ["/cosmos.distribution.v1beta1.MsgCommunityPoolSpend", tx_13.MsgCommunityPoolSpend],
    ["/cosmos.distribution.v1beta1.MsgCommunityPoolSpendResponse", tx_14.MsgCommunityPoolSpendResponse],
    ["/cosmos.distribution.v1beta1.QueryValidatorCommissionResponse", query_19.QueryValidatorCommissionResponse],
    ["/cosmos.distribution.v1beta1.QueryDelegatorValidatorsResponse", query_20.QueryDelegatorValidatorsResponse],
    ["/cosmos.distribution.v1beta1.ValidatorCurrentRewards", distribution_11.ValidatorCurrentRewards],
    ["/cosmos.distribution.v1beta1.DelegationDelegatorReward", distribution_12.DelegationDelegatorReward],
];
exports.msgTypes = msgTypes;
