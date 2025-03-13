"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/cosmos/gov/v1/tx");
const query_1 = require("./types/cosmos/gov/v1/query");
const gov_1 = require("./types/cosmos/gov/v1/gov");
const query_2 = require("./types/cosmos/gov/v1/query");
const tx_2 = require("./types/cosmos/gov/v1/tx");
const query_3 = require("./types/cosmos/gov/v1/query");
const query_4 = require("./types/cosmos/gov/v1/query");
const query_5 = require("./types/cosmos/gov/v1/query");
const query_6 = require("./types/cosmos/gov/v1/query");
const query_7 = require("./types/cosmos/gov/v1/query");
const query_8 = require("./types/cosmos/gov/v1/query");
const gov_2 = require("./types/cosmos/gov/v1/gov");
const tx_3 = require("./types/cosmos/gov/v1/tx");
const tx_4 = require("./types/cosmos/gov/v1/tx");
const query_9 = require("./types/cosmos/gov/v1/query");
const query_10 = require("./types/cosmos/gov/v1/query");
const gov_3 = require("./types/cosmos/gov/v1/gov");
const tx_5 = require("./types/cosmos/gov/v1/tx");
const query_11 = require("./types/cosmos/gov/v1/query");
const genesis_1 = require("./types/cosmos/gov/v1/genesis");
const query_12 = require("./types/cosmos/gov/v1/query");
const query_13 = require("./types/cosmos/gov/v1/query");
const query_14 = require("./types/cosmos/gov/v1/query");
const gov_4 = require("./types/cosmos/gov/v1/gov");
const tx_6 = require("./types/cosmos/gov/v1/tx");
const query_15 = require("./types/cosmos/gov/v1/query");
const tx_7 = require("./types/cosmos/gov/v1/tx");
const tx_8 = require("./types/cosmos/gov/v1/tx");
const query_16 = require("./types/cosmos/gov/v1/query");
const gov_5 = require("./types/cosmos/gov/v1/gov");
const tx_9 = require("./types/cosmos/gov/v1/tx");
const gov_6 = require("./types/cosmos/gov/v1/gov");
const gov_7 = require("./types/cosmos/gov/v1/gov");
const tx_10 = require("./types/cosmos/gov/v1/tx");
const tx_11 = require("./types/cosmos/gov/v1/tx");
const query_17 = require("./types/cosmos/gov/v1/query");
const query_18 = require("./types/cosmos/gov/v1/query");
const gov_8 = require("./types/cosmos/gov/v1/gov");
const gov_9 = require("./types/cosmos/gov/v1/gov");
const tx_12 = require("./types/cosmos/gov/v1/tx");
const tx_13 = require("./types/cosmos/gov/v1/tx");
const tx_14 = require("./types/cosmos/gov/v1/tx");
const msgTypes = [
    ["/cosmos.gov.v1.MsgVote", tx_1.MsgVote],
    ["/cosmos.gov.v1.QueryDepositsResponse", query_1.QueryDepositsResponse],
    ["/cosmos.gov.v1.Proposal", gov_1.Proposal],
    ["/cosmos.gov.v1.QueryDepositsRequest", query_2.QueryDepositsRequest],
    ["/cosmos.gov.v1.MsgExecLegacyContent", tx_2.MsgExecLegacyContent],
    ["/cosmos.gov.v1.QueryVoteRequest", query_3.QueryVoteRequest],
    ["/cosmos.gov.v1.QueryVoteResponse", query_4.QueryVoteResponse],
    ["/cosmos.gov.v1.QueryParamsResponse", query_5.QueryParamsResponse],
    ["/cosmos.gov.v1.QueryConstitutionRequest", query_6.QueryConstitutionRequest],
    ["/cosmos.gov.v1.QueryProposalRequest", query_7.QueryProposalRequest],
    ["/cosmos.gov.v1.QueryParamsRequest", query_8.QueryParamsRequest],
    ["/cosmos.gov.v1.Deposit", gov_2.Deposit],
    ["/cosmos.gov.v1.MsgSubmitProposalResponse", tx_3.MsgSubmitProposalResponse],
    ["/cosmos.gov.v1.MsgVoteResponse", tx_4.MsgVoteResponse],
    ["/cosmos.gov.v1.QueryProposalsResponse", query_9.QueryProposalsResponse],
    ["/cosmos.gov.v1.QueryTallyResultResponse", query_10.QueryTallyResultResponse],
    ["/cosmos.gov.v1.DepositParams", gov_3.DepositParams],
    ["/cosmos.gov.v1.MsgDepositResponse", tx_5.MsgDepositResponse],
    ["/cosmos.gov.v1.QueryDepositRequest", query_11.QueryDepositRequest],
    ["/cosmos.gov.v1.GenesisState", genesis_1.GenesisState],
    ["/cosmos.gov.v1.QueryConstitutionResponse", query_12.QueryConstitutionResponse],
    ["/cosmos.gov.v1.QueryProposalResponse", query_13.QueryProposalResponse],
    ["/cosmos.gov.v1.QueryVotesRequest", query_14.QueryVotesRequest],
    ["/cosmos.gov.v1.VotingParams", gov_4.VotingParams],
    ["/cosmos.gov.v1.MsgVoteWeightedResponse", tx_6.MsgVoteWeightedResponse],
    ["/cosmos.gov.v1.QueryVotesResponse", query_15.QueryVotesResponse],
    ["/cosmos.gov.v1.MsgVoteWeighted", tx_7.MsgVoteWeighted],
    ["/cosmos.gov.v1.MsgDeposit", tx_8.MsgDeposit],
    ["/cosmos.gov.v1.QueryDepositResponse", query_16.QueryDepositResponse],
    ["/cosmos.gov.v1.Vote", gov_5.Vote],
    ["/cosmos.gov.v1.MsgSubmitProposal", tx_9.MsgSubmitProposal],
    ["/cosmos.gov.v1.WeightedVoteOption", gov_6.WeightedVoteOption],
    ["/cosmos.gov.v1.Params", gov_7.Params],
    ["/cosmos.gov.v1.MsgUpdateParams", tx_10.MsgUpdateParams],
    ["/cosmos.gov.v1.MsgUpdateParamsResponse", tx_11.MsgUpdateParamsResponse],
    ["/cosmos.gov.v1.QueryProposalsRequest", query_17.QueryProposalsRequest],
    ["/cosmos.gov.v1.QueryTallyResultRequest", query_18.QueryTallyResultRequest],
    ["/cosmos.gov.v1.TallyResult", gov_8.TallyResult],
    ["/cosmos.gov.v1.TallyParams", gov_9.TallyParams],
    ["/cosmos.gov.v1.MsgExecLegacyContentResponse", tx_12.MsgExecLegacyContentResponse],
    ["/cosmos.gov.v1.MsgCancelProposal", tx_13.MsgCancelProposal],
    ["/cosmos.gov.v1.MsgCancelProposalResponse", tx_14.MsgCancelProposalResponse],
];
exports.msgTypes = msgTypes;
