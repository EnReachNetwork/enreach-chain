"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const genesis_1 = require("./types/cosmos/distribution/v1beta1/genesis");
const tx_1 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_2 = require("./types/cosmos/distribution/v1beta1/tx");
const query_1 = require("./types/cosmos/distribution/v1beta1/query");
const tx_3 = require("./types/cosmos/distribution/v1beta1/tx");
const distribution_1 = require("./types/cosmos/distribution/v1beta1/distribution");
const query_2 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_2 = require("./types/cosmos/distribution/v1beta1/distribution");
const query_3 = require("./types/cosmos/distribution/v1beta1/query");
const query_4 = require("./types/cosmos/distribution/v1beta1/query");
const query_5 = require("./types/cosmos/distribution/v1beta1/query");
const genesis_2 = require("./types/cosmos/distribution/v1beta1/genesis");
const distribution_3 = require("./types/cosmos/distribution/v1beta1/distribution");
const tx_4 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_5 = require("./types/cosmos/distribution/v1beta1/tx");
const distribution_4 = require("./types/cosmos/distribution/v1beta1/distribution");
const query_6 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_5 = require("./types/cosmos/distribution/v1beta1/distribution");
const tx_6 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_7 = require("./types/cosmos/distribution/v1beta1/tx");
const query_7 = require("./types/cosmos/distribution/v1beta1/query");
const query_8 = require("./types/cosmos/distribution/v1beta1/query");
const tx_8 = require("./types/cosmos/distribution/v1beta1/tx");
const query_9 = require("./types/cosmos/distribution/v1beta1/query");
const tx_9 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_10 = require("./types/cosmos/distribution/v1beta1/tx");
const distribution_6 = require("./types/cosmos/distribution/v1beta1/distribution");
const query_10 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_7 = require("./types/cosmos/distribution/v1beta1/distribution");
const genesis_3 = require("./types/cosmos/distribution/v1beta1/genesis");
const genesis_4 = require("./types/cosmos/distribution/v1beta1/genesis");
const genesis_5 = require("./types/cosmos/distribution/v1beta1/genesis");
const distribution_8 = require("./types/cosmos/distribution/v1beta1/distribution");
const distribution_9 = require("./types/cosmos/distribution/v1beta1/distribution");
const genesis_6 = require("./types/cosmos/distribution/v1beta1/genesis");
const tx_11 = require("./types/cosmos/distribution/v1beta1/tx");
const query_11 = require("./types/cosmos/distribution/v1beta1/query");
const query_12 = require("./types/cosmos/distribution/v1beta1/query");
const query_13 = require("./types/cosmos/distribution/v1beta1/query");
const genesis_7 = require("./types/cosmos/distribution/v1beta1/genesis");
const distribution_10 = require("./types/cosmos/distribution/v1beta1/distribution");
const query_14 = require("./types/cosmos/distribution/v1beta1/query");
const query_15 = require("./types/cosmos/distribution/v1beta1/query");
const query_16 = require("./types/cosmos/distribution/v1beta1/query");
const query_17 = require("./types/cosmos/distribution/v1beta1/query");
const tx_12 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_13 = require("./types/cosmos/distribution/v1beta1/tx");
const distribution_11 = require("./types/cosmos/distribution/v1beta1/distribution");
const query_18 = require("./types/cosmos/distribution/v1beta1/query");
const query_19 = require("./types/cosmos/distribution/v1beta1/query");
const genesis_8 = require("./types/cosmos/distribution/v1beta1/genesis");
const tx_14 = require("./types/cosmos/distribution/v1beta1/tx");
const distribution_12 = require("./types/cosmos/distribution/v1beta1/distribution");
const query_20 = require("./types/cosmos/distribution/v1beta1/query");
const msgTypes = [
    ["/cosmos.distribution.v1beta1.DelegatorStartingInfoRecord", genesis_1.DelegatorStartingInfoRecord],
    ["/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse", tx_1.MsgWithdrawValidatorCommissionResponse],
    ["/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPoolResponse", tx_2.MsgDepositValidatorRewardsPoolResponse],
    ["/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressRequest", query_1.QueryDelegatorWithdrawAddressRequest],
    ["/cosmos.distribution.v1beta1.MsgFundCommunityPool", tx_3.MsgFundCommunityPool],
    ["/cosmos.distribution.v1beta1.ValidatorHistoricalRewards", distribution_1.ValidatorHistoricalRewards],
    ["/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse", query_2.QueryValidatorOutstandingRewardsResponse],
    ["/cosmos.distribution.v1beta1.ValidatorSlashEvent", distribution_2.ValidatorSlashEvent],
    ["/cosmos.distribution.v1beta1.QueryValidatorSlashesRequest", query_3.QueryValidatorSlashesRequest],
    ["/cosmos.distribution.v1beta1.QueryValidatorSlashesResponse", query_4.QueryValidatorSlashesResponse],
    ["/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse", query_5.QueryDelegationTotalRewardsResponse],
    ["/cosmos.distribution.v1beta1.ValidatorAccumulatedCommissionRecord", genesis_2.ValidatorAccumulatedCommissionRecord],
    ["/cosmos.distribution.v1beta1.CommunityPoolSpendProposal", distribution_3.CommunityPoolSpendProposal],
    ["/cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse", tx_4.MsgSetWithdrawAddressResponse],
    ["/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward", tx_5.MsgWithdrawDelegatorReward],
    ["/cosmos.distribution.v1beta1.ValidatorCurrentRewards", distribution_4.ValidatorCurrentRewards],
    ["/cosmos.distribution.v1beta1.QueryValidatorDistributionInfoResponse", query_6.QueryValidatorDistributionInfoResponse],
    ["/cosmos.distribution.v1beta1.Params", distribution_5.Params],
    ["/cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse", tx_6.MsgWithdrawDelegatorRewardResponse],
    ["/cosmos.distribution.v1beta1.MsgCommunityPoolSpendResponse", tx_7.MsgCommunityPoolSpendResponse],
    ["/cosmos.distribution.v1beta1.QueryValidatorDistributionInfoRequest", query_7.QueryValidatorDistributionInfoRequest],
    ["/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsRequest", query_8.QueryDelegationTotalRewardsRequest],
    ["/cosmos.distribution.v1beta1.MsgSetWithdrawAddress", tx_8.MsgSetWithdrawAddress],
    ["/cosmos.distribution.v1beta1.QueryDelegationRewardsRequest", query_9.QueryDelegationRewardsRequest],
    ["/cosmos.distribution.v1beta1.MsgUpdateParamsResponse", tx_9.MsgUpdateParamsResponse],
    ["/cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse", tx_10.MsgFundCommunityPoolResponse],
    ["/cosmos.distribution.v1beta1.DelegatorStartingInfo", distribution_6.DelegatorStartingInfo],
    ["/cosmos.distribution.v1beta1.QueryCommunityPoolResponse", query_10.QueryCommunityPoolResponse],
    ["/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit", distribution_7.CommunityPoolSpendProposalWithDeposit],
    ["/cosmos.distribution.v1beta1.ValidatorCurrentRewardsRecord", genesis_3.ValidatorCurrentRewardsRecord],
    ["/cosmos.distribution.v1beta1.ValidatorSlashEventRecord", genesis_4.ValidatorSlashEventRecord],
    ["/cosmos.distribution.v1beta1.GenesisState", genesis_5.GenesisState],
    ["/cosmos.distribution.v1beta1.ValidatorOutstandingRewards", distribution_8.ValidatorOutstandingRewards],
    ["/cosmos.distribution.v1beta1.ValidatorSlashEvents", distribution_9.ValidatorSlashEvents],
    ["/cosmos.distribution.v1beta1.ValidatorHistoricalRewardsRecord", genesis_6.ValidatorHistoricalRewardsRecord],
    ["/cosmos.distribution.v1beta1.MsgUpdateParams", tx_11.MsgUpdateParams],
    ["/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsRequest", query_11.QueryValidatorOutstandingRewardsRequest],
    ["/cosmos.distribution.v1beta1.QueryDelegationRewardsResponse", query_12.QueryDelegationRewardsResponse],
    ["/cosmos.distribution.v1beta1.QueryDelegatorValidatorsResponse", query_13.QueryDelegatorValidatorsResponse],
    ["/cosmos.distribution.v1beta1.DelegatorWithdrawInfo", genesis_7.DelegatorWithdrawInfo],
    ["/cosmos.distribution.v1beta1.ValidatorAccumulatedCommission", distribution_10.ValidatorAccumulatedCommission],
    ["/cosmos.distribution.v1beta1.QueryParamsRequest", query_14.QueryParamsRequest],
    ["/cosmos.distribution.v1beta1.QueryParamsResponse", query_15.QueryParamsResponse],
    ["/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressResponse", query_16.QueryDelegatorWithdrawAddressResponse],
    ["/cosmos.distribution.v1beta1.QueryCommunityPoolRequest", query_17.QueryCommunityPoolRequest],
    ["/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission", tx_12.MsgWithdrawValidatorCommission],
    ["/cosmos.distribution.v1beta1.MsgCommunityPoolSpend", tx_13.MsgCommunityPoolSpend],
    ["/cosmos.distribution.v1beta1.DelegationDelegatorReward", distribution_11.DelegationDelegatorReward],
    ["/cosmos.distribution.v1beta1.QueryValidatorCommissionRequest", query_18.QueryValidatorCommissionRequest],
    ["/cosmos.distribution.v1beta1.QueryDelegatorValidatorsRequest", query_19.QueryDelegatorValidatorsRequest],
    ["/cosmos.distribution.v1beta1.ValidatorOutstandingRewardsRecord", genesis_8.ValidatorOutstandingRewardsRecord],
    ["/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPool", tx_14.MsgDepositValidatorRewardsPool],
    ["/cosmos.distribution.v1beta1.FeePool", distribution_12.FeePool],
    ["/cosmos.distribution.v1beta1.QueryValidatorCommissionResponse", query_20.QueryValidatorCommissionResponse],
];
exports.msgTypes = msgTypes;
