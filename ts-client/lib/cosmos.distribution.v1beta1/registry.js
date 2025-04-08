"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/cosmos/distribution/v1beta1/tx");
const distribution_1 = require("./types/cosmos/distribution/v1beta1/distribution");
const distribution_2 = require("./types/cosmos/distribution/v1beta1/distribution");
const distribution_3 = require("./types/cosmos/distribution/v1beta1/distribution");
const query_1 = require("./types/cosmos/distribution/v1beta1/query");
const tx_2 = require("./types/cosmos/distribution/v1beta1/tx");
const distribution_4 = require("./types/cosmos/distribution/v1beta1/distribution");
const distribution_5 = require("./types/cosmos/distribution/v1beta1/distribution");
const query_2 = require("./types/cosmos/distribution/v1beta1/query");
const query_3 = require("./types/cosmos/distribution/v1beta1/query");
const query_4 = require("./types/cosmos/distribution/v1beta1/query");
const tx_3 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_4 = require("./types/cosmos/distribution/v1beta1/tx");
const query_5 = require("./types/cosmos/distribution/v1beta1/query");
const query_6 = require("./types/cosmos/distribution/v1beta1/query");
const tx_5 = require("./types/cosmos/distribution/v1beta1/tx");
const genesis_1 = require("./types/cosmos/distribution/v1beta1/genesis");
const tx_6 = require("./types/cosmos/distribution/v1beta1/tx");
const distribution_6 = require("./types/cosmos/distribution/v1beta1/distribution");
const tx_7 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_8 = require("./types/cosmos/distribution/v1beta1/tx");
const distribution_7 = require("./types/cosmos/distribution/v1beta1/distribution");
const query_7 = require("./types/cosmos/distribution/v1beta1/query");
const tx_9 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_10 = require("./types/cosmos/distribution/v1beta1/tx");
const query_8 = require("./types/cosmos/distribution/v1beta1/query");
const genesis_2 = require("./types/cosmos/distribution/v1beta1/genesis");
const distribution_8 = require("./types/cosmos/distribution/v1beta1/distribution");
const query_9 = require("./types/cosmos/distribution/v1beta1/query");
const query_10 = require("./types/cosmos/distribution/v1beta1/query");
const tx_11 = require("./types/cosmos/distribution/v1beta1/tx");
const distribution_9 = require("./types/cosmos/distribution/v1beta1/distribution");
const distribution_10 = require("./types/cosmos/distribution/v1beta1/distribution");
const distribution_11 = require("./types/cosmos/distribution/v1beta1/distribution");
const query_11 = require("./types/cosmos/distribution/v1beta1/query");
const query_12 = require("./types/cosmos/distribution/v1beta1/query");
const genesis_3 = require("./types/cosmos/distribution/v1beta1/genesis");
const query_13 = require("./types/cosmos/distribution/v1beta1/query");
const tx_12 = require("./types/cosmos/distribution/v1beta1/tx");
const genesis_4 = require("./types/cosmos/distribution/v1beta1/genesis");
const genesis_5 = require("./types/cosmos/distribution/v1beta1/genesis");
const genesis_6 = require("./types/cosmos/distribution/v1beta1/genesis");
const distribution_12 = require("./types/cosmos/distribution/v1beta1/distribution");
const query_14 = require("./types/cosmos/distribution/v1beta1/query");
const query_15 = require("./types/cosmos/distribution/v1beta1/query");
const genesis_7 = require("./types/cosmos/distribution/v1beta1/genesis");
const tx_13 = require("./types/cosmos/distribution/v1beta1/tx");
const query_16 = require("./types/cosmos/distribution/v1beta1/query");
const query_17 = require("./types/cosmos/distribution/v1beta1/query");
const query_18 = require("./types/cosmos/distribution/v1beta1/query");
const genesis_8 = require("./types/cosmos/distribution/v1beta1/genesis");
const query_19 = require("./types/cosmos/distribution/v1beta1/query");
const tx_14 = require("./types/cosmos/distribution/v1beta1/tx");
const query_20 = require("./types/cosmos/distribution/v1beta1/query");
const msgTypes = [
    ["/cosmos.distribution.v1beta1.MsgCommunityPoolSpendResponse", tx_1.MsgCommunityPoolSpendResponse],
    ["/cosmos.distribution.v1beta1.Params", distribution_1.Params],
    ["/cosmos.distribution.v1beta1.ValidatorHistoricalRewards", distribution_2.ValidatorHistoricalRewards],
    ["/cosmos.distribution.v1beta1.DelegatorStartingInfo", distribution_3.DelegatorStartingInfo],
    ["/cosmos.distribution.v1beta1.QueryCommunityPoolResponse", query_1.QueryCommunityPoolResponse],
    ["/cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse", tx_2.MsgSetWithdrawAddressResponse],
    ["/cosmos.distribution.v1beta1.ValidatorSlashEvent", distribution_4.ValidatorSlashEvent],
    ["/cosmos.distribution.v1beta1.ValidatorSlashEvents", distribution_5.ValidatorSlashEvents],
    ["/cosmos.distribution.v1beta1.QueryParamsResponse", query_2.QueryParamsResponse],
    ["/cosmos.distribution.v1beta1.QueryValidatorCommissionRequest", query_3.QueryValidatorCommissionRequest],
    ["/cosmos.distribution.v1beta1.QueryDelegationRewardsResponse", query_4.QueryDelegationRewardsResponse],
    ["/cosmos.distribution.v1beta1.MsgSetWithdrawAddress", tx_3.MsgSetWithdrawAddress],
    ["/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward", tx_4.MsgWithdrawDelegatorReward],
    ["/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsRequest", query_5.QueryDelegationTotalRewardsRequest],
    ["/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressResponse", query_6.QueryDelegatorWithdrawAddressResponse],
    ["/cosmos.distribution.v1beta1.MsgUpdateParams", tx_5.MsgUpdateParams],
    ["/cosmos.distribution.v1beta1.ValidatorHistoricalRewardsRecord", genesis_1.ValidatorHistoricalRewardsRecord],
    ["/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPoolResponse", tx_6.MsgDepositValidatorRewardsPoolResponse],
    ["/cosmos.distribution.v1beta1.CommunityPoolSpendProposal", distribution_6.CommunityPoolSpendProposal],
    ["/cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse", tx_7.MsgFundCommunityPoolResponse],
    ["/cosmos.distribution.v1beta1.MsgCommunityPoolSpend", tx_8.MsgCommunityPoolSpend],
    ["/cosmos.distribution.v1beta1.ValidatorCurrentRewards", distribution_7.ValidatorCurrentRewards],
    ["/cosmos.distribution.v1beta1.QueryValidatorDistributionInfoResponse", query_7.QueryValidatorDistributionInfoResponse],
    ["/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission", tx_9.MsgWithdrawValidatorCommission],
    ["/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPool", tx_10.MsgDepositValidatorRewardsPool],
    ["/cosmos.distribution.v1beta1.QueryDelegationRewardsRequest", query_8.QueryDelegationRewardsRequest],
    ["/cosmos.distribution.v1beta1.ValidatorSlashEventRecord", genesis_2.ValidatorSlashEventRecord],
    ["/cosmos.distribution.v1beta1.FeePool", distribution_8.FeePool],
    ["/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsRequest", query_9.QueryValidatorOutstandingRewardsRequest],
    ["/cosmos.distribution.v1beta1.QueryValidatorSlashesResponse", query_10.QueryValidatorSlashesResponse],
    ["/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse", tx_11.MsgWithdrawValidatorCommissionResponse],
    ["/cosmos.distribution.v1beta1.ValidatorAccumulatedCommission", distribution_9.ValidatorAccumulatedCommission],
    ["/cosmos.distribution.v1beta1.ValidatorOutstandingRewards", distribution_10.ValidatorOutstandingRewards],
    ["/cosmos.distribution.v1beta1.DelegationDelegatorReward", distribution_11.DelegationDelegatorReward],
    ["/cosmos.distribution.v1beta1.QueryParamsRequest", query_11.QueryParamsRequest],
    ["/cosmos.distribution.v1beta1.QueryValidatorDistributionInfoRequest", query_12.QueryValidatorDistributionInfoRequest],
    ["/cosmos.distribution.v1beta1.ValidatorOutstandingRewardsRecord", genesis_3.ValidatorOutstandingRewardsRecord],
    ["/cosmos.distribution.v1beta1.QueryDelegatorValidatorsRequest", query_13.QueryDelegatorValidatorsRequest],
    ["/cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse", tx_12.MsgWithdrawDelegatorRewardResponse],
    ["/cosmos.distribution.v1beta1.DelegatorWithdrawInfo", genesis_4.DelegatorWithdrawInfo],
    ["/cosmos.distribution.v1beta1.ValidatorCurrentRewardsRecord", genesis_5.ValidatorCurrentRewardsRecord],
    ["/cosmos.distribution.v1beta1.GenesisState", genesis_6.GenesisState],
    ["/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit", distribution_12.CommunityPoolSpendProposalWithDeposit],
    ["/cosmos.distribution.v1beta1.QueryValidatorSlashesRequest", query_14.QueryValidatorSlashesRequest],
    ["/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse", query_15.QueryDelegationTotalRewardsResponse],
    ["/cosmos.distribution.v1beta1.ValidatorAccumulatedCommissionRecord", genesis_7.ValidatorAccumulatedCommissionRecord],
    ["/cosmos.distribution.v1beta1.MsgUpdateParamsResponse", tx_13.MsgUpdateParamsResponse],
    ["/cosmos.distribution.v1beta1.QueryDelegatorValidatorsResponse", query_16.QueryDelegatorValidatorsResponse],
    ["/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressRequest", query_17.QueryDelegatorWithdrawAddressRequest],
    ["/cosmos.distribution.v1beta1.QueryCommunityPoolRequest", query_18.QueryCommunityPoolRequest],
    ["/cosmos.distribution.v1beta1.DelegatorStartingInfoRecord", genesis_8.DelegatorStartingInfoRecord],
    ["/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse", query_19.QueryValidatorOutstandingRewardsResponse],
    ["/cosmos.distribution.v1beta1.MsgFundCommunityPool", tx_14.MsgFundCommunityPool],
    ["/cosmos.distribution.v1beta1.QueryValidatorCommissionResponse", query_20.QueryValidatorCommissionResponse],
];
exports.msgTypes = msgTypes;
