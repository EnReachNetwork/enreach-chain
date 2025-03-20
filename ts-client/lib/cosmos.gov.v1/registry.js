"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const query_1 = require("./types/cosmos/gov/v1/query");
const query_2 = require("./types/cosmos/gov/v1/query");
const query_3 = require("./types/cosmos/gov/v1/query");
const tx_1 = require("./types/cosmos/gov/v1/tx");
const query_4 = require("./types/cosmos/gov/v1/query");
const gov_1 = require("./types/cosmos/gov/v1/gov");
const tx_2 = require("./types/cosmos/gov/v1/tx");
const query_5 = require("./types/cosmos/gov/v1/query");
const query_6 = require("./types/cosmos/gov/v1/query");
const query_7 = require("./types/cosmos/gov/v1/query");
const tx_3 = require("./types/cosmos/gov/v1/tx");
const query_8 = require("./types/cosmos/gov/v1/query");
const query_9 = require("./types/cosmos/gov/v1/query");
const gov_2 = require("./types/cosmos/gov/v1/gov");
const query_10 = require("./types/cosmos/gov/v1/query");
const query_11 = require("./types/cosmos/gov/v1/query");
const query_12 = require("./types/cosmos/gov/v1/query");
const tx_4 = require("./types/cosmos/gov/v1/tx");
const query_13 = require("./types/cosmos/gov/v1/query");
const query_14 = require("./types/cosmos/gov/v1/query");
const query_15 = require("./types/cosmos/gov/v1/query");
const tx_5 = require("./types/cosmos/gov/v1/tx");
const gov_3 = require("./types/cosmos/gov/v1/gov");
const tx_6 = require("./types/cosmos/gov/v1/tx");
const query_16 = require("./types/cosmos/gov/v1/query");
const query_17 = require("./types/cosmos/gov/v1/query");
const tx_7 = require("./types/cosmos/gov/v1/tx");
const gov_4 = require("./types/cosmos/gov/v1/gov");
const gov_5 = require("./types/cosmos/gov/v1/gov");
const tx_8 = require("./types/cosmos/gov/v1/tx");
const tx_9 = require("./types/cosmos/gov/v1/tx");
const tx_10 = require("./types/cosmos/gov/v1/tx");
const tx_11 = require("./types/cosmos/gov/v1/tx");
const gov_6 = require("./types/cosmos/gov/v1/gov");
const genesis_1 = require("./types/cosmos/gov/v1/genesis");
const gov_7 = require("./types/cosmos/gov/v1/gov");
const tx_12 = require("./types/cosmos/gov/v1/tx");
const query_18 = require("./types/cosmos/gov/v1/query");
const tx_13 = require("./types/cosmos/gov/v1/tx");
const tx_14 = require("./types/cosmos/gov/v1/tx");
const gov_8 = require("./types/cosmos/gov/v1/gov");
const gov_9 = require("./types/cosmos/gov/v1/gov");
const msgTypes = [
    ["/cosmos.gov.v1.QueryProposalResponse", query_1.QueryProposalResponse],
    ["/cosmos.gov.v1.QueryVoteResponse", query_2.QueryVoteResponse],
    ["/cosmos.gov.v1.QueryConstitutionResponse", query_3.QueryConstitutionResponse],
    ["/cosmos.gov.v1.MsgDepositResponse", tx_1.MsgDepositResponse],
    ["/cosmos.gov.v1.QueryProposalsRequest", query_4.QueryProposalsRequest],
    ["/cosmos.gov.v1.Deposit", gov_1.Deposit],
    ["/cosmos.gov.v1.MsgUpdateParamsResponse", tx_2.MsgUpdateParamsResponse],
    ["/cosmos.gov.v1.QueryVotesRequest", query_5.QueryVotesRequest],
    ["/cosmos.gov.v1.QueryDepositRequest", query_6.QueryDepositRequest],
    ["/cosmos.gov.v1.QueryDepositsResponse", query_7.QueryDepositsResponse],
    ["/cosmos.gov.v1.MsgExecLegacyContent", tx_3.MsgExecLegacyContent],
    ["/cosmos.gov.v1.QueryTallyResultRequest", query_8.QueryTallyResultRequest],
    ["/cosmos.gov.v1.QueryTallyResultResponse", query_9.QueryTallyResultResponse],
    ["/cosmos.gov.v1.DepositParams", gov_2.DepositParams],
    ["/cosmos.gov.v1.QueryDepositResponse", query_10.QueryDepositResponse],
    ["/cosmos.gov.v1.QueryVoteRequest", query_11.QueryVoteRequest],
    ["/cosmos.gov.v1.QueryParamsResponse", query_12.QueryParamsResponse],
    ["/cosmos.gov.v1.MsgCancelProposalResponse", tx_4.MsgCancelProposalResponse],
    ["/cosmos.gov.v1.QueryVotesResponse", query_13.QueryVotesResponse],
    ["/cosmos.gov.v1.QueryParamsRequest", query_14.QueryParamsRequest],
    ["/cosmos.gov.v1.QueryDepositsRequest", query_15.QueryDepositsRequest],
    ["/cosmos.gov.v1.MsgUpdateParams", tx_5.MsgUpdateParams],
    ["/cosmos.gov.v1.Params", gov_3.Params],
    ["/cosmos.gov.v1.MsgExecLegacyContentResponse", tx_6.MsgExecLegacyContentResponse],
    ["/cosmos.gov.v1.QueryProposalRequest", query_16.QueryProposalRequest],
    ["/cosmos.gov.v1.QueryProposalsResponse", query_17.QueryProposalsResponse],
    ["/cosmos.gov.v1.MsgSubmitProposalResponse", tx_7.MsgSubmitProposalResponse],
    ["/cosmos.gov.v1.VotingParams", gov_4.VotingParams],
    ["/cosmos.gov.v1.TallyParams", gov_5.TallyParams],
    ["/cosmos.gov.v1.MsgVoteWeighted", tx_8.MsgVoteWeighted],
    ["/cosmos.gov.v1.MsgVoteWeightedResponse", tx_9.MsgVoteWeightedResponse],
    ["/cosmos.gov.v1.MsgVote", tx_10.MsgVote],
    ["/cosmos.gov.v1.MsgCancelProposal", tx_11.MsgCancelProposal],
    ["/cosmos.gov.v1.Vote", gov_6.Vote],
    ["/cosmos.gov.v1.GenesisState", genesis_1.GenesisState],
    ["/cosmos.gov.v1.WeightedVoteOption", gov_7.WeightedVoteOption],
    ["/cosmos.gov.v1.MsgDeposit", tx_12.MsgDeposit],
    ["/cosmos.gov.v1.QueryConstitutionRequest", query_18.QueryConstitutionRequest],
    ["/cosmos.gov.v1.MsgSubmitProposal", tx_13.MsgSubmitProposal],
    ["/cosmos.gov.v1.MsgVoteResponse", tx_14.MsgVoteResponse],
    ["/cosmos.gov.v1.TallyResult", gov_8.TallyResult],
    ["/cosmos.gov.v1.Proposal", gov_9.Proposal],
];
exports.msgTypes = msgTypes;
