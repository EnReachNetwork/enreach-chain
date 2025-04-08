"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/cosmos/distribution/v1beta1/tx");
const query_1 = require("./types/cosmos/distribution/v1beta1/query");
const query_2 = require("./types/cosmos/distribution/v1beta1/query");
const query_3 = require("./types/cosmos/distribution/v1beta1/query");
const query_4 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_1 = require("./types/cosmos/distribution/v1beta1/distribution");
const distribution_2 = require("./types/cosmos/distribution/v1beta1/distribution");
const tx_2 = require("./types/cosmos/distribution/v1beta1/tx");
const query_5 = require("./types/cosmos/distribution/v1beta1/query");
const query_6 = require("./types/cosmos/distribution/v1beta1/query");
const genesis_1 = require("./types/cosmos/distribution/v1beta1/genesis");
const distribution_3 = require("./types/cosmos/distribution/v1beta1/distribution");
const distribution_4 = require("./types/cosmos/distribution/v1beta1/distribution");
const genesis_2 = require("./types/cosmos/distribution/v1beta1/genesis");
const genesis_3 = require("./types/cosmos/distribution/v1beta1/genesis");
const distribution_5 = require("./types/cosmos/distribution/v1beta1/distribution");
const distribution_6 = require("./types/cosmos/distribution/v1beta1/distribution");
const query_7 = require("./types/cosmos/distribution/v1beta1/query");
const query_8 = require("./types/cosmos/distribution/v1beta1/query");
const genesis_4 = require("./types/cosmos/distribution/v1beta1/genesis");
const genesis_5 = require("./types/cosmos/distribution/v1beta1/genesis");
const tx_3 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_4 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_5 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_6 = require("./types/cosmos/distribution/v1beta1/tx");
const query_9 = require("./types/cosmos/distribution/v1beta1/query");
const query_10 = require("./types/cosmos/distribution/v1beta1/query");
const tx_7 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_8 = require("./types/cosmos/distribution/v1beta1/tx");
const query_11 = require("./types/cosmos/distribution/v1beta1/query");
const query_12 = require("./types/cosmos/distribution/v1beta1/query");
const query_13 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_7 = require("./types/cosmos/distribution/v1beta1/distribution");
const genesis_6 = require("./types/cosmos/distribution/v1beta1/genesis");
const tx_9 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_10 = require("./types/cosmos/distribution/v1beta1/tx");
const query_14 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_8 = require("./types/cosmos/distribution/v1beta1/distribution");
const query_15 = require("./types/cosmos/distribution/v1beta1/query");
const query_16 = require("./types/cosmos/distribution/v1beta1/query");
const tx_11 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_12 = require("./types/cosmos/distribution/v1beta1/tx");
const query_17 = require("./types/cosmos/distribution/v1beta1/query");
const genesis_7 = require("./types/cosmos/distribution/v1beta1/genesis");
const distribution_9 = require("./types/cosmos/distribution/v1beta1/distribution");
const distribution_10 = require("./types/cosmos/distribution/v1beta1/distribution");
const tx_13 = require("./types/cosmos/distribution/v1beta1/tx");
const query_18 = require("./types/cosmos/distribution/v1beta1/query");
const genesis_8 = require("./types/cosmos/distribution/v1beta1/genesis");
const distribution_11 = require("./types/cosmos/distribution/v1beta1/distribution");
const query_19 = require("./types/cosmos/distribution/v1beta1/query");
const query_20 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_12 = require("./types/cosmos/distribution/v1beta1/distribution");
const tx_14 = require("./types/cosmos/distribution/v1beta1/tx");
const msgTypes = [
    ["/cosmos.distribution.v1beta1.MsgFundCommunityPool", tx_1.MsgFundCommunityPool],
    ["/cosmos.distribution.v1beta1.QueryParamsResponse", query_1.QueryParamsResponse],
    ["/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse", query_2.QueryValidatorOutstandingRewardsResponse],
    ["/cosmos.distribution.v1beta1.QueryDelegationRewardsResponse", query_3.QueryDelegationRewardsResponse],
    ["/cosmos.distribution.v1beta1.QueryCommunityPoolRequest", query_4.QueryCommunityPoolRequest],
    ["/cosmos.distribution.v1beta1.Params", distribution_1.Params],
    ["/cosmos.distribution.v1beta1.ValidatorOutstandingRewards", distribution_2.ValidatorOutstandingRewards],
    ["/cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse", tx_2.MsgSetWithdrawAddressResponse],
    ["/cosmos.distribution.v1beta1.QueryValidatorDistributionInfoResponse", query_5.QueryValidatorDistributionInfoResponse],
    ["/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressRequest", query_6.QueryDelegatorWithdrawAddressRequest],
    ["/cosmos.distribution.v1beta1.ValidatorOutstandingRewardsRecord", genesis_1.ValidatorOutstandingRewardsRecord],
    ["/cosmos.distribution.v1beta1.CommunityPoolSpendProposal", distribution_3.CommunityPoolSpendProposal],
    ["/cosmos.distribution.v1beta1.DelegationDelegatorReward", distribution_4.DelegationDelegatorReward],
    ["/cosmos.distribution.v1beta1.DelegatorWithdrawInfo", genesis_2.DelegatorWithdrawInfo],
    ["/cosmos.distribution.v1beta1.GenesisState", genesis_3.GenesisState],
    ["/cosmos.distribution.v1beta1.ValidatorSlashEvent", distribution_5.ValidatorSlashEvent],
    ["/cosmos.distribution.v1beta1.FeePool", distribution_6.FeePool],
    ["/cosmos.distribution.v1beta1.QueryValidatorCommissionResponse", query_7.QueryValidatorCommissionResponse],
    ["/cosmos.distribution.v1beta1.QueryDelegatorValidatorsRequest", query_8.QueryDelegatorValidatorsRequest],
    ["/cosmos.distribution.v1beta1.ValidatorCurrentRewardsRecord", genesis_4.ValidatorCurrentRewardsRecord],
    ["/cosmos.distribution.v1beta1.ValidatorSlashEventRecord", genesis_5.ValidatorSlashEventRecord],
    ["/cosmos.distribution.v1beta1.MsgUpdateParams", tx_3.MsgUpdateParams],
    ["/cosmos.distribution.v1beta1.MsgCommunityPoolSpendResponse", tx_4.MsgCommunityPoolSpendResponse],
    ["/cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse", tx_5.MsgWithdrawDelegatorRewardResponse],
    ["/cosmos.distribution.v1beta1.MsgUpdateParamsResponse", tx_6.MsgUpdateParamsResponse],
    ["/cosmos.distribution.v1beta1.QueryValidatorSlashesRequest", query_9.QueryValidatorSlashesRequest],
    ["/cosmos.distribution.v1beta1.QueryDelegatorValidatorsResponse", query_10.QueryDelegatorValidatorsResponse],
    ["/cosmos.distribution.v1beta1.MsgSetWithdrawAddress", tx_7.MsgSetWithdrawAddress],
    ["/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPoolResponse", tx_8.MsgDepositValidatorRewardsPoolResponse],
    ["/cosmos.distribution.v1beta1.QueryValidatorSlashesResponse", query_11.QueryValidatorSlashesResponse],
    ["/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse", query_12.QueryDelegationTotalRewardsResponse],
    ["/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressResponse", query_13.QueryDelegatorWithdrawAddressResponse],
    ["/cosmos.distribution.v1beta1.DelegatorStartingInfo", distribution_7.DelegatorStartingInfo],
    ["/cosmos.distribution.v1beta1.DelegatorStartingInfoRecord", genesis_6.DelegatorStartingInfoRecord],
    ["/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission", tx_9.MsgWithdrawValidatorCommission],
    ["/cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse", tx_10.MsgFundCommunityPoolResponse],
    ["/cosmos.distribution.v1beta1.QueryParamsRequest", query_14.QueryParamsRequest],
    ["/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit", distribution_8.CommunityPoolSpendProposalWithDeposit],
    ["/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsRequest", query_15.QueryValidatorOutstandingRewardsRequest],
    ["/cosmos.distribution.v1beta1.QueryValidatorCommissionRequest", query_16.QueryValidatorCommissionRequest],
    ["/cosmos.distribution.v1beta1.MsgCommunityPoolSpend", tx_11.MsgCommunityPoolSpend],
    ["/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPool", tx_12.MsgDepositValidatorRewardsPool],
    ["/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsRequest", query_17.QueryDelegationTotalRewardsRequest],
    ["/cosmos.distribution.v1beta1.ValidatorAccumulatedCommissionRecord", genesis_7.ValidatorAccumulatedCommissionRecord],
    ["/cosmos.distribution.v1beta1.ValidatorHistoricalRewards", distribution_9.ValidatorHistoricalRewards],
    ["/cosmos.distribution.v1beta1.ValidatorAccumulatedCommission", distribution_10.ValidatorAccumulatedCommission],
    ["/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse", tx_13.MsgWithdrawValidatorCommissionResponse],
    ["/cosmos.distribution.v1beta1.QueryValidatorDistributionInfoRequest", query_18.QueryValidatorDistributionInfoRequest],
    ["/cosmos.distribution.v1beta1.ValidatorHistoricalRewardsRecord", genesis_8.ValidatorHistoricalRewardsRecord],
    ["/cosmos.distribution.v1beta1.ValidatorCurrentRewards", distribution_11.ValidatorCurrentRewards],
    ["/cosmos.distribution.v1beta1.QueryDelegationRewardsRequest", query_19.QueryDelegationRewardsRequest],
    ["/cosmos.distribution.v1beta1.QueryCommunityPoolResponse", query_20.QueryCommunityPoolResponse],
    ["/cosmos.distribution.v1beta1.ValidatorSlashEvents", distribution_12.ValidatorSlashEvents],
    ["/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward", tx_14.MsgWithdrawDelegatorReward],
];
exports.msgTypes = msgTypes;
