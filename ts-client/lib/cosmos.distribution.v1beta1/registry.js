"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const query_1 = require("./types/cosmos/distribution/v1beta1/query");
const tx_1 = require("./types/cosmos/distribution/v1beta1/tx");
const genesis_1 = require("./types/cosmos/distribution/v1beta1/genesis");
const query_2 = require("./types/cosmos/distribution/v1beta1/query");
const query_3 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_1 = require("./types/cosmos/distribution/v1beta1/distribution");
const tx_2 = require("./types/cosmos/distribution/v1beta1/tx");
const genesis_2 = require("./types/cosmos/distribution/v1beta1/genesis");
const query_4 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_2 = require("./types/cosmos/distribution/v1beta1/distribution");
const genesis_3 = require("./types/cosmos/distribution/v1beta1/genesis");
const genesis_4 = require("./types/cosmos/distribution/v1beta1/genesis");
const query_5 = require("./types/cosmos/distribution/v1beta1/query");
const genesis_5 = require("./types/cosmos/distribution/v1beta1/genesis");
const query_6 = require("./types/cosmos/distribution/v1beta1/query");
const query_7 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_3 = require("./types/cosmos/distribution/v1beta1/distribution");
const query_8 = require("./types/cosmos/distribution/v1beta1/query");
const query_9 = require("./types/cosmos/distribution/v1beta1/query");
const tx_3 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_4 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_5 = require("./types/cosmos/distribution/v1beta1/tx");
const distribution_4 = require("./types/cosmos/distribution/v1beta1/distribution");
const query_10 = require("./types/cosmos/distribution/v1beta1/query");
const query_11 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_5 = require("./types/cosmos/distribution/v1beta1/distribution");
const distribution_6 = require("./types/cosmos/distribution/v1beta1/distribution");
const genesis_6 = require("./types/cosmos/distribution/v1beta1/genesis");
const query_12 = require("./types/cosmos/distribution/v1beta1/query");
const query_13 = require("./types/cosmos/distribution/v1beta1/query");
const tx_6 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_7 = require("./types/cosmos/distribution/v1beta1/tx");
const query_14 = require("./types/cosmos/distribution/v1beta1/query");
const query_15 = require("./types/cosmos/distribution/v1beta1/query");
const query_16 = require("./types/cosmos/distribution/v1beta1/query");
const tx_8 = require("./types/cosmos/distribution/v1beta1/tx");
const genesis_7 = require("./types/cosmos/distribution/v1beta1/genesis");
const distribution_7 = require("./types/cosmos/distribution/v1beta1/distribution");
const tx_9 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_10 = require("./types/cosmos/distribution/v1beta1/tx");
const genesis_8 = require("./types/cosmos/distribution/v1beta1/genesis");
const query_17 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_8 = require("./types/cosmos/distribution/v1beta1/distribution");
const tx_11 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_12 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_13 = require("./types/cosmos/distribution/v1beta1/tx");
const query_18 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_9 = require("./types/cosmos/distribution/v1beta1/distribution");
const query_19 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_10 = require("./types/cosmos/distribution/v1beta1/distribution");
const distribution_11 = require("./types/cosmos/distribution/v1beta1/distribution");
const query_20 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_12 = require("./types/cosmos/distribution/v1beta1/distribution");
const tx_14 = require("./types/cosmos/distribution/v1beta1/tx");
const msgTypes = [
    ["/cosmos.distribution.v1beta1.QueryDelegationRewardsResponse", query_1.QueryDelegationRewardsResponse],
    ["/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPool", tx_1.MsgDepositValidatorRewardsPool],
    ["/cosmos.distribution.v1beta1.ValidatorSlashEventRecord", genesis_1.ValidatorSlashEventRecord],
    ["/cosmos.distribution.v1beta1.QueryValidatorCommissionResponse", query_2.QueryValidatorCommissionResponse],
    ["/cosmos.distribution.v1beta1.QueryValidatorSlashesRequest", query_3.QueryValidatorSlashesRequest],
    ["/cosmos.distribution.v1beta1.DelegatorStartingInfo", distribution_1.DelegatorStartingInfo],
    ["/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission", tx_2.MsgWithdrawValidatorCommission],
    ["/cosmos.distribution.v1beta1.ValidatorCurrentRewardsRecord", genesis_2.ValidatorCurrentRewardsRecord],
    ["/cosmos.distribution.v1beta1.QueryDelegatorValidatorsResponse", query_4.QueryDelegatorValidatorsResponse],
    ["/cosmos.distribution.v1beta1.CommunityPoolSpendProposal", distribution_2.CommunityPoolSpendProposal],
    ["/cosmos.distribution.v1beta1.DelegatorWithdrawInfo", genesis_3.DelegatorWithdrawInfo],
    ["/cosmos.distribution.v1beta1.GenesisState", genesis_4.GenesisState],
    ["/cosmos.distribution.v1beta1.QueryCommunityPoolRequest", query_5.QueryCommunityPoolRequest],
    ["/cosmos.distribution.v1beta1.ValidatorAccumulatedCommissionRecord", genesis_5.ValidatorAccumulatedCommissionRecord],
    ["/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse", query_6.QueryDelegationTotalRewardsResponse],
    ["/cosmos.distribution.v1beta1.QueryDelegatorValidatorsRequest", query_7.QueryDelegatorValidatorsRequest],
    ["/cosmos.distribution.v1beta1.ValidatorCurrentRewards", distribution_3.ValidatorCurrentRewards],
    ["/cosmos.distribution.v1beta1.QueryValidatorDistributionInfoRequest", query_8.QueryValidatorDistributionInfoRequest],
    ["/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsRequest", query_9.QueryDelegationTotalRewardsRequest],
    ["/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward", tx_3.MsgWithdrawDelegatorReward],
    ["/cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse", tx_4.MsgFundCommunityPoolResponse],
    ["/cosmos.distribution.v1beta1.MsgUpdateParamsResponse", tx_5.MsgUpdateParamsResponse],
    ["/cosmos.distribution.v1beta1.Params", distribution_4.Params],
    ["/cosmos.distribution.v1beta1.QueryDelegationRewardsRequest", query_10.QueryDelegationRewardsRequest],
    ["/cosmos.distribution.v1beta1.QueryCommunityPoolResponse", query_11.QueryCommunityPoolResponse],
    ["/cosmos.distribution.v1beta1.DelegationDelegatorReward", distribution_5.DelegationDelegatorReward],
    ["/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit", distribution_6.CommunityPoolSpendProposalWithDeposit],
    ["/cosmos.distribution.v1beta1.ValidatorOutstandingRewardsRecord", genesis_6.ValidatorOutstandingRewardsRecord],
    ["/cosmos.distribution.v1beta1.QueryValidatorDistributionInfoResponse", query_12.QueryValidatorDistributionInfoResponse],
    ["/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsRequest", query_13.QueryValidatorOutstandingRewardsRequest],
    ["/cosmos.distribution.v1beta1.MsgSetWithdrawAddress", tx_6.MsgSetWithdrawAddress],
    ["/cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse", tx_7.MsgWithdrawDelegatorRewardResponse],
    ["/cosmos.distribution.v1beta1.QueryValidatorCommissionRequest", query_14.QueryValidatorCommissionRequest],
    ["/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse", query_15.QueryValidatorOutstandingRewardsResponse],
    ["/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressResponse", query_16.QueryDelegatorWithdrawAddressResponse],
    ["/cosmos.distribution.v1beta1.MsgCommunityPoolSpendResponse", tx_8.MsgCommunityPoolSpendResponse],
    ["/cosmos.distribution.v1beta1.ValidatorHistoricalRewardsRecord", genesis_7.ValidatorHistoricalRewardsRecord],
    ["/cosmos.distribution.v1beta1.FeePool", distribution_7.FeePool],
    ["/cosmos.distribution.v1beta1.MsgUpdateParams", tx_9.MsgUpdateParams],
    ["/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPoolResponse", tx_10.MsgDepositValidatorRewardsPoolResponse],
    ["/cosmos.distribution.v1beta1.DelegatorStartingInfoRecord", genesis_8.DelegatorStartingInfoRecord],
    ["/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressRequest", query_17.QueryDelegatorWithdrawAddressRequest],
    ["/cosmos.distribution.v1beta1.ValidatorSlashEvent", distribution_8.ValidatorSlashEvent],
    ["/cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse", tx_11.MsgSetWithdrawAddressResponse],
    ["/cosmos.distribution.v1beta1.MsgFundCommunityPool", tx_12.MsgFundCommunityPool],
    ["/cosmos.distribution.v1beta1.MsgCommunityPoolSpend", tx_13.MsgCommunityPoolSpend],
    ["/cosmos.distribution.v1beta1.QueryParamsResponse", query_18.QueryParamsResponse],
    ["/cosmos.distribution.v1beta1.ValidatorHistoricalRewards", distribution_9.ValidatorHistoricalRewards],
    ["/cosmos.distribution.v1beta1.QueryParamsRequest", query_19.QueryParamsRequest],
    ["/cosmos.distribution.v1beta1.ValidatorAccumulatedCommission", distribution_10.ValidatorAccumulatedCommission],
    ["/cosmos.distribution.v1beta1.ValidatorSlashEvents", distribution_11.ValidatorSlashEvents],
    ["/cosmos.distribution.v1beta1.QueryValidatorSlashesResponse", query_20.QueryValidatorSlashesResponse],
    ["/cosmos.distribution.v1beta1.ValidatorOutstandingRewards", distribution_12.ValidatorOutstandingRewards],
    ["/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse", tx_14.MsgWithdrawValidatorCommissionResponse],
];
exports.msgTypes = msgTypes;
