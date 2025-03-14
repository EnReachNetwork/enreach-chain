"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/cosmos/gov/v1/tx");
const query_1 = require("./types/cosmos/gov/v1/query");
const query_2 = require("./types/cosmos/gov/v1/query");
const query_3 = require("./types/cosmos/gov/v1/query");
const query_4 = require("./types/cosmos/gov/v1/query");
const query_5 = require("./types/cosmos/gov/v1/query");
const genesis_1 = require("./types/cosmos/gov/v1/genesis");
const gov_1 = require("./types/cosmos/gov/v1/gov");
const query_6 = require("./types/cosmos/gov/v1/query");
const query_7 = require("./types/cosmos/gov/v1/query");
const tx_2 = require("./types/cosmos/gov/v1/tx");
const tx_3 = require("./types/cosmos/gov/v1/tx");
const gov_2 = require("./types/cosmos/gov/v1/gov");
const query_8 = require("./types/cosmos/gov/v1/query");
const tx_4 = require("./types/cosmos/gov/v1/tx");
const tx_5 = require("./types/cosmos/gov/v1/tx");
const tx_6 = require("./types/cosmos/gov/v1/tx");
const tx_7 = require("./types/cosmos/gov/v1/tx");
const query_9 = require("./types/cosmos/gov/v1/query");
const gov_3 = require("./types/cosmos/gov/v1/gov");
const tx_8 = require("./types/cosmos/gov/v1/tx");
const query_10 = require("./types/cosmos/gov/v1/query");
const query_11 = require("./types/cosmos/gov/v1/query");
const gov_4 = require("./types/cosmos/gov/v1/gov");
const tx_9 = require("./types/cosmos/gov/v1/tx");
const tx_10 = require("./types/cosmos/gov/v1/tx");
const query_12 = require("./types/cosmos/gov/v1/query");
const query_13 = require("./types/cosmos/gov/v1/query");
const query_14 = require("./types/cosmos/gov/v1/query");
const gov_5 = require("./types/cosmos/gov/v1/gov");
const tx_11 = require("./types/cosmos/gov/v1/tx");
const tx_12 = require("./types/cosmos/gov/v1/tx");
const gov_6 = require("./types/cosmos/gov/v1/gov");
const query_15 = require("./types/cosmos/gov/v1/query");
const gov_7 = require("./types/cosmos/gov/v1/gov");
const gov_8 = require("./types/cosmos/gov/v1/gov");
const tx_13 = require("./types/cosmos/gov/v1/tx");
const query_16 = require("./types/cosmos/gov/v1/query");
const query_17 = require("./types/cosmos/gov/v1/query");
const query_18 = require("./types/cosmos/gov/v1/query");
const gov_9 = require("./types/cosmos/gov/v1/gov");
const tx_14 = require("./types/cosmos/gov/v1/tx");
const msgTypes = [
    ["/cosmos.gov.v1.MsgVoteWeightedResponse", tx_1.MsgVoteWeightedResponse],
    ["/cosmos.gov.v1.QueryVotesResponse", query_1.QueryVotesResponse],
    ["/cosmos.gov.v1.QueryDepositResponse", query_2.QueryDepositResponse],
    ["/cosmos.gov.v1.QueryVoteResponse", query_3.QueryVoteResponse],
    ["/cosmos.gov.v1.QueryVotesRequest", query_4.QueryVotesRequest],
    ["/cosmos.gov.v1.QueryDepositsRequest", query_5.QueryDepositsRequest],
    ["/cosmos.gov.v1.GenesisState", genesis_1.GenesisState],
    ["/cosmos.gov.v1.Proposal", gov_1.Proposal],
    ["/cosmos.gov.v1.QueryDepositsResponse", query_6.QueryDepositsResponse],
    ["/cosmos.gov.v1.QueryTallyResultResponse", query_7.QueryTallyResultResponse],
    ["/cosmos.gov.v1.MsgVoteResponse", tx_2.MsgVoteResponse],
    ["/cosmos.gov.v1.MsgUpdateParams", tx_3.MsgUpdateParams],
    ["/cosmos.gov.v1.Params", gov_2.Params],
    ["/cosmos.gov.v1.QueryDepositRequest", query_8.QueryDepositRequest],
    ["/cosmos.gov.v1.MsgSubmitProposalResponse", tx_4.MsgSubmitProposalResponse],
    ["/cosmos.gov.v1.MsgVoteWeighted", tx_5.MsgVoteWeighted],
    ["/cosmos.gov.v1.MsgDeposit", tx_6.MsgDeposit],
    ["/cosmos.gov.v1.MsgExecLegacyContentResponse", tx_7.MsgExecLegacyContentResponse],
    ["/cosmos.gov.v1.QueryConstitutionResponse", query_9.QueryConstitutionResponse],
    ["/cosmos.gov.v1.Vote", gov_3.Vote],
    ["/cosmos.gov.v1.MsgUpdateParamsResponse", tx_8.MsgUpdateParamsResponse],
    ["/cosmos.gov.v1.QueryProposalRequest", query_10.QueryProposalRequest],
    ["/cosmos.gov.v1.QueryVoteRequest", query_11.QueryVoteRequest],
    ["/cosmos.gov.v1.DepositParams", gov_4.DepositParams],
    ["/cosmos.gov.v1.MsgSubmitProposal", tx_9.MsgSubmitProposal],
    ["/cosmos.gov.v1.MsgCancelProposal", tx_10.MsgCancelProposal],
    ["/cosmos.gov.v1.QueryConstitutionRequest", query_12.QueryConstitutionRequest],
    ["/cosmos.gov.v1.QueryProposalsResponse", query_13.QueryProposalsResponse],
    ["/cosmos.gov.v1.QueryProposalResponse", query_14.QueryProposalResponse],
    ["/cosmos.gov.v1.TallyResult", gov_5.TallyResult],
    ["/cosmos.gov.v1.MsgVote", tx_11.MsgVote],
    ["/cosmos.gov.v1.MsgCancelProposalResponse", tx_12.MsgCancelProposalResponse],
    ["/cosmos.gov.v1.WeightedVoteOption", gov_6.WeightedVoteOption],
    ["/cosmos.gov.v1.QueryParamsResponse", query_15.QueryParamsResponse],
    ["/cosmos.gov.v1.VotingParams", gov_7.VotingParams],
    ["/cosmos.gov.v1.TallyParams", gov_8.TallyParams],
    ["/cosmos.gov.v1.MsgExecLegacyContent", tx_13.MsgExecLegacyContent],
    ["/cosmos.gov.v1.QueryParamsRequest", query_16.QueryParamsRequest],
    ["/cosmos.gov.v1.QueryProposalsRequest", query_17.QueryProposalsRequest],
    ["/cosmos.gov.v1.QueryTallyResultRequest", query_18.QueryTallyResultRequest],
    ["/cosmos.gov.v1.Deposit", gov_9.Deposit],
    ["/cosmos.gov.v1.MsgDepositResponse", tx_14.MsgDepositResponse],
];
exports.msgTypes = msgTypes;
