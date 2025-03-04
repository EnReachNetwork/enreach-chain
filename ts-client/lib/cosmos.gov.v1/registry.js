"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/cosmos/gov/v1/tx");
const query_1 = require("./types/cosmos/gov/v1/query");
const gov_1 = require("./types/cosmos/gov/v1/gov");
const tx_2 = require("./types/cosmos/gov/v1/tx");
const gov_2 = require("./types/cosmos/gov/v1/gov");
const tx_3 = require("./types/cosmos/gov/v1/tx");
const tx_4 = require("./types/cosmos/gov/v1/tx");
const tx_5 = require("./types/cosmos/gov/v1/tx");
const tx_6 = require("./types/cosmos/gov/v1/tx");
const query_2 = require("./types/cosmos/gov/v1/query");
const gov_3 = require("./types/cosmos/gov/v1/gov");
const query_3 = require("./types/cosmos/gov/v1/query");
const query_4 = require("./types/cosmos/gov/v1/query");
const tx_7 = require("./types/cosmos/gov/v1/tx");
const query_5 = require("./types/cosmos/gov/v1/query");
const tx_8 = require("./types/cosmos/gov/v1/tx");
const gov_4 = require("./types/cosmos/gov/v1/gov");
const tx_9 = require("./types/cosmos/gov/v1/tx");
const query_6 = require("./types/cosmos/gov/v1/query");
const query_7 = require("./types/cosmos/gov/v1/query");
const query_8 = require("./types/cosmos/gov/v1/query");
const query_9 = require("./types/cosmos/gov/v1/query");
const query_10 = require("./types/cosmos/gov/v1/query");
const tx_10 = require("./types/cosmos/gov/v1/tx");
const tx_11 = require("./types/cosmos/gov/v1/tx");
const gov_5 = require("./types/cosmos/gov/v1/gov");
const gov_6 = require("./types/cosmos/gov/v1/gov");
const tx_12 = require("./types/cosmos/gov/v1/tx");
const tx_13 = require("./types/cosmos/gov/v1/tx");
const query_11 = require("./types/cosmos/gov/v1/query");
const gov_7 = require("./types/cosmos/gov/v1/gov");
const tx_14 = require("./types/cosmos/gov/v1/tx");
const query_12 = require("./types/cosmos/gov/v1/query");
const query_13 = require("./types/cosmos/gov/v1/query");
const query_14 = require("./types/cosmos/gov/v1/query");
const gov_8 = require("./types/cosmos/gov/v1/gov");
const genesis_1 = require("./types/cosmos/gov/v1/genesis");
const query_15 = require("./types/cosmos/gov/v1/query");
const query_16 = require("./types/cosmos/gov/v1/query");
const query_17 = require("./types/cosmos/gov/v1/query");
const query_18 = require("./types/cosmos/gov/v1/query");
const gov_9 = require("./types/cosmos/gov/v1/gov");
const msgTypes = [
    ["/cosmos.gov.v1.MsgSubmitProposalResponse", tx_1.MsgSubmitProposalResponse],
    ["/cosmos.gov.v1.QueryDepositRequest", query_1.QueryDepositRequest],
    ["/cosmos.gov.v1.Params", gov_1.Params],
    ["/cosmos.gov.v1.MsgSubmitProposal", tx_2.MsgSubmitProposal],
    ["/cosmos.gov.v1.VotingParams", gov_2.VotingParams],
    ["/cosmos.gov.v1.MsgVoteWeighted", tx_3.MsgVoteWeighted],
    ["/cosmos.gov.v1.MsgDepositResponse", tx_4.MsgDepositResponse],
    ["/cosmos.gov.v1.MsgExecLegacyContent", tx_5.MsgExecLegacyContent],
    ["/cosmos.gov.v1.MsgVoteResponse", tx_6.MsgVoteResponse],
    ["/cosmos.gov.v1.QueryProposalsRequest", query_2.QueryProposalsRequest],
    ["/cosmos.gov.v1.Vote", gov_3.Vote],
    ["/cosmos.gov.v1.QueryVoteRequest", query_3.QueryVoteRequest],
    ["/cosmos.gov.v1.QueryVotesRequest", query_4.QueryVotesRequest],
    ["/cosmos.gov.v1.MsgVoteWeightedResponse", tx_7.MsgVoteWeightedResponse],
    ["/cosmos.gov.v1.QueryProposalsResponse", query_5.QueryProposalsResponse],
    ["/cosmos.gov.v1.MsgVote", tx_8.MsgVote],
    ["/cosmos.gov.v1.Proposal", gov_4.Proposal],
    ["/cosmos.gov.v1.MsgUpdateParams", tx_9.MsgUpdateParams],
    ["/cosmos.gov.v1.QueryParamsRequest", query_6.QueryParamsRequest],
    ["/cosmos.gov.v1.QueryParamsResponse", query_7.QueryParamsResponse],
    ["/cosmos.gov.v1.QueryProposalResponse", query_8.QueryProposalResponse],
    ["/cosmos.gov.v1.QueryVoteResponse", query_9.QueryVoteResponse],
    ["/cosmos.gov.v1.QueryDepositsRequest", query_10.QueryDepositsRequest],
    ["/cosmos.gov.v1.MsgCancelProposalResponse", tx_10.MsgCancelProposalResponse],
    ["/cosmos.gov.v1.MsgCancelProposal", tx_11.MsgCancelProposal],
    ["/cosmos.gov.v1.DepositParams", gov_5.DepositParams],
    ["/cosmos.gov.v1.TallyResult", gov_6.TallyResult],
    ["/cosmos.gov.v1.MsgExecLegacyContentResponse", tx_12.MsgExecLegacyContentResponse],
    ["/cosmos.gov.v1.MsgUpdateParamsResponse", tx_13.MsgUpdateParamsResponse],
    ["/cosmos.gov.v1.QueryTallyResultRequest", query_11.QueryTallyResultRequest],
    ["/cosmos.gov.v1.TallyParams", gov_7.TallyParams],
    ["/cosmos.gov.v1.MsgDeposit", tx_14.MsgDeposit],
    ["/cosmos.gov.v1.QueryConstitutionRequest", query_12.QueryConstitutionRequest],
    ["/cosmos.gov.v1.QueryDepositsResponse", query_13.QueryDepositsResponse],
    ["/cosmos.gov.v1.QueryTallyResultResponse", query_14.QueryTallyResultResponse],
    ["/cosmos.gov.v1.Deposit", gov_8.Deposit],
    ["/cosmos.gov.v1.GenesisState", genesis_1.GenesisState],
    ["/cosmos.gov.v1.QueryProposalRequest", query_15.QueryProposalRequest],
    ["/cosmos.gov.v1.QueryVotesResponse", query_16.QueryVotesResponse],
    ["/cosmos.gov.v1.QueryConstitutionResponse", query_17.QueryConstitutionResponse],
    ["/cosmos.gov.v1.QueryDepositResponse", query_18.QueryDepositResponse],
    ["/cosmos.gov.v1.WeightedVoteOption", gov_9.WeightedVoteOption],
];
exports.msgTypes = msgTypes;
