"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const query_1 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_1 = require("./types/cosmos/distribution/v1beta1/distribution");
const query_2 = require("./types/cosmos/distribution/v1beta1/query");
const query_3 = require("./types/cosmos/distribution/v1beta1/query");
const query_4 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_2 = require("./types/cosmos/distribution/v1beta1/distribution");
const tx_1 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_2 = require("./types/cosmos/distribution/v1beta1/tx");
const genesis_1 = require("./types/cosmos/distribution/v1beta1/genesis");
const query_5 = require("./types/cosmos/distribution/v1beta1/query");
const genesis_2 = require("./types/cosmos/distribution/v1beta1/genesis");
const tx_3 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_4 = require("./types/cosmos/distribution/v1beta1/tx");
const query_6 = require("./types/cosmos/distribution/v1beta1/query");
const query_7 = require("./types/cosmos/distribution/v1beta1/query");
const tx_5 = require("./types/cosmos/distribution/v1beta1/tx");
const query_8 = require("./types/cosmos/distribution/v1beta1/query");
const genesis_3 = require("./types/cosmos/distribution/v1beta1/genesis");
const genesis_4 = require("./types/cosmos/distribution/v1beta1/genesis");
const genesis_5 = require("./types/cosmos/distribution/v1beta1/genesis");
const distribution_3 = require("./types/cosmos/distribution/v1beta1/distribution");
const distribution_4 = require("./types/cosmos/distribution/v1beta1/distribution");
const distribution_5 = require("./types/cosmos/distribution/v1beta1/distribution");
const query_9 = require("./types/cosmos/distribution/v1beta1/query");
const tx_6 = require("./types/cosmos/distribution/v1beta1/tx");
const query_10 = require("./types/cosmos/distribution/v1beta1/query");
const query_11 = require("./types/cosmos/distribution/v1beta1/query");
const genesis_6 = require("./types/cosmos/distribution/v1beta1/genesis");
const distribution_6 = require("./types/cosmos/distribution/v1beta1/distribution");
const tx_7 = require("./types/cosmos/distribution/v1beta1/tx");
const query_12 = require("./types/cosmos/distribution/v1beta1/query");
const genesis_7 = require("./types/cosmos/distribution/v1beta1/genesis");
const distribution_7 = require("./types/cosmos/distribution/v1beta1/distribution");
const tx_8 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_9 = require("./types/cosmos/distribution/v1beta1/tx");
const query_13 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_8 = require("./types/cosmos/distribution/v1beta1/distribution");
const tx_10 = require("./types/cosmos/distribution/v1beta1/tx");
const query_14 = require("./types/cosmos/distribution/v1beta1/query");
const tx_11 = require("./types/cosmos/distribution/v1beta1/tx");
const query_15 = require("./types/cosmos/distribution/v1beta1/query");
const query_16 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_9 = require("./types/cosmos/distribution/v1beta1/distribution");
const tx_12 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_13 = require("./types/cosmos/distribution/v1beta1/tx");
const query_17 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_10 = require("./types/cosmos/distribution/v1beta1/distribution");
const tx_14 = require("./types/cosmos/distribution/v1beta1/tx");
const genesis_8 = require("./types/cosmos/distribution/v1beta1/genesis");
const distribution_11 = require("./types/cosmos/distribution/v1beta1/distribution");
const distribution_12 = require("./types/cosmos/distribution/v1beta1/distribution");
const query_18 = require("./types/cosmos/distribution/v1beta1/query");
const query_19 = require("./types/cosmos/distribution/v1beta1/query");
const query_20 = require("./types/cosmos/distribution/v1beta1/query");
const msgTypes = [
    ["/cosmos.distribution.v1beta1.QueryDelegatorValidatorsRequest", query_1.QueryDelegatorValidatorsRequest],
    ["/cosmos.distribution.v1beta1.FeePool", distribution_1.FeePool],
    ["/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsRequest", query_2.QueryValidatorOutstandingRewardsRequest],
    ["/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse", query_3.QueryValidatorOutstandingRewardsResponse],
    ["/cosmos.distribution.v1beta1.QueryValidatorCommissionRequest", query_4.QueryValidatorCommissionRequest],
    ["/cosmos.distribution.v1beta1.DelegatorStartingInfo", distribution_2.DelegatorStartingInfo],
    ["/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward", tx_1.MsgWithdrawDelegatorReward],
    ["/cosmos.distribution.v1beta1.MsgUpdateParamsResponse", tx_2.MsgUpdateParamsResponse],
    ["/cosmos.distribution.v1beta1.DelegatorStartingInfoRecord", genesis_1.DelegatorStartingInfoRecord],
    ["/cosmos.distribution.v1beta1.QueryDelegationRewardsRequest", query_5.QueryDelegationRewardsRequest],
    ["/cosmos.distribution.v1beta1.GenesisState", genesis_2.GenesisState],
    ["/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission", tx_3.MsgWithdrawValidatorCommission],
    ["/cosmos.distribution.v1beta1.MsgUpdateParams", tx_4.MsgUpdateParams],
    ["/cosmos.distribution.v1beta1.QueryValidatorDistributionInfoResponse", query_6.QueryValidatorDistributionInfoResponse],
    ["/cosmos.distribution.v1beta1.QueryValidatorSlashesResponse", query_7.QueryValidatorSlashesResponse],
    ["/cosmos.distribution.v1beta1.MsgCommunityPoolSpendResponse", tx_5.MsgCommunityPoolSpendResponse],
    ["/cosmos.distribution.v1beta1.QueryCommunityPoolResponse", query_8.QueryCommunityPoolResponse],
    ["/cosmos.distribution.v1beta1.ValidatorHistoricalRewardsRecord", genesis_3.ValidatorHistoricalRewardsRecord],
    ["/cosmos.distribution.v1beta1.DelegatorWithdrawInfo", genesis_4.DelegatorWithdrawInfo],
    ["/cosmos.distribution.v1beta1.ValidatorSlashEventRecord", genesis_5.ValidatorSlashEventRecord],
    ["/cosmos.distribution.v1beta1.ValidatorCurrentRewards", distribution_3.ValidatorCurrentRewards],
    ["/cosmos.distribution.v1beta1.ValidatorOutstandingRewards", distribution_4.ValidatorOutstandingRewards],
    ["/cosmos.distribution.v1beta1.DelegationDelegatorReward", distribution_5.DelegationDelegatorReward],
    ["/cosmos.distribution.v1beta1.QueryDelegationRewardsResponse", query_9.QueryDelegationRewardsResponse],
    ["/cosmos.distribution.v1beta1.MsgFundCommunityPool", tx_6.MsgFundCommunityPool],
    ["/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressResponse", query_10.QueryDelegatorWithdrawAddressResponse],
    ["/cosmos.distribution.v1beta1.QueryValidatorSlashesRequest", query_11.QueryValidatorSlashesRequest],
    ["/cosmos.distribution.v1beta1.ValidatorAccumulatedCommissionRecord", genesis_6.ValidatorAccumulatedCommissionRecord],
    ["/cosmos.distribution.v1beta1.Params", distribution_6.Params],
    ["/cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse", tx_7.MsgWithdrawDelegatorRewardResponse],
    ["/cosmos.distribution.v1beta1.QueryParamsRequest", query_12.QueryParamsRequest],
    ["/cosmos.distribution.v1beta1.ValidatorCurrentRewardsRecord", genesis_7.ValidatorCurrentRewardsRecord],
    ["/cosmos.distribution.v1beta1.CommunityPoolSpendProposal", distribution_7.CommunityPoolSpendProposal],
    ["/cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse", tx_8.MsgSetWithdrawAddressResponse],
    ["/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPool", tx_9.MsgDepositValidatorRewardsPool],
    ["/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressRequest", query_13.QueryDelegatorWithdrawAddressRequest],
    ["/cosmos.distribution.v1beta1.ValidatorAccumulatedCommission", distribution_8.ValidatorAccumulatedCommission],
    ["/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse", tx_10.MsgWithdrawValidatorCommissionResponse],
    ["/cosmos.distribution.v1beta1.QueryValidatorCommissionResponse", query_14.QueryValidatorCommissionResponse],
    ["/cosmos.distribution.v1beta1.MsgCommunityPoolSpend", tx_11.MsgCommunityPoolSpend],
    ["/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsRequest", query_15.QueryDelegationTotalRewardsRequest],
    ["/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse", query_16.QueryDelegationTotalRewardsResponse],
    ["/cosmos.distribution.v1beta1.ValidatorSlashEvents", distribution_9.ValidatorSlashEvents],
    ["/cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse", tx_12.MsgFundCommunityPoolResponse],
    ["/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPoolResponse", tx_13.MsgDepositValidatorRewardsPoolResponse],
    ["/cosmos.distribution.v1beta1.QueryValidatorDistributionInfoRequest", query_17.QueryValidatorDistributionInfoRequest],
    ["/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit", distribution_10.CommunityPoolSpendProposalWithDeposit],
    ["/cosmos.distribution.v1beta1.MsgSetWithdrawAddress", tx_14.MsgSetWithdrawAddress],
    ["/cosmos.distribution.v1beta1.ValidatorOutstandingRewardsRecord", genesis_8.ValidatorOutstandingRewardsRecord],
    ["/cosmos.distribution.v1beta1.ValidatorHistoricalRewards", distribution_11.ValidatorHistoricalRewards],
    ["/cosmos.distribution.v1beta1.ValidatorSlashEvent", distribution_12.ValidatorSlashEvent],
    ["/cosmos.distribution.v1beta1.QueryCommunityPoolRequest", query_18.QueryCommunityPoolRequest],
    ["/cosmos.distribution.v1beta1.QueryParamsResponse", query_19.QueryParamsResponse],
    ["/cosmos.distribution.v1beta1.QueryDelegatorValidatorsResponse", query_20.QueryDelegatorValidatorsResponse],
];
exports.msgTypes = msgTypes;
