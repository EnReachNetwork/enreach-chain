"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const query_1 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_1 = require("./types/cosmos/distribution/v1beta1/distribution");
const distribution_2 = require("./types/cosmos/distribution/v1beta1/distribution");
const tx_1 = require("./types/cosmos/distribution/v1beta1/tx");
const query_2 = require("./types/cosmos/distribution/v1beta1/query");
const query_3 = require("./types/cosmos/distribution/v1beta1/query");
const tx_2 = require("./types/cosmos/distribution/v1beta1/tx");
const query_4 = require("./types/cosmos/distribution/v1beta1/query");
const genesis_1 = require("./types/cosmos/distribution/v1beta1/genesis");
const tx_3 = require("./types/cosmos/distribution/v1beta1/tx");
const query_5 = require("./types/cosmos/distribution/v1beta1/query");
const genesis_2 = require("./types/cosmos/distribution/v1beta1/genesis");
const tx_4 = require("./types/cosmos/distribution/v1beta1/tx");
const distribution_3 = require("./types/cosmos/distribution/v1beta1/distribution");
const query_6 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_4 = require("./types/cosmos/distribution/v1beta1/distribution");
const tx_5 = require("./types/cosmos/distribution/v1beta1/tx");
const query_7 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_5 = require("./types/cosmos/distribution/v1beta1/distribution");
const query_8 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_6 = require("./types/cosmos/distribution/v1beta1/distribution");
const query_9 = require("./types/cosmos/distribution/v1beta1/query");
const genesis_3 = require("./types/cosmos/distribution/v1beta1/genesis");
const tx_6 = require("./types/cosmos/distribution/v1beta1/tx");
const query_10 = require("./types/cosmos/distribution/v1beta1/query");
const tx_7 = require("./types/cosmos/distribution/v1beta1/tx");
const genesis_4 = require("./types/cosmos/distribution/v1beta1/genesis");
const query_11 = require("./types/cosmos/distribution/v1beta1/query");
const genesis_5 = require("./types/cosmos/distribution/v1beta1/genesis");
const tx_8 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_9 = require("./types/cosmos/distribution/v1beta1/tx");
const query_12 = require("./types/cosmos/distribution/v1beta1/query");
const query_13 = require("./types/cosmos/distribution/v1beta1/query");
const query_14 = require("./types/cosmos/distribution/v1beta1/query");
const query_15 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_7 = require("./types/cosmos/distribution/v1beta1/distribution");
const genesis_6 = require("./types/cosmos/distribution/v1beta1/genesis");
const tx_10 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_11 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_12 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_13 = require("./types/cosmos/distribution/v1beta1/tx");
const query_16 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_8 = require("./types/cosmos/distribution/v1beta1/distribution");
const distribution_9 = require("./types/cosmos/distribution/v1beta1/distribution");
const distribution_10 = require("./types/cosmos/distribution/v1beta1/distribution");
const query_17 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_11 = require("./types/cosmos/distribution/v1beta1/distribution");
const genesis_7 = require("./types/cosmos/distribution/v1beta1/genesis");
const genesis_8 = require("./types/cosmos/distribution/v1beta1/genesis");
const query_18 = require("./types/cosmos/distribution/v1beta1/query");
const tx_14 = require("./types/cosmos/distribution/v1beta1/tx");
const query_19 = require("./types/cosmos/distribution/v1beta1/query");
const query_20 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_12 = require("./types/cosmos/distribution/v1beta1/distribution");
const msgTypes = [
    ["/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsRequest", query_1.QueryDelegationTotalRewardsRequest],
    ["/cosmos.distribution.v1beta1.DelegatorStartingInfo", distribution_1.DelegatorStartingInfo],
    ["/cosmos.distribution.v1beta1.DelegationDelegatorReward", distribution_2.DelegationDelegatorReward],
    ["/cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse", tx_1.MsgFundCommunityPoolResponse],
    ["/cosmos.distribution.v1beta1.QueryValidatorDistributionInfoRequest", query_2.QueryValidatorDistributionInfoRequest],
    ["/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsRequest", query_3.QueryValidatorOutstandingRewardsRequest],
    ["/cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse", tx_2.MsgSetWithdrawAddressResponse],
    ["/cosmos.distribution.v1beta1.QueryDelegatorValidatorsRequest", query_4.QueryDelegatorValidatorsRequest],
    ["/cosmos.distribution.v1beta1.ValidatorHistoricalRewardsRecord", genesis_1.ValidatorHistoricalRewardsRecord],
    ["/cosmos.distribution.v1beta1.MsgUpdateParams", tx_3.MsgUpdateParams],
    ["/cosmos.distribution.v1beta1.QueryCommunityPoolRequest", query_5.QueryCommunityPoolRequest],
    ["/cosmos.distribution.v1beta1.DelegatorWithdrawInfo", genesis_2.DelegatorWithdrawInfo],
    ["/cosmos.distribution.v1beta1.MsgCommunityPoolSpend", tx_4.MsgCommunityPoolSpend],
    ["/cosmos.distribution.v1beta1.Params", distribution_3.Params],
    ["/cosmos.distribution.v1beta1.QueryDelegatorValidatorsResponse", query_6.QueryDelegatorValidatorsResponse],
    ["/cosmos.distribution.v1beta1.CommunityPoolSpendProposal", distribution_4.CommunityPoolSpendProposal],
    ["/cosmos.distribution.v1beta1.MsgSetWithdrawAddress", tx_5.MsgSetWithdrawAddress],
    ["/cosmos.distribution.v1beta1.QueryParamsRequest", query_7.QueryParamsRequest],
    ["/cosmos.distribution.v1beta1.ValidatorOutstandingRewards", distribution_5.ValidatorOutstandingRewards],
    ["/cosmos.distribution.v1beta1.QueryParamsResponse", query_8.QueryParamsResponse],
    ["/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit", distribution_6.CommunityPoolSpendProposalWithDeposit],
    ["/cosmos.distribution.v1beta1.QueryValidatorDistributionInfoResponse", query_9.QueryValidatorDistributionInfoResponse],
    ["/cosmos.distribution.v1beta1.ValidatorCurrentRewardsRecord", genesis_3.ValidatorCurrentRewardsRecord],
    ["/cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse", tx_6.MsgWithdrawDelegatorRewardResponse],
    ["/cosmos.distribution.v1beta1.QueryDelegationRewardsResponse", query_10.QueryDelegationRewardsResponse],
    ["/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPoolResponse", tx_7.MsgDepositValidatorRewardsPoolResponse],
    ["/cosmos.distribution.v1beta1.ValidatorOutstandingRewardsRecord", genesis_4.ValidatorOutstandingRewardsRecord],
    ["/cosmos.distribution.v1beta1.QueryCommunityPoolResponse", query_11.QueryCommunityPoolResponse],
    ["/cosmos.distribution.v1beta1.GenesisState", genesis_5.GenesisState],
    ["/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission", tx_8.MsgWithdrawValidatorCommission],
    ["/cosmos.distribution.v1beta1.MsgCommunityPoolSpendResponse", tx_9.MsgCommunityPoolSpendResponse],
    ["/cosmos.distribution.v1beta1.QueryValidatorSlashesRequest", query_12.QueryValidatorSlashesRequest],
    ["/cosmos.distribution.v1beta1.QueryValidatorCommissionResponse", query_13.QueryValidatorCommissionResponse],
    ["/cosmos.distribution.v1beta1.QueryValidatorSlashesResponse", query_14.QueryValidatorSlashesResponse],
    ["/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse", query_15.QueryDelegationTotalRewardsResponse],
    ["/cosmos.distribution.v1beta1.ValidatorSlashEvents", distribution_7.ValidatorSlashEvents],
    ["/cosmos.distribution.v1beta1.ValidatorAccumulatedCommissionRecord", genesis_6.ValidatorAccumulatedCommissionRecord],
    ["/cosmos.distribution.v1beta1.MsgFundCommunityPool", tx_10.MsgFundCommunityPool],
    ["/cosmos.distribution.v1beta1.MsgUpdateParamsResponse", tx_11.MsgUpdateParamsResponse],
    ["/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPool", tx_12.MsgDepositValidatorRewardsPool],
    ["/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse", tx_13.MsgWithdrawValidatorCommissionResponse],
    ["/cosmos.distribution.v1beta1.QueryDelegationRewardsRequest", query_16.QueryDelegationRewardsRequest],
    ["/cosmos.distribution.v1beta1.ValidatorHistoricalRewards", distribution_8.ValidatorHistoricalRewards],
    ["/cosmos.distribution.v1beta1.ValidatorAccumulatedCommission", distribution_9.ValidatorAccumulatedCommission],
    ["/cosmos.distribution.v1beta1.FeePool", distribution_10.FeePool],
    ["/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressRequest", query_17.QueryDelegatorWithdrawAddressRequest],
    ["/cosmos.distribution.v1beta1.ValidatorSlashEvent", distribution_11.ValidatorSlashEvent],
    ["/cosmos.distribution.v1beta1.DelegatorStartingInfoRecord", genesis_7.DelegatorStartingInfoRecord],
    ["/cosmos.distribution.v1beta1.ValidatorSlashEventRecord", genesis_8.ValidatorSlashEventRecord],
    ["/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse", query_18.QueryValidatorOutstandingRewardsResponse],
    ["/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward", tx_14.MsgWithdrawDelegatorReward],
    ["/cosmos.distribution.v1beta1.QueryValidatorCommissionRequest", query_19.QueryValidatorCommissionRequest],
    ["/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressResponse", query_20.QueryDelegatorWithdrawAddressResponse],
    ["/cosmos.distribution.v1beta1.ValidatorCurrentRewards", distribution_12.ValidatorCurrentRewards],
];
exports.msgTypes = msgTypes;
