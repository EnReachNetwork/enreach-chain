"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const distribution_1 = require("./types/cosmos/distribution/v1beta1/distribution");
const query_1 = require("./types/cosmos/distribution/v1beta1/query");
const tx_1 = require("./types/cosmos/distribution/v1beta1/tx");
const distribution_2 = require("./types/cosmos/distribution/v1beta1/distribution");
const distribution_3 = require("./types/cosmos/distribution/v1beta1/distribution");
const query_2 = require("./types/cosmos/distribution/v1beta1/query");
const tx_2 = require("./types/cosmos/distribution/v1beta1/tx");
const distribution_4 = require("./types/cosmos/distribution/v1beta1/distribution");
const genesis_1 = require("./types/cosmos/distribution/v1beta1/genesis");
const query_3 = require("./types/cosmos/distribution/v1beta1/query");
const tx_3 = require("./types/cosmos/distribution/v1beta1/tx");
const distribution_5 = require("./types/cosmos/distribution/v1beta1/distribution");
const tx_4 = require("./types/cosmos/distribution/v1beta1/tx");
const genesis_2 = require("./types/cosmos/distribution/v1beta1/genesis");
const genesis_3 = require("./types/cosmos/distribution/v1beta1/genesis");
const query_4 = require("./types/cosmos/distribution/v1beta1/query");
const tx_5 = require("./types/cosmos/distribution/v1beta1/tx");
const distribution_6 = require("./types/cosmos/distribution/v1beta1/distribution");
const query_5 = require("./types/cosmos/distribution/v1beta1/query");
const query_6 = require("./types/cosmos/distribution/v1beta1/query");
const tx_6 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_7 = require("./types/cosmos/distribution/v1beta1/tx");
const query_7 = require("./types/cosmos/distribution/v1beta1/query");
const query_8 = require("./types/cosmos/distribution/v1beta1/query");
const genesis_4 = require("./types/cosmos/distribution/v1beta1/genesis");
const genesis_5 = require("./types/cosmos/distribution/v1beta1/genesis");
const query_9 = require("./types/cosmos/distribution/v1beta1/query");
const query_10 = require("./types/cosmos/distribution/v1beta1/query");
const query_11 = require("./types/cosmos/distribution/v1beta1/query");
const tx_8 = require("./types/cosmos/distribution/v1beta1/tx");
const distribution_7 = require("./types/cosmos/distribution/v1beta1/distribution");
const distribution_8 = require("./types/cosmos/distribution/v1beta1/distribution");
const query_12 = require("./types/cosmos/distribution/v1beta1/query");
const tx_9 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_10 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_11 = require("./types/cosmos/distribution/v1beta1/tx");
const genesis_6 = require("./types/cosmos/distribution/v1beta1/genesis");
const query_13 = require("./types/cosmos/distribution/v1beta1/query");
const tx_12 = require("./types/cosmos/distribution/v1beta1/tx");
const distribution_9 = require("./types/cosmos/distribution/v1beta1/distribution");
const distribution_10 = require("./types/cosmos/distribution/v1beta1/distribution");
const query_14 = require("./types/cosmos/distribution/v1beta1/query");
const query_15 = require("./types/cosmos/distribution/v1beta1/query");
const query_16 = require("./types/cosmos/distribution/v1beta1/query");
const query_17 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_11 = require("./types/cosmos/distribution/v1beta1/distribution");
const genesis_7 = require("./types/cosmos/distribution/v1beta1/genesis");
const query_18 = require("./types/cosmos/distribution/v1beta1/query");
const tx_13 = require("./types/cosmos/distribution/v1beta1/tx");
const query_19 = require("./types/cosmos/distribution/v1beta1/query");
const query_20 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_12 = require("./types/cosmos/distribution/v1beta1/distribution");
const tx_14 = require("./types/cosmos/distribution/v1beta1/tx");
const genesis_8 = require("./types/cosmos/distribution/v1beta1/genesis");
const msgTypes = [
    ["/cosmos.distribution.v1beta1.DelegationDelegatorReward", distribution_1.DelegationDelegatorReward],
    ["/cosmos.distribution.v1beta1.QueryValidatorDistributionInfoRequest", query_1.QueryValidatorDistributionInfoRequest],
    ["/cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse", tx_1.MsgFundCommunityPoolResponse],
    ["/cosmos.distribution.v1beta1.FeePool", distribution_2.FeePool],
    ["/cosmos.distribution.v1beta1.Params", distribution_3.Params],
    ["/cosmos.distribution.v1beta1.QueryValidatorSlashesResponse", query_2.QueryValidatorSlashesResponse],
    ["/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward", tx_2.MsgWithdrawDelegatorReward],
    ["/cosmos.distribution.v1beta1.ValidatorAccumulatedCommission", distribution_4.ValidatorAccumulatedCommission],
    ["/cosmos.distribution.v1beta1.GenesisState", genesis_1.GenesisState],
    ["/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressResponse", query_3.QueryDelegatorWithdrawAddressResponse],
    ["/cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse", tx_3.MsgWithdrawDelegatorRewardResponse],
    ["/cosmos.distribution.v1beta1.ValidatorCurrentRewards", distribution_5.ValidatorCurrentRewards],
    ["/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission", tx_4.MsgWithdrawValidatorCommission],
    ["/cosmos.distribution.v1beta1.ValidatorOutstandingRewardsRecord", genesis_2.ValidatorOutstandingRewardsRecord],
    ["/cosmos.distribution.v1beta1.ValidatorCurrentRewardsRecord", genesis_3.ValidatorCurrentRewardsRecord],
    ["/cosmos.distribution.v1beta1.QueryDelegatorValidatorsResponse", query_4.QueryDelegatorValidatorsResponse],
    ["/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPool", tx_5.MsgDepositValidatorRewardsPool],
    ["/cosmos.distribution.v1beta1.ValidatorSlashEvents", distribution_6.ValidatorSlashEvents],
    ["/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsRequest", query_5.QueryValidatorOutstandingRewardsRequest],
    ["/cosmos.distribution.v1beta1.QueryValidatorCommissionResponse", query_6.QueryValidatorCommissionResponse],
    ["/cosmos.distribution.v1beta1.MsgUpdateParamsResponse", tx_6.MsgUpdateParamsResponse],
    ["/cosmos.distribution.v1beta1.MsgCommunityPoolSpendResponse", tx_7.MsgCommunityPoolSpendResponse],
    ["/cosmos.distribution.v1beta1.QueryValidatorDistributionInfoResponse", query_7.QueryValidatorDistributionInfoResponse],
    ["/cosmos.distribution.v1beta1.QueryCommunityPoolResponse", query_8.QueryCommunityPoolResponse],
    ["/cosmos.distribution.v1beta1.ValidatorAccumulatedCommissionRecord", genesis_4.ValidatorAccumulatedCommissionRecord],
    ["/cosmos.distribution.v1beta1.ValidatorHistoricalRewardsRecord", genesis_5.ValidatorHistoricalRewardsRecord],
    ["/cosmos.distribution.v1beta1.QueryValidatorSlashesRequest", query_9.QueryValidatorSlashesRequest],
    ["/cosmos.distribution.v1beta1.QueryDelegationRewardsResponse", query_10.QueryDelegationRewardsResponse],
    ["/cosmos.distribution.v1beta1.QueryCommunityPoolRequest", query_11.QueryCommunityPoolRequest],
    ["/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse", tx_8.MsgWithdrawValidatorCommissionResponse],
    ["/cosmos.distribution.v1beta1.CommunityPoolSpendProposal", distribution_7.CommunityPoolSpendProposal],
    ["/cosmos.distribution.v1beta1.DelegatorStartingInfo", distribution_8.DelegatorStartingInfo],
    ["/cosmos.distribution.v1beta1.QueryDelegatorValidatorsRequest", query_12.QueryDelegatorValidatorsRequest],
    ["/cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse", tx_9.MsgSetWithdrawAddressResponse],
    ["/cosmos.distribution.v1beta1.MsgCommunityPoolSpend", tx_10.MsgCommunityPoolSpend],
    ["/cosmos.distribution.v1beta1.MsgUpdateParams", tx_11.MsgUpdateParams],
    ["/cosmos.distribution.v1beta1.DelegatorStartingInfoRecord", genesis_6.DelegatorStartingInfoRecord],
    ["/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressRequest", query_13.QueryDelegatorWithdrawAddressRequest],
    ["/cosmos.distribution.v1beta1.MsgFundCommunityPool", tx_12.MsgFundCommunityPool],
    ["/cosmos.distribution.v1beta1.ValidatorOutstandingRewards", distribution_9.ValidatorOutstandingRewards],
    ["/cosmos.distribution.v1beta1.ValidatorSlashEvent", distribution_10.ValidatorSlashEvent],
    ["/cosmos.distribution.v1beta1.QueryParamsResponse", query_14.QueryParamsResponse],
    ["/cosmos.distribution.v1beta1.QueryValidatorCommissionRequest", query_15.QueryValidatorCommissionRequest],
    ["/cosmos.distribution.v1beta1.QueryDelegationRewardsRequest", query_16.QueryDelegationRewardsRequest],
    ["/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse", query_17.QueryDelegationTotalRewardsResponse],
    ["/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit", distribution_11.CommunityPoolSpendProposalWithDeposit],
    ["/cosmos.distribution.v1beta1.ValidatorSlashEventRecord", genesis_7.ValidatorSlashEventRecord],
    ["/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse", query_18.QueryValidatorOutstandingRewardsResponse],
    ["/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPoolResponse", tx_13.MsgDepositValidatorRewardsPoolResponse],
    ["/cosmos.distribution.v1beta1.QueryParamsRequest", query_19.QueryParamsRequest],
    ["/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsRequest", query_20.QueryDelegationTotalRewardsRequest],
    ["/cosmos.distribution.v1beta1.ValidatorHistoricalRewards", distribution_12.ValidatorHistoricalRewards],
    ["/cosmos.distribution.v1beta1.MsgSetWithdrawAddress", tx_14.MsgSetWithdrawAddress],
    ["/cosmos.distribution.v1beta1.DelegatorWithdrawInfo", genesis_8.DelegatorWithdrawInfo],
];
exports.msgTypes = msgTypes;
