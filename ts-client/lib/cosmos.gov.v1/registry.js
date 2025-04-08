"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const genesis_1 = require("./types/cosmos/gov/v1/genesis");
const query_1 = require("./types/cosmos/gov/v1/query");
const query_2 = require("./types/cosmos/gov/v1/query");
const tx_1 = require("./types/cosmos/gov/v1/tx");
const tx_2 = require("./types/cosmos/gov/v1/tx");
const gov_1 = require("./types/cosmos/gov/v1/gov");
const gov_2 = require("./types/cosmos/gov/v1/gov");
const gov_3 = require("./types/cosmos/gov/v1/gov");
const query_3 = require("./types/cosmos/gov/v1/query");
const tx_3 = require("./types/cosmos/gov/v1/tx");
const gov_4 = require("./types/cosmos/gov/v1/gov");
const tx_4 = require("./types/cosmos/gov/v1/tx");
const gov_5 = require("./types/cosmos/gov/v1/gov");
const query_4 = require("./types/cosmos/gov/v1/query");
const query_5 = require("./types/cosmos/gov/v1/query");
const tx_5 = require("./types/cosmos/gov/v1/tx");
const gov_6 = require("./types/cosmos/gov/v1/gov");
const query_6 = require("./types/cosmos/gov/v1/query");
const query_7 = require("./types/cosmos/gov/v1/query");
const tx_6 = require("./types/cosmos/gov/v1/tx");
const tx_7 = require("./types/cosmos/gov/v1/tx");
const query_8 = require("./types/cosmos/gov/v1/query");
const gov_7 = require("./types/cosmos/gov/v1/gov");
const query_9 = require("./types/cosmos/gov/v1/query");
const query_10 = require("./types/cosmos/gov/v1/query");
const query_11 = require("./types/cosmos/gov/v1/query");
const tx_8 = require("./types/cosmos/gov/v1/tx");
const query_12 = require("./types/cosmos/gov/v1/query");
const gov_8 = require("./types/cosmos/gov/v1/gov");
const tx_9 = require("./types/cosmos/gov/v1/tx");
const tx_10 = require("./types/cosmos/gov/v1/tx");
const tx_11 = require("./types/cosmos/gov/v1/tx");
const gov_9 = require("./types/cosmos/gov/v1/gov");
const tx_12 = require("./types/cosmos/gov/v1/tx");
const tx_13 = require("./types/cosmos/gov/v1/tx");
const tx_14 = require("./types/cosmos/gov/v1/tx");
const query_13 = require("./types/cosmos/gov/v1/query");
const query_14 = require("./types/cosmos/gov/v1/query");
const query_15 = require("./types/cosmos/gov/v1/query");
const query_16 = require("./types/cosmos/gov/v1/query");
const query_17 = require("./types/cosmos/gov/v1/query");
const query_18 = require("./types/cosmos/gov/v1/query");
const msgTypes = [
    ["/cosmos.gov.v1.GenesisState", genesis_1.GenesisState],
    ["/cosmos.gov.v1.QueryConstitutionRequest", query_1.QueryConstitutionRequest],
    ["/cosmos.gov.v1.QueryProposalRequest", query_2.QueryProposalRequest],
    ["/cosmos.gov.v1.MsgSubmitProposalResponse", tx_1.MsgSubmitProposalResponse],
    ["/cosmos.gov.v1.MsgVote", tx_2.MsgVote],
    ["/cosmos.gov.v1.Proposal", gov_1.Proposal],
    ["/cosmos.gov.v1.DepositParams", gov_2.DepositParams],
    ["/cosmos.gov.v1.TallyParams", gov_3.TallyParams],
    ["/cosmos.gov.v1.QueryVoteRequest", query_3.QueryVoteRequest],
    ["/cosmos.gov.v1.MsgDepositResponse", tx_3.MsgDepositResponse],
    ["/cosmos.gov.v1.TallyResult", gov_4.TallyResult],
    ["/cosmos.gov.v1.MsgVoteWeightedResponse", tx_4.MsgVoteWeightedResponse],
    ["/cosmos.gov.v1.Deposit", gov_5.Deposit],
    ["/cosmos.gov.v1.QueryConstitutionResponse", query_4.QueryConstitutionResponse],
    ["/cosmos.gov.v1.QueryVotesRequest", query_5.QueryVotesRequest],
    ["/cosmos.gov.v1.MsgExecLegacyContentResponse", tx_5.MsgExecLegacyContentResponse],
    ["/cosmos.gov.v1.Vote", gov_6.Vote],
    ["/cosmos.gov.v1.QueryVoteResponse", query_6.QueryVoteResponse],
    ["/cosmos.gov.v1.QueryDepositResponse", query_7.QueryDepositResponse],
    ["/cosmos.gov.v1.MsgDeposit", tx_6.MsgDeposit],
    ["/cosmos.gov.v1.MsgUpdateParamsResponse", tx_7.MsgUpdateParamsResponse],
    ["/cosmos.gov.v1.QueryTallyResultRequest", query_8.QueryTallyResultRequest],
    ["/cosmos.gov.v1.WeightedVoteOption", gov_7.WeightedVoteOption],
    ["/cosmos.gov.v1.QueryDepositRequest", query_9.QueryDepositRequest],
    ["/cosmos.gov.v1.QueryParamsResponse", query_10.QueryParamsResponse],
    ["/cosmos.gov.v1.QueryProposalsRequest", query_11.QueryProposalsRequest],
    ["/cosmos.gov.v1.MsgCancelProposal", tx_8.MsgCancelProposal],
    ["/cosmos.gov.v1.QueryTallyResultResponse", query_12.QueryTallyResultResponse],
    ["/cosmos.gov.v1.Params", gov_8.Params],
    ["/cosmos.gov.v1.MsgSubmitProposal", tx_9.MsgSubmitProposal],
    ["/cosmos.gov.v1.MsgUpdateParams", tx_10.MsgUpdateParams],
    ["/cosmos.gov.v1.MsgCancelProposalResponse", tx_11.MsgCancelProposalResponse],
    ["/cosmos.gov.v1.VotingParams", gov_9.VotingParams],
    ["/cosmos.gov.v1.MsgExecLegacyContent", tx_12.MsgExecLegacyContent],
    ["/cosmos.gov.v1.MsgVoteResponse", tx_13.MsgVoteResponse],
    ["/cosmos.gov.v1.MsgVoteWeighted", tx_14.MsgVoteWeighted],
    ["/cosmos.gov.v1.QueryDepositsResponse", query_13.QueryDepositsResponse],
    ["/cosmos.gov.v1.QueryProposalsResponse", query_14.QueryProposalsResponse],
    ["/cosmos.gov.v1.QueryVotesResponse", query_15.QueryVotesResponse],
    ["/cosmos.gov.v1.QueryProposalResponse", query_16.QueryProposalResponse],
    ["/cosmos.gov.v1.QueryParamsRequest", query_17.QueryParamsRequest],
    ["/cosmos.gov.v1.QueryDepositsRequest", query_18.QueryDepositsRequest],
];
exports.msgTypes = msgTypes;
