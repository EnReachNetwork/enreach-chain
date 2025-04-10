"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const genesis_1 = require("./types/cosmos/distribution/v1beta1/genesis");
const tx_1 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_2 = require("./types/cosmos/distribution/v1beta1/tx");
const distribution_1 = require("./types/cosmos/distribution/v1beta1/distribution");
const distribution_2 = require("./types/cosmos/distribution/v1beta1/distribution");
const query_1 = require("./types/cosmos/distribution/v1beta1/query");
const query_2 = require("./types/cosmos/distribution/v1beta1/query");
const query_3 = require("./types/cosmos/distribution/v1beta1/query");
const tx_3 = require("./types/cosmos/distribution/v1beta1/tx");
const query_4 = require("./types/cosmos/distribution/v1beta1/query");
const query_5 = require("./types/cosmos/distribution/v1beta1/query");
const query_6 = require("./types/cosmos/distribution/v1beta1/query");
const query_7 = require("./types/cosmos/distribution/v1beta1/query");
const query_8 = require("./types/cosmos/distribution/v1beta1/query");
const query_9 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_3 = require("./types/cosmos/distribution/v1beta1/distribution");
const query_10 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_4 = require("./types/cosmos/distribution/v1beta1/distribution");
const distribution_5 = require("./types/cosmos/distribution/v1beta1/distribution");
const query_11 = require("./types/cosmos/distribution/v1beta1/query");
const genesis_2 = require("./types/cosmos/distribution/v1beta1/genesis");
const genesis_3 = require("./types/cosmos/distribution/v1beta1/genesis");
const tx_4 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_5 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_6 = require("./types/cosmos/distribution/v1beta1/tx");
const query_12 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_6 = require("./types/cosmos/distribution/v1beta1/distribution");
const distribution_7 = require("./types/cosmos/distribution/v1beta1/distribution");
const genesis_4 = require("./types/cosmos/distribution/v1beta1/genesis");
const distribution_8 = require("./types/cosmos/distribution/v1beta1/distribution");
const query_13 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_9 = require("./types/cosmos/distribution/v1beta1/distribution");
const tx_7 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_8 = require("./types/cosmos/distribution/v1beta1/tx");
const genesis_5 = require("./types/cosmos/distribution/v1beta1/genesis");
const tx_9 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_10 = require("./types/cosmos/distribution/v1beta1/tx");
const distribution_10 = require("./types/cosmos/distribution/v1beta1/distribution");
const distribution_11 = require("./types/cosmos/distribution/v1beta1/distribution");
const genesis_6 = require("./types/cosmos/distribution/v1beta1/genesis");
const genesis_7 = require("./types/cosmos/distribution/v1beta1/genesis");
const query_14 = require("./types/cosmos/distribution/v1beta1/query");
const query_15 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_12 = require("./types/cosmos/distribution/v1beta1/distribution");
const query_16 = require("./types/cosmos/distribution/v1beta1/query");
const query_17 = require("./types/cosmos/distribution/v1beta1/query");
const tx_11 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_12 = require("./types/cosmos/distribution/v1beta1/tx");
const query_18 = require("./types/cosmos/distribution/v1beta1/query");
const query_19 = require("./types/cosmos/distribution/v1beta1/query");
const query_20 = require("./types/cosmos/distribution/v1beta1/query");
const genesis_8 = require("./types/cosmos/distribution/v1beta1/genesis");
const tx_13 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_14 = require("./types/cosmos/distribution/v1beta1/tx");
const msgTypes = [
    ["/cosmos.distribution.v1beta1.ValidatorSlashEventRecord", genesis_1.ValidatorSlashEventRecord],
    ["/cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse", tx_1.MsgWithdrawDelegatorRewardResponse],
    ["/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPool", tx_2.MsgDepositValidatorRewardsPool],
    ["/cosmos.distribution.v1beta1.ValidatorAccumulatedCommission", distribution_1.ValidatorAccumulatedCommission],
    ["/cosmos.distribution.v1beta1.ValidatorSlashEvents", distribution_2.ValidatorSlashEvents],
    ["/cosmos.distribution.v1beta1.QueryValidatorDistributionInfoRequest", query_1.QueryValidatorDistributionInfoRequest],
    ["/cosmos.distribution.v1beta1.QueryDelegationRewardsResponse", query_2.QueryDelegationRewardsResponse],
    ["/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressRequest", query_3.QueryDelegatorWithdrawAddressRequest],
    ["/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse", tx_3.MsgWithdrawValidatorCommissionResponse],
    ["/cosmos.distribution.v1beta1.QueryParamsResponse", query_4.QueryParamsResponse],
    ["/cosmos.distribution.v1beta1.QueryDelegationRewardsRequest", query_5.QueryDelegationRewardsRequest],
    ["/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsRequest", query_6.QueryDelegationTotalRewardsRequest],
    ["/cosmos.distribution.v1beta1.QueryDelegatorValidatorsResponse", query_7.QueryDelegatorValidatorsResponse],
    ["/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressResponse", query_8.QueryDelegatorWithdrawAddressResponse],
    ["/cosmos.distribution.v1beta1.QueryCommunityPoolRequest", query_9.QueryCommunityPoolRequest],
    ["/cosmos.distribution.v1beta1.ValidatorOutstandingRewards", distribution_3.ValidatorOutstandingRewards],
    ["/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsRequest", query_10.QueryValidatorOutstandingRewardsRequest],
    ["/cosmos.distribution.v1beta1.ValidatorSlashEvent", distribution_4.ValidatorSlashEvent],
    ["/cosmos.distribution.v1beta1.CommunityPoolSpendProposal", distribution_5.CommunityPoolSpendProposal],
    ["/cosmos.distribution.v1beta1.QueryValidatorCommissionRequest", query_11.QueryValidatorCommissionRequest],
    ["/cosmos.distribution.v1beta1.ValidatorCurrentRewardsRecord", genesis_2.ValidatorCurrentRewardsRecord],
    ["/cosmos.distribution.v1beta1.DelegatorStartingInfoRecord", genesis_3.DelegatorStartingInfoRecord],
    ["/cosmos.distribution.v1beta1.MsgUpdateParamsResponse", tx_4.MsgUpdateParamsResponse],
    ["/cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse", tx_5.MsgSetWithdrawAddressResponse],
    ["/cosmos.distribution.v1beta1.MsgUpdateParams", tx_6.MsgUpdateParams],
    ["/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse", query_12.QueryValidatorOutstandingRewardsResponse],
    ["/cosmos.distribution.v1beta1.Params", distribution_6.Params],
    ["/cosmos.distribution.v1beta1.ValidatorCurrentRewards", distribution_7.ValidatorCurrentRewards],
    ["/cosmos.distribution.v1beta1.GenesisState", genesis_4.GenesisState],
    ["/cosmos.distribution.v1beta1.FeePool", distribution_8.FeePool],
    ["/cosmos.distribution.v1beta1.QueryValidatorSlashesRequest", query_13.QueryValidatorSlashesRequest],
    ["/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit", distribution_9.CommunityPoolSpendProposalWithDeposit],
    ["/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward", tx_7.MsgWithdrawDelegatorReward],
    ["/cosmos.distribution.v1beta1.MsgCommunityPoolSpend", tx_8.MsgCommunityPoolSpend],
    ["/cosmos.distribution.v1beta1.ValidatorAccumulatedCommissionRecord", genesis_5.ValidatorAccumulatedCommissionRecord],
    ["/cosmos.distribution.v1beta1.MsgCommunityPoolSpendResponse", tx_9.MsgCommunityPoolSpendResponse],
    ["/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPoolResponse", tx_10.MsgDepositValidatorRewardsPoolResponse],
    ["/cosmos.distribution.v1beta1.ValidatorHistoricalRewards", distribution_10.ValidatorHistoricalRewards],
    ["/cosmos.distribution.v1beta1.DelegationDelegatorReward", distribution_11.DelegationDelegatorReward],
    ["/cosmos.distribution.v1beta1.DelegatorWithdrawInfo", genesis_6.DelegatorWithdrawInfo],
    ["/cosmos.distribution.v1beta1.ValidatorHistoricalRewardsRecord", genesis_7.ValidatorHistoricalRewardsRecord],
    ["/cosmos.distribution.v1beta1.QueryParamsRequest", query_14.QueryParamsRequest],
    ["/cosmos.distribution.v1beta1.QueryValidatorCommissionResponse", query_15.QueryValidatorCommissionResponse],
    ["/cosmos.distribution.v1beta1.DelegatorStartingInfo", distribution_12.DelegatorStartingInfo],
    ["/cosmos.distribution.v1beta1.QueryValidatorDistributionInfoResponse", query_16.QueryValidatorDistributionInfoResponse],
    ["/cosmos.distribution.v1beta1.QueryValidatorSlashesResponse", query_17.QueryValidatorSlashesResponse],
    ["/cosmos.distribution.v1beta1.MsgSetWithdrawAddress", tx_11.MsgSetWithdrawAddress],
    ["/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission", tx_12.MsgWithdrawValidatorCommission],
    ["/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse", query_18.QueryDelegationTotalRewardsResponse],
    ["/cosmos.distribution.v1beta1.QueryDelegatorValidatorsRequest", query_19.QueryDelegatorValidatorsRequest],
    ["/cosmos.distribution.v1beta1.QueryCommunityPoolResponse", query_20.QueryCommunityPoolResponse],
    ["/cosmos.distribution.v1beta1.ValidatorOutstandingRewardsRecord", genesis_8.ValidatorOutstandingRewardsRecord],
    ["/cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse", tx_13.MsgFundCommunityPoolResponse],
    ["/cosmos.distribution.v1beta1.MsgFundCommunityPool", tx_14.MsgFundCommunityPool],
];
exports.msgTypes = msgTypes;
