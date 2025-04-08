"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const genesis_1 = require("./types/cosmos/distribution/v1beta1/genesis");
const query_1 = require("./types/cosmos/distribution/v1beta1/query");
const query_2 = require("./types/cosmos/distribution/v1beta1/query");
const query_3 = require("./types/cosmos/distribution/v1beta1/query");
const query_4 = require("./types/cosmos/distribution/v1beta1/query");
const genesis_2 = require("./types/cosmos/distribution/v1beta1/genesis");
const distribution_1 = require("./types/cosmos/distribution/v1beta1/distribution");
const query_5 = require("./types/cosmos/distribution/v1beta1/query");
const query_6 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_2 = require("./types/cosmos/distribution/v1beta1/distribution");
const tx_1 = require("./types/cosmos/distribution/v1beta1/tx");
const distribution_3 = require("./types/cosmos/distribution/v1beta1/distribution");
const genesis_3 = require("./types/cosmos/distribution/v1beta1/genesis");
const query_7 = require("./types/cosmos/distribution/v1beta1/query");
const query_8 = require("./types/cosmos/distribution/v1beta1/query");
const genesis_4 = require("./types/cosmos/distribution/v1beta1/genesis");
const tx_2 = require("./types/cosmos/distribution/v1beta1/tx");
const query_9 = require("./types/cosmos/distribution/v1beta1/query");
const query_10 = require("./types/cosmos/distribution/v1beta1/query");
const genesis_5 = require("./types/cosmos/distribution/v1beta1/genesis");
const distribution_4 = require("./types/cosmos/distribution/v1beta1/distribution");
const tx_3 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_4 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_5 = require("./types/cosmos/distribution/v1beta1/tx");
const query_11 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_5 = require("./types/cosmos/distribution/v1beta1/distribution");
const tx_6 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_7 = require("./types/cosmos/distribution/v1beta1/tx");
const query_12 = require("./types/cosmos/distribution/v1beta1/query");
const query_13 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_6 = require("./types/cosmos/distribution/v1beta1/distribution");
const tx_8 = require("./types/cosmos/distribution/v1beta1/tx");
const distribution_7 = require("./types/cosmos/distribution/v1beta1/distribution");
const tx_9 = require("./types/cosmos/distribution/v1beta1/tx");
const distribution_8 = require("./types/cosmos/distribution/v1beta1/distribution");
const distribution_9 = require("./types/cosmos/distribution/v1beta1/distribution");
const tx_10 = require("./types/cosmos/distribution/v1beta1/tx");
const genesis_6 = require("./types/cosmos/distribution/v1beta1/genesis");
const query_14 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_10 = require("./types/cosmos/distribution/v1beta1/distribution");
const tx_11 = require("./types/cosmos/distribution/v1beta1/tx");
const query_15 = require("./types/cosmos/distribution/v1beta1/query");
const query_16 = require("./types/cosmos/distribution/v1beta1/query");
const query_17 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_11 = require("./types/cosmos/distribution/v1beta1/distribution");
const tx_12 = require("./types/cosmos/distribution/v1beta1/tx");
const distribution_12 = require("./types/cosmos/distribution/v1beta1/distribution");
const query_18 = require("./types/cosmos/distribution/v1beta1/query");
const genesis_7 = require("./types/cosmos/distribution/v1beta1/genesis");
const query_19 = require("./types/cosmos/distribution/v1beta1/query");
const query_20 = require("./types/cosmos/distribution/v1beta1/query");
const genesis_8 = require("./types/cosmos/distribution/v1beta1/genesis");
const tx_13 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_14 = require("./types/cosmos/distribution/v1beta1/tx");
const msgTypes = [
    ["/cosmos.distribution.v1beta1.ValidatorHistoricalRewardsRecord", genesis_1.ValidatorHistoricalRewardsRecord],
    ["/cosmos.distribution.v1beta1.QueryValidatorDistributionInfoResponse", query_1.QueryValidatorDistributionInfoResponse],
    ["/cosmos.distribution.v1beta1.QueryValidatorCommissionRequest", query_2.QueryValidatorCommissionRequest],
    ["/cosmos.distribution.v1beta1.QueryValidatorCommissionResponse", query_3.QueryValidatorCommissionResponse],
    ["/cosmos.distribution.v1beta1.QueryDelegationRewardsResponse", query_4.QueryDelegationRewardsResponse],
    ["/cosmos.distribution.v1beta1.ValidatorOutstandingRewardsRecord", genesis_2.ValidatorOutstandingRewardsRecord],
    ["/cosmos.distribution.v1beta1.ValidatorCurrentRewards", distribution_1.ValidatorCurrentRewards],
    ["/cosmos.distribution.v1beta1.QueryValidatorDistributionInfoRequest", query_5.QueryValidatorDistributionInfoRequest],
    ["/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse", query_6.QueryValidatorOutstandingRewardsResponse],
    ["/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit", distribution_2.CommunityPoolSpendProposalWithDeposit],
    ["/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse", tx_1.MsgWithdrawValidatorCommissionResponse],
    ["/cosmos.distribution.v1beta1.FeePool", distribution_3.FeePool],
    ["/cosmos.distribution.v1beta1.GenesisState", genesis_3.GenesisState],
    ["/cosmos.distribution.v1beta1.QueryDelegatorValidatorsResponse", query_7.QueryDelegatorValidatorsResponse],
    ["/cosmos.distribution.v1beta1.QueryCommunityPoolRequest", query_8.QueryCommunityPoolRequest],
    ["/cosmos.distribution.v1beta1.ValidatorAccumulatedCommissionRecord", genesis_4.ValidatorAccumulatedCommissionRecord],
    ["/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward", tx_2.MsgWithdrawDelegatorReward],
    ["/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse", query_9.QueryDelegationTotalRewardsResponse],
    ["/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsRequest", query_10.QueryValidatorOutstandingRewardsRequest],
    ["/cosmos.distribution.v1beta1.DelegatorStartingInfoRecord", genesis_5.DelegatorStartingInfoRecord],
    ["/cosmos.distribution.v1beta1.DelegatorStartingInfo", distribution_4.DelegatorStartingInfo],
    ["/cosmos.distribution.v1beta1.MsgUpdateParams", tx_3.MsgUpdateParams],
    ["/cosmos.distribution.v1beta1.MsgUpdateParamsResponse", tx_4.MsgUpdateParamsResponse],
    ["/cosmos.distribution.v1beta1.MsgCommunityPoolSpend", tx_5.MsgCommunityPoolSpend],
    ["/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressRequest", query_11.QueryDelegatorWithdrawAddressRequest],
    ["/cosmos.distribution.v1beta1.Params", distribution_5.Params],
    ["/cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse", tx_6.MsgFundCommunityPoolResponse],
    ["/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPool", tx_7.MsgDepositValidatorRewardsPool],
    ["/cosmos.distribution.v1beta1.QueryDelegatorValidatorsRequest", query_12.QueryDelegatorValidatorsRequest],
    ["/cosmos.distribution.v1beta1.QueryValidatorSlashesResponse", query_13.QueryValidatorSlashesResponse],
    ["/cosmos.distribution.v1beta1.ValidatorSlashEvent", distribution_6.ValidatorSlashEvent],
    ["/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission", tx_8.MsgWithdrawValidatorCommission],
    ["/cosmos.distribution.v1beta1.CommunityPoolSpendProposal", distribution_7.CommunityPoolSpendProposal],
    ["/cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse", tx_9.MsgWithdrawDelegatorRewardResponse],
    ["/cosmos.distribution.v1beta1.ValidatorOutstandingRewards", distribution_8.ValidatorOutstandingRewards],
    ["/cosmos.distribution.v1beta1.ValidatorSlashEvents", distribution_9.ValidatorSlashEvents],
    ["/cosmos.distribution.v1beta1.MsgSetWithdrawAddress", tx_10.MsgSetWithdrawAddress],
    ["/cosmos.distribution.v1beta1.ValidatorCurrentRewardsRecord", genesis_6.ValidatorCurrentRewardsRecord],
    ["/cosmos.distribution.v1beta1.QueryDelegationRewardsRequest", query_14.QueryDelegationRewardsRequest],
    ["/cosmos.distribution.v1beta1.ValidatorAccumulatedCommission", distribution_10.ValidatorAccumulatedCommission],
    ["/cosmos.distribution.v1beta1.MsgCommunityPoolSpendResponse", tx_11.MsgCommunityPoolSpendResponse],
    ["/cosmos.distribution.v1beta1.QueryValidatorSlashesRequest", query_15.QueryValidatorSlashesRequest],
    ["/cosmos.distribution.v1beta1.QueryParamsRequest", query_16.QueryParamsRequest],
    ["/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressResponse", query_17.QueryDelegatorWithdrawAddressResponse],
    ["/cosmos.distribution.v1beta1.ValidatorHistoricalRewards", distribution_11.ValidatorHistoricalRewards],
    ["/cosmos.distribution.v1beta1.MsgFundCommunityPool", tx_12.MsgFundCommunityPool],
    ["/cosmos.distribution.v1beta1.DelegationDelegatorReward", distribution_12.DelegationDelegatorReward],
    ["/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsRequest", query_18.QueryDelegationTotalRewardsRequest],
    ["/cosmos.distribution.v1beta1.ValidatorSlashEventRecord", genesis_7.ValidatorSlashEventRecord],
    ["/cosmos.distribution.v1beta1.QueryParamsResponse", query_19.QueryParamsResponse],
    ["/cosmos.distribution.v1beta1.QueryCommunityPoolResponse", query_20.QueryCommunityPoolResponse],
    ["/cosmos.distribution.v1beta1.DelegatorWithdrawInfo", genesis_8.DelegatorWithdrawInfo],
    ["/cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse", tx_13.MsgSetWithdrawAddressResponse],
    ["/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPoolResponse", tx_14.MsgDepositValidatorRewardsPoolResponse],
];
exports.msgTypes = msgTypes;
