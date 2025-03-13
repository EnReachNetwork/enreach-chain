"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_2 = require("./types/cosmos/distribution/v1beta1/tx");
const distribution_1 = require("./types/cosmos/distribution/v1beta1/distribution");
const query_1 = require("./types/cosmos/distribution/v1beta1/query");
const tx_3 = require("./types/cosmos/distribution/v1beta1/tx");
const query_2 = require("./types/cosmos/distribution/v1beta1/query");
const tx_4 = require("./types/cosmos/distribution/v1beta1/tx");
const distribution_2 = require("./types/cosmos/distribution/v1beta1/distribution");
const genesis_1 = require("./types/cosmos/distribution/v1beta1/genesis");
const query_3 = require("./types/cosmos/distribution/v1beta1/query");
const genesis_2 = require("./types/cosmos/distribution/v1beta1/genesis");
const query_4 = require("./types/cosmos/distribution/v1beta1/query");
const query_5 = require("./types/cosmos/distribution/v1beta1/query");
const query_6 = require("./types/cosmos/distribution/v1beta1/query");
const tx_5 = require("./types/cosmos/distribution/v1beta1/tx");
const query_7 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_3 = require("./types/cosmos/distribution/v1beta1/distribution");
const tx_6 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_7 = require("./types/cosmos/distribution/v1beta1/tx");
const genesis_3 = require("./types/cosmos/distribution/v1beta1/genesis");
const query_8 = require("./types/cosmos/distribution/v1beta1/query");
const query_9 = require("./types/cosmos/distribution/v1beta1/query");
const query_10 = require("./types/cosmos/distribution/v1beta1/query");
const genesis_4 = require("./types/cosmos/distribution/v1beta1/genesis");
const genesis_5 = require("./types/cosmos/distribution/v1beta1/genesis");
const query_11 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_4 = require("./types/cosmos/distribution/v1beta1/distribution");
const query_12 = require("./types/cosmos/distribution/v1beta1/query");
const tx_8 = require("./types/cosmos/distribution/v1beta1/tx");
const distribution_5 = require("./types/cosmos/distribution/v1beta1/distribution");
const genesis_6 = require("./types/cosmos/distribution/v1beta1/genesis");
const genesis_7 = require("./types/cosmos/distribution/v1beta1/genesis");
const distribution_6 = require("./types/cosmos/distribution/v1beta1/distribution");
const query_13 = require("./types/cosmos/distribution/v1beta1/query");
const query_14 = require("./types/cosmos/distribution/v1beta1/query");
const query_15 = require("./types/cosmos/distribution/v1beta1/query");
const tx_9 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_10 = require("./types/cosmos/distribution/v1beta1/tx");
const distribution_7 = require("./types/cosmos/distribution/v1beta1/distribution");
const distribution_8 = require("./types/cosmos/distribution/v1beta1/distribution");
const query_16 = require("./types/cosmos/distribution/v1beta1/query");
const query_17 = require("./types/cosmos/distribution/v1beta1/query");
const tx_11 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_12 = require("./types/cosmos/distribution/v1beta1/tx");
const distribution_9 = require("./types/cosmos/distribution/v1beta1/distribution");
const distribution_10 = require("./types/cosmos/distribution/v1beta1/distribution");
const distribution_11 = require("./types/cosmos/distribution/v1beta1/distribution");
const tx_13 = require("./types/cosmos/distribution/v1beta1/tx");
const distribution_12 = require("./types/cosmos/distribution/v1beta1/distribution");
const query_18 = require("./types/cosmos/distribution/v1beta1/query");
const query_19 = require("./types/cosmos/distribution/v1beta1/query");
const tx_14 = require("./types/cosmos/distribution/v1beta1/tx");
const genesis_8 = require("./types/cosmos/distribution/v1beta1/genesis");
const query_20 = require("./types/cosmos/distribution/v1beta1/query");
const msgTypes = [
    ["/cosmos.distribution.v1beta1.MsgFundCommunityPool", tx_1.MsgFundCommunityPool],
    ["/cosmos.distribution.v1beta1.MsgCommunityPoolSpendResponse", tx_2.MsgCommunityPoolSpendResponse],
    ["/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit", distribution_1.CommunityPoolSpendProposalWithDeposit],
    ["/cosmos.distribution.v1beta1.QueryValidatorCommissionResponse", query_1.QueryValidatorCommissionResponse],
    ["/cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse", tx_3.MsgWithdrawDelegatorRewardResponse],
    ["/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsRequest", query_2.QueryValidatorOutstandingRewardsRequest],
    ["/cosmos.distribution.v1beta1.MsgSetWithdrawAddress", tx_4.MsgSetWithdrawAddress],
    ["/cosmos.distribution.v1beta1.CommunityPoolSpendProposal", distribution_2.CommunityPoolSpendProposal],
    ["/cosmos.distribution.v1beta1.DelegatorWithdrawInfo", genesis_1.DelegatorWithdrawInfo],
    ["/cosmos.distribution.v1beta1.QueryValidatorSlashesRequest", query_3.QueryValidatorSlashesRequest],
    ["/cosmos.distribution.v1beta1.ValidatorHistoricalRewardsRecord", genesis_2.ValidatorHistoricalRewardsRecord],
    ["/cosmos.distribution.v1beta1.QueryValidatorSlashesResponse", query_4.QueryValidatorSlashesResponse],
    ["/cosmos.distribution.v1beta1.QueryDelegationRewardsRequest", query_5.QueryDelegationRewardsRequest],
    ["/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressRequest", query_6.QueryDelegatorWithdrawAddressRequest],
    ["/cosmos.distribution.v1beta1.MsgUpdateParams", tx_5.MsgUpdateParams],
    ["/cosmos.distribution.v1beta1.QueryCommunityPoolRequest", query_7.QueryCommunityPoolRequest],
    ["/cosmos.distribution.v1beta1.FeePool", distribution_3.FeePool],
    ["/cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse", tx_6.MsgFundCommunityPoolResponse],
    ["/cosmos.distribution.v1beta1.MsgUpdateParamsResponse", tx_7.MsgUpdateParamsResponse],
    ["/cosmos.distribution.v1beta1.ValidatorSlashEventRecord", genesis_3.ValidatorSlashEventRecord],
    ["/cosmos.distribution.v1beta1.QueryDelegationRewardsResponse", query_8.QueryDelegationRewardsResponse],
    ["/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse", query_9.QueryDelegationTotalRewardsResponse],
    ["/cosmos.distribution.v1beta1.QueryDelegatorValidatorsRequest", query_10.QueryDelegatorValidatorsRequest],
    ["/cosmos.distribution.v1beta1.ValidatorOutstandingRewardsRecord", genesis_4.ValidatorOutstandingRewardsRecord],
    ["/cosmos.distribution.v1beta1.ValidatorCurrentRewardsRecord", genesis_5.ValidatorCurrentRewardsRecord],
    ["/cosmos.distribution.v1beta1.QueryParamsResponse", query_11.QueryParamsResponse],
    ["/cosmos.distribution.v1beta1.ValidatorOutstandingRewards", distribution_4.ValidatorOutstandingRewards],
    ["/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressResponse", query_12.QueryDelegatorWithdrawAddressResponse],
    ["/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward", tx_8.MsgWithdrawDelegatorReward],
    ["/cosmos.distribution.v1beta1.ValidatorHistoricalRewards", distribution_5.ValidatorHistoricalRewards],
    ["/cosmos.distribution.v1beta1.GenesisState", genesis_6.GenesisState],
    ["/cosmos.distribution.v1beta1.ValidatorAccumulatedCommissionRecord", genesis_7.ValidatorAccumulatedCommissionRecord],
    ["/cosmos.distribution.v1beta1.Params", distribution_6.Params],
    ["/cosmos.distribution.v1beta1.QueryParamsRequest", query_13.QueryParamsRequest],
    ["/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse", query_14.QueryValidatorOutstandingRewardsResponse],
    ["/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsRequest", query_15.QueryDelegationTotalRewardsRequest],
    ["/cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse", tx_9.MsgSetWithdrawAddressResponse],
    ["/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPool", tx_10.MsgDepositValidatorRewardsPool],
    ["/cosmos.distribution.v1beta1.ValidatorSlashEvents", distribution_7.ValidatorSlashEvents],
    ["/cosmos.distribution.v1beta1.DelegatorStartingInfo", distribution_8.DelegatorStartingInfo],
    ["/cosmos.distribution.v1beta1.QueryValidatorDistributionInfoRequest", query_16.QueryValidatorDistributionInfoRequest],
    ["/cosmos.distribution.v1beta1.QueryCommunityPoolResponse", query_17.QueryCommunityPoolResponse],
    ["/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission", tx_11.MsgWithdrawValidatorCommission],
    ["/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPoolResponse", tx_12.MsgDepositValidatorRewardsPoolResponse],
    ["/cosmos.distribution.v1beta1.ValidatorAccumulatedCommission", distribution_9.ValidatorAccumulatedCommission],
    ["/cosmos.distribution.v1beta1.ValidatorSlashEvent", distribution_10.ValidatorSlashEvent],
    ["/cosmos.distribution.v1beta1.DelegationDelegatorReward", distribution_11.DelegationDelegatorReward],
    ["/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse", tx_13.MsgWithdrawValidatorCommissionResponse],
    ["/cosmos.distribution.v1beta1.ValidatorCurrentRewards", distribution_12.ValidatorCurrentRewards],
    ["/cosmos.distribution.v1beta1.QueryValidatorDistributionInfoResponse", query_18.QueryValidatorDistributionInfoResponse],
    ["/cosmos.distribution.v1beta1.QueryValidatorCommissionRequest", query_19.QueryValidatorCommissionRequest],
    ["/cosmos.distribution.v1beta1.MsgCommunityPoolSpend", tx_14.MsgCommunityPoolSpend],
    ["/cosmos.distribution.v1beta1.DelegatorStartingInfoRecord", genesis_8.DelegatorStartingInfoRecord],
    ["/cosmos.distribution.v1beta1.QueryDelegatorValidatorsResponse", query_20.QueryDelegatorValidatorsResponse],
];
exports.msgTypes = msgTypes;
