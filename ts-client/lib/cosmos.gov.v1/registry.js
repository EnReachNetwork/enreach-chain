"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const query_1 = require("./types/cosmos/gov/v1/query");
const query_2 = require("./types/cosmos/gov/v1/query");
const query_3 = require("./types/cosmos/gov/v1/query");
const gov_1 = require("./types/cosmos/gov/v1/gov");
const tx_1 = require("./types/cosmos/gov/v1/tx");
const gov_2 = require("./types/cosmos/gov/v1/gov");
const query_4 = require("./types/cosmos/gov/v1/query");
const tx_2 = require("./types/cosmos/gov/v1/tx");
const gov_3 = require("./types/cosmos/gov/v1/gov");
const gov_4 = require("./types/cosmos/gov/v1/gov");
const gov_5 = require("./types/cosmos/gov/v1/gov");
const tx_3 = require("./types/cosmos/gov/v1/tx");
const tx_4 = require("./types/cosmos/gov/v1/tx");
const tx_5 = require("./types/cosmos/gov/v1/tx");
const tx_6 = require("./types/cosmos/gov/v1/tx");
const tx_7 = require("./types/cosmos/gov/v1/tx");
const query_5 = require("./types/cosmos/gov/v1/query");
const query_6 = require("./types/cosmos/gov/v1/query");
const genesis_1 = require("./types/cosmos/gov/v1/genesis");
const tx_8 = require("./types/cosmos/gov/v1/tx");
const gov_6 = require("./types/cosmos/gov/v1/gov");
const tx_9 = require("./types/cosmos/gov/v1/tx");
const gov_7 = require("./types/cosmos/gov/v1/gov");
const query_7 = require("./types/cosmos/gov/v1/query");
const query_8 = require("./types/cosmos/gov/v1/query");
const tx_10 = require("./types/cosmos/gov/v1/tx");
const query_9 = require("./types/cosmos/gov/v1/query");
const query_10 = require("./types/cosmos/gov/v1/query");
const query_11 = require("./types/cosmos/gov/v1/query");
const gov_8 = require("./types/cosmos/gov/v1/gov");
const tx_11 = require("./types/cosmos/gov/v1/tx");
const query_12 = require("./types/cosmos/gov/v1/query");
const query_13 = require("./types/cosmos/gov/v1/query");
const query_14 = require("./types/cosmos/gov/v1/query");
const tx_12 = require("./types/cosmos/gov/v1/tx");
const tx_13 = require("./types/cosmos/gov/v1/tx");
const tx_14 = require("./types/cosmos/gov/v1/tx");
const query_15 = require("./types/cosmos/gov/v1/query");
const query_16 = require("./types/cosmos/gov/v1/query");
const query_17 = require("./types/cosmos/gov/v1/query");
const query_18 = require("./types/cosmos/gov/v1/query");
const gov_9 = require("./types/cosmos/gov/v1/gov");
const msgTypes = [
    ["/cosmos.gov.v1.QueryVoteRequest", query_1.QueryVoteRequest],
    ["/cosmos.gov.v1.QueryDepositResponse", query_2.QueryDepositResponse],
    ["/cosmos.gov.v1.QueryTallyResultRequest", query_3.QueryTallyResultRequest],
    ["/cosmos.gov.v1.TallyResult", gov_1.TallyResult],
    ["/cosmos.gov.v1.MsgVoteWeightedResponse", tx_1.MsgVoteWeightedResponse],
    ["/cosmos.gov.v1.Deposit", gov_2.Deposit],
    ["/cosmos.gov.v1.QueryDepositRequest", query_4.QueryDepositRequest],
    ["/cosmos.gov.v1.MsgDepositResponse", tx_2.MsgDepositResponse],
    ["/cosmos.gov.v1.Params", gov_3.Params],
    ["/cosmos.gov.v1.VotingParams", gov_4.VotingParams],
    ["/cosmos.gov.v1.Vote", gov_5.Vote],
    ["/cosmos.gov.v1.MsgVoteWeighted", tx_3.MsgVoteWeighted],
    ["/cosmos.gov.v1.MsgUpdateParams", tx_4.MsgUpdateParams],
    ["/cosmos.gov.v1.MsgCancelProposal", tx_5.MsgCancelProposal],
    ["/cosmos.gov.v1.MsgCancelProposalResponse", tx_6.MsgCancelProposalResponse],
    ["/cosmos.gov.v1.MsgExecLegacyContent", tx_7.MsgExecLegacyContent],
    ["/cosmos.gov.v1.QueryVoteResponse", query_5.QueryVoteResponse],
    ["/cosmos.gov.v1.QueryConstitutionResponse", query_6.QueryConstitutionResponse],
    ["/cosmos.gov.v1.GenesisState", genesis_1.GenesisState],
    ["/cosmos.gov.v1.MsgDeposit", tx_8.MsgDeposit],
    ["/cosmos.gov.v1.DepositParams", gov_6.DepositParams],
    ["/cosmos.gov.v1.MsgSubmitProposalResponse", tx_9.MsgSubmitProposalResponse],
    ["/cosmos.gov.v1.Proposal", gov_7.Proposal],
    ["/cosmos.gov.v1.QueryVotesRequest", query_7.QueryVotesRequest],
    ["/cosmos.gov.v1.QueryDepositsResponse", query_8.QueryDepositsResponse],
    ["/cosmos.gov.v1.MsgSubmitProposal", tx_10.MsgSubmitProposal],
    ["/cosmos.gov.v1.QueryProposalResponse", query_9.QueryProposalResponse],
    ["/cosmos.gov.v1.QueryParamsRequest", query_10.QueryParamsRequest],
    ["/cosmos.gov.v1.QueryParamsResponse", query_11.QueryParamsResponse],
    ["/cosmos.gov.v1.TallyParams", gov_8.TallyParams],
    ["/cosmos.gov.v1.MsgVoteResponse", tx_11.MsgVoteResponse],
    ["/cosmos.gov.v1.QueryVotesResponse", query_12.QueryVotesResponse],
    ["/cosmos.gov.v1.QueryDepositsRequest", query_13.QueryDepositsRequest],
    ["/cosmos.gov.v1.QueryTallyResultResponse", query_14.QueryTallyResultResponse],
    ["/cosmos.gov.v1.MsgVote", tx_12.MsgVote],
    ["/cosmos.gov.v1.MsgUpdateParamsResponse", tx_13.MsgUpdateParamsResponse],
    ["/cosmos.gov.v1.MsgExecLegacyContentResponse", tx_14.MsgExecLegacyContentResponse],
    ["/cosmos.gov.v1.QueryProposalRequest", query_15.QueryProposalRequest],
    ["/cosmos.gov.v1.QueryProposalsRequest", query_16.QueryProposalsRequest],
    ["/cosmos.gov.v1.QueryProposalsResponse", query_17.QueryProposalsResponse],
    ["/cosmos.gov.v1.QueryConstitutionRequest", query_18.QueryConstitutionRequest],
    ["/cosmos.gov.v1.WeightedVoteOption", gov_9.WeightedVoteOption],
];
exports.msgTypes = msgTypes;
