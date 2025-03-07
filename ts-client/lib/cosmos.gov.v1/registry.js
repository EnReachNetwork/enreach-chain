"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const genesis_1 = require("./types/cosmos/gov/v1/genesis");
const gov_1 = require("./types/cosmos/gov/v1/gov");
const query_1 = require("./types/cosmos/gov/v1/query");
const query_2 = require("./types/cosmos/gov/v1/query");
const tx_1 = require("./types/cosmos/gov/v1/tx");
const query_3 = require("./types/cosmos/gov/v1/query");
const tx_2 = require("./types/cosmos/gov/v1/tx");
const gov_2 = require("./types/cosmos/gov/v1/gov");
const tx_3 = require("./types/cosmos/gov/v1/tx");
const tx_4 = require("./types/cosmos/gov/v1/tx");
const tx_5 = require("./types/cosmos/gov/v1/tx");
const gov_3 = require("./types/cosmos/gov/v1/gov");
const gov_4 = require("./types/cosmos/gov/v1/gov");
const query_4 = require("./types/cosmos/gov/v1/query");
const query_5 = require("./types/cosmos/gov/v1/query");
const gov_5 = require("./types/cosmos/gov/v1/gov");
const query_6 = require("./types/cosmos/gov/v1/query");
const tx_6 = require("./types/cosmos/gov/v1/tx");
const gov_6 = require("./types/cosmos/gov/v1/gov");
const tx_7 = require("./types/cosmos/gov/v1/tx");
const query_7 = require("./types/cosmos/gov/v1/query");
const query_8 = require("./types/cosmos/gov/v1/query");
const query_9 = require("./types/cosmos/gov/v1/query");
const query_10 = require("./types/cosmos/gov/v1/query");
const query_11 = require("./types/cosmos/gov/v1/query");
const query_12 = require("./types/cosmos/gov/v1/query");
const query_13 = require("./types/cosmos/gov/v1/query");
const tx_8 = require("./types/cosmos/gov/v1/tx");
const gov_7 = require("./types/cosmos/gov/v1/gov");
const gov_8 = require("./types/cosmos/gov/v1/gov");
const gov_9 = require("./types/cosmos/gov/v1/gov");
const query_14 = require("./types/cosmos/gov/v1/query");
const tx_9 = require("./types/cosmos/gov/v1/tx");
const query_15 = require("./types/cosmos/gov/v1/query");
const query_16 = require("./types/cosmos/gov/v1/query");
const query_17 = require("./types/cosmos/gov/v1/query");
const tx_10 = require("./types/cosmos/gov/v1/tx");
const tx_11 = require("./types/cosmos/gov/v1/tx");
const tx_12 = require("./types/cosmos/gov/v1/tx");
const query_18 = require("./types/cosmos/gov/v1/query");
const tx_13 = require("./types/cosmos/gov/v1/tx");
const tx_14 = require("./types/cosmos/gov/v1/tx");
const msgTypes = [
    ["/cosmos.gov.v1.GenesisState", genesis_1.GenesisState],
    ["/cosmos.gov.v1.Deposit", gov_1.Deposit],
    ["/cosmos.gov.v1.QueryConstitutionResponse", query_1.QueryConstitutionResponse],
    ["/cosmos.gov.v1.QueryProposalsRequest", query_2.QueryProposalsRequest],
    ["/cosmos.gov.v1.MsgVoteResponse", tx_1.MsgVoteResponse],
    ["/cosmos.gov.v1.QueryProposalRequest", query_3.QueryProposalRequest],
    ["/cosmos.gov.v1.MsgCancelProposal", tx_2.MsgCancelProposal],
    ["/cosmos.gov.v1.Params", gov_2.Params],
    ["/cosmos.gov.v1.MsgSubmitProposalResponse", tx_3.MsgSubmitProposalResponse],
    ["/cosmos.gov.v1.MsgDeposit", tx_4.MsgDeposit],
    ["/cosmos.gov.v1.MsgSubmitProposal", tx_5.MsgSubmitProposal],
    ["/cosmos.gov.v1.Vote", gov_3.Vote],
    ["/cosmos.gov.v1.DepositParams", gov_4.DepositParams],
    ["/cosmos.gov.v1.QueryVoteResponse", query_4.QueryVoteResponse],
    ["/cosmos.gov.v1.QueryVotesResponse", query_5.QueryVotesResponse],
    ["/cosmos.gov.v1.WeightedVoteOption", gov_5.WeightedVoteOption],
    ["/cosmos.gov.v1.QueryDepositResponse", query_6.QueryDepositResponse],
    ["/cosmos.gov.v1.MsgDepositResponse", tx_6.MsgDepositResponse],
    ["/cosmos.gov.v1.TallyResult", gov_6.TallyResult],
    ["/cosmos.gov.v1.MsgExecLegacyContent", tx_7.MsgExecLegacyContent],
    ["/cosmos.gov.v1.QueryConstitutionRequest", query_7.QueryConstitutionRequest],
    ["/cosmos.gov.v1.QueryVotesRequest", query_8.QueryVotesRequest],
    ["/cosmos.gov.v1.QueryDepositRequest", query_9.QueryDepositRequest],
    ["/cosmos.gov.v1.QueryDepositsResponse", query_10.QueryDepositsResponse],
    ["/cosmos.gov.v1.QueryProposalResponse", query_11.QueryProposalResponse],
    ["/cosmos.gov.v1.QueryParamsResponse", query_12.QueryParamsResponse],
    ["/cosmos.gov.v1.QueryTallyResultRequest", query_13.QueryTallyResultRequest],
    ["/cosmos.gov.v1.MsgUpdateParamsResponse", tx_8.MsgUpdateParamsResponse],
    ["/cosmos.gov.v1.Proposal", gov_7.Proposal],
    ["/cosmos.gov.v1.VotingParams", gov_8.VotingParams],
    ["/cosmos.gov.v1.TallyParams", gov_9.TallyParams],
    ["/cosmos.gov.v1.QueryParamsRequest", query_14.QueryParamsRequest],
    ["/cosmos.gov.v1.MsgVote", tx_9.MsgVote],
    ["/cosmos.gov.v1.QueryVoteRequest", query_15.QueryVoteRequest],
    ["/cosmos.gov.v1.QueryDepositsRequest", query_16.QueryDepositsRequest],
    ["/cosmos.gov.v1.QueryTallyResultResponse", query_17.QueryTallyResultResponse],
    ["/cosmos.gov.v1.MsgExecLegacyContentResponse", tx_10.MsgExecLegacyContentResponse],
    ["/cosmos.gov.v1.MsgVoteWeightedResponse", tx_11.MsgVoteWeightedResponse],
    ["/cosmos.gov.v1.MsgCancelProposalResponse", tx_12.MsgCancelProposalResponse],
    ["/cosmos.gov.v1.QueryProposalsResponse", query_18.QueryProposalsResponse],
    ["/cosmos.gov.v1.MsgVoteWeighted", tx_13.MsgVoteWeighted],
    ["/cosmos.gov.v1.MsgUpdateParams", tx_14.MsgUpdateParams],
];
exports.msgTypes = msgTypes;
