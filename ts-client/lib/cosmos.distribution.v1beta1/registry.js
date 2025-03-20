"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const query_1 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_1 = require("./types/cosmos/distribution/v1beta1/distribution");
const tx_1 = require("./types/cosmos/distribution/v1beta1/tx");
const query_2 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_2 = require("./types/cosmos/distribution/v1beta1/distribution");
const genesis_1 = require("./types/cosmos/distribution/v1beta1/genesis");
const query_3 = require("./types/cosmos/distribution/v1beta1/query");
const query_4 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_3 = require("./types/cosmos/distribution/v1beta1/distribution");
const tx_2 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_3 = require("./types/cosmos/distribution/v1beta1/tx");
const query_5 = require("./types/cosmos/distribution/v1beta1/query");
const query_6 = require("./types/cosmos/distribution/v1beta1/query");
const query_7 = require("./types/cosmos/distribution/v1beta1/query");
const query_8 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_4 = require("./types/cosmos/distribution/v1beta1/distribution");
const genesis_2 = require("./types/cosmos/distribution/v1beta1/genesis");
const distribution_5 = require("./types/cosmos/distribution/v1beta1/distribution");
const genesis_3 = require("./types/cosmos/distribution/v1beta1/genesis");
const query_9 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_6 = require("./types/cosmos/distribution/v1beta1/distribution");
const tx_4 = require("./types/cosmos/distribution/v1beta1/tx");
const query_10 = require("./types/cosmos/distribution/v1beta1/query");
const query_11 = require("./types/cosmos/distribution/v1beta1/query");
const query_12 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_7 = require("./types/cosmos/distribution/v1beta1/distribution");
const tx_5 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_6 = require("./types/cosmos/distribution/v1beta1/tx");
const query_13 = require("./types/cosmos/distribution/v1beta1/query");
const query_14 = require("./types/cosmos/distribution/v1beta1/query");
const genesis_4 = require("./types/cosmos/distribution/v1beta1/genesis");
const tx_7 = require("./types/cosmos/distribution/v1beta1/tx");
const query_15 = require("./types/cosmos/distribution/v1beta1/query");
const tx_8 = require("./types/cosmos/distribution/v1beta1/tx");
const distribution_8 = require("./types/cosmos/distribution/v1beta1/distribution");
const distribution_9 = require("./types/cosmos/distribution/v1beta1/distribution");
const query_16 = require("./types/cosmos/distribution/v1beta1/query");
const tx_9 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_10 = require("./types/cosmos/distribution/v1beta1/tx");
const query_17 = require("./types/cosmos/distribution/v1beta1/query");
const genesis_5 = require("./types/cosmos/distribution/v1beta1/genesis");
const genesis_6 = require("./types/cosmos/distribution/v1beta1/genesis");
const tx_11 = require("./types/cosmos/distribution/v1beta1/tx");
const query_18 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_10 = require("./types/cosmos/distribution/v1beta1/distribution");
const distribution_11 = require("./types/cosmos/distribution/v1beta1/distribution");
const tx_12 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_13 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_14 = require("./types/cosmos/distribution/v1beta1/tx");
const query_19 = require("./types/cosmos/distribution/v1beta1/query");
const query_20 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_12 = require("./types/cosmos/distribution/v1beta1/distribution");
const genesis_7 = require("./types/cosmos/distribution/v1beta1/genesis");
const genesis_8 = require("./types/cosmos/distribution/v1beta1/genesis");
const msgTypes = [
    ["/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse", query_1.QueryDelegationTotalRewardsResponse],
    ["/cosmos.distribution.v1beta1.ValidatorCurrentRewards", distribution_1.ValidatorCurrentRewards],
    ["/cosmos.distribution.v1beta1.MsgSetWithdrawAddress", tx_1.MsgSetWithdrawAddress],
    ["/cosmos.distribution.v1beta1.QueryDelegationRewardsResponse", query_2.QueryDelegationRewardsResponse],
    ["/cosmos.distribution.v1beta1.FeePool", distribution_2.FeePool],
    ["/cosmos.distribution.v1beta1.ValidatorHistoricalRewardsRecord", genesis_1.ValidatorHistoricalRewardsRecord],
    ["/cosmos.distribution.v1beta1.QueryValidatorDistributionInfoRequest", query_3.QueryValidatorDistributionInfoRequest],
    ["/cosmos.distribution.v1beta1.QueryDelegatorValidatorsResponse", query_4.QueryDelegatorValidatorsResponse],
    ["/cosmos.distribution.v1beta1.DelegatorStartingInfo", distribution_3.DelegatorStartingInfo],
    ["/cosmos.distribution.v1beta1.MsgUpdateParams", tx_2.MsgUpdateParams],
    ["/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPool", tx_3.MsgDepositValidatorRewardsPool],
    ["/cosmos.distribution.v1beta1.QueryParamsRequest", query_5.QueryParamsRequest],
    ["/cosmos.distribution.v1beta1.QueryDelegationRewardsRequest", query_6.QueryDelegationRewardsRequest],
    ["/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse", query_7.QueryValidatorOutstandingRewardsResponse],
    ["/cosmos.distribution.v1beta1.QueryValidatorSlashesResponse", query_8.QueryValidatorSlashesResponse],
    ["/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit", distribution_4.CommunityPoolSpendProposalWithDeposit],
    ["/cosmos.distribution.v1beta1.GenesisState", genesis_2.GenesisState],
    ["/cosmos.distribution.v1beta1.ValidatorSlashEvent", distribution_5.ValidatorSlashEvent],
    ["/cosmos.distribution.v1beta1.ValidatorOutstandingRewardsRecord", genesis_3.ValidatorOutstandingRewardsRecord],
    ["/cosmos.distribution.v1beta1.QueryValidatorDistributionInfoResponse", query_9.QueryValidatorDistributionInfoResponse],
    ["/cosmos.distribution.v1beta1.CommunityPoolSpendProposal", distribution_6.CommunityPoolSpendProposal],
    ["/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPoolResponse", tx_4.MsgDepositValidatorRewardsPoolResponse],
    ["/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressRequest", query_10.QueryDelegatorWithdrawAddressRequest],
    ["/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsRequest", query_11.QueryDelegationTotalRewardsRequest],
    ["/cosmos.distribution.v1beta1.QueryCommunityPoolRequest", query_12.QueryCommunityPoolRequest],
    ["/cosmos.distribution.v1beta1.ValidatorOutstandingRewards", distribution_7.ValidatorOutstandingRewards],
    ["/cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse", tx_5.MsgFundCommunityPoolResponse],
    ["/cosmos.distribution.v1beta1.MsgCommunityPoolSpend", tx_6.MsgCommunityPoolSpend],
    ["/cosmos.distribution.v1beta1.QueryValidatorCommissionResponse", query_13.QueryValidatorCommissionResponse],
    ["/cosmos.distribution.v1beta1.QueryDelegatorValidatorsRequest", query_14.QueryDelegatorValidatorsRequest],
    ["/cosmos.distribution.v1beta1.ValidatorSlashEventRecord", genesis_4.ValidatorSlashEventRecord],
    ["/cosmos.distribution.v1beta1.MsgCommunityPoolSpendResponse", tx_7.MsgCommunityPoolSpendResponse],
    ["/cosmos.distribution.v1beta1.QueryValidatorCommissionRequest", query_15.QueryValidatorCommissionRequest],
    ["/cosmos.distribution.v1beta1.MsgUpdateParamsResponse", tx_8.MsgUpdateParamsResponse],
    ["/cosmos.distribution.v1beta1.ValidatorAccumulatedCommission", distribution_8.ValidatorAccumulatedCommission],
    ["/cosmos.distribution.v1beta1.DelegationDelegatorReward", distribution_9.DelegationDelegatorReward],
    ["/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressResponse", query_16.QueryDelegatorWithdrawAddressResponse],
    ["/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward", tx_9.MsgWithdrawDelegatorReward],
    ["/cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse", tx_10.MsgWithdrawDelegatorRewardResponse],
    ["/cosmos.distribution.v1beta1.QueryParamsResponse", query_17.QueryParamsResponse],
    ["/cosmos.distribution.v1beta1.DelegatorWithdrawInfo", genesis_5.DelegatorWithdrawInfo],
    ["/cosmos.distribution.v1beta1.DelegatorStartingInfoRecord", genesis_6.DelegatorStartingInfoRecord],
    ["/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission", tx_11.MsgWithdrawValidatorCommission],
    ["/cosmos.distribution.v1beta1.QueryCommunityPoolResponse", query_18.QueryCommunityPoolResponse],
    ["/cosmos.distribution.v1beta1.Params", distribution_10.Params],
    ["/cosmos.distribution.v1beta1.ValidatorHistoricalRewards", distribution_11.ValidatorHistoricalRewards],
    ["/cosmos.distribution.v1beta1.MsgFundCommunityPool", tx_12.MsgFundCommunityPool],
    ["/cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse", tx_13.MsgSetWithdrawAddressResponse],
    ["/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse", tx_14.MsgWithdrawValidatorCommissionResponse],
    ["/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsRequest", query_19.QueryValidatorOutstandingRewardsRequest],
    ["/cosmos.distribution.v1beta1.QueryValidatorSlashesRequest", query_20.QueryValidatorSlashesRequest],
    ["/cosmos.distribution.v1beta1.ValidatorSlashEvents", distribution_12.ValidatorSlashEvents],
    ["/cosmos.distribution.v1beta1.ValidatorAccumulatedCommissionRecord", genesis_7.ValidatorAccumulatedCommissionRecord],
    ["/cosmos.distribution.v1beta1.ValidatorCurrentRewardsRecord", genesis_8.ValidatorCurrentRewardsRecord],
];
exports.msgTypes = msgTypes;
