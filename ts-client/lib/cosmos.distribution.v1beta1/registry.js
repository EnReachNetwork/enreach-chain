"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/cosmos/distribution/v1beta1/tx");
const query_1 = require("./types/cosmos/distribution/v1beta1/query");
const query_2 = require("./types/cosmos/distribution/v1beta1/query");
const query_3 = require("./types/cosmos/distribution/v1beta1/query");
const tx_2 = require("./types/cosmos/distribution/v1beta1/tx");
const genesis_1 = require("./types/cosmos/distribution/v1beta1/genesis");
const query_4 = require("./types/cosmos/distribution/v1beta1/query");
const genesis_2 = require("./types/cosmos/distribution/v1beta1/genesis");
const query_5 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_1 = require("./types/cosmos/distribution/v1beta1/distribution");
const genesis_3 = require("./types/cosmos/distribution/v1beta1/genesis");
const query_6 = require("./types/cosmos/distribution/v1beta1/query");
const query_7 = require("./types/cosmos/distribution/v1beta1/query");
const tx_3 = require("./types/cosmos/distribution/v1beta1/tx");
const genesis_4 = require("./types/cosmos/distribution/v1beta1/genesis");
const genesis_5 = require("./types/cosmos/distribution/v1beta1/genesis");
const tx_4 = require("./types/cosmos/distribution/v1beta1/tx");
const query_8 = require("./types/cosmos/distribution/v1beta1/query");
const query_9 = require("./types/cosmos/distribution/v1beta1/query");
const tx_5 = require("./types/cosmos/distribution/v1beta1/tx");
const distribution_2 = require("./types/cosmos/distribution/v1beta1/distribution");
const distribution_3 = require("./types/cosmos/distribution/v1beta1/distribution");
const distribution_4 = require("./types/cosmos/distribution/v1beta1/distribution");
const distribution_5 = require("./types/cosmos/distribution/v1beta1/distribution");
const distribution_6 = require("./types/cosmos/distribution/v1beta1/distribution");
const genesis_6 = require("./types/cosmos/distribution/v1beta1/genesis");
const distribution_7 = require("./types/cosmos/distribution/v1beta1/distribution");
const query_10 = require("./types/cosmos/distribution/v1beta1/query");
const query_11 = require("./types/cosmos/distribution/v1beta1/query");
const tx_6 = require("./types/cosmos/distribution/v1beta1/tx");
const query_12 = require("./types/cosmos/distribution/v1beta1/query");
const query_13 = require("./types/cosmos/distribution/v1beta1/query");
const tx_7 = require("./types/cosmos/distribution/v1beta1/tx");
const distribution_8 = require("./types/cosmos/distribution/v1beta1/distribution");
const query_14 = require("./types/cosmos/distribution/v1beta1/query");
const tx_8 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_9 = require("./types/cosmos/distribution/v1beta1/tx");
const distribution_9 = require("./types/cosmos/distribution/v1beta1/distribution");
const query_15 = require("./types/cosmos/distribution/v1beta1/query");
const query_16 = require("./types/cosmos/distribution/v1beta1/query");
const tx_10 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_11 = require("./types/cosmos/distribution/v1beta1/tx");
const query_17 = require("./types/cosmos/distribution/v1beta1/query");
const query_18 = require("./types/cosmos/distribution/v1beta1/query");
const tx_12 = require("./types/cosmos/distribution/v1beta1/tx");
const query_19 = require("./types/cosmos/distribution/v1beta1/query");
const query_20 = require("./types/cosmos/distribution/v1beta1/query");
const tx_13 = require("./types/cosmos/distribution/v1beta1/tx");
const distribution_10 = require("./types/cosmos/distribution/v1beta1/distribution");
const distribution_11 = require("./types/cosmos/distribution/v1beta1/distribution");
const genesis_7 = require("./types/cosmos/distribution/v1beta1/genesis");
const tx_14 = require("./types/cosmos/distribution/v1beta1/tx");
const distribution_12 = require("./types/cosmos/distribution/v1beta1/distribution");
const genesis_8 = require("./types/cosmos/distribution/v1beta1/genesis");
const msgTypes = [
    ["/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward", tx_1.MsgWithdrawDelegatorReward],
    ["/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse", query_1.QueryValidatorOutstandingRewardsResponse],
    ["/cosmos.distribution.v1beta1.QueryDelegationRewardsResponse", query_2.QueryDelegationRewardsResponse],
    ["/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressRequest", query_3.QueryDelegatorWithdrawAddressRequest],
    ["/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission", tx_2.MsgWithdrawValidatorCommission],
    ["/cosmos.distribution.v1beta1.ValidatorCurrentRewardsRecord", genesis_1.ValidatorCurrentRewardsRecord],
    ["/cosmos.distribution.v1beta1.QueryValidatorDistributionInfoRequest", query_4.QueryValidatorDistributionInfoRequest],
    ["/cosmos.distribution.v1beta1.ValidatorSlashEventRecord", genesis_2.ValidatorSlashEventRecord],
    ["/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressResponse", query_5.QueryDelegatorWithdrawAddressResponse],
    ["/cosmos.distribution.v1beta1.ValidatorAccumulatedCommission", distribution_1.ValidatorAccumulatedCommission],
    ["/cosmos.distribution.v1beta1.ValidatorHistoricalRewardsRecord", genesis_3.ValidatorHistoricalRewardsRecord],
    ["/cosmos.distribution.v1beta1.QueryValidatorCommissionRequest", query_6.QueryValidatorCommissionRequest],
    ["/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse", query_7.QueryDelegationTotalRewardsResponse],
    ["/cosmos.distribution.v1beta1.MsgCommunityPoolSpendResponse", tx_3.MsgCommunityPoolSpendResponse],
    ["/cosmos.distribution.v1beta1.DelegatorStartingInfoRecord", genesis_4.DelegatorStartingInfoRecord],
    ["/cosmos.distribution.v1beta1.GenesisState", genesis_5.GenesisState],
    ["/cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse", tx_4.MsgFundCommunityPoolResponse],
    ["/cosmos.distribution.v1beta1.QueryParamsResponse", query_8.QueryParamsResponse],
    ["/cosmos.distribution.v1beta1.QueryValidatorSlashesRequest", query_9.QueryValidatorSlashesRequest],
    ["/cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse", tx_5.MsgSetWithdrawAddressResponse],
    ["/cosmos.distribution.v1beta1.ValidatorSlashEvents", distribution_2.ValidatorSlashEvents],
    ["/cosmos.distribution.v1beta1.CommunityPoolSpendProposal", distribution_3.CommunityPoolSpendProposal],
    ["/cosmos.distribution.v1beta1.ValidatorOutstandingRewards", distribution_4.ValidatorOutstandingRewards],
    ["/cosmos.distribution.v1beta1.FeePool", distribution_5.FeePool],
    ["/cosmos.distribution.v1beta1.ValidatorSlashEvent", distribution_6.ValidatorSlashEvent],
    ["/cosmos.distribution.v1beta1.ValidatorOutstandingRewardsRecord", genesis_6.ValidatorOutstandingRewardsRecord],
    ["/cosmos.distribution.v1beta1.ValidatorCurrentRewards", distribution_7.ValidatorCurrentRewards],
    ["/cosmos.distribution.v1beta1.QueryDelegationRewardsRequest", query_10.QueryDelegationRewardsRequest],
    ["/cosmos.distribution.v1beta1.QueryValidatorDistributionInfoResponse", query_11.QueryValidatorDistributionInfoResponse],
    ["/cosmos.distribution.v1beta1.MsgCommunityPoolSpend", tx_6.MsgCommunityPoolSpend],
    ["/cosmos.distribution.v1beta1.QueryValidatorCommissionResponse", query_12.QueryValidatorCommissionResponse],
    ["/cosmos.distribution.v1beta1.QueryValidatorSlashesResponse", query_13.QueryValidatorSlashesResponse],
    ["/cosmos.distribution.v1beta1.MsgFundCommunityPool", tx_7.MsgFundCommunityPool],
    ["/cosmos.distribution.v1beta1.DelegationDelegatorReward", distribution_8.DelegationDelegatorReward],
    ["/cosmos.distribution.v1beta1.QueryParamsRequest", query_14.QueryParamsRequest],
    ["/cosmos.distribution.v1beta1.MsgSetWithdrawAddress", tx_8.MsgSetWithdrawAddress],
    ["/cosmos.distribution.v1beta1.MsgUpdateParams", tx_9.MsgUpdateParams],
    ["/cosmos.distribution.v1beta1.DelegatorStartingInfo", distribution_9.DelegatorStartingInfo],
    ["/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsRequest", query_15.QueryDelegationTotalRewardsRequest],
    ["/cosmos.distribution.v1beta1.QueryCommunityPoolRequest", query_16.QueryCommunityPoolRequest],
    ["/cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse", tx_10.MsgWithdrawDelegatorRewardResponse],
    ["/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse", tx_11.MsgWithdrawValidatorCommissionResponse],
    ["/cosmos.distribution.v1beta1.QueryDelegatorValidatorsRequest", query_17.QueryDelegatorValidatorsRequest],
    ["/cosmos.distribution.v1beta1.QueryDelegatorValidatorsResponse", query_18.QueryDelegatorValidatorsResponse],
    ["/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPoolResponse", tx_12.MsgDepositValidatorRewardsPoolResponse],
    ["/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsRequest", query_19.QueryValidatorOutstandingRewardsRequest],
    ["/cosmos.distribution.v1beta1.QueryCommunityPoolResponse", query_20.QueryCommunityPoolResponse],
    ["/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPool", tx_13.MsgDepositValidatorRewardsPool],
    ["/cosmos.distribution.v1beta1.Params", distribution_10.Params],
    ["/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit", distribution_11.CommunityPoolSpendProposalWithDeposit],
    ["/cosmos.distribution.v1beta1.ValidatorAccumulatedCommissionRecord", genesis_7.ValidatorAccumulatedCommissionRecord],
    ["/cosmos.distribution.v1beta1.MsgUpdateParamsResponse", tx_14.MsgUpdateParamsResponse],
    ["/cosmos.distribution.v1beta1.ValidatorHistoricalRewards", distribution_12.ValidatorHistoricalRewards],
    ["/cosmos.distribution.v1beta1.DelegatorWithdrawInfo", genesis_8.DelegatorWithdrawInfo],
];
exports.msgTypes = msgTypes;
