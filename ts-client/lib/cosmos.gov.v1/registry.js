"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const gov_1 = require("./types/cosmos/gov/v1/gov");
const tx_1 = require("./types/cosmos/gov/v1/tx");
const tx_2 = require("./types/cosmos/gov/v1/tx");
const query_1 = require("./types/cosmos/gov/v1/query");
const tx_3 = require("./types/cosmos/gov/v1/tx");
const genesis_1 = require("./types/cosmos/gov/v1/genesis");
const query_2 = require("./types/cosmos/gov/v1/query");
const query_3 = require("./types/cosmos/gov/v1/query");
const query_4 = require("./types/cosmos/gov/v1/query");
const tx_4 = require("./types/cosmos/gov/v1/tx");
const query_5 = require("./types/cosmos/gov/v1/query");
const tx_5 = require("./types/cosmos/gov/v1/tx");
const query_6 = require("./types/cosmos/gov/v1/query");
const tx_6 = require("./types/cosmos/gov/v1/tx");
const gov_2 = require("./types/cosmos/gov/v1/gov");
const query_7 = require("./types/cosmos/gov/v1/query");
const query_8 = require("./types/cosmos/gov/v1/query");
const query_9 = require("./types/cosmos/gov/v1/query");
const tx_7 = require("./types/cosmos/gov/v1/tx");
const gov_3 = require("./types/cosmos/gov/v1/gov");
const tx_8 = require("./types/cosmos/gov/v1/tx");
const tx_9 = require("./types/cosmos/gov/v1/tx");
const tx_10 = require("./types/cosmos/gov/v1/tx");
const query_10 = require("./types/cosmos/gov/v1/query");
const query_11 = require("./types/cosmos/gov/v1/query");
const query_12 = require("./types/cosmos/gov/v1/query");
const gov_4 = require("./types/cosmos/gov/v1/gov");
const gov_5 = require("./types/cosmos/gov/v1/gov");
const query_13 = require("./types/cosmos/gov/v1/query");
const query_14 = require("./types/cosmos/gov/v1/query");
const query_15 = require("./types/cosmos/gov/v1/query");
const query_16 = require("./types/cosmos/gov/v1/query");
const gov_6 = require("./types/cosmos/gov/v1/gov");
const tx_11 = require("./types/cosmos/gov/v1/tx");
const query_17 = require("./types/cosmos/gov/v1/query");
const tx_12 = require("./types/cosmos/gov/v1/tx");
const tx_13 = require("./types/cosmos/gov/v1/tx");
const gov_7 = require("./types/cosmos/gov/v1/gov");
const gov_8 = require("./types/cosmos/gov/v1/gov");
const query_18 = require("./types/cosmos/gov/v1/query");
const tx_14 = require("./types/cosmos/gov/v1/tx");
const gov_9 = require("./types/cosmos/gov/v1/gov");
const msgTypes = [
    ["/cosmos.gov.v1.Vote", gov_1.Vote],
    ["/cosmos.gov.v1.MsgVoteResponse", tx_1.MsgVoteResponse],
    ["/cosmos.gov.v1.MsgExecLegacyContent", tx_2.MsgExecLegacyContent],
    ["/cosmos.gov.v1.QueryDepositsResponse", query_1.QueryDepositsResponse],
    ["/cosmos.gov.v1.MsgSubmitProposalResponse", tx_3.MsgSubmitProposalResponse],
    ["/cosmos.gov.v1.GenesisState", genesis_1.GenesisState],
    ["/cosmos.gov.v1.QueryProposalResponse", query_2.QueryProposalResponse],
    ["/cosmos.gov.v1.QueryVoteRequest", query_3.QueryVoteRequest],
    ["/cosmos.gov.v1.QueryTallyResultRequest", query_4.QueryTallyResultRequest],
    ["/cosmos.gov.v1.MsgDepositResponse", tx_4.MsgDepositResponse],
    ["/cosmos.gov.v1.QueryConstitutionResponse", query_5.QueryConstitutionResponse],
    ["/cosmos.gov.v1.MsgDeposit", tx_5.MsgDeposit],
    ["/cosmos.gov.v1.QueryParamsResponse", query_6.QueryParamsResponse],
    ["/cosmos.gov.v1.MsgUpdateParams", tx_6.MsgUpdateParams],
    ["/cosmos.gov.v1.Deposit", gov_2.Deposit],
    ["/cosmos.gov.v1.QueryConstitutionRequest", query_7.QueryConstitutionRequest],
    ["/cosmos.gov.v1.QueryVotesResponse", query_8.QueryVotesResponse],
    ["/cosmos.gov.v1.QueryDepositRequest", query_9.QueryDepositRequest],
    ["/cosmos.gov.v1.MsgVoteWeightedResponse", tx_7.MsgVoteWeightedResponse],
    ["/cosmos.gov.v1.Proposal", gov_3.Proposal],
    ["/cosmos.gov.v1.MsgVoteWeighted", tx_8.MsgVoteWeighted],
    ["/cosmos.gov.v1.MsgUpdateParamsResponse", tx_9.MsgUpdateParamsResponse],
    ["/cosmos.gov.v1.MsgCancelProposal", tx_10.MsgCancelProposal],
    ["/cosmos.gov.v1.QueryDepositsRequest", query_10.QueryDepositsRequest],
    ["/cosmos.gov.v1.QueryProposalsRequest", query_11.QueryProposalsRequest],
    ["/cosmos.gov.v1.QueryDepositResponse", query_12.QueryDepositResponse],
    ["/cosmos.gov.v1.Params", gov_4.Params],
    ["/cosmos.gov.v1.VotingParams", gov_5.VotingParams],
    ["/cosmos.gov.v1.QueryProposalRequest", query_13.QueryProposalRequest],
    ["/cosmos.gov.v1.QueryParamsRequest", query_14.QueryParamsRequest],
    ["/cosmos.gov.v1.QueryProposalsResponse", query_15.QueryProposalsResponse],
    ["/cosmos.gov.v1.QueryVoteResponse", query_16.QueryVoteResponse],
    ["/cosmos.gov.v1.DepositParams", gov_6.DepositParams],
    ["/cosmos.gov.v1.MsgSubmitProposal", tx_11.MsgSubmitProposal],
    ["/cosmos.gov.v1.QueryTallyResultResponse", query_17.QueryTallyResultResponse],
    ["/cosmos.gov.v1.MsgVote", tx_12.MsgVote],
    ["/cosmos.gov.v1.MsgCancelProposalResponse", tx_13.MsgCancelProposalResponse],
    ["/cosmos.gov.v1.TallyParams", gov_7.TallyParams],
    ["/cosmos.gov.v1.TallyResult", gov_8.TallyResult],
    ["/cosmos.gov.v1.QueryVotesRequest", query_18.QueryVotesRequest],
    ["/cosmos.gov.v1.MsgExecLegacyContentResponse", tx_14.MsgExecLegacyContentResponse],
    ["/cosmos.gov.v1.WeightedVoteOption", gov_9.WeightedVoteOption],
];
exports.msgTypes = msgTypes;
