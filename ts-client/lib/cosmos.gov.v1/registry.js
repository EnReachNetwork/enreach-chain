"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const query_1 = require("./types/cosmos/gov/v1/query");
const gov_1 = require("./types/cosmos/gov/v1/gov");
const genesis_1 = require("./types/cosmos/gov/v1/genesis");
const gov_2 = require("./types/cosmos/gov/v1/gov");
const tx_1 = require("./types/cosmos/gov/v1/tx");
const query_2 = require("./types/cosmos/gov/v1/query");
const gov_3 = require("./types/cosmos/gov/v1/gov");
const tx_2 = require("./types/cosmos/gov/v1/tx");
const tx_3 = require("./types/cosmos/gov/v1/tx");
const query_3 = require("./types/cosmos/gov/v1/query");
const query_4 = require("./types/cosmos/gov/v1/query");
const tx_4 = require("./types/cosmos/gov/v1/tx");
const tx_5 = require("./types/cosmos/gov/v1/tx");
const gov_4 = require("./types/cosmos/gov/v1/gov");
const tx_6 = require("./types/cosmos/gov/v1/tx");
const tx_7 = require("./types/cosmos/gov/v1/tx");
const query_5 = require("./types/cosmos/gov/v1/query");
const query_6 = require("./types/cosmos/gov/v1/query");
const query_7 = require("./types/cosmos/gov/v1/query");
const query_8 = require("./types/cosmos/gov/v1/query");
const query_9 = require("./types/cosmos/gov/v1/query");
const query_10 = require("./types/cosmos/gov/v1/query");
const tx_8 = require("./types/cosmos/gov/v1/tx");
const tx_9 = require("./types/cosmos/gov/v1/tx");
const query_11 = require("./types/cosmos/gov/v1/query");
const query_12 = require("./types/cosmos/gov/v1/query");
const query_13 = require("./types/cosmos/gov/v1/query");
const gov_5 = require("./types/cosmos/gov/v1/gov");
const tx_10 = require("./types/cosmos/gov/v1/tx");
const tx_11 = require("./types/cosmos/gov/v1/tx");
const tx_12 = require("./types/cosmos/gov/v1/tx");
const gov_6 = require("./types/cosmos/gov/v1/gov");
const gov_7 = require("./types/cosmos/gov/v1/gov");
const tx_13 = require("./types/cosmos/gov/v1/tx");
const query_14 = require("./types/cosmos/gov/v1/query");
const query_15 = require("./types/cosmos/gov/v1/query");
const query_16 = require("./types/cosmos/gov/v1/query");
const tx_14 = require("./types/cosmos/gov/v1/tx");
const gov_8 = require("./types/cosmos/gov/v1/gov");
const query_17 = require("./types/cosmos/gov/v1/query");
const gov_9 = require("./types/cosmos/gov/v1/gov");
const query_18 = require("./types/cosmos/gov/v1/query");
const msgTypes = [
    ["/cosmos.gov.v1.QueryProposalRequest", query_1.QueryProposalRequest],
    ["/cosmos.gov.v1.Deposit", gov_1.Deposit],
    ["/cosmos.gov.v1.GenesisState", genesis_1.GenesisState],
    ["/cosmos.gov.v1.Proposal", gov_2.Proposal],
    ["/cosmos.gov.v1.MsgSubmitProposalResponse", tx_1.MsgSubmitProposalResponse],
    ["/cosmos.gov.v1.QueryDepositRequest", query_2.QueryDepositRequest],
    ["/cosmos.gov.v1.TallyResult", gov_3.TallyResult],
    ["/cosmos.gov.v1.MsgExecLegacyContent", tx_2.MsgExecLegacyContent],
    ["/cosmos.gov.v1.MsgSubmitProposal", tx_3.MsgSubmitProposal],
    ["/cosmos.gov.v1.QueryConstitutionRequest", query_3.QueryConstitutionRequest],
    ["/cosmos.gov.v1.QueryVotesResponse", query_4.QueryVotesResponse],
    ["/cosmos.gov.v1.MsgVote", tx_4.MsgVote],
    ["/cosmos.gov.v1.MsgDepositResponse", tx_5.MsgDepositResponse],
    ["/cosmos.gov.v1.Params", gov_4.Params],
    ["/cosmos.gov.v1.MsgExecLegacyContentResponse", tx_6.MsgExecLegacyContentResponse],
    ["/cosmos.gov.v1.MsgDeposit", tx_7.MsgDeposit],
    ["/cosmos.gov.v1.QueryProposalsResponse", query_5.QueryProposalsResponse],
    ["/cosmos.gov.v1.QueryParamsResponse", query_6.QueryParamsResponse],
    ["/cosmos.gov.v1.QueryDepositsRequest", query_7.QueryDepositsRequest],
    ["/cosmos.gov.v1.QueryVoteRequest", query_8.QueryVoteRequest],
    ["/cosmos.gov.v1.QueryVotesRequest", query_9.QueryVotesRequest],
    ["/cosmos.gov.v1.QueryTallyResultResponse", query_10.QueryTallyResultResponse],
    ["/cosmos.gov.v1.MsgVoteWeightedResponse", tx_8.MsgVoteWeightedResponse],
    ["/cosmos.gov.v1.MsgUpdateParams", tx_9.MsgUpdateParams],
    ["/cosmos.gov.v1.QueryConstitutionResponse", query_11.QueryConstitutionResponse],
    ["/cosmos.gov.v1.QueryProposalsRequest", query_12.QueryProposalsRequest],
    ["/cosmos.gov.v1.QueryVoteResponse", query_13.QueryVoteResponse],
    ["/cosmos.gov.v1.Vote", gov_5.Vote],
    ["/cosmos.gov.v1.MsgUpdateParamsResponse", tx_10.MsgUpdateParamsResponse],
    ["/cosmos.gov.v1.MsgCancelProposal", tx_11.MsgCancelProposal],
    ["/cosmos.gov.v1.MsgCancelProposalResponse", tx_12.MsgCancelProposalResponse],
    ["/cosmos.gov.v1.DepositParams", gov_6.DepositParams],
    ["/cosmos.gov.v1.TallyParams", gov_7.TallyParams],
    ["/cosmos.gov.v1.MsgVoteResponse", tx_13.MsgVoteResponse],
    ["/cosmos.gov.v1.QueryDepositResponse", query_14.QueryDepositResponse],
    ["/cosmos.gov.v1.QueryProposalResponse", query_15.QueryProposalResponse],
    ["/cosmos.gov.v1.QueryTallyResultRequest", query_16.QueryTallyResultRequest],
    ["/cosmos.gov.v1.MsgVoteWeighted", tx_14.MsgVoteWeighted],
    ["/cosmos.gov.v1.VotingParams", gov_8.VotingParams],
    ["/cosmos.gov.v1.QueryParamsRequest", query_17.QueryParamsRequest],
    ["/cosmos.gov.v1.WeightedVoteOption", gov_9.WeightedVoteOption],
    ["/cosmos.gov.v1.QueryDepositsResponse", query_18.QueryDepositsResponse],
];
exports.msgTypes = msgTypes;
