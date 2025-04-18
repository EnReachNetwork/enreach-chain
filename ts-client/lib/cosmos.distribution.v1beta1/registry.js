"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const distribution_1 = require("./types/cosmos/distribution/v1beta1/distribution");
const query_1 = require("./types/cosmos/distribution/v1beta1/query");
const query_2 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_2 = require("./types/cosmos/distribution/v1beta1/distribution");
const tx_1 = require("./types/cosmos/distribution/v1beta1/tx");
const query_3 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_3 = require("./types/cosmos/distribution/v1beta1/distribution");
const query_4 = require("./types/cosmos/distribution/v1beta1/query");
const query_5 = require("./types/cosmos/distribution/v1beta1/query");
const genesis_1 = require("./types/cosmos/distribution/v1beta1/genesis");
const tx_2 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_3 = require("./types/cosmos/distribution/v1beta1/tx");
const query_6 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_4 = require("./types/cosmos/distribution/v1beta1/distribution");
const query_7 = require("./types/cosmos/distribution/v1beta1/query");
const genesis_2 = require("./types/cosmos/distribution/v1beta1/genesis");
const tx_4 = require("./types/cosmos/distribution/v1beta1/tx");
const distribution_5 = require("./types/cosmos/distribution/v1beta1/distribution");
const distribution_6 = require("./types/cosmos/distribution/v1beta1/distribution");
const genesis_3 = require("./types/cosmos/distribution/v1beta1/genesis");
const tx_5 = require("./types/cosmos/distribution/v1beta1/tx");
const query_8 = require("./types/cosmos/distribution/v1beta1/query");
const query_9 = require("./types/cosmos/distribution/v1beta1/query");
const query_10 = require("./types/cosmos/distribution/v1beta1/query");
const genesis_4 = require("./types/cosmos/distribution/v1beta1/genesis");
const query_11 = require("./types/cosmos/distribution/v1beta1/query");
const query_12 = require("./types/cosmos/distribution/v1beta1/query");
const query_13 = require("./types/cosmos/distribution/v1beta1/query");
const tx_6 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_7 = require("./types/cosmos/distribution/v1beta1/tx");
const query_14 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_7 = require("./types/cosmos/distribution/v1beta1/distribution");
const genesis_5 = require("./types/cosmos/distribution/v1beta1/genesis");
const tx_8 = require("./types/cosmos/distribution/v1beta1/tx");
const distribution_8 = require("./types/cosmos/distribution/v1beta1/distribution");
const query_15 = require("./types/cosmos/distribution/v1beta1/query");
const distribution_9 = require("./types/cosmos/distribution/v1beta1/distribution");
const genesis_6 = require("./types/cosmos/distribution/v1beta1/genesis");
const distribution_10 = require("./types/cosmos/distribution/v1beta1/distribution");
const genesis_7 = require("./types/cosmos/distribution/v1beta1/genesis");
const tx_9 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_10 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_11 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_12 = require("./types/cosmos/distribution/v1beta1/tx");
const distribution_11 = require("./types/cosmos/distribution/v1beta1/distribution");
const distribution_12 = require("./types/cosmos/distribution/v1beta1/distribution");
const tx_13 = require("./types/cosmos/distribution/v1beta1/tx");
const query_16 = require("./types/cosmos/distribution/v1beta1/query");
const query_17 = require("./types/cosmos/distribution/v1beta1/query");
const query_18 = require("./types/cosmos/distribution/v1beta1/query");
const query_19 = require("./types/cosmos/distribution/v1beta1/query");
const query_20 = require("./types/cosmos/distribution/v1beta1/query");
const genesis_8 = require("./types/cosmos/distribution/v1beta1/genesis");
const tx_14 = require("./types/cosmos/distribution/v1beta1/tx");
const msgTypes = [
    ["/cosmos.distribution.v1beta1.CommunityPoolSpendProposal", distribution_1.CommunityPoolSpendProposal],
    ["/cosmos.distribution.v1beta1.QueryParamsRequest", query_1.QueryParamsRequest],
    ["/cosmos.distribution.v1beta1.QueryParamsResponse", query_2.QueryParamsResponse],
    ["/cosmos.distribution.v1beta1.ValidatorOutstandingRewards", distribution_2.ValidatorOutstandingRewards],
    ["/cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse", tx_1.MsgSetWithdrawAddressResponse],
    ["/cosmos.distribution.v1beta1.QueryDelegatorValidatorsResponse", query_3.QueryDelegatorValidatorsResponse],
    ["/cosmos.distribution.v1beta1.ValidatorCurrentRewards", distribution_3.ValidatorCurrentRewards],
    ["/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse", query_4.QueryValidatorOutstandingRewardsResponse],
    ["/cosmos.distribution.v1beta1.QueryCommunityPoolResponse", query_5.QueryCommunityPoolResponse],
    ["/cosmos.distribution.v1beta1.DelegatorStartingInfoRecord", genesis_1.DelegatorStartingInfoRecord],
    ["/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward", tx_2.MsgWithdrawDelegatorReward],
    ["/cosmos.distribution.v1beta1.MsgFundCommunityPool", tx_3.MsgFundCommunityPool],
    ["/cosmos.distribution.v1beta1.QueryValidatorDistributionInfoRequest", query_6.QueryValidatorDistributionInfoRequest],
    ["/cosmos.distribution.v1beta1.ValidatorSlashEvent", distribution_4.ValidatorSlashEvent],
    ["/cosmos.distribution.v1beta1.QueryValidatorSlashesRequest", query_7.QueryValidatorSlashesRequest],
    ["/cosmos.distribution.v1beta1.ValidatorCurrentRewardsRecord", genesis_2.ValidatorCurrentRewardsRecord],
    ["/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPoolResponse", tx_4.MsgDepositValidatorRewardsPoolResponse],
    ["/cosmos.distribution.v1beta1.ValidatorAccumulatedCommission", distribution_5.ValidatorAccumulatedCommission],
    ["/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit", distribution_6.CommunityPoolSpendProposalWithDeposit],
    ["/cosmos.distribution.v1beta1.DelegatorWithdrawInfo", genesis_3.DelegatorWithdrawInfo],
    ["/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPool", tx_5.MsgDepositValidatorRewardsPool],
    ["/cosmos.distribution.v1beta1.QueryValidatorCommissionResponse", query_8.QueryValidatorCommissionResponse],
    ["/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsRequest", query_9.QueryDelegationTotalRewardsRequest],
    ["/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressResponse", query_10.QueryDelegatorWithdrawAddressResponse],
    ["/cosmos.distribution.v1beta1.ValidatorHistoricalRewardsRecord", genesis_4.ValidatorHistoricalRewardsRecord],
    ["/cosmos.distribution.v1beta1.QueryValidatorCommissionRequest", query_11.QueryValidatorCommissionRequest],
    ["/cosmos.distribution.v1beta1.QueryDelegationRewardsRequest", query_12.QueryDelegationRewardsRequest],
    ["/cosmos.distribution.v1beta1.QueryDelegatorValidatorsRequest", query_13.QueryDelegatorValidatorsRequest],
    ["/cosmos.distribution.v1beta1.MsgUpdateParams", tx_6.MsgUpdateParams],
    ["/cosmos.distribution.v1beta1.MsgCommunityPoolSpend", tx_7.MsgCommunityPoolSpend],
    ["/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse", query_14.QueryDelegationTotalRewardsResponse],
    ["/cosmos.distribution.v1beta1.ValidatorSlashEvents", distribution_7.ValidatorSlashEvents],
    ["/cosmos.distribution.v1beta1.ValidatorSlashEventRecord", genesis_5.ValidatorSlashEventRecord],
    ["/cosmos.distribution.v1beta1.MsgSetWithdrawAddress", tx_8.MsgSetWithdrawAddress],
    ["/cosmos.distribution.v1beta1.Params", distribution_8.Params],
    ["/cosmos.distribution.v1beta1.QueryValidatorSlashesResponse", query_15.QueryValidatorSlashesResponse],
    ["/cosmos.distribution.v1beta1.ValidatorHistoricalRewards", distribution_9.ValidatorHistoricalRewards],
    ["/cosmos.distribution.v1beta1.ValidatorAccumulatedCommissionRecord", genesis_6.ValidatorAccumulatedCommissionRecord],
    ["/cosmos.distribution.v1beta1.DelegationDelegatorReward", distribution_10.DelegationDelegatorReward],
    ["/cosmos.distribution.v1beta1.ValidatorOutstandingRewardsRecord", genesis_7.ValidatorOutstandingRewardsRecord],
    ["/cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse", tx_9.MsgWithdrawDelegatorRewardResponse],
    ["/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission", tx_10.MsgWithdrawValidatorCommission],
    ["/cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse", tx_11.MsgFundCommunityPoolResponse],
    ["/cosmos.distribution.v1beta1.MsgUpdateParamsResponse", tx_12.MsgUpdateParamsResponse],
    ["/cosmos.distribution.v1beta1.FeePool", distribution_11.FeePool],
    ["/cosmos.distribution.v1beta1.DelegatorStartingInfo", distribution_12.DelegatorStartingInfo],
    ["/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse", tx_13.MsgWithdrawValidatorCommissionResponse],
    ["/cosmos.distribution.v1beta1.QueryValidatorDistributionInfoResponse", query_16.QueryValidatorDistributionInfoResponse],
    ["/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressRequest", query_17.QueryDelegatorWithdrawAddressRequest],
    ["/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsRequest", query_18.QueryValidatorOutstandingRewardsRequest],
    ["/cosmos.distribution.v1beta1.QueryDelegationRewardsResponse", query_19.QueryDelegationRewardsResponse],
    ["/cosmos.distribution.v1beta1.QueryCommunityPoolRequest", query_20.QueryCommunityPoolRequest],
    ["/cosmos.distribution.v1beta1.GenesisState", genesis_8.GenesisState],
    ["/cosmos.distribution.v1beta1.MsgCommunityPoolSpendResponse", tx_14.MsgCommunityPoolSpendResponse],
];
exports.msgTypes = msgTypes;
