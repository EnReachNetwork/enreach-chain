"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/cosmos/gov/v1/tx");
const query_1 = require("./types/cosmos/gov/v1/query");
const query_2 = require("./types/cosmos/gov/v1/query");
const tx_2 = require("./types/cosmos/gov/v1/tx");
const query_3 = require("./types/cosmos/gov/v1/query");
const tx_3 = require("./types/cosmos/gov/v1/tx");
const gov_1 = require("./types/cosmos/gov/v1/gov");
const query_4 = require("./types/cosmos/gov/v1/query");
const query_5 = require("./types/cosmos/gov/v1/query");
const query_6 = require("./types/cosmos/gov/v1/query");
const tx_4 = require("./types/cosmos/gov/v1/tx");
const query_7 = require("./types/cosmos/gov/v1/query");
const tx_5 = require("./types/cosmos/gov/v1/tx");
const gov_2 = require("./types/cosmos/gov/v1/gov");
const query_8 = require("./types/cosmos/gov/v1/query");
const tx_6 = require("./types/cosmos/gov/v1/tx");
const tx_7 = require("./types/cosmos/gov/v1/tx");
const query_9 = require("./types/cosmos/gov/v1/query");
const tx_8 = require("./types/cosmos/gov/v1/tx");
const gov_3 = require("./types/cosmos/gov/v1/gov");
const query_10 = require("./types/cosmos/gov/v1/query");
const tx_9 = require("./types/cosmos/gov/v1/tx");
const gov_4 = require("./types/cosmos/gov/v1/gov");
const query_11 = require("./types/cosmos/gov/v1/query");
const gov_5 = require("./types/cosmos/gov/v1/gov");
const query_12 = require("./types/cosmos/gov/v1/query");
const gov_6 = require("./types/cosmos/gov/v1/gov");
const gov_7 = require("./types/cosmos/gov/v1/gov");
const tx_10 = require("./types/cosmos/gov/v1/tx");
const query_13 = require("./types/cosmos/gov/v1/query");
const query_14 = require("./types/cosmos/gov/v1/query");
const tx_11 = require("./types/cosmos/gov/v1/tx");
const tx_12 = require("./types/cosmos/gov/v1/tx");
const query_15 = require("./types/cosmos/gov/v1/query");
const gov_8 = require("./types/cosmos/gov/v1/gov");
const query_16 = require("./types/cosmos/gov/v1/query");
const query_17 = require("./types/cosmos/gov/v1/query");
const tx_13 = require("./types/cosmos/gov/v1/tx");
const gov_9 = require("./types/cosmos/gov/v1/gov");
const tx_14 = require("./types/cosmos/gov/v1/tx");
const query_18 = require("./types/cosmos/gov/v1/query");
const genesis_1 = require("./types/cosmos/gov/v1/genesis");
const msgTypes = [
    ["/cosmos.gov.v1.MsgCancelProposalResponse", tx_1.MsgCancelProposalResponse],
    ["/cosmos.gov.v1.QueryParamsRequest", query_1.QueryParamsRequest],
    ["/cosmos.gov.v1.QueryProposalsRequest", query_2.QueryProposalsRequest],
    ["/cosmos.gov.v1.MsgUpdateParamsResponse", tx_2.MsgUpdateParamsResponse],
    ["/cosmos.gov.v1.QueryProposalRequest", query_3.QueryProposalRequest],
    ["/cosmos.gov.v1.MsgExecLegacyContentResponse", tx_3.MsgExecLegacyContentResponse],
    ["/cosmos.gov.v1.Params", gov_1.Params],
    ["/cosmos.gov.v1.QueryDepositsRequest", query_4.QueryDepositsRequest],
    ["/cosmos.gov.v1.QueryParamsResponse", query_5.QueryParamsResponse],
    ["/cosmos.gov.v1.QueryDepositsResponse", query_6.QueryDepositsResponse],
    ["/cosmos.gov.v1.MsgSubmitProposalResponse", tx_4.MsgSubmitProposalResponse],
    ["/cosmos.gov.v1.QueryVoteResponse", query_7.QueryVoteResponse],
    ["/cosmos.gov.v1.MsgVoteWeightedResponse", tx_5.MsgVoteWeightedResponse],
    ["/cosmos.gov.v1.Deposit", gov_2.Deposit],
    ["/cosmos.gov.v1.QueryTallyResultResponse", query_8.QueryTallyResultResponse],
    ["/cosmos.gov.v1.MsgVoteResponse", tx_6.MsgVoteResponse],
    ["/cosmos.gov.v1.MsgDeposit", tx_7.MsgDeposit],
    ["/cosmos.gov.v1.QueryConstitutionResponse", query_9.QueryConstitutionResponse],
    ["/cosmos.gov.v1.MsgVoteWeighted", tx_8.MsgVoteWeighted],
    ["/cosmos.gov.v1.DepositParams", gov_3.DepositParams],
    ["/cosmos.gov.v1.QueryVotesResponse", query_10.QueryVotesResponse],
    ["/cosmos.gov.v1.MsgVote", tx_9.MsgVote],
    ["/cosmos.gov.v1.WeightedVoteOption", gov_4.WeightedVoteOption],
    ["/cosmos.gov.v1.QueryProposalsResponse", query_11.QueryProposalsResponse],
    ["/cosmos.gov.v1.TallyParams", gov_5.TallyParams],
    ["/cosmos.gov.v1.QueryConstitutionRequest", query_12.QueryConstitutionRequest],
    ["/cosmos.gov.v1.Proposal", gov_6.Proposal],
    ["/cosmos.gov.v1.TallyResult", gov_7.TallyResult],
    ["/cosmos.gov.v1.MsgSubmitProposal", tx_10.MsgSubmitProposal],
    ["/cosmos.gov.v1.QueryVoteRequest", query_13.QueryVoteRequest],
    ["/cosmos.gov.v1.QueryDepositRequest", query_14.QueryDepositRequest],
    ["/cosmos.gov.v1.MsgDepositResponse", tx_11.MsgDepositResponse],
    ["/cosmos.gov.v1.MsgUpdateParams", tx_12.MsgUpdateParams],
    ["/cosmos.gov.v1.QueryProposalResponse", query_15.QueryProposalResponse],
    ["/cosmos.gov.v1.VotingParams", gov_8.VotingParams],
    ["/cosmos.gov.v1.QueryDepositResponse", query_16.QueryDepositResponse],
    ["/cosmos.gov.v1.QueryVotesRequest", query_17.QueryVotesRequest],
    ["/cosmos.gov.v1.MsgCancelProposal", tx_13.MsgCancelProposal],
    ["/cosmos.gov.v1.Vote", gov_9.Vote],
    ["/cosmos.gov.v1.MsgExecLegacyContent", tx_14.MsgExecLegacyContent],
    ["/cosmos.gov.v1.QueryTallyResultRequest", query_18.QueryTallyResultRequest],
    ["/cosmos.gov.v1.GenesisState", genesis_1.GenesisState],
];
exports.msgTypes = msgTypes;
