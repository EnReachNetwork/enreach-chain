"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const genesis_1 = require("./types/cosmos/distribution/v1beta1/genesis");
const query_1 = require("./types/cosmos/distribution/v1beta1/query");
const query_2 = require("./types/cosmos/distribution/v1beta1/query");
const query_3 = require("./types/cosmos/distribution/v1beta1/query");
const genesis_2 = require("./types/cosmos/distribution/v1beta1/genesis");
const distribution_1 = require("./types/cosmos/distribution/v1beta1/distribution");
const genesis_3 = require("./types/cosmos/distribution/v1beta1/genesis");
const genesis_4 = require("./types/cosmos/distribution/v1beta1/genesis");
const tx_1 = require("./types/cosmos/distribution/v1beta1/tx");
const query_4 = require("./types/cosmos/distribution/v1beta1/query");
const query_5 = require("./types/cosmos/distribution/v1beta1/query");
const genesis_5 = require("./types/cosmos/distribution/v1beta1/genesis");
const query_6 = require("./types/cosmos/distribution/v1beta1/query");
const tx_2 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_3 = require("./types/cosmos/distribution/v1beta1/tx");
const distribution_2 = require("./types/cosmos/distribution/v1beta1/distribution");
const distribution_3 = require("./types/cosmos/distribution/v1beta1/distribution");
const distribution_4 = require("./types/cosmos/distribution/v1beta1/distribution");
const genesis_6 = require("./types/cosmos/distribution/v1beta1/genesis");
const distribution_5 = require("./types/cosmos/distribution/v1beta1/distribution");
const query_7 = require("./types/cosmos/distribution/v1beta1/query");
const genesis_7 = require("./types/cosmos/distribution/v1beta1/genesis");
const tx_4 = require("./types/cosmos/distribution/v1beta1/tx");
const distribution_6 = require("./types/cosmos/distribution/v1beta1/distribution");
const query_8 = require("./types/cosmos/distribution/v1beta1/query");
const query_9 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_7 = require("./types/cosmos/distribution/v1beta1/distribution");
const distribution_8 = require("./types/cosmos/distribution/v1beta1/distribution");
const distribution_9 = require("./types/cosmos/distribution/v1beta1/distribution");
const genesis_8 = require("./types/cosmos/distribution/v1beta1/genesis");
const query_10 = require("./types/cosmos/distribution/v1beta1/query");
const tx_5 = require("./types/cosmos/distribution/v1beta1/tx");
const query_11 = require("./types/cosmos/distribution/v1beta1/query");
const query_12 = require("./types/cosmos/distribution/v1beta1/query");
const tx_6 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_7 = require("./types/cosmos/distribution/v1beta1/tx");
const query_13 = require("./types/cosmos/distribution/v1beta1/query");
const tx_8 = require("./types/cosmos/distribution/v1beta1/tx");
const distribution_10 = require("./types/cosmos/distribution/v1beta1/distribution");
const distribution_11 = require("./types/cosmos/distribution/v1beta1/distribution");
const query_14 = require("./types/cosmos/distribution/v1beta1/query");
const tx_9 = require("./types/cosmos/distribution/v1beta1/tx");
const distribution_12 = require("./types/cosmos/distribution/v1beta1/distribution");
const query_15 = require("./types/cosmos/distribution/v1beta1/query");
const tx_10 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_11 = require("./types/cosmos/distribution/v1beta1/tx");
const query_16 = require("./types/cosmos/distribution/v1beta1/query");
const query_17 = require("./types/cosmos/distribution/v1beta1/query");
const query_18 = require("./types/cosmos/distribution/v1beta1/query");
const query_19 = require("./types/cosmos/distribution/v1beta1/query");
const query_20 = require("./types/cosmos/distribution/v1beta1/query");
const tx_12 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_13 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_14 = require("./types/cosmos/distribution/v1beta1/tx");
const msgTypes = [
    ["/cosmos.distribution.v1beta1.ValidatorOutstandingRewardsRecord", genesis_1.ValidatorOutstandingRewardsRecord],
    ["/cosmos.distribution.v1beta1.QueryValidatorDistributionInfoResponse", query_1.QueryValidatorDistributionInfoResponse],
    ["/cosmos.distribution.v1beta1.QueryDelegatorValidatorsResponse", query_2.QueryDelegatorValidatorsResponse],
    ["/cosmos.distribution.v1beta1.QueryCommunityPoolRequest", query_3.QueryCommunityPoolRequest],
    ["/cosmos.distribution.v1beta1.DelegatorWithdrawInfo", genesis_2.DelegatorWithdrawInfo],
    ["/cosmos.distribution.v1beta1.CommunityPoolSpendProposal", distribution_1.CommunityPoolSpendProposal],
    ["/cosmos.distribution.v1beta1.ValidatorHistoricalRewardsRecord", genesis_3.ValidatorHistoricalRewardsRecord],
    ["/cosmos.distribution.v1beta1.ValidatorCurrentRewardsRecord", genesis_4.ValidatorCurrentRewardsRecord],
    ["/cosmos.distribution.v1beta1.MsgUpdateParamsResponse", tx_1.MsgUpdateParamsResponse],
    ["/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse", query_4.QueryValidatorOutstandingRewardsResponse],
    ["/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse", query_5.QueryDelegationTotalRewardsResponse],
    ["/cosmos.distribution.v1beta1.GenesisState", genesis_5.GenesisState],
    ["/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsRequest", query_6.QueryDelegationTotalRewardsRequest],
    ["/cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse", tx_2.MsgWithdrawDelegatorRewardResponse],
    ["/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission", tx_3.MsgWithdrawValidatorCommission],
    ["/cosmos.distribution.v1beta1.ValidatorOutstandingRewards", distribution_2.ValidatorOutstandingRewards],
    ["/cosmos.distribution.v1beta1.ValidatorAccumulatedCommission", distribution_3.ValidatorAccumulatedCommission],
    ["/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit", distribution_4.CommunityPoolSpendProposalWithDeposit],
    ["/cosmos.distribution.v1beta1.DelegatorStartingInfoRecord", genesis_6.DelegatorStartingInfoRecord],
    ["/cosmos.distribution.v1beta1.ValidatorSlashEvents", distribution_5.ValidatorSlashEvents],
    ["/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressRequest", query_7.QueryDelegatorWithdrawAddressRequest],
    ["/cosmos.distribution.v1beta1.ValidatorSlashEventRecord", genesis_7.ValidatorSlashEventRecord],
    ["/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse", tx_4.MsgWithdrawValidatorCommissionResponse],
    ["/cosmos.distribution.v1beta1.ValidatorCurrentRewards", distribution_6.ValidatorCurrentRewards],
    ["/cosmos.distribution.v1beta1.QueryParamsRequest", query_8.QueryParamsRequest],
    ["/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressResponse", query_9.QueryDelegatorWithdrawAddressResponse],
    ["/cosmos.distribution.v1beta1.ValidatorHistoricalRewards", distribution_7.ValidatorHistoricalRewards],
    ["/cosmos.distribution.v1beta1.DelegationDelegatorReward", distribution_8.DelegationDelegatorReward],
    ["/cosmos.distribution.v1beta1.FeePool", distribution_9.FeePool],
    ["/cosmos.distribution.v1beta1.ValidatorAccumulatedCommissionRecord", genesis_8.ValidatorAccumulatedCommissionRecord],
    ["/cosmos.distribution.v1beta1.QueryValidatorCommissionRequest", query_10.QueryValidatorCommissionRequest],
    ["/cosmos.distribution.v1beta1.MsgUpdateParams", tx_5.MsgUpdateParams],
    ["/cosmos.distribution.v1beta1.QueryValidatorDistributionInfoRequest", query_11.QueryValidatorDistributionInfoRequest],
    ["/cosmos.distribution.v1beta1.QueryValidatorSlashesResponse", query_12.QueryValidatorSlashesResponse],
    ["/cosmos.distribution.v1beta1.MsgFundCommunityPool", tx_6.MsgFundCommunityPool],
    ["/cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse", tx_7.MsgFundCommunityPoolResponse],
    ["/cosmos.distribution.v1beta1.QueryCommunityPoolResponse", query_13.QueryCommunityPoolResponse],
    ["/cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse", tx_8.MsgSetWithdrawAddressResponse],
    ["/cosmos.distribution.v1beta1.DelegatorStartingInfo", distribution_10.DelegatorStartingInfo],
    ["/cosmos.distribution.v1beta1.Params", distribution_11.Params],
    ["/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsRequest", query_14.QueryValidatorOutstandingRewardsRequest],
    ["/cosmos.distribution.v1beta1.MsgSetWithdrawAddress", tx_9.MsgSetWithdrawAddress],
    ["/cosmos.distribution.v1beta1.ValidatorSlashEvent", distribution_12.ValidatorSlashEvent],
    ["/cosmos.distribution.v1beta1.QueryDelegatorValidatorsRequest", query_15.QueryDelegatorValidatorsRequest],
    ["/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward", tx_10.MsgWithdrawDelegatorReward],
    ["/cosmos.distribution.v1beta1.MsgCommunityPoolSpend", tx_11.MsgCommunityPoolSpend],
    ["/cosmos.distribution.v1beta1.QueryParamsResponse", query_16.QueryParamsResponse],
    ["/cosmos.distribution.v1beta1.QueryValidatorCommissionResponse", query_17.QueryValidatorCommissionResponse],
    ["/cosmos.distribution.v1beta1.QueryValidatorSlashesRequest", query_18.QueryValidatorSlashesRequest],
    ["/cosmos.distribution.v1beta1.QueryDelegationRewardsResponse", query_19.QueryDelegationRewardsResponse],
    ["/cosmos.distribution.v1beta1.QueryDelegationRewardsRequest", query_20.QueryDelegationRewardsRequest],
    ["/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPool", tx_12.MsgDepositValidatorRewardsPool],
    ["/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPoolResponse", tx_13.MsgDepositValidatorRewardsPoolResponse],
    ["/cosmos.distribution.v1beta1.MsgCommunityPoolSpendResponse", tx_14.MsgCommunityPoolSpendResponse],
];
exports.msgTypes = msgTypes;
