"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const genesis_1 = require("./types/cosmos/distribution/v1beta1/genesis");
const query_1 = require("./types/cosmos/distribution/v1beta1/query");
const tx_1 = require("./types/cosmos/distribution/v1beta1/tx");
const genesis_2 = require("./types/cosmos/distribution/v1beta1/genesis");
const genesis_3 = require("./types/cosmos/distribution/v1beta1/genesis");
const distribution_1 = require("./types/cosmos/distribution/v1beta1/distribution");
const tx_2 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_3 = require("./types/cosmos/distribution/v1beta1/tx");
const query_2 = require("./types/cosmos/distribution/v1beta1/query");
const query_3 = require("./types/cosmos/distribution/v1beta1/query");
const tx_4 = require("./types/cosmos/distribution/v1beta1/tx");
const distribution_2 = require("./types/cosmos/distribution/v1beta1/distribution");
const query_4 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_3 = require("./types/cosmos/distribution/v1beta1/distribution");
const tx_5 = require("./types/cosmos/distribution/v1beta1/tx");
const genesis_4 = require("./types/cosmos/distribution/v1beta1/genesis");
const genesis_5 = require("./types/cosmos/distribution/v1beta1/genesis");
const query_5 = require("./types/cosmos/distribution/v1beta1/query");
const query_6 = require("./types/cosmos/distribution/v1beta1/query");
const tx_6 = require("./types/cosmos/distribution/v1beta1/tx");
const query_7 = require("./types/cosmos/distribution/v1beta1/query");
const query_8 = require("./types/cosmos/distribution/v1beta1/query");
const query_9 = require("./types/cosmos/distribution/v1beta1/query");
const query_10 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_4 = require("./types/cosmos/distribution/v1beta1/distribution");
const tx_7 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_8 = require("./types/cosmos/distribution/v1beta1/tx");
const query_11 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_5 = require("./types/cosmos/distribution/v1beta1/distribution");
const tx_9 = require("./types/cosmos/distribution/v1beta1/tx");
const distribution_6 = require("./types/cosmos/distribution/v1beta1/distribution");
const distribution_7 = require("./types/cosmos/distribution/v1beta1/distribution");
const distribution_8 = require("./types/cosmos/distribution/v1beta1/distribution");
const distribution_9 = require("./types/cosmos/distribution/v1beta1/distribution");
const tx_10 = require("./types/cosmos/distribution/v1beta1/tx");
const genesis_6 = require("./types/cosmos/distribution/v1beta1/genesis");
const distribution_10 = require("./types/cosmos/distribution/v1beta1/distribution");
const query_12 = require("./types/cosmos/distribution/v1beta1/query");
const query_13 = require("./types/cosmos/distribution/v1beta1/query");
const query_14 = require("./types/cosmos/distribution/v1beta1/query");
const query_15 = require("./types/cosmos/distribution/v1beta1/query");
const query_16 = require("./types/cosmos/distribution/v1beta1/query");
const query_17 = require("./types/cosmos/distribution/v1beta1/query");
const tx_11 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_12 = require("./types/cosmos/distribution/v1beta1/tx");
const genesis_7 = require("./types/cosmos/distribution/v1beta1/genesis");
const genesis_8 = require("./types/cosmos/distribution/v1beta1/genesis");
const query_18 = require("./types/cosmos/distribution/v1beta1/query");
const tx_13 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_14 = require("./types/cosmos/distribution/v1beta1/tx");
const distribution_11 = require("./types/cosmos/distribution/v1beta1/distribution");
const query_19 = require("./types/cosmos/distribution/v1beta1/query");
const query_20 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_12 = require("./types/cosmos/distribution/v1beta1/distribution");
const msgTypes = [
    ["/cosmos.distribution.v1beta1.ValidatorAccumulatedCommissionRecord", genesis_1.ValidatorAccumulatedCommissionRecord],
    ["/cosmos.distribution.v1beta1.QueryDelegatorValidatorsRequest", query_1.QueryDelegatorValidatorsRequest],
    ["/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission", tx_1.MsgWithdrawValidatorCommission],
    ["/cosmos.distribution.v1beta1.ValidatorHistoricalRewardsRecord", genesis_2.ValidatorHistoricalRewardsRecord],
    ["/cosmos.distribution.v1beta1.GenesisState", genesis_3.GenesisState],
    ["/cosmos.distribution.v1beta1.DelegatorStartingInfo", distribution_1.DelegatorStartingInfo],
    ["/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse", tx_2.MsgWithdrawValidatorCommissionResponse],
    ["/cosmos.distribution.v1beta1.MsgCommunityPoolSpend", tx_3.MsgCommunityPoolSpend],
    ["/cosmos.distribution.v1beta1.QueryValidatorCommissionResponse", query_2.QueryValidatorCommissionResponse],
    ["/cosmos.distribution.v1beta1.QueryValidatorSlashesResponse", query_3.QueryValidatorSlashesResponse],
    ["/cosmos.distribution.v1beta1.MsgUpdateParamsResponse", tx_4.MsgUpdateParamsResponse],
    ["/cosmos.distribution.v1beta1.Params", distribution_2.Params],
    ["/cosmos.distribution.v1beta1.QueryCommunityPoolRequest", query_4.QueryCommunityPoolRequest],
    ["/cosmos.distribution.v1beta1.DelegationDelegatorReward", distribution_3.DelegationDelegatorReward],
    ["/cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse", tx_5.MsgWithdrawDelegatorRewardResponse],
    ["/cosmos.distribution.v1beta1.ValidatorOutstandingRewardsRecord", genesis_4.ValidatorOutstandingRewardsRecord],
    ["/cosmos.distribution.v1beta1.ValidatorCurrentRewardsRecord", genesis_5.ValidatorCurrentRewardsRecord],
    ["/cosmos.distribution.v1beta1.QueryParamsRequest", query_5.QueryParamsRequest],
    ["/cosmos.distribution.v1beta1.QueryValidatorCommissionRequest", query_6.QueryValidatorCommissionRequest],
    ["/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward", tx_6.MsgWithdrawDelegatorReward],
    ["/cosmos.distribution.v1beta1.QueryValidatorSlashesRequest", query_7.QueryValidatorSlashesRequest],
    ["/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse", query_8.QueryDelegationTotalRewardsResponse],
    ["/cosmos.distribution.v1beta1.QueryDelegatorValidatorsResponse", query_9.QueryDelegatorValidatorsResponse],
    ["/cosmos.distribution.v1beta1.QueryValidatorDistributionInfoRequest", query_10.QueryValidatorDistributionInfoRequest],
    ["/cosmos.distribution.v1beta1.ValidatorCurrentRewards", distribution_4.ValidatorCurrentRewards],
    ["/cosmos.distribution.v1beta1.MsgCommunityPoolSpendResponse", tx_7.MsgCommunityPoolSpendResponse],
    ["/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPoolResponse", tx_8.MsgDepositValidatorRewardsPoolResponse],
    ["/cosmos.distribution.v1beta1.QueryValidatorDistributionInfoResponse", query_11.QueryValidatorDistributionInfoResponse],
    ["/cosmos.distribution.v1beta1.ValidatorSlashEvents", distribution_5.ValidatorSlashEvents],
    ["/cosmos.distribution.v1beta1.MsgSetWithdrawAddress", tx_9.MsgSetWithdrawAddress],
    ["/cosmos.distribution.v1beta1.ValidatorAccumulatedCommission", distribution_6.ValidatorAccumulatedCommission],
    ["/cosmos.distribution.v1beta1.ValidatorOutstandingRewards", distribution_7.ValidatorOutstandingRewards],
    ["/cosmos.distribution.v1beta1.FeePool", distribution_8.FeePool],
    ["/cosmos.distribution.v1beta1.ValidatorHistoricalRewards", distribution_9.ValidatorHistoricalRewards],
    ["/cosmos.distribution.v1beta1.MsgUpdateParams", tx_10.MsgUpdateParams],
    ["/cosmos.distribution.v1beta1.DelegatorStartingInfoRecord", genesis_6.DelegatorStartingInfoRecord],
    ["/cosmos.distribution.v1beta1.CommunityPoolSpendProposal", distribution_10.CommunityPoolSpendProposal],
    ["/cosmos.distribution.v1beta1.QueryDelegationRewardsResponse", query_12.QueryDelegationRewardsResponse],
    ["/cosmos.distribution.v1beta1.QueryParamsResponse", query_13.QueryParamsResponse],
    ["/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsRequest", query_14.QueryValidatorOutstandingRewardsRequest],
    ["/cosmos.distribution.v1beta1.QueryDelegationRewardsRequest", query_15.QueryDelegationRewardsRequest],
    ["/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressRequest", query_16.QueryDelegatorWithdrawAddressRequest],
    ["/cosmos.distribution.v1beta1.QueryCommunityPoolResponse", query_17.QueryCommunityPoolResponse],
    ["/cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse", tx_11.MsgSetWithdrawAddressResponse],
    ["/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPool", tx_12.MsgDepositValidatorRewardsPool],
    ["/cosmos.distribution.v1beta1.DelegatorWithdrawInfo", genesis_7.DelegatorWithdrawInfo],
    ["/cosmos.distribution.v1beta1.ValidatorSlashEventRecord", genesis_8.ValidatorSlashEventRecord],
    ["/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse", query_18.QueryValidatorOutstandingRewardsResponse],
    ["/cosmos.distribution.v1beta1.MsgFundCommunityPool", tx_13.MsgFundCommunityPool],
    ["/cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse", tx_14.MsgFundCommunityPoolResponse],
    ["/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit", distribution_11.CommunityPoolSpendProposalWithDeposit],
    ["/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsRequest", query_19.QueryDelegationTotalRewardsRequest],
    ["/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressResponse", query_20.QueryDelegatorWithdrawAddressResponse],
    ["/cosmos.distribution.v1beta1.ValidatorSlashEvent", distribution_12.ValidatorSlashEvent],
];
exports.msgTypes = msgTypes;
