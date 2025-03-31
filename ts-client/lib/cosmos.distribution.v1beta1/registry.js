"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const genesis_1 = require("./types/cosmos/distribution/v1beta1/genesis");
const distribution_1 = require("./types/cosmos/distribution/v1beta1/distribution");
const distribution_2 = require("./types/cosmos/distribution/v1beta1/distribution");
const query_1 = require("./types/cosmos/distribution/v1beta1/query");
const query_2 = require("./types/cosmos/distribution/v1beta1/query");
const tx_1 = require("./types/cosmos/distribution/v1beta1/tx");
const distribution_3 = require("./types/cosmos/distribution/v1beta1/distribution");
const genesis_2 = require("./types/cosmos/distribution/v1beta1/genesis");
const tx_2 = require("./types/cosmos/distribution/v1beta1/tx");
const distribution_4 = require("./types/cosmos/distribution/v1beta1/distribution");
const query_3 = require("./types/cosmos/distribution/v1beta1/query");
const query_4 = require("./types/cosmos/distribution/v1beta1/query");
const tx_3 = require("./types/cosmos/distribution/v1beta1/tx");
const genesis_3 = require("./types/cosmos/distribution/v1beta1/genesis");
const query_5 = require("./types/cosmos/distribution/v1beta1/query");
const query_6 = require("./types/cosmos/distribution/v1beta1/query");
const query_7 = require("./types/cosmos/distribution/v1beta1/query");
const query_8 = require("./types/cosmos/distribution/v1beta1/query");
const tx_4 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_5 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_6 = require("./types/cosmos/distribution/v1beta1/tx");
const distribution_5 = require("./types/cosmos/distribution/v1beta1/distribution");
const genesis_4 = require("./types/cosmos/distribution/v1beta1/genesis");
const query_9 = require("./types/cosmos/distribution/v1beta1/query");
const query_10 = require("./types/cosmos/distribution/v1beta1/query");
const query_11 = require("./types/cosmos/distribution/v1beta1/query");
const query_12 = require("./types/cosmos/distribution/v1beta1/query");
const query_13 = require("./types/cosmos/distribution/v1beta1/query");
const query_14 = require("./types/cosmos/distribution/v1beta1/query");
const tx_7 = require("./types/cosmos/distribution/v1beta1/tx");
const distribution_6 = require("./types/cosmos/distribution/v1beta1/distribution");
const query_15 = require("./types/cosmos/distribution/v1beta1/query");
const tx_8 = require("./types/cosmos/distribution/v1beta1/tx");
const query_16 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_7 = require("./types/cosmos/distribution/v1beta1/distribution");
const distribution_8 = require("./types/cosmos/distribution/v1beta1/distribution");
const query_17 = require("./types/cosmos/distribution/v1beta1/query");
const query_18 = require("./types/cosmos/distribution/v1beta1/query");
const tx_9 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_10 = require("./types/cosmos/distribution/v1beta1/tx");
const genesis_5 = require("./types/cosmos/distribution/v1beta1/genesis");
const genesis_6 = require("./types/cosmos/distribution/v1beta1/genesis");
const tx_11 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_12 = require("./types/cosmos/distribution/v1beta1/tx");
const query_19 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_9 = require("./types/cosmos/distribution/v1beta1/distribution");
const genesis_7 = require("./types/cosmos/distribution/v1beta1/genesis");
const query_20 = require("./types/cosmos/distribution/v1beta1/query");
const genesis_8 = require("./types/cosmos/distribution/v1beta1/genesis");
const tx_13 = require("./types/cosmos/distribution/v1beta1/tx");
const distribution_10 = require("./types/cosmos/distribution/v1beta1/distribution");
const tx_14 = require("./types/cosmos/distribution/v1beta1/tx");
const distribution_11 = require("./types/cosmos/distribution/v1beta1/distribution");
const distribution_12 = require("./types/cosmos/distribution/v1beta1/distribution");
const msgTypes = [
    ["/cosmos.distribution.v1beta1.DelegatorStartingInfoRecord", genesis_1.DelegatorStartingInfoRecord],
    ["/cosmos.distribution.v1beta1.Params", distribution_1.Params],
    ["/cosmos.distribution.v1beta1.ValidatorAccumulatedCommission", distribution_2.ValidatorAccumulatedCommission],
    ["/cosmos.distribution.v1beta1.QueryValidatorCommissionResponse", query_1.QueryValidatorCommissionResponse],
    ["/cosmos.distribution.v1beta1.QueryValidatorSlashesRequest", query_2.QueryValidatorSlashesRequest],
    ["/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward", tx_1.MsgWithdrawDelegatorReward],
    ["/cosmos.distribution.v1beta1.ValidatorSlashEvent", distribution_3.ValidatorSlashEvent],
    ["/cosmos.distribution.v1beta1.ValidatorOutstandingRewardsRecord", genesis_2.ValidatorOutstandingRewardsRecord],
    ["/cosmos.distribution.v1beta1.MsgFundCommunityPool", tx_2.MsgFundCommunityPool],
    ["/cosmos.distribution.v1beta1.ValidatorHistoricalRewards", distribution_4.ValidatorHistoricalRewards],
    ["/cosmos.distribution.v1beta1.QueryValidatorCommissionRequest", query_3.QueryValidatorCommissionRequest],
    ["/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse", query_4.QueryDelegationTotalRewardsResponse],
    ["/cosmos.distribution.v1beta1.MsgUpdateParams", tx_3.MsgUpdateParams],
    ["/cosmos.distribution.v1beta1.ValidatorCurrentRewardsRecord", genesis_3.ValidatorCurrentRewardsRecord],
    ["/cosmos.distribution.v1beta1.QueryParamsRequest", query_5.QueryParamsRequest],
    ["/cosmos.distribution.v1beta1.QueryValidatorSlashesResponse", query_6.QueryValidatorSlashesResponse],
    ["/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressRequest", query_7.QueryDelegatorWithdrawAddressRequest],
    ["/cosmos.distribution.v1beta1.QueryCommunityPoolResponse", query_8.QueryCommunityPoolResponse],
    ["/cosmos.distribution.v1beta1.MsgUpdateParamsResponse", tx_4.MsgUpdateParamsResponse],
    ["/cosmos.distribution.v1beta1.MsgCommunityPoolSpend", tx_5.MsgCommunityPoolSpend],
    ["/cosmos.distribution.v1beta1.MsgCommunityPoolSpendResponse", tx_6.MsgCommunityPoolSpendResponse],
    ["/cosmos.distribution.v1beta1.ValidatorSlashEvents", distribution_5.ValidatorSlashEvents],
    ["/cosmos.distribution.v1beta1.DelegatorWithdrawInfo", genesis_4.DelegatorWithdrawInfo],
    ["/cosmos.distribution.v1beta1.QueryParamsResponse", query_9.QueryParamsResponse],
    ["/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsRequest", query_10.QueryValidatorOutstandingRewardsRequest],
    ["/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse", query_11.QueryValidatorOutstandingRewardsResponse],
    ["/cosmos.distribution.v1beta1.QueryDelegationRewardsRequest", query_12.QueryDelegationRewardsRequest],
    ["/cosmos.distribution.v1beta1.QueryDelegatorValidatorsRequest", query_13.QueryDelegatorValidatorsRequest],
    ["/cosmos.distribution.v1beta1.QueryCommunityPoolRequest", query_14.QueryCommunityPoolRequest],
    ["/cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse", tx_7.MsgFundCommunityPoolResponse],
    ["/cosmos.distribution.v1beta1.ValidatorCurrentRewards", distribution_6.ValidatorCurrentRewards],
    ["/cosmos.distribution.v1beta1.QueryValidatorDistributionInfoResponse", query_15.QueryValidatorDistributionInfoResponse],
    ["/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPool", tx_8.MsgDepositValidatorRewardsPool],
    ["/cosmos.distribution.v1beta1.QueryDelegationRewardsResponse", query_16.QueryDelegationRewardsResponse],
    ["/cosmos.distribution.v1beta1.ValidatorOutstandingRewards", distribution_7.ValidatorOutstandingRewards],
    ["/cosmos.distribution.v1beta1.CommunityPoolSpendProposal", distribution_8.CommunityPoolSpendProposal],
    ["/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsRequest", query_17.QueryDelegationTotalRewardsRequest],
    ["/cosmos.distribution.v1beta1.QueryDelegatorValidatorsResponse", query_18.QueryDelegatorValidatorsResponse],
    ["/cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse", tx_9.MsgSetWithdrawAddressResponse],
    ["/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse", tx_10.MsgWithdrawValidatorCommissionResponse],
    ["/cosmos.distribution.v1beta1.ValidatorSlashEventRecord", genesis_5.ValidatorSlashEventRecord],
    ["/cosmos.distribution.v1beta1.GenesisState", genesis_6.GenesisState],
    ["/cosmos.distribution.v1beta1.MsgSetWithdrawAddress", tx_11.MsgSetWithdrawAddress],
    ["/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission", tx_12.MsgWithdrawValidatorCommission],
    ["/cosmos.distribution.v1beta1.QueryValidatorDistributionInfoRequest", query_19.QueryValidatorDistributionInfoRequest],
    ["/cosmos.distribution.v1beta1.DelegationDelegatorReward", distribution_9.DelegationDelegatorReward],
    ["/cosmos.distribution.v1beta1.ValidatorAccumulatedCommissionRecord", genesis_7.ValidatorAccumulatedCommissionRecord],
    ["/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressResponse", query_20.QueryDelegatorWithdrawAddressResponse],
    ["/cosmos.distribution.v1beta1.ValidatorHistoricalRewardsRecord", genesis_8.ValidatorHistoricalRewardsRecord],
    ["/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPoolResponse", tx_13.MsgDepositValidatorRewardsPoolResponse],
    ["/cosmos.distribution.v1beta1.DelegatorStartingInfo", distribution_10.DelegatorStartingInfo],
    ["/cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse", tx_14.MsgWithdrawDelegatorRewardResponse],
    ["/cosmos.distribution.v1beta1.FeePool", distribution_11.FeePool],
    ["/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit", distribution_12.CommunityPoolSpendProposalWithDeposit],
];
exports.msgTypes = msgTypes;
